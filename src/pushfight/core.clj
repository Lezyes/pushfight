(ns pushfight.core
  (:gen-class))


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


(get-in board [0 1])


(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
