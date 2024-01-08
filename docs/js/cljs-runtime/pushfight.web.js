goog.provide('pushfight.web');
pushfight.web.cell__GT_box = (function pushfight$web$cell__GT_box(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35382 = arguments.length;
var i__5770__auto___35383 = (0);
while(true){
if((i__5770__auto___35383 < len__5769__auto___35382)){
args__5775__auto__.push((arguments[i__5770__auto___35383]));

var G__35384 = (i__5770__auto___35383 + (1));
i__5770__auto___35383 = G__35384;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return pushfight.web.cell__GT_box.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(pushfight.web.cell__GT_box.cljs$core$IFn$_invoke$arity$variadic = (function (cell,p__35337){
var map__35338 = p__35337;
var map__35338__$1 = cljs.core.__destructure_map(map__35338);
var cell_background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35338__$1,new cljs.core.Keyword(null,"cell-background","cell-background",1870221800));
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(cell);
var anchored_QMARK_ = pushfight.core.anchored_QMARK_(cell);
var icon_color = ((pushfight.core.black_QMARK_(piece))?rewig.theme.gruvbox.bg0:((pushfight.core.white_QMARK_(piece))?rewig.theme.gruvbox.fg0:(cljs.core.truth_(anchored_QMARK_)?rewig.theme.gruvbox.light_orange:"rgba(0,0,0,0)"
)));
var icon = ((pushfight.core.wall_cell_QMARK_(cell))?"\uDB81\uDFFE":(cljs.core.truth_(anchored_QMARK_)?"\uF0FE":((pushfight.core.round_QMARK_(piece))?"\uF111":((pushfight.core.pusher_QMARK_(piece))?"\uF0C8":"\uF0C8"
))));
var icon_background_color = (cljs.core.truth_((function (){var and__5043__auto__ = anchored_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!((piece == null)));
} else {
return and__5043__auto__;
}
})())?rewig.theme.gruvbox.danger:null);
var background_color = (cljs.core.truth_(cell_background)?cell_background:((pushfight.core.void_cell_QMARK_(cell))?"rgba(0,0,0,0)":((pushfight.core.wall_cell_QMARK_(cell))?rewig.theme.gruvbox.danger:rewig.theme.gruvbox.light_gray
)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),icon_color], null),new cljs.core.Keyword(null,"padding","padding",1660304693),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),icon_background_color], null)], null),icon], null)], null);
}));

(pushfight.web.cell__GT_box.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pushfight.web.cell__GT_box.cljs$lang$applyTo = (function (seq35335){
var G__35336 = cljs.core.first(seq35335);
var seq35335__$1 = cljs.core.next(seq35335);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35336,seq35335__$1);
}));

pushfight.web.display_board = (function pushfight$web$display_board(board,cell_background_QMARK_,cell_click_BANG_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.column,(function (){var iter__5523__auto__ = (function pushfight$web$display_board_$_iter__35339(s__35340){
return (new cljs.core.LazySeq(null,(function (){
var s__35340__$1 = s__35340;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__35340__$1);
if(temp__5804__auto__){
var s__35340__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35340__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35340__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35342 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35341 = (0);
while(true){
if((i__35341 < size__5522__auto__)){
var rn = cljs.core._nth(c__5521__auto__,i__35341);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,rn);
cljs.core.chunk_append(b__35342,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.row,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = ((function (i__35341,r,rn,c__5521__auto__,size__5522__auto__,b__35342,s__35340__$2,temp__5804__auto__){
return (function pushfight$web$display_board_$_iter__35339_$_iter__35343(s__35344){
return (new cljs.core.LazySeq(null,((function (i__35341,r,rn,c__5521__auto__,size__5522__auto__,b__35342,s__35340__$2,temp__5804__auto__){
return (function (){
var s__35344__$1 = s__35344;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__35344__$1);
if(temp__5804__auto____$1){
var s__35344__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35344__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__35344__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__35346 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__35345 = (0);
while(true){
if((i__35345 < size__5522__auto____$1)){
var cn = cljs.core._nth(c__5521__auto____$1,i__35345);
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,cn);
var cell_key = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell",rn,cn], null));
cljs.core.chunk_append(b__35346,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),0.2,new cljs.core.Keyword(null,"click!","click!",-1285613604),((function (i__35345,i__35341,cell,cell_key,cn,c__5521__auto____$1,size__5522__auto____$1,b__35346,s__35344__$2,temp__5804__auto____$1,r,rn,c__5521__auto__,size__5522__auto__,b__35342,s__35340__$2,temp__5804__auto__){
return (function (){
var G__35347 = cell;
var G__35348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null);
return (cell_click_BANG_.cljs$core$IFn$_invoke$arity$2 ? cell_click_BANG_.cljs$core$IFn$_invoke$arity$2(G__35347,G__35348) : cell_click_BANG_.call(null,G__35347,G__35348));
});})(i__35345,i__35341,cell,cell_key,cn,c__5521__auto____$1,size__5522__auto____$1,b__35346,s__35344__$2,temp__5804__auto____$1,r,rn,c__5521__auto__,size__5522__auto__,b__35342,s__35340__$2,temp__5804__auto__))
], null),pushfight.web.cell__GT_box.cljs$core$IFn$_invoke$arity$variadic(cell,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cell-background","cell-background",1870221800),(function (){var G__35349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null);
return (cell_background_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cell_background_QMARK_.cljs$core$IFn$_invoke$arity$1(G__35349) : cell_background_QMARK_.call(null,G__35349));
})()], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cell_key], null)));

var G__35385 = (i__35345 + (1));
i__35345 = G__35385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35346),pushfight$web$display_board_$_iter__35339_$_iter__35343(cljs.core.chunk_rest(s__35344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35346),null);
}
} else {
var cn = cljs.core.first(s__35344__$2);
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,cn);
var cell_key = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell",rn,cn], null));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),0.2,new cljs.core.Keyword(null,"click!","click!",-1285613604),((function (i__35341,cell,cell_key,cn,s__35344__$2,temp__5804__auto____$1,r,rn,c__5521__auto__,size__5522__auto__,b__35342,s__35340__$2,temp__5804__auto__){
return (function (){
var G__35350 = cell;
var G__35351 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null);
return (cell_click_BANG_.cljs$core$IFn$_invoke$arity$2 ? cell_click_BANG_.cljs$core$IFn$_invoke$arity$2(G__35350,G__35351) : cell_click_BANG_.call(null,G__35350,G__35351));
});})(i__35341,cell,cell_key,cn,s__35344__$2,temp__5804__auto____$1,r,rn,c__5521__auto__,size__5522__auto__,b__35342,s__35340__$2,temp__5804__auto__))
], null),pushfight.web.cell__GT_box.cljs$core$IFn$_invoke$arity$variadic(cell,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cell-background","cell-background",1870221800),(function (){var G__35352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null);
return (cell_background_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cell_background_QMARK_.cljs$core$IFn$_invoke$arity$1(G__35352) : cell_background_QMARK_.call(null,G__35352));
})()], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cell_key], null)),pushfight$web$display_board_$_iter__35339_$_iter__35343(cljs.core.rest(s__35344__$2)));
}
} else {
return null;
}
break;
}
});})(i__35341,r,rn,c__5521__auto__,size__5522__auto__,b__35342,s__35340__$2,temp__5804__auto__))
,null,null));
});})(i__35341,r,rn,c__5521__auto__,size__5522__auto__,b__35342,s__35340__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(r)));
})())], null)], null));

var G__35386 = (i__35341 + (1));
i__35341 = G__35386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35342),pushfight$web$display_board_$_iter__35339(cljs.core.chunk_rest(s__35340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35342),null);
}
} else {
var rn = cljs.core.first(s__35340__$2);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,rn);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.row,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = ((function (r,rn,s__35340__$2,temp__5804__auto__){
return (function pushfight$web$display_board_$_iter__35339_$_iter__35353(s__35354){
return (new cljs.core.LazySeq(null,(function (){
var s__35354__$1 = s__35354;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__35354__$1);
if(temp__5804__auto____$1){
var s__35354__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35354__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35354__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35356 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35355 = (0);
while(true){
if((i__35355 < size__5522__auto__)){
var cn = cljs.core._nth(c__5521__auto__,i__35355);
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,cn);
var cell_key = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell",rn,cn], null));
cljs.core.chunk_append(b__35356,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),0.2,new cljs.core.Keyword(null,"click!","click!",-1285613604),((function (i__35355,cell,cell_key,cn,c__5521__auto__,size__5522__auto__,b__35356,s__35354__$2,temp__5804__auto____$1,r,rn,s__35340__$2,temp__5804__auto__){
return (function (){
var G__35357 = cell;
var G__35358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null);
return (cell_click_BANG_.cljs$core$IFn$_invoke$arity$2 ? cell_click_BANG_.cljs$core$IFn$_invoke$arity$2(G__35357,G__35358) : cell_click_BANG_.call(null,G__35357,G__35358));
});})(i__35355,cell,cell_key,cn,c__5521__auto__,size__5522__auto__,b__35356,s__35354__$2,temp__5804__auto____$1,r,rn,s__35340__$2,temp__5804__auto__))
], null),pushfight.web.cell__GT_box.cljs$core$IFn$_invoke$arity$variadic(cell,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cell-background","cell-background",1870221800),(function (){var G__35359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null);
return (cell_background_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cell_background_QMARK_.cljs$core$IFn$_invoke$arity$1(G__35359) : cell_background_QMARK_.call(null,G__35359));
})()], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cell_key], null)));

var G__35387 = (i__35355 + (1));
i__35355 = G__35387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35356),pushfight$web$display_board_$_iter__35339_$_iter__35353(cljs.core.chunk_rest(s__35354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35356),null);
}
} else {
var cn = cljs.core.first(s__35354__$2);
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,cn);
var cell_key = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell",rn,cn], null));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),0.2,new cljs.core.Keyword(null,"click!","click!",-1285613604),((function (cell,cell_key,cn,s__35354__$2,temp__5804__auto____$1,r,rn,s__35340__$2,temp__5804__auto__){
return (function (){
var G__35360 = cell;
var G__35361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null);
return (cell_click_BANG_.cljs$core$IFn$_invoke$arity$2 ? cell_click_BANG_.cljs$core$IFn$_invoke$arity$2(G__35360,G__35361) : cell_click_BANG_.call(null,G__35360,G__35361));
});})(cell,cell_key,cn,s__35354__$2,temp__5804__auto____$1,r,rn,s__35340__$2,temp__5804__auto__))
], null),pushfight.web.cell__GT_box.cljs$core$IFn$_invoke$arity$variadic(cell,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cell-background","cell-background",1870221800),(function (){var G__35362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null);
return (cell_background_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cell_background_QMARK_.cljs$core$IFn$_invoke$arity$1(G__35362) : cell_background_QMARK_.call(null,G__35362));
})()], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cell_key], null)),pushfight$web$display_board_$_iter__35339_$_iter__35353(cljs.core.rest(s__35354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,rn,s__35340__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(r)));
})())], null)], null),pushfight$web$display_board_$_iter__35339(cljs.core.rest(s__35340__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(board)));
})()], null);
});
pushfight.web.game = (function pushfight$web$game(board_STAR_,game_over_BANG_){
var with_let35365 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let35365","with-let35365",1826896539));
var temp__5808__auto___35388 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___35388 == null)){
} else {
var c__11871__auto___35389 = temp__5808__auto___35388;
if((with_let35365.generation === c__11871__auto___35389.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let35365.generation = c__11871__auto___35389.ratomGeneration);
}

var init35366 = (with_let35365.length === (0));
var selected_cell_STAR_ = ((((init35366) || (cljs.core.not(with_let35365.hasOwnProperty((0))))))?(with_let35365[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let35365[(0)]));
var move_to_cells_STAR_ = ((((init35366) || (cljs.core.not(with_let35365.hasOwnProperty((1))))))?(with_let35365[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)):(with_let35365[(1)]));
var pushable_cells_STAR_ = ((((init35366) || (cljs.core.not(with_let35365.hasOwnProperty((2))))))?(with_let35365[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)):(with_let35365[(2)]));
var turn_count_STAR_ = ((((init35366) || (cljs.core.not(with_let35365.hasOwnProperty((3))))))?(with_let35365[(3)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1))):(with_let35365[(3)]));
var team_turn_STAR_ = ((((init35366) || (cljs.core.not(with_let35365.hasOwnProperty((4))))))?(with_let35365[(4)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"white","white",-483998618))):(with_let35365[(4)]));
var remaining_moves_STAR_ = ((((init35366) || (cljs.core.not(with_let35365.hasOwnProperty((5))))))?(with_let35365[(5)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((2))):(with_let35365[(5)]));
var game_log_STAR_ = ((((init35366) || (cljs.core.not(with_let35365.hasOwnProperty((6))))))?(with_let35365[(6)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.deref(board_STAR_),new cljs.core.Keyword(null,"turn-count","turn-count",1105131756),cljs.core.deref(turn_count_STAR_),new cljs.core.Keyword(null,"team-turn","team-turn",-1201540157),cljs.core.deref(team_turn_STAR_),new cljs.core.Keyword(null,"remaining-moves","remaining-moves",-2067254717),cljs.core.deref(remaining_moves_STAR_)], null)], null))):(with_let35365[(6)]));
var highlight_cells_BANG_ = ((((init35366) || (cljs.core.not(with_let35365.hasOwnProperty((7))))))?(with_let35365[(7)] = (function (pos){
if((cljs.core.deref(remaining_moves_STAR_) > (0))){
cljs.core.reset_BANG_(move_to_cells_STAR_,pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(board_STAR_),pos));
} else {
}

cljs.core.reset_BANG_(pushable_cells_STAR_,pushfight.core.get_available_push_pos(cljs.core.deref(board_STAR_),pos));

return cljs.core.reset_BANG_(selected_cell_STAR_,pos);
})):(with_let35365[(7)]));
var clear_selection_BANG_ = ((((init35366) || (cljs.core.not(with_let35365.hasOwnProperty((8))))))?(with_let35365[(8)] = (function (){
cljs.core.reset_BANG_(move_to_cells_STAR_,null);

cljs.core.reset_BANG_(pushable_cells_STAR_,null);

return cljs.core.reset_BANG_(selected_cell_STAR_,null);
})):(with_let35365[(8)]));
var res35367 = (function (){var board = cljs.core.deref(board_STAR_);
var selected_cell = cljs.core.deref(selected_cell_STAR_);
var move_to_cells = cljs.core.deref(move_to_cells_STAR_);
var pushable_cells = cljs.core.deref(pushable_cells_STAR_);
var turn_count = cljs.core.deref(turn_count_STAR_);
var team_turn = cljs.core.deref(team_turn_STAR_);
var remaining_moves = cljs.core.deref(remaining_moves_STAR_);
var game_log = cljs.core.deref(game_log_STAR_);
var undo_BANG_ = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(game_log_STAR_,(function (p1__35363_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(p1__35363_SHARP_));
}));

var map__35368 = cljs.core.last(cljs.core.deref(game_log_STAR_));
var map__35368__$1 = cljs.core.__destructure_map(map__35368);
var board__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35368__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var turn_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35368__$1,new cljs.core.Keyword(null,"turn-count","turn-count",1105131756));
var team_turn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35368__$1,new cljs.core.Keyword(null,"team-turn","team-turn",-1201540157));
var remaining_moves__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35368__$1,new cljs.core.Keyword(null,"remaining-moves","remaining-moves",-2067254717));
cljs.core.reset_BANG_(board_STAR_,board__$1);

cljs.core.reset_BANG_(turn_count_STAR_,turn_count__$1);

cljs.core.reset_BANG_(team_turn_STAR_,team_turn__$1);

return cljs.core.reset_BANG_(remaining_moves_STAR_,remaining_moves__$1);
});
var update_game_state_BANG_ = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(game_log_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.deref(board_STAR_),new cljs.core.Keyword(null,"turn-count","turn-count",1105131756),cljs.core.deref(turn_count_STAR_),new cljs.core.Keyword(null,"team-turn","team-turn",-1201540157),cljs.core.deref(team_turn_STAR_),new cljs.core.Keyword(null,"remaining-moves","remaining-moves",-2067254717),cljs.core.deref(remaining_moves_STAR_)], null));
});
var move_piece_BANG_ = (function (src,dest){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(board_STAR_,pushfight.core.move_piece,src,dest);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(remaining_moves_STAR_,cljs.core.dec);

update_game_state_BANG_();

return (clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_selection_BANG_.call(null));
});
var push_piece_BANG_ = (function (src,dest){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(board_STAR_,pushfight.core.remove_anchors);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(board_STAR_,pushfight.core.push_piece,src,dest);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(board_STAR_,pushfight.core.anchor_cell,dest);

(clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_selection_BANG_.call(null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(turn_count_STAR_,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(team_turn_STAR_,(function (p1__35364_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__35364_SHARP_,new cljs.core.Keyword(null,"white","white",-483998618))){
return new cljs.core.Keyword(null,"black","black",1294279647);
} else {
return new cljs.core.Keyword(null,"white","white",-483998618);
}
}));

cljs.core.reset_BANG_(remaining_moves_STAR_,(2));

update_game_state_BANG_();

if(cljs.core.truth_(pushfight.core.game_over_QMARK_(board))){
return (game_over_BANG_.cljs$core$IFn$_invoke$arity$0 ? game_over_BANG_.cljs$core$IFn$_invoke$arity$0() : game_over_BANG_.call(null));
} else {
return null;
}
});
var cell_background_QMARK_ = (function (pos){
if(cljs.core.contains_QMARK_(move_to_cells,pos)){
return rewig.theme.gruvbox.light_green;
} else {
if(cljs.core.contains_QMARK_(pushable_cells,pos)){
return rewig.theme.gruvbox.danger;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_cell,pos)){
return rewig.theme.gruvbox.highlight;
} else {
return null;
}
}
}
});
var box_click_BANG_ = (function (cell,pos){
if(((cljs.core.not(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(cell))) && ((((!(cljs.core.contains_QMARK_(move_to_cells,pos)))) && ((!(cljs.core.contains_QMARK_(pushable_cells,pos)))))))){
return (clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_selection_BANG_.call(null));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.truth_(and__5043__auto__)){
return (((!(cljs.core.contains_QMARK_(move_to_cells,pos)))) && ((((!(cljs.core.contains_QMARK_(pushable_cells,pos)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(team_turn_STAR_),pushfight.core.team_QMARK_(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(cell)))))));
} else {
return and__5043__auto__;
}
})())){
return (highlight_cells_BANG_.cljs$core$IFn$_invoke$arity$1 ? highlight_cells_BANG_.cljs$core$IFn$_invoke$arity$1(pos) : highlight_cells_BANG_.call(null,pos));
} else {
if((((!((selected_cell == null)))) && (cljs.core.contains_QMARK_(move_to_cells,pos)))){
return move_piece_BANG_(selected_cell,pos);
} else {
if((((!((selected_cell == null)))) && (cljs.core.contains_QMARK_(pushable_cells,pos)))){
return push_piece_BANG_(selected_cell,pos);
} else {
return null;
}
}
}
}
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([game_log], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.column,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rewig.theme.gruvbox.text], null)], null),["Turn #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(turn_count),": ",cljs.core.name(team_turn)," turn"].join('')], null),(((remaining_moves > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rewig.theme.gruvbox.text], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(remaining_moves)," Moves left"].join('')], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rewig.theme.gruvbox.text], null)], null),"Push to finish the turn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.gap,new cljs.core.Keyword(null,"size","size",1098693007),(20)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pushfight.web.display_board,board,cell_background_QMARK_,box_click_BANG_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.gap,new cljs.core.Keyword(null,"size","size",1098693007),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.gap,new cljs.core.Keyword(null,"size","size",1098693007),(60)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(cljs.core.count(game_log) <= (1)),new cljs.core.Keyword(null,"click!","click!",-1285613604),undo_BANG_], null),"Undo!"], null)], null)], null)], null)], null);
})();
return res35367;
});
pushfight.web.place_pieces = (function pushfight$web$place_pieces(board_STAR_,start_game_BANG_){
var with_let35369 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let35369","with-let35369",1827357130));
var temp__5808__auto___35390 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___35390 == null)){
} else {
var c__11871__auto___35391 = temp__5808__auto___35390;
if((with_let35369.generation === c__11871__auto___35391.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let35369.generation = c__11871__auto___35391.ratomGeneration);
}

var init35370 = (with_let35369.length === (0));
var unplaced_pieces_STAR_ = ((((init35370) || (cljs.core.not(with_let35369.hasOwnProperty((0))))))?(with_let35369[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),pushfight.core.white_square),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),pushfight.core.white_round),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),pushfight.core.black_round),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),pushfight.core.black_square)], 0))))):(with_let35369[(0)]));
var selected_cell_STAR_ = ((((init35370) || (cljs.core.not(with_let35369.hasOwnProperty((1))))))?(with_let35369[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let35369[(1)]));
var move_to_cells_STAR_ = ((((init35370) || (cljs.core.not(with_let35369.hasOwnProperty((2))))))?(with_let35369[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)):(with_let35369[(2)]));
var clear_selection_BANG_ = ((((init35370) || (cljs.core.not(with_let35369.hasOwnProperty((3))))))?(with_let35369[(3)] = (function (){
cljs.core.reset_BANG_(move_to_cells_STAR_,null);

return cljs.core.reset_BANG_(selected_cell_STAR_,null);
})):(with_let35369[(3)]));
var highlight_cells_BANG_ = ((((init35370) || (cljs.core.not(with_let35369.hasOwnProperty((4))))))?(with_let35369[(4)] = (function (piece,pos){
var side = ((pushfight.core.black_QMARK_(piece))?new cljs.core.Keyword(null,"right","right",-452581833):((pushfight.core.white_QMARK_(piece))?new cljs.core.Keyword(null,"left","left",-399115937):null));
cljs.core.reset_BANG_(move_to_cells_STAR_,pushfight.core.get_half_board_pos(cljs.core.deref(board_STAR_),side));

return cljs.core.reset_BANG_(selected_cell_STAR_,pos);
})):(with_let35369[(4)]));
var move_piece_BANG_ = ((((init35370) || (cljs.core.not(with_let35369.hasOwnProperty((5))))))?(with_let35369[(5)] = (function (src,dest){
if(typeof src === 'number'){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(board_STAR_,cljs.core.update_in,dest,pushfight.core.place_piece,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(unplaced_pieces_STAR_),src)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(unplaced_pieces_STAR_,cljs.core.assoc,src,null);

return (clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_selection_BANG_.call(null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(board_STAR_,pushfight.core.move_piece,src,dest);

return (clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_selection_BANG_.call(null));

}
})):(with_let35369[(5)]));
var res35371 = (function (){var board = cljs.core.deref(board_STAR_);
var unplaced_pieces = cljs.core.deref(unplaced_pieces_STAR_);
var selected_cell = cljs.core.deref(selected_cell_STAR_);
var move_to_cells = cljs.core.deref(move_to_cells_STAR_);
var cell_background_QMARK_ = (function (pos){
if(cljs.core.contains_QMARK_(move_to_cells,pos)){
return rewig.theme.gruvbox.light_green;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_cell,pos)){
return rewig.theme.gruvbox.highlight;
} else {
return null;
}
}
});
var piece_click_BANG_ = (function (piece,pos){
if(typeof pos === 'number'){
return (highlight_cells_BANG_.cljs$core$IFn$_invoke$arity$2 ? highlight_cells_BANG_.cljs$core$IFn$_invoke$arity$2(piece,pos) : highlight_cells_BANG_.call(null,piece,pos));
} else {
if(((cljs.core.not(piece)) && ((!(cljs.core.contains_QMARK_(move_to_cells,pos)))))){
return (clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_selection_BANG_.call(null));
} else {
return null;
}
}
});
var cell_click_BANG_ = (function (p__35372,pos){
var map__35373 = p__35372;
var map__35373__$1 = cljs.core.__destructure_map(map__35373);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35373__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
if(((cljs.core.not(piece)) && ((!(cljs.core.contains_QMARK_(move_to_cells,pos)))))){
return (clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_selection_BANG_.call(null));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = piece;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.contains_QMARK_(move_to_cells,pos)));
} else {
return and__5043__auto__;
}
})())){
return (highlight_cells_BANG_.cljs$core$IFn$_invoke$arity$2 ? highlight_cells_BANG_.cljs$core$IFn$_invoke$arity$2(piece,pos) : highlight_cells_BANG_.call(null,piece,pos));
} else {
if((((!((selected_cell == null)))) && (cljs.core.contains_QMARK_(move_to_cells,pos)))){
return (move_piece_BANG_.cljs$core$IFn$_invoke$arity$2 ? move_piece_BANG_.cljs$core$IFn$_invoke$arity$2(selected_cell,pos) : move_piece_BANG_.call(null,selected_cell,pos));
} else {
return null;
}
}
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.column,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rewig.theme.gruvbox.text], null)], null),"pieces to choose from: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.row,(function (){var iter__5523__auto__ = (function pushfight$web$place_pieces_$_iter__35374(s__35375){
return (new cljs.core.LazySeq(null,(function (){
var s__35375__$1 = s__35375;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__35375__$1);
if(temp__5804__auto__){
var s__35375__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35375__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35375__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35377 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35376 = (0);
while(true){
if((i__35376 < size__5522__auto__)){
var idx = cljs.core._nth(c__5521__auto__,i__35376);
var piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(unplaced_pieces,idx);
cljs.core.chunk_append(b__35377,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),0.2,new cljs.core.Keyword(null,"click!","click!",-1285613604),((function (i__35376,piece,idx,c__5521__auto__,size__5522__auto__,b__35377,s__35375__$2,temp__5804__auto__,board,unplaced_pieces,selected_cell,move_to_cells,cell_background_QMARK_,piece_click_BANG_,cell_click_BANG_,init35370,unplaced_pieces_STAR_,selected_cell_STAR_,move_to_cells_STAR_,clear_selection_BANG_,highlight_cells_BANG_,move_piece_BANG_,with_let35369){
return (function (){
return piece_click_BANG_(piece,idx);
});})(i__35376,piece,idx,c__5521__auto__,size__5522__auto__,b__35377,s__35375__$2,temp__5804__auto__,board,unplaced_pieces,selected_cell,move_to_cells,cell_background_QMARK_,piece_click_BANG_,cell_click_BANG_,init35370,unplaced_pieces_STAR_,selected_cell_STAR_,move_to_cells_STAR_,clear_selection_BANG_,highlight_cells_BANG_,move_piece_BANG_,with_let35369))
], null),pushfight.web.cell__GT_box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pushfight.core.floor_cell,new cljs.core.Keyword(null,"piece","piece",1396691784),piece),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cell-background","cell-background",1870221800),cell_background_QMARK_(idx)], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__35392 = (i__35376 + (1));
i__35376 = G__35392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35377),pushfight$web$place_pieces_$_iter__35374(cljs.core.chunk_rest(s__35375__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35377),null);
}
} else {
var idx = cljs.core.first(s__35375__$2);
var piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(unplaced_pieces,idx);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),0.2,new cljs.core.Keyword(null,"click!","click!",-1285613604),((function (piece,idx,s__35375__$2,temp__5804__auto__,board,unplaced_pieces,selected_cell,move_to_cells,cell_background_QMARK_,piece_click_BANG_,cell_click_BANG_,init35370,unplaced_pieces_STAR_,selected_cell_STAR_,move_to_cells_STAR_,clear_selection_BANG_,highlight_cells_BANG_,move_piece_BANG_,with_let35369){
return (function (){
return piece_click_BANG_(piece,idx);
});})(piece,idx,s__35375__$2,temp__5804__auto__,board,unplaced_pieces,selected_cell,move_to_cells,cell_background_QMARK_,piece_click_BANG_,cell_click_BANG_,init35370,unplaced_pieces_STAR_,selected_cell_STAR_,move_to_cells_STAR_,clear_selection_BANG_,highlight_cells_BANG_,move_piece_BANG_,with_let35369))
], null),pushfight.web.cell__GT_box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pushfight.core.floor_cell,new cljs.core.Keyword(null,"piece","piece",1396691784),piece),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cell-background","cell-background",1870221800),cell_background_QMARK_(idx)], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),pushfight$web$place_pieces_$_iter__35374(cljs.core.rest(s__35375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(unplaced_pieces)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.gap,new cljs.core.Keyword(null,"size","size",1098693007),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pushfight.web.display_board,board,cell_background_QMARK_,cell_click_BANG_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.gap,new cljs.core.Keyword(null,"size","size",1098693007),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.gap,new cljs.core.Keyword(null,"size","size",1098693007),(60)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,unplaced_pieces)),new cljs.core.Keyword(null,"click!","click!",-1285613604),start_game_BANG_], null),"Start Game!"], null)], null)], null)], null)], null);
})();
return res35371;
});
pushfight.web.start_menu = (function pushfight$web$start_menu(board_STAR_,initial_board_STAR_,start_game_BANG_,restart_game_BANG_,default_game_BANG_,place_pieces_BANG_){
var board = cljs.core.deref(board_STAR_);
var initial_board = cljs.core.deref(initial_board_STAR_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.column,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.gap,new cljs.core.Keyword(null,"size","size",1098693007),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"click!","click!",-1285613604),place_pieces_BANG_], null),"Place Pieces"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.gap,new cljs.core.Keyword(null,"size","size",1098693007),(10)], null),(cljs.core.truth_(cljs.core.deref(initial_board_STAR_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"click!","click!",-1285613604),restart_game_BANG_], null),"Reuse Arrangement"], null):null),(cljs.core.truth_(cljs.core.deref(initial_board_STAR_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.gap,new cljs.core.Keyword(null,"size","size",1098693007),(10)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"click!","click!",-1285613604),default_game_BANG_], null),"Default Arrangement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.gap,new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null)], null);
});
pushfight.web.app = (function pushfight$web$app(){
var with_let35378 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let35378","with-let35378",1738390620));
var temp__5808__auto___35393 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___35393 == null)){
} else {
var c__11871__auto___35394 = temp__5808__auto___35393;
if((with_let35378.generation === c__11871__auto___35394.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let35378.generation = c__11871__auto___35394.ratomGeneration);
}

var init35379 = (with_let35378.length === (0));
var game_lifecycle_stage_STAR_ = ((((init35379) || (cljs.core.not(with_let35378.hasOwnProperty((0))))))?(with_let35378[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833))):(with_let35378[(0)]));
var board_STAR_ = ((((init35379) || (cljs.core.not(with_let35378.hasOwnProperty((1))))))?(with_let35378[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(pushfight.core.sample_board)):(with_let35378[(1)]));
var initial_board_STAR_ = ((((init35379) || (cljs.core.not(with_let35378.hasOwnProperty((2))))))?(with_let35378[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let35378[(2)]));
var start_game_BANG_ = ((((init35379) || (cljs.core.not(with_let35378.hasOwnProperty((3))))))?(with_let35378[(3)] = (function (){
cljs.core.reset_BANG_(initial_board_STAR_,cljs.core.deref(board_STAR_));

return cljs.core.reset_BANG_(game_lifecycle_stage_STAR_,new cljs.core.Keyword(null,"game","game",-441523833));
})):(with_let35378[(3)]));
var restart_game_BANG_ = ((((init35379) || (cljs.core.not(with_let35378.hasOwnProperty((4))))))?(with_let35378[(4)] = (function (){
cljs.core.reset_BANG_(board_STAR_,cljs.core.deref(initial_board_STAR_));

return cljs.core.reset_BANG_(game_lifecycle_stage_STAR_,new cljs.core.Keyword(null,"game","game",-441523833));
})):(with_let35378[(4)]));
var default_game_BANG_ = ((((init35379) || (cljs.core.not(with_let35378.hasOwnProperty((5))))))?(with_let35378[(5)] = (function (){
cljs.core.reset_BANG_(board_STAR_,pushfight.core.sample_board);

return (start_game_BANG_.cljs$core$IFn$_invoke$arity$0 ? start_game_BANG_.cljs$core$IFn$_invoke$arity$0() : start_game_BANG_.call(null));
})):(with_let35378[(5)]));
var place_pieces_BANG_ = ((((init35379) || (cljs.core.not(with_let35378.hasOwnProperty((6))))))?(with_let35378[(6)] = (function (){
cljs.core.reset_BANG_(board_STAR_,pushfight.core.make_standard_board());

return cljs.core.reset_BANG_(game_lifecycle_stage_STAR_,new cljs.core.Keyword(null,"placement","placement",768366651));
})):(with_let35378[(6)]));
var game_over_BANG_ = ((((init35379) || (cljs.core.not(with_let35378.hasOwnProperty((7))))))?(with_let35378[(7)] = (function (){
return cljs.core.reset_BANG_(game_lifecycle_stage_STAR_,new cljs.core.Keyword(null,"start-menu","start-menu",584615014));
})):(with_let35378[(7)]));
var res35380 = (function (){var k = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),rewig.theme.gruvbox.background,new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.Keyword(null,"size","size",1098693007),"100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewig.components.gap,new cljs.core.Keyword(null,"size","size",1098693007),"35%"], null),(function (){var G__35381 = cljs.core.deref(game_lifecycle_stage_STAR_);
var G__35381__$1 = (((G__35381 instanceof cljs.core.Keyword))?G__35381.fqn:null);
switch (G__35381__$1) {
case "start-menu":
return pushfight.web.start_menu(board_STAR_,initial_board_STAR_,start_game_BANG_,restart_game_BANG_,default_game_BANG_,place_pieces_BANG_);

break;
case "placement":
return pushfight.web.place_pieces(board_STAR_,start_game_BANG_);

break;
case "game":
return pushfight.web.game(board_STAR_,game_over_BANG_);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35381__$1)].join('')));

}
})()], null)], null);
})();
return res35380;
});
pushfight.web.main = (function pushfight$web$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pushfight.web.app], null),document.getElementById("app"));
});
goog.exportSymbol('pushfight.web.main', pushfight.web.main);
pushfight.web.main();

//# sourceMappingURL=pushfight.web.js.map
