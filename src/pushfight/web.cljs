(ns pushfight.web
  (:require 
    [reagent.core :as r :refer [with-let]]
    [reagent.dom :as rdom]
    [rewig.components :refer [box row column]]
    [pushfight.core :as pf]
    [clojure.string :as string]))
      

(defn cell->box [cell & {:keys [cell-background]}]
  ; TODO : FILL ME
  (let [piece (:piece cell)
        anchored? (:anchored? cell)
        icon-color (cond 
                     (some? piece) (get {:black "#282828" :white "#fbf1c7"} (:team piece)) 
                     anchored?     "#fe8019" 
                     :transparent  "rgba(0,0,0,0)")
        icon       (cond 
                     (pf/wall-cell? cell) "󰟾"
                     anchored?            ""
                     (pf/round? piece)    ""
                     (pf/pusher? piece)   ""
                     (nil? piece)         "")
        background-color (cond 
                           cell-background      cell-background
                           (pf/void-cell? cell) "rgba(0,0,0,0)"
                           (pf/wall-cell? cell) "#cc241d"
                           :else                "#a89984")]
    
    [box {:css {:background-color background-color
                :color icon-color}
          :padding 3}
      icon]))


(defn display-board [board*]
  (with-let [selected-cell* (r/atom nil)
             move-to-cells* (r/atom #{})
             pushable-cells* (r/atom #{})
             highlight-cells (fn [pos]
                               (reset! move-to-cells* (pf/get-available-move-pos @board* pos))
                               (reset! pushable-cells* (pf/get-available-push-pos @board* pos))
                               (reset! selected-cell* pos))
             clear-selection (fn []
                               (reset! move-to-cells* nil)
                               (reset! pushable-cells* nil)
                               (reset! selected-cell* nil))
             box_click (fn [cell pos]
                          (cond 
                            (and (not (:piece cell))
                                 (not (contains? @move-to-cells* pos))
                                 (not (contains? @pushable-cells* pos))) (clear-selection)
                            
                            (and (:piece cell)
                                 (not (contains? @move-to-cells* pos))
                                 (not (contains? @pushable-cells* pos))) (highlight-cells pos)

                            (and (not (nil? @selected-cell*))
                                 (contains? @move-to-cells* pos))        (do (swap! board* pf/move-piece @selected-cell* pos)
                                                                             (clear-selection))
                            (and (not (nil? @selected-cell*))
                                 (contains? @pushable-cells* pos))        (do (swap! board* pf/push-piece @selected-cell* pos)
                                                                              (clear-selection))))]


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


(defn app []
  (with-let [board* (r/atom pf/sample-board)]
    (let [k (atom 0)]
      [box
        [[box {:css {:color "red"  }} ""]
         (display-board board*)]])))


(defn ^:export main []
  (rdom/render [app]
    (.getElementById js/document "app")))

(main)