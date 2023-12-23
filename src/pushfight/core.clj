(ns pushfight.core
  (:require [clojure.pprint :refer [pprint]]
            [clojure.set :as set]
            [clojure.string :as string]))


(def piece-options {:type #{:square :round}
                    :team #{:black :white}})


(def cell-options {:type #{:void :wall :floor}
                   :piece #{{:keys [:type :team]} nil}
                   :anchored #{true false}})


(def floor-cell {:type :floor
                 :piece nil
                 :anchored false})


(def wall-cell {:type :wall
                :anchored true})


(def void-cell {:type :void})


(def square-piece {:type :square})


(def round-piece {:type :round})


(def black-square (assoc square-piece :team :black))


(def black-round  (assoc round-piece :team :black))


(def white-square (assoc square-piece :team :white))


(def white-round  (assoc round-piece :team :white))


(defn pusher? [{type :type}]
  (= type (:type square-piece)))


(defn void-cell? [{type :type}]
  (= type (:type void-cell)))


(defn wall-cell? [{type :type}]
  (= type (:type wall-cell)))


(defn open-cell? [cell]
  (and 
    (= (:type cell) (:type floor-cell))
    (nil? (:piece cell))))




;; 4x8 board 
;; ⬛ ⬛ 🔲 🔲 🔲 🔲 🔲 ⬛ 
;; 🔲 🔲 🔲 🔲 🔲 🔲 🔲 🔲
;; 🔲 🔲 🔲 🔲 🔲 🔲 🔲 🔲
;; ⬛ 🔲 🔲 🔲 🔲 🔲 ⬛ ⬛
(defn make-standard-board []
  ;;         0           1           2           3           4           5           6           7           8           9
  (vec [[void-cell   void-cell   void-cell   wall-cell   wall-cell   wall-cell   wall-cell   wall-cell   void-cell   void-cell]    ;; 0
        [void-cell   void-cell   void-cell   floor-cell  floor-cell  floor-cell  floor-cell  floor-cell  void-cell   void-cell]    ;; 1
        [void-cell   floor-cell  floor-cell  floor-cell  floor-cell  floor-cell  floor-cell  floor-cell  floor-cell  void-cell]    ;; 2
        [void-cell   floor-cell  floor-cell  floor-cell  floor-cell  floor-cell  floor-cell  floor-cell  floor-cell  void-cell]    ;; 3
        [void-cell   void-cell   floor-cell  floor-cell  floor-cell  floor-cell  floor-cell  void-cell   void-cell   void-cell]    ;; 4
        [void-cell   void-cell   wall-cell   wall-cell   wall-cell   wall-cell   wall-cell   void-cell   void-cell   void-cell]])) ;; 5


(defn place-piece [cell piece]
   (assoc cell :piece piece))


(defn move-piece [board [y1 x1 :as from] dest]
  (let [piece (get-in board [y1 x1 :piece])]
    (-> board
      (update-in from place-piece nil)
      (update-in dest place-piece piece))))


(defn push-piece [board [y1 x1 :as from] dest]
  (let [dir-vec (mapv - dest from)
        source-piece (get-in board [y1 x1 :piece])]
    (loop [board (update-in board from place-piece nil)
           source-piece source-piece
           [y2 x2 :as dest] dest]
      (let [dest-piece (get-in board [y2 x2 :piece])
            new-board (update-in board dest place-piece source-piece)]
         (if (nil? dest-piece)
          new-board
          (recur new-board
                 dest-piece
                 (mapv + dir-vec dest)))))))


(defn can-push? [board from dir-vec]
  (let [next-pos (partial mapv + dir-vec)]
    (loop [pos (next-pos from)]
      (let [cell (get-in board pos)]
        (cond 
          (void-cell? cell) true
          (open-cell? cell) true
          (wall-cell? cell) false
          (:anchored cell) false
          :else (recur (next-pos pos)))))))


(defn valid-push? [board from dest]
  (let [pushing-piece (:piece (get-in board from))
        dest-piece (:piece (get-in board dest))
        dir-vec (mapv - dest from)]
    (cond 
          (not (pusher? pushing-piece))                          "Not a pusher"
          (nil? dest-piece)                                      "Nothing in the destination to push"
          (not (contains? #{[1 0] [-1 0] [0 1] [0 -1]} dir-vec)) "Not in the allowed push boundries"
          (not (can-push? board from dir-vec))                   "Something is blocking this push"
          :else                                                  true)))


(defn get-available-move-pos 
  ([board [y x]]
   (let [visited (atom #{})
         up [(- y 1) x]
         down [(+ y 1) x]
         left [y (- x 1)]
         right [y (+ x 1)]]
     (get-available-move-pos board up visited)
     (get-available-move-pos board down visited)
     (get-available-move-pos board left visited)
     (get-available-move-pos board right visited)
     @visited))
      
  ([board [y x] visited]
   (when (not (contains? @visited [y x]))
     (let [cell (get-in board [y x])
           up [(- y 1) x]
           down [(+ y 1) x]
           left [y (- x 1)]
           right [y (+ x 1)]]
       (when (open-cell? cell)
         (swap! visited set/union #{[y x]})
         (get-available-move-pos board up visited)
         (get-available-move-pos board down visited)
         (get-available-move-pos board left visited)
         (get-available-move-pos board right visited)
         @visited)))))



(defn get-available-push-pos 
  ([board [y x]]
   (let [visited (atom #{})
         up [(- y 1) x]
         down [(+ y 1) x]
         left [y (- x 1)]
         right [y (+ x 1)]]

     (get-available-cells board up visited)
     (get-available-cells board down visited)
     (get-available-cells board left visited)
     (get-available-cells board right visited)
     @visited))
      
  ([board [y x] visited]
   (when (not (contains? @visited [y x]))
     (let [cell (get-in board [y x])
           up [(- y 1) x]
           down [(+ y 1) x]
           left [y (- x 1)]
           right [y (+ x 1)]]
       (when (open-cell? cell)
         (swap! visited set/union #{[y x]})
         (get-available-cells board up visited)
         (get-available-cells board down visited)
         (get-available-cells board left visited)
         (get-available-cells board right visited)
         @visited)))))


(defn board->emoji [board]
  (map (fn [row] (map (fn [cell] (let [type (:type cell)
                                       piece (:piece cell)
                                       anchored (:anchored cell)]
                                   (cond 
                                     (wall-cell? cell)           "🟫"
                                     (void-cell? cell)           "⬛"
                                     (open-cell? cell)           "⬜"
                                     anchored                    "🟥"
                                     (= piece black-square)      "🟪"
                                     (= piece black-round)       "🟣"
                                     (= piece white-square)      "🟩"
                                     (= piece white-round)       "🟢"
                                     :else "🦥")))
                                     
                   row)) 
    board))


(defn pprint-board [board]
  (println (str "  " (string/join "  " (range 10))))
  (let [row-num (atom -1)]
    (println (for [row (board->emoji board)]
               (prn-str (str (string/join " " row) " "(swap! row-num inc))))))
  (println))


(def board (make-standard-board))
; 3 squares 
; 2 rounds 


(def sample-board
  (-> (make-standard-board)
    (update-in [1 4] place-piece white-round)
    (update-in [2 4] place-piece white-square)
    (update-in [3 4] place-piece white-square)
    (update-in [4 4] place-piece white-round)
    (update-in [3 3] place-piece white-square)
    
    (update-in [1 5] place-piece black-round)
    (update-in [2 5] place-piece black-square)
    (update-in [3 5] place-piece black-square)
    (update-in [4 5] place-piece black-round)
    (update-in [2 6] place-piece black-square)))




(pprint-board sample-board)




(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
