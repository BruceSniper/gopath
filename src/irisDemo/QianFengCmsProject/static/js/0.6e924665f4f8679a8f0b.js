webpackJsonp([0], Array(196).concat([function (t, e, n) {
    n(486);
    var i = n(87)(n(370), n(511), null, null);
    t.exports = i.exports
}, , , , , , , , , , , , function (t, e) {
    function n(t, e) {
        j[t] = e
    }

    function i(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t, n = F.call(t);
        if ("[object Array]" === n) {
            e = [];
            for (var r = 0, a = t.length; r < a; r++) e[r] = i(t[r])
        } else if (V[n]) {
            var o = t.constructor;
            if (t.constructor.from) e = o.from(t); else {
                e = new o(t.length);
                for (var r = 0, a = t.length; r < a; r++) e[r] = i(t[r])
            }
        } else if (!N[n] && !E(t) && !T(t)) {
            e = {};
            for (var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]))
        }
        return e
    }

    function r(t, e, n) {
        if (!S(e) || !S(t)) return n ? i(e) : t;
        for (var a in e) if (e.hasOwnProperty(a)) {
            var o = t[a], s = e[a];
            !S(s) || !S(o) || _(s) || _(o) || T(s) || T(o) || M(s) || M(o) || E(s) || E(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n)
        }
        return t
    }

    function a(t, e) {
        for (var n = t[0], i = 1, a = t.length; i < a; i++) n = r(n, t[i], e);
        return n
    }

    function o(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }

    function s(t, e, n) {
        for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
        return t
    }

    function l() {
        return U || (U = X().getContext("2d")), U
    }

    function u(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n
        }
        return -1
    }

    function h(t, e) {
        function n() {
        }

        var i = t.prototype;
        n.prototype = e.prototype, t.prototype = new n;
        for (var r in i) t.prototype[r] = i[r];
        t.prototype.constructor = t, t.superClass = e
    }

    function c(t, e, n) {
        t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n)
    }

    function d(t) {
        if (t) return "string" != typeof t && "number" == typeof t.length
    }

    function f(t, e, n) {
        if (t && e) if (t.forEach && t.forEach === W) t.forEach(e, n); else if (t.length === +t.length) for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t); else for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t)
    }

    function p(t, e, n) {
        if (t && e) {
            if (t.map && t.map === q) return t.map(e, n);
            for (var i = [], r = 0, a = t.length; r < a; r++) i.push(e.call(n, t[r], r, t));
            return i
        }
    }

    function g(t, e, n, i) {
        if (t && e) {
            if (t.reduce && t.reduce === Y) return t.reduce(e, n, i);
            for (var r = 0, a = t.length; r < a; r++) n = e.call(i, n, t[r], r, t);
            return n
        }
    }

    function v(t, e, n) {
        if (t && e) {
            if (t.filter && t.filter === G) return t.filter(e, n);
            for (var i = [], r = 0, a = t.length; r < a; r++) e.call(n, t[r], r, t) && i.push(t[r]);
            return i
        }
    }

    function m(t, e, n) {
        if (t && e) for (var i = 0, r = t.length; i < r; i++) if (e.call(n, t[i], i, t)) return t[i]
    }

    function x(t, e) {
        var n = Z.call(arguments, 2);
        return function () {
            return t.apply(e, n.concat(Z.call(arguments)))
        }
    }

    function y(t) {
        var e = Z.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(Z.call(arguments)))
        }
    }

    function _(t) {
        return "[object Array]" === F.call(t)
    }

    function b(t) {
        return "function" == typeof t
    }

    function w(t) {
        return "[object String]" === F.call(t)
    }

    function S(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" == e
    }

    function M(t) {
        return !!N[F.call(t)]
    }

    function T(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function A(t) {
        return t !== t
    }

    function C(t) {
        for (var e = 0, n = arguments.length; e < n; e++) if (null != arguments[e]) return arguments[e]
    }

    function I(t, e) {
        return null != t ? t : e
    }

    function D(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function k() {
        return Function.call.apply(Z, arguments)
    }

    function P(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function L(t, e) {
        if (!t) throw new Error(e)
    }

    function O(t) {
        t[$] = !0
    }

    function E(t) {
        return t[$]
    }

    function z(t) {
        t && f(t, function (t, e) {
            this.set(e, t)
        }, this)
    }

    function R(t) {
        return new z(t)
    }

    function B() {
    }

    var N = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1,
            "[object Canvas]": 1
        }, V = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        }, F = Object.prototype.toString, H = Array.prototype, W = H.forEach, G = H.filter, Z = H.slice, q = H.map,
        Y = H.reduce, j = {}, X = function () {
            return j.createCanvas()
        };
    j.createCanvas = function () {
        return document.createElement("canvas")
    };
    var U, $ = "__ec_primitive__";
    z.prototype = {
        constructor: z, get: function (t) {
            return this["_ec_" + t]
        }, set: function (t, e) {
            return this["_ec_" + t] = e, e
        }, each: function (t, e) {
            void 0 !== e && (t = x(t, e));
            for (var n in this) this.hasOwnProperty(n) && t(this[n], n.slice(4))
        }, removeKey: function (t) {
            delete this["_ec_" + t]
        }
    }, e.$override = n, e.clone = i, e.merge = r, e.mergeAll = a, e.extend = o, e.defaults = s, e.createCanvas = X, e.getContext = l, e.indexOf = u, e.inherits = h, e.mixin = c, e.isArrayLike = d, e.each = f, e.map = p, e.reduce = g, e.filter = v, e.find = m, e.bind = x, e.curry = y, e.isArray = _, e.isFunction = b, e.isString = w, e.isObject = S, e.isBuiltInObject = M, e.isDom = T, e.eqNaN = A, e.retrieve = C, e.retrieve2 = I, e.retrieve3 = D, e.slice = k, e.normalizeCssArray = P, e.assert = L, e.setAsPrimitive = O, e.isPrimitive = E, e.createHashMap = R, e.noop = B
}, function (t, e, n) {
    function i(t) {
        return function (e, n, i) {
            e = e && e.toLowerCase(), Q.prototype[t].call(this, e, n, i)
        }
    }

    function r() {
        Q.call(this)
    }

    function a(t, e, n) {
        function i(t, e) {
            return t.prio - e.prio
        }

        n = n || {}, "string" == typeof e && (e = Ot[e]), this.id, this.group, this._dom = t;
        var a = this._zr = j.init(t, {
            renderer: n.renderer || "canvas",
            devicePixelRatio: n.devicePixelRatio,
            width: n.width,
            height: n.height
        });
        this._throttledZrFlush = ct(X.bind(a.flush, a), 17);
        var e = X.clone(e);
        e && it(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new et, this._api = b(this), Q.call(this), this._messageCenter = new r, this._initEvents(), this.resize = X.bind(this.resize, this), this._pendingActions = [], K(Lt, i), K(Dt, i), a.animation.on("frame", this._onframe, this), X.setAsPrimitive(this)
    }

    function o(t, e, n) {
        var i, r = this._model, a = this._coordSysMgr.getCoordinateSystems();
        e = ut.parseFinder(r, e);
        for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (s[t] && null != (i = s[t](r, e, n))) return i
        }
    }

    function s(t, e, n, i, r) {
        function a(i) {
            i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
        }

        var o = t._model;
        if (!i) return void pt(t._componentsViews.concat(t._chartsViews), a);
        var s = {};
        s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
        var l = {mainType: i, query: s};
        r && (l.subType = r), o && o.eachComponent(l, function (e, n) {
            a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
        }, t)
    }

    function l(t, e) {
        var n = t.type, i = t.escapeConnect, r = Ct[n], a = r.actionInfo, o = (a.update || "update").split(":"),
            l = o.pop();
        o = null != o[0] && gt(o[0]), this[bt] = !0;
        var u = [t], h = !1;
        t.batch && (h = !0, u = X.map(t.batch, function (e) {
            return e = X.defaults(X.extend({}, e), t), e.batch = null, e
        }));
        var c, d = [], f = "highlight" === n || "downplay" === n;
        pt(u, function (t) {
            c = r.action(t, this._model, this._api), c = c || X.extend({}, t), c.type = a.event || c.type, d.push(c), f ? s(this, l, t, "series") : o && s(this, l, t, o.main, o.sub)
        }, this), "none" === l || f || o || (this[wt] ? (Tt.prepareAndUpdate.call(this, t), this[wt] = !1) : Tt[l].call(this, t)), c = h ? {
            type: a.event || n,
            escapeConnect: i,
            batch: d
        } : d[0], this[bt] = !1, !e && this._messageCenter.trigger(c.type, c)
    }

    function u(t) {
        for (var e = this._pendingActions; e.length;) {
            var n = e.shift();
            l.call(this, n, t)
        }
    }

    function h(t) {
        !t && this.trigger("updated")
    }

    function c(t, e, n) {
        var i = this._api;
        pt(this._componentsViews, function (r) {
            var a = r.__model;
            r[t](a, e, i, n), _(a, r)
        }, this), e.eachSeries(function (r, a) {
            var o = this._chartsMap[r.__viewId];
            o[t](r, e, i, n), _(r, o), y(r, o)
        }, this), x(this._zr, e), pt(Pt, function (t) {
            t(e, i)
        })
    }

    function d(t, e) {
        for (var n = "component" === t, i = n ? this._componentsViews : this._chartsViews, r = n ? this._componentsMap : this._chartsMap, a = this._zr, o = 0; o < i.length; o++) i[o].__alive = !1;
        e[n ? "eachComponent" : "eachSeries"](function (t, o) {
            if (n) {
                if ("series" === t) return
            } else o = t;
            var s = "_ec_" + o.id + "_" + o.type, l = r[s];
            if (!l) {
                var u = gt(o.type), h = n ? ot.getClass(u.main, u.sub) : st.getClass(u.sub);
                if (!h) return;
                l = new h, l.init(e, this._api), r[s] = l, i.push(l), a.add(l.group)
            }
            o.__viewId = l.__id = s, l.__alive = !0, l.__model = o, l.group.__ecComponentInfo = {
                mainType: o.mainType,
                index: o.componentIndex
            }
        }, this);
        for (var o = 0; o < i.length;) {
            var s = i[o];
            s.__alive ? o++ : (a.remove(s.group), s.dispose(e, this._api), i.splice(o, 1), delete r[s.__id], s.__id = s.group.__ecComponentInfo = null)
        }
    }

    function f(t, e) {
        pt(Dt, function (n) {
            n.func(t, e)
        })
    }

    function p(t) {
        var e = {};
        t.eachSeries(function (t) {
            var n = t.get("stack"), i = t.getData();
            if (n && "list" === i.type) {
                var r = e[n];
                e.hasOwnProperty(n) && r && (i.stackedOn = r), e[n] = i
            }
        })
    }

    function g(t, e) {
        var n = this._api;
        pt(Lt, function (i) {
            i.isLayout && i.func(t, n, e)
        })
    }

    function v(t, e, n) {
        var i = this._api;
        t.clearColorPalette(), t.eachSeries(function (t) {
            t.clearColorPalette()
        }), pt(Lt, function (r) {
            (!n || !r.isLayout) && r.func(t, i, e)
        })
    }

    function m(t, e) {
        var n = this._api;
        pt(this._componentsViews, function (i) {
            var r = i.__model;
            i.render(r, t, n, e), _(r, i)
        }, this), pt(this._chartsViews, function (t) {
            t.__alive = !1
        }, this), t.eachSeries(function (i, r) {
            var a = this._chartsMap[i.__viewId];
            a.__alive = !0, a.render(i, t, n, e), a.group.silent = !!i.get("silent"), _(i, a), y(i, a)
        }, this), x(this._zr, t), pt(this._chartsViews, function (e) {
            e.__alive || e.remove(t, n)
        }, this)
    }

    function x(t, e) {
        var n = t.storage, i = 0;
        n.traverse(function (t) {
            t.isGroup || i++
        }), i > e.get("hoverLayerThreshold") && !$.node && n.traverse(function (t) {
            t.isGroup || (t.useHoverLayer = !0)
        })
    }

    function y(t, e) {
        var n = 0;
        e.group.traverse(function (t) {
            "group" === t.type || t.ignore || n++
        });
        var i = +t.get("progressive"), r = n > t.get("progressiveThreshold") && i && !$.node;
        r && e.group.traverse(function (t) {
            t.isGroup || (t.progressive = r ? Math.floor(n++ / i) : -1, r && t.stopAnimation(!0))
        });
        var a = t.get("blendMode") || null;
        e.group.traverse(function (t) {
            t.isGroup || t.setStyle("blend", a)
        })
    }

    function _(t, e) {
        var n = t.get("z"), i = t.get("zlevel");
        e.group.traverse(function (t) {
            "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
        })
    }

    function b(t) {
        var e = t._coordSysMgr;
        return X.extend(new tt(t), {
            getCoordinateSystems: X.bind(e.getCoordinateSystems, e),
            getComponentByElement: function (e) {
                for (; e;) {
                    var n = e.__ecComponentInfo;
                    if (null != n) return t._model.getComponent(n.mainType, n.index);
                    e = e.parent
                }
            }
        })
    }

    function w(t) {
        function e(t, e) {
            for (var i = 0; i < t.length; i++) {
                t[i][n] = e
            }
        }

        var n = "__connectUpdateStatus";
        X.each(It, function (i, r) {
            t._messageCenter.on(r, function (i) {
                if (Rt[t.group] && 0 !== t[n]) {
                    if (i && i.escapeConnect) return;
                    var r = t.makeActionFromEvent(i), a = [];
                    X.each(zt, function (e) {
                        e !== t && e.group === t.group && a.push(e)
                    }), e(a, 0), pt(a, function (t) {
                        1 !== t[n] && t.dispatchAction(r)
                    }), e(a, 2)
                }
            })
        })
    }

    function S(t, e, n) {
        var i = C(t);
        if (i) return i;
        var r = new a(t, e, n);
        return r.id = "ec_" + Bt++, zt[r.id] = r, t.setAttribute ? t.setAttribute(Vt, r.id) : t[Vt] = r.id, w(r), r
    }

    function M(t) {
        if (X.isArray(t)) {
            var e = t;
            t = null, X.each(e, function (e) {
                null != e.group && (t = e.group)
            }), t = t || "g_" + Nt++, X.each(e, function (e) {
                e.group = t
            })
        }
        return Rt[t] = !0, t
    }

    function T(t) {
        Rt[t] = !1
    }

    function A(t) {
        "string" == typeof t ? t = zt[t] : t instanceof a || (t = C(t)), t instanceof a && !t.isDisposed() && t.dispose()
    }

    function C(t) {
        var e;
        return e = t.getAttribute ? t.getAttribute(Vt) : t[Vt], zt[e]
    }

    function I(t) {
        return zt[t]
    }

    function D(t, e) {
        Ot[t] = e
    }

    function k(t) {
        kt.push(t)
    }

    function P(t, e) {
        "function" == typeof t && (e = t, t = mt), Dt.push({prio: t, func: e})
    }

    function L(t) {
        Pt.push(t)
    }

    function O(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = X.isObject(t) ? t.type : [t, t = {event: e}][0];
        t.event = (t.event || i).toLowerCase(), e = t.event, X.assert(St.test(i) && St.test(e)), Ct[i] || (Ct[i] = {
            action: n,
            actionInfo: t
        }), It[e] = i
    }

    function E(t, e) {
        et.register(t, e)
    }

    function z(t) {
        var e = et.get(t);
        if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()
    }

    function R(t, e) {
        "function" == typeof t && (e = t, t = xt), Lt.push({prio: t, func: e, isLayout: !0})
    }

    function B(t, e) {
        "function" == typeof t && (e = t, t = yt), Lt.push({prio: t, func: e})
    }

    function N(t, e) {
        Et[t] = e
    }

    function V(t) {
        return rt.extend(t)
    }

    function F(t) {
        return ot.extend(t)
    }

    function H(t) {
        return at.extend(t)
    }

    function W(t) {
        return st.extend(t)
    }

    function G(t) {
        X.$override("createCanvas", t)
    }

    function Z(t, e, n) {
        e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), Ft[t] = {
            geoJson: e,
            specialAreas: n
        }
    }

    function q(t) {
        return Ft[t]
    }

    var Y = n(214), j = (Y.__DEV__, n(275)), X = n(208), U = n(234), $ = n(216), K = n(245), Q = n(230), J = n(295),
        tt = n(282), et = n(249), nt = n(296), it = n(303), rt = n(226), at = n(255), ot = n(280), st = n(258),
        lt = n(210), ut = n(211), ht = n(251), ct = ht.throttle, dt = n(308), ft = n(294), pt = X.each,
        gt = rt.parseClassType, vt = {zrender: "3.7.4"}, mt = 1e3, xt = 1e3, yt = 3e3, _t = {
            PROCESSOR: {FILTER: mt, STATISTIC: 5e3},
            VISUAL: {LAYOUT: xt, GLOBAL: 2e3, CHART: yt, COMPONENT: 4e3, BRUSH: 5e3}
        }, bt = "__flagInMainProcess", wt = "__optionUpdated", St = /^[a-zA-Z0-9_]+$/;
    r.prototype.on = i("on"), r.prototype.off = i("off"), r.prototype.one = i("one"), X.mixin(r, Q);
    var Mt = a.prototype;
    Mt._onframe = function () {
        if (this[wt]) {
            var t = this[wt].silent;
            this[bt] = !0, Tt.prepareAndUpdate.call(this), this[bt] = !1, this[wt] = !1, u.call(this, t), h.call(this, t)
        }
    }, Mt.getDom = function () {
        return this._dom
    }, Mt.getZr = function () {
        return this._zr
    }, Mt.setOption = function (t, e, n) {
        var i;
        if (X.isObject(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[bt] = !0, !this._model || e) {
            var r = new nt(this._api), a = this._theme;
            (this._model = new J(null, null, a, r)).init(null, null, a, r)
        }
        this._model.setOption(t, kt), n ? (this[wt] = {silent: i}, this[bt] = !1) : (Tt.prepareAndUpdate.call(this), this._zr.flush(), this[wt] = !1, this[bt] = !1, u.call(this, i), h.call(this, i))
    }, Mt.setTheme = function () {
        console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
    }, Mt.getModel = function () {
        return this._model
    }, Mt.getOption = function () {
        return this._model && this._model.getOption()
    }, Mt.getWidth = function () {
        return this._zr.getWidth()
    }, Mt.getHeight = function () {
        return this._zr.getHeight()
    }, Mt.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || window.devicePixelRatio || 1
    }, Mt.getRenderedCanvas = function (t) {
        if ($.canvasSupported) {
            t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
            var e = this._zr, n = e.storage.getDisplayList();
            return X.each(n, function (t) {
                t.stopAnimation(!0)
            }), e.painter.getRenderedCanvas(t)
        }
    }, Mt.getSvgDataUrl = function () {
        if ($.svgSupported) {
            var t = this._zr, e = t.storage.getDisplayList();
            return X.each(e, function (t) {
                t.stopAnimation(!0)
            }), t.painter.pathToSvg()
        }
    }, Mt.getDataURL = function (t) {
        t = t || {};
        var e = t.excludeComponents, n = this._model, i = [], r = this;
        pt(e, function (t) {
            n.eachComponent({mainType: t}, function (t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (i.push(e), e.group.ignore = !0)
            })
        });
        var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
        return pt(i, function (t) {
            t.group.ignore = !1
        }), a
    }, Mt.getConnectedDataURL = function (t) {
        if ($.canvasSupported) {
            var e = this.group, n = Math.min, i = Math.max;
            if (Rt[e]) {
                var r = 1 / 0, a = 1 / 0, o = -1 / 0, s = -1 / 0, l = [], u = t && t.pixelRatio || 1;
                X.each(zt, function (u, h) {
                    if (u.group === e) {
                        var c = u.getRenderedCanvas(X.clone(t)), d = u.getDom().getBoundingClientRect();
                        r = n(d.left, r), a = n(d.top, a), o = i(d.right, o), s = i(d.bottom, s), l.push({
                            dom: c,
                            left: d.left,
                            top: d.top
                        })
                    }
                }), r *= u, a *= u, o *= u, s *= u;
                var h = o - r, c = s - a, d = X.createCanvas();
                d.width = h, d.height = c;
                var f = j.init(d);
                return pt(l, function (t) {
                    var e = new lt.Image({style: {x: t.left * u - r, y: t.top * u - a, image: t.dom}});
                    f.add(e)
                }), f.refreshImmediately(), d.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
        }
    }, Mt.convertToPixel = X.curry(o, "convertToPixel"), Mt.convertFromPixel = X.curry(o, "convertFromPixel"), Mt.containPixel = function (t, e) {
        var n, i = this._model;
        return t = ut.parseFinder(i, t), X.each(t, function (t, i) {
            i.indexOf("Models") >= 0 && X.each(t, function (t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint) n |= !!r.containPoint(e); else if ("seriesModels" === i) {
                    var a = this._chartsMap[t.__viewId];
                    a && a.containPoint && (n |= a.containPoint(e, t))
                }
            }, this)
        }, this), !!n
    }, Mt.getVisual = function (t, e) {
        var n = this._model;
        t = ut.parseFinder(n, t, {defaultMainType: "series"});
        var i = t.seriesModel, r = i.getData(),
            a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
        return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
    }, Mt.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId]
    }, Mt.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId]
    };
    var Tt = {
        update: function (t) {
            var e = this._model, n = this._api, i = this._coordSysMgr, r = this._zr;
            if (e) {
                e.restoreData(), i.create(this._model, this._api), f.call(this, e, n), p.call(this, e), i.update(e, n), v.call(this, e, t), m.call(this, e, t);
                var a = e.get("backgroundColor") || "transparent", o = r.painter;
                if (o.isSingleCanvas && o.isSingleCanvas()) r.configLayer(0, {clearColor: a}); else {
                    if (!$.canvasSupported) {
                        var s = U.parse(a);
                        a = U.stringify(s, "rgb"), 0 === s[3] && (a = "transparent")
                    }
                    a.colorStops || a.image ? (r.configLayer(0, {clearColor: a}), this.__hasGradientOrPatternBg = !0, this._dom.style.background = "transparent") : (this.__hasGradientOrPatternBg && r.configLayer(0, {clearColor: null}), this.__hasGradientOrPatternBg = !1, this._dom.style.background = a)
                }
                pt(Pt, function (t) {
                    t(e, n)
                })
            }
        }, updateView: function (t) {
            var e = this._model;
            e && (e.eachSeries(function (t) {
                t.getData().clearAllVisual()
            }), v.call(this, e, t), c.call(this, "updateView", e, t))
        }, updateVisual: function (t) {
            var e = this._model;
            e && (e.eachSeries(function (t) {
                t.getData().clearAllVisual()
            }), v.call(this, e, t, !0), c.call(this, "updateVisual", e, t))
        }, updateLayout: function (t) {
            var e = this._model;
            e && (g.call(this, e, t), c.call(this, "updateLayout", e, t))
        }, prepareAndUpdate: function (t) {
            var e = this._model;
            d.call(this, "component", e), d.call(this, "chart", e), Tt.update.call(this, t)
        }
    };
    Mt.resize = function (t) {
        this[bt] = !0, this._zr.resize(t);
        var e = this._model && this._model.resetOption("media");
        Tt[e ? "prepareAndUpdate" : "update"].call(this), this._loadingFX && this._loadingFX.resize(), this[bt] = !1;
        var n = t && t.silent;
        u.call(this, n), h.call(this, n)
    }, Mt.showLoading = function (t, e) {
        if (X.isObject(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), Et[t]) {
            var n = Et[t](this._api, e), i = this._zr;
            this._loadingFX = n, i.add(n)
        }
    }, Mt.hideLoading = function () {
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
    }, Mt.makeActionFromEvent = function (t) {
        var e = X.extend({}, t);
        return e.type = It[t.type], e
    }, Mt.dispatchAction = function (t, e) {
        if (X.isObject(e) || (e = {silent: !!e}), Ct[t.type] && this._model) {
            if (this[bt]) return void this._pendingActions.push(t);
            l.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && $.browser.weChat && this._throttledZrFlush(), u.call(this, e.silent), h.call(this, e.silent)
        }
    }, Mt.on = i("on"), Mt.off = i("off"), Mt.one = i("one");
    var At = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    Mt._initEvents = function () {
        pt(At, function (t) {
            this._zr.on(t, function (e) {
                var n, i = this.getModel(), r = e.target;
                if ("globalout" === t) n = {}; else if (r && null != r.dataIndex) {
                    var a = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
                    n = a && a.getDataParams(r.dataIndex, r.dataType) || {}
                } else r && r.eventData && (n = X.extend({}, r.eventData));
                n && (n.event = e, n.type = t, this.trigger(t, n))
            }, this)
        }, this), pt(It, function (t, e) {
            this._messageCenter.on(e, function (t) {
                this.trigger(e, t)
            }, this)
        }, this)
    }, Mt.isDisposed = function () {
        return this._disposed
    }, Mt.clear = function () {
        this.setOption({series: []}, !0)
    }, Mt.dispose = function () {
        if (!this._disposed) {
            this._disposed = !0;
            var t = this._api, e = this._model;
            pt(this._componentsViews, function (n) {
                n.dispose(e, t)
            }), pt(this._chartsViews, function (n) {
                n.dispose(e, t)
            }), this._zr.dispose(), delete zt[this.id]
        }
    }, X.mixin(a, Q);
    var Ct = {}, It = {}, Dt = [], kt = [], Pt = [], Lt = [], Ot = {}, Et = {}, zt = {}, Rt = {}, Bt = new Date - 0,
        Nt = new Date - 0, Vt = "_echarts_instance_", Ft = {}, Ht = T;
    B(2e3, dt), k(it), N("default", ft), O({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    }, X.noop), O({type: "downplay", event: "downplay", update: "downplay"}, X.noop);
    var Wt = {};
    e.version = "3.8.5", e.dependencies = vt, e.PRIORITY = _t, e.init = S, e.connect = M, e.disConnect = T, e.disconnect = Ht, e.dispose = A, e.getInstanceByDom = C, e.getInstanceById = I, e.registerTheme = D, e.registerPreprocessor = k, e.registerProcessor = P, e.registerPostUpdate = L, e.registerAction = O, e.registerCoordinateSystem = E, e.getCoordinateSystemDimensions = z, e.registerLayout = R, e.registerVisual = B, e.registerLoading = N, e.extendComponentModel = V, e.extendComponentView = F, e.extendSeriesModel = H, e.extendChartView = W, e.setCanvasCreator = G, e.registerMap = Z, e.getMap = q, e.dataTool = Wt;
    var Gt = n(292);
    !function () {
        for (var t in Gt) Gt.hasOwnProperty(t) && (e[t] = Gt[t])
    }()
}, function (t, e, n) {
    function i(t) {
        return $.extend(t)
    }

    function r(t, e) {
        return Y.extendFromString(t, e)
    }

    function a(t, e, n, i) {
        var r = Y.createFromString(t, e), a = r.getBoundingRect();
        return n && ("center" === i && (n = s(n, a)), l(r, n)), r
    }

    function o(t, e, n) {
        var i = new Q({
            style: {image: t, x: e.x, y: e.y, width: e.width, height: e.height}, onload: function (t) {
                if ("center" === n) {
                    var r = {width: t.width, height: t.height};
                    i.setStyle(s(e, r))
                }
            }
        });
        return i
    }

    function s(t, e) {
        var n, i = e.width / e.height, r = t.height * i;
        return r <= t.width ? n = t.height : (r = t.width, n = r / i), {
            x: t.x + t.width / 2 - r / 2,
            y: t.y + t.height / 2 - n / 2,
            width: r,
            height: n
        }
    }

    function l(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect(), i = n.calculateTransform(e);
            t.applyTransform(i)
        }
    }

    function u(t) {
        var e = t.shape, n = t.style.lineWidth;
        return pt(2 * e.x1) === pt(2 * e.x2) && (e.x1 = e.x2 = c(e.x1, n, !0)), pt(2 * e.y1) === pt(2 * e.y2) && (e.y1 = e.y2 = c(e.y1, n, !0)), t
    }

    function h(t) {
        var e = t.shape, n = t.style.lineWidth, i = e.x, r = e.y, a = e.width, o = e.height;
        return e.x = c(e.x, n, !0), e.y = c(e.y, n, !0), e.width = Math.max(c(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(c(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t
    }

    function c(t, e, n) {
        var i = pt(2 * t);
        return (i + pt(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }

    function d(t) {
        return null != t && "none" != t
    }

    function f(t) {
        return "string" == typeof t ? j.lift(t, -.1) : t
    }

    function p(t) {
        if (t.__hoverStlDirty) {
            var e = t.style.stroke, n = t.style.fill, i = t.__hoverStl;
            i.fill = i.fill || (d(n) ? f(n) : null), i.stroke = i.stroke || (d(e) ? f(e) : null);
            var r = {};
            for (var a in i) null != i[a] && (r[a] = t.style[a]);
            t.__normalStl = r, t.__hoverStlDirty = !1
        }
    }

    function g(t) {
        if (!t.__isHover) {
            if (p(t), t.useHoverLayer) t.__zr && t.__zr.addHover(t, t.__hoverStl); else {
                var e = t.style, n = e.insideRollbackOpt;
                n && O(e), e.extendFrom(t.__hoverStl), n && (L(e, e.insideOriginalTextPosition, n), null == e.textFill && (e.textFill = n.autoColor)), t.dirty(!1), t.z2 += 1
            }
            t.__isHover = !0
        }
    }

    function v(t) {
        if (t.__isHover) {
            var e = t.__normalStl;
            t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1
        }
    }

    function m(t) {
        "group" === t.type ? t.traverse(function (t) {
            "group" !== t.type && g(t)
        }) : g(t)
    }

    function x(t) {
        "group" === t.type ? t.traverse(function (t) {
            "group" !== t.type && v(t)
        }) : v(t)
    }

    function y(t, e) {
        t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && p(t)
    }

    function _(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && m(this)
    }

    function b(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && x(this)
    }

    function w() {
        this.__isEmphasis = !0, m(this)
    }

    function S() {
        this.__isEmphasis = !1, x(this)
    }

    function M(t, e, n) {
        t.__hoverSilentOnTouch = n && n.hoverSilentOnTouch, "group" === t.type ? t.traverse(function (t) {
            "group" !== t.type && y(t, e)
        }) : y(t, e), t.on("mouseover", _).on("mouseout", b), t.on("emphasis", w).on("normal", S)
    }

    function T(t, e, n, i, r, a, o) {
        r = r || mt;
        var s = r.labelFetcher, l = r.labelDataIndex, u = r.labelDimIndex, h = n.getShallow("show"),
            c = i.getShallow("show"),
            d = h || c ? q.retrieve2(s ? s.getFormattedLabel(l, "normal", null, u) : null, r.defaultText) : null,
            f = h ? d : null, p = c ? q.retrieve2(s ? s.getFormattedLabel(l, "emphasis", null, u) : null, d) : null;
        null == f && null == p || (A(t, n, a, r), A(e, i, o, r, !0)), t.text = f, e.text = p
    }

    function A(t, e, n, i, r) {
        return I(t, e, i, r), n && q.extend(t, n), t.host && t.host.dirty && t.host.dirty(!1), t
    }

    function C(t, e, n) {
        var i, r = {isRectText: !0};
        !1 === n ? i = !0 : r.autoColor = n, I(t, e, r, i), t.host && t.host.dirty && t.host.dirty(!1)
    }

    function I(t, e, n, i) {
        if (n = n || mt, n.isRectText) {
            var r = e.getShallow("position") || (i ? null : "inside");
            "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
            var a = e.getShallow("rotate");
            null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = q.retrieve2(e.getShallow("distance"), i ? null : 5)
        }
        var o, s = e.ecModel, l = s && s.option.textStyle, u = D(e);
        if (u) {
            o = {};
            for (var h in u) if (u.hasOwnProperty(h)) {
                var c = e.getModel(["rich", h]);
                k(o[h] = {}, c, l, n, i)
            }
        }
        return t.rich = o, k(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
    }

    function D(t) {
        for (var e; t && t !== t.ecModel;) {
            var n = (t.option || mt).rich;
            if (n) {
                e = e || {};
                for (var i in n) n.hasOwnProperty(i) && (e[i] = 1)
            }
            t = t.parentModel
        }
        return e
    }

    function k(t, e, n, i, r, a) {
        if (n = !r && n || mt, t.textFill = P(e.getShallow("color"), i) || n.color, t.textStroke = P(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = q.retrieve2(e.getShallow("textBorderWidth"), n.textBorderWidth), !r) {
            if (a) {
                var o = t.textPosition;
                t.insideRollback = L(t, o, i), t.insideOriginalTextPosition = o, t.insideRollbackOpt = i
            }
            null == t.textFill && (t.textFill = i.autoColor)
        }
        t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = P(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = P(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
    }

    function P(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
    }

    function L(t, e, n) {
        var i, r = n.useInsideStyle;
        return null == t.textFill && !1 !== r && (!0 === r || n.isRectText && e && "string" == typeof e && e.indexOf("inside") >= 0) && (i = {
            textFill: null,
            textStroke: t.textStroke,
            textStrokeWidth: t.textStrokeWidth
        }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = n.autoColor, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), i
    }

    function O(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth)
    }

    function E(t, e) {
        var n = e || e.getModel("textStyle");
        return [t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" ")
    }

    function z(t, e, n, i, r, a) {
        if ("function" == typeof r && (a = r, r = null), i && i.isAnimationEnabled()) {
            var o = t ? "Update" : "", s = i.getShallow("animationDuration" + o),
                l = i.getShallow("animationEasing" + o), u = i.getShallow("animationDelay" + o);
            "function" == typeof u && (u = u(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof s && (s = s(r)), s > 0 ? e.animateTo(n, s, u || 0, l, a, !!a) : (e.stopAnimation(), e.attr(n), a && a())
        } else e.stopAnimation(), e.attr(n), a && a()
    }

    function R(t, e, n, i, r) {
        z(!0, t, e, n, i, r)
    }

    function B(t, e, n, i, r) {
        z(!1, t, e, n, i, r)
    }

    function N(t, e) {
        for (var n = X.identity([]); t && t !== e;) X.mul(n, t.getLocalTransform(), n), t = t.parent;
        return n
    }

    function V(t, e, n) {
        return e && !q.isArrayLike(e) && (e = K.getLocalTransform(e)), n && (e = X.invert([], e)), U.applyTransform([], t, e)
    }

    function F(t, e, n) {
        var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
            r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
            a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
        return a = V(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
    }

    function H(t, e, n, i) {
        function r(t) {
            var e = {position: U.clone(t.position), rotation: t.rotation};
            return t.shape && (e.shape = q.extend({}, t.shape)), e
        }

        if (t && e) {
            var a = function (t) {
                var e = {};
                return t.traverse(function (t) {
                    !t.isGroup && t.anid && (e[t.anid] = t)
                }), e
            }(t);
            e.traverse(function (t) {
                if (!t.isGroup && t.anid) {
                    var e = a[t.anid];
                    if (e) {
                        var i = r(t);
                        t.attr(r(e)), R(t, i, n, t.dataIndex)
                    }
                }
            })
        }
    }

    function W(t, e) {
        return q.map(t, function (t) {
            var n = t[0];
            n = gt(n, e.x), n = vt(n, e.x + e.width);
            var i = t[1];
            return i = gt(i, e.y), i = vt(i, e.y + e.height), [n, i]
        })
    }

    function G(t, e) {
        var n = gt(t.x, e.x), i = vt(t.x + t.width, e.x + e.width), r = gt(t.y, e.y),
            a = vt(t.y + t.height, e.y + e.height);
        if (i >= n && a >= r) return {x: n, y: r, width: i - n, height: a - r}
    }

    function Z(t, e, n) {
        e = q.extend({rectHover: !0}, e);
        var i = e.style = {strokeNoScale: !0};
        if (n = n || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, t) return 0 === t.indexOf("image://") ? (i.image = t.slice(8), q.defaults(i, n), new Q(e)) : a(t.replace("path://", ""), e, n, "center")
    }

    var q = n(208), Y = n(342), j = n(234), X = n(231), U = n(213), $ = n(215), K = n(274), Q = n(268);
    e.Image = Q;
    var J = n(237);
    e.Group = J;
    var tt = n(327);
    e.Text = tt;
    var et = n(333);
    e.Circle = et;
    var nt = n(339);
    e.Sector = nt;
    var it = n(338);
    e.Ring = it;
    var rt = n(335);
    e.Polygon = rt;
    var at = n(336);
    e.Polyline = at;
    var ot = n(337);
    e.Rect = ot;
    var st = n(334);
    e.Line = st;
    var lt = n(332);
    e.BezierCurve = lt;
    var ut = n(331);
    e.Arc = ut;
    var ht = n(324);
    e.CompoundPath = ht;
    var ct = n(325);
    e.LinearGradient = ct;
    var dt = n(326);
    e.RadialGradient = dt;
    var ft = n(222);
    e.BoundingRect = ft;
    var pt = Math.round, gt = Math.max, vt = Math.min, mt = {}, xt = Y.mergePath;
    e.extendShape = i, e.extendPath = r, e.makePath = a, e.makeImage = o, e.mergePath = xt, e.resizePath = l, e.subPixelOptimizeLine = u, e.subPixelOptimizeRect = h, e.subPixelOptimize = c, e.setHoverStyle = M, e.setLabelStyle = T, e.setTextStyle = A, e.setText = C, e.getFont = E, e.updateProps = R, e.initProps = B, e.getTransform = N, e.applyTransform = V, e.transformDirection = F, e.groupTransition = H, e.clipPointsByRect = W, e.clipRectByRect = G, e.createIcon = Z
}, function (t, e, n) {
    function i(t) {
        return t instanceof Array ? t : null == t ? [] : [t]
    }

    function r(t, e) {
        if (t) for (var n = t.emphasis = t.emphasis || {}, i = t.normal = t.normal || {}, r = 0, a = e.length; r < a; r++) {
            var o = e[r];
            !n.hasOwnProperty(o) && i.hasOwnProperty(o) && (n[o] = i[o])
        }
    }

    function a(t) {
        return t && (null == t.value ? t : t.value)
    }

    function o(t) {
        return M(t) && !(t instanceof Array)
    }

    function s(t, e) {
        var n = e && e.type;
        return "ordinal" === n ? t : ("time" === n && "number" != typeof t && null != t && "-" !== t && (t = +b.parseDate(t)), null == t || "" === t ? NaN : +t)
    }

    function l(t, e) {
        var n = new w;
        return y.mixin(n, A), n.seriesIndex = e.seriesIndex, n.name = e.name || "", n.mainType = e.mainType, n.subType = e.subType, n.getData = function () {
            return t
        }, n
    }

    function u(t, e) {
        e = (e || []).slice();
        var n = y.map(t || [], function (t, e) {
            return {exist: t}
        });
        return S(e, function (t, i) {
            if (M(t)) {
                for (var r = 0; r < n.length; r++) if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void (e[i] = null);
                for (var r = 0; r < n.length; r++) {
                    var a = n[r].exist;
                    if (!(n[r].option || null != a.id && null != t.id || null == t.name || c(t) || c(a) || a.name !== t.name + "")) return n[r].option = t, void (e[i] = null)
                }
            }
        }), S(e, function (t, e) {
            if (M(t)) {
                for (var i = 0; i < n.length; i++) {
                    var r = n[i].exist;
                    if (!n[i].option && !c(r) && null == t.id) {
                        n[i].option = t;
                        break
                    }
                }
                i >= n.length && n.push({option: t})
            }
        }), n
    }

    function h(t) {
        var e = y.createHashMap();
        S(t, function (t, n) {
            var i = t.exist;
            i && e.set(i.id, t)
        }), S(t, function (t, n) {
            var i = t.option;
            y.assert(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {})
        }), S(t, function (t, n) {
            var i = t.exist, r = t.option, a = t.keyInfo;
            if (M(r)) {
                if (a.name = null != r.name ? r.name + "" : i ? i.name : "\0-", i) a.id = i.id; else if (null != r.id) a.id = r.id + ""; else {
                    var o = 0;
                    do {
                        a.id = "\0" + a.name + "\0" + o++
                    } while (e.get(a.id))
                }
                e.set(a.id, t)
            }
        })
    }

    function c(t) {
        return M(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
    }

    function d(t, e) {
        function n(t, e, n) {
            for (var r = 0, a = t.length; r < a; r++) for (var o = t[r].seriesId, s = i(t[r].dataIndex), l = n && n[o], u = 0, h = s.length; u < h; u++) {
                var c = s[u];
                l && l[c] ? l[c] = null : (e[o] || (e[o] = {}))[c] = 1
            }
        }

        function r(t, e) {
            var n = [];
            for (var i in t) if (t.hasOwnProperty(i) && null != t[i]) if (e) n.push(+i); else {
                var a = r(t[i], !0);
                a.length && n.push({seriesId: i, dataIndex: a})
            }
            return n
        }

        var a = {}, o = {};
        return n(t || [], a), n(e || [], o, a), [r(a), r(o)]
    }

    function f(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? y.isArray(e.dataIndex) ? y.map(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? y.isArray(e.name) ? y.map(e.name, function (e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }

    function p(t, e, n) {
        if (y.isString(e)) {
            var i = {};
            i[e + "Index"] = 0, e = i
        }
        var r = n && n.defaultMainType;
        !r || x(e, r + "Index") || x(e, r + "Id") || x(e, r + "Name") || (e[r + "Index"] = 0);
        var a = {};
        return S(e, function (i, r) {
            var i = e[r];
            if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = i);
            var o = r.match(/^(\w+)(Index|Id|Name)$/) || [], s = o[1], l = (o[2] || "").toLowerCase();
            if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && y.indexOf(n.includeMainTypes, s) < 0)) {
                var u = {mainType: s};
                "index" === l && "all" === i || (u[l] = i);
                var h = t.queryComponents(u);
                a[s + "Models"] = h, a[s + "Model"] = h[0]
            }
        }), a
    }

    function g(t, e) {
        var n = t.dimensions;
        e = t.getDimension(e);
        for (var i = 0; i < n.length; i++) {
            var r = t.getDimensionInfo(n[i]);
            if (r.name === e) return r.coordDim
        }
    }

    function v(t, e) {
        var n = [];
        return S(t.dimensions, function (i) {
            var r = t.getDimensionInfo(i);
            r.coordDim === e && (n[r.coordDimIndex] = r.name)
        }), n
    }

    function m(t, e) {
        var n = [];
        return S(t.dimensions, function (i) {
            var r = t.getDimensionInfo(i), a = r.otherDims, o = a[e];
            null != o && !1 !== o && (n[o] = r.name)
        }), n
    }

    function x(t, e) {
        return t && t.hasOwnProperty(e)
    }

    var y = n(208), _ = n(223), b = n(212), w = n(224), S = y.each, M = y.isObject,
        T = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
        A = {
            getDataParams: function (t, e) {
                var n = this.getData(e), i = this.getRawValue(t, e), r = n.getRawIndex(t), a = n.getName(t, !0),
                    o = n.getRawDataItem(t), s = n.getItemVisual(t, "color");
                return {
                    componentType: this.mainType,
                    componentSubType: this.subType,
                    seriesType: "series" === this.mainType ? this.subType : null,
                    seriesIndex: this.seriesIndex,
                    seriesId: this.id,
                    seriesName: this.name,
                    name: a,
                    dataIndex: r,
                    data: o,
                    dataType: e,
                    value: i,
                    color: s,
                    marker: _.getTooltipMarker(s),
                    $vars: ["seriesName", "name", "value"]
                }
            }, getFormattedLabel: function (t, e, n, i, r) {
                e = e || "normal";
                var a = this.getData(n), o = a.getItemModel(t), s = this.getDataParams(t, n);
                null != i && s.value instanceof Array && (s.value = s.value[i]);
                var l = o.get([r || "label", e, "formatter"]);
                return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? _.formatTpl(l, s) : void 0
            }, getRawValue: function (t, e) {
                var n = this.getData(e), i = n.getRawDataItem(t);
                if (null != i) return !M(i) || i instanceof Array ? i : i.value
            }, formatTooltip: y.noop
        }, C = function () {
            var t = 0;
            return function () {
                var e = "\0__ec_prop_getter_" + t++;
                return function (t) {
                    return t[e] || (t[e] = {})
                }
            }
        }();
    e.normalizeToArray = i, e.defaultEmphasis = r, e.TEXT_STYLE_OPTIONS = T, e.getDataItemValue = a, e.isDataItemOption = o, e.converDataValue = s, e.createDataFormatModel = l, e.dataFormatMixin = A, e.mappingToExists = u, e.makeIdAndName = h, e.isIdInner = c, e.compressBatches = d, e.queryDataIndex = f, e.makeGetter = C, e.parseFinder = p, e.dataDimToCoordDim = g, e.coordDimToDataDim = v, e.otherDimToDataDim = m
}, function (t, e, n) {
    function i(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function r(t, e, n, i) {
        var r = e[1] - e[0], a = n[1] - n[0];
        if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
        if (i) if (r > 0) {
            if (t <= e[0]) return n[0];
            if (t >= e[1]) return n[1]
        } else {
            if (t >= e[0]) return n[0];
            if (t <= e[1]) return n[1]
        } else {
            if (t === e[0]) return n[0];
            if (t === e[1]) return n[1]
        }
        return (t - e[0]) / r * a + n[0]
    }

    function a(t, e) {
        switch (t) {
            case"center":
            case"middle":
                t = "50%";
                break;
            case"left":
            case"top":
                t = "0%";
                break;
            case"right":
            case"bottom":
                t = "100%"
        }
        return "string" == typeof t ? i(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
    }

    function o(t, e, n) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
    }

    function s(t) {
        return t.sort(function (t, e) {
            return t - e
        }), t
    }

    function l(t) {
        if (t = +t, isNaN(t)) return 0;
        for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
        return n
    }

    function u(t) {
        var e = t.toString(), n = e.indexOf("e");
        if (n > 0) {
            var i = +e.slice(n + 1);
            return i < 0 ? -i : 0
        }
        var r = e.indexOf(".");
        return r < 0 ? 0 : e.length - 1 - r
    }

    function h(t, e) {
        var n = Math.log, i = Math.LN10, r = Math.floor(n(t[1] - t[0]) / i),
            a = Math.round(n(Math.abs(e[1] - e[0])) / i), o = Math.min(Math.max(-r + a, 0), 20);
        return isFinite(o) ? o : 20
    }

    function c(t, e, n) {
        if (!t[e]) return 0;
        var i = _.reduce(t, function (t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === i) return 0;
        for (var r = Math.pow(10, n), a = _.map(t, function (t) {
            return (isNaN(t) ? 0 : t) / i * r * 100
        }), o = 100 * r, s = _.map(a, function (t) {
            return Math.floor(t)
        }), l = _.reduce(s, function (t, e) {
            return t + e
        }, 0), u = _.map(a, function (t, e) {
            return t - s[e]
        }); l < o;) {
            for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, f = u.length; d < f; ++d) u[d] > h && (h = u[d], c = d);
            ++s[c], u[c] = 0, ++l
        }
        return s[e] / r
    }

    function d(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }

    function f(t) {
        return t > -b && t < b
    }

    function p(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = w.exec(t);
            if (!e) return new Date(NaN);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
        }
        return null == t ? new Date(NaN) : new Date(Math.round(t))
    }

    function g(t) {
        return Math.pow(10, v(t))
    }

    function v(t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }

    function m(t, e) {
        var n, i = v(t), r = Math.pow(10, i), a = t / r;
        return n = e ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(i < 0 ? -i : 0) : t
    }

    function x(t) {
        function e(t, n, i) {
            return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] == (i ? -1 : 1) || !i && e(t, n, 1))
        }

        t.sort(function (t, n) {
            return e(t, n, 0) ? -1 : 1
        });
        for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
            for (var a = t[r].interval, o = t[r].close, s = 0; s < 2; s++) a[s] <= n && (a[s] = n, o[s] = s ? 1 : 1 - i), n = a[s], i = o[s];
            a[0] === a[1] && o[0] * o[1] != 1 ? t.splice(r, 1) : r++
        }
        return t
    }

    function y(t) {
        return t - parseFloat(t) >= 0
    }

    var _ = n(208), b = 1e-4,
        w = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
    e.linearMap = r, e.parsePercent = a, e.round = o, e.asc = s, e.getPrecision = l, e.getPrecisionSafe = u, e.getPixelPrecision = h, e.getPercentWithPrecision = c, e.MAX_SAFE_INTEGER = 9007199254740991, e.remRadian = d, e.isRadianAroundZero = f, e.parseDate = p, e.quantity = g, e.nice = m, e.reformIntervals = x, e.isNumeric = y
}, function (t, e) {
    function n(t, e) {
        var n = new S(2);
        return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
    }

    function i(t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }

    function r(t) {
        var e = new S(2);
        return e[0] = t[0], e[1] = t[1], e
    }

    function a(t, e, n) {
        return t[0] = e, t[1] = n, t
    }

    function o(t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }

    function s(t, e, n, i) {
        return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
    }

    function l(t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }

    function u(t) {
        return Math.sqrt(h(t))
    }

    function h(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function c(t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
    }

    function d(t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
    }

    function f(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function p(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
    }

    function g(t, e) {
        var n = u(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
    }

    function v(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function m(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    function x(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }

    function y(t, e, n, i) {
        return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
    }

    function _(t, e, n) {
        var i = e[0], r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
    }

    function b(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }

    function w(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }

    var S = "undefined" == typeof Float32Array ? Array : Float32Array, M = u, T = h, A = v, C = m;
    e.create = n, e.copy = i, e.clone = r, e.set = a, e.add = o, e.scaleAndAdd = s, e.sub = l, e.len = u, e.length = M, e.lenSquare = h, e.lengthSquare = T, e.mul = c, e.div = d, e.dot = f, e.scale = p, e.normalize = g, e.distance = v, e.dist = A, e.distanceSquare = m, e.distSquare = C, e.negate = x, e.lerp = y, e.applyTransform = _, e.min = b, e.max = w
}, function (t, e, n) {
    (function (t) {
        var n;
        "undefined" != typeof window ? n = window.__DEV__ : void 0 !== t && (n = t.__DEV__), void 0 === n && (n = !0);
        var i = n;
        e.__DEV__ = i
    }).call(e, n(31))
}, function (t, e, n) {
    function i(t) {
        r.call(this, t), this.path = null
    }

    var r = n(246), a = n(208), o = n(238), s = n(319), l = n(269), u = l.prototype.getCanvasPattern, h = Math.abs,
        c = new o(!0);
    i.prototype = {
        constructor: i, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function (t, e) {
            var n = this.style, i = this.path || c, r = n.hasStroke(), a = n.hasFill(), o = n.fill, s = n.stroke,
                l = a && !!o.colorStops, h = r && !!s.colorStops, d = a && !!o.image, f = r && !!s.image;
            if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var p;
                l && (p = p || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, p)), h && (p = p || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, p))
            }
            l ? t.fillStyle = this._fillGradient : d && (t.fillStyle = u.call(o, t)), h ? t.strokeStyle = this._strokeGradient : f && (t.strokeStyle = u.call(s, t));
            var g = n.lineDash, v = n.lineDashOffset, m = !!t.setLineDash, x = this.getGlobalScale();
            i.setScale(x[0], x[1]), this.__dirtyPath || g && !m && r ? (i.beginPath(t), g && !m && (i.setLineDash(g), i.setLineDashOffset(v)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a && i.fill(t), g && m && (t.setLineDash(g), t.lineDashOffset = v), r && i.stroke(t), g && m && t.setLineDash([]), this.restoreTransform(t), null != n.text && this.drawRectText(t, this.getBoundingRect())
        }, buildPath: function (t, e, n) {
        }, createPathProxy: function () {
            this.path = new o
        }, getBoundingRect: function () {
            var t = this._rect, e = this.style, n = !t;
            if (n) {
                var i = this.path;
                i || (i = this.path = new o), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect()
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || n) {
                    r.copy(t);
                    var a = e.lineWidth, s = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), s > 1e-10 && (r.width += a / s, r.height += a / s, r.x -= a / s / 2, r.y -= a / s / 2)
                }
                return r
            }
            return t
        }, contain: function (t, e) {
            var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect(), r = this.style;
            if (t = n[0], e = n[1], i.contain(t, e)) {
                var a = this.path.data;
                if (r.hasStroke()) {
                    var o = r.lineWidth, l = r.strokeNoScale ? this.getLineScale() : 1;
                    if (l > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), s.containStroke(a, o / l, t, e))) return !0
                }
                if (r.hasFill()) return s.contain(a, t, e)
            }
            return !1
        }, dirty: function (t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
        }, animateShape: function (t) {
            return this.animate("shape", t)
        }, attrKV: function (t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : r.prototype.attrKV.call(this, t, e)
        }, setShape: function (t, e) {
            var n = this.shape;
            if (n) {
                if (a.isObject(t)) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]); else n[t] = e;
                this.dirty(!0)
            }
            return this
        }, getLineScale: function () {
            var t = this.transform;
            return t && h(t[0] - 1) > 1e-10 && h(t[3] - 1) > 1e-10 ? Math.sqrt(h(t[0] * t[3] - t[2] * t[1])) : 1
        }
    }, i.extend = function (t) {
        var e = function (e) {
            i.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var n = t.shape;
            if (n) {
                this.shape = this.shape || {};
                var r = this.shape;
                for (var a in n) !r.hasOwnProperty(a) && n.hasOwnProperty(a) && (r[a] = n[a])
            }
            t.init && t.init.call(this, e)
        };
        a.inherits(e, i);
        for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
        return e
    }, a.inherits(i, r);
    var d = i;
    t.exports = d
}, function (t, e) {
    var n = {};
    n = "undefined" == typeof navigator ? {
        browser: {},
        os: {},
        node: !0,
        canvasSupported: !0,
        svgSupported: !0
    } : function (t) {
        var e = {}, n = {}, i = t.match(/Firefox\/([\d.]+)/),
            r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge\/([\d.]+)/),
            o = /micromessenger/i.test(t);
        return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), {
            browser: n,
            os: e,
            node: !1,
            canvasSupported: !!document.createElement("canvas").getContext,
            svgSupported: "undefined" != typeof SVGRect,
            touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
            pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11)
        }
    }(navigator.userAgent);
    var i = n;
    t.exports = i
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(51), r = n.n(i), a = n(50), o = n.n(a), s = n(52), l = n.n(s), u = n(88), h = n(89), c = n(90), d = n(30);
    e.default = {
        data: function () {
            return {baseImgPath: h.b}
        },
        created: function () {
            this.adminInfo.id || this.getAdminData()
        },
        computed: l()({}, n.i(c.b)(["adminInfo"])),
        methods: l()({}, n.i(c.c)(["getAdminData"]), {
            handleCommand: function (t) {
                var e = this;
                return o()(r.a.mark(function i() {
                    var a;
                    return r.a.wrap(function (i) {
                        for (; ;) switch (i.prev = i.next) {
                            case 0:
                                if ("home" != t) {
                                    i.next = 4;
                                    break
                                }
                                e.$router.push("/manage"), i.next = 9;
                                break;
                            case 4:
                                if ("singout" != t) {
                                    i.next = 9;
                                    break
                                }
                                return i.next = 7, n.i(u.b)();
                            case 7:
                                a = i.sent, 1 == a.status ? (e.$message({
                                    type: "success",
                                    message: "退出成功"
                                }), n.i(d.b)("isLogin", !1), e.$router.push("/")) : e.$message({
                                    type: "error",
                                    message: a.message
                                });
                            case 9:
                            case"end":
                                return i.stop()
                        }
                    }, i, e)
                }))()
            }
        })
    }
}, function (t, e, n) {
    e = t.exports = n(188)(!1), e.push([t.i, ".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}", ""])
}, function (t, e, n) {
    var i = n(218);
    "string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);
    n(189)("019239ba", i, !0)
}, function (t, e, n) {
    n(219);
    var i = n(87)(n(217), n(221), null, null);
    t.exports = i.exports
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "header_container"}, [n("el-breadcrumb", {attrs: {separator: "/"}}, [n("el-breadcrumb-item", {attrs: {to: {path: "/manage"}}}, [t._v("首页")]), t._v(" "), t._l(t.$route.meta.crumbsname, function (e, i) {
                return n("el-breadcrumb-item", {key: i}, [t._v(t._s(e))])
            })], 2), t._v(" "), n("el-dropdown", {
                attrs: {"menu-align": "start"},
                on: {command: t.handleCommand}
            }, [n("img", {
                staticClass: "avator",
                attrs: {src: t.baseImgPath + t.adminInfo.avatar}
            }), t._v(" "), n("el-dropdown-menu", {
                attrs: {slot: "dropdown"},
                slot: "dropdown"
            }, [n("el-dropdown-item", {attrs: {command: "home"}}, [t._v("首页")]), t._v(" "), n("el-dropdown-item", {attrs: {command: "singout"}}, [t._v("退出")])], 1)], 1)], 1)
        }, staticRenderFns: []
    }
}, function (t, e, n) {
    function i(t, e, n, i) {
        n < 0 && (t += n, n = -n), i < 0 && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
    }

    var r = n(213), a = n(231), o = r.applyTransform, s = Math.min, l = Math.max;
    i.prototype = {
        constructor: i, union: function (t) {
            var e = s(t.x, this.x), n = s(t.y, this.y);
            this.width = l(t.x + t.width, this.x + this.width) - e, this.height = l(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n
        }, applyTransform: function () {
            var t = [], e = [], n = [], i = [];
            return function (r) {
                if (r) {
                    t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, o(t, t, r), o(e, e, r), o(n, n, r), o(i, i, r), this.x = s(t[0], e[0], n[0], i[0]), this.y = s(t[1], e[1], n[1], i[1]);
                    var a = l(t[0], e[0], n[0], i[0]), u = l(t[1], e[1], n[1], i[1]);
                    this.width = a - this.x, this.height = u - this.y
                }
            }
        }(), calculateTransform: function (t) {
            var e = this, n = t.width / e.width, i = t.height / e.height, r = a.create();
            return a.translate(r, r, [-e.x, -e.y]), a.scale(r, r, [n, i]), a.translate(r, r, [t.x, t.y]), r
        }, intersect: function (t) {
            if (!t) return !1;
            t instanceof i || (t = i.create(t));
            var e = this, n = e.x, r = e.x + e.width, a = e.y, o = e.y + e.height, s = t.x, l = t.x + t.width, u = t.y,
                h = t.y + t.height;
            return !(r < s || l < n || o < u || h < a)
        }, contain: function (t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
        }, clone: function () {
            return new i(this.x, this.y, this.width, this.height)
        }, copy: function (t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
        }, plain: function () {
            return {x: this.x, y: this.y, width: this.width, height: this.height}
        }
    }, i.create = function (t) {
        return new i(t.x, t.y, t.width, t.height)
    };
    var u = i;
    t.exports = u
}, function (t, e, n) {
    function i(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
    }

    function r(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
            return e.toUpperCase()
        }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
    }

    function a(t) {
        return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function o(t, e, n) {
        c.isArray(e) || (e = [e]);
        var i = e.length;
        if (!i) return "";
        for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
            var s = g[o], l = v(s, 0);
            t = t.replace(v(s), n ? a(l) : l)
        }
        for (var u = 0; u < i; u++) for (var h = 0; h < r.length; h++) {
            var l = e[u][r[h]];
            t = t.replace(v(g[h], u), n ? a(l) : l)
        }
        return t
    }

    function s(t, e, n) {
        return c.each(e, function (e, i) {
            t = t.replace("{" + i + "}", n ? a(e) : e)
        }), t
    }

    function l(t, e) {
        return t ? '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + a(t) + ";" + (e || "") + '"></span>' : ""
    }

    function u(t, e, n) {
        "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
        var i = f.parseDate(e), r = n ? "UTC" : "", a = i["get" + r + "FullYear"](), o = i["get" + r + "Month"]() + 1,
            s = i["get" + r + "Date"](), l = i["get" + r + "Hours"](), u = i["get" + r + "Minutes"](),
            h = i["get" + r + "Seconds"]();
        return t = t.replace("MM", m(o)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", m(s)).replace("d", s).replace("hh", m(l)).replace("h", l).replace("mm", m(u)).replace("m", u).replace("ss", m(h)).replace("s", h)
    }

    function h(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }

    var c = n(208), d = n(228), f = n(212), p = c.normalizeCssArray, g = ["a", "b", "c", "d", "e", "f", "g"],
        v = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        }, m = function (t) {
            return t < 10 ? "0" + t : t
        }, x = d.truncateText, y = d.getBoundingRect;
    e.addCommas = i, e.toCamelCase = r, e.normalizeCssArray = p, e.encodeHTML = a, e.formatTpl = o, e.formatTplSimple = s, e.getTooltipMarker = l, e.formatTime = u, e.capitalFirst = h, e.truncateText = x, e.getTextRect = y
}, function (t, e, n) {
    function i(t, e, n) {
        this.parentModel = e, this.ecModel = n, this.option = t
    }

    function r(t, e, n) {
        for (var i = 0; i < e.length && (!e[i] || null != (t = t && "object" == typeof t ? t[e[i]] : null)); i++) ;
        return null == t && n && (t = n.get(e)), t
    }

    function a(t, e) {
        var n = l.get(t, "getParent");
        return n ? n.call(t, e) : t.parentModel
    }

    var o = n(208), s = n(216), l = n(225), u = n(301), h = n(298), c = n(302), d = n(300), f = o.mixin;
    i.prototype = {
        constructor: i, init: null, mergeOption: function (t) {
            o.merge(this.option, t, !0)
        }, get: function (t, e) {
            return null == t ? this.option : r(this.option, this.parsePath(t), !e && a(this, t))
        }, getShallow: function (t, e) {
            var n = this.option, i = null == n ? n : n[t], r = !e && a(this, t);
            return null == i && r && (i = r.getShallow(t)), i
        }, getModel: function (t, e) {
            var n, o = null == t ? this.option : r(this.option, t = this.parsePath(t));
            return e = e || (n = a(this, t)) && n.getModel(t), new i(o, e, this.ecModel)
        }, isEmpty: function () {
            return null == this.option
        }, restoreData: function () {
        }, clone: function () {
            return new (0, this.constructor)(o.clone(this.option))
        }, setReadOnly: function (t) {
            l.setReadOnly(this, t)
        }, parsePath: function (t) {
            return "string" == typeof t && (t = t.split(".")), t
        }, customizeGetParent: function (t) {
            l.set(this, "getParent", t)
        }, isAnimationEnabled: function () {
            if (!s.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }
    }, l.enableClassExtend(i), f(i, u), f(i, h), f(i, c), f(i, d);
    var p = i;
    t.exports = p
}, function (t, e, n) {
    function i(t, e, n) {
        return t[m + e] = n
    }

    function r(t, e) {
        return t[m + e]
    }

    function a(t, e) {
        return t.hasOwnProperty(m + e)
    }

    function o(t) {
        var e = {main: "", sub: ""};
        return t && (t = t.split(g), e.main = t[0] || "", e.sub = t[1] || ""), e
    }

    function s(t) {
        p.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }

    function l(t, e) {
        t.$constructor = t, t.extend = function (t) {
            var e = this, n = function () {
                t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
            };
            return p.extend(n.prototype, t), n.extend = this.extend, n.superCall = u, n.superApply = h, p.inherits(n, this), n.superClass = e, n
        }
    }

    function u(t, e) {
        var n = p.slice(arguments, 2);
        return this.superClass.prototype[e].apply(t, n)
    }

    function h(t, e, n) {
        return this.superClass.prototype[e].apply(t, n)
    }

    function c(t, e) {
        function n(t) {
            var e = i[t.main];
            return e && e[v] || (e = i[t.main] = {}, e[v] = !0), e
        }

        e = e || {};
        var i = {};
        if (t.registerClass = function (t, e) {
            if (e) if (s(e), e = o(e), e.sub) {
                if (e.sub !== v) {
                    var r = n(e);
                    r[e.sub] = t
                }
            } else i[e.main] = t;
            return t
        }, t.getClass = function (t, e, n) {
            var r = i[t];
            if (r && r[v] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
            return r
        }, t.getClassesByMainType = function (t) {
            t = o(t);
            var e = [], n = i[t.main];
            return n && n[v] ? p.each(n, function (t, n) {
                n !== v && e.push(t)
            }) : e.push(n), e
        }, t.hasClass = function (t) {
            return t = o(t), !!i[t.main]
        }, t.getAllClassMainTypes = function () {
            var t = [];
            return p.each(i, function (e, n) {
                t.push(n)
            }), t
        }, t.hasSubTypes = function (t) {
            t = o(t);
            var e = i[t.main];
            return e && e[v]
        }, t.parseClassType = o, e.registerWhenExtend) {
            var r = t.extend;
            r && (t.extend = function (e) {
                var n = r.call(this, e);
                return t.registerClass(n, e.type)
            })
        }
        return t
    }

    function d(t, e) {
    }

    var f = n(214), p = (f.__DEV__, n(208)), g = ".", v = "___EC__COMPONENT__CONTAINER___", m = "\0ec_\0";
    e.set = i, e.get = r, e.hasOwn = a, e.parseClassType = o, e.enableClassExtend = l, e.enableClassManagement = c, e.setReadOnly = d
}, function (t, e, n) {
    function i(t) {
        var e = [];
        return r.each(c.getClassesByMainType(t), function (t) {
            h.apply(e, t.prototype.dependencies || [])
        }), r.map(e, function (t) {
            return s.parseClassType(t).main
        })
    }

    var r = n(208), a = n(224), o = n(243), s = n(225), l = n(227), u = n(299), h = Array.prototype.push, c = a.extend({
        type: "component",
        id: "",
        name: "",
        mainType: "",
        subType: "",
        componentIndex: 0,
        defaultOption: null,
        ecModel: null,
        dependentModels: [],
        uid: null,
        layoutMode: null,
        $constructor: function (t, e, n, i) {
            a.call(this, t, e, n, i), this.uid = o.getUID("componentModel")
        },
        init: function (t, e, n, i) {
            this.mergeDefaultAndTheme(t, n)
        },
        mergeDefaultAndTheme: function (t, e) {
            var n = this.layoutMode, i = n ? l.getLayoutParams(t) : {}, a = e.getTheme();
            r.merge(t, a.get(this.mainType)), r.merge(t, this.getDefaultOption()), n && l.mergeLayoutParam(t, i, n)
        },
        mergeOption: function (t, e) {
            r.merge(this.option, t, !0);
            var n = this.layoutMode;
            n && l.mergeLayoutParam(this.option, t, n)
        },
        optionUpdated: function (t, e) {
        },
        getDefaultOption: function () {
            if (!s.hasOwn(this, "__defaultOption")) {
                for (var t = [], e = this.constructor; e;) {
                    var n = e.prototype.defaultOption;
                    n && t.push(n), e = e.superClass
                }
                for (var i = {}, a = t.length - 1; a >= 0; a--) i = r.merge(i, t[a], !0);
                s.set(this, "__defaultOption", i)
            }
            return s.get(this, "__defaultOption")
        },
        getReferringComponents: function (t) {
            return this.ecModel.queryComponents({
                mainType: t,
                index: this.get(t + "Index", !0),
                id: this.get(t + "Id", !0)
            })
        }
    });
    s.enableClassManagement(c, {registerWhenExtend: !0}), o.enableSubTypeDefaulter(c), o.enableTopologicalTravel(c, i), r.mixin(c, u);
    var d = c;
    t.exports = d
}, function (t, e, n) {
    function i(t, e, n, i, r) {
        var a = 0, o = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function (l, u) {
            var h, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(u + 1), g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var v = f.width + (g ? -g.x + f.x : 0);
                h = a + v, h > i || l.newline ? (a = 0, h = v, o += s + n, s = f.height) : s = Math.max(s, f.height)
            } else {
                var m = f.height + (g ? -g.y + f.y : 0);
                c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = f.width) : s = Math.max(s, f.width)
            }
            l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = h + n : o = c + n)
        })
    }

    function r(t, e, n) {
        var i = e.width, r = e.height, a = p(t.x, i), o = p(t.y, r), s = p(t.x2, i), l = p(t.y2, r);
        return (isNaN(a) || isNaN(parseFloat(t.x))) && (a = 0), (isNaN(s) || isNaN(parseFloat(t.x2))) && (s = i), (isNaN(o) || isNaN(parseFloat(t.y))) && (o = 0), (isNaN(l) || isNaN(parseFloat(t.y2))) && (l = r), n = g.normalizeCssArray(n || 0), {
            width: Math.max(s - a - n[1] - n[3], 0),
            height: Math.max(l - o - n[0] - n[2], 0)
        }
    }

    function a(t, e, n) {
        n = g.normalizeCssArray(n || 0);
        var i = e.width, r = e.height, a = p(t.left, i), o = p(t.top, r), s = p(t.right, i), l = p(t.bottom, r),
            u = p(t.width, i), h = p(t.height, r), c = n[2] + n[0], f = n[1] + n[3], v = t.aspect;
        switch (isNaN(u) && (u = i - s - f - a), isNaN(h) && (h = r - l - c - o), null != v && (isNaN(u) && isNaN(h) && (v > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = v * h), isNaN(h) && (h = u / v)), isNaN(a) && (a = i - s - u - f), isNaN(o) && (o = r - l - h - c), t.left || t.right) {
            case"center":
                a = i / 2 - u / 2 - n[3];
                break;
            case"right":
                a = i - u - f
        }
        switch (t.top || t.bottom) {
            case"middle":
            case"center":
                o = r / 2 - h / 2 - n[0];
                break;
            case"bottom":
                o = r - h - c
        }
        a = a || 0, o = o || 0, isNaN(u) && (u = i - f - a - (s || 0)), isNaN(h) && (h = r - c - o - (l || 0));
        var m = new d(a + n[3], o + n[0], u, h);
        return m.margin = n, m
    }

    function o(t, e, n, i, r) {
        var o = !r || !r.hv || r.hv[0], s = !r || !r.hv || r.hv[1], l = r && r.boundingMode || "all";
        if (o || s) {
            var u;
            if ("raw" === l) u = "group" === t.type ? new d(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect(); else if (u = t.getBoundingRect(), t.needLocalTransform()) {
                var h = t.getLocalTransform();
                u = u.clone(), u.applyTransform(h)
            }
            e = a(c.defaults({width: u.width, height: u.height}, e), n, i);
            var f = t.position, p = o ? e.x - u.x : 0, g = s ? e.y - u.y : 0;
            t.attr("position", "raw" === l ? [p, g] : [f[0] + p, f[1] + g])
        }
    }

    function s(t, e) {
        return null != t[x[e][0]] || null != t[x[e][1]] && null != t[x[e][2]]
    }

    function l(t, e, n) {
        function i(n, i) {
            var o = {}, l = 0, u = {}, h = 0;
            if (v(n, function (e) {
                u[e] = t[e]
            }), v(n, function (t) {
                r(e, t) && (o[t] = u[t] = e[t]), a(o, t) && l++, a(u, t) && h++
            }), s[i]) return a(e, n[1]) ? u[n[2]] = null : a(e, n[2]) && (u[n[1]] = null), u;
            if (2 !== h && l) {
                if (l >= 2) return o;
                for (var c = 0; c < n.length; c++) {
                    var d = n[c];
                    if (!r(o, d) && r(t, d)) {
                        o[d] = t[d];
                        break
                    }
                }
                return o
            }
            return u
        }

        function r(t, e) {
            return t.hasOwnProperty(e)
        }

        function a(t, e) {
            return null != t[e] && "auto" !== t[e]
        }

        function o(t, e, n) {
            v(t, function (t) {
                e[t] = n[t]
            })
        }

        !c.isObject(n) && (n = {});
        var s = n.ignoreSize;
        !c.isArray(s) && (s = [s, s]);
        var l = i(x[0], 0), u = i(x[1], 1);
        o(x[0], t, l), o(x[1], t, u)
    }

    function u(t) {
        return h({}, t)
    }

    function h(t, e) {
        return e && t && v(m, function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t
    }

    var c = n(208), d = n(222), f = n(212), p = f.parsePercent, g = n(223), v = c.each,
        m = ["left", "right", "top", "bottom", "width", "height"],
        x = [["width", "left", "right"], ["height", "top", "bottom"]], y = i, _ = c.curry(i, "vertical"),
        b = c.curry(i, "horizontal");
    e.LOCATION_PARAMS = m, e.HV_NAMES = x, e.box = y, e.vbox = _, e.hbox = b, e.getAvailableSize = r, e.getLayoutRect = a, e.positionElement = o, e.sizeCalculable = s, e.mergeLayoutParam = l, e.getLayoutParams = u, e.copyLayoutParams = h
}, function (t, e, n) {
    function i(t, e) {
        O[t] = e
    }

    function r(t, e) {
        e = e || L;
        var n = t + ":" + e;
        if (I[n]) return I[n];
        for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; a < o; a++) r = Math.max(v(i[a], e).width, r);
        return D > k && (D = 0, I = {}), D++, I[n] = r, r
    }

    function a(t, e, n, i, r, a, l) {
        return a ? s(t, e, n, i, r, a, l) : o(t, e, n, i, r, l)
    }

    function o(t, e, n, i, a, o) {
        var s = m(t, e, a, o), h = r(t, e);
        a && (h += a[1] + a[3]);
        var c = s.outerHeight, d = l(0, h, n), f = u(0, c, i), p = new b(d, f, h, c);
        return p.lineHeight = s.lineHeight, p
    }

    function s(t, e, n, i, r, a, o) {
        var s = x(t, {rich: a, truncate: o, font: e, textAlign: n, textPadding: r}), h = s.outerWidth,
            c = s.outerHeight, d = l(0, h, n), f = u(0, c, i);
        return new b(d, f, h, c)
    }

    function l(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
    }

    function u(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
    }

    function h(t, e, n) {
        var i = e.x, r = e.y, a = e.height, o = e.width, s = a / 2, l = "left", u = "top";
        switch (t) {
            case"left":
                i -= n, r += s, l = "right", u = "middle";
                break;
            case"right":
                i += n + o, r += s, u = "middle";
                break;
            case"top":
                i += o / 2, r -= n, l = "center", u = "bottom";
                break;
            case"bottom":
                i += o / 2, r += a + n, l = "center";
                break;
            case"inside":
                i += o / 2, r += s, l = "center", u = "middle";
                break;
            case"insideLeft":
                i += n, r += s, u = "middle";
                break;
            case"insideRight":
                i += o - n, r += s, l = "right", u = "middle";
                break;
            case"insideTop":
                i += o / 2, r += n, l = "center";
                break;
            case"insideBottom":
                i += o / 2, r += a - n, l = "center", u = "bottom";
                break;
            case"insideTopLeft":
                i += n, r += n;
                break;
            case"insideTopRight":
                i += o - n, r += n, l = "right";
                break;
            case"insideBottomLeft":
                i += n, r += a - n, u = "bottom";
                break;
            case"insideBottomRight":
                i += o - n, r += a - n, l = "right", u = "bottom"
        }
        return {x: i, y: r, textAlign: l, textVerticalAlign: u}
    }

    function c(t, e, n, i, r) {
        if (!e) return "";
        var a = (t + "").split("\n");
        r = d(e, n, i, r);
        for (var o = 0, s = a.length; o < s; o++) a[o] = f(a[o], r);
        return a.join("\n")
    }

    function d(t, e, n, i) {
        i = T({}, i), i.font = e;
        var n = A(n, "...");
        i.maxIterations = A(i.maxIterations, 2);
        var a = i.minChar = A(i.minChar, 0);
        i.cnCharWidth = r("国", e);
        var o = i.ascCharWidth = r("a", e);
        i.placeholder = A(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; l < a && s >= o; l++) s -= o;
        var u = r(n);
        return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = t, i
    }

    function f(t, e) {
        var n = e.containerWidth, i = e.font, a = e.contentWidth;
        if (!n) return "";
        var o = r(t, i);
        if (o <= n) return t;
        for (var s = 0; ; s++) {
            if (o <= a || s >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var l = 0 === s ? p(t, a, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
            t = t.substr(0, l), o = r(t, i)
        }
        return "" === t && (t = e.placeholder), t
    }

    function p(t, e, n, i) {
        for (var r = 0, a = 0, o = t.length; a < o && r < e; a++) {
            var s = t.charCodeAt(a);
            r += 0 <= s && s <= 127 ? n : i
        }
        return a
    }

    function g(t) {
        return r("国", t)
    }

    function v(t, e) {
        return O.measureText(t, e)
    }

    function m(t, e, n, i) {
        null != t && (t += "");
        var r = g(e), a = t ? t.split("\n") : [], o = a.length * r, s = o;
        if (n && (s += n[0] + n[2]), t && i) {
            var l = i.outerHeight, u = i.outerWidth;
            if (null != l && s > l) t = "", a = []; else if (null != u) for (var h = d(u - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
                minChar: i.minChar,
                placeholder: i.placeholder
            }), c = 0, p = a.length; c < p; c++) a[c] = f(a[c], h)
        }
        return {lines: a, height: o, outerHeight: s, lineHeight: r}
    }

    function x(t, e) {
        var n = {lines: [], width: 0, height: 0};
        if (null != t && (t += ""), !t) return n;
        for (var i, a = P.lastIndex = 0; null != (i = P.exec(t));) {
            var o = i.index;
            o > a && y(n, t.substring(a, o)), y(n, i[2], i[1]), a = P.lastIndex
        }
        a < t.length && y(n, t.substring(a, t.length));
        var s = n.lines, l = 0, u = 0, h = [], d = e.textPadding, f = e.truncate, p = f && f.outerWidth,
            v = f && f.outerHeight;
        d && (null != p && (p -= d[1] + d[3]), null != v && (v -= d[0] + d[2]));
        for (var m = 0; m < s.length; m++) {
            for (var x = s[m], _ = 0, b = 0, S = 0; S < x.tokens.length; S++) {
                var M = x.tokens[S], T = M.styleName && e.rich[M.styleName] || {}, I = M.textPadding = T.textPadding,
                    D = M.font = T.font || e.font, k = M.textHeight = A(T.textHeight, g(D));
                if (I && (k += I[0] + I[2]), M.height = k, M.lineHeight = C(T.textLineHeight, e.textLineHeight, k), M.textAlign = T && T.textAlign || e.textAlign, M.textVerticalAlign = T && T.textVerticalAlign || "middle", null != v && l + M.lineHeight > v) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                M.textWidth = r(M.text, D);
                var L = T.textWidth, O = null == L || "auto" === L;
                if ("string" == typeof L && "%" === L.charAt(L.length - 1)) M.percentWidth = L, h.push(M), L = 0; else {
                    if (O) {
                        L = M.textWidth;
                        var E = T.textBackgroundColor, z = E && E.image;
                        z && (z = w.findExistImage(z), w.isImageReady(z) && (L = Math.max(L, z.width * k / z.height)))
                    }
                    var R = I ? I[1] + I[3] : 0;
                    L += R;
                    var B = null != p ? p - b : null;
                    null != B && B < L && (!O || B < R ? (M.text = "", M.textWidth = L = 0) : (M.text = c(M.text, B - R, D, f.ellipsis, {minChar: f.minChar}), M.textWidth = r(M.text, D), L = M.textWidth + R))
                }
                b += M.width = L, T && (_ = Math.max(_, M.lineHeight))
            }
            x.width = b, x.lineHeight = _, l += _, u = Math.max(u, b)
        }
        n.outerWidth = n.width = A(e.textWidth, u), n.outerHeight = n.height = A(e.textHeight, l), d && (n.outerWidth += d[1] + d[3], n.outerHeight += d[0] + d[2]);
        for (var m = 0; m < h.length; m++) {
            var M = h[m], N = M.percentWidth;
            M.width = parseInt(N, 10) / 100 * u
        }
        return n
    }

    function y(t, e, n) {
        for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o], l = {styleName: n, text: s, isLineHolder: !s && !i};
            if (o) a.push({tokens: [l]}); else {
                var u = (a[a.length - 1] || (a[0] = {tokens: []})).tokens, h = u.length;
                1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l)
            }
        }
    }

    function _(t) {
        return (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ") || t.textFont || t.font
    }

    var b = n(222), w = n(248), S = n(208), M = S.getContext, T = S.extend, A = S.retrieve2, C = S.retrieve3, I = {},
        D = 0, k = 5e3, P = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, L = "12px sans-serif", O = {};
    O.measureText = function (t, e) {
        var n = M();
        return n.font = e || L, n.measureText(t)
    }, e.DEFAULT_FONT = L, e.$override = i, e.getWidth = r, e.getBoundingRect = a, e.adjustTextX = l, e.adjustTextY = u, e.adjustTextPositionOnRect = h, e.truncateText = c, e.getLineHeight = g, e.measureText = v, e.parsePlainText = m, e.parseRichText = x, e.makeFont = _
}, function (t, e, n) {
    function i(t) {
        return t > -w && t < w
    }

    function r(t) {
        return t > w || t < -w
    }

    function a(t, e, n, i, r) {
        var a = 1 - r;
        return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n)
    }

    function o(t, e, n, i, r) {
        var a = 1 - r;
        return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
    }

    function s(t, e, n, r, a, o) {
        var s = r + 3 * (e - n) - t, l = 3 * (n - 2 * e + t), u = 3 * (e - t), h = t - a, c = l * l - 3 * s * u,
            d = l * u - 9 * s * h, f = u * u - 3 * l * h, p = 0;
        if (i(c) && i(d)) if (i(l)) o[0] = 0; else {
            var g = -u / l;
            g >= 0 && g <= 1 && (o[p++] = g)
        } else {
            var v = d * d - 4 * c * f;
            if (i(v)) {
                var m = d / c, g = -l / s + m, x = -m / 2;
                g >= 0 && g <= 1 && (o[p++] = g), x >= 0 && x <= 1 && (o[p++] = x)
            } else if (v > 0) {
                var y = b(v), w = c * l + 1.5 * s * (-d + y), S = c * l + 1.5 * s * (-d - y);
                w = w < 0 ? -_(-w, T) : _(w, T), S = S < 0 ? -_(-S, T) : _(S, T);
                var g = (-l - (w + S)) / (3 * s);
                g >= 0 && g <= 1 && (o[p++] = g)
            } else {
                var A = (2 * c * l - 3 * s * d) / (2 * b(c * c * c)), C = Math.acos(A) / 3, I = b(c), D = Math.cos(C),
                    g = (-l - 2 * I * D) / (3 * s), x = (-l + I * (D + M * Math.sin(C))) / (3 * s),
                    k = (-l + I * (D - M * Math.sin(C))) / (3 * s);
                g >= 0 && g <= 1 && (o[p++] = g), x >= 0 && x <= 1 && (o[p++] = x), k >= 0 && k <= 1 && (o[p++] = k)
            }
        }
        return p
    }

    function l(t, e, n, a, o) {
        var s = 6 * n - 12 * e + 6 * t, l = 9 * e + 3 * a - 3 * t - 9 * n, u = 3 * e - 3 * t, h = 0;
        if (i(l)) {
            if (r(s)) {
                var c = -u / s;
                c >= 0 && c <= 1 && (o[h++] = c)
            }
        } else {
            var d = s * s - 4 * l * u;
            if (i(d)) o[0] = -s / (2 * l); else if (d > 0) {
                var f = b(d), c = (-s + f) / (2 * l), p = (-s - f) / (2 * l);
                c >= 0 && c <= 1 && (o[h++] = c), p >= 0 && p <= 1 && (o[h++] = p)
            }
        }
        return h
    }

    function u(t, e, n, i, r, a) {
        var o = (e - t) * r + t, s = (n - e) * r + e, l = (i - n) * r + n, u = (s - o) * r + o, h = (l - s) * r + s,
            c = (h - u) * r + u;
        a[0] = t, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = h, a[6] = l, a[7] = i
    }

    function h(t, e, n, i, r, o, s, l, u, h, c) {
        var d, f, p, g, v, m = .005, x = 1 / 0;
        A[0] = u, A[1] = h;
        for (var _ = 0; _ < 1; _ += .05) C[0] = a(t, n, r, s, _), C[1] = a(e, i, o, l, _), (g = y(A, C)) < x && (d = _, x = g);
        x = 1 / 0;
        for (var w = 0; w < 32 && !(m < S); w++) f = d - m, p = d + m, C[0] = a(t, n, r, s, f), C[1] = a(e, i, o, l, f), g = y(C, A), f >= 0 && g < x ? (d = f, x = g) : (I[0] = a(t, n, r, s, p), I[1] = a(e, i, o, l, p), v = y(I, A), p <= 1 && v < x ? (d = p, x = v) : m *= .5);
        return c && (c[0] = a(t, n, r, s, d), c[1] = a(e, i, o, l, d)), b(x)
    }

    function c(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n
    }

    function d(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e))
    }

    function f(t, e, n, a, o) {
        var s = t - 2 * e + n, l = 2 * (e - t), u = t - a, h = 0;
        if (i(s)) {
            if (r(l)) {
                var c = -u / l;
                c >= 0 && c <= 1 && (o[h++] = c)
            }
        } else {
            var d = l * l - 4 * s * u;
            if (i(d)) {
                var c = -l / (2 * s);
                c >= 0 && c <= 1 && (o[h++] = c)
            } else if (d > 0) {
                var f = b(d), c = (-l + f) / (2 * s), p = (-l - f) / (2 * s);
                c >= 0 && c <= 1 && (o[h++] = c), p >= 0 && p <= 1 && (o[h++] = p)
            }
        }
        return h
    }

    function p(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? .5 : (t - e) / i
    }

    function g(t, e, n, i, r) {
        var a = (e - t) * i + t, o = (n - e) * i + e, s = (o - a) * i + a;
        r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n
    }

    function v(t, e, n, i, r, a, o, s, l) {
        var u, h = .005, d = 1 / 0;
        A[0] = o, A[1] = s;
        for (var f = 0; f < 1; f += .05) {
            C[0] = c(t, n, r, f), C[1] = c(e, i, a, f);
            var p = y(A, C);
            p < d && (u = f, d = p)
        }
        d = 1 / 0;
        for (var g = 0; g < 32 && !(h < S); g++) {
            var v = u - h, m = u + h;
            C[0] = c(t, n, r, v), C[1] = c(e, i, a, v);
            var p = y(C, A);
            if (v >= 0 && p < d) u = v, d = p; else {
                I[0] = c(t, n, r, m), I[1] = c(e, i, a, m);
                var x = y(I, A);
                m <= 1 && x < d ? (u = m, d = x) : h *= .5
            }
        }
        return l && (l[0] = c(t, n, r, u), l[1] = c(e, i, a, u)), b(d)
    }

    var m = n(213), x = m.create, y = m.distSquare, _ = Math.pow, b = Math.sqrt, w = 1e-8, S = 1e-4, M = b(3),
        T = 1 / 3, A = x(), C = x(), I = x();
    e.cubicAt = a, e.cubicDerivativeAt = o, e.cubicRootAt = s, e.cubicExtrema = l, e.cubicSubdivide = u, e.cubicProjectPoint = h, e.quadraticAt = c, e.quadraticDerivativeAt = d, e.quadraticRootAt = f, e.quadraticExtremum = p, e.quadraticSubdivide = g, e.quadraticProjectPoint = v
}, function (t, e) {
    var n = Array.prototype.slice, i = function () {
        this._$handlers = {}
    };
    i.prototype = {
        constructor: i, one: function (t, e, n) {
            var i = this._$handlers;
            if (!e || !t) return this;
            i[t] || (i[t] = []);
            for (var r = 0; r < i[t].length; r++) if (i[t][r].h === e) return this;
            return i[t].push({h: e, one: !0, ctx: n || this}), this
        }, on: function (t, e, n) {
            var i = this._$handlers;
            if (!e || !t) return this;
            i[t] || (i[t] = []);
            for (var r = 0; r < i[t].length; r++) if (i[t][r].h === e) return this;
            return i[t].push({h: e, one: !1, ctx: n || this}), this
        }, isSilent: function (t) {
            var e = this._$handlers;
            return e[t] && e[t].length
        }, off: function (t, e) {
            var n = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (n[t]) {
                    for (var i = [], r = 0, a = n[t].length; r < a; r++) n[t][r].h != e && i.push(n[t][r]);
                    n[t] = i
                }
                n[t] && 0 === n[t].length && delete n[t]
            } else delete n[t];
            return this
        }, trigger: function (t) {
            if (this._$handlers[t]) {
                var e = arguments, i = e.length;
                i > 3 && (e = n.call(e, 1));
                for (var r = this._$handlers[t], a = r.length, o = 0; o < a;) {
                    switch (i) {
                        case 1:
                            r[o].h.call(r[o].ctx);
                            break;
                        case 2:
                            r[o].h.call(r[o].ctx, e[1]);
                            break;
                        case 3:
                            r[o].h.call(r[o].ctx, e[1], e[2]);
                            break;
                        default:
                            r[o].h.apply(r[o].ctx, e)
                    }
                    r[o].one ? (r.splice(o, 1), a--) : o++
                }
            }
            return this
        }, triggerWithContext: function (t) {
            if (this._$handlers[t]) {
                var e = arguments, i = e.length;
                i > 4 && (e = n.call(e, 1, e.length - 1));
                for (var r = e[e.length - 1], a = this._$handlers[t], o = a.length, s = 0; s < o;) {
                    switch (i) {
                        case 1:
                            a[s].h.call(r);
                            break;
                        case 2:
                            a[s].h.call(r, e[1]);
                            break;
                        case 3:
                            a[s].h.call(r, e[1], e[2]);
                            break;
                        default:
                            a[s].h.apply(r, e)
                    }
                    a[s].one ? (a.splice(s, 1), o--) : s++
                }
            }
            return this
        }
    };
    var r = i;
    t.exports = r
}, function (t, e) {
    function n() {
        var t = new h(6);
        return i(t), t
    }

    function i(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function r(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }

    function a(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1], r = e[1] * n[0] + e[3] * n[1], a = e[0] * n[2] + e[2] * n[3],
            o = e[1] * n[2] + e[3] * n[3], s = e[0] * n[4] + e[2] * n[5] + e[4], l = e[1] * n[4] + e[3] * n[5] + e[5];
        return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
    }

    function o(t, e, n) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
    }

    function s(t, e, n) {
        var i = e[0], r = e[2], a = e[4], o = e[1], s = e[3], l = e[5], u = Math.sin(n), h = Math.cos(n);
        return t[0] = i * h + o * u, t[1] = -i * u + o * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * a + u * l, t[5] = h * l - u * a, t
    }

    function l(t, e, n) {
        var i = n[0], r = n[1];
        return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
    }

    function u(t, e) {
        var n = e[0], i = e[2], r = e[4], a = e[1], o = e[3], s = e[5], l = n * o - a * i;
        return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null
    }

    var h = "undefined" == typeof Float32Array ? Array : Float32Array;
    e.create = n, e.identity = i, e.copy = r, e.mul = a, e.translate = o, e.rotate = s, e.scale = l, e.invert = u
}, function (t, e, n) {
    function i(t, e) {
        var n, i, r, a = t.type, o = e.getMin(), s = e.getMax(), l = null != o, u = null != s, h = t.getExtent();
        return "ordinal" === a ? n = (e.get("data") || []).length : (i = e.get("boundaryGap"), c.isArray(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = v.parsePercent(i[0], 1), i[1] = v.parsePercent(i[1], 1), r = h[1] - h[0] || Math.abs(h[0])), null == o && (o = "ordinal" === a ? n ? 0 : NaN : h[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : NaN : h[1] + i[1] * r), "dataMin" === o ? o = h[0] : "function" == typeof o && (o = o({
            min: h[0],
            max: h[1]
        })), "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({
            min: h[0],
            max: h[1]
        })), (null == o || !isFinite(o)) && (o = NaN), (null == s || !isFinite(s)) && (s = NaN), t.setBlank(c.eqNaN(o) || c.eqNaN(s)), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), o < 0 && s < 0 && !u && (s = 0)), [o, s]
    }

    function r(t, e) {
        var n = i(t, e), r = null != e.getMin(), a = null != e.getMax(), o = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var s = t.type;
        t.setExtent(n[0], n[1]), t.niceExtent({
            splitNumber: o,
            fixMin: r,
            fixMax: a,
            minInterval: "interval" === s || "time" === s ? e.get("minInterval") : null,
            maxInterval: "interval" === s || "time" === s ? e.get("maxInterval") : null
        });
        var l = e.get("interval");
        null != l && t.setInterval && t.setInterval(l)
    }

    function a(t, e) {
        if (e = e || t.get("type")) switch (e) {
            case"category":
                return new f(t.getCategories(), [1 / 0, -1 / 0]);
            case"value":
                return new p;
            default:
                return (g.getClass(e) || p).create(t)
        }
    }

    function o(t) {
        var e = t.scale.getExtent(), n = e[0], i = e[1];
        return !(n > 0 && i > 0 || n < 0 && i < 0)
    }

    function s(t, e, n, i, r) {
        var a, o = 0, s = 0, l = (i - r) / 180 * Math.PI, u = 1;
        e.length > 40 && (u = Math.floor(e.length / 40));
        for (var h = 0; h < t.length; h += u) {
            var c = t[h], f = d.getBoundingRect(e[h], n, "center", "top");
            f.x += c * Math.cos(l), f.y += c * Math.sin(l), f.width *= 1.3, f.height *= 1.3, a ? a.intersect(f) ? (s++, o = Math.max(o, s)) : (a.union(f), s = 0) : a = f.clone()
        }
        return 0 === o && u > 1 ? u : (o + 1) * u - 1
    }

    function l(t, e) {
        var n = t.scale, i = n.getTicksLabels(), r = n.getTicks();
        return "string" == typeof e ? (e = function (t) {
            return function (e) {
                return t.replace("{value}", null != e ? e : "")
            }
        }(e), c.map(i, e)) : "function" == typeof e ? c.map(r, function (n, i) {
            return e(u(t, n), i)
        }, this) : i
    }

    function u(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
    }

    var h = n(214), c = (h.__DEV__, n(208)), d = n(228), f = n(306), p = n(242), g = n(235), v = n(212);
    n(307), n(305), e.getScaleExtent = i, e.niceScaleExtent = r, e.createScaleByModel = a, e.ifAxisCrossZero = o, e.getAxisLabelInterval = s, e.getFormattedLabels = l, e.getAxisRawValue = u
}, function (t, e, n) {
    function i(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {left: 0, top: 0}
    }

    function r(t, e, n, i) {
        return n = n || {}, i || !c.canvasSupported ? a(t, e, n) : c.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : a(t, e, n), n
    }

    function a(t, e, n) {
        var r = i(t);
        n.zrX = e.clientX - r.left, n.zrY = e.clientY - r.top
    }

    function o(t, e, n) {
        if (e = e || window.event, null != e.zrX) return e;
        var i = e.type;
        if (i && i.indexOf("touch") >= 0) {
            var a = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
            a && r(t, a, e, n)
        } else r(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var o = e.button;
        return null == e.which && void 0 !== o && f.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
    }

    function s(t, e, n) {
        d ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
    }

    function l(t, e, n) {
        d ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
    }

    function u(t) {
        return t.which > 1
    }

    var h = n(230);
    e.Dispatcher = h;
    var c = n(216), d = "undefined" != typeof window && !!window.addEventListener,
        f = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, p = d ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        };
    e.clientToLocal = r, e.normalizeEvent = o, e.addEventListener = s, e.removeEventListener = l, e.stop = p, e.notLeftMouse = u
}, function (t, e, n) {
    function i(t) {
        return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t
    }

    function r(t) {
        return t = Math.round(t), t < 0 ? 0 : t > 360 ? 360 : t
    }

    function a(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t
    }

    function o(t) {
        return i(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
    }

    function s(t) {
        return a(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
    }

    function l(t, e, n) {
        return n < 0 ? n += 1 : n > 1 && (n -= 1), 6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }

    function u(t, e, n) {
        return t + (e - t) * n
    }

    function h(t, e, n, i, r) {
        return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
    }

    function c(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function d(t, e) {
        A && c(A, e), A = T.put(t, A || e.slice())
    }

    function f(t, e) {
        if (t) {
            e = e || [];
            var n = T.get(t);
            if (n) return c(e, n);
            t += "";
            var i = t.replace(/ /g, "").toLowerCase();
            if (i in M) return c(e, M[i]), d(t, e), e;
            if ("#" !== i.charAt(0)) {
                var r = i.indexOf("("), a = i.indexOf(")");
                if (-1 !== r && a + 1 === i.length) {
                    var l = i.substr(0, r), u = i.substr(r + 1, a - (r + 1)).split(","), f = 1;
                    switch (l) {
                        case"rgba":
                            if (4 !== u.length) return void h(e, 0, 0, 0, 1);
                            f = s(u.pop());
                        case"rgb":
                            return 3 !== u.length ? void h(e, 0, 0, 0, 1) : (h(e, o(u[0]), o(u[1]), o(u[2]), f), d(t, e), e);
                        case"hsla":
                            return 4 !== u.length ? void h(e, 0, 0, 0, 1) : (u[3] = s(u[3]), p(u, e), d(t, e), e);
                        case"hsl":
                            return 3 !== u.length ? void h(e, 0, 0, 0, 1) : (p(u, e), d(t, e), e);
                        default:
                            return
                    }
                }
                h(e, 0, 0, 0, 1)
            } else {
                if (4 === i.length) {
                    var g = parseInt(i.substr(1), 16);
                    return g >= 0 && g <= 4095 ? (h(e, (3840 & g) >> 4 | (3840 & g) >> 8, 240 & g | (240 & g) >> 4, 15 & g | (15 & g) << 4, 1), d(t, e), e) : void h(e, 0, 0, 0, 1)
                }
                if (7 === i.length) {
                    var g = parseInt(i.substr(1), 16);
                    return g >= 0 && g <= 16777215 ? (h(e, (16711680 & g) >> 16, (65280 & g) >> 8, 255 & g, 1), d(t, e), e) : void h(e, 0, 0, 0, 1)
                }
            }
        }
    }

    function p(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360, r = s(t[1]), a = s(t[2]),
            o = a <= .5 ? a * (r + 1) : a + r - a * r, u = 2 * a - o;
        return e = e || [], h(e, i(255 * l(u, o, n + 1 / 3)), i(255 * l(u, o, n)), i(255 * l(u, o, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function g(t) {
        if (t) {
            var e, n, i = t[0] / 255, r = t[1] / 255, a = t[2] / 255, o = Math.min(i, r, a), s = Math.max(i, r, a),
                l = s - o, u = (s + o) / 2;
            if (0 === l) e = 0, n = 0; else {
                n = u < .5 ? l / (s + o) : l / (2 - s - o);
                var h = ((s - i) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, d = ((s - a) / 6 + l / 2) / l;
                i === s ? e = d - c : r === s ? e = 1 / 3 + h - d : a === s && (e = 2 / 3 + c - h), e < 0 && (e += 1), e > 1 && (e -= 1)
            }
            var f = [360 * e, n, u];
            return null != t[3] && f.push(t[3]), f
        }
    }

    function v(t, e) {
        var n = f(t);
        if (n) {
            for (var i = 0; i < 3; i++) n[i] = e < 0 ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0;
            return w(n, 4 === n.length ? "rgba" : "rgb")
        }
    }

    function m(t) {
        var e = f(t);
        if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
    }

    function x(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
            n = n || [];
            var r = t * (e.length - 1), o = Math.floor(r), s = Math.ceil(r), l = e[o], h = e[s], c = r - o;
            return n[0] = i(u(l[0], h[0], c)), n[1] = i(u(l[1], h[1], c)), n[2] = i(u(l[2], h[2], c)), n[3] = a(u(l[3], h[3], c)), n
        }
    }

    function y(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
            var r = t * (e.length - 1), o = Math.floor(r), s = Math.ceil(r), l = f(e[o]), h = f(e[s]), c = r - o,
                d = w([i(u(l[0], h[0], c)), i(u(l[1], h[1], c)), i(u(l[2], h[2], c)), a(u(l[3], h[3], c))], "rgba");
            return n ? {color: d, leftIndex: o, rightIndex: s, value: r} : d
        }
    }

    function _(t, e, n, i) {
        if (t = f(t)) return t = g(t), null != e && (t[0] = r(e)), null != n && (t[1] = s(n)), null != i && (t[2] = s(i)), w(p(t), "rgba")
    }

    function b(t, e) {
        if ((t = f(t)) && null != e) return t[3] = a(e), w(t, "rgba")
    }

    function w(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return "rgba" !== e && "hsva" !== e && "hsla" !== e || (n += "," + t[3]), e + "(" + n + ")"
        }
    }

    var S = n(264), M = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    }, T = new S(20), A = null, C = x, I = y;
    e.parse = f, e.lift = v, e.toHex = m, e.fastLerp = x, e.fastMapToColor = C, e.lerp = y, e.mapToColor = I, e.modifyHSL = _, e.modifyAlpha = b, e.stringify = w
}, function (t, e, n) {
    function i(t) {
        this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
    }

    var r = n(225);
    i.prototype.parse = function (t) {
        return t
    }, i.prototype.getSetting = function (t) {
        return this._setting[t]
    }, i.prototype.contain = function (t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1]
    }, i.prototype.normalize = function (t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    }, i.prototype.scale = function (t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0]
    }, i.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }, i.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getDataExtent(e, !0))
    }, i.prototype.getExtent = function () {
        return this._extent.slice()
    }, i.prototype.setExtent = function (t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
    }, i.prototype.getTicksLabels = function () {
        for (var t = [], e = this.getTicks(), n = 0; n < e.length; n++) t.push(this.getLabel(e[n]));
        return t
    }, i.prototype.isBlank = function () {
        return this._isBlank
    }, i.prototype.setBlank = function (t) {
        this._isBlank = t
    }, r.enableClassExtend(i), r.enableClassManagement(i, {registerWhenExtend: !0});
    var a = i;
    t.exports = a
}, function (t, e) {
    var n = 1;
    "undefined" != typeof window && (n = Math.max(window.devicePixelRatio || 1, 1));
    var i = n;
    e.debugMode = 0, e.devicePixelRatio = i
}, function (t, e, n) {
    var i = n(208), r = n(259), a = n(222), o = function (t) {
        t = t || {}, r.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [], this.__storage = null, this.__dirty = !0
    };
    o.prototype = {
        constructor: o, isGroup: !0, type: "group", silent: !1, children: function () {
            return this._children.slice()
        }, childAt: function (t) {
            return this._children[t]
        }, childOfName: function (t) {
            for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n]
        }, childCount: function () {
            return this._children.length
        }, add: function (t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
        }, addBefore: function (t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children, i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
            }
            return this
        }, _doAdd: function (t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__storage, n = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof o && t.addChildrenToStorage(e)), n && n.refresh()
        }, remove: function (t) {
            var e = this.__zr, n = this.__storage, r = this._children, a = i.indexOf(r, t);
            return a < 0 ? this : (r.splice(a, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(n)), e && e.refresh(), this)
        }, removeAll: function () {
            var t, e, n = this._children, i = this.__storage;
            for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(i)), t.parent = null;
            return n.length = 0, this
        }, eachChild: function (t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i)
            }
            return this
        }, traverse: function (t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                t.call(e, i), "group" === i.type && i.traverse(t, e)
            }
            return this
        }, addChildrenToStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.addToStorage(n), n instanceof o && n.addChildrenToStorage(t)
            }
        }, delChildrenFromStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.delFromStorage(n), n instanceof o && n.delChildrenFromStorage(t)
            }
        }, dirty: function () {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
        }, getBoundingRect: function (t) {
            for (var e = null, n = new a(0, 0, 0, 0), i = t || this._children, r = [], o = 0; o < i.length; o++) {
                var s = i[o];
                if (!s.ignore && !s.invisible) {
                    var l = s.getBoundingRect(), u = s.getLocalTransform(r);
                    u ? (n.copy(l), n.applyTransform(u), e = e || n.clone(), e.union(n)) : (e = e || l.clone(), e.union(l))
                }
            }
            return e || n
        }
    }, i.inherits(o, r);
    var s = o;
    t.exports = s
}, function (t, e, n) {
    var i = n(229), r = n(213), a = n(265), o = n(222), s = n(236), l = s.devicePixelRatio,
        u = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, h = [], c = [], d = [], f = [], p = Math.min, g = Math.max,
        v = Math.cos, m = Math.sin, x = Math.sqrt, y = Math.abs, _ = "undefined" != typeof Float32Array,
        b = function (t) {
            this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
        };
    b.prototype = {
        constructor: b,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function (t, e) {
            this._ux = y(1 / l / t) || 0, this._uy = y(1 / l / e) || 0
        },
        getContext: function () {
            return this._ctx
        },
        beginPath: function (t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
        },
        moveTo: function (t, e) {
            return this.addData(u.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
        },
        lineTo: function (t, e) {
            var n = y(t - this._xi) > this._ux || y(e - this._yi) > this._uy || this._len < 5;
            return this.addData(u.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
        },
        bezierCurveTo: function (t, e, n, i, r, a) {
            return this.addData(u.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this
        },
        quadraticCurveTo: function (t, e, n, i) {
            return this.addData(u.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
        },
        arc: function (t, e, n, i, r, a) {
            return this.addData(u.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = v(r) * n + t, this._yi = m(r) * n + t, this
        },
        arcTo: function (t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
        },
        rect: function (t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i), this.addData(u.R, t, e, n, i), this
        },
        closePath: function () {
            this.addData(u.Z);
            var t = this._ctx, e = this._x0, n = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
        },
        fill: function (t) {
            t && t.fill(), this.toStatic()
        },
        stroke: function (t) {
            t && t.stroke(), this.toStatic()
        },
        setLineDash: function (t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                this._dashSum = e
            }
            return this
        },
        setLineDashOffset: function (t) {
            return this._dashOffset = t, this
        },
        len: function () {
            return this._len
        },
        setData: function (t) {
            var e = t.length;
            this.data && this.data.length == e || !_ || (this.data = new Float32Array(e));
            for (var n = 0; n < e; n++) this.data[n] = t[n];
            this._len = e
        },
        appendPath: function (t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, n = 0, i = this._len, r = 0; r < e; r++) n += t[r].len();
            _ && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
            for (var r = 0; r < e; r++) for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
            this._len = i
        },
        addData: function (t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
                this._prevCmd = t
            }
        },
        _expandData: function () {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t
            }
        },
        _needsDash: function () {
            return this._lineDash
        },
        _dashedLineTo: function (t, e) {
            var n, i, r = this._dashSum, a = this._dashOffset, o = this._lineDash, s = this._ctx, l = this._xi,
                u = this._yi, h = t - l, c = e - u, d = x(h * h + c * c), f = l, v = u, m = o.length;
            for (h /= d, c /= d, a < 0 && (a = r + a), a %= r, f -= a * h, v -= a * c; h > 0 && f <= t || h < 0 && f >= t || 0 == h && (c > 0 && v <= e || c < 0 && v >= e);) i = this._dashIdx, n = o[i], f += h * n, v += c * n, this._dashIdx = (i + 1) % m, h > 0 && f < l || h < 0 && f > l || c > 0 && v < u || c < 0 && v > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? p(f, t) : g(f, t), c >= 0 ? p(v, e) : g(v, e));
            h = f - t, c = v - e, this._dashOffset = -x(h * h + c * c)
        },
        _dashedBezierTo: function (t, e, n, r, a, o) {
            var s, l, u, h, c, d = this._dashSum, f = this._dashOffset, p = this._lineDash, g = this._ctx, v = this._xi,
                m = this._yi, y = i.cubicAt, _ = 0, b = this._dashIdx, w = p.length, S = 0;
            for (f < 0 && (f = d + f), f %= d, s = 0; s < 1; s += .1) l = y(v, t, n, a, s + .1) - y(v, t, n, a, s), u = y(m, e, r, o, s + .1) - y(m, e, r, o, s), _ += x(l * l + u * u);
            for (; b < w && !((S += p[b]) > f); b++) ;
            for (s = (S - f) / _; s <= 1;) h = y(v, t, n, a, s), c = y(m, e, r, o, s), b % 2 ? g.moveTo(h, c) : g.lineTo(h, c), s += p[b] / _, b = (b + 1) % w;
            b % 2 != 0 && g.lineTo(a, o), l = a - h, u = o - c, this._dashOffset = -x(l * l + u * u)
        },
        _dashedQuadraticTo: function (t, e, n, i) {
            var r = n, a = i;
            n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a)
        },
        toStatic: function () {
            var t = this.data;
            t instanceof Array && (t.length = this._len, _ && (this.data = new Float32Array(t)))
        },
        getBoundingRect: function () {
            h[0] = h[1] = d[0] = d[1] = Number.MAX_VALUE, c[0] = c[1] = f[0] = f[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, n = 0, i = 0, s = 0, l = 0; l < t.length;) {
                var p = t[l++];
                switch (1 == l && (e = t[l], n = t[l + 1], i = e, s = n), p) {
                    case u.M:
                        i = t[l++], s = t[l++], e = i, n = s, d[0] = i, d[1] = s, f[0] = i, f[1] = s;
                        break;
                    case u.L:
                        a.fromLine(e, n, t[l], t[l + 1], d, f), e = t[l++], n = t[l++];
                        break;
                    case u.C:
                        a.fromCubic(e, n, t[l++], t[l++], t[l++], t[l++], t[l], t[l + 1], d, f), e = t[l++], n = t[l++];
                        break;
                    case u.Q:
                        a.fromQuadratic(e, n, t[l++], t[l++], t[l], t[l + 1], d, f), e = t[l++], n = t[l++];
                        break;
                    case u.A:
                        var g = t[l++], x = t[l++], y = t[l++], _ = t[l++], b = t[l++], w = t[l++] + b,
                            S = (t[l++], 1 - t[l++]);
                        1 == l && (i = v(b) * y + g, s = m(b) * _ + x), a.fromArc(g, x, y, _, b, w, S, d, f), e = v(w) * y + g, n = m(w) * _ + x;
                        break;
                    case u.R:
                        i = e = t[l++], s = n = t[l++];
                        var M = t[l++], T = t[l++];
                        a.fromLine(i, s, i + M, s + T, d, f);
                        break;
                    case u.Z:
                        e = i, n = s
                }
                r.min(h, h, d), r.max(c, c, f)
            }
            return 0 === l && (h[0] = h[1] = c[0] = c[1] = 0), new o(h[0], h[1], c[0] - h[0], c[1] - h[1])
        },
        rebuildPath: function (t) {
            for (var e, n, i, r, a, o, s = this.data, l = this._ux, h = this._uy, c = this._len, d = 0; d < c;) {
                var f = s[d++];
                switch (1 == d && (i = s[d], r = s[d + 1], e = i, n = r), f) {
                    case u.M:
                        e = i = s[d++], n = r = s[d++], t.moveTo(i, r);
                        break;
                    case u.L:
                        a = s[d++], o = s[d++], (y(a - i) > l || y(o - r) > h || d === c - 1) && (t.lineTo(a, o), i = a, r = o);
                        break;
                    case u.C:
                        t.bezierCurveTo(s[d++], s[d++], s[d++], s[d++], s[d++], s[d++]), i = s[d - 2], r = s[d - 1];
                        break;
                    case u.Q:
                        t.quadraticCurveTo(s[d++], s[d++], s[d++], s[d++]), i = s[d - 2], r = s[d - 1];
                        break;
                    case u.A:
                        var p = s[d++], g = s[d++], x = s[d++], _ = s[d++], b = s[d++], w = s[d++], S = s[d++],
                            M = s[d++], T = x > _ ? x : _, A = x > _ ? 1 : x / _, C = x > _ ? _ / x : 1,
                            I = Math.abs(x - _) > .001, D = b + w;
                        I ? (t.translate(p, g), t.rotate(S), t.scale(A, C), t.arc(0, 0, T, b, D, 1 - M), t.scale(1 / A, 1 / C), t.rotate(-S), t.translate(-p, -g)) : t.arc(p, g, T, b, D, 1 - M), 1 == d && (e = v(b) * x + p, n = m(b) * _ + g), i = v(D) * x + p, r = m(D) * _ + g;
                        break;
                    case u.R:
                        e = i = s[d], n = r = s[d + 1], t.rect(s[d++], s[d++], s[d++], s[d++]);
                        break;
                    case u.Z:
                        t.closePath(), i = e, r = n
                }
            }
        }
    }, b.CMD = u;
    var w = b;
    t.exports = w
}, function (t, e, n) {
    function i(t) {
        for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
        return function (e, n, i) {
            for (var a = {}, o = 0; o < t.length; o++) {
                var s = t[o][1];
                if (!(n && r.indexOf(n, s) >= 0 || i && r.indexOf(i, s) < 0)) {
                    var l = e.getShallow(s);
                    null != l && (a[t[o][0]] = l)
                }
            }
            return a
        }
    }

    var r = n(208);
    t.exports = i
}, function (t, e) {
    function n(t, e) {
        r[t] = e
    }

    function i(t) {
        return r[t]
    }

    var r = {};
    e.register = n, e.get = i
}, function (t, e, n) {
    (function (e) {
        function i(t, e) {
            l.each(g.concat(e.__wrappedMethods || []), function (n) {
                e.hasOwnProperty(n) && (t[n] = e[n])
            }), t.__wrappedMethods = e.__wrappedMethods
        }

        function r(t) {
            this._array = t || []
        }

        function a(t) {
            return l.isArray(t) || (t = [t]), t
        }

        function o(t, e) {
            var n = t.dimensions, r = new v(l.map(n, t.getDimensionInfo, t), t.hostModel);
            i(r, t);
            for (var a = r._storage = {}, o = t._storage, s = 0; s < n.length; s++) {
                var u = n[s], h = o[u];
                l.indexOf(e, u) >= 0 ? a[u] = new h.constructor(o[u].length) : a[u] = o[u]
            }
            return r
        }

        var s = n(214), l = (s.__DEV__, n(208)), u = n(224), h = n(253), c = n(211), d = l.isObject,
            f = "undefined" == typeof window ? e : window, p = {
                float: void 0 === f.Float64Array ? Array : f.Float64Array,
                int: void 0 === f.Int32Array ? Array : f.Int32Array,
                ordinal: Array,
                number: Array,
                time: Array
            }, g = ["stackedOn", "hasItemOption", "_nameList", "_idList", "_rawData"];
        r.prototype.pure = !1, r.prototype.count = function () {
            return this._array.length
        }, r.prototype.getItem = function (t) {
            return this._array[t]
        };
        var v = function (t, e) {
            t = t || ["x", "y"];
            for (var n = {}, i = [], r = 0; r < t.length; r++) {
                var a, o = {};
                "string" == typeof t[r] ? (a = t[r], o = {
                    name: a,
                    coordDim: a,
                    coordDimIndex: 0,
                    stackable: !1,
                    type: "number"
                }) : (o = t[r], a = o.name, o.type = o.type || "number", o.coordDim || (o.coordDim = a, o.coordDimIndex = 0)), o.otherDims = o.otherDims || {}, i.push(a), n[a] = o
            }
            this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData, this._extent
        }, m = v.prototype;
        m.type = "list", m.hasItemOption = !0, m.getDimension = function (t) {
            return isNaN(t) || (t = this.dimensions[t] || t), t
        }, m.getDimensionInfo = function (t) {
            return l.clone(this._dimensionInfos[this.getDimension(t)])
        }, m.initData = function (t, e, n) {
            t = t || [], l.isArray(t) && (t = new r(t)), this._rawData = t;
            var i, a = this._storage = {}, o = this.indices = [], s = this.dimensions, u = this._dimensionInfos,
                h = t.count(), d = [], f = {};
            e = e || [];
            for (var g = 0; g < s.length; g++) {
                var v = u[s[g]];
                0 === v.otherDims.itemName && (i = g);
                var m = p[v.type];
                a[s[g]] = new m(h)
            }
            var x = this;
            n || (x.hasItemOption = !1), n = n || function (t, e, n, i) {
                var r = c.getDataItemValue(t);
                return c.isDataItemOption(t) && (x.hasItemOption = !0), c.converDataValue(r instanceof Array ? r[i] : r, u[e])
            };
            for (var g = 0; g < h; g++) {
                for (var y = t.getItem(g), _ = 0; _ < s.length; _++) {
                    var b = s[_];
                    a[b][g] = n(y, b, g, _)
                }
                o.push(g)
            }
            for (var g = 0; g < h; g++) {
                var y = t.getItem(g);
                !e[g] && y && (null != y.name ? e[g] = y.name : null != i && (e[g] = a[s[i]][g]));
                var w = e[g] || "", S = y && y.id;
                !S && w && (f[w] = f[w] || 0, S = w, f[w] > 0 && (S += "__ec__" + f[w]), f[w]++), S && (d[g] = S)
            }
            this._nameList = e, this._idList = d
        }, m.count = function () {
            return this.indices.length
        }, m.get = function (t, e, n) {
            var i = this._storage, r = this.indices[e];
            if (null == r || !i[t]) return NaN;
            var a = i[t][r];
            if (n) {
                var o = this._dimensionInfos[t];
                if (o && o.stackable) for (var s = this.stackedOn; s;) {
                    var l = s.get(t, e);
                    (a >= 0 && l > 0 || a <= 0 && l < 0) && (a += l), s = s.stackedOn
                }
            }
            return a
        }, m.getValues = function (t, e, n) {
            var i = [];
            l.isArray(t) || (n = e, e = t, t = this.dimensions);
            for (var r = 0, a = t.length; r < a; r++) i.push(this.get(t[r], e, n));
            return i
        }, m.hasValue = function (t) {
            for (var e = this.dimensions, n = this._dimensionInfos, i = 0, r = e.length; i < r; i++) if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
            return !0
        }, m.getDataExtent = function (t, e, n) {
            t = this.getDimension(t);
            var i = this._storage[t], r = this.getDimensionInfo(t);
            e = r && r.stackable && e;
            var a, o = (this._extent || (this._extent = {}))[t + !!e];
            if (o) return o;
            if (i) {
                for (var s = 1 / 0, l = -1 / 0, u = 0, h = this.count(); u < h; u++) a = this.get(t, u, e), n && !n(a, t, u) || (a < s && (s = a), a > l && (l = a));
                return this._extent[t + !!e] = [s, l]
            }
            return [1 / 0, -1 / 0]
        }, m.getSum = function (t, e) {
            var n = this._storage[t], i = 0;
            if (n) for (var r = 0, a = this.count(); r < a; r++) {
                var o = this.get(t, r, e);
                isNaN(o) || (i += o)
            }
            return i
        }, m.indexOf = function (t, e) {
            var n = this._storage, i = n[t], r = this.indices;
            if (i) for (var a = 0, o = r.length; a < o; a++) {
                var s = r[a];
                if (i[s] === e) return a
            }
            return -1
        }, m.indexOfName = function (t) {
            for (var e = this.indices, n = this._nameList, i = 0, r = e.length; i < r; i++) {
                if (n[e[i]] === t) return i
            }
            return -1
        }, m.indexOfRawIndex = function (t) {
            var e = this.indices, n = e[t];
            if (null != n && n === t) return t;
            for (var i = 0, r = e.length - 1; i <= r;) {
                var a = (i + r) / 2 | 0;
                if (e[a] < t) i = a + 1; else {
                    if (!(e[a] > t)) return a;
                    r = a - 1
                }
            }
            return -1
        }, m.indicesOfNearest = function (t, e, n, i) {
            var r = this._storage, a = r[t], o = [];
            if (!a) return o;
            null == i && (i = 1 / 0);
            for (var s = Number.MAX_VALUE, l = -1, u = 0, h = this.count(); u < h; u++) {
                var c = e - this.get(t, u, n), d = Math.abs(c);
                c <= i && d <= s && ((d < s || c >= 0 && l < 0) && (s = d, l = c, o.length = 0), o.push(u))
            }
            return o
        }, m.getRawIndex = function (t) {
            var e = this.indices[t];
            return null == e ? -1 : e
        }, m.getRawDataItem = function (t) {
            return this._rawData.getItem(this.getRawIndex(t))
        }, m.getName = function (t) {
            return this._nameList[this.indices[t]] || ""
        }, m.getId = function (t) {
            return this._idList[this.indices[t]] || this.getRawIndex(t) + ""
        }, m.each = function (t, e, n, i) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), t = l.map(a(t), this.getDimension, this);
            var r = [], o = t.length, s = this.indices;
            i = i || this;
            for (var u = 0; u < s.length; u++) switch (o) {
                case 0:
                    e.call(i, u);
                    break;
                case 1:
                    e.call(i, this.get(t[0], u, n), u);
                    break;
                case 2:
                    e.call(i, this.get(t[0], u, n), this.get(t[1], u, n), u);
                    break;
                default:
                    for (var h = 0; h < o; h++) r[h] = this.get(t[h], u, n);
                    r[h] = u, e.apply(i, r)
            }
        }, m.filterSelf = function (t, e, n, i) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), t = l.map(a(t), this.getDimension, this);
            var r = [], o = [], s = t.length, u = this.indices;
            i = i || this;
            for (var h = 0; h < u.length; h++) {
                var c;
                if (s) if (1 === s) c = e.call(i, this.get(t[0], h, n), h); else {
                    for (var d = 0; d < s; d++) o[d] = this.get(t[d], h, n);
                    o[d] = h, c = e.apply(i, o)
                } else c = e.call(i, h);
                c && r.push(u[h])
            }
            return this.indices = r, this._extent = {}, this
        }, m.mapArray = function (t, e, n, i) {
            "function" == typeof t && (i = n, n = e, e = t, t = []);
            var r = [];
            return this.each(t, function () {
                r.push(e && e.apply(this, arguments))
            }, n, i), r
        }, m.map = function (t, e, n, i) {
            t = l.map(a(t), this.getDimension, this);
            var r = o(this, t), s = r.indices = this.indices, u = r._storage, h = [];
            return this.each(t, function () {
                var n = arguments[arguments.length - 1], i = e && e.apply(this, arguments);
                if (null != i) {
                    "number" == typeof i && (h[0] = i, i = h);
                    for (var r = 0; r < i.length; r++) {
                        var a = t[r], o = u[a], l = s[n];
                        o && (o[l] = i[r])
                    }
                }
            }, n, i), r
        }, m.downSample = function (t, e, n, i) {
            for (var r = o(this, [t]), a = this._storage, s = r._storage, l = this.indices, u = r.indices = [], h = [], c = [], d = Math.floor(1 / e), f = s[t], p = this.count(), g = 0; g < a[t].length; g++) s[t][g] = a[t][g];
            for (var g = 0; g < p; g += d) {
                d > p - g && (d = p - g, h.length = d);
                for (var v = 0; v < d; v++) {
                    var m = l[g + v];
                    h[v] = f[m], c[v] = m
                }
                var x = n(h), m = c[i(h, x) || 0];
                f[m] = x, u.push(m)
            }
            return r
        }, m.getItemModel = function (t) {
            var e = this.hostModel;
            return t = this.indices[t], new u(this._rawData.getItem(t), e, e && e.ecModel)
        }, m.diff = function (t) {
            var e, n = this._idList, i = t && t._idList;
            return new h(t ? t.indices : [], this.indices, function (t) {
                return null != (e = i[t]) ? e : "e\0\0" + t
            }, function (t) {
                return null != (e = n[t]) ? e : "e\0\0" + t
            })
        }, m.getVisual = function (t) {
            var e = this._visual;
            return e && e[t]
        }, m.setVisual = function (t, e) {
            if (d(t)) for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]); else this._visual = this._visual || {}, this._visual[t] = e
        }, m.setLayout = function (t, e) {
            if (d(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]); else this._layout[t] = e
        }, m.getLayout = function (t) {
            return this._layout[t]
        }, m.getItemLayout = function (t) {
            return this._itemLayouts[t]
        }, m.setItemLayout = function (t, e, n) {
            this._itemLayouts[t] = n ? l.extend(this._itemLayouts[t] || {}, e) : e
        }, m.clearItemLayouts = function () {
            this._itemLayouts.length = 0
        }, m.getItemVisual = function (t, e, n) {
            var i = this._itemVisuals[t], r = i && i[e];
            return null != r || n ? r : this.getVisual(e)
        }, m.setItemVisual = function (t, e, n) {
            var i = this._itemVisuals[t] || {};
            if (this._itemVisuals[t] = i, d(e)) for (var r in e) e.hasOwnProperty(r) && (i[r] = e[r]); else i[e] = n
        }, m.clearAllVisual = function () {
            this._visual = {}, this._itemVisuals = []
        };
        var x = function (t) {
            t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
        };
        m.setItemGraphicEl = function (t, e) {
            var n = this.hostModel;
            e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(x, e)), this._graphicEls[t] = e
        }, m.getItemGraphicEl = function (t) {
            return this._graphicEls[t]
        }, m.eachItemGraphicEl = function (t, e) {
            l.each(this._graphicEls, function (n, i) {
                n && t && t.call(e, n, i)
            })
        }, m.cloneShallow = function () {
            var t = l.map(this.dimensions, this.getDimensionInfo, this), e = new v(t, this.hostModel);
            return e._storage = this._storage, i(e, this), e.indices = this.indices.slice(), this._extent && (e._extent = l.extend({}, this._extent)), e
        }, m.wrapMethod = function (t, e) {
            var n = this[t];
            "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                var t = n.apply(this, arguments);
                return e.apply(this, [t].concat(l.slice(arguments)))
            })
        }, m.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], m.CHANGABLE_METHODS = ["filterSelf"];
        var y = v;
        t.exports = y
    }).call(e, n(31))
}, function (t, e, n) {
    var i = n(212), r = n(223), a = n(235), o = n(257), s = i.round, l = a.extend({
        type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function (t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
        }, unionExtent: function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), l.prototype.setExtent.call(this, e[0], e[1])
        }, getInterval: function () {
            return this._interval
        }, setInterval: function (t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = o.getIntervalPrecision(t)
        }, getTicks: function () {
            return o.intervalScaleGetTicks(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
        }, getTicksLabels: function () {
            for (var t = [], e = this.getTicks(), n = 0; n < e.length; n++) t.push(this.getLabel(e[n]));
            return t
        }, getLabel: function (t, e) {
            if (null == t) return "";
            var n = e && e.precision;
            return null == n ? n = i.getPrecisionSafe(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = s(t, n, !0), r.addCommas(t)
        }, niceTicks: function (t, e, n) {
            t = t || 5;
            var i = this._extent, r = i[1] - i[0];
            if (isFinite(r)) {
                r < 0 && (r = -r, i.reverse());
                var a = o.intervalScaleNiceTicks(i, t, e, n);
                this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent
            }
        }, niceExtent: function (t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var n = e[0];
                t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
            } else e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = s(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = s(Math.ceil(e[1] / r) * r))
        }
    });
    l.create = function () {
        return new l
    };
    var u = l;
    t.exports = u
}, function (t, e, n) {
    function i(t) {
        return [t || "", u++, Math.random()].join(h)
    }

    function r(t) {
        var e = {};
        return t.registerSubTypeDefaulter = function (t, n) {
            t = l(t), e[t.main] = n
        }, t.determineSubType = function (n, i) {
            var r = i.type;
            if (!r) {
                var a = l(n).main;
                t.hasSubTypes(n) && e[a] && (r = e[a](i))
            }
            return r
        }, t
    }

    function a(t, e) {
        function n(t) {
            var n = {}, a = [];
            return o.each(t, function (s) {
                var l = i(n, s), u = l.originalDeps = e(s), h = r(u, t);
                l.entryCount = h.length, 0 === l.entryCount && a.push(s), o.each(h, function (t) {
                    o.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t);
                    var e = i(n, t);
                    o.indexOf(e.successor, t) < 0 && e.successor.push(s)
                })
            }), {graph: n, noEntryList: a}
        }

        function i(t, e) {
            return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
        }

        function r(t, e) {
            var n = [];
            return o.each(t, function (t) {
                o.indexOf(e, t) >= 0 && n.push(t)
            }), n
        }

        t.topologicalTravel = function (t, e, i, r) {
            function a(t) {
                0 === --u[t].entryCount && h.push(t)
            }

            function s(t) {
                c[t] = !0, a(t)
            }

            if (t.length) {
                var l = n(e), u = l.graph, h = l.noEntryList, c = {};
                for (o.each(t, function (t) {
                    c[t] = !0
                }); h.length;) {
                    var d = h.pop(), f = u[d], p = !!c[d];
                    p && (i.call(r, d, f.originalDeps.slice()), delete c[d]), o.each(f.successor, p ? s : a)
                }
                o.each(c, function () {
                    throw new Error("Circle dependency may exists")
                })
            }
        }
    }

    var o = n(208), s = n(225), l = s.parseClassType, u = 0, h = "_";
    e.getUID = i, e.enableSubTypeDefaulter = r, e.enableTopologicalTravel = a
}, function (t, e, n) {
    function i(t, e) {
        if ("image" !== this.type) {
            var n = this.style, i = this.shape;
            i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
        }
    }

    function r(t, e, n, r, a, l, u) {
        var h = 0 === t.indexOf("empty");
        h && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var c;
        return c = 0 === t.indexOf("image://") ? o.makeImage(t.slice(8), new s(e, n, r, a), u ? "center" : "cover") : 0 === t.indexOf("path://") ? o.makePath(t.slice(7), {}, new s(e, n, r, a), u ? "center" : "cover") : new g({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: r,
                height: a
            }
        }), c.__isEmptyBrush = h, c.setColor = i, c.setColor(l), c
    }

    var a = n(208), o = n(210), s = n(222), l = o.extendShape({
        type: "triangle", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, a = e.height / 2;
            t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath()
        }
    }), u = o.extendShape({
        type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, a = e.height / 2;
            t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath()
        }
    }), h = o.extendShape({
        type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.x, i = e.y, r = e.width / 5 * 3, a = Math.max(r, e.height), o = r / 2, s = o * o / (a - o),
                l = i - a + o + s, u = Math.asin(s / o), h = Math.cos(u) * o, c = Math.sin(u), d = Math.cos(u),
                f = .6 * o, p = .7 * o;
            t.moveTo(n - h, l + s), t.arc(n, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * f, l + s + d * f, n - h, l + s), t.closePath()
        }
    }), c = o.extendShape({
        type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.height, i = e.width, r = e.x, a = e.y, o = i / 3 * 2;
            t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath()
        }
    }), d = {
        line: o.Line,
        rect: o.Rect,
        roundRect: o.Rect,
        square: o.Rect,
        circle: o.Circle,
        diamond: u,
        pin: h,
        arrow: c,
        triangle: l
    }, f = {
        line: function (t, e, n, i, r) {
            r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
        }, rect: function (t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i
        }, roundRect: function (t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
        }, square: function (t, e, n, i, r) {
            var a = Math.min(n, i);
            r.x = t, r.y = e, r.width = a, r.height = a
        }, circle: function (t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
        }, diamond: function (t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
        }, pin: function (t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
        }, arrow: function (t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
        }, triangle: function (t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
        }
    }, p = {};
    a.each(d, function (t, e) {
        p[e] = new t
    });
    var g = o.extendShape({
        type: "symbol",
        shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0},
        beforeBrush: function () {
            var t = this.style;
            "pin" === this.shape.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
        },
        buildPath: function (t, e, n) {
            var i = e.symbolType, r = p[i];
            "none" !== e.symbolType && (r || (i = "rect", r = p[i]), f[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n))
        }
    });
    e.createSymbol = r
}, function (t, e) {
    function n(t) {
        for (var e = 0; t >= h;) e |= 1 & t, t >>= 1;
        return t + e
    }

    function i(t, e, n, i) {
        var a = e + 1;
        if (a === n) return 1;
        if (i(t[a++], t[e]) < 0) {
            for (; a < n && i(t[a], t[a - 1]) < 0;) a++;
            r(t, e, a)
        } else for (; a < n && i(t[a], t[a - 1]) >= 0;) a++;
        return a - e
    }

    function r(t, e, n) {
        for (n--; e < n;) {
            var i = t[e];
            t[e++] = t[n], t[n--] = i
        }
    }

    function a(t, e, n, i, r) {
        for (i === e && i++; i < n; i++) {
            for (var a, o = t[i], s = e, l = i; s < l;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
            var u = i - s;
            switch (u) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; u > 0;) t[s + u] = t[s + u - 1], u--
            }
            t[s] = o
        }
    }

    function o(t, e, n, i, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[n + r]) > 0) {
            for (s = i - r; l < s && a(t, e[n + r + l]) > 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s), o += r, l += r
        } else {
            for (s = r + 1; l < s && a(t, e[n + r - l]) <= 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s);
            var u = o;
            o = r - l, l = r - u
        }
        for (o++; o < l;) {
            var h = o + (l - o >>> 1);
            a(t, e[n + h]) > 0 ? o = h + 1 : l = h
        }
        return l
    }

    function s(t, e, n, i, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[n + r]) < 0) {
            for (s = r + 1; l < s && a(t, e[n + r - l]) < 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s);
            var u = o;
            o = r - l, l = r - u
        } else {
            for (s = i - r; l < s && a(t, e[n + r + l]) >= 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s), o += r, l += r
        }
        for (o++; o < l;) {
            var h = o + (l - o >>> 1);
            a(t, e[n + h]) < 0 ? l = h : o = h + 1
        }
        return l
    }

    function l(t, e) {
        function n(t, e) {
            h[g] = t, d[g] = e, g += 1
        }

        function i() {
            for (; g > 1;) {
                var t = g - 2;
                if (t >= 1 && d[t - 1] <= d[t] + d[t + 1] || t >= 2 && d[t - 2] <= d[t] + d[t - 1]) d[t - 1] < d[t + 1] && t--; else if (d[t] > d[t + 1]) break;
                a(t)
            }
        }

        function r() {
            for (; g > 1;) {
                var t = g - 2;
                t > 0 && d[t - 1] < d[t + 1] && t--, a(t)
            }
        }

        function a(n) {
            var i = h[n], r = d[n], a = h[n + 1], c = d[n + 1];
            d[n] = r + c, n === g - 3 && (h[n + 1] = h[n + 2], d[n + 1] = d[n + 2]), g--;
            var f = s(t[a], t, i, r, 0, e);
            i += f, 0 !== (r -= f) && 0 !== (c = o(t[i + r - 1], t, a, c, c - 1, e)) && (r <= c ? l(i, r, a, c) : u(i, r, a, c))
        }

        function l(n, i, r, a) {
            var l = 0;
            for (l = 0; l < i; l++) v[l] = t[n + l];
            var u = 0, h = r, d = n;
            if (t[d++] = t[h++], 0 != --a) {
                if (1 === i) {
                    for (l = 0; l < a; l++) t[d + l] = t[h + l];
                    return void (t[d + a] = v[u])
                }
                for (var p, g, m, x = f; ;) {
                    p = 0, g = 0, m = !1;
                    do {
                        if (e(t[h], v[u]) < 0) {
                            if (t[d++] = t[h++], g++, p = 0, 0 == --a) {
                                m = !0;
                                break
                            }
                        } else if (t[d++] = v[u++], p++, g = 0, 1 == --i) {
                            m = !0;
                            break
                        }
                    } while ((p | g) < x);
                    if (m) break;
                    do {
                        if (0 !== (p = s(t[h], v, u, i, 0, e))) {
                            for (l = 0; l < p; l++) t[d + l] = v[u + l];
                            if (d += p, u += p, (i -= p) <= 1) {
                                m = !0;
                                break
                            }
                        }
                        if (t[d++] = t[h++], 0 == --a) {
                            m = !0;
                            break
                        }
                        if (0 !== (g = o(v[u], t, h, a, 0, e))) {
                            for (l = 0; l < g; l++) t[d + l] = t[h + l];
                            if (d += g, h += g, 0 === (a -= g)) {
                                m = !0;
                                break
                            }
                        }
                        if (t[d++] = v[u++], 1 == --i) {
                            m = !0;
                            break
                        }
                        x--
                    } while (p >= c || g >= c);
                    if (m) break;
                    x < 0 && (x = 0), x += 2
                }
                if (f = x, f < 1 && (f = 1), 1 === i) {
                    for (l = 0; l < a; l++) t[d + l] = t[h + l];
                    t[d + a] = v[u]
                } else {
                    if (0 === i) throw new Error;
                    for (l = 0; l < i; l++) t[d + l] = v[u + l]
                }
            } else for (l = 0; l < i; l++) t[d + l] = v[u + l]
        }

        function u(n, i, r, a) {
            var l = 0;
            for (l = 0; l < a; l++) v[l] = t[r + l];
            var u = n + i - 1, h = a - 1, d = r + a - 1, p = 0, g = 0;
            if (t[d--] = t[u--], 0 != --i) {
                if (1 === a) {
                    for (d -= i, u -= i, g = d + 1, p = u + 1, l = i - 1; l >= 0; l--) t[g + l] = t[p + l];
                    return void (t[d] = v[h])
                }
                for (var m = f; ;) {
                    var x = 0, y = 0, _ = !1;
                    do {
                        if (e(v[h], t[u]) < 0) {
                            if (t[d--] = t[u--], x++, y = 0, 0 == --i) {
                                _ = !0;
                                break
                            }
                        } else if (t[d--] = v[h--], y++, x = 0, 1 == --a) {
                            _ = !0;
                            break
                        }
                    } while ((x | y) < m);
                    if (_) break;
                    do {
                        if (0 !== (x = i - s(v[h], t, n, i, i - 1, e))) {
                            for (d -= x, u -= x, i -= x, g = d + 1, p = u + 1, l = x - 1; l >= 0; l--) t[g + l] = t[p + l];
                            if (0 === i) {
                                _ = !0;
                                break
                            }
                        }
                        if (t[d--] = v[h--], 1 == --a) {
                            _ = !0;
                            break
                        }
                        if (0 !== (y = a - o(t[u], v, 0, a, a - 1, e))) {
                            for (d -= y, h -= y, a -= y, g = d + 1, p = h + 1, l = 0; l < y; l++) t[g + l] = v[p + l];
                            if (a <= 1) {
                                _ = !0;
                                break
                            }
                        }
                        if (t[d--] = t[u--], 0 == --i) {
                            _ = !0;
                            break
                        }
                        m--
                    } while (x >= c || y >= c);
                    if (_) break;
                    m < 0 && (m = 0), m += 2
                }
                if (f = m, f < 1 && (f = 1), 1 === a) {
                    for (d -= i, u -= i, g = d + 1, p = u + 1, l = i - 1; l >= 0; l--) t[g + l] = t[p + l];
                    t[d] = v[h]
                } else {
                    if (0 === a) throw new Error;
                    for (p = d - (a - 1), l = 0; l < a; l++) t[p + l] = v[l]
                }
            } else for (p = d - (a - 1), l = 0; l < a; l++) t[p + l] = v[l]
        }

        var h, d, f = c, p = 0, g = 0;
        p = t.length;
        var v = [];
        h = [], d = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n
    }

    function u(t, e, r, o) {
        r || (r = 0), o || (o = t.length);
        var s = o - r;
        if (!(s < 2)) {
            var u = 0;
            if (s < h) return u = i(t, r, o, e), void a(t, r, o, r + u, e);
            var c = new l(t, e), d = n(s);
            do {
                if ((u = i(t, r, o, e)) < d) {
                    var f = s;
                    f > d && (f = d), a(t, r, r + f, r + u, e), u = f
                }
                c.pushRun(r, u), c.mergeRuns(), s -= u, r += u
            } while (0 !== s);
            c.forceMergeRuns()
        }
    }

    var h = 32, c = 7;
    t.exports = u
}, function (t, e, n) {
    function i(t) {
        t = t || {}, o.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new a(t.style, this), this._rect = null, this.__clipPaths = []
    }

    var r = n(208), a = n(270), o = n(259), s = n(330);
    i.prototype = {
        constructor: i,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: -1,
        beforeBrush: function (t) {
        },
        afterBrush: function (t) {
        },
        brush: function (t, e) {
        },
        getBoundingRect: function () {
        },
        contain: function (t, e) {
            return this.rectContain(t, e)
        },
        traverse: function (t, e) {
            t.call(e, this)
        },
        rectContain: function (t, e) {
            var n = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(n[0], n[1])
        },
        dirty: function () {
            this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
        },
        animateStyle: function (t) {
            return this.animate("style", t)
        },
        attrKV: function (t, e) {
            "style" !== t ? o.prototype.attrKV.call(this, t, e) : this.style.set(e)
        },
        setStyle: function (t, e) {
            return this.style.set(t, e), this.dirty(!1), this
        },
        useStyle: function (t) {
            return this.style = new a(t, this), this.dirty(!1), this
        }
    }, r.inherits(i, o), r.mixin(i, s);
    var l = i;
    t.exports = l
}, function (t, e) {
    var n = function (t) {
        this.colorStops = t || []
    };
    n.prototype = {
        constructor: n, addColorStop: function (t, e) {
            this.colorStops.push({offset: t, color: e})
        }
    };
    var i = n;
    t.exports = i
}, function (t, e, n) {
    function i(t) {
        if ("string" == typeof t) {
            var e = l.get(t);
            return e && e.image
        }
        return t
    }

    function r(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !n) return e;
                var s = l.get(t), u = {hostEl: n, cb: i, cbPayload: r};
                return s ? (e = s.image, !o(e) && s.pending.push(u)) : (!e && (e = new Image), e.onload = a, l.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [u]
                }), e.src = e.__zrImageSrc = t), e
            }
            return t
        }
        return e
    }

    function a() {
        var t = this.__cachedImgObj;
        this.onload = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e], i = n.cb;
            i && i(this, n.cbPayload), n.hostEl.dirty()
        }
        t.pending.length = 0
    }

    function o(t) {
        return t && t.width && t.height
    }

    var s = n(264), l = new s(50);
    e.findExistImage = i, e.createOrUpdateImage = r, e.isImageReady = o
}, function (t, e, n) {
    function i() {
        this._coordinateSystems = []
    }

    var r = n(208), a = {};
    i.prototype = {
        constructor: i, create: function (t, e) {
            var n = [];
            r.each(a, function (i, r) {
                var a = i.create(t, e);
                n = n.concat(a || [])
            }), this._coordinateSystems = n
        }, update: function (t, e) {
            r.each(this._coordinateSystems, function (n) {
                n.update && n.update(t, e)
            })
        }, getCoordinateSystems: function () {
            return this._coordinateSystems.slice()
        }
    }, i.register = function (t, e) {
        a[t] = e
    }, i.get = function (t) {
        return a[t]
    };
    var o = i;
    t.exports = o
}, function (t, e, n) {
    function i(t, e, n) {
        function i(t, e, n) {
            c[e] ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, v.set(e, !0))
        }

        function o(t, e, n) {
            if (n || null != e.get(t)) {
                for (var i = 0; null != e.get(t + i);) i++;
                t += i
            }
            return e.set(t, !0), t
        }

        e = e || [], n = n || {}, t = (t || []).slice();
        var f = (n.dimsDef || []).slice(), p = a.createHashMap(n.encodeDef), g = a.createHashMap(),
            v = a.createHashMap(), m = [], x = n.dimCount;
        if (null == x) {
            var y = r(e[0]);
            x = Math.max(a.isArray(y) && y.length || 1, t.length, f.length), l(t, function (t) {
                var e = t.dimsDef;
                e && (x = Math.max(x, e.length))
            })
        }
        for (var _ = 0; _ < x; _++) {
            var b = u(f[_]) ? {name: f[_]} : f[_] || {}, w = b.name, S = m[_] = {otherDims: {}};
            null != w && null == g.get(w) && (S.name = S.tooltipName = w, g.set(w, _)), null != b.type && (S.type = b.type)
        }
        p.each(function (t, e) {
            t = p.set(e, s(t).slice()), l(t, function (n, r) {
                u(n) && (n = g.get(n)), null != n && n < x && (t[r] = n, i(m[n], e, r))
            })
        });
        var M = 0;
        l(t, function (t, e) {
            var n, t, r, o;
            u(t) ? (n = t, t = {}) : (n = t.name, t = a.clone(t), r = t.dimsDef, o = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null);
            var c = s(p.get(n));
            if (!c.length) for (var d = 0; d < (r && r.length || 1); d++) {
                for (; M < m.length && null != m[M].coordDim;) M++;
                M < m.length && c.push(M++)
            }
            l(c, function (e, a) {
                var s = m[e];
                i(h(s, t), n, a), null == s.name && r && (s.name = s.tooltipName = r[a]), o && h(s.otherDims, o)
            })
        });
        for (var T = n.extraPrefix || "value", A = 0; A < x; A++) {
            var S = m[A] = m[A] || {};
            null == S.coordDim && (S.coordDim = o(T, v, n.extraFromZero), S.coordDimIndex = 0, S.isExtraCoord = !0), null == S.name && (S.name = o(S.coordDim, g)), null == S.type && d(e, A) && (S.type = "ordinal")
        }
        return m
    }

    function r(t) {
        return a.isArray(t) ? t : a.isObject(t) ? t.value : t
    }

    var a = n(208), o = n(211), s = o.normalizeToArray, l = a.each, u = a.isString, h = a.defaults,
        c = {tooltip: 1, label: 1, itemName: 1}, d = i.guessOrdinal = function (t, e) {
            for (var n = 0, i = t.length; n < i; n++) {
                var o = r(t[n]);
                if (!a.isArray(o)) return !1;
                var o = o[e];
                if (null != o && isFinite(o) && "" !== o) return !1;
                if (u(o) && "-" !== o) return !0
            }
            return !1
        }, f = i;
    t.exports = f
}, function (t, e) {
    function n(t, e, n) {
        function i() {
            h = (new Date).getTime(), c = null, t.apply(o, s || [])
        }

        var r, a, o, s, l, u = 0, h = 0, c = null;
        e = e || 0;
        var d = function () {
            r = (new Date).getTime(), o = this, s = arguments;
            var t = l || e, d = l || n;
            l = null, a = r - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), u = r
        };
        return d.clear = function () {
            c && (clearTimeout(c), c = null)
        }, d.debounceNextCall = function (t) {
            l = t
        }, d
    }

    function i(t, e, i, r) {
        var l = t[e];
        if (l) {
            var u = l[a] || l, h = l[s];
            if (l[o] !== i || h !== r) {
                if (null == i || !r) return t[e] = u;
                l = t[e] = n(u, i, "debounce" === r), l[a] = u, l[s] = r, l[o] = i
            }
            return l
        }
    }

    function r(t, e) {
        var n = t[e];
        n && n[a] && (t[e] = n[a])
    }

    var a = "\0__throttleOriginMethod", o = "\0__throttleRate", s = "\0__throttleType";
    e.throttle = n, e.createOrUpdate = i, e.clear = r
}, function (t, e, n) {
    function i(t) {
        for (var e = 0; e < t.length && null == t[e];) e++;
        return t[e]
    }

    function r(t) {
        var e = i(t);
        return null != e && !h.isArray(p(e))
    }

    function a(t, e, n) {
        t = t || [];
        var i = e.get("coordinateSystem"), a = x[i], o = m.get(i),
            s = {encodeDef: e.get("encode"), dimsDef: e.get("dimensions")}, u = a && a(t, e, n, s),
            f = u && u.dimensions;
        f || (f = o && (o.getDimensionsInfo ? o.getDimensionsInfo() : o.dimensions.slice()) || ["x", "y"], f = d(f, t, s));
        var y = u ? u.categoryIndex : -1, _ = new c(f, e), b = l(u, t), w = {},
            S = y >= 0 && r(t) ? function (t, e, n, i) {
                return v(t) && (_.hasItemOption = !0), i === y ? n : g(p(t), f[i])
            } : function (t, e, n, i) {
                var r = p(t), a = g(r && r[i], f[i]);
                v(t) && (_.hasItemOption = !0);
                var o = u && u.categoryAxesModels;
                return o && o[e] && "string" == typeof a && (w[e] = w[e] || o[e].getCategories(), (a = h.indexOf(w[e], a)) < 0 && !isNaN(a) && (a = +a)), a
            };
        return _.hasItemOption = !1, _.initData(t, b, S), _
    }

    function o(t) {
        return "category" !== t && "time" !== t
    }

    function s(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
    }

    function l(t, e) {
        var n, i = [], r = t && t.dimensions[t.categoryIndex];
        if (r && (n = t.categoryAxesModels[r.name]), n) {
            var a = n.getCategories();
            if (a) {
                var o = e.length;
                if (h.isArray(e[0]) && e[0].length > 1) {
                    i = [];
                    for (var s = 0; s < o; s++) i[s] = a[e[s][t.categoryIndex || 0]]
                } else i = a.slice(0)
            }
        }
        return i
    }

    var u = n(214), h = (u.__DEV__, n(208)), c = n(241), d = n(250), f = n(211), p = f.getDataItemValue,
        g = f.converDataValue, v = f.isDataItemOption, m = n(249), x = {
            cartesian2d: function (t, e, n, i) {
                var r = h.map(["xAxis", "yAxis"], function (t) {
                        return n.queryComponents({mainType: t, index: e.get(t + "Index"), id: e.get(t + "Id")})[0]
                    }), a = r[0], l = r[1], u = a.get("type"), c = l.get("type"),
                    f = [{name: "x", type: s(u), stackable: o(u)}, {name: "y", type: s(c), stackable: o(c)}],
                    p = "category" === u, g = "category" === c;
                f = d(f, t, i);
                var v = {};
                return p && (v.x = a), g && (v.y = l), {
                    dimensions: f,
                    categoryIndex: p ? 0 : g ? 1 : -1,
                    categoryAxesModels: v
                }
            }, singleAxis: function (t, e, n, i) {
                var r = n.queryComponents({
                    mainType: "singleAxis",
                    index: e.get("singleAxisIndex"),
                    id: e.get("singleAxisId")
                })[0], a = r.get("type"), l = "category" === a, u = [{name: "single", type: s(a), stackable: o(a)}];
                u = d(u, t, i);
                var h = {};
                return l && (h.single = r), {dimensions: u, categoryIndex: l ? 0 : -1, categoryAxesModels: h}
            }, polar: function (t, e, n, i) {
                var r = n.queryComponents({mainType: "polar", index: e.get("polarIndex"), id: e.get("polarId")})[0],
                    a = r.findAxisModel("angleAxis"), l = r.findAxisModel("radiusAxis"), u = l.get("type"),
                    h = a.get("type"),
                    c = [{name: "radius", type: s(u), stackable: o(u)}, {name: "angle", type: s(h), stackable: o(h)}],
                    f = "category" === h, p = "category" === u;
                c = d(c, t, i);
                var g = {};
                return p && (g.radius = l), f && (g.angle = a), {
                    dimensions: c,
                    categoryIndex: f ? 1 : p ? 0 : -1,
                    categoryAxesModels: g
                }
            }, geo: function (t, e, n, i) {
                return {dimensions: d([{name: "lng"}, {name: "lat"}], t, i)}
            }
        }, y = a;
    t.exports = y
}, function (t, e) {
    function n(t) {
        return t
    }

    function i(t, e, i, r, a) {
        this._old = t, this._new = e, this._oldKeyGetter = i || n, this._newKeyGetter = r || n, this.context = a
    }

    function r(t, e, n, i, r) {
        for (var a = 0; a < t.length; a++) {
            var o = "_ec_" + r[i](t[a], a), s = e[o];
            null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
        }
    }

    i.prototype = {
        constructor: i, add: function (t) {
            return this._add = t, this
        }, update: function (t) {
            return this._update = t, this
        }, remove: function (t) {
            return this._remove = t, this
        }, execute: function () {
            var t, e = this._old, n = this._new, i = {}, a = {}, o = [], s = [];
            for (r(e, i, o, "_oldKeyGetter", this), r(n, a, s, "_newKeyGetter", this), t = 0; t < e.length; t++) {
                var l = o[t], u = a[l];
                if (null != u) {
                    var h = u.length;
                    h ? (1 === h && (a[l] = null), u = u.unshift()) : a[l] = null, this._update && this._update(u, t)
                } else this._remove && this._remove(t)
            }
            for (var t = 0; t < s.length; t++) {
                var l = s[t];
                if (a.hasOwnProperty(l)) {
                    var u = a[l];
                    if (null == u) continue;
                    if (u.length) for (var c = 0, h = u.length; c < h; c++) this._add && this._add(u[c]); else this._add && this._add(u)
                }
            }
        }
    };
    var a = i;
    t.exports = a
}, function (t, e) {
    var n = {
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {title: "数据视图", lang: ["数据视图", "关闭", "刷新"]},
            dataZoom: {title: {zoom: "区域缩放", back: "区域缩放还原"}},
            magicType: {title: {line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺"}},
            restore: {title: "还原"},
            saveAsImage: {title: "保存为图片", lang: ["右键另存为图片"]}
        }
    };
    t.exports = n
}, function (t, e, n) {
    var i = n(214), r = (i.__DEV__, n(208)), a = n(216), o = n(223), s = o.formatTime, l = o.encodeHTML,
        u = o.addCommas, h = o.getTooltipMarker, c = n(225), d = c.set, f = c.get, p = n(211), g = n(226), v = n(256),
        m = n(227), x = m.getLayoutParams, y = m.mergeLayoutParam, _ = g.extend({
            type: "series.__base__",
            seriesIndex: 0,
            coordinateSystem: null,
            defaultOption: null,
            legendDataProvider: null,
            visualColorAccessPath: "itemStyle.normal.color",
            layoutMode: null,
            init: function (t, e, n, i) {
                this.seriesIndex = this.componentIndex, this.mergeDefaultAndTheme(t, n);
                var r = this.getInitialData(t, n);
                d(this, "dataBeforeProcessed", r), this.restoreData()
            },
            mergeDefaultAndTheme: function (t, e) {
                var n = this.layoutMode, i = n ? x(t) : {}, a = this.subType;
                g.hasClass(a) && (a += "Series"), r.merge(t, e.getTheme().get(this.subType)), r.merge(t, this.getDefaultOption()), p.defaultEmphasis(t.label, ["show"]), this.fillDataTextStyle(t.data), n && y(t, i, n)
            },
            mergeOption: function (t, e) {
                t = r.merge(this.option, t, !0), this.fillDataTextStyle(t.data);
                var n = this.layoutMode;
                n && y(this.option, t, n);
                var i = this.getInitialData(t, e);
                i && (d(this, "data", i), d(this, "dataBeforeProcessed", i.cloneShallow()))
            },
            fillDataTextStyle: function (t) {
                if (t) for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && p.defaultEmphasis(t[n].label, e)
            },
            getInitialData: function () {
            },
            getData: function (t) {
                var e = f(this, "data");
                return null == t ? e : e.getLinkedData(t)
            },
            setData: function (t) {
                d(this, "data", t)
            },
            getRawData: function () {
                return f(this, "dataBeforeProcessed")
            },
            coordDimToDataDim: function (t) {
                return p.coordDimToDataDim(this.getData(), t)
            },
            dataDimToCoordDim: function (t) {
                return p.dataDimToCoordDim(this.getData(), t)
            },
            getBaseAxis: function () {
                var t = this.coordinateSystem;
                return t && t.getBaseAxis && t.getBaseAxis()
            },
            formatTooltip: function (t, e, n) {
                var i = f(this, "data"), a = this.getRawValue(t), o = r.isArray(a) ? function (n) {
                    function a(t, n) {
                        var r = i.getDimensionInfo(n);
                        if (r && !1 !== r.otherDims.tooltip) {
                            var a = r.type,
                                c = (o ? "- " + (r.tooltipName || r.name) + ": " : "") + ("ordinal" === a ? t + "" : "time" === a ? e ? "" : s("yyyy/MM/dd hh:mm:ss", t) : u(t));
                            c && h.push(l(c))
                        }
                    }

                    var o = r.reduce(n, function (t, e, n) {
                        var r = i.getDimensionInfo(n);
                        return t |= r && !1 !== r.tooltip && null != r.tooltipName
                    }, 0), h = [], c = p.otherDimToDataDim(i, "tooltip");
                    return c.length ? r.each(c, function (e) {
                        a(i.get(e, t), e)
                    }) : r.each(n, a), (o ? "<br/>" : "") + h.join(o ? "<br/>" : ", ")
                }(a) : l(u(a)), c = i.getName(t), d = i.getItemVisual(t, "color");
                r.isObject(d) && d.colorStops && (d = (d.colorStops[0] || {}).color), d = d || "transparent";
                var g = h(d), v = this.name;
                return "\0-" === v && (v = ""), v = v ? l(v) + (e ? ": " : "<br/>") : "", e ? g + v + o : v + g + (c ? l(c) + ": " + o : o)
            },
            isAnimationEnabled: function () {
                if (a.node) return !1;
                var t = this.getShallow("animation");
                return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
            },
            restoreData: function () {
                d(this, "data", f(this, "dataBeforeProcessed").cloneShallow())
            },
            getColorFromPalette: function (t, e) {
                var n = this.ecModel, i = v.getColorFromPalette.call(this, t, e);
                return i || (i = n.getColorFromPalette(t, e)), i
            },
            getAxisTooltipData: null,
            getTooltipPosition: null
        });
    r.mixin(_, p.dataFormatMixin), r.mixin(_, v);
    var b = _;
    t.exports = b
}, function (t, e, n) {
    var i = n(225), r = i.set, a = i.get, o = {
        clearColorPalette: function () {
            r(this, "colorIdx", 0), r(this, "colorNameMap", {})
        }, getColorFromPalette: function (t, e) {
            e = e || this;
            var n = a(e, "colorIdx") || 0, i = a(e, "colorNameMap") || r(e, "colorNameMap", {});
            if (i.hasOwnProperty(t)) return i[t];
            var o = this.get("color", !0) || [];
            if (o.length) {
                var s = o[n];
                return t && (i[t] = s), r(e, "colorIdx", (n + 1) % o.length), s
            }
        }
    };
    t.exports = o
}, function (t, e, n) {
    function i(t, e, n, i) {
        var a = {}, s = t[1] - t[0], h = a.interval = l.nice(s / e, !0);
        null != n && h < n && (h = a.interval = n), null != i && h > i && (h = a.interval = i);
        var c = a.intervalPrecision = r(h);
        return o(a.niceTickExtent = [u(Math.ceil(t[0] / h) * h, c), u(Math.floor(t[1] / h) * h, c)], t), a
    }

    function r(t) {
        return l.getPrecisionSafe(t) + 2
    }

    function a(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0])
    }

    function o(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), a(t, 0, e), a(t, 1, e), t[0] > t[1] && (t[0] = t[1])
    }

    function s(t, e, n, i) {
        var r = [];
        if (!t) return r;
        e[0] < n[0] && r.push(e[0]);
        for (var a = n[0]; a <= n[1] && (r.push(a), (a = u(a + t, i)) !== r[r.length - 1]);) if (r.length > 1e4) return [];
        return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r
    }

    var l = n(212), u = l.round;
    e.intervalScaleNiceTicks = i, e.getIntervalPrecision = r, e.fixExtent = o, e.intervalScaleGetTicks = s
}, function (t, e, n) {
    function i() {
        this.group = new s, this.uid = l.getUID("viewChart")
    }

    function r(t, e) {
        if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) r(t.childAt(n), e)
    }

    function a(t, e, n) {
        var i = h.queryDataIndex(t, e);
        null != i ? o.each(h.normalizeToArray(i), function (e) {
            r(t.getItemGraphicEl(e), n)
        }) : t.eachItemGraphicEl(function (t) {
            r(t, n)
        })
    }

    var o = n(208), s = n(237), l = n(243), u = n(225), h = n(211);
    i.prototype = {
        type: "chart", init: function (t, e) {
        }, render: function (t, e, n, i) {
        }, highlight: function (t, e, n, i) {
            a(t.getData(), i, "emphasis")
        }, downplay: function (t, e, n, i) {
            a(t.getData(), i, "normal")
        }, remove: function (t, e) {
            this.group.removeAll()
        }, dispose: function () {
        }
    };
    var c = i.prototype;
    c.updateView = c.updateLayout = c.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i)
    }, u.enableClassExtend(i, ["dispose"]), u.enableClassManagement(i, {registerWhenExtend: !0});
    var d = i;
    t.exports = d
}, function (t, e, n) {
    var i = n(266), r = n(230), a = n(274), o = n(340), s = n(208), l = function (t) {
        a.call(this, t), r.call(this, t), o.call(this, t), this.id = t.id || i()
    };
    l.prototype = {
        type: "element", name: "", __zr: null, ignore: !1, clipPath: null, drift: function (t, e) {
            switch (this.draggable) {
                case"horizontal":
                    e = 0;
                    break;
                case"vertical":
                    t = 0
            }
            var n = this.transform;
            n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1)
        }, beforeUpdate: function () {
        }, afterUpdate: function () {
        }, update: function () {
            this.updateTransform()
        }, traverse: function (t, e) {
        }, attrKV: function (t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var n = this[t];
                    n || (n = this[t] = []), n[0] = e[0], n[1] = e[1]
                }
            } else this[t] = e
        }, hide: function () {
            this.ignore = !0, this.__zr && this.__zr.refresh()
        }, show: function () {
            this.ignore = !1, this.__zr && this.__zr.refresh()
        }, attr: function (t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (s.isObject(t)) for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
            return this.dirty(!1), this
        }, setClipPath: function (t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
        }, removeClipPath: function () {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
        }, addSelfToZr: function (t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
            this.clipPath && this.clipPath.addSelfToZr(t)
        }, removeSelfFromZr: function (t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
            this.clipPath && this.clipPath.removeSelfFromZr(t)
        }
    }, s.mixin(l, o), s.mixin(l, a), s.mixin(l, r);
    var u = l;
    t.exports = u
}, function (t, e, n) {
    function i(t, e) {
        return t[e]
    }

    function r(t, e, n) {
        t[e] = n
    }

    function a(t, e, n) {
        return (e - t) * n + t
    }

    function o(t, e, n) {
        return n > .5 ? e : t
    }

    function s(t, e, n, i, r) {
        var o = t.length;
        if (1 == r) for (var s = 0; s < o; s++) i[s] = a(t[s], e[s], n); else for (var l = o && t[0].length, s = 0; s < o; s++) for (var u = 0; u < l; u++) i[s][u] = a(t[s][u], e[s][u], n)
    }

    function l(t, e, n) {
        var i = t.length, r = e.length;
        if (i !== r) {
            if (i > r) t.length = r; else for (var a = i; a < r; a++) t.push(1 === n ? e[a] : _.call(e[a]))
        }
        for (var o = t[0] && t[0].length, a = 0; a < t.length; a++) if (1 === n) isNaN(t[a]) && (t[a] = e[a]); else for (var s = 0; s < o; s++) isNaN(t[a][s]) && (t[a][s] = e[a][s])
    }

    function u(t, e, n) {
        if (t === e) return !0;
        var i = t.length;
        if (i !== e.length) return !1;
        if (1 === n) {
            for (var r = 0; r < i; r++) if (t[r] !== e[r]) return !1
        } else for (var a = t[0].length, r = 0; r < i; r++) for (var o = 0; o < a; o++) if (t[r][o] !== e[r][o]) return !1;
        return !0
    }

    function h(t, e, n, i, r, a, o, s, l) {
        var u = t.length;
        if (1 == l) for (var h = 0; h < u; h++) s[h] = c(t[h], e[h], n[h], i[h], r, a, o); else for (var d = t[0].length, h = 0; h < u; h++) for (var f = 0; f < d; f++) s[h][f] = c(t[h][f], e[h][f], n[h][f], i[h][f], r, a, o)
    }

    function c(t, e, n, i, r, a, o) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
    }

    function d(t) {
        if (y(t)) {
            var e = t.length;
            if (y(t[0])) {
                for (var n = [], i = 0; i < e; i++) n.push(_.call(t[i]));
                return n
            }
            return _.call(t)
        }
        return t
    }

    function f(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
    }

    function p(t) {
        var e = t[t.length - 1].value;
        return y(e && e[0]) ? 2 : 1
    }

    function g(t, e, n, i, r, d) {
        var g = t._getter, x = t._setter, _ = "spline" === e, b = i.length;
        if (b) {
            var w, S = i[0].value, M = y(S), T = !1, A = !1, C = M ? p(i) : 0;
            i.sort(function (t, e) {
                return t.time - e.time
            }), w = i[b - 1].time;
            for (var I = [], D = [], k = i[0].value, P = !0, L = 0; L < b; L++) {
                I.push(i[L].time / w);
                var O = i[L].value;
                if (M && u(O, k, C) || !M && O === k || (P = !1), k = O, "string" == typeof O) {
                    var E = m.parse(O);
                    E ? (O = E, T = !0) : A = !0
                }
                D.push(O)
            }
            if (d || !P) {
                for (var z = D[b - 1], L = 0; L < b - 1; L++) M ? l(D[L], z, C) : !isNaN(D[L]) || isNaN(z) || A || T || (D[L] = z);
                M && l(g(t._target, r), z, C);
                var R, B, N, V, F, H, W = 0, G = 0;
                if (T) var Z = [0, 0, 0, 0];
                var q = function (t, e) {
                    var n;
                    if (e < 0) n = 0; else if (e < G) {
                        for (R = Math.min(W + 1, b - 1), n = R; n >= 0 && !(I[n] <= e); n--) ;
                        n = Math.min(n, b - 2)
                    } else {
                        for (n = W; n < b && !(I[n] > e); n++) ;
                        n = Math.min(n - 1, b - 2)
                    }
                    W = n, G = e;
                    var i = I[n + 1] - I[n];
                    if (0 !== i) if (B = (e - I[n]) / i, _) if (V = D[n], N = D[0 === n ? n : n - 1], F = D[n > b - 2 ? b - 1 : n + 1], H = D[n > b - 3 ? b - 1 : n + 2], M) h(N, V, F, H, B, B * B, B * B * B, g(t, r), C); else {
                        var l;
                        if (T) l = h(N, V, F, H, B, B * B, B * B * B, Z, 1), l = f(Z); else {
                            if (A) return o(V, F, B);
                            l = c(N, V, F, H, B, B * B, B * B * B)
                        }
                        x(t, r, l)
                    } else if (M) s(D[n], D[n + 1], B, g(t, r), C); else {
                        var l;
                        if (T) s(D[n], D[n + 1], B, Z, 1), l = f(Z); else {
                            if (A) return o(D[n], D[n + 1], B);
                            l = a(D[n], D[n + 1], B)
                        }
                        x(t, r, l)
                    }
                }, Y = new v({target: t._target, life: w, loop: t._loop, delay: t._delay, onframe: q, ondestroy: n});
                return e && "spline" !== e && (Y.easing = e), Y
            }
        }
    }

    var v = n(314), m = n(234), x = n(208), y = x.isArrayLike, _ = Array.prototype.slice, b = function (t, e, n, a) {
        this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || i, this._setter = a || r, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    };
    b.prototype = {
        when: function (t, e) {
            var n = this._tracks;
            for (var i in e) if (e.hasOwnProperty(i)) {
                if (!n[i]) {
                    n[i] = [];
                    var r = this._getter(this._target, i);
                    if (null == r) continue;
                    0 !== t && n[i].push({time: 0, value: d(r)})
                }
                n[i].push({time: t, value: e[i]})
            }
            return this
        }, during: function (t) {
            return this._onframeList.push(t), this
        }, pause: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0
        }, resume: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1
        }, isPaused: function () {
            return !!this._paused
        }, _doneCallback: function () {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, n = 0; n < e; n++) t[n].call(this)
        }, start: function (t, e) {
            var n, i = this, r = 0, a = function () {
                --r || i._doneCallback()
            };
            for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
                var s = g(this, t, a, this._tracks[o], o, e);
                s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s)
            }
            if (n) {
                var l = n.onframe;
                n.onframe = function (t, e) {
                    l(t, e);
                    for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
                }
            }
            return r || this._doneCallback(), this
        }, stop: function (t) {
            for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
                var r = e[i];
                t && r.onframe(this._target, 1), n && n.removeClip(r)
            }
            e.length = 0
        }, delay: function (t) {
            return this._delay = t, this
        }, done: function (t) {
            return t && this._doneList.push(t), this
        }, getClips: function () {
            return this._clipList
        }
    };
    var w = b;
    t.exports = w
}, function (t, e) {
    var n = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
        setTimeout(t, 16)
    };
    t.exports = n
}, function (t, e) {
    function n(t) {
        return t %= i, t < 0 && (t += i), t
    }

    var i = 2 * Math.PI;
    e.normalizeRadian = n
}, function (t, e) {
    function n(t, e, n, i, r, a) {
        if (a > e && a > i || a < e && a < i) return 0;
        if (i === e) return 0;
        var o = i < e ? 1 : -1, s = (a - e) / (i - e);
        return 1 !== s && 0 !== s || (o = i < e ? .5 : -.5), s * (n - t) + t > r ? o : 0
    }

    t.exports = n
}, function (t, e) {
    var n = function () {
        this.head = null, this.tail = null, this._len = 0
    }, i = n.prototype;
    i.insert = function (t) {
        var e = new r(t);
        return this.insertEntry(e), e
    }, i.insertEntry = function (t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
    }, i.remove = function (t) {
        var e = t.prev, n = t.next;
        e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
    }, i.len = function () {
        return this._len
    }, i.clear = function () {
        this.head = this.tail = null, this._len = 0
    };
    var r = function (t) {
        this.value = t, this.next, this.prev
    }, a = function (t) {
        this._list = new n, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
    }, o = a.prototype;
    o.put = function (t, e) {
        var n = this._list, i = this._map, a = null;
        if (null == i[t]) {
            var o = n.len(), s = this._lastRemovedEntry;
            if (o >= this._maxSize && o > 0) {
                var l = n.head;
                n.remove(l), delete i[l.key], a = l.value, this._lastRemovedEntry = l
            }
            s ? s.value = e : s = new r(e), s.key = t, n.insertEntry(s), i[t] = s
        }
        return a
    }, o.get = function (t) {
        var e = this._map[t], n = this._list;
        if (null != e) return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value
    }, o.clear = function () {
        this._list.clear(), this._map = {}
    };
    var s = a;
    t.exports = s
}, function (t, e, n) {
    function i(t, e, n) {
        if (0 !== t.length) {
            var i, r = t[0], a = r[0], o = r[0], s = r[1], l = r[1];
            for (i = 1; i < t.length; i++) r = t[i], a = h(a, r[0]), o = c(o, r[0]), s = h(s, r[1]), l = c(l, r[1]);
            e[0] = a, e[1] = s, n[0] = o, n[1] = l
        }
    }

    function r(t, e, n, i, r, a) {
        r[0] = h(t, n), r[1] = h(e, i), a[0] = c(t, n), a[1] = c(e, i)
    }

    function a(t, e, n, i, r, a, o, s, l, d) {
        var f, p = u.cubicExtrema, g = u.cubicAt, v = p(t, n, r, o, x);
        for (l[0] = 1 / 0, l[1] = 1 / 0, d[0] = -1 / 0, d[1] = -1 / 0, f = 0; f < v; f++) {
            var m = g(t, n, r, o, x[f]);
            l[0] = h(m, l[0]), d[0] = c(m, d[0])
        }
        for (v = p(e, i, a, s, y), f = 0; f < v; f++) {
            var _ = g(e, i, a, s, y[f]);
            l[1] = h(_, l[1]), d[1] = c(_, d[1])
        }
        l[0] = h(t, l[0]), d[0] = c(t, d[0]), l[0] = h(o, l[0]), d[0] = c(o, d[0]), l[1] = h(e, l[1]), d[1] = c(e, d[1]), l[1] = h(s, l[1]), d[1] = c(s, d[1])
    }

    function o(t, e, n, i, r, a, o, s) {
        var l = u.quadraticExtremum, d = u.quadraticAt, f = c(h(l(t, n, r), 1), 0), p = c(h(l(e, i, a), 1), 0),
            g = d(t, n, r, f), v = d(e, i, a, p);
        o[0] = h(t, r, g), o[1] = h(e, a, v), s[0] = c(t, r, g), s[1] = c(e, a, v)
    }

    function s(t, e, n, i, r, a, o, s, u) {
        var h = l.min, c = l.max, x = Math.abs(r - a);
        if (x % p < 1e-4 && x > 1e-4) return s[0] = t - n, s[1] = e - i, u[0] = t + n, void (u[1] = e + i);
        if (g[0] = f(r) * n + t, g[1] = d(r) * i + e, v[0] = f(a) * n + t, v[1] = d(a) * i + e, h(s, g, v), c(u, g, v), r %= p, r < 0 && (r += p), a %= p, a < 0 && (a += p), r > a && !o ? a += p : r < a && o && (r += p), o) {
            var y = a;
            a = r, r = y
        }
        for (var _ = 0; _ < a; _ += Math.PI / 2) _ > r && (m[0] = f(_) * n + t, m[1] = d(_) * i + e, h(s, m, s), c(u, m, u))
    }

    var l = n(213), u = n(229), h = Math.min, c = Math.max, d = Math.sin, f = Math.cos, p = 2 * Math.PI, g = l.create(),
        v = l.create(), m = l.create(), x = [], y = [];
    e.fromPoints = i, e.fromLine = r, e.fromCubic = a, e.fromQuadratic = o, e.fromArc = s
}, function (t, e) {
    function n() {
        return i++
    }

    var i = 2311;
    t.exports = n
}, function (t, e, n) {
    var i = n(236), r = i.debugMode, a = function () {
    };
    1 === r ? a = function () {
        for (var t in arguments) throw new Error(arguments[t])
    } : r > 1 && (a = function () {
        for (var t in arguments) console.log(arguments[t])
    });
    var o = a;
    t.exports = o
}, function (t, e, n) {
    function i(t) {
        r.call(this, t)
    }

    var r = n(246), a = n(222), o = n(208), s = n(248);
    i.prototype = {
        constructor: i, type: "image", brush: function (t, e) {
            var n = this.style, i = n.image;
            n.bind(t, this, e);
            var r = this._image = s.createOrUpdateImage(i, this._image, this, this.onload);
            if (r && s.isImageReady(r)) {
                var a = n.x || 0, o = n.y || 0, l = n.width, u = n.height, h = r.width / r.height;
                if (null == l && null != u ? l = u * h : null == u && null != l ? u = l / h : null == l && null == u && (l = r.width, u = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
                    var c = n.sx || 0, d = n.sy || 0;
                    t.drawImage(r, c, d, n.sWidth, n.sHeight, a, o, l, u)
                } else if (n.sx && n.sy) {
                    var c = n.sx, d = n.sy, f = l - c, p = u - d;
                    t.drawImage(r, c, d, f, p, a, o, l, u)
                } else t.drawImage(r, a, o, l, u);
                this.restoreTransform(t), null != n.text && this.drawRectText(t, this.getBoundingRect())
            }
        }, getBoundingRect: function () {
            var t = this.style;
            return this._rect || (this._rect = new a(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
        }
    }, o.inherits(i, r);
    var l = i;
    t.exports = l
}, function (t, e) {
    var n = function (t, e) {
        this.image = t, this.repeat = e, this.type = "pattern"
    };
    n.prototype.getCanvasPattern = function (t) {
        return t.createPattern(this.image, this.repeat || "repeat")
    };
    var i = n;
    t.exports = i
}, function (t, e) {
    function n(t, e, n) {
        var i = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, a = null == e.y ? 0 : e.y,
            o = null == e.y2 ? 0 : e.y2;
        return e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), t.createLinearGradient(i, a, r, o)
    }

    function i(t, e, n) {
        var i = n.width, r = n.height, a = Math.min(i, r), o = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y,
            l = null == e.r ? .5 : e.r;
        return e.global || (o = o * i + n.x, s = s * r + n.y, l *= a), t.createRadialGradient(o, s, 0, o, s, l)
    }

    var r = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
        a = function (t, e) {
            this.extendFrom(t, !1), this.host = e
        };
    a.prototype = {
        constructor: a,
        host: null,
        fill: "#000",
        stroke: null,
        opacity: 1,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function (t, e, n) {
            for (var i = this, a = n && n.style, o = !a, s = 0; s < r.length; s++) {
                var l = r[s], u = l[0];
                (o || i[u] !== a[u]) && (t[u] = i[u] || l[1])
            }
            if ((o || i.fill !== a.fill) && (t.fillStyle = i.fill), (o || i.stroke !== a.stroke) && (t.strokeStyle = i.stroke), (o || i.opacity !== a.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (o || i.blend !== a.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
                var h = i.lineWidth;
                t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
            }
        },
        hasFill: function () {
            var t = this.fill;
            return null != t && "none" !== t
        },
        hasStroke: function () {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0
        },
        extendFrom: function (t, e) {
            if (t) for (var n in t) !t.hasOwnProperty(n) || !0 !== e && (!1 === e ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
        },
        set: function (t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
        },
        clone: function () {
            var t = new this.constructor;
            return t.extendFrom(this, !0), t
        },
        getGradient: function (t, e, r) {
            for (var a = "radial" === e.type ? i : n, o = a(t, e, r), s = e.colorStops, l = 0; l < s.length; l++) o.addColorStop(s[l].offset, s[l].color);
            return o
        }
    };
    for (var o = a.prototype, s = 0; s < r.length; s++) {
        var l = r[s];
        l[0] in o || (o[l[0]] = l[1])
    }
    a.getGradient = o.getGradient;
    var u = a;
    t.exports = u
}, function (t, e, n) {
    function i(t, e, n) {
        var i = e.points, o = e.smooth;
        if (i && i.length >= 2) {
            if (o && "spline" !== o) {
                var s = a(i, o, n, e.smoothConstraint);
                t.moveTo(i[0][0], i[0][1]);
                for (var l = i.length, u = 0; u < (n ? l : l - 1); u++) {
                    var h = s[2 * u], c = s[2 * u + 1], d = i[(u + 1) % l];
                    t.bezierCurveTo(h[0], h[1], c[0], c[1], d[0], d[1])
                }
            } else {
                "spline" === o && (i = r(i, n)), t.moveTo(i[0][0], i[0][1]);
                for (var u = 1, f = i.length; u < f; u++) t.lineTo(i[u][0], i[u][1])
            }
            n && t.closePath()
        }
    }

    var r = n(329), a = n(328);
    e.buildPath = i
}, function (t, e) {
    function n(t, e) {
        var n, i, r, a, o = e.x, s = e.y, l = e.width, u = e.height, h = e.r;
        l < 0 && (o += l, l = -l), u < 0 && (s += u, u = -u), "number" == typeof h ? n = i = r = a = h : h instanceof Array ? 1 === h.length ? n = i = r = a = h[0] : 2 === h.length ? (n = r = h[0], i = a = h[1]) : 3 === h.length ? (n = h[0], i = a = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], a = h[3]) : n = i = r = a = 0;
        var c;
        n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + a > u && (c = n + a, n *= u / c, a *= u / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.quadraticCurveTo(o + l, s, o + l, s + i), t.lineTo(o + l, s + u - r), 0 !== r && t.quadraticCurveTo(o + l, s + u, o + l - r, s + u), t.lineTo(o + a, s + u), 0 !== a && t.quadraticCurveTo(o, s + u, o, s + u - a), t.lineTo(o, s + n), 0 !== n && t.quadraticCurveTo(o, s, o + n, s)
    }

    e.buildPath = n
}, function (t, e, n) {
    function i(t) {
        return r(t), M(t.rich, r), t
    }

    function r(t) {
        if (t) {
            t.font = I.makeFont(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || P[e] ? e : "left";
            var n = t.textVerticalAlign || t.textBaseline;
            "center" === n && (n = "middle"), t.textVerticalAlign = null == n || L[n] ? n : "top";
            t.textPadding && (t.textPadding = T(t.textPadding))
        }
    }

    function a(t, e, n, i, r) {
        i.rich ? s(t, e, n, i, r) : o(t, e, n, i, r)
    }

    function o(t, e, n, i, r) {
        var a = g(e, "font", i.font || I.DEFAULT_FONT), o = i.textPadding, s = t.__textCotentBlock;
        s && !t.__dirty || (s = t.__textCotentBlock = I.parsePlainText(n, a, o, i.truncate));
        var l = s.outerHeight, h = s.lines, f = s.lineHeight, x = p(l, i, r), _ = x.baseX, b = x.baseY, w = x.textAlign,
            S = x.textVerticalAlign;
        u(e, i, r, _, b);
        var M = I.adjustTextY(b, l, S), T = _, A = M, C = c(i);
        if (C || o) {
            var D = I.getWidth(n, a), k = D;
            o && (k += o[1] + o[3]);
            var P = I.adjustTextX(_, k, w);
            C && d(t, e, i, P, M, k, l), o && (T = y(_, w, o), A += o[0])
        }
        g(e, "textAlign", w || "left"), g(e, "textBaseline", "middle"), g(e, "shadowBlur", i.textShadowBlur || 0), g(e, "shadowColor", i.textShadowColor || "transparent"), g(e, "shadowOffsetX", i.textShadowOffsetX || 0), g(e, "shadowOffsetY", i.textShadowOffsetY || 0), A += f / 2;
        var L = i.textStrokeWidth, O = v(i.textStroke, L), E = m(i.textFill);
        O && (g(e, "lineWidth", L), g(e, "strokeStyle", O)), E && g(e, "fillStyle", E);
        for (var z = 0; z < h.length; z++) O && e.strokeText(h[z], T, A), E && e.fillText(h[z], T, A), A += f
    }

    function s(t, e, n, i, r) {
        var a = t.__textCotentBlock;
        a && !t.__dirty || (a = t.__textCotentBlock = I.parseRichText(n, i)), l(t, e, a, i, r)
    }

    function l(t, e, n, i, r) {
        var a = n.width, o = n.outerWidth, s = n.outerHeight, l = i.textPadding, f = p(s, i, r), g = f.baseX,
            v = f.baseY, m = f.textAlign, x = f.textVerticalAlign;
        u(e, i, r, g, v);
        var y = I.adjustTextX(g, o, m), _ = I.adjustTextY(v, s, x), b = y, w = _;
        l && (b += l[3], w += l[0]);
        var S = b + a;
        c(i) && d(t, e, i, y, _, o, s);
        for (var M = 0; M < n.lines.length; M++) {
            for (var T, A = n.lines[M], C = A.tokens, D = C.length, k = A.lineHeight, P = A.width, L = 0, O = b, E = S, z = D - 1; L < D && (T = C[L], !T.textAlign || "left" === T.textAlign);) h(t, e, T, i, k, w, O, "left"), P -= T.width, O += T.width, L++;
            for (; z >= 0 && (T = C[z], "right" === T.textAlign);) h(t, e, T, i, k, w, E, "right"), P -= T.width, E -= T.width, z--;
            for (O += (a - (O - b) - (S - E) - P) / 2; L <= z;) T = C[L], h(t, e, T, i, k, w, O + T.width / 2, "center"), O += T.width, L++;
            w += k
        }
    }

    function u(t, e, n, i, r) {
        if (n && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r)
        }
    }

    function h(t, e, n, i, r, a, o, s) {
        var l = i.rich[n.styleName] || {}, u = n.textVerticalAlign, h = a + r / 2;
        "top" === u ? h = a + n.height / 2 : "bottom" === u && (h = a + r - n.height / 2), !n.isLineHolder && c(l) && d(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, h - n.height / 2, n.width, n.height);
        var f = n.textPadding;
        f && (o = y(o, s, f), h -= n.height / 2 - f[2] - n.textHeight / 2), g(e, "shadowBlur", S(l.textShadowBlur, i.textShadowBlur, 0)), g(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), g(e, "shadowOffsetX", S(l.textShadowOffsetX, i.textShadowOffsetX, 0)), g(e, "shadowOffsetY", S(l.textShadowOffsetY, i.textShadowOffsetY, 0)), g(e, "textAlign", s), g(e, "textBaseline", "middle"), g(e, "font", n.font || I.DEFAULT_FONT);
        var p = v(l.textStroke || i.textStroke, _), x = m(l.textFill || i.textFill),
            _ = w(l.textStrokeWidth, i.textStrokeWidth);
        p && (g(e, "lineWidth", _), g(e, "strokeStyle", p), e.strokeText(n.text, o, h)), x && (g(e, "fillStyle", x), e.fillText(n.text, o, h))
    }

    function c(t) {
        return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
    }

    function d(t, e, n, i, r, a, o) {
        var s = n.textBackgroundColor, l = n.textBorderWidth, u = n.textBorderColor, h = A(s);
        if (g(e, "shadowBlur", n.textBoxShadowBlur || 0), g(e, "shadowColor", n.textBoxShadowColor || "transparent"), g(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), g(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {
            e.beginPath();
            var c = n.textBorderRadius;
            c ? D.buildPath(e, {x: i, y: r, width: a, height: o, r: c}) : e.rect(i, r, a, o), e.closePath()
        }
        if (h) g(e, "fillStyle", s), e.fill(); else if (C(s)) {
            var d = s.image;
            d = k.createOrUpdateImage(d, null, t, f, s), d && k.isImageReady(d) && e.drawImage(d, i, r, a, o)
        }
        l && u && (g(e, "lineWidth", l), g(e, "strokeStyle", u), e.stroke())
    }

    function f(t, e) {
        e.image = t
    }

    function p(t, e, n) {
        var i = e.x || 0, r = e.y || 0, a = e.textAlign, o = e.textVerticalAlign;
        if (n) {
            var s = e.textPosition;
            if (s instanceof Array) i = n.x + x(s[0], n.width), r = n.y + x(s[1], n.height); else {
                var l = I.adjustTextPositionOnRect(s, n, e.textDistance);
                i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
            }
            var u = e.textOffset;
            u && (i += u[0], r += u[1])
        }
        return {baseX: i, baseY: r, textAlign: a, textVerticalAlign: o}
    }

    function g(t, e, n) {
        return t[e] = n, t[e]
    }

    function v(t, e) {
        return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function m(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function x(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function y(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
    }

    function _(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }

    var b = n(208), w = b.retrieve2, S = b.retrieve3, M = b.each, T = b.normalizeCssArray, A = b.isString,
        C = b.isObject, I = n(228), D = n(272), k = n(248), P = {left: 1, right: 1, center: 1},
        L = {top: 1, bottom: 1, middle: 1};
    e.normalizeTextStyle = i, e.renderText = a, e.getStroke = v, e.getFill = m, e.needDrawText = _
}, function (t, e, n) {
    function i(t) {
        return t > s || t < -s
    }

    var r = n(231), a = n(213), o = r.identity, s = 5e-5, l = function (t) {
        t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
    }, u = l.prototype;
    u.transform = null, u.needLocalTransform = function () {
        return i(this.rotation) || i(this.position[0]) || i(this.position[1]) || i(this.scale[0] - 1) || i(this.scale[1] - 1)
    }, u.updateTransform = function () {
        var t = this.parent, e = t && t.transform, n = this.needLocalTransform(), i = this.transform;
        if (!n && !e) return void (i && o(i));
        i = i || r.create(), n ? this.getLocalTransform(i) : o(i), e && (n ? r.mul(i, t.transform, i) : r.copy(i, t.transform)), this.transform = i, this.invTransform = this.invTransform || r.create(), r.invert(this.invTransform, i)
    }, u.getLocalTransform = function (t) {
        return l.getLocalTransform(this, t)
    }, u.setTransform = function (t) {
        var e = this.transform, n = t.dpr || 1;
        e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
    }, u.restoreTransform = function (t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0)
    };
    var h = [];
    u.decomposeTransform = function () {
        if (this.transform) {
            var t = this.parent, e = this.transform;
            t && t.transform && (r.mul(h, t.invTransform, e), e = h);
            var n = e[0] * e[0] + e[1] * e[1], a = e[2] * e[2] + e[3] * e[3], o = this.position, s = this.scale;
            i(n - 1) && (n = Math.sqrt(n)), i(a - 1) && (a = Math.sqrt(a)), e[0] < 0 && (n = -n), e[3] < 0 && (a = -a), o[0] = e[4], o[1] = e[5], s[0] = n, s[1] = a, this.rotation = Math.atan2(-e[1] / a, e[0] / n)
        }
    }, u.getGlobalScale = function () {
        var t = this.transform;
        if (!t) return [1, 1];
        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]), n = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
        return t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), [e, n]
    }, u.transformCoordToLocal = function (t, e) {
        var n = [t, e], i = this.invTransform;
        return i && a.applyTransform(n, n, i), n
    }, u.transformCoordToGlobal = function (t, e) {
        var n = [t, e], i = this.transform;
        return i && a.applyTransform(n, n, i), n
    }, l.getLocalTransform = function (t, e) {
        e = e || [], o(e);
        var n = t.origin, i = t.scale || [1, 1], a = t.rotation || 0, s = t.position || [0, 0];
        return n && (e[4] -= n[0], e[5] -= n[1]), r.scale(e, e, i), a && r.rotate(e, e, a), n && (e[4] += n[0], e[5] += n[1]), e[4] += s[0], e[5] += s[1], e
    };
    var c = l;
    t.exports = c
}, function (t, e, n) {
    function i(t, e) {
        var n = new y(l(), t, e);
        return x[n.id] = n, n
    }

    function r(t) {
        if (t) t.dispose(); else {
            for (var e in x) x.hasOwnProperty(e) && x[e].dispose();
            x = {}
        }
        return this
    }

    function a(t) {
        return x[t]
    }

    function o(t, e) {
        m[t] = e
    }

    function s(t) {
        delete x[t]
    }

    var l = n(266), u = n(216), h = n(208), c = n(309), d = n(312), f = n(311), p = n(313), g = n(323),
        v = !u.canvasSupported, m = {canvas: f}, x = {}, y = function (t, e, n) {
            n = n || {}, this.dom = e, this.id = t;
            var i = this, r = new d, a = n.renderer;
            if (v) {
                if (!m.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                a = "vml"
            } else a && m[a] || (a = "canvas");
            var o = new m[a](e, r, n);
            this.storage = r, this.painter = o;
            var s = u.node ? null : new g(o.getViewportRoot());
            this.handler = new c(r, o, s, o.root), this.animation = new p({stage: {update: h.bind(this.flush, this)}}), this.animation.start(), this._needsRefresh;
            var l = r.delFromStorage, f = r.addToStorage;
            r.delFromStorage = function (t) {
                l.call(r, t), t && t.removeSelfFromZr(i)
            }, r.addToStorage = function (t) {
                f.call(r, t), t.addSelfToZr(i)
            }
        };
    y.prototype = {
        constructor: y, getId: function () {
            return this.id
        }, add: function (t) {
            this.storage.addRoot(t), this._needsRefresh = !0
        }, remove: function (t) {
            this.storage.delRoot(t), this._needsRefresh = !0
        }, configLayer: function (t, e) {
            this.painter.configLayer(t, e), this._needsRefresh = !0
        }, refreshImmediately: function () {
            this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
        }, refresh: function () {
            this._needsRefresh = !0
        }, flush: function () {
            this._needsRefresh && this.refreshImmediately(), this._needsRefreshHover && this.refreshHoverImmediately()
        }, addHover: function (t, e) {
            this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover())
        }, removeHover: function (t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
        }, clearHover: function () {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
        }, refreshHover: function () {
            this._needsRefreshHover = !0
        }, refreshHoverImmediately: function () {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
        }, resize: function (t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
        }, clearAnimation: function () {
            this.animation.clear()
        }, getWidth: function () {
            return this.painter.getWidth()
        }, getHeight: function () {
            return this.painter.getHeight()
        }, pathToImage: function (t, e) {
            return this.painter.pathToImage(t, e)
        }, setCursorStyle: function (t) {
            this.handler.setCursorStyle(t)
        }, findHover: function (t, e) {
            return this.handler.findHover(t, e)
        }, on: function (t, e, n) {
            this.handler.on(t, e, n)
        }, off: function (t, e) {
            this.handler.off(t, e)
        }, trigger: function (t, e) {
            this.handler.trigger(t, e)
        }, clear: function () {
            this.storage.delRoot(), this.painter.clear()
        }, dispose: function () {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, s(this.id)
        }
    }, e.version = "3.7.4", e.init = i, e.dispose = r, e.getInstance = a, e.registerPainter = o
}, function (t, e, n) {
    function i(t, e) {
        var n = {axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {}};
        return r(n, t, e), n.seriesInvolved && o(n, t), n
    }

    function r(t, e, n) {
        var i = e.getComponent("tooltip"), r = e.getComponent("axisPointer"), o = r.get("link", !0) || [], l = [];
        v(n.getCoordinateSystems(), function (n) {
            function u(i, u, h) {
                var p = h.model.getModel("axisPointer", r), v = p.get("show");
                if (v && ("auto" !== v || i || d(p))) {
                    null == u && (u = p.get("triggerTooltip")), p = i ? a(h, g, r, e, i, u) : p;
                    var m = p.get("snap"), x = f(h.model), y = u || m || "category" === h.type, _ = t.axesInfo[x] = {
                        key: x,
                        axis: h,
                        coordSys: n,
                        axisPointerModel: p,
                        triggerTooltip: u,
                        involveSeries: y,
                        snap: m,
                        useHandle: d(p),
                        seriesModels: []
                    };
                    c[x] = _, t.seriesInvolved |= y;
                    var b = s(o, h);
                    if (null != b) {
                        var w = l[b] || (l[b] = {axesInfo: {}});
                        w.axesInfo[x] = _, w.mapper = o[b].mapper, _.linkGroup = w
                    }
                }
            }

            if (n.axisPointerEnabled) {
                var h = f(n.model), c = t.coordSysAxesInfo[h] = {};
                t.coordSysMap[h] = n;
                var p = n.model, g = p.getModel("tooltip", i);
                if (v(n.getAxes(), m(u, !1, null)), n.getTooltipAxes && i && g.get("show")) {
                    var x = "axis" === g.get("trigger"), y = "cross" === g.get("axisPointer.type"),
                        _ = n.getTooltipAxes(g.get("axisPointer.axis"));
                    (x || y) && v(_.baseAxes, m(u, !y || "cross", x)), y && v(_.otherAxes, m(u, "cross", !1))
                }
            }
        })
    }

    function a(t, e, n, i, r, a) {
        var o = e.getModel("axisPointer"), s = {};
        v(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
            s[t] = p.clone(o.get(t))
        }), s.snap = "category" !== t.type && !!a, "cross" === o.get("type") && (s.type = "line");
        var l = s.label || (s.label = {});
        if (null == l.show && (l.show = !1), "cross" === r && (l.show = !0, !a)) {
            var u = s.lineStyle = o.get("crossStyle");
            u && p.defaults(l, u.textStyle)
        }
        return t.model.getModel("axisPointer", new g(s, n, i))
    }

    function o(t, e) {
        e.eachSeries(function (e) {
            var n = e.coordinateSystem, i = e.get("tooltip.trigger", !0), r = e.get("tooltip.show", !0);
            n && "none" !== i && !1 !== i && "item" !== i && !1 !== r && !1 !== e.get("axisPointer.show", !0) && v(t.coordSysAxesInfo[f(n.model)], function (t) {
                var i = t.axis;
                n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
            })
        }, this)
    }

    function s(t, e) {
        for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
            var a = t[r] || {};
            if (l(a[i + "AxisId"], n.id) || l(a[i + "AxisIndex"], n.componentIndex) || l(a[i + "AxisName"], n.name)) return r
        }
    }

    function l(t, e) {
        return "all" === t || p.isArray(t) && p.indexOf(t, e) >= 0 || t === e
    }

    function u(t) {
        var e = h(t);
        if (e) {
            var n = e.axisPointerModel, i = e.axis.scale, r = n.option, a = n.get("status"), o = n.get("value");
            null != o && (o = i.parse(o));
            var s = d(n);
            null == a && (r.status = s ? "show" : "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
        }
    }

    function h(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[f(t)]
    }

    function c(t) {
        var e = h(t);
        return e && e.axisPointerModel
    }

    function d(t) {
        return !!t.get("handle.show")
    }

    function f(t) {
        return t.type + "||" + t.id
    }

    var p = n(208), g = n(224), v = p.each, m = p.curry;
    e.collect = i, e.fixValue = u, e.getAxisInfo = h, e.getAxisPointerModel = c, e.makeKey = f
}, function (t, e, n) {
    function i(t, e, n) {
        var i = e.getBoxLayoutParams(), r = e.get("padding"), a = {width: n.getWidth(), height: n.getHeight()},
            u = o(i, a, r);
        s(e.get("orient"), t, e.get("itemGap"), u.width, u.height), l(t, i, a, r)
    }

    function r(t, e) {
        var n = u.normalizeCssArray(e.get("padding")), i = e.getItemStyle(["color", "opacity"]);
        i.fill = e.get("backgroundColor");
        var t = new h.Rect({
            shape: {
                x: t.x - n[3],
                y: t.y - n[0],
                width: t.width + n[1] + n[3],
                height: t.height + n[0] + n[2],
                r: e.get("borderRadius")
            }, style: i, silent: !0, z2: -1
        });
        return t
    }

    var a = n(227), o = a.getLayoutRect, s = a.box, l = a.positionElement, u = n(223), h = n(210);
    e.layout = i, e.makeBackground = r
}, function (t, e, n) {
    function i(t, e) {
        var n = t[1] - t[0], i = e, r = n / i / 2;
        t[0] += r, t[1] -= r
    }

    var r = n(208), a = n(212), o = n(232), s = a.linearMap, l = [0, 1], u = function (t, e, n) {
        this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1, this._labelInterval
    };
    u.prototype = {
        constructor: u, contain: function (t) {
            var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
            return t >= n && t <= i
        }, containData: function (t) {
            return this.contain(this.dataToCoord(t))
        }, getExtent: function () {
            return this._extent.slice()
        }, getPixelPrecision: function (t) {
            return a.getPixelPrecision(t || this.scale.getExtent(), this._extent)
        }, setExtent: function (t, e) {
            var n = this._extent;
            n[0] = t, n[1] = e
        }, dataToCoord: function (t, e) {
            var n = this._extent, r = this.scale;
            return t = r.normalize(t), this.onBand && "ordinal" === r.type && (n = n.slice(), i(n, r.count())), s(t, l, n, e)
        }, coordToData: function (t, e) {
            var n = this._extent, r = this.scale;
            this.onBand && "ordinal" === r.type && (n = n.slice(), i(n, r.count()));
            var a = s(t, n, l, e);
            return this.scale.scale(a)
        }, pointToData: function (t, e) {
        }, getTicksCoords: function (t) {
            if (this.onBand && !t) {
                for (var e = this.getBands(), n = [], i = 0; i < e.length; i++) n.push(e[i][0]);
                return e[i - 1] && n.push(e[i - 1][1]), n
            }
            return r.map(this.scale.getTicks(), this.dataToCoord, this)
        }, getLabelsCoords: function () {
            return r.map(this.scale.getTicks(), this.dataToCoord, this)
        }, getBands: function () {
            for (var t = this.getExtent(), e = [], n = this.scale.count(), i = t[0], r = t[1], a = r - i, o = 0; o < n; o++) e.push([a * o / n + i, a * (o + 1) / n + i]);
            return e
        }, getBandWidth: function () {
            var t = this._extent, e = this.scale.getExtent(), n = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === n && (n = 1);
            var i = Math.abs(t[1] - t[0]);
            return Math.abs(i) / n
        }, isHorizontal: null, getRotate: null, getLabelInterval: function () {
            var t = this._labelInterval;
            if (!t) {
                var e = this.model, n = e.getModel("axisLabel");
                t = n.get("interval"), "category" !== this.type || null != t && "auto" !== t || (t = o.getAxisLabelInterval(r.map(this.scale.getTicks(), this.dataToCoord, this), e.getFormattedLabels(), n.getFont(), this.getRotate ? this.getRotate() : this.isHorizontal && !this.isHorizontal() ? 90 : 0, n.get("rotate"))), this._labelInterval = t
            }
            return t
        }
    };
    var h = u;
    t.exports = h
}, function (t, e, n) {
    function i(t) {
        return r.isObject(t) && null != t.value ? t.value : t + ""
    }

    var r = n(208), a = n(232), o = {
        getFormattedLabels: function () {
            return a.getFormattedLabels(this.axis, this.get("axisLabel.formatter"))
        }, getCategories: function () {
            return "category" === this.get("type") && r.map(this.get("data"), i)
        }, getMin: function (t) {
            var e = this.option, n = t || null == e.rangeStart ? e.min : e.rangeStart;
            return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !r.eqNaN(n) && (n = this.axis.scale.parse(n)), n
        }, getMax: function (t) {
            var e = this.option, n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
            return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !r.eqNaN(n) && (n = this.axis.scale.parse(n)), n
        }, getNeedCrossZero: function () {
            var t = this.option;
            return null == t.rangeStart && null == t.rangeEnd && !t.scale
        }, getCoordSysModel: r.noop, setRange: function (t, e) {
            this.option.rangeStart = t, this.option.rangeEnd = e
        }, resetRange: function () {
            this.option.rangeStart = this.option.rangeEnd = null
        }
    };
    t.exports = o
}, function (t, e, n) {
    var i = n(237), r = n(243), a = n(225), o = function () {
        this.group = new i, this.uid = r.getUID("viewComponent")
    };
    o.prototype = {
        constructor: o, init: function (t, e) {
        }, render: function (t, e, n, i) {
        }, dispose: function () {
        }
    };
    var s = o.prototype;
    s.updateView = s.updateLayout = s.updateVisual = function (t, e, n, i) {
    }, a.enableClassExtend(o), a.enableClassManagement(o, {registerWhenExtend: !0});
    var l = o;
    t.exports = l
}, function (t, e, n) {
    function i(t) {
        return r.browser.ie && r.browser.version >= 11 ? function () {
            var e, n = this.__clipPaths, i = this.style;
            if (n) for (var r = 0; r < n.length; r++) {
                var o = n[r], s = o && o.shape, l = o && o.type;
                if (s && ("sector" === l && s.startAngle === s.endAngle || "rect" === l && (!s.width || !s.height))) {
                    for (var u = 0; u < a.length; u++) a[u][2] = i[a[u][0]], i[a[u][0]] = a[u][1];
                    e = !0;
                    break
                }
            }
            if (t.apply(this, arguments), e) for (var u = 0; u < a.length; u++) i[a[u][0]] = a[u][2]
        } : t
    }

    var r = n(216), a = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]];
    t.exports = i
}, function (t, e, n) {
    function i(t) {
        r.each(a, function (e) {
            this[e] = r.bind(t[e], t)
        }, this)
    }

    var r = n(208),
        a = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
        o = i;
    t.exports = o
}, function (t, e, n) {
    function i(t) {
        return o.indexOf(u, t) >= 0
    }

    function r(t, e) {
        t = t.slice();
        var n = o.map(t, s.capitalFirst);
        e = (e || []).slice();
        var i = o.map(e, s.capitalFirst);
        return function (r, a) {
            o.each(t, function (t, o) {
                for (var s = {name: t, capital: n[o]}, l = 0; l < e.length; l++) s[e[l]] = t + i[l];
                r.call(a, s)
            })
        }
    }

    function a(t, e, n) {
        function i(t, e) {
            return o.indexOf(e.nodes, t) >= 0
        }

        function r(t, i) {
            var r = !1;
            return e(function (e) {
                o.each(n(t, e) || [], function (t) {
                    i.records[e.name][t] && (r = !0)
                })
            }), r
        }

        function a(t, i) {
            i.nodes.push(t), e(function (e) {
                o.each(n(t, e) || [], function (t) {
                    i.records[e.name][t] = !0
                })
            })
        }

        return function (n) {
            function o(t) {
                !i(t, s) && r(t, s) && (a(t, s), l = !0)
            }

            var s = {nodes: [], records: {}};
            if (e(function (t) {
                s.records[t.name] = {}
            }), !n) return s;
            a(n, s);
            var l;
            do {
                l = !1, t(o)
            } while (l);
            return s
        }
    }

    var o = n(208), s = n(223), l = ["x", "y", "z", "radius", "angle", "single"],
        u = ["cartesian2d", "polar", "singleAxis"], h = r(l, ["axisIndex", "axis", "index", "id"]);
    e.isCoordSupported = i, e.createNameEach = r, e.eachAxisDim = h, e.createLinkedNodesFinder = a
}, function (t, e, n) {
    var i = n(209);
    n(285), n(287), n(286);
    var r = n(288), a = n(226);
    i.registerProcessor(r), a.registerSubTypeDefaulter("legend", function () {
        return "plain"
    })
}, function (t, e, n) {
    var i = n(209), r = n(208), a = n(224), o = i.extendComponentModel({
        type: "legend.plain",
        dependencies: ["series"],
        layoutMode: {type: "box", ignoreSize: !0},
        init: function (t, e, n) {
            this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}
        },
        mergeOption: function (t) {
            o.superCall(this, "mergeOption", t)
        },
        optionUpdated: function () {
            this._updateData(this.ecModel);
            var t = this._data;
            if (t[0] && "single" === this.get("selectedMode")) {
                for (var e = !1, n = 0; n < t.length; n++) {
                    var i = t[n].get("name");
                    if (this.isSelected(i)) {
                        this.select(i), e = !0;
                        break
                    }
                }
                !e && this.select(t[0].get("name"))
            }
        },
        _updateData: function (t) {
            var e = r.map(this.get("data") || [], function (t) {
                return "string" != typeof t && "number" != typeof t || (t = {name: t}), new a(t, this, this.ecModel)
            }, this);
            this._data = e;
            var n = r.map(t.getSeries(), function (t) {
                return t.name
            });
            t.eachSeries(function (t) {
                if (t.legendDataProvider) {
                    var e = t.legendDataProvider();
                    n = n.concat(e.mapArray(e.getName))
                }
            }), this._availableNames = n
        },
        getData: function () {
            return this._data
        },
        select: function (t) {
            var e = this.option.selected;
            if ("single" === this.get("selectedMode")) {
                var n = this._data;
                r.each(n, function (t) {
                    e[t.get("name")] = !1
                })
            }
            e[t] = !0
        },
        unSelect: function (t) {
            "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
        },
        toggleSelected: function (t) {
            var e = this.option.selected;
            e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
        },
        isSelected: function (t) {
            var e = this.option.selected;
            return !(e.hasOwnProperty(t) && !e[t]) && r.indexOf(this._availableNames, t) >= 0
        },
        defaultOption: {
            zlevel: 0,
            z: 4,
            show: !0,
            orient: "horizontal",
            left: "center",
            top: 0,
            align: "auto",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            inactiveColor: "#ccc",
            textStyle: {color: "#333"},
            selectedMode: !0,
            tooltip: {show: !1}
        }
    }), s = o;
    t.exports = s
}, function (t, e, n) {
    function i(t, e) {
        e.dispatchAction({type: "legendToggleSelect", name: t})
    }

    function r(t, e, n) {
        var i = n.getZr().storage.getDisplayList()[0];
        i && i.useHoverLayer || t.get("legendHoverLink") && n.dispatchAction({
            type: "highlight",
            seriesName: t.name,
            name: e
        })
    }

    function a(t, e, n) {
        var i = n.getZr().storage.getDisplayList()[0];
        i && i.useHoverLayer || t.get("legendHoverLink") && n.dispatchAction({
            type: "downplay",
            seriesName: t.name,
            name: e
        })
    }

    var o = n(214), s = (o.__DEV__, n(209)), l = n(208), u = n(244), h = u.createSymbol, c = n(210), d = n(277),
        f = d.makeBackground, p = n(227), g = l.curry, v = l.each, m = c.Group, x = s.extendComponentView({
            type: "legend.plain", newlineDisabled: !1, init: function () {
                this.group.add(this._contentGroup = new m), this._backgroundEl
            }, getContentGroup: function () {
                return this._contentGroup
            }, render: function (t, e, n) {
                if (this.resetInner(), t.get("show", !0)) {
                    var i = t.get("align");
                    i && "auto" !== i || (i = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), this.renderInner(i, t, e, n);
                    var r = t.getBoxLayoutParams(), a = {width: n.getWidth(), height: n.getHeight()}, o = t.get("padding"),
                        s = p.getLayoutRect(r, a, o), u = this.layoutInner(t, i, s),
                        h = p.getLayoutRect(l.defaults({width: u.width, height: u.height}, r), a, o);
                    this.group.attr("position", [h.x - u.x, h.y - u.y]), this.group.add(this._backgroundEl = f(u, t))
                }
            }, resetInner: function () {
                this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl)
            }, renderInner: function (t, e, n, o) {
                var s = this.getContentGroup(), u = l.createHashMap(), h = e.get("selectedMode");
                v(e.getData(), function (l, c) {
                    var d = l.get("name");
                    if (!this.newlineDisabled && ("" === d || "\n" === d)) return void s.add(new m({newline: !0}));
                    var f = n.getSeriesByName(d)[0];
                    if (!u.get(d)) if (f) {
                        var p = f.getData(), v = p.getVisual("color");
                        "function" == typeof v && (v = v(f.getDataParams(0)));
                        var x = p.getVisual("legendSymbol") || "roundRect", y = p.getVisual("symbol"),
                            _ = this._createItem(d, c, l, e, x, y, t, v, h);
                        _.on("click", g(i, d, o)).on("mouseover", g(r, f, null, o)).on("mouseout", g(a, f, null, o)), u.set(d, !0)
                    } else n.eachRawSeries(function (n) {
                        if (!u.get(d) && n.legendDataProvider) {
                            var s = n.legendDataProvider(), f = s.indexOfName(d);
                            if (f < 0) return;
                            var p = s.getItemVisual(f, "color");
                            this._createItem(d, c, l, e, "roundRect", null, t, p, h).on("click", g(i, d, o)).on("mouseover", g(r, n, d, o)).on("mouseout", g(a, n, d, o)), u.set(d, !0)
                        }
                    }, this)
                }, this)
            }, _createItem: function (t, e, n, i, r, a, o, s, u) {
                var d = i.get("itemWidth"), f = i.get("itemHeight"), p = i.get("inactiveColor"), g = i.isSelected(t),
                    v = new m, x = n.getModel("textStyle"), y = n.get("icon"), _ = n.getModel("tooltip"), b = _.parentModel;
                if (r = y || r, v.add(h(r, 0, 0, d, f, g ? s : p, !0)), !y && a && (a !== r || "none" == a)) {
                    var w = .8 * f;
                    "none" === a && (a = "circle"), v.add(h(a, (d - w) / 2, (f - w) / 2, w, w, g ? s : p))
                }
                var S = "left" === o ? d + 5 : -5, M = o, T = i.get("formatter"), A = t;
                "string" == typeof T && T ? A = T.replace("{name}", null != t ? t : "") : "function" == typeof T && (A = T(t)), v.add(new c.Text({
                    style: c.setTextStyle({}, x, {
                        text: A,
                        x: S,
                        y: f / 2,
                        textFill: g ? x.getTextColor() : p,
                        textAlign: M,
                        textVerticalAlign: "middle"
                    })
                }));
                var C = new c.Rect({
                    shape: v.getBoundingRect(),
                    invisible: !0,
                    tooltip: _.get("show") ? l.extend({
                        content: t,
                        formatter: b.get("formatter", !0) || function () {
                            return t
                        },
                        formatterParams: {componentType: "legend", legendIndex: i.componentIndex, name: t, $vars: ["name"]}
                    }, _.option) : null
                });
                return v.add(C), v.eachChild(function (t) {
                    t.silent = !0
                }), C.silent = !u, this.getContentGroup().add(v), c.setHoverStyle(v), v.__legendDataIndex = e, v
            }, layoutInner: function (t, e, n) {
                var i = this.getContentGroup();
                p.box(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
                var r = i.getBoundingRect();
                return i.attr("position", [-r.x, -r.y]), this.group.getBoundingRect()
            }
        });
    t.exports = x
}, function (t, e, n) {
    function i(t, e, n) {
        var i, r = {}, o = "toggleSelected" === t;
        return n.eachComponent("legend", function (n) {
            o && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name), i = n.isSelected(e.name));
            var s = n.getData();
            a.each(s, function (t) {
                var e = t.get("name");
                if ("\n" !== e && "" !== e) {
                    var i = n.isSelected(e);
                    r.hasOwnProperty(e) ? r[e] = r[e] && i : r[e] = i
                }
            })
        }), {name: e.name, selected: r}
    }

    var r = n(209), a = n(208);
    r.registerAction("legendToggleSelect", "legendselectchanged", a.curry(i, "toggleSelected")), r.registerAction("legendSelect", "legendselected", a.curry(i, "select")), r.registerAction("legendUnSelect", "legendunselected", a.curry(i, "unSelect"))
}, function (t, e) {
    function n(t) {
        var e = t.findComponents({mainType: "legend"});
        e && e.length && t.filterSeries(function (t) {
            for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return !1;
            return !0
        })
    }

    t.exports = n
}, function (t, e, n) {
    var i = n(209), r = n(210), a = n(227), o = a.getLayoutRect;
    i.extendComponentModel({
        type: "title",
        layoutMode: {type: "box", ignoreSize: !0},
        defaultOption: {
            zlevel: 0,
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
            subtextStyle: {color: "#aaa"}
        }
    }), i.extendComponentView({
        type: "title", render: function (t, e, n) {
            if (this.group.removeAll(), t.get("show")) {
                var i = this.group, a = t.getModel("textStyle"), s = t.getModel("subtextStyle"), l = t.get("textAlign"),
                    u = t.get("textBaseline"), h = new r.Text({
                        style: r.setTextStyle({}, a, {
                            text: t.get("text"),
                            textFill: a.getTextColor()
                        }, {disableBox: !0}), z2: 10
                    }), c = h.getBoundingRect(), d = t.get("subtext"), f = new r.Text({
                        style: r.setTextStyle({}, s, {
                            text: d,
                            textFill: s.getTextColor(),
                            y: c.height + t.get("itemGap"),
                            textVerticalAlign: "top"
                        }, {disableBox: !0}), z2: 10
                    }), p = t.get("link"), g = t.get("sublink");
                h.silent = !p, f.silent = !g, p && h.on("click", function () {
                    window.open(p, "_" + t.get("target"))
                }), g && f.on("click", function () {
                    window.open(g, "_" + t.get("subtarget"))
                }), i.add(h), d && i.add(f);
                var v = i.getBoundingRect(), m = t.getBoxLayoutParams();
                m.width = v.width, m.height = v.height;
                var x = o(m, {width: n.getWidth(), height: n.getHeight()}, t.get("padding"));
                l || (l = t.get("left") || t.get("right"), "middle" === l && (l = "center"), "right" === l ? x.x += x.width : "center" === l && (x.x += x.width / 2)), u || (u = t.get("top") || t.get("bottom"), "center" === u && (u = "middle"), "bottom" === u ? x.y += x.height : "middle" === u && (x.y += x.height / 2), u = u || "top"), i.attr("position", [x.x, x.y]);
                var y = {textAlign: l, textVerticalAlign: u};
                h.setStyle(y), f.setStyle(y), v = i.getBoundingRect();
                var _ = x.margin, b = t.getItemStyle(["color", "opacity"]);
                b.fill = t.get("backgroundColor");
                var w = new r.Rect({
                    shape: {
                        x: v.x - _[3],
                        y: v.y - _[0],
                        width: v.width + _[1] + _[3],
                        height: v.height + _[0] + _[2],
                        r: t.get("borderRadius")
                    }, style: b, silent: !0
                });
                r.subPixelOptimizeRect(w), i.add(w)
            }
        }
    })
}, function (t, e, n) {
    function i(t, e, n) {
        if (this.name = t, this.geometries = e, n) n = [n[0], n[1]]; else {
            var i = this.getBoundingRect();
            n = [i.x + i.width / 2, i.y + i.height / 2]
        }
        this.center = n
    }

    var r = n(222), a = n(265), o = n(213), s = n(320);
    i.prototype = {
        constructor: i, properties: null, getBoundingRect: function () {
            var t = this._rect;
            if (t) return t;
            for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], s = [], l = [], u = this.geometries, h = 0; h < u.length; h++) if ("polygon" === u[h].type) {
                var c = u[h].exterior;
                a.fromPoints(c, s, l), o.min(n, n, s), o.max(i, i, l)
            }
            return 0 === h && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new r(n[0], n[1], i[0] - n[0], i[1] - n[1])
        }, contain: function (t) {
            var e = this.getBoundingRect(), n = this.geometries;
            if (!e.contain(t[0], t[1])) return !1;
            t:for (var i = 0, r = n.length; i < r; i++) if ("polygon" === n[i].type) {
                var a = n[i].exterior, o = n[i].interiors;
                if (s.contain(a, t[0], t[1])) {
                    for (var l = 0; l < (o ? o.length : 0); l++) if (s.contain(o[l])) continue t;
                    return !0
                }
            }
            return !1
        }, transformTo: function (t, e, n, i) {
            var a = this.getBoundingRect(), s = a.width / a.height;
            n ? i || (i = n / s) : n = s * i;
            for (var l = new r(t, e, n, i), u = a.calculateTransform(l), h = this.geometries, c = 0; c < h.length; c++) if ("polygon" === h[c].type) {
                for (var d = h[c].exterior, f = h[c].interiors, p = 0; p < d.length; p++) o.applyTransform(d[p], d[p], u);
                for (var g = 0; g < (f ? f.length : 0); g++) for (var p = 0; p < f[g].length; p++) o.applyTransform(f[g][p], f[g][p], u)
            }
            a = this._rect, a.copy(l), this.center = [a.x + a.width / 2, a.y + a.height / 2]
        }
    };
    var l = i;
    t.exports = l
}, function (t, e, n) {
    function i(t) {
        if (!t.UTF8Encoding) return t;
        var e = t.UTF8Scale;
        null == e && (e = 1024);
        for (var n = t.features, i = 0; i < n.length; i++) for (var a = n[i], o = a.geometry, s = o.coordinates, l = o.encodeOffsets, u = 0; u < s.length; u++) {
            var h = s[u];
            if ("Polygon" === o.type) s[u] = r(h, l[u], e); else if ("MultiPolygon" === o.type) for (var c = 0; c < h.length; c++) {
                var d = h[c];
                h[c] = r(d, l[u][c], e)
            }
        }
        return t.UTF8Encoding = !1, t
    }

    function r(t, e, n) {
        for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
            var s = t.charCodeAt(o) - 64, l = t.charCodeAt(o + 1) - 64;
            s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, i.push([s / n, l / n])
        }
        return i
    }

    function a(t) {
        return i(t), o.map(o.filter(t.features, function (t) {
            return t.geometry && t.properties && t.geometry.coordinates.length > 0
        }), function (t) {
            var e = t.properties, n = t.geometry, i = n.coordinates, r = [];
            "Polygon" === n.type && r.push({
                type: "polygon",
                exterior: i[0],
                interiors: i.slice(1)
            }), "MultiPolygon" === n.type && o.each(i, function (t) {
                t[0] && r.push({type: "polygon", exterior: t[0], interiors: t.slice(1)})
            });
            var a = new s(e.name, r, e.cp);
            return a.properties = e, a
        })
    }

    var o = n(208), s = n(290);
    t.exports = a
}, function (t, e, n) {
    var i = n(275);
    e.zrender = i;
    var r = n(231);
    e.matrix = r;
    var a = n(213);
    e.vector = a;
    var o = n(208), s = n(234);
    e.color = s;
    var l = n(210);
    e.graphic = l;
    var u = n(212);
    e.number = u;
    var h = n(223);
    e.format = h;
    var c = n(251);
    c.throttle;
    e.throttle = c.throttle;
    var d = n(293);
    e.helper = d;
    var f = n(241);
    e.List = f;
    var p = n(224);
    e.Model = p;
    var g = n(278);
    e.Axis = g;
    var v = n(216);
    e.env = v;
    var m = n(291);
    e.parseGeoJson = m;
    var x = {};
    o.each(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
        x[t] = o[t]
    }), e.util = x
}, function (t, e, n) {
    function i(t) {
        var e = t.get("data");
        return s(e, t, t.ecModel)
    }

    function r(t, e) {
        var n = e;
        e instanceof h || (n = new h(e), o.mixin(n, u));
        var i = l.createScaleByModel(n);
        return i.setExtent(t[0], t[1]), l.niceScaleExtent(i, n), i
    }

    function a(t) {
        o.mixin(t, u)
    }

    var o = n(208), s = n(252), l = n(232), u = n(279), h = n(224), c = n(250);
    e.completeDimensions = c;
    var d = n(244);
    e.createSymbol = d.createSymbol, e.createList = i, e.createScale = r, e.mixinAxisModelCommonMethods = a
}, function (t, e, n) {
    function i(t, e) {
        e = e || {}, r.defaults(e, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var n = new a.Rect({style: {fill: e.maskColor}, zlevel: e.zlevel, z: 1e4}), i = new a.Arc({
            shape: {startAngle: -o / 2, endAngle: -o / 2 + .1, r: 10},
            style: {stroke: e.color, lineCap: "round", lineWidth: 5},
            zlevel: e.zlevel,
            z: 10001
        }), s = new a.Rect({
            style: {
                fill: "none",
                text: e.text,
                textPosition: "right",
                textDistance: 10,
                textFill: e.textColor
            }, zlevel: e.zlevel, z: 10001
        });
        i.animateShape(!0).when(1e3, {endAngle: 3 * o / 2}).start("circularInOut"), i.animateShape(!0).when(1e3, {startAngle: 3 * o / 2}).delay(300).start("circularInOut");
        var l = new a.Group;
        return l.add(i), l.add(s), l.add(n), l.resize = function () {
            var e = t.getWidth() / 2, r = t.getHeight() / 2;
            i.setShape({cx: e, cy: r});
            var a = i.shape.r;
            s.setShape({x: e - a, y: r - a, width: 2 * a, height: 2 * a}), n.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            })
        }, l.resize(), l
    }

    var r = n(208), a = n(210), o = Math.PI;
    t.exports = i
}, function (t, e, n) {
    function i(t, e) {
        h.each(e, function (e, n) {
            f.hasClass(n) || ("object" == typeof e ? t[n] = t[n] ? h.merge(t[n], e, !1) : h.clone(e) : null == t[n] && (t[n] = e))
        })
    }

    function r(t) {
        t = t, this.option = {}, this.option[w] = 1, this._componentsMap = h.createHashMap({series: []}), this._seriesIndices = null, i(t, this._theme.option), h.merge(t, p, !1), this.mergeOption(t)
    }

    function a(t, e) {
        h.isArray(e) || (e = e ? [e] : []);
        var n = {};
        return v(e, function (e) {
            n[e] = (t.get(e) || []).slice()
        }), n
    }

    function o(t, e, n) {
        return e.type ? e.type : n ? n.subType : f.determineSubType(t, e)
    }

    function s(t) {
        return x(t, function (t) {
            return t.componentIndex
        }) || []
    }

    function l(t, e) {
        return e.hasOwnProperty("subType") ? m(t, function (t) {
            return t.subType === e.subType
        }) : t
    }

    var u = n(214), h = (u.__DEV__, n(208)), c = n(211), d = n(224), f = n(226), p = n(297), g = n(256), v = h.each,
        m = h.filter, x = h.map, y = h.isArray, _ = h.indexOf, b = h.isObject, w = "\0_ec_inner", S = d.extend({
            constructor: S, init: function (t, e, n, i) {
                n = n || {}, this.option = null, this._theme = new d(n), this._optionManager = i
            }, setOption: function (t, e) {
                h.assert(!(w in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
            }, resetOption: function (t) {
                var e = !1, n = this._optionManager;
                if (!t || "recreate" === t) {
                    var i = n.mountOption("recreate" === t);
                    this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : r.call(this, i), e = !0
                }
                if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                    var a = n.getTimelineOption(this);
                    a && (this.mergeOption(a), e = !0)
                }
                if (!t || "recreate" === t || "media" === t) {
                    var o = n.getMediaOption(this, this._api);
                    o.length && v(o, function (t) {
                        this.mergeOption(t, e = !0)
                    }, this)
                }
                return e
            }, mergeOption: function (t) {
                function e(e, r) {
                    var l = c.normalizeToArray(t[e]), u = c.mappingToExists(i.get(e), l);
                    c.makeIdAndName(u), v(u, function (t, n) {
                        var i = t.option;
                        b(i) && (t.keyInfo.mainType = e, t.keyInfo.subType = o(e, i, t.exist))
                    });
                    var d = a(i, r);
                    n[e] = [], i.set(e, []), v(u, function (t, r) {
                        var a = t.exist, o = t.option;
                        if (h.assert(b(o) || a, "Empty component definition"), o) {
                            var s = f.getClass(e, t.keyInfo.subType, !0);
                            if (a && a instanceof s) a.name = t.keyInfo.name, a.mergeOption(o, this), a.optionUpdated(o, !1); else {
                                var l = h.extend({dependentModels: d, componentIndex: r}, t.keyInfo);
                                a = new s(o, this, this, l), h.extend(a, l), a.init(o, this, this, l), a.optionUpdated(null, !0)
                            }
                        } else a.mergeOption({}, this), a.optionUpdated({}, !1);
                        i.get(e)[r] = a, n[e][r] = a.option
                    }, this), "series" === e && (this._seriesIndices = s(i.get("series")))
                }

                var n = this.option, i = this._componentsMap, r = [];
                v(t, function (t, e) {
                    null != t && (f.hasClass(e) ? r.push(e) : n[e] = null == n[e] ? h.clone(t) : h.merge(n[e], t, !0))
                }), f.topologicalTravel(r, f.getAllClassMainTypes(), e, this), this._seriesIndices = this._seriesIndices || []
            }, getOption: function () {
                var t = h.clone(this.option);
                return v(t, function (e, n) {
                    if (f.hasClass(n)) {
                        for (var e = c.normalizeToArray(e), i = e.length - 1; i >= 0; i--) c.isIdInner(e[i]) && e.splice(i, 1);
                        t[n] = e
                    }
                }), delete t[w], t
            }, getTheme: function () {
                return this._theme
            }, getComponent: function (t, e) {
                var n = this._componentsMap.get(t);
                if (n) return n[e || 0]
            }, queryComponents: function (t) {
                var e = t.mainType;
                if (!e) return [];
                var n = t.index, i = t.id, r = t.name, a = this._componentsMap.get(e);
                if (!a || !a.length) return [];
                var o;
                if (null != n) y(n) || (n = [n]), o = m(x(n, function (t) {
                    return a[t]
                }), function (t) {
                    return !!t
                }); else if (null != i) {
                    var s = y(i);
                    o = m(a, function (t) {
                        return s && _(i, t.id) >= 0 || !s && t.id === i
                    })
                } else if (null != r) {
                    var u = y(r);
                    o = m(a, function (t) {
                        return u && _(r, t.name) >= 0 || !u && t.name === r
                    })
                } else o = a.slice();
                return l(o, t)
            }, findComponents: function (t) {
                var e = t.query, n = t.mainType, i = function (t) {
                    var e = n + "Index", i = n + "Id", r = n + "Name";
                    return !t || null == t[e] && null == t[i] && null == t[r] ? null : {
                        mainType: n,
                        index: t[e],
                        id: t[i],
                        name: t[r]
                    }
                }(e), r = i ? this.queryComponents(i) : this._componentsMap.get(n);
                return function (e) {
                    return t.filter ? m(e, t.filter) : e
                }(l(r, t))
            }, eachComponent: function (t, e, n) {
                var i = this._componentsMap;
                if ("function" == typeof t) n = e, e = t, i.each(function (t, i) {
                    v(t, function (t, r) {
                        e.call(n, i, t, r)
                    })
                }); else if (h.isString(t)) v(i.get(t), e, n); else if (b(t)) {
                    var r = this.findComponents(t);
                    v(r, e, n)
                }
            }, getSeriesByName: function (t) {
                var e = this._componentsMap.get("series");
                return m(e, function (e) {
                    return e.name === t
                })
            }, getSeriesByIndex: function (t) {
                return this._componentsMap.get("series")[t]
            }, getSeriesByType: function (t) {
                var e = this._componentsMap.get("series");
                return m(e, function (e) {
                    return e.subType === t
                })
            }, getSeries: function () {
                return this._componentsMap.get("series").slice()
            }, eachSeries: function (t, e) {
                v(this._seriesIndices, function (n) {
                    var i = this._componentsMap.get("series")[n];
                    t.call(e, i, n)
                }, this)
            }, eachRawSeries: function (t, e) {
                v(this._componentsMap.get("series"), t, e)
            }, eachSeriesByType: function (t, e, n) {
                v(this._seriesIndices, function (i) {
                    var r = this._componentsMap.get("series")[i];
                    r.subType === t && e.call(n, r, i)
                }, this)
            }, eachRawSeriesByType: function (t, e, n) {
                return v(this.getSeriesByType(t), e, n)
            }, isSeriesFiltered: function (t) {
                return h.indexOf(this._seriesIndices, t.componentIndex) < 0
            }, getCurrentSeriesIndices: function () {
                return (this._seriesIndices || []).slice()
            }, filterSeries: function (t, e) {
                var n = m(this._componentsMap.get("series"), t, e);
                this._seriesIndices = s(n)
            }, restoreData: function () {
                var t = this._componentsMap;
                this._seriesIndices = s(t.get("series"));
                var e = [];
                t.each(function (t, n) {
                    e.push(n)
                }), f.topologicalTravel(e, f.getAllClassMainTypes(), function (e, n) {
                    v(t.get(e), function (t) {
                        t.restoreData()
                    })
                })
            }
        });
    h.mixin(S, g);
    var M = S;
    t.exports = M
}, function (t, e, n) {
    function i(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
    }

    function r(t, e, n) {
        var i, r, a = [], o = [], s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
            r = r || {};
            var l = t.media;
            d(l, function (t) {
                t && t.option && (t.query ? o.push(t) : i || (i = t))
            })
        }
        return r || (r = t), r.timeline || (r.timeline = s), d([r].concat(a).concat(u.map(o, function (t) {
            return t.option
        })), function (t) {
            d(e, function (e) {
                e(t, n)
            })
        }), {baseOption: r, timelineOptions: a, mediaDefault: i, mediaList: o}
    }

    function a(t, e, n) {
        var i = {width: e, height: n, aspectratio: e / n}, r = !0;
        return u.each(t, function (t, e) {
            var n = e.match(v);
            if (n && n[1] && n[2]) {
                var a = n[1], s = n[2].toLowerCase();
                o(i[s], t, a) || (r = !1)
            }
        }), r
    }

    function o(t, e, n) {
        return "min" === n ? t >= e : "max" === n ? t <= e : t === e
    }

    function s(t, e) {
        return t.join(",") === e.join(",")
    }

    function l(t, e) {
        e = e || {}, d(e, function (e, n) {
            if (null != e) {
                var i = t[n];
                if (c.hasClass(n)) {
                    e = h.normalizeToArray(e), i = h.normalizeToArray(i);
                    var r = h.mappingToExists(i, e);
                    t[n] = p(r, function (t) {
                        return t.option && t.exist ? g(t.exist, t.option, !0) : t.exist || t.option
                    })
                } else t[n] = g(i, e, !0)
            }
        })
    }

    var u = n(208), h = n(211), c = n(226), d = u.each, f = u.clone, p = u.map, g = u.merge, v = /^(min|max)?(.+)$/;
    i.prototype = {
        constructor: i, setOption: function (t, e) {
            t = f(t, !0);
            var n = this._optionBackup, i = r.call(this, t, e, !n);
            this._newBaseOption = i.baseOption, n ? (l(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
        }, mountOption: function (t) {
            var e = this._optionBackup;
            return this._timelineOptions = p(e.timelineOptions, f), this._mediaList = p(e.mediaList, f), this._mediaDefault = f(e.mediaDefault), this._currentMediaIndices = [], f(t ? e.baseOption : this._newBaseOption)
        }, getTimelineOption: function (t) {
            var e, n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (e = f(n[i.getCurrentIndex()], !0))
            }
            return e
        }, getMediaOption: function (t) {
            var e = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, r = this._mediaDefault,
                o = [], l = [];
            if (!i.length && !r) return l;
            for (var u = 0, h = i.length; u < h; u++) a(i[u].query, e, n) && o.push(u);
            return !o.length && r && (o = [-1]), o.length && !s(o, this._currentMediaIndices) && (l = p(o, function (t) {
                return f(-1 === t ? r.option : i[t].option)
            })), this._currentMediaIndices = o, l
        }
    };
    var m = i;
    t.exports = m
}, function (t, e) {
    var n = "";
    "undefined" != typeof navigator && (n = navigator.platform || "");
    var i = {
        color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
        textStyle: {
            fontFamily: n.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        blendMode: null,
        animation: "auto",
        animationDuration: 1e3,
        animationDurationUpdate: 300,
        animationEasing: "exponentialOut",
        animationEasingUpdate: "cubicOut",
        animationThreshold: 2e3,
        progressiveThreshold: 3e3,
        progressive: 400,
        hoverLayerThreshold: 3e3,
        useUTC: !1
    };
    t.exports = i
}, function (t, e, n) {
    var i = n(239),
        r = i([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
        a = {
            getAreaStyle: function (t, e) {
                return r(this, t, e)
            }
        };
    t.exports = a
}, function (t, e) {
    var n = {
        getBoxLayoutParams: function () {
            return {
                left: this.get("left"),
                top: this.get("top"),
                right: this.get("right"),
                bottom: this.get("bottom"),
                width: this.get("width"),
                height: this.get("height")
            }
        }
    };
    t.exports = n
}, function (t, e, n) {
    var i = n(239),
        r = i([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
        a = {
            getItemStyle: function (t, e) {
                var n = r(this, t, e), i = this.getBorderLineDash();
                return i && (n.lineDash = i), n
            }, getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        };
    t.exports = a
}, function (t, e, n) {
    var i = n(239),
        r = i([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        a = {
            getLineStyle: function (t) {
                var e = r(this, t), n = this.getLineDash(e.lineWidth);
                return n && (e.lineDash = n), e
            }, getLineDash: function (t) {
                null == t && (t = 1);
                var e = this.get("type"), n = Math.max(t, 2), i = 4 * t;
                return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
            }
        };
    t.exports = a
}, function (t, e, n) {
    var i = n(228), r = n(210), a = ["textStyle", "color"], o = {
        getTextColor: function (t) {
            var e = this.ecModel;
            return this.getShallow("color") || (!t && e ? e.get(a) : null)
        }, getFont: function () {
            return r.getFont({
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            }, this.ecModel)
        }, getTextRect: function (t) {
            return i.getBoundingRect(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
        }
    };
    t.exports = o
}, function (t, e, n) {
    function i(t, e) {
        e = e.split(",");
        for (var n = t, i = 0; i < e.length && null != (n = n && n[e[i]]); i++) ;
        return n
    }

    function r(t, e, n, i) {
        e = e.split(",");
        for (var r, a = t, o = 0; o < e.length - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];
        (i || null == a[e[o]]) && (a[e[o]] = n)
    }

    function a(t) {
        l(p, function (e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
        })
    }

    function o(t, e) {
        c(t, e), t.series = f(t.series), l(t.series, function (t) {
            if (h(t)) {
                var e = t.type;
                if ("pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                    var n = i(t, "pointer.color");
                    null != n && r(t, "itemStyle.normal.color", n)
                }
                for (var o = 0; o < v.length; o++) if (v[o] === t.type) {
                    a(t);
                    break
                }
            }
        }), t.dataRange && (t.visualMap = t.dataRange), l(g, function (e) {
            var n = t[e];
            n && (u(n) || (n = [n]), l(n, function (t) {
                a(t)
            }))
        })
    }

    var s = n(208), l = s.each, u = s.isArray, h = s.isObject, c = n(304), d = n(211), f = d.normalizeToArray,
        p = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
        g = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        v = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"];
    t.exports = o
}, function (t, e, n) {
    function i(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0, i = p.length; n < i; n++) {
            var r = p[n], a = e.normal, o = e.emphasis;
            a && a[r] && (t[r] = t[r] || {}, t[r].normal ? h.merge(t[r].normal, a[r]) : t[r].normal = a[r], a[r] = null), o && o[r] && (t[r] = t[r] || {}, t[r].emphasis ? h.merge(t[r].emphasis, o[r]) : t[r].emphasis = o[r], o[r] = null)
        }
    }

    function r(t, e) {
        var n = f(t) && t[e], i = f(n) && n.textStyle;
        if (i) for (var r = 0, a = c.TEXT_STYLE_OPTIONS.length; r < a; r++) {
            var e = c.TEXT_STYLE_OPTIONS[r];
            i.hasOwnProperty(e) && (n[e] = i[e])
        }
    }

    function a(t) {
        f(t) && (r(t, "normal"), r(t, "emphasis"))
    }

    function o(t) {
        if (f(t)) {
            i(t), a(t.label), a(t.upperLabel), a(t.edgeLabel);
            var e = t.markPoint;
            i(e), a(e && e.label);
            var n = t.markLine;
            i(t.markLine), a(n && n.label);
            var o = t.markArea;
            a(o && o.label), r(t, "axisLabel"), r(t, "title"), r(t, "detail");
            var s = t.data;
            if (s) for (var l = 0; l < s.length; l++) i(s[l]), a(s[l] && s[l].label);
            var e = t.markPoint;
            if (e && e.data) for (var u = e.data, l = 0; l < u.length; l++) i(u[l]), a(u[l] && u[l].label);
            var n = t.markLine;
            if (n && n.data) for (var c = n.data, l = 0; l < c.length; l++) h.isArray(c[l]) ? (i(c[l][0]), a(c[l][0] && c[l][0].label), i(c[l][1]), a(c[l][1] && c[l][1].label)) : (i(c[l]), a(c[l] && c[l].label))
        }
    }

    function s(t) {
        return h.isArray(t) ? t : t ? [t] : []
    }

    function l(t) {
        return (h.isArray(t) ? t[0] : t) || {}
    }

    function u(t, e) {
        d(s(t.series), function (t) {
            f(t) && o(t)
        });
        var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
        e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), d(n, function (e) {
            d(s(t[e]), function (t) {
                t && (r(t, "axisLabel"), r(t.axisPointer, "label"))
            })
        }), d(s(t.parallel), function (t) {
            var e = t && t.parallelAxisDefault;
            r(e, "axisLabel"), r(e && e.axisPointer, "label")
        }), d(s(t.calendar), function (t) {
            r(t, "dayLabel"), r(t, "monthLabel"), r(t, "yearLabel")
        }), d(s(t.radar), function (t) {
            r(t, "name")
        }), d(s(t.geo), function (t) {
            f(t) && (a(t.label), d(s(t.regions), function (t) {
                a(t.label)
            }))
        }), a(l(t.timeline).label), r(l(t.axisPointer), "label"), r(l(t.tooltip).axisPointer, "label")
    }

    var h = n(208), c = n(211), d = h.each, f = h.isObject,
        p = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
    t.exports = u
}, function (t, e, n) {
    function i(t, e) {
        return c(t, h(e))
    }

    var r = n(208), a = n(235), o = n(212), s = n(242), l = a.prototype, u = s.prototype, h = o.getPrecisionSafe,
        c = o.round, d = Math.floor, f = Math.ceil, p = Math.pow, g = Math.log, v = a.extend({
            type: "log", base: 10, $constructor: function () {
                a.apply(this, arguments), this._originalScale = new s
            }, getTicks: function () {
                var t = this._originalScale, e = this._extent, n = t.getExtent();
                return r.map(u.getTicks.call(this), function (r) {
                    var a = o.round(p(this.base, r));
                    return a = r === e[0] && t.__fixMin ? i(a, n[0]) : a, a = r === e[1] && t.__fixMax ? i(a, n[1]) : a
                }, this)
            }, getLabel: u.getLabel, scale: function (t) {
                return t = l.scale.call(this, t), p(this.base, t)
            }, setExtent: function (t, e) {
                var n = this.base;
                t = g(t) / g(n), e = g(e) / g(n), u.setExtent.call(this, t, e)
            }, getExtent: function () {
                var t = this.base, e = l.getExtent.call(this);
                e[0] = p(t, e[0]), e[1] = p(t, e[1]);
                var n = this._originalScale, r = n.getExtent();
                return n.__fixMin && (e[0] = i(e[0], r[0])), n.__fixMax && (e[1] = i(e[1], r[1])), e
            }, unionExtent: function (t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                t[0] = g(t[0]) / g(e), t[1] = g(t[1]) / g(e), l.unionExtent.call(this, t)
            }, unionExtentFromData: function (t, e) {
                this.unionExtent(t.getDataExtent(e, !0, function (t) {
                    return t > 0
                }))
            }, niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, n = e[1] - e[0];
                if (!(n === 1 / 0 || n <= 0)) {
                    var i = o.quantity(n), r = t / n * i;
                    for (r <= .5 && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
                    var a = [o.round(f(e[0] / i) * i), o.round(d(e[1] / i) * i)];
                    this._interval = i, this._niceExtent = a
                }
            }, niceExtent: function (t) {
                u.niceExtent.call(this, t);
                var e = this._originalScale;
                e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
            }
        });
    r.each(["contain", "normalize"], function (t) {
        v.prototype[t] = function (e) {
            return e = g(e) / g(this.base), l[t].call(this, e)
        }
    }), v.create = function () {
        return new v
    };
    var m = v;
    t.exports = m
}, function (t, e, n) {
    var i = n(208), r = n(235), a = r.prototype, o = r.extend({
        type: "ordinal", init: function (t, e) {
            this._data = t, this._extent = e || [0, t.length - 1]
        }, parse: function (t) {
            return "string" == typeof t ? i.indexOf(this._data, t) : Math.round(t)
        }, contain: function (t) {
            return t = this.parse(t), a.contain.call(this, t) && null != this._data[t]
        }, normalize: function (t) {
            return a.normalize.call(this, this.parse(t))
        }, scale: function (t) {
            return Math.round(a.scale.call(this, t))
        }, getTicks: function () {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;
            return t
        }, getLabel: function (t) {
            return this._data[t]
        }, count: function () {
            return this._extent[1] - this._extent[0] + 1
        }, unionExtentFromData: function (t, e) {
            this.unionExtent(t.getDataExtent(e, !1))
        }, niceTicks: i.noop, niceExtent: i.noop
    });
    o.create = function () {
        return new o
    };
    var s = o;
    t.exports = s
}, function (t, e, n) {
    var i = n(208), r = n(212), a = n(223), o = n(257), s = n(242), l = s.prototype, u = Math.ceil, h = Math.floor,
        c = function (t, e, n, i) {
            for (; n < i;) {
                var r = n + i >>> 1;
                t[r][1] < e ? n = r + 1 : i = r
            }
            return n
        }, d = s.extend({
            type: "time", getLabel: function (t) {
                var e = this._stepLvl, n = new Date(t);
                return a.formatTime(e[0], n, this.getSetting("useUTC"))
            }, niceExtent: function (t) {
                var e = this._extent;
                if (e[0] === e[1] && (e[0] -= 864e5, e[1] += 864e5), e[1] === -1 / 0 && e[0] === 1 / 0) {
                    var n = new Date;
                    e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - 864e5
                }
                this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                var i = this._interval;
                t.fixMin || (e[0] = r.round(h(e[0] / i) * i)), t.fixMax || (e[1] = r.round(u(e[1] / i) * i))
            }, niceTicks: function (t, e, n) {
                t = t || 10;
                var i = this._extent, a = i[1] - i[0], s = a / t;
                null != e && s < e && (s = e), null != n && s > n && (s = n);
                var l = f.length, d = c(f, s, 0, l), p = f[Math.min(d, l - 1)], g = p[1];
                if ("year" === p[0]) {
                    var v = a / g;
                    g *= r.nice(v / t, !0)
                }
                var m = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
                    x = [Math.round(u((i[0] - m) / g) * g + m), Math.round(h((i[1] - m) / g) * g + m)];
                o.fixExtent(x, i), this._stepLvl = p, this._interval = g, this._niceExtent = x
            }, parse: function (t) {
                return +r.parseDate(t)
            }
        });
    i.each(["contain", "normalize"], function (t) {
        d.prototype[t] = function (e) {
            return l[t].call(this, this.parse(e))
        }
    });
    var f = [["hh:mm:ss", 1e3], ["hh:mm:ss", 5e3], ["hh:mm:ss", 1e4], ["hh:mm:ss", 15e3], ["hh:mm:ss", 3e4], ["hh:mm\nMM-dd", 6e4], ["hh:mm\nMM-dd", 3e5], ["hh:mm\nMM-dd", 6e5], ["hh:mm\nMM-dd", 9e5], ["hh:mm\nMM-dd", 18e5], ["hh:mm\nMM-dd", 36e5], ["hh:mm\nMM-dd", 72e5], ["hh:mm\nMM-dd", 216e5], ["hh:mm\nMM-dd", 432e5], ["MM-dd\nyyyy", 864e5], ["MM-dd\nyyyy", 1728e5], ["MM-dd\nyyyy", 2592e5], ["MM-dd\nyyyy", 3456e5], ["MM-dd\nyyyy", 432e6], ["MM-dd\nyyyy", 5184e5], ["week", 6048e5], ["MM-dd\nyyyy", 864e6], ["week", 12096e5], ["week", 18144e5], ["month", 26784e5], ["week", 36288e5], ["month", 53568e5], ["week", 36288e5], ["quarter", 8208e6], ["month", 107136e5], ["month", 13392e6], ["half-year", 16416e6], ["month", 214272e5], ["month", 26784e6], ["year", 32832e6]];
    d.create = function (t) {
        return new d({useUTC: t.ecModel.get("useUTC")})
    };
    var p = d;
    t.exports = p
}, function (t, e, n) {
    function i(t) {
        function e(e) {
            var n = (e.visualColorAccessPath || "itemStyle.normal.color").split("."), i = e.getData(),
                a = e.get(n) || e.getColorFromPalette(e.get("name"));
            i.setVisual("color", a), t.isSeriesFiltered(e) || ("function" != typeof a || a instanceof r || i.each(function (t) {
                i.setItemVisual(t, "color", a(e.getDataParams(t)))
            }), i.each(function (t) {
                var e = i.getItemModel(t), r = e.get(n, !0);
                null != r && i.setItemVisual(t, "color", r)
            }))
        }

        t.eachRawSeries(e)
    }

    var r = n(247);
    t.exports = i
}, function (t, e, n) {
    function i(t, e, n) {
        return {
            type: t,
            event: n,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: n.zrX,
            offsetY: n.zrY,
            gestureEvent: n.gestureEvent,
            pinchX: n.pinchX,
            pinchY: n.pinchY,
            pinchScale: n.pinchScale,
            wheelDelta: n.zrDelta,
            zrByTouch: n.zrByTouch,
            which: n.which
        }
    }

    function r() {
    }

    function a(t, e, n) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i, r = t; r;) {
                if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
                r.silent && (i = !0), r = r.parent
            }
            return !i || h
        }
        return !1
    }

    var o = n(208), s = n(213), l = n(341), u = n(230), h = "silent";
    r.prototype.dispose = function () {
    };
    var c = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        d = function (t, e, n, i) {
            u.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new r, this.proxy = n, n.handler = this, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, l.call(this), o.each(c, function (t) {
                n.on && n.on(t, this[t], this)
            }, this)
        };
    d.prototype = {
        constructor: d, mousemove: function (t) {
            var e = t.zrX, n = t.zrY, i = this._hovered, r = i.target;
            r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);
            var a = this._hovered = this.findHover(e, n), o = a.target, s = this.proxy;
            s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t)
        }, mouseout: function (t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, n = t.toElement || t.relatedTarget;
            do {
                n = n && n.parentNode
            } while (n && 9 != n.nodeType && !(e = n === this.painterRoot));
            !e && this.trigger("globalout", {event: t})
        }, resize: function (t) {
            this._hovered = {}
        }, dispatch: function (t, e) {
            var n = this[t];
            n && n.call(this, e)
        }, dispose: function () {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null
        }, setCursorStyle: function (t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t)
        }, dispatchToElement: function (t, e, n) {
            t = t || {};
            var r = t.target;
            if (!r || !r.silent) {
                for (var a = "on" + e, o = i(e, t, n); r && (r[a] && (o.cancelBubble = r[a].call(r, o)), r.trigger(e, o), r = r.parent, !o.cancelBubble);) ;
                o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer(function (t) {
                    "function" == typeof t[a] && t[a].call(t, o), t.trigger && t.trigger(e, o)
                }))
            }
        }, findHover: function (t, e, n) {
            for (var i = this.storage.getDisplayList(), r = {x: t, y: e}, o = i.length - 1; o >= 0; o--) {
                var s;
                if (i[o] !== n && !i[o].ignore && (s = a(i[o], t, e)) && (!r.topTarget && (r.topTarget = i[o]), s !== h)) {
                    r.target = i[o];
                    break
                }
            }
            return r
        }
    }, o.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        d.prototype[t] = function (e) {
            var n = this.findHover(e.zrX, e.zrY), i = n.target;
            if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i; else if ("mosueup" === t) this._upEl = i; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || s.dist(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(n, t, e)
        }
    }), o.mixin(d, u), o.mixin(d, l);
    var f = d;
    t.exports = f
}, function (t, e, n) {
    function i() {
        return !1
    }

    function r(t, e, n) {
        var i = a.createCanvas(), r = e.getWidth(), o = e.getHeight(), s = i.style;
        return s.position = "absolute", s.left = 0, s.top = 0, s.width = r + "px", s.height = o + "px", i.width = r * n, i.height = o * n, i.setAttribute("data-zr-dom-id", t), i
    }

    var a = n(208), o = n(236), s = o.devicePixelRatio, l = n(270), u = n(269), h = function (t, e, n) {
        var o;
        n = n || s, "string" == typeof t ? o = r(t, e, n) : a.isObject(t) && (o = t, t = o.id), this.id = t, this.dom = o;
        var l = o.style;
        l && (o.onselectstart = i, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", l.padding = 0, l.margin = 0, l["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n
    };
    h.prototype = {
        constructor: h, elCount: 0, __dirty: !0, initContext: function () {
            this.ctx = this.dom.getContext("2d"), this.ctx.__currentValues = {}, this.ctx.dpr = this.dpr
        }, createBackBuffer: function () {
            var t = this.dpr;
            this.domBack = r("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), this.ctxBack.__currentValues = {}, 1 != t && this.ctxBack.scale(t, t)
        }, resize: function (t, e) {
            var n = this.dpr, i = this.dom, r = i.style, a = this.domBack;
            r.width = t + "px", r.height = e + "px", i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n))
        }, clear: function (t) {
            var e = this.dom, n = this.ctx, i = e.width, r = e.height, a = this.clearColor, o = this.motionBlur && !t,
                s = this.lastFrameAlpha, h = this.dpr;
            if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, i / h, r / h)), n.clearRect(0, 0, i, r), a) {
                var c;
                a.colorStops ? (c = a.__canvasGradient || l.getGradient(n, a, {
                    x: 0,
                    y: 0,
                    width: i,
                    height: r
                }), a.__canvasGradient = c) : a.image && (c = u.prototype.getCanvasPattern.call(a, n)), n.save(), n.fillStyle = c || a, n.fillRect(0, 0, i, r), n.restore()
            }
            if (o) {
                var d = this.domBack;
                n.save(), n.globalAlpha = s, n.drawImage(d, 0, 0, i, r), n.restore()
            }
        }
    };
    var c = h;
    t.exports = c
}, function (t, e, n) {
    function i(t) {
        return parseInt(t, 10)
    }

    function r(t) {
        return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh)
    }

    function a(t) {
        t.__unusedCount++
    }

    function o(t) {
        1 == t.__unusedCount && t.clear()
    }

    function s(t, e, n) {
        return _.copy(t.getBoundingRect()), t.transform && _.applyTransform(t.transform), b.width = e, b.height = n, !_.intersect(b)
    }

    function l(t, e) {
        if (t == e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0
    }

    function u(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
        }
    }

    function h(t, e) {
        var n = document.createElement("div");
        return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
    }

    var c = n(236), d = c.devicePixelRatio, f = n(208), p = n(267), g = n(222), v = n(245), m = n(310), x = n(261),
        y = n(268), _ = new g(0, 0, 0, 0), b = new g(0, 0, 0, 0), w = function (t, e, n) {
            this.type = "canvas";
            var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            this._opts = n = f.extend({}, n || {}), this.dpr = n.devicePixelRatio || d, this._singleCanvas = i, this.root = t;
            var r = t.style;
            r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
            var a = this._zlevelList = [], o = this._layers = {};
            if (this._layerConfig = {}, i) {
                null != n.width && (t.width = n.width), null != n.height && (t.height = n.height);
                var s = t.width, l = t.height;
                this._width = s, this._height = l;
                var u = new m(t, this, 1);
                u.initContext(), o[0] = u, a.push(0), this._domRoot = t
            } else {
                this._width = this._getSize(0), this._height = this._getSize(1);
                var c = this._domRoot = h(this._width, this._height);
                t.appendChild(c)
            }
            this._progressiveLayers = [], this._hoverlayer, this._hoverElements = []
        };
    w.prototype = {
        constructor: w, getType: function () {
            return "canvas"
        }, isSingleCanvas: function () {
            return this._singleCanvas
        }, getViewportRoot: function () {
            return this._domRoot
        }, getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            if (t) return {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0}
        }, refresh: function (t) {
            var e = this.storage.getDisplayList(!0), n = this._zlevelList;
            this._paintList(e, t);
            for (var i = 0; i < n.length; i++) {
                var r = n[i], a = this._layers[r];
                !a.__builtin__ && a.refresh && a.refresh()
            }
            return this.refreshHover(), this._progressiveLayers.length && this._startProgessive(), this
        }, addHover: function (t, e) {
            if (!t.__hoverMir) {
                var n = new t.constructor({style: t.style, shape: t.shape});
                n.__from = t, t.__hoverMir = n, n.setStyle(e), this._hoverElements.push(n)
            }
        }, removeHover: function (t) {
            var e = t.__hoverMir, n = this._hoverElements, i = f.indexOf(n, e);
            i >= 0 && n.splice(i, 1), t.__hoverMir = null
        }, clearHover: function (t) {
            for (var e = this._hoverElements, n = 0; n < e.length; n++) {
                var i = e[n].__from;
                i && (i.__hoverMir = null)
            }
            e.length = 0
        }, refreshHover: function () {
            var t = this._hoverElements, e = t.length, n = this._hoverlayer;
            if (n && n.clear(), e) {
                v(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(1e5));
                var i = {};
                n.ctx.save();
                for (var r = 0; r < e;) {
                    var a = t[r], o = a.__from;
                    o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--)
                }
                n.ctx.restore()
            }
        }, _startProgessive: function () {
            function t() {
                n === e._progressiveToken && e.storage && (e._doPaintList(e.storage.getDisplayList()), e._furtherProgressive ? (e._progress++, x(t)) : e._progressiveToken = -1)
            }

            var e = this;
            if (e._furtherProgressive) {
                var n = e._progressiveToken = +new Date;
                e._progress++, x(t)
            }
        }, _clearProgressive: function () {
            this._progressiveToken = -1, this._progress = 0, f.each(this._progressiveLayers, function (t) {
                t.__dirty && t.clear()
            })
        }, _paintList: function (t, e) {
            null == e && (e = !1), this._updateLayerStatus(t), this._clearProgressive(), this.eachBuiltinLayer(a), this._doPaintList(t, e), this.eachBuiltinLayer(o)
        }, _doPaintList: function (t, e) {
            function n(t) {
                var e = a.dpr || 1;
                a.save(), a.globalAlpha = 1, a.shadowBlur = 0, i.__dirty = !0, a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(t.dom, 0, 0, h * e, c * e), a.restore()
            }

            for (var i, r, a, o, s, l, u = 0, h = this._width, c = this._height, d = this._progress, g = 0, v = t.length; g < v; g++) {
                var m = t[g], x = this._singleCanvas ? 0 : m.zlevel, y = m.__frame;
                if (y < 0 && s && (n(s), s = null), r !== x && (a && a.restore(), o = {}, r = x, i = this.getLayer(r), i.__builtin__ || p("ZLevel " + r + " has been used by unkown layer " + i.id), a = i.ctx, a.save(), i.__unusedCount = 0, (i.__dirty || e) && i.clear()), i.__dirty || e) {
                    if (y >= 0) {
                        if (!s) {
                            if (s = this._progressiveLayers[Math.min(u++, 4)], s.ctx.save(), s.renderScope = {}, s && s.__progress > s.__maxProgress) {
                                g = s.__nextIdxNotProg - 1;
                                continue
                            }
                            l = s.__progress, s.__dirty || (d = l), s.__progress = d + 1
                        }
                        y === d && this._doPaintEl(m, s, !0, s.renderScope)
                    } else this._doPaintEl(m, i, e, o);
                    m.__dirty = !1
                }
            }
            s && n(s), a && a.restore(), this._furtherProgressive = !1, f.each(this._progressiveLayers, function (t) {
                t.__maxProgress >= t.__progress && (this._furtherProgressive = !0)
            }, this)
        }, _doPaintEl: function (t, e, n, i) {
            var r = e.ctx, a = t.transform;
            if ((e.__dirty || n) && !t.invisible && 0 !== t.style.opacity && (!a || a[0] || a[3]) && (!t.culling || !s(t, this._width, this._height))) {
                var o = t.__clipPaths;
                (i.prevClipLayer !== e || l(o, i.prevElClipPaths)) && (i.prevElClipPaths && (i.prevClipLayer.ctx.restore(), i.prevClipLayer = i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), u(o, r), i.prevClipLayer = e, i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r)
            }
        }, getLayer: function (t) {
            if (this._singleCanvas) return this._layers[0];
            var e = this._layers[t];
            return e || (e = new m("zr_" + t, this, this.dpr), e.__builtin__ = !0, this._layerConfig[t] && f.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
        }, insertLayer: function (t, e) {
            var n = this._layers, i = this._zlevelList, a = i.length, o = null, s = -1, l = this._domRoot;
            if (n[t]) return void p("ZLevel " + t + " has been used already");
            if (!r(e)) return void p("Layer of zlevel " + t + " is not valid");
            if (a > 0 && t > i[0]) {
                for (s = 0; s < a - 1 && !(i[s] < t && i[s + 1] > t); s++) ;
                o = n[i[s]]
            }
            if (i.splice(s + 1, 0, t), n[t] = e, !e.virtual) if (o) {
                var u = o.dom;
                u.nextSibling ? l.insertBefore(e.dom, u.nextSibling) : l.appendChild(e.dom)
            } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom)
        }, eachLayer: function (t, e) {
            var n, i, r = this._zlevelList;
            for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n)
        }, eachBuiltinLayer: function (t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i)
        }, eachOtherLayer: function (t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i)
        }, getLayers: function () {
            return this._layers
        }, _updateLayerStatus: function (t) {
            var e = this._layers, n = this._progressiveLayers, i = {}, r = {};
            this.eachBuiltinLayer(function (t, e) {
                i[e] = t.elCount, t.elCount = 0, t.__dirty = !1
            }), f.each(n, function (t, e) {
                r[e] = t.elCount, t.elCount = 0, t.__dirty = !1
            });
            for (var a, o, s = 0, l = 0, u = 0, h = t.length; u < h; u++) {
                var c = t[u], d = this._singleCanvas ? 0 : c.zlevel, p = e[d], g = c.progressive;
                if (p && (p.elCount++, p.__dirty = p.__dirty || c.__dirty), g >= 0) {
                    o !== g && (o = g, l++);
                    var v = c.__frame = l - 1;
                    if (!a) {
                        var x = Math.min(s, 4);
                        a = n[x], a || (a = n[x] = new m("progressive", this, this.dpr), a.initContext()), a.__maxProgress = 0
                    }
                    a.__dirty = a.__dirty || c.__dirty, a.elCount++, a.__maxProgress = Math.max(a.__maxProgress, v), a.__maxProgress >= a.__progress && (p.__dirty = !0)
                } else c.__frame = -1, a && (a.__nextIdxNotProg = u, s++, a = null)
            }
            a && (s++, a.__nextIdxNotProg = u), this.eachBuiltinLayer(function (t, e) {
                i[e] !== t.elCount && (t.__dirty = !0)
            }), n.length = Math.min(s, 5), f.each(n, function (t, e) {
                r[e] !== t.elCount && (c.__dirty = !0), t.__dirty && (t.__progress = 0)
            })
        }, clear: function () {
            return this.eachBuiltinLayer(this._clearLayer), this
        }, _clearLayer: function (t) {
            t.clear()
        }, configLayer: function (t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? f.merge(n[t], e, !0) : n[t] = e;
                var i = this._layers[t];
                i && f.merge(i, n[t], !0)
            }
        }, delLayer: function (t) {
            var e = this._layers, n = this._zlevelList, i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(f.indexOf(n, t), 1))
        }, resize: function (t, e) {
            var n = this._domRoot;
            n.style.display = "none";
            var i = this._opts;
            if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
                n.style.width = t + "px", n.style.height = e + "px";
                for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                f.each(this._progressiveLayers, function (n) {
                    n.resize(t, e)
                }), this.refresh(!0)
            }
            return this._width = t, this._height = e, this
        }, clearLayer: function (t) {
            var e = this._layers[t];
            e && e.clear()
        }, dispose: function () {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
        }, getRenderedCanvas: function (t) {
            function e(t, e) {
                var i = o._zlevelList;
                null == t && (t = -1 / 0);
                for (var r, a = 0; a < i.length; a++) {
                    var s = i[a], l = o._layers[s];
                    if (!l.__builtin__ && s > t && s < e) {
                        r = l;
                        break
                    }
                }
                r && r.renderToCanvas && (n.ctx.save(), r.renderToCanvas(n.ctx), n.ctx.restore())
            }

            if (t = t || {}, this._singleCanvas) return this._layers[0].dom;
            var n = new m("image", this, t.pixelRatio || this.dpr);
            n.initContext(), n.clearColor = t.backgroundColor, n.clear();
            for (var i, r = this.storage.getDisplayList(!0), a = {}, o = this, s = 0; s < r.length; s++) {
                var l = r[s];
                l.zlevel !== i && (e(i, l.zlevel), i = l.zlevel), this._doPaintEl(l, n, !0, a)
            }
            return e(i, 1 / 0), n.dom
        }, getWidth: function () {
            return this._width
        }, getHeight: function () {
            return this._height
        }, _getSize: function (t) {
            var e = this._opts, n = ["width", "height"][t], r = ["clientWidth", "clientHeight"][t],
                a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var s = this.root, l = document.defaultView.getComputedStyle(s);
            return (s[r] || i(l[n]) || i(s.style[n])) - (i(l[a]) || 0) - (i(l[o]) || 0) | 0
        }, pathToImage: function (t, e) {
            e = e || this.dpr;
            var n = document.createElement("canvas"), i = n.getContext("2d"), r = t.getBoundingRect(), a = t.style,
                o = a.shadowBlur, s = a.shadowOffsetX, l = a.shadowOffsetY, u = a.hasStroke() ? a.lineWidth : 0,
                h = Math.max(u / 2, -s + o), c = Math.max(u / 2, s + o), d = Math.max(u / 2, -l + o),
                f = Math.max(u / 2, l + o), p = r.width + h + c, g = r.height + d + f;
            n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
            var v = {position: t.position, rotation: t.rotation, scale: t.scale};
            t.position = [h - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
            var m = y, x = new m({style: {x: 0, y: 0, image: n}});
            return null != v.position && (x.position = t.position = v.position), null != v.rotation && (x.rotation = t.rotation = v.rotation), null != v.scale && (x.scale = t.scale = v.scale), x
        }
    };
    var S = w;
    t.exports = S
}, function (t, e, n) {
    function i(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }

    var r = n(208), a = n(216), o = n(237), s = n(245), l = function () {
        this._roots = [], this._displayList = [], this._displayListLen = 0
    };
    l.prototype = {
        constructor: l, traverse: function (t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
        }, getDisplayList: function (t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList
        }, updateDisplayList: function (t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, r = 0, o = e.length; r < o; r++) this._updateAndAddDisplayable(e[r], null, t);
            n.length = this._displayListLen, a.canvasSupported && s(n, i)
        }, _updateAndAddDisplayable: function (t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var i = t.clipPath;
                if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath
                }
                if (t.isGroup) {
                    for (var o = t._children, s = 0; s < o.length; s++) {
                        var l = o[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n)
                    }
                    t.__dirty = !1
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
            }
        }, addRoot: function (t) {
            t.__storage !== this && (t instanceof o && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
        }, delRoot: function (t) {
            if (null == t) {
                for (var e = 0; e < this._roots.length; e++) {
                    var n = this._roots[e];
                    n instanceof o && n.delChildrenFromStorage(this)
                }
                return this._roots = [], this._displayList = [], void (this._displayListLen = 0)
            }
            if (t instanceof Array) for (var e = 0, i = t.length; e < i; e++) this.delRoot(t[e]); else {
                var a = r.indexOf(this._roots, t);
                a >= 0 && (this.delFromStorage(t), this._roots.splice(a, 1), t instanceof o && t.delChildrenFromStorage(this))
            }
        }, addToStorage: function (t) {
            return t.__storage = this, t.dirty(!1), this
        }, delFromStorage: function (t) {
            return t && (t.__storage = null), this
        }, dispose: function () {
            this._renderList = this._roots = null
        }, displayableSortFunc: i
    };
    var u = l;
    t.exports = u
}, function (t, e, n) {
    var i = n(208), r = n(233), a = r.Dispatcher, o = n(261), s = n(260), l = function (t) {
        t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
        }, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, a.call(this)
    };
    l.prototype = {
        constructor: l, addClip: function (t) {
            this._clips.push(t)
        }, addAnimator: function (t) {
            t.animation = this;
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
        }, removeClip: function (t) {
            var e = i.indexOf(this._clips, t);
            e >= 0 && this._clips.splice(e, 1)
        }, removeAnimator: function (t) {
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
            t.animation = null
        }, _update: function () {
            for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; o < i; o++) {
                var s = n[o], l = s.step(t, e);
                l && (r.push(l), a.push(s))
            }
            for (var o = 0; o < i;) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
            i = r.length;
            for (var o = 0; o < i; o++) a[o].fire(r[o]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
        }, _startLoop: function () {
            function t() {
                e._running && (o(t), !e._paused && e._update())
            }

            var e = this;
            this._running = !0, o(t)
        }, start: function () {
            this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
        }, stop: function () {
            this._running = !1
        }, pause: function () {
            this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
        }, resume: function () {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
        }, clear: function () {
            this._clips = []
        }, animate: function (t, e) {
            e = e || {};
            var n = new s(t, e.loop, e.getter, e.setter);
            return this.addAnimator(n), n
        }
    }, i.mixin(l, a);
    var u = l;
    t.exports = u
}, function (t, e, n) {
    function i(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
    }

    var r = n(315);
    i.prototype = {
        constructor: i, step: function (t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);
            var n = (t - this._startTime - this._pausedTime) / this._life;
            if (!(n < 0)) {
                n = Math.min(n, 1);
                var i = this.easing, a = "string" == typeof i ? r[i] : i, o = "function" == typeof a ? a(n) : n;
                return this.fire("frame", o), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
            }
        }, restart: function (t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
        }, fire: function (t, e) {
            t = "on" + t, this[t] && this[t](this._target, e)
        }, pause: function () {
            this._paused = !0
        }, resume: function () {
            this._paused = !1
        }
    };
    var a = i;
    t.exports = a
}, function (t, e) {
    var n = {
        linear: function (t) {
            return t
        }, quadraticIn: function (t) {
            return t * t
        }, quadraticOut: function (t) {
            return t * (2 - t)
        }, quadraticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }, cubicIn: function (t) {
            return t * t * t
        }, cubicOut: function (t) {
            return --t * t * t + 1
        }, cubicInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, quarticIn: function (t) {
            return t * t * t * t
        }, quarticOut: function (t) {
            return 1 - --t * t * t * t
        }, quarticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }, quinticIn: function (t) {
            return t * t * t * t * t
        }, quinticOut: function (t) {
            return --t * t * t * t * t + 1
        }, quinticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, sinusoidalIn: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, sinusoidalOut: function (t) {
            return Math.sin(t * Math.PI / 2)
        }, sinusoidalInOut: function (t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }, exponentialIn: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        }, exponentialOut: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }, exponentialInOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }, circularIn: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, circularOut: function (t) {
            return Math.sqrt(1 - --t * t)
        }, circularInOut: function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, elasticIn: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
        }, elasticOut: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
        }, elasticInOut: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
        }, backIn: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, backOut: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1
        }, backInOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        }, bounceIn: function (t) {
            return 1 - n.bounceOut(1 - t)
        }, bounceOut: function (t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, bounceInOut: function (t) {
            return t < .5 ? .5 * n.bounceIn(2 * t) : .5 * n.bounceOut(2 * t - 1) + .5
        }
    }, i = n;
    t.exports = i
}, function (t, e, n) {
    function i(t, e, n, i, r, s, l, u, h) {
        if (0 === l) return !1;
        var c = l;
        u -= t, h -= e;
        var d = Math.sqrt(u * u + h * h);
        if (d - c > n || d + c < n) return !1;
        if (Math.abs(i - r) % o < 1e-4) return !0;
        if (s) {
            var f = i;
            i = a(r), r = a(f)
        } else i = a(i), r = a(r);
        i > r && (r += o);
        var p = Math.atan2(h, u);
        return p < 0 && (p += o), p >= i && p <= r || p + o >= i && p + o <= r
    }

    var r = n(262), a = r.normalizeRadian, o = 2 * Math.PI;
    e.containStroke = i
}, function (t, e, n) {
    function i(t, e, n, i, a, o, s, l, u, h, c) {
        if (0 === u) return !1;
        var d = u;
        return !(c > e + d && c > i + d && c > o + d && c > l + d || c < e - d && c < i - d && c < o - d && c < l - d || h > t + d && h > n + d && h > a + d && h > s + d || h < t - d && h < n - d && h < a - d && h < s - d) && r.cubicProjectPoint(t, e, n, i, a, o, s, l, h, c, null) <= d / 2
    }

    var r = n(229);
    e.containStroke = i
}, function (t, e) {
    function n(t, e, n, i, r, a, o) {
        if (0 === r) return !1;
        var s = r, l = 0, u = t;
        if (o > e + s && o > i + s || o < e - s && o < i - s || a > t + s && a > n + s || a < t - s && a < n - s) return !1;
        if (t === n) return Math.abs(a - t) <= s / 2;
        l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);
        var h = l * a - o + u;
        return h * h / (l * l + 1) <= s / 2 * s / 2
    }

    e.containStroke = n
}, function (t, e, n) {
    function i(t, e) {
        return Math.abs(t - e) < w
    }

    function r() {
        var t = M[0];
        M[0] = M[1], M[1] = t
    }

    function a(t, e, n, i, a, o, s, l, u, h) {
        if (h > e && h > i && h > o && h > l || h < e && h < i && h < o && h < l) return 0;
        var c = x.cubicRootAt(e, i, o, l, h, S);
        if (0 === c) return 0;
        for (var d, f, p = 0, g = -1, v = 0; v < c; v++) {
            var m = S[v], y = 0 === m || 1 === m ? .5 : 1;
            x.cubicAt(t, n, a, s, m) < u || (g < 0 && (g = x.cubicExtrema(e, i, o, l, M), M[1] < M[0] && g > 1 && r(), d = x.cubicAt(e, i, o, l, M[0]), g > 1 && (f = x.cubicAt(e, i, o, l, M[1]))), 2 == g ? m < M[0] ? p += d < e ? y : -y : m < M[1] ? p += f < d ? y : -y : p += l < f ? y : -y : m < M[0] ? p += d < e ? y : -y : p += l < d ? y : -y)
        }
        return p
    }

    function o(t, e, n, i, r, a, o, s) {
        if (s > e && s > i && s > a || s < e && s < i && s < a) return 0;
        var l = x.quadraticRootAt(e, i, a, s, S);
        if (0 === l) return 0;
        var u = x.quadraticExtremum(e, i, a);
        if (u >= 0 && u <= 1) {
            for (var h = 0, c = x.quadraticAt(e, i, a, u), d = 0; d < l; d++) {
                var f = 0 === S[d] || 1 === S[d] ? .5 : 1, p = x.quadraticAt(t, n, r, S[d]);
                p < o || (S[d] < u ? h += c < e ? f : -f : h += a < c ? f : -f)
            }
            return h
        }
        var f = 0 === S[0] || 1 === S[0] ? .5 : 1, p = x.quadraticAt(t, n, r, S[0]);
        return p < o ? 0 : a < e ? f : -f
    }

    function s(t, e, n, i, r, a, o, s) {
        if ((s -= e) > n || s < -n) return 0;
        var l = Math.sqrt(n * n - s * s);
        S[0] = -l, S[1] = l;
        var u = Math.abs(i - r);
        if (u < 1e-4) return 0;
        if (u % b < 1e-4) {
            i = 0, r = b;
            var h = a ? 1 : -1;
            return o >= S[0] + t && o <= S[1] + t ? h : 0
        }
        if (a) {
            var l = i;
            i = m(r), r = m(l)
        } else i = m(i), r = m(r);
        i > r && (r += b);
        for (var c = 0, d = 0; d < 2; d++) {
            var f = S[d];
            if (f + t > o) {
                var p = Math.atan2(s, f), h = a ? 1 : -1;
                p < 0 && (p = b + p), (p >= i && p <= r || p + b >= i && p + b <= r) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h)
            }
        }
        return c
    }

    function l(t, e, n, r, l) {
        for (var u = 0, h = 0, c = 0, v = 0, m = 0, x = 0; x < t.length;) {
            var b = t[x++];
            switch (b === _.M && x > 1 && (n || (u += y(h, c, v, m, r, l))), 1 == x && (h = t[x], c = t[x + 1], v = h, m = c), b) {
                case _.M:
                    v = t[x++], m = t[x++], h = v, c = m;
                    break;
                case _.L:
                    if (n) {
                        if (d.containStroke(h, c, t[x], t[x + 1], e, r, l)) return !0
                    } else u += y(h, c, t[x], t[x + 1], r, l) || 0;
                    h = t[x++], c = t[x++];
                    break;
                case _.C:
                    if (n) {
                        if (f.containStroke(h, c, t[x++], t[x++], t[x++], t[x++], t[x], t[x + 1], e, r, l)) return !0
                    } else u += a(h, c, t[x++], t[x++], t[x++], t[x++], t[x], t[x + 1], r, l) || 0;
                    h = t[x++], c = t[x++];
                    break;
                case _.Q:
                    if (n) {
                        if (p.containStroke(h, c, t[x++], t[x++], t[x], t[x + 1], e, r, l)) return !0
                    } else u += o(h, c, t[x++], t[x++], t[x], t[x + 1], r, l) || 0;
                    h = t[x++], c = t[x++];
                    break;
                case _.A:
                    var w = t[x++], S = t[x++], M = t[x++], T = t[x++], A = t[x++], C = t[x++],
                        I = (t[x++], 1 - t[x++]), D = Math.cos(A) * M + w, k = Math.sin(A) * T + S;
                    x > 1 ? u += y(h, c, D, k, r, l) : (v = D, m = k);
                    var P = (r - w) * T / M + w;
                    if (n) {
                        if (g.containStroke(w, S, T, A, A + C, I, e, P, l)) return !0
                    } else u += s(w, S, T, A, A + C, I, P, l);
                    h = Math.cos(A + C) * M + w, c = Math.sin(A + C) * T + S;
                    break;
                case _.R:
                    v = h = t[x++], m = c = t[x++];
                    var L = t[x++], O = t[x++], D = v + L, k = m + O;
                    if (n) {
                        if (d.containStroke(v, m, D, m, e, r, l) || d.containStroke(D, m, D, k, e, r, l) || d.containStroke(D, k, v, k, e, r, l) || d.containStroke(v, k, v, m, e, r, l)) return !0
                    } else u += y(D, m, D, k, r, l), u += y(v, k, v, m, r, l);
                    break;
                case _.Z:
                    if (n) {
                        if (d.containStroke(h, c, v, m, e, r, l)) return !0
                    } else u += y(h, c, v, m, r, l);
                    h = v, c = m
            }
        }
        return n || i(c, m) || (u += y(h, c, v, m, r, l) || 0), 0 !== u
    }

    function u(t, e, n) {
        return l(t, 0, !1, e, n)
    }

    function h(t, e, n, i) {
        return l(t, e, !0, n, i)
    }

    var c = n(238), d = n(318), f = n(317), p = n(321), g = n(316), v = n(262), m = v.normalizeRadian, x = n(229),
        y = n(263), _ = c.CMD, b = 2 * Math.PI, w = 1e-4, S = [-1, -1, -1], M = [-1, -1];
    e.contain = u, e.containStroke = h
}, function (t, e, n) {
    function i(t, e) {
        return Math.abs(t - e) < o
    }

    function r(t, e, n) {
        var r = 0, o = t[0];
        if (!o) return !1;
        for (var s = 1; s < t.length; s++) {
            var l = t[s];
            r += a(o[0], o[1], l[0], l[1], e, n), o = l
        }
        var u = t[0];
        return i(o[0], u[0]) && i(o[1], u[1]) || (r += a(o[0], o[1], u[0], u[1], e, n)), 0 !== r
    }

    var a = n(263), o = 1e-8;
    e.contain = r
}, function (t, e, n) {
    function i(t, e, n, i, r, o, s, l, u) {
        if (0 === s) return !1;
        var h = s;
        return !(u > e + h && u > i + h && u > o + h || u < e - h && u < i - h && u < o - h || l > t + h && l > n + h && l > r + h || l < t - h && l < n - h && l < r - h) && a(t, e, n, i, r, o, l, u, null) <= h / 2
    }

    var r = n(229), a = r.quadraticProjectPoint;
    e.containStroke = i
}, function (t, e, n) {
    function i(t) {
        var e = t[1][0] - t[0][0], n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n)
    }

    function r(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }

    var a = n(233), o = function () {
        this._track = []
    };
    o.prototype = {
        constructor: o, recognize: function (t, e, n) {
            return this._doTrack(t, e, n), this._recognize(t)
        }, clear: function () {
            return this._track.length = 0, this
        }, _doTrack: function (t, e, n) {
            var i = t.touches;
            if (i) {
                for (var r = {points: [], touches: [], target: e, event: t}, o = 0, s = i.length; o < s; o++) {
                    var l = i[o], u = a.clientToLocal(n, l, {});
                    r.points.push([u.zrX, u.zrY]), r.touches.push(l)
                }
                this._track.push(r)
            }
        }, _recognize: function (t) {
            for (var e in s) if (s.hasOwnProperty(e)) {
                var n = s[e](this._track, t);
                if (n) return n
            }
        }
    };
    var s = {
        pinch: function (t, e) {
            var n = t.length;
            if (n) {
                var a = (t[n - 1] || {}).points, o = (t[n - 2] || {}).points || a;
                if (o && o.length > 1 && a && a.length > 1) {
                    var s = i(a) / i(o);
                    !isFinite(s) && (s = 1), e.pinchScale = s;
                    var l = r(a);
                    return e.pinchX = l[0], e.pinchY = l[1], {type: "pinch", target: t[0].target, event: e}
                }
            }
        }
    }, l = o;
    t.exports = l
}, function (t, e, n) {
    function i(t) {
        return "mousewheel" === t && g.browser.firefox ? "DOMMouseScroll" : t
    }

    function r(t, e, n) {
        var i = t._gestureMgr;
        "start" === n && i.clear();
        var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
        if ("end" === n && i.clear(), r) {
            var a = r.type;
            e.gestureEvent = a, t.handler.dispatchToElement({target: r.target}, a, r.event)
        }
    }

    function a(t) {
        t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
            t._touching = !1
        }, 700)
    }

    function o(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }

    function s(t) {
        function e(t, e) {
            return function () {
                if (!e._touching) return t.apply(e, arguments)
            }
        }

        f.each(x, function (e) {
            t._handlers[e] = f.bind(b[e], t)
        }), f.each(_, function (e) {
            t._handlers[e] = f.bind(b[e], t)
        }), f.each(m, function (n) {
            t._handlers[n] = e(b[n], t)
        })
    }

    function l(t) {
        function e(e, n) {
            f.each(e, function (e) {
                h(t, i(e), n._handlers[e])
            }, n)
        }

        p.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new v, this._handlers = {}, s(this), g.pointerEventsSupported ? e(_, this) : (g.touchEventsSupported && e(x, this), e(m, this))
    }

    var u = n(233), h = u.addEventListener, c = u.removeEventListener, d = u.normalizeEvent, f = n(208), p = n(230),
        g = n(216), v = n(322),
        m = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        x = ["touchstart", "touchend", "touchmove"], y = {pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1},
        _ = f.map(m, function (t) {
            var e = t.replace("mouse", "pointer");
            return y[e] ? e : t
        }), b = {
            mousemove: function (t) {
                t = d(this.dom, t), this.trigger("mousemove", t)
            }, mouseout: function (t) {
                t = d(this.dom, t);
                var e = t.toElement || t.relatedTarget;
                if (e != this.dom) for (; e && 9 != e.nodeType;) {
                    if (e === this.dom) return;
                    e = e.parentNode
                }
                this.trigger("mouseout", t)
            }, touchstart: function (t) {
                t = d(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, r(this, t, "start"), b.mousemove.call(this, t), b.mousedown.call(this, t), a(this)
            }, touchmove: function (t) {
                t = d(this.dom, t), t.zrByTouch = !0, r(this, t, "change"), b.mousemove.call(this, t), a(this)
            }, touchend: function (t) {
                t = d(this.dom, t), t.zrByTouch = !0, r(this, t, "end"), b.mouseup.call(this, t), +new Date - this._lastTouchMoment < 300 && b.click.call(this, t), a(this)
            }, pointerdown: function (t) {
                b.mousedown.call(this, t)
            }, pointermove: function (t) {
                o(t) || b.mousemove.call(this, t)
            }, pointerup: function (t) {
                b.mouseup.call(this, t)
            }, pointerout: function (t) {
                o(t) || b.mouseout.call(this, t)
            }
        };
    f.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        b[t] = function (e) {
            e = d(this.dom, e), this.trigger(t, e)
        }
    });
    var w = l.prototype;
    w.dispose = function () {
        for (var t = m.concat(x), e = 0; e < t.length; e++) {
            var n = t[e];
            c(this.dom, i(n), this._handlers[n])
        }
    }, w.setCursor = function (t) {
        this.dom.style.cursor = t || "default"
    }, f.mixin(l, p);
    var S = l;
    t.exports = S
}, function (t, e, n) {
    var i = n(215), r = i.extend({
        type: "compound", shape: {paths: null}, _updatePathDirty: function () {
            for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
            this.__dirtyPath = t, this.__dirty = this.__dirty || t
        }, beforeBrush: function () {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1])
        }, buildPath: function (t, e) {
            for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
        }, afterBrush: function () {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
        }, getBoundingRect: function () {
            return this._updatePathDirty(), i.prototype.getBoundingRect.call(this)
        }
    });
    t.exports = r
}, function (t, e, n) {
    var i = n(208), r = n(247), a = function (t, e, n, i, a, o) {
        this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = o || !1, r.call(this, a)
    };
    a.prototype = {constructor: a}, i.inherits(a, r);
    var o = a;
    t.exports = o
}, function (t, e, n) {
    var i = n(208), r = n(247), a = function (t, e, n, i, a) {
        this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = a || !1, r.call(this, i)
    };
    a.prototype = {constructor: a}, i.inherits(a, r);
    var o = a;
    t.exports = o
}, function (t, e, n) {
    var i = n(246), r = n(208), a = n(228), o = n(273), s = function (t) {
        i.call(this, t)
    };
    s.prototype = {
        constructor: s, type: "text", brush: function (t, e) {
            var n = this.style;
            this.__dirty && o.normalizeTextStyle(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
            var i = n.text;
            null != i && (i += ""), n.bind(t, this, e), o.needDrawText(i, n) && (this.setTransform(t), o.renderText(this, t, i, n), this.restoreTransform(t))
        }, getBoundingRect: function () {
            var t = this.style;
            if (this.__dirty && o.normalizeTextStyle(t, !0), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var n = a.getBoundingRect(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                if (n.x += t.x || 0, n.y += t.y || 0, o.getStroke(t.textStroke, t.textStrokeWidth)) {
                    var i = t.textStrokeWidth;
                    n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
                }
                this._rect = n
            }
            return this._rect
        }
    }, r.inherits(s, i);
    var l = s;
    t.exports = l
}, function (t, e, n) {
    function i(t, e, n, i) {
        var r, d, f, p, g = [], v = [], m = [], x = [];
        if (i) {
            f = [1 / 0, 1 / 0], p = [-1 / 0, -1 / 0];
            for (var y = 0, _ = t.length; y < _; y++) a(f, f, t[y]), o(p, p, t[y]);
            a(f, f, i[0]), o(p, p, i[1])
        }
        for (var y = 0, _ = t.length; y < _; y++) {
            var b = t[y];
            if (n) r = t[y ? y - 1 : _ - 1], d = t[(y + 1) % _]; else {
                if (0 === y || y === _ - 1) {
                    g.push(h(t[y]));
                    continue
                }
                r = t[y - 1], d = t[y + 1]
            }
            c(v, d, r), s(v, v, e);
            var w = l(b, r), S = l(b, d), M = w + S;
            0 !== M && (w /= M, S /= M), s(m, v, -w), s(x, v, S);
            var T = u([], b, m), A = u([], b, x);
            i && (o(T, T, f), a(T, T, p), o(A, A, f), a(A, A, p)), g.push(T), g.push(A)
        }
        return n && g.push(g.shift()), g
    }

    var r = n(213), a = r.min, o = r.max, s = r.scale, l = r.distance, u = r.add, h = r.clone, c = r.sub;
    t.exports = i
}, function (t, e, n) {
    function i(t, e, n, i, r, a, o) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
    }

    function r(t, e) {
        for (var n = t.length, r = [], a = 0, s = 1; s < n; s++) a += o(t[s - 1], t[s]);
        var l = a / 2;
        l = l < n ? n : l;
        for (var s = 0; s < l; s++) {
            var u, h, c, d = s / (l - 1) * (e ? n : n - 1), f = Math.floor(d), p = d - f, g = t[f % n];
            e ? (u = t[(f - 1 + n) % n], h = t[(f + 1) % n], c = t[(f + 2) % n]) : (u = t[0 === f ? f : f - 1], h = t[f > n - 2 ? n - 1 : f + 1], c = t[f > n - 3 ? n - 1 : f + 2]);
            var v = p * p, m = p * v;
            r.push([i(u[0], g[0], h[0], c[0], p, v, m), i(u[1], g[1], h[1], c[1], p, v, m)])
        }
        return r
    }

    var a = n(213), o = a.distance;
    t.exports = r
}, function (t, e, n) {
    var i = n(273), r = n(222), a = new r, o = function () {
    };
    o.prototype = {
        constructor: o, drawRectText: function (t, e) {
            var n = this.style;
            e = n.textRect || e, this.__dirty && i.normalizeTextStyle(n, !0);
            var r = n.text;
            if (null != r && (r += ""), i.needDrawText(r, n)) {
                t.save();
                var o = this.transform;
                n.transformText ? this.setTransform(t) : o && (a.copy(e), a.applyTransform(o), e = a), i.renderText(this, t, r, n, e), t.restore()
            }
        }
    };
    var s = o;
    t.exports = s
}, function (t, e, n) {
    var i = n(215), r = i.extend({
        type: "arc",
        shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
        style: {stroke: "#000", fill: null},
        buildPath: function (t, e) {
            var n = e.cx, i = e.cy, r = Math.max(e.r, 0), a = e.startAngle, o = e.endAngle, s = e.clockwise,
                l = Math.cos(a), u = Math.sin(a);
            t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, a, o, !s)
        }
    });
    t.exports = r
}, function (t, e, n) {
    function i(t, e, n) {
        var i = t.cpx2, r = t.cpy2;
        return null === i || null === r ? [(n ? d : h)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? d : h)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? c : u)(t.x1, t.cpx1, t.x2, e), (n ? c : u)(t.y1, t.cpy1, t.y2, e)]
    }

    var r = n(215), a = n(213), o = n(229), s = o.quadraticSubdivide, l = o.cubicSubdivide, u = o.quadraticAt,
        h = o.cubicAt, c = o.quadraticDerivativeAt, d = o.cubicDerivativeAt, f = [], p = r.extend({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var n = e.x1, i = e.y1, r = e.x2, a = e.y2, o = e.cpx1, u = e.cpy1, h = e.cpx2, c = e.cpy2, d = e.percent;
                0 !== d && (t.moveTo(n, i), null == h || null == c ? (d < 1 && (s(n, o, r, d, f), o = f[1], r = f[2], s(i, u, a, d, f), u = f[1], a = f[2]), t.quadraticCurveTo(o, u, r, a)) : (d < 1 && (l(n, o, h, r, d, f), o = f[1], h = f[2], r = f[3], l(i, u, c, a, d, f), u = f[1], c = f[2], a = f[3]), t.bezierCurveTo(o, u, h, c, r, a)))
            },
            pointAt: function (t) {
                return i(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var e = i(this.shape, t, !0);
                return a.normalize(e, e)
            }
        });
    t.exports = p
}, function (t, e, n) {
    var i = n(215), r = i.extend({
        type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, n) {
            n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
        }
    });
    t.exports = r
}, function (t, e, n) {
    var i = n(215), r = i.extend({
        type: "line",
        shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
        style: {stroke: "#000", fill: null},
        buildPath: function (t, e) {
            var n = e.x1, i = e.y1, r = e.x2, a = e.y2, o = e.percent;
            0 !== o && (t.moveTo(n, i), o < 1 && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a))
        },
        pointAt: function (t) {
            var e = this.shape;
            return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
        }
    });
    t.exports = r
}, function (t, e, n) {
    var i = n(215), r = n(271), a = i.extend({
        type: "polygon",
        shape: {points: null, smooth: !1, smoothConstraint: null},
        buildPath: function (t, e) {
            r.buildPath(t, e, !0)
        }
    });
    t.exports = a
}, function (t, e, n) {
    var i = n(215), r = n(271), a = i.extend({
        type: "polyline",
        shape: {points: null, smooth: !1, smoothConstraint: null},
        style: {stroke: "#000", fill: null},
        buildPath: function (t, e) {
            r.buildPath(t, e, !1)
        }
    });
    t.exports = a
}, function (t, e, n) {
    var i = n(215), r = n(272), a = i.extend({
        type: "rect", shape: {r: 0, x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.x, i = e.y, a = e.width, o = e.height;
            e.r ? r.buildPath(t, e) : t.rect(n, i, a, o), t.closePath()
        }
    });
    t.exports = a
}, function (t, e, n) {
    var i = n(215), r = i.extend({
        type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
            var n = e.cx, i = e.cy, r = 2 * Math.PI;
            t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
        }
    });
    t.exports = r
}, function (t, e, n) {
    var i = n(215), r = n(281), a = i.extend({
        type: "sector",
        shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
        brush: r(i.prototype.brush),
        buildPath: function (t, e) {
            var n = e.cx, i = e.cy, r = Math.max(e.r0 || 0, 0), a = Math.max(e.r, 0), o = e.startAngle, s = e.endAngle,
                l = e.clockwise, u = Math.cos(o), h = Math.sin(o);
            t.moveTo(u * r + n, h * r + i), t.lineTo(u * a + n, h * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath()
        }
    });
    t.exports = a
}, function (t, e, n) {
    var i = n(260), r = n(267), a = n(208), o = a.isString, s = a.isFunction, l = a.isObject, u = a.isArrayLike,
        h = a.indexOf, c = function () {
            this.animators = []
        };
    c.prototype = {
        constructor: c, animate: function (t, e) {
            var n, a = !1, o = this, s = this.__zr;
            if (t) {
                var l = t.split("."), u = o;
                a = "shape" === l[0];
                for (var c = 0, d = l.length; c < d; c++) u && (u = u[l[c]]);
                u && (n = u)
            } else n = o;
            if (!n) return void r('Property "' + t + '" is not existed in element ' + o.id);
            var f = o.animators, p = new i(n, e);
            return p.during(function (t) {
                o.dirty(a)
            }).done(function () {
                f.splice(h(f, p), 1)
            }), f.push(p), s && s.animation.addAnimator(p), p
        }, stopAnimation: function (t) {
            for (var e = this.animators, n = e.length, i = 0; i < n; i++) e[i].stop(t);
            return e.length = 0, this
        }, animateTo: function (t, e, n, i, r, a) {
            function l() {
                --h || r && r()
            }

            o(n) ? (r = i, i = n, n = 0) : s(i) ? (r = i, i = "linear", n = 0) : s(n) ? (r = n, n = 0) : s(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, n);
            var u = this.animators.slice(), h = u.length;
            h || r && r();
            for (var c = 0; c < u.length; c++) u[c].done(l).start(i, a)
        }, _animateToShallow: function (t, e, n, i, r) {
            var a = {}, o = 0;
            for (var s in n) if (n.hasOwnProperty(s)) if (null != e[s]) l(n[s]) && !u(n[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], n[s], i, r) : (a[s] = n[s], o++); else if (null != n[s]) if (t) {
                var h = {};
                h[t] = {}, h[t][s] = n[s], this.attr(h)
            } else this.attr(s, n[s]);
            return o > 0 && this.animate(t, !1).when(null == i ? 500 : i, a).delay(r || 0), this
        }
    };
    var d = c;
    t.exports = d
}, function (t, e) {
    function n() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
    }

    function i(t, e) {
        return {target: t, topTarget: e && e.topTarget}
    }

    n.prototype = {
        constructor: n, _dragStart: function (t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(i(e, t), "dragstart", t.event))
        }, _drag: function (t) {
            var e = this._draggingTarget;
            if (e) {
                var n = t.offsetX, r = t.offsetY, a = n - this._x, o = r - this._y;
                this._x = n, this._y = r, e.drift(a, o, t), this.dispatchToElement(i(e, t), "drag", t.event);
                var s = this.findHover(n, r, e).target, l = this._dropTarget;
                this._dropTarget = s, e !== s && (l && s !== l && this.dispatchToElement(i(l, t), "dragleave", t.event), s && s !== l && this.dispatchToElement(i(s, t), "dragenter", t.event))
            }
        }, _dragEnd: function (t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(i(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(i(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
        }
    };
    var r = n;
    t.exports = r
}, function (t, e, n) {
    function i(t, e, n, i, r, a, o, s, l, u, h) {
        var c = l * (v / 180), d = g(c) * (t - n) / 2 + p(c) * (e - i) / 2,
            m = -1 * p(c) * (t - n) / 2 + g(c) * (e - i) / 2, _ = d * d / (o * o) + m * m / (s * s);
        _ > 1 && (o *= f(_), s *= f(_));
        var b = (r === a ? -1 : 1) * f((o * o * (s * s) - o * o * (m * m) - s * s * (d * d)) / (o * o * (m * m) + s * s * (d * d))) || 0,
            w = b * o * m / s, S = b * -s * d / o, M = (t + n) / 2 + g(c) * w - p(c) * S,
            T = (e + i) / 2 + p(c) * w + g(c) * S, A = y([1, 0], [(d - w) / o, (m - S) / s]),
            C = [(d - w) / o, (m - S) / s], I = [(-1 * d - w) / o, (-1 * m - S) / s], D = y(C, I);
        x(C, I) <= -1 && (D = v), x(C, I) >= 1 && (D = 0), 0 === a && D > 0 && (D -= 2 * v), 1 === a && D < 0 && (D += 2 * v), h.addData(u, M, T, o, s, A, D, c, a)
    }

    function r(t) {
        if (!t) return [];
        var e, n = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
        for (e = 0; e < d.length; e++) n = n.replace(new RegExp(d[e], "g"), "|" + d[e]);
        var r, a = n.split("|"), o = 0, s = 0, l = new h, u = h.CMD;
        for (e = 1; e < a.length; e++) {
            var c, f = a[e], p = f.charAt(0), g = 0, v = f.slice(1).replace(/e,-/g, "e-").split(",");
            v.length > 0 && "" === v[0] && v.shift();
            for (var m = 0; m < v.length; m++) v[m] = parseFloat(v[m]);
            for (; g < v.length && !isNaN(v[g]) && !isNaN(v[0]);) {
                var x, y, _, b, w, S, M, T = o, A = s;
                switch (p) {
                    case"l":
                        o += v[g++], s += v[g++], c = u.L, l.addData(c, o, s);
                        break;
                    case"L":
                        o = v[g++], s = v[g++], c = u.L, l.addData(c, o, s);
                        break;
                    case"m":
                        o += v[g++], s += v[g++], c = u.M, l.addData(c, o, s), p = "l";
                        break;
                    case"M":
                        o = v[g++], s = v[g++], c = u.M, l.addData(c, o, s), p = "L";
                        break;
                    case"h":
                        o += v[g++], c = u.L, l.addData(c, o, s);
                        break;
                    case"H":
                        o = v[g++], c = u.L, l.addData(c, o, s);
                        break;
                    case"v":
                        s += v[g++], c = u.L, l.addData(c, o, s);
                        break;
                    case"V":
                        s = v[g++], c = u.L, l.addData(c, o, s);
                        break;
                    case"C":
                        c = u.C, l.addData(c, v[g++], v[g++], v[g++], v[g++], v[g++], v[g++]), o = v[g - 2], s = v[g - 1];
                        break;
                    case"c":
                        c = u.C, l.addData(c, v[g++] + o, v[g++] + s, v[g++] + o, v[g++] + s, v[g++] + o, v[g++] + s), o += v[g - 2], s += v[g - 1];
                        break;
                    case"S":
                        x = o, y = s;
                        var C = l.len(), I = l.data;
                        r === u.C && (x += o - I[C - 4], y += s - I[C - 3]), c = u.C, T = v[g++], A = v[g++], o = v[g++], s = v[g++], l.addData(c, x, y, T, A, o, s);
                        break;
                    case"s":
                        x = o, y = s;
                        var C = l.len(), I = l.data;
                        r === u.C && (x += o - I[C - 4], y += s - I[C - 3]), c = u.C, T = o + v[g++], A = s + v[g++], o += v[g++], s += v[g++], l.addData(c, x, y, T, A, o, s);
                        break;
                    case"Q":
                        T = v[g++], A = v[g++], o = v[g++], s = v[g++], c = u.Q, l.addData(c, T, A, o, s);
                        break;
                    case"q":
                        T = v[g++] + o, A = v[g++] + s, o += v[g++], s += v[g++], c = u.Q, l.addData(c, T, A, o, s);
                        break;
                    case"T":
                        x = o, y = s;
                        var C = l.len(), I = l.data;
                        r === u.Q && (x += o - I[C - 4], y += s - I[C - 3]), o = v[g++], s = v[g++], c = u.Q, l.addData(c, x, y, o, s);
                        break;
                    case"t":
                        x = o, y = s;
                        var C = l.len(), I = l.data;
                        r === u.Q && (x += o - I[C - 4], y += s - I[C - 3]), o += v[g++], s += v[g++], c = u.Q, l.addData(c, x, y, o, s);
                        break;
                    case"A":
                        _ = v[g++], b = v[g++], w = v[g++], S = v[g++], M = v[g++], T = o, A = s, o = v[g++], s = v[g++], c = u.A, i(T, A, o, s, S, M, _, b, w, c, l);
                        break;
                    case"a":
                        _ = v[g++], b = v[g++], w = v[g++], S = v[g++], M = v[g++], T = o, A = s, o += v[g++], s += v[g++], c = u.A, i(T, A, o, s, S, M, _, b, w, c, l)
                }
            }
            "z" !== p && "Z" !== p || (c = u.Z, l.addData(c)), r = c
        }
        return l.toStatic(), l
    }

    function a(t, e) {
        var n = r(t);
        return e = e || {}, e.buildPath = function (t) {
            if (t.setData) {
                t.setData(n.data);
                var e = t.getContext();
                e && t.rebuildPath(e)
            } else {
                var e = t;
                n.rebuildPath(e)
            }
        }, e.applyTransform = function (t) {
            c(n, t), this.dirty(!0)
        }, e
    }

    function o(t, e) {
        return new u(a(t, e))
    }

    function s(t, e) {
        return u.extend(a(t, e))
    }

    function l(t, e) {
        for (var n = [], i = t.length, r = 0; r < i; r++) {
            var a = t[r];
            a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path)
        }
        var o = new u(e);
        return o.createPathProxy(), o.buildPath = function (t) {
            t.appendPath(n);
            var e = t.getContext();
            e && t.rebuildPath(e)
        }, o
    }

    var u = n(215), h = n(238), c = n(343),
        d = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
        f = Math.sqrt, p = Math.sin, g = Math.cos, v = Math.PI, m = function (t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        }, x = function (t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (m(t) * m(e))
        }, y = function (t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(x(t, e))
        };
    e.createFromString = o, e.extendFromString = s, e.mergePath = l
}, function (t, e, n) {
    function i(t, e) {
        var n, i, r, a, c, d, f = t.data, p = s.M, g = s.C, v = s.L, m = s.R, x = s.A, y = s.Q;
        for (r = 0, a = 0; r < f.length;) {
            switch (n = f[r++], a = r, i = 0, n) {
                case p:
                case v:
                    i = 1;
                    break;
                case g:
                    i = 3;
                    break;
                case y:
                    i = 2;
                    break;
                case x:
                    var _ = e[4], b = e[5], w = u(e[0] * e[0] + e[1] * e[1]), S = u(e[2] * e[2] + e[3] * e[3]),
                        M = h(-e[1] / S, e[0] / w);
                    f[r] *= w, f[r++] += _, f[r] *= S, f[r++] += b, f[r++] *= w, f[r++] *= S, f[r++] += M, f[r++] += M, r += 2, a = r;
                    break;
                case m:
                    d[0] = f[r++], d[1] = f[r++], o(d, d, e), f[a++] = d[0], f[a++] = d[1], d[0] += f[r++], d[1] += f[r++], o(d, d, e), f[a++] = d[0], f[a++] = d[1]
            }
            for (c = 0; c < i; c++) {
                var d = l[c];
                d[0] = f[r++], d[1] = f[r++], o(d, d, e), f[a++] = d[0], f[a++] = d[1]
            }
        }
    }

    var r = n(238), a = n(213), o = a.applyTransform, s = r.CMD, l = [[], [], []], u = Math.sqrt, h = Math.atan2;
    t.exports = i
}, function (t, e, n) {
    function i(t, e) {
        var n = t.getItemVisual(e, "symbolSize");
        return n instanceof Array ? n.slice() : [+n, +n]
    }

    function r(t) {
        return [t[0] / 2, t[1] / 2]
    }

    function a(t, e, n) {
        h.Group.call(this), this.updateData(t, e, n)
    }

    function o(t, e) {
        this.parent.drift(t, e)
    }

    var s = n(208), l = n(244), u = l.createSymbol, h = n(210), c = n(212), d = c.parsePercent, f = n(418),
        p = f.findLabelValueDim, g = a.prototype;
    g._createSymbol = function (t, e, n, i) {
        this.removeAll();
        var a = e.getItemVisual(n, "color"), s = u(t, -1, -1, 2, 2, a);
        s.attr({z2: 100, culling: !0, scale: r(i)}), s.drift = o, this._symbolType = t, this.add(s)
    }, g.stopSymbolAnimation = function (t) {
        this.childAt(0).stopAnimation(t)
    }, g.getSymbolPath = function () {
        return this.childAt(0)
    }, g.getScale = function () {
        return this.childAt(0).scale
    }, g.highlight = function () {
        this.childAt(0).trigger("emphasis")
    }, g.downplay = function () {
        this.childAt(0).trigger("normal")
    }, g.setZ = function (t, e) {
        var n = this.childAt(0);
        n.zlevel = t, n.z = e
    }, g.setDraggable = function (t) {
        var e = this.childAt(0);
        e.draggable = t, e.cursor = t ? "move" : "pointer"
    }, g.updateData = function (t, e, n) {
        this.silent = !1;
        var a = t.getItemVisual(e, "symbol") || "circle", o = t.hostModel, s = i(t, e), l = a !== this._symbolType;
        if (l) this._createSymbol(a, t, e, s); else {
            var u = this.childAt(0);
            u.silent = !1, h.updateProps(u, {scale: r(s)}, o, e)
        }
        if (this._updateCommon(t, e, s, n), l) {
            var u = this.childAt(0), c = n && n.fadeIn, d = {scale: u.scale.slice()};
            c && (d.style = {opacity: u.style.opacity}), u.scale = [0, 0], c && (u.style.opacity = 0), h.initProps(u, d, o, e)
        }
        this._seriesModel = o
    };
    var v = ["itemStyle", "normal"], m = ["itemStyle", "emphasis"], x = ["label", "normal"], y = ["label", "emphasis"];
    g._updateCommon = function (t, e, n, i) {
        var a = this.childAt(0), o = t.hostModel, l = t.getItemVisual(e, "color");
        "image" !== a.type && a.useStyle({strokeNoScale: !0});
        var u = i && i.itemStyle, c = i && i.hoverItemStyle, f = i && i.symbolRotate, g = i && i.symbolOffset,
            _ = i && i.labelModel, b = i && i.hoverLabelModel, w = i && i.hoverAnimation, S = i && i.cursorStyle;
        if (!i || t.hasItemOption) {
            var M = i && i.itemModel ? i.itemModel : t.getItemModel(e);
            u = M.getModel(v).getItemStyle(["color"]), c = M.getModel(m).getItemStyle(), f = M.getShallow("symbolRotate"), g = M.getShallow("symbolOffset"), _ = M.getModel(x), b = M.getModel(y), w = M.getShallow("hoverAnimation"), S = M.getShallow("cursor")
        } else c = s.extend({}, c);
        var T = a.style;
        a.attr("rotation", (f || 0) * Math.PI / 180 || 0), g && a.attr("position", [d(g[0], n[0]), d(g[1], n[1])]), S && a.attr("cursor", S), a.setColor(l, i && i.symbolInnerColor), a.setStyle(u);
        var A = t.getItemVisual(e, "opacity");
        null != A && (T.opacity = A);
        var C = i && i.useNameLabel, I = !C && p(t);
        (C || null != I) && h.setLabelStyle(T, c, _, b, {
            labelFetcher: o,
            labelDataIndex: e,
            defaultText: C ? t.getName(e) : t.get(I, e),
            isRectText: !0,
            autoColor: l
        }), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), a.hoverStyle = c, h.setHoverStyle(a);
        var D = r(n);
        if (w && o.isAnimationEnabled()) {
            var k = function () {
                var t = D[1] / D[0];
                this.animateTo({scale: [Math.max(1.1 * D[0], D[0] + 3), Math.max(1.1 * D[1], D[1] + 3 * t)]}, 400, "elasticOut")
            }, P = function () {
                this.animateTo({scale: D}, 400, "elasticOut")
            };
            a.on("mouseover", k).on("mouseout", P).on("emphasis", k).on("normal", P)
        }
    }, g.fadeOut = function (t, e) {
        var n = this.childAt(0);
        this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), h.updateProps(n, {
            style: {opacity: 0},
            scale: [0, 0]
        }, this._seriesModel, this.dataIndex, t)
    }, s.inherits(a, h.Group);
    var _ = a;
    t.exports = _
}, function (t, e, n) {
    function i(t) {
        this.group = new a.Group, this._symbolCtor = t || o
    }

    function r(t, e, n) {
        var i = t.getItemLayout(e);
        return i && !isNaN(i[0]) && !isNaN(i[1]) && !(n && n(e)) && "none" !== t.getItemVisual(e, "symbol")
    }

    var a = n(210), o = n(344), s = i.prototype;
    s.updateData = function (t, e) {
        var n = this.group, i = t.hostModel, o = this._data, s = this._symbolCtor, l = {
            itemStyle: i.getModel("itemStyle.normal").getItemStyle(["color"]),
            hoverItemStyle: i.getModel("itemStyle.emphasis").getItemStyle(),
            symbolRotate: i.get("symbolRotate"),
            symbolOffset: i.get("symbolOffset"),
            hoverAnimation: i.get("hoverAnimation"),
            labelModel: i.getModel("label.normal"),
            hoverLabelModel: i.getModel("label.emphasis"),
            cursorStyle: i.get("cursor")
        };
        t.diff(o).add(function (i) {
            var a = t.getItemLayout(i);
            if (r(t, i, e)) {
                var o = new s(t, i, l);
                o.attr("position", a), t.setItemGraphicEl(i, o), n.add(o)
            }
        }).update(function (u, h) {
            var c = o.getItemGraphicEl(h), d = t.getItemLayout(u);
            if (!r(t, u, e)) return void n.remove(c);
            c ? (c.updateData(t, u, l), a.updateProps(c, {position: d}, i)) : (c = new s(t, u), c.attr("position", d)), n.add(c), t.setItemGraphicEl(u, c)
        }).remove(function (t) {
            var e = o.getItemGraphicEl(t);
            e && e.fadeOut(function () {
                n.remove(e)
            })
        }).execute(), this._data = t
    }, s.updateLayout = function () {
        var t = this._data;
        t && t.eachItemGraphicEl(function (e, n) {
            var i = t.getItemLayout(n);
            e.attr("position", i)
        })
    }, s.remove = function (t) {
        var e = this.group, n = this._data;
        n && (t ? n.eachItemGraphicEl(function (t) {
            t.fadeOut(function () {
                e.remove(t)
            })
        }) : e.removeAll())
    };
    var l = i;
    t.exports = l
}, function (t, e, n) {
    function i(t) {
        var e = {componentType: t.mainType};
        return e[t.mainType + "Index"] = t.componentIndex, e
    }

    function r(t, e, n, i) {
        var r, a, o = w(n - t.rotation), s = i[0] > i[1], l = "start" === e && !s || "start" !== e && s;
        return b(o - I / 2) ? (a = l ? "bottom" : "top", r = "center") : b(o - 1.5 * I) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = o < 1.5 * I && o > I / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
            rotation: o,
            textAlign: r,
            textVerticalAlign: a
        }
    }

    function a(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
    }

    function o(t, e, n) {
        var i = t.get("axisLabel.showMinLabel"), r = t.get("axisLabel.showMaxLabel");
        e = e || [], n = n || [];
        var a = e[0], o = e[1], u = e[e.length - 1], h = e[e.length - 2], c = n[0], d = n[1], f = n[n.length - 1],
            p = n[n.length - 2];
        !1 === i ? (s(a), s(c)) : l(a, o) && (i ? (s(o), s(d)) : (s(a), s(c))), !1 === r ? (s(u), s(f)) : l(h, u) && (r ? (s(h), s(p)) : (s(u), s(f)))
    }

    function s(t) {
        t && (t.ignore = !0)
    }

    function l(t, e, n) {
        var i = t && t.getBoundingRect().clone(), r = e && e.getBoundingRect().clone();
        if (i && r) {
            var a = T.identity([]);
            return T.rotate(a, a, -t.rotation), i.applyTransform(T.mul([], a, t.getLocalTransform())), r.applyTransform(T.mul([], a, e.getLocalTransform())), i.intersect(r)
        }
    }

    function u(t) {
        return "middle" === t || "center" === t
    }

    function h(t, e, n) {
        var i = e.axis;
        if (e.get("axisTick.show") && !i.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), s = O(r, n.labelInterval), l = i.getTicksCoords(r.get("alignWithLabel")), u = i.scale.getTicks(), h = e.get("axisLabel.showMinLabel"), c = e.get("axisLabel.showMaxLabel"), d = [], f = [], g = t._transform, v = [], m = l.length, y = 0; y < m; y++) if (!L(i, y, s, m, h, c)) {
                var _ = l[y];
                d[0] = _, d[1] = 0, f[0] = _, f[1] = n.tickDirection * o, g && (C(d, d, g), C(f, f, g));
                var b = new x.Line(x.subPixelOptimizeLine({
                    anid: "tick_" + u[y],
                    shape: {x1: d[0], y1: d[1], x2: f[0], y2: f[1]},
                    style: p(a.getLineStyle(), {stroke: e.get("axisLine.lineStyle.color")}),
                    z2: 2,
                    silent: !0
                }));
                t.group.add(b), v.push(b)
            }
            return v
        }
    }

    function c(t, e, n) {
        var r = e.axis;
        if (f(n.axisLabelShow, e.get("axisLabel.show")) && !r.scale.isBlank()) {
            var o = e.getModel("axisLabel"), s = o.get("margin"), l = r.scale.getTicks(), u = e.getFormattedLabels(),
                h = (f(n.labelRotate, o.get("rotate")) || 0) * I / 180, c = P(n.rotation, h, n.labelDirection),
                d = e.get("data"), p = [], g = a(e), m = e.get("triggerEvent"), _ = e.get("axisLabel.showMinLabel"),
                b = e.get("axisLabel.showMaxLabel");
            return v(l, function (a, h) {
                if (!L(r, h, n.labelInterval, l.length, _, b)) {
                    var f = o;
                    d && d[a] && d[a].textStyle && (f = new y(d[a].textStyle, o, e.ecModel));
                    var v = f.getTextColor() || e.get("axisLine.lineStyle.color"), w = r.dataToCoord(a),
                        S = [w, n.labelOffset + n.labelDirection * s], M = r.scale.getLabel(a),
                        T = new x.Text({anid: "label_" + a, position: S, rotation: c.rotation, silent: g, z2: 10});
                    x.setTextStyle(T.style, f, {
                        text: u[h],
                        textAlign: f.getShallow("align", !0) || c.textAlign,
                        textVerticalAlign: f.getShallow("verticalAlign", !0) || f.getShallow("baseline", !0) || c.textVerticalAlign,
                        textFill: "function" == typeof v ? v("category" === r.type ? M : "value" === r.type ? a + "" : a, h) : v
                    }), m && (T.eventData = i(e), T.eventData.targetType = "axisLabel", T.eventData.value = M), t._dumbGroup.add(T), T.updateTransform(), p.push(T), t.group.add(T), T.decomposeTransform()
                }
            }), p
        }
    }

    var d = n(208), f = d.retrieve, p = d.defaults, g = d.extend, v = d.each, m = n(223), x = n(210), y = n(224),
        _ = n(212), b = _.isRadianAroundZero, w = _.remRadian, S = n(244), M = S.createSymbol, T = n(231), A = n(213),
        C = A.applyTransform, I = Math.PI, D = function (t, e) {
            this.opt = e, this.axisModel = t, p(e, {
                labelOffset: 0,
                nameDirection: 1,
                tickDirection: 1,
                labelDirection: 1,
                silent: !0
            }), this.group = new x.Group;
            var n = new x.Group({position: e.position.slice(), rotation: e.rotation});
            n.updateTransform(), this._transform = n.transform, this._dumbGroup = n
        };
    D.prototype = {
        constructor: D, hasBuilder: function (t) {
            return !!k[t]
        }, add: function (t) {
            k[t].call(this)
        }, getGroup: function () {
            return this.group
        }
    };
    var k = {
        axisLine: function () {
            var t = this.opt, e = this.axisModel;
            if (e.get("axisLine.show")) {
                var n = this.axisModel.axis.getExtent(), i = this._transform, r = [n[0], 0], a = [n[1], 0];
                i && (C(r, r, i), C(a, a, i));
                var o = g({lineCap: "round"}, e.getModel("axisLine.lineStyle").getLineStyle());
                this.group.add(new x.Line(x.subPixelOptimizeLine({
                    anid: "line",
                    shape: {x1: r[0], y1: r[1], x2: a[0], y2: a[1]},
                    style: o,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                })));
                var s = e.get("axisLine.symbol"), l = e.get("axisLine.symbolSize");
                if (null != s) {
                    "string" == typeof s && (s = [s, s]), "string" != typeof l && "number" != typeof l || (l = [l, l]);
                    var u = l[0], h = l[1];
                    v([[t.rotation + Math.PI / 2, r], [t.rotation - Math.PI / 2, a]], function (t, e) {
                        if ("none" !== s[e] && null != s[e]) {
                            var n = M(s[e], -u / 2, -h / 2, u, h, o.stroke, !0);
                            n.attr({rotation: t[0], position: t[1], silent: !0}), this.group.add(n)
                        }
                    }, this)
                }
            }
        }, axisTickLabel: function () {
            var t = this.axisModel, e = this.opt, n = h(this, t, e);
            o(t, c(this, t, e), n)
        }, axisName: function () {
            var t = this.opt, e = this.axisModel, n = f(t.axisName, e.get("name"));
            if (n) {
                var o, s = e.get("nameLocation"), l = t.nameDirection, h = e.getModel("nameTextStyle"),
                    c = e.get("nameGap") || 0, d = this.axisModel.axis.getExtent(), p = d[0] > d[1] ? -1 : 1,
                    v = ["start" === s ? d[0] - p * c : "end" === s ? d[1] + p * c : (d[0] + d[1]) / 2, u(s) ? t.labelOffset + l * c : 0],
                    y = e.get("nameRotate");
                null != y && (y = y * I / 180);
                var _;
                u(s) ? o = P(t.rotation, null != y ? y : t.rotation, l) : (o = r(t, s, y || 0, d), null != (_ = t.axisNameAvailableWidth) && (_ = Math.abs(_ / Math.sin(o.rotation)), !isFinite(_) && (_ = null)));
                var b = h.getFont(), w = e.get("nameTruncate", !0) || {}, S = w.ellipsis,
                    M = f(t.nameTruncateMaxWidth, w.maxWidth, _),
                    T = null != S && null != M ? m.truncateText(n, M, b, S, {
                        minChar: 2,
                        placeholder: w.placeholder
                    }) : n, A = e.get("tooltip", !0), C = e.mainType, D = {componentType: C, name: n, $vars: ["name"]};
                D[C + "Index"] = e.componentIndex;
                var k = new x.Text({
                    anid: "name",
                    __fullText: n,
                    __truncatedText: T,
                    position: v,
                    rotation: o.rotation,
                    silent: a(e),
                    z2: 1,
                    tooltip: A && A.show ? g({
                        content: n, formatter: function () {
                            return n
                        }, formatterParams: D
                    }, A) : null
                });
                x.setTextStyle(k.style, h, {
                    text: T,
                    textFont: b,
                    textFill: h.getTextColor() || e.get("axisLine.lineStyle.color"),
                    textAlign: o.textAlign,
                    textVerticalAlign: o.textVerticalAlign
                }), e.get("triggerEvent") && (k.eventData = i(e), k.eventData.targetType = "axisName", k.eventData.name = n), this._dumbGroup.add(k), k.updateTransform(), this.group.add(k), k.decomposeTransform()
            }
        }
    }, P = D.innerTextLayout = function (t, e, n) {
        var i, r, a = w(e - t);
        return b(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : b(a - I) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && a < I ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
            rotation: a,
            textAlign: i,
            textVerticalAlign: r
        }
    }, L = D.ifIgnoreOnTick = function (t, e, n, i, r, a) {
        if (0 === e && r || e === i - 1 && a) return !1;
        var o, s = t.scale;
        return "ordinal" === s.type && ("function" == typeof n ? (o = s.getTicks()[e], !n(o, s.getLabel(o))) : e % (n + 1))
    }, O = D.getInterval = function (t, e) {
        var n = t.get("interval");
        return null != n && "auto" != n || (n = e), n
    }, E = D;
    t.exports = E
}, function (t, e, n) {
    function i(t, e, n, i, a, o) {
        var u = l.getAxisPointerClass(t.axisPointerClass);
        if (u) {
            var h = s.getAxisPointerModel(e);
            h ? (t._axisPointer || (t._axisPointer = new u)).render(e, h, i, o) : r(t, i)
        }
    }

    function r(t, e, n) {
        var i = t._axisPointer;
        i && i.dispose(e, n), t._axisPointer = null
    }

    var a = n(214), o = (a.__DEV__, n(209)), s = n(276), l = o.extendComponentView({
        type: "axis",
        _axisPointer: null,
        axisPointerClass: null,
        render: function (t, e, n, r) {
            this.axisPointerClass && s.fixValue(t), l.superApply(this, "render", arguments), i(this, t, e, n, r, !0)
        },
        updateAxisPointer: function (t, e, n, r, a) {
            i(this, t, e, n, r, !1)
        },
        remove: function (t, e) {
            var n = this._axisPointer;
            n && n.remove(e), l.superApply(this, "remove", arguments)
        },
        dispose: function (t, e) {
            r(this, e), l.superApply(this, "dispose", arguments)
        }
    }), u = [];
    l.registerAxisPointerClass = function (t, e) {
        u[t] = e
    }, l.getAxisPointerClass = function (t) {
        return t && u[t]
    };
    var h = l;
    t.exports = h
}, function (t, e, n) {
    function i(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem, a = e.axis, o = {}, s = a.position, l = a.onZero ? "onZero" : s, u = a.dim,
            h = i.getRect(), c = [h.x, h.x + h.width, h.y, h.y + h.height],
            d = {left: 0, right: 1, top: 0, bottom: 1, onZero: 2}, f = e.get("offset") || 0,
            p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
        if (a.onZero) {
            var g = i.getAxis("x" === u ? "y" : "x", a.onZeroAxisIndex), v = g.toGlobalCoord(g.dataToCoord(0));
            p[d.onZero] = Math.max(Math.min(v, p[1]), p[0])
        }
        o.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], o.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
        var m = {top: -1, bottom: 1, left: -1, right: 1};
        o.labelDirection = o.tickDirection = o.nameDirection = m[s], o.labelOffset = a.onZero ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (o.tickDirection = -o.tickDirection), r.retrieve(n.labelInside, e.get("axisLabel.inside")) && (o.labelDirection = -o.labelDirection);
        var x = e.get("axisLabel.rotate");
        return o.labelRotate = "top" === l ? -x : x, o.labelInterval = a.getLabelInterval(), o.z2 = 1, o
    }

    var r = n(208);
    e.layout = i
}, function (t, e, n) {
    function i(t, e) {
        var n, i = [], o = t.seriesIndex;
        if (null == o || !(n = e.getSeriesByIndex(o))) return {point: []};
        var s = n.getData(), l = a.queryDataIndex(s, t);
        if (null == l || r.isArray(l)) return {point: []};
        var u = s.getItemGraphicEl(l), h = n.coordinateSystem;
        if (n.getTooltipPosition) i = n.getTooltipPosition(l) || []; else if (h && h.dataToPoint) i = h.dataToPoint(s.getValues(r.map(h.dimensions, function (t) {
            return n.coordDimToDataDim(t)[0]
        }), l, !0)) || []; else if (u) {
            var c = u.getBoundingRect().clone();
            c.applyTransform(u.transform), i = [c.x + c.width / 2, c.y + c.height / 2]
        }
        return {point: i, el: u}
    }

    var r = n(208), a = n(211);
    t.exports = i
}, function (t, e, n) {
    function i(t, e, n) {
        if (!c.node) {
            var i = e.getZr();
            f(i).records || (f(i).records = {}), r(i, e);
            (f(i).records[t] || (f(i).records[t] = {})).handler = n
        }
    }

    function r(t, e) {
        function n(n, i) {
            t.on(n, function (n) {
                var r = l(e);
                p(f(t).records, function (t) {
                    t && i(t, n, r.dispatchAction)
                }), a(r.pendings, e)
            })
        }

        f(t).initialized || (f(t).initialized = !0, n("click", h.curry(s, "click")), n("mousemove", h.curry(s, "mousemove")), n("globalout", o))
    }

    function a(t, e) {
        var n, i = t.showTip.length, r = t.hideTip.length;
        i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
    }

    function o(t, e, n) {
        t.handler("leave", null, n)
    }

    function s(t, e, n, i) {
        e.handler(t, n, i)
    }

    function l(t) {
        var e = {showTip: [], hideTip: []}, n = function (i) {
            var r = e[i.type];
            r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
        };
        return {dispatchAction: n, pendings: e}
    }

    function u(t, e) {
        if (!c.node) {
            var n = e.getZr();
            (f(n).records || {})[t] && (f(n).records[t] = null)
        }
    }

    var h = n(208), c = n(216), d = n(211), f = d.makeGetter(), p = h.each;
    e.register = i, e.unregister = u
}, function (t, e, n) {
    function i(t) {
        var e, n = t.get("type"), i = t.getModel(n + "Style");
        return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e
    }

    function r(t, e, n, i, r) {
        var s = n.get("value"), l = o(s, e.axis, e.ecModel, n.get("seriesDataIndices"), {
                precision: n.get("label.precision"),
                formatter: n.get("label.formatter")
            }), u = n.getModel("label"), h = g.normalizeCssArray(u.get("padding") || 0), c = u.getFont(),
            d = p.getBoundingRect(l, c), f = r.position, v = d.width + h[1] + h[3], m = d.height + h[0] + h[2],
            x = r.align;
        "right" === x && (f[0] -= v), "center" === x && (f[0] -= v / 2);
        var y = r.verticalAlign;
        "bottom" === y && (f[1] -= m), "middle" === y && (f[1] -= m / 2), a(f, v, m, i);
        var _ = u.get("backgroundColor");
        _ && "auto" !== _ || (_ = e.get("axisLine.lineStyle.color")), t.label = {
            shape: {
                x: 0,
                y: 0,
                width: v,
                height: m,
                r: u.get("borderRadius")
            },
            position: f.slice(),
            style: {
                text: l,
                textFont: c,
                textFill: u.getTextColor(),
                textPosition: "inside",
                fill: _,
                stroke: u.get("borderColor") || "transparent",
                lineWidth: u.get("borderWidth") || 0,
                shadowBlur: u.get("shadowBlur"),
                shadowColor: u.get("shadowColor"),
                shadowOffsetX: u.get("shadowOffsetX"),
                shadowOffsetY: u.get("shadowOffsetY")
            },
            z2: 10
        }
    }

    function a(t, e, n, i) {
        var r = i.getWidth(), a = i.getHeight();
        t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, a) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
    }

    function o(t, e, n, i, r) {
        var a = e.scale.getLabel(t, {precision: r.precision}), o = r.formatter;
        if (o) {
            var s = {value: m.getAxisRawValue(e, t), seriesData: []};
            d.each(i, function (t) {
                var e = n.getSeriesByIndex(t.seriesIndex), i = t.dataIndexInside, r = e && e.getDataParams(i);
                r && s.seriesData.push(r)
            }), d.isString(o) ? a = o.replace("{value}", a) : d.isFunction(o) && (a = o(s))
        }
        return a
    }

    function s(t, e, n) {
        var i = v.create();
        return v.rotate(i, i, n.rotation), v.translate(i, i, n.position), f.applyTransform([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
    }

    function l(t, e, n, i, a, o) {
        var l = x.innerTextLayout(n.rotation, 0, n.labelDirection);
        n.labelMargin = a.get("label.margin"), r(e, i, a, o, {
            position: s(i.axis, t, n),
            align: l.textAlign,
            verticalAlign: l.textVerticalAlign
        })
    }

    function u(t, e, n) {
        return n = n || 0, {x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n]}
    }

    function h(t, e, n) {
        return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
    }

    function c(t, e, n, i, r, a) {
        return {cx: t, cy: e, r0: n, r: i, startAngle: r, endAngle: a, clockwise: !0}
    }

    var d = n(208), f = n(210), p = n(228), g = n(223), v = n(231), m = n(232), x = n(346);
    e.buildElStyle = i, e.buildLabelElOption = r, e.getValueLabel = o, e.getTransformedPosition = s, e.buildCartesianSingleLabelElOption = l, e.makeLineShape = u, e.makeRectShape = h, e.makeSectorShape = c
}, function (t, e, n) {
    function i(t) {
        var e = {};
        return d(["start", "end", "startValue", "endValue", "throttle"], function (n) {
            t.hasOwnProperty(n) && (e[n] = t[n])
        }), e
    }

    function r(t, e) {
        var n = t._rangePropMode, i = t.get("rangeMode");
        d([["start", "startValue"], ["end", "endValue"]], function (t, r) {
            var a = null != e[t[0]], o = null != e[t[1]];
            a && !o ? n[r] = "percent" : !a && o ? n[r] = "value" : i ? n[r] = i[r] : a && (n[r] = "percent")
        })
    }

    var a = n(214), o = (a.__DEV__, n(209)), s = n(208), l = n(216), u = n(211), h = n(283), c = n(437), d = s.each,
        f = h.eachAxisDim, p = o.extendComponentModel({
            type: "dataZoom",
            dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "singleAxis", "series"],
            defaultOption: {
                zlevel: 0,
                z: 4,
                orient: null,
                xAxisIndex: null,
                yAxisIndex: null,
                filterMode: "filter",
                throttle: null,
                start: 0,
                end: 100,
                startValue: null,
                endValue: null,
                minSpan: null,
                maxSpan: null,
                minValueSpan: null,
                maxValueSpan: null,
                rangeMode: null
            },
            init: function (t, e, n) {
                this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this._autoThrottle = !0, this._rangePropMode = ["percent", "percent"];
                var r = i(t);
                this.mergeDefaultAndTheme(t, n), this.doInit(r)
            },
            mergeOption: function (t) {
                var e = i(t);
                s.merge(this.option, t, !0), this.doInit(e)
            },
            doInit: function (t) {
                var e = this.option;
                l.canvasSupported || (e.realtime = !1), this._setDefaultThrottle(t), r(this, t), d([["start", "startValue"], ["end", "endValue"]], function (t, n) {
                    "value" === this._rangePropMode[n] && (e[t[0]] = null)
                }, this), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies()
            },
            _giveAxisProxies: function () {
                var t = this._axisProxies;
                this.eachTargetAxis(function (e, n, i, r) {
                    var a = this.dependentModels[e.axis][n],
                        o = a.__dzAxisProxy || (a.__dzAxisProxy = new c(e.name, n, this, r));
                    t[e.name + "_" + n] = o
                }, this)
            },
            _resetTarget: function () {
                var t = this.option, e = this._judgeAutoMode();
                f(function (e) {
                    var n = e.axisIndex;
                    t[n] = u.normalizeToArray(t[n])
                }, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
            },
            _judgeAutoMode: function () {
                var t = this.option, e = !1;
                f(function (n) {
                    null != t[n.axisIndex] && (e = !0)
                }, this);
                var n = t.orient;
                return null == n && e ? "orient" : e ? void 0 : (null == n && (t.orient = "horizontal"), "axisIndex")
            },
            _autoSetAxisIndex: function () {
                var t = !0, e = this.get("orient", !0), n = this.option, i = this.dependentModels;
                if (t) {
                    var r = "vertical" === e ? "y" : "x";
                    i[r + "Axis"].length ? (n[r + "AxisIndex"] = [0], t = !1) : d(i.singleAxis, function (i) {
                        t && i.get("orient", !0) === e && (n.singleAxisIndex = [i.componentIndex], t = !1)
                    })
                }
                t && f(function (e) {
                    if (t) {
                        var i = [], r = this.dependentModels[e.axis];
                        if (r.length && !i.length) for (var a = 0, o = r.length; a < o; a++) "category" === r[a].get("type") && i.push(a);
                        n[e.axisIndex] = i, i.length && (t = !1)
                    }
                }, this), t && this.ecModel.eachSeries(function (t) {
                    this._isSeriesHasAllAxesTypeOf(t, "value") && f(function (e) {
                        var i = n[e.axisIndex], r = t.get(e.axisIndex), a = t.get(e.axisId);
                        r = t.ecModel.queryComponents({
                            mainType: e.axis,
                            index: r,
                            id: a
                        })[0].componentIndex, s.indexOf(i, r) < 0 && i.push(r)
                    })
                }, this)
            },
            _autoSetOrient: function () {
                var t;
                this.eachTargetAxis(function (e) {
                    !t && (t = e.name)
                }, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
            },
            _isSeriesHasAllAxesTypeOf: function (t, e) {
                var n = !0;
                return f(function (i) {
                    var r = t.get(i.axisIndex), a = this.dependentModels[i.axis][r];
                    a && a.get("type") === e || (n = !1)
                }, this), n
            },
            _setDefaultThrottle: function (t) {
                if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
                    var e = this.ecModel.option;
                    this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20
                }
            },
            getFirstTargetAxisModel: function () {
                var t;
                return f(function (e) {
                    if (null == t) {
                        var n = this.get(e.axisIndex);
                        n.length && (t = this.dependentModels[e.axis][n[0]])
                    }
                }, this), t
            },
            eachTargetAxis: function (t, e) {
                var n = this.ecModel;
                f(function (i) {
                    d(this.get(i.axisIndex), function (r) {
                        t.call(e, i, r, this, n)
                    }, this)
                }, this)
            },
            getAxisProxy: function (t, e) {
                return this._axisProxies[t + "_" + e]
            },
            getAxisModel: function (t, e) {
                var n = this.getAxisProxy(t, e);
                return n && n.getAxisModel()
            },
            setRawRange: function (t, e) {
                var n = this.option;
                d([["start", "startValue"], ["end", "endValue"]], function (e) {
                    null == t[e[0]] && null == t[e[1]] || (n[e[0]] = t[e[0]], n[e[1]] = t[e[1]])
                }, this), !e && r(this, t)
            },
            getPercentRange: function () {
                var t = this.findRepresentativeAxisProxy();
                if (t) return t.getDataPercentWindow()
            },
            getValueRange: function (t, e) {
                if (null != t || null != e) return this.getAxisProxy(t, e).getDataValueWindow();
                var n = this.findRepresentativeAxisProxy();
                return n ? n.getDataValueWindow() : void 0
            },
            findRepresentativeAxisProxy: function (t) {
                if (t) return t.__dzAxisProxy;
                var e = this._axisProxies;
                for (var n in e) if (e.hasOwnProperty(n) && e[n].hostedBy(this)) return e[n];
                for (var n in e) if (e.hasOwnProperty(n) && !e[n].hostedBy(this)) return e[n]
            },
            getRangePropMode: function () {
                return this._rangePropMode.slice()
            }
        }), g = p;
    t.exports = g
}, function (t, e, n) {
    var i = n(280), r = i.extend({
        type: "dataZoom", render: function (t, e, n, i) {
            this.dataZoomModel = t, this.ecModel = e, this.api = n
        }, getTargetCoordInfo: function () {
            function t(t, e, n, i) {
                for (var r, a = 0; a < n.length; a++) if (n[a].model === t) {
                    r = n[a];
                    break
                }
                r || n.push(r = {model: t, axisModels: [], coordIndex: i}), r.axisModels.push(e)
            }

            var e = this.dataZoomModel, n = this.ecModel, i = {};
            return e.eachTargetAxis(function (e, r) {
                var a = n.getComponent(e.axis, r);
                if (a) {
                    var o = a.getCoordSysModel();
                    o && t(o, a, i[o.mainType] || (i[o.mainType] = []), o.componentIndex)
                }
            }, this), i
        }
    });
    t.exports = r
}, function (t, e, n) {
    function i(t, e) {
        var n = s(t);
        u(e, function (e, i) {
            for (var r = n.length - 1; r >= 0; r--) {
                if (n[r][i]) break
            }
            if (r < 0) {
                var a = t.queryComponents({mainType: "dataZoom", subType: "select", id: i})[0];
                if (a) {
                    var o = a.getPercentRange();
                    n[0][i] = {dataZoomId: i, start: o[0], end: o[1]}
                }
            }
        }), n.push(e)
    }

    function r(t) {
        var e = s(t), n = e[e.length - 1];
        e.length > 1 && e.pop();
        var i = {};
        return u(n, function (t, n) {
            for (var r = e.length - 1; r >= 0; r--) {
                var t = e[r][n];
                if (t) {
                    i[n] = t;
                    break
                }
            }
        }), i
    }

    function a(t) {
        t[h] = null
    }

    function o(t) {
        return s(t).length
    }

    function s(t) {
        var e = t[h];
        return e || (e = t[h] = [{}]), e
    }

    var l = n(208), u = l.each, h = "\0_ec_hist_store";
    e.push = i, e.pop = r, e.clear = a, e.count = o
}, function (t, e, n) {
    var i = n(209), r = n(208), a = n(210);
    n(357), n(429), i.extendComponentView({
        type: "grid", render: function (t, e) {
            this.group.removeAll(), t.get("show") && this.group.add(new a.Rect({
                shape: t.coordinateSystem.getRect(),
                style: r.defaults({fill: t.get("backgroundColor")}, t.getItemStyle()),
                silent: !0,
                z2: -1
            }))
        }
    }), i.registerPreprocessor(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {})
    })
}, function (t, e, n) {
    function i(t, e) {
        return e.type || (e.data ? "category" : "value")
    }

    var r = n(208), a = n(226), o = n(470), s = n(279), l = a.extend({
        type: "cartesian2dAxis", axis: null, init: function () {
            l.superApply(this, "init", arguments), this.resetRange()
        }, mergeOption: function () {
            l.superApply(this, "mergeOption", arguments), this.resetRange()
        }, restoreData: function () {
            l.superApply(this, "restoreData", arguments), this.resetRange()
        }, getCoordSysModel: function () {
            return this.ecModel.queryComponents({
                mainType: "grid",
                index: this.option.gridIndex,
                id: this.option.gridId
            })[0]
        }
    });
    r.merge(l.prototype, s);
    var u = {offset: 0};
    o("x", l, i, u), o("y", l, i, u);
    var h = l;
    t.exports = h
}, function (t, e, n) {
    function i(t, e, n) {
        return t.getCoordSysModel() === e
    }

    function r(t, e) {
        var n = e * Math.PI / 180, i = t.plain(), r = i.width, a = i.height, o = r * Math.cos(n) + a * Math.sin(n),
            s = r * Math.sin(n) + a * Math.cos(n);
        return new p(i.x, i.y, o, s)
    }

    function a(t) {
        var e, n = t.model, i = n.getFormattedLabels(), a = n.getModel("axisLabel"), o = 1, s = i.length;
        s > 40 && (o = Math.ceil(s / 40));
        for (var l = 0; l < s; l += o) if (!t.isLabelIgnored(l)) {
            var u = a.getTextRect(i[l]), h = r(u, a.get("rotate") || 0);
            e ? e.union(h) : e = h
        }
        return e
    }

    function o(t, e, n) {
        this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t
    }

    function s(t, e, n) {
        var i = t[e];
        if (n.onZero) {
            var r = n.onZeroAxisIndex;
            if (null != r) {
                var a = i[r];
                return void (a && l(a) && (n.onZero = !1))
            }
            for (var o in i) if (i.hasOwnProperty(o)) {
                var a = i[o];
                if (a && !l(a)) {
                    r = +o;
                    break
                }
            }
            null == r && (n.onZero = !1), n.onZeroAxisIndex = r
        }
    }

    function l(t) {
        return "category" === t.type || "time" === t.type || !w(t)
    }

    function u(t, e) {
        var n = t.getExtent(), i = n[0] + n[1];
        t.toGlobalCoord = "x" === t.dim ? function (t) {
            return t + e
        } : function (t) {
            return i - t + e
        }, t.toLocalCoord = "x" === t.dim ? function (t) {
            return t - e
        } : function (t) {
            return i - t + e
        }
    }

    function h(t, e) {
        return f.map(T, function (e) {
            return t.getReferringComponents(e)[0]
        })
    }

    function c(t) {
        return "cartesian2d" === t.get("coordinateSystem")
    }

    var d = n(214), f = (d.__DEV__, n(208)), p = n(222), g = n(227), v = g.getLayoutRect, m = n(232), x = n(473),
        y = n(471), _ = n(249);
    n(474);
    var b = f.each, w = m.ifAxisCrossZero, S = m.niceScaleExtent, M = o.prototype;
    M.type = "grid", M.axisPointerEnabled = !0, M.getRect = function () {
        return this._rect
    }, M.update = function (t, e) {
        var n = this._axesMap;
        this._updateScale(t, this.model), b(n.x, function (t) {
            S(t.scale, t.model)
        }), b(n.y, function (t) {
            S(t.scale, t.model)
        }), b(n.x, function (t) {
            s(n, "y", t)
        }), b(n.y, function (t) {
            s(n, "x", t)
        }), this.resize(this.model, e)
    }, M.resize = function (t, e, n) {
        function i() {
            b(o, function (t) {
                var e = t.isHorizontal(), n = e ? [0, r.width] : [0, r.height], i = t.inverse ? 1 : 0;
                t.setExtent(n[i], n[1 - i]), u(t, e ? r.x : r.y)
            })
        }

        var r = v(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()});
        this._rect = r;
        var o = this._axesList;
        i(), !n && t.get("containLabel") && (b(o, function (t) {
            if (!t.model.get("axisLabel.inside")) {
                var e = a(t);
                if (e) {
                    var n = t.isHorizontal() ? "height" : "width", i = t.model.get("axisLabel.margin");
                    r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i)
                }
            }
        }), i())
    }, M.getAxis = function (t, e) {
        var n = this._axesMap[t];
        if (null != n) {
            if (null == e) for (var i in n) if (n.hasOwnProperty(i)) return n[i];
            return n[e]
        }
    }, M.getAxes = function () {
        return this._axesList.slice()
    }, M.getCartesian = function (t, e) {
        if (null != t && null != e) {
            var n = "x" + t + "y" + e;
            return this._coordsMap[n]
        }
        f.isObject(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var i = 0, r = this._coordsList; i < r.length; i++) if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
    }, M.getCartesians = function () {
        return this._coordsList.slice()
    }, M.convertToPixel = function (t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
    }, M.convertFromPixel = function (t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
    }, M._findConvertTarget = function (t, e) {
        var n, i, r = e.seriesModel, a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
            o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, l = this._coordsList;
        if (r) n = r.coordinateSystem, f.indexOf(l, n) < 0 && (n = null); else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex); else if (a) i = this.getAxis("x", a.componentIndex); else if (o) i = this.getAxis("y", o.componentIndex); else if (s) {
            var u = s.coordinateSystem;
            u === this && (n = this._coordsList[0])
        }
        return {cartesian: n, axis: i}
    }, M.containPoint = function (t) {
        var e = this._coordsList[0];
        if (e) return e.containPoint(t)
    }, M._initCartesian = function (t, e, n) {
        function r(n) {
            return function (r, l) {
                if (i(r, t, e)) {
                    var u = r.get("position");
                    "x" === n ? "top" !== u && "bottom" !== u && (u = "bottom", a[u] && (u = "top" === u ? "bottom" : "top")) : "left" !== u && "right" !== u && (u = "left", a[u] && (u = "left" === u ? "right" : "left")), a[u] = !0;
                    var h = new y(n, m.createScaleByModel(r), [0, 0], r.get("type"), u), c = "category" === h.type;
                    h.onBand = c && r.get("boundaryGap"), h.inverse = r.get("inverse"), h.onZero = r.get("axisLine.onZero"), h.onZeroAxisIndex = r.get("axisLine.onZeroAxisIndex"), r.axis = h, h.model = r, h.grid = this, h.index = l, this._axesList.push(h), o[n][l] = h, s[n]++
                }
            }
        }

        var a = {left: !1, right: !1, top: !1, bottom: !1}, o = {x: {}, y: {}}, s = {x: 0, y: 0};
        if (e.eachComponent("xAxis", r("x"), this), e.eachComponent("yAxis", r("y"), this), !s.x || !s.y) return this._axesMap = {}, void (this._axesList = []);
        this._axesMap = o, b(o.x, function (e, n) {
            b(o.y, function (i, r) {
                var a = "x" + n + "y" + r, o = new x(a);
                o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(i)
            }, this)
        }, this)
    }, M._updateScale = function (t, e) {
        function n(t, e, n) {
            b(n.coordDimToDataDim(e.dim), function (n) {
                e.scale.unionExtentFromData(t, n)
            })
        }

        f.each(this._axesList, function (t) {
            t.scale.setExtent(1 / 0, -1 / 0)
        }), t.eachSeries(function (r) {
            if (c(r)) {
                var a = h(r, t), o = a[0], s = a[1];
                if (!i(o, e, t) || !i(s, e, t)) return;
                var l = this.getCartesian(o.componentIndex, s.componentIndex), u = r.getData(), d = l.getAxis("x"),
                    f = l.getAxis("y");
                "list" === u.type && (n(u, d, r), n(u, f, r))
            }
        }, this)
    }, M.getTooltipAxes = function (t) {
        var e = [], n = [];
        return b(this.getCartesians(), function (i) {
            var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(), a = i.getOtherAxis(r);
            f.indexOf(e, r) < 0 && e.push(r), f.indexOf(n, a) < 0 && n.push(a)
        }), {baseAxes: e, otherAxes: n}
    };
    var T = ["xAxis", "yAxis"];
    o.create = function (t, e) {
        var n = [];
        return t.eachComponent("grid", function (i, r) {
            var a = new o(i, t, e);
            a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a)
        }), t.eachSeries(function (e) {
            if (c(e)) {
                var n = h(e, t), i = n[0], r = n[1], a = i.getCoordSysModel(), o = a.coordinateSystem;
                e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex)
            }
        }), n
    }, o.dimensions = o.prototype.dimensions = x.prototype.dimensions, _.register("cartesian2d", o);
    var A = o;
    t.exports = A
}, , function (t, e, n) {
    t.exports = n(360)
}, function (t, e) {
    var n = ["", "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        i = ["日", "一", "二", "三", "四", "五", "六"], r = function t(e) {
            if (!(this instanceof t)) return new t(e);
            this[0] = new Date(e)
        };
    r.prototype = {
        format: function (t) {
            var e = this;
            if ("string" != typeof t) return this.toLocaleString();
            var n = /Y{4}|M{1,4}|Do|D{1,2}|d{1,4}|Q|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|A|a|x|X/g;
            return t.replace(n, function (t) {
                return e[t] ? e[t]() : t
            })
        }, fromNow: function () {
            var t = this[0].getTime(), e = Date.now(), n = parseInt(e - t);
            return n < 1e4 ? "刚刚" : n < 6e4 ? parseInt(n / 1e3) + "秒前" : n < 36e5 ? parseInt(n / 6e4) + "分钟前" : n < 864e5 ? parseInt(n / 36e5) + "小时前" : n < 2592e6 ? parseInt(n / 864e5) + "天前" : n < 31104e6 ? parseInt(n / 2592e6) + "月前" : parseInt(n / 31104e6) + "年前"
        }, fillZero: function (t) {
            return t < 10 ? "0" + t : t
        }, YYYY: function () {
            return this[0].getFullYear()
        }, Q: function () {
            return Math.ceil(this.M() / 3)
        }, M: function () {
            return this[0].getMonth() + 1
        }, MM: function () {
            return this.fillZero(this.M())
        }, MMM: function () {
            return this.M() + "月"
        }, MMMM: function () {
            return n[this.M()]
        }, D: function () {
            return this[0].getDate()
        }, Do: function () {
            return this.D() + "日"
        }, DD: function () {
            return this.fillZero(this.D())
        }, d: function () {
            return this[0].getDay()
        }, dd: function () {
            return i[this.d()]
        }, ddd: function () {
            return "周" + this.dd()
        }, dddd: function () {
            return "星期" + this.dd()
        }, H: function () {
            return this[0].getHours()
        }, HH: function () {
            return this.fillZero(this.H())
        }, h: function () {
            var t = this.H();
            return 0 == t ? 12 : t
        }, hh: function () {
            return this.fillZero(this.h())
        }, m: function () {
            return this[0].getMinutes()
        }, mm: function () {
            return this.fillZero(this.m())
        }, s: function () {
            return this[0].getSeconds()
        }, ss: function () {
            return this.fillZero(this.s())
        }, SSS: function () {
            return this[0].getMilliseconds()
        }, SS: function () {
            return parseInt(this.SSS() / 10)
        }, S: function () {
            return parseInt(this.SS() / 10)
        }, A: function () {
            var t = 100 * this.H() + this.m();
            return t < 600 ? "凌晨" : t < 900 ? "早上" : t < 1130 ? "上午" : t < 1230 ? "中午" : t < 1800 ? "下午" : "晚上"
        }, a: function () {
            return this.A()
        }, x: function () {
            return this[0].getTime()
        }, X: function () {
            return parseInt(this.x() / 1e3)
        }
    }, t.exports = r
}, , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(209), r = n.n(i), a = n(412), o = (n.n(a), n(419)), s = (n.n(o), n(289)), l = (n.n(s), n(284)),
        u = (n.n(l), n(457)), h = (n.n(u), n(451)), c = (n.n(h), n(465));
    n.n(c);
    e.default = {
        mounted: function () {
            this.myChart = r.a.init(document.getElementById("line1")), this.initData()
        }, props: ["sevenDate", "sevenDay"], methods: {
            initData: function () {
                var t = ["#5793f3", "#675bba", "#d14a61"], e = {
                    color: t,
                    title: {text: "走势图", subtext: ""},
                    tooltip: {trigger: "axis"},
                    legend: {data: ["新注册用户", "新增订单", "新增管理员"]},
                    toolbox: {
                        show: !0,
                        feature: {
                            dataZoom: {yAxisIndex: "none"},
                            dataView: {readOnly: !1},
                            magicType: {type: ["bar", "line"]},
                            restore: {}
                        }
                    },
                    xAxis: {type: "category", boundaryGap: !1, data: this.sevenDay},
                    yAxis: [{
                        type: "value",
                        name: "用户",
                        min: 0,
                        max: 200,
                        position: "left",
                        axisLine: {lineStyle: {color: "#999"}},
                        axisLabel: {formatter: "{value}"}
                    }, {
                        type: "value",
                        name: "订单",
                        min: 0,
                        max: 200,
                        position: "right",
                        axisLine: {lineStyle: {color: "#999"}},
                        axisLabel: {formatter: "{value}"}
                    }],
                    series: [{
                        name: "新注册用户",
                        type: "line",
                        data: this.sevenDate[0],
                        yAxisIndex: 1,
                        markPoint: {data: [{type: "max", name: "最大值"}, {type: "min", name: "最小值"}]}
                    }, {
                        name: "新增订单",
                        type: "line",
                        data: this.sevenDate[1],
                        yAxisIndex: 1,
                        markPoint: {data: [{type: "max", name: "最大值"}, {type: "min", name: "最小值"}]}
                    }, {
                        name: "新增管理员",
                        type: "line",
                        data: this.sevenDate[2],
                        yAxisIndex: 1,
                        markPoint: {data: [{type: "max", name: "最大值"}, {type: "min", name: "最小值"}]}
                    }]
                };
                this.myChart.setOption(e)
            }
        }, watch: {
            sevenDate: function () {
                this.initData()
            }, sevenDay: function () {
                this.initData()
            }
        }
    }
}, , , , , , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(382), r = n.n(i), a = n(51), o = n.n(a), s = n(53), l = n.n(s), u = n(50), h = n.n(u), c = n(220),
        d = n.n(c), f = n(506), p = n.n(f), g = n(359), v = n.n(g), m = n(88);
    e.default = {
        data: function () {
            return {
                userCount: null,
                orderCount: null,
                adminCount: null,
                allUserCount: null,
                allOrderCount: null,
                allAdminCount: null,
                sevenDay: [],
                sevenDate: [[], [], []]
            }
        }, components: {headTop: d.a, tendency: p.a}, mounted: function () {
            this.initData();
            for (var t = 6; t > -1; t--) {
                var e = v()((new Date).getTime() - 864e5 * t).format("YYYY-MM-DD");
                this.sevenDay.push(e)
            }
            this.getSevenData()
        }, computed: {}, methods: {
            initData: function () {
                var t = this;
                return h()(o.a.mark(function e() {
                    var i;
                    return o.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                i = v()().format("YYYY-MM-DD"), l.a.all([n.i(m.D)(i), n.i(m.E)(i), n.i(m.F)(i), n.i(m.x)(), n.i(m.f)(), n.i(m.d)()]).then(function (e) {
                                    t.userCount = e[0].count, t.orderCount = e[1].count, t.adminCount = e[2].count, t.allUserCount = e[3].count, t.allOrderCount = e[4].count, t.allAdminCount = e[5].count
                                }).catch(function (t) {
                                    console.log(t)
                                });
                            case 2:
                            case"end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            }, getSevenData: function () {
                var t = this;
                return h()(o.a.mark(function e() {
                    var i, a;
                    return o.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                i = [[], [], []], t.sevenDay.forEach(function (t) {
                                    i[0].push(n.i(m.D)(t)), i[1].push(n.i(m.E)(t)), i[2].push(n.i(m.F)(t))
                                }), a = [].concat(r()(i[0]), r()(i[1]), r()(i[2])), l.a.all(a).then(function (e) {
                                    var n = [[], [], []];
                                    e.forEach(function (t, e) {
                                        1 == t.status && n[Math.floor(e / 7)].push(t.count)
                                    }), t.sevenDate = n
                                }).catch(function (t) {
                                    console.log(t)
                                });
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            }
        }
    }
}, , , , , , , , , , , function (t, e, n) {
    t.exports = {default: n(385), __esModule: !0}
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var i = n(381), r = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(i);
    e.default = function (t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return (0, r.default)(t)
    }
}, , , function (t, e, n) {
    n(55), n(387), t.exports = n(4).Array.from
}, function (t, e, n) {
    "use strict";
    var i = n(9), r = n(24);
    t.exports = function (t, e, n) {
        e in t ? i.f(t, e, r(0, n)) : t[e] = n
    }
}, function (t, e, n) {
    "use strict";
    var i = n(23), r = n(8), a = n(32), o = n(93), s = n(92), l = n(54), u = n(386), h = n(95);
    r(r.S + r.F * !n(94)(function (t) {
        Array.from(t)
    }), "Array", {
        from: function (t) {
            var e, n, r, c, d = a(t), f = "function" == typeof this ? this : Array, p = arguments.length,
                g = p > 1 ? arguments[1] : void 0, v = void 0 !== g, m = 0, x = h(d);
            if (v && (g = i(g, p > 2 ? arguments[2] : void 0, 2)), void 0 == x || f == Array && s(x)) for (e = l(d.length), n = new f(e); e > m; m++) u(n, m, v ? g(d[m], m) : d[m]); else for (c = x.call(d), n = new f; !(r = c.next()).done; m++) u(n, m, v ? o(c, g, [r.value, m], !0) : r.value);
            return n.length = m, n
        }
    })
}, , , , , , function (t, e, n) {
    e = t.exports = n(188)(!1), e.push([t.i, ".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.data_section{padding:20px;margin-bottom:40px}.data_section .section_title{text-align:center;font-size:30px;margin-bottom:10px}.data_section .data_list{text-align:center;font-size:14px;color:#666;border-radius:6px;background:#e5e9f2}.data_section .data_list .data_num{color:#333;font-size:26px}.data_section .data_list .head{border-radius:6px;font-size:22px;padding:4px 0;color:#fff;display:inline-block}.data_section .today_head{background:#ff9800}.data_section .all_head{background:#20a0ff}.wan{font-size:16px;color:#333}", ""])
}, , , , function (t, e, n) {
    e = t.exports = n(188)(!1), e.push([t.i, ".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.line1{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}", ""])
}, , , , , , , , , , , , , , , function (t, e, n) {
    var i = n(209), r = n(208), a = n(475);
    n(357), n(413), n(414), n(355), i.registerLayout(r.curry(a, "bar")), i.registerVisual(function (t) {
        t.eachSeriesByType("bar", function (t) {
            t.getData().setVisual("legendSymbol", "roundRect")
        })
    })
}, function (t, e, n) {
    var i = n(415), r = i.extend({type: "series.bar", dependencies: ["grid", "polar"], brushSelector: "rect"});
    t.exports = r
}, function (t, e, n) {
    function i(t, e, n) {
        n.style.text = null, h.updateProps(n, {shape: {width: 0}}, e, t, function () {
            n.parent && n.parent.remove(n)
        })
    }

    function r(t, e, n) {
        n.style.text = null, h.updateProps(n, {shape: {r: n.shape.r0}}, e, t, function () {
            n.parent && n.parent.remove(n)
        })
    }

    function a(t, e, n, i, r, a, o, s) {
        var l = e.getItemVisual(n, "color"), c = e.getItemVisual(n, "opacity"), f = i.getModel("itemStyle.normal"),
            p = i.getModel("itemStyle.emphasis").getBarItemStyle();
        s || t.setShape("r", f.get("barBorderRadius") || 0), t.useStyle(u.defaults({
            fill: l,
            opacity: c
        }, f.getBarItemStyle()));
        var g = i.getShallow("cursor");
        g && t.attr("cursor", g);
        var v = o ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
        s || d(t.style, p, i, l, a, n, v), h.setHoverStyle(t, p)
    }

    function o(t, e) {
        var n = t.get(g) || 0;
        return Math.min(n, Math.abs(e.width), Math.abs(e.height))
    }

    var s = n(214), l = (s.__DEV__, n(209)), u = n(208), h = n(210), c = n(417), d = c.setLabel, f = n(224), p = n(416),
        g = ["itemStyle", "normal", "barBorderWidth"];
    u.extend(f.prototype, p);
    var v = l.extendChartView({
        type: "bar", render: function (t, e, n) {
            var i = t.get("coordinateSystem");
            return "cartesian2d" !== i && "polar" !== i || this._render(t, e, n), this.group
        }, dispose: u.noop, _render: function (t, e, n) {
            var o, s = this.group, l = t.getData(), u = this._data, c = t.coordinateSystem, d = c.getBaseAxis();
            "cartesian2d" === c.type ? o = d.isHorizontal() : "polar" === c.type && (o = "angle" === d.dim);
            var f = t.isAnimationEnabled() ? t : null;
            l.diff(u).add(function (e) {
                if (l.hasValue(e)) {
                    var n = l.getItemModel(e), i = x[c.type](l, e, n), r = m[c.type](l, e, n, i, o, f);
                    l.setItemGraphicEl(e, r), s.add(r), a(r, l, e, n, i, t, o, "polar" === c.type)
                }
            }).update(function (e, n) {
                var i = u.getItemGraphicEl(n);
                if (!l.hasValue(e)) return void s.remove(i);
                var r = l.getItemModel(e), d = x[c.type](l, e, r);
                i ? h.updateProps(i, {shape: d}, f, e) : i = m[c.type](l, e, r, d, o, f, !0), l.setItemGraphicEl(e, i), s.add(i), a(i, l, e, r, d, t, o, "polar" === c.type)
            }).remove(function (t) {
                var e = u.getItemGraphicEl(t);
                "cartesian2d" === c.type ? e && i(t, f, e) : e && r(t, f, e)
            }).execute(), this._data = l
        }, remove: function (t, e) {
            var n = this.group, a = this._data;
            t.get("animation") ? a && a.eachItemGraphicEl(function (e) {
                "sector" === e.type ? r(e.dataIndex, t, e) : i(e.dataIndex, t, e)
            }) : n.removeAll()
        }
    }), m = {
        cartesian2d: function (t, e, n, i, r, a, o) {
            var s = new h.Rect({shape: u.extend({}, i)});
            if (a) {
                var l = s.shape, c = r ? "height" : "width", d = {};
                l[c] = 0, d[c] = i[c], h[o ? "updateProps" : "initProps"](s, {shape: d}, a, e)
            }
            return s
        }, polar: function (t, e, n, i, r, a, o) {
            var s = new h.Sector({shape: u.extend({}, i)});
            if (a) {
                var l = s.shape, c = r ? "r" : "endAngle", d = {};
                l[c] = r ? 0 : i.startAngle, d[c] = i[c], h[o ? "updateProps" : "initProps"](s, {shape: d}, a, e)
            }
            return s
        }
    }, x = {
        cartesian2d: function (t, e, n) {
            var i = t.getItemLayout(e), r = o(n, i), a = i.width > 0 ? 1 : -1, s = i.height > 0 ? 1 : -1;
            return {x: i.x + a * r / 2, y: i.y + s * r / 2, width: i.width - a * r, height: i.height - s * r}
        }, polar: function (t, e, n) {
            var i = t.getItemLayout(e);
            return {cx: i.cx, cy: i.cy, r0: i.r0, r: i.r, startAngle: i.startAngle, endAngle: i.endAngle}
        }
    };
    t.exports = v
}, function (t, e, n) {
    var i = n(255), r = n(252), a = i.extend({
        type: "series.__base_bar__",
        getInitialData: function (t, e) {
            return r(t.data, this, e)
        },
        getMarkerPosition: function (t) {
            var e = this.coordinateSystem;
            if (e) {
                var n = e.dataToPoint(t, !0), i = this.getData(), r = i.getLayout("offset"), a = i.getLayout("size");
                return n[e.getBaseAxis().isHorizontal() ? 0 : 1] += r + a / 2, n
            }
            return [NaN, NaN]
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            itemStyle: {}
        }
    });
    t.exports = a
}, function (t, e, n) {
    var i = n(239),
        r = i([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        a = {
            getBarItemStyle: function (t) {
                var e = r(this, t);
                if (this.getBorderLineDash) {
                    var n = this.getBorderLineDash();
                    n && (e.lineDash = n)
                }
                return e
            }
        };
    t.exports = a
}, function (t, e, n) {
    function i(t, e, n, i, o, s, l) {
        var u = n.getModel("label.normal"), h = n.getModel("label.emphasis");
        a.setLabelStyle(t, e, u, h, {
            labelFetcher: o,
            labelDataIndex: s,
            defaultText: o.getRawValue(s),
            isRectText: !0,
            autoColor: i
        }), r(t), r(e)
    }

    function r(t, e) {
        "outside" === t.textPosition && (t.textPosition = e)
    }

    var a = n(210);
    e.setLabel = i
}, function (t, e, n) {
    function i(t) {
        var e, n = a(t, "label");
        if (n.length) e = n[0]; else for (var i, r = t.dimensions.slice(); r.length && (e = r.pop(), "ordinal" === (i = t.getDimensionInfo(e).type) || "time" === i);) ;
        return e
    }

    var r = n(211), a = r.otherDimToDataDim;
    e.findLabelValueDim = i
}, function (t, e, n) {
    var i = n(209), r = n(208);
    n(420), n(421);
    var a = n(480), o = n(476), s = n(478);
    n(355), i.registerVisual(r.curry(a, "line", "circle", "line")), i.registerLayout(r.curry(o, "line")), i.registerProcessor(i.PRIORITY.PROCESSOR.STATISTIC, r.curry(s, "line"))
}, function (t, e, n) {
    var i = n(214), r = (i.__DEV__, n(252)), a = n(255), o = a.extend({
        type: "series.line",
        dependencies: ["grid", "polar"],
        getInitialData: function (t, e) {
            return r(t.data, this, e)
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: {normal: {position: "top"}},
            lineStyle: {normal: {width: 2, type: "solid"}},
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: !1,
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
        }
    });
    t.exports = o
}, function (t, e, n) {
    function i(t, e) {
        if (t.length === e.length) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n], r = e[n];
                if (i[0] !== r[0] || i[1] !== r[1]) return
            }
            return !0
        }
    }

    function r(t) {
        return "number" == typeof t ? t : t ? .3 : 0
    }

    function a(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
            var n = t.getBandWidth() / 2 - 1, i = e[1] > e[0] ? 1 : -1;
            e[0] += i * n, e[1] -= i * n
        }
        return e
    }

    function o(t) {
        return t >= 0 ? 1 : -1
    }

    function s(t, e) {
        var n = t.getBaseAxis(), i = t.getOtherAxis(n), r = 0;
        if (!n.onZero) {
            var a = i.scale.getExtent();
            a[0] > 0 ? r = a[0] : a[1] < 0 && (r = a[1])
        }
        var s = i.dim, l = "x" === s || "radius" === s ? 1 : 0;
        return e.mapArray([s], function (i, a) {
            for (var u, h = e.stackedOn; h && o(h.get(s, a)) === o(i);) {
                u = h;
                break
            }
            var c = [];
            return c[l] = e.get(n.dim, a), c[1 - l] = u ? u.get(s, a, !0) : r, t.dataToPoint(c)
        }, !0)
    }

    function l(t, e, n) {
        var i = a(t.getAxis("x")), r = a(t.getAxis("y")), o = t.getBaseAxis().isHorizontal(), s = Math.min(i[0], i[1]),
            l = Math.min(r[0], r[1]), u = Math.max(i[0], i[1]) - s, h = Math.max(r[0], r[1]) - l,
            c = n.get("lineStyle.normal.width") || 2, d = n.get("clipOverflow") ? c / 2 : Math.max(u, h);
        o ? (l -= d, h += 2 * d) : (s -= d, u += 2 * d);
        var f = new x.Rect({shape: {x: s, y: l, width: u, height: h}});
        return e && (f.shape[o ? "width" : "height"] = 0, x.initProps(f, {shape: {width: u, height: h}}, n)), f
    }

    function u(t, e, n) {
        var i = t.getAngleAxis(), r = t.getRadiusAxis(), a = r.getExtent(), o = i.getExtent(), s = Math.PI / 180,
            l = new x.Sector({
                shape: {
                    cx: t.cx,
                    cy: t.cy,
                    r0: a[0],
                    r: a[1],
                    startAngle: -o[0] * s,
                    endAngle: -o[1] * s,
                    clockwise: i.inverse
                }
            });
        return e && (l.shape.endAngle = -o[0] * s, x.initProps(l, {shape: {endAngle: -o[1] * s}}, n)), l
    }

    function h(t, e, n) {
        return "polar" === t.type ? u(t, e, n) : l(t, e, n)
    }

    function c(t, e, n) {
        for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
            var s = t[o + 1], l = t[o];
            a.push(l);
            var u = [];
            switch (n) {
                case"end":
                    u[r] = s[r], u[1 - r] = l[1 - r], a.push(u);
                    break;
                case"middle":
                    var h = (l[r] + s[r]) / 2, c = [];
                    u[r] = c[r] = h, u[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(u), a.push(c);
                    break;
                default:
                    u[r] = l[r], u[1 - r] = s[1 - r], a.push(u)
            }
        }
        return t[o] && a.push(t[o]), a
    }

    function d(t, e) {
        var n = t.getVisual("visualMeta");
        if (n && n.length && t.count()) {
            for (var i, r = n.length - 1; r >= 0; r--) if (n[r].dimension < 2) {
                i = n[r];
                break
            }
            if (i && "cartesian2d" === e.type) {
                var a = i.dimension, o = t.dimensions[a], s = e.getAxis(o), l = p.map(i.stops, function (t) {
                    return {coord: s.toGlobalCoord(s.dataToCoord(t.value)), color: t.color}
                }), u = l.length, h = i.outerColors.slice();
                u && l[0].coord > l[u - 1].coord && (l.reverse(), h.reverse());
                var c = l[0].coord - 10, d = l[u - 1].coord + 10, f = d - c;
                if (f < .001) return "transparent";
                p.each(l, function (t) {
                    t.offset = (t.coord - c) / f
                }), l.push({
                    offset: u ? l[u - 1].offset : .5,
                    color: h[1] || "transparent"
                }), l.unshift({offset: u ? l[0].offset : .5, color: h[0] || "transparent"});
                var g = new x.LinearGradient(0, 0, 0, 0, l, !0);
                return g[o] = c, g[o + "2"] = d, g
            }
        }
    }

    var f = n(214), p = (f.__DEV__, n(208)), g = n(345), v = n(344), m = n(422), x = n(210), y = n(211), _ = n(423),
        b = _.Polyline, w = _.Polygon, S = n(258), M = S.extend({
            type: "line", init: function () {
                var t = new x.Group, e = new g;
                this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
            }, render: function (t, e, n) {
                var a = t.coordinateSystem, o = this.group, l = t.getData(), u = t.getModel("lineStyle.normal"),
                    f = t.getModel("areaStyle.normal"), g = l.mapArray(l.getItemLayout, !0), v = "polar" === a.type,
                    m = this._coordSys, x = this._symbolDraw, y = this._polyline, _ = this._polygon, b = this._lineGroup,
                    w = t.get("animation"), S = !f.isEmpty(), M = s(a, l), T = t.get("showSymbol"),
                    A = T && !v && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(l, a), C = this._data;
                C && C.eachItemGraphicEl(function (t, e) {
                    t.__temp && (o.remove(t), C.setItemGraphicEl(e, null))
                }), T || x.remove(), o.add(b);
                var I = !v && t.get("step");
                y && m.type === a.type && I === this._step ? (S && !_ ? _ = this._newPolygon(g, M, a, w) : _ && !S && (b.remove(_), _ = this._polygon = null), b.setClipPath(h(a, !1, t)), T && x.updateData(l, A), l.eachItemGraphicEl(function (t) {
                    t.stopAnimation(!0)
                }), i(this._stackedOnPoints, M) && i(this._points, g) || (w ? this._updateAnimation(l, M, a, n, I) : (I && (g = c(g, a, I), M = c(M, a, I)), y.setShape({points: g}), _ && _.setShape({
                    points: g,
                    stackedOnPoints: M
                })))) : (T && x.updateData(l, A), I && (g = c(g, a, I), M = c(M, a, I)), y = this._newPolyline(g, a, w), S && (_ = this._newPolygon(g, M, a, w)), b.setClipPath(h(a, !0, t)));
                var D = d(l, a) || l.getVisual("color");
                y.useStyle(p.defaults(u.getLineStyle(), {fill: "none", stroke: D, lineJoin: "bevel"}));
                var k = t.get("smooth");
                if (k = r(t.get("smooth")), y.setShape({
                    smooth: k,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                }), _) {
                    var P = l.stackedOn, L = 0;
                    if (_.useStyle(p.defaults(f.getAreaStyle(), {fill: D, opacity: .7, lineJoin: "bevel"})), P) {
                        L = r(P.hostModel.get("smooth"))
                    }
                    _.setShape({
                        smooth: k,
                        stackedOnSmooth: L,
                        smoothMonotone: t.get("smoothMonotone"),
                        connectNulls: t.get("connectNulls")
                    })
                }
                this._data = l, this._coordSys = a, this._stackedOnPoints = M, this._points = g, this._step = I
            }, dispose: function () {
            }, highlight: function (t, e, n, i) {
                var r = t.getData(), a = y.queryDataIndex(r, i);
                if (!(a instanceof Array) && null != a && a >= 0) {
                    var o = r.getItemGraphicEl(a);
                    if (!o) {
                        var s = r.getItemLayout(a);
                        if (!s) return;
                        o = new v(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o)
                    }
                    o.highlight()
                } else S.prototype.highlight.call(this, t, e, n, i)
            }, downplay: function (t, e, n, i) {
                var r = t.getData(), a = y.queryDataIndex(r, i);
                if (null != a && a >= 0) {
                    var o = r.getItemGraphicEl(a);
                    o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay())
                } else S.prototype.downplay.call(this, t, e, n, i)
            }, _newPolyline: function (t) {
                var e = this._polyline;
                return e && this._lineGroup.remove(e), e = new b({
                    shape: {points: t},
                    silent: !0,
                    z2: 10
                }), this._lineGroup.add(e), this._polyline = e, e
            }, _newPolygon: function (t, e) {
                var n = this._polygon;
                return n && this._lineGroup.remove(n), n = new w({
                    shape: {points: t, stackedOnPoints: e},
                    silent: !0
                }), this._lineGroup.add(n), this._polygon = n, n
            }, _getSymbolIgnoreFunc: function (t, e) {
                var n = e.getAxesByScale("ordinal")[0];
                if (n && n.isLabelIgnored) return p.bind(n.isLabelIgnored, n)
            }, _updateAnimation: function (t, e, n, i, r) {
                var a = this._polyline, o = this._polygon, s = t.hostModel,
                    l = m(this._data, t, this._stackedOnPoints, e, this._coordSys, n), u = l.current,
                    h = l.stackedOnCurrent, d = l.next, f = l.stackedOnNext;
                r && (u = c(l.current, n, r), h = c(l.stackedOnCurrent, n, r), d = c(l.next, n, r), f = c(l.stackedOnNext, n, r)), a.shape.__points = l.current, a.shape.points = u, x.updateProps(a, {shape: {points: d}}, s), o && (o.setShape({
                    points: u,
                    stackedOnPoints: h
                }), x.updateProps(o, {shape: {points: d, stackedOnPoints: f}}, s));
                for (var p = [], g = l.status, v = 0; v < g.length; v++) {
                    if ("=" === g[v].cmd) {
                        var y = t.getItemGraphicEl(g[v].idx1);
                        y && p.push({el: y, ptIdx: v})
                    }
                }
                a.animators && a.animators.length && a.animators[0].during(function () {
                    for (var t = 0; t < p.length; t++) {
                        p[t].el.attr("position", a.shape.__points[p[t].ptIdx])
                    }
                })
            }, remove: function (t) {
                var e = this.group, n = this._data;
                this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n && n.eachItemGraphicEl(function (t, i) {
                    t.__temp && (e.remove(t), n.setItemGraphicEl(i, null))
                }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
            }
        });
    t.exports = M
}, function (t, e) {
    function n(t) {
        return t >= 0 ? 1 : -1
    }

    function i(t, e, i) {
        for (var r, a = t.getBaseAxis(), o = t.getOtherAxis(a), s = a.onZero ? 0 : o.scale.getExtent()[0], l = o.dim, u = "x" === l || "radius" === l ? 1 : 0, h = e.stackedOn, c = e.get(l, i); h && n(h.get(l, i)) === n(c);) {
            r = h;
            break
        }
        var d = [];
        return d[u] = e.get(a.dim, i), d[1 - u] = r ? r.get(l, i, !0) : s, t.dataToPoint(d)
    }

    function r(t, e) {
        var n = [];
        return e.diff(t).add(function (t) {
            n.push({cmd: "+", idx: t})
        }).update(function (t, e) {
            n.push({cmd: "=", idx: e, idx1: t})
        }).remove(function (t) {
            n.push({cmd: "-", idx: t})
        }).execute(), n
    }

    function a(t, e, n, a, o, s) {
        for (var l = r(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], v = s.dimensions, m = 0; m < l.length; m++) {
            var x = l[m], y = !0;
            switch (x.cmd) {
                case"=":
                    var _ = t.getItemLayout(x.idx), b = e.getItemLayout(x.idx1);
                    (isNaN(_[0]) || isNaN(_[1])) && (_ = b.slice()), u.push(_), h.push(b), c.push(n[x.idx]), d.push(a[x.idx1]), g.push(e.getRawIndex(x.idx1));
                    break;
                case"+":
                    var w = x.idx;
                    u.push(o.dataToPoint([e.get(v[0], w, !0), e.get(v[1], w, !0)])), h.push(e.getItemLayout(w).slice()), c.push(i(o, e, w)), d.push(a[w]), g.push(e.getRawIndex(w));
                    break;
                case"-":
                    var w = x.idx, S = t.getRawIndex(w);
                    S !== w ? (u.push(t.getItemLayout(w)), h.push(s.dataToPoint([t.get(v[0], w, !0), t.get(v[1], w, !0)])), c.push(n[w]), d.push(i(s, t, w)), g.push(S)) : y = !1
            }
            y && (f.push(x), p.push(p.length))
        }
        p.sort(function (t, e) {
            return g[t] - g[e]
        });
        for (var M = [], T = [], A = [], C = [], I = [], m = 0; m < p.length; m++) {
            var w = p[m];
            M[m] = u[w], T[m] = h[w], A[m] = c[w], C[m] = d[w], I[m] = f[w]
        }
        return {current: M, next: T, stackedOnCurrent: A, stackedOnNext: C, status: I}
    }

    t.exports = a
}, function (t, e, n) {
    function i(t) {
        return isNaN(t[0]) || isNaN(t[1])
    }

    function r(t, e, n, r, a, o, l, v, m, x, y) {
        for (var _ = 0, b = n, w = 0; w < r; w++) {
            var S = e[b];
            if (b >= a || b < 0) break;
            if (i(S)) {
                if (y) {
                    b += o;
                    continue
                }
                break
            }
            if (b === n) t[o > 0 ? "moveTo" : "lineTo"](S[0], S[1]), d(p, S); else if (m > 0) {
                var M = b + o, T = e[M];
                if (y) for (; T && i(e[M]);) M += o, T = e[M];
                var A = .5, C = e[_], T = e[M];
                if (!T || i(T)) d(g, S); else {
                    i(T) && !y && (T = S), s.sub(f, T, C);
                    var I, D;
                    if ("x" === x || "y" === x) {
                        var k = "x" === x ? 0 : 1;
                        I = Math.abs(S[k] - C[k]), D = Math.abs(S[k] - T[k])
                    } else I = s.dist(S, C), D = s.dist(S, T);
                    A = D / (D + I), c(g, S, f, -m * (1 - A))
                }
                u(p, p, v), h(p, p, l), u(g, g, v), h(g, g, l), t.bezierCurveTo(p[0], p[1], g[0], g[1], S[0], S[1]), c(p, S, f, m * A)
            } else t.lineTo(S[0], S[1]);
            _ = b, b += o
        }
        return w
    }

    function a(t, e) {
        var n = [1 / 0, 1 / 0], i = [-1 / 0, -1 / 0];
        if (e) for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), a[1] > i[1] && (i[1] = a[1])
        }
        return {min: e ? n : i, max: e ? i : n}
    }

    var o = n(215), s = n(213), l = n(281), u = s.min, h = s.max, c = s.scaleAndAdd, d = s.copy, f = [], p = [], g = [],
        v = o.extend({
            type: "ec-polyline",
            shape: {points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1},
            style: {fill: null, stroke: "#000"},
            brush: l(o.prototype.brush),
            buildPath: function (t, e) {
                var n = e.points, o = 0, s = n.length, l = a(n, e.smoothConstraint);
                if (e.connectNulls) {
                    for (; s > 0 && i(n[s - 1]); s--) ;
                    for (; o < s && i(n[o]); o++) ;
                }
                for (; o < s;) o += r(t, n, o, s, s, 1, l.min, l.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
            }
        }), m = o.extend({
            type: "ec-polygon",
            shape: {
                points: [],
                stackedOnPoints: [],
                smooth: 0,
                stackedOnSmooth: 0,
                smoothConstraint: !0,
                smoothMonotone: null,
                connectNulls: !1
            },
            brush: l(o.prototype.brush),
            buildPath: function (t, e) {
                var n = e.points, o = e.stackedOnPoints, s = 0, l = n.length, u = e.smoothMonotone,
                    h = a(n, e.smoothConstraint), c = a(o, e.smoothConstraint);
                if (e.connectNulls) {
                    for (; l > 0 && i(n[l - 1]); l--) ;
                    for (; s < l && i(n[s]); s++) ;
                }
                for (; s < l;) {
                    var d = r(t, n, s, l, l, 1, h.min, h.max, e.smooth, u, e.connectNulls);
                    r(t, o, s + d - 1, d, l, -1, c.min, c.max, e.stackedOnSmooth, u, e.connectNulls), s += d + 1, t.closePath()
                }
            }
        });
    e.Polyline = v, e.Polygon = m
}, , , , , , function (t, e, n) {
    n(356), n(430)
}, function (t, e, n) {
    var i = n(208), r = n(210), a = n(346), o = n(347), s = n(348), l = a.ifIgnoreOnTick, u = a.getInterval,
        h = ["axisLine", "axisTickLabel", "axisName"], c = ["splitArea", "splitLine"], d = o.extend({
            type: "cartesianAxis", axisPointerClass: "CartesianAxisPointer", render: function (t, e, n, o) {
                this.group.removeAll();
                var l = this._axisGroup;
                if (this._axisGroup = new r.Group, this.group.add(this._axisGroup), t.get("show")) {
                    var u = t.getCoordSysModel(), f = s.layout(u, t), p = new a(t, f);
                    i.each(h, p.add, p), this._axisGroup.add(p.getGroup()), i.each(c, function (e) {
                        t.get(e + ".show") && this["_" + e](t, u, f.labelInterval)
                    }, this), r.groupTransition(l, this._axisGroup, t), d.superCall(this, "render", t, e, n, o)
                }
            }, _splitLine: function (t, e, n) {
                var a = t.axis;
                if (!a.scale.isBlank()) {
                    var o = t.getModel("splitLine"), s = o.getModel("lineStyle"), h = s.get("color"), c = u(o, n);
                    h = i.isArray(h) ? h : [h];
                    for (var d = e.coordinateSystem.getRect(), f = a.isHorizontal(), p = 0, g = a.getTicksCoords(), v = a.scale.getTicks(), m = t.get("axisLabel.showMinLabel"), x = t.get("axisLabel.showMaxLabel"), y = [], _ = [], b = s.getLineStyle(), w = 0; w < g.length; w++) if (!l(a, w, c, g.length, m, x)) {
                        var S = a.toGlobalCoord(g[w]);
                        f ? (y[0] = S, y[1] = d.y, _[0] = S, _[1] = d.y + d.height) : (y[0] = d.x, y[1] = S, _[0] = d.x + d.width, _[1] = S);
                        var M = p++ % h.length;
                        this._axisGroup.add(new r.Line(r.subPixelOptimizeLine({
                            anid: "line_" + v[w],
                            shape: {x1: y[0], y1: y[1], x2: _[0], y2: _[1]},
                            style: i.defaults({stroke: h[M]}, b),
                            silent: !0
                        })))
                    }
                }
            }, _splitArea: function (t, e, n) {
                var a = t.axis;
                if (!a.scale.isBlank()) {
                    var o = t.getModel("splitArea"), s = o.getModel("areaStyle"), h = s.get("color"),
                        c = e.coordinateSystem.getRect(), d = a.getTicksCoords(), f = a.scale.getTicks(),
                        p = a.toGlobalCoord(d[0]), g = a.toGlobalCoord(d[0]), v = 0, m = u(o, n), x = s.getAreaStyle();
                    h = i.isArray(h) ? h : [h];
                    for (var y = t.get("axisLabel.showMinLabel"), _ = t.get("axisLabel.showMaxLabel"), b = 1; b < d.length; b++) if (!l(a, b, m, d.length, y, _)) {
                        var w, S, M, T, A = a.toGlobalCoord(d[b]);
                        a.isHorizontal() ? (w = p, S = c.y, M = A - w, T = c.height) : (w = c.x, S = g, M = c.width, T = A - S);
                        var C = v++ % h.length;
                        this._axisGroup.add(new r.Rect({
                            anid: "area_" + f[b],
                            shape: {x: w, y: S, width: M, height: T},
                            style: i.defaults({fill: h[C]}, x),
                            silent: !0
                        })), p = w + M, g = S + T
                    }
                }
            }
        });
    d.extend({type: "xAxis"}), d.extend({type: "yAxis"})
}, function (t, e, n) {
    var i = n(209), r = n(208), a = n(276), o = n(436);
    n(432), n(433), n(435), i.registerPreprocessor(function (t) {
        if (t) {
            (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !r.isArray(e) && (t.axisPointer.link = [e])
        }
    }), i.registerProcessor(i.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
        t.getComponent("axisPointer").coordSysAxesInfo = a.collect(t, e)
    }), i.registerAction({type: "updateAxisPointer", event: "updateAxisPointer", update: ":updateAxisPointer"}, o)
}, function (t, e, n) {
    var i = n(209), r = i.extendComponentModel({
        type: "axisPointer",
        coordSysAxesInfo: null,
        defaultOption: {
            show: "auto",
            triggerOn: null,
            zlevel: 0,
            z: 50,
            type: "line",
            snap: !1,
            triggerTooltip: !0,
            value: null,
            status: null,
            link: [],
            animation: null,
            animationDurationUpdate: 200,
            lineStyle: {color: "#aaa", width: 1, type: "solid"},
            shadowStyle: {color: "rgba(150,150,150,0.3)"},
            label: {
                show: !0,
                formatter: null,
                precision: "auto",
                margin: 3,
                color: "#fff",
                padding: [5, 7, 5, 7],
                backgroundColor: "auto",
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: "#aaa"
            },
            handle: {
                show: !1,
                icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                size: 45,
                margin: 50,
                color: "#333",
                shadowBlur: 3,
                shadowColor: "#aaa",
                shadowOffsetX: 0,
                shadowOffsetY: 2,
                throttle: 40
            }
        }
    }), a = r;
    t.exports = a
}, function (t, e, n) {
    var i = n(209), r = n(350), a = i.extendComponentView({
        type: "axisPointer", render: function (t, e, n) {
            var i = e.getComponent("tooltip"), a = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
            r.register("axisPointer", n, function (t, e, n) {
                "none" !== a && ("leave" === t || a.indexOf(t) >= 0) && n({
                    type: "updateAxisPointer",
                    currTrigger: t,
                    x: e && e.offsetX,
                    y: e && e.offsetY
                })
            })
        }, remove: function (t, e) {
            r.unregister(e.getZr(), "axisPointer"), a.superApply(this._model, "remove", arguments)
        }, dispose: function (t, e) {
            r.unregister("axisPointer", e), a.superApply(this._model, "dispose", arguments)
        }
    }), o = a;
    t.exports = o
}, function (t, e, n) {
    function i() {
    }

    function r(t, e, n, i) {
        a(v(n).lastProp, i) || (v(n).lastProp = i, e ? c.updateProps(n, i, t) : (n.stopAnimation(), n.attr(i)))
    }

    function a(t, e) {
        if (u.isObject(t) && u.isObject(e)) {
            var n = !0;
            return u.each(e, function (e, i) {
                n = n && a(t[i], e)
            }), !!n
        }
        return t === e
    }

    function o(t, e) {
        t[e.get("label.show") ? "show" : "hide"]()
    }

    function s(t) {
        return {position: t.position.slice(), rotation: t.rotation || 0}
    }

    function l(t, e, n) {
        var i = e.get("z"), r = e.get("zlevel");
        t && t.traverse(function (t) {
            "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n)
        })
    }

    var u = n(208), h = n(225), c = n(210), d = n(276), f = n(233), p = n(251), g = n(211), v = g.makeGetter(),
        m = u.clone, x = u.bind;
    i.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function (t, e, n, i) {
            var a = e.get("value"), o = e.get("status");
            if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== a || this._lastStatus !== o) {
                this._lastValue = a, this._lastStatus = o;
                var s = this._group, h = this._handle;
                if (!o || "hide" === o) return s && s.hide(), void (h && h.hide());
                s && s.show(), h && h.show();
                var d = {};
                this.makeElOption(d, a, t, e, n);
                var f = d.graphicKey;
                f !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = f;
                var p = this._moveAnimation = this.determineAnimation(t, e);
                if (s) {
                    var g = u.curry(r, e, p);
                    this.updatePointerEl(s, d, g, e), this.updateLabelEl(s, d, g, e)
                } else s = this._group = new c.Group, this.createPointerEl(s, d, t, e), this.createLabelEl(s, d, t, e), n.getZr().add(s);
                l(s, e, !0), this._renderHandle(a)
            }
        },
        remove: function (t) {
            this.clear(t)
        },
        dispose: function (t) {
            this.clear(t)
        },
        determineAnimation: function (t, e) {
            var n = e.get("animation"), i = t.axis, r = "category" === i.type, a = e.get("snap");
            if (!a && !r) return !1;
            if ("auto" === n || null == n) {
                var o = this.animationThreshold;
                if (r && i.getBandWidth() > o) return !0;
                if (a) {
                    var s = d.getAxisInfo(t).seriesDataCount, l = i.getExtent();
                    return Math.abs(l[0] - l[1]) / s > o
                }
                return !1
            }
            return !0 === n
        },
        makeElOption: function (t, e, n, i, r) {
        },
        createPointerEl: function (t, e, n, i) {
            var r = e.pointer;
            if (r) {
                var a = v(t).pointerEl = new c[r.type](m(e.pointer));
                t.add(a)
            }
        },
        createLabelEl: function (t, e, n, i) {
            if (e.label) {
                var r = v(t).labelEl = new c.Rect(m(e.label));
                t.add(r), o(r, i)
            }
        },
        updatePointerEl: function (t, e, n) {
            var i = v(t).pointerEl;
            i && (i.setStyle(e.pointer.style), n(i, {shape: e.pointer.shape}))
        },
        updateLabelEl: function (t, e, n, i) {
            var r = v(t).labelEl;
            r && (r.setStyle(e.label.style), n(r, {shape: e.label.shape, position: e.label.position}), o(r, i))
        },
        _renderHandle: function (t) {
            if (!this._dragging && this.updateHandleTransform) {
                var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, r = e.getModel("handle"),
                    a = e.get("status");
                if (!r.get("show") || !a || "hide" === a) return i && n.remove(i), void (this._handle = null);
                var o;
                this._handle || (o = !0, i = this._handle = c.createIcon(r.get("icon"), {
                    cursor: "move",
                    draggable: !0,
                    onmousemove: function (t) {
                        f.stop(t.event)
                    },
                    onmousedown: x(this._onHandleDragMove, this, 0, 0),
                    drift: x(this._onHandleDragMove, this),
                    ondragend: x(this._onHandleDragEnd, this)
                }), n.add(i)), l(i, e, !1);
                var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
                i.setStyle(r.getItemStyle(null, s));
                var h = r.get("size");
                u.isArray(h) || (h = [h, h]), i.attr("scale", [h[0] / 2, h[1] / 2]), p.createOrUpdate(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o)
            }
        },
        _moveHandleToValue: function (t, e) {
            r(this._axisPointerModel, !e && this._moveAnimation, this._handle, s(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
        },
        _onHandleDragMove: function (t, e) {
            var n = this._handle;
            if (n) {
                this._dragging = !0;
                var i = this.updateHandleTransform(s(n), [t, e], this._axisModel, this._axisPointerModel);
                this._payloadInfo = i, n.stopAnimation(), n.attr(s(i)), v(n).lastProp = null, this._doDispatchAxisPointer()
            }
        },
        _doDispatchAxisPointer: function () {
            if (this._handle) {
                var t = this._payloadInfo, e = this._axisModel;
                this._api.dispatchAction({
                    type: "updateAxisPointer",
                    x: t.cursorPoint[0],
                    y: t.cursorPoint[1],
                    tooltipOption: t.tooltipOption,
                    axesInfo: [{axisDim: e.axis.dim, axisIndex: e.componentIndex}]
                })
            }
        },
        _onHandleDragEnd: function (t) {
            if (this._dragging = !1, this._handle) {
                var e = this._axisPointerModel.get("value");
                this._moveHandleToValue(e), this._api.dispatchAction({type: "hideTip"})
            }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function (t) {
            this._lastValue = null, this._lastStatus = null;
            var e = t.getZr(), n = this._group, i = this._handle;
            e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null)
        },
        doClear: function () {
        },
        buildLabel: function (t, e, n) {
            return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
        }
    }, i.prototype.constructor = i, h.enableClassExtend(i);
    var y = i;
    t.exports = y
}, function (t, e, n) {
    function i(t, e) {
        var n = {};
        return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
    }

    function r(t) {
        return "x" === t.dim ? 0 : 1
    }

    var a = n(210), o = n(434), s = n(351), l = n(348), u = n(347), h = o.extend({
        makeElOption: function (t, e, n, r, a) {
            var o = n.axis, u = o.grid, h = r.get("type"), d = i(u, o).getOtherAxis(o).getGlobalExtent(),
                f = o.toGlobalCoord(o.dataToCoord(e, !0));
            if (h && "none" !== h) {
                var p = s.buildElStyle(r), g = c[h](o, f, d, p);
                g.style = p, t.graphicKey = g.type, t.pointer = g
            }
            var v = l.layout(u.model, n);
            s.buildCartesianSingleLabelElOption(e, t, v, n, r, a)
        }, getHandleTransform: function (t, e, n) {
            var i = l.layout(e.axis.grid.model, e, {labelInside: !1});
            return i.labelMargin = n.get("handle.margin"), {
                position: s.getTransformedPosition(e.axis, t, i),
                rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
            }
        }, updateHandleTransform: function (t, e, n, r) {
            var a = n.axis, o = a.grid, s = a.getGlobalExtent(!0), l = i(o, a).getOtherAxis(a).getGlobalExtent(),
                u = "x" === a.dim ? 0 : 1, h = t.position;
            h[u] += e[u], h[u] = Math.min(s[1], h[u]), h[u] = Math.max(s[0], h[u]);
            var c = (l[1] + l[0]) / 2, d = [c, c];
            d[u] = h[u];
            var f = [{verticalAlign: "middle"}, {align: "center"}];
            return {position: h, rotation: t.rotation, cursorPoint: d, tooltipOption: f[u]}
        }
    }), c = {
        line: function (t, e, n, i) {
            var o = s.makeLineShape([e, n[0]], [e, n[1]], r(t));
            return a.subPixelOptimizeLine({shape: o, style: i}), {type: "Line", shape: o}
        }, shadow: function (t, e, n, i) {
            var a = t.getBandWidth(), o = n[1] - n[0];
            return {type: "Rect", shape: s.makeRectShape([e - a / 2, n[0]], [a, o], r(t))}
        }
    };
    u.registerAxisPointerClass("CartesianAxisPointer", h);
    var d = h;
    t.exports = d
}, function (t, e, n) {
    function i(t, e, n) {
        var i = t.currTrigger, a = [t.x, t.y], g = t, v = t.dispatchAction || p.bind(n.dispatchAction, n),
            _ = e.getComponent("axisPointer").coordSysAxesInfo;
        if (_) {
            f(a) && (a = m({seriesIndex: g.seriesIndex, dataIndex: g.dataIndex}, e).point);
            var b = f(a), w = g.axesInfo, S = _.axesInfo, M = "leave" === i || f(a), T = {}, A = {},
                C = {list: [], map: {}}, I = {showPointer: y(o, A), showTooltip: y(s, C)};
            x(_.coordSysMap, function (t, e) {
                var n = b || t.containPoint(a);
                x(_.coordSysAxesInfo[e], function (t, e) {
                    var i = t.axis, o = c(w, t);
                    if (!M && n && (!w || o)) {
                        var s = o && o.value;
                        null != s || b || (s = i.pointToData(a)), null != s && r(t, s, I, !1, T)
                    }
                })
            });
            var D = {};
            return x(S, function (t, e) {
                var n = t.linkGroup;
                n && !A[e] && x(n.axesInfo, function (e, i) {
                    var r = A[i];
                    if (e !== t && r) {
                        var a = r.value;
                        n.mapper && (a = t.axis.scale.parse(n.mapper(a, d(e), d(t)))), D[t.key] = a
                    }
                })
            }), x(D, function (t, e) {
                r(S[e], t, I, !0, T)
            }), l(A, S, T), u(C, a, t, v), h(S, v, n), T
        }
    }

    function r(t, e, n, i, r) {
        var o = t.axis;
        if (!o.scale.isBlank() && o.containData(e)) {
            if (!t.involveSeries) return void n.showPointer(t, e);
            var s = a(e, t), l = s.payloadBatch, u = s.snapToValue;
            l[0] && null == r.seriesIndex && p.extend(r, l[0]), !i && t.snap && o.containData(u) && null != u && (e = u), n.showPointer(t, e, l, r), n.showTooltip(t, s, u)
        }
    }

    function a(t, e) {
        var n = e.axis, i = n.dim, r = t, a = [], o = Number.MAX_VALUE, s = -1;
        return x(e.seriesModels, function (e, l) {
            var u, h, c = e.coordDimToDataDim(i);
            if (e.getAxisTooltipData) {
                var d = e.getAxisTooltipData(c, t, n);
                h = d.dataIndices, u = d.nestestValue
            } else {
                if (h = e.getData().indicesOfNearest(c[0], t, !1, "category" === n.type ? .5 : null), !h.length) return;
                u = e.getData().get(c[0], h[0])
            }
            if (null != u && isFinite(u)) {
                var f = t - u, p = Math.abs(f);
                p <= o && ((p < o || f >= 0 && s < 0) && (o = p, s = f, r = u, a.length = 0), x(h, function (t) {
                    a.push({seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t)})
                }))
            }
        }), {payloadBatch: a, snapToValue: r}
    }

    function o(t, e, n, i) {
        t[e.key] = {value: n, payloadBatch: i}
    }

    function s(t, e, n, i) {
        var r = n.payloadBatch, a = e.axis, o = a.model, s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model, u = v.makeKey(l), h = t.map[u];
            h || (h = t.map[u] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
            }, t.list.push(h)), h.dataByAxis.push({
                axisDim: a.dim,
                axisIndex: o.componentIndex,
                axisType: o.type,
                axisId: o.id,
                value: i,
                valueLabelOpt: {precision: s.get("label.precision"), formatter: s.get("label.formatter")},
                seriesDataIndices: r.slice()
            })
        }
    }

    function l(t, e, n) {
        var i = n.axesInfo = [];
        x(e, function (e, n) {
            var r = e.axisPointerModel.option, a = t[n];
            a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value
            })
        })
    }

    function u(t, e, n, i) {
        if (f(e) || !t.list.length) return void i({type: "hideTip"});
        var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
        i({
            type: "showTip",
            escapeConnect: !0,
            x: e[0],
            y: e[1],
            tooltipOption: n.tooltipOption,
            position: n.position,
            dataIndexInside: r.dataIndexInside,
            dataIndex: r.dataIndex,
            seriesIndex: r.seriesIndex,
            dataByCoordSys: t.list
        })
    }

    function h(t, e, n) {
        var i = n.getZr(), r = _(i).axisPointerLastHighlights || {}, a = _(i).axisPointerLastHighlights = {};
        x(t, function (t, e) {
            var n = t.axisPointerModel.option;
            "show" === n.status && x(n.seriesDataIndices, function (t) {
                var e = t.seriesIndex + " | " + t.dataIndex;
                a[e] = t
            })
        });
        var o = [], s = [];
        p.each(r, function (t, e) {
            !a[e] && s.push(t)
        }), p.each(a, function (t, e) {
            !r[e] && o.push(t)
        }), s.length && n.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            batch: s
        }), o.length && n.dispatchAction({type: "highlight", escapeConnect: !0, batch: o})
    }

    function c(t, e) {
        for (var n = 0; n < (t || []).length; n++) {
            var i = t[n];
            if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
        }
    }

    function d(t) {
        var e = t.axis.model, n = {}, i = n.axisDim = t.axis.dim;
        return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n
    }

    function f(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
    }

    var p = n(208), g = n(211), v = n(276), m = n(349), x = p.each, y = p.curry, _ = g.makeGetter();
    t.exports = i
}, function (t, e, n) {
    function i(t, e, n) {
        var i = [1 / 0, -1 / 0];
        return h(n, function (t) {
            var n = t.getData();
            n && h(t.coordDimToDataDim(e), function (t) {
                var e = n.getDataExtent(t);
                e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
            })
        }), i[1] < i[0] && (i = [NaN, NaN]), r(t, i), i
    }

    function r(t, e) {
        var n = t.getAxisModel(), i = n.getMin(!0), r = "category" === n.get("type"),
            a = r && (n.get("data") || []).length;
        null != i && "dataMin" !== i && "function" != typeof i ? e[0] = i : r && (e[0] = a > 0 ? 0 : NaN);
        var o = n.getMax(!0);
        return null != o && "dataMax" !== o && "function" != typeof o ? e[1] = o : r && (e[1] = a > 0 ? a - 1 : NaN), n.get("scale", !0) || (e[0] > 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0)), e
    }

    function a(t, e) {
        var n = t.getAxisModel(), i = t._percentWindow, r = t._valueWindow;
        if (i) {
            var a = l.getPixelPrecision(r, [0, 500]);
            a = Math.min(a, 20);
            var o = e || 0 === i[0] && 100 === i[1];
            n.setRange(o ? null : +r[0].toFixed(a), o ? null : +r[1].toFixed(a))
        }
    }

    function o(t) {
        var e = t._minMaxSpan = {}, n = t._dataZoomModel;
        h(["min", "max"], function (i) {
            e[i + "Span"] = n.get(i + "Span");
            var r = n.get(i + "ValueSpan");
            if (null != r && (e[i + "ValueSpan"] = r, null != (r = t.getAxisModel().axis.scale.parse(r)))) {
                var a = t._dataExtent;
                e[i + "Span"] = l.linearMap(a[0] + r, a, [0, 100], !0)
            }
        })
    }

    var s = n(208), l = n(212), u = n(283), h = s.each, c = l.asc, d = function (t, e, n, i) {
        this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this._minMaxSpan, this.ecModel = i, this._dataZoomModel = n
    };
    d.prototype = {
        constructor: d, hostedBy: function (t) {
            return this._dataZoomModel === t
        }, getDataValueWindow: function () {
            return this._valueWindow.slice()
        }, getDataPercentWindow: function () {
            return this._percentWindow.slice()
        }, getTargetSeriesModels: function () {
            var t = [], e = this.ecModel;
            return e.eachSeries(function (n) {
                if (u.isCoordSupported(n.get("coordinateSystem"))) {
                    var i = this._dimName, r = e.queryComponents({
                        mainType: i + "Axis",
                        index: n.get(i + "AxisIndex"),
                        id: n.get(i + "AxisId")
                    })[0];
                    this._axisIndex === (r && r.componentIndex) && t.push(n)
                }
            }, this), t
        }, getAxisModel: function () {
            return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
        }, getOtherAxisModel: function () {
            var t, e, n = this._dimName, i = this.ecModel, r = this.getAxisModel(), a = "x" === n || "y" === n;
            a ? (e = "gridIndex", t = "x" === n ? "y" : "x") : (e = "polarIndex", t = "angle" === n ? "radius" : "angle");
            var o;
            return i.eachComponent(t + "Axis", function (t) {
                (t.get(e) || 0) === (r.get(e) || 0) && (o = t)
            }), o
        }, getMinMaxSpan: function () {
            return s.clone(this._minMaxSpan)
        }, calculateDataWindow: function (t) {
            var e = this._dataExtent, n = this.getAxisModel(), i = n.axis.scale,
                r = this._dataZoomModel.getRangePropMode(), a = [0, 100], o = [t.start, t.end], s = [];
            return h(["startValue", "endValue"], function (e) {
                s.push(null != t[e] ? i.parse(t[e]) : null)
            }), h([0, 1], function (t) {
                var n = s[t], u = o[t];
                "percent" === r[t] ? (null == u && (u = a[t]), n = i.parse(l.linearMap(u, a, e, !0))) : u = l.linearMap(n, e, a, !0), s[t] = n, o[t] = u
            }), {valueWindow: c(s), percentWindow: c(o)}
        }, reset: function (t) {
            if (t === this._dataZoomModel) {
                this._dataExtent = i(this, this._dimName, this.getTargetSeriesModels());
                var e = this.calculateDataWindow(t.option);
                this._valueWindow = e.valueWindow, this._percentWindow = e.percentWindow, o(this), a(this)
            }
        }, restore: function (t) {
            t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, a(this, !0))
        }, filterData: function (t) {
            function e(t) {
                return t >= a[0] && t <= a[1]
            }

            if (t === this._dataZoomModel) {
                var n = this._dimName, i = this.getTargetSeriesModels(), r = t.get("filterMode"), a = this._valueWindow;
                if ("none" !== r) {
                    var o = this.getOtherAxisModel();
                    t.get("$fromToolbox") && o && "category" === o.get("type") && (r = "empty"), h(i, function (t) {
                        var i = t.getData(), o = t.coordDimToDataDim(n);
                        "weakFilter" === r ? i && i.filterSelf(function (t) {
                            for (var e, n, r, s = 0; s < o.length; s++) {
                                var l = i.get(o[s], t), u = !isNaN(l), h = l < a[0], c = l > a[1];
                                if (u && !h && !c) return !0;
                                u && (r = !0), h && (e = !0), c && (n = !0)
                            }
                            return r && e && n
                        }) : i && h(o, function (n) {
                            "empty" === r ? t.setData(i.map(n, function (t) {
                                return e(t) ? t : NaN
                            })) : i.filterSelf(n, e)
                        })
                    })
                }
            }
        }
    };
    var f = d;
    t.exports = f
}, function (t, e, n) {
    var i = n(352), r = i.extend({type: "dataZoom.select"});
    t.exports = r
}, function (t, e, n) {
    var i = n(353), r = i.extend({type: "dataZoom.select"});
    t.exports = r
}, function (t, e, n) {
    var i = n(209), r = n(208), a = n(283);
    i.registerAction("dataZoom", function (t, e) {
        var n = a.createLinkedNodesFinder(r.bind(e.eachComponent, e, "dataZoom"), a.eachAxisDim, function (t, e) {
            return t.get(e.axisIndex)
        }), i = [];
        e.eachComponent({mainType: "dataZoom", query: t}, function (t, e) {
            i.push.apply(i, n(t).nodes)
        }), r.each(i, function (e, n) {
            e.setRawRange({start: t.start, end: t.end, startValue: t.startValue, endValue: t.endValue})
        })
    })
}, function (t, e, n) {
    function i(t, e, n) {
        n.getAxisProxy(t.name, e).reset(n)
    }

    function r(t, e, n) {
        n.getAxisProxy(t.name, e).filterData(n)
    }

    n(209).registerProcessor(function (t, e) {
        t.eachComponent("dataZoom", function (t) {
            t.eachTargetAxis(i), t.eachTargetAxis(r)
        }), t.eachComponent("dataZoom", function (t) {
            var e = t.findRepresentativeAxisProxy(), n = e.getDataPercentWindow(), i = e.getDataValueWindow();
            t.setRawRange({start: n[0], end: n[1], startValue: i[0], endValue: i[1]}, !0)
        })
    })
}, function (t, e, n) {
    n(226).registerSubTypeDefaulter("dataZoom", function () {
        return "slider"
    })
}, function (t, e, n) {
    n(442), n(352), n(353), n(438), n(439), n(441), n(440)
}, function (t, e, n) {
    function i(t) {
        F.call(this), this._zr = t, this.group = new H.Group, this._brushType, this._brushOption, this._panels, this._track = [], this._dragging, this._covers = [], this._creatingCover, this._creatingPanel, this._enableGlobalPan, this._uid = "brushController_" + it++, this._handlers = {}, q(rt, function (t, e) {
            this._handlers[e] = V.bind(t, this)
        }, this)
    }

    function r(t, e) {
        var n = t._zr;
        t._enableGlobalPan || W.take(n, J, t._uid), q(t._handlers, function (t, e) {
            n.on(e, t)
        }), t._brushType = e.brushType, t._brushOption = V.merge(V.clone(nt), e, !0)
    }

    function a(t) {
        var e = t._zr;
        W.release(e, J, t._uid), q(t._handlers, function (t, n) {
            e.off(n, t)
        }), t._brushType = t._brushOption = null
    }

    function o(t, e) {
        var n = at[e.brushType].createCover(t, e);
        return n.__brushOption = e, u(n, e), t.group.add(n), n
    }

    function s(t, e) {
        var n = c(e);
        return n.endCreating && (n.endCreating(t, e), u(e, e.__brushOption)), e
    }

    function l(t, e) {
        var n = e.__brushOption;
        c(e).updateCoverShape(t, e, n.range, n)
    }

    function u(t, e) {
        var n = e.z;
        null == n && (n = $), t.traverse(function (t) {
            t.z = n, t.z2 = n
        })
    }

    function h(t, e) {
        c(e).updateCommon(t, e), l(t, e)
    }

    function c(t) {
        return at[t.__brushOption.brushType]
    }

    function d(t, e, n) {
        var i = t._panels;
        if (!i) return !0;
        var r, a = t._transform;
        return q(i, function (t) {
            t.isTargetByCursor(e, n, a) && (r = t)
        }), r
    }

    function f(t, e) {
        var n = t._panels;
        if (!n) return !0;
        var i = e.__brushOption.panelId;
        return null == i || n[i]
    }

    function p(t) {
        var e = t._covers, n = e.length;
        return q(e, function (e) {
            t.group.remove(e)
        }, t), e.length = 0, !!n
    }

    function g(t, e) {
        var n = Y(t._covers, function (t) {
            var e = t.__brushOption, n = V.clone(e.range);
            return {brushType: e.brushType, panelId: e.panelId, range: n}
        });
        t.trigger("brush", n, {isEnd: !!e.isEnd, removeOnClick: !!e.removeOnClick})
    }

    function v(t) {
        var e = t._track;
        if (!e.length) return !1;
        var n = e[e.length - 1], i = e[0], r = n[0] - i[0], a = n[1] - i[1];
        return U(r * r + a * a, .5) > K
    }

    function m(t) {
        var e = t.length - 1;
        return e < 0 && (e = 0), [t[0], t[e]]
    }

    function x(t, e, n, i) {
        var r = new H.Group;
        return r.add(new H.Rect({
            name: "main",
            style: w(n),
            silent: !0,
            draggable: !0,
            cursor: "move",
            drift: Z(t, e, r, "nswe"),
            ondragend: Z(g, e, {isEnd: !0})
        })), q(i, function (n) {
            r.add(new H.Rect({
                name: n,
                style: {opacity: 0},
                draggable: !0,
                silent: !0,
                invisible: !0,
                drift: Z(t, e, r, n),
                ondragend: Z(g, e, {isEnd: !0})
            }))
        }), r
    }

    function y(t, e, n, i) {
        var r = i.brushStyle.lineWidth || 0, a = X(r, Q), o = n[0][0], s = n[1][0], l = o - r / 2, u = s - r / 2,
            h = n[0][1], c = n[1][1], d = h - a + r / 2, f = c - a + r / 2, p = h - o, g = c - s, v = p + r, m = g + r;
        b(t, e, "main", o, s, p, g), i.transformable && (b(t, e, "w", l, u, a, m), b(t, e, "e", d, u, a, m), b(t, e, "n", l, u, v, a), b(t, e, "s", l, f, v, a), b(t, e, "nw", l, u, a, a), b(t, e, "ne", d, u, a, a), b(t, e, "sw", l, f, a, a), b(t, e, "se", d, f, a, a))
    }

    function _(t, e) {
        var n = e.__brushOption, i = n.transformable, r = e.childAt(0);
        r.useStyle(w(n)), r.attr({
            silent: !i,
            cursor: i ? "move" : "default"
        }), q(["w", "e", "n", "s", "se", "sw", "ne", "nw"], function (n) {
            var r = e.childOfName(n), a = T(t, n);
            r && r.attr({silent: !i, invisible: !i, cursor: i ? et[a] + "-resize" : null})
        })
    }

    function b(t, e, n, i, r, a, o) {
        var s = e.childOfName(n);
        s && s.setShape(k(D(t, e, [[i, r], [i + a, r + o]])))
    }

    function w(t) {
        return V.defaults({strokeNoScale: !0}, t.brushStyle)
    }

    function S(t, e, n, i) {
        var r = [j(t, n), j(e, i)], a = [X(t, n), X(e, i)];
        return [[r[0], a[0]], [r[1], a[1]]]
    }

    function M(t) {
        return H.getTransform(t.group)
    }

    function T(t, e) {
        if (e.length > 1) {
            e = e.split("");
            var n = [T(t, e[0]), T(t, e[1])];
            return ("e" === n[0] || "w" === n[0]) && n.reverse(), n.join("")
        }
        var i = {w: "left", e: "right", n: "top", s: "bottom"}, r = {left: "w", right: "e", top: "n", bottom: "s"},
            n = H.transformDirection(i[e], M(t));
        return r[n]
    }

    function A(t, e, n, i, r, a, o, s) {
        var l = i.__brushOption, u = t(l.range), c = I(n, a, o);
        q(r.split(""), function (t) {
            var e = tt[t];
            u[e[0]][e[1]] += c[e[0]]
        }), l.range = e(S(u[0][0], u[1][0], u[0][1], u[1][1])), h(n, i), g(n, {isEnd: !1})
    }

    function C(t, e, n, i, r) {
        var a = e.__brushOption.range, o = I(t, n, i);
        q(a, function (t) {
            t[0] += o[0], t[1] += o[1]
        }), h(t, e), g(t, {isEnd: !1})
    }

    function I(t, e, n) {
        var i = t.group, r = i.transformCoordToLocal(e, n), a = i.transformCoordToLocal(0, 0);
        return [r[0] - a[0], r[1] - a[1]]
    }

    function D(t, e, n) {
        var i = f(t, e);
        return i && !0 !== i ? i.clipPath(n, t._transform) : V.clone(n)
    }

    function k(t) {
        var e = j(t[0][0], t[1][0]), n = j(t[0][1], t[1][1]);
        return {x: e, y: n, width: X(t[0][0], t[1][0]) - e, height: X(t[0][1], t[1][1]) - n}
    }

    function P(t, e, n) {
        if (t._brushType) {
            var i = t._zr, r = t._covers, a = d(t, e, n);
            if (!t._dragging) for (var o = 0; o < r.length; o++) {
                var s = r[o].__brushOption;
                if (a && (!0 === a || s.panelId === a.panelId) && at[s.brushType].contain(r[o], n[0], n[1])) return
            }
            a && i.setCursorStyle("crosshair")
        }
    }

    function L(t) {
        var e = t.event;
        e.preventDefault && e.preventDefault()
    }

    function O(t, e, n) {
        return t.childOfName("main").contain(e, n)
    }

    function E(t, e, n, i) {
        var r, a = t._creatingCover, u = t._creatingPanel, h = t._brushOption;
        if (t._track.push(n.slice()), v(t) || a) {
            if (u && !a) {
                "single" === h.brushMode && p(t);
                var c = V.clone(h);
                c.brushType = z(c.brushType, u), c.panelId = !0 === u ? null : u.panelId, a = t._creatingCover = o(t, c), t._covers.push(a)
            }
            if (a) {
                var f = at[z(t._brushType, u)];
                a.__brushOption.range = f.getCreatingRange(D(t, a, t._track)), i && (s(t, a), f.updateCommon(t, a)), l(t, a), r = {isEnd: i}
            }
        } else i && "single" === h.brushMode && h.removeOnClick && d(t, e, n) && p(t) && (r = {
            isEnd: i,
            removeOnClick: !0
        });
        return r
    }

    function z(t, e) {
        return "auto" === t ? e.defaultBrushType : t
    }

    function R(t) {
        if (this._dragging) {
            L(t);
            var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY), n = E(this, t, e, !0);
            this._dragging = !1, this._track = [], this._creatingCover = null, n && g(this, n)
        }
    }

    function B(t) {
        return {
            createCover: function (e, n) {
                return x(Z(A, function (e) {
                    var n = [e, [0, 100]];
                    return t && n.reverse(), n
                }, function (e) {
                    return e[t]
                }), e, n, [["w", "e"], ["n", "s"]][t])
            }, getCreatingRange: function (e) {
                var n = m(e);
                return [j(n[0][t], n[1][t]), X(n[0][t], n[1][t])]
            }, updateCoverShape: function (e, n, i, r) {
                var a, o = f(e, n);
                if (!0 !== o && o.getLinearBrushOtherExtent) a = o.getLinearBrushOtherExtent(t, e._transform); else {
                    var s = e._zr;
                    a = [0, [s.getWidth(), s.getHeight()][1 - t]]
                }
                var l = [i, a];
                t && l.reverse(), y(e, n, l, r)
            }, updateCommon: _, contain: O
        }
    }

    var N = n(214), V = (N.__DEV__, n(208)), F = n(230), H = n(210), W = n(448), G = n(253), Z = V.curry, q = V.each,
        Y = V.map, j = Math.min, X = Math.max, U = Math.pow, $ = 1e4, K = 6, Q = 6, J = "globalPan",
        tt = {w: [0, 0], e: [0, 1], n: [1, 0], s: [1, 1]},
        et = {w: "ew", e: "ew", n: "ns", s: "ns", ne: "nesw", sw: "nesw", nw: "nwse", se: "nwse"}, nt = {
            brushStyle: {lineWidth: 2, stroke: "rgba(0,0,0,0.3)", fill: "rgba(0,0,0,0.1)"},
            transformable: !0,
            brushMode: "single",
            removeOnClick: !1
        }, it = 0;
    i.prototype = {
        constructor: i, enableBrush: function (t) {
            return this._brushType && a(this), t.brushType && r(this, t), this
        }, setPanels: function (t) {
            if (t && t.length) {
                var e = this._panels = {};
                V.each(t, function (t) {
                    e[t.panelId] = V.clone(t)
                })
            } else this._panels = null;
            return this
        }, mount: function (t) {
            t = t || {}, this._enableGlobalPan = t.enableGlobalPan;
            var e = this.group;
            return this._zr.add(e), e.attr({
                position: t.position || [0, 0],
                rotation: t.rotation || 0,
                scale: t.scale || [1, 1]
            }), this._transform = e.getLocalTransform(), this
        }, eachCover: function (t, e) {
            q(this._covers, t, e)
        }, updateCovers: function (t) {
            function e(t, e) {
                return (null != t.id ? t.id : a + e) + "-" + t.brushType
            }

            function n(t, n) {
                return e(t.__brushOption, n)
            }

            function i(e, n) {
                var i = t[e];
                if (null != n && l[n] === d) u[e] = l[n]; else {
                    var r = u[e] = null != n ? (l[n].__brushOption = i, l[n]) : s(c, o(c, i));
                    h(c, r)
                }
            }

            function r(t) {
                l[t] !== d && c.group.remove(l[t])
            }

            t = V.map(t, function (t) {
                return V.merge(V.clone(nt), t, !0)
            });
            var a = "\0-brush-index-", l = this._covers, u = this._covers = [], c = this, d = this._creatingCover;
            return new G(l, t, n, e).add(i).update(i).remove(r).execute(), this
        }, unmount: function () {
            return this.enableBrush(!1), p(this), this._zr.remove(this.group), this
        }, dispose: function () {
            this.unmount(), this.off()
        }
    }, V.mixin(i, F);
    var rt = {
        mousedown: function (t) {
            if (this._dragging) R.call(this, t); else if (!t.target || !t.target.draggable) {
                L(t);
                var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
                this._creatingCover = null;
                var n = this._creatingPanel = d(this, t, e);
                n && (this._dragging = !0, this._track = [e.slice()])
            }
        }, mousemove: function (t) {
            var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
            if (P(this, t, e), this._dragging) {
                L(t);
                var n = E(this, t, e, !1);
                n && g(this, n)
            }
        }, mouseup: R
    }, at = {
        lineX: B(0), lineY: B(1), rect: {
            createCover: function (t, e) {
                return x(Z(A, function (t) {
                    return t
                }, function (t) {
                    return t
                }), t, e, ["w", "e", "n", "s", "se", "sw", "ne", "nw"])
            }, getCreatingRange: function (t) {
                var e = m(t);
                return S(e[1][0], e[1][1], e[0][0], e[0][1])
            }, updateCoverShape: function (t, e, n, i) {
                y(t, e, n, i)
            }, updateCommon: _, contain: O
        }, polygon: {
            createCover: function (t, e) {
                var n = new H.Group;
                return n.add(new H.Polyline({name: "main", style: w(e), silent: !0})), n
            }, getCreatingRange: function (t) {
                return t
            }, endCreating: function (t, e) {
                e.remove(e.childAt(0)), e.add(new H.Polygon({
                    name: "main",
                    draggable: !0,
                    drift: Z(C, t, e),
                    ondragend: Z(g, t, {isEnd: !0})
                }))
            }, updateCoverShape: function (t, e, n, i) {
                e.childAt(0).setShape({points: D(t, e, n)})
            }, updateCommon: _, contain: O
        }
    }, ot = i;
    t.exports = ot
}, function (t, e, n) {
    function i(t, e, n) {
        var i = this._targetInfoList = [], r = {}, o = a(e, t);
        g(b, function (t, e) {
            (!n || !n.include || v(n.include, e) >= 0) && t(o, i, r)
        })
    }

    function r(t) {
        return t[0] > t[1] && t.reverse(), t
    }

    function a(t, e) {
        return f.parseFinder(t, e, {includeMainTypes: y})
    }

    function o(t, e, n, i) {
        var a = n.getAxis(["x", "y"][t]), o = r(c.map([0, 1], function (t) {
            return e ? a.coordToData(a.toLocalCoord(i[t])) : a.toGlobalCoord(a.dataToCoord(i[t]))
        })), s = [];
        return s[t] = o, s[1 - t] = [NaN, NaN], {values: o, xyMinMax: s}
    }

    function s(t, e, n, i) {
        return [e[0] - i[t] * n[0], e[1] - i[t] * n[1]]
    }

    function l(t, e) {
        var n = u(t), i = u(e), r = [n[0] / i[0], n[1] / i[1]];
        return isNaN(r[0]) && (r[0] = 1), isNaN(r[1]) && (r[1] = 1), r
    }

    function u(t) {
        return t ? [t[0][1] - t[0][0], t[1][1] - t[1][0]] : [NaN, NaN]
    }

    var h = n(214), c = (h.__DEV__, n(208)), d = n(210), f = n(211), p = n(446), g = c.each, v = c.indexOf, m = c.curry,
        x = ["dataToPoint", "pointToData"],
        y = ["grid", "xAxis", "yAxis", "geo", "graph", "polar", "radiusAxis", "angleAxis", "bmap"], _ = i.prototype;
    _.setOutputRanges = function (t, e) {
        this.matchOutputRanges(t, e, function (t, e, n) {
            if ((t.coordRanges || (t.coordRanges = [])).push(e), !t.coordRange) {
                t.coordRange = e;
                var i = M[t.brushType](0, n, e);
                t.__rangeOffset = {offset: T[t.brushType](i.values, t.range, [1, 1]), xyMinMax: i.xyMinMax}
            }
        })
    }, _.matchOutputRanges = function (t, e, n) {
        g(t, function (t) {
            var i = this.findTargetInfo(t, e);
            i && !0 !== i && c.each(i.coordSyses, function (i) {
                var r = M[t.brushType](1, i, t.range);
                n(t, r.values, i, e)
            })
        }, this)
    }, _.setInputRanges = function (t, e) {
        g(t, function (t) {
            var n = this.findTargetInfo(t, e);
            if (t.range = t.range || [], n && !0 !== n) {
                t.panelId = n.panelId;
                var i = M[t.brushType](0, n.coordSys, t.coordRange), r = t.__rangeOffset;
                t.range = r ? T[t.brushType](i.values, r.offset, l(i.xyMinMax, r.xyMinMax)) : i.values
            }
        }, this)
    }, _.makePanelOpts = function (t, e) {
        return c.map(this._targetInfoList, function (n) {
            var i = n.getPanelRect();
            return {
                panelId: n.panelId,
                defaultBrushType: e && e(n),
                clipPath: p.makeRectPanelClipPath(i),
                isTargetByCursor: p.makeRectIsTargetByCursor(i, t, n.coordSysModel),
                getLinearBrushOtherExtent: p.makeLinearBrushOtherExtent(i)
            }
        })
    }, _.controlSeries = function (t, e, n) {
        var i = this.findTargetInfo(t, n);
        return !0 === i || i && v(i.coordSyses, e.coordinateSystem) >= 0
    }, _.findTargetInfo = function (t, e) {
        for (var n = this._targetInfoList, i = a(e, t), r = 0; r < n.length; r++) {
            var o = n[r], s = t.panelId;
            if (s) {
                if (o.panelId === s) return o
            } else for (var r = 0; r < w.length; r++) if (w[r](i, o)) return o
        }
        return !0
    };
    var b = {
        grid: function (t, e) {
            var n = t.xAxisModels, i = t.yAxisModels, r = t.gridModels, a = c.createHashMap(), o = {}, s = {};
            (n || i || r) && (g(n, function (t) {
                var e = t.axis.grid.model;
                a.set(e.id, e), o[e.id] = !0
            }), g(i, function (t) {
                var e = t.axis.grid.model;
                a.set(e.id, e), s[e.id] = !0
            }), g(r, function (t) {
                a.set(t.id, t), o[t.id] = !0, s[t.id] = !0
            }), a.each(function (t) {
                var r = t.coordinateSystem, a = [];
                g(r.getCartesians(), function (t, e) {
                    (v(n, t.getAxis("x").model) >= 0 || v(i, t.getAxis("y").model) >= 0) && a.push(t)
                }), e.push({
                    panelId: "grid--" + t.id,
                    gridModel: t,
                    coordSysModel: t,
                    coordSys: a[0],
                    coordSyses: a,
                    getPanelRect: S.grid,
                    xAxisDeclared: o[t.id],
                    yAxisDeclared: s[t.id]
                })
            }))
        }, geo: function (t, e) {
            g(t.geoModels, function (t) {
                var n = t.coordinateSystem;
                e.push({
                    panelId: "geo--" + t.id,
                    geoModel: t,
                    coordSysModel: t,
                    coordSys: n,
                    coordSyses: [n],
                    getPanelRect: S.geo
                })
            })
        }
    }, w = [function (t, e) {
        var n = t.xAxisModel, i = t.yAxisModel, r = t.gridModel;
        return !r && n && (r = n.axis.grid.model), !r && i && (r = i.axis.grid.model), r && r === e.gridModel
    }, function (t, e) {
        var n = t.geoModel;
        return n && n === e.geoModel
    }], S = {
        grid: function () {
            return this.coordSys.grid.getRect().clone()
        }, geo: function () {
            var t = this.coordSys, e = t.getBoundingRect().clone();
            return e.applyTransform(d.getTransform(t)), e
        }
    }, M = {
        lineX: m(o, 0), lineY: m(o, 1), rect: function (t, e, n) {
            var i = e[x[t]]([n[0][0], n[1][0]]), a = e[x[t]]([n[0][1], n[1][1]]),
                o = [r([i[0], a[0]]), r([i[1], a[1]])];
            return {values: o, xyMinMax: o}
        }, polygon: function (t, e, n) {
            var i = [[1 / 0, -1 / 0], [1 / 0, -1 / 0]];
            return {
                values: c.map(n, function (n) {
                    var r = e[x[t]](n);
                    return i[0][0] = Math.min(i[0][0], r[0]), i[1][0] = Math.min(i[1][0], r[1]), i[0][1] = Math.max(i[0][1], r[0]), i[1][1] = Math.max(i[1][1], r[1]), r
                }), xyMinMax: i
            }
        }
    }, T = {
        lineX: m(s, 0), lineY: m(s, 1), rect: function (t, e, n) {
            return [[t[0][0] - n[0] * e[0][0], t[0][1] - n[0] * e[0][1]], [t[1][0] - n[1] * e[1][0], t[1][1] - n[1] * e[1][1]]]
        }, polygon: function (t, e, n) {
            return c.map(t, function (t, i) {
                return [t[0] - n[0] * e[i][0], t[1] - n[1] * e[i][1]]
            })
        }
    }, A = i;
    t.exports = A
}, function (t, e, n) {
    function i(t) {
        return t = o(t), function (e, n) {
            return h.clipPointsByRect(e, t)
        }
    }

    function r(t, e) {
        return t = o(t), function (n) {
            var i = null != e ? e : n, r = i ? t.width : t.height, a = i ? t.x : t.y;
            return [a, a + (r || 0)]
        }
    }

    function a(t, e, n) {
        return t = o(t), function (i, r, a) {
            return t.contain(r[0], r[1]) && !u(i, e, n)
        }
    }

    function o(t) {
        return s.create(t)
    }

    var s = n(222), l = n(447), u = l.onIrrelevantElement, h = n(210);
    e.makeRectPanelClipPath = i, e.makeLinearBrushOtherExtent = r, e.makeRectIsTargetByCursor = a
}, function (t, e) {
    function n(t, e, n) {
        var r = e.getComponentByElement(t.topTarget), a = r && r.coordinateSystem;
        return r && r !== n && !i[r.mainType] && a && a.model !== n
    }

    var i = {axisPointer: 1, tooltip: 1, brush: 1};
    e.onIrrelevantElement = n
}, function (t, e, n) {
    function i(t, e, n) {
        o(t)[e] = n
    }

    function r(t, e, n) {
        var i = o(t);
        i[e] === n && (i[e] = null)
    }

    function a(t, e) {
        return !!o(t)[e]
    }

    function o(t) {
        return t[l] || (t[l] = {})
    }

    var s = n(209), l = "\0_ec_interaction_mutex";
    s.registerAction({type: "takeGlobalCursor", event: "globalCursorTaken", update: "update"}, function () {
    }), e.take = i, e.release = r, e.isTaken = a
}, , function (t, e) {
    function n(t, e, n, a, o, s) {
        e[0] = r(e[0], n), e[1] = r(e[1], n), t = t || 0;
        var l = n[1] - n[0];
        null != o && (o = r(o, [0, l])), null != s && (s = Math.max(s, null != o ? o : 0)), "all" === a && (o = s = Math.abs(e[1] - e[0]), a = 0);
        var u = i(e, a);
        e[a] += t;
        var h = o || 0, c = n.slice();
        u.sign < 0 ? c[0] += h : c[1] -= h, e[a] = r(e[a], c);
        var d = i(e, a);
        null != o && (d.sign !== u.sign || d.span < o) && (e[1 - a] = e[a] + u.sign * o);
        var d = i(e, a);
        return null != s && d.span > s && (e[1 - a] = e[a] + d.sign * s), e
    }

    function i(t, e) {
        var n = t[e] - t[1 - e];
        return {span: Math.abs(n), sign: n > 0 ? -1 : n < 0 ? 1 : e ? -1 : 1}
    }

    function r(t, e) {
        return Math.min(e[1], Math.max(e[0], t))
    }

    t.exports = n
}, function (t, e, n) {
    var i = n(209);
    n(452), n(453), i.registerPreprocessor(function (t) {
        t.markPoint = t.markPoint || {}
    })
}, function (t, e, n) {
    var i = n(454), r = i.extend({
        type: "markPoint",
        defaultOption: {
            zlevel: 0,
            z: 5,
            symbol: "pin",
            symbolSize: 50,
            tooltip: {trigger: "item"},
            label: {normal: {show: !0, position: "inside"}, emphasis: {show: !0}},
            itemStyle: {normal: {borderWidth: 2}}
        }
    });
    t.exports = r
}, function (t, e, n) {
    function i(t, e, n) {
        var i = e.coordinateSystem;
        t.each(function (r) {
            var a, o = t.getItemModel(r), l = s.parsePercent(o.get("x"), n.getWidth()),
                u = s.parsePercent(o.get("y"), n.getHeight());
            if (isNaN(l) || isNaN(u)) {
                if (e.getMarkerPosition) a = e.getMarkerPosition(t.getValues(t.dimensions, r)); else if (i) {
                    var h = t.get(i.dimensions[0], r), c = t.get(i.dimensions[1], r);
                    a = i.dataToPoint([h, c])
                }
            } else a = [l, u];
            isNaN(l) || (a[0] = l), isNaN(u) || (a[1] = u), t.setItemLayout(r, a)
        })
    }

    function r(t, e, n) {
        var i;
        i = t ? a.map(t && t.dimensions, function (t) {
            var n = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
            return n.name = t, n
        }) : [{name: "value", type: "float"}];
        var r = new l(i, n), o = a.map(n.get("data"), a.curry(u.dataTransform, e));
        return t && (o = a.filter(o, a.curry(u.dataFilter, t))), r.initData(o, null, t ? u.dimValueGetter : function (t) {
            return t.value
        }), r
    }

    var a = n(208), o = n(345), s = n(212), l = n(241), u = n(456), h = n(455), c = h.extend({
        type: "markPoint", updateLayout: function (t, e, n) {
            e.eachSeries(function (t) {
                var e = t.markPointModel;
                e && (i(e.getData(), t, n), this.markerGroupMap.get(t.id).updateLayout(e))
            }, this)
        }, renderSeries: function (t, e, n, a) {
            var s = t.coordinateSystem, l = t.id, u = t.getData(), h = this.markerGroupMap,
                c = h.get(l) || h.set(l, new o), d = r(s, t, e);
            e.setData(d), i(e.getData(), t, a), d.each(function (t) {
                var n = d.getItemModel(t), i = n.getShallow("symbolSize");
                "function" == typeof i && (i = i(e.getRawValue(t), e.getDataParams(t))), d.setItemVisual(t, {
                    symbolSize: i,
                    color: n.get("itemStyle.normal.color") || u.getVisual("color"),
                    symbol: n.getShallow("symbol")
                })
            }), c.updateData(d), this.group.add(c.group), d.eachItemGraphicEl(function (t) {
                t.traverse(function (t) {
                    t.dataModel = e
                })
            }), c.__keep = !0, c.group.silent = e.get("silent") || t.get("silent")
        }
    });
    t.exports = c
}, function (t, e, n) {
    function i(t) {
        l.defaultEmphasis(t.label, ["show"])
    }

    var r = n(214), a = (r.__DEV__, n(209)), o = n(208), s = n(216), l = n(211), u = n(223), h = u.addCommas,
        c = u.encodeHTML, d = a.extendComponentModel({
            type: "marker", dependencies: ["series", "grid", "polar", "geo"], init: function (t, e, n, i) {
                this.mergeDefaultAndTheme(t, n), this.mergeOption(t, n, i.createdBySelf, !0)
            }, isAnimationEnabled: function () {
                if (s.node) return !1;
                var t = this.__hostSeries;
                return this.getShallow("animation") && t && t.isAnimationEnabled()
            }, mergeOption: function (t, e, n, r) {
                var a = this.constructor, s = this.mainType + "Model";
                n || e.eachSeries(function (t) {
                    var n = t.get(this.mainType), l = t[s];
                    if (!n || !n.data) return void (t[s] = null);
                    l ? l.mergeOption(n, e, !0) : (r && i(n), o.each(n.data, function (t) {
                        t instanceof Array ? (i(t[0]), i(t[1])) : i(t)
                    }), l = new a(n, this, e), o.extend(l, {
                        mainType: this.mainType,
                        seriesIndex: t.seriesIndex,
                        name: t.name,
                        createdBySelf: !0
                    }), l.__hostSeries = t), t[s] = l
                }, this)
            }, formatTooltip: function (t) {
                var e = this.getData(), n = this.getRawValue(t), i = o.isArray(n) ? o.map(n, h).join(", ") : h(n),
                    r = e.getName(t), a = c(this.name);
                return (null != n || r) && (a += "<br />"), r && (a += c(r), null != n && (a += " : ")), null != n && (a += c(i)), a
            }, getData: function () {
                return this._data
            }, setData: function (t) {
                this._data = t
            }
        });
    o.mixin(d, l.dataFormatMixin);
    var f = d;
    t.exports = f
}, function (t, e, n) {
    var i = n(209), r = n(208), a = i.extendComponentView({
        type: "marker", init: function () {
            this.markerGroupMap = r.createHashMap()
        }, render: function (t, e, n) {
            var i = this.markerGroupMap;
            i.each(function (t) {
                t.__keep = !1
            });
            var r = this.type + "Model";
            e.eachSeries(function (t) {
                var i = t[r];
                i && this.renderSeries(t, i, e, n)
            }, this), i.each(function (t) {
                !t.__keep && this.group.remove(t.group)
            }, this)
        }, renderSeries: function () {
        }
    });
    t.exports = a
}, function (t, e, n) {
    function i(t) {
        return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
    }

    function r(t) {
        return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
    }

    function a(t, e, n) {
        var i = -1;
        do {
            i = Math.max(f.getPrecision(t.get(e, n)), i), t = t.stackedOn
        } while (t);
        return i
    }

    function o(t, e, n, i, r, o) {
        var s = [], l = c(e, i, t), u = e.indicesOfNearest(i, l, !0)[0];
        s[r] = e.get(n, u, !0), s[o] = e.get(i, u, !0);
        var h = a(e, i, u);
        return h = Math.min(h, 20), h >= 0 && (s[o] = +s[o].toFixed(h)), s
    }

    function s(t, e) {
        var n = t.getData(), i = t.coordinateSystem;
        if (e && !r(e) && !d.isArray(e.coord) && i) {
            var a = i.dimensions, o = l(e, n, i, t);
            if (e = d.clone(e), e.type && v[e.type] && o.baseAxis && o.valueAxis) {
                var s = p(a, o.baseAxis.dim), u = p(a, o.valueAxis.dim);
                e.coord = v[e.type](n, o.baseDataDim, o.valueDataDim, s, u), e.value = e.coord[u]
            } else {
                for (var h = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis], f = 0; f < 2; f++) if (v[h[f]]) {
                    var g = t.coordDimToDataDim(a[f])[0];
                    h[f] = c(n, g, h[f])
                }
                e.coord = h
            }
        }
        return e
    }

    function l(t, e, n, i) {
        var r = {};
        return null != t.valueIndex || null != t.valueDim ? (r.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, r.valueAxis = n.getAxis(i.dataDimToCoordDim(r.valueDataDim)), r.baseAxis = n.getOtherAxis(r.valueAxis), r.baseDataDim = i.coordDimToDataDim(r.baseAxis.dim)[0]) : (r.baseAxis = i.getBaseAxis(), r.valueAxis = n.getOtherAxis(r.baseAxis), r.baseDataDim = i.coordDimToDataDim(r.baseAxis.dim)[0], r.valueDataDim = i.coordDimToDataDim(r.valueAxis.dim)[0]), r
    }

    function u(t, e) {
        return !(t && t.containData && e.coord && !i(e)) || t.containData(e.coord)
    }

    function h(t, e, n, i) {
        return i < 2 ? t.coord && t.coord[i] : t.value
    }

    function c(t, e, n) {
        if ("average" === n) {
            var i = 0, r = 0;
            return t.each(e, function (t, e) {
                isNaN(t) || (i += t, r++)
            }, !0), i / r
        }
        return t.getDataExtent(e, !0)["max" === n ? 1 : 0]
    }

    var d = n(208), f = n(212), p = d.indexOf, g = d.curry,
        v = {min: g(o, "min"), max: g(o, "max"), average: g(o, "average")};
    e.dataTransform = s, e.getAxisInfo = l, e.dataFilter = u, e.dimValueGetter = h, e.numCalculate = c
}, function (t, e, n) {
    n(458), n(459), n(464), n(462), n(460), n(461), n(463)
}, function (t, e, n) {
    var i = n(209), r = n(208), a = n(240), o = i.extendComponentModel({
        type: "toolbox",
        layoutMode: {type: "box", ignoreSize: !0},
        mergeDefaultAndTheme: function (t) {
            o.superApply(this, "mergeDefaultAndTheme", arguments), r.each(this.option.feature, function (t, e) {
                var n = a.get(e);
                n && r.merge(t, n.defaultOption)
            })
        },
        defaultOption: {
            show: !0,
            z: 6,
            zlevel: 0,
            orient: "horizontal",
            left: "right",
            top: "top",
            backgroundColor: "transparent",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemSize: 15,
            itemGap: 8,
            showTitle: !0,
            iconStyle: {normal: {borderColor: "#666", color: "none"}, emphasis: {borderColor: "#3E98C5"}}
        }
    }), s = o;
    t.exports = s
}, function (t, e, n) {
    function i(t) {
        return 0 === t.indexOf("my")
    }

    var r = n(209), a = n(208), o = n(228), s = n(240), l = n(210), u = n(224), h = n(253), c = n(277),
        d = r.extendComponentView({
            type: "toolbox", render: function (t, e, n, r) {
                function d(a, o) {
                    var l, h = x[a], c = x[o], d = v[h], p = new u(d, t, t.ecModel);
                    if (h && !c) {
                        if (i(h)) l = {model: p, onclick: p.option.onclick, featureName: h}; else {
                            var g = s.get(h);
                            if (!g) return;
                            l = new g(p, e, n)
                        }
                        m[h] = l
                    } else {
                        if (!(l = m[c])) return;
                        l.model = p, l.ecModel = e, l.api = n
                    }
                    return !h && c ? void (l.dispose && l.dispose(e, n)) : !p.get("show") || l.unusable ? void (l.remove && l.remove(e, n)) : (f(p, l, h), p.setIconStatus = function (t, e) {
                        var n = this.option, i = this.iconPaths;
                        n.iconStatus = n.iconStatus || {}, n.iconStatus[t] = e, i[t] && i[t].trigger(e)
                    }, void (l.render && l.render(p, e, n, r)))
                }

                function f(i, r, o) {
                    var s = i.getModel("iconStyle"), u = r.getIcons ? r.getIcons() : i.get("icon"),
                        h = i.get("title") || {};
                    if ("string" == typeof u) {
                        var c = u, d = h;
                        u = {}, h = {}, u[o] = c, h[o] = d
                    }
                    var f = i.iconPaths = {};
                    a.each(u, function (o, u) {
                        var c = l.createIcon(o, {}, {x: -g / 2, y: -g / 2, width: g, height: g});
                        c.setStyle(s.getModel("normal").getItemStyle()), c.hoverStyle = s.getModel("emphasis").getItemStyle(), l.setHoverStyle(c), t.get("showTitle") && (c.__title = h[u], c.on("mouseover", function () {
                            var t = s.getModel("emphasis").getItemStyle();
                            c.setStyle({
                                text: h[u],
                                textPosition: t.textPosition || "bottom",
                                textFill: t.fill || t.stroke || "#000",
                                textAlign: t.textAlign || "center"
                            })
                        }).on("mouseout", function () {
                            c.setStyle({textFill: null})
                        })), c.trigger(i.get("iconStatus." + u) || "normal"), p.add(c), c.on("click", a.bind(r.onclick, r, e, n, u)), f[u] = c
                    })
                }

                var p = this.group;
                if (p.removeAll(), t.get("show")) {
                    var g = +t.get("itemSize"), v = t.get("feature") || {}, m = this._features || (this._features = {}),
                        x = [];
                    a.each(v, function (t, e) {
                        x.push(e)
                    }), new h(this._featureNames || [], x).add(d).update(d).remove(a.curry(d, null)).execute(), this._featureNames = x, c.layout(p, t, n), p.add(c.makeBackground(p.getBoundingRect(), t)), p.eachChild(function (t) {
                        var e = t.__title, i = t.hoverStyle;
                        if (i && e) {
                            var r = o.getBoundingRect(e, o.makeFont(i)), a = t.position[0] + p.position[0],
                                s = t.position[1] + p.position[1] + g, l = !1;
                            s + r.height > n.getHeight() && (i.textPosition = "top", l = !0);
                            var u = l ? -5 - r.height : g + 8;
                            a + r.width / 2 > n.getWidth() ? (i.textPosition = ["100%", u], i.textAlign = "right") : a - r.width / 2 < 0 && (i.textPosition = [0, u], i.textAlign = "left")
                        }
                    })
                }
            }, updateView: function (t, e, n, i) {
                a.each(this._features, function (t) {
                    t.updateView && t.updateView(t.model, e, n, i)
                })
            }, updateLayout: function (t, e, n, i) {
                a.each(this._features, function (t) {
                    t.updateLayout && t.updateLayout(t.model, e, n, i)
                })
            }, remove: function (t, e) {
                a.each(this._features, function (n) {
                    n.remove && n.remove(t, e)
                }), this.group.removeAll()
            }, dispose: function (t, e) {
                a.each(this._features, function (n) {
                    n.dispose && n.dispose(t, e)
                })
            }
        });
    t.exports = d
}, function (t, e, n) {
    function i(t) {
        var e = {}, n = [], i = [];
        return t.eachRawSeries(function (t) {
            var r = t.coordinateSystem;
            if (!r || "cartesian2d" !== r.type && "polar" !== r.type) n.push(t); else {
                var a = r.getBaseAxis();
                if ("category" === a.type) {
                    var o = a.dim + "_" + a.index;
                    e[o] || (e[o] = {categoryAxis: a, valueAxis: r.getOtherAxis(a), series: []}, i.push({
                        axisDim: a.dim,
                        axisIndex: a.index
                    })), e[o].series.push(t)
                } else n.push(t)
            }
        }), {seriesGroupByCategoryAxis: e, other: n, meta: i}
    }

    function r(t) {
        var e = [];
        return g.each(t, function (t, n) {
            var i = t.categoryAxis, r = t.valueAxis, a = r.dim, o = [" "].concat(g.map(t.series, function (t) {
                return t.name
            })), s = [i.model.getCategories()];
            g.each(t.series, function (t) {
                s.push(t.getRawData().mapArray(a, function (t) {
                    return t
                }))
            });
            for (var l = [o.join(b)], u = 0; u < s[0].length; u++) {
                for (var h = [], c = 0; c < s.length; c++) h.push(s[c][u]);
                l.push(h.join(b))
            }
            e.push(l.join("\n"))
        }), e.join("\n\n" + _ + "\n\n")
    }

    function a(t) {
        return g.map(t, function (t) {
            var e = t.getRawData(), n = [t.name], i = [];
            return e.each(e.dimensions, function () {
                for (var t = arguments.length, r = arguments[t - 1], a = e.getName(r), o = 0; o < t - 1; o++) i[o] = arguments[o];
                n.push((a ? a + b : "") + i.join(b))
            }), n.join("\n")
        }).join("\n\n" + _ + "\n\n")
    }

    function o(t) {
        var e = i(t);
        return {
            value: g.filter([r(e.seriesGroupByCategoryAxis), a(e.other)], function (t) {
                return t.replace(/[\n\t\s]/g, "")
            }).join("\n\n" + _ + "\n\n"), meta: e.meta
        }
    }

    function s(t) {
        return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }

    function l(t) {
        if (t.slice(0, t.indexOf("\n")).indexOf(b) >= 0) return !0
    }

    function u(t) {
        for (var e = t.split(/\n+/g), n = s(e.shift()).split(w), i = [], r = g.map(n, function (t) {
            return {name: t, data: []}
        }), a = 0; a < e.length; a++) {
            var o = s(e[a]).split(w);
            i.push(o.shift());
            for (var l = 0; l < o.length; l++) r[l] && (r[l].data[a] = o[l])
        }
        return {series: r, categories: i}
    }

    function h(t) {
        for (var e = t.split(/\n+/g), n = s(e.shift()), i = [], r = 0; r < e.length; r++) {
            var a, o = s(e[r]).split(w), l = "", u = !1;
            isNaN(o[0]) ? (u = !0, l = o[0], o = o.slice(1), i[r] = {
                name: l,
                value: []
            }, a = i[r].value) : a = i[r] = [];
            for (var h = 0; h < o.length; h++) a.push(+o[h]);
            1 === a.length && (u ? i[r].value = a[0] : i[r] = a[0])
        }
        return {name: n, data: i}
    }

    function c(t, e) {
        var n = t.split(new RegExp("\n*" + _ + "\n*", "g")), i = {series: []};
        return g.each(n, function (t, n) {
            if (l(t)) {
                var r = u(t), a = e[n], o = a.axisDim + "Axis";
                a && (i[o] = i[o] || [], i[o][a.axisIndex] = {data: r.categories}, i.series = i.series.concat(r.series))
            } else {
                var r = h(t);
                i.series.push(r)
            }
        }), i
    }

    function d(t) {
        this._dom = null, this.model = t
    }

    function f(t, e) {
        return g.map(t, function (t, n) {
            var i = e && e[n];
            return g.isObject(i) && !g.isArray(i) ? (g.isObject(t) && !g.isArray(t) && (t = t.value), g.defaults({value: t}, i)) : t
        })
    }

    var p = n(209), g = n(208), v = n(233), m = n(254), x = n(240), y = m.toolbox.dataView, _ = new Array(60).join("-"),
        b = "\t", w = new RegExp("[" + b + "]+", "g");
    d.defaultOption = {
        show: !0,
        readOnly: !1,
        optionToContent: null,
        contentToOption: null,
        icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
        title: g.clone(y.title),
        lang: g.clone(y.lang),
        backgroundColor: "#fff",
        textColor: "#000",
        textareaColor: "#fff",
        textareaBorderColor: "#333",
        buttonColor: "#c23531",
        buttonTextColor: "#fff"
    }, d.prototype.onclick = function (t, e) {
        function n() {
            i.removeChild(a), M._dom = null
        }

        var i = e.getDom(), r = this.model;
        this._dom && i.removeChild(this._dom);
        var a = document.createElement("div");
        a.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", a.style.backgroundColor = r.get("backgroundColor") || "#fff";
        var s = document.createElement("h4"), l = r.get("lang") || [];
        s.innerHTML = l[0] || r.get("title"), s.style.cssText = "margin: 10px 20px;", s.style.color = r.get("textColor");
        var u = document.createElement("div"), h = document.createElement("textarea");
        u.style.cssText = "display:block;width:100%;overflow:auto;";
        var d = r.get("optionToContent"), f = r.get("contentToOption"), p = o(t);
        if ("function" == typeof d) {
            var m = d(e.getOption());
            "string" == typeof m ? u.innerHTML = m : g.isDom(m) && u.appendChild(m)
        } else u.appendChild(h), h.readOnly = r.get("readOnly"), h.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;", h.style.color = r.get("textColor"), h.style.borderColor = r.get("textareaBorderColor"), h.style.backgroundColor = r.get("textareaColor"), h.value = p.value;
        var x = p.meta, y = document.createElement("div");
        y.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
        var _ = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
            w = document.createElement("div"), S = document.createElement("div");
        _ += ";background-color:" + r.get("buttonColor"), _ += ";color:" + r.get("buttonTextColor");
        var M = this;
        v.addEventListener(w, "click", n), v.addEventListener(S, "click", function () {
            var t;
            try {
                t = "function" == typeof f ? f(u, e.getOption()) : c(h.value, x)
            } catch (t) {
                throw n(), new Error("Data view format error " + t)
            }
            t && e.dispatchAction({type: "changeDataView", newOption: t}), n()
        }), w.innerHTML = l[1], S.innerHTML = l[2], S.style.cssText = _, w.style.cssText = _, !r.get("readOnly") && y.appendChild(S), y.appendChild(w), v.addEventListener(h, "keydown", function (t) {
            if (9 === (t.keyCode || t.which)) {
                var e = this.value, n = this.selectionStart, i = this.selectionEnd;
                this.value = e.substring(0, n) + b + e.substring(i), this.selectionStart = this.selectionEnd = n + 1, v.stop(t)
            }
        }), a.appendChild(s), a.appendChild(u), a.appendChild(y), u.style.height = i.clientHeight - 80 + "px", i.appendChild(a), this._dom = a
    }, d.prototype.remove = function (t, e) {
        this._dom && e.getDom().removeChild(this._dom)
    }, d.prototype.dispose = function (t, e) {
        this.remove(t, e)
    }, x.register("dataView", d), p.registerAction({
        type: "changeDataView",
        event: "dataViewChanged",
        update: "prepareAndUpdate"
    }, function (t, e) {
        var n = [];
        g.each(t.newOption.series, function (t) {
            var i = e.getSeriesByName(t.name)[0];
            if (i) {
                var r = i.get("data");
                n.push({name: t.name, data: f(t.data, r)})
            } else n.push(g.extend({type: "scatter"}, t))
        }), e.mergeOption(g.defaults({series: n}, t.newOption))
    });
    var S = d;
    t.exports = S
}, function (t, e, n) {
    function i(t, e, n) {
        (this._brushController = new u(n.getZr())).on("brush", l.bind(this._onBrush, this)).mount(), this._isZoomActive
    }

    function r(t) {
        var e = {};
        return l.each(["xAxisIndex", "yAxisIndex"], function (n) {
            e[n] = t[n], null == e[n] && (e[n] = "all"), (!1 === e[n] || "none" === e[n]) && (e[n] = [])
        }), e
    }

    function a(t, e) {
        t.setIconStatus("back", c.count(e) > 1 ? "emphasis" : "normal")
    }

    function o(t, e, n, i, a) {
        var o = n._isZoomActive;
        i && "takeGlobalCursor" === i.type && (o = "dataZoomSelect" === i.key && i.dataZoomSelectActive), n._isZoomActive = o, t.setIconStatus("zoom", o ? "emphasis" : "normal");
        var s = new h(r(t.option), e, {include: ["grid"]});
        n._brushController.setPanels(s.makePanelOpts(a, function (t) {
            return t.xAxisDeclared && !t.yAxisDeclared ? "lineX" : !t.xAxisDeclared && t.yAxisDeclared ? "lineY" : "rect"
        })).enableBrush(!!o && {brushType: "auto", brushStyle: {lineWidth: 0, fill: "rgba(0,0,0,0.2)"}})
    }

    var s = n(209), l = n(208), u = n(444), h = n(445), c = n(354), d = n(450), f = n(254), p = n(240);
    n(443);
    var g = f.toolbox.dataZoom, v = l.each, m = "\0_ec_\0toolbox-dataZoom_";
    i.defaultOption = {
        show: !0,
        icon: {
            zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
            back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
        },
        title: l.clone(g.title)
    };
    var x = i.prototype;
    x.render = function (t, e, n, i) {
        this.model = t, this.ecModel = e, this.api = n, o(t, e, this, i, n), a(t, e)
    }, x.onclick = function (t, e, n) {
        y[n].call(this)
    }, x.remove = function (t, e) {
        this._brushController.unmount()
    }, x.dispose = function (t, e) {
        this._brushController.dispose()
    };
    var y = {
        zoom: function () {
            var t = !this._isZoomActive;
            this.api.dispatchAction({type: "takeGlobalCursor", key: "dataZoomSelect", dataZoomSelectActive: t})
        }, back: function () {
            this._dispatchZoomAction(c.pop(this.ecModel))
        }
    };
    x._onBrush = function (t, e) {
        function n(t, e, n) {
            var r = e.getAxis(t), s = r.model, l = i(t, s, o), u = l.findRepresentativeAxisProxy(s).getMinMaxSpan();
            null == u.minValueSpan && null == u.maxValueSpan || (n = d(0, n.slice(), r.scale.getExtent(), 0, u.minValueSpan, u.maxValueSpan)), l && (a[l.id] = {
                dataZoomId: l.id,
                startValue: n[0],
                endValue: n[1]
            })
        }

        function i(t, e, n) {
            var i;
            return n.eachComponent({mainType: "dataZoom", subType: "select"}, function (n) {
                n.getAxisModel(t, e.componentIndex) && (i = n)
            }), i
        }

        if (e.isEnd && t.length) {
            var a = {}, o = this.ecModel;
            this._brushController.updateCovers([]);
            new h(r(this.model.option), o, {include: ["grid"]}).matchOutputRanges(t, o, function (t, e, i) {
                if ("cartesian2d" === i.type) {
                    var r = t.brushType;
                    "rect" === r ? (n("x", i, e[0]), n("y", i, e[1])) : n({lineX: "x", lineY: "y"}[r], i, e)
                }
            }), c.push(o, a), this._dispatchZoomAction(a)
        }
    }, x._dispatchZoomAction = function (t) {
        var e = [];
        v(t, function (t, n) {
            e.push(l.clone(t))
        }), e.length && this.api.dispatchAction({type: "dataZoom", from: this.uid, batch: e})
    }, p.register("dataZoom", i), s.registerPreprocessor(function (t) {
        function e(t, e) {
            if (e) {
                var r = t + "Index", a = e[r];
                null == a || "all" == a || l.isArray(a) || (a = !1 === a || "none" === a ? [] : [a]), n(t, function (e, n) {
                    if (null == a || "all" == a || -1 !== l.indexOf(a, n)) {
                        var o = {type: "select", $fromToolbox: !0, id: m + t + n};
                        o[r] = n, i.push(o)
                    }
                })
            }
        }

        function n(e, n) {
            var i = t[e];
            l.isArray(i) || (i = i ? [i] : []), v(i, n)
        }

        if (t) {
            var i = t.dataZoom || (t.dataZoom = []);
            l.isArray(i) || (t.dataZoom = i = [i]);
            var r = t.toolbox;
            if (r && (l.isArray(r) && (r = r[0]), r && r.feature)) {
                var a = r.feature.dataZoom;
                e("xAxis", a), e("yAxis", a)
            }
        }
    });
    var _ = i;
    t.exports = _
}, function (t, e, n) {
    function i(t) {
        this.model = t
    }

    var r = n(209), a = n(208), o = n(254), s = n(240), l = o.toolbox.magicType;
    i.defaultOption = {
        show: !0,
        type: [],
        icon: {
            line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
            bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
            stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
            tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
        },
        title: a.clone(l.title),
        option: {},
        seriesIndex: {}
    };
    var u = i.prototype;
    u.getIcons = function () {
        var t = this.model, e = t.get("icon"), n = {};
        return a.each(t.get("type"), function (t) {
            e[t] && (n[t] = e[t])
        }), n
    };
    var h = {
        line: function (t, e, n, i) {
            if ("bar" === t) return a.merge({
                id: e,
                type: "line",
                data: n.get("data"),
                stack: n.get("stack"),
                markPoint: n.get("markPoint"),
                markLine: n.get("markLine")
            }, i.get("option.line") || {}, !0)
        }, bar: function (t, e, n, i) {
            if ("line" === t) return a.merge({
                id: e,
                type: "bar",
                data: n.get("data"),
                stack: n.get("stack"),
                markPoint: n.get("markPoint"),
                markLine: n.get("markLine")
            }, i.get("option.bar") || {}, !0)
        }, stack: function (t, e, n, i) {
            if ("line" === t || "bar" === t) return a.merge({
                id: e,
                stack: "__ec_magicType_stack__"
            }, i.get("option.stack") || {}, !0)
        }, tiled: function (t, e, n, i) {
            if ("line" === t || "bar" === t) return a.merge({id: e, stack: ""}, i.get("option.tiled") || {}, !0)
        }
    }, c = [["line", "bar"], ["stack", "tiled"]];
    u.onclick = function (t, e, n) {
        var i = this.model, r = i.get("seriesIndex." + n);
        if (h[n]) {
            var o = {series: []}, s = function (e) {
                var r = e.subType, s = e.id, l = h[n](r, s, e, i);
                l && (a.defaults(l, e.option), o.series.push(l));
                var u = e.coordinateSystem;
                if (u && "cartesian2d" === u.type && ("line" === n || "bar" === n)) {
                    var c = u.getAxesByScale("ordinal")[0];
                    if (c) {
                        var d = c.dim, f = d + "Axis", p = t.queryComponents({
                            mainType: f,
                            index: e.get(name + "Index"),
                            id: e.get(name + "Id")
                        })[0], g = p.componentIndex;
                        o[f] = o[f] || [];
                        for (var v = 0; v <= g; v++) o[f][g] = o[f][g] || {};
                        o[f][g].boundaryGap = "bar" === n
                    }
                }
            };
            a.each(c, function (t) {
                a.indexOf(t, n) >= 0 && a.each(t, function (t) {
                    i.setIconStatus(t, "normal")
                })
            }), i.setIconStatus(n, "emphasis"), t.eachComponent({
                mainType: "series",
                query: null == r ? null : {seriesIndex: r}
            }, s), e.dispatchAction({type: "changeMagicType", currentType: n, newOption: o})
        }
    }, r.registerAction({
        type: "changeMagicType",
        event: "magicTypeChanged",
        update: "prepareAndUpdate"
    }, function (t, e) {
        e.mergeOption(t.newOption)
    }), s.register("magicType", i);
    var d = i;
    t.exports = d
}, function (t, e, n) {
    function i(t) {
        this.model = t
    }

    var r = n(209), a = n(354), o = n(254), s = n(240), l = o.toolbox.restore;
    i.defaultOption = {
        show: !0,
        icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
        title: l.title
    }, i.prototype.onclick = function (t, e, n) {
        a.clear(t), e.dispatchAction({type: "restore", from: this.uid})
    }, s.register("restore", i), r.registerAction({
        type: "restore",
        event: "restore",
        update: "prepareAndUpdate"
    }, function (t, e) {
        e.resetOption("recreate")
    });
    var u = i;
    t.exports = u
}, function (t, e, n) {
    function i(t) {
        this.model = t
    }

    var r = n(216), a = n(254), o = n(240), s = a.toolbox.saveAsImage;
    i.defaultOption = {
        show: !0,
        icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
        title: s.title,
        type: "png",
        name: "",
        excludeComponents: ["toolbox"],
        pixelRatio: 1,
        lang: s.lang.slice()
    }, i.prototype.unusable = !r.canvasSupported, i.prototype.onclick = function (t, e) {
        var n = this.model, i = n.get("name") || t.get("title.0.text") || "echarts", a = document.createElement("a"),
            o = n.get("type", !0) || "png";
        a.download = i + "." + o, a.target = "_blank";
        var s = e.getConnectedDataURL({
            type: o,
            backgroundColor: n.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
            excludeComponents: n.get("excludeComponents"),
            pixelRatio: n.get("pixelRatio")
        });
        if (a.href = s, "function" != typeof MouseEvent || r.browser.ie || r.browser.edge) if (window.navigator.msSaveOrOpenBlob) {
            for (var l = atob(s.split(",")[1]), u = l.length, h = new Uint8Array(u); u--;) h[u] = l.charCodeAt(u);
            var c = new Blob([h]);
            window.navigator.msSaveOrOpenBlob(c, i + "." + o)
        } else {
            var d = n.get("lang"),
                f = '<body style="margin:0;"><img src="' + s + '" style="max-width:100%;" title="' + (d && d[0] || "") + '" /></body>',
                p = window.open();
            p.document.write(f)
        } else {
            var g = new MouseEvent("click", {view: window, bubbles: !0, cancelable: !1});
            a.dispatchEvent(g)
        }
    }, o.register("saveAsImage", i);
    var l = i;
    t.exports = l
}, function (t, e, n) {
    var i = n(209);
    n(431), n(467), n(468), i.registerAction({
        type: "showTip",
        event: "showTip",
        update: "tooltip:manuallyShowTip"
    }, function () {
    }), i.registerAction({type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip"}, function () {
    })
}, function (t, e, n) {
    function i(t) {
        var e = "left " + t + "s cubic-bezier(0.23, 1, 0.32, 1),top " + t + "s cubic-bezier(0.23, 1, 0.32, 1)";
        return s.map(p, function (t) {
            return t + "transition:" + e
        }).join(";")
    }

    function r(t) {
        var e = [], n = t.get("fontSize"), i = t.getTextColor();
        return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), d(["decoration", "align"], function (n) {
            var i = t.get(n);
            i && e.push("text-" + n + ":" + i)
        }), e.join(";")
    }

    function a(t) {
        var e = [], n = t.get("transitionDuration"), a = t.get("backgroundColor"), o = t.getModel("textStyle"),
            s = t.get("padding");
        return n && e.push(i(n)), a && (h.canvasSupported ? e.push("background-Color:" + a) : (e.push("background-Color:#" + l.toHex(a)), e.push("filter:alpha(opacity=70)"))), d(["width", "color", "radius"], function (n) {
            var i = "border-" + n, r = f(i), a = t.get(r);
            null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"))
        }), e.push(r(o)), null != s && e.push("padding:" + c.normalizeCssArray(s).join("px ") + "px"), e.join(";") + ";"
    }

    function o(t, e) {
        var n = document.createElement("div"), i = this._zr = e.getZr();
        this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;
        var r = this;
        n.onmouseenter = function () {
            r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
        }, n.onmousemove = function (e) {
            if (e = e || window.event, !r._enterable) {
                var n = i.handler;
                u.normalizeEvent(t, e, !0), n.dispatch("mousemove", e)
            }
        }, n.onmouseleave = function () {
            r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
        }
    }

    var s = n(208), l = n(234), u = n(233), h = n(216), c = n(223), d = s.each, f = c.toCamelCase,
        p = ["", "-webkit-", "-moz-", "-o-"];
    o.prototype = {
        constructor: o, _enterable: !0, update: function () {
            var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), n = t.style;
            "absolute" !== n.position && "absolute" !== e.position && (n.position = "relative")
        }, show: function (t) {
            clearTimeout(this._hideTimeout);
            var e = this.el;
            e.style.cssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + a(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", this._show = !0
        }, setContent: function (t) {
            this.el.innerHTML = null == t ? "" : t
        }, setEnterable: function (t) {
            this._enterable = t
        }, getSize: function () {
            var t = this.el;
            return [t.clientWidth, t.clientHeight]
        }, moveTo: function (t, e) {
            var n, i = this._zr;
            i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n.offsetTop);
            var r = this.el.style;
            r.left = t + "px", r.top = e + "px", this._x = t, this._y = e
        }, hide: function () {
            this.el.style.display = "none", this._show = !1
        }, hideLater: function (t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(s.bind(this.hide, this), t)) : this.hide())
        }, isShow: function () {
            return this._show
        }
    };
    var g = o;
    t.exports = g
}, function (t, e, n) {
    var i = n(209), r = i.extendComponentModel({
        type: "tooltip",
        dependencies: ["axisPointer"],
        defaultOption: {
            zlevel: 0,
            z: 8,
            show: !0,
            showContent: !0,
            trigger: "item",
            triggerOn: "mousemove|click",
            alwaysShowContent: !1,
            displayMode: "single",
            confine: !1,
            showDelay: 0,
            hideDelay: 100,
            transitionDuration: .4,
            enterable: !1,
            backgroundColor: "rgba(50,50,50,0.7)",
            borderColor: "#333",
            borderRadius: 4,
            borderWidth: 0,
            padding: 5,
            extraCssText: "",
            axisPointer: {
                type: "line",
                axis: "auto",
                animation: "auto",
                animationDurationUpdate: 200,
                animationEasingUpdate: "exponentialOut",
                crossStyle: {color: "#999", width: 1, type: "dashed", textStyle: {}}
            },
            textStyle: {color: "#fff", fontSize: 14}
        }
    });
    t.exports = r
}, function (t, e, n) {
    function i(t) {
        for (var e = t.pop(); t.length;) {
            var n = t.pop();
            n && (n instanceof y && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {formatter: n}), e = new y(n, e, e.ecModel))
        }
        return e
    }

    function r(t, e) {
        return t.dispatchAction || c.bind(e.dispatchAction, e)
    }

    function a(t, e, n, i, r, a, o) {
        var l = s(n), u = l.width, h = l.height;
        return null != a && (t + u + a > i ? t -= u + a : t += a), null != o && (e + h + o > r ? e -= h + o : e += o), [t, e]
    }

    function o(t, e, n, i, r) {
        var a = s(n), o = a.width, l = a.height;
        return t = Math.min(t + o, i) - o, e = Math.min(e + l, r) - l, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
    }

    function s(t) {
        var e = t.clientWidth, n = t.clientHeight;
        if (document.defaultView && document.defaultView.getComputedStyle) {
            var i = document.defaultView.getComputedStyle(t);
            i && (e += parseInt(i.paddingLeft, 10) + parseInt(i.paddingRight, 10) + parseInt(i.borderLeftWidth, 10) + parseInt(i.borderRightWidth, 10), n += parseInt(i.paddingTop, 10) + parseInt(i.paddingBottom, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10))
        }
        return {width: e, height: n}
    }

    function l(t, e, n) {
        var i = n[0], r = n[1], a = 0, o = 0, s = e.width, l = e.height;
        switch (t) {
            case"inside":
                a = e.x + s / 2 - i / 2, o = e.y + l / 2 - r / 2;
                break;
            case"top":
                a = e.x + s / 2 - i / 2, o = e.y - r - 5;
                break;
            case"bottom":
                a = e.x + s / 2 - i / 2, o = e.y + l + 5;
                break;
            case"left":
                a = e.x - i - 5, o = e.y + l / 2 - r / 2;
                break;
            case"right":
                a = e.x + s + 5, o = e.y + l / 2 - r / 2
        }
        return [a, o]
    }

    function u(t) {
        return "center" === t || "middle" === t
    }

    var h = n(209), c = n(208), d = n(216), f = n(466), p = n(223), g = n(212), v = n(210), m = n(349), x = n(227),
        y = n(224), _ = n(350), b = n(232), w = n(351), S = c.bind, M = c.each, T = g.parsePercent,
        A = new v.Rect({shape: {x: -1, y: -1, width: 2, height: 2}}), C = h.extendComponentView({
            type: "tooltip", init: function (t, e) {
                if (!d.node) {
                    var n = new f(e.getDom(), e);
                    this._tooltipContent = n
                }
            }, render: function (t, e, n) {
                if (!d.node) {
                    this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
                    var i = this._tooltipContent;
                    i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
                }
            }, _initGlobalListener: function () {
                var t = this._tooltipModel, e = t.get("triggerOn");
                _.register("itemTooltip", this._api, S(function (t, n, i) {
                    "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i))
                }, this))
            }, _keepShow: function () {
                var t = this._tooltipModel, e = this._ecModel, n = this._api;
                if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                    var i = this;
                    clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                        i.manuallyShowTip(t, e, n, {x: i._lastX, y: i._lastY})
                    })
                }
            }, manuallyShowTip: function (t, e, n, i) {
                if (i.from !== this.uid && !d.node) {
                    var a = r(i, n);
                    this._ticket = "";
                    var o = i.dataByCoordSys;
                    if (i.tooltip && null != i.x && null != i.y) {
                        var s = A;
                        s.position = [i.x, i.y], s.update(), s.tooltip = i.tooltip, this._tryShow({
                            offsetX: i.x,
                            offsetY: i.y,
                            target: s
                        }, a)
                    } else if (o) this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        position: i.position,
                        event: {},
                        dataByCoordSys: i.dataByCoordSys,
                        tooltipOption: i.tooltipOption
                    }, a); else if (null != i.seriesIndex) {
                        if (this._manuallyAxisShowTip(t, e, n, i)) return;
                        var l = m(i, e), u = l.point[0], h = l.point[1];
                        null != u && null != h && this._tryShow({
                            offsetX: u,
                            offsetY: h,
                            position: i.position,
                            target: l.el,
                            event: {}
                        }, a)
                    } else null != i.x && null != i.y && (n.dispatchAction({
                        type: "updateAxisPointer",
                        x: i.x,
                        y: i.y
                    }), this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        position: i.position,
                        target: n.getZr().findHover(i.x, i.y).target,
                        event: {}
                    }, a))
                }
            }, manuallyHideTip: function (t, e, n, i) {
                var a = this._tooltipContent;
                this._alwaysShowContent || a.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(r(i, n))
            }, _manuallyAxisShowTip: function (t, e, n, r) {
                var a = r.seriesIndex, o = r.dataIndex, s = e.getComponent("axisPointer").coordSysAxesInfo;
                if (null != a && null != o && null != s) {
                    var l = e.getSeriesByIndex(a);
                    if (l) {
                        var u = l.getData(), t = i([u.getItemModel(o), l, (l.coordinateSystem || {}).model, t]);
                        if ("axis" === t.get("trigger")) return n.dispatchAction({
                            type: "updateAxisPointer",
                            seriesIndex: a,
                            dataIndex: o,
                            position: r.position
                        }), !0
                    }
                }
            }, _tryShow: function (t, e) {
                var n = t.target;
                if (this._tooltipModel) {
                    this._lastX = t.offsetX, this._lastY = t.offsetY;
                    var i = t.dataByCoordSys;
                    i && i.length ? this._showAxisTooltip(i, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e))
                }
            }, _showOrMove: function (t, e) {
                var n = t.get("showDelay");
                e = c.bind(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
            }, _showAxisTooltip: function (t, e) {
                var n = this._ecModel, r = this._tooltipModel, a = [e.offsetX, e.offsetY], o = [], s = [],
                    l = i([e.tooltipOption, r]);
                M(t, function (t) {
                    M(t.dataByAxis, function (t) {
                        var e = n.getComponent(t.axisDim + "Axis", t.axisIndex), i = t.value, r = [];
                        if (e && null != i) {
                            var a = w.getValueLabel(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
                            c.each(t.seriesDataIndices, function (o) {
                                var l = n.getSeriesByIndex(o.seriesIndex), u = o.dataIndexInside,
                                    h = l && l.getDataParams(u);
                                h.axisDim = t.axisDim, h.axisIndex = t.axisIndex, h.axisType = t.axisType, h.axisId = t.axisId, h.axisValue = b.getAxisRawValue(e.axis, i), h.axisValueLabel = a, h && (s.push(h), r.push(l.formatTooltip(u, !0)))
                            });
                            var l = a;
                            o.push((l ? p.encodeHTML(l) + "<br />" : "") + r.join("<br />"))
                        }
                    })
                }, this), o.reverse(), o = o.join("<br /><br />");
                var u = e.position;
                this._showOrMove(l, function () {
                    this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, u, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], u)
                })
            }, _showSeriesItemTooltip: function (t, e, n) {
                var r = this._ecModel, a = e.seriesIndex, o = r.getSeriesByIndex(a), s = e.dataModel || o, l = e.dataIndex,
                    u = e.dataType, h = s.getData(),
                    c = i([h.getItemModel(l), s, o && (o.coordinateSystem || {}).model, this._tooltipModel]),
                    d = c.get("trigger");
                if (null == d || "item" === d) {
                    var f = s.getDataParams(l, u), p = s.formatTooltip(l, !1, u), g = "item_" + s.name + "_" + l;
                    this._showOrMove(c, function () {
                        this._showTooltipContent(c, p, f, g, t.offsetX, t.offsetY, t.position, t.target)
                    }), n({
                        type: "showTip",
                        dataIndexInside: l,
                        dataIndex: h.getRawIndex(l),
                        seriesIndex: a,
                        from: this.uid
                    })
                }
            }, _showComponentItemTooltip: function (t, e, n) {
                var i = e.tooltip;
                if ("string" == typeof i) {
                    var r = i;
                    i = {content: r, formatter: r}
                }
                var a = new y(i, this._tooltipModel, this._ecModel), o = a.get("content"), s = Math.random();
                this._showOrMove(a, function () {
                    this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e)
                }), n({type: "showTip", from: this.uid})
            }, _showTooltipContent: function (t, e, n, i, r, a, o, s) {
                if (this._ticket = "", t.get("showContent") && t.get("show")) {
                    var l = this._tooltipContent, u = t.get("formatter");
                    o = o || t.get("position");
                    var h = e;
                    if (u && "string" == typeof u) h = p.formatTpl(u, n, !0); else if ("function" == typeof u) {
                        var c = S(function (e, i) {
                            e === this._ticket && (l.setContent(i), this._updatePosition(t, o, r, a, l, n, s))
                        }, this);
                        this._ticket = i, h = u(n, i, c)
                    }
                    l.setContent(h), l.show(t), this._updatePosition(t, o, r, a, l, n, s)
                }
            }, _updatePosition: function (t, e, n, i, r, s, h) {
                var d = this._api.getWidth(), f = this._api.getHeight();
                e = e || t.get("position");
                var p = r.getSize(), g = t.get("align"), v = t.get("verticalAlign"), m = h && h.getBoundingRect().clone();
                if (h && m.applyTransform(h.transform), "function" == typeof e && (e = e([n, i], s, r.el, m, {
                    viewSize: [d, f],
                    contentSize: p.slice()
                })), c.isArray(e)) n = T(e[0], d), i = T(e[1], f); else if (c.isObject(e)) {
                    e.width = p[0], e.height = p[1];
                    var y = x.getLayoutRect(e, {width: d, height: f});
                    n = y.x, i = y.y, g = null, v = null
                } else if ("string" == typeof e && h) {
                    var _ = l(e, m, p);
                    n = _[0], i = _[1]
                } else {
                    var _ = a(n, i, r.el, d, f, g ? null : 20, v ? null : 20);
                    n = _[0], i = _[1]
                }
                if (g && (n -= u(g) ? p[0] / 2 : "right" === g ? p[0] : 0), v && (i -= u(v) ? p[1] / 2 : "bottom" === v ? p[1] : 0), t.get("confine")) {
                    var _ = o(n, i, r.el, d, f);
                    n = _[0], i = _[1]
                }
                r.moveTo(n, i)
            }, _updateContentNotChangedOnAxis: function (t) {
                var e = this._lastDataByCoordSys, n = !!e && e.length === t.length;
                return n && M(e, function (e, i) {
                    var r = e.dataByAxis || {}, a = t[i] || {}, o = a.dataByAxis || [];
                    (n &= r.length === o.length) && M(r, function (t, e) {
                        var i = o[e] || {}, r = t.seriesDataIndices || [], a = i.seriesDataIndices || [];
                        (n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length) && M(r, function (t, e) {
                            var i = a[e];
                            n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex
                        })
                    })
                }), this._lastDataByCoordSys = t, !!n
            }, _hide: function (t) {
                this._lastDataByCoordSys = null, t({type: "hideTip", from: this.uid})
            }, dispose: function (t, e) {
                d.node || (this._tooltipContent.hide(), _.unregister("itemTooltip", e))
            }
        });
    t.exports = C
}, function (t, e, n) {
    var i = n(208), r = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {show: !1},
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {color: "#333", width: 1, type: "solid"},
            symbol: ["none", "none"],
            symbolSize: [10, 15]
        },
        axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
        axisLabel: {show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12},
        splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
        splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
    }, a = {};
    a.categoryAxis = i.merge({
        boundaryGap: !0,
        splitLine: {show: !1},
        axisTick: {alignWithLabel: !1, interval: "auto"},
        axisLabel: {interval: "auto"}
    }, r), a.valueAxis = i.merge({boundaryGap: [0, 0], splitNumber: 5}, r), a.timeAxis = i.defaults({
        scale: !0,
        min: "dataMin",
        max: "dataMax"
    }, a.valueAxis), a.logAxis = i.defaults({scale: !0, logBase: 10}, a.valueAxis);
    var o = a;
    t.exports = o
}, function (t, e, n) {
    function i(t, e, n, i) {
        r.each(h, function (o) {
            e.extend({
                type: t + "Axis." + o, mergeDefaultAndTheme: function (e, i) {
                    var a = this.layoutMode, s = a ? l(e) : {}, h = i.getTheme();
                    r.merge(e, h.get(o + "Axis")), r.merge(e, this.getDefaultOption()), e.type = n(t, e), a && u(e, s, a)
                }, defaultOption: r.mergeAll([{}, a[o + "Axis"], i], !0)
            })
        }), o.registerSubTypeDefaulter(t + "Axis", r.curry(n, t))
    }

    var r = n(208), a = n(469), o = n(226), s = n(227), l = s.getLayoutParams, u = s.mergeLayoutParam,
        h = ["value", "category", "time", "log"];
    t.exports = i
}, function (t, e, n) {
    var i = n(208), r = n(278), a = function (t, e, n, i, a) {
        r.call(this, t, e, n), this.type = i || "value", this.position = a || "bottom"
    };
    a.prototype = {
        constructor: a, index: 0, onZero: !1, model: null, isHorizontal: function () {
            var t = this.position;
            return "top" === t || "bottom" === t
        }, getGlobalExtent: function (t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
        }, getOtherAxis: function () {
            this.grid.getOtherAxis()
        }, isLabelIgnored: function (t) {
            if ("category" === this.type) {
                var e = this.getLabelInterval();
                return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
            }
        }, pointToData: function (t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
        }, toLocalCoord: null, toGlobalCoord: null
    }, i.inherits(a, r);
    var o = a;
    t.exports = o
}, function (t, e, n) {
    function i(t) {
        return this._axes[t]
    }

    var r = n(208), a = function (t) {
        this._axes = {}, this._dimList = [], this.name = t || ""
    };
    a.prototype = {
        constructor: a, type: "cartesian", getAxis: function (t) {
            return this._axes[t]
        }, getAxes: function () {
            return r.map(this._dimList, i, this)
        }, getAxesByScale: function (t) {
            return t = t.toLowerCase(), r.filter(this.getAxes(), function (e) {
                return e.scale.type === t
            })
        }, addAxis: function (t) {
            var e = t.dim;
            this._axes[e] = t, this._dimList.push(e)
        }, dataToCoord: function (t) {
            return this._dataCoordConvert(t, "dataToCoord")
        }, coordToData: function (t) {
            return this._dataCoordConvert(t, "coordToData")
        }, _dataCoordConvert: function (t, e) {
            for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
                var a = n[r], o = this._axes[a];
                i[a] = o[e](t[a])
            }
            return i
        }
    };
    var o = a;
    t.exports = o
}, function (t, e, n) {
    function i(t) {
        a.call(this, t)
    }

    var r = n(208), a = n(472);
    i.prototype = {
        constructor: i, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
        }, containPoint: function (t) {
            var e = this.getAxis("x"), n = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
        }, containData: function (t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
        }, dataToPoint: function (t, e) {
            var n = this.getAxis("x"), i = this.getAxis("y");
            return [n.toGlobalCoord(n.dataToCoord(t[0], e)), i.toGlobalCoord(i.dataToCoord(t[1], e))]
        }, pointToData: function (t, e) {
            var n = this.getAxis("x"), i = this.getAxis("y");
            return [n.coordToData(n.toLocalCoord(t[0]), e), i.coordToData(i.toLocalCoord(t[1]), e)]
        }, getOtherAxis: function (t) {
            return this.getAxis("x" === t.dim ? "y" : "x")
        }
    }, r.inherits(i, a);
    var o = i;
    t.exports = o
}, function (t, e, n) {
    n(356);
    var i = n(226), r = i.extend({
        type: "grid",
        dependencies: ["xAxis", "yAxis"],
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }
    });
    t.exports = r
}, function (t, e, n) {
    function i(t) {
        return t.get("stack") || d + t.seriesIndex
    }

    function r(t) {
        return t.dim + t.index
    }

    function a(t, e) {
        var n = [], i = t.axis;
        if ("category" === i.type) {
            for (var r = i.getBandWidth(), a = 0; a < t.count; a++) n.push(u.defaults({
                bandWidth: r,
                axisKey: "axis0",
                stackId: d + a
            }, t));
            for (var o = s(n, e), l = [], a = 0; a < t.count; a++) {
                var h = o.axis0[d + a];
                h.offsetCenter = h.offset + h.width / 2, l.push(h)
            }
            return l
        }
    }

    function o(t, e) {
        return s(u.map(t, function (t) {
            var e = t.getData(), n = t.coordinateSystem, a = n.getBaseAxis(), o = a.getExtent(),
                s = "category" === a.type ? a.getBandWidth() : Math.abs(o[1] - o[0]) / e.count();
            return {
                bandWidth: s,
                barWidth: c(t.get("barWidth"), s),
                barMaxWidth: c(t.get("barMaxWidth"), s),
                barGap: t.get("barGap"),
                barCategoryGap: t.get("barCategoryGap"),
                axisKey: r(a),
                stackId: i(t)
            }
        }), e)
    }

    function s(t, e) {
        var n = {};
        u.each(t, function (t, e) {
            var i = t.axisKey, r = t.bandWidth, a = n[i] || {
                bandWidth: r,
                remainedWidth: r,
                autoWidthCount: 0,
                categoryGap: "20%",
                gap: "30%",
                stacks: {}
            }, o = a.stacks;
            n[i] = a;
            var s = t.stackId;
            o[s] || a.autoWidthCount++, o[s] = o[s] || {width: 0, maxWidth: 0};
            var l = t.barWidth;
            l && !o[s].width && (o[s].width = l, l = Math.min(a.remainedWidth, l), a.remainedWidth -= l);
            var u = t.barMaxWidth;
            u && (o[s].maxWidth = u);
            var h = t.barGap;
            null != h && (a.gap = h);
            var c = t.barCategoryGap;
            null != c && (a.categoryGap = c)
        });
        var i = {};
        return u.each(n, function (t, e) {
            i[e] = {};
            var n = t.stacks, r = t.bandWidth, a = c(t.categoryGap, r), o = c(t.gap, 1), s = t.remainedWidth,
                l = t.autoWidthCount, h = (s - a) / (l + (l - 1) * o);
            h = Math.max(h, 0), u.each(n, function (t, e) {
                var n = t.maxWidth;
                n && n < h && (n = Math.min(n, s), t.width && (n = Math.min(n, t.width)), s -= n, t.width = n, l--)
            }), h = (s - a) / (l + (l - 1) * o), h = Math.max(h, 0);
            var d, f = 0;
            u.each(n, function (t, e) {
                t.width || (t.width = h), d = t, f += t.width * (1 + o)
            }), d && (f -= d.width * o);
            var p = -f / 2;
            u.each(n, function (t, n) {
                i[e][n] = i[e][n] || {offset: p, width: t.width}, p += t.width * (1 + o)
            })
        }), i
    }

    function l(t, e, n) {
        var a = o(u.filter(e.getSeriesByType(t), function (t) {
            return !e.isSeriesFiltered(t) && t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
        })), s = {}, l = {};
        e.eachSeriesByType(t, function (t) {
            if ("cartesian2d" === t.coordinateSystem.type) {
                var e = t.getData(), n = t.coordinateSystem, o = n.getBaseAxis(), u = i(t), h = a[r(o)][u],
                    c = h.offset, d = h.width, f = n.getOtherAxis(o), p = t.get("barMinHeight") || 0,
                    g = o.onZero ? f.toGlobalCoord(f.dataToCoord(0)) : f.getGlobalExtent()[0],
                    v = [t.coordDimToDataDim("x")[0], t.coordDimToDataDim("y")[0]], m = e.mapArray(v, function (t, e) {
                        return n.dataToPoint([t, e])
                    }, !0);
                s[u] = s[u] || [], l[u] = l[u] || [], e.setLayout({
                    offset: c,
                    size: d
                }), e.each(t.coordDimToDataDim(f.dim)[0], function (t, n) {
                    if (!isNaN(t)) {
                        s[u][n] || (s[u][n] = {p: g, n: g}, l[u][n] = {p: g, n: g});
                        var i, r, a, o, h = t >= 0 ? "p" : "n", v = m[n], x = s[u][n][h], y = l[u][n][h];
                        f.isHorizontal() ? (i = x, r = v[1] + c, a = v[0] - y, o = d, l[u][n][h] += a, Math.abs(a) < p && (a = (a < 0 ? -1 : 1) * p), s[u][n][h] += a) : (i = v[0] + c, r = x, a = d, o = v[1] - y, l[u][n][h] += o, Math.abs(o) < p && (o = (o <= 0 ? -1 : 1) * p), s[u][n][h] += o), e.setItemLayout(n, {
                            x: i,
                            y: r,
                            width: a,
                            height: o
                        })
                    }
                }, !0)
            }
        }, this)
    }

    var u = n(208), h = n(212), c = h.parsePercent, d = "__ec_stack_";
    l.getLayoutOnAxis = a;
    var f = l;
    t.exports = f
}, function (t, e) {
    function n(t, e) {
        e.eachSeriesByType(t, function (t) {
            var e = t.getData(), n = t.coordinateSystem;
            if (n) {
                for (var i = [], r = n.dimensions, a = 0; a < r.length; a++) i.push(t.coordDimToDataDim(n.dimensions[a])[0]);
                1 === i.length ? e.each(i[0], function (t, i) {
                    e.setItemLayout(i, isNaN(t) ? [NaN, NaN] : n.dataToPoint(t))
                }) : 2 === i.length && e.each(i, function (t, i, r) {
                    e.setItemLayout(r, isNaN(t) || isNaN(i) ? [NaN, NaN] : n.dataToPoint([t, i]))
                }, !0)
            }
        })
    }

    t.exports = n
}, , function (t, e) {
    function n(t, e, n) {
        e.eachSeriesByType(t, function (t) {
            var e = t.getData(), n = t.get("sampling"), a = t.coordinateSystem;
            if ("cartesian2d" === a.type && n) {
                var o = a.getBaseAxis(), s = a.getOtherAxis(o), l = o.getExtent(), u = l[1] - l[0],
                    h = Math.round(e.count() / u);
                if (h > 1) {
                    var c;
                    "string" == typeof n ? c = i[n] : "function" == typeof n && (c = n), c && (e = e.downSample(s.dim, 1 / h, c, r), t.setData(e))
                }
            }
        }, this)
    }

    var i = {
        average: function (t) {
            for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
            return 0 === n ? NaN : e / n
        }, sum: function (t) {
            for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
            return e
        }, max: function (t) {
            for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
            return e
        }, min: function (t) {
            for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
            return e
        }, nearest: function (t) {
            return t[0]
        }
    }, r = function (t, e) {
        return Math.round(t.length / 2)
    };
    t.exports = n
}, , function (t, e) {
    function n(t, e, n, i, r) {
        i.eachRawSeriesByType(t, function (t) {
            var r = t.getData(), a = t.get("symbol") || e, o = t.get("symbolSize");
            r.setVisual({
                legendSymbol: n || a,
                symbol: a,
                symbolSize: o
            }), i.isSeriesFiltered(t) || ("function" == typeof o && r.each(function (e) {
                var n = t.getRawValue(e), i = t.getDataParams(e);
                r.setItemVisual(e, "symbolSize", o(n, i))
            }), r.each(function (t) {
                var e = r.getItemModel(t), n = e.getShallow("symbol", !0), i = e.getShallow("symbolSize", !0);
                null != n && r.setItemVisual(t, "symbol", n), null != i && r.setItemVisual(t, "symbolSize", i)
            }))
        })
    }

    t.exports = n
}, , , , , , function (t, e, n) {
    var i = n(393);
    "string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);
    n(189)("f87773ca", i, !0)
}, , , , function (t, e, n) {
    var i = n(397);
    "string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);
    n(189)("19f0cebc", i, !0)
}, , , , , , , , , , , , , , , , function (t, e, n) {
    n(490);
    var i = n(87)(n(362), n(515), null, null);
    t.exports = i.exports
}, , , , , function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("head-top"), t._v(" "), n("section", {staticClass: "data_section"}, [n("header", {staticClass: "section_title"}, [t._v("数据统计")]), t._v(" "), n("el-row", {
                staticStyle: {"margin-bottom": "10px"},
                attrs: {gutter: 20}
            }, [n("el-col", {attrs: {span: 4}}, [n("div", {staticClass: "data_list today_head"}, [n("span", {staticClass: "data_num head"}, [t._v("当日数据：")])])]), t._v(" "), n("el-col", {attrs: {span: 4}}, [n("div", {staticClass: "data_list"}, [n("span", {staticClass: "data_num"}, [t._v(t._s(t.userCount))]), t._v(" 新增用户")])]), t._v(" "), n("el-col", {attrs: {span: 4}}, [n("div", {staticClass: "data_list"}, [n("span", {staticClass: "data_num"}, [t._v(t._s(t.orderCount))]), t._v(" 新增订单")])]), t._v(" "), n("el-col", {attrs: {span: 4}}, [n("div", {staticClass: "data_list"}, [n("span", {staticClass: "data_num"}, [t._v(t._s(t.adminCount))]), t._v(" 新增管理员")])])], 1), t._v(" "), n("el-row", {attrs: {gutter: 20}}, [n("el-col", {attrs: {span: 4}}, [n("div", {staticClass: "data_list all_head"}, [n("span", {staticClass: "data_num head"}, [t._v("总数据：")])])]), t._v(" "), n("el-col", {attrs: {span: 4}}, [n("div", {staticClass: "data_list"}, [n("span", {staticClass: "data_num"}, [t._v(t._s(t.allUserCount))]), t._v(" 注册用户")])]), t._v(" "), n("el-col", {attrs: {span: 4}}, [n("div", {staticClass: "data_list"}, [n("span", {staticClass: "data_num"}, [t._v(t._s(t.allOrderCount))]), t._v(" 订单")])]), t._v(" "), n("el-col", {attrs: {span: 4}}, [n("div", {staticClass: "data_list"}, [n("span", {staticClass: "data_num"}, [t._v(t._s(t.allAdminCount))]), t._v(" 管理员")])])], 1)], 1), t._v(" "), n("tendency", {
                attrs: {
                    sevenDate: t.sevenDate,
                    sevenDay: t.sevenDay
                }
            })], 1)
        }, staticRenderFns: []
    }
}, , , , function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            t._self._c;
            return t._m(0)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "line1"}, [n("div", {
                staticStyle: {width: "90%", height: "450px"},
                attrs: {id: "line1"}
            })])
        }]
    }
}]));