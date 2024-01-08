goog.provide('rewig.util');
rewig.util.map_map = (function rewig$util$map_map(key_fn,val_fn,hashmap){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12430_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([(function (){var G__12431 = cljs.core.first(p1__12430_SHARP_);
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__12431) : key_fn.call(null,G__12431));
})()],[(function (){var G__12432 = cljs.core.second(p1__12430_SHARP_);
return (val_fn.cljs$core$IFn$_invoke$arity$1 ? val_fn.cljs$core$IFn$_invoke$arity$1(G__12432) : val_fn.call(null,G__12432));
})()]);
}),hashmap));
});
rewig.util.map_keys = (function rewig$util$map_keys(fn,m){
return rewig.util.map_map(fn,cljs.core.identity,m);
});
rewig.util.map_vals = (function rewig$util$map_vals(fn,m){
return rewig.util.map_map(cljs.core.identity,fn,m);
});
rewig.util.v__GT_px = (function rewig$util$v__GT_px(v){
if(typeof v === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"px"].join('');
} else {
return v;
}
});
rewig.util.size_map = (function rewig$util$size_map(size){
if(cljs.core.map_QMARK_(size)){
return rewig.util.map_vals(rewig.util.v__GT_px,size);
} else {
if(cljs.core.vector_QMARK_(size)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),rewig.util.v__GT_px(cljs.core.first(size)),new cljs.core.Keyword(null,"height","height",1025178622),rewig.util.v__GT_px(cljs.core.second(size))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),rewig.util.v__GT_px(size),new cljs.core.Keyword(null,"height","height",1025178622),rewig.util.v__GT_px(size)], null);

}
}
});
rewig.util.sides_map = (function rewig$util$sides_map(v){
if(cljs.core.map_QMARK_(v)){
return rewig.util.map_vals(rewig.util.v__GT_px,v);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.vector_QMARK_(v);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(v));
if(and__5043__auto____$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),rewig.util.v__GT_px(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,(0))),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),rewig.util.v__GT_px(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,(1))),new cljs.core.Keyword(null,"left","left",-399115937),rewig.util.v__GT_px(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,(2))),new cljs.core.Keyword(null,"right","right",-452581833),rewig.util.v__GT_px(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,(3)))], null);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var and__5043__auto__ = cljs.core.vector_QMARK_(v);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(v));
if(and__5043__auto____$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),rewig.util.v__GT_px(cljs.core.first(v)),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),rewig.util.v__GT_px(cljs.core.first(v)),new cljs.core.Keyword(null,"left","left",-399115937),rewig.util.v__GT_px(cljs.core.second(v)),new cljs.core.Keyword(null,"right","right",-452581833),rewig.util.v__GT_px(cljs.core.second(v))], null);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),rewig.util.v__GT_px(v),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),rewig.util.v__GT_px(v),new cljs.core.Keyword(null,"left","left",-399115937),rewig.util.v__GT_px(v),new cljs.core.Keyword(null,"right","right",-452581833),rewig.util.v__GT_px(v)], null);

}
}
});
rewig.util.named_sides_map = (function rewig$util$named_sides_map(sides_name,m){
return rewig.util.map_keys((function (p1__12433_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sides_name),"-",cljs.core.name(p1__12433_SHARP_)].join(''));
}),rewig.util.sides_map(m));
});

//# sourceMappingURL=rewig.util.js.map
