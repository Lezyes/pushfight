(ns pushfight.core
  (:require [clojure.pprint :refer [pprint]]))


(def piece-options {:type #{:square :round}
                    :team #{:black :white}})


(def cell-options {:type #{:void :wall :floor}
                   :piece #{{:keys [:type :team]} nil}
                   :anchored #{true false}})


(def floor-cell {:type :floor
                 :piece nil
                 :anchored false})


(def wall-cell {:type :wall
                :anchored false})


(def void-cell {:type :void
                :anchored false})


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

(-> board
  (update-in [4 1] place-piece white-round)
  (update-in [4 2] place-piece white-square)
  (update-in [4 3] place-piece white-square)
  (update-in [4 4] place-piece white-round)
  (update-in [3 3] place-piece white-square)
  
  (update-in [5 1] place-piece black-round)
  (update-in [5 2] place-piece black-square)
  (update-in [5 3] place-piece black-square)
  (update-in [5 4] place-piece black-round)
  (update-in [6 2] place-piece black-square))




(defn print-board [board]
  (map (fn [row] (map (fn [cell] (let [type (:type cell)
                                       team (:team cell)]
                                   (cond 
                                     (= type (:type floor-cell)) "🔲"
                                     (= type (:type wall-cell))  "🟫"
                                     (= type (:type void-cell))  "⬛"
                                     (and 
                                       (= type (:type black-square))
                                       (= team (:team black-square))) "🟪"
                                     (and 
                                       (= type (:type black-round))
                                       (= team (:team black-round)))  "🟣"
                                     (and 
                                       (= type (:type white-square))
                                       (= team (:team white-square))) "🟩"
                                     (and 
                                       (= type (:type white-round))
                                       (= team (:team white-round)))  "🟢")))
                                     
                   row)) 
    board))

(print-board board)

(+ 1)

(defn get-open-positions [])


(get-in board [0 1])


(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
