goog.provide('rewig.components');
rewig.components.box = (function rewig$components$box(var_args){
var G__23288 = arguments.length;
switch (G__23288) {
case 1:
return rewig.components.box.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewig.components.box.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewig.components.box.cljs$core$IFn$_invoke$arity$1 = (function (children){
return rewig.components.box.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children);
}));

(rewig.components.box.cljs$core$IFn$_invoke$arity$2 = (function (p__23289,children){
var map__23290 = p__23289;
var map__23290__$1 = cljs.core.__destructure_map(map__23290);
var props = map__23290__$1;
var click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"click!","click!",-1285613604));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var reverse_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474));
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var content_align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"content-align","content-align",888595501));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"display","display",242065432));
var element__$1 = (function (){var or__5045__auto__ = element;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"div","div",1057191632);
}
})();
var attrs__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = attrs;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_BANG_], null)], 0));
var hidden_QMARK___$1 = (function (){var or__5045__auto__ = hidden_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return false;
}
})();
var reverse_QMARK___$1 = (function (){var or__5045__auto__ = reverse_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return false;
}
})();
var display__$1 = cljs.core.name((function (){var or__5045__auto__ = display;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"flex","flex",-1425124628);
}
})());
var align__$1 = cljs.core.name((function (){var or__5045__auto__ = align;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"flex-start","flex-start",1432697815);
}
})());
var content_align__$1 = cljs.core.name((function (){var or__5045__auto__ = content_align;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"flex-start","flex-start",1432697815);
}
})());
var wrap__$1 = cljs.core.name((function (){var or__5045__auto__ = wrap;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"nowrap","nowrap",457264988);
}
})());
var direction__$1 = [cljs.core.name((function (){var or__5045__auto__ = direction;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"row","row",-570139521);
}
})()),(cljs.core.truth_(reverse_QMARK___$1)?"-reverse":null)].join('');
var css__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([css,rewig.util.size_map(size),rewig.util.named_sides_map("margin",margin),rewig.util.named_sides_map("padding",padding),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),display__$1,new cljs.core.Keyword(null,"align-items","align-items",-267946462),align__$1,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),content_align__$1,new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),wrap__$1,new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),direction__$1], null)], 0));
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs__$1),css__$1], 0)));
var children__$1 = ((cljs.core.fn_QMARK_(cljs.core.first(children)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null):(((cljs.core.first(children) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null):children
));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element__$1,props__$1], null),children__$1);
}));

(rewig.components.box.cljs$lang$maxFixedArity = 2);

rewig.components.row = (function rewig$components$row(var_args){
var G__23292 = arguments.length;
switch (G__23292) {
case 1:
return rewig.components.row.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewig.components.row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewig.components.row.cljs$core$IFn$_invoke$arity$1 = (function (children){
return rewig.components.row.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children);
}));

(rewig.components.row.cljs$core$IFn$_invoke$arity$2 = (function (props,children){
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"row","row",-570139521));
return rewig.components.box.cljs$core$IFn$_invoke$arity$2(props__$1,children);
}));

(rewig.components.row.cljs$lang$maxFixedArity = 2);

rewig.components.column = (function rewig$components$column(var_args){
var G__23294 = arguments.length;
switch (G__23294) {
case 1:
return rewig.components.column.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewig.components.column.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewig.components.column.cljs$core$IFn$_invoke$arity$1 = (function (children){
return rewig.components.column.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children);
}));

(rewig.components.column.cljs$core$IFn$_invoke$arity$2 = (function (props,children){
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"column","column",2078222095));
return rewig.components.box.cljs$core$IFn$_invoke$arity$2(props__$1,children);
}));

(rewig.components.column.cljs$lang$maxFixedArity = 2);

rewig.components.gap = (function rewig$components$gap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23306 = arguments.length;
var i__5770__auto___23307 = (0);
while(true){
if((i__5770__auto___23307 < len__5769__auto___23306)){
args__5775__auto__.push((arguments[i__5770__auto___23307]));

var G__23308 = (i__5770__auto___23307 + (1));
i__5770__auto___23307 = G__23308;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return rewig.components.gap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(rewig.components.gap.cljs$core$IFn$_invoke$arity$variadic = (function (p__23296){
var map__23297 = p__23296;
var map__23297__$1 = cljs.core.__destructure_map(map__23297);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23297__$1,new cljs.core.Keyword(null,"size","size",1098693007),(0));
var flex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23297__$1,new cljs.core.Keyword(null,"flex","flex",-1425124628));
return rewig.components.box.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),flex,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0)], null),new cljs.core.Keyword(null,"size","size",1098693007),size], null),null);
}));

(rewig.components.gap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(rewig.components.gap.cljs$lang$applyTo = (function (seq23295){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23295));
}));

rewig.components.button = (function rewig$components$button(var_args){
var G__23299 = arguments.length;
switch (G__23299) {
case 1:
return rewig.components.button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewig.components.button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewig.components.button.cljs$core$IFn$_invoke$arity$1 = (function (children){
return rewig.components.button.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children);
}));

(rewig.components.button.cljs$core$IFn$_invoke$arity$2 = (function (p__23300,children){
var map__23301 = p__23300;
var map__23301__$1 = cljs.core.__destructure_map(map__23301);
var props = map__23301__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23301__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23301__$1,new cljs.core.Keyword(null,"click!","click!",-1285613604));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23301__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], 0));
var type__$1 = (function (){var or__5045__auto__ = type;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"normal","normal",-1519123858);
}
})();
var css__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null),(function (){var G__23302 = type__$1;
var G__23302__$1 = (((G__23302 instanceof cljs.core.Keyword))?G__23302.fqn:null);
switch (G__23302__$1) {
case "normal":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),rewig.theme.gruvbox.bg0,new cljs.core.Keyword(null,"color","color",1011675173),rewig.theme.gruvbox.fg0], null);

break;
case "primary":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),rewig.theme.gruvbox.primary,new cljs.core.Keyword(null,"color","color",1011675173),rewig.theme.gruvbox.fg0], null);

break;
case "success":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),rewig.theme.gruvbox.success,new cljs.core.Keyword(null,"color","color",1011675173),rewig.theme.gruvbox.fg0], null);

break;
case "danger":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),rewig.theme.gruvbox.danger,new cljs.core.Keyword(null,"color","color",1011675173),rewig.theme.gruvbox.fg0], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23302__$1)].join('')));

}
})(),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),rewig.theme.gruvbox.fg4,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"not-allowed",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.25"], null):null),css], 0));
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"css","css",1135045163),css__$1], 0));
return rewig.components.box.cljs$core$IFn$_invoke$arity$2(props__$1,children);
}));

(rewig.components.button.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewig.components.js.map
