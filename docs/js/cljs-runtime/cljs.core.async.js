goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17300 = (function (f,blockable,meta17301){
this.f = f;
this.blockable = blockable;
this.meta17301 = meta17301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17302,meta17301__$1){
var self__ = this;
var _17302__$1 = this;
return (new cljs.core.async.t_cljs$core$async17300(self__.f,self__.blockable,meta17301__$1));
}));

(cljs.core.async.t_cljs$core$async17300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17302){
var self__ = this;
var _17302__$1 = this;
return self__.meta17301;
}));

(cljs.core.async.t_cljs$core$async17300.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17300.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17301","meta17301",447274587,null)], null);
}));

(cljs.core.async.t_cljs$core$async17300.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17300");

(cljs.core.async.t_cljs$core$async17300.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17300");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17300.
 */
cljs.core.async.__GT_t_cljs$core$async17300 = (function cljs$core$async$__GT_t_cljs$core$async17300(f,blockable,meta17301){
return (new cljs.core.async.t_cljs$core$async17300(f,blockable,meta17301));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17298 = arguments.length;
switch (G__17298) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async17300(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17315 = arguments.length;
switch (G__17315) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17323 = arguments.length;
switch (G__17323) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17331 = arguments.length;
switch (G__17331) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19734 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19734) : fn1.call(null,val_19734));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19734) : fn1.call(null,val_19734));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17341 = arguments.length;
switch (G__17341) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19743 = n;
var x_19744 = (0);
while(true){
if((x_19744 < n__5636__auto___19743)){
(a[x_19744] = x_19744);

var G__19745 = (x_19744 + (1));
x_19744 = G__19745;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17363 = (function (flag,meta17364){
this.flag = flag;
this.meta17364 = meta17364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17365,meta17364__$1){
var self__ = this;
var _17365__$1 = this;
return (new cljs.core.async.t_cljs$core$async17363(self__.flag,meta17364__$1));
}));

(cljs.core.async.t_cljs$core$async17363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17365){
var self__ = this;
var _17365__$1 = this;
return self__.meta17364;
}));

(cljs.core.async.t_cljs$core$async17363.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17363.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17364","meta17364",2000071427,null)], null);
}));

(cljs.core.async.t_cljs$core$async17363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17363");

(cljs.core.async.t_cljs$core$async17363.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17363.
 */
cljs.core.async.__GT_t_cljs$core$async17363 = (function cljs$core$async$__GT_t_cljs$core$async17363(flag,meta17364){
return (new cljs.core.async.t_cljs$core$async17363(flag,meta17364));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17363(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17377 = (function (flag,cb,meta17378){
this.flag = flag;
this.cb = cb;
this.meta17378 = meta17378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17379,meta17378__$1){
var self__ = this;
var _17379__$1 = this;
return (new cljs.core.async.t_cljs$core$async17377(self__.flag,self__.cb,meta17378__$1));
}));

(cljs.core.async.t_cljs$core$async17377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17379){
var self__ = this;
var _17379__$1 = this;
return self__.meta17378;
}));

(cljs.core.async.t_cljs$core$async17377.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17378","meta17378",-1650150983,null)], null);
}));

(cljs.core.async.t_cljs$core$async17377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17377");

(cljs.core.async.t_cljs$core$async17377.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17377.
 */
cljs.core.async.__GT_t_cljs$core$async17377 = (function cljs$core$async$__GT_t_cljs$core$async17377(flag,cb,meta17378){
return (new cljs.core.async.t_cljs$core$async17377(flag,cb,meta17378));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17377(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17398_SHARP_){
var G__17400 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17398_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17400) : fret.call(null,G__17400));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17399_SHARP_){
var G__17401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17399_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17401) : fret.call(null,G__17401));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19753 = (i + (1));
i = G__19753;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19756 = arguments.length;
var i__5770__auto___19757 = (0);
while(true){
if((i__5770__auto___19757 < len__5769__auto___19756)){
args__5775__auto__.push((arguments[i__5770__auto___19757]));

var G__19758 = (i__5770__auto___19757 + (1));
i__5770__auto___19757 = G__19758;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17411){
var map__17412 = p__17411;
var map__17412__$1 = cljs.core.__destructure_map(map__17412);
var opts = map__17412__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17407){
var G__17409 = cljs.core.first(seq17407);
var seq17407__$1 = cljs.core.next(seq17407);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17409,seq17407__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17417 = arguments.length;
switch (G__17417) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17214__auto___19760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_17486){
var state_val_17487 = (state_17486[(1)]);
if((state_val_17487 === (7))){
var inst_17470 = (state_17486[(2)]);
var state_17486__$1 = state_17486;
var statearr_17494_19761 = state_17486__$1;
(statearr_17494_19761[(2)] = inst_17470);

(statearr_17494_19761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (1))){
var state_17486__$1 = state_17486;
var statearr_17497_19762 = state_17486__$1;
(statearr_17497_19762[(2)] = null);

(statearr_17497_19762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (4))){
var inst_17437 = (state_17486[(7)]);
var inst_17437__$1 = (state_17486[(2)]);
var inst_17441 = (inst_17437__$1 == null);
var state_17486__$1 = (function (){var statearr_17504 = state_17486;
(statearr_17504[(7)] = inst_17437__$1);

return statearr_17504;
})();
if(cljs.core.truth_(inst_17441)){
var statearr_17505_19763 = state_17486__$1;
(statearr_17505_19763[(1)] = (5));

} else {
var statearr_17507_19764 = state_17486__$1;
(statearr_17507_19764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (13))){
var state_17486__$1 = state_17486;
var statearr_17512_19765 = state_17486__$1;
(statearr_17512_19765[(2)] = null);

(statearr_17512_19765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (6))){
var inst_17437 = (state_17486[(7)]);
var state_17486__$1 = state_17486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17486__$1,(11),to,inst_17437);
} else {
if((state_val_17487 === (3))){
var inst_17484 = (state_17486[(2)]);
var state_17486__$1 = state_17486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17486__$1,inst_17484);
} else {
if((state_val_17487 === (12))){
var state_17486__$1 = state_17486;
var statearr_17533_19766 = state_17486__$1;
(statearr_17533_19766[(2)] = null);

(statearr_17533_19766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (2))){
var state_17486__$1 = state_17486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17486__$1,(4),from);
} else {
if((state_val_17487 === (11))){
var inst_17455 = (state_17486[(2)]);
var state_17486__$1 = state_17486;
if(cljs.core.truth_(inst_17455)){
var statearr_17538_19767 = state_17486__$1;
(statearr_17538_19767[(1)] = (12));

} else {
var statearr_17539_19768 = state_17486__$1;
(statearr_17539_19768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (9))){
var state_17486__$1 = state_17486;
var statearr_17548_19769 = state_17486__$1;
(statearr_17548_19769[(2)] = null);

(statearr_17548_19769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (5))){
var state_17486__$1 = state_17486;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17559_19770 = state_17486__$1;
(statearr_17559_19770[(1)] = (8));

} else {
var statearr_17560_19771 = state_17486__$1;
(statearr_17560_19771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (14))){
var inst_17468 = (state_17486[(2)]);
var state_17486__$1 = state_17486;
var statearr_17561_19772 = state_17486__$1;
(statearr_17561_19772[(2)] = inst_17468);

(statearr_17561_19772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (10))){
var inst_17451 = (state_17486[(2)]);
var state_17486__$1 = state_17486;
var statearr_17573_19773 = state_17486__$1;
(statearr_17573_19773[(2)] = inst_17451);

(statearr_17573_19773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (8))){
var inst_17444 = cljs.core.async.close_BANG_(to);
var state_17486__$1 = state_17486;
var statearr_17585_19774 = state_17486__$1;
(statearr_17585_19774[(2)] = inst_17444);

(statearr_17585_19774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17061__auto__ = null;
var cljs$core$async$state_machine__17061__auto____0 = (function (){
var statearr_17587 = [null,null,null,null,null,null,null,null];
(statearr_17587[(0)] = cljs$core$async$state_machine__17061__auto__);

(statearr_17587[(1)] = (1));

return statearr_17587;
});
var cljs$core$async$state_machine__17061__auto____1 = (function (state_17486){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_17486);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e17588){var ex__17064__auto__ = e17588;
var statearr_17589_19779 = state_17486;
(statearr_17589_19779[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_17486[(4)]))){
var statearr_17591_19780 = state_17486;
(statearr_17591_19780[(1)] = cljs.core.first((state_17486[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19781 = state_17486;
state_17486 = G__19781;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$state_machine__17061__auto__ = function(state_17486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17061__auto____1.call(this,state_17486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17061__auto____0;
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17061__auto____1;
return cljs$core$async$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_17592 = f__17215__auto__();
(statearr_17592[(6)] = c__17214__auto___19760);

return statearr_17592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17622){
var vec__17627 = p__17622;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17627,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17627,(1),null);
var job = vec__17627;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17214__auto___19786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_17639){
var state_val_17640 = (state_17639[(1)]);
if((state_val_17640 === (1))){
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17639__$1,(2),res,v);
} else {
if((state_val_17640 === (2))){
var inst_17636 = (state_17639[(2)]);
var inst_17637 = cljs.core.async.close_BANG_(res);
var state_17639__$1 = (function (){var statearr_17641 = state_17639;
(statearr_17641[(7)] = inst_17636);

return statearr_17641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17639__$1,inst_17637);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0 = (function (){
var statearr_17643 = [null,null,null,null,null,null,null,null];
(statearr_17643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__);

(statearr_17643[(1)] = (1));

return statearr_17643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1 = (function (state_17639){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_17639);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e17645){var ex__17064__auto__ = e17645;
var statearr_17646_19787 = state_17639;
(statearr_17646_19787[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_17639[(4)]))){
var statearr_17647_19788 = state_17639;
(statearr_17647_19788[(1)] = cljs.core.first((state_17639[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19789 = state_17639;
state_17639 = G__19789;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__ = function(state_17639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1.call(this,state_17639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_17648 = f__17215__auto__();
(statearr_17648[(6)] = c__17214__auto___19786);

return statearr_17648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17649){
var vec__17651 = p__17649;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17651,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17651,(1),null);
var job = vec__17651;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19792 = n;
var __19793 = (0);
while(true){
if((__19793 < n__5636__auto___19792)){
var G__17662_19794 = type;
var G__17662_19795__$1 = (((G__17662_19794 instanceof cljs.core.Keyword))?G__17662_19794.fqn:null);
switch (G__17662_19795__$1) {
case "compute":
var c__17214__auto___19797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19793,c__17214__auto___19797,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async){
return (function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = ((function (__19793,c__17214__auto___19797,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async){
return (function (state_17688){
var state_val_17689 = (state_17688[(1)]);
if((state_val_17689 === (1))){
var state_17688__$1 = state_17688;
var statearr_17690_19798 = state_17688__$1;
(statearr_17690_19798[(2)] = null);

(statearr_17690_19798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (2))){
var state_17688__$1 = state_17688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17688__$1,(4),jobs);
} else {
if((state_val_17689 === (3))){
var inst_17686 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17688__$1,inst_17686);
} else {
if((state_val_17689 === (4))){
var inst_17677 = (state_17688[(2)]);
var inst_17678 = process__$1(inst_17677);
var state_17688__$1 = state_17688;
if(cljs.core.truth_(inst_17678)){
var statearr_17691_19799 = state_17688__$1;
(statearr_17691_19799[(1)] = (5));

} else {
var statearr_17693_19800 = state_17688__$1;
(statearr_17693_19800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (5))){
var state_17688__$1 = state_17688;
var statearr_17694_19801 = state_17688__$1;
(statearr_17694_19801[(2)] = null);

(statearr_17694_19801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (6))){
var state_17688__$1 = state_17688;
var statearr_17695_19802 = state_17688__$1;
(statearr_17695_19802[(2)] = null);

(statearr_17695_19802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (7))){
var inst_17683 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
var statearr_17696_19803 = state_17688__$1;
(statearr_17696_19803[(2)] = inst_17683);

(statearr_17696_19803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19793,c__17214__auto___19797,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async))
;
return ((function (__19793,switch__17060__auto__,c__17214__auto___19797,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0 = (function (){
var statearr_17697 = [null,null,null,null,null,null,null];
(statearr_17697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__);

(statearr_17697[(1)] = (1));

return statearr_17697;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1 = (function (state_17688){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_17688);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e17698){var ex__17064__auto__ = e17698;
var statearr_17699_19804 = state_17688;
(statearr_17699_19804[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_17688[(4)]))){
var statearr_17700_19805 = state_17688;
(statearr_17700_19805[(1)] = cljs.core.first((state_17688[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19806 = state_17688;
state_17688 = G__19806;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__ = function(state_17688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1.call(this,state_17688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__;
})()
;})(__19793,switch__17060__auto__,c__17214__auto___19797,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async))
})();
var state__17216__auto__ = (function (){var statearr_17702 = f__17215__auto__();
(statearr_17702[(6)] = c__17214__auto___19797);

return statearr_17702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
});})(__19793,c__17214__auto___19797,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async))
);


break;
case "async":
var c__17214__auto___19807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19793,c__17214__auto___19807,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async){
return (function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = ((function (__19793,c__17214__auto___19807,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async){
return (function (state_17715){
var state_val_17716 = (state_17715[(1)]);
if((state_val_17716 === (1))){
var state_17715__$1 = state_17715;
var statearr_17717_19808 = state_17715__$1;
(statearr_17717_19808[(2)] = null);

(statearr_17717_19808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (2))){
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17715__$1,(4),jobs);
} else {
if((state_val_17716 === (3))){
var inst_17713 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17715__$1,inst_17713);
} else {
if((state_val_17716 === (4))){
var inst_17705 = (state_17715[(2)]);
var inst_17706 = async(inst_17705);
var state_17715__$1 = state_17715;
if(cljs.core.truth_(inst_17706)){
var statearr_17719_19809 = state_17715__$1;
(statearr_17719_19809[(1)] = (5));

} else {
var statearr_17720_19810 = state_17715__$1;
(statearr_17720_19810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (5))){
var state_17715__$1 = state_17715;
var statearr_17721_19811 = state_17715__$1;
(statearr_17721_19811[(2)] = null);

(statearr_17721_19811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (6))){
var state_17715__$1 = state_17715;
var statearr_17722_19812 = state_17715__$1;
(statearr_17722_19812[(2)] = null);

(statearr_17722_19812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (7))){
var inst_17711 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17723_19813 = state_17715__$1;
(statearr_17723_19813[(2)] = inst_17711);

(statearr_17723_19813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19793,c__17214__auto___19807,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async))
;
return ((function (__19793,switch__17060__auto__,c__17214__auto___19807,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0 = (function (){
var statearr_17724 = [null,null,null,null,null,null,null];
(statearr_17724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__);

(statearr_17724[(1)] = (1));

return statearr_17724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1 = (function (state_17715){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_17715);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e17726){var ex__17064__auto__ = e17726;
var statearr_17727_19814 = state_17715;
(statearr_17727_19814[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_17715[(4)]))){
var statearr_17728_19815 = state_17715;
(statearr_17728_19815[(1)] = cljs.core.first((state_17715[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19816 = state_17715;
state_17715 = G__19816;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__ = function(state_17715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1.call(this,state_17715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__;
})()
;})(__19793,switch__17060__auto__,c__17214__auto___19807,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async))
})();
var state__17216__auto__ = (function (){var statearr_17729 = f__17215__auto__();
(statearr_17729[(6)] = c__17214__auto___19807);

return statearr_17729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
});})(__19793,c__17214__auto___19807,G__17662_19794,G__17662_19795__$1,n__5636__auto___19792,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17662_19795__$1)].join('')));

}

var G__19817 = (__19793 + (1));
__19793 = G__19817;
continue;
} else {
}
break;
}

var c__17214__auto___19818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_17752){
var state_val_17753 = (state_17752[(1)]);
if((state_val_17753 === (7))){
var inst_17748 = (state_17752[(2)]);
var state_17752__$1 = state_17752;
var statearr_17755_19820 = state_17752__$1;
(statearr_17755_19820[(2)] = inst_17748);

(statearr_17755_19820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17753 === (1))){
var state_17752__$1 = state_17752;
var statearr_17756_19821 = state_17752__$1;
(statearr_17756_19821[(2)] = null);

(statearr_17756_19821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17753 === (4))){
var inst_17732 = (state_17752[(7)]);
var inst_17732__$1 = (state_17752[(2)]);
var inst_17733 = (inst_17732__$1 == null);
var state_17752__$1 = (function (){var statearr_17757 = state_17752;
(statearr_17757[(7)] = inst_17732__$1);

return statearr_17757;
})();
if(cljs.core.truth_(inst_17733)){
var statearr_17758_19822 = state_17752__$1;
(statearr_17758_19822[(1)] = (5));

} else {
var statearr_17759_19823 = state_17752__$1;
(statearr_17759_19823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17753 === (6))){
var inst_17732 = (state_17752[(7)]);
var inst_17737 = (state_17752[(8)]);
var inst_17737__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17740 = [inst_17732,inst_17737__$1];
var inst_17741 = (new cljs.core.PersistentVector(null,2,(5),inst_17739,inst_17740,null));
var state_17752__$1 = (function (){var statearr_17760 = state_17752;
(statearr_17760[(8)] = inst_17737__$1);

return statearr_17760;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17752__$1,(8),jobs,inst_17741);
} else {
if((state_val_17753 === (3))){
var inst_17750 = (state_17752[(2)]);
var state_17752__$1 = state_17752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17752__$1,inst_17750);
} else {
if((state_val_17753 === (2))){
var state_17752__$1 = state_17752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17752__$1,(4),from);
} else {
if((state_val_17753 === (9))){
var inst_17745 = (state_17752[(2)]);
var state_17752__$1 = (function (){var statearr_17762 = state_17752;
(statearr_17762[(9)] = inst_17745);

return statearr_17762;
})();
var statearr_17763_19826 = state_17752__$1;
(statearr_17763_19826[(2)] = null);

(statearr_17763_19826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17753 === (5))){
var inst_17735 = cljs.core.async.close_BANG_(jobs);
var state_17752__$1 = state_17752;
var statearr_17764_19827 = state_17752__$1;
(statearr_17764_19827[(2)] = inst_17735);

(statearr_17764_19827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17753 === (8))){
var inst_17737 = (state_17752[(8)]);
var inst_17743 = (state_17752[(2)]);
var state_17752__$1 = (function (){var statearr_17765 = state_17752;
(statearr_17765[(10)] = inst_17743);

return statearr_17765;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17752__$1,(9),results,inst_17737);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0 = (function (){
var statearr_17766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__);

(statearr_17766[(1)] = (1));

return statearr_17766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1 = (function (state_17752){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_17752);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e17767){var ex__17064__auto__ = e17767;
var statearr_17768_19830 = state_17752;
(statearr_17768_19830[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_17752[(4)]))){
var statearr_17769_19831 = state_17752;
(statearr_17769_19831[(1)] = cljs.core.first((state_17752[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19832 = state_17752;
state_17752 = G__19832;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__ = function(state_17752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1.call(this,state_17752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_17771 = f__17215__auto__();
(statearr_17771[(6)] = c__17214__auto___19818);

return statearr_17771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


var c__17214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_17810){
var state_val_17811 = (state_17810[(1)]);
if((state_val_17811 === (7))){
var inst_17806 = (state_17810[(2)]);
var state_17810__$1 = state_17810;
var statearr_17812_19835 = state_17810__$1;
(statearr_17812_19835[(2)] = inst_17806);

(statearr_17812_19835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (20))){
var state_17810__$1 = state_17810;
var statearr_17813_19836 = state_17810__$1;
(statearr_17813_19836[(2)] = null);

(statearr_17813_19836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (1))){
var state_17810__$1 = state_17810;
var statearr_17815_19838 = state_17810__$1;
(statearr_17815_19838[(2)] = null);

(statearr_17815_19838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (4))){
var inst_17774 = (state_17810[(7)]);
var inst_17774__$1 = (state_17810[(2)]);
var inst_17775 = (inst_17774__$1 == null);
var state_17810__$1 = (function (){var statearr_17816 = state_17810;
(statearr_17816[(7)] = inst_17774__$1);

return statearr_17816;
})();
if(cljs.core.truth_(inst_17775)){
var statearr_17817_19839 = state_17810__$1;
(statearr_17817_19839[(1)] = (5));

} else {
var statearr_17818_19840 = state_17810__$1;
(statearr_17818_19840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (15))){
var inst_17787 = (state_17810[(8)]);
var state_17810__$1 = state_17810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17810__$1,(18),to,inst_17787);
} else {
if((state_val_17811 === (21))){
var inst_17801 = (state_17810[(2)]);
var state_17810__$1 = state_17810;
var statearr_17819_19842 = state_17810__$1;
(statearr_17819_19842[(2)] = inst_17801);

(statearr_17819_19842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (13))){
var inst_17803 = (state_17810[(2)]);
var state_17810__$1 = (function (){var statearr_17820 = state_17810;
(statearr_17820[(9)] = inst_17803);

return statearr_17820;
})();
var statearr_17821_19843 = state_17810__$1;
(statearr_17821_19843[(2)] = null);

(statearr_17821_19843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (6))){
var inst_17774 = (state_17810[(7)]);
var state_17810__$1 = state_17810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17810__$1,(11),inst_17774);
} else {
if((state_val_17811 === (17))){
var inst_17796 = (state_17810[(2)]);
var state_17810__$1 = state_17810;
if(cljs.core.truth_(inst_17796)){
var statearr_17822_19846 = state_17810__$1;
(statearr_17822_19846[(1)] = (19));

} else {
var statearr_17824_19847 = state_17810__$1;
(statearr_17824_19847[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (3))){
var inst_17808 = (state_17810[(2)]);
var state_17810__$1 = state_17810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17810__$1,inst_17808);
} else {
if((state_val_17811 === (12))){
var inst_17784 = (state_17810[(10)]);
var state_17810__$1 = state_17810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17810__$1,(14),inst_17784);
} else {
if((state_val_17811 === (2))){
var state_17810__$1 = state_17810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17810__$1,(4),results);
} else {
if((state_val_17811 === (19))){
var state_17810__$1 = state_17810;
var statearr_17825_19848 = state_17810__$1;
(statearr_17825_19848[(2)] = null);

(statearr_17825_19848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (11))){
var inst_17784 = (state_17810[(2)]);
var state_17810__$1 = (function (){var statearr_17826 = state_17810;
(statearr_17826[(10)] = inst_17784);

return statearr_17826;
})();
var statearr_17827_19849 = state_17810__$1;
(statearr_17827_19849[(2)] = null);

(statearr_17827_19849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (9))){
var state_17810__$1 = state_17810;
var statearr_17828_19851 = state_17810__$1;
(statearr_17828_19851[(2)] = null);

(statearr_17828_19851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (5))){
var state_17810__$1 = state_17810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17830_19856 = state_17810__$1;
(statearr_17830_19856[(1)] = (8));

} else {
var statearr_17831_19857 = state_17810__$1;
(statearr_17831_19857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (14))){
var inst_17787 = (state_17810[(8)]);
var inst_17789 = (state_17810[(11)]);
var inst_17787__$1 = (state_17810[(2)]);
var inst_17788 = (inst_17787__$1 == null);
var inst_17789__$1 = cljs.core.not(inst_17788);
var state_17810__$1 = (function (){var statearr_17832 = state_17810;
(statearr_17832[(8)] = inst_17787__$1);

(statearr_17832[(11)] = inst_17789__$1);

return statearr_17832;
})();
if(inst_17789__$1){
var statearr_17833_19859 = state_17810__$1;
(statearr_17833_19859[(1)] = (15));

} else {
var statearr_17834_19860 = state_17810__$1;
(statearr_17834_19860[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (16))){
var inst_17789 = (state_17810[(11)]);
var state_17810__$1 = state_17810;
var statearr_17835_19862 = state_17810__$1;
(statearr_17835_19862[(2)] = inst_17789);

(statearr_17835_19862[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (10))){
var inst_17781 = (state_17810[(2)]);
var state_17810__$1 = state_17810;
var statearr_17836_19864 = state_17810__$1;
(statearr_17836_19864[(2)] = inst_17781);

(statearr_17836_19864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (18))){
var inst_17793 = (state_17810[(2)]);
var state_17810__$1 = state_17810;
var statearr_17838_19865 = state_17810__$1;
(statearr_17838_19865[(2)] = inst_17793);

(statearr_17838_19865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17811 === (8))){
var inst_17778 = cljs.core.async.close_BANG_(to);
var state_17810__$1 = state_17810;
var statearr_17839_19866 = state_17810__$1;
(statearr_17839_19866[(2)] = inst_17778);

(statearr_17839_19866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0 = (function (){
var statearr_17840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__);

(statearr_17840[(1)] = (1));

return statearr_17840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1 = (function (state_17810){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_17810);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e17841){var ex__17064__auto__ = e17841;
var statearr_17842_19867 = state_17810;
(statearr_17842_19867[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_17810[(4)]))){
var statearr_17843_19868 = state_17810;
(statearr_17843_19868[(1)] = cljs.core.first((state_17810[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19869 = state_17810;
state_17810 = G__19869;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__ = function(state_17810){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1.call(this,state_17810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_17845 = f__17215__auto__();
(statearr_17845[(6)] = c__17214__auto__);

return statearr_17845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));

return c__17214__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17847 = arguments.length;
switch (G__17847) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17850 = arguments.length;
switch (G__17850) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17853 = arguments.length;
switch (G__17853) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17214__auto___19876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_17880){
var state_val_17881 = (state_17880[(1)]);
if((state_val_17881 === (7))){
var inst_17876 = (state_17880[(2)]);
var state_17880__$1 = state_17880;
var statearr_17882_19877 = state_17880__$1;
(statearr_17882_19877[(2)] = inst_17876);

(statearr_17882_19877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17881 === (1))){
var state_17880__$1 = state_17880;
var statearr_17883_19878 = state_17880__$1;
(statearr_17883_19878[(2)] = null);

(statearr_17883_19878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17881 === (4))){
var inst_17857 = (state_17880[(7)]);
var inst_17857__$1 = (state_17880[(2)]);
var inst_17858 = (inst_17857__$1 == null);
var state_17880__$1 = (function (){var statearr_17884 = state_17880;
(statearr_17884[(7)] = inst_17857__$1);

return statearr_17884;
})();
if(cljs.core.truth_(inst_17858)){
var statearr_17885_19879 = state_17880__$1;
(statearr_17885_19879[(1)] = (5));

} else {
var statearr_17886_19880 = state_17880__$1;
(statearr_17886_19880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17881 === (13))){
var state_17880__$1 = state_17880;
var statearr_17887_19881 = state_17880__$1;
(statearr_17887_19881[(2)] = null);

(statearr_17887_19881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17881 === (6))){
var inst_17857 = (state_17880[(7)]);
var inst_17863 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17857) : p.call(null,inst_17857));
var state_17880__$1 = state_17880;
if(cljs.core.truth_(inst_17863)){
var statearr_17889_19883 = state_17880__$1;
(statearr_17889_19883[(1)] = (9));

} else {
var statearr_17890_19884 = state_17880__$1;
(statearr_17890_19884[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17881 === (3))){
var inst_17878 = (state_17880[(2)]);
var state_17880__$1 = state_17880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17880__$1,inst_17878);
} else {
if((state_val_17881 === (12))){
var state_17880__$1 = state_17880;
var statearr_17891_19886 = state_17880__$1;
(statearr_17891_19886[(2)] = null);

(statearr_17891_19886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17881 === (2))){
var state_17880__$1 = state_17880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17880__$1,(4),ch);
} else {
if((state_val_17881 === (11))){
var inst_17857 = (state_17880[(7)]);
var inst_17867 = (state_17880[(2)]);
var state_17880__$1 = state_17880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17880__$1,(8),inst_17867,inst_17857);
} else {
if((state_val_17881 === (9))){
var state_17880__$1 = state_17880;
var statearr_17892_19887 = state_17880__$1;
(statearr_17892_19887[(2)] = tc);

(statearr_17892_19887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17881 === (5))){
var inst_17860 = cljs.core.async.close_BANG_(tc);
var inst_17861 = cljs.core.async.close_BANG_(fc);
var state_17880__$1 = (function (){var statearr_17893 = state_17880;
(statearr_17893[(8)] = inst_17860);

return statearr_17893;
})();
var statearr_17894_19888 = state_17880__$1;
(statearr_17894_19888[(2)] = inst_17861);

(statearr_17894_19888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17881 === (14))){
var inst_17874 = (state_17880[(2)]);
var state_17880__$1 = state_17880;
var statearr_17895_19893 = state_17880__$1;
(statearr_17895_19893[(2)] = inst_17874);

(statearr_17895_19893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17881 === (10))){
var state_17880__$1 = state_17880;
var statearr_17896_19896 = state_17880__$1;
(statearr_17896_19896[(2)] = fc);

(statearr_17896_19896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17881 === (8))){
var inst_17869 = (state_17880[(2)]);
var state_17880__$1 = state_17880;
if(cljs.core.truth_(inst_17869)){
var statearr_17897_19901 = state_17880__$1;
(statearr_17897_19901[(1)] = (12));

} else {
var statearr_17898_19902 = state_17880__$1;
(statearr_17898_19902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17061__auto__ = null;
var cljs$core$async$state_machine__17061__auto____0 = (function (){
var statearr_17900 = [null,null,null,null,null,null,null,null,null];
(statearr_17900[(0)] = cljs$core$async$state_machine__17061__auto__);

(statearr_17900[(1)] = (1));

return statearr_17900;
});
var cljs$core$async$state_machine__17061__auto____1 = (function (state_17880){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_17880);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e17901){var ex__17064__auto__ = e17901;
var statearr_17902_19903 = state_17880;
(statearr_17902_19903[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_17880[(4)]))){
var statearr_17903_19904 = state_17880;
(statearr_17903_19904[(1)] = cljs.core.first((state_17880[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19905 = state_17880;
state_17880 = G__19905;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$state_machine__17061__auto__ = function(state_17880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17061__auto____1.call(this,state_17880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17061__auto____0;
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17061__auto____1;
return cljs$core$async$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_17904 = f__17215__auto__();
(statearr_17904[(6)] = c__17214__auto___19876);

return statearr_17904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_17926){
var state_val_17927 = (state_17926[(1)]);
if((state_val_17927 === (7))){
var inst_17922 = (state_17926[(2)]);
var state_17926__$1 = state_17926;
var statearr_17929_19907 = state_17926__$1;
(statearr_17929_19907[(2)] = inst_17922);

(statearr_17929_19907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (1))){
var inst_17905 = init;
var inst_17906 = inst_17905;
var state_17926__$1 = (function (){var statearr_17930 = state_17926;
(statearr_17930[(7)] = inst_17906);

return statearr_17930;
})();
var statearr_17931_19908 = state_17926__$1;
(statearr_17931_19908[(2)] = null);

(statearr_17931_19908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (4))){
var inst_17909 = (state_17926[(8)]);
var inst_17909__$1 = (state_17926[(2)]);
var inst_17910 = (inst_17909__$1 == null);
var state_17926__$1 = (function (){var statearr_17932 = state_17926;
(statearr_17932[(8)] = inst_17909__$1);

return statearr_17932;
})();
if(cljs.core.truth_(inst_17910)){
var statearr_17933_19910 = state_17926__$1;
(statearr_17933_19910[(1)] = (5));

} else {
var statearr_17934_19911 = state_17926__$1;
(statearr_17934_19911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (6))){
var inst_17906 = (state_17926[(7)]);
var inst_17909 = (state_17926[(8)]);
var inst_17913 = (state_17926[(9)]);
var inst_17913__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17906,inst_17909) : f.call(null,inst_17906,inst_17909));
var inst_17914 = cljs.core.reduced_QMARK_(inst_17913__$1);
var state_17926__$1 = (function (){var statearr_17935 = state_17926;
(statearr_17935[(9)] = inst_17913__$1);

return statearr_17935;
})();
if(inst_17914){
var statearr_17936_19917 = state_17926__$1;
(statearr_17936_19917[(1)] = (8));

} else {
var statearr_17937_19918 = state_17926__$1;
(statearr_17937_19918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (3))){
var inst_17924 = (state_17926[(2)]);
var state_17926__$1 = state_17926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17926__$1,inst_17924);
} else {
if((state_val_17927 === (2))){
var state_17926__$1 = state_17926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17926__$1,(4),ch);
} else {
if((state_val_17927 === (9))){
var inst_17913 = (state_17926[(9)]);
var inst_17906 = inst_17913;
var state_17926__$1 = (function (){var statearr_17939 = state_17926;
(statearr_17939[(7)] = inst_17906);

return statearr_17939;
})();
var statearr_17940_19919 = state_17926__$1;
(statearr_17940_19919[(2)] = null);

(statearr_17940_19919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (5))){
var inst_17906 = (state_17926[(7)]);
var state_17926__$1 = state_17926;
var statearr_17941_19920 = state_17926__$1;
(statearr_17941_19920[(2)] = inst_17906);

(statearr_17941_19920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (10))){
var inst_17920 = (state_17926[(2)]);
var state_17926__$1 = state_17926;
var statearr_17942_19921 = state_17926__$1;
(statearr_17942_19921[(2)] = inst_17920);

(statearr_17942_19921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (8))){
var inst_17913 = (state_17926[(9)]);
var inst_17916 = cljs.core.deref(inst_17913);
var state_17926__$1 = state_17926;
var statearr_17943_19922 = state_17926__$1;
(statearr_17943_19922[(2)] = inst_17916);

(statearr_17943_19922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17061__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17061__auto____0 = (function (){
var statearr_17944 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17944[(0)] = cljs$core$async$reduce_$_state_machine__17061__auto__);

(statearr_17944[(1)] = (1));

return statearr_17944;
});
var cljs$core$async$reduce_$_state_machine__17061__auto____1 = (function (state_17926){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_17926);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e17945){var ex__17064__auto__ = e17945;
var statearr_17946_19927 = state_17926;
(statearr_17946_19927[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_17926[(4)]))){
var statearr_17947_19928 = state_17926;
(statearr_17947_19928[(1)] = cljs.core.first((state_17926[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19930 = state_17926;
state_17926 = G__19930;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17061__auto__ = function(state_17926){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17061__auto____1.call(this,state_17926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17061__auto____0;
cljs$core$async$reduce_$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17061__auto____1;
return cljs$core$async$reduce_$_state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_17948 = f__17215__auto__();
(statearr_17948[(6)] = c__17214__auto__);

return statearr_17948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));

return c__17214__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_17955){
var state_val_17956 = (state_17955[(1)]);
if((state_val_17956 === (1))){
var inst_17950 = cljs.core.async.reduce(f__$1,init,ch);
var state_17955__$1 = state_17955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17955__$1,(2),inst_17950);
} else {
if((state_val_17956 === (2))){
var inst_17952 = (state_17955[(2)]);
var inst_17953 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17952) : f__$1.call(null,inst_17952));
var state_17955__$1 = state_17955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17955__$1,inst_17953);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17061__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17061__auto____0 = (function (){
var statearr_17957 = [null,null,null,null,null,null,null];
(statearr_17957[(0)] = cljs$core$async$transduce_$_state_machine__17061__auto__);

(statearr_17957[(1)] = (1));

return statearr_17957;
});
var cljs$core$async$transduce_$_state_machine__17061__auto____1 = (function (state_17955){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_17955);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e17958){var ex__17064__auto__ = e17958;
var statearr_17959_19933 = state_17955;
(statearr_17959_19933[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_17955[(4)]))){
var statearr_17960_19934 = state_17955;
(statearr_17960_19934[(1)] = cljs.core.first((state_17955[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19935 = state_17955;
state_17955 = G__19935;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17061__auto__ = function(state_17955){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17061__auto____1.call(this,state_17955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17061__auto____0;
cljs$core$async$transduce_$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17061__auto____1;
return cljs$core$async$transduce_$_state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_17962 = f__17215__auto__();
(statearr_17962[(6)] = c__17214__auto__);

return statearr_17962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));

return c__17214__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17964 = arguments.length;
switch (G__17964) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_17989){
var state_val_17991 = (state_17989[(1)]);
if((state_val_17991 === (7))){
var inst_17971 = (state_17989[(2)]);
var state_17989__$1 = state_17989;
var statearr_17992_19941 = state_17989__$1;
(statearr_17992_19941[(2)] = inst_17971);

(statearr_17992_19941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (1))){
var inst_17965 = cljs.core.seq(coll);
var inst_17966 = inst_17965;
var state_17989__$1 = (function (){var statearr_17993 = state_17989;
(statearr_17993[(7)] = inst_17966);

return statearr_17993;
})();
var statearr_17994_19942 = state_17989__$1;
(statearr_17994_19942[(2)] = null);

(statearr_17994_19942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (4))){
var inst_17966 = (state_17989[(7)]);
var inst_17969 = cljs.core.first(inst_17966);
var state_17989__$1 = state_17989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17989__$1,(7),ch,inst_17969);
} else {
if((state_val_17991 === (13))){
var inst_17983 = (state_17989[(2)]);
var state_17989__$1 = state_17989;
var statearr_17995_19947 = state_17989__$1;
(statearr_17995_19947[(2)] = inst_17983);

(statearr_17995_19947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (6))){
var inst_17974 = (state_17989[(2)]);
var state_17989__$1 = state_17989;
if(cljs.core.truth_(inst_17974)){
var statearr_17996_19948 = state_17989__$1;
(statearr_17996_19948[(1)] = (8));

} else {
var statearr_17997_19949 = state_17989__$1;
(statearr_17997_19949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (3))){
var inst_17987 = (state_17989[(2)]);
var state_17989__$1 = state_17989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17989__$1,inst_17987);
} else {
if((state_val_17991 === (12))){
var state_17989__$1 = state_17989;
var statearr_17998_19950 = state_17989__$1;
(statearr_17998_19950[(2)] = null);

(statearr_17998_19950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (2))){
var inst_17966 = (state_17989[(7)]);
var state_17989__$1 = state_17989;
if(cljs.core.truth_(inst_17966)){
var statearr_17999_19951 = state_17989__$1;
(statearr_17999_19951[(1)] = (4));

} else {
var statearr_18000_19952 = state_17989__$1;
(statearr_18000_19952[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (11))){
var inst_17980 = cljs.core.async.close_BANG_(ch);
var state_17989__$1 = state_17989;
var statearr_18002_19957 = state_17989__$1;
(statearr_18002_19957[(2)] = inst_17980);

(statearr_18002_19957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (9))){
var state_17989__$1 = state_17989;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18003_19958 = state_17989__$1;
(statearr_18003_19958[(1)] = (11));

} else {
var statearr_18004_19959 = state_17989__$1;
(statearr_18004_19959[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (5))){
var inst_17966 = (state_17989[(7)]);
var state_17989__$1 = state_17989;
var statearr_18005_19960 = state_17989__$1;
(statearr_18005_19960[(2)] = inst_17966);

(statearr_18005_19960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (10))){
var inst_17985 = (state_17989[(2)]);
var state_17989__$1 = state_17989;
var statearr_18006_19961 = state_17989__$1;
(statearr_18006_19961[(2)] = inst_17985);

(statearr_18006_19961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (8))){
var inst_17966 = (state_17989[(7)]);
var inst_17976 = cljs.core.next(inst_17966);
var inst_17966__$1 = inst_17976;
var state_17989__$1 = (function (){var statearr_18007 = state_17989;
(statearr_18007[(7)] = inst_17966__$1);

return statearr_18007;
})();
var statearr_18008_19962 = state_17989__$1;
(statearr_18008_19962[(2)] = null);

(statearr_18008_19962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17061__auto__ = null;
var cljs$core$async$state_machine__17061__auto____0 = (function (){
var statearr_18009 = [null,null,null,null,null,null,null,null];
(statearr_18009[(0)] = cljs$core$async$state_machine__17061__auto__);

(statearr_18009[(1)] = (1));

return statearr_18009;
});
var cljs$core$async$state_machine__17061__auto____1 = (function (state_17989){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_17989);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e18010){var ex__17064__auto__ = e18010;
var statearr_18011_19963 = state_17989;
(statearr_18011_19963[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_17989[(4)]))){
var statearr_18012_19964 = state_17989;
(statearr_18012_19964[(1)] = cljs.core.first((state_17989[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19965 = state_17989;
state_17989 = G__19965;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$state_machine__17061__auto__ = function(state_17989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17061__auto____1.call(this,state_17989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17061__auto____0;
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17061__auto____1;
return cljs$core$async$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_18013 = f__17215__auto__();
(statearr_18013[(6)] = c__17214__auto__);

return statearr_18013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));

return c__17214__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18016 = arguments.length;
switch (G__18016) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19975 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19975(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19985 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19985(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19987 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19987(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19996 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19996(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18020 = (function (ch,cs,meta18021){
this.ch = ch;
this.cs = cs;
this.meta18021 = meta18021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18022,meta18021__$1){
var self__ = this;
var _18022__$1 = this;
return (new cljs.core.async.t_cljs$core$async18020(self__.ch,self__.cs,meta18021__$1));
}));

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18022){
var self__ = this;
var _18022__$1 = this;
return self__.meta18021;
}));

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18021","meta18021",-348817320,null)], null);
}));

(cljs.core.async.t_cljs$core$async18020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18020");

(cljs.core.async.t_cljs$core$async18020.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18020.
 */
cljs.core.async.__GT_t_cljs$core$async18020 = (function cljs$core$async$__GT_t_cljs$core$async18020(ch,cs,meta18021){
return (new cljs.core.async.t_cljs$core$async18020(ch,cs,meta18021));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async18020(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17214__auto___20011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_18159){
var state_val_18160 = (state_18159[(1)]);
if((state_val_18160 === (7))){
var inst_18155 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18161_20012 = state_18159__$1;
(statearr_18161_20012[(2)] = inst_18155);

(statearr_18161_20012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (20))){
var inst_18057 = (state_18159[(7)]);
var inst_18070 = cljs.core.first(inst_18057);
var inst_18071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18070,(0),null);
var inst_18072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18070,(1),null);
var state_18159__$1 = (function (){var statearr_18162 = state_18159;
(statearr_18162[(8)] = inst_18071);

return statearr_18162;
})();
if(cljs.core.truth_(inst_18072)){
var statearr_18163_20013 = state_18159__$1;
(statearr_18163_20013[(1)] = (22));

} else {
var statearr_18164_20018 = state_18159__$1;
(statearr_18164_20018[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (27))){
var inst_18026 = (state_18159[(9)]);
var inst_18107 = (state_18159[(10)]);
var inst_18102 = (state_18159[(11)]);
var inst_18100 = (state_18159[(12)]);
var inst_18107__$1 = cljs.core._nth(inst_18100,inst_18102);
var inst_18108 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18107__$1,inst_18026,done);
var state_18159__$1 = (function (){var statearr_18165 = state_18159;
(statearr_18165[(10)] = inst_18107__$1);

return statearr_18165;
})();
if(cljs.core.truth_(inst_18108)){
var statearr_18166_20024 = state_18159__$1;
(statearr_18166_20024[(1)] = (30));

} else {
var statearr_18167_20026 = state_18159__$1;
(statearr_18167_20026[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (1))){
var state_18159__$1 = state_18159;
var statearr_18168_20032 = state_18159__$1;
(statearr_18168_20032[(2)] = null);

(statearr_18168_20032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (24))){
var inst_18057 = (state_18159[(7)]);
var inst_18077 = (state_18159[(2)]);
var inst_18078 = cljs.core.next(inst_18057);
var inst_18035 = inst_18078;
var inst_18036 = null;
var inst_18037 = (0);
var inst_18038 = (0);
var state_18159__$1 = (function (){var statearr_18171 = state_18159;
(statearr_18171[(13)] = inst_18037);

(statearr_18171[(14)] = inst_18035);

(statearr_18171[(15)] = inst_18077);

(statearr_18171[(16)] = inst_18036);

(statearr_18171[(17)] = inst_18038);

return statearr_18171;
})();
var statearr_18172_20042 = state_18159__$1;
(statearr_18172_20042[(2)] = null);

(statearr_18172_20042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (39))){
var state_18159__$1 = state_18159;
var statearr_18176_20043 = state_18159__$1;
(statearr_18176_20043[(2)] = null);

(statearr_18176_20043[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (4))){
var inst_18026 = (state_18159[(9)]);
var inst_18026__$1 = (state_18159[(2)]);
var inst_18027 = (inst_18026__$1 == null);
var state_18159__$1 = (function (){var statearr_18177 = state_18159;
(statearr_18177[(9)] = inst_18026__$1);

return statearr_18177;
})();
if(cljs.core.truth_(inst_18027)){
var statearr_18178_20044 = state_18159__$1;
(statearr_18178_20044[(1)] = (5));

} else {
var statearr_18179_20045 = state_18159__$1;
(statearr_18179_20045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (15))){
var inst_18037 = (state_18159[(13)]);
var inst_18035 = (state_18159[(14)]);
var inst_18036 = (state_18159[(16)]);
var inst_18038 = (state_18159[(17)]);
var inst_18053 = (state_18159[(2)]);
var inst_18054 = (inst_18038 + (1));
var tmp18173 = inst_18037;
var tmp18174 = inst_18035;
var tmp18175 = inst_18036;
var inst_18035__$1 = tmp18174;
var inst_18036__$1 = tmp18175;
var inst_18037__$1 = tmp18173;
var inst_18038__$1 = inst_18054;
var state_18159__$1 = (function (){var statearr_18180 = state_18159;
(statearr_18180[(13)] = inst_18037__$1);

(statearr_18180[(18)] = inst_18053);

(statearr_18180[(14)] = inst_18035__$1);

(statearr_18180[(16)] = inst_18036__$1);

(statearr_18180[(17)] = inst_18038__$1);

return statearr_18180;
})();
var statearr_18181_20054 = state_18159__$1;
(statearr_18181_20054[(2)] = null);

(statearr_18181_20054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (21))){
var inst_18081 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18185_20058 = state_18159__$1;
(statearr_18185_20058[(2)] = inst_18081);

(statearr_18185_20058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (31))){
var inst_18107 = (state_18159[(10)]);
var inst_18111 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18107);
var state_18159__$1 = state_18159;
var statearr_18186_20062 = state_18159__$1;
(statearr_18186_20062[(2)] = inst_18111);

(statearr_18186_20062[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (32))){
var inst_18099 = (state_18159[(19)]);
var inst_18101 = (state_18159[(20)]);
var inst_18102 = (state_18159[(11)]);
var inst_18100 = (state_18159[(12)]);
var inst_18113 = (state_18159[(2)]);
var inst_18114 = (inst_18102 + (1));
var tmp18182 = inst_18099;
var tmp18183 = inst_18101;
var tmp18184 = inst_18100;
var inst_18099__$1 = tmp18182;
var inst_18100__$1 = tmp18184;
var inst_18101__$1 = tmp18183;
var inst_18102__$1 = inst_18114;
var state_18159__$1 = (function (){var statearr_18187 = state_18159;
(statearr_18187[(19)] = inst_18099__$1);

(statearr_18187[(20)] = inst_18101__$1);

(statearr_18187[(21)] = inst_18113);

(statearr_18187[(11)] = inst_18102__$1);

(statearr_18187[(12)] = inst_18100__$1);

return statearr_18187;
})();
var statearr_18188_20063 = state_18159__$1;
(statearr_18188_20063[(2)] = null);

(statearr_18188_20063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (40))){
var inst_18127 = (state_18159[(22)]);
var inst_18131 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18127);
var state_18159__$1 = state_18159;
var statearr_18189_20067 = state_18159__$1;
(statearr_18189_20067[(2)] = inst_18131);

(statearr_18189_20067[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (33))){
var inst_18117 = (state_18159[(23)]);
var inst_18119 = cljs.core.chunked_seq_QMARK_(inst_18117);
var state_18159__$1 = state_18159;
if(inst_18119){
var statearr_18190_20073 = state_18159__$1;
(statearr_18190_20073[(1)] = (36));

} else {
var statearr_18191_20074 = state_18159__$1;
(statearr_18191_20074[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (13))){
var inst_18047 = (state_18159[(24)]);
var inst_18050 = cljs.core.async.close_BANG_(inst_18047);
var state_18159__$1 = state_18159;
var statearr_18192_20077 = state_18159__$1;
(statearr_18192_20077[(2)] = inst_18050);

(statearr_18192_20077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (22))){
var inst_18071 = (state_18159[(8)]);
var inst_18074 = cljs.core.async.close_BANG_(inst_18071);
var state_18159__$1 = state_18159;
var statearr_18193_20085 = state_18159__$1;
(statearr_18193_20085[(2)] = inst_18074);

(statearr_18193_20085[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (36))){
var inst_18117 = (state_18159[(23)]);
var inst_18121 = cljs.core.chunk_first(inst_18117);
var inst_18122 = cljs.core.chunk_rest(inst_18117);
var inst_18123 = cljs.core.count(inst_18121);
var inst_18099 = inst_18122;
var inst_18100 = inst_18121;
var inst_18101 = inst_18123;
var inst_18102 = (0);
var state_18159__$1 = (function (){var statearr_18194 = state_18159;
(statearr_18194[(19)] = inst_18099);

(statearr_18194[(20)] = inst_18101);

(statearr_18194[(11)] = inst_18102);

(statearr_18194[(12)] = inst_18100);

return statearr_18194;
})();
var statearr_18195_20089 = state_18159__$1;
(statearr_18195_20089[(2)] = null);

(statearr_18195_20089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (41))){
var inst_18117 = (state_18159[(23)]);
var inst_18133 = (state_18159[(2)]);
var inst_18135 = cljs.core.next(inst_18117);
var inst_18099 = inst_18135;
var inst_18100 = null;
var inst_18101 = (0);
var inst_18102 = (0);
var state_18159__$1 = (function (){var statearr_18196 = state_18159;
(statearr_18196[(19)] = inst_18099);

(statearr_18196[(25)] = inst_18133);

(statearr_18196[(20)] = inst_18101);

(statearr_18196[(11)] = inst_18102);

(statearr_18196[(12)] = inst_18100);

return statearr_18196;
})();
var statearr_18197_20094 = state_18159__$1;
(statearr_18197_20094[(2)] = null);

(statearr_18197_20094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (43))){
var state_18159__$1 = state_18159;
var statearr_18199_20099 = state_18159__$1;
(statearr_18199_20099[(2)] = null);

(statearr_18199_20099[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (29))){
var inst_18143 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18201_20103 = state_18159__$1;
(statearr_18201_20103[(2)] = inst_18143);

(statearr_18201_20103[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (44))){
var inst_18152 = (state_18159[(2)]);
var state_18159__$1 = (function (){var statearr_18202 = state_18159;
(statearr_18202[(26)] = inst_18152);

return statearr_18202;
})();
var statearr_18203_20104 = state_18159__$1;
(statearr_18203_20104[(2)] = null);

(statearr_18203_20104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (6))){
var inst_18091 = (state_18159[(27)]);
var inst_18090 = cljs.core.deref(cs);
var inst_18091__$1 = cljs.core.keys(inst_18090);
var inst_18092 = cljs.core.count(inst_18091__$1);
var inst_18093 = cljs.core.reset_BANG_(dctr,inst_18092);
var inst_18098 = cljs.core.seq(inst_18091__$1);
var inst_18099 = inst_18098;
var inst_18100 = null;
var inst_18101 = (0);
var inst_18102 = (0);
var state_18159__$1 = (function (){var statearr_18204 = state_18159;
(statearr_18204[(19)] = inst_18099);

(statearr_18204[(27)] = inst_18091__$1);

(statearr_18204[(28)] = inst_18093);

(statearr_18204[(20)] = inst_18101);

(statearr_18204[(11)] = inst_18102);

(statearr_18204[(12)] = inst_18100);

return statearr_18204;
})();
var statearr_18205_20109 = state_18159__$1;
(statearr_18205_20109[(2)] = null);

(statearr_18205_20109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (28))){
var inst_18099 = (state_18159[(19)]);
var inst_18117 = (state_18159[(23)]);
var inst_18117__$1 = cljs.core.seq(inst_18099);
var state_18159__$1 = (function (){var statearr_18206 = state_18159;
(statearr_18206[(23)] = inst_18117__$1);

return statearr_18206;
})();
if(inst_18117__$1){
var statearr_18207_20110 = state_18159__$1;
(statearr_18207_20110[(1)] = (33));

} else {
var statearr_18208_20115 = state_18159__$1;
(statearr_18208_20115[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (25))){
var inst_18101 = (state_18159[(20)]);
var inst_18102 = (state_18159[(11)]);
var inst_18104 = (inst_18102 < inst_18101);
var inst_18105 = inst_18104;
var state_18159__$1 = state_18159;
if(cljs.core.truth_(inst_18105)){
var statearr_18209_20116 = state_18159__$1;
(statearr_18209_20116[(1)] = (27));

} else {
var statearr_18210_20120 = state_18159__$1;
(statearr_18210_20120[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (34))){
var state_18159__$1 = state_18159;
var statearr_18211_20122 = state_18159__$1;
(statearr_18211_20122[(2)] = null);

(statearr_18211_20122[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (17))){
var state_18159__$1 = state_18159;
var statearr_18212_20124 = state_18159__$1;
(statearr_18212_20124[(2)] = null);

(statearr_18212_20124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (3))){
var inst_18157 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18159__$1,inst_18157);
} else {
if((state_val_18160 === (12))){
var inst_18086 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18213_20125 = state_18159__$1;
(statearr_18213_20125[(2)] = inst_18086);

(statearr_18213_20125[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (2))){
var state_18159__$1 = state_18159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18159__$1,(4),ch);
} else {
if((state_val_18160 === (23))){
var state_18159__$1 = state_18159;
var statearr_18214_20126 = state_18159__$1;
(statearr_18214_20126[(2)] = null);

(statearr_18214_20126[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (35))){
var inst_18141 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18215_20127 = state_18159__$1;
(statearr_18215_20127[(2)] = inst_18141);

(statearr_18215_20127[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (19))){
var inst_18057 = (state_18159[(7)]);
var inst_18062 = cljs.core.chunk_first(inst_18057);
var inst_18063 = cljs.core.chunk_rest(inst_18057);
var inst_18064 = cljs.core.count(inst_18062);
var inst_18035 = inst_18063;
var inst_18036 = inst_18062;
var inst_18037 = inst_18064;
var inst_18038 = (0);
var state_18159__$1 = (function (){var statearr_18216 = state_18159;
(statearr_18216[(13)] = inst_18037);

(statearr_18216[(14)] = inst_18035);

(statearr_18216[(16)] = inst_18036);

(statearr_18216[(17)] = inst_18038);

return statearr_18216;
})();
var statearr_18219_20136 = state_18159__$1;
(statearr_18219_20136[(2)] = null);

(statearr_18219_20136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (11))){
var inst_18057 = (state_18159[(7)]);
var inst_18035 = (state_18159[(14)]);
var inst_18057__$1 = cljs.core.seq(inst_18035);
var state_18159__$1 = (function (){var statearr_18221 = state_18159;
(statearr_18221[(7)] = inst_18057__$1);

return statearr_18221;
})();
if(inst_18057__$1){
var statearr_18222_20137 = state_18159__$1;
(statearr_18222_20137[(1)] = (16));

} else {
var statearr_18223_20138 = state_18159__$1;
(statearr_18223_20138[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (9))){
var inst_18088 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18224_20139 = state_18159__$1;
(statearr_18224_20139[(2)] = inst_18088);

(statearr_18224_20139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (5))){
var inst_18033 = cljs.core.deref(cs);
var inst_18034 = cljs.core.seq(inst_18033);
var inst_18035 = inst_18034;
var inst_18036 = null;
var inst_18037 = (0);
var inst_18038 = (0);
var state_18159__$1 = (function (){var statearr_18228 = state_18159;
(statearr_18228[(13)] = inst_18037);

(statearr_18228[(14)] = inst_18035);

(statearr_18228[(16)] = inst_18036);

(statearr_18228[(17)] = inst_18038);

return statearr_18228;
})();
var statearr_18229_20143 = state_18159__$1;
(statearr_18229_20143[(2)] = null);

(statearr_18229_20143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (14))){
var state_18159__$1 = state_18159;
var statearr_18233_20145 = state_18159__$1;
(statearr_18233_20145[(2)] = null);

(statearr_18233_20145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (45))){
var inst_18149 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18234_20146 = state_18159__$1;
(statearr_18234_20146[(2)] = inst_18149);

(statearr_18234_20146[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (26))){
var inst_18091 = (state_18159[(27)]);
var inst_18145 = (state_18159[(2)]);
var inst_18146 = cljs.core.seq(inst_18091);
var state_18159__$1 = (function (){var statearr_18235 = state_18159;
(statearr_18235[(29)] = inst_18145);

return statearr_18235;
})();
if(inst_18146){
var statearr_18236_20147 = state_18159__$1;
(statearr_18236_20147[(1)] = (42));

} else {
var statearr_18237_20149 = state_18159__$1;
(statearr_18237_20149[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (16))){
var inst_18057 = (state_18159[(7)]);
var inst_18059 = cljs.core.chunked_seq_QMARK_(inst_18057);
var state_18159__$1 = state_18159;
if(inst_18059){
var statearr_18238_20150 = state_18159__$1;
(statearr_18238_20150[(1)] = (19));

} else {
var statearr_18239_20154 = state_18159__$1;
(statearr_18239_20154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (38))){
var inst_18138 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18240_20155 = state_18159__$1;
(statearr_18240_20155[(2)] = inst_18138);

(statearr_18240_20155[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (30))){
var state_18159__$1 = state_18159;
var statearr_18242_20156 = state_18159__$1;
(statearr_18242_20156[(2)] = null);

(statearr_18242_20156[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (10))){
var inst_18036 = (state_18159[(16)]);
var inst_18038 = (state_18159[(17)]);
var inst_18046 = cljs.core._nth(inst_18036,inst_18038);
var inst_18047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18046,(0),null);
var inst_18048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18046,(1),null);
var state_18159__$1 = (function (){var statearr_18246 = state_18159;
(statearr_18246[(24)] = inst_18047);

return statearr_18246;
})();
if(cljs.core.truth_(inst_18048)){
var statearr_18247_20158 = state_18159__$1;
(statearr_18247_20158[(1)] = (13));

} else {
var statearr_18248_20159 = state_18159__$1;
(statearr_18248_20159[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (18))){
var inst_18084 = (state_18159[(2)]);
var state_18159__$1 = state_18159;
var statearr_18250_20160 = state_18159__$1;
(statearr_18250_20160[(2)] = inst_18084);

(statearr_18250_20160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (42))){
var state_18159__$1 = state_18159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18159__$1,(45),dchan);
} else {
if((state_val_18160 === (37))){
var inst_18026 = (state_18159[(9)]);
var inst_18117 = (state_18159[(23)]);
var inst_18127 = (state_18159[(22)]);
var inst_18127__$1 = cljs.core.first(inst_18117);
var inst_18128 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18127__$1,inst_18026,done);
var state_18159__$1 = (function (){var statearr_18254 = state_18159;
(statearr_18254[(22)] = inst_18127__$1);

return statearr_18254;
})();
if(cljs.core.truth_(inst_18128)){
var statearr_18255_20162 = state_18159__$1;
(statearr_18255_20162[(1)] = (39));

} else {
var statearr_18256_20163 = state_18159__$1;
(statearr_18256_20163[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18160 === (8))){
var inst_18037 = (state_18159[(13)]);
var inst_18038 = (state_18159[(17)]);
var inst_18040 = (inst_18038 < inst_18037);
var inst_18041 = inst_18040;
var state_18159__$1 = state_18159;
if(cljs.core.truth_(inst_18041)){
var statearr_18258_20165 = state_18159__$1;
(statearr_18258_20165[(1)] = (10));

} else {
var statearr_18259_20167 = state_18159__$1;
(statearr_18259_20167[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17061__auto__ = null;
var cljs$core$async$mult_$_state_machine__17061__auto____0 = (function (){
var statearr_18263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18263[(0)] = cljs$core$async$mult_$_state_machine__17061__auto__);

(statearr_18263[(1)] = (1));

return statearr_18263;
});
var cljs$core$async$mult_$_state_machine__17061__auto____1 = (function (state_18159){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_18159);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e18265){var ex__17064__auto__ = e18265;
var statearr_18266_20170 = state_18159;
(statearr_18266_20170[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_18159[(4)]))){
var statearr_18267_20171 = state_18159;
(statearr_18267_20171[(1)] = cljs.core.first((state_18159[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20172 = state_18159;
state_18159 = G__20172;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17061__auto__ = function(state_18159){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17061__auto____1.call(this,state_18159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17061__auto____0;
cljs$core$async$mult_$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17061__auto____1;
return cljs$core$async$mult_$_state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_18271 = f__17215__auto__();
(statearr_18271[(6)] = c__17214__auto___20011);

return statearr_18271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18277 = arguments.length;
switch (G__18277) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20175 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20175(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20180 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20180(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20183 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20183(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20184 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20184(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20185 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20185(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20189 = arguments.length;
var i__5770__auto___20190 = (0);
while(true){
if((i__5770__auto___20190 < len__5769__auto___20189)){
args__5775__auto__.push((arguments[i__5770__auto___20190]));

var G__20191 = (i__5770__auto___20190 + (1));
i__5770__auto___20190 = G__20191;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18339){
var map__18340 = p__18339;
var map__18340__$1 = cljs.core.__destructure_map(map__18340);
var opts = map__18340__$1;
var statearr_18341_20194 = state;
(statearr_18341_20194[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18346_20195 = state;
(statearr_18346_20195[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18348_20196 = state;
(statearr_18348_20196[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18326){
var G__18327 = cljs.core.first(seq18326);
var seq18326__$1 = cljs.core.next(seq18326);
var G__18328 = cljs.core.first(seq18326__$1);
var seq18326__$2 = cljs.core.next(seq18326__$1);
var G__18329 = cljs.core.first(seq18326__$2);
var seq18326__$3 = cljs.core.next(seq18326__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18327,G__18328,G__18329,seq18326__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18371 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18372){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18372 = meta18372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18373,meta18372__$1){
var self__ = this;
var _18373__$1 = this;
return (new cljs.core.async.t_cljs$core$async18371(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18372__$1));
}));

(cljs.core.async.t_cljs$core$async18371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18373){
var self__ = this;
var _18373__$1 = this;
return self__.meta18372;
}));

(cljs.core.async.t_cljs$core$async18371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18371.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18371.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18371.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18371.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18371.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18371.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18372","meta18372",388495429,null)], null);
}));

(cljs.core.async.t_cljs$core$async18371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18371");

(cljs.core.async.t_cljs$core$async18371.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18371.
 */
cljs.core.async.__GT_t_cljs$core$async18371 = (function cljs$core$async$__GT_t_cljs$core$async18371(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18372){
return (new cljs.core.async.t_cljs$core$async18371(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18372));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18371(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17214__auto___20210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_18511){
var state_val_18512 = (state_18511[(1)]);
if((state_val_18512 === (7))){
var inst_18458 = (state_18511[(2)]);
var state_18511__$1 = state_18511;
if(cljs.core.truth_(inst_18458)){
var statearr_18522_20213 = state_18511__$1;
(statearr_18522_20213[(1)] = (8));

} else {
var statearr_18526_20215 = state_18511__$1;
(statearr_18526_20215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (20))){
var inst_18441 = (state_18511[(7)]);
var state_18511__$1 = state_18511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18511__$1,(23),out,inst_18441);
} else {
if((state_val_18512 === (1))){
var inst_18419 = calc_state();
var inst_18421 = cljs.core.__destructure_map(inst_18419);
var inst_18422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18421,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18421,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18421,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18425 = inst_18419;
var state_18511__$1 = (function (){var statearr_18531 = state_18511;
(statearr_18531[(8)] = inst_18425);

(statearr_18531[(9)] = inst_18424);

(statearr_18531[(10)] = inst_18422);

(statearr_18531[(11)] = inst_18423);

return statearr_18531;
})();
var statearr_18533_20217 = state_18511__$1;
(statearr_18533_20217[(2)] = null);

(statearr_18533_20217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (24))){
var inst_18431 = (state_18511[(12)]);
var inst_18425 = inst_18431;
var state_18511__$1 = (function (){var statearr_18535 = state_18511;
(statearr_18535[(8)] = inst_18425);

return statearr_18535;
})();
var statearr_18538_20220 = state_18511__$1;
(statearr_18538_20220[(2)] = null);

(statearr_18538_20220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (4))){
var inst_18449 = (state_18511[(13)]);
var inst_18441 = (state_18511[(7)]);
var inst_18440 = (state_18511[(2)]);
var inst_18441__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18440,(0),null);
var inst_18442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18440,(1),null);
var inst_18449__$1 = (inst_18441__$1 == null);
var state_18511__$1 = (function (){var statearr_18549 = state_18511;
(statearr_18549[(13)] = inst_18449__$1);

(statearr_18549[(7)] = inst_18441__$1);

(statearr_18549[(14)] = inst_18442);

return statearr_18549;
})();
if(cljs.core.truth_(inst_18449__$1)){
var statearr_18550_20223 = state_18511__$1;
(statearr_18550_20223[(1)] = (5));

} else {
var statearr_18553_20224 = state_18511__$1;
(statearr_18553_20224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (15))){
var inst_18476 = (state_18511[(15)]);
var inst_18432 = (state_18511[(16)]);
var inst_18476__$1 = cljs.core.empty_QMARK_(inst_18432);
var state_18511__$1 = (function (){var statearr_18559 = state_18511;
(statearr_18559[(15)] = inst_18476__$1);

return statearr_18559;
})();
if(inst_18476__$1){
var statearr_18561_20225 = state_18511__$1;
(statearr_18561_20225[(1)] = (17));

} else {
var statearr_18562_20226 = state_18511__$1;
(statearr_18562_20226[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (21))){
var inst_18431 = (state_18511[(12)]);
var inst_18425 = inst_18431;
var state_18511__$1 = (function (){var statearr_18566 = state_18511;
(statearr_18566[(8)] = inst_18425);

return statearr_18566;
})();
var statearr_18567_20227 = state_18511__$1;
(statearr_18567_20227[(2)] = null);

(statearr_18567_20227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (13))){
var inst_18467 = (state_18511[(2)]);
var inst_18468 = calc_state();
var inst_18425 = inst_18468;
var state_18511__$1 = (function (){var statearr_18572 = state_18511;
(statearr_18572[(8)] = inst_18425);

(statearr_18572[(17)] = inst_18467);

return statearr_18572;
})();
var statearr_18574_20228 = state_18511__$1;
(statearr_18574_20228[(2)] = null);

(statearr_18574_20228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (22))){
var inst_18501 = (state_18511[(2)]);
var state_18511__$1 = state_18511;
var statearr_18576_20229 = state_18511__$1;
(statearr_18576_20229[(2)] = inst_18501);

(statearr_18576_20229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (6))){
var inst_18442 = (state_18511[(14)]);
var inst_18456 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18442,change);
var state_18511__$1 = state_18511;
var statearr_18582_20230 = state_18511__$1;
(statearr_18582_20230[(2)] = inst_18456);

(statearr_18582_20230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (25))){
var state_18511__$1 = state_18511;
var statearr_18584_20231 = state_18511__$1;
(statearr_18584_20231[(2)] = null);

(statearr_18584_20231[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (17))){
var inst_18433 = (state_18511[(18)]);
var inst_18442 = (state_18511[(14)]);
var inst_18482 = (inst_18433.cljs$core$IFn$_invoke$arity$1 ? inst_18433.cljs$core$IFn$_invoke$arity$1(inst_18442) : inst_18433.call(null,inst_18442));
var inst_18483 = cljs.core.not(inst_18482);
var state_18511__$1 = state_18511;
var statearr_18588_20233 = state_18511__$1;
(statearr_18588_20233[(2)] = inst_18483);

(statearr_18588_20233[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (3))){
var inst_18505 = (state_18511[(2)]);
var state_18511__$1 = state_18511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18511__$1,inst_18505);
} else {
if((state_val_18512 === (12))){
var state_18511__$1 = state_18511;
var statearr_18590_20235 = state_18511__$1;
(statearr_18590_20235[(2)] = null);

(statearr_18590_20235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (2))){
var inst_18425 = (state_18511[(8)]);
var inst_18431 = (state_18511[(12)]);
var inst_18431__$1 = cljs.core.__destructure_map(inst_18425);
var inst_18432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18431__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18431__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18431__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18511__$1 = (function (){var statearr_18591 = state_18511;
(statearr_18591[(18)] = inst_18433);

(statearr_18591[(12)] = inst_18431__$1);

(statearr_18591[(16)] = inst_18432);

return statearr_18591;
})();
return cljs.core.async.ioc_alts_BANG_(state_18511__$1,(4),inst_18434);
} else {
if((state_val_18512 === (23))){
var inst_18492 = (state_18511[(2)]);
var state_18511__$1 = state_18511;
if(cljs.core.truth_(inst_18492)){
var statearr_18592_20243 = state_18511__$1;
(statearr_18592_20243[(1)] = (24));

} else {
var statearr_18593_20244 = state_18511__$1;
(statearr_18593_20244[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (19))){
var inst_18486 = (state_18511[(2)]);
var state_18511__$1 = state_18511;
var statearr_18598_20249 = state_18511__$1;
(statearr_18598_20249[(2)] = inst_18486);

(statearr_18598_20249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (11))){
var inst_18442 = (state_18511[(14)]);
var inst_18464 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18442);
var state_18511__$1 = state_18511;
var statearr_18603_20252 = state_18511__$1;
(statearr_18603_20252[(2)] = inst_18464);

(statearr_18603_20252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (9))){
var inst_18471 = (state_18511[(19)]);
var inst_18442 = (state_18511[(14)]);
var inst_18432 = (state_18511[(16)]);
var inst_18471__$1 = (inst_18432.cljs$core$IFn$_invoke$arity$1 ? inst_18432.cljs$core$IFn$_invoke$arity$1(inst_18442) : inst_18432.call(null,inst_18442));
var state_18511__$1 = (function (){var statearr_18604 = state_18511;
(statearr_18604[(19)] = inst_18471__$1);

return statearr_18604;
})();
if(cljs.core.truth_(inst_18471__$1)){
var statearr_18605_20255 = state_18511__$1;
(statearr_18605_20255[(1)] = (14));

} else {
var statearr_18606_20256 = state_18511__$1;
(statearr_18606_20256[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (5))){
var inst_18449 = (state_18511[(13)]);
var state_18511__$1 = state_18511;
var statearr_18610_20257 = state_18511__$1;
(statearr_18610_20257[(2)] = inst_18449);

(statearr_18610_20257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (14))){
var inst_18471 = (state_18511[(19)]);
var state_18511__$1 = state_18511;
var statearr_18612_20258 = state_18511__$1;
(statearr_18612_20258[(2)] = inst_18471);

(statearr_18612_20258[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (26))){
var inst_18497 = (state_18511[(2)]);
var state_18511__$1 = state_18511;
var statearr_18613_20259 = state_18511__$1;
(statearr_18613_20259[(2)] = inst_18497);

(statearr_18613_20259[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (16))){
var inst_18488 = (state_18511[(2)]);
var state_18511__$1 = state_18511;
if(cljs.core.truth_(inst_18488)){
var statearr_18617_20260 = state_18511__$1;
(statearr_18617_20260[(1)] = (20));

} else {
var statearr_18619_20264 = state_18511__$1;
(statearr_18619_20264[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (10))){
var inst_18503 = (state_18511[(2)]);
var state_18511__$1 = state_18511;
var statearr_18620_20265 = state_18511__$1;
(statearr_18620_20265[(2)] = inst_18503);

(statearr_18620_20265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (18))){
var inst_18476 = (state_18511[(15)]);
var state_18511__$1 = state_18511;
var statearr_18621_20270 = state_18511__$1;
(statearr_18621_20270[(2)] = inst_18476);

(statearr_18621_20270[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18512 === (8))){
var inst_18441 = (state_18511[(7)]);
var inst_18461 = (inst_18441 == null);
var state_18511__$1 = state_18511;
if(cljs.core.truth_(inst_18461)){
var statearr_18622_20276 = state_18511__$1;
(statearr_18622_20276[(1)] = (11));

} else {
var statearr_18626_20277 = state_18511__$1;
(statearr_18626_20277[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17061__auto__ = null;
var cljs$core$async$mix_$_state_machine__17061__auto____0 = (function (){
var statearr_18628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18628[(0)] = cljs$core$async$mix_$_state_machine__17061__auto__);

(statearr_18628[(1)] = (1));

return statearr_18628;
});
var cljs$core$async$mix_$_state_machine__17061__auto____1 = (function (state_18511){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_18511);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e18629){var ex__17064__auto__ = e18629;
var statearr_18630_20289 = state_18511;
(statearr_18630_20289[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_18511[(4)]))){
var statearr_18632_20290 = state_18511;
(statearr_18632_20290[(1)] = cljs.core.first((state_18511[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20291 = state_18511;
state_18511 = G__20291;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17061__auto__ = function(state_18511){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17061__auto____1.call(this,state_18511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17061__auto____0;
cljs$core$async$mix_$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17061__auto____1;
return cljs$core$async$mix_$_state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_18633 = f__17215__auto__();
(statearr_18633[(6)] = c__17214__auto___20210);

return statearr_18633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20301 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20301(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20306 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20306(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20307 = (function() {
var G__20308 = null;
var G__20308__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20308__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20308 = function(p,v){
switch(arguments.length){
case 1:
return G__20308__1.call(this,p);
case 2:
return G__20308__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20308.cljs$core$IFn$_invoke$arity$1 = G__20308__1;
G__20308.cljs$core$IFn$_invoke$arity$2 = G__20308__2;
return G__20308;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18662 = arguments.length;
switch (G__18662) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20307(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20307(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18666 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18667){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18667 = meta18667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18668,meta18667__$1){
var self__ = this;
var _18668__$1 = this;
return (new cljs.core.async.t_cljs$core$async18666(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18667__$1));
}));

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18668){
var self__ = this;
var _18668__$1 = this;
return self__.meta18667;
}));

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18667","meta18667",540659168,null)], null);
}));

(cljs.core.async.t_cljs$core$async18666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18666");

(cljs.core.async.t_cljs$core$async18666.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18666.
 */
cljs.core.async.__GT_t_cljs$core$async18666 = (function cljs$core$async$__GT_t_cljs$core$async18666(ch,topic_fn,buf_fn,mults,ensure_mult,meta18667){
return (new cljs.core.async.t_cljs$core$async18666(ch,topic_fn,buf_fn,mults,ensure_mult,meta18667));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18665 = arguments.length;
switch (G__18665) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18663_SHARP_){
if(cljs.core.truth_((p1__18663_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18663_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18663_SHARP_.call(null,topic)))){
return p1__18663_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18663_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18666(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17214__auto___20322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_18752){
var state_val_18753 = (state_18752[(1)]);
if((state_val_18753 === (7))){
var inst_18745 = (state_18752[(2)]);
var state_18752__$1 = state_18752;
var statearr_18757_20323 = state_18752__$1;
(statearr_18757_20323[(2)] = inst_18745);

(statearr_18757_20323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (20))){
var state_18752__$1 = state_18752;
var statearr_18760_20324 = state_18752__$1;
(statearr_18760_20324[(2)] = null);

(statearr_18760_20324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (1))){
var state_18752__$1 = state_18752;
var statearr_18761_20325 = state_18752__$1;
(statearr_18761_20325[(2)] = null);

(statearr_18761_20325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (24))){
var inst_18727 = (state_18752[(7)]);
var inst_18736 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18727);
var state_18752__$1 = state_18752;
var statearr_18762_20327 = state_18752__$1;
(statearr_18762_20327[(2)] = inst_18736);

(statearr_18762_20327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (4))){
var inst_18677 = (state_18752[(8)]);
var inst_18677__$1 = (state_18752[(2)]);
var inst_18678 = (inst_18677__$1 == null);
var state_18752__$1 = (function (){var statearr_18766 = state_18752;
(statearr_18766[(8)] = inst_18677__$1);

return statearr_18766;
})();
if(cljs.core.truth_(inst_18678)){
var statearr_18767_20332 = state_18752__$1;
(statearr_18767_20332[(1)] = (5));

} else {
var statearr_18768_20333 = state_18752__$1;
(statearr_18768_20333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (15))){
var inst_18721 = (state_18752[(2)]);
var state_18752__$1 = state_18752;
var statearr_18769_20339 = state_18752__$1;
(statearr_18769_20339[(2)] = inst_18721);

(statearr_18769_20339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (21))){
var inst_18742 = (state_18752[(2)]);
var state_18752__$1 = (function (){var statearr_18770 = state_18752;
(statearr_18770[(9)] = inst_18742);

return statearr_18770;
})();
var statearr_18771_20348 = state_18752__$1;
(statearr_18771_20348[(2)] = null);

(statearr_18771_20348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (13))){
var inst_18701 = (state_18752[(10)]);
var inst_18703 = cljs.core.chunked_seq_QMARK_(inst_18701);
var state_18752__$1 = state_18752;
if(inst_18703){
var statearr_18785_20355 = state_18752__$1;
(statearr_18785_20355[(1)] = (16));

} else {
var statearr_18792_20356 = state_18752__$1;
(statearr_18792_20356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (22))){
var inst_18733 = (state_18752[(2)]);
var state_18752__$1 = state_18752;
if(cljs.core.truth_(inst_18733)){
var statearr_18793_20361 = state_18752__$1;
(statearr_18793_20361[(1)] = (23));

} else {
var statearr_18794_20363 = state_18752__$1;
(statearr_18794_20363[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (6))){
var inst_18677 = (state_18752[(8)]);
var inst_18729 = (state_18752[(11)]);
var inst_18727 = (state_18752[(7)]);
var inst_18727__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18677) : topic_fn.call(null,inst_18677));
var inst_18728 = cljs.core.deref(mults);
var inst_18729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18728,inst_18727__$1);
var state_18752__$1 = (function (){var statearr_18802 = state_18752;
(statearr_18802[(11)] = inst_18729__$1);

(statearr_18802[(7)] = inst_18727__$1);

return statearr_18802;
})();
if(cljs.core.truth_(inst_18729__$1)){
var statearr_18806_20364 = state_18752__$1;
(statearr_18806_20364[(1)] = (19));

} else {
var statearr_18807_20365 = state_18752__$1;
(statearr_18807_20365[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (25))){
var inst_18738 = (state_18752[(2)]);
var state_18752__$1 = state_18752;
var statearr_18811_20366 = state_18752__$1;
(statearr_18811_20366[(2)] = inst_18738);

(statearr_18811_20366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (17))){
var inst_18701 = (state_18752[(10)]);
var inst_18712 = cljs.core.first(inst_18701);
var inst_18713 = cljs.core.async.muxch_STAR_(inst_18712);
var inst_18714 = cljs.core.async.close_BANG_(inst_18713);
var inst_18715 = cljs.core.next(inst_18701);
var inst_18687 = inst_18715;
var inst_18688 = null;
var inst_18689 = (0);
var inst_18690 = (0);
var state_18752__$1 = (function (){var statearr_18812 = state_18752;
(statearr_18812[(12)] = inst_18688);

(statearr_18812[(13)] = inst_18714);

(statearr_18812[(14)] = inst_18687);

(statearr_18812[(15)] = inst_18689);

(statearr_18812[(16)] = inst_18690);

return statearr_18812;
})();
var statearr_18813_20367 = state_18752__$1;
(statearr_18813_20367[(2)] = null);

(statearr_18813_20367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (3))){
var inst_18750 = (state_18752[(2)]);
var state_18752__$1 = state_18752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18752__$1,inst_18750);
} else {
if((state_val_18753 === (12))){
var inst_18723 = (state_18752[(2)]);
var state_18752__$1 = state_18752;
var statearr_18815_20372 = state_18752__$1;
(statearr_18815_20372[(2)] = inst_18723);

(statearr_18815_20372[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (2))){
var state_18752__$1 = state_18752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18752__$1,(4),ch);
} else {
if((state_val_18753 === (23))){
var state_18752__$1 = state_18752;
var statearr_18819_20383 = state_18752__$1;
(statearr_18819_20383[(2)] = null);

(statearr_18819_20383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (19))){
var inst_18677 = (state_18752[(8)]);
var inst_18729 = (state_18752[(11)]);
var inst_18731 = cljs.core.async.muxch_STAR_(inst_18729);
var state_18752__$1 = state_18752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18752__$1,(22),inst_18731,inst_18677);
} else {
if((state_val_18753 === (11))){
var inst_18701 = (state_18752[(10)]);
var inst_18687 = (state_18752[(14)]);
var inst_18701__$1 = cljs.core.seq(inst_18687);
var state_18752__$1 = (function (){var statearr_18820 = state_18752;
(statearr_18820[(10)] = inst_18701__$1);

return statearr_18820;
})();
if(inst_18701__$1){
var statearr_18821_20384 = state_18752__$1;
(statearr_18821_20384[(1)] = (13));

} else {
var statearr_18822_20389 = state_18752__$1;
(statearr_18822_20389[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (9))){
var inst_18725 = (state_18752[(2)]);
var state_18752__$1 = state_18752;
var statearr_18824_20391 = state_18752__$1;
(statearr_18824_20391[(2)] = inst_18725);

(statearr_18824_20391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (5))){
var inst_18684 = cljs.core.deref(mults);
var inst_18685 = cljs.core.vals(inst_18684);
var inst_18686 = cljs.core.seq(inst_18685);
var inst_18687 = inst_18686;
var inst_18688 = null;
var inst_18689 = (0);
var inst_18690 = (0);
var state_18752__$1 = (function (){var statearr_18830 = state_18752;
(statearr_18830[(12)] = inst_18688);

(statearr_18830[(14)] = inst_18687);

(statearr_18830[(15)] = inst_18689);

(statearr_18830[(16)] = inst_18690);

return statearr_18830;
})();
var statearr_18831_20405 = state_18752__$1;
(statearr_18831_20405[(2)] = null);

(statearr_18831_20405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (14))){
var state_18752__$1 = state_18752;
var statearr_18836_20406 = state_18752__$1;
(statearr_18836_20406[(2)] = null);

(statearr_18836_20406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (16))){
var inst_18701 = (state_18752[(10)]);
var inst_18706 = cljs.core.chunk_first(inst_18701);
var inst_18707 = cljs.core.chunk_rest(inst_18701);
var inst_18709 = cljs.core.count(inst_18706);
var inst_18687 = inst_18707;
var inst_18688 = inst_18706;
var inst_18689 = inst_18709;
var inst_18690 = (0);
var state_18752__$1 = (function (){var statearr_18838 = state_18752;
(statearr_18838[(12)] = inst_18688);

(statearr_18838[(14)] = inst_18687);

(statearr_18838[(15)] = inst_18689);

(statearr_18838[(16)] = inst_18690);

return statearr_18838;
})();
var statearr_18839_20417 = state_18752__$1;
(statearr_18839_20417[(2)] = null);

(statearr_18839_20417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (10))){
var inst_18688 = (state_18752[(12)]);
var inst_18687 = (state_18752[(14)]);
var inst_18689 = (state_18752[(15)]);
var inst_18690 = (state_18752[(16)]);
var inst_18695 = cljs.core._nth(inst_18688,inst_18690);
var inst_18696 = cljs.core.async.muxch_STAR_(inst_18695);
var inst_18697 = cljs.core.async.close_BANG_(inst_18696);
var inst_18698 = (inst_18690 + (1));
var tmp18833 = inst_18688;
var tmp18834 = inst_18687;
var tmp18835 = inst_18689;
var inst_18687__$1 = tmp18834;
var inst_18688__$1 = tmp18833;
var inst_18689__$1 = tmp18835;
var inst_18690__$1 = inst_18698;
var state_18752__$1 = (function (){var statearr_18840 = state_18752;
(statearr_18840[(12)] = inst_18688__$1);

(statearr_18840[(17)] = inst_18697);

(statearr_18840[(14)] = inst_18687__$1);

(statearr_18840[(15)] = inst_18689__$1);

(statearr_18840[(16)] = inst_18690__$1);

return statearr_18840;
})();
var statearr_18841_20419 = state_18752__$1;
(statearr_18841_20419[(2)] = null);

(statearr_18841_20419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (18))){
var inst_18718 = (state_18752[(2)]);
var state_18752__$1 = state_18752;
var statearr_18843_20421 = state_18752__$1;
(statearr_18843_20421[(2)] = inst_18718);

(statearr_18843_20421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18753 === (8))){
var inst_18689 = (state_18752[(15)]);
var inst_18690 = (state_18752[(16)]);
var inst_18692 = (inst_18690 < inst_18689);
var inst_18693 = inst_18692;
var state_18752__$1 = state_18752;
if(cljs.core.truth_(inst_18693)){
var statearr_18845_20426 = state_18752__$1;
(statearr_18845_20426[(1)] = (10));

} else {
var statearr_18846_20427 = state_18752__$1;
(statearr_18846_20427[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17061__auto__ = null;
var cljs$core$async$state_machine__17061__auto____0 = (function (){
var statearr_18849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18849[(0)] = cljs$core$async$state_machine__17061__auto__);

(statearr_18849[(1)] = (1));

return statearr_18849;
});
var cljs$core$async$state_machine__17061__auto____1 = (function (state_18752){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_18752);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e18853){var ex__17064__auto__ = e18853;
var statearr_18854_20435 = state_18752;
(statearr_18854_20435[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_18752[(4)]))){
var statearr_18855_20436 = state_18752;
(statearr_18855_20436[(1)] = cljs.core.first((state_18752[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20441 = state_18752;
state_18752 = G__20441;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$state_machine__17061__auto__ = function(state_18752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17061__auto____1.call(this,state_18752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17061__auto____0;
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17061__auto____1;
return cljs$core$async$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_18856 = f__17215__auto__();
(statearr_18856[(6)] = c__17214__auto___20322);

return statearr_18856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18858 = arguments.length;
switch (G__18858) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18867 = arguments.length;
switch (G__18867) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18874 = arguments.length;
switch (G__18874) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17214__auto___20452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_18925){
var state_val_18926 = (state_18925[(1)]);
if((state_val_18926 === (7))){
var state_18925__$1 = state_18925;
var statearr_18929_20453 = state_18925__$1;
(statearr_18929_20453[(2)] = null);

(statearr_18929_20453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (1))){
var state_18925__$1 = state_18925;
var statearr_18930_20454 = state_18925__$1;
(statearr_18930_20454[(2)] = null);

(statearr_18930_20454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (4))){
var inst_18882 = (state_18925[(7)]);
var inst_18881 = (state_18925[(8)]);
var inst_18885 = (inst_18882 < inst_18881);
var state_18925__$1 = state_18925;
if(cljs.core.truth_(inst_18885)){
var statearr_18934_20455 = state_18925__$1;
(statearr_18934_20455[(1)] = (6));

} else {
var statearr_18935_20456 = state_18925__$1;
(statearr_18935_20456[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (15))){
var inst_18911 = (state_18925[(9)]);
var inst_18916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18911);
var state_18925__$1 = state_18925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18925__$1,(17),out,inst_18916);
} else {
if((state_val_18926 === (13))){
var inst_18911 = (state_18925[(9)]);
var inst_18911__$1 = (state_18925[(2)]);
var inst_18912 = cljs.core.some(cljs.core.nil_QMARK_,inst_18911__$1);
var state_18925__$1 = (function (){var statearr_18936 = state_18925;
(statearr_18936[(9)] = inst_18911__$1);

return statearr_18936;
})();
if(cljs.core.truth_(inst_18912)){
var statearr_18937_20459 = state_18925__$1;
(statearr_18937_20459[(1)] = (14));

} else {
var statearr_18938_20460 = state_18925__$1;
(statearr_18938_20460[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (6))){
var state_18925__$1 = state_18925;
var statearr_18939_20461 = state_18925__$1;
(statearr_18939_20461[(2)] = null);

(statearr_18939_20461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (17))){
var inst_18918 = (state_18925[(2)]);
var state_18925__$1 = (function (){var statearr_18941 = state_18925;
(statearr_18941[(10)] = inst_18918);

return statearr_18941;
})();
var statearr_18942_20462 = state_18925__$1;
(statearr_18942_20462[(2)] = null);

(statearr_18942_20462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (3))){
var inst_18923 = (state_18925[(2)]);
var state_18925__$1 = state_18925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18925__$1,inst_18923);
} else {
if((state_val_18926 === (12))){
var _ = (function (){var statearr_18943 = state_18925;
(statearr_18943[(4)] = cljs.core.rest((state_18925[(4)])));

return statearr_18943;
})();
var state_18925__$1 = state_18925;
var ex18940 = (state_18925__$1[(2)]);
var statearr_18944_20466 = state_18925__$1;
(statearr_18944_20466[(5)] = ex18940);


if((ex18940 instanceof Object)){
var statearr_18945_20467 = state_18925__$1;
(statearr_18945_20467[(1)] = (11));

(statearr_18945_20467[(5)] = null);

} else {
throw ex18940;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (2))){
var inst_18880 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18881 = cnt;
var inst_18882 = (0);
var state_18925__$1 = (function (){var statearr_18946 = state_18925;
(statearr_18946[(7)] = inst_18882);

(statearr_18946[(11)] = inst_18880);

(statearr_18946[(8)] = inst_18881);

return statearr_18946;
})();
var statearr_18947_20468 = state_18925__$1;
(statearr_18947_20468[(2)] = null);

(statearr_18947_20468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (11))){
var inst_18890 = (state_18925[(2)]);
var inst_18891 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18925__$1 = (function (){var statearr_18949 = state_18925;
(statearr_18949[(12)] = inst_18890);

return statearr_18949;
})();
var statearr_18950_20469 = state_18925__$1;
(statearr_18950_20469[(2)] = inst_18891);

(statearr_18950_20469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (9))){
var inst_18882 = (state_18925[(7)]);
var _ = (function (){var statearr_18951 = state_18925;
(statearr_18951[(4)] = cljs.core.cons((12),(state_18925[(4)])));

return statearr_18951;
})();
var inst_18897 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18882) : chs__$1.call(null,inst_18882));
var inst_18898 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18882) : done.call(null,inst_18882));
var inst_18899 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18897,inst_18898);
var ___$1 = (function (){var statearr_18952 = state_18925;
(statearr_18952[(4)] = cljs.core.rest((state_18925[(4)])));

return statearr_18952;
})();
var state_18925__$1 = state_18925;
var statearr_18953_20471 = state_18925__$1;
(statearr_18953_20471[(2)] = inst_18899);

(statearr_18953_20471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (5))){
var inst_18909 = (state_18925[(2)]);
var state_18925__$1 = (function (){var statearr_18954 = state_18925;
(statearr_18954[(13)] = inst_18909);

return statearr_18954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18925__$1,(13),dchan);
} else {
if((state_val_18926 === (14))){
var inst_18914 = cljs.core.async.close_BANG_(out);
var state_18925__$1 = state_18925;
var statearr_18958_20472 = state_18925__$1;
(statearr_18958_20472[(2)] = inst_18914);

(statearr_18958_20472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (16))){
var inst_18921 = (state_18925[(2)]);
var state_18925__$1 = state_18925;
var statearr_18959_20477 = state_18925__$1;
(statearr_18959_20477[(2)] = inst_18921);

(statearr_18959_20477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (10))){
var inst_18882 = (state_18925[(7)]);
var inst_18902 = (state_18925[(2)]);
var inst_18903 = (inst_18882 + (1));
var inst_18882__$1 = inst_18903;
var state_18925__$1 = (function (){var statearr_18960 = state_18925;
(statearr_18960[(14)] = inst_18902);

(statearr_18960[(7)] = inst_18882__$1);

return statearr_18960;
})();
var statearr_18961_20478 = state_18925__$1;
(statearr_18961_20478[(2)] = null);

(statearr_18961_20478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (8))){
var inst_18907 = (state_18925[(2)]);
var state_18925__$1 = state_18925;
var statearr_18963_20479 = state_18925__$1;
(statearr_18963_20479[(2)] = inst_18907);

(statearr_18963_20479[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17061__auto__ = null;
var cljs$core$async$state_machine__17061__auto____0 = (function (){
var statearr_18967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18967[(0)] = cljs$core$async$state_machine__17061__auto__);

(statearr_18967[(1)] = (1));

return statearr_18967;
});
var cljs$core$async$state_machine__17061__auto____1 = (function (state_18925){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_18925);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e18968){var ex__17064__auto__ = e18968;
var statearr_18969_20480 = state_18925;
(statearr_18969_20480[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_18925[(4)]))){
var statearr_18970_20481 = state_18925;
(statearr_18970_20481[(1)] = cljs.core.first((state_18925[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20482 = state_18925;
state_18925 = G__20482;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$state_machine__17061__auto__ = function(state_18925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17061__auto____1.call(this,state_18925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17061__auto____0;
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17061__auto____1;
return cljs$core$async$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_18971 = f__17215__auto__();
(statearr_18971[(6)] = c__17214__auto___20452);

return statearr_18971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18974 = arguments.length;
switch (G__18974) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17214__auto___20485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_19046){
var state_val_19047 = (state_19046[(1)]);
if((state_val_19047 === (7))){
var inst_19005 = (state_19046[(7)]);
var inst_19006 = (state_19046[(8)]);
var inst_19005__$1 = (state_19046[(2)]);
var inst_19006__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19005__$1,(0),null);
var inst_19007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19005__$1,(1),null);
var inst_19008 = (inst_19006__$1 == null);
var state_19046__$1 = (function (){var statearr_19051 = state_19046;
(statearr_19051[(7)] = inst_19005__$1);

(statearr_19051[(9)] = inst_19007);

(statearr_19051[(8)] = inst_19006__$1);

return statearr_19051;
})();
if(cljs.core.truth_(inst_19008)){
var statearr_19052_20486 = state_19046__$1;
(statearr_19052_20486[(1)] = (8));

} else {
var statearr_19053_20487 = state_19046__$1;
(statearr_19053_20487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (1))){
var inst_18995 = cljs.core.vec(chs);
var inst_18996 = inst_18995;
var state_19046__$1 = (function (){var statearr_19054 = state_19046;
(statearr_19054[(10)] = inst_18996);

return statearr_19054;
})();
var statearr_19055_20488 = state_19046__$1;
(statearr_19055_20488[(2)] = null);

(statearr_19055_20488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (4))){
var inst_18996 = (state_19046[(10)]);
var state_19046__$1 = state_19046;
return cljs.core.async.ioc_alts_BANG_(state_19046__$1,(7),inst_18996);
} else {
if((state_val_19047 === (6))){
var inst_19036 = (state_19046[(2)]);
var state_19046__$1 = state_19046;
var statearr_19059_20489 = state_19046__$1;
(statearr_19059_20489[(2)] = inst_19036);

(statearr_19059_20489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (3))){
var inst_19038 = (state_19046[(2)]);
var state_19046__$1 = state_19046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19046__$1,inst_19038);
} else {
if((state_val_19047 === (2))){
var inst_18996 = (state_19046[(10)]);
var inst_18998 = cljs.core.count(inst_18996);
var inst_18999 = (inst_18998 > (0));
var state_19046__$1 = state_19046;
if(cljs.core.truth_(inst_18999)){
var statearr_19061_20490 = state_19046__$1;
(statearr_19061_20490[(1)] = (4));

} else {
var statearr_19062_20491 = state_19046__$1;
(statearr_19062_20491[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (11))){
var inst_18996 = (state_19046[(10)]);
var inst_19029 = (state_19046[(2)]);
var tmp19060 = inst_18996;
var inst_18996__$1 = tmp19060;
var state_19046__$1 = (function (){var statearr_19063 = state_19046;
(statearr_19063[(11)] = inst_19029);

(statearr_19063[(10)] = inst_18996__$1);

return statearr_19063;
})();
var statearr_19064_20494 = state_19046__$1;
(statearr_19064_20494[(2)] = null);

(statearr_19064_20494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (9))){
var inst_19006 = (state_19046[(8)]);
var state_19046__$1 = state_19046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19046__$1,(11),out,inst_19006);
} else {
if((state_val_19047 === (5))){
var inst_19034 = cljs.core.async.close_BANG_(out);
var state_19046__$1 = state_19046;
var statearr_19065_20496 = state_19046__$1;
(statearr_19065_20496[(2)] = inst_19034);

(statearr_19065_20496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (10))){
var inst_19032 = (state_19046[(2)]);
var state_19046__$1 = state_19046;
var statearr_19066_20497 = state_19046__$1;
(statearr_19066_20497[(2)] = inst_19032);

(statearr_19066_20497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (8))){
var inst_19005 = (state_19046[(7)]);
var inst_18996 = (state_19046[(10)]);
var inst_19007 = (state_19046[(9)]);
var inst_19006 = (state_19046[(8)]);
var inst_19024 = (function (){var cs = inst_18996;
var vec__19001 = inst_19005;
var v = inst_19006;
var c = inst_19007;
return (function (p1__18972_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18972_SHARP_);
});
})();
var inst_19025 = cljs.core.filterv(inst_19024,inst_18996);
var inst_18996__$1 = inst_19025;
var state_19046__$1 = (function (){var statearr_19067 = state_19046;
(statearr_19067[(10)] = inst_18996__$1);

return statearr_19067;
})();
var statearr_19068_20501 = state_19046__$1;
(statearr_19068_20501[(2)] = null);

(statearr_19068_20501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17061__auto__ = null;
var cljs$core$async$state_machine__17061__auto____0 = (function (){
var statearr_19069 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19069[(0)] = cljs$core$async$state_machine__17061__auto__);

(statearr_19069[(1)] = (1));

return statearr_19069;
});
var cljs$core$async$state_machine__17061__auto____1 = (function (state_19046){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_19046);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e19070){var ex__17064__auto__ = e19070;
var statearr_19071_20503 = state_19046;
(statearr_19071_20503[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_19046[(4)]))){
var statearr_19072_20505 = state_19046;
(statearr_19072_20505[(1)] = cljs.core.first((state_19046[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20507 = state_19046;
state_19046 = G__20507;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$state_machine__17061__auto__ = function(state_19046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17061__auto____1.call(this,state_19046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17061__auto____0;
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17061__auto____1;
return cljs$core$async$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_19073 = f__17215__auto__();
(statearr_19073[(6)] = c__17214__auto___20485);

return statearr_19073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19086 = arguments.length;
switch (G__19086) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17214__auto___20513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_19110){
var state_val_19111 = (state_19110[(1)]);
if((state_val_19111 === (7))){
var inst_19092 = (state_19110[(7)]);
var inst_19092__$1 = (state_19110[(2)]);
var inst_19093 = (inst_19092__$1 == null);
var inst_19094 = cljs.core.not(inst_19093);
var state_19110__$1 = (function (){var statearr_19112 = state_19110;
(statearr_19112[(7)] = inst_19092__$1);

return statearr_19112;
})();
if(inst_19094){
var statearr_19113_20515 = state_19110__$1;
(statearr_19113_20515[(1)] = (8));

} else {
var statearr_19114_20516 = state_19110__$1;
(statearr_19114_20516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19111 === (1))){
var inst_19087 = (0);
var state_19110__$1 = (function (){var statearr_19115 = state_19110;
(statearr_19115[(8)] = inst_19087);

return statearr_19115;
})();
var statearr_19117_20517 = state_19110__$1;
(statearr_19117_20517[(2)] = null);

(statearr_19117_20517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19111 === (4))){
var state_19110__$1 = state_19110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19110__$1,(7),ch);
} else {
if((state_val_19111 === (6))){
var inst_19105 = (state_19110[(2)]);
var state_19110__$1 = state_19110;
var statearr_19121_20518 = state_19110__$1;
(statearr_19121_20518[(2)] = inst_19105);

(statearr_19121_20518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19111 === (3))){
var inst_19107 = (state_19110[(2)]);
var inst_19108 = cljs.core.async.close_BANG_(out);
var state_19110__$1 = (function (){var statearr_19123 = state_19110;
(statearr_19123[(9)] = inst_19107);

return statearr_19123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19110__$1,inst_19108);
} else {
if((state_val_19111 === (2))){
var inst_19087 = (state_19110[(8)]);
var inst_19089 = (inst_19087 < n);
var state_19110__$1 = state_19110;
if(cljs.core.truth_(inst_19089)){
var statearr_19125_20519 = state_19110__$1;
(statearr_19125_20519[(1)] = (4));

} else {
var statearr_19126_20520 = state_19110__$1;
(statearr_19126_20520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19111 === (11))){
var inst_19087 = (state_19110[(8)]);
var inst_19097 = (state_19110[(2)]);
var inst_19098 = (inst_19087 + (1));
var inst_19087__$1 = inst_19098;
var state_19110__$1 = (function (){var statearr_19129 = state_19110;
(statearr_19129[(10)] = inst_19097);

(statearr_19129[(8)] = inst_19087__$1);

return statearr_19129;
})();
var statearr_19130_20521 = state_19110__$1;
(statearr_19130_20521[(2)] = null);

(statearr_19130_20521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19111 === (9))){
var state_19110__$1 = state_19110;
var statearr_19131_20522 = state_19110__$1;
(statearr_19131_20522[(2)] = null);

(statearr_19131_20522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19111 === (5))){
var state_19110__$1 = state_19110;
var statearr_19132_20527 = state_19110__$1;
(statearr_19132_20527[(2)] = null);

(statearr_19132_20527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19111 === (10))){
var inst_19102 = (state_19110[(2)]);
var state_19110__$1 = state_19110;
var statearr_19133_20528 = state_19110__$1;
(statearr_19133_20528[(2)] = inst_19102);

(statearr_19133_20528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19111 === (8))){
var inst_19092 = (state_19110[(7)]);
var state_19110__$1 = state_19110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19110__$1,(11),out,inst_19092);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17061__auto__ = null;
var cljs$core$async$state_machine__17061__auto____0 = (function (){
var statearr_19134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19134[(0)] = cljs$core$async$state_machine__17061__auto__);

(statearr_19134[(1)] = (1));

return statearr_19134;
});
var cljs$core$async$state_machine__17061__auto____1 = (function (state_19110){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_19110);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e19135){var ex__17064__auto__ = e19135;
var statearr_19136_20530 = state_19110;
(statearr_19136_20530[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_19110[(4)]))){
var statearr_19137_20531 = state_19110;
(statearr_19137_20531[(1)] = cljs.core.first((state_19110[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20533 = state_19110;
state_19110 = G__20533;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$state_machine__17061__auto__ = function(state_19110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17061__auto____1.call(this,state_19110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17061__auto____0;
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17061__auto____1;
return cljs$core$async$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_19138 = f__17215__auto__();
(statearr_19138[(6)] = c__17214__auto___20513);

return statearr_19138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19166 = (function (f,ch,meta19144,_,fn1,meta19167){
this.f = f;
this.ch = ch;
this.meta19144 = meta19144;
this._ = _;
this.fn1 = fn1;
this.meta19167 = meta19167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19168,meta19167__$1){
var self__ = this;
var _19168__$1 = this;
return (new cljs.core.async.t_cljs$core$async19166(self__.f,self__.ch,self__.meta19144,self__._,self__.fn1,meta19167__$1));
}));

(cljs.core.async.t_cljs$core$async19166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19168){
var self__ = this;
var _19168__$1 = this;
return self__.meta19167;
}));

(cljs.core.async.t_cljs$core$async19166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19142_SHARP_){
var G__19189 = (((p1__19142_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19142_SHARP_) : self__.f.call(null,p1__19142_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19189) : f1.call(null,G__19189));
});
}));

(cljs.core.async.t_cljs$core$async19166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19144","meta19144",-534325741,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19143","cljs.core.async/t_cljs$core$async19143",-833619688,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19167","meta19167",360777628,null)], null);
}));

(cljs.core.async.t_cljs$core$async19166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19166");

(cljs.core.async.t_cljs$core$async19166.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19166.
 */
cljs.core.async.__GT_t_cljs$core$async19166 = (function cljs$core$async$__GT_t_cljs$core$async19166(f,ch,meta19144,_,fn1,meta19167){
return (new cljs.core.async.t_cljs$core$async19166(f,ch,meta19144,_,fn1,meta19167));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19143 = (function (f,ch,meta19144){
this.f = f;
this.ch = ch;
this.meta19144 = meta19144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19145,meta19144__$1){
var self__ = this;
var _19145__$1 = this;
return (new cljs.core.async.t_cljs$core$async19143(self__.f,self__.ch,meta19144__$1));
}));

(cljs.core.async.t_cljs$core$async19143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19145){
var self__ = this;
var _19145__$1 = this;
return self__.meta19144;
}));

(cljs.core.async.t_cljs$core$async19143.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19143.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19143.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19166(self__.f,self__.ch,self__.meta19144,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19192 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19192) : self__.f.call(null,G__19192));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19143.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19144","meta19144",-534325741,null)], null);
}));

(cljs.core.async.t_cljs$core$async19143.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19143");

(cljs.core.async.t_cljs$core$async19143.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19143");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19143.
 */
cljs.core.async.__GT_t_cljs$core$async19143 = (function cljs$core$async$__GT_t_cljs$core$async19143(f,ch,meta19144){
return (new cljs.core.async.t_cljs$core$async19143(f,ch,meta19144));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19143(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19193 = (function (f,ch,meta19194){
this.f = f;
this.ch = ch;
this.meta19194 = meta19194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19195,meta19194__$1){
var self__ = this;
var _19195__$1 = this;
return (new cljs.core.async.t_cljs$core$async19193(self__.f,self__.ch,meta19194__$1));
}));

(cljs.core.async.t_cljs$core$async19193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19195){
var self__ = this;
var _19195__$1 = this;
return self__.meta19194;
}));

(cljs.core.async.t_cljs$core$async19193.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19193.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19193.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19194","meta19194",1348110383,null)], null);
}));

(cljs.core.async.t_cljs$core$async19193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19193");

(cljs.core.async.t_cljs$core$async19193.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19193.
 */
cljs.core.async.__GT_t_cljs$core$async19193 = (function cljs$core$async$__GT_t_cljs$core$async19193(f,ch,meta19194){
return (new cljs.core.async.t_cljs$core$async19193(f,ch,meta19194));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19193(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19211 = (function (p,ch,meta19212){
this.p = p;
this.ch = ch;
this.meta19212 = meta19212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19213,meta19212__$1){
var self__ = this;
var _19213__$1 = this;
return (new cljs.core.async.t_cljs$core$async19211(self__.p,self__.ch,meta19212__$1));
}));

(cljs.core.async.t_cljs$core$async19211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19213){
var self__ = this;
var _19213__$1 = this;
return self__.meta19212;
}));

(cljs.core.async.t_cljs$core$async19211.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19211.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19211.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19211.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19212","meta19212",423521292,null)], null);
}));

(cljs.core.async.t_cljs$core$async19211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19211");

(cljs.core.async.t_cljs$core$async19211.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19211.
 */
cljs.core.async.__GT_t_cljs$core$async19211 = (function cljs$core$async$__GT_t_cljs$core$async19211(p,ch,meta19212){
return (new cljs.core.async.t_cljs$core$async19211(p,ch,meta19212));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19211(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19228 = arguments.length;
switch (G__19228) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17214__auto___20544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_19249){
var state_val_19250 = (state_19249[(1)]);
if((state_val_19250 === (7))){
var inst_19245 = (state_19249[(2)]);
var state_19249__$1 = state_19249;
var statearr_19253_20546 = state_19249__$1;
(statearr_19253_20546[(2)] = inst_19245);

(statearr_19253_20546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (1))){
var state_19249__$1 = state_19249;
var statearr_19254_20547 = state_19249__$1;
(statearr_19254_20547[(2)] = null);

(statearr_19254_20547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (4))){
var inst_19231 = (state_19249[(7)]);
var inst_19231__$1 = (state_19249[(2)]);
var inst_19232 = (inst_19231__$1 == null);
var state_19249__$1 = (function (){var statearr_19256 = state_19249;
(statearr_19256[(7)] = inst_19231__$1);

return statearr_19256;
})();
if(cljs.core.truth_(inst_19232)){
var statearr_19258_20548 = state_19249__$1;
(statearr_19258_20548[(1)] = (5));

} else {
var statearr_19259_20549 = state_19249__$1;
(statearr_19259_20549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (6))){
var inst_19231 = (state_19249[(7)]);
var inst_19236 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19231) : p.call(null,inst_19231));
var state_19249__$1 = state_19249;
if(cljs.core.truth_(inst_19236)){
var statearr_19260_20550 = state_19249__$1;
(statearr_19260_20550[(1)] = (8));

} else {
var statearr_19261_20551 = state_19249__$1;
(statearr_19261_20551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (3))){
var inst_19247 = (state_19249[(2)]);
var state_19249__$1 = state_19249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19249__$1,inst_19247);
} else {
if((state_val_19250 === (2))){
var state_19249__$1 = state_19249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19249__$1,(4),ch);
} else {
if((state_val_19250 === (11))){
var inst_19239 = (state_19249[(2)]);
var state_19249__$1 = state_19249;
var statearr_19262_20556 = state_19249__$1;
(statearr_19262_20556[(2)] = inst_19239);

(statearr_19262_20556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (9))){
var state_19249__$1 = state_19249;
var statearr_19263_20559 = state_19249__$1;
(statearr_19263_20559[(2)] = null);

(statearr_19263_20559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (5))){
var inst_19234 = cljs.core.async.close_BANG_(out);
var state_19249__$1 = state_19249;
var statearr_19271_20560 = state_19249__$1;
(statearr_19271_20560[(2)] = inst_19234);

(statearr_19271_20560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (10))){
var inst_19242 = (state_19249[(2)]);
var state_19249__$1 = (function (){var statearr_19273 = state_19249;
(statearr_19273[(8)] = inst_19242);

return statearr_19273;
})();
var statearr_19274_20561 = state_19249__$1;
(statearr_19274_20561[(2)] = null);

(statearr_19274_20561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (8))){
var inst_19231 = (state_19249[(7)]);
var state_19249__$1 = state_19249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19249__$1,(11),out,inst_19231);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17061__auto__ = null;
var cljs$core$async$state_machine__17061__auto____0 = (function (){
var statearr_19284 = [null,null,null,null,null,null,null,null,null];
(statearr_19284[(0)] = cljs$core$async$state_machine__17061__auto__);

(statearr_19284[(1)] = (1));

return statearr_19284;
});
var cljs$core$async$state_machine__17061__auto____1 = (function (state_19249){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_19249);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e19289){var ex__17064__auto__ = e19289;
var statearr_19290_20562 = state_19249;
(statearr_19290_20562[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_19249[(4)]))){
var statearr_19292_20563 = state_19249;
(statearr_19292_20563[(1)] = cljs.core.first((state_19249[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20565 = state_19249;
state_19249 = G__20565;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$state_machine__17061__auto__ = function(state_19249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17061__auto____1.call(this,state_19249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17061__auto____0;
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17061__auto____1;
return cljs$core$async$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_19300 = f__17215__auto__();
(statearr_19300[(6)] = c__17214__auto___20544);

return statearr_19300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19307 = arguments.length;
switch (G__19307) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_19387){
var state_val_19388 = (state_19387[(1)]);
if((state_val_19388 === (7))){
var inst_19381 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
var statearr_19391_20569 = state_19387__$1;
(statearr_19391_20569[(2)] = inst_19381);

(statearr_19391_20569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (20))){
var inst_19350 = (state_19387[(7)]);
var inst_19362 = (state_19387[(2)]);
var inst_19363 = cljs.core.next(inst_19350);
var inst_19329 = inst_19363;
var inst_19330 = null;
var inst_19331 = (0);
var inst_19332 = (0);
var state_19387__$1 = (function (){var statearr_19394 = state_19387;
(statearr_19394[(8)] = inst_19331);

(statearr_19394[(9)] = inst_19329);

(statearr_19394[(10)] = inst_19330);

(statearr_19394[(11)] = inst_19362);

(statearr_19394[(12)] = inst_19332);

return statearr_19394;
})();
var statearr_19395_20570 = state_19387__$1;
(statearr_19395_20570[(2)] = null);

(statearr_19395_20570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (1))){
var state_19387__$1 = state_19387;
var statearr_19396_20571 = state_19387__$1;
(statearr_19396_20571[(2)] = null);

(statearr_19396_20571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (4))){
var inst_19317 = (state_19387[(13)]);
var inst_19317__$1 = (state_19387[(2)]);
var inst_19318 = (inst_19317__$1 == null);
var state_19387__$1 = (function (){var statearr_19397 = state_19387;
(statearr_19397[(13)] = inst_19317__$1);

return statearr_19397;
})();
if(cljs.core.truth_(inst_19318)){
var statearr_19398_20572 = state_19387__$1;
(statearr_19398_20572[(1)] = (5));

} else {
var statearr_19399_20573 = state_19387__$1;
(statearr_19399_20573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (15))){
var state_19387__$1 = state_19387;
var statearr_19403_20574 = state_19387__$1;
(statearr_19403_20574[(2)] = null);

(statearr_19403_20574[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (21))){
var state_19387__$1 = state_19387;
var statearr_19408_20575 = state_19387__$1;
(statearr_19408_20575[(2)] = null);

(statearr_19408_20575[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (13))){
var inst_19331 = (state_19387[(8)]);
var inst_19329 = (state_19387[(9)]);
var inst_19330 = (state_19387[(10)]);
var inst_19332 = (state_19387[(12)]);
var inst_19339 = (state_19387[(2)]);
var inst_19347 = (inst_19332 + (1));
var tmp19400 = inst_19331;
var tmp19401 = inst_19329;
var tmp19402 = inst_19330;
var inst_19329__$1 = tmp19401;
var inst_19330__$1 = tmp19402;
var inst_19331__$1 = tmp19400;
var inst_19332__$1 = inst_19347;
var state_19387__$1 = (function (){var statearr_19410 = state_19387;
(statearr_19410[(8)] = inst_19331__$1);

(statearr_19410[(9)] = inst_19329__$1);

(statearr_19410[(10)] = inst_19330__$1);

(statearr_19410[(14)] = inst_19339);

(statearr_19410[(12)] = inst_19332__$1);

return statearr_19410;
})();
var statearr_19411_20576 = state_19387__$1;
(statearr_19411_20576[(2)] = null);

(statearr_19411_20576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (22))){
var state_19387__$1 = state_19387;
var statearr_19418_20581 = state_19387__$1;
(statearr_19418_20581[(2)] = null);

(statearr_19418_20581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (6))){
var inst_19317 = (state_19387[(13)]);
var inst_19326 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19317) : f.call(null,inst_19317));
var inst_19327 = cljs.core.seq(inst_19326);
var inst_19329 = inst_19327;
var inst_19330 = null;
var inst_19331 = (0);
var inst_19332 = (0);
var state_19387__$1 = (function (){var statearr_19422 = state_19387;
(statearr_19422[(8)] = inst_19331);

(statearr_19422[(9)] = inst_19329);

(statearr_19422[(10)] = inst_19330);

(statearr_19422[(12)] = inst_19332);

return statearr_19422;
})();
var statearr_19427_20585 = state_19387__$1;
(statearr_19427_20585[(2)] = null);

(statearr_19427_20585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (17))){
var inst_19350 = (state_19387[(7)]);
var inst_19355 = cljs.core.chunk_first(inst_19350);
var inst_19356 = cljs.core.chunk_rest(inst_19350);
var inst_19357 = cljs.core.count(inst_19355);
var inst_19329 = inst_19356;
var inst_19330 = inst_19355;
var inst_19331 = inst_19357;
var inst_19332 = (0);
var state_19387__$1 = (function (){var statearr_19428 = state_19387;
(statearr_19428[(8)] = inst_19331);

(statearr_19428[(9)] = inst_19329);

(statearr_19428[(10)] = inst_19330);

(statearr_19428[(12)] = inst_19332);

return statearr_19428;
})();
var statearr_19435_20588 = state_19387__$1;
(statearr_19435_20588[(2)] = null);

(statearr_19435_20588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (3))){
var inst_19383 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19387__$1,inst_19383);
} else {
if((state_val_19388 === (12))){
var inst_19371 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
var statearr_19442_20592 = state_19387__$1;
(statearr_19442_20592[(2)] = inst_19371);

(statearr_19442_20592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (2))){
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19387__$1,(4),in$);
} else {
if((state_val_19388 === (23))){
var inst_19379 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
var statearr_19444_20593 = state_19387__$1;
(statearr_19444_20593[(2)] = inst_19379);

(statearr_19444_20593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (19))){
var inst_19366 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
var statearr_19445_20594 = state_19387__$1;
(statearr_19445_20594[(2)] = inst_19366);

(statearr_19445_20594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (11))){
var inst_19329 = (state_19387[(9)]);
var inst_19350 = (state_19387[(7)]);
var inst_19350__$1 = cljs.core.seq(inst_19329);
var state_19387__$1 = (function (){var statearr_19447 = state_19387;
(statearr_19447[(7)] = inst_19350__$1);

return statearr_19447;
})();
if(inst_19350__$1){
var statearr_19448_20598 = state_19387__$1;
(statearr_19448_20598[(1)] = (14));

} else {
var statearr_19449_20599 = state_19387__$1;
(statearr_19449_20599[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (9))){
var inst_19373 = (state_19387[(2)]);
var inst_19374 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19387__$1 = (function (){var statearr_19450 = state_19387;
(statearr_19450[(15)] = inst_19373);

return statearr_19450;
})();
if(cljs.core.truth_(inst_19374)){
var statearr_19456_20602 = state_19387__$1;
(statearr_19456_20602[(1)] = (21));

} else {
var statearr_19457_20603 = state_19387__$1;
(statearr_19457_20603[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (5))){
var inst_19320 = cljs.core.async.close_BANG_(out);
var state_19387__$1 = state_19387;
var statearr_19463_20606 = state_19387__$1;
(statearr_19463_20606[(2)] = inst_19320);

(statearr_19463_20606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (14))){
var inst_19350 = (state_19387[(7)]);
var inst_19352 = cljs.core.chunked_seq_QMARK_(inst_19350);
var state_19387__$1 = state_19387;
if(inst_19352){
var statearr_19464_20610 = state_19387__$1;
(statearr_19464_20610[(1)] = (17));

} else {
var statearr_19465_20611 = state_19387__$1;
(statearr_19465_20611[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (16))){
var inst_19369 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
var statearr_19467_20612 = state_19387__$1;
(statearr_19467_20612[(2)] = inst_19369);

(statearr_19467_20612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19388 === (10))){
var inst_19330 = (state_19387[(10)]);
var inst_19332 = (state_19387[(12)]);
var inst_19337 = cljs.core._nth(inst_19330,inst_19332);
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19387__$1,(13),out,inst_19337);
} else {
if((state_val_19388 === (18))){
var inst_19350 = (state_19387[(7)]);
var inst_19360 = cljs.core.first(inst_19350);
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19387__$1,(20),out,inst_19360);
} else {
if((state_val_19388 === (8))){
var inst_19331 = (state_19387[(8)]);
var inst_19332 = (state_19387[(12)]);
var inst_19334 = (inst_19332 < inst_19331);
var inst_19335 = inst_19334;
var state_19387__$1 = state_19387;
if(cljs.core.truth_(inst_19335)){
var statearr_19474_20617 = state_19387__$1;
(statearr_19474_20617[(1)] = (10));

} else {
var statearr_19475_20618 = state_19387__$1;
(statearr_19475_20618[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17061__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17061__auto____0 = (function (){
var statearr_19476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19476[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17061__auto__);

(statearr_19476[(1)] = (1));

return statearr_19476;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17061__auto____1 = (function (state_19387){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_19387);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e19477){var ex__17064__auto__ = e19477;
var statearr_19478_20619 = state_19387;
(statearr_19478_20619[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_19387[(4)]))){
var statearr_19480_20620 = state_19387;
(statearr_19480_20620[(1)] = cljs.core.first((state_19387[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20621 = state_19387;
state_19387 = G__20621;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17061__auto__ = function(state_19387){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17061__auto____1.call(this,state_19387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17061__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17061__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_19484 = f__17215__auto__();
(statearr_19484[(6)] = c__17214__auto__);

return statearr_19484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));

return c__17214__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19496 = arguments.length;
switch (G__19496) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19501 = arguments.length;
switch (G__19501) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19503 = arguments.length;
switch (G__19503) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17214__auto___20631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_19527){
var state_val_19528 = (state_19527[(1)]);
if((state_val_19528 === (7))){
var inst_19522 = (state_19527[(2)]);
var state_19527__$1 = state_19527;
var statearr_19529_20633 = state_19527__$1;
(statearr_19529_20633[(2)] = inst_19522);

(statearr_19529_20633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (1))){
var inst_19504 = null;
var state_19527__$1 = (function (){var statearr_19530 = state_19527;
(statearr_19530[(7)] = inst_19504);

return statearr_19530;
})();
var statearr_19531_20635 = state_19527__$1;
(statearr_19531_20635[(2)] = null);

(statearr_19531_20635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (4))){
var inst_19507 = (state_19527[(8)]);
var inst_19507__$1 = (state_19527[(2)]);
var inst_19508 = (inst_19507__$1 == null);
var inst_19509 = cljs.core.not(inst_19508);
var state_19527__$1 = (function (){var statearr_19532 = state_19527;
(statearr_19532[(8)] = inst_19507__$1);

return statearr_19532;
})();
if(inst_19509){
var statearr_19533_20636 = state_19527__$1;
(statearr_19533_20636[(1)] = (5));

} else {
var statearr_19534_20637 = state_19527__$1;
(statearr_19534_20637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (6))){
var state_19527__$1 = state_19527;
var statearr_19535_20638 = state_19527__$1;
(statearr_19535_20638[(2)] = null);

(statearr_19535_20638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (3))){
var inst_19524 = (state_19527[(2)]);
var inst_19525 = cljs.core.async.close_BANG_(out);
var state_19527__$1 = (function (){var statearr_19536 = state_19527;
(statearr_19536[(9)] = inst_19524);

return statearr_19536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19527__$1,inst_19525);
} else {
if((state_val_19528 === (2))){
var state_19527__$1 = state_19527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19527__$1,(4),ch);
} else {
if((state_val_19528 === (11))){
var inst_19507 = (state_19527[(8)]);
var inst_19516 = (state_19527[(2)]);
var inst_19504 = inst_19507;
var state_19527__$1 = (function (){var statearr_19537 = state_19527;
(statearr_19537[(7)] = inst_19504);

(statearr_19537[(10)] = inst_19516);

return statearr_19537;
})();
var statearr_19538_20643 = state_19527__$1;
(statearr_19538_20643[(2)] = null);

(statearr_19538_20643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (9))){
var inst_19507 = (state_19527[(8)]);
var state_19527__$1 = state_19527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19527__$1,(11),out,inst_19507);
} else {
if((state_val_19528 === (5))){
var inst_19504 = (state_19527[(7)]);
var inst_19507 = (state_19527[(8)]);
var inst_19511 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19507,inst_19504);
var state_19527__$1 = state_19527;
if(inst_19511){
var statearr_19540_20646 = state_19527__$1;
(statearr_19540_20646[(1)] = (8));

} else {
var statearr_19541_20647 = state_19527__$1;
(statearr_19541_20647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (10))){
var inst_19519 = (state_19527[(2)]);
var state_19527__$1 = state_19527;
var statearr_19543_20648 = state_19527__$1;
(statearr_19543_20648[(2)] = inst_19519);

(statearr_19543_20648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (8))){
var inst_19504 = (state_19527[(7)]);
var tmp19539 = inst_19504;
var inst_19504__$1 = tmp19539;
var state_19527__$1 = (function (){var statearr_19544 = state_19527;
(statearr_19544[(7)] = inst_19504__$1);

return statearr_19544;
})();
var statearr_19545_20649 = state_19527__$1;
(statearr_19545_20649[(2)] = null);

(statearr_19545_20649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17061__auto__ = null;
var cljs$core$async$state_machine__17061__auto____0 = (function (){
var statearr_19546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19546[(0)] = cljs$core$async$state_machine__17061__auto__);

(statearr_19546[(1)] = (1));

return statearr_19546;
});
var cljs$core$async$state_machine__17061__auto____1 = (function (state_19527){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_19527);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e19547){var ex__17064__auto__ = e19547;
var statearr_19548_20654 = state_19527;
(statearr_19548_20654[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_19527[(4)]))){
var statearr_19552_20655 = state_19527;
(statearr_19552_20655[(1)] = cljs.core.first((state_19527[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20656 = state_19527;
state_19527 = G__20656;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$state_machine__17061__auto__ = function(state_19527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17061__auto____1.call(this,state_19527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17061__auto____0;
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17061__auto____1;
return cljs$core$async$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_19553 = f__17215__auto__();
(statearr_19553[(6)] = c__17214__auto___20631);

return statearr_19553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19558 = arguments.length;
switch (G__19558) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17214__auto___20661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_19596){
var state_val_19597 = (state_19596[(1)]);
if((state_val_19597 === (7))){
var inst_19592 = (state_19596[(2)]);
var state_19596__$1 = state_19596;
var statearr_19598_20662 = state_19596__$1;
(statearr_19598_20662[(2)] = inst_19592);

(statearr_19598_20662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (1))){
var inst_19559 = (new Array(n));
var inst_19560 = inst_19559;
var inst_19561 = (0);
var state_19596__$1 = (function (){var statearr_19599 = state_19596;
(statearr_19599[(7)] = inst_19561);

(statearr_19599[(8)] = inst_19560);

return statearr_19599;
})();
var statearr_19600_20666 = state_19596__$1;
(statearr_19600_20666[(2)] = null);

(statearr_19600_20666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (4))){
var inst_19564 = (state_19596[(9)]);
var inst_19564__$1 = (state_19596[(2)]);
var inst_19565 = (inst_19564__$1 == null);
var inst_19566 = cljs.core.not(inst_19565);
var state_19596__$1 = (function (){var statearr_19602 = state_19596;
(statearr_19602[(9)] = inst_19564__$1);

return statearr_19602;
})();
if(inst_19566){
var statearr_19603_20668 = state_19596__$1;
(statearr_19603_20668[(1)] = (5));

} else {
var statearr_19604_20669 = state_19596__$1;
(statearr_19604_20669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (15))){
var inst_19586 = (state_19596[(2)]);
var state_19596__$1 = state_19596;
var statearr_19605_20670 = state_19596__$1;
(statearr_19605_20670[(2)] = inst_19586);

(statearr_19605_20670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (13))){
var state_19596__$1 = state_19596;
var statearr_19606_20671 = state_19596__$1;
(statearr_19606_20671[(2)] = null);

(statearr_19606_20671[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (6))){
var inst_19561 = (state_19596[(7)]);
var inst_19582 = (inst_19561 > (0));
var state_19596__$1 = state_19596;
if(cljs.core.truth_(inst_19582)){
var statearr_19607_20672 = state_19596__$1;
(statearr_19607_20672[(1)] = (12));

} else {
var statearr_19608_20673 = state_19596__$1;
(statearr_19608_20673[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (3))){
var inst_19594 = (state_19596[(2)]);
var state_19596__$1 = state_19596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19596__$1,inst_19594);
} else {
if((state_val_19597 === (12))){
var inst_19560 = (state_19596[(8)]);
var inst_19584 = cljs.core.vec(inst_19560);
var state_19596__$1 = state_19596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19596__$1,(15),out,inst_19584);
} else {
if((state_val_19597 === (2))){
var state_19596__$1 = state_19596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19596__$1,(4),ch);
} else {
if((state_val_19597 === (11))){
var inst_19576 = (state_19596[(2)]);
var inst_19577 = (new Array(n));
var inst_19560 = inst_19577;
var inst_19561 = (0);
var state_19596__$1 = (function (){var statearr_19613 = state_19596;
(statearr_19613[(7)] = inst_19561);

(statearr_19613[(8)] = inst_19560);

(statearr_19613[(10)] = inst_19576);

return statearr_19613;
})();
var statearr_19614_20680 = state_19596__$1;
(statearr_19614_20680[(2)] = null);

(statearr_19614_20680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (9))){
var inst_19560 = (state_19596[(8)]);
var inst_19574 = cljs.core.vec(inst_19560);
var state_19596__$1 = state_19596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19596__$1,(11),out,inst_19574);
} else {
if((state_val_19597 === (5))){
var inst_19564 = (state_19596[(9)]);
var inst_19561 = (state_19596[(7)]);
var inst_19560 = (state_19596[(8)]);
var inst_19569 = (state_19596[(11)]);
var inst_19568 = (inst_19560[inst_19561] = inst_19564);
var inst_19569__$1 = (inst_19561 + (1));
var inst_19570 = (inst_19569__$1 < n);
var state_19596__$1 = (function (){var statearr_19619 = state_19596;
(statearr_19619[(12)] = inst_19568);

(statearr_19619[(11)] = inst_19569__$1);

return statearr_19619;
})();
if(cljs.core.truth_(inst_19570)){
var statearr_19620_20681 = state_19596__$1;
(statearr_19620_20681[(1)] = (8));

} else {
var statearr_19621_20682 = state_19596__$1;
(statearr_19621_20682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (14))){
var inst_19589 = (state_19596[(2)]);
var inst_19590 = cljs.core.async.close_BANG_(out);
var state_19596__$1 = (function (){var statearr_19623 = state_19596;
(statearr_19623[(13)] = inst_19589);

return statearr_19623;
})();
var statearr_19624_20683 = state_19596__$1;
(statearr_19624_20683[(2)] = inst_19590);

(statearr_19624_20683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (10))){
var inst_19580 = (state_19596[(2)]);
var state_19596__$1 = state_19596;
var statearr_19625_20684 = state_19596__$1;
(statearr_19625_20684[(2)] = inst_19580);

(statearr_19625_20684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (8))){
var inst_19560 = (state_19596[(8)]);
var inst_19569 = (state_19596[(11)]);
var tmp19622 = inst_19560;
var inst_19560__$1 = tmp19622;
var inst_19561 = inst_19569;
var state_19596__$1 = (function (){var statearr_19626 = state_19596;
(statearr_19626[(7)] = inst_19561);

(statearr_19626[(8)] = inst_19560__$1);

return statearr_19626;
})();
var statearr_19627_20691 = state_19596__$1;
(statearr_19627_20691[(2)] = null);

(statearr_19627_20691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17061__auto__ = null;
var cljs$core$async$state_machine__17061__auto____0 = (function (){
var statearr_19628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19628[(0)] = cljs$core$async$state_machine__17061__auto__);

(statearr_19628[(1)] = (1));

return statearr_19628;
});
var cljs$core$async$state_machine__17061__auto____1 = (function (state_19596){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_19596);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e19629){var ex__17064__auto__ = e19629;
var statearr_19630_20693 = state_19596;
(statearr_19630_20693[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_19596[(4)]))){
var statearr_19631_20694 = state_19596;
(statearr_19631_20694[(1)] = cljs.core.first((state_19596[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20695 = state_19596;
state_19596 = G__20695;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$state_machine__17061__auto__ = function(state_19596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17061__auto____1.call(this,state_19596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17061__auto____0;
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17061__auto____1;
return cljs$core$async$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_19633 = f__17215__auto__();
(statearr_19633[(6)] = c__17214__auto___20661);

return statearr_19633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19636 = arguments.length;
switch (G__19636) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17214__auto___20699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17215__auto__ = (function (){var switch__17060__auto__ = (function (state_19681){
var state_val_19682 = (state_19681[(1)]);
if((state_val_19682 === (7))){
var inst_19677 = (state_19681[(2)]);
var state_19681__$1 = state_19681;
var statearr_19683_20700 = state_19681__$1;
(statearr_19683_20700[(2)] = inst_19677);

(statearr_19683_20700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (1))){
var inst_19637 = [];
var inst_19638 = inst_19637;
var inst_19639 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19681__$1 = (function (){var statearr_19684 = state_19681;
(statearr_19684[(7)] = inst_19638);

(statearr_19684[(8)] = inst_19639);

return statearr_19684;
})();
var statearr_19685_20702 = state_19681__$1;
(statearr_19685_20702[(2)] = null);

(statearr_19685_20702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (4))){
var inst_19642 = (state_19681[(9)]);
var inst_19642__$1 = (state_19681[(2)]);
var inst_19643 = (inst_19642__$1 == null);
var inst_19644 = cljs.core.not(inst_19643);
var state_19681__$1 = (function (){var statearr_19686 = state_19681;
(statearr_19686[(9)] = inst_19642__$1);

return statearr_19686;
})();
if(inst_19644){
var statearr_19687_20704 = state_19681__$1;
(statearr_19687_20704[(1)] = (5));

} else {
var statearr_19688_20705 = state_19681__$1;
(statearr_19688_20705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (15))){
var inst_19638 = (state_19681[(7)]);
var inst_19669 = cljs.core.vec(inst_19638);
var state_19681__$1 = state_19681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19681__$1,(18),out,inst_19669);
} else {
if((state_val_19682 === (13))){
var inst_19664 = (state_19681[(2)]);
var state_19681__$1 = state_19681;
var statearr_19693_20709 = state_19681__$1;
(statearr_19693_20709[(2)] = inst_19664);

(statearr_19693_20709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (6))){
var inst_19638 = (state_19681[(7)]);
var inst_19666 = inst_19638.length;
var inst_19667 = (inst_19666 > (0));
var state_19681__$1 = state_19681;
if(cljs.core.truth_(inst_19667)){
var statearr_19694_20713 = state_19681__$1;
(statearr_19694_20713[(1)] = (15));

} else {
var statearr_19695_20714 = state_19681__$1;
(statearr_19695_20714[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (17))){
var inst_19674 = (state_19681[(2)]);
var inst_19675 = cljs.core.async.close_BANG_(out);
var state_19681__$1 = (function (){var statearr_19696 = state_19681;
(statearr_19696[(10)] = inst_19674);

return statearr_19696;
})();
var statearr_19700_20715 = state_19681__$1;
(statearr_19700_20715[(2)] = inst_19675);

(statearr_19700_20715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (3))){
var inst_19679 = (state_19681[(2)]);
var state_19681__$1 = state_19681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19681__$1,inst_19679);
} else {
if((state_val_19682 === (12))){
var inst_19638 = (state_19681[(7)]);
var inst_19657 = cljs.core.vec(inst_19638);
var state_19681__$1 = state_19681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19681__$1,(14),out,inst_19657);
} else {
if((state_val_19682 === (2))){
var state_19681__$1 = state_19681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19681__$1,(4),ch);
} else {
if((state_val_19682 === (11))){
var inst_19638 = (state_19681[(7)]);
var inst_19646 = (state_19681[(11)]);
var inst_19642 = (state_19681[(9)]);
var inst_19654 = inst_19638.push(inst_19642);
var tmp19701 = inst_19638;
var inst_19638__$1 = tmp19701;
var inst_19639 = inst_19646;
var state_19681__$1 = (function (){var statearr_19702 = state_19681;
(statearr_19702[(7)] = inst_19638__$1);

(statearr_19702[(8)] = inst_19639);

(statearr_19702[(12)] = inst_19654);

return statearr_19702;
})();
var statearr_19703_20718 = state_19681__$1;
(statearr_19703_20718[(2)] = null);

(statearr_19703_20718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (9))){
var inst_19639 = (state_19681[(8)]);
var inst_19650 = cljs.core.keyword_identical_QMARK_(inst_19639,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19681__$1 = state_19681;
var statearr_19704_20719 = state_19681__$1;
(statearr_19704_20719[(2)] = inst_19650);

(statearr_19704_20719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (5))){
var inst_19646 = (state_19681[(11)]);
var inst_19639 = (state_19681[(8)]);
var inst_19642 = (state_19681[(9)]);
var inst_19647 = (state_19681[(13)]);
var inst_19646__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19642) : f.call(null,inst_19642));
var inst_19647__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19646__$1,inst_19639);
var state_19681__$1 = (function (){var statearr_19705 = state_19681;
(statearr_19705[(11)] = inst_19646__$1);

(statearr_19705[(13)] = inst_19647__$1);

return statearr_19705;
})();
if(inst_19647__$1){
var statearr_19706_20720 = state_19681__$1;
(statearr_19706_20720[(1)] = (8));

} else {
var statearr_19707_20721 = state_19681__$1;
(statearr_19707_20721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (14))){
var inst_19646 = (state_19681[(11)]);
var inst_19642 = (state_19681[(9)]);
var inst_19659 = (state_19681[(2)]);
var inst_19660 = [];
var inst_19661 = inst_19660.push(inst_19642);
var inst_19638 = inst_19660;
var inst_19639 = inst_19646;
var state_19681__$1 = (function (){var statearr_19708 = state_19681;
(statearr_19708[(7)] = inst_19638);

(statearr_19708[(14)] = inst_19659);

(statearr_19708[(8)] = inst_19639);

(statearr_19708[(15)] = inst_19661);

return statearr_19708;
})();
var statearr_19709_20724 = state_19681__$1;
(statearr_19709_20724[(2)] = null);

(statearr_19709_20724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (16))){
var state_19681__$1 = state_19681;
var statearr_19710_20725 = state_19681__$1;
(statearr_19710_20725[(2)] = null);

(statearr_19710_20725[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (10))){
var inst_19652 = (state_19681[(2)]);
var state_19681__$1 = state_19681;
if(cljs.core.truth_(inst_19652)){
var statearr_19711_20726 = state_19681__$1;
(statearr_19711_20726[(1)] = (11));

} else {
var statearr_19712_20727 = state_19681__$1;
(statearr_19712_20727[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (18))){
var inst_19671 = (state_19681[(2)]);
var state_19681__$1 = state_19681;
var statearr_19713_20728 = state_19681__$1;
(statearr_19713_20728[(2)] = inst_19671);

(statearr_19713_20728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19682 === (8))){
var inst_19647 = (state_19681[(13)]);
var state_19681__$1 = state_19681;
var statearr_19714_20729 = state_19681__$1;
(statearr_19714_20729[(2)] = inst_19647);

(statearr_19714_20729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17061__auto__ = null;
var cljs$core$async$state_machine__17061__auto____0 = (function (){
var statearr_19716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19716[(0)] = cljs$core$async$state_machine__17061__auto__);

(statearr_19716[(1)] = (1));

return statearr_19716;
});
var cljs$core$async$state_machine__17061__auto____1 = (function (state_19681){
while(true){
var ret_value__17062__auto__ = (function (){try{while(true){
var result__17063__auto__ = switch__17060__auto__(state_19681);
if(cljs.core.keyword_identical_QMARK_(result__17063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17063__auto__;
}
break;
}
}catch (e19717){var ex__17064__auto__ = e19717;
var statearr_19718_20730 = state_19681;
(statearr_19718_20730[(2)] = ex__17064__auto__);


if(cljs.core.seq((state_19681[(4)]))){
var statearr_19719_20731 = state_19681;
(statearr_19719_20731[(1)] = cljs.core.first((state_19681[(4)])));

} else {
throw ex__17064__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20732 = state_19681;
state_19681 = G__20732;
continue;
} else {
return ret_value__17062__auto__;
}
break;
}
});
cljs$core$async$state_machine__17061__auto__ = function(state_19681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17061__auto____1.call(this,state_19681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17061__auto____0;
cljs$core$async$state_machine__17061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17061__auto____1;
return cljs$core$async$state_machine__17061__auto__;
})()
})();
var state__17216__auto__ = (function (){var statearr_19720 = f__17215__auto__();
(statearr_19720[(6)] = c__17214__auto___20699);

return statearr_19720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17216__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
