goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20903,p__20904){
var map__20906 = p__20903;
var map__20906__$1 = cljs.core.__destructure_map(map__20906);
var svc = map__20906__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20906__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20906__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20906__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20907 = p__20904;
var map__20907__$1 = cljs.core.__destructure_map(map__20907);
var msg = map__20907__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20907__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20907__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20907__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20907__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20909,p__20910){
var map__20913 = p__20909;
var map__20913__$1 = cljs.core.__destructure_map(map__20913);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20913__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20914 = p__20910;
var map__20914__$1 = cljs.core.__destructure_map(map__20914);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20914__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20924,p__20925){
var map__20926 = p__20924;
var map__20926__$1 = cljs.core.__destructure_map(map__20926);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20928 = p__20925;
var map__20928__$1 = cljs.core.__destructure_map(map__20928);
var msg = map__20928__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20928__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20930,tid){
var map__20931 = p__20930;
var map__20931__$1 = cljs.core.__destructure_map(map__20931);
var svc = map__20931__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20931__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20938 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20939 = null;
var count__20940 = (0);
var i__20941 = (0);
while(true){
if((i__20941 < count__20940)){
var vec__20955 = chunk__20939.cljs$core$IIndexed$_nth$arity$2(null,i__20941);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20955,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20955,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20966 = seq__20938;
var G__20967 = chunk__20939;
var G__20968 = count__20940;
var G__20969 = (i__20941 + (1));
seq__20938 = G__20966;
chunk__20939 = G__20967;
count__20940 = G__20968;
i__20941 = G__20969;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20938);
if(temp__5804__auto__){
var seq__20938__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20938__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20938__$1);
var G__20970 = cljs.core.chunk_rest(seq__20938__$1);
var G__20971 = c__5568__auto__;
var G__20972 = cljs.core.count(c__5568__auto__);
var G__20973 = (0);
seq__20938 = G__20970;
chunk__20939 = G__20971;
count__20940 = G__20972;
i__20941 = G__20973;
continue;
} else {
var vec__20958 = cljs.core.first(seq__20938__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20958,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20958,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20975 = cljs.core.next(seq__20938__$1);
var G__20976 = null;
var G__20977 = (0);
var G__20978 = (0);
seq__20938 = G__20975;
chunk__20939 = G__20976;
count__20940 = G__20977;
i__20941 = G__20978;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20934_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20934_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20935_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20935_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20936_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20936_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20937_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20937_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20961){
var map__20962 = p__20961;
var map__20962__$1 = cljs.core.__destructure_map(map__20962);
var svc = map__20962__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
