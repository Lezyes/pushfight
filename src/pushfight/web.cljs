(ns pushfight.web
  (:require 
    [reagent.core :as r :refer [with-let]]
    [reagent.dom :as rdom]
    [rewig.components :refer [box row column]]))


(defn app []
  (with-let [x (r/atom 0)]
    [column
     [
      [row {:click! #(swap! x inc)} (str "clicked here " @x " times")]
      [row "asdasd"]]]))


(defn ^:export main []
  (rdom/render [app]
    (.getElementById js/document "app")))

(main)