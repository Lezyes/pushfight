import numpy as np

import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from PIL import Image


#Core functions

def get_cell(y, x, cell_type):
    # piece = {"Type":["Active", "Passive", "Wall", "Void"],
    #          "Team":["White", "Black"], "Position":{"x":x, "y":y}, "Anchor":[True, False]}
    return {"Type":cell_type, "Position":{"y":y, "x":x}}

def gen_board():
    height = 12
    width = 6 
    board_pos = [(2, 2), (2, 3),
             (3, 1), (3, 2), (3, 3),
             (4, 1), (4, 2), (4, 3), (4, 4),
             (5, 1), (5, 2), (5, 3), (5, 4),
             (6, 1), (6, 2), (6, 3), (6, 4),
             (7, 1), (7, 2), (7, 3), (7, 4),
             (8, 2), (8, 3), (8, 4),
             (9, 2), (9, 3)]
    
    board = np.empty((height,width), dtype = dict)
    for row_i in range(len(board)):
        for column_i in range(len(board[row_i])):
            if (row_i, column_i) in board_pos:
                board[row_i][column_i] = get_cell(row_i, column_i, "Arena") #Part of the Board
            elif ((row_i == 0) or (row_i == height-1) or (column_i == 0) or (column_i == width -1)):
                board[row_i][column_i] = get_cell(row_i, column_i, "Wall")# wall, can't push through
            else:
                board[row_i][column_i] = get_cell(row_i, column_i, "Void")# void, if pushed to - lose 
    
    return board

def copy_board(board):
    cb = np.empty(board.shape, dtype = dict)
    for row_i in range(len(board)):
        for column_i in range(len(board[row_i])):
            cb[row_i][column_i] = {k:v for k,v in board[row_i][column_i].items()}
    return cb
    
def convert_board_to_colors(board):
    convert_dict = {"Void": (96,113,223), "Wall": (179,180,185), "Arena":(235,206,150)}
    cb = np.empty([board.shape[0], board.shape[1], 3], dtype = np.uint8)
    for row_i in range(len(board)):
        for column_i in range(len(board[row_i])):
            cell = board[row_i][column_i]
            if cell["Type"] in convert_dict:
                color_value = convert_dict[cell["Type"]] 
            else:
                team = cell["Team"]
                if team == "White":
                    color_value = (231,127,239) if cell["Type"]=="Passive" else (157,127, 240)
                else:
                    color_value = (38,238,224) if cell["Type"]=="Passive" else (38,238, 131)
            if cell.get("Anchor", False):
                color_value = (249,75,75)
            cb[row_i][column_i] = color_value
    return cb

#Service functions

def find_paths(paths, board, point):#all possible points
    if point in paths:
        return paths
    else:
        y,x = point
        paths.setdefault(point,[])
        for new_y, new_x in [(y-1,x),(y+1,x),(y,x+1),(y,x-1)]:
            if board[new_y][new_x]["Type"] == "Arena":
                new_point = (new_y,new_x)
                paths[point].append(new_point)
        for new_point in paths[point]:
            find_paths(paths, board, new_point)
        return paths           

    
def check_path(board, start, end):
    paths = {}
    return end in find_paths(paths, board, start)


def pushable(cell_dict):
    if (cell_dict["Type"]=="Wall"):
        return False
    elif cell_dict["Type"]=="Void":#Game over
        return True 
    elif cell_dict["Type"]=="Arena":
        return True
    elif cell_dict.get("Anchor"):
        return False
    else:
        return True
    

def check_push(board, pusher, direction, blocks_pushed = None):
    if blocks_pushed == None:
        blocks_pushed = []
    direction_dict = {"up": lambda y,x: (y+1,x),
                     "down": lambda y,x: (y-1,x),
                      "left": lambda y,x: (y,x+1), 
                      "right": lambda y,x: (y,x-1)}
    
    y = pusher["Position"]["y"]
    x = pusher["Position"]["x"]
    
    pushto_location = direction_dict[direction](y,x)
    pushed = board[pushto_location]
    
    blocks_pushed.append((pusher, pushto_location, pushed["Type"]))
    
    if (pushed["Type"]=="Wall"):
        return False, blocks_pushed
    elif pushed["Type"]=="Void":#Game over
        #valid but need to check if same team outside of this function 
        if len(blocks_pushed)>1:
            return True, blocks_pushed 
        else:
            return False, blocks_pushed
    elif pushed["Type"]=="Arena":
        if len(blocks_pushed)>1:
            return True, blocks_pushed
        else:
            return False, blocks_pushed
    else:#it's a game piece
        if pushed.get("Anchor", False):
            return False, blocks_pushed
        return check_push(board, pushed, direction, blocks_pushed)
    
    

#gameplay functions 

def move_no_clear(board, piece, new_loc):
    current_loc = (piece["Position"]["y"], piece["Position"]["x"])
    board[new_loc] = piece
    piece["Position"] = {"y": new_loc[0], "x":new_loc[1]}
    return board
    
def move_and_clear(board, piece, new_loc):
    current_loc = (piece["Position"]["y"], piece["Position"]["x"])
    board = move_no_clear(board, piece, new_loc)
    board[current_loc] = get_cell(current_loc[0], current_loc[1], "Arena")
    return board

def move(board, piece, new_loc):
    current_loc = (piece["Position"]["y"], piece["Position"]["x"])
    piece_type = piece["Type"]
    if piece_type=="Passive" or piece_type == "Active":
        if check_path(board, current_loc, new_loc): 
            return True, move_and_clear(board, piece, new_loc)
    return False, board    

def get_current_anchor(board):
    #Bad, should maybe hold a data dict? 
    for row in board:
        for cell in row:
            if cell.get("Anchor", False):
                return cell

def change_anchor(board, piece):
    anchored_piece = get_current_anchor(board)
    if anchored_piece:
        anchored_piece["Anchor"] = False
    piece["Anchor"] = True
    return piece
    
def push(board, piece, pushto_location):
    direction_dict = {(1,0): "up",
                     (-1,0): "down",
                      (0,1): "left",
                      (0,-1): "right"}
    piece_type = piece["Type"]
    
    current_loc = (piece["Position"]["y"], piece["Position"]["x"])
    vector = (pushto_location[0] - current_loc[0], pushto_location[1] - current_loc[1])
    
    
    if (vector in direction_dict) and (piece_type == "Active"):
        direction = direction_dict[vector]
        legal, pushed_blocks = check_push(board, piece, direction)
        if legal:
            for pushed, pushed_new_loc, cell_type in pushed_blocks[::-1]:
                board = move_no_clear(board, pushed, pushed_new_loc)
            board[current_loc] = get_cell(current_loc[0], current_loc[1], "Arena")
            change_anchor(board, piece)
            return True, board
    return False, board

board = gen_board()
plt.imshow(convert_board_to_colors(board))

board[(5,1)] = {"Type":"Passive", "Position":{"y":5, "x":1}, "Team":"White"}
board[(5,2)] = {"Type":"Passive", "Position":{"y":5, "x":2}, "Team":"White"}
board[(4,2)] = {"Type":"Active", "Position":{"y":4, "x":2}, "Team":"White"}
board[(5,3)] = {"Type":"Active", "Position":{"y":5, "x":3}, "Team":"White"}
board[(5,4)] = {"Type":"Active", "Position":{"y":5, "x":4}, "Team":"White"}

board[(6,1)] = {"Type":"Passive", "Position":{"y":6, "x":1}, "Team":"Black"}
board[(6,2)] = {"Type":"Passive", "Position":{"y":6, "x":2}, "Team":"Black"}
board[(7,3)] = {"Type":"Active", "Position":{"y":7, "x":3}, "Team":"Black"}
board[(6,3)] = {"Type":"Active", "Position":{"y":6, "x":3}, "Team":"Black"}
board[(6,4)] = {"Type":"Active", "Position":{"y":6, "x":4}, "Team":"Black"}


plt.imshow(convert_board_to_colors(board))

legal, board = push(board, board[(6,3)],(5,3))
print(legal)
plt.imshow(convert_board_to_colors(board))

legal, board = move(board, board[(6,1)], (8,3))
print(legal)
plt.imshow(convert_board_to_colors(board))

plt.imshow(convert_board_to_colors(board))
