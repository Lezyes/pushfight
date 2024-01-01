(ns pushfight.web
  (:require 
    [reagent.core :as r :refer [atom]]
    [reagent.dom :as rdom]))

(defn app []
  [:div.container
   [:p "asdasds"]])

(defn ^:export main []
  (rdom/render [app]
    (.getElementById js/document "app")))

(main)