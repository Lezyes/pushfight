(ns pushfight.core
  (:require [clojure.pprint :refer [pprint]]
            [clojure.set :as set]))

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


(def black-square {:type :sqaure
                   :team :black})


(def black-round  {:type :round
                   :team :black})


(def white-square {:type :sqaure
                   :team :white})


(def white-round  {:type :round
                   :team :white})


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

(def board (make-standard-board))
; 3 squares 
; 2 rounds 

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
           [y1 x1 :as from] from
           [y2 x2 :as dest] dest]
      (let [dest-piece (get-in board [y2 x2 :piece])
            new-board (update-in board dest place-piece source-piece)]
         (if (nil? dest-piece)
          new-board
          (recur new-board
                 dest-piece
                 dest
                 (mapv + dir-vec dest)))))))


(defn open-cell? [cell]
  (and 
    (= (:type cell) (:type floor-cell))
    (nil? (:piece cell))))


(defn get-available-move-pos 
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
                                       anchored? (:anchored cell)]
                                   (cond 
                                     (= type (:type wall-cell))  "🟫"
                                     (= type (:type void-cell))  "⬛"
                                     anchored?                   "🟥"
                                     (= piece black-square)      "🟪"
                                     (= piece black-round)       "🟣"
                                     (= piece white-square)      "🟩"
                                     (= piece white-round)       "🟢"
                                     (= type (:type floor-cell)) "⬜"
                                     :else "🦥")))
                                     
                   row)) 
    board))


(defn pprint-board [board]
  (println)
  (pprint (board->emoji board))
  (println))


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

(conj [ 1 2 ] :type)



(get-available-cells sample-board [3 3])
(pprint-board (move-piece sample-board [3 3] [1 3]))

(def s (atom #{[0 0]}))

(swap! s set/union #{[ 1 1]})

@s
(contains? @s [1 0])


(get-in board [0 1])



(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
