goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20992 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20992(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20993 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20993(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19790 = coll;
var G__19791 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19790,G__19791) : shadow.dom.lazy_native_coll_seq.call(null,G__19790,G__19791));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19828 = arguments.length;
switch (G__19828) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19845 = arguments.length;
switch (G__19845) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19861 = arguments.length;
switch (G__19861) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19873 = arguments.length;
switch (G__19873) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19885 = arguments.length;
switch (G__19885) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19912 = arguments.length;
switch (G__19912) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19931){if((e19931 instanceof Object)){
var e = e19931;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19931;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19943 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19944 = null;
var count__19945 = (0);
var i__19946 = (0);
while(true){
if((i__19946 < count__19945)){
var el = chunk__19944.cljs$core$IIndexed$_nth$arity$2(null,i__19946);
var handler_21000__$1 = ((function (seq__19943,chunk__19944,count__19945,i__19946,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19943,chunk__19944,count__19945,i__19946,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21000__$1);


var G__21001 = seq__19943;
var G__21002 = chunk__19944;
var G__21003 = count__19945;
var G__21004 = (i__19946 + (1));
seq__19943 = G__21001;
chunk__19944 = G__21002;
count__19945 = G__21003;
i__19946 = G__21004;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19943);
if(temp__5804__auto__){
var seq__19943__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19943__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19943__$1);
var G__21005 = cljs.core.chunk_rest(seq__19943__$1);
var G__21006 = c__5568__auto__;
var G__21007 = cljs.core.count(c__5568__auto__);
var G__21008 = (0);
seq__19943 = G__21005;
chunk__19944 = G__21006;
count__19945 = G__21007;
i__19946 = G__21008;
continue;
} else {
var el = cljs.core.first(seq__19943__$1);
var handler_21009__$1 = ((function (seq__19943,chunk__19944,count__19945,i__19946,el,seq__19943__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19943,chunk__19944,count__19945,i__19946,el,seq__19943__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21009__$1);


var G__21010 = cljs.core.next(seq__19943__$1);
var G__21011 = null;
var G__21012 = (0);
var G__21013 = (0);
seq__19943 = G__21010;
chunk__19944 = G__21011;
count__19945 = G__21012;
i__19946 = G__21013;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19988 = arguments.length;
switch (G__19988) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20046 = cljs.core.seq(events);
var chunk__20047 = null;
var count__20048 = (0);
var i__20049 = (0);
while(true){
if((i__20049 < count__20048)){
var vec__20086 = chunk__20047.cljs$core$IIndexed$_nth$arity$2(null,i__20049);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20086,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21017 = seq__20046;
var G__21018 = chunk__20047;
var G__21019 = count__20048;
var G__21020 = (i__20049 + (1));
seq__20046 = G__21017;
chunk__20047 = G__21018;
count__20048 = G__21019;
i__20049 = G__21020;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20046);
if(temp__5804__auto__){
var seq__20046__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20046__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20046__$1);
var G__21021 = cljs.core.chunk_rest(seq__20046__$1);
var G__21022 = c__5568__auto__;
var G__21023 = cljs.core.count(c__5568__auto__);
var G__21024 = (0);
seq__20046 = G__21021;
chunk__20047 = G__21022;
count__20048 = G__21023;
i__20049 = G__21024;
continue;
} else {
var vec__20100 = cljs.core.first(seq__20046__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20100,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21025 = cljs.core.next(seq__20046__$1);
var G__21026 = null;
var G__21027 = (0);
var G__21028 = (0);
seq__20046 = G__21025;
chunk__20047 = G__21026;
count__20048 = G__21027;
i__20049 = G__21028;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__20111 = cljs.core.seq(styles);
var chunk__20112 = null;
var count__20113 = (0);
var i__20114 = (0);
while(true){
if((i__20114 < count__20113)){
var vec__20140 = chunk__20112.cljs$core$IIndexed$_nth$arity$2(null,i__20114);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20140,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21031 = seq__20111;
var G__21032 = chunk__20112;
var G__21033 = count__20113;
var G__21034 = (i__20114 + (1));
seq__20111 = G__21031;
chunk__20112 = G__21032;
count__20113 = G__21033;
i__20114 = G__21034;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20111);
if(temp__5804__auto__){
var seq__20111__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20111__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20111__$1);
var G__21035 = cljs.core.chunk_rest(seq__20111__$1);
var G__21036 = c__5568__auto__;
var G__21037 = cljs.core.count(c__5568__auto__);
var G__21038 = (0);
seq__20111 = G__21035;
chunk__20112 = G__21036;
count__20113 = G__21037;
i__20114 = G__21038;
continue;
} else {
var vec__20151 = cljs.core.first(seq__20111__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20151,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21039 = cljs.core.next(seq__20111__$1);
var G__21040 = null;
var G__21041 = (0);
var G__21042 = (0);
seq__20111 = G__21039;
chunk__20112 = G__21040;
count__20113 = G__21041;
i__20114 = G__21042;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__20164_21043 = key;
var G__20164_21044__$1 = (((G__20164_21043 instanceof cljs.core.Keyword))?G__20164_21043.fqn:null);
switch (G__20164_21044__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21047 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_21047,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_21047,"aria-");
}
})())){
el.setAttribute(ks_21047,value);
} else {
(el[ks_21047] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20198){
var map__20199 = p__20198;
var map__20199__$1 = cljs.core.__destructure_map(map__20199);
var props = map__20199__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20200 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20200,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20200,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20200,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20204 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20204,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20204;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20216 = arguments.length;
switch (G__20216) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20234){
var vec__20236 = p__20234;
var seq__20237 = cljs.core.seq(vec__20236);
var first__20238 = cljs.core.first(seq__20237);
var seq__20237__$1 = cljs.core.next(seq__20237);
var nn = first__20238;
var first__20238__$1 = cljs.core.first(seq__20237__$1);
var seq__20237__$2 = cljs.core.next(seq__20237__$1);
var np = first__20238__$1;
var nc = seq__20237__$2;
var node = vec__20236;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20250 = nn;
var G__20251 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20250,G__20251) : create_fn.call(null,G__20250,G__20251));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20253 = nn;
var G__20254 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20253,G__20254) : create_fn.call(null,G__20253,G__20254));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20261 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20261,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20261,(1),null);
var seq__20266_21051 = cljs.core.seq(node_children);
var chunk__20267_21052 = null;
var count__20268_21053 = (0);
var i__20269_21054 = (0);
while(true){
if((i__20269_21054 < count__20268_21053)){
var child_struct_21055 = chunk__20267_21052.cljs$core$IIndexed$_nth$arity$2(null,i__20269_21054);
var children_21056 = shadow.dom.dom_node(child_struct_21055);
if(cljs.core.seq_QMARK_(children_21056)){
var seq__20340_21057 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21056));
var chunk__20342_21058 = null;
var count__20343_21059 = (0);
var i__20344_21060 = (0);
while(true){
if((i__20344_21060 < count__20343_21059)){
var child_21061 = chunk__20342_21058.cljs$core$IIndexed$_nth$arity$2(null,i__20344_21060);
if(cljs.core.truth_(child_21061)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21061);


var G__21062 = seq__20340_21057;
var G__21063 = chunk__20342_21058;
var G__21064 = count__20343_21059;
var G__21065 = (i__20344_21060 + (1));
seq__20340_21057 = G__21062;
chunk__20342_21058 = G__21063;
count__20343_21059 = G__21064;
i__20344_21060 = G__21065;
continue;
} else {
var G__21066 = seq__20340_21057;
var G__21067 = chunk__20342_21058;
var G__21068 = count__20343_21059;
var G__21069 = (i__20344_21060 + (1));
seq__20340_21057 = G__21066;
chunk__20342_21058 = G__21067;
count__20343_21059 = G__21068;
i__20344_21060 = G__21069;
continue;
}
} else {
var temp__5804__auto___21070 = cljs.core.seq(seq__20340_21057);
if(temp__5804__auto___21070){
var seq__20340_21071__$1 = temp__5804__auto___21070;
if(cljs.core.chunked_seq_QMARK_(seq__20340_21071__$1)){
var c__5568__auto___21072 = cljs.core.chunk_first(seq__20340_21071__$1);
var G__21073 = cljs.core.chunk_rest(seq__20340_21071__$1);
var G__21074 = c__5568__auto___21072;
var G__21075 = cljs.core.count(c__5568__auto___21072);
var G__21076 = (0);
seq__20340_21057 = G__21073;
chunk__20342_21058 = G__21074;
count__20343_21059 = G__21075;
i__20344_21060 = G__21076;
continue;
} else {
var child_21077 = cljs.core.first(seq__20340_21071__$1);
if(cljs.core.truth_(child_21077)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21077);


var G__21078 = cljs.core.next(seq__20340_21071__$1);
var G__21079 = null;
var G__21080 = (0);
var G__21081 = (0);
seq__20340_21057 = G__21078;
chunk__20342_21058 = G__21079;
count__20343_21059 = G__21080;
i__20344_21060 = G__21081;
continue;
} else {
var G__21082 = cljs.core.next(seq__20340_21071__$1);
var G__21083 = null;
var G__21084 = (0);
var G__21085 = (0);
seq__20340_21057 = G__21082;
chunk__20342_21058 = G__21083;
count__20343_21059 = G__21084;
i__20344_21060 = G__21085;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21056);
}


var G__21086 = seq__20266_21051;
var G__21087 = chunk__20267_21052;
var G__21088 = count__20268_21053;
var G__21089 = (i__20269_21054 + (1));
seq__20266_21051 = G__21086;
chunk__20267_21052 = G__21087;
count__20268_21053 = G__21088;
i__20269_21054 = G__21089;
continue;
} else {
var temp__5804__auto___21090 = cljs.core.seq(seq__20266_21051);
if(temp__5804__auto___21090){
var seq__20266_21091__$1 = temp__5804__auto___21090;
if(cljs.core.chunked_seq_QMARK_(seq__20266_21091__$1)){
var c__5568__auto___21092 = cljs.core.chunk_first(seq__20266_21091__$1);
var G__21093 = cljs.core.chunk_rest(seq__20266_21091__$1);
var G__21094 = c__5568__auto___21092;
var G__21095 = cljs.core.count(c__5568__auto___21092);
var G__21096 = (0);
seq__20266_21051 = G__21093;
chunk__20267_21052 = G__21094;
count__20268_21053 = G__21095;
i__20269_21054 = G__21096;
continue;
} else {
var child_struct_21097 = cljs.core.first(seq__20266_21091__$1);
var children_21098 = shadow.dom.dom_node(child_struct_21097);
if(cljs.core.seq_QMARK_(children_21098)){
var seq__20407_21099 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21098));
var chunk__20409_21100 = null;
var count__20410_21101 = (0);
var i__20411_21102 = (0);
while(true){
if((i__20411_21102 < count__20410_21101)){
var child_21104 = chunk__20409_21100.cljs$core$IIndexed$_nth$arity$2(null,i__20411_21102);
if(cljs.core.truth_(child_21104)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21104);


var G__21105 = seq__20407_21099;
var G__21106 = chunk__20409_21100;
var G__21107 = count__20410_21101;
var G__21108 = (i__20411_21102 + (1));
seq__20407_21099 = G__21105;
chunk__20409_21100 = G__21106;
count__20410_21101 = G__21107;
i__20411_21102 = G__21108;
continue;
} else {
var G__21109 = seq__20407_21099;
var G__21110 = chunk__20409_21100;
var G__21111 = count__20410_21101;
var G__21112 = (i__20411_21102 + (1));
seq__20407_21099 = G__21109;
chunk__20409_21100 = G__21110;
count__20410_21101 = G__21111;
i__20411_21102 = G__21112;
continue;
}
} else {
var temp__5804__auto___21113__$1 = cljs.core.seq(seq__20407_21099);
if(temp__5804__auto___21113__$1){
var seq__20407_21115__$1 = temp__5804__auto___21113__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20407_21115__$1)){
var c__5568__auto___21116 = cljs.core.chunk_first(seq__20407_21115__$1);
var G__21117 = cljs.core.chunk_rest(seq__20407_21115__$1);
var G__21118 = c__5568__auto___21116;
var G__21119 = cljs.core.count(c__5568__auto___21116);
var G__21120 = (0);
seq__20407_21099 = G__21117;
chunk__20409_21100 = G__21118;
count__20410_21101 = G__21119;
i__20411_21102 = G__21120;
continue;
} else {
var child_21121 = cljs.core.first(seq__20407_21115__$1);
if(cljs.core.truth_(child_21121)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21121);


var G__21122 = cljs.core.next(seq__20407_21115__$1);
var G__21123 = null;
var G__21124 = (0);
var G__21125 = (0);
seq__20407_21099 = G__21122;
chunk__20409_21100 = G__21123;
count__20410_21101 = G__21124;
i__20411_21102 = G__21125;
continue;
} else {
var G__21126 = cljs.core.next(seq__20407_21115__$1);
var G__21127 = null;
var G__21128 = (0);
var G__21129 = (0);
seq__20407_21099 = G__21126;
chunk__20409_21100 = G__21127;
count__20410_21101 = G__21128;
i__20411_21102 = G__21129;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21098);
}


var G__21131 = cljs.core.next(seq__20266_21091__$1);
var G__21132 = null;
var G__21133 = (0);
var G__21134 = (0);
seq__20266_21051 = G__21131;
chunk__20267_21052 = G__21132;
count__20268_21053 = G__21133;
i__20269_21054 = G__21134;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20473 = cljs.core.seq(node);
var chunk__20474 = null;
var count__20475 = (0);
var i__20476 = (0);
while(true){
if((i__20476 < count__20475)){
var n = chunk__20474.cljs$core$IIndexed$_nth$arity$2(null,i__20476);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21137 = seq__20473;
var G__21138 = chunk__20474;
var G__21139 = count__20475;
var G__21140 = (i__20476 + (1));
seq__20473 = G__21137;
chunk__20474 = G__21138;
count__20475 = G__21139;
i__20476 = G__21140;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20473);
if(temp__5804__auto__){
var seq__20473__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20473__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20473__$1);
var G__21141 = cljs.core.chunk_rest(seq__20473__$1);
var G__21142 = c__5568__auto__;
var G__21143 = cljs.core.count(c__5568__auto__);
var G__21144 = (0);
seq__20473 = G__21141;
chunk__20474 = G__21142;
count__20475 = G__21143;
i__20476 = G__21144;
continue;
} else {
var n = cljs.core.first(seq__20473__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21145 = cljs.core.next(seq__20473__$1);
var G__21146 = null;
var G__21147 = (0);
var G__21148 = (0);
seq__20473 = G__21145;
chunk__20474 = G__21146;
count__20475 = G__21147;
i__20476 = G__21148;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20495 = arguments.length;
switch (G__20495) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20506 = arguments.length;
switch (G__20506) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20535 = arguments.length;
switch (G__20535) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21159 = arguments.length;
var i__5770__auto___21160 = (0);
while(true){
if((i__5770__auto___21160 < len__5769__auto___21159)){
args__5775__auto__.push((arguments[i__5770__auto___21160]));

var G__21161 = (i__5770__auto___21160 + (1));
i__5770__auto___21160 = G__21161;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20552_21163 = cljs.core.seq(nodes);
var chunk__20553_21164 = null;
var count__20554_21165 = (0);
var i__20555_21166 = (0);
while(true){
if((i__20555_21166 < count__20554_21165)){
var node_21167 = chunk__20553_21164.cljs$core$IIndexed$_nth$arity$2(null,i__20555_21166);
fragment.appendChild(shadow.dom._to_dom(node_21167));


var G__21169 = seq__20552_21163;
var G__21170 = chunk__20553_21164;
var G__21171 = count__20554_21165;
var G__21172 = (i__20555_21166 + (1));
seq__20552_21163 = G__21169;
chunk__20553_21164 = G__21170;
count__20554_21165 = G__21171;
i__20555_21166 = G__21172;
continue;
} else {
var temp__5804__auto___21173 = cljs.core.seq(seq__20552_21163);
if(temp__5804__auto___21173){
var seq__20552_21174__$1 = temp__5804__auto___21173;
if(cljs.core.chunked_seq_QMARK_(seq__20552_21174__$1)){
var c__5568__auto___21175 = cljs.core.chunk_first(seq__20552_21174__$1);
var G__21176 = cljs.core.chunk_rest(seq__20552_21174__$1);
var G__21177 = c__5568__auto___21175;
var G__21178 = cljs.core.count(c__5568__auto___21175);
var G__21179 = (0);
seq__20552_21163 = G__21176;
chunk__20553_21164 = G__21177;
count__20554_21165 = G__21178;
i__20555_21166 = G__21179;
continue;
} else {
var node_21181 = cljs.core.first(seq__20552_21174__$1);
fragment.appendChild(shadow.dom._to_dom(node_21181));


var G__21182 = cljs.core.next(seq__20552_21174__$1);
var G__21183 = null;
var G__21184 = (0);
var G__21185 = (0);
seq__20552_21163 = G__21182;
chunk__20553_21164 = G__21183;
count__20554_21165 = G__21184;
i__20555_21166 = G__21185;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20542){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20542));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20577_21186 = cljs.core.seq(scripts);
var chunk__20578_21187 = null;
var count__20579_21189 = (0);
var i__20580_21190 = (0);
while(true){
if((i__20580_21190 < count__20579_21189)){
var vec__20595_21191 = chunk__20578_21187.cljs$core$IIndexed$_nth$arity$2(null,i__20580_21190);
var script_tag_21192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20595_21191,(0),null);
var script_body_21193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20595_21191,(1),null);
eval(script_body_21193);


var G__21195 = seq__20577_21186;
var G__21196 = chunk__20578_21187;
var G__21197 = count__20579_21189;
var G__21198 = (i__20580_21190 + (1));
seq__20577_21186 = G__21195;
chunk__20578_21187 = G__21196;
count__20579_21189 = G__21197;
i__20580_21190 = G__21198;
continue;
} else {
var temp__5804__auto___21199 = cljs.core.seq(seq__20577_21186);
if(temp__5804__auto___21199){
var seq__20577_21200__$1 = temp__5804__auto___21199;
if(cljs.core.chunked_seq_QMARK_(seq__20577_21200__$1)){
var c__5568__auto___21201 = cljs.core.chunk_first(seq__20577_21200__$1);
var G__21202 = cljs.core.chunk_rest(seq__20577_21200__$1);
var G__21203 = c__5568__auto___21201;
var G__21204 = cljs.core.count(c__5568__auto___21201);
var G__21205 = (0);
seq__20577_21186 = G__21202;
chunk__20578_21187 = G__21203;
count__20579_21189 = G__21204;
i__20580_21190 = G__21205;
continue;
} else {
var vec__20607_21206 = cljs.core.first(seq__20577_21200__$1);
var script_tag_21207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20607_21206,(0),null);
var script_body_21208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20607_21206,(1),null);
eval(script_body_21208);


var G__21210 = cljs.core.next(seq__20577_21200__$1);
var G__21211 = null;
var G__21212 = (0);
var G__21213 = (0);
seq__20577_21186 = G__21210;
chunk__20578_21187 = G__21211;
count__20579_21189 = G__21212;
i__20580_21190 = G__21213;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20613){
var vec__20614 = p__20613;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20614,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20614,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20634 = arguments.length;
switch (G__20634) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20674 = cljs.core.seq(style_keys);
var chunk__20675 = null;
var count__20676 = (0);
var i__20677 = (0);
while(true){
if((i__20677 < count__20676)){
var it = chunk__20675.cljs$core$IIndexed$_nth$arity$2(null,i__20677);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21221 = seq__20674;
var G__21222 = chunk__20675;
var G__21223 = count__20676;
var G__21224 = (i__20677 + (1));
seq__20674 = G__21221;
chunk__20675 = G__21222;
count__20676 = G__21223;
i__20677 = G__21224;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20674);
if(temp__5804__auto__){
var seq__20674__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20674__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20674__$1);
var G__21225 = cljs.core.chunk_rest(seq__20674__$1);
var G__21226 = c__5568__auto__;
var G__21227 = cljs.core.count(c__5568__auto__);
var G__21228 = (0);
seq__20674 = G__21225;
chunk__20675 = G__21226;
count__20676 = G__21227;
i__20677 = G__21228;
continue;
} else {
var it = cljs.core.first(seq__20674__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21229 = cljs.core.next(seq__20674__$1);
var G__21230 = null;
var G__21231 = (0);
var G__21232 = (0);
seq__20674 = G__21229;
chunk__20675 = G__21230;
count__20676 = G__21231;
i__20677 = G__21232;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20686,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20701 = k20686;
var G__20701__$1 = (((G__20701 instanceof cljs.core.Keyword))?G__20701.fqn:null);
switch (G__20701__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20686,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20707){
var vec__20710 = p__20707;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20710,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20710,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20685){
var self__ = this;
var G__20685__$1 = this;
return (new cljs.core.RecordIter((0),G__20685__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20688,other20689){
var self__ = this;
var this20688__$1 = this;
return (((!((other20689 == null)))) && ((((this20688__$1.constructor === other20689.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20688__$1.x,other20689.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20688__$1.y,other20689.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20688__$1.__extmap,other20689.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20686){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20736 = k20686;
var G__20736__$1 = (((G__20736 instanceof cljs.core.Keyword))?G__20736.fqn:null);
switch (G__20736__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20686);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20685){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20737 = cljs.core.keyword_identical_QMARK_;
var expr__20738 = k__5352__auto__;
if(cljs.core.truth_((pred__20737.cljs$core$IFn$_invoke$arity$2 ? pred__20737.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20738) : pred__20737.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20738)))){
return (new shadow.dom.Coordinate(G__20685,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20737.cljs$core$IFn$_invoke$arity$2 ? pred__20737.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20738) : pred__20737.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20738)))){
return (new shadow.dom.Coordinate(self__.x,G__20685,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20685),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20685){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20685,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20692){
var extmap__5385__auto__ = (function (){var G__20744 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20692,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20692)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20744);
} else {
return G__20744;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20692),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20692),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20749,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20759 = k20749;
var G__20759__$1 = (((G__20759 instanceof cljs.core.Keyword))?G__20759.fqn:null);
switch (G__20759__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20749,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20760){
var vec__20761 = p__20760;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20761,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20761,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20748){
var self__ = this;
var G__20748__$1 = this;
return (new cljs.core.RecordIter((0),G__20748__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20750,other20751){
var self__ = this;
var this20750__$1 = this;
return (((!((other20751 == null)))) && ((((this20750__$1.constructor === other20751.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20750__$1.w,other20751.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20750__$1.h,other20751.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20750__$1.__extmap,other20751.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20749){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20773 = k20749;
var G__20773__$1 = (((G__20773 instanceof cljs.core.Keyword))?G__20773.fqn:null);
switch (G__20773__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20749);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20748){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20774 = cljs.core.keyword_identical_QMARK_;
var expr__20775 = k__5352__auto__;
if(cljs.core.truth_((pred__20774.cljs$core$IFn$_invoke$arity$2 ? pred__20774.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20775) : pred__20774.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20775)))){
return (new shadow.dom.Size(G__20748,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20774.cljs$core$IFn$_invoke$arity$2 ? pred__20774.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20775) : pred__20774.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20775)))){
return (new shadow.dom.Size(self__.w,G__20748,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20748),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20748){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20748,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20752){
var extmap__5385__auto__ = (function (){var G__20782 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20752,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20752)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20782);
} else {
return G__20782;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20752),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20752),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21260 = (i + (1));
var G__21261 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21260;
ret = G__21261;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20802){
var vec__20803 = p__20802;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20803,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20803,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20819 = arguments.length;
switch (G__20819) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21266 = ps;
var G__21267 = (i + (1));
el__$1 = G__21266;
i = G__21267;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20841 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20841,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20841,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20841,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20848_21272 = cljs.core.seq(props);
var chunk__20849_21273 = null;
var count__20850_21274 = (0);
var i__20851_21275 = (0);
while(true){
if((i__20851_21275 < count__20850_21274)){
var vec__20860_21276 = chunk__20849_21273.cljs$core$IIndexed$_nth$arity$2(null,i__20851_21275);
var k_21277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20860_21276,(0),null);
var v_21278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20860_21276,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21277);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21277),v_21278);


var G__21281 = seq__20848_21272;
var G__21282 = chunk__20849_21273;
var G__21283 = count__20850_21274;
var G__21284 = (i__20851_21275 + (1));
seq__20848_21272 = G__21281;
chunk__20849_21273 = G__21282;
count__20850_21274 = G__21283;
i__20851_21275 = G__21284;
continue;
} else {
var temp__5804__auto___21285 = cljs.core.seq(seq__20848_21272);
if(temp__5804__auto___21285){
var seq__20848_21287__$1 = temp__5804__auto___21285;
if(cljs.core.chunked_seq_QMARK_(seq__20848_21287__$1)){
var c__5568__auto___21288 = cljs.core.chunk_first(seq__20848_21287__$1);
var G__21289 = cljs.core.chunk_rest(seq__20848_21287__$1);
var G__21290 = c__5568__auto___21288;
var G__21291 = cljs.core.count(c__5568__auto___21288);
var G__21292 = (0);
seq__20848_21272 = G__21289;
chunk__20849_21273 = G__21290;
count__20850_21274 = G__21291;
i__20851_21275 = G__21292;
continue;
} else {
var vec__20864_21293 = cljs.core.first(seq__20848_21287__$1);
var k_21294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864_21293,(0),null);
var v_21295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864_21293,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21294);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21294),v_21295);


var G__21297 = cljs.core.next(seq__20848_21287__$1);
var G__21298 = null;
var G__21299 = (0);
var G__21300 = (0);
seq__20848_21272 = G__21297;
chunk__20849_21273 = G__21298;
count__20850_21274 = G__21299;
i__20851_21275 = G__21300;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20871 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20871,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20871,(1),null);
var seq__20874_21301 = cljs.core.seq(node_children);
var chunk__20876_21302 = null;
var count__20877_21303 = (0);
var i__20878_21304 = (0);
while(true){
if((i__20878_21304 < count__20877_21303)){
var child_struct_21305 = chunk__20876_21302.cljs$core$IIndexed$_nth$arity$2(null,i__20878_21304);
if((!((child_struct_21305 == null)))){
if(typeof child_struct_21305 === 'string'){
var text_21306 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21306),child_struct_21305].join(''));
} else {
var children_21307 = shadow.dom.svg_node(child_struct_21305);
if(cljs.core.seq_QMARK_(children_21307)){
var seq__20917_21308 = cljs.core.seq(children_21307);
var chunk__20919_21309 = null;
var count__20920_21310 = (0);
var i__20921_21311 = (0);
while(true){
if((i__20921_21311 < count__20920_21310)){
var child_21312 = chunk__20919_21309.cljs$core$IIndexed$_nth$arity$2(null,i__20921_21311);
if(cljs.core.truth_(child_21312)){
node.appendChild(child_21312);


var G__21313 = seq__20917_21308;
var G__21314 = chunk__20919_21309;
var G__21315 = count__20920_21310;
var G__21316 = (i__20921_21311 + (1));
seq__20917_21308 = G__21313;
chunk__20919_21309 = G__21314;
count__20920_21310 = G__21315;
i__20921_21311 = G__21316;
continue;
} else {
var G__21317 = seq__20917_21308;
var G__21318 = chunk__20919_21309;
var G__21319 = count__20920_21310;
var G__21320 = (i__20921_21311 + (1));
seq__20917_21308 = G__21317;
chunk__20919_21309 = G__21318;
count__20920_21310 = G__21319;
i__20921_21311 = G__21320;
continue;
}
} else {
var temp__5804__auto___21321 = cljs.core.seq(seq__20917_21308);
if(temp__5804__auto___21321){
var seq__20917_21322__$1 = temp__5804__auto___21321;
if(cljs.core.chunked_seq_QMARK_(seq__20917_21322__$1)){
var c__5568__auto___21323 = cljs.core.chunk_first(seq__20917_21322__$1);
var G__21324 = cljs.core.chunk_rest(seq__20917_21322__$1);
var G__21325 = c__5568__auto___21323;
var G__21326 = cljs.core.count(c__5568__auto___21323);
var G__21327 = (0);
seq__20917_21308 = G__21324;
chunk__20919_21309 = G__21325;
count__20920_21310 = G__21326;
i__20921_21311 = G__21327;
continue;
} else {
var child_21328 = cljs.core.first(seq__20917_21322__$1);
if(cljs.core.truth_(child_21328)){
node.appendChild(child_21328);


var G__21329 = cljs.core.next(seq__20917_21322__$1);
var G__21330 = null;
var G__21331 = (0);
var G__21332 = (0);
seq__20917_21308 = G__21329;
chunk__20919_21309 = G__21330;
count__20920_21310 = G__21331;
i__20921_21311 = G__21332;
continue;
} else {
var G__21333 = cljs.core.next(seq__20917_21322__$1);
var G__21334 = null;
var G__21335 = (0);
var G__21336 = (0);
seq__20917_21308 = G__21333;
chunk__20919_21309 = G__21334;
count__20920_21310 = G__21335;
i__20921_21311 = G__21336;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21307);
}
}


var G__21337 = seq__20874_21301;
var G__21338 = chunk__20876_21302;
var G__21339 = count__20877_21303;
var G__21340 = (i__20878_21304 + (1));
seq__20874_21301 = G__21337;
chunk__20876_21302 = G__21338;
count__20877_21303 = G__21339;
i__20878_21304 = G__21340;
continue;
} else {
var G__21341 = seq__20874_21301;
var G__21342 = chunk__20876_21302;
var G__21343 = count__20877_21303;
var G__21344 = (i__20878_21304 + (1));
seq__20874_21301 = G__21341;
chunk__20876_21302 = G__21342;
count__20877_21303 = G__21343;
i__20878_21304 = G__21344;
continue;
}
} else {
var temp__5804__auto___21345 = cljs.core.seq(seq__20874_21301);
if(temp__5804__auto___21345){
var seq__20874_21346__$1 = temp__5804__auto___21345;
if(cljs.core.chunked_seq_QMARK_(seq__20874_21346__$1)){
var c__5568__auto___21347 = cljs.core.chunk_first(seq__20874_21346__$1);
var G__21348 = cljs.core.chunk_rest(seq__20874_21346__$1);
var G__21349 = c__5568__auto___21347;
var G__21350 = cljs.core.count(c__5568__auto___21347);
var G__21351 = (0);
seq__20874_21301 = G__21348;
chunk__20876_21302 = G__21349;
count__20877_21303 = G__21350;
i__20878_21304 = G__21351;
continue;
} else {
var child_struct_21352 = cljs.core.first(seq__20874_21346__$1);
if((!((child_struct_21352 == null)))){
if(typeof child_struct_21352 === 'string'){
var text_21353 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21353),child_struct_21352].join(''));
} else {
var children_21354 = shadow.dom.svg_node(child_struct_21352);
if(cljs.core.seq_QMARK_(children_21354)){
var seq__20946_21355 = cljs.core.seq(children_21354);
var chunk__20948_21356 = null;
var count__20949_21357 = (0);
var i__20950_21358 = (0);
while(true){
if((i__20950_21358 < count__20949_21357)){
var child_21359 = chunk__20948_21356.cljs$core$IIndexed$_nth$arity$2(null,i__20950_21358);
if(cljs.core.truth_(child_21359)){
node.appendChild(child_21359);


var G__21361 = seq__20946_21355;
var G__21362 = chunk__20948_21356;
var G__21363 = count__20949_21357;
var G__21364 = (i__20950_21358 + (1));
seq__20946_21355 = G__21361;
chunk__20948_21356 = G__21362;
count__20949_21357 = G__21363;
i__20950_21358 = G__21364;
continue;
} else {
var G__21365 = seq__20946_21355;
var G__21366 = chunk__20948_21356;
var G__21367 = count__20949_21357;
var G__21368 = (i__20950_21358 + (1));
seq__20946_21355 = G__21365;
chunk__20948_21356 = G__21366;
count__20949_21357 = G__21367;
i__20950_21358 = G__21368;
continue;
}
} else {
var temp__5804__auto___21369__$1 = cljs.core.seq(seq__20946_21355);
if(temp__5804__auto___21369__$1){
var seq__20946_21370__$1 = temp__5804__auto___21369__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20946_21370__$1)){
var c__5568__auto___21371 = cljs.core.chunk_first(seq__20946_21370__$1);
var G__21372 = cljs.core.chunk_rest(seq__20946_21370__$1);
var G__21373 = c__5568__auto___21371;
var G__21374 = cljs.core.count(c__5568__auto___21371);
var G__21375 = (0);
seq__20946_21355 = G__21372;
chunk__20948_21356 = G__21373;
count__20949_21357 = G__21374;
i__20950_21358 = G__21375;
continue;
} else {
var child_21376 = cljs.core.first(seq__20946_21370__$1);
if(cljs.core.truth_(child_21376)){
node.appendChild(child_21376);


var G__21378 = cljs.core.next(seq__20946_21370__$1);
var G__21379 = null;
var G__21380 = (0);
var G__21381 = (0);
seq__20946_21355 = G__21378;
chunk__20948_21356 = G__21379;
count__20949_21357 = G__21380;
i__20950_21358 = G__21381;
continue;
} else {
var G__21382 = cljs.core.next(seq__20946_21370__$1);
var G__21383 = null;
var G__21384 = (0);
var G__21385 = (0);
seq__20946_21355 = G__21382;
chunk__20948_21356 = G__21383;
count__20949_21357 = G__21384;
i__20950_21358 = G__21385;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21354);
}
}


var G__21390 = cljs.core.next(seq__20874_21346__$1);
var G__21391 = null;
var G__21392 = (0);
var G__21393 = (0);
seq__20874_21301 = G__21390;
chunk__20876_21302 = G__21391;
count__20877_21303 = G__21392;
i__20878_21304 = G__21393;
continue;
} else {
var G__21394 = cljs.core.next(seq__20874_21346__$1);
var G__21395 = null;
var G__21396 = (0);
var G__21397 = (0);
seq__20874_21301 = G__21394;
chunk__20876_21302 = G__21395;
count__20877_21303 = G__21396;
i__20878_21304 = G__21397;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21398 = arguments.length;
var i__5770__auto___21399 = (0);
while(true){
if((i__5770__auto___21399 < len__5769__auto___21398)){
args__5775__auto__.push((arguments[i__5770__auto___21399]));

var G__21400 = (i__5770__auto___21399 + (1));
i__5770__auto___21399 = G__21400;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20963){
var G__20964 = cljs.core.first(seq20963);
var seq20963__$1 = cljs.core.next(seq20963);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20964,seq20963__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20979 = arguments.length;
switch (G__20979) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17214__auto___21406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_20984){
var state_val_20985 = (state_20984[(1)]);
if((state_val_20985 === (1))){
var state_20984__$1 = state_20984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20984__$1,(2),once_or_cleanup);
} else {
if((state_val_20985 === (2))){
var inst_20981 = (state_20984[(2)]);
var inst_20982 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20984__$1 = (function (){var statearr_20986 = state_20984;
(statearr_20986[(7)] = inst_20981);

return statearr_20986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20984__$1,inst_20982);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17061__auto__ = null;
var shadow$dom$state_machine__17061__auto____0 = (function (){
var statearr_20987 = [null,null,null,null,null,null,null,null];
(statearr_20987[(0)] = shadow$dom$state_machine__17061__auto__);

(statearr_20987[(1)] = (1));

return statearr_20987;
});
var shadow$dom$state_machine__17061__auto____1 = (function (state_20984){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_20984);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e20988){var ex__17064__auto__ = e20988;
var statearr_20989_21410 = state_20984;
(statearr_20989_21410[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_20984[(4)]))){
var statearr_20990_21411 = state_20984;
(statearr_20990_21411[(1)] = cljs.core.first((state_20984[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21412 = state_20984;
state_20984 = G__21412;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
shadow$dom$state_machine__17061__auto__ = function(state_20984){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17061__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17061__auto____1.call(this,state_20984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17061__auto____0;
shadow$dom$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17061__auto____1;
return shadow$dom$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_20991 = f__17215__auto__();
(statearr_20991[(6)] = c__17214__auto___21406);

return statearr_20991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
