goog.provide('pushfight.core');
pushfight.core.piece_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"round","round",2009433328),null,new cljs.core.Keyword(null,"square","square",812434677),null], null), null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),null,new cljs.core.Keyword(null,"black","black",1294279647),null], null), null)], null);
pushfight.core.cell_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wall","wall",-787661558),null,new cljs.core.Keyword(null,"void","void",-2084626863),null,new cljs.core.Keyword(null,"floor","floor",1882041021),null], null), null),new cljs.core.Keyword(null,"piece","piece",1396691784),cljs.core.PersistentHashSet.createAsIfByAssoc([null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"team","team",1355747699)], null)], null)]),new cljs.core.Keyword(null,"anchored?","anchored?",-1662221562),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null)], null);
pushfight.core.floor_cell = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"piece","piece",1396691784),null,new cljs.core.Keyword(null,"anchored?","anchored?",-1662221562),false], null);
pushfight.core.wall_cell = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"anchored?","anchored?",-1662221562),true], null);
pushfight.core.void_cell = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"void","void",-2084626863)], null);
pushfight.core.square_piece = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"square","square",812434677)], null);
pushfight.core.round_piece = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"round","round",2009433328)], null);
pushfight.core.black_square = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pushfight.core.square_piece,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"black","black",1294279647));
pushfight.core.black_round = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pushfight.core.round_piece,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"black","black",1294279647));
pushfight.core.white_square = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pushfight.core.square_piece,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"white","white",-483998618));
pushfight.core.white_round = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pushfight.core.round_piece,new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"white","white",-483998618));
pushfight.core.black_QMARK_ = (function pushfight$core$black_QMARK_(piece){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(piece));
});
pushfight.core.white_QMARK_ = (function pushfight$core$white_QMARK_(piece){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(piece));
});
pushfight.core.team_QMARK_ = (function pushfight$core$team_QMARK_(piece){
return new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(piece);
});
pushfight.core.pusher_QMARK_ = (function pushfight$core$pusher_QMARK_(p__14168){
var map__14169 = p__14168;
var map__14169__$1 = cljs.core.__destructure_map(map__14169);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14169__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(pushfight.core.square_piece));
});
pushfight.core.round_QMARK_ = (function pushfight$core$round_QMARK_(p__14170){
var map__14171 = p__14170;
var map__14171__$1 = cljs.core.__destructure_map(map__14171);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14171__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(pushfight.core.round_piece));
});
pushfight.core.void_cell_QMARK_ = (function pushfight$core$void_cell_QMARK_(p__14172){
var map__14173 = p__14172;
var map__14173__$1 = cljs.core.__destructure_map(map__14173);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14173__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(pushfight.core.void_cell));
});
pushfight.core.wall_cell_QMARK_ = (function pushfight$core$wall_cell_QMARK_(p__14174){
var map__14175 = p__14174;
var map__14175__$1 = cljs.core.__destructure_map(map__14175);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(pushfight.core.wall_cell));
});
pushfight.core.floor_cell_QMARK_ = (function pushfight$core$floor_cell_QMARK_(p__14176){
var map__14177 = p__14176;
var map__14177__$1 = cljs.core.__destructure_map(map__14177);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14177__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(pushfight.core.floor_cell));
});
pushfight.core.open_cell_QMARK_ = (function pushfight$core$open_cell_QMARK_(cell){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(pushfight.core.floor_cell))) && ((new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(cell) == null)));
});
pushfight.core.anchored_QMARK_ = (function pushfight$core$anchored_QMARK_(cell){
var or__5045__auto__ = pushfight.core.wall_cell_QMARK_(cell);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"anchored?","anchored?",-1662221562).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return false;
}
}
});
pushfight.core.make_standard_board = (function pushfight$core$make_standard_board(){
return cljs.core.vec(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [pushfight.core.void_cell,pushfight.core.void_cell,pushfight.core.void_cell,pushfight.core.wall_cell,pushfight.core.wall_cell,pushfight.core.wall_cell,pushfight.core.wall_cell,pushfight.core.wall_cell,pushfight.core.void_cell,pushfight.core.void_cell], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [pushfight.core.void_cell,pushfight.core.void_cell,pushfight.core.void_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.void_cell,pushfight.core.void_cell], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [pushfight.core.void_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.void_cell], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [pushfight.core.void_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.void_cell], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [pushfight.core.void_cell,pushfight.core.void_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.floor_cell,pushfight.core.void_cell,pushfight.core.void_cell,pushfight.core.void_cell], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [pushfight.core.void_cell,pushfight.core.void_cell,pushfight.core.wall_cell,pushfight.core.wall_cell,pushfight.core.wall_cell,pushfight.core.wall_cell,pushfight.core.wall_cell,pushfight.core.void_cell,pushfight.core.void_cell,pushfight.core.void_cell], null)], null));
});
pushfight.core.get_half_board_pos = (function pushfight$core$get_half_board_pos(board,side){
var op = (function (){var G__14178 = side;
var G__14178__$1 = (((G__14178 instanceof cljs.core.Keyword))?G__14178.fqn:null);
switch (G__14178__$1) {
case "left":
return cljs.core._LT_;

break;
case "right":
return cljs.core._GT__EQ_;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14178__$1)].join('')));

}
})();
var pos = (function (){var iter__5523__auto__ = (function pushfight$core$get_half_board_pos_$_iter__14179(s__14180){
return (new cljs.core.LazySeq(null,(function (){
var s__14180__$1 = s__14180;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14180__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var rn = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__14180__$1,rn,xs__6360__auto__,temp__5804__auto__,op){
return (function pushfight$core$get_half_board_pos_$_iter__14179_$_iter__14181(s__14182){
return (new cljs.core.LazySeq(null,((function (s__14180__$1,rn,xs__6360__auto__,temp__5804__auto__,op){
return (function (){
var s__14182__$1 = s__14182;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__14182__$1);
if(temp__5804__auto____$1){
var s__14182__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14182__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14182__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14184 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14183 = (0);
while(true){
if((i__14183 < size__5522__auto__)){
var cn = cljs.core._nth(c__5521__auto__,i__14183);
var cell = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null));
var half_pos = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,rn)) / (2));
cljs.core.chunk_append(b__14184,(cljs.core.truth_((function (){var and__5043__auto__ = pushfight.core.open_cell_QMARK_(cell);
if(and__5043__auto__){
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(cn,half_pos) : op.call(null,cn,half_pos));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null):null));

var G__14241 = (i__14183 + (1));
i__14183 = G__14241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14184),pushfight$core$get_half_board_pos_$_iter__14179_$_iter__14181(cljs.core.chunk_rest(s__14182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14184),null);
}
} else {
var cn = cljs.core.first(s__14182__$2);
var cell = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null));
var half_pos = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,rn)) / (2));
return cljs.core.cons((cljs.core.truth_((function (){var and__5043__auto__ = pushfight.core.open_cell_QMARK_(cell);
if(and__5043__auto__){
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(cn,half_pos) : op.call(null,cn,half_pos));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rn,cn], null):null),pushfight$core$get_half_board_pos_$_iter__14179_$_iter__14181(cljs.core.rest(s__14182__$2)));
}
} else {
return null;
}
break;
}
});})(s__14180__$1,rn,xs__6360__auto__,temp__5804__auto__,op))
,null,null));
});})(s__14180__$1,rn,xs__6360__auto__,temp__5804__auto__,op))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,rn)))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,pushfight$core$get_half_board_pos_$_iter__14179(cljs.core.rest(s__14180__$1)));
} else {
var G__14244 = cljs.core.rest(s__14180__$1);
s__14180__$1 = G__14244;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(board)));
})();
return cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,pos));
});
pushfight.core.place_piece = (function pushfight$core$place_piece(cell,piece){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"piece","piece",1396691784),piece);
});
pushfight.core.anchor_cell = (function pushfight$core$anchor_cell(board,pos){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(board,pos,(function (p1__14185_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14185_SHARP_,new cljs.core.Keyword(null,"anchored?","anchored?",-1662221562),true);
}));
});
pushfight.core.remove_anchors = (function pushfight$core$remove_anchors(board){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function pushfight$core$remove_anchors_$_iter__14186(s__14187){
return (new cljs.core.LazySeq(null,(function (){
var s__14187__$1 = s__14187;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14187__$1);
if(temp__5804__auto__){
var s__14187__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14187__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14187__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14189 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14188 = (0);
while(true){
if((i__14188 < size__5522__auto__)){
var row = cljs.core._nth(c__5521__auto__,i__14188);
cljs.core.chunk_append(b__14189,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__14188,row,c__5521__auto__,size__5522__auto__,b__14189,s__14187__$2,temp__5804__auto__){
return (function pushfight$core$remove_anchors_$_iter__14186_$_iter__14190(s__14191){
return (new cljs.core.LazySeq(null,((function (i__14188,row,c__5521__auto__,size__5522__auto__,b__14189,s__14187__$2,temp__5804__auto__){
return (function (){
var s__14191__$1 = s__14191;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__14191__$1);
if(temp__5804__auto____$1){
var s__14191__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14191__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__14191__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__14193 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__14192 = (0);
while(true){
if((i__14192 < size__5522__auto____$1)){
var cell = cljs.core._nth(c__5521__auto____$1,i__14192);
cljs.core.chunk_append(b__14193,((pushfight.core.floor_cell_QMARK_(cell))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"anchored?","anchored?",-1662221562),false):cell));

var G__14245 = (i__14192 + (1));
i__14192 = G__14245;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14193),pushfight$core$remove_anchors_$_iter__14186_$_iter__14190(cljs.core.chunk_rest(s__14191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14193),null);
}
} else {
var cell = cljs.core.first(s__14191__$2);
return cljs.core.cons(((pushfight.core.floor_cell_QMARK_(cell))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"anchored?","anchored?",-1662221562),false):cell),pushfight$core$remove_anchors_$_iter__14186_$_iter__14190(cljs.core.rest(s__14191__$2)));
}
} else {
return null;
}
break;
}
});})(i__14188,row,c__5521__auto__,size__5522__auto__,b__14189,s__14187__$2,temp__5804__auto__))
,null,null));
});})(i__14188,row,c__5521__auto__,size__5522__auto__,b__14189,s__14187__$2,temp__5804__auto__))
;
return iter__5523__auto__(row);
})()));

var G__14246 = (i__14188 + (1));
i__14188 = G__14246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14189),pushfight$core$remove_anchors_$_iter__14186(cljs.core.chunk_rest(s__14187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14189),null);
}
} else {
var row = cljs.core.first(s__14187__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (row,s__14187__$2,temp__5804__auto__){
return (function pushfight$core$remove_anchors_$_iter__14186_$_iter__14194(s__14195){
return (new cljs.core.LazySeq(null,(function (){
var s__14195__$1 = s__14195;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__14195__$1);
if(temp__5804__auto____$1){
var s__14195__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14195__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14195__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14197 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14196 = (0);
while(true){
if((i__14196 < size__5522__auto__)){
var cell = cljs.core._nth(c__5521__auto__,i__14196);
cljs.core.chunk_append(b__14197,((pushfight.core.floor_cell_QMARK_(cell))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"anchored?","anchored?",-1662221562),false):cell));

var G__14247 = (i__14196 + (1));
i__14196 = G__14247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14197),pushfight$core$remove_anchors_$_iter__14186_$_iter__14194(cljs.core.chunk_rest(s__14195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14197),null);
}
} else {
var cell = cljs.core.first(s__14195__$2);
return cljs.core.cons(((pushfight.core.floor_cell_QMARK_(cell))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"anchored?","anchored?",-1662221562),false):cell),pushfight$core$remove_anchors_$_iter__14186_$_iter__14194(cljs.core.rest(s__14195__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__14187__$2,temp__5804__auto__))
;
return iter__5523__auto__(row);
})()),pushfight$core$remove_anchors_$_iter__14186(cljs.core.rest(s__14187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(board);
})());
});
pushfight.core.game_over_QMARK_ = (function pushfight$core$game_over_QMARK_(board){
return cljs.core.some(cljs.core.true_QMARK_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (cell){
if(cljs.core.truth_((function (){var and__5043__auto__ = pushfight.core.void_cell_QMARK_(cell);
if(and__5043__auto__){
return new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(cell);
} else {
return and__5043__auto__;
}
})())){
return true;
} else {
return false;
}
}),row);
}),board)));
});
pushfight.core.move_piece = (function pushfight$core$move_piece(board,p__14198,dest){
var vec__14199 = p__14198;
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14199,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14199,(1),null);
var from = vec__14199;
var piece = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,x1,new cljs.core.Keyword(null,"piece","piece",1396691784)], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(board,from,pushfight.core.place_piece,null),dest,pushfight.core.place_piece,piece);
});
pushfight.core.push_piece = (function pushfight$core$push_piece(board,p__14202,dest){
var vec__14203 = p__14202;
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14203,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14203,(1),null);
var from = vec__14203;
var dir_vec = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,dest,from);
var source_piece = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,x1,new cljs.core.Keyword(null,"piece","piece",1396691784)], null));
var board__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(board,from,pushfight.core.place_piece,null);
var source_piece__$1 = source_piece;
var G__14209 = dest;
var vec__14210 = G__14209;
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14210,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14210,(1),null);
var dest__$1 = vec__14210;
var board__$2 = board__$1;
var source_piece__$2 = source_piece__$1;
var G__14209__$1 = G__14209;
while(true){
var board__$3 = board__$2;
var source_piece__$3 = source_piece__$2;
var vec__14216 = G__14209__$1;
var y2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14216,(0),null);
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14216,(1),null);
var dest__$2 = vec__14216;
var dest_piece = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y2__$1,x2__$1,new cljs.core.Keyword(null,"piece","piece",1396691784)], null));
var new_board = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(board__$3,dest__$2,pushfight.core.place_piece,source_piece__$3);
if((dest_piece == null)){
return new_board;
} else {
var G__14251 = new_board;
var G__14252 = dest_piece;
var G__14253 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,dir_vec,dest__$2);
board__$2 = G__14251;
source_piece__$2 = G__14252;
G__14209__$1 = G__14253;
continue;
}
break;
}
});
pushfight.core.can_push_QMARK_ = (function pushfight$core$can_push_QMARK_(board,from,dir_vec){
var next_pos = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core._PLUS_,dir_vec);
var pos = next_pos(from);
while(true){
var cell = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,pos);
if(pushfight.core.void_cell_QMARK_(cell)){
return true;
} else {
if(pushfight.core.open_cell_QMARK_(cell)){
return true;
} else {
if(cljs.core.truth_(pushfight.core.anchored_QMARK_(cell))){
return false;
} else {
var G__14254 = next_pos(pos);
pos = G__14254;
continue;

}
}
}
break;
}
});
pushfight.core.valid_push_QMARK_ = (function pushfight$core$valid_push_QMARK_(board,from,dest){
var pushing_piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,from));
var dest_piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,dest));
var dir_vec = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,dest,from);
if((!(pushfight.core.pusher_QMARK_(pushing_piece)))){
return false;
} else {
if((dest_piece == null)){
return false;
} else {
if((!(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)]),dir_vec)))){
return false;
} else {
if((!(pushfight.core.can_push_QMARK_(board,from,dir_vec)))){
return false;
} else {
return true;

}
}
}
}
});
pushfight.core.get_available_move_pos = (function pushfight$core$get_available_move_pos(var_args){
var G__14220 = arguments.length;
switch (G__14220) {
case 2:
return pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$2 = (function (board,p__14221){
var vec__14222 = p__14221;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14222,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14222,(1),null);
var visited = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var up = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y - (1)),x], null);
var down = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + (1)),x], null);
var left = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x - (1))], null);
var right = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x + (1))], null);
pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$3(board,up,visited);

pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$3(board,down,visited);

pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$3(board,left,visited);

pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$3(board,right,visited);

return cljs.core.deref(visited);
}));

(pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$3 = (function (board,p__14225,visited){
var vec__14226 = p__14225;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14226,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14226,(1),null);
if((!(cljs.core.contains_QMARK_(cljs.core.deref(visited),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null))))){
var cell = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
var up = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y - (1)),x], null);
var down = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + (1)),x], null);
var left = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x - (1))], null);
var right = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x + (1))], null);
if(pushfight.core.open_cell_QMARK_(cell)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(visited,clojure.set.union,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)]));

pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$3(board,up,visited);

pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$3(board,down,visited);

pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$3(board,left,visited);

pushfight.core.get_available_move_pos.cljs$core$IFn$_invoke$arity$3(board,right,visited);

return cljs.core.deref(visited);
} else {
return null;
}
} else {
return null;
}
}));

(pushfight.core.get_available_move_pos.cljs$lang$maxFixedArity = 3);

pushfight.core.get_available_push_pos = (function pushfight$core$get_available_push_pos(board,p__14229){
var vec__14230 = p__14229;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14230,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14230,(1),null);
var up = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y - (1)),x], null);
var down = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + (1)),x], null);
var left = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x - (1))], null);
var right = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x + (1))], null);
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(pushfight.core.valid_push_QMARK_,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [up,down,left,right], null)));
});
pushfight.core.cell__GT_emoji = (function pushfight$core$cell__GT_emoji(cell){
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(cell);
if(pushfight.core.wall_cell_QMARK_(cell)){
return "\uD83D\uDFEB";
} else {
if(pushfight.core.void_cell_QMARK_(cell)){
return "\u2B1B";
} else {
if(pushfight.core.open_cell_QMARK_(cell)){
return "\u2B1C";
} else {
if(cljs.core.truth_(pushfight.core.anchored_QMARK_(cell))){
return "\uD83D\uDFE5";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece,pushfight.core.black_square)){
return "\uD83D\uDFEA";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece,pushfight.core.black_round)){
return "\uD83D\uDFE3";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece,pushfight.core.white_square)){
return "\uD83D\uDFE9";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece,pushfight.core.white_round)){
return "\uD83D\uDFE2";
} else {
return "\uD83E\uDDA5";

}
}
}
}
}
}
}
}
});
pushfight.core.board__GT_emoji = (function pushfight$core$board__GT_emoji(board){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(pushfight.core.cell__GT_emoji,row);
}),board);
});
pushfight.core.pprint_board = (function pushfight$core$pprint_board(board){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("  ",cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)))].join('')], 0));

var row_num_14256 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function pushfight$core$pprint_board_$_iter__14233(s__14234){
return (new cljs.core.LazySeq(null,(function (){
var s__14234__$1 = s__14234;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14234__$1);
if(temp__5804__auto__){
var s__14234__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14234__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14234__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14236 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14235 = (0);
while(true){
if((i__14235 < size__5522__auto__)){
var row = cljs.core._nth(c__5521__auto__,i__14235);
cljs.core.chunk_append(b__14236,cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",row)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(row_num_14256,cljs.core.inc))].join('')], 0)));

var G__14257 = (i__14235 + (1));
i__14235 = G__14257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14236),pushfight$core$pprint_board_$_iter__14233(cljs.core.chunk_rest(s__14234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14236),null);
}
} else {
var row = cljs.core.first(s__14234__$2);
return cljs.core.cons(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",row)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(row_num_14256,cljs.core.inc))].join('')], 0)),pushfight$core$pprint_board_$_iter__14233(cljs.core.rest(s__14234__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(pushfight.core.board__GT_emoji(board));
})()], 0));

return cljs.core.println();
});
pushfight.core.empty_board = pushfight.core.make_standard_board();
pushfight.core.sample_board = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(pushfight.core.make_standard_board(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null),pushfight.core.place_piece,pushfight.core.white_round),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null),pushfight.core.place_piece,pushfight.core.white_square),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),pushfight.core.place_piece,pushfight.core.white_square),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null),pushfight.core.place_piece,pushfight.core.white_round),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),pushfight.core.place_piece,pushfight.core.white_square),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5)], null),pushfight.core.place_piece,pushfight.core.black_round),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5)], null),pushfight.core.place_piece,pushfight.core.black_square),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null),pushfight.core.place_piece,pushfight.core.black_square),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null),pushfight.core.place_piece,pushfight.core.black_round),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(6)], null),pushfight.core.place_piece,pushfight.core.black_square);
pushfight.core.transpose = (function pushfight$core$transpose(matrix){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,matrix);
});
pushfight.core._main = (function pushfight$core$_main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14262 = arguments.length;
var i__5770__auto___14263 = (0);
while(true){
if((i__5770__auto___14263 < len__5769__auto___14262)){
args__5775__auto__.push((arguments[i__5770__auto___14263]));

var G__14268 = (i__5770__auto___14263 + (1));
i__5770__auto___14263 = G__14268;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return pushfight.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(pushfight.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return pushfight.core.pprint_board(pushfight.core.transpose(pushfight.core.sample_board));
}));

(pushfight.core._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(pushfight.core._main.cljs$lang$applyTo = (function (seq14237){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14237));
}));


//# sourceMappingURL=pushfight.core.js.map
