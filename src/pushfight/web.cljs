(ns pushfight.web
  (:require 
    [reagent.core :as r :refer [with-let]]
    [reagent.dom :as rdom]
    [rewig.components :refer [box row column gap]]
    [pushfight.core :as pf]
    [clojure.string :as string]))
      

(defn cell->box [cell & {:keys [cell-background]}]
  ; TODO : FILL ME
  (let [piece (:piece cell)
        anchored? (pf/anchored? cell)
        icon-color (cond 
                     ; (and (some? piece) anchored?) "#cc241d"
                     (pf/black? piece) "#282828"
                     (pf/white? piece) "#fbf1c7"

                     anchored?     "#fe8019" 
                     :transparent  "rgba(0,0,0,0)")
        icon       (cond 
                     (pf/wall-cell? cell) "󰟾"
                     anchored?            ""
                     (pf/round? piece)    ""
                     (pf/pusher? piece)   ""
                     (nil? piece)         "")
        ; icon-background (cond 
        ;                   anchored?)
        background-color (cond 
                           cell-background      cell-background
                           (pf/void-cell? cell) "rgba(0,0,0,0)"
                           (pf/wall-cell? cell) "#cc241d"
                           :else                "#a89984")]
    
    [box {:css {:background-color background-color
                :color icon-color}
          :padding 3}
      [row {:css {:background-color (when (and anchored? (some? piece)) "#cc241d")}} 
        icon]]))


(defn game [board*]
  (with-let [selected-cell* (r/atom nil)
             move-to-cells* (r/atom #{})
             pushable-cells* (r/atom #{})
             highlight-cells! (fn [pos]
                               (reset! move-to-cells* (pf/get-available-move-pos @board* pos))
                               (reset! pushable-cells* (pf/get-available-push-pos @board* pos))
                               (reset! selected-cell* pos))
             clear-selection! (fn []
                               (reset! move-to-cells* nil)
                               (reset! pushable-cells* nil)
                               (reset! selected-cell* nil))
             move-piece!     (fn [src dest]
                               (swap! board* pf/move-piece src dest)
                               (clear-selection!))
             push-piece!     (fn [src dest]
                               (swap! board* pf/remove-anchors)
                               (swap! board* pf/push-piece src dest)
                               (swap! board* pf/anchor-cell dest)
                               (clear-selection!)
                               (when (pf/game-over? @board*)
                                 (println "GAME OVER")))

             box_click (fn [cell pos]
                          (cond 
                            (and (not (:piece cell))
                                 (not (contains? @move-to-cells* pos))
                                 (not (contains? @pushable-cells* pos))) (clear-selection!)
                            
                            (and (:piece cell)
                                 (not (contains? @move-to-cells* pos))
                                 (not (contains? @pushable-cells* pos))) (highlight-cells! pos)

                            (and (not (nil? @selected-cell*))
                                 (contains? @move-to-cells* pos))        (move-piece! @selected-cell* pos)

                            (and (not (nil? @selected-cell*))
                                 (contains? @pushable-cells* pos))       (push-piece! @selected-cell* pos)))]
                                                                         
    (let [board @board*
          selected-cell @selected-cell*
          move-to-cells @move-to-cells*
          pushable-cells @pushable-cells*]
       [column
          (for [rn (range (count board)) 
                :let [r (get board rn)]]
            [row [
                   (for [cn (range (count r))
                         :let [cell (get r cn)
                               cell-key (string/join "-" ["cell" rn cn])
                               cell-background (cond 
                                                 (contains? move-to-cells [rn cn])  "#b8bb26"
                                                 (contains? pushable-cells [rn cn]) "#cc241d"
                                                 (= selected-cell [rn cn])          "#458588")]]

                     ^{:key cell-key}[box {:padding 0.2
                                           :click! #(box_click cell [rn cn])}
                                       (cell->box cell 
                                                  :cell-background cell-background)])]])])))


(defn place-pieces [board*]
  (with-let [unplaced-pieces* (r/atom (concat 
                                        (repeat 3 pf/white-square)
                                        (repeat 2 pf/white-round)
                                        (repeat 2 pf/black-round)
                                        (repeat 3 pf/black-square))) ;; replace with stack (would also look better...) 
             selected-cell*   (r/atom nil)
             move-to-cells* (r/atom #{})
             clear-selection! (fn []
                               (reset! move-to-cells* nil)
                               (reset! selected-cell* nil))
             highlight-cells! (fn [piece pos]
                                (let [side (cond 
                                             (pf/black? piece) :right
                                             (pf/white? piece) :left)]
                                  (reset! move-to-cells* (pf/get-half-board-pos @board* side))
                                  (reset! selected-cell* pos)))
             move-piece!      (fn [src dest]
                                (println "move" src dest (get @unplaced-pieces* src))
                                (cond 
                                  (number? src) (do (swap! board* update-in dest pf/place-piece (nth @unplaced-pieces* src))
                                                    (swap! unplaced-pieces* assoc src nil)
                                                    (clear-selection!))
                                  :else         (do (swap! board* pf/move-piece src dest)
                                                    (clear-selection!))))
             box_click (fn [piece pos]
                         (cond 
                            (number? pos) (highlight-cells! piece pos)
                            (and (not piece)
                                 (not (contains? @move-to-cells* pos))) (clear-selection!)
                            
                            (and piece
                                 (not (contains? @move-to-cells* pos))) (highlight-cells! piece pos)

                            (and (not (nil? @selected-cell*))
                                 (contains? @move-to-cells* pos))       (move-piece! @selected-cell* pos)))]
                         
    (let [board @board*
          unplaced-pieces @unplaced-pieces*
          selected-cell @selected-cell*
          move-to-cells @move-to-cells*]
       [column
         [[box "pieces to choose from: "]
          [row
             (for [idx (range (count unplaced-pieces))
                   :let [piece (nth unplaced-pieces idx)
                         cell-background (cond 
                                           (= selected-cell idx) "#458588")]]
               ^{:key idx}[box {:padding 0.2
                                :click! #(box_click piece idx)}
                             (cell->box (assoc pf/floor-cell :piece piece)
                                        :cell-background cell-background)])]
          [gap :size 10]
          [column
             (for [rn (range (count board)) 
                   :let [r (get board rn)]]
               [row [
                      (for [cn (range (count r))
                            :let [cell (get r cn)
                                  cell-key (string/join "-" ["cell" rn cn])
                                  cell-background (cond 
                                                    (contains? move-to-cells [rn cn])  "#b8bb26")]]

                        ^{:key cell-key}[box {:padding 0.2
                                              :click! #(box_click (:piece cell) [rn cn])}
                                          (cell->box cell 
                                                     :cell-background cell-background)])]])]]])))




(defn app []
  (with-let [game-lifecycle-stage* (r/atom :placement)
             board* (r/atom (pf/make-standard-board))]
    (let [k (atom 0)]
      [box
        [[box {:css {:color "red"  }} ""]
         (cond 
           (= :placement @game-lifecycle-stage*) (place-pieces board*)
           (= :game @game-lifecycle-stage*) (game board*))]])))


(defn ^:export main []
  (rdom/render [app]
    (.getElementById js/document "app")))

(main)