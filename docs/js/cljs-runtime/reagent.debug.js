goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__22741__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22742__i = 0, G__22742__a = new Array(arguments.length -  0);
while (G__22742__i < G__22742__a.length) {G__22742__a[G__22742__i] = arguments[G__22742__i + 0]; ++G__22742__i;}
  args = new cljs.core.IndexedSeq(G__22742__a,0,null);
} 
return G__22741__delegate.call(this,args);};
G__22741.cljs$lang$maxFixedArity = 0;
G__22741.cljs$lang$applyTo = (function (arglist__22743){
var args = cljs.core.seq(arglist__22743);
return G__22741__delegate(args);
});
G__22741.cljs$core$IFn$_invoke$arity$variadic = G__22741__delegate;
return G__22741;
})()
);

(o.error = (function() { 
var G__22744__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22745__i = 0, G__22745__a = new Array(arguments.length -  0);
while (G__22745__i < G__22745__a.length) {G__22745__a[G__22745__i] = arguments[G__22745__i + 0]; ++G__22745__i;}
  args = new cljs.core.IndexedSeq(G__22745__a,0,null);
} 
return G__22744__delegate.call(this,args);};
G__22744.cljs$lang$maxFixedArity = 0;
G__22744.cljs$lang$applyTo = (function (arglist__22746){
var args = cljs.core.seq(arglist__22746);
return G__22744__delegate(args);
});
G__22744.cljs$core$IFn$_invoke$arity$variadic = G__22744__delegate;
return G__22744;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
