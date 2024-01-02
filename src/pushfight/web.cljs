(ns pushfight.web
  (:require 
    [reagent.core :as r :refer [with-let]]
    [reagent.dom :as rdom]
    [rewig.components :refer [box row column]]
    [pushfight.core :as pf]
    [clojure.string :as string]))




(defn cell->box [cell]
  (let [piece (:piece cell)
        anchored? (:anchored? cell)
        team-color 0
        piece     (cond 
                    (nil? piece)    ""
                    (pf/pusher? piece) ""
                    :else              "")]))
                    

(defn display-board [board]
  [column
    (for [rn (range (count board)) 
          :let [r (get board rn)]]
      [row [
            (for [cn (range (count r))
                  :let [cell (get r cn)
                        cell-key (string/join "-" ["cell" rn cn])]]
              ^{:key cell-key}[box {:margin 2 :click! #() :css {:background-color (or (get-in cell [:piece :team]) "coral")}} (pf/cell->emoji cell)])]])])

(defn app []
  (with-let [board (r/atom pf/sample-board)]
    (let [k (atom 0)]
      [box
        [[box {:css {:color "red"  }} ""]
         (display-board @board)]])))


(defn ^:export main []
  (rdom/render [app]
    (.getElementById js/document "app")))

(main)