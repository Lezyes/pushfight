(ns rewig.components
  (:require 
            ; [reagent.core :as r :refer [with-let]]
            [rewig.util :refer [size-map named-sides-map]]))


(defn box 
  ([children]
   (box {} children))
  ([{:keys [element 
            align content-align wrap direction display 
            hidden? reverse? disabled?
            size padding margin 
            click!
            attrs
            css] :as props} children]
   (let [
         element       (or element :div)
         attrs         (merge (or attrs {}) 
                              {:on-click click! 
                               :disabled disabled?})

         hidden?       (or hidden? false)
         reverse?      (or reverse? false)

         display       (name (or display :flex))
         align         (name (or align :flex-start))
         content-align (name (or content-align :flex-start))
         wrap          (name (or wrap :nowrap))
         direction     (str (name (or direction :row)) (when reverse? "-reverse"))


         css           (merge css
                              (size-map size)
                              (named-sides-map "margin" margin)
                              (named-sides-map "padding" padding)

                              {:display display
                               :align-items align
                               :justify-content content-align
                               :flex-wrap wrap
                               :flex-direction direction})

         props (assoc attrs :style (merge (:style attrs) css))
         
         children (cond 
                    (fn? (first children )) [children]
                    (keyword? (first children )) [children]
                    :else children)]

     (into [element props] children)))) 
      

(defn row
 ([children]
  (row {} children))
 ([props children]
  (let [props (assoc props :direction :row)]
    (box props children))))


(defn column
 ([children]
  (column {} children))
 ([props children]
  (let [props (assoc props :direction :column)]
    (box props children))))


(defn gap [& {:keys [size flex] :or {size 0}}]
  (box {:css {:flex-grow flex :flex-shrink 0} :size size} nil))


(defn button 
  ([children]
   (button {} children))
  ([props children]
   (let [props (assoc props :element :button)]
     (box props children))))
