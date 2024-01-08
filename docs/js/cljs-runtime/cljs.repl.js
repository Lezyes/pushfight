goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19834){
var map__19837 = p__19834;
var map__19837__$1 = cljs.core.__destructure_map(map__19837);
var m = map__19837__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19837__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19837__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19852_20328 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19853_20329 = null;
var count__19854_20330 = (0);
var i__19855_20331 = (0);
while(true){
if((i__19855_20331 < count__19854_20330)){
var f_20334 = chunk__19853_20329.cljs$core$IIndexed$_nth$arity$2(null,i__19855_20331);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20334], 0));


var G__20335 = seq__19852_20328;
var G__20336 = chunk__19853_20329;
var G__20337 = count__19854_20330;
var G__20338 = (i__19855_20331 + (1));
seq__19852_20328 = G__20335;
chunk__19853_20329 = G__20336;
count__19854_20330 = G__20337;
i__19855_20331 = G__20338;
continue;
} else {
var temp__5804__auto___20346 = cljs.core.seq(seq__19852_20328);
if(temp__5804__auto___20346){
var seq__19852_20347__$1 = temp__5804__auto___20346;
if(cljs.core.chunked_seq_QMARK_(seq__19852_20347__$1)){
var c__5568__auto___20349 = cljs.core.chunk_first(seq__19852_20347__$1);
var G__20350 = cljs.core.chunk_rest(seq__19852_20347__$1);
var G__20351 = c__5568__auto___20349;
var G__20352 = cljs.core.count(c__5568__auto___20349);
var G__20353 = (0);
seq__19852_20328 = G__20350;
chunk__19853_20329 = G__20351;
count__19854_20330 = G__20352;
i__19855_20331 = G__20353;
continue;
} else {
var f_20354 = cljs.core.first(seq__19852_20347__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20354], 0));


var G__20357 = cljs.core.next(seq__19852_20347__$1);
var G__20358 = null;
var G__20359 = (0);
var G__20360 = (0);
seq__19852_20328 = G__20357;
chunk__19853_20329 = G__20358;
count__19854_20330 = G__20359;
i__19855_20331 = G__20360;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20362 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20362], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20362)))?cljs.core.second(arglists_20362):arglists_20362)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19889_20368 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19890_20369 = null;
var count__19891_20370 = (0);
var i__19892_20371 = (0);
while(true){
if((i__19892_20371 < count__19891_20370)){
var vec__19923_20375 = chunk__19890_20369.cljs$core$IIndexed$_nth$arity$2(null,i__19892_20371);
var name_20376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19923_20375,(0),null);
var map__19926_20377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19923_20375,(1),null);
var map__19926_20378__$1 = cljs.core.__destructure_map(map__19926_20377);
var doc_20379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19926_20378__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19926_20378__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20376], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20380], 0));

if(cljs.core.truth_(doc_20379)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20379], 0));
} else {
}


var G__20385 = seq__19889_20368;
var G__20386 = chunk__19890_20369;
var G__20387 = count__19891_20370;
var G__20388 = (i__19892_20371 + (1));
seq__19889_20368 = G__20385;
chunk__19890_20369 = G__20386;
count__19891_20370 = G__20387;
i__19892_20371 = G__20388;
continue;
} else {
var temp__5804__auto___20390 = cljs.core.seq(seq__19889_20368);
if(temp__5804__auto___20390){
var seq__19889_20392__$1 = temp__5804__auto___20390;
if(cljs.core.chunked_seq_QMARK_(seq__19889_20392__$1)){
var c__5568__auto___20394 = cljs.core.chunk_first(seq__19889_20392__$1);
var G__20395 = cljs.core.chunk_rest(seq__19889_20392__$1);
var G__20396 = c__5568__auto___20394;
var G__20397 = cljs.core.count(c__5568__auto___20394);
var G__20398 = (0);
seq__19889_20368 = G__20395;
chunk__19890_20369 = G__20396;
count__19891_20370 = G__20397;
i__19892_20371 = G__20398;
continue;
} else {
var vec__19936_20399 = cljs.core.first(seq__19889_20392__$1);
var name_20400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936_20399,(0),null);
var map__19939_20401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936_20399,(1),null);
var map__19939_20402__$1 = cljs.core.__destructure_map(map__19939_20401);
var doc_20403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19939_20402__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19939_20402__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20400], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20404], 0));

if(cljs.core.truth_(doc_20403)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20403], 0));
} else {
}


var G__20413 = cljs.core.next(seq__19889_20392__$1);
var G__20414 = null;
var G__20415 = (0);
var G__20416 = (0);
seq__19889_20368 = G__20413;
chunk__19890_20369 = G__20414;
count__19891_20370 = G__20415;
i__19892_20371 = G__20416;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19953 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19954 = null;
var count__19955 = (0);
var i__19956 = (0);
while(true){
if((i__19956 < count__19955)){
var role = chunk__19954.cljs$core$IIndexed$_nth$arity$2(null,i__19956);
var temp__5804__auto___20418__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20418__$1)){
var spec_20420 = temp__5804__auto___20418__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20420)], 0));
} else {
}


var G__20422 = seq__19953;
var G__20423 = chunk__19954;
var G__20424 = count__19955;
var G__20425 = (i__19956 + (1));
seq__19953 = G__20422;
chunk__19954 = G__20423;
count__19955 = G__20424;
i__19956 = G__20425;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19953);
if(temp__5804__auto____$1){
var seq__19953__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19953__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19953__$1);
var G__20428 = cljs.core.chunk_rest(seq__19953__$1);
var G__20429 = c__5568__auto__;
var G__20430 = cljs.core.count(c__5568__auto__);
var G__20431 = (0);
seq__19953 = G__20428;
chunk__19954 = G__20429;
count__19955 = G__20430;
i__19956 = G__20431;
continue;
} else {
var role = cljs.core.first(seq__19953__$1);
var temp__5804__auto___20432__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20432__$2)){
var spec_20433 = temp__5804__auto___20432__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20433)], 0));
} else {
}


var G__20437 = cljs.core.next(seq__19953__$1);
var G__20438 = null;
var G__20439 = (0);
var G__20440 = (0);
seq__19953 = G__20437;
chunk__19954 = G__20438;
count__19955 = G__20439;
i__19956 = G__20440;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20446 = cljs.core.ex_cause(t);
via = G__20445;
t = G__20446;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20129 = datafied_throwable;
var map__20129__$1 = cljs.core.__destructure_map(map__20129);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20129__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20129__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20129__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20130 = cljs.core.last(via);
var map__20130__$1 = cljs.core.__destructure_map(map__20130);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20130__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20130__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20130__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20134 = data;
var map__20134__$1 = cljs.core.__destructure_map(map__20134);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20134__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20134__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20134__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20135 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20135__$1 = cljs.core.__destructure_map(map__20135);
var top_data = map__20135__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20135__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20148 = phase;
var G__20148__$1 = (((G__20148 instanceof cljs.core.Keyword))?G__20148.fqn:null);
switch (G__20148__$1) {
case "read-source":
var map__20157 = data;
var map__20157__$1 = cljs.core.__destructure_map(map__20157);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20157__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20157__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20161 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20161__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20161,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20161);
var G__20161__$2 = (cljs.core.truth_((function (){var fexpr__20166 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20166.cljs$core$IFn$_invoke$arity$1 ? fexpr__20166.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20166.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20161__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20161__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20161__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20161__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20169 = top_data;
var G__20169__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20169,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20169);
var G__20169__$2 = (cljs.core.truth_((function (){var fexpr__20173 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20173.cljs$core$IFn$_invoke$arity$1 ? fexpr__20173.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20173.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20169__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20169__$1);
var G__20169__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20169__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20169__$2);
var G__20169__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20169__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20169__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20169__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20169__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20177 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20177,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20177,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20177,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20177,(3),null);
var G__20181 = top_data;
var G__20181__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20181,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20181);
var G__20181__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20181__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20181__$1);
var G__20181__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20181__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20181__$2);
var G__20181__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20181__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20181__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20181__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20181__$4;
}

break;
case "execution":
var vec__20186 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20123_SHARP_){
var or__5045__auto__ = (p1__20123_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20192 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20192.cljs$core$IFn$_invoke$arity$1 ? fexpr__20192.cljs$core$IFn$_invoke$arity$1(p1__20123_SHARP_) : fexpr__20192.call(null,p1__20123_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20197 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20197__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20197,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20197);
var G__20197__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20197__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20197__$1);
var G__20197__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20197__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20197__$2);
var G__20197__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20197__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20197__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20197__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20197__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20148__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20212){
var map__20214 = p__20212;
var map__20214__$1 = cljs.core.__destructure_map(map__20214);
var triage_data = map__20214__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20232 = phase;
var G__20232__$1 = (((G__20232 instanceof cljs.core.Keyword))?G__20232.fqn:null);
switch (G__20232__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20239 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20240 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20241 = loc;
var G__20242 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20245_20508 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20246_20509 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20247_20510 = true;
var _STAR_print_fn_STAR__temp_val__20248_20511 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20247_20510);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20248_20511);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20203_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20203_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20246_20509);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20245_20508);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20239,G__20240,G__20241,G__20242) : format.call(null,G__20239,G__20240,G__20241,G__20242));

break;
case "macroexpansion":
var G__20271 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20272 = cause_type;
var G__20273 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20274 = loc;
var G__20275 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20271,G__20272,G__20273,G__20274,G__20275) : format.call(null,G__20271,G__20272,G__20273,G__20274,G__20275));

break;
case "compile-syntax-check":
var G__20284 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20285 = cause_type;
var G__20286 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20287 = loc;
var G__20288 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20284,G__20285,G__20286,G__20287,G__20288) : format.call(null,G__20284,G__20285,G__20286,G__20287,G__20288));

break;
case "compilation":
var G__20292 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20293 = cause_type;
var G__20294 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20295 = loc;
var G__20296 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20292,G__20293,G__20294,G__20295,G__20296) : format.call(null,G__20292,G__20293,G__20294,G__20295,G__20296));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20297 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20298 = symbol;
var G__20299 = loc;
var G__20300 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20302_20523 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20303_20524 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20304_20525 = true;
var _STAR_print_fn_STAR__temp_val__20305_20526 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20304_20525);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20305_20526);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20205_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20205_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20303_20524);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20302_20523);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20297,G__20298,G__20299,G__20300) : format.call(null,G__20297,G__20298,G__20299,G__20300));
} else {
var G__20309 = "Execution error%s at %s(%s).\n%s\n";
var G__20310 = cause_type;
var G__20311 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20312 = loc;
var G__20313 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20309,G__20310,G__20311,G__20312,G__20313) : format.call(null,G__20309,G__20310,G__20311,G__20312,G__20313));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20232__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
