webpackJsonp([1], Array(205).concat([function (t, e, n) {
    n(500);
    var i = n(87)(n(379), n(525), null, null);
    t.exports = i.exports
}, , , function (t, e) {
    function n(t, e) {
        U[t] = e
    }

    function i(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t, n = H.call(t);
        if ("[object Array]" === n) {
            e = [];
            for (var r = 0, a = t.length; r < a; r++) e[r] = i(t[r])
        } else if (F[n]) {
            var o = t.constructor;
            if (t.constructor.from) e = o.from(t); else {
                e = new o(t.length);
                for (var r = 0, a = t.length; r < a; r++) e[r] = i(t[r])
            }
        } else if (!N[n] && !E(t) && !M(t)) {
            e = {};
            for (var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]))
        }
        return e
    }

    function r(t, e, n) {
        if (!S(e) || !S(t)) return n ? i(e) : t;
        for (var a in e) if (e.hasOwnProperty(a)) {
            var o = t[a], s = e[a];
            !S(s) || !S(o) || x(s) || x(o) || M(s) || M(o) || T(s) || T(o) || E(s) || E(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n)
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
        return $ || ($ = Y().getContext("2d")), $
    }

    function h(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n
        }
        return -1
    }

    function u(t, e) {
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

    function f(t) {
        if (t) return "string" != typeof t && "number" == typeof t.length
    }

    function d(t, e, n) {
        if (t && e) if (t.forEach && t.forEach === W) t.forEach(e, n); else if (t.length === +t.length) for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t); else for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t)
    }

    function p(t, e, n) {
        if (t && e) {
            if (t.map && t.map === G) return t.map(e, n);
            for (var i = [], r = 0, a = t.length; r < a; r++) i.push(e.call(n, t[r], r, t));
            return i
        }
    }

    function g(t, e, n, i) {
        if (t && e) {
            if (t.reduce && t.reduce === X) return t.reduce(e, n, i);
            for (var r = 0, a = t.length; r < a; r++) n = e.call(i, n, t[r], r, t);
            return n
        }
    }

    function v(t, e, n) {
        if (t && e) {
            if (t.filter && t.filter === q) return t.filter(e, n);
            for (var i = [], r = 0, a = t.length; r < a; r++) e.call(n, t[r], r, t) && i.push(t[r]);
            return i
        }
    }

    function m(t, e, n) {
        if (t && e) for (var i = 0, r = t.length; i < r; i++) if (e.call(n, t[i], i, t)) return t[i]
    }

    function y(t, e) {
        var n = j.call(arguments, 2);
        return function () {
            return t.apply(e, n.concat(j.call(arguments)))
        }
    }

    function _(t) {
        var e = j.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(j.call(arguments)))
        }
    }

    function x(t) {
        return "[object Array]" === H.call(t)
    }

    function w(t) {
        return "function" == typeof t
    }

    function b(t) {
        return "[object String]" === H.call(t)
    }

    function S(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" == e
    }

    function T(t) {
        return !!N[H.call(t)]
    }

    function M(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function C(t) {
        return t !== t
    }

    function k(t) {
        for (var e = 0, n = arguments.length; e < n; e++) if (null != arguments[e]) return arguments[e]
    }

    function I(t, e) {
        return null != t ? t : e
    }

    function P(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function A() {
        return Function.call.apply(j, arguments)
    }

    function D(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function L(t, e) {
        if (!t) throw new Error(e)
    }

    function O(t) {
        t[Z] = !0
    }

    function E(t) {
        return t[Z]
    }

    function z(t) {
        t && d(t, function (t, e) {
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
        }, F = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        }, H = Object.prototype.toString, V = Array.prototype, W = V.forEach, q = V.filter, j = V.slice, G = V.map,
        X = V.reduce, U = {}, Y = function () {
            return U.createCanvas()
        };
    U.createCanvas = function () {
        return document.createElement("canvas")
    };
    var $, Z = "__ec_primitive__";
    z.prototype = {
        constructor: z, get: function (t) {
            return this["_ec_" + t]
        }, set: function (t, e) {
            return this["_ec_" + t] = e, e
        }, each: function (t, e) {
            void 0 !== e && (t = y(t, e));
            for (var n in this) this.hasOwnProperty(n) && t(this[n], n.slice(4))
        }, removeKey: function (t) {
            delete this["_ec_" + t]
        }
    }, e.$override = n, e.clone = i, e.merge = r, e.mergeAll = a, e.extend = o, e.defaults = s, e.createCanvas = Y, e.getContext = l, e.indexOf = h, e.inherits = u, e.mixin = c, e.isArrayLike = f, e.each = d, e.map = p, e.reduce = g, e.filter = v, e.find = m, e.bind = y, e.curry = _, e.isArray = x, e.isFunction = w, e.isString = b, e.isObject = S, e.isBuiltInObject = T, e.isDom = M, e.eqNaN = C, e.retrieve = k, e.retrieve2 = I, e.retrieve3 = P, e.slice = A, e.normalizeCssArray = D, e.assert = L, e.setAsPrimitive = O, e.isPrimitive = E, e.createHashMap = R, e.noop = B
}, function (t, e, n) {
    function i(t) {
        return function (e, n, i) {
            e = e && e.toLowerCase(), K.prototype[t].call(this, e, n, i)
        }
    }

    function r() {
        K.call(this)
    }

    function a(t, e, n) {
        function i(t, e) {
            return t.prio - e.prio
        }

        n = n || {}, "string" == typeof e && (e = Ot[e]), this.id, this.group, this._dom = t;
        var a = this._zr = U.init(t, {
            renderer: n.renderer || "canvas",
            devicePixelRatio: n.devicePixelRatio,
            width: n.width,
            height: n.height
        });
        this._throttledZrFlush = ct(Y.bind(a.flush, a), 17);
        var e = Y.clone(e);
        e && it(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new et, this._api = w(this), K.call(this), this._messageCenter = new r, this._initEvents(), this.resize = Y.bind(this.resize, this), this._pendingActions = [], Q(Lt, i), Q(Pt, i), a.animation.on("frame", this._onframe, this), Y.setAsPrimitive(this)
    }

    function o(t, e, n) {
        var i, r = this._model, a = this._coordSysMgr.getCoordinateSystems();
        e = ht.parseFinder(r, e);
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
        var n = t.type, i = t.escapeConnect, r = kt[n], a = r.actionInfo, o = (a.update || "update").split(":"),
            l = o.pop();
        o = null != o[0] && gt(o[0]), this[wt] = !0;
        var h = [t], u = !1;
        t.batch && (u = !0, h = Y.map(t.batch, function (e) {
            return e = Y.defaults(Y.extend({}, e), t), e.batch = null, e
        }));
        var c, f = [], d = "highlight" === n || "downplay" === n;
        pt(h, function (t) {
            c = r.action(t, this._model, this._api), c = c || Y.extend({}, t), c.type = a.event || c.type, f.push(c), d ? s(this, l, t, "series") : o && s(this, l, t, o.main, o.sub)
        }, this), "none" === l || d || o || (this[bt] ? (Mt.prepareAndUpdate.call(this, t), this[bt] = !1) : Mt[l].call(this, t)), c = u ? {
            type: a.event || n,
            escapeConnect: i,
            batch: f
        } : f[0], this[wt] = !1, !e && this._messageCenter.trigger(c.type, c)
    }

    function h(t) {
        for (var e = this._pendingActions; e.length;) {
            var n = e.shift();
            l.call(this, n, t)
        }
    }

    function u(t) {
        !t && this.trigger("updated")
    }

    function c(t, e, n) {
        var i = this._api;
        pt(this._componentsViews, function (r) {
            var a = r.__model;
            r[t](a, e, i, n), x(a, r)
        }, this), e.eachSeries(function (r, a) {
            var o = this._chartsMap[r.__viewId];
            o[t](r, e, i, n), x(r, o), _(r, o)
        }, this), y(this._zr, e), pt(Dt, function (t) {
            t(e, i)
        })
    }

    function f(t, e) {
        for (var n = "component" === t, i = n ? this._componentsViews : this._chartsViews, r = n ? this._componentsMap : this._chartsMap, a = this._zr, o = 0; o < i.length; o++) i[o].__alive = !1;
        e[n ? "eachComponent" : "eachSeries"](function (t, o) {
            if (n) {
                if ("series" === t) return
            } else o = t;
            var s = "_ec_" + o.id + "_" + o.type, l = r[s];
            if (!l) {
                var h = gt(o.type), u = n ? ot.getClass(h.main, h.sub) : st.getClass(h.sub);
                if (!u) return;
                l = new u, l.init(e, this._api), r[s] = l, i.push(l), a.add(l.group)
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

    function d(t, e) {
        pt(Pt, function (n) {
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
            i.render(r, t, n, e), x(r, i)
        }, this), pt(this._chartsViews, function (t) {
            t.__alive = !1
        }, this), t.eachSeries(function (i, r) {
            var a = this._chartsMap[i.__viewId];
            a.__alive = !0, a.render(i, t, n, e), a.group.silent = !!i.get("silent"), x(i, a), _(i, a)
        }, this), y(this._zr, t), pt(this._chartsViews, function (e) {
            e.__alive || e.remove(t, n)
        }, this)
    }

    function y(t, e) {
        var n = t.storage, i = 0;
        n.traverse(function (t) {
            t.isGroup || i++
        }), i > e.get("hoverLayerThreshold") && !Z.node && n.traverse(function (t) {
            t.isGroup || (t.useHoverLayer = !0)
        })
    }

    function _(t, e) {
        var n = 0;
        e.group.traverse(function (t) {
            "group" === t.type || t.ignore || n++
        });
        var i = +t.get("progressive"), r = n > t.get("progressiveThreshold") && i && !Z.node;
        r && e.group.traverse(function (t) {
            t.isGroup || (t.progressive = r ? Math.floor(n++ / i) : -1, r && t.stopAnimation(!0))
        });
        var a = t.get("blendMode") || null;
        e.group.traverse(function (t) {
            t.isGroup || t.setStyle("blend", a)
        })
    }

    function x(t, e) {
        var n = t.get("z"), i = t.get("zlevel");
        e.group.traverse(function (t) {
            "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
        })
    }

    function w(t) {
        var e = t._coordSysMgr;
        return Y.extend(new tt(t), {
            getCoordinateSystems: Y.bind(e.getCoordinateSystems, e),
            getComponentByElement: function (e) {
                for (; e;) {
                    var n = e.__ecComponentInfo;
                    if (null != n) return t._model.getComponent(n.mainType, n.index);
                    e = e.parent
                }
            }
        })
    }

    function b(t) {
        function e(t, e) {
            for (var i = 0; i < t.length; i++) {
                t[i][n] = e
            }
        }

        var n = "__connectUpdateStatus";
        Y.each(It, function (i, r) {
            t._messageCenter.on(r, function (i) {
                if (Rt[t.group] && 0 !== t[n]) {
                    if (i && i.escapeConnect) return;
                    var r = t.makeActionFromEvent(i), a = [];
                    Y.each(zt, function (e) {
                        e !== t && e.group === t.group && a.push(e)
                    }), e(a, 0), pt(a, function (t) {
                        1 !== t[n] && t.dispatchAction(r)
                    }), e(a, 2)
                }
            })
        })
    }

    function S(t, e, n) {
        var i = k(t);
        if (i) return i;
        var r = new a(t, e, n);
        return r.id = "ec_" + Bt++, zt[r.id] = r, t.setAttribute ? t.setAttribute(Ft, r.id) : t[Ft] = r.id, b(r), r
    }

    function T(t) {
        if (Y.isArray(t)) {
            var e = t;
            t = null, Y.each(e, function (e) {
                null != e.group && (t = e.group)
            }), t = t || "g_" + Nt++, Y.each(e, function (e) {
                e.group = t
            })
        }
        return Rt[t] = !0, t
    }

    function M(t) {
        Rt[t] = !1
    }

    function C(t) {
        "string" == typeof t ? t = zt[t] : t instanceof a || (t = k(t)), t instanceof a && !t.isDisposed() && t.dispose()
    }

    function k(t) {
        var e;
        return e = t.getAttribute ? t.getAttribute(Ft) : t[Ft], zt[e]
    }

    function I(t) {
        return zt[t]
    }

    function P(t, e) {
        Ot[t] = e
    }

    function A(t) {
        At.push(t)
    }

    function D(t, e) {
        "function" == typeof t && (e = t, t = mt), Pt.push({prio: t, func: e})
    }

    function L(t) {
        Dt.push(t)
    }

    function O(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = Y.isObject(t) ? t.type : [t, t = {event: e}][0];
        t.event = (t.event || i).toLowerCase(), e = t.event, Y.assert(St.test(i) && St.test(e)), kt[i] || (kt[i] = {
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
        "function" == typeof t && (e = t, t = yt), Lt.push({prio: t, func: e, isLayout: !0})
    }

    function B(t, e) {
        "function" == typeof t && (e = t, t = _t), Lt.push({prio: t, func: e})
    }

    function N(t, e) {
        Et[t] = e
    }

    function F(t) {
        return rt.extend(t)
    }

    function H(t) {
        return ot.extend(t)
    }

    function V(t) {
        return at.extend(t)
    }

    function W(t) {
        return st.extend(t)
    }

    function q(t) {
        Y.$override("createCanvas", t)
    }

    function j(t, e, n) {
        e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), Ht[t] = {
            geoJson: e,
            specialAreas: n
        }
    }

    function G(t) {
        return Ht[t]
    }

    var X = n(214), U = (X.__DEV__, n(275)), Y = n(208), $ = n(234), Z = n(216), Q = n(245), K = n(230), J = n(295),
        tt = n(282), et = n(249), nt = n(296), it = n(303), rt = n(226), at = n(255), ot = n(280), st = n(258),
        lt = n(210), ht = n(211), ut = n(251), ct = ut.throttle, ft = n(308), dt = n(294), pt = Y.each,
        gt = rt.parseClassType, vt = {zrender: "3.7.4"}, mt = 1e3, yt = 1e3, _t = 3e3, xt = {
            PROCESSOR: {FILTER: mt, STATISTIC: 5e3},
            VISUAL: {LAYOUT: yt, GLOBAL: 2e3, CHART: _t, COMPONENT: 4e3, BRUSH: 5e3}
        }, wt = "__flagInMainProcess", bt = "__optionUpdated", St = /^[a-zA-Z0-9_]+$/;
    r.prototype.on = i("on"), r.prototype.off = i("off"), r.prototype.one = i("one"), Y.mixin(r, K);
    var Tt = a.prototype;
    Tt._onframe = function () {
        if (this[bt]) {
            var t = this[bt].silent;
            this[wt] = !0, Mt.prepareAndUpdate.call(this), this[wt] = !1, this[bt] = !1, h.call(this, t), u.call(this, t)
        }
    }, Tt.getDom = function () {
        return this._dom
    }, Tt.getZr = function () {
        return this._zr
    }, Tt.setOption = function (t, e, n) {
        var i;
        if (Y.isObject(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[wt] = !0, !this._model || e) {
            var r = new nt(this._api), a = this._theme;
            (this._model = new J(null, null, a, r)).init(null, null, a, r)
        }
        this._model.setOption(t, At), n ? (this[bt] = {silent: i}, this[wt] = !1) : (Mt.prepareAndUpdate.call(this), this._zr.flush(), this[bt] = !1, this[wt] = !1, h.call(this, i), u.call(this, i))
    }, Tt.setTheme = function () {
        console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
    }, Tt.getModel = function () {
        return this._model
    }, Tt.getOption = function () {
        return this._model && this._model.getOption()
    }, Tt.getWidth = function () {
        return this._zr.getWidth()
    }, Tt.getHeight = function () {
        return this._zr.getHeight()
    }, Tt.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || window.devicePixelRatio || 1
    }, Tt.getRenderedCanvas = function (t) {
        if (Z.canvasSupported) {
            t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
            var e = this._zr, n = e.storage.getDisplayList();
            return Y.each(n, function (t) {
                t.stopAnimation(!0)
            }), e.painter.getRenderedCanvas(t)
        }
    }, Tt.getSvgDataUrl = function () {
        if (Z.svgSupported) {
            var t = this._zr, e = t.storage.getDisplayList();
            return Y.each(e, function (t) {
                t.stopAnimation(!0)
            }), t.painter.pathToSvg()
        }
    }, Tt.getDataURL = function (t) {
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
    }, Tt.getConnectedDataURL = function (t) {
        if (Z.canvasSupported) {
            var e = this.group, n = Math.min, i = Math.max;
            if (Rt[e]) {
                var r = 1 / 0, a = 1 / 0, o = -1 / 0, s = -1 / 0, l = [], h = t && t.pixelRatio || 1;
                Y.each(zt, function (h, u) {
                    if (h.group === e) {
                        var c = h.getRenderedCanvas(Y.clone(t)), f = h.getDom().getBoundingClientRect();
                        r = n(f.left, r), a = n(f.top, a), o = i(f.right, o), s = i(f.bottom, s), l.push({
                            dom: c,
                            left: f.left,
                            top: f.top
                        })
                    }
                }), r *= h, a *= h, o *= h, s *= h;
                var u = o - r, c = s - a, f = Y.createCanvas();
                f.width = u, f.height = c;
                var d = U.init(f);
                return pt(l, function (t) {
                    var e = new lt.Image({style: {x: t.left * h - r, y: t.top * h - a, image: t.dom}});
                    d.add(e)
                }), d.refreshImmediately(), f.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
        }
    }, Tt.convertToPixel = Y.curry(o, "convertToPixel"), Tt.convertFromPixel = Y.curry(o, "convertFromPixel"), Tt.containPixel = function (t, e) {
        var n, i = this._model;
        return t = ht.parseFinder(i, t), Y.each(t, function (t, i) {
            i.indexOf("Models") >= 0 && Y.each(t, function (t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint) n |= !!r.containPoint(e); else if ("seriesModels" === i) {
                    var a = this._chartsMap[t.__viewId];
                    a && a.containPoint && (n |= a.containPoint(e, t))
                }
            }, this)
        }, this), !!n
    }, Tt.getVisual = function (t, e) {
        var n = this._model;
        t = ht.parseFinder(n, t, {defaultMainType: "series"});
        var i = t.seriesModel, r = i.getData(),
            a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
        return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
    }, Tt.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId]
    }, Tt.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId]
    };
    var Mt = {
        update: function (t) {
            var e = this._model, n = this._api, i = this._coordSysMgr, r = this._zr;
            if (e) {
                e.restoreData(), i.create(this._model, this._api), d.call(this, e, n), p.call(this, e), i.update(e, n), v.call(this, e, t), m.call(this, e, t);
                var a = e.get("backgroundColor") || "transparent", o = r.painter;
                if (o.isSingleCanvas && o.isSingleCanvas()) r.configLayer(0, {clearColor: a}); else {
                    if (!Z.canvasSupported) {
                        var s = $.parse(a);
                        a = $.stringify(s, "rgb"), 0 === s[3] && (a = "transparent")
                    }
                    a.colorStops || a.image ? (r.configLayer(0, {clearColor: a}), this.__hasGradientOrPatternBg = !0, this._dom.style.background = "transparent") : (this.__hasGradientOrPatternBg && r.configLayer(0, {clearColor: null}), this.__hasGradientOrPatternBg = !1, this._dom.style.background = a)
                }
                pt(Dt, function (t) {
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
            f.call(this, "component", e), f.call(this, "chart", e), Mt.update.call(this, t)
        }
    };
    Tt.resize = function (t) {
        this[wt] = !0, this._zr.resize(t);
        var e = this._model && this._model.resetOption("media");
        Mt[e ? "prepareAndUpdate" : "update"].call(this), this._loadingFX && this._loadingFX.resize(), this[wt] = !1;
        var n = t && t.silent;
        h.call(this, n), u.call(this, n)
    }, Tt.showLoading = function (t, e) {
        if (Y.isObject(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), Et[t]) {
            var n = Et[t](this._api, e), i = this._zr;
            this._loadingFX = n, i.add(n)
        }
    }, Tt.hideLoading = function () {
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
    }, Tt.makeActionFromEvent = function (t) {
        var e = Y.extend({}, t);
        return e.type = It[t.type], e
    }, Tt.dispatchAction = function (t, e) {
        if (Y.isObject(e) || (e = {silent: !!e}), kt[t.type] && this._model) {
            if (this[wt]) return void this._pendingActions.push(t);
            l.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && Z.browser.weChat && this._throttledZrFlush(), h.call(this, e.silent), u.call(this, e.silent)
        }
    }, Tt.on = i("on"), Tt.off = i("off"), Tt.one = i("one");
    var Ct = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    Tt._initEvents = function () {
        pt(Ct, function (t) {
            this._zr.on(t, function (e) {
                var n, i = this.getModel(), r = e.target;
                if ("globalout" === t) n = {}; else if (r && null != r.dataIndex) {
                    var a = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
                    n = a && a.getDataParams(r.dataIndex, r.dataType) || {}
                } else r && r.eventData && (n = Y.extend({}, r.eventData));
                n && (n.event = e, n.type = t, this.trigger(t, n))
            }, this)
        }, this), pt(It, function (t, e) {
            this._messageCenter.on(e, function (t) {
                this.trigger(e, t)
            }, this)
        }, this)
    }, Tt.isDisposed = function () {
        return this._disposed
    }, Tt.clear = function () {
        this.setOption({series: []}, !0)
    }, Tt.dispose = function () {
        if (!this._disposed) {
            this._disposed = !0;
            var t = this._api, e = this._model;
            pt(this._componentsViews, function (n) {
                n.dispose(e, t)
            }), pt(this._chartsViews, function (n) {
                n.dispose(e, t)
            }), this._zr.dispose(), delete zt[this.id]
        }
    }, Y.mixin(a, K);
    var kt = {}, It = {}, Pt = [], At = [], Dt = [], Lt = [], Ot = {}, Et = {}, zt = {}, Rt = {}, Bt = new Date - 0,
        Nt = new Date - 0, Ft = "_echarts_instance_", Ht = {}, Vt = M;
    B(2e3, ft), A(it), N("default", dt), O({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    }, Y.noop), O({type: "downplay", event: "downplay", update: "downplay"}, Y.noop);
    var Wt = {};
    e.version = "3.8.5", e.dependencies = vt, e.PRIORITY = xt, e.init = S, e.connect = T, e.disConnect = M, e.disconnect = Vt, e.dispose = C, e.getInstanceByDom = k, e.getInstanceById = I, e.registerTheme = P, e.registerPreprocessor = A, e.registerProcessor = D, e.registerPostUpdate = L, e.registerAction = O, e.registerCoordinateSystem = E, e.getCoordinateSystemDimensions = z, e.registerLayout = R, e.registerVisual = B, e.registerLoading = N, e.extendComponentModel = F, e.extendComponentView = H, e.extendSeriesModel = V, e.extendChartView = W, e.setCanvasCreator = q, e.registerMap = j, e.getMap = G, e.dataTool = Wt;
    var qt = n(292);
    !function () {
        for (var t in qt) qt.hasOwnProperty(t) && (e[t] = qt[t])
    }()
}, function (t, e, n) {
    function i(t) {
        return Z.extend(t)
    }

    function r(t, e) {
        return X.extendFromString(t, e)
    }

    function a(t, e, n, i) {
        var r = X.createFromString(t, e), a = r.getBoundingRect();
        return n && ("center" === i && (n = s(n, a)), l(r, n)), r
    }

    function o(t, e, n) {
        var i = new K({
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

    function h(t) {
        var e = t.shape, n = t.style.lineWidth;
        return pt(2 * e.x1) === pt(2 * e.x2) && (e.x1 = e.x2 = c(e.x1, n, !0)), pt(2 * e.y1) === pt(2 * e.y2) && (e.y1 = e.y2 = c(e.y1, n, !0)), t
    }

    function u(t) {
        var e = t.shape, n = t.style.lineWidth, i = e.x, r = e.y, a = e.width, o = e.height;
        return e.x = c(e.x, n, !0), e.y = c(e.y, n, !0), e.width = Math.max(c(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(c(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t
    }

    function c(t, e, n) {
        var i = pt(2 * t);
        return (i + pt(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }

    function f(t) {
        return null != t && "none" != t
    }

    function d(t) {
        return "string" == typeof t ? U.lift(t, -.1) : t
    }

    function p(t) {
        if (t.__hoverStlDirty) {
            var e = t.style.stroke, n = t.style.fill, i = t.__hoverStl;
            i.fill = i.fill || (f(n) ? d(n) : null), i.stroke = i.stroke || (f(e) ? d(e) : null);
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

    function y(t) {
        "group" === t.type ? t.traverse(function (t) {
            "group" !== t.type && v(t)
        }) : v(t)
    }

    function _(t, e) {
        t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && p(t)
    }

    function x(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && m(this)
    }

    function w(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && y(this)
    }

    function b() {
        this.__isEmphasis = !0, m(this)
    }

    function S() {
        this.__isEmphasis = !1, y(this)
    }

    function T(t, e, n) {
        t.__hoverSilentOnTouch = n && n.hoverSilentOnTouch, "group" === t.type ? t.traverse(function (t) {
            "group" !== t.type && _(t, e)
        }) : _(t, e), t.on("mouseover", x).on("mouseout", w), t.on("emphasis", b).on("normal", S)
    }

    function M(t, e, n, i, r, a, o) {
        r = r || mt;
        var s = r.labelFetcher, l = r.labelDataIndex, h = r.labelDimIndex, u = n.getShallow("show"),
            c = i.getShallow("show"),
            f = u || c ? G.retrieve2(s ? s.getFormattedLabel(l, "normal", null, h) : null, r.defaultText) : null,
            d = u ? f : null, p = c ? G.retrieve2(s ? s.getFormattedLabel(l, "emphasis", null, h) : null, f) : null;
        null == d && null == p || (C(t, n, a, r), C(e, i, o, r, !0)), t.text = d, e.text = p
    }

    function C(t, e, n, i, r) {
        return I(t, e, i, r), n && G.extend(t, n), t.host && t.host.dirty && t.host.dirty(!1), t
    }

    function k(t, e, n) {
        var i, r = {isRectText: !0};
        !1 === n ? i = !0 : r.autoColor = n, I(t, e, r, i), t.host && t.host.dirty && t.host.dirty(!1)
    }

    function I(t, e, n, i) {
        if (n = n || mt, n.isRectText) {
            var r = e.getShallow("position") || (i ? null : "inside");
            "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
            var a = e.getShallow("rotate");
            null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = G.retrieve2(e.getShallow("distance"), i ? null : 5)
        }
        var o, s = e.ecModel, l = s && s.option.textStyle, h = P(e);
        if (h) {
            o = {};
            for (var u in h) if (h.hasOwnProperty(u)) {
                var c = e.getModel(["rich", u]);
                A(o[u] = {}, c, l, n, i)
            }
        }
        return t.rich = o, A(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
    }

    function P(t) {
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

    function A(t, e, n, i, r, a) {
        if (n = !r && n || mt, t.textFill = D(e.getShallow("color"), i) || n.color, t.textStroke = D(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = G.retrieve2(e.getShallow("textBorderWidth"), n.textBorderWidth), !r) {
            if (a) {
                var o = t.textPosition;
                t.insideRollback = L(t, o, i), t.insideOriginalTextPosition = o, t.insideRollbackOpt = i
            }
            null == t.textFill && (t.textFill = i.autoColor)
        }
        t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = D(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = D(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
    }

    function D(t, e) {
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
                l = i.getShallow("animationEasing" + o), h = i.getShallow("animationDelay" + o);
            "function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof s && (s = s(r)), s > 0 ? e.animateTo(n, s, h || 0, l, a, !!a) : (e.stopAnimation(), e.attr(n), a && a())
        } else e.stopAnimation(), e.attr(n), a && a()
    }

    function R(t, e, n, i, r) {
        z(!0, t, e, n, i, r)
    }

    function B(t, e, n, i, r) {
        z(!1, t, e, n, i, r)
    }

    function N(t, e) {
        for (var n = Y.identity([]); t && t !== e;) Y.mul(n, t.getLocalTransform(), n), t = t.parent;
        return n
    }

    function F(t, e, n) {
        return e && !G.isArrayLike(e) && (e = Q.getLocalTransform(e)), n && (e = Y.invert([], e)), $.applyTransform([], t, e)
    }

    function H(t, e, n) {
        var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
            r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
            a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
        return a = F(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
    }

    function V(t, e, n, i) {
        function r(t) {
            var e = {position: $.clone(t.position), rotation: t.rotation};
            return t.shape && (e.shape = G.extend({}, t.shape)), e
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
        return G.map(t, function (t) {
            var n = t[0];
            n = gt(n, e.x), n = vt(n, e.x + e.width);
            var i = t[1];
            return i = gt(i, e.y), i = vt(i, e.y + e.height), [n, i]
        })
    }

    function q(t, e) {
        var n = gt(t.x, e.x), i = vt(t.x + t.width, e.x + e.width), r = gt(t.y, e.y),
            a = vt(t.y + t.height, e.y + e.height);
        if (i >= n && a >= r) return {x: n, y: r, width: i - n, height: a - r}
    }

    function j(t, e, n) {
        e = G.extend({rectHover: !0}, e);
        var i = e.style = {strokeNoScale: !0};
        if (n = n || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, t) return 0 === t.indexOf("image://") ? (i.image = t.slice(8), G.defaults(i, n), new K(e)) : a(t.replace("path://", ""), e, n, "center")
    }

    var G = n(208), X = n(342), U = n(234), Y = n(231), $ = n(213), Z = n(215), Q = n(274), K = n(268);
    e.Image = K;
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
    var ht = n(331);
    e.Arc = ht;
    var ut = n(324);
    e.CompoundPath = ut;
    var ct = n(325);
    e.LinearGradient = ct;
    var ft = n(326);
    e.RadialGradient = ft;
    var dt = n(222);
    e.BoundingRect = dt;
    var pt = Math.round, gt = Math.max, vt = Math.min, mt = {}, yt = X.mergePath;
    e.extendShape = i, e.extendPath = r, e.makePath = a, e.makeImage = o, e.mergePath = yt, e.resizePath = l, e.subPixelOptimizeLine = h, e.subPixelOptimizeRect = u, e.subPixelOptimize = c, e.setHoverStyle = T, e.setLabelStyle = M, e.setTextStyle = C, e.setText = k, e.getFont = E, e.updateProps = R, e.initProps = B, e.getTransform = N, e.applyTransform = F, e.transformDirection = H, e.groupTransition = V, e.clipPointsByRect = W, e.clipRectByRect = q, e.createIcon = j
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
        return T(t) && !(t instanceof Array)
    }

    function s(t, e) {
        var n = e && e.type;
        return "ordinal" === n ? t : ("time" === n && "number" != typeof t && null != t && "-" !== t && (t = +w.parseDate(t)), null == t || "" === t ? NaN : +t)
    }

    function l(t, e) {
        var n = new b;
        return _.mixin(n, C), n.seriesIndex = e.seriesIndex, n.name = e.name || "", n.mainType = e.mainType, n.subType = e.subType, n.getData = function () {
            return t
        }, n
    }

    function h(t, e) {
        e = (e || []).slice();
        var n = _.map(t || [], function (t, e) {
            return {exist: t}
        });
        return S(e, function (t, i) {
            if (T(t)) {
                for (var r = 0; r < n.length; r++) if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void (e[i] = null);
                for (var r = 0; r < n.length; r++) {
                    var a = n[r].exist;
                    if (!(n[r].option || null != a.id && null != t.id || null == t.name || c(t) || c(a) || a.name !== t.name + "")) return n[r].option = t, void (e[i] = null)
                }
            }
        }), S(e, function (t, e) {
            if (T(t)) {
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

    function u(t) {
        var e = _.createHashMap();
        S(t, function (t, n) {
            var i = t.exist;
            i && e.set(i.id, t)
        }), S(t, function (t, n) {
            var i = t.option;
            _.assert(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {})
        }), S(t, function (t, n) {
            var i = t.exist, r = t.option, a = t.keyInfo;
            if (T(r)) {
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
        return T(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
    }

    function f(t, e) {
        function n(t, e, n) {
            for (var r = 0, a = t.length; r < a; r++) for (var o = t[r].seriesId, s = i(t[r].dataIndex), l = n && n[o], h = 0, u = s.length; h < u; h++) {
                var c = s[h];
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

    function d(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _.isArray(e.dataIndex) ? _.map(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _.isArray(e.name) ? _.map(e.name, function (e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }

    function p(t, e, n) {
        if (_.isString(e)) {
            var i = {};
            i[e + "Index"] = 0, e = i
        }
        var r = n && n.defaultMainType;
        !r || y(e, r + "Index") || y(e, r + "Id") || y(e, r + "Name") || (e[r + "Index"] = 0);
        var a = {};
        return S(e, function (i, r) {
            var i = e[r];
            if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = i);
            var o = r.match(/^(\w+)(Index|Id|Name)$/) || [], s = o[1], l = (o[2] || "").toLowerCase();
            if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && _.indexOf(n.includeMainTypes, s) < 0)) {
                var h = {mainType: s};
                "index" === l && "all" === i || (h[l] = i);
                var u = t.queryComponents(h);
                a[s + "Models"] = u, a[s + "Model"] = u[0]
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

    function y(t, e) {
        return t && t.hasOwnProperty(e)
    }

    var _ = n(208), x = n(223), w = n(212), b = n(224), S = _.each, T = _.isObject,
        M = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
        C = {
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
                    marker: x.getTooltipMarker(s),
                    $vars: ["seriesName", "name", "value"]
                }
            }, getFormattedLabel: function (t, e, n, i, r) {
                e = e || "normal";
                var a = this.getData(n), o = a.getItemModel(t), s = this.getDataParams(t, n);
                null != i && s.value instanceof Array && (s.value = s.value[i]);
                var l = o.get([r || "label", e, "formatter"]);
                return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? x.formatTpl(l, s) : void 0
            }, getRawValue: function (t, e) {
                var n = this.getData(e), i = n.getRawDataItem(t);
                if (null != i) return !T(i) || i instanceof Array ? i : i.value
            }, formatTooltip: _.noop
        }, k = function () {
            var t = 0;
            return function () {
                var e = "\0__ec_prop_getter_" + t++;
                return function (t) {
                    return t[e] || (t[e] = {})
                }
            }
        }();
    e.normalizeToArray = i, e.defaultEmphasis = r, e.TEXT_STYLE_OPTIONS = M, e.getDataItemValue = a, e.isDataItemOption = o, e.converDataValue = s, e.createDataFormatModel = l, e.dataFormatMixin = C, e.mappingToExists = h, e.makeIdAndName = u, e.isIdInner = c, e.compressBatches = f, e.queryDataIndex = d, e.makeGetter = k, e.parseFinder = p, e.dataDimToCoordDim = g, e.coordDimToDataDim = v, e.otherDimToDataDim = m
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

    function h(t) {
        var e = t.toString(), n = e.indexOf("e");
        if (n > 0) {
            var i = +e.slice(n + 1);
            return i < 0 ? -i : 0
        }
        var r = e.indexOf(".");
        return r < 0 ? 0 : e.length - 1 - r
    }

    function u(t, e) {
        var n = Math.log, i = Math.LN10, r = Math.floor(n(t[1] - t[0]) / i),
            a = Math.round(n(Math.abs(e[1] - e[0])) / i), o = Math.min(Math.max(-r + a, 0), 20);
        return isFinite(o) ? o : 20
    }

    function c(t, e, n) {
        if (!t[e]) return 0;
        var i = x.reduce(t, function (t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === i) return 0;
        for (var r = Math.pow(10, n), a = x.map(t, function (t) {
            return (isNaN(t) ? 0 : t) / i * r * 100
        }), o = 100 * r, s = x.map(a, function (t) {
            return Math.floor(t)
        }), l = x.reduce(s, function (t, e) {
            return t + e
        }, 0), h = x.map(a, function (t, e) {
            return t - s[e]
        }); l < o;) {
            for (var u = Number.NEGATIVE_INFINITY, c = null, f = 0, d = h.length; f < d; ++f) h[f] > u && (u = h[f], c = f);
            ++s[c], h[c] = 0, ++l
        }
        return s[e] / r
    }

    function f(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }

    function d(t) {
        return t > -w && t < w
    }

    function p(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = b.exec(t);
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

    function y(t) {
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

    function _(t) {
        return t - parseFloat(t) >= 0
    }

    var x = n(208), w = 1e-4,
        b = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
    e.linearMap = r, e.parsePercent = a, e.round = o, e.asc = s, e.getPrecision = l, e.getPrecisionSafe = h, e.getPixelPrecision = u, e.getPercentWithPrecision = c, e.MAX_SAFE_INTEGER = 9007199254740991, e.remRadian = f, e.isRadianAroundZero = d, e.parseDate = p, e.quantity = g, e.nice = m, e.reformIntervals = y, e.isNumeric = _
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

    function h(t) {
        return Math.sqrt(u(t))
    }

    function u(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function c(t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
    }

    function f(t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
    }

    function d(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function p(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
    }

    function g(t, e) {
        var n = h(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
    }

    function v(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function m(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    function y(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }

    function _(t, e, n, i) {
        return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
    }

    function x(t, e, n) {
        var i = e[0], r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
    }

    function w(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }

    function b(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }

    var S = "undefined" == typeof Float32Array ? Array : Float32Array, T = h, M = u, C = v, k = m;
    e.create = n, e.copy = i, e.clone = r, e.set = a, e.add = o, e.scaleAndAdd = s, e.sub = l, e.len = h, e.length = T, e.lenSquare = u, e.lengthSquare = M, e.mul = c, e.div = f, e.dot = d, e.scale = p, e.normalize = g, e.distance = v, e.dist = C, e.distanceSquare = m, e.distSquare = k, e.negate = y, e.lerp = _, e.applyTransform = x, e.min = w, e.max = b
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

    var r = n(246), a = n(208), o = n(238), s = n(319), l = n(269), h = l.prototype.getCanvasPattern, u = Math.abs,
        c = new o(!0);
    i.prototype = {
        constructor: i, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function (t, e) {
            var n = this.style, i = this.path || c, r = n.hasStroke(), a = n.hasFill(), o = n.fill, s = n.stroke,
                l = a && !!o.colorStops, u = r && !!s.colorStops, f = a && !!o.image, d = r && !!s.image;
            if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var p;
                l && (p = p || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, p)), u && (p = p || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, p))
            }
            l ? t.fillStyle = this._fillGradient : f && (t.fillStyle = h.call(o, t)), u ? t.strokeStyle = this._strokeGradient : d && (t.strokeStyle = h.call(s, t));
            var g = n.lineDash, v = n.lineDashOffset, m = !!t.setLineDash, y = this.getGlobalScale();
            i.setScale(y[0], y[1]), this.__dirtyPath || g && !m && r ? (i.beginPath(t), g && !m && (i.setLineDash(g), i.setLineDashOffset(v)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a && i.fill(t), g && m && (t.setLineDash(g), t.lineDashOffset = v), r && i.stroke(t), g && m && t.setLineDash([]), this.restoreTransform(t), null != n.text && this.drawRectText(t, this.getBoundingRect())
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
            return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10 ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1])) : 1
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
    var f = i;
    t.exports = f
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
    var i = n(51), r = n.n(i), a = n(50), o = n.n(a), s = n(52), l = n.n(s), h = n(88), u = n(89), c = n(90), f = n(30);
    e.default = {
        data: function () {
            return {baseImgPath: u.b}
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
                                return i.next = 7, n.i(h.b)();
                            case 7:
                                a = i.sent, 1 == a.status ? (e.$message({
                                    type: "success",
                                    message: "退出成功"
                                }), n.i(f.b)("isLogin", !1), e.$router.push("/")) : e.$message({
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
                    var a = l(t[0], e[0], n[0], i[0]), h = l(t[1], e[1], n[1], i[1]);
                    this.width = a - this.x, this.height = h - this.y
                }
            }
        }(), calculateTransform: function (t) {
            var e = this, n = t.width / e.width, i = t.height / e.height, r = a.create();
            return a.translate(r, r, [-e.x, -e.y]), a.scale(r, r, [n, i]), a.translate(r, r, [t.x, t.y]), r
        }, intersect: function (t) {
            if (!t) return !1;
            t instanceof i || (t = i.create(t));
            var e = this, n = e.x, r = e.x + e.width, a = e.y, o = e.y + e.height, s = t.x, l = t.x + t.width, h = t.y,
                u = t.y + t.height;
            return !(r < s || l < n || o < h || u < a)
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
    var h = i;
    t.exports = h
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
        for (var h = 0; h < i; h++) for (var u = 0; u < r.length; u++) {
            var l = e[h][r[u]];
            t = t.replace(v(g[u], h), n ? a(l) : l)
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

    function h(t, e, n) {
        "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
        var i = d.parseDate(e), r = n ? "UTC" : "", a = i["get" + r + "FullYear"](), o = i["get" + r + "Month"]() + 1,
            s = i["get" + r + "Date"](), l = i["get" + r + "Hours"](), h = i["get" + r + "Minutes"](),
            u = i["get" + r + "Seconds"]();
        return t = t.replace("MM", m(o)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", m(s)).replace("d", s).replace("hh", m(l)).replace("h", l).replace("mm", m(h)).replace("m", h).replace("ss", m(u)).replace("s", u)
    }

    function u(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }

    var c = n(208), f = n(228), d = n(212), p = c.normalizeCssArray, g = ["a", "b", "c", "d", "e", "f", "g"],
        v = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        }, m = function (t) {
            return t < 10 ? "0" + t : t
        }, y = f.truncateText, _ = f.getBoundingRect;
    e.addCommas = i, e.toCamelCase = r, e.normalizeCssArray = p, e.encodeHTML = a, e.formatTpl = o, e.formatTplSimple = s, e.getTooltipMarker = l, e.formatTime = h, e.capitalFirst = u, e.truncateText = y, e.getTextRect = _
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

    var o = n(208), s = n(216), l = n(225), h = n(301), u = n(298), c = n(302), f = n(300), d = o.mixin;
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
    }, l.enableClassExtend(i), d(i, h), d(i, u), d(i, c), d(i, f);
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
            return p.extend(n.prototype, t), n.extend = this.extend, n.superCall = h, n.superApply = u, p.inherits(n, this), n.superClass = e, n
        }
    }

    function h(t, e) {
        var n = p.slice(arguments, 2);
        return this.superClass.prototype[e].apply(t, n)
    }

    function u(t, e, n) {
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

    function f(t, e) {
    }

    var d = n(214), p = (d.__DEV__, n(208)), g = ".", v = "___EC__COMPONENT__CONTAINER___", m = "\0ec_\0";
    e.set = i, e.get = r, e.hasOwn = a, e.parseClassType = o, e.enableClassExtend = l, e.enableClassManagement = c, e.setReadOnly = f
}, function (t, e, n) {
    function i(t) {
        var e = [];
        return r.each(c.getClassesByMainType(t), function (t) {
            u.apply(e, t.prototype.dependencies || [])
        }), r.map(e, function (t) {
            return s.parseClassType(t).main
        })
    }

    var r = n(208), a = n(224), o = n(243), s = n(225), l = n(227), h = n(299), u = Array.prototype.push, c = a.extend({
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
    s.enableClassManagement(c, {registerWhenExtend: !0}), o.enableSubTypeDefaulter(c), o.enableTopologicalTravel(c, i), r.mixin(c, h);
    var f = c;
    t.exports = f
}, function (t, e, n) {
    function i(t, e, n, i, r) {
        var a = 0, o = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function (l, h) {
            var u, c, f = l.position, d = l.getBoundingRect(), p = e.childAt(h + 1), g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var v = d.width + (g ? -g.x + d.x : 0);
                u = a + v, u > i || l.newline ? (a = 0, u = v, o += s + n, s = d.height) : s = Math.max(s, d.height)
            } else {
                var m = d.height + (g ? -g.y + d.y : 0);
                c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = d.width) : s = Math.max(s, d.width)
            }
            l.newline || (f[0] = a, f[1] = o, "horizontal" === t ? a = u + n : o = c + n)
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
            h = p(t.width, i), u = p(t.height, r), c = n[2] + n[0], d = n[1] + n[3], v = t.aspect;
        switch (isNaN(h) && (h = i - s - d - a), isNaN(u) && (u = r - l - c - o), null != v && (isNaN(h) && isNaN(u) && (v > i / r ? h = .8 * i : u = .8 * r), isNaN(h) && (h = v * u), isNaN(u) && (u = h / v)), isNaN(a) && (a = i - s - h - d), isNaN(o) && (o = r - l - u - c), t.left || t.right) {
            case"center":
                a = i / 2 - h / 2 - n[3];
                break;
            case"right":
                a = i - h - d
        }
        switch (t.top || t.bottom) {
            case"middle":
            case"center":
                o = r / 2 - u / 2 - n[0];
                break;
            case"bottom":
                o = r - u - c
        }
        a = a || 0, o = o || 0, isNaN(h) && (h = i - d - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));
        var m = new f(a + n[3], o + n[0], h, u);
        return m.margin = n, m
    }

    function o(t, e, n, i, r) {
        var o = !r || !r.hv || r.hv[0], s = !r || !r.hv || r.hv[1], l = r && r.boundingMode || "all";
        if (o || s) {
            var h;
            if ("raw" === l) h = "group" === t.type ? new f(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect(); else if (h = t.getBoundingRect(), t.needLocalTransform()) {
                var u = t.getLocalTransform();
                h = h.clone(), h.applyTransform(u)
            }
            e = a(c.defaults({width: h.width, height: h.height}, e), n, i);
            var d = t.position, p = o ? e.x - h.x : 0, g = s ? e.y - h.y : 0;
            t.attr("position", "raw" === l ? [p, g] : [d[0] + p, d[1] + g])
        }
    }

    function s(t, e) {
        return null != t[y[e][0]] || null != t[y[e][1]] && null != t[y[e][2]]
    }

    function l(t, e, n) {
        function i(n, i) {
            var o = {}, l = 0, h = {}, u = 0;
            if (v(n, function (e) {
                h[e] = t[e]
            }), v(n, function (t) {
                r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++
            }), s[i]) return a(e, n[1]) ? h[n[2]] = null : a(e, n[2]) && (h[n[1]] = null), h;
            if (2 !== u && l) {
                if (l >= 2) return o;
                for (var c = 0; c < n.length; c++) {
                    var f = n[c];
                    if (!r(o, f) && r(t, f)) {
                        o[f] = t[f];
                        break
                    }
                }
                return o
            }
            return h
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
        var l = i(y[0], 0), h = i(y[1], 1);
        o(y[0], t, l), o(y[1], t, h)
    }

    function h(t) {
        return u({}, t)
    }

    function u(t, e) {
        return e && t && v(m, function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t
    }

    var c = n(208), f = n(222), d = n(212), p = d.parsePercent, g = n(223), v = c.each,
        m = ["left", "right", "top", "bottom", "width", "height"],
        y = [["width", "left", "right"], ["height", "top", "bottom"]], _ = i, x = c.curry(i, "vertical"),
        w = c.curry(i, "horizontal");
    e.LOCATION_PARAMS = m, e.HV_NAMES = y, e.box = _, e.vbox = x, e.hbox = w, e.getAvailableSize = r, e.getLayoutRect = a, e.positionElement = o, e.sizeCalculable = s, e.mergeLayoutParam = l, e.getLayoutParams = h, e.copyLayoutParams = u
}, function (t, e, n) {
    function i(t, e) {
        O[t] = e
    }

    function r(t, e) {
        e = e || L;
        var n = t + ":" + e;
        if (I[n]) return I[n];
        for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; a < o; a++) r = Math.max(v(i[a], e).width, r);
        return P > A && (P = 0, I = {}), P++, I[n] = r, r
    }

    function a(t, e, n, i, r, a, l) {
        return a ? s(t, e, n, i, r, a, l) : o(t, e, n, i, r, l)
    }

    function o(t, e, n, i, a, o) {
        var s = m(t, e, a, o), u = r(t, e);
        a && (u += a[1] + a[3]);
        var c = s.outerHeight, f = l(0, u, n), d = h(0, c, i), p = new w(f, d, u, c);
        return p.lineHeight = s.lineHeight, p
    }

    function s(t, e, n, i, r, a, o) {
        var s = y(t, {rich: a, truncate: o, font: e, textAlign: n, textPadding: r}), u = s.outerWidth,
            c = s.outerHeight, f = l(0, u, n), d = h(0, c, i);
        return new w(f, d, u, c)
    }

    function l(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
    }

    function h(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
    }

    function u(t, e, n) {
        var i = e.x, r = e.y, a = e.height, o = e.width, s = a / 2, l = "left", h = "top";
        switch (t) {
            case"left":
                i -= n, r += s, l = "right", h = "middle";
                break;
            case"right":
                i += n + o, r += s, h = "middle";
                break;
            case"top":
                i += o / 2, r -= n, l = "center", h = "bottom";
                break;
            case"bottom":
                i += o / 2, r += a + n, l = "center";
                break;
            case"inside":
                i += o / 2, r += s, l = "center", h = "middle";
                break;
            case"insideLeft":
                i += n, r += s, h = "middle";
                break;
            case"insideRight":
                i += o - n, r += s, l = "right", h = "middle";
                break;
            case"insideTop":
                i += o / 2, r += n, l = "center";
                break;
            case"insideBottom":
                i += o / 2, r += a - n, l = "center", h = "bottom";
                break;
            case"insideTopLeft":
                i += n, r += n;
                break;
            case"insideTopRight":
                i += o - n, r += n, l = "right";
                break;
            case"insideBottomLeft":
                i += n, r += a - n, h = "bottom";
                break;
            case"insideBottomRight":
                i += o - n, r += a - n, l = "right", h = "bottom"
        }
        return {x: i, y: r, textAlign: l, textVerticalAlign: h}
    }

    function c(t, e, n, i, r) {
        if (!e) return "";
        var a = (t + "").split("\n");
        r = f(e, n, i, r);
        for (var o = 0, s = a.length; o < s; o++) a[o] = d(a[o], r);
        return a.join("\n")
    }

    function f(t, e, n, i) {
        i = M({}, i), i.font = e;
        var n = C(n, "...");
        i.maxIterations = C(i.maxIterations, 2);
        var a = i.minChar = C(i.minChar, 0);
        i.cnCharWidth = r("国", e);
        var o = i.ascCharWidth = r("a", e);
        i.placeholder = C(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; l < a && s >= o; l++) s -= o;
        var h = r(n);
        return h > s && (n = "", h = 0), s = t - h, i.ellipsis = n, i.ellipsisWidth = h, i.contentWidth = s, i.containerWidth = t, i
    }

    function d(t, e) {
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
            var l = i.outerHeight, h = i.outerWidth;
            if (null != l && s > l) t = "", a = []; else if (null != h) for (var u = f(h - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
                minChar: i.minChar,
                placeholder: i.placeholder
            }), c = 0, p = a.length; c < p; c++) a[c] = d(a[c], u)
        }
        return {lines: a, height: o, outerHeight: s, lineHeight: r}
    }

    function y(t, e) {
        var n = {lines: [], width: 0, height: 0};
        if (null != t && (t += ""), !t) return n;
        for (var i, a = D.lastIndex = 0; null != (i = D.exec(t));) {
            var o = i.index;
            o > a && _(n, t.substring(a, o)), _(n, i[2], i[1]), a = D.lastIndex
        }
        a < t.length && _(n, t.substring(a, t.length));
        var s = n.lines, l = 0, h = 0, u = [], f = e.textPadding, d = e.truncate, p = d && d.outerWidth,
            v = d && d.outerHeight;
        f && (null != p && (p -= f[1] + f[3]), null != v && (v -= f[0] + f[2]));
        for (var m = 0; m < s.length; m++) {
            for (var y = s[m], x = 0, w = 0, S = 0; S < y.tokens.length; S++) {
                var T = y.tokens[S], M = T.styleName && e.rich[T.styleName] || {}, I = T.textPadding = M.textPadding,
                    P = T.font = M.font || e.font, A = T.textHeight = C(M.textHeight, g(P));
                if (I && (A += I[0] + I[2]), T.height = A, T.lineHeight = k(M.textLineHeight, e.textLineHeight, A), T.textAlign = M && M.textAlign || e.textAlign, T.textVerticalAlign = M && M.textVerticalAlign || "middle", null != v && l + T.lineHeight > v) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                T.textWidth = r(T.text, P);
                var L = M.textWidth, O = null == L || "auto" === L;
                if ("string" == typeof L && "%" === L.charAt(L.length - 1)) T.percentWidth = L, u.push(T), L = 0; else {
                    if (O) {
                        L = T.textWidth;
                        var E = M.textBackgroundColor, z = E && E.image;
                        z && (z = b.findExistImage(z), b.isImageReady(z) && (L = Math.max(L, z.width * A / z.height)))
                    }
                    var R = I ? I[1] + I[3] : 0;
                    L += R;
                    var B = null != p ? p - w : null;
                    null != B && B < L && (!O || B < R ? (T.text = "", T.textWidth = L = 0) : (T.text = c(T.text, B - R, P, d.ellipsis, {minChar: d.minChar}), T.textWidth = r(T.text, P), L = T.textWidth + R))
                }
                w += T.width = L, M && (x = Math.max(x, T.lineHeight))
            }
            y.width = w, y.lineHeight = x, l += x, h = Math.max(h, w)
        }
        n.outerWidth = n.width = C(e.textWidth, h), n.outerHeight = n.height = C(e.textHeight, l), f && (n.outerWidth += f[1] + f[3], n.outerHeight += f[0] + f[2]);
        for (var m = 0; m < u.length; m++) {
            var T = u[m], N = T.percentWidth;
            T.width = parseInt(N, 10) / 100 * h
        }
        return n
    }

    function _(t, e, n) {
        for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o], l = {styleName: n, text: s, isLineHolder: !s && !i};
            if (o) a.push({tokens: [l]}); else {
                var h = (a[a.length - 1] || (a[0] = {tokens: []})).tokens, u = h.length;
                1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || i) && h.push(l)
            }
        }
    }

    function x(t) {
        return (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ") || t.textFont || t.font
    }

    var w = n(222), b = n(248), S = n(208), T = S.getContext, M = S.extend, C = S.retrieve2, k = S.retrieve3, I = {},
        P = 0, A = 5e3, D = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, L = "12px sans-serif", O = {};
    O.measureText = function (t, e) {
        var n = T();
        return n.font = e || L, n.measureText(t)
    }, e.DEFAULT_FONT = L, e.$override = i, e.getWidth = r, e.getBoundingRect = a, e.adjustTextX = l, e.adjustTextY = h, e.adjustTextPositionOnRect = u, e.truncateText = c, e.getLineHeight = g, e.measureText = v, e.parsePlainText = m, e.parseRichText = y, e.makeFont = x
}, function (t, e, n) {
    function i(t) {
        return t > -b && t < b
    }

    function r(t) {
        return t > b || t < -b
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
        var s = r + 3 * (e - n) - t, l = 3 * (n - 2 * e + t), h = 3 * (e - t), u = t - a, c = l * l - 3 * s * h,
            f = l * h - 9 * s * u, d = h * h - 3 * l * u, p = 0;
        if (i(c) && i(f)) if (i(l)) o[0] = 0; else {
            var g = -h / l;
            g >= 0 && g <= 1 && (o[p++] = g)
        } else {
            var v = f * f - 4 * c * d;
            if (i(v)) {
                var m = f / c, g = -l / s + m, y = -m / 2;
                g >= 0 && g <= 1 && (o[p++] = g), y >= 0 && y <= 1 && (o[p++] = y)
            } else if (v > 0) {
                var _ = w(v), b = c * l + 1.5 * s * (-f + _), S = c * l + 1.5 * s * (-f - _);
                b = b < 0 ? -x(-b, M) : x(b, M), S = S < 0 ? -x(-S, M) : x(S, M);
                var g = (-l - (b + S)) / (3 * s);
                g >= 0 && g <= 1 && (o[p++] = g)
            } else {
                var C = (2 * c * l - 3 * s * f) / (2 * w(c * c * c)), k = Math.acos(C) / 3, I = w(c), P = Math.cos(k),
                    g = (-l - 2 * I * P) / (3 * s), y = (-l + I * (P + T * Math.sin(k))) / (3 * s),
                    A = (-l + I * (P - T * Math.sin(k))) / (3 * s);
                g >= 0 && g <= 1 && (o[p++] = g), y >= 0 && y <= 1 && (o[p++] = y), A >= 0 && A <= 1 && (o[p++] = A)
            }
        }
        return p
    }

    function l(t, e, n, a, o) {
        var s = 6 * n - 12 * e + 6 * t, l = 9 * e + 3 * a - 3 * t - 9 * n, h = 3 * e - 3 * t, u = 0;
        if (i(l)) {
            if (r(s)) {
                var c = -h / s;
                c >= 0 && c <= 1 && (o[u++] = c)
            }
        } else {
            var f = s * s - 4 * l * h;
            if (i(f)) o[0] = -s / (2 * l); else if (f > 0) {
                var d = w(f), c = (-s + d) / (2 * l), p = (-s - d) / (2 * l);
                c >= 0 && c <= 1 && (o[u++] = c), p >= 0 && p <= 1 && (o[u++] = p)
            }
        }
        return u
    }

    function h(t, e, n, i, r, a) {
        var o = (e - t) * r + t, s = (n - e) * r + e, l = (i - n) * r + n, h = (s - o) * r + o, u = (l - s) * r + s,
            c = (u - h) * r + h;
        a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = i
    }

    function u(t, e, n, i, r, o, s, l, h, u, c) {
        var f, d, p, g, v, m = .005, y = 1 / 0;
        C[0] = h, C[1] = u;
        for (var x = 0; x < 1; x += .05) k[0] = a(t, n, r, s, x), k[1] = a(e, i, o, l, x), (g = _(C, k)) < y && (f = x, y = g);
        y = 1 / 0;
        for (var b = 0; b < 32 && !(m < S); b++) d = f - m, p = f + m, k[0] = a(t, n, r, s, d), k[1] = a(e, i, o, l, d), g = _(k, C), d >= 0 && g < y ? (f = d, y = g) : (I[0] = a(t, n, r, s, p), I[1] = a(e, i, o, l, p), v = _(I, C), p <= 1 && v < y ? (f = p, y = v) : m *= .5);
        return c && (c[0] = a(t, n, r, s, f), c[1] = a(e, i, o, l, f)), w(y)
    }

    function c(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n
    }

    function f(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e))
    }

    function d(t, e, n, a, o) {
        var s = t - 2 * e + n, l = 2 * (e - t), h = t - a, u = 0;
        if (i(s)) {
            if (r(l)) {
                var c = -h / l;
                c >= 0 && c <= 1 && (o[u++] = c)
            }
        } else {
            var f = l * l - 4 * s * h;
            if (i(f)) {
                var c = -l / (2 * s);
                c >= 0 && c <= 1 && (o[u++] = c)
            } else if (f > 0) {
                var d = w(f), c = (-l + d) / (2 * s), p = (-l - d) / (2 * s);
                c >= 0 && c <= 1 && (o[u++] = c), p >= 0 && p <= 1 && (o[u++] = p)
            }
        }
        return u
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
        var h, u = .005, f = 1 / 0;
        C[0] = o, C[1] = s;
        for (var d = 0; d < 1; d += .05) {
            k[0] = c(t, n, r, d), k[1] = c(e, i, a, d);
            var p = _(C, k);
            p < f && (h = d, f = p)
        }
        f = 1 / 0;
        for (var g = 0; g < 32 && !(u < S); g++) {
            var v = h - u, m = h + u;
            k[0] = c(t, n, r, v), k[1] = c(e, i, a, v);
            var p = _(k, C);
            if (v >= 0 && p < f) h = v, f = p; else {
                I[0] = c(t, n, r, m), I[1] = c(e, i, a, m);
                var y = _(I, C);
                m <= 1 && y < f ? (h = m, f = y) : u *= .5
            }
        }
        return l && (l[0] = c(t, n, r, h), l[1] = c(e, i, a, h)), w(f)
    }

    var m = n(213), y = m.create, _ = m.distSquare, x = Math.pow, w = Math.sqrt, b = 1e-8, S = 1e-4, T = w(3),
        M = 1 / 3, C = y(), k = y(), I = y();
    e.cubicAt = a, e.cubicDerivativeAt = o, e.cubicRootAt = s, e.cubicExtrema = l, e.cubicSubdivide = h, e.cubicProjectPoint = u, e.quadraticAt = c, e.quadraticDerivativeAt = f, e.quadraticRootAt = d, e.quadraticExtremum = p, e.quadraticSubdivide = g, e.quadraticProjectPoint = v
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
        var t = new u(6);
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
        var i = e[0], r = e[2], a = e[4], o = e[1], s = e[3], l = e[5], h = Math.sin(n), u = Math.cos(n);
        return t[0] = i * u + o * h, t[1] = -i * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t
    }

    function l(t, e, n) {
        var i = n[0], r = n[1];
        return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
    }

    function h(t, e) {
        var n = e[0], i = e[2], r = e[4], a = e[1], o = e[3], s = e[5], l = n * o - a * i;
        return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null
    }

    var u = "undefined" == typeof Float32Array ? Array : Float32Array;
    e.create = n, e.identity = i, e.copy = r, e.mul = a, e.translate = o, e.rotate = s, e.scale = l, e.invert = h
}, function (t, e, n) {
    function i(t, e) {
        var n, i, r, a = t.type, o = e.getMin(), s = e.getMax(), l = null != o, h = null != s, u = t.getExtent();
        return "ordinal" === a ? n = (e.get("data") || []).length : (i = e.get("boundaryGap"), c.isArray(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = v.parsePercent(i[0], 1), i[1] = v.parsePercent(i[1], 1), r = u[1] - u[0] || Math.abs(u[0])), null == o && (o = "ordinal" === a ? n ? 0 : NaN : u[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : NaN : u[1] + i[1] * r), "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({
            min: u[0],
            max: u[1]
        })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
            min: u[0],
            max: u[1]
        })), (null == o || !isFinite(o)) && (o = NaN), (null == s || !isFinite(s)) && (s = NaN), t.setBlank(c.eqNaN(o) || c.eqNaN(s)), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), o < 0 && s < 0 && !h && (s = 0)), [o, s]
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
                return new d(t.getCategories(), [1 / 0, -1 / 0]);
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
        var a, o = 0, s = 0, l = (i - r) / 180 * Math.PI, h = 1;
        e.length > 40 && (h = Math.floor(e.length / 40));
        for (var u = 0; u < t.length; u += h) {
            var c = t[u], d = f.getBoundingRect(e[u], n, "center", "top");
            d.x += c * Math.cos(l), d.y += c * Math.sin(l), d.width *= 1.3, d.height *= 1.3, a ? a.intersect(d) ? (s++, o = Math.max(o, s)) : (a.union(d), s = 0) : a = d.clone()
        }
        return 0 === o && h > 1 ? h : (o + 1) * h - 1
    }

    function l(t, e) {
        var n = t.scale, i = n.getTicksLabels(), r = n.getTicks();
        return "string" == typeof e ? (e = function (t) {
            return function (e) {
                return t.replace("{value}", null != e ? e : "")
            }
        }(e), c.map(i, e)) : "function" == typeof e ? c.map(r, function (n, i) {
            return e(h(t, n), i)
        }, this) : i
    }

    function h(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
    }

    var u = n(214), c = (u.__DEV__, n(208)), f = n(228), d = n(306), p = n(242), g = n(235), v = n(212);
    n(307), n(305), e.getScaleExtent = i, e.niceScaleExtent = r, e.createScaleByModel = a, e.ifAxisCrossZero = o, e.getAxisLabelInterval = s, e.getFormattedLabels = l, e.getAxisRawValue = h
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
        return null == e.which && void 0 !== o && d.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
    }

    function s(t, e, n) {
        f ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
    }

    function l(t, e, n) {
        f ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
    }

    function h(t) {
        return t.which > 1
    }

    var u = n(230);
    e.Dispatcher = u;
    var c = n(216), f = "undefined" != typeof window && !!window.addEventListener,
        d = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, p = f ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        };
    e.clientToLocal = r, e.normalizeEvent = o, e.addEventListener = s, e.removeEventListener = l, e.stop = p, e.notLeftMouse = h
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

    function h(t, e, n) {
        return t + (e - t) * n
    }

    function u(t, e, n, i, r) {
        return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
    }

    function c(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function f(t, e) {
        C && c(C, e), C = M.put(t, C || e.slice())
    }

    function d(t, e) {
        if (t) {
            e = e || [];
            var n = M.get(t);
            if (n) return c(e, n);
            t += "";
            var i = t.replace(/ /g, "").toLowerCase();
            if (i in T) return c(e, T[i]), f(t, e), e;
            if ("#" !== i.charAt(0)) {
                var r = i.indexOf("("), a = i.indexOf(")");
                if (-1 !== r && a + 1 === i.length) {
                    var l = i.substr(0, r), h = i.substr(r + 1, a - (r + 1)).split(","), d = 1;
                    switch (l) {
                        case"rgba":
                            if (4 !== h.length) return void u(e, 0, 0, 0, 1);
                            d = s(h.pop());
                        case"rgb":
                            return 3 !== h.length ? void u(e, 0, 0, 0, 1) : (u(e, o(h[0]), o(h[1]), o(h[2]), d), f(t, e), e);
                        case"hsla":
                            return 4 !== h.length ? void u(e, 0, 0, 0, 1) : (h[3] = s(h[3]), p(h, e), f(t, e), e);
                        case"hsl":
                            return 3 !== h.length ? void u(e, 0, 0, 0, 1) : (p(h, e), f(t, e), e);
                        default:
                            return
                    }
                }
                u(e, 0, 0, 0, 1)
            } else {
                if (4 === i.length) {
                    var g = parseInt(i.substr(1), 16);
                    return g >= 0 && g <= 4095 ? (u(e, (3840 & g) >> 4 | (3840 & g) >> 8, 240 & g | (240 & g) >> 4, 15 & g | (15 & g) << 4, 1), f(t, e), e) : void u(e, 0, 0, 0, 1)
                }
                if (7 === i.length) {
                    var g = parseInt(i.substr(1), 16);
                    return g >= 0 && g <= 16777215 ? (u(e, (16711680 & g) >> 16, (65280 & g) >> 8, 255 & g, 1), f(t, e), e) : void u(e, 0, 0, 0, 1)
                }
            }
        }
    }

    function p(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360, r = s(t[1]), a = s(t[2]),
            o = a <= .5 ? a * (r + 1) : a + r - a * r, h = 2 * a - o;
        return e = e || [], u(e, i(255 * l(h, o, n + 1 / 3)), i(255 * l(h, o, n)), i(255 * l(h, o, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function g(t) {
        if (t) {
            var e, n, i = t[0] / 255, r = t[1] / 255, a = t[2] / 255, o = Math.min(i, r, a), s = Math.max(i, r, a),
                l = s - o, h = (s + o) / 2;
            if (0 === l) e = 0, n = 0; else {
                n = h < .5 ? l / (s + o) : l / (2 - s - o);
                var u = ((s - i) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, f = ((s - a) / 6 + l / 2) / l;
                i === s ? e = f - c : r === s ? e = 1 / 3 + u - f : a === s && (e = 2 / 3 + c - u), e < 0 && (e += 1), e > 1 && (e -= 1)
            }
            var d = [360 * e, n, h];
            return null != t[3] && d.push(t[3]), d
        }
    }

    function v(t, e) {
        var n = d(t);
        if (n) {
            for (var i = 0; i < 3; i++) n[i] = e < 0 ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0;
            return b(n, 4 === n.length ? "rgba" : "rgb")
        }
    }

    function m(t) {
        var e = d(t);
        if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
    }

    function y(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
            n = n || [];
            var r = t * (e.length - 1), o = Math.floor(r), s = Math.ceil(r), l = e[o], u = e[s], c = r - o;
            return n[0] = i(h(l[0], u[0], c)), n[1] = i(h(l[1], u[1], c)), n[2] = i(h(l[2], u[2], c)), n[3] = a(h(l[3], u[3], c)), n
        }
    }

    function _(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
            var r = t * (e.length - 1), o = Math.floor(r), s = Math.ceil(r), l = d(e[o]), u = d(e[s]), c = r - o,
                f = b([i(h(l[0], u[0], c)), i(h(l[1], u[1], c)), i(h(l[2], u[2], c)), a(h(l[3], u[3], c))], "rgba");
            return n ? {color: f, leftIndex: o, rightIndex: s, value: r} : f
        }
    }

    function x(t, e, n, i) {
        if (t = d(t)) return t = g(t), null != e && (t[0] = r(e)), null != n && (t[1] = s(n)), null != i && (t[2] = s(i)), b(p(t), "rgba")
    }

    function w(t, e) {
        if ((t = d(t)) && null != e) return t[3] = a(e), b(t, "rgba")
    }

    function b(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return "rgba" !== e && "hsva" !== e && "hsla" !== e || (n += "," + t[3]), e + "(" + n + ")"
        }
    }

    var S = n(264), T = {
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
    }, M = new S(20), C = null, k = y, I = _;
    e.parse = d, e.lift = v, e.toHex = m, e.fastLerp = y, e.fastMapToColor = k, e.lerp = _, e.mapToColor = I, e.modifyHSL = x, e.modifyAlpha = w, e.stringify = b
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
                    var l = s.getBoundingRect(), h = s.getLocalTransform(r);
                    h ? (n.copy(l), n.applyTransform(h), e = e || n.clone(), e.union(n)) : (e = e || l.clone(), e.union(l))
                }
            }
            return e || n
        }
    }, i.inherits(o, r);
    var s = o;
    t.exports = s
}, function (t, e, n) {
    var i = n(229), r = n(213), a = n(265), o = n(222), s = n(236), l = s.devicePixelRatio,
        h = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, u = [], c = [], f = [], d = [], p = Math.min, g = Math.max,
        v = Math.cos, m = Math.sin, y = Math.sqrt, _ = Math.abs, x = "undefined" != typeof Float32Array,
        w = function (t) {
            this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
        };
    w.prototype = {
        constructor: w,
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
            this._ux = _(1 / l / t) || 0, this._uy = _(1 / l / e) || 0
        },
        getContext: function () {
            return this._ctx
        },
        beginPath: function (t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
        },
        moveTo: function (t, e) {
            return this.addData(h.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
        },
        lineTo: function (t, e) {
            var n = _(t - this._xi) > this._ux || _(e - this._yi) > this._uy || this._len < 5;
            return this.addData(h.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
        },
        bezierCurveTo: function (t, e, n, i, r, a) {
            return this.addData(h.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this
        },
        quadraticCurveTo: function (t, e, n, i) {
            return this.addData(h.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
        },
        arc: function (t, e, n, i, r, a) {
            return this.addData(h.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = v(r) * n + t, this._yi = m(r) * n + t, this
        },
        arcTo: function (t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
        },
        rect: function (t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i), this.addData(h.R, t, e, n, i), this
        },
        closePath: function () {
            this.addData(h.Z);
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
            this.data && this.data.length == e || !x || (this.data = new Float32Array(e));
            for (var n = 0; n < e; n++) this.data[n] = t[n];
            this._len = e
        },
        appendPath: function (t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, n = 0, i = this._len, r = 0; r < e; r++) n += t[r].len();
            x && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
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
                h = this._yi, u = t - l, c = e - h, f = y(u * u + c * c), d = l, v = h, m = o.length;
            for (u /= f, c /= f, a < 0 && (a = r + a), a %= r, d -= a * u, v -= a * c; u > 0 && d <= t || u < 0 && d >= t || 0 == u && (c > 0 && v <= e || c < 0 && v >= e);) i = this._dashIdx, n = o[i], d += u * n, v += c * n, this._dashIdx = (i + 1) % m, u > 0 && d < l || u < 0 && d > l || c > 0 && v < h || c < 0 && v > h || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? p(d, t) : g(d, t), c >= 0 ? p(v, e) : g(v, e));
            u = d - t, c = v - e, this._dashOffset = -y(u * u + c * c)
        },
        _dashedBezierTo: function (t, e, n, r, a, o) {
            var s, l, h, u, c, f = this._dashSum, d = this._dashOffset, p = this._lineDash, g = this._ctx, v = this._xi,
                m = this._yi, _ = i.cubicAt, x = 0, w = this._dashIdx, b = p.length, S = 0;
            for (d < 0 && (d = f + d), d %= f, s = 0; s < 1; s += .1) l = _(v, t, n, a, s + .1) - _(v, t, n, a, s), h = _(m, e, r, o, s + .1) - _(m, e, r, o, s), x += y(l * l + h * h);
            for (; w < b && !((S += p[w]) > d); w++) ;
            for (s = (S - d) / x; s <= 1;) u = _(v, t, n, a, s), c = _(m, e, r, o, s), w % 2 ? g.moveTo(u, c) : g.lineTo(u, c), s += p[w] / x, w = (w + 1) % b;
            w % 2 != 0 && g.lineTo(a, o), l = a - u, h = o - c, this._dashOffset = -y(l * l + h * h)
        },
        _dashedQuadraticTo: function (t, e, n, i) {
            var r = n, a = i;
            n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a)
        },
        toStatic: function () {
            var t = this.data;
            t instanceof Array && (t.length = this._len, x && (this.data = new Float32Array(t)))
        },
        getBoundingRect: function () {
            u[0] = u[1] = f[0] = f[1] = Number.MAX_VALUE, c[0] = c[1] = d[0] = d[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, n = 0, i = 0, s = 0, l = 0; l < t.length;) {
                var p = t[l++];
                switch (1 == l && (e = t[l], n = t[l + 1], i = e, s = n), p) {
                    case h.M:
                        i = t[l++], s = t[l++], e = i, n = s, f[0] = i, f[1] = s, d[0] = i, d[1] = s;
                        break;
                    case h.L:
                        a.fromLine(e, n, t[l], t[l + 1], f, d), e = t[l++], n = t[l++];
                        break;
                    case h.C:
                        a.fromCubic(e, n, t[l++], t[l++], t[l++], t[l++], t[l], t[l + 1], f, d), e = t[l++], n = t[l++];
                        break;
                    case h.Q:
                        a.fromQuadratic(e, n, t[l++], t[l++], t[l], t[l + 1], f, d), e = t[l++], n = t[l++];
                        break;
                    case h.A:
                        var g = t[l++], y = t[l++], _ = t[l++], x = t[l++], w = t[l++], b = t[l++] + w,
                            S = (t[l++], 1 - t[l++]);
                        1 == l && (i = v(w) * _ + g, s = m(w) * x + y), a.fromArc(g, y, _, x, w, b, S, f, d), e = v(b) * _ + g, n = m(b) * x + y;
                        break;
                    case h.R:
                        i = e = t[l++], s = n = t[l++];
                        var T = t[l++], M = t[l++];
                        a.fromLine(i, s, i + T, s + M, f, d);
                        break;
                    case h.Z:
                        e = i, n = s
                }
                r.min(u, u, f), r.max(c, c, d)
            }
            return 0 === l && (u[0] = u[1] = c[0] = c[1] = 0), new o(u[0], u[1], c[0] - u[0], c[1] - u[1])
        },
        rebuildPath: function (t) {
            for (var e, n, i, r, a, o, s = this.data, l = this._ux, u = this._uy, c = this._len, f = 0; f < c;) {
                var d = s[f++];
                switch (1 == f && (i = s[f], r = s[f + 1], e = i, n = r), d) {
                    case h.M:
                        e = i = s[f++], n = r = s[f++], t.moveTo(i, r);
                        break;
                    case h.L:
                        a = s[f++], o = s[f++], (_(a - i) > l || _(o - r) > u || f === c - 1) && (t.lineTo(a, o), i = a, r = o);
                        break;
                    case h.C:
                        t.bezierCurveTo(s[f++], s[f++], s[f++], s[f++], s[f++], s[f++]), i = s[f - 2], r = s[f - 1];
                        break;
                    case h.Q:
                        t.quadraticCurveTo(s[f++], s[f++], s[f++], s[f++]), i = s[f - 2], r = s[f - 1];
                        break;
                    case h.A:
                        var p = s[f++], g = s[f++], y = s[f++], x = s[f++], w = s[f++], b = s[f++], S = s[f++],
                            T = s[f++], M = y > x ? y : x, C = y > x ? 1 : y / x, k = y > x ? x / y : 1,
                            I = Math.abs(y - x) > .001, P = w + b;
                        I ? (t.translate(p, g), t.rotate(S), t.scale(C, k), t.arc(0, 0, M, w, P, 1 - T), t.scale(1 / C, 1 / k), t.rotate(-S), t.translate(-p, -g)) : t.arc(p, g, M, w, P, 1 - T), 1 == f && (e = v(w) * y + p, n = m(w) * x + g), i = v(P) * y + p, r = m(P) * x + g;
                        break;
                    case h.R:
                        e = i = s[f], n = r = s[f + 1], t.rect(s[f++], s[f++], s[f++], s[f++]);
                        break;
                    case h.Z:
                        t.closePath(), i = e, r = n
                }
            }
        }
    }, w.CMD = h;
    var b = w;
    t.exports = b
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
}, , function (t, e, n) {
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
                var h = n[s], u = o[h];
                l.indexOf(e, h) >= 0 ? a[h] = new u.constructor(o[h].length) : a[h] = o[h]
            }
            return r
        }

        var s = n(214), l = (s.__DEV__, n(208)), h = n(224), u = n(253), c = n(211), f = l.isObject,
            d = "undefined" == typeof window ? e : window, p = {
                float: void 0 === d.Float64Array ? Array : d.Float64Array,
                int: void 0 === d.Int32Array ? Array : d.Int32Array,
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
            var i, a = this._storage = {}, o = this.indices = [], s = this.dimensions, h = this._dimensionInfos,
                u = t.count(), f = [], d = {};
            e = e || [];
            for (var g = 0; g < s.length; g++) {
                var v = h[s[g]];
                0 === v.otherDims.itemName && (i = g);
                var m = p[v.type];
                a[s[g]] = new m(u)
            }
            var y = this;
            n || (y.hasItemOption = !1), n = n || function (t, e, n, i) {
                var r = c.getDataItemValue(t);
                return c.isDataItemOption(t) && (y.hasItemOption = !0), c.converDataValue(r instanceof Array ? r[i] : r, h[e])
            };
            for (var g = 0; g < u; g++) {
                for (var _ = t.getItem(g), x = 0; x < s.length; x++) {
                    var w = s[x];
                    a[w][g] = n(_, w, g, x)
                }
                o.push(g)
            }
            for (var g = 0; g < u; g++) {
                var _ = t.getItem(g);
                !e[g] && _ && (null != _.name ? e[g] = _.name : null != i && (e[g] = a[s[i]][g]));
                var b = e[g] || "", S = _ && _.id;
                !S && b && (d[b] = d[b] || 0, S = b, d[b] > 0 && (S += "__ec__" + d[b]), d[b]++), S && (f[g] = S)
            }
            this._nameList = e, this._idList = f
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
                for (var s = 1 / 0, l = -1 / 0, h = 0, u = this.count(); h < u; h++) a = this.get(t, h, e), n && !n(a, t, h) || (a < s && (s = a), a > l && (l = a));
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
            for (var s = Number.MAX_VALUE, l = -1, h = 0, u = this.count(); h < u; h++) {
                var c = e - this.get(t, h, n), f = Math.abs(c);
                c <= i && f <= s && ((f < s || c >= 0 && l < 0) && (s = f, l = c, o.length = 0), o.push(h))
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
            for (var h = 0; h < s.length; h++) switch (o) {
                case 0:
                    e.call(i, h);
                    break;
                case 1:
                    e.call(i, this.get(t[0], h, n), h);
                    break;
                case 2:
                    e.call(i, this.get(t[0], h, n), this.get(t[1], h, n), h);
                    break;
                default:
                    for (var u = 0; u < o; u++) r[u] = this.get(t[u], h, n);
                    r[u] = h, e.apply(i, r)
            }
        }, m.filterSelf = function (t, e, n, i) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), t = l.map(a(t), this.getDimension, this);
            var r = [], o = [], s = t.length, h = this.indices;
            i = i || this;
            for (var u = 0; u < h.length; u++) {
                var c;
                if (s) if (1 === s) c = e.call(i, this.get(t[0], u, n), u); else {
                    for (var f = 0; f < s; f++) o[f] = this.get(t[f], u, n);
                    o[f] = u, c = e.apply(i, o)
                } else c = e.call(i, u);
                c && r.push(h[u])
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
            var r = o(this, t), s = r.indices = this.indices, h = r._storage, u = [];
            return this.each(t, function () {
                var n = arguments[arguments.length - 1], i = e && e.apply(this, arguments);
                if (null != i) {
                    "number" == typeof i && (u[0] = i, i = u);
                    for (var r = 0; r < i.length; r++) {
                        var a = t[r], o = h[a], l = s[n];
                        o && (o[l] = i[r])
                    }
                }
            }, n, i), r
        }, m.downSample = function (t, e, n, i) {
            for (var r = o(this, [t]), a = this._storage, s = r._storage, l = this.indices, h = r.indices = [], u = [], c = [], f = Math.floor(1 / e), d = s[t], p = this.count(), g = 0; g < a[t].length; g++) s[t][g] = a[t][g];
            for (var g = 0; g < p; g += f) {
                f > p - g && (f = p - g, u.length = f);
                for (var v = 0; v < f; v++) {
                    var m = l[g + v];
                    u[v] = d[m], c[v] = m
                }
                var y = n(u), m = c[i(u, y) || 0];
                d[m] = y, h.push(m)
            }
            return r
        }, m.getItemModel = function (t) {
            var e = this.hostModel;
            return t = this.indices[t], new h(this._rawData.getItem(t), e, e && e.ecModel)
        }, m.diff = function (t) {
            var e, n = this._idList, i = t && t._idList;
            return new u(t ? t.indices : [], this.indices, function (t) {
                return null != (e = i[t]) ? e : "e\0\0" + t
            }, function (t) {
                return null != (e = n[t]) ? e : "e\0\0" + t
            })
        }, m.getVisual = function (t) {
            var e = this._visual;
            return e && e[t]
        }, m.setVisual = function (t, e) {
            if (f(t)) for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]); else this._visual = this._visual || {}, this._visual[t] = e
        }, m.setLayout = function (t, e) {
            if (f(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]); else this._layout[t] = e
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
            if (this._itemVisuals[t] = i, f(e)) for (var r in e) e.hasOwnProperty(r) && (i[r] = e[r]); else i[e] = n
        }, m.clearAllVisual = function () {
            this._visual = {}, this._itemVisuals = []
        };
        var y = function (t) {
            t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
        };
        m.setItemGraphicEl = function (t, e) {
            var n = this.hostModel;
            e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(y, e)), this._graphicEls[t] = e
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
        var _ = v;
        t.exports = _
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
    var h = l;
    t.exports = h
}, function (t, e, n) {
    function i(t) {
        return [t || "", h++, Math.random()].join(u)
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
                var l = i(n, s), h = l.originalDeps = e(s), u = r(h, t);
                l.entryCount = u.length, 0 === l.entryCount && a.push(s), o.each(u, function (t) {
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
                0 === --h[t].entryCount && u.push(t)
            }

            function s(t) {
                c[t] = !0, a(t)
            }

            if (t.length) {
                var l = n(e), h = l.graph, u = l.noEntryList, c = {};
                for (o.each(t, function (t) {
                    c[t] = !0
                }); u.length;) {
                    var f = u.pop(), d = h[f], p = !!c[f];
                    p && (i.call(r, f, d.originalDeps.slice()), delete c[f]), o.each(d.successor, p ? s : a)
                }
                o.each(c, function () {
                    throw new Error("Circle dependency may exists")
                })
            }
        }
    }

    var o = n(208), s = n(225), l = s.parseClassType, h = 0, u = "_";
    e.getUID = i, e.enableSubTypeDefaulter = r, e.enableTopologicalTravel = a
}, function (t, e, n) {
    function i(t, e) {
        if ("image" !== this.type) {
            var n = this.style, i = this.shape;
            i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
        }
    }

    function r(t, e, n, r, a, l, h) {
        var u = 0 === t.indexOf("empty");
        u && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var c;
        return c = 0 === t.indexOf("image://") ? o.makeImage(t.slice(8), new s(e, n, r, a), h ? "center" : "cover") : 0 === t.indexOf("path://") ? o.makePath(t.slice(7), {}, new s(e, n, r, a), h ? "center" : "cover") : new g({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: r,
                height: a
            }
        }), c.__isEmptyBrush = u, c.setColor = i, c.setColor(l), c
    }

    var a = n(208), o = n(210), s = n(222), l = o.extendShape({
        type: "triangle", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, a = e.height / 2;
            t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath()
        }
    }), h = o.extendShape({
        type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, a = e.height / 2;
            t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath()
        }
    }), u = o.extendShape({
        type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.x, i = e.y, r = e.width / 5 * 3, a = Math.max(r, e.height), o = r / 2, s = o * o / (a - o),
                l = i - a + o + s, h = Math.asin(s / o), u = Math.cos(h) * o, c = Math.sin(h), f = Math.cos(h),
                d = .6 * o, p = .7 * o;
            t.moveTo(n - u, l + s), t.arc(n, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(n + u - c * d, l + s + f * d, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - u + c * d, l + s + f * d, n - u, l + s), t.closePath()
        }
    }), c = o.extendShape({
        type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.height, i = e.width, r = e.x, a = e.y, o = i / 3 * 2;
            t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath()
        }
    }), f = {
        line: o.Line,
        rect: o.Rect,
        roundRect: o.Rect,
        square: o.Rect,
        circle: o.Circle,
        diamond: h,
        pin: u,
        arrow: c,
        triangle: l
    }, d = {
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
    a.each(f, function (t, e) {
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
            "none" !== e.symbolType && (r || (i = "rect", r = p[i]), d[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n))
        }
    });
    e.createSymbol = r
}, function (t, e) {
    function n(t) {
        for (var e = 0; t >= u;) e |= 1 & t, t >>= 1;
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
            var h = i - s;
            switch (h) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; h > 0;) t[s + h] = t[s + h - 1], h--
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
            var h = o;
            o = r - l, l = r - h
        }
        for (o++; o < l;) {
            var u = o + (l - o >>> 1);
            a(t, e[n + u]) > 0 ? o = u + 1 : l = u
        }
        return l
    }

    function s(t, e, n, i, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[n + r]) < 0) {
            for (s = r + 1; l < s && a(t, e[n + r - l]) < 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s);
            var h = o;
            o = r - l, l = r - h
        } else {
            for (s = i - r; l < s && a(t, e[n + r + l]) >= 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s), o += r, l += r
        }
        for (o++; o < l;) {
            var u = o + (l - o >>> 1);
            a(t, e[n + u]) < 0 ? l = u : o = u + 1
        }
        return l
    }

    function l(t, e) {
        function n(t, e) {
            u[g] = t, f[g] = e, g += 1
        }

        function i() {
            for (; g > 1;) {
                var t = g - 2;
                if (t >= 1 && f[t - 1] <= f[t] + f[t + 1] || t >= 2 && f[t - 2] <= f[t] + f[t - 1]) f[t - 1] < f[t + 1] && t--; else if (f[t] > f[t + 1]) break;
                a(t)
            }
        }

        function r() {
            for (; g > 1;) {
                var t = g - 2;
                t > 0 && f[t - 1] < f[t + 1] && t--, a(t)
            }
        }

        function a(n) {
            var i = u[n], r = f[n], a = u[n + 1], c = f[n + 1];
            f[n] = r + c, n === g - 3 && (u[n + 1] = u[n + 2], f[n + 1] = f[n + 2]), g--;
            var d = s(t[a], t, i, r, 0, e);
            i += d, 0 !== (r -= d) && 0 !== (c = o(t[i + r - 1], t, a, c, c - 1, e)) && (r <= c ? l(i, r, a, c) : h(i, r, a, c))
        }

        function l(n, i, r, a) {
            var l = 0;
            for (l = 0; l < i; l++) v[l] = t[n + l];
            var h = 0, u = r, f = n;
            if (t[f++] = t[u++], 0 != --a) {
                if (1 === i) {
                    for (l = 0; l < a; l++) t[f + l] = t[u + l];
                    return void (t[f + a] = v[h])
                }
                for (var p, g, m, y = d; ;) {
                    p = 0, g = 0, m = !1;
                    do {
                        if (e(t[u], v[h]) < 0) {
                            if (t[f++] = t[u++], g++, p = 0, 0 == --a) {
                                m = !0;
                                break
                            }
                        } else if (t[f++] = v[h++], p++, g = 0, 1 == --i) {
                            m = !0;
                            break
                        }
                    } while ((p | g) < y);
                    if (m) break;
                    do {
                        if (0 !== (p = s(t[u], v, h, i, 0, e))) {
                            for (l = 0; l < p; l++) t[f + l] = v[h + l];
                            if (f += p, h += p, (i -= p) <= 1) {
                                m = !0;
                                break
                            }
                        }
                        if (t[f++] = t[u++], 0 == --a) {
                            m = !0;
                            break
                        }
                        if (0 !== (g = o(v[h], t, u, a, 0, e))) {
                            for (l = 0; l < g; l++) t[f + l] = t[u + l];
                            if (f += g, u += g, 0 === (a -= g)) {
                                m = !0;
                                break
                            }
                        }
                        if (t[f++] = v[h++], 1 == --i) {
                            m = !0;
                            break
                        }
                        y--
                    } while (p >= c || g >= c);
                    if (m) break;
                    y < 0 && (y = 0), y += 2
                }
                if (d = y, d < 1 && (d = 1), 1 === i) {
                    for (l = 0; l < a; l++) t[f + l] = t[u + l];
                    t[f + a] = v[h]
                } else {
                    if (0 === i) throw new Error;
                    for (l = 0; l < i; l++) t[f + l] = v[h + l]
                }
            } else for (l = 0; l < i; l++) t[f + l] = v[h + l]
        }

        function h(n, i, r, a) {
            var l = 0;
            for (l = 0; l < a; l++) v[l] = t[r + l];
            var h = n + i - 1, u = a - 1, f = r + a - 1, p = 0, g = 0;
            if (t[f--] = t[h--], 0 != --i) {
                if (1 === a) {
                    for (f -= i, h -= i, g = f + 1, p = h + 1, l = i - 1; l >= 0; l--) t[g + l] = t[p + l];
                    return void (t[f] = v[u])
                }
                for (var m = d; ;) {
                    var y = 0, _ = 0, x = !1;
                    do {
                        if (e(v[u], t[h]) < 0) {
                            if (t[f--] = t[h--], y++, _ = 0, 0 == --i) {
                                x = !0;
                                break
                            }
                        } else if (t[f--] = v[u--], _++, y = 0, 1 == --a) {
                            x = !0;
                            break
                        }
                    } while ((y | _) < m);
                    if (x) break;
                    do {
                        if (0 !== (y = i - s(v[u], t, n, i, i - 1, e))) {
                            for (f -= y, h -= y, i -= y, g = f + 1, p = h + 1, l = y - 1; l >= 0; l--) t[g + l] = t[p + l];
                            if (0 === i) {
                                x = !0;
                                break
                            }
                        }
                        if (t[f--] = v[u--], 1 == --a) {
                            x = !0;
                            break
                        }
                        if (0 !== (_ = a - o(t[h], v, 0, a, a - 1, e))) {
                            for (f -= _, u -= _, a -= _, g = f + 1, p = u + 1, l = 0; l < _; l++) t[g + l] = v[p + l];
                            if (a <= 1) {
                                x = !0;
                                break
                            }
                        }
                        if (t[f--] = t[h--], 0 == --i) {
                            x = !0;
                            break
                        }
                        m--
                    } while (y >= c || _ >= c);
                    if (x) break;
                    m < 0 && (m = 0), m += 2
                }
                if (d = m, d < 1 && (d = 1), 1 === a) {
                    for (f -= i, h -= i, g = f + 1, p = h + 1, l = i - 1; l >= 0; l--) t[g + l] = t[p + l];
                    t[f] = v[u]
                } else {
                    if (0 === a) throw new Error;
                    for (p = f - (a - 1), l = 0; l < a; l++) t[p + l] = v[l]
                }
            } else for (p = f - (a - 1), l = 0; l < a; l++) t[p + l] = v[l]
        }

        var u, f, d = c, p = 0, g = 0;
        p = t.length;
        var v = [];
        u = [], f = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n
    }

    function h(t, e, r, o) {
        r || (r = 0), o || (o = t.length);
        var s = o - r;
        if (!(s < 2)) {
            var h = 0;
            if (s < u) return h = i(t, r, o, e), void a(t, r, o, r + h, e);
            var c = new l(t, e), f = n(s);
            do {
                if ((h = i(t, r, o, e)) < f) {
                    var d = s;
                    d > f && (d = f), a(t, r, r + d, r + h, e), h = d
                }
                c.pushRun(r, h), c.mergeRuns(), s -= h, r += h
            } while (0 !== s);
            c.forceMergeRuns()
        }
    }

    var u = 32, c = 7;
    t.exports = h
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
                var s = l.get(t), h = {hostEl: n, cb: i, cbPayload: r};
                return s ? (e = s.image, !o(e) && s.pending.push(h)) : (!e && (e = new Image), e.onload = a, l.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [h]
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
        var d = (n.dimsDef || []).slice(), p = a.createHashMap(n.encodeDef), g = a.createHashMap(),
            v = a.createHashMap(), m = [], y = n.dimCount;
        if (null == y) {
            var _ = r(e[0]);
            y = Math.max(a.isArray(_) && _.length || 1, t.length, d.length), l(t, function (t) {
                var e = t.dimsDef;
                e && (y = Math.max(y, e.length))
            })
        }
        for (var x = 0; x < y; x++) {
            var w = h(d[x]) ? {name: d[x]} : d[x] || {}, b = w.name, S = m[x] = {otherDims: {}};
            null != b && null == g.get(b) && (S.name = S.tooltipName = b, g.set(b, x)), null != w.type && (S.type = w.type)
        }
        p.each(function (t, e) {
            t = p.set(e, s(t).slice()), l(t, function (n, r) {
                h(n) && (n = g.get(n)), null != n && n < y && (t[r] = n, i(m[n], e, r))
            })
        });
        var T = 0;
        l(t, function (t, e) {
            var n, t, r, o;
            h(t) ? (n = t, t = {}) : (n = t.name, t = a.clone(t), r = t.dimsDef, o = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null);
            var c = s(p.get(n));
            if (!c.length) for (var f = 0; f < (r && r.length || 1); f++) {
                for (; T < m.length && null != m[T].coordDim;) T++;
                T < m.length && c.push(T++)
            }
            l(c, function (e, a) {
                var s = m[e];
                i(u(s, t), n, a), null == s.name && r && (s.name = s.tooltipName = r[a]), o && u(s.otherDims, o)
            })
        });
        for (var M = n.extraPrefix || "value", C = 0; C < y; C++) {
            var S = m[C] = m[C] || {};
            null == S.coordDim && (S.coordDim = o(M, v, n.extraFromZero), S.coordDimIndex = 0, S.isExtraCoord = !0), null == S.name && (S.name = o(S.coordDim, g)), null == S.type && f(e, C) && (S.type = "ordinal")
        }
        return m
    }

    function r(t) {
        return a.isArray(t) ? t : a.isObject(t) ? t.value : t
    }

    var a = n(208), o = n(211), s = o.normalizeToArray, l = a.each, h = a.isString, u = a.defaults,
        c = {tooltip: 1, label: 1, itemName: 1}, f = i.guessOrdinal = function (t, e) {
            for (var n = 0, i = t.length; n < i; n++) {
                var o = r(t[n]);
                if (!a.isArray(o)) return !1;
                var o = o[e];
                if (null != o && isFinite(o) && "" !== o) return !1;
                if (h(o) && "-" !== o) return !0
            }
            return !1
        }, d = i;
    t.exports = d
}, function (t, e) {
    function n(t, e, n) {
        function i() {
            u = (new Date).getTime(), c = null, t.apply(o, s || [])
        }

        var r, a, o, s, l, h = 0, u = 0, c = null;
        e = e || 0;
        var f = function () {
            r = (new Date).getTime(), o = this, s = arguments;
            var t = l || e, f = l || n;
            l = null, a = r - (f ? h : u) - t, clearTimeout(c), f ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), h = r
        };
        return f.clear = function () {
            c && (clearTimeout(c), c = null)
        }, f.debounceNextCall = function (t) {
            l = t
        }, f
    }

    function i(t, e, i, r) {
        var l = t[e];
        if (l) {
            var h = l[a] || l, u = l[s];
            if (l[o] !== i || u !== r) {
                if (null == i || !r) return t[e] = h;
                l = t[e] = n(h, i, "debounce" === r), l[a] = h, l[s] = r, l[o] = i
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
        return null != e && !u.isArray(p(e))
    }

    function a(t, e, n) {
        t = t || [];
        var i = e.get("coordinateSystem"), a = y[i], o = m.get(i),
            s = {encodeDef: e.get("encode"), dimsDef: e.get("dimensions")}, h = a && a(t, e, n, s),
            d = h && h.dimensions;
        d || (d = o && (o.getDimensionsInfo ? o.getDimensionsInfo() : o.dimensions.slice()) || ["x", "y"], d = f(d, t, s));
        var _ = h ? h.categoryIndex : -1, x = new c(d, e), w = l(h, t), b = {},
            S = _ >= 0 && r(t) ? function (t, e, n, i) {
                return v(t) && (x.hasItemOption = !0), i === _ ? n : g(p(t), d[i])
            } : function (t, e, n, i) {
                var r = p(t), a = g(r && r[i], d[i]);
                v(t) && (x.hasItemOption = !0);
                var o = h && h.categoryAxesModels;
                return o && o[e] && "string" == typeof a && (b[e] = b[e] || o[e].getCategories(), (a = u.indexOf(b[e], a)) < 0 && !isNaN(a) && (a = +a)), a
            };
        return x.hasItemOption = !1, x.initData(t, w, S), x
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
                if (u.isArray(e[0]) && e[0].length > 1) {
                    i = [];
                    for (var s = 0; s < o; s++) i[s] = a[e[s][t.categoryIndex || 0]]
                } else i = a.slice(0)
            }
        }
        return i
    }

    var h = n(214), u = (h.__DEV__, n(208)), c = n(241), f = n(250), d = n(211), p = d.getDataItemValue,
        g = d.converDataValue, v = d.isDataItemOption, m = n(249), y = {
            cartesian2d: function (t, e, n, i) {
                var r = u.map(["xAxis", "yAxis"], function (t) {
                        return n.queryComponents({mainType: t, index: e.get(t + "Index"), id: e.get(t + "Id")})[0]
                    }), a = r[0], l = r[1], h = a.get("type"), c = l.get("type"),
                    d = [{name: "x", type: s(h), stackable: o(h)}, {name: "y", type: s(c), stackable: o(c)}],
                    p = "category" === h, g = "category" === c;
                d = f(d, t, i);
                var v = {};
                return p && (v.x = a), g && (v.y = l), {
                    dimensions: d,
                    categoryIndex: p ? 0 : g ? 1 : -1,
                    categoryAxesModels: v
                }
            }, singleAxis: function (t, e, n, i) {
                var r = n.queryComponents({
                    mainType: "singleAxis",
                    index: e.get("singleAxisIndex"),
                    id: e.get("singleAxisId")
                })[0], a = r.get("type"), l = "category" === a, h = [{name: "single", type: s(a), stackable: o(a)}];
                h = f(h, t, i);
                var u = {};
                return l && (u.single = r), {dimensions: h, categoryIndex: l ? 0 : -1, categoryAxesModels: u}
            }, polar: function (t, e, n, i) {
                var r = n.queryComponents({mainType: "polar", index: e.get("polarIndex"), id: e.get("polarId")})[0],
                    a = r.findAxisModel("angleAxis"), l = r.findAxisModel("radiusAxis"), h = l.get("type"),
                    u = a.get("type"),
                    c = [{name: "radius", type: s(h), stackable: o(h)}, {name: "angle", type: s(u), stackable: o(u)}],
                    d = "category" === u, p = "category" === h;
                c = f(c, t, i);
                var g = {};
                return p && (g.radius = l), d && (g.angle = a), {
                    dimensions: c,
                    categoryIndex: d ? 1 : p ? 0 : -1,
                    categoryAxesModels: g
                }
            }, geo: function (t, e, n, i) {
                return {dimensions: f([{name: "lng"}, {name: "lat"}], t, i)}
            }
        }, _ = a;
    t.exports = _
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
                var l = o[t], h = a[l];
                if (null != h) {
                    var u = h.length;
                    u ? (1 === u && (a[l] = null), h = h.unshift()) : a[l] = null, this._update && this._update(h, t)
                } else this._remove && this._remove(t)
            }
            for (var t = 0; t < s.length; t++) {
                var l = s[t];
                if (a.hasOwnProperty(l)) {
                    var h = a[l];
                    if (null == h) continue;
                    if (h.length) for (var c = 0, u = h.length; c < u; c++) this._add && this._add(h[c]); else this._add && this._add(h)
                }
            }
        }
    };
    var a = i;
    t.exports = a
}, , function (t, e, n) {
    var i = n(214), r = (i.__DEV__, n(208)), a = n(216), o = n(223), s = o.formatTime, l = o.encodeHTML,
        h = o.addCommas, u = o.getTooltipMarker, c = n(225), f = c.set, d = c.get, p = n(211), g = n(226), v = n(256),
        m = n(227), y = m.getLayoutParams, _ = m.mergeLayoutParam, x = g.extend({
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
                f(this, "dataBeforeProcessed", r), this.restoreData()
            },
            mergeDefaultAndTheme: function (t, e) {
                var n = this.layoutMode, i = n ? y(t) : {}, a = this.subType;
                g.hasClass(a) && (a += "Series"), r.merge(t, e.getTheme().get(this.subType)), r.merge(t, this.getDefaultOption()), p.defaultEmphasis(t.label, ["show"]), this.fillDataTextStyle(t.data), n && _(t, i, n)
            },
            mergeOption: function (t, e) {
                t = r.merge(this.option, t, !0), this.fillDataTextStyle(t.data);
                var n = this.layoutMode;
                n && _(this.option, t, n);
                var i = this.getInitialData(t, e);
                i && (f(this, "data", i), f(this, "dataBeforeProcessed", i.cloneShallow()))
            },
            fillDataTextStyle: function (t) {
                if (t) for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && p.defaultEmphasis(t[n].label, e)
            },
            getInitialData: function () {
            },
            getData: function (t) {
                var e = d(this, "data");
                return null == t ? e : e.getLinkedData(t)
            },
            setData: function (t) {
                f(this, "data", t)
            },
            getRawData: function () {
                return d(this, "dataBeforeProcessed")
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
                var i = d(this, "data"), a = this.getRawValue(t), o = r.isArray(a) ? function (n) {
                    function a(t, n) {
                        var r = i.getDimensionInfo(n);
                        if (r && !1 !== r.otherDims.tooltip) {
                            var a = r.type,
                                c = (o ? "- " + (r.tooltipName || r.name) + ": " : "") + ("ordinal" === a ? t + "" : "time" === a ? e ? "" : s("yyyy/MM/dd hh:mm:ss", t) : h(t));
                            c && u.push(l(c))
                        }
                    }

                    var o = r.reduce(n, function (t, e, n) {
                        var r = i.getDimensionInfo(n);
                        return t |= r && !1 !== r.tooltip && null != r.tooltipName
                    }, 0), u = [], c = p.otherDimToDataDim(i, "tooltip");
                    return c.length ? r.each(c, function (e) {
                        a(i.get(e, t), e)
                    }) : r.each(n, a), (o ? "<br/>" : "") + u.join(o ? "<br/>" : ", ")
                }(a) : l(h(a)), c = i.getName(t), f = i.getItemVisual(t, "color");
                r.isObject(f) && f.colorStops && (f = (f.colorStops[0] || {}).color), f = f || "transparent";
                var g = u(f), v = this.name;
                return "\0-" === v && (v = ""), v = v ? l(v) + (e ? ": " : "<br/>") : "", e ? g + v + o : v + g + (c ? l(c) + ": " + o : o)
            },
            isAnimationEnabled: function () {
                if (a.node) return !1;
                var t = this.getShallow("animation");
                return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
            },
            restoreData: function () {
                f(this, "data", d(this, "dataBeforeProcessed").cloneShallow())
            },
            getColorFromPalette: function (t, e) {
                var n = this.ecModel, i = v.getColorFromPalette.call(this, t, e);
                return i || (i = n.getColorFromPalette(t, e)), i
            },
            getAxisTooltipData: null,
            getTooltipPosition: null
        });
    r.mixin(x, p.dataFormatMixin), r.mixin(x, v);
    var w = x;
    t.exports = w
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
        var a = {}, s = t[1] - t[0], u = a.interval = l.nice(s / e, !0);
        null != n && u < n && (u = a.interval = n), null != i && u > i && (u = a.interval = i);
        var c = a.intervalPrecision = r(u);
        return o(a.niceTickExtent = [h(Math.ceil(t[0] / u) * u, c), h(Math.floor(t[1] / u) * u, c)], t), a
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
        for (var a = n[0]; a <= n[1] && (r.push(a), (a = h(a + t, i)) !== r[r.length - 1]);) if (r.length > 1e4) return [];
        return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r
    }

    var l = n(212), h = l.round;
    e.intervalScaleNiceTicks = i, e.getIntervalPrecision = r, e.fixExtent = o, e.intervalScaleGetTicks = s
}, function (t, e, n) {
    function i() {
        this.group = new s, this.uid = l.getUID("viewChart")
    }

    function r(t, e) {
        if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) r(t.childAt(n), e)
    }

    function a(t, e, n) {
        var i = u.queryDataIndex(t, e);
        null != i ? o.each(u.normalizeToArray(i), function (e) {
            r(t.getItemGraphicEl(e), n)
        }) : t.eachItemGraphicEl(function (t) {
            r(t, n)
        })
    }

    var o = n(208), s = n(237), l = n(243), h = n(225), u = n(211);
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
    }, h.enableClassExtend(i, ["dispose"]), h.enableClassManagement(i, {registerWhenExtend: !0});
    var f = i;
    t.exports = f
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
    var h = l;
    t.exports = h
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
        if (1 == r) for (var s = 0; s < o; s++) i[s] = a(t[s], e[s], n); else for (var l = o && t[0].length, s = 0; s < o; s++) for (var h = 0; h < l; h++) i[s][h] = a(t[s][h], e[s][h], n)
    }

    function l(t, e, n) {
        var i = t.length, r = e.length;
        if (i !== r) {
            if (i > r) t.length = r; else for (var a = i; a < r; a++) t.push(1 === n ? e[a] : x.call(e[a]))
        }
        for (var o = t[0] && t[0].length, a = 0; a < t.length; a++) if (1 === n) isNaN(t[a]) && (t[a] = e[a]); else for (var s = 0; s < o; s++) isNaN(t[a][s]) && (t[a][s] = e[a][s])
    }

    function h(t, e, n) {
        if (t === e) return !0;
        var i = t.length;
        if (i !== e.length) return !1;
        if (1 === n) {
            for (var r = 0; r < i; r++) if (t[r] !== e[r]) return !1
        } else for (var a = t[0].length, r = 0; r < i; r++) for (var o = 0; o < a; o++) if (t[r][o] !== e[r][o]) return !1;
        return !0
    }

    function u(t, e, n, i, r, a, o, s, l) {
        var h = t.length;
        if (1 == l) for (var u = 0; u < h; u++) s[u] = c(t[u], e[u], n[u], i[u], r, a, o); else for (var f = t[0].length, u = 0; u < h; u++) for (var d = 0; d < f; d++) s[u][d] = c(t[u][d], e[u][d], n[u][d], i[u][d], r, a, o)
    }

    function c(t, e, n, i, r, a, o) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
    }

    function f(t) {
        if (_(t)) {
            var e = t.length;
            if (_(t[0])) {
                for (var n = [], i = 0; i < e; i++) n.push(x.call(t[i]));
                return n
            }
            return x.call(t)
        }
        return t
    }

    function d(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
    }

    function p(t) {
        var e = t[t.length - 1].value;
        return _(e && e[0]) ? 2 : 1
    }

    function g(t, e, n, i, r, f) {
        var g = t._getter, y = t._setter, x = "spline" === e, w = i.length;
        if (w) {
            var b, S = i[0].value, T = _(S), M = !1, C = !1, k = T ? p(i) : 0;
            i.sort(function (t, e) {
                return t.time - e.time
            }), b = i[w - 1].time;
            for (var I = [], P = [], A = i[0].value, D = !0, L = 0; L < w; L++) {
                I.push(i[L].time / b);
                var O = i[L].value;
                if (T && h(O, A, k) || !T && O === A || (D = !1), A = O, "string" == typeof O) {
                    var E = m.parse(O);
                    E ? (O = E, M = !0) : C = !0
                }
                P.push(O)
            }
            if (f || !D) {
                for (var z = P[w - 1], L = 0; L < w - 1; L++) T ? l(P[L], z, k) : !isNaN(P[L]) || isNaN(z) || C || M || (P[L] = z);
                T && l(g(t._target, r), z, k);
                var R, B, N, F, H, V, W = 0, q = 0;
                if (M) var j = [0, 0, 0, 0];
                var G = function (t, e) {
                    var n;
                    if (e < 0) n = 0; else if (e < q) {
                        for (R = Math.min(W + 1, w - 1), n = R; n >= 0 && !(I[n] <= e); n--) ;
                        n = Math.min(n, w - 2)
                    } else {
                        for (n = W; n < w && !(I[n] > e); n++) ;
                        n = Math.min(n - 1, w - 2)
                    }
                    W = n, q = e;
                    var i = I[n + 1] - I[n];
                    if (0 !== i) if (B = (e - I[n]) / i, x) if (F = P[n], N = P[0 === n ? n : n - 1], H = P[n > w - 2 ? w - 1 : n + 1], V = P[n > w - 3 ? w - 1 : n + 2], T) u(N, F, H, V, B, B * B, B * B * B, g(t, r), k); else {
                        var l;
                        if (M) l = u(N, F, H, V, B, B * B, B * B * B, j, 1), l = d(j); else {
                            if (C) return o(F, H, B);
                            l = c(N, F, H, V, B, B * B, B * B * B)
                        }
                        y(t, r, l)
                    } else if (T) s(P[n], P[n + 1], B, g(t, r), k); else {
                        var l;
                        if (M) s(P[n], P[n + 1], B, j, 1), l = d(j); else {
                            if (C) return o(P[n], P[n + 1], B);
                            l = a(P[n], P[n + 1], B)
                        }
                        y(t, r, l)
                    }
                }, X = new v({target: t._target, life: b, loop: t._loop, delay: t._delay, onframe: G, ondestroy: n});
                return e && "spline" !== e && (X.easing = e), X
            }
        }
    }

    var v = n(314), m = n(234), y = n(208), _ = y.isArrayLike, x = Array.prototype.slice, w = function (t, e, n, a) {
        this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || i, this._setter = a || r, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    };
    w.prototype = {
        when: function (t, e) {
            var n = this._tracks;
            for (var i in e) if (e.hasOwnProperty(i)) {
                if (!n[i]) {
                    n[i] = [];
                    var r = this._getter(this._target, i);
                    if (null == r) continue;
                    0 !== t && n[i].push({time: 0, value: f(r)})
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
    var b = w;
    t.exports = b
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
            for (i = 1; i < t.length; i++) r = t[i], a = u(a, r[0]), o = c(o, r[0]), s = u(s, r[1]), l = c(l, r[1]);
            e[0] = a, e[1] = s, n[0] = o, n[1] = l
        }
    }

    function r(t, e, n, i, r, a) {
        r[0] = u(t, n), r[1] = u(e, i), a[0] = c(t, n), a[1] = c(e, i)
    }

    function a(t, e, n, i, r, a, o, s, l, f) {
        var d, p = h.cubicExtrema, g = h.cubicAt, v = p(t, n, r, o, y);
        for (l[0] = 1 / 0, l[1] = 1 / 0, f[0] = -1 / 0, f[1] = -1 / 0, d = 0; d < v; d++) {
            var m = g(t, n, r, o, y[d]);
            l[0] = u(m, l[0]), f[0] = c(m, f[0])
        }
        for (v = p(e, i, a, s, _), d = 0; d < v; d++) {
            var x = g(e, i, a, s, _[d]);
            l[1] = u(x, l[1]), f[1] = c(x, f[1])
        }
        l[0] = u(t, l[0]), f[0] = c(t, f[0]), l[0] = u(o, l[0]), f[0] = c(o, f[0]), l[1] = u(e, l[1]), f[1] = c(e, f[1]), l[1] = u(s, l[1]), f[1] = c(s, f[1])
    }

    function o(t, e, n, i, r, a, o, s) {
        var l = h.quadraticExtremum, f = h.quadraticAt, d = c(u(l(t, n, r), 1), 0), p = c(u(l(e, i, a), 1), 0),
            g = f(t, n, r, d), v = f(e, i, a, p);
        o[0] = u(t, r, g), o[1] = u(e, a, v), s[0] = c(t, r, g), s[1] = c(e, a, v)
    }

    function s(t, e, n, i, r, a, o, s, h) {
        var u = l.min, c = l.max, y = Math.abs(r - a);
        if (y % p < 1e-4 && y > 1e-4) return s[0] = t - n, s[1] = e - i, h[0] = t + n, void (h[1] = e + i);
        if (g[0] = d(r) * n + t, g[1] = f(r) * i + e, v[0] = d(a) * n + t, v[1] = f(a) * i + e, u(s, g, v), c(h, g, v), r %= p, r < 0 && (r += p), a %= p, a < 0 && (a += p), r > a && !o ? a += p : r < a && o && (r += p), o) {
            var _ = a;
            a = r, r = _
        }
        for (var x = 0; x < a; x += Math.PI / 2) x > r && (m[0] = d(x) * n + t, m[1] = f(x) * i + e, u(s, m, s), c(h, m, h))
    }

    var l = n(213), h = n(229), u = Math.min, c = Math.max, f = Math.sin, d = Math.cos, p = 2 * Math.PI, g = l.create(),
        v = l.create(), m = l.create(), y = [], _ = [];
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
                var a = n.x || 0, o = n.y || 0, l = n.width, h = n.height, u = r.width / r.height;
                if (null == l && null != h ? l = h * u : null == h && null != l ? h = l / u : null == l && null == h && (l = r.width, h = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
                    var c = n.sx || 0, f = n.sy || 0;
                    t.drawImage(r, c, f, n.sWidth, n.sHeight, a, o, l, h)
                } else if (n.sx && n.sy) {
                    var c = n.sx, f = n.sy, d = l - c, p = h - f;
                    t.drawImage(r, c, f, d, p, a, o, l, h)
                } else t.drawImage(r, a, o, l, h);
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
                var l = r[s], h = l[0];
                (o || i[h] !== a[h]) && (t[h] = i[h] || l[1])
            }
            if ((o || i.fill !== a.fill) && (t.fillStyle = i.fill), (o || i.stroke !== a.stroke) && (t.strokeStyle = i.stroke), (o || i.opacity !== a.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (o || i.blend !== a.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
                var u = i.lineWidth;
                t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
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
    var h = a;
    t.exports = h
}, function (t, e, n) {
    function i(t, e, n) {
        var i = e.points, o = e.smooth;
        if (i && i.length >= 2) {
            if (o && "spline" !== o) {
                var s = a(i, o, n, e.smoothConstraint);
                t.moveTo(i[0][0], i[0][1]);
                for (var l = i.length, h = 0; h < (n ? l : l - 1); h++) {
                    var u = s[2 * h], c = s[2 * h + 1], f = i[(h + 1) % l];
                    t.bezierCurveTo(u[0], u[1], c[0], c[1], f[0], f[1])
                }
            } else {
                "spline" === o && (i = r(i, n)), t.moveTo(i[0][0], i[0][1]);
                for (var h = 1, d = i.length; h < d; h++) t.lineTo(i[h][0], i[h][1])
            }
            n && t.closePath()
        }
    }

    var r = n(329), a = n(328);
    e.buildPath = i
}, function (t, e) {
    function n(t, e) {
        var n, i, r, a, o = e.x, s = e.y, l = e.width, h = e.height, u = e.r;
        l < 0 && (o += l, l = -l), h < 0 && (s += h, h = -h), "number" == typeof u ? n = i = r = a = u : u instanceof Array ? 1 === u.length ? n = i = r = a = u[0] : 2 === u.length ? (n = r = u[0], i = a = u[1]) : 3 === u.length ? (n = u[0], i = a = u[1], r = u[2]) : (n = u[0], i = u[1], r = u[2], a = u[3]) : n = i = r = a = 0;
        var c;
        n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > h && (c = i + r, i *= h / c, r *= h / c), n + a > h && (c = n + a, n *= h / c, a *= h / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.quadraticCurveTo(o + l, s, o + l, s + i), t.lineTo(o + l, s + h - r), 0 !== r && t.quadraticCurveTo(o + l, s + h, o + l - r, s + h), t.lineTo(o + a, s + h), 0 !== a && t.quadraticCurveTo(o, s + h, o, s + h - a), t.lineTo(o, s + n), 0 !== n && t.quadraticCurveTo(o, s, o + n, s)
    }

    e.buildPath = n
}, function (t, e, n) {
    function i(t) {
        return r(t), T(t.rich, r), t
    }

    function r(t) {
        if (t) {
            t.font = I.makeFont(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || D[e] ? e : "left";
            var n = t.textVerticalAlign || t.textBaseline;
            "center" === n && (n = "middle"), t.textVerticalAlign = null == n || L[n] ? n : "top";
            t.textPadding && (t.textPadding = M(t.textPadding))
        }
    }

    function a(t, e, n, i, r) {
        i.rich ? s(t, e, n, i, r) : o(t, e, n, i, r)
    }

    function o(t, e, n, i, r) {
        var a = g(e, "font", i.font || I.DEFAULT_FONT), o = i.textPadding, s = t.__textCotentBlock;
        s && !t.__dirty || (s = t.__textCotentBlock = I.parsePlainText(n, a, o, i.truncate));
        var l = s.outerHeight, u = s.lines, d = s.lineHeight, y = p(l, i, r), x = y.baseX, w = y.baseY, b = y.textAlign,
            S = y.textVerticalAlign;
        h(e, i, r, x, w);
        var T = I.adjustTextY(w, l, S), M = x, C = T, k = c(i);
        if (k || o) {
            var P = I.getWidth(n, a), A = P;
            o && (A += o[1] + o[3]);
            var D = I.adjustTextX(x, A, b);
            k && f(t, e, i, D, T, A, l), o && (M = _(x, b, o), C += o[0])
        }
        g(e, "textAlign", b || "left"), g(e, "textBaseline", "middle"), g(e, "shadowBlur", i.textShadowBlur || 0), g(e, "shadowColor", i.textShadowColor || "transparent"), g(e, "shadowOffsetX", i.textShadowOffsetX || 0), g(e, "shadowOffsetY", i.textShadowOffsetY || 0), C += d / 2;
        var L = i.textStrokeWidth, O = v(i.textStroke, L), E = m(i.textFill);
        O && (g(e, "lineWidth", L), g(e, "strokeStyle", O)), E && g(e, "fillStyle", E);
        for (var z = 0; z < u.length; z++) O && e.strokeText(u[z], M, C), E && e.fillText(u[z], M, C), C += d
    }

    function s(t, e, n, i, r) {
        var a = t.__textCotentBlock;
        a && !t.__dirty || (a = t.__textCotentBlock = I.parseRichText(n, i)), l(t, e, a, i, r)
    }

    function l(t, e, n, i, r) {
        var a = n.width, o = n.outerWidth, s = n.outerHeight, l = i.textPadding, d = p(s, i, r), g = d.baseX,
            v = d.baseY, m = d.textAlign, y = d.textVerticalAlign;
        h(e, i, r, g, v);
        var _ = I.adjustTextX(g, o, m), x = I.adjustTextY(v, s, y), w = _, b = x;
        l && (w += l[3], b += l[0]);
        var S = w + a;
        c(i) && f(t, e, i, _, x, o, s);
        for (var T = 0; T < n.lines.length; T++) {
            for (var M, C = n.lines[T], k = C.tokens, P = k.length, A = C.lineHeight, D = C.width, L = 0, O = w, E = S, z = P - 1; L < P && (M = k[L], !M.textAlign || "left" === M.textAlign);) u(t, e, M, i, A, b, O, "left"), D -= M.width, O += M.width, L++;
            for (; z >= 0 && (M = k[z], "right" === M.textAlign);) u(t, e, M, i, A, b, E, "right"), D -= M.width, E -= M.width, z--;
            for (O += (a - (O - w) - (S - E) - D) / 2; L <= z;) M = k[L], u(t, e, M, i, A, b, O + M.width / 2, "center"), O += M.width, L++;
            b += A
        }
    }

    function h(t, e, n, i, r) {
        if (n && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r)
        }
    }

    function u(t, e, n, i, r, a, o, s) {
        var l = i.rich[n.styleName] || {}, h = n.textVerticalAlign, u = a + r / 2;
        "top" === h ? u = a + n.height / 2 : "bottom" === h && (u = a + r - n.height / 2), !n.isLineHolder && c(l) && f(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, u - n.height / 2, n.width, n.height);
        var d = n.textPadding;
        d && (o = _(o, s, d), u -= n.height / 2 - d[2] - n.textHeight / 2), g(e, "shadowBlur", S(l.textShadowBlur, i.textShadowBlur, 0)), g(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), g(e, "shadowOffsetX", S(l.textShadowOffsetX, i.textShadowOffsetX, 0)), g(e, "shadowOffsetY", S(l.textShadowOffsetY, i.textShadowOffsetY, 0)), g(e, "textAlign", s), g(e, "textBaseline", "middle"), g(e, "font", n.font || I.DEFAULT_FONT);
        var p = v(l.textStroke || i.textStroke, x), y = m(l.textFill || i.textFill),
            x = b(l.textStrokeWidth, i.textStrokeWidth);
        p && (g(e, "lineWidth", x), g(e, "strokeStyle", p), e.strokeText(n.text, o, u)), y && (g(e, "fillStyle", y), e.fillText(n.text, o, u))
    }

    function c(t) {
        return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
    }

    function f(t, e, n, i, r, a, o) {
        var s = n.textBackgroundColor, l = n.textBorderWidth, h = n.textBorderColor, u = C(s);
        if (g(e, "shadowBlur", n.textBoxShadowBlur || 0), g(e, "shadowColor", n.textBoxShadowColor || "transparent"), g(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), g(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), u || l && h) {
            e.beginPath();
            var c = n.textBorderRadius;
            c ? P.buildPath(e, {x: i, y: r, width: a, height: o, r: c}) : e.rect(i, r, a, o), e.closePath()
        }
        if (u) g(e, "fillStyle", s), e.fill(); else if (k(s)) {
            var f = s.image;
            f = A.createOrUpdateImage(f, null, t, d, s), f && A.isImageReady(f) && e.drawImage(f, i, r, a, o)
        }
        l && h && (g(e, "lineWidth", l), g(e, "strokeStyle", h), e.stroke())
    }

    function d(t, e) {
        e.image = t
    }

    function p(t, e, n) {
        var i = e.x || 0, r = e.y || 0, a = e.textAlign, o = e.textVerticalAlign;
        if (n) {
            var s = e.textPosition;
            if (s instanceof Array) i = n.x + y(s[0], n.width), r = n.y + y(s[1], n.height); else {
                var l = I.adjustTextPositionOnRect(s, n, e.textDistance);
                i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
            }
            var h = e.textOffset;
            h && (i += h[0], r += h[1])
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

    function y(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function _(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
    }

    function x(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }

    var w = n(208), b = w.retrieve2, S = w.retrieve3, T = w.each, M = w.normalizeCssArray, C = w.isString,
        k = w.isObject, I = n(228), P = n(272), A = n(248), D = {left: 1, right: 1, center: 1},
        L = {top: 1, bottom: 1, middle: 1};
    e.normalizeTextStyle = i, e.renderText = a, e.getStroke = v, e.getFill = m, e.needDrawText = x
}, function (t, e, n) {
    function i(t) {
        return t > s || t < -s
    }

    var r = n(231), a = n(213), o = r.identity, s = 5e-5, l = function (t) {
        t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
    }, h = l.prototype;
    h.transform = null, h.needLocalTransform = function () {
        return i(this.rotation) || i(this.position[0]) || i(this.position[1]) || i(this.scale[0] - 1) || i(this.scale[1] - 1)
    }, h.updateTransform = function () {
        var t = this.parent, e = t && t.transform, n = this.needLocalTransform(), i = this.transform;
        if (!n && !e) return void (i && o(i));
        i = i || r.create(), n ? this.getLocalTransform(i) : o(i), e && (n ? r.mul(i, t.transform, i) : r.copy(i, t.transform)), this.transform = i, this.invTransform = this.invTransform || r.create(), r.invert(this.invTransform, i)
    }, h.getLocalTransform = function (t) {
        return l.getLocalTransform(this, t)
    }, h.setTransform = function (t) {
        var e = this.transform, n = t.dpr || 1;
        e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
    }, h.restoreTransform = function (t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0)
    };
    var u = [];
    h.decomposeTransform = function () {
        if (this.transform) {
            var t = this.parent, e = this.transform;
            t && t.transform && (r.mul(u, t.invTransform, e), e = u);
            var n = e[0] * e[0] + e[1] * e[1], a = e[2] * e[2] + e[3] * e[3], o = this.position, s = this.scale;
            i(n - 1) && (n = Math.sqrt(n)), i(a - 1) && (a = Math.sqrt(a)), e[0] < 0 && (n = -n), e[3] < 0 && (a = -a), o[0] = e[4], o[1] = e[5], s[0] = n, s[1] = a, this.rotation = Math.atan2(-e[1] / a, e[0] / n)
        }
    }, h.getGlobalScale = function () {
        var t = this.transform;
        if (!t) return [1, 1];
        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]), n = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
        return t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), [e, n]
    }, h.transformCoordToLocal = function (t, e) {
        var n = [t, e], i = this.invTransform;
        return i && a.applyTransform(n, n, i), n
    }, h.transformCoordToGlobal = function (t, e) {
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
        var n = new _(l(), t, e);
        return y[n.id] = n, n
    }

    function r(t) {
        if (t) t.dispose(); else {
            for (var e in y) y.hasOwnProperty(e) && y[e].dispose();
            y = {}
        }
        return this
    }

    function a(t) {
        return y[t]
    }

    function o(t, e) {
        m[t] = e
    }

    function s(t) {
        delete y[t]
    }

    var l = n(266), h = n(216), u = n(208), c = n(309), f = n(312), d = n(311), p = n(313), g = n(323),
        v = !h.canvasSupported, m = {canvas: d}, y = {}, _ = function (t, e, n) {
            n = n || {}, this.dom = e, this.id = t;
            var i = this, r = new f, a = n.renderer;
            if (v) {
                if (!m.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                a = "vml"
            } else a && m[a] || (a = "canvas");
            var o = new m[a](e, r, n);
            this.storage = r, this.painter = o;
            var s = h.node ? null : new g(o.getViewportRoot());
            this.handler = new c(r, o, s, o.root), this.animation = new p({stage: {update: u.bind(this.flush, this)}}), this.animation.start(), this._needsRefresh;
            var l = r.delFromStorage, d = r.addToStorage;
            r.delFromStorage = function (t) {
                l.call(r, t), t && t.removeSelfFromZr(i)
            }, r.addToStorage = function (t) {
                d.call(r, t), t.addSelfToZr(i)
            }
        };
    _.prototype = {
        constructor: _, getId: function () {
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
}, , function (t, e, n) {
    function i(t, e, n) {
        var i = e.getBoxLayoutParams(), r = e.get("padding"), a = {width: n.getWidth(), height: n.getHeight()},
            h = o(i, a, r);
        s(e.get("orient"), t, e.get("itemGap"), h.width, h.height), l(t, i, a, r)
    }

    function r(t, e) {
        var n = h.normalizeCssArray(e.get("padding")), i = e.getItemStyle(["color", "opacity"]);
        i.fill = e.get("backgroundColor");
        var t = new u.Rect({
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

    var a = n(227), o = a.getLayoutRect, s = a.box, l = a.positionElement, h = n(223), u = n(210);
    e.layout = i, e.makeBackground = r
}, function (t, e, n) {
    function i(t, e) {
        var n = t[1] - t[0], i = e, r = n / i / 2;
        t[0] += r, t[1] -= r
    }

    var r = n(208), a = n(212), o = n(232), s = a.linearMap, l = [0, 1], h = function (t, e, n) {
        this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1, this._labelInterval
    };
    h.prototype = {
        constructor: h, contain: function (t) {
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
    var u = h;
    t.exports = u
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
                    for (var h = 0; h < a.length; h++) a[h][2] = i[a[h][0]], i[a[h][0]] = a[h][1];
                    e = !0;
                    break
                }
            }
            if (t.apply(this, arguments), e) for (var h = 0; h < a.length; h++) i[a[h][0]] = a[h][2]
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
}, , function (t, e, n) {
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

    var o = n(214), s = (o.__DEV__, n(209)), l = n(208), h = n(244), u = h.createSymbol, c = n(210), f = n(277),
        d = f.makeBackground, p = n(227), g = l.curry, v = l.each, m = c.Group, y = s.extendComponentView({
            type: "legend.plain", newlineDisabled: !1, init: function () {
                this.group.add(this._contentGroup = new m), this._backgroundEl
            }, getContentGroup: function () {
                return this._contentGroup
            }, render: function (t, e, n) {
                if (this.resetInner(), t.get("show", !0)) {
                    var i = t.get("align");
                    i && "auto" !== i || (i = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), this.renderInner(i, t, e, n);
                    var r = t.getBoxLayoutParams(), a = {width: n.getWidth(), height: n.getHeight()}, o = t.get("padding"),
                        s = p.getLayoutRect(r, a, o), h = this.layoutInner(t, i, s),
                        u = p.getLayoutRect(l.defaults({width: h.width, height: h.height}, r), a, o);
                    this.group.attr("position", [u.x - h.x, u.y - h.y]), this.group.add(this._backgroundEl = d(h, t))
                }
            }, resetInner: function () {
                this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl)
            }, renderInner: function (t, e, n, o) {
                var s = this.getContentGroup(), h = l.createHashMap(), u = e.get("selectedMode");
                v(e.getData(), function (l, c) {
                    var f = l.get("name");
                    if (!this.newlineDisabled && ("" === f || "\n" === f)) return void s.add(new m({newline: !0}));
                    var d = n.getSeriesByName(f)[0];
                    if (!h.get(f)) if (d) {
                        var p = d.getData(), v = p.getVisual("color");
                        "function" == typeof v && (v = v(d.getDataParams(0)));
                        var y = p.getVisual("legendSymbol") || "roundRect", _ = p.getVisual("symbol"),
                            x = this._createItem(f, c, l, e, y, _, t, v, u);
                        x.on("click", g(i, f, o)).on("mouseover", g(r, d, null, o)).on("mouseout", g(a, d, null, o)), h.set(f, !0)
                    } else n.eachRawSeries(function (n) {
                        if (!h.get(f) && n.legendDataProvider) {
                            var s = n.legendDataProvider(), d = s.indexOfName(f);
                            if (d < 0) return;
                            var p = s.getItemVisual(d, "color");
                            this._createItem(f, c, l, e, "roundRect", null, t, p, u).on("click", g(i, f, o)).on("mouseover", g(r, n, f, o)).on("mouseout", g(a, n, f, o)), h.set(f, !0)
                        }
                    }, this)
                }, this)
            }, _createItem: function (t, e, n, i, r, a, o, s, h) {
                var f = i.get("itemWidth"), d = i.get("itemHeight"), p = i.get("inactiveColor"), g = i.isSelected(t),
                    v = new m, y = n.getModel("textStyle"), _ = n.get("icon"), x = n.getModel("tooltip"), w = x.parentModel;
                if (r = _ || r, v.add(u(r, 0, 0, f, d, g ? s : p, !0)), !_ && a && (a !== r || "none" == a)) {
                    var b = .8 * d;
                    "none" === a && (a = "circle"), v.add(u(a, (f - b) / 2, (d - b) / 2, b, b, g ? s : p))
                }
                var S = "left" === o ? f + 5 : -5, T = o, M = i.get("formatter"), C = t;
                "string" == typeof M && M ? C = M.replace("{name}", null != t ? t : "") : "function" == typeof M && (C = M(t)), v.add(new c.Text({
                    style: c.setTextStyle({}, y, {
                        text: C,
                        x: S,
                        y: d / 2,
                        textFill: g ? y.getTextColor() : p,
                        textAlign: T,
                        textVerticalAlign: "middle"
                    })
                }));
                var k = new c.Rect({
                    shape: v.getBoundingRect(),
                    invisible: !0,
                    tooltip: x.get("show") ? l.extend({
                        content: t,
                        formatter: w.get("formatter", !0) || function () {
                            return t
                        },
                        formatterParams: {componentType: "legend", legendIndex: i.componentIndex, name: t, $vars: ["name"]}
                    }, x.option) : null
                });
                return v.add(k), v.eachChild(function (t) {
                    t.silent = !0
                }), k.silent = !h, this.getContentGroup().add(v), c.setHoverStyle(v), v.__legendDataIndex = e, v
            }, layoutInner: function (t, e, n) {
                var i = this.getContentGroup();
                p.box(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
                var r = i.getBoundingRect();
                return i.attr("position", [-r.x, -r.y]), this.group.getBoundingRect()
            }
        });
    t.exports = y
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
                    h = t.get("textBaseline"), u = new r.Text({
                        style: r.setTextStyle({}, a, {
                            text: t.get("text"),
                            textFill: a.getTextColor()
                        }, {disableBox: !0}), z2: 10
                    }), c = u.getBoundingRect(), f = t.get("subtext"), d = new r.Text({
                        style: r.setTextStyle({}, s, {
                            text: f,
                            textFill: s.getTextColor(),
                            y: c.height + t.get("itemGap"),
                            textVerticalAlign: "top"
                        }, {disableBox: !0}), z2: 10
                    }), p = t.get("link"), g = t.get("sublink");
                u.silent = !p, d.silent = !g, p && u.on("click", function () {
                    window.open(p, "_" + t.get("target"))
                }), g && d.on("click", function () {
                    window.open(g, "_" + t.get("subtarget"))
                }), i.add(u), f && i.add(d);
                var v = i.getBoundingRect(), m = t.getBoxLayoutParams();
                m.width = v.width, m.height = v.height;
                var y = o(m, {width: n.getWidth(), height: n.getHeight()}, t.get("padding"));
                l || (l = t.get("left") || t.get("right"), "middle" === l && (l = "center"), "right" === l ? y.x += y.width : "center" === l && (y.x += y.width / 2)), h || (h = t.get("top") || t.get("bottom"), "center" === h && (h = "middle"), "bottom" === h ? y.y += y.height : "middle" === h && (y.y += y.height / 2), h = h || "top"), i.attr("position", [y.x, y.y]);
                var _ = {textAlign: l, textVerticalAlign: h};
                u.setStyle(_), d.setStyle(_), v = i.getBoundingRect();
                var x = y.margin, w = t.getItemStyle(["color", "opacity"]);
                w.fill = t.get("backgroundColor");
                var b = new r.Rect({
                    shape: {
                        x: v.x - x[3],
                        y: v.y - x[0],
                        width: v.width + x[1] + x[3],
                        height: v.height + x[0] + x[2],
                        r: t.get("borderRadius")
                    }, style: w, silent: !0
                });
                r.subPixelOptimizeRect(b), i.add(b)
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
            for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], s = [], l = [], h = this.geometries, u = 0; u < h.length; u++) if ("polygon" === h[u].type) {
                var c = h[u].exterior;
                a.fromPoints(c, s, l), o.min(n, n, s), o.max(i, i, l)
            }
            return 0 === u && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new r(n[0], n[1], i[0] - n[0], i[1] - n[1])
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
            for (var l = new r(t, e, n, i), h = a.calculateTransform(l), u = this.geometries, c = 0; c < u.length; c++) if ("polygon" === u[c].type) {
                for (var f = u[c].exterior, d = u[c].interiors, p = 0; p < f.length; p++) o.applyTransform(f[p], f[p], h);
                for (var g = 0; g < (d ? d.length : 0); g++) for (var p = 0; p < d[g].length; p++) o.applyTransform(d[g][p], d[g][p], h)
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
        for (var n = t.features, i = 0; i < n.length; i++) for (var a = n[i], o = a.geometry, s = o.coordinates, l = o.encodeOffsets, h = 0; h < s.length; h++) {
            var u = s[h];
            if ("Polygon" === o.type) s[h] = r(u, l[h], e); else if ("MultiPolygon" === o.type) for (var c = 0; c < u.length; c++) {
                var f = u[c];
                u[c] = r(f, l[h][c], e)
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
    var h = n(212);
    e.number = h;
    var u = n(223);
    e.format = u;
    var c = n(251);
    c.throttle;
    e.throttle = c.throttle;
    var f = n(293);
    e.helper = f;
    var d = n(241);
    e.List = d;
    var p = n(224);
    e.Model = p;
    var g = n(278);
    e.Axis = g;
    var v = n(216);
    e.env = v;
    var m = n(291);
    e.parseGeoJson = m;
    var y = {};
    o.each(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
        y[t] = o[t]
    }), e.util = y
}, function (t, e, n) {
    function i(t) {
        var e = t.get("data");
        return s(e, t, t.ecModel)
    }

    function r(t, e) {
        var n = e;
        e instanceof u || (n = new u(e), o.mixin(n, h));
        var i = l.createScaleByModel(n);
        return i.setExtent(t[0], t[1]), l.niceScaleExtent(i, n), i
    }

    function a(t) {
        o.mixin(t, h)
    }

    var o = n(208), s = n(252), l = n(232), h = n(279), u = n(224), c = n(250);
    e.completeDimensions = c;
    var f = n(244);
    e.createSymbol = f.createSymbol, e.createList = i, e.createScale = r, e.mixinAxisModelCommonMethods = a
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
        u.each(e, function (e, n) {
            d.hasClass(n) || ("object" == typeof e ? t[n] = t[n] ? u.merge(t[n], e, !1) : u.clone(e) : null == t[n] && (t[n] = e))
        })
    }

    function r(t) {
        t = t, this.option = {}, this.option[b] = 1, this._componentsMap = u.createHashMap({series: []}), this._seriesIndices = null, i(t, this._theme.option), u.merge(t, p, !1), this.mergeOption(t)
    }

    function a(t, e) {
        u.isArray(e) || (e = e ? [e] : []);
        var n = {};
        return v(e, function (e) {
            n[e] = (t.get(e) || []).slice()
        }), n
    }

    function o(t, e, n) {
        return e.type ? e.type : n ? n.subType : d.determineSubType(t, e)
    }

    function s(t) {
        return y(t, function (t) {
            return t.componentIndex
        }) || []
    }

    function l(t, e) {
        return e.hasOwnProperty("subType") ? m(t, function (t) {
            return t.subType === e.subType
        }) : t
    }

    var h = n(214), u = (h.__DEV__, n(208)), c = n(211), f = n(224), d = n(226), p = n(297), g = n(256), v = u.each,
        m = u.filter, y = u.map, _ = u.isArray, x = u.indexOf, w = u.isObject, b = "\0_ec_inner", S = f.extend({
            constructor: S, init: function (t, e, n, i) {
                n = n || {}, this.option = null, this._theme = new f(n), this._optionManager = i
            }, setOption: function (t, e) {
                u.assert(!(b in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
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
                    var l = c.normalizeToArray(t[e]), h = c.mappingToExists(i.get(e), l);
                    c.makeIdAndName(h), v(h, function (t, n) {
                        var i = t.option;
                        w(i) && (t.keyInfo.mainType = e, t.keyInfo.subType = o(e, i, t.exist))
                    });
                    var f = a(i, r);
                    n[e] = [], i.set(e, []), v(h, function (t, r) {
                        var a = t.exist, o = t.option;
                        if (u.assert(w(o) || a, "Empty component definition"), o) {
                            var s = d.getClass(e, t.keyInfo.subType, !0);
                            if (a && a instanceof s) a.name = t.keyInfo.name, a.mergeOption(o, this), a.optionUpdated(o, !1); else {
                                var l = u.extend({dependentModels: f, componentIndex: r}, t.keyInfo);
                                a = new s(o, this, this, l), u.extend(a, l), a.init(o, this, this, l), a.optionUpdated(null, !0)
                            }
                        } else a.mergeOption({}, this), a.optionUpdated({}, !1);
                        i.get(e)[r] = a, n[e][r] = a.option
                    }, this), "series" === e && (this._seriesIndices = s(i.get("series")))
                }

                var n = this.option, i = this._componentsMap, r = [];
                v(t, function (t, e) {
                    null != t && (d.hasClass(e) ? r.push(e) : n[e] = null == n[e] ? u.clone(t) : u.merge(n[e], t, !0))
                }), d.topologicalTravel(r, d.getAllClassMainTypes(), e, this), this._seriesIndices = this._seriesIndices || []
            }, getOption: function () {
                var t = u.clone(this.option);
                return v(t, function (e, n) {
                    if (d.hasClass(n)) {
                        for (var e = c.normalizeToArray(e), i = e.length - 1; i >= 0; i--) c.isIdInner(e[i]) && e.splice(i, 1);
                        t[n] = e
                    }
                }), delete t[b], t
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
                if (null != n) _(n) || (n = [n]), o = m(y(n, function (t) {
                    return a[t]
                }), function (t) {
                    return !!t
                }); else if (null != i) {
                    var s = _(i);
                    o = m(a, function (t) {
                        return s && x(i, t.id) >= 0 || !s && t.id === i
                    })
                } else if (null != r) {
                    var h = _(r);
                    o = m(a, function (t) {
                        return h && x(r, t.name) >= 0 || !h && t.name === r
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
                }); else if (u.isString(t)) v(i.get(t), e, n); else if (w(t)) {
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
                return u.indexOf(this._seriesIndices, t.componentIndex) < 0
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
                }), d.topologicalTravel(e, d.getAllClassMainTypes(), function (e, n) {
                    v(t.get(e), function (t) {
                        t.restoreData()
                    })
                })
            }
        });
    u.mixin(S, g);
    var T = S;
    t.exports = T
}, function (t, e, n) {
    function i(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
    }

    function r(t, e, n) {
        var i, r, a = [], o = [], s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
            r = r || {};
            var l = t.media;
            f(l, function (t) {
                t && t.option && (t.query ? o.push(t) : i || (i = t))
            })
        }
        return r || (r = t), r.timeline || (r.timeline = s), f([r].concat(a).concat(h.map(o, function (t) {
            return t.option
        })), function (t) {
            f(e, function (e) {
                e(t, n)
            })
        }), {baseOption: r, timelineOptions: a, mediaDefault: i, mediaList: o}
    }

    function a(t, e, n) {
        var i = {width: e, height: n, aspectratio: e / n}, r = !0;
        return h.each(t, function (t, e) {
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
        e = e || {}, f(e, function (e, n) {
            if (null != e) {
                var i = t[n];
                if (c.hasClass(n)) {
                    e = u.normalizeToArray(e), i = u.normalizeToArray(i);
                    var r = u.mappingToExists(i, e);
                    t[n] = p(r, function (t) {
                        return t.option && t.exist ? g(t.exist, t.option, !0) : t.exist || t.option
                    })
                } else t[n] = g(i, e, !0)
            }
        })
    }

    var h = n(208), u = n(211), c = n(226), f = h.each, d = h.clone, p = h.map, g = h.merge, v = /^(min|max)?(.+)$/;
    i.prototype = {
        constructor: i, setOption: function (t, e) {
            t = d(t, !0);
            var n = this._optionBackup, i = r.call(this, t, e, !n);
            this._newBaseOption = i.baseOption, n ? (l(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
        }, mountOption: function (t) {
            var e = this._optionBackup;
            return this._timelineOptions = p(e.timelineOptions, d), this._mediaList = p(e.mediaList, d), this._mediaDefault = d(e.mediaDefault), this._currentMediaIndices = [], d(t ? e.baseOption : this._newBaseOption)
        }, getTimelineOption: function (t) {
            var e, n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (e = d(n[i.getCurrentIndex()], !0))
            }
            return e
        }, getMediaOption: function (t) {
            var e = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, r = this._mediaDefault,
                o = [], l = [];
            if (!i.length && !r) return l;
            for (var h = 0, u = i.length; h < u; h++) a(i[h].query, e, n) && o.push(h);
            return !o.length && r && (o = [-1]), o.length && !s(o, this._currentMediaIndices) && (l = p(o, function (t) {
                return d(-1 === t ? r.option : i[t].option)
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
        c(t, e), t.series = d(t.series), l(t.series, function (t) {
            if (u(t)) {
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
            n && (h(n) || (n = [n]), l(n, function (t) {
                a(t)
            }))
        })
    }

    var s = n(208), l = s.each, h = s.isArray, u = s.isObject, c = n(304), f = n(211), d = f.normalizeToArray,
        p = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
        g = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        v = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"];
    t.exports = o
}, function (t, e, n) {
    function i(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0, i = p.length; n < i; n++) {
            var r = p[n], a = e.normal, o = e.emphasis;
            a && a[r] && (t[r] = t[r] || {}, t[r].normal ? u.merge(t[r].normal, a[r]) : t[r].normal = a[r], a[r] = null), o && o[r] && (t[r] = t[r] || {}, t[r].emphasis ? u.merge(t[r].emphasis, o[r]) : t[r].emphasis = o[r], o[r] = null)
        }
    }

    function r(t, e) {
        var n = d(t) && t[e], i = d(n) && n.textStyle;
        if (i) for (var r = 0, a = c.TEXT_STYLE_OPTIONS.length; r < a; r++) {
            var e = c.TEXT_STYLE_OPTIONS[r];
            i.hasOwnProperty(e) && (n[e] = i[e])
        }
    }

    function a(t) {
        d(t) && (r(t, "normal"), r(t, "emphasis"))
    }

    function o(t) {
        if (d(t)) {
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
            if (e && e.data) for (var h = e.data, l = 0; l < h.length; l++) i(h[l]), a(h[l] && h[l].label);
            var n = t.markLine;
            if (n && n.data) for (var c = n.data, l = 0; l < c.length; l++) u.isArray(c[l]) ? (i(c[l][0]), a(c[l][0] && c[l][0].label), i(c[l][1]), a(c[l][1] && c[l][1].label)) : (i(c[l]), a(c[l] && c[l].label))
        }
    }

    function s(t) {
        return u.isArray(t) ? t : t ? [t] : []
    }

    function l(t) {
        return (u.isArray(t) ? t[0] : t) || {}
    }

    function h(t, e) {
        f(s(t.series), function (t) {
            d(t) && o(t)
        });
        var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
        e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), f(n, function (e) {
            f(s(t[e]), function (t) {
                t && (r(t, "axisLabel"), r(t.axisPointer, "label"))
            })
        }), f(s(t.parallel), function (t) {
            var e = t && t.parallelAxisDefault;
            r(e, "axisLabel"), r(e && e.axisPointer, "label")
        }), f(s(t.calendar), function (t) {
            r(t, "dayLabel"), r(t, "monthLabel"), r(t, "yearLabel")
        }), f(s(t.radar), function (t) {
            r(t, "name")
        }), f(s(t.geo), function (t) {
            d(t) && (a(t.label), f(s(t.regions), function (t) {
                a(t.label)
            }))
        }), a(l(t.timeline).label), r(l(t.axisPointer), "label"), r(l(t.tooltip).axisPointer, "label")
    }

    var u = n(208), c = n(211), f = u.each, d = u.isObject,
        p = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
    t.exports = h
}, function (t, e, n) {
    function i(t, e) {
        return c(t, u(e))
    }

    var r = n(208), a = n(235), o = n(212), s = n(242), l = a.prototype, h = s.prototype, u = o.getPrecisionSafe,
        c = o.round, f = Math.floor, d = Math.ceil, p = Math.pow, g = Math.log, v = a.extend({
            type: "log", base: 10, $constructor: function () {
                a.apply(this, arguments), this._originalScale = new s
            }, getTicks: function () {
                var t = this._originalScale, e = this._extent, n = t.getExtent();
                return r.map(h.getTicks.call(this), function (r) {
                    var a = o.round(p(this.base, r));
                    return a = r === e[0] && t.__fixMin ? i(a, n[0]) : a, a = r === e[1] && t.__fixMax ? i(a, n[1]) : a
                }, this)
            }, getLabel: h.getLabel, scale: function (t) {
                return t = l.scale.call(this, t), p(this.base, t)
            }, setExtent: function (t, e) {
                var n = this.base;
                t = g(t) / g(n), e = g(e) / g(n), h.setExtent.call(this, t, e)
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
                    var a = [o.round(d(e[0] / i) * i), o.round(f(e[1] / i) * i)];
                    this._interval = i, this._niceExtent = a
                }
            }, niceExtent: function (t) {
                h.niceExtent.call(this, t);
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
    var i = n(208), r = n(212), a = n(223), o = n(257), s = n(242), l = s.prototype, h = Math.ceil, u = Math.floor,
        c = function (t, e, n, i) {
            for (; n < i;) {
                var r = n + i >>> 1;
                t[r][1] < e ? n = r + 1 : i = r
            }
            return n
        }, f = s.extend({
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
                t.fixMin || (e[0] = r.round(u(e[0] / i) * i)), t.fixMax || (e[1] = r.round(h(e[1] / i) * i))
            }, niceTicks: function (t, e, n) {
                t = t || 10;
                var i = this._extent, a = i[1] - i[0], s = a / t;
                null != e && s < e && (s = e), null != n && s > n && (s = n);
                var l = d.length, f = c(d, s, 0, l), p = d[Math.min(f, l - 1)], g = p[1];
                if ("year" === p[0]) {
                    var v = a / g;
                    g *= r.nice(v / t, !0)
                }
                var m = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
                    y = [Math.round(h((i[0] - m) / g) * g + m), Math.round(u((i[1] - m) / g) * g + m)];
                o.fixExtent(y, i), this._stepLvl = p, this._interval = g, this._niceExtent = y
            }, parse: function (t) {
                return +r.parseDate(t)
            }
        });
    i.each(["contain", "normalize"], function (t) {
        f.prototype[t] = function (e) {
            return l[t].call(this, this.parse(e))
        }
    });
    var d = [["hh:mm:ss", 1e3], ["hh:mm:ss", 5e3], ["hh:mm:ss", 1e4], ["hh:mm:ss", 15e3], ["hh:mm:ss", 3e4], ["hh:mm\nMM-dd", 6e4], ["hh:mm\nMM-dd", 3e5], ["hh:mm\nMM-dd", 6e5], ["hh:mm\nMM-dd", 9e5], ["hh:mm\nMM-dd", 18e5], ["hh:mm\nMM-dd", 36e5], ["hh:mm\nMM-dd", 72e5], ["hh:mm\nMM-dd", 216e5], ["hh:mm\nMM-dd", 432e5], ["MM-dd\nyyyy", 864e5], ["MM-dd\nyyyy", 1728e5], ["MM-dd\nyyyy", 2592e5], ["MM-dd\nyyyy", 3456e5], ["MM-dd\nyyyy", 432e6], ["MM-dd\nyyyy", 5184e5], ["week", 6048e5], ["MM-dd\nyyyy", 864e6], ["week", 12096e5], ["week", 18144e5], ["month", 26784e5], ["week", 36288e5], ["month", 53568e5], ["week", 36288e5], ["quarter", 8208e6], ["month", 107136e5], ["month", 13392e6], ["half-year", 16416e6], ["month", 214272e5], ["month", 26784e6], ["year", 32832e6]];
    f.create = function (t) {
        return new f({useUTC: t.ecModel.get("useUTC")})
    };
    var p = f;
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
            return !i || u
        }
        return !1
    }

    var o = n(208), s = n(213), l = n(341), h = n(230), u = "silent";
    r.prototype.dispose = function () {
    };
    var c = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        f = function (t, e, n, i) {
            h.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new r, this.proxy = n, n.handler = this, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, l.call(this), o.each(c, function (t) {
                n.on && n.on(t, this[t], this)
            }, this)
        };
    f.prototype = {
        constructor: f, mousemove: function (t) {
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
                if (i[o] !== n && !i[o].ignore && (s = a(i[o], t, e)) && (!r.topTarget && (r.topTarget = i[o]), s !== u)) {
                    r.target = i[o];
                    break
                }
            }
            return r
        }
    }, o.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        f.prototype[t] = function (e) {
            var n = this.findHover(e.zrX, e.zrY), i = n.target;
            if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i; else if ("mosueup" === t) this._upEl = i; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || s.dist(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(n, t, e)
        }
    }), o.mixin(f, h), o.mixin(f, l);
    var d = f;
    t.exports = d
}, function (t, e, n) {
    function i() {
        return !1
    }

    function r(t, e, n) {
        var i = a.createCanvas(), r = e.getWidth(), o = e.getHeight(), s = i.style;
        return s.position = "absolute", s.left = 0, s.top = 0, s.width = r + "px", s.height = o + "px", i.width = r * n, i.height = o * n, i.setAttribute("data-zr-dom-id", t), i
    }

    var a = n(208), o = n(236), s = o.devicePixelRatio, l = n(270), h = n(269), u = function (t, e, n) {
        var o;
        n = n || s, "string" == typeof t ? o = r(t, e, n) : a.isObject(t) && (o = t, t = o.id), this.id = t, this.dom = o;
        var l = o.style;
        l && (o.onselectstart = i, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", l.padding = 0, l.margin = 0, l["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n
    };
    u.prototype = {
        constructor: u, elCount: 0, __dirty: !0, initContext: function () {
            this.ctx = this.dom.getContext("2d"), this.ctx.__currentValues = {}, this.ctx.dpr = this.dpr
        }, createBackBuffer: function () {
            var t = this.dpr;
            this.domBack = r("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), this.ctxBack.__currentValues = {}, 1 != t && this.ctxBack.scale(t, t)
        }, resize: function (t, e) {
            var n = this.dpr, i = this.dom, r = i.style, a = this.domBack;
            r.width = t + "px", r.height = e + "px", i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n))
        }, clear: function (t) {
            var e = this.dom, n = this.ctx, i = e.width, r = e.height, a = this.clearColor, o = this.motionBlur && !t,
                s = this.lastFrameAlpha, u = this.dpr;
            if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, i / u, r / u)), n.clearRect(0, 0, i, r), a) {
                var c;
                a.colorStops ? (c = a.__canvasGradient || l.getGradient(n, a, {
                    x: 0,
                    y: 0,
                    width: i,
                    height: r
                }), a.__canvasGradient = c) : a.image && (c = h.prototype.getCanvasPattern.call(a, n)), n.save(), n.fillStyle = c || a, n.fillRect(0, 0, i, r), n.restore()
            }
            if (o) {
                var f = this.domBack;
                n.save(), n.globalAlpha = s, n.drawImage(f, 0, 0, i, r), n.restore()
            }
        }
    };
    var c = u;
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
        return x.copy(t.getBoundingRect()), t.transform && x.applyTransform(t.transform), w.width = e, w.height = n, !x.intersect(w)
    }

    function l(t, e) {
        if (t == e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0
    }

    function h(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
        }
    }

    function u(t, e) {
        var n = document.createElement("div");
        return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
    }

    var c = n(236), f = c.devicePixelRatio, d = n(208), p = n(267), g = n(222), v = n(245), m = n(310), y = n(261),
        _ = n(268), x = new g(0, 0, 0, 0), w = new g(0, 0, 0, 0), b = function (t, e, n) {
            this.type = "canvas";
            var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            this._opts = n = d.extend({}, n || {}), this.dpr = n.devicePixelRatio || f, this._singleCanvas = i, this.root = t;
            var r = t.style;
            r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
            var a = this._zlevelList = [], o = this._layers = {};
            if (this._layerConfig = {}, i) {
                null != n.width && (t.width = n.width), null != n.height && (t.height = n.height);
                var s = t.width, l = t.height;
                this._width = s, this._height = l;
                var h = new m(t, this, 1);
                h.initContext(), o[0] = h, a.push(0), this._domRoot = t
            } else {
                this._width = this._getSize(0), this._height = this._getSize(1);
                var c = this._domRoot = u(this._width, this._height);
                t.appendChild(c)
            }
            this._progressiveLayers = [], this._hoverlayer, this._hoverElements = []
        };
    b.prototype = {
        constructor: b, getType: function () {
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
            var e = t.__hoverMir, n = this._hoverElements, i = d.indexOf(n, e);
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
                n === e._progressiveToken && e.storage && (e._doPaintList(e.storage.getDisplayList()), e._furtherProgressive ? (e._progress++, y(t)) : e._progressiveToken = -1)
            }

            var e = this;
            if (e._furtherProgressive) {
                var n = e._progressiveToken = +new Date;
                e._progress++, y(t)
            }
        }, _clearProgressive: function () {
            this._progressiveToken = -1, this._progress = 0, d.each(this._progressiveLayers, function (t) {
                t.__dirty && t.clear()
            })
        }, _paintList: function (t, e) {
            null == e && (e = !1), this._updateLayerStatus(t), this._clearProgressive(), this.eachBuiltinLayer(a), this._doPaintList(t, e), this.eachBuiltinLayer(o)
        }, _doPaintList: function (t, e) {
            function n(t) {
                var e = a.dpr || 1;
                a.save(), a.globalAlpha = 1, a.shadowBlur = 0, i.__dirty = !0, a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(t.dom, 0, 0, u * e, c * e), a.restore()
            }

            for (var i, r, a, o, s, l, h = 0, u = this._width, c = this._height, f = this._progress, g = 0, v = t.length; g < v; g++) {
                var m = t[g], y = this._singleCanvas ? 0 : m.zlevel, _ = m.__frame;
                if (_ < 0 && s && (n(s), s = null), r !== y && (a && a.restore(), o = {}, r = y, i = this.getLayer(r), i.__builtin__ || p("ZLevel " + r + " has been used by unkown layer " + i.id), a = i.ctx, a.save(), i.__unusedCount = 0, (i.__dirty || e) && i.clear()), i.__dirty || e) {
                    if (_ >= 0) {
                        if (!s) {
                            if (s = this._progressiveLayers[Math.min(h++, 4)], s.ctx.save(), s.renderScope = {}, s && s.__progress > s.__maxProgress) {
                                g = s.__nextIdxNotProg - 1;
                                continue
                            }
                            l = s.__progress, s.__dirty || (f = l), s.__progress = f + 1
                        }
                        _ === f && this._doPaintEl(m, s, !0, s.renderScope)
                    } else this._doPaintEl(m, i, e, o);
                    m.__dirty = !1
                }
            }
            s && n(s), a && a.restore(), this._furtherProgressive = !1, d.each(this._progressiveLayers, function (t) {
                t.__maxProgress >= t.__progress && (this._furtherProgressive = !0)
            }, this)
        }, _doPaintEl: function (t, e, n, i) {
            var r = e.ctx, a = t.transform;
            if ((e.__dirty || n) && !t.invisible && 0 !== t.style.opacity && (!a || a[0] || a[3]) && (!t.culling || !s(t, this._width, this._height))) {
                var o = t.__clipPaths;
                (i.prevClipLayer !== e || l(o, i.prevElClipPaths)) && (i.prevElClipPaths && (i.prevClipLayer.ctx.restore(), i.prevClipLayer = i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), h(o, r), i.prevClipLayer = e, i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r)
            }
        }, getLayer: function (t) {
            if (this._singleCanvas) return this._layers[0];
            var e = this._layers[t];
            return e || (e = new m("zr_" + t, this, this.dpr), e.__builtin__ = !0, this._layerConfig[t] && d.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
        }, insertLayer: function (t, e) {
            var n = this._layers, i = this._zlevelList, a = i.length, o = null, s = -1, l = this._domRoot;
            if (n[t]) return void p("ZLevel " + t + " has been used already");
            if (!r(e)) return void p("Layer of zlevel " + t + " is not valid");
            if (a > 0 && t > i[0]) {
                for (s = 0; s < a - 1 && !(i[s] < t && i[s + 1] > t); s++) ;
                o = n[i[s]]
            }
            if (i.splice(s + 1, 0, t), n[t] = e, !e.virtual) if (o) {
                var h = o.dom;
                h.nextSibling ? l.insertBefore(e.dom, h.nextSibling) : l.appendChild(e.dom)
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
            }), d.each(n, function (t, e) {
                r[e] = t.elCount, t.elCount = 0, t.__dirty = !1
            });
            for (var a, o, s = 0, l = 0, h = 0, u = t.length; h < u; h++) {
                var c = t[h], f = this._singleCanvas ? 0 : c.zlevel, p = e[f], g = c.progressive;
                if (p && (p.elCount++, p.__dirty = p.__dirty || c.__dirty), g >= 0) {
                    o !== g && (o = g, l++);
                    var v = c.__frame = l - 1;
                    if (!a) {
                        var y = Math.min(s, 4);
                        a = n[y], a || (a = n[y] = new m("progressive", this, this.dpr), a.initContext()), a.__maxProgress = 0
                    }
                    a.__dirty = a.__dirty || c.__dirty, a.elCount++, a.__maxProgress = Math.max(a.__maxProgress, v), a.__maxProgress >= a.__progress && (p.__dirty = !0)
                } else c.__frame = -1, a && (a.__nextIdxNotProg = h, s++, a = null)
            }
            a && (s++, a.__nextIdxNotProg = h), this.eachBuiltinLayer(function (t, e) {
                i[e] !== t.elCount && (t.__dirty = !0)
            }), n.length = Math.min(s, 5), d.each(n, function (t, e) {
                r[e] !== t.elCount && (c.__dirty = !0), t.__dirty && (t.__progress = 0)
            })
        }, clear: function () {
            return this.eachBuiltinLayer(this._clearLayer), this
        }, _clearLayer: function (t) {
            t.clear()
        }, configLayer: function (t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? d.merge(n[t], e, !0) : n[t] = e;
                var i = this._layers[t];
                i && d.merge(i, n[t], !0)
            }
        }, delLayer: function (t) {
            var e = this._layers, n = this._zlevelList, i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(d.indexOf(n, t), 1))
        }, resize: function (t, e) {
            var n = this._domRoot;
            n.style.display = "none";
            var i = this._opts;
            if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
                n.style.width = t + "px", n.style.height = e + "px";
                for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                d.each(this._progressiveLayers, function (n) {
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
                o = a.shadowBlur, s = a.shadowOffsetX, l = a.shadowOffsetY, h = a.hasStroke() ? a.lineWidth : 0,
                u = Math.max(h / 2, -s + o), c = Math.max(h / 2, s + o), f = Math.max(h / 2, -l + o),
                d = Math.max(h / 2, l + o), p = r.width + u + c, g = r.height + f + d;
            n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
            var v = {position: t.position, rotation: t.rotation, scale: t.scale};
            t.position = [u - r.x, f - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
            var m = _, y = new m({style: {x: 0, y: 0, image: n}});
            return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y
        }
    };
    var S = b;
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
    var h = l;
    t.exports = h
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
    var h = l;
    t.exports = h
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
    function i(t, e, n, i, r, s, l, h, u) {
        if (0 === l) return !1;
        var c = l;
        h -= t, u -= e;
        var f = Math.sqrt(h * h + u * u);
        if (f - c > n || f + c < n) return !1;
        if (Math.abs(i - r) % o < 1e-4) return !0;
        if (s) {
            var d = i;
            i = a(r), r = a(d)
        } else i = a(i), r = a(r);
        i > r && (r += o);
        var p = Math.atan2(u, h);
        return p < 0 && (p += o), p >= i && p <= r || p + o >= i && p + o <= r
    }

    var r = n(262), a = r.normalizeRadian, o = 2 * Math.PI;
    e.containStroke = i
}, function (t, e, n) {
    function i(t, e, n, i, a, o, s, l, h, u, c) {
        if (0 === h) return !1;
        var f = h;
        return !(c > e + f && c > i + f && c > o + f && c > l + f || c < e - f && c < i - f && c < o - f && c < l - f || u > t + f && u > n + f && u > a + f && u > s + f || u < t - f && u < n - f && u < a - f && u < s - f) && r.cubicProjectPoint(t, e, n, i, a, o, s, l, u, c, null) <= f / 2
    }

    var r = n(229);
    e.containStroke = i
}, function (t, e) {
    function n(t, e, n, i, r, a, o) {
        if (0 === r) return !1;
        var s = r, l = 0, h = t;
        if (o > e + s && o > i + s || o < e - s && o < i - s || a > t + s && a > n + s || a < t - s && a < n - s) return !1;
        if (t === n) return Math.abs(a - t) <= s / 2;
        l = (e - i) / (t - n), h = (t * i - n * e) / (t - n);
        var u = l * a - o + h;
        return u * u / (l * l + 1) <= s / 2 * s / 2
    }

    e.containStroke = n
}, function (t, e, n) {
    function i(t, e) {
        return Math.abs(t - e) < b
    }

    function r() {
        var t = T[0];
        T[0] = T[1], T[1] = t
    }

    function a(t, e, n, i, a, o, s, l, h, u) {
        if (u > e && u > i && u > o && u > l || u < e && u < i && u < o && u < l) return 0;
        var c = y.cubicRootAt(e, i, o, l, u, S);
        if (0 === c) return 0;
        for (var f, d, p = 0, g = -1, v = 0; v < c; v++) {
            var m = S[v], _ = 0 === m || 1 === m ? .5 : 1;
            y.cubicAt(t, n, a, s, m) < h || (g < 0 && (g = y.cubicExtrema(e, i, o, l, T), T[1] < T[0] && g > 1 && r(), f = y.cubicAt(e, i, o, l, T[0]), g > 1 && (d = y.cubicAt(e, i, o, l, T[1]))), 2 == g ? m < T[0] ? p += f < e ? _ : -_ : m < T[1] ? p += d < f ? _ : -_ : p += l < d ? _ : -_ : m < T[0] ? p += f < e ? _ : -_ : p += l < f ? _ : -_)
        }
        return p
    }

    function o(t, e, n, i, r, a, o, s) {
        if (s > e && s > i && s > a || s < e && s < i && s < a) return 0;
        var l = y.quadraticRootAt(e, i, a, s, S);
        if (0 === l) return 0;
        var h = y.quadraticExtremum(e, i, a);
        if (h >= 0 && h <= 1) {
            for (var u = 0, c = y.quadraticAt(e, i, a, h), f = 0; f < l; f++) {
                var d = 0 === S[f] || 1 === S[f] ? .5 : 1, p = y.quadraticAt(t, n, r, S[f]);
                p < o || (S[f] < h ? u += c < e ? d : -d : u += a < c ? d : -d)
            }
            return u
        }
        var d = 0 === S[0] || 1 === S[0] ? .5 : 1, p = y.quadraticAt(t, n, r, S[0]);
        return p < o ? 0 : a < e ? d : -d
    }

    function s(t, e, n, i, r, a, o, s) {
        if ((s -= e) > n || s < -n) return 0;
        var l = Math.sqrt(n * n - s * s);
        S[0] = -l, S[1] = l;
        var h = Math.abs(i - r);
        if (h < 1e-4) return 0;
        if (h % w < 1e-4) {
            i = 0, r = w;
            var u = a ? 1 : -1;
            return o >= S[0] + t && o <= S[1] + t ? u : 0
        }
        if (a) {
            var l = i;
            i = m(r), r = m(l)
        } else i = m(i), r = m(r);
        i > r && (r += w);
        for (var c = 0, f = 0; f < 2; f++) {
            var d = S[f];
            if (d + t > o) {
                var p = Math.atan2(s, d), u = a ? 1 : -1;
                p < 0 && (p = w + p), (p >= i && p <= r || p + w >= i && p + w <= r) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (u = -u), c += u)
            }
        }
        return c
    }

    function l(t, e, n, r, l) {
        for (var h = 0, u = 0, c = 0, v = 0, m = 0, y = 0; y < t.length;) {
            var w = t[y++];
            switch (w === x.M && y > 1 && (n || (h += _(u, c, v, m, r, l))), 1 == y && (u = t[y], c = t[y + 1], v = u, m = c), w) {
                case x.M:
                    v = t[y++], m = t[y++], u = v, c = m;
                    break;
                case x.L:
                    if (n) {
                        if (f.containStroke(u, c, t[y], t[y + 1], e, r, l)) return !0
                    } else h += _(u, c, t[y], t[y + 1], r, l) || 0;
                    u = t[y++], c = t[y++];
                    break;
                case x.C:
                    if (n) {
                        if (d.containStroke(u, c, t[y++], t[y++], t[y++], t[y++], t[y], t[y + 1], e, r, l)) return !0
                    } else h += a(u, c, t[y++], t[y++], t[y++], t[y++], t[y], t[y + 1], r, l) || 0;
                    u = t[y++], c = t[y++];
                    break;
                case x.Q:
                    if (n) {
                        if (p.containStroke(u, c, t[y++], t[y++], t[y], t[y + 1], e, r, l)) return !0
                    } else h += o(u, c, t[y++], t[y++], t[y], t[y + 1], r, l) || 0;
                    u = t[y++], c = t[y++];
                    break;
                case x.A:
                    var b = t[y++], S = t[y++], T = t[y++], M = t[y++], C = t[y++], k = t[y++],
                        I = (t[y++], 1 - t[y++]), P = Math.cos(C) * T + b, A = Math.sin(C) * M + S;
                    y > 1 ? h += _(u, c, P, A, r, l) : (v = P, m = A);
                    var D = (r - b) * M / T + b;
                    if (n) {
                        if (g.containStroke(b, S, M, C, C + k, I, e, D, l)) return !0
                    } else h += s(b, S, M, C, C + k, I, D, l);
                    u = Math.cos(C + k) * T + b, c = Math.sin(C + k) * M + S;
                    break;
                case x.R:
                    v = u = t[y++], m = c = t[y++];
                    var L = t[y++], O = t[y++], P = v + L, A = m + O;
                    if (n) {
                        if (f.containStroke(v, m, P, m, e, r, l) || f.containStroke(P, m, P, A, e, r, l) || f.containStroke(P, A, v, A, e, r, l) || f.containStroke(v, A, v, m, e, r, l)) return !0
                    } else h += _(P, m, P, A, r, l), h += _(v, A, v, m, r, l);
                    break;
                case x.Z:
                    if (n) {
                        if (f.containStroke(u, c, v, m, e, r, l)) return !0
                    } else h += _(u, c, v, m, r, l);
                    u = v, c = m
            }
        }
        return n || i(c, m) || (h += _(u, c, v, m, r, l) || 0), 0 !== h
    }

    function h(t, e, n) {
        return l(t, 0, !1, e, n)
    }

    function u(t, e, n, i) {
        return l(t, e, !0, n, i)
    }

    var c = n(238), f = n(318), d = n(317), p = n(321), g = n(316), v = n(262), m = v.normalizeRadian, y = n(229),
        _ = n(263), x = c.CMD, w = 2 * Math.PI, b = 1e-4, S = [-1, -1, -1], T = [-1, -1];
    e.contain = h, e.containStroke = u
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
        var h = t[0];
        return i(o[0], h[0]) && i(o[1], h[1]) || (r += a(o[0], o[1], h[0], h[1], e, n)), 0 !== r
    }

    var a = n(263), o = 1e-8;
    e.contain = r
}, function (t, e, n) {
    function i(t, e, n, i, r, o, s, l, h) {
        if (0 === s) return !1;
        var u = s;
        return !(h > e + u && h > i + u && h > o + u || h < e - u && h < i - u && h < o - u || l > t + u && l > n + u && l > r + u || l < t - u && l < n - u && l < r - u) && a(t, e, n, i, r, o, l, h, null) <= u / 2
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
                    var l = i[o], h = a.clientToLocal(n, l, {});
                    r.points.push([h.zrX, h.zrY]), r.touches.push(l)
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

        d.each(y, function (e) {
            t._handlers[e] = d.bind(w[e], t)
        }), d.each(x, function (e) {
            t._handlers[e] = d.bind(w[e], t)
        }), d.each(m, function (n) {
            t._handlers[n] = e(w[n], t)
        })
    }

    function l(t) {
        function e(e, n) {
            d.each(e, function (e) {
                u(t, i(e), n._handlers[e])
            }, n)
        }

        p.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new v, this._handlers = {}, s(this), g.pointerEventsSupported ? e(x, this) : (g.touchEventsSupported && e(y, this), e(m, this))
    }

    var h = n(233), u = h.addEventListener, c = h.removeEventListener, f = h.normalizeEvent, d = n(208), p = n(230),
        g = n(216), v = n(322),
        m = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        y = ["touchstart", "touchend", "touchmove"], _ = {pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1},
        x = d.map(m, function (t) {
            var e = t.replace("mouse", "pointer");
            return _[e] ? e : t
        }), w = {
            mousemove: function (t) {
                t = f(this.dom, t), this.trigger("mousemove", t)
            }, mouseout: function (t) {
                t = f(this.dom, t);
                var e = t.toElement || t.relatedTarget;
                if (e != this.dom) for (; e && 9 != e.nodeType;) {
                    if (e === this.dom) return;
                    e = e.parentNode
                }
                this.trigger("mouseout", t)
            }, touchstart: function (t) {
                t = f(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, r(this, t, "start"), w.mousemove.call(this, t), w.mousedown.call(this, t), a(this)
            }, touchmove: function (t) {
                t = f(this.dom, t), t.zrByTouch = !0, r(this, t, "change"), w.mousemove.call(this, t), a(this)
            }, touchend: function (t) {
                t = f(this.dom, t), t.zrByTouch = !0, r(this, t, "end"), w.mouseup.call(this, t), +new Date - this._lastTouchMoment < 300 && w.click.call(this, t), a(this)
            }, pointerdown: function (t) {
                w.mousedown.call(this, t)
            }, pointermove: function (t) {
                o(t) || w.mousemove.call(this, t)
            }, pointerup: function (t) {
                w.mouseup.call(this, t)
            }, pointerout: function (t) {
                o(t) || w.mouseout.call(this, t)
            }
        };
    d.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        w[t] = function (e) {
            e = f(this.dom, e), this.trigger(t, e)
        }
    });
    var b = l.prototype;
    b.dispose = function () {
        for (var t = m.concat(y), e = 0; e < t.length; e++) {
            var n = t[e];
            c(this.dom, i(n), this._handlers[n])
        }
    }, b.setCursor = function (t) {
        this.dom.style.cursor = t || "default"
    }, d.mixin(l, p);
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
        var r, f, d, p, g = [], v = [], m = [], y = [];
        if (i) {
            d = [1 / 0, 1 / 0], p = [-1 / 0, -1 / 0];
            for (var _ = 0, x = t.length; _ < x; _++) a(d, d, t[_]), o(p, p, t[_]);
            a(d, d, i[0]), o(p, p, i[1])
        }
        for (var _ = 0, x = t.length; _ < x; _++) {
            var w = t[_];
            if (n) r = t[_ ? _ - 1 : x - 1], f = t[(_ + 1) % x]; else {
                if (0 === _ || _ === x - 1) {
                    g.push(u(t[_]));
                    continue
                }
                r = t[_ - 1], f = t[_ + 1]
            }
            c(v, f, r), s(v, v, e);
            var b = l(w, r), S = l(w, f), T = b + S;
            0 !== T && (b /= T, S /= T), s(m, v, -b), s(y, v, S);
            var M = h([], w, m), C = h([], w, y);
            i && (o(M, M, d), a(M, M, p), o(C, C, d), a(C, C, p)), g.push(M), g.push(C)
        }
        return n && g.push(g.shift()), g
    }

    var r = n(213), a = r.min, o = r.max, s = r.scale, l = r.distance, h = r.add, u = r.clone, c = r.sub;
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
            var h, u, c, f = s / (l - 1) * (e ? n : n - 1), d = Math.floor(f), p = f - d, g = t[d % n];
            e ? (h = t[(d - 1 + n) % n], u = t[(d + 1) % n], c = t[(d + 2) % n]) : (h = t[0 === d ? d : d - 1], u = t[d > n - 2 ? n - 1 : d + 1], c = t[d > n - 3 ? n - 1 : d + 2]);
            var v = p * p, m = p * v;
            r.push([i(h[0], g[0], u[0], c[0], p, v, m), i(h[1], g[1], u[1], c[1], p, v, m)])
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
                l = Math.cos(a), h = Math.sin(a);
            t.moveTo(l * r + n, h * r + i), t.arc(n, i, r, a, o, !s)
        }
    });
    t.exports = r
}, function (t, e, n) {
    function i(t, e, n) {
        var i = t.cpx2, r = t.cpy2;
        return null === i || null === r ? [(n ? f : u)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? f : u)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? c : h)(t.x1, t.cpx1, t.x2, e), (n ? c : h)(t.y1, t.cpy1, t.y2, e)]
    }

    var r = n(215), a = n(213), o = n(229), s = o.quadraticSubdivide, l = o.cubicSubdivide, h = o.quadraticAt,
        u = o.cubicAt, c = o.quadraticDerivativeAt, f = o.cubicDerivativeAt, d = [], p = r.extend({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var n = e.x1, i = e.y1, r = e.x2, a = e.y2, o = e.cpx1, h = e.cpy1, u = e.cpx2, c = e.cpy2, f = e.percent;
                0 !== f && (t.moveTo(n, i), null == u || null == c ? (f < 1 && (s(n, o, r, f, d), o = d[1], r = d[2], s(i, h, a, f, d), h = d[1], a = d[2]), t.quadraticCurveTo(o, h, r, a)) : (f < 1 && (l(n, o, u, r, f, d), o = d[1], u = d[2], r = d[3], l(i, h, c, a, f, d), h = d[1], c = d[2], a = d[3]), t.bezierCurveTo(o, h, u, c, r, a)))
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
                l = e.clockwise, h = Math.cos(o), u = Math.sin(o);
            t.moveTo(h * r + n, u * r + i), t.lineTo(h * a + n, u * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath()
        }
    });
    t.exports = a
}, function (t, e, n) {
    var i = n(260), r = n(267), a = n(208), o = a.isString, s = a.isFunction, l = a.isObject, h = a.isArrayLike,
        u = a.indexOf, c = function () {
            this.animators = []
        };
    c.prototype = {
        constructor: c, animate: function (t, e) {
            var n, a = !1, o = this, s = this.__zr;
            if (t) {
                var l = t.split("."), h = o;
                a = "shape" === l[0];
                for (var c = 0, f = l.length; c < f; c++) h && (h = h[l[c]]);
                h && (n = h)
            } else n = o;
            if (!n) return void r('Property "' + t + '" is not existed in element ' + o.id);
            var d = o.animators, p = new i(n, e);
            return p.during(function (t) {
                o.dirty(a)
            }).done(function () {
                d.splice(u(d, p), 1)
            }), d.push(p), s && s.animation.addAnimator(p), p
        }, stopAnimation: function (t) {
            for (var e = this.animators, n = e.length, i = 0; i < n; i++) e[i].stop(t);
            return e.length = 0, this
        }, animateTo: function (t, e, n, i, r, a) {
            function l() {
                --u || r && r()
            }

            o(n) ? (r = i, i = n, n = 0) : s(i) ? (r = i, i = "linear", n = 0) : s(n) ? (r = n, n = 0) : s(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, n);
            var h = this.animators.slice(), u = h.length;
            u || r && r();
            for (var c = 0; c < h.length; c++) h[c].done(l).start(i, a)
        }, _animateToShallow: function (t, e, n, i, r) {
            var a = {}, o = 0;
            for (var s in n) if (n.hasOwnProperty(s)) if (null != e[s]) l(n[s]) && !h(n[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], n[s], i, r) : (a[s] = n[s], o++); else if (null != n[s]) if (t) {
                var u = {};
                u[t] = {}, u[t][s] = n[s], this.attr(u)
            } else this.attr(s, n[s]);
            return o > 0 && this.animate(t, !1).when(null == i ? 500 : i, a).delay(r || 0), this
        }
    };
    var f = c;
    t.exports = f
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
    function i(t, e, n, i, r, a, o, s, l, h, u) {
        var c = l * (v / 180), f = g(c) * (t - n) / 2 + p(c) * (e - i) / 2,
            m = -1 * p(c) * (t - n) / 2 + g(c) * (e - i) / 2, x = f * f / (o * o) + m * m / (s * s);
        x > 1 && (o *= d(x), s *= d(x));
        var w = (r === a ? -1 : 1) * d((o * o * (s * s) - o * o * (m * m) - s * s * (f * f)) / (o * o * (m * m) + s * s * (f * f))) || 0,
            b = w * o * m / s, S = w * -s * f / o, T = (t + n) / 2 + g(c) * b - p(c) * S,
            M = (e + i) / 2 + p(c) * b + g(c) * S, C = _([1, 0], [(f - b) / o, (m - S) / s]),
            k = [(f - b) / o, (m - S) / s], I = [(-1 * f - b) / o, (-1 * m - S) / s], P = _(k, I);
        y(k, I) <= -1 && (P = v), y(k, I) >= 1 && (P = 0), 0 === a && P > 0 && (P -= 2 * v), 1 === a && P < 0 && (P += 2 * v), u.addData(h, T, M, o, s, C, P, c, a)
    }

    function r(t) {
        if (!t) return [];
        var e, n = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
        for (e = 0; e < f.length; e++) n = n.replace(new RegExp(f[e], "g"), "|" + f[e]);
        var r, a = n.split("|"), o = 0, s = 0, l = new u, h = u.CMD;
        for (e = 1; e < a.length; e++) {
            var c, d = a[e], p = d.charAt(0), g = 0, v = d.slice(1).replace(/e,-/g, "e-").split(",");
            v.length > 0 && "" === v[0] && v.shift();
            for (var m = 0; m < v.length; m++) v[m] = parseFloat(v[m]);
            for (; g < v.length && !isNaN(v[g]) && !isNaN(v[0]);) {
                var y, _, x, w, b, S, T, M = o, C = s;
                switch (p) {
                    case"l":
                        o += v[g++], s += v[g++], c = h.L, l.addData(c, o, s);
                        break;
                    case"L":
                        o = v[g++], s = v[g++], c = h.L, l.addData(c, o, s);
                        break;
                    case"m":
                        o += v[g++], s += v[g++], c = h.M, l.addData(c, o, s), p = "l";
                        break;
                    case"M":
                        o = v[g++], s = v[g++], c = h.M, l.addData(c, o, s), p = "L";
                        break;
                    case"h":
                        o += v[g++], c = h.L, l.addData(c, o, s);
                        break;
                    case"H":
                        o = v[g++], c = h.L, l.addData(c, o, s);
                        break;
                    case"v":
                        s += v[g++], c = h.L, l.addData(c, o, s);
                        break;
                    case"V":
                        s = v[g++], c = h.L, l.addData(c, o, s);
                        break;
                    case"C":
                        c = h.C, l.addData(c, v[g++], v[g++], v[g++], v[g++], v[g++], v[g++]), o = v[g - 2], s = v[g - 1];
                        break;
                    case"c":
                        c = h.C, l.addData(c, v[g++] + o, v[g++] + s, v[g++] + o, v[g++] + s, v[g++] + o, v[g++] + s), o += v[g - 2], s += v[g - 1];
                        break;
                    case"S":
                        y = o, _ = s;
                        var k = l.len(), I = l.data;
                        r === h.C && (y += o - I[k - 4], _ += s - I[k - 3]), c = h.C, M = v[g++], C = v[g++], o = v[g++], s = v[g++], l.addData(c, y, _, M, C, o, s);
                        break;
                    case"s":
                        y = o, _ = s;
                        var k = l.len(), I = l.data;
                        r === h.C && (y += o - I[k - 4], _ += s - I[k - 3]), c = h.C, M = o + v[g++], C = s + v[g++], o += v[g++], s += v[g++], l.addData(c, y, _, M, C, o, s);
                        break;
                    case"Q":
                        M = v[g++], C = v[g++], o = v[g++], s = v[g++], c = h.Q, l.addData(c, M, C, o, s);
                        break;
                    case"q":
                        M = v[g++] + o, C = v[g++] + s, o += v[g++], s += v[g++], c = h.Q, l.addData(c, M, C, o, s);
                        break;
                    case"T":
                        y = o, _ = s;
                        var k = l.len(), I = l.data;
                        r === h.Q && (y += o - I[k - 4], _ += s - I[k - 3]), o = v[g++], s = v[g++], c = h.Q, l.addData(c, y, _, o, s);
                        break;
                    case"t":
                        y = o, _ = s;
                        var k = l.len(), I = l.data;
                        r === h.Q && (y += o - I[k - 4], _ += s - I[k - 3]), o += v[g++], s += v[g++], c = h.Q, l.addData(c, y, _, o, s);
                        break;
                    case"A":
                        x = v[g++], w = v[g++], b = v[g++], S = v[g++], T = v[g++], M = o, C = s, o = v[g++], s = v[g++], c = h.A, i(M, C, o, s, S, T, x, w, b, c, l);
                        break;
                    case"a":
                        x = v[g++], w = v[g++], b = v[g++], S = v[g++], T = v[g++], M = o, C = s, o += v[g++], s += v[g++], c = h.A, i(M, C, o, s, S, T, x, w, b, c, l)
                }
            }
            "z" !== p && "Z" !== p || (c = h.Z, l.addData(c)), r = c
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
        return new h(a(t, e))
    }

    function s(t, e) {
        return h.extend(a(t, e))
    }

    function l(t, e) {
        for (var n = [], i = t.length, r = 0; r < i; r++) {
            var a = t[r];
            a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path)
        }
        var o = new h(e);
        return o.createPathProxy(), o.buildPath = function (t) {
            t.appendPath(n);
            var e = t.getContext();
            e && t.rebuildPath(e)
        }, o
    }

    var h = n(215), u = n(238), c = n(343),
        f = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
        d = Math.sqrt, p = Math.sin, g = Math.cos, v = Math.PI, m = function (t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        }, y = function (t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (m(t) * m(e))
        }, _ = function (t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(y(t, e))
        };
    e.createFromString = o, e.extendFromString = s, e.mergePath = l
}, function (t, e, n) {
    function i(t, e) {
        var n, i, r, a, c, f, d = t.data, p = s.M, g = s.C, v = s.L, m = s.R, y = s.A, _ = s.Q;
        for (r = 0, a = 0; r < d.length;) {
            switch (n = d[r++], a = r, i = 0, n) {
                case p:
                case v:
                    i = 1;
                    break;
                case g:
                    i = 3;
                    break;
                case _:
                    i = 2;
                    break;
                case y:
                    var x = e[4], w = e[5], b = h(e[0] * e[0] + e[1] * e[1]), S = h(e[2] * e[2] + e[3] * e[3]),
                        T = u(-e[1] / S, e[0] / b);
                    d[r] *= b, d[r++] += x, d[r] *= S, d[r++] += w, d[r++] *= b, d[r++] *= S, d[r++] += T, d[r++] += T, r += 2, a = r;
                    break;
                case m:
                    f[0] = d[r++], f[1] = d[r++], o(f, f, e), d[a++] = f[0], d[a++] = f[1], f[0] += d[r++], f[1] += d[r++], o(f, f, e), d[a++] = f[0], d[a++] = f[1]
            }
            for (c = 0; c < i; c++) {
                var f = l[c];
                f[0] = d[r++], f[1] = d[r++], o(f, f, e), d[a++] = f[0], d[a++] = f[1]
            }
        }
    }

    var r = n(238), a = n(213), o = a.applyTransform, s = r.CMD, l = [[], [], []], h = Math.sqrt, u = Math.atan2;
    t.exports = i
}, , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(209), r = n.n(i), a = n(424), o = (n.n(a), n(289)), s = (n.n(o), n(284));
    n.n(s);
    e.default = {
        mounted: function () {
            this.myChart = r.a.init(document.getElementById("visitorpie")), this.initData()
        }, props: ["pieData"], methods: {
            initData: function () {
                var t = {
                    title: {text: "用户分布", subtext: "", x: "center"},
                    tooltip: {trigger: "item", formatter: "{a} <br/>{b} : {c} ({d}%)"},
                    legend: {orient: "vertical", left: "left", data: ["北京", "上海", "深圳", "杭州", "其他"]},
                    series: [{
                        name: "访问来源",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "60%"],
                        data: [{value: this.pieData.beijing, name: "北京"}, {
                            value: this.pieData.shanghai,
                            name: "上海"
                        }, {value: this.pieData.shenzhen, name: "深圳"}, {
                            value: this.pieData.hangzhou,
                            name: "杭州"
                        }, {value: this.pieData.qita, name: "其他"}],
                        itemStyle: {emphasis: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)"}}
                    }]
                };
                this.myChart.setOption(t)
            }
        }, watch: {
            pieData: function () {
                this.initData()
            }
        }
    }
}, , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(51), r = n.n(i), a = n(50), o = n.n(a), s = n(220), l = n.n(s), h = n(507), u = n.n(h), c = n(88);
    e.default = {
        data: function () {
            return {pieData: {}}
        }, components: {headTop: l.a, visitorPie: u.a}, mounted: function () {
            this.initData()
        }, methods: {
            initData: function () {
                var t = this;
                return o()(r.a.mark(function e() {
                    var i;
                    return r.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, n.i(c.c)();
                            case 3:
                                if (i = e.sent, 1 != i.status) {
                                    e.next = 8;
                                    break
                                }
                                t.pieData = i.user_city, e.next = 9;
                                break;
                            case 8:
                                throw new Error(i);
                            case 9:
                                e.next = 14;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(0), console.log("获取用户分布信息失败", e.t0);
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }, e, t, [[0, 11]])
                }))()
            }
        }
    }
}, , , , , , , , , , , , , , , , , function (t, e, n) {
    e = t.exports = n(188)(!1), e.push([t.i, ".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.visitorpie{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-top:20px}", ""])
}, , , , , , , , , , , function (t, e, n) {
    e = t.exports = n(188)(!1), e.push([t.i, ".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}", ""])
}, , , , function (t, e, n) {
    function i(t, e) {
        a.each(e, function (e) {
            e.update = "updateView", r.registerAction(e, function (n, i) {
                var r = {};
                return i.eachComponent({mainType: "series", subType: t, query: n}, function (t) {
                    t[e.method] && t[e.method](n.name, n.dataIndex);
                    var i = t.getData();
                    i.each(function (e) {
                        var n = i.getName(e);
                        r[n] = t.isSelected(n) || !1
                    })
                }), {name: n.name, selected: r}
            })
        })
    }

    var r = n(209), a = n(208);
    t.exports = i
}, , , , , , , , , , , , , function (t, e, n) {
    var i = n(209), r = n(208);
    n(425), n(426);
    var a = n(411), o = n(479), s = n(428), l = n(477);
    a("pie", [{type: "pieToggleSelect", event: "pieselectchanged", method: "toggleSelected"}, {
        type: "pieSelect",
        event: "pieselected",
        method: "select"
    }, {
        type: "pieUnSelect",
        event: "pieunselected",
        method: "unSelect"
    }]), i.registerVisual(r.curry(o, "pie")), i.registerLayout(r.curry(s, "pie")), i.registerProcessor(r.curry(l, "pie"))
}, function (t, e, n) {
    var i = n(209), r = n(241), a = n(208), o = n(211), s = n(212), l = s.getPercentWithPrecision, h = n(250),
        u = n(449), c = i.extendSeriesModel({
            type: "series.pie",
            init: function (t) {
                c.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this.getRawData()
                }, this.updateSelectedMap(t.data), this._defaultLabelLine(t)
            },
            mergeOption: function (t) {
                c.superCall(this, "mergeOption", t), this.updateSelectedMap(this.option.data)
            },
            getInitialData: function (t, e) {
                var n = h(["value"], t.data), i = new r(n, this);
                return i.initData(t.data), i
            },
            getDataParams: function (t) {
                var e = this.getData(), n = c.superCall(this, "getDataParams", t), i = [];
                return e.each("value", function (t) {
                    i.push(t)
                }), n.percent = l(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n
            },
            _defaultLabelLine: function (t) {
                o.defaultEmphasis(t.labelLine, ["show"]);
                var e = t.labelLine.normal, n = t.labelLine.emphasis;
                e.show = e.show && t.label.normal.show, n.show = n.show && t.label.emphasis.show
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                center: ["50%", "50%"],
                radius: [0, "75%"],
                clockwise: !0,
                startAngle: 90,
                minAngle: 0,
                selectedOffset: 10,
                hoverOffset: 10,
                avoidLabelOverlap: !0,
                percentPrecision: 2,
                stillShowZeroSum: !0,
                label: {normal: {rotate: !1, show: !0, position: "outer"}, emphasis: {}},
                labelLine: {normal: {show: !0, length: 15, length2: 15, smooth: !1, lineStyle: {width: 1, type: "solid"}}},
                itemStyle: {normal: {borderWidth: 1}, emphasis: {}},
                animationType: "expansion",
                animationEasing: "cubicOut",
                data: []
            }
        });
    a.mixin(c, u);
    var f = c;
    t.exports = f
}, function (t, e, n) {
    function i(t, e, n, i) {
        var a = e.getData(), o = this.dataIndex, s = a.getName(o), l = e.get("selectedOffset");
        i.dispatchAction({type: "pieToggleSelect", from: t, name: s, seriesId: e.id}), a.each(function (t) {
            r(a.getItemGraphicEl(t), a.getItemLayout(t), e.isSelected(a.getName(t)), l, n)
        })
    }

    function r(t, e, n, i, r) {
        var a = (e.startAngle + e.endAngle) / 2, o = Math.cos(a), s = Math.sin(a), l = n ? i : 0, h = [o * l, s * l];
        r ? t.animate().when(200, {position: h}).start("bounceOut") : t.attr("position", h)
    }

    function a(t, e) {
        function n() {
            a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore
        }

        function i() {
            a.ignore = a.normalIgnore, o.ignore = o.normalIgnore
        }

        s.Group.call(this);
        var r = new s.Sector({z2: 2}), a = new s.Polyline, o = new s.Text;
        this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
    }

    var o = n(208), s = n(210), l = n(258), h = a.prototype;
    h.updateData = function (t, e, n) {
        function i() {
            l.stopAnimation(!0), l.animateTo({shape: {r: c.r + h.get("hoverOffset")}}, 300, "elasticOut")
        }

        function a() {
            l.stopAnimation(!0), l.animateTo({shape: {r: c.r}}, 300, "elasticOut")
        }

        var l = this.childAt(0), h = t.hostModel, u = t.getItemModel(e), c = t.getItemLayout(e), f = o.extend({}, c);
        if (f.label = null, n) {
            l.setShape(f);
            "scale" === h.getShallow("animationType") ? (l.shape.r = c.r0, s.initProps(l, {shape: {r: c.r}}, h, e)) : (l.shape.endAngle = c.startAngle, s.updateProps(l, {shape: {endAngle: c.endAngle}}, h, e))
        } else s.updateProps(l, {shape: f}, h, e);
        var d = u.getModel("itemStyle"), p = t.getItemVisual(e, "color");
        l.useStyle(o.defaults({
            lineJoin: "bevel",
            fill: p
        }, d.getModel("normal").getItemStyle())), l.hoverStyle = d.getModel("emphasis").getItemStyle();
        var g = u.getShallow("cursor");
        g && l.attr("cursor", g), r(this, t.getItemLayout(e), u.get("selected"), h.get("selectedOffset"), h.get("animation")), l.off("mouseover").off("mouseout").off("emphasis").off("normal"), u.get("hoverAnimation") && h.isAnimationEnabled() && l.on("mouseover", i).on("mouseout", a).on("emphasis", i).on("normal", a), this._updateLabel(t, e), s.setHoverStyle(this)
    }, h._updateLabel = function (t, e) {
        var n = this.childAt(1), i = this.childAt(2), r = t.hostModel, a = t.getItemModel(e), o = t.getItemLayout(e),
            l = o.label, h = t.getItemVisual(e, "color");
        s.updateProps(n, {shape: {points: l.linePoints || [[l.x, l.y], [l.x, l.y], [l.x, l.y]]}}, r, e), s.updateProps(i, {
            style: {
                x: l.x,
                y: l.y
            }
        }, r, e), i.attr({rotation: l.rotation, origin: [l.x, l.y], z2: 10});
        var u = a.getModel("label.normal"), c = a.getModel("label.emphasis"), f = a.getModel("labelLine.normal"),
            d = a.getModel("labelLine.emphasis"), h = t.getItemVisual(e, "color");
        s.setLabelStyle(i.style, i.hoverStyle = {}, u, c, {
            labelFetcher: t.hostModel,
            labelDataIndex: e,
            defaultText: t.getName(e),
            autoColor: h,
            useInsideStyle: !!l.inside
        }, {
            textAlign: l.textAlign,
            textVerticalAlign: l.verticalAlign,
            opacity: t.getItemVisual(e, "opacity")
        }), i.ignore = i.normalIgnore = !u.get("show"), i.hoverIgnore = !c.get("show"), n.ignore = n.normalIgnore = !f.get("show"), n.hoverIgnore = !d.get("show"), n.setStyle({
            stroke: h,
            opacity: t.getItemVisual(e, "opacity")
        }), n.setStyle(f.getModel("lineStyle").getLineStyle()), n.hoverStyle = d.getModel("lineStyle").getLineStyle();
        var p = f.get("smooth");
        p && !0 === p && (p = .4), n.setShape({smooth: p})
    }, o.inherits(a, s.Group);
    var u = l.extend({
        type: "pie", init: function () {
            var t = new s.Group;
            this._sectorGroup = t
        }, render: function (t, e, n, r) {
            if (!r || r.from !== this.uid) {
                var s = t.getData(), l = this._data, h = this.group, u = e.get("animation"), c = !l,
                    f = t.get("animationType"), d = o.curry(i, this.uid, t, u, n), p = t.get("selectedMode");
                if (s.diff(l).add(function (t) {
                    var e = new a(s, t);
                    c && "scale" !== f && e.eachChild(function (t) {
                        t.stopAnimation(!0)
                    }), p && e.on("click", d), s.setItemGraphicEl(t, e), h.add(e)
                }).update(function (t, e) {
                    var n = l.getItemGraphicEl(e);
                    n.updateData(s, t), n.off("click"), p && n.on("click", d), h.add(n), s.setItemGraphicEl(t, n)
                }).remove(function (t) {
                    var e = l.getItemGraphicEl(t);
                    h.remove(e)
                }).execute(), u && c && s.count() > 0 && "scale" !== f) {
                    var g = s.getItemLayout(0), v = Math.max(n.getWidth(), n.getHeight()) / 2,
                        m = o.bind(h.removeClipPath, h);
                    h.setClipPath(this._createClipPath(g.cx, g.cy, v, g.startAngle, g.clockwise, m, t))
                }
                this._data = s
            }
        }, dispose: function () {
        }, _createClipPath: function (t, e, n, i, r, a, o) {
            var l = new s.Sector({shape: {cx: t, cy: e, r0: 0, r: n, startAngle: i, endAngle: i, clockwise: r}});
            return s.initProps(l, {shape: {endAngle: i + (r ? 1 : -1) * Math.PI * 2}}, o, a), l
        }, containPoint: function (t, e) {
            var n = e.getData(), i = n.getItemLayout(0);
            if (i) {
                var r = t[0] - i.cx, a = t[1] - i.cy, o = Math.sqrt(r * r + a * a);
                return o <= i.r && o >= i.r0
            }
        }
    }), c = u;
    t.exports = c
}, function (t, e, n) {
    function i(t, e, n, i, r, a, o) {
        function s(e, n) {
            for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--) ;
        }

        function l(t, e, n, i, r, a) {
            for (var o = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++) if ("center" !== t[s].position) {
                var h = Math.abs(t[s].y - i), u = t[s].len, c = t[s].len2,
                    f = h < r + u ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);
                e && f >= o && (f = o - 10), !e && f <= o && (f = o + 10), t[s].x = n + f * a, o = f
            }
        }

        t.sort(function (t, e) {
            return t.y - e.y
        });
        for (var h, u = 0, c = t.length, f = [], d = [], p = 0; p < c; p++) h = t[p].y - u, h < 0 && function (e, n, i, r) {
            for (var a = e; a < n; a++) if (t[a].y += i, a > e && a + 1 < n && t[a + 1].y > t[a].y + t[a].height) return void s(a, i / 2);
            s(n - 1, i / 2)
        }(p, c, -h), u = t[p].y + t[p].height;
        o - u < 0 && s(c - 1, u - o);
        for (var p = 0; p < c; p++) t[p].y >= n ? d.push(t[p]) : f.push(t[p]);
        l(f, !1, e, n, i, r), l(d, !0, e, n, i, r)
    }

    function r(t, e, n, r, a, o) {
        for (var s = [], l = [], h = 0; h < t.length; h++) t[h].x < e ? s.push(t[h]) : l.push(t[h]);
        i(l, e, n, r, 1, a, o), i(s, e, n, r, -1, a, o);
        for (var h = 0; h < t.length; h++) {
            var u = t[h].linePoints;
            if (u) {
                var c = u[1][0] - u[2][0];
                t[h].x < e ? u[2][0] = t[h].x + 3 : u[2][0] = t[h].x - 3, u[1][1] = u[2][1] = t[h].y, u[1][0] = u[2][0] + c
            }
        }
    }

    function a(t, e, n, i) {
        var a, s, l = t.getData(), h = [], u = !1;
        l.each(function (n) {
            var i, r, c, f, d = l.getItemLayout(n), p = l.getItemModel(n), g = p.getModel("label.normal"),
                v = g.get("position") || p.get("label.emphasis.position"), m = p.getModel("labelLine.normal"),
                y = m.get("length"), _ = m.get("length2"), x = (d.startAngle + d.endAngle) / 2, w = Math.cos(x),
                b = Math.sin(x);
            a = d.cx, s = d.cy;
            var S = "inside" === v || "inner" === v;
            if ("center" === v) i = d.cx, r = d.cy, f = "center"; else {
                var T = (S ? (d.r + d.r0) / 2 * w : d.r * w) + a, M = (S ? (d.r + d.r0) / 2 * b : d.r * b) + s;
                if (i = T + 3 * w, r = M + 3 * b, !S) {
                    var C = T + w * (y + e - d.r), k = M + b * (y + e - d.r), I = C + (w < 0 ? -1 : 1) * _, P = k;
                    i = I + (w < 0 ? -5 : 5), r = P, c = [[T, M], [C, k], [I, P]]
                }
                f = S ? "center" : w > 0 ? "left" : "right"
            }
            var A = g.getFont(), D = g.get("rotate") ? w < 0 ? -x + Math.PI : -x : 0,
                L = t.getFormattedLabel(n, "normal") || l.getName(n), O = o.getBoundingRect(L, A, f, "top");
            u = !!D, d.label = {
                x: i,
                y: r,
                position: v,
                height: O.height,
                len: y,
                len2: _,
                linePoints: c,
                textAlign: f,
                verticalAlign: "middle",
                rotation: D,
                inside: S
            }, S || h.push(d.label)
        }), !u && t.get("avoidLabelOverlap") && r(h, a, s, e, n, i)
    }

    var o = n(228);
    t.exports = a
}, function (t, e, n) {
    function i(t, e, n, i) {
        e.eachSeriesByType(t, function (t) {
            var e = t.get("center"), i = t.get("radius");
            l.isArray(i) || (i = [0, i]), l.isArray(e) || (e = [e, e]);
            var r = n.getWidth(), c = n.getHeight(), f = Math.min(r, c), d = a(e[0], r), p = a(e[1], c),
                g = a(i[0], f / 2), v = a(i[1], f / 2), m = t.getData(), y = -t.get("startAngle") * u,
                _ = t.get("minAngle") * u, x = 0;
            m.each("value", function (t) {
                !isNaN(t) && x++
            });
            var w = m.getSum("value"), b = Math.PI / (w || x) * 2, S = t.get("clockwise"), T = t.get("roseType"),
                M = t.get("stillShowZeroSum"), C = m.getDataExtent("value");
            C[0] = 0;
            var k = h, I = 0, P = y, A = S ? 1 : -1;
            if (m.each("value", function (t, e) {
                var n;
                if (isNaN(t)) return void m.setItemLayout(e, {
                    angle: NaN,
                    startAngle: NaN,
                    endAngle: NaN,
                    clockwise: S,
                    cx: d,
                    cy: p,
                    r0: g,
                    r: T ? NaN : v
                });
                n = "area" !== T ? 0 === w && M ? b : t * b : h / x, n < _ ? (n = _, k -= _) : I += t;
                var i = P + A * n;
                m.setItemLayout(e, {
                    angle: n,
                    startAngle: P,
                    endAngle: i,
                    clockwise: S,
                    cx: d,
                    cy: p,
                    r0: g,
                    r: T ? o(t, C, [g, v]) : v
                }), P = i
            }, !0), k < h && x) if (k <= .001) {
                var D = h / x;
                m.each("value", function (t, e) {
                    if (!isNaN(t)) {
                        var n = m.getItemLayout(e);
                        n.angle = D, n.startAngle = y + A * e * D, n.endAngle = y + A * (e + 1) * D
                    }
                })
            } else b = k / I, P = y, m.each("value", function (t, e) {
                if (!isNaN(t)) {
                    var n = m.getItemLayout(e), i = n.angle === _ ? _ : t * b;
                    n.startAngle = P, n.endAngle = P + A * i, P += A * i
                }
            });
            s(t, v, r, c)
        })
    }

    var r = n(212), a = r.parsePercent, o = r.linearMap, s = n(427), l = n(208), h = 2 * Math.PI, u = Math.PI / 180;
    t.exports = i
}, , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    var i = n(208), r = {
        updateSelectedMap: function (t) {
            this._targetList = t.slice(), this._selectTargetMap = i.reduce(t || [], function (t, e) {
                return t.set(e.name, e), t
            }, i.createHashMap())
        }, select: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            "single" === this.get("selectedMode") && this._selectTargetMap.each(function (t) {
                t.selected = !1
            }), n && (n.selected = !0)
        }, unSelect: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            n && (n.selected = !1)
        }, toggleSelected: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            if (null != n) return this[n.selected ? "unSelect" : "select"](t, e), n.selected
        }, isSelected: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return n && n.selected
        }
    };
    t.exports = r
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) {
    function n(t, e) {
        var n = e.findComponents({mainType: "legend"});
        n && n.length && e.eachSeriesByType(t, function (t) {
            var e = t.getData();
            e.filterSelf(function (t) {
                for (var i = e.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(i)) return !1;
                return !0
            }, this)
        }, this)
    }

    t.exports = n
}, , function (t, e) {
    function n(t, e) {
        var n = {};
        e.eachRawSeriesByType(t, function (t) {
            var i = t.getRawData(), r = {};
            if (!e.isSeriesFiltered(t)) {
                var a = t.getData();
                a.each(function (t) {
                    var e = a.getRawIndex(t);
                    r[e] = t
                }), i.each(function (e) {
                    var o = r[e], s = null != o && a.getItemVisual(o, "color", !0);
                    if (s) i.setItemVisual(e, "color", s); else {
                        var l = i.getItemModel(e),
                            h = l.get("itemStyle.normal.color") || t.getColorFromPalette(i.getName(e), n);
                        i.setItemVisual(e, "color", h), null != o && a.setItemVisual(o, "color", h)
                    }
                })
            }
        })
    }

    t.exports = n
}, , , , , , , , , , function (t, e, n) {
    var i = n(396);
    "string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);
    n(189)("01e08422", i, !0)
}, , , , , , , , , , , function (t, e, n) {
    var i = n(407);
    "string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);
    n(189)("08e4d415", i, !0)
}, , , , , , , function (t, e, n) {
    n(489);
    var i = n(87)(n(363), n(514), null, null);
    t.exports = i.exports
}, , , , , , , function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            t._self._c;
            return t._m(0)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "visitorpie"}, [n("div", {
                staticStyle: {width: "90%", height: "450px"},
                attrs: {id: "visitorpie"}
            })])
        }]
    }
}, , , , , , , , , , , function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("head-top"), t._v(" "), n("visitor-pie", {attrs: {pieData: t.pieData}})], 1)
        }, staticRenderFns: []
    }
}]));