webpackJsonp([2], {
    206: function (t, e, r) {
        r(485);
        var n = r(87)(r(380), r(510), null, null);
        t.exports = n.exports
    }, 217: function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = r(51), o = r.n(n), i = r(50), l = r.n(i), a = r(52), s = r.n(a), u = r(88), c = r(89), f = r(90),
            d = r(30);
        e.default = {
            data: function () {
                return {baseImgPath: c.b}
            },
            created: function () {
                this.adminInfo.id || this.getAdminData()
            },
            computed: s()({}, r.i(f.b)(["adminInfo"])),
            methods: s()({}, r.i(f.c)(["getAdminData"]), {
                handleCommand: function (t) {
                    var e = this;
                    return l()(o.a.mark(function n() {
                        var i;
                        return o.a.wrap(function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    if ("home" != t) {
                                        n.next = 4;
                                        break
                                    }
                                    e.$router.push("/manage"), n.next = 9;
                                    break;
                                case 4:
                                    if ("singout" != t) {
                                        n.next = 9;
                                        break
                                    }
                                    return n.next = 7, r.i(u.b)();
                                case 7:
                                    i = n.sent, 1 == i.status ? (e.$message({
                                        type: "success",
                                        message: "退出成功"
                                    }), r.i(d.b)("isLogin", !1), e.$router.push("/")) : e.$message({
                                        type: "error",
                                        message: i.message
                                    });
                                case 9:
                                case"end":
                                    return n.stop()
                            }
                        }, n, e)
                    }))()
                }
            })
        }
    }, 218: function (t, e, r) {
        e = t.exports = r(188)(!1), e.push([t.i, ".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}", ""])
    }, 219: function (t, e, r) {
        var n = r(218);
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        r(189)("019239ba", n, !0)
    }, 220: function (t, e, r) {
        r(219);
        var n = r(87)(r(217), r(221), null, null);
        t.exports = n.exports
    }, 221: function (t, e) {
        t.exports = {
            render: function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", {staticClass: "header_container"}, [r("el-breadcrumb", {attrs: {separator: "/"}}, [r("el-breadcrumb-item", {attrs: {to: {path: "/manage"}}}, [t._v("首页")]), t._v(" "), t._l(t.$route.meta.crumbsname, function (e, n) {
                    return r("el-breadcrumb-item", {key: n}, [t._v(t._s(e))])
                })], 2), t._v(" "), r("el-dropdown", {
                    attrs: {"menu-align": "start"},
                    on: {command: t.handleCommand}
                }, [r("img", {
                    staticClass: "avator",
                    attrs: {src: t.baseImgPath + t.adminInfo.avatar}
                }), t._v(" "), r("el-dropdown-menu", {
                    attrs: {slot: "dropdown"},
                    slot: "dropdown"
                }, [r("el-dropdown-item", {attrs: {command: "home"}}, [t._v("首页")]), t._v(" "), r("el-dropdown-item", {attrs: {command: "singout"}}, [t._v("退出")])], 1)], 1)], 1)
            }, staticRenderFns: []
        }
    }, 358: function (t, e, r) {
        (function (e) {/*!
 * Quill Editor v1.3.6
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
            !function (e, r) {
                t.exports = r()
            }("undefined" != typeof self && self, function () {
                return function (t) {
                    function e(n) {
                        if (r[n]) return r[n].exports;
                        var o = r[n] = {i: n, l: !1, exports: {}};
                        return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
                    }

                    var r = {};
                    return e.m = t, e.c = r, e.d = function (t, r, n) {
                        e.o(t, r) || Object.defineProperty(t, r, {configurable: !1, enumerable: !0, get: n})
                    }, e.n = function (t) {
                        var r = t && t.__esModule ? function () {
                            return t.default
                        } : function () {
                            return t
                        };
                        return e.d(r, "a", r), r
                    }, e.o = function (t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, e.p = "", e(e.s = 109)
                }([function (t, e, r) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var n = r(17), o = r(18), i = r(19), l = r(45), a = r(46), s = r(47), u = r(48), c = r(49),
                        f = r(12), d = r(32), p = r(33), h = r(31), b = r(1), q = {
                            Scope: b.Scope,
                            create: b.create,
                            find: b.find,
                            query: b.query,
                            register: b.register,
                            Container: n.default,
                            Format: o.default,
                            Leaf: i.default,
                            Embed: u.default,
                            Scroll: l.default,
                            Block: s.default,
                            Inline: a.default,
                            Text: c.default,
                            Attributor: {Attribute: f.default, Class: d.default, Style: p.default, Store: h.default}
                        };
                    e.default = q
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        var r = i(t);
                        if (null == r) throw new s("Unable to create " + t + " blot");
                        var n = r;
                        return new n(t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : n.create(e), e)
                    }

                    function o(t, r) {
                        return void 0 === r && (r = !1), null == t ? null : null != t[e.DATA_KEY] ? t[e.DATA_KEY].blot : r ? o(t.parentNode, r) : null
                    }

                    function i(t, e) {
                        void 0 === e && (e = p.ANY);
                        var r;
                        if ("string" == typeof t) r = d[t] || u[t]; else if (t instanceof Text || t.nodeType === Node.TEXT_NODE) r = d.text; else if ("number" == typeof t) t & p.LEVEL & p.BLOCK ? r = d.block : t & p.LEVEL & p.INLINE && (r = d.inline); else if (t instanceof HTMLElement) {
                            var n = (t.getAttribute("class") || "").split(/\s+/);
                            for (var o in n) if (r = c[n[o]]) break;
                            r = r || f[t.tagName]
                        }
                        return null == r ? null : e & p.LEVEL & r.scope && e & p.TYPE & r.scope ? r : null
                    }

                    function l() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        if (t.length > 1) return t.map(function (t) {
                            return l(t)
                        });
                        var r = t[0];
                        if ("string" != typeof r.blotName && "string" != typeof r.attrName) throw new s("Invalid definition");
                        if ("abstract" === r.blotName) throw new s("Cannot register abstract class");
                        if (d[r.blotName || r.attrName] = r, "string" == typeof r.keyName) u[r.keyName] = r; else if (null != r.className && (c[r.className] = r), null != r.tagName) {
                            Array.isArray(r.tagName) ? r.tagName = r.tagName.map(function (t) {
                                return t.toUpperCase()
                            }) : r.tagName = r.tagName.toUpperCase();
                            var n = Array.isArray(r.tagName) ? r.tagName : [r.tagName];
                            n.forEach(function (t) {
                                null != f[t] && null != r.className || (f[t] = r)
                            })
                        }
                        return r
                    }

                    var a = this && this.__extends || function () {
                        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        };
                        return function (e, r) {
                            function n() {
                                this.constructor = e
                            }

                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var s = function (t) {
                        function e(e) {
                            var r = this;
                            return e = "[Parchment] " + e, r = t.call(this, e) || this, r.message = e, r.name = r.constructor.name, r
                        }

                        return a(e, t), e
                    }(Error);
                    e.ParchmentError = s;
                    var u = {}, c = {}, f = {}, d = {};
                    e.DATA_KEY = "__blot";
                    var p;
                    !function (t) {
                        t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] = "BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY"
                    }(p = e.Scope || (e.Scope = {})), e.create = n, e.find = o, e.query = i, e.register = l
                }, function (t, e, r) {
                    var n = r(51), o = r(11), i = r(3), l = r(20), a = String.fromCharCode(0), s = function (t) {
                        Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = []
                    };
                    s.prototype.insert = function (t, e) {
                        var r = {};
                        return 0 === t.length ? this : (r.insert = t, null != e && "object" == typeof e && Object.keys(e).length > 0 && (r.attributes = e), this.push(r))
                    }, s.prototype.delete = function (t) {
                        return t <= 0 ? this : this.push({delete: t})
                    }, s.prototype.retain = function (t, e) {
                        if (t <= 0) return this;
                        var r = {retain: t};
                        return null != e && "object" == typeof e && Object.keys(e).length > 0 && (r.attributes = e), this.push(r)
                    }, s.prototype.push = function (t) {
                        var e = this.ops.length, r = this.ops[e - 1];
                        if (t = i(!0, {}, t), "object" == typeof r) {
                            if ("number" == typeof t.delete && "number" == typeof r.delete) return this.ops[e - 1] = {delete: r.delete + t.delete}, this;
                            if ("number" == typeof r.delete && null != t.insert && (e -= 1, "object" != typeof (r = this.ops[e - 1]))) return this.ops.unshift(t), this;
                            if (o(t.attributes, r.attributes)) {
                                if ("string" == typeof t.insert && "string" == typeof r.insert) return this.ops[e - 1] = {insert: r.insert + t.insert}, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this;
                                if ("number" == typeof t.retain && "number" == typeof r.retain) return this.ops[e - 1] = {retain: r.retain + t.retain}, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this
                            }
                        }
                        return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this
                    }, s.prototype.chop = function () {
                        var t = this.ops[this.ops.length - 1];
                        return t && t.retain && !t.attributes && this.ops.pop(), this
                    }, s.prototype.filter = function (t) {
                        return this.ops.filter(t)
                    }, s.prototype.forEach = function (t) {
                        this.ops.forEach(t)
                    }, s.prototype.map = function (t) {
                        return this.ops.map(t)
                    }, s.prototype.partition = function (t) {
                        var e = [], r = [];
                        return this.forEach(function (n) {
                            (t(n) ? e : r).push(n)
                        }), [e, r]
                    }, s.prototype.reduce = function (t, e) {
                        return this.ops.reduce(t, e)
                    }, s.prototype.changeLength = function () {
                        return this.reduce(function (t, e) {
                            return e.insert ? t + l.length(e) : e.delete ? t - e.delete : t
                        }, 0)
                    }, s.prototype.length = function () {
                        return this.reduce(function (t, e) {
                            return t + l.length(e)
                        }, 0)
                    }, s.prototype.slice = function (t, e) {
                        t = t || 0, "number" != typeof e && (e = 1 / 0);
                        for (var r = [], n = l.iterator(this.ops), o = 0; o < e && n.hasNext();) {
                            var i;
                            o < t ? i = n.next(t - o) : (i = n.next(e - o), r.push(i)), o += l.length(i)
                        }
                        return new s(r)
                    }, s.prototype.compose = function (t) {
                        for (var e = l.iterator(this.ops), r = l.iterator(t.ops), n = new s; e.hasNext() || r.hasNext();) if ("insert" === r.peekType()) n.push(r.next()); else if ("delete" === e.peekType()) n.push(e.next()); else {
                            var o = Math.min(e.peekLength(), r.peekLength()), i = e.next(o), a = r.next(o);
                            if ("number" == typeof a.retain) {
                                var u = {};
                                "number" == typeof i.retain ? u.retain = o : u.insert = i.insert;
                                var c = l.attributes.compose(i.attributes, a.attributes, "number" == typeof i.retain);
                                c && (u.attributes = c), n.push(u)
                            } else "number" == typeof a.delete && "number" == typeof i.retain && n.push(a)
                        }
                        return n.chop()
                    }, s.prototype.concat = function (t) {
                        var e = new s(this.ops.slice());
                        return t.ops.length > 0 && (e.push(t.ops[0]), e.ops = e.ops.concat(t.ops.slice(1))), e
                    }, s.prototype.diff = function (t, e) {
                        if (this.ops === t.ops) return new s;
                        var r = [this, t].map(function (e) {
                            return e.map(function (r) {
                                if (null != r.insert) return "string" == typeof r.insert ? r.insert : a;
                                var n = e === t ? "on" : "with";
                                throw new Error("diff() called " + n + " non-document")
                            }).join("")
                        }), i = new s, u = n(r[0], r[1], e), c = l.iterator(this.ops), f = l.iterator(t.ops);
                        return u.forEach(function (t) {
                            for (var e = t[1].length; e > 0;) {
                                var r = 0;
                                switch (t[0]) {
                                    case n.INSERT:
                                        r = Math.min(f.peekLength(), e), i.push(f.next(r));
                                        break;
                                    case n.DELETE:
                                        r = Math.min(e, c.peekLength()), c.next(r), i.delete(r);
                                        break;
                                    case n.EQUAL:
                                        r = Math.min(c.peekLength(), f.peekLength(), e);
                                        var a = c.next(r), s = f.next(r);
                                        o(a.insert, s.insert) ? i.retain(r, l.attributes.diff(a.attributes, s.attributes)) : i.push(s).delete(r)
                                }
                                e -= r
                            }
                        }), i.chop()
                    }, s.prototype.eachLine = function (t, e) {
                        e = e || "\n";
                        for (var r = l.iterator(this.ops), n = new s, o = 0; r.hasNext();) {
                            if ("insert" !== r.peekType()) return;
                            var i = r.peek(), a = l.length(i) - r.peekLength(),
                                u = "string" == typeof i.insert ? i.insert.indexOf(e, a) - a : -1;
                            if (u < 0) n.push(r.next()); else if (u > 0) n.push(r.next(u)); else {
                                if (!1 === t(n, r.next(1).attributes || {}, o)) return;
                                o += 1, n = new s
                            }
                        }
                        n.length() > 0 && t(n, {}, o)
                    }, s.prototype.transform = function (t, e) {
                        if (e = !!e, "number" == typeof t) return this.transformPosition(t, e);
                        for (var r = l.iterator(this.ops), n = l.iterator(t.ops), o = new s; r.hasNext() || n.hasNext();) if ("insert" !== r.peekType() || !e && "insert" === n.peekType()) if ("insert" === n.peekType()) o.push(n.next()); else {
                            var i = Math.min(r.peekLength(), n.peekLength()), a = r.next(i), u = n.next(i);
                            if (a.delete) continue;
                            u.delete ? o.push(u) : o.retain(i, l.attributes.transform(a.attributes, u.attributes, e))
                        } else o.retain(l.length(r.next()));
                        return o.chop()
                    }, s.prototype.transformPosition = function (t, e) {
                        e = !!e;
                        for (var r = l.iterator(this.ops), n = 0; r.hasNext() && n <= t;) {
                            var o = r.peekLength(), i = r.peekType();
                            r.next(), "delete" !== i ? ("insert" === i && (n < t || !e) && (t += o), n += o) : t -= Math.min(o, t - n)
                        }
                        return t
                    }, t.exports = s
                }, function (t, e) {
                    "use strict";
                    var r = Object.prototype.hasOwnProperty, n = Object.prototype.toString, o = function (t) {
                        return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === n.call(t)
                    }, i = function (t) {
                        if (!t || "[object Object]" !== n.call(t)) return !1;
                        var e = r.call(t, "constructor"),
                            o = t.constructor && t.constructor.prototype && r.call(t.constructor.prototype, "isPrototypeOf");
                        if (t.constructor && !e && !o) return !1;
                        var i;
                        for (i in t) ;
                        return void 0 === i || r.call(t, i)
                    };
                    t.exports = function t() {
                        var e, r, n, l, a, s, u = arguments[0], c = 1, f = arguments.length, d = !1;
                        for ("boolean" == typeof u && (d = u, u = arguments[1] || {}, c = 2), (null == u || "object" != typeof u && "function" != typeof u) && (u = {}); c < f; ++c) if (null != (e = arguments[c])) for (r in e) n = u[r], l = e[r], u !== l && (d && l && (i(l) || (a = o(l))) ? (a ? (a = !1, s = n && o(n) ? n : []) : s = n && i(n) ? n : {}, u[r] = t(d, s, l)) : void 0 !== l && (u[r] = l));
                        return u
                    }
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function a(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return null == t ? e : ("function" == typeof t.formats && (e = (0, f.default)(e, t.formats())), null == t.parent || "scroll" == t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : a(t.parent, e))
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.default = e.BlockEmbed = e.bubbleFormats = void 0;
                    var s = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), u = function t(e, r, n) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, r);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, r, n)
                            }
                            if ("value" in o) return o.value;
                            var l = o.get;
                            if (void 0 !== l) return l.call(n)
                        }, c = r(3), f = n(c), d = r(2), p = n(d), h = r(0), b = n(h), q = r(16), y = n(q), g = r(6),
                        v = n(g), m = r(7), k = n(m), w = function (t) {
                            function e() {
                                return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }

                            return l(e, t), s(e, [{
                                key: "attach", value: function () {
                                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attach", this).call(this), this.attributes = new b.default.Attributor.Store(this.domNode)
                                }
                            }, {
                                key: "delta", value: function () {
                                    return (new p.default).insert(this.value(), (0, f.default)(this.formats(), this.attributes.values()))
                                }
                            }, {
                                key: "format", value: function (t, e) {
                                    var r = b.default.query(t, b.default.Scope.BLOCK_ATTRIBUTE);
                                    null != r && this.attributes.attribute(r, e)
                                }
                            }, {
                                key: "formatAt", value: function (t, e, r, n) {
                                    this.format(r, n)
                                }
                            }, {
                                key: "insertAt", value: function (t, r, n) {
                                    if ("string" == typeof r && r.endsWith("\n")) {
                                        var o = b.default.create(_.blotName);
                                        this.parent.insertBefore(o, 0 === t ? this : this.next), o.insertAt(0, r.slice(0, -1))
                                    } else u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, r, n)
                                }
                            }]), e
                        }(b.default.Embed);
                    w.scope = b.default.Scope.BLOCK_BLOT;
                    var _ = function (t) {
                        function e(t) {
                            o(this, e);
                            var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                            return r.cache = {}, r
                        }

                        return l(e, t), s(e, [{
                            key: "delta", value: function () {
                                return null == this.cache.delta && (this.cache.delta = this.descendants(b.default.Leaf).reduce(function (t, e) {
                                    return 0 === e.length() ? t : t.insert(e.value(), a(e))
                                }, new p.default).insert("\n", a(this))), this.cache.delta
                            }
                        }, {
                            key: "deleteAt", value: function (t, r) {
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, r), this.cache = {}
                            }
                        }, {
                            key: "formatAt", value: function (t, r, n, o) {
                                r <= 0 || (b.default.query(n, b.default.Scope.BLOCK) ? t + r === this.length() && this.format(n, o) : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, Math.min(r, this.length() - t - 1), n, o), this.cache = {})
                            }
                        }, {
                            key: "insertAt", value: function (t, r, n) {
                                if (null != n) return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, r, n);
                                if (0 !== r.length) {
                                    var o = r.split("\n"), i = o.shift();
                                    i.length > 0 && (t < this.length() - 1 || null == this.children.tail ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
                                    var l = this;
                                    o.reduce(function (t, e) {
                                        return l = l.split(t, !0), l.insertAt(0, e), e.length
                                    }, t + i.length)
                                }
                            }
                        }, {
                            key: "insertBefore", value: function (t, r) {
                                var n = this.children.head;
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, r), n instanceof y.default && n.remove(), this.cache = {}
                            }
                        }, {
                            key: "length", value: function () {
                                return null == this.cache.length && (this.cache.length = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "length", this).call(this) + 1), this.cache.length
                            }
                        }, {
                            key: "moveChildren", value: function (t, r) {
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveChildren", this).call(this, t, r), this.cache = {}
                            }
                        }, {
                            key: "optimize", value: function (t) {
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.cache = {}
                            }
                        }, {
                            key: "path", value: function (t) {
                                return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t, !0)
                            }
                        }, {
                            key: "removeChild", value: function (t) {
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeChild", this).call(this, t), this.cache = {}
                            }
                        }, {
                            key: "split", value: function (t) {
                                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (r && (0 === t || t >= this.length() - 1)) {
                                    var n = this.clone();
                                    return 0 === t ? (this.parent.insertBefore(n, this), this) : (this.parent.insertBefore(n, this.next), n)
                                }
                                var o = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "split", this).call(this, t, r);
                                return this.cache = {}, o
                            }
                        }]), e
                    }(b.default.Block);
                    _.blotName = "block", _.tagName = "P", _.defaultChild = "break", _.allowedChildren = [v.default, b.default.Embed, k.default], e.bubbleFormats = a, e.BlockEmbed = w, e.default = _
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e, r) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r, t
                    }

                    function i(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (e = (0, E.default)(!0, {
                            container: t,
                            modules: {clipboard: !0, keyboard: !0, history: !0}
                        }, e), e.theme && e.theme !== S.DEFAULTS.theme) {
                            if (e.theme = S.import("themes/" + e.theme), null == e.theme) throw new Error("Invalid theme " + e.theme + ". Did you register it?")
                        } else e.theme = T.default;
                        var r = (0, E.default)(!0, {}, e.theme.DEFAULTS);
                        [r, e].forEach(function (t) {
                            t.modules = t.modules || {}, Object.keys(t.modules).forEach(function (e) {
                                !0 === t.modules[e] && (t.modules[e] = {})
                            })
                        });
                        var n = Object.keys(r.modules).concat(Object.keys(e.modules)), o = n.reduce(function (t, e) {
                            var r = S.import("modules/" + e);
                            return null == r ? P.error("Cannot load " + e + " module. Are you sure you registered it?") : t[e] = r.DEFAULTS || {}, t
                        }, {});
                        return null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {container: e.modules.toolbar}), e = (0, E.default)(!0, {}, S.DEFAULTS, {modules: o}, r, e), ["bounds", "container", "scrollingContainer"].forEach(function (t) {
                            "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        }), e.modules = Object.keys(e.modules).reduce(function (t, r) {
                            return e.modules[r] && (t[r] = e.modules[r]), t
                        }, {}), e
                    }

                    function a(t, e, r, n) {
                        if (this.options.strict && !this.isEnabled() && e === g.default.sources.USER) return new h.default;
                        var o = null == r ? null : this.getSelection(), i = this.editor.delta, l = t();
                        if (null != o && (!0 === r && (r = o.index), null == n ? o = u(o, l, e) : 0 !== n && (o = u(o, r, n, e)), this.setSelection(o, g.default.sources.SILENT)), l.length() > 0) {
                            var a, s = [g.default.events.TEXT_CHANGE, l, i, e];
                            if ((a = this.emitter).emit.apply(a, [g.default.events.EDITOR_CHANGE].concat(s)), e !== g.default.sources.SILENT) {
                                var c;
                                (c = this.emitter).emit.apply(c, s)
                            }
                        }
                        return l
                    }

                    function s(t, e, r, n, o) {
                        var i = {};
                        return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (o = n, n = r, r = e, e = t.length, t = t.index) : (e = t.length, t = t.index) : "number" != typeof e && (o = n, n = r, r = e, e = 0), "object" === (void 0 === r ? "undefined" : c(r)) ? (i = r, o = n) : "string" == typeof r && (null != n ? i[r] = n : o = r), o = o || g.default.sources.API, [t, e, i, o]
                    }

                    function u(t, e, r, n) {
                        if (null == t) return null;
                        var o = void 0, i = void 0;
                        if (e instanceof h.default) {
                            var l = [t.index, t.index + t.length].map(function (t) {
                                return e.transformPosition(t, n !== g.default.sources.USER)
                            }), a = f(l, 2);
                            o = a[0], i = a[1]
                        } else {
                            var s = [t.index, t.index + t.length].map(function (t) {
                                return t < e || t === e && n === g.default.sources.USER ? t : r >= 0 ? t + r : Math.max(e, t + r)
                            }), u = f(s, 2);
                            o = u[0], i = u[1]
                        }
                        return new _.Range(o, i - o)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.default = e.overload = e.expandConfig = void 0;
                    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, f = function () {
                        function t(t, e) {
                            var r = [], n = !0, o = !1, i = void 0;
                            try {
                                for (var l, a = t[Symbol.iterator](); !(n = (l = a.next()).done) && (r.push(l.value), !e || r.length !== e); n = !0) ;
                            } catch (t) {
                                o = !0, i = t
                            } finally {
                                try {
                                    !n && a.return && a.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return r
                        }

                        return function (e, r) {
                            if (Array.isArray(e)) return e;
                            if (Symbol.iterator in Object(e)) return t(e, r);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                    }(), d = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }();
                    r(50);
                    var p = r(2), h = n(p), b = r(14), q = n(b), y = r(8), g = n(y), v = r(9), m = n(v), k = r(0),
                        w = n(k), _ = r(15), x = n(_), O = r(3), E = n(O), A = r(10), N = n(A), j = r(34), T = n(j),
                        P = (0, N.default)("quill"), S = function () {
                            function t(e) {
                                var r = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (i(this, t), this.options = l(e, n), this.container = this.options.container, null == this.container) return P.error("Invalid Quill container", e);
                                this.options.debug && t.debug(this.options.debug);
                                var o = this.container.innerHTML.trim();
                                this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new g.default, this.scroll = w.default.create(this.root, {
                                    emitter: this.emitter,
                                    whitelist: this.options.formats
                                }), this.editor = new q.default(this.scroll), this.selection = new x.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(g.default.events.EDITOR_CHANGE, function (t) {
                                    t === g.default.events.TEXT_CHANGE && r.root.classList.toggle("ql-blank", r.editor.isBlank())
                                }), this.emitter.on(g.default.events.SCROLL_UPDATE, function (t, e) {
                                    var n = r.selection.lastRange, o = n && 0 === n.length ? n.index : void 0;
                                    a.call(r, function () {
                                        return r.editor.update(null, e, o)
                                    }, t)
                                });
                                var s = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + o + "<p><br></p></div>");
                                this.setContents(s), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable()
                            }

                            return d(t, null, [{
                                key: "debug", value: function (t) {
                                    !0 === t && (t = "log"), N.default.level(t)
                                }
                            }, {
                                key: "find", value: function (t) {
                                    return t.__quill || w.default.find(t)
                                }
                            }, {
                                key: "import", value: function (t) {
                                    return null == this.imports[t] && P.error("Cannot import " + t + ". Are you sure it was registered?"), this.imports[t]
                                }
                            }, {
                                key: "register", value: function (t, e) {
                                    var r = this, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    if ("string" != typeof t) {
                                        var o = t.attrName || t.blotName;
                                        "string" == typeof o ? this.register("formats/" + o, t, e) : Object.keys(t).forEach(function (n) {
                                            r.register(n, t[n], e)
                                        })
                                    } else null == this.imports[t] || n || P.warn("Overwriting " + t + " with", e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName ? w.default.register(e) : t.startsWith("modules") && "function" == typeof e.register && e.register()
                                }
                            }]), d(t, [{
                                key: "addContainer", value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    if ("string" == typeof t) {
                                        var r = t;
                                        t = document.createElement("div"), t.classList.add(r)
                                    }
                                    return this.container.insertBefore(t, e), t
                                }
                            }, {
                                key: "blur", value: function () {
                                    this.selection.setRange(null)
                                }
                            }, {
                                key: "deleteText", value: function (t, e, r) {
                                    var n = this, o = s(t, e, r), i = f(o, 4);
                                    return t = i[0], e = i[1], r = i[3], a.call(this, function () {
                                        return n.editor.deleteText(t, e)
                                    }, r, t, -1 * e)
                                }
                            }, {
                                key: "disable", value: function () {
                                    this.enable(!1)
                                }
                            }, {
                                key: "enable", value: function () {
                                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                    this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t)
                                }
                            }, {
                                key: "focus", value: function () {
                                    var t = this.scrollingContainer.scrollTop;
                                    this.selection.focus(), this.scrollingContainer.scrollTop = t, this.scrollIntoView()
                                }
                            }, {
                                key: "format", value: function (t, e) {
                                    var r = this,
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.default.sources.API;
                                    return a.call(this, function () {
                                        var n = r.getSelection(!0), i = new h.default;
                                        if (null == n) return i;
                                        if (w.default.query(t, w.default.Scope.BLOCK)) i = r.editor.formatLine(n.index, n.length, o({}, t, e)); else {
                                            if (0 === n.length) return r.selection.format(t, e), i;
                                            i = r.editor.formatText(n.index, n.length, o({}, t, e))
                                        }
                                        return r.setSelection(n, g.default.sources.SILENT), i
                                    }, n)
                                }
                            }, {
                                key: "formatLine", value: function (t, e, r, n, o) {
                                    var i = this, l = void 0, u = s(t, e, r, n, o), c = f(u, 4);
                                    return t = c[0], e = c[1], l = c[2], o = c[3], a.call(this, function () {
                                        return i.editor.formatLine(t, e, l)
                                    }, o, t, 0)
                                }
                            }, {
                                key: "formatText", value: function (t, e, r, n, o) {
                                    var i = this, l = void 0, u = s(t, e, r, n, o), c = f(u, 4);
                                    return t = c[0], e = c[1], l = c[2], o = c[3], a.call(this, function () {
                                        return i.editor.formatText(t, e, l)
                                    }, o, t, 0)
                                }
                            }, {
                                key: "getBounds", value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = void 0;
                                    r = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length);
                                    var n = this.container.getBoundingClientRect();
                                    return {
                                        bottom: r.bottom - n.top,
                                        height: r.height,
                                        left: r.left - n.left,
                                        right: r.right - n.left,
                                        top: r.top - n.top,
                                        width: r.width
                                    }
                                }
                            }, {
                                key: "getContents", value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                        r = s(t, e), n = f(r, 2);
                                    return t = n[0], e = n[1], this.editor.getContents(t, e)
                                }
                            }, {
                                key: "getFormat", value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0),
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                    return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length)
                                }
                            }, {
                                key: "getIndex", value: function (t) {
                                    return t.offset(this.scroll)
                                }
                            }, {
                                key: "getLength", value: function () {
                                    return this.scroll.length()
                                }
                            }, {
                                key: "getLeaf", value: function (t) {
                                    return this.scroll.leaf(t)
                                }
                            }, {
                                key: "getLine", value: function (t) {
                                    return this.scroll.line(t)
                                }
                            }, {
                                key: "getLines", value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                                    return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e)
                                }
                            }, {
                                key: "getModule", value: function (t) {
                                    return this.theme.modules[t]
                                }
                            }, {
                                key: "getSelection", value: function () {
                                    return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0]
                                }
                            }, {
                                key: "getText", value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                        r = s(t, e), n = f(r, 2);
                                    return t = n[0], e = n[1], this.editor.getText(t, e)
                                }
                            }, {
                                key: "hasFocus", value: function () {
                                    return this.selection.hasFocus()
                                }
                            }, {
                                key: "insertEmbed", value: function (e, r, n) {
                                    var o = this,
                                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.sources.API;
                                    return a.call(this, function () {
                                        return o.editor.insertEmbed(e, r, n)
                                    }, i, e)
                                }
                            }, {
                                key: "insertText", value: function (t, e, r, n, o) {
                                    var i = this, l = void 0, u = s(t, 0, r, n, o), c = f(u, 4);
                                    return t = c[0], l = c[2], o = c[3], a.call(this, function () {
                                        return i.editor.insertText(t, e, l)
                                    }, o, t, e.length)
                                }
                            }, {
                                key: "isEnabled", value: function () {
                                    return !this.container.classList.contains("ql-disabled")
                                }
                            }, {
                                key: "off", value: function () {
                                    return this.emitter.off.apply(this.emitter, arguments)
                                }
                            }, {
                                key: "on", value: function () {
                                    return this.emitter.on.apply(this.emitter, arguments)
                                }
                            }, {
                                key: "once", value: function () {
                                    return this.emitter.once.apply(this.emitter, arguments)
                                }
                            }, {
                                key: "pasteHTML", value: function (t, e, r) {
                                    this.clipboard.dangerouslyPasteHTML(t, e, r)
                                }
                            }, {
                                key: "removeFormat", value: function (t, e, r) {
                                    var n = this, o = s(t, e, r), i = f(o, 4);
                                    return t = i[0], e = i[1], r = i[3], a.call(this, function () {
                                        return n.editor.removeFormat(t, e)
                                    }, r, t)
                                }
                            }, {
                                key: "scrollIntoView", value: function () {
                                    this.selection.scrollIntoView(this.scrollingContainer)
                                }
                            }, {
                                key: "setContents", value: function (t) {
                                    var e = this,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API;
                                    return a.call(this, function () {
                                        t = new h.default(t);
                                        var r = e.getLength(), n = e.editor.deleteText(0, r), o = e.editor.applyDelta(t),
                                            i = o.ops[o.ops.length - 1];
                                        return null != i && "string" == typeof i.insert && "\n" === i.insert[i.insert.length - 1] && (e.editor.deleteText(e.getLength() - 1, 1), o.delete(1)), n.compose(o)
                                    }, r)
                                }
                            }, {
                                key: "setSelection", value: function (e, r, n) {
                                    if (null == e) this.selection.setRange(null, r || t.sources.API); else {
                                        var o = s(e, r, n), i = f(o, 4);
                                        e = i[0], r = i[1], n = i[3], this.selection.setRange(new _.Range(e, r), n), n !== g.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer)
                                    }
                                }
                            }, {
                                key: "setText", value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API,
                                        r = (new h.default).insert(t);
                                    return this.setContents(r, e)
                                }
                            }, {
                                key: "update", value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.default.sources.USER,
                                        e = this.scroll.update(t);
                                    return this.selection.update(t), e
                                }
                            }, {
                                key: "updateContents", value: function (t) {
                                    var e = this,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API;
                                    return a.call(this, function () {
                                        return t = new h.default(t), e.editor.applyDelta(t, r)
                                    }, r, !0)
                                }
                            }]), t
                        }();
                    S.DEFAULTS = {
                        bounds: null,
                        formats: null,
                        modules: {},
                        placeholder: "",
                        readOnly: !1,
                        scrollingContainer: null,
                        strict: !0,
                        theme: "default"
                    }, S.events = g.default.events, S.sources = g.default.sources, S.version = "1.3.6", S.imports = {
                        delta: h.default,
                        parchment: w.default,
                        "core/module": m.default,
                        "core/theme": T.default
                    }, e.expandConfig = l, e.overload = s, e.default = S
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var a = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), s = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, u = r(7), c = n(u), f = r(0), d = n(f), p = function (t) {
                        function e() {
                            return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return l(e, t), a(e, [{
                            key: "formatAt", value: function (t, r, n, o) {
                                if (e.compare(this.statics.blotName, n) < 0 && d.default.query(n, d.default.Scope.BLOT)) {
                                    var i = this.isolate(t, r);
                                    o && i.wrap(n, o)
                                } else s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, r, n, o)
                            }
                        }, {
                            key: "optimize", value: function (t) {
                                if (s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                                    var r = this.parent.isolate(this.offset(), this.length());
                                    this.moveChildren(r), r.wrap(this)
                                }
                            }
                        }], [{
                            key: "compare", value: function (t, r) {
                                var n = e.order.indexOf(t), o = e.order.indexOf(r);
                                return n >= 0 || o >= 0 ? n - o : t === r ? 0 : t < r ? -1 : 1
                            }
                        }]), e
                    }(d.default.Inline);
                    p.allowedChildren = [p, d.default.Embed, c.default], p.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], e.default = p
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = r(0), a = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(l), s = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), e
                    }(a.default.Text);
                    e.default = s
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var a = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), s = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, u = r(54), c = n(u), f = r(10), d = n(f), p = (0, d.default)("quill:events");
                    ["selectionchange", "mousedown", "mouseup", "click"].forEach(function (t) {
                        document.addEventListener(t, function () {
                            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                            [].slice.call(document.querySelectorAll(".ql-container")).forEach(function (t) {
                                if (t.__quill && t.__quill.emitter) {
                                    var r;
                                    (r = t.__quill.emitter).handleDOM.apply(r, e)
                                }
                            })
                        })
                    });
                    var h = function (t) {
                        function e() {
                            o(this, e);
                            var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return t.listeners = {}, t.on("error", p.error), t
                        }

                        return l(e, t), a(e, [{
                            key: "emit", value: function () {
                                p.log.apply(p, arguments), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).apply(this, arguments)
                            }
                        }, {
                            key: "handleDOM", value: function (t) {
                                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                                (this.listeners[t.type] || []).forEach(function (e) {
                                    var n = e.node, o = e.handler;
                                    (t.target === n || n.contains(t.target)) && o.apply(void 0, [t].concat(r))
                                })
                            }
                        }, {
                            key: "listenDOM", value: function (t, e, r) {
                                this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({
                                    node: e,
                                    handler: r
                                })
                            }
                        }]), e
                    }(c.default);
                    h.events = {
                        EDITOR_CHANGE: "editor-change",
                        SCROLL_BEFORE_UPDATE: "scroll-before-update",
                        SCROLL_OPTIMIZE: "scroll-optimize",
                        SCROLL_UPDATE: "scroll-update",
                        SELECTION_CHANGE: "selection-change",
                        TEXT_CHANGE: "text-change"
                    }, h.sources = {API: "api", SILENT: "silent", USER: "user"}, e.default = h
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = function t(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        n(this, t), this.quill = e, this.options = r
                    };
                    o.DEFAULTS = {}, e.default = o
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        if (i.indexOf(t) <= i.indexOf(l)) {
                            for (var e, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                            (e = console)[t].apply(e, n)
                        }
                    }

                    function o(t) {
                        return i.reduce(function (e, r) {
                            return e[r] = n.bind(console, r, t), e
                        }, {})
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var i = ["error", "warn", "log", "info"], l = "warn";
                    n.level = o.level = function (t) {
                        l = t
                    }, e.default = o
                }, function (t, e, r) {
                    function n(t) {
                        return null === t || void 0 === t
                    }

                    function o(t) {
                        return !(!t || "object" != typeof t || "number" != typeof t.length) && ("function" == typeof t.copy && "function" == typeof t.slice && !(t.length > 0 && "number" != typeof t[0]))
                    }

                    function i(t, e, r) {
                        var i, c;
                        if (n(t) || n(e)) return !1;
                        if (t.prototype !== e.prototype) return !1;
                        if (s(t)) return !!s(e) && (t = l.call(t), e = l.call(e), u(t, e, r));
                        if (o(t)) {
                            if (!o(e)) return !1;
                            if (t.length !== e.length) return !1;
                            for (i = 0; i < t.length; i++) if (t[i] !== e[i]) return !1;
                            return !0
                        }
                        try {
                            var f = a(t), d = a(e)
                        } catch (t) {
                            return !1
                        }
                        if (f.length != d.length) return !1;
                        for (f.sort(), d.sort(), i = f.length - 1; i >= 0; i--) if (f[i] != d[i]) return !1;
                        for (i = f.length - 1; i >= 0; i--) if (c = f[i], !u(t[c], e[c], r)) return !1;
                        return typeof t == typeof e
                    }

                    var l = Array.prototype.slice, a = r(52), s = r(53), u = t.exports = function (t, e, r) {
                        return r || (r = {}), t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? r.strict ? t === e : t == e : i(t, e, r))
                    }
                }, function (t, e, r) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var n = r(1), o = function () {
                        function t(t, e, r) {
                            void 0 === r && (r = {}), this.attrName = t, this.keyName = e;
                            var o = n.Scope.TYPE & n.Scope.ATTRIBUTE;
                            null != r.scope ? this.scope = r.scope & n.Scope.LEVEL | o : this.scope = n.Scope.ATTRIBUTE, null != r.whitelist && (this.whitelist = r.whitelist)
                        }

                        return t.keys = function (t) {
                            return [].map.call(t.attributes, function (t) {
                                return t.name
                            })
                        }, t.prototype.add = function (t, e) {
                            return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0)
                        }, t.prototype.canAdd = function (t, e) {
                            return null != n.query(t, n.Scope.BLOT & (this.scope | n.Scope.TYPE)) && (null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1))
                        }, t.prototype.remove = function (t) {
                            t.removeAttribute(this.keyName)
                        }, t.prototype.value = function (t) {
                            var e = t.getAttribute(this.keyName);
                            return this.canAdd(t, e) && e ? e : ""
                        }, t
                    }();
                    e.default = o
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.default = e.Code = void 0;
                    var a = function () {
                            function t(t, e) {
                                var r = [], n = !0, o = !1, i = void 0;
                                try {
                                    for (var l, a = t[Symbol.iterator](); !(n = (l = a.next()).done) && (r.push(l.value), !e || r.length !== e); n = !0) ;
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        !n && a.return && a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return r
                            }

                            return function (e, r) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e)) return t(e, r);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(), s = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), u = function t(e, r, n) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, r);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, r, n)
                            }
                            if ("value" in o) return o.value;
                            var l = o.get;
                            if (void 0 !== l) return l.call(n)
                        }, c = r(2), f = n(c), d = r(0), p = n(d), h = r(4), b = n(h), q = r(6), y = n(q), g = r(7),
                        v = n(g), m = function (t) {
                            function e() {
                                return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }

                            return l(e, t), e
                        }(y.default);
                    m.blotName = "code", m.tagName = "CODE";
                    var k = function (t) {
                        function e() {
                            return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return l(e, t), s(e, [{
                            key: "delta", value: function () {
                                var t = this, e = this.domNode.textContent;
                                return e.endsWith("\n") && (e = e.slice(0, -1)), e.split("\n").reduce(function (e, r) {
                                    return e.insert(r).insert("\n", t.formats())
                                }, new f.default)
                            }
                        }, {
                            key: "format", value: function (t, r) {
                                if (t !== this.statics.blotName || !r) {
                                    var n = this.descendant(v.default, this.length() - 1), o = a(n, 1), i = o[0];
                                    null != i && i.deleteAt(i.length() - 1, 1), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, r)
                                }
                            }
                        }, {
                            key: "formatAt", value: function (t, r, n, o) {
                                if (0 !== r && null != p.default.query(n, p.default.Scope.BLOCK) && (n !== this.statics.blotName || o !== this.statics.formats(this.domNode))) {
                                    var i = this.newlineIndex(t);
                                    if (!(i < 0 || i >= t + r)) {
                                        var l = this.newlineIndex(t, !0) + 1, a = i - l + 1, s = this.isolate(l, a),
                                            u = s.next;
                                        s.format(n, o), u instanceof e && u.formatAt(0, t - l + r - a, n, o)
                                    }
                                }
                            }
                        }, {
                            key: "insertAt", value: function (t, e, r) {
                                if (null == r) {
                                    var n = this.descendant(v.default, t), o = a(n, 2), i = o[0], l = o[1];
                                    i.insertAt(l, e)
                                }
                            }
                        }, {
                            key: "length", value: function () {
                                var t = this.domNode.textContent.length;
                                return this.domNode.textContent.endsWith("\n") ? t : t + 1
                            }
                        }, {
                            key: "newlineIndex", value: function (t) {
                                if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return this.domNode.textContent.slice(0, t).lastIndexOf("\n");
                                var e = this.domNode.textContent.slice(t).indexOf("\n");
                                return e > -1 ? t + e : -1
                            }
                        }, {
                            key: "optimize", value: function (t) {
                                this.domNode.textContent.endsWith("\n") || this.appendChild(p.default.create("text", "\n")), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
                                var r = this.next;
                                null != r && r.prev === this && r.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === r.statics.formats(r.domNode) && (r.optimize(t), r.moveChildren(this), r.remove())
                            }
                        }, {
                            key: "replace", value: function (t) {
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function (t) {
                                    var e = p.default.find(t);
                                    null == e ? t.parentNode.removeChild(t) : e instanceof p.default.Embed ? e.remove() : e.unwrap()
                                })
                            }
                        }], [{
                            key: "create", value: function (t) {
                                var r = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                return r.setAttribute("spellcheck", !1), r
                            }
                        }, {
                            key: "formats", value: function () {
                                return !0
                            }
                        }]), e
                    }(b.default);
                    k.blotName = "code-block", k.tagName = "PRE", k.TAB = "  ", e.Code = m, e.default = k
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e, r) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r, t
                    }

                    function i(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        return Object.keys(e).reduce(function (r, n) {
                            return null == t[n] ? r : (e[n] === t[n] ? r[n] = e[n] : Array.isArray(e[n]) ? e[n].indexOf(t[n]) < 0 && (r[n] = e[n].concat([t[n]])) : r[n] = [e[n], t[n]], r)
                        }, {})
                    }

                    function a(t) {
                        return t.reduce(function (t, e) {
                            if (1 === e.insert) {
                                var r = (0, E.default)(e.attributes);
                                return delete r.image, t.insert({image: e.attributes.image}, r)
                            }
                            if (null == e.attributes || !0 !== e.attributes.list && !0 !== e.attributes.bullet || (e = (0, E.default)(e), e.attributes.list ? e.attributes.list = "ordered" : (e.attributes.list = "bullet", delete e.attributes.bullet)), "string" == typeof e.insert) {
                                var n = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                                return t.insert(n, e.attributes)
                            }
                            return t.push(e)
                        }, new d.default)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, u = function () {
                            function t(t, e) {
                                var r = [], n = !0, o = !1, i = void 0;
                                try {
                                    for (var l, a = t[Symbol.iterator](); !(n = (l = a.next()).done) && (r.push(l.value), !e || r.length !== e); n = !0) ;
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        !n && a.return && a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return r
                            }

                            return function (e, r) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e)) return t(e, r);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(), c = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), f = r(2), d = n(f), p = r(20), h = n(p), b = r(0), q = n(b), y = r(13), g = n(y), v = r(24),
                        m = n(v), k = r(4), w = n(k), _ = r(16), x = n(_), O = r(21), E = n(O), A = r(11), N = n(A),
                        j = r(3), T = n(j), P = /^[ -~]*$/, S = function () {
                            function t(e) {
                                i(this, t), this.scroll = e, this.delta = this.getDelta()
                            }

                            return c(t, [{
                                key: "applyDelta", value: function (t) {
                                    var e = this, r = !1;
                                    this.scroll.update();
                                    var n = this.scroll.length();
                                    return this.scroll.batchStart(), t = a(t), t.reduce(function (t, o) {
                                        var i = o.retain || o.delete || o.insert.length || 1, l = o.attributes || {};
                                        if (null != o.insert) {
                                            if ("string" == typeof o.insert) {
                                                var a = o.insert;
                                                a.endsWith("\n") && r && (r = !1, a = a.slice(0, -1)), t >= n && !a.endsWith("\n") && (r = !0), e.scroll.insertAt(t, a);
                                                var c = e.scroll.line(t), f = u(c, 2), d = f[0], p = f[1],
                                                    b = (0, T.default)({}, (0, k.bubbleFormats)(d));
                                                if (d instanceof w.default) {
                                                    var y = d.descendant(q.default.Leaf, p), g = u(y, 1), v = g[0];
                                                    b = (0, T.default)(b, (0, k.bubbleFormats)(v))
                                                }
                                                l = h.default.attributes.diff(b, l) || {}
                                            } else if ("object" === s(o.insert)) {
                                                var m = Object.keys(o.insert)[0];
                                                if (null == m) return t;
                                                e.scroll.insertAt(t, m, o.insert[m])
                                            }
                                            n += i
                                        }
                                        return Object.keys(l).forEach(function (r) {
                                            e.scroll.formatAt(t, i, r, l[r])
                                        }), t + i
                                    }, 0), t.reduce(function (t, r) {
                                        return "number" == typeof r.delete ? (e.scroll.deleteAt(t, r.delete), t) : t + (r.retain || r.insert.length || 1)
                                    }, 0), this.scroll.batchEnd(), this.update(t)
                                }
                            }, {
                                key: "deleteText", value: function (t, e) {
                                    return this.scroll.deleteAt(t, e), this.update((new d.default).retain(t).delete(e))
                                }
                            }, {
                                key: "formatLine", value: function (t, e) {
                                    var r = this, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return this.scroll.update(), Object.keys(n).forEach(function (o) {
                                        if (null == r.scroll.whitelist || r.scroll.whitelist[o]) {
                                            var i = r.scroll.lines(t, Math.max(e, 1)), l = e;
                                            i.forEach(function (e) {
                                                var i = e.length();
                                                if (e instanceof g.default) {
                                                    var a = t - e.offset(r.scroll), s = e.newlineIndex(a + l) - a + 1;
                                                    e.formatAt(a, s, o, n[o])
                                                } else e.format(o, n[o]);
                                                l -= i
                                            })
                                        }
                                    }), this.scroll.optimize(), this.update((new d.default).retain(t).retain(e, (0, E.default)(n)))
                                }
                            }, {
                                key: "formatText", value: function (t, e) {
                                    var r = this, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return Object.keys(n).forEach(function (o) {
                                        r.scroll.formatAt(t, e, o, n[o])
                                    }), this.update((new d.default).retain(t).retain(e, (0, E.default)(n)))
                                }
                            }, {
                                key: "getContents", value: function (t, e) {
                                    return this.delta.slice(t, t + e)
                                }
                            }, {
                                key: "getDelta", value: function () {
                                    return this.scroll.lines().reduce(function (t, e) {
                                        return t.concat(e.delta())
                                    }, new d.default)
                                }
                            }, {
                                key: "getFormat", value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = [],
                                        n = [];
                                    0 === e ? this.scroll.path(t).forEach(function (t) {
                                        var e = u(t, 1), o = e[0];
                                        o instanceof w.default ? r.push(o) : o instanceof q.default.Leaf && n.push(o)
                                    }) : (r = this.scroll.lines(t, e), n = this.scroll.descendants(q.default.Leaf, t, e));
                                    var o = [r, n].map(function (t) {
                                        if (0 === t.length) return {};
                                        for (var e = (0, k.bubbleFormats)(t.shift()); Object.keys(e).length > 0;) {
                                            var r = t.shift();
                                            if (null == r) return e;
                                            e = l((0, k.bubbleFormats)(r), e)
                                        }
                                        return e
                                    });
                                    return T.default.apply(T.default, o)
                                }
                            }, {
                                key: "getText", value: function (t, e) {
                                    return this.getContents(t, e).filter(function (t) {
                                        return "string" == typeof t.insert
                                    }).map(function (t) {
                                        return t.insert
                                    }).join("")
                                }
                            }, {
                                key: "insertEmbed", value: function (t, e, r) {
                                    return this.scroll.insertAt(t, e, r), this.update((new d.default).retain(t).insert(o({}, e, r)))
                                }
                            }, {
                                key: "insertText", value: function (t, e) {
                                    var r = this, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(n).forEach(function (o) {
                                        r.scroll.formatAt(t, e.length, o, n[o])
                                    }), this.update((new d.default).retain(t).insert(e, (0, E.default)(n)))
                                }
                            }, {
                                key: "isBlank", value: function () {
                                    if (0 == this.scroll.children.length) return !0;
                                    if (this.scroll.children.length > 1) return !1;
                                    var t = this.scroll.children.head;
                                    return t.statics.blotName === w.default.blotName && (!(t.children.length > 1) && t.children.head instanceof x.default)
                                }
                            }, {
                                key: "removeFormat", value: function (t, e) {
                                    var r = this.getText(t, e), n = this.scroll.line(t + e), o = u(n, 2), i = o[0],
                                        l = o[1], a = 0, s = new d.default;
                                    null != i && (a = i instanceof g.default ? i.newlineIndex(l) - l + 1 : i.length() - l, s = i.delta().slice(l, l + a - 1).insert("\n"));
                                    var c = this.getContents(t, e + a), f = c.diff((new d.default).insert(r).concat(s)),
                                        p = (new d.default).retain(t).concat(f);
                                    return this.applyDelta(p)
                                }
                            }, {
                                key: "update", value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                        n = this.delta;
                                    if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(P) && q.default.find(e[0].target)) {
                                        var o = q.default.find(e[0].target), i = (0, k.bubbleFormats)(o),
                                            l = o.offset(this.scroll), a = e[0].oldValue.replace(m.default.CONTENTS, ""),
                                            s = (new d.default).insert(a), u = (new d.default).insert(o.value());
                                        t = (new d.default).retain(l).concat(s.diff(u, r)).reduce(function (t, e) {
                                            return e.insert ? t.insert(e.insert, i) : t.push(e)
                                        }, new d.default), this.delta = n.compose(t)
                                    } else this.delta = this.getDelta(), t && (0, N.default)(n.compose(t), this.delta) || (t = n.diff(this.delta, r));
                                    return t
                                }
                            }]), t
                        }();
                    e.default = S
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t) {
                        if (Array.isArray(t)) {
                            for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
                            return r
                        }
                        return Array.from(t)
                    }

                    function i(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        try {
                            e.parentNode
                        } catch (t) {
                            return !1
                        }
                        return e instanceof Text && (e = e.parentNode), t.contains(e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.default = e.Range = void 0;
                    var a = function () {
                            function t(t, e) {
                                var r = [], n = !0, o = !1, i = void 0;
                                try {
                                    for (var l, a = t[Symbol.iterator](); !(n = (l = a.next()).done) && (r.push(l.value), !e || r.length !== e); n = !0) ;
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        !n && a.return && a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return r
                            }

                            return function (e, r) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e)) return t(e, r);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(), s = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), u = r(0), c = n(u), f = r(21), d = n(f), p = r(11), h = n(p), b = r(8), q = n(b), y = r(10),
                        g = n(y), v = (0, g.default)("quill:selection"), m = function t(e) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            i(this, t), this.index = e, this.length = r
                        }, k = function () {
                            function t(e, r) {
                                var n = this;
                                i(this, t), this.emitter = r, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = c.default.create("cursor", this), this.lastRange = this.savedRange = new m(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function () {
                                    n.mouseDown || setTimeout(n.update.bind(n, q.default.sources.USER), 1)
                                }), this.emitter.on(q.default.events.EDITOR_CHANGE, function (t, e) {
                                    t === q.default.events.TEXT_CHANGE && e.length() > 0 && n.update(q.default.sources.SILENT)
                                }), this.emitter.on(q.default.events.SCROLL_BEFORE_UPDATE, function () {
                                    if (n.hasFocus()) {
                                        var t = n.getNativeRange();
                                        null != t && t.start.node !== n.cursor.textNode && n.emitter.once(q.default.events.SCROLL_UPDATE, function () {
                                            try {
                                                n.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset)
                                            } catch (t) {
                                            }
                                        })
                                    }
                                }), this.emitter.on(q.default.events.SCROLL_OPTIMIZE, function (t, e) {
                                    if (e.range) {
                                        var r = e.range, o = r.startNode, i = r.startOffset, l = r.endNode, a = r.endOffset;
                                        n.setNativeRange(o, i, l, a)
                                    }
                                }), this.update(q.default.sources.SILENT)
                            }

                            return s(t, [{
                                key: "handleComposition", value: function () {
                                    var t = this;
                                    this.root.addEventListener("compositionstart", function () {
                                        t.composing = !0
                                    }), this.root.addEventListener("compositionend", function () {
                                        if (t.composing = !1, t.cursor.parent) {
                                            var e = t.cursor.restore();
                                            if (!e) return;
                                            setTimeout(function () {
                                                t.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset)
                                            }, 1)
                                        }
                                    })
                                }
                            }, {
                                key: "handleDragging", value: function () {
                                    var t = this;
                                    this.emitter.listenDOM("mousedown", document.body, function () {
                                        t.mouseDown = !0
                                    }), this.emitter.listenDOM("mouseup", document.body, function () {
                                        t.mouseDown = !1, t.update(q.default.sources.USER)
                                    })
                                }
                            }, {
                                key: "focus", value: function () {
                                    this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange))
                                }
                            }, {
                                key: "format", value: function (t, e) {
                                    if (null == this.scroll.whitelist || this.scroll.whitelist[t]) {
                                        this.scroll.update();
                                        var r = this.getNativeRange();
                                        if (null != r && r.native.collapsed && !c.default.query(t, c.default.Scope.BLOCK)) {
                                            if (r.start.node !== this.cursor.textNode) {
                                                var n = c.default.find(r.start.node, !1);
                                                if (null == n) return;
                                                if (n instanceof c.default.Leaf) {
                                                    var o = n.split(r.start.offset);
                                                    n.parent.insertBefore(this.cursor, o)
                                                } else n.insertBefore(this.cursor, r.start.node);
                                                this.cursor.attach()
                                            }
                                            this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update()
                                        }
                                    }
                                }
                            }, {
                                key: "getBounds", value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        r = this.scroll.length();
                                    t = Math.min(t, r - 1), e = Math.min(t + e, r - 1) - t;
                                    var n = void 0, o = this.scroll.leaf(t), i = a(o, 2), l = i[0], s = i[1];
                                    if (null == l) return null;
                                    var u = l.position(s, !0), c = a(u, 2);
                                    n = c[0], s = c[1];
                                    var f = document.createRange();
                                    if (e > 0) {
                                        f.setStart(n, s);
                                        var d = this.scroll.leaf(t + e), p = a(d, 2);
                                        if (l = p[0], s = p[1], null == l) return null;
                                        var h = l.position(s, !0), b = a(h, 2);
                                        return n = b[0], s = b[1], f.setEnd(n, s), f.getBoundingClientRect()
                                    }
                                    var q = "left", y = void 0;
                                    return n instanceof Text ? (s < n.data.length ? (f.setStart(n, s), f.setEnd(n, s + 1)) : (f.setStart(n, s - 1), f.setEnd(n, s), q = "right"), y = f.getBoundingClientRect()) : (y = l.domNode.getBoundingClientRect(), s > 0 && (q = "right")), {
                                        bottom: y.top + y.height,
                                        height: y.height,
                                        left: y[q],
                                        right: y[q],
                                        top: y.top,
                                        width: 0
                                    }
                                }
                            }, {
                                key: "getNativeRange", value: function () {
                                    var t = document.getSelection();
                                    if (null == t || t.rangeCount <= 0) return null;
                                    var e = t.getRangeAt(0);
                                    if (null == e) return null;
                                    var r = this.normalizeNative(e);
                                    return v.info("getNativeRange", r), r
                                }
                            }, {
                                key: "getRange", value: function () {
                                    var t = this.getNativeRange();
                                    return null == t ? [null, null] : [this.normalizedToRange(t), t]
                                }
                            }, {
                                key: "hasFocus", value: function () {
                                    return document.activeElement === this.root
                                }
                            }, {
                                key: "normalizedToRange", value: function (t) {
                                    var e = this, r = [[t.start.node, t.start.offset]];
                                    t.native.collapsed || r.push([t.end.node, t.end.offset]);
                                    var n = r.map(function (t) {
                                            var r = a(t, 2), n = r[0], o = r[1], i = c.default.find(n, !0),
                                                l = i.offset(e.scroll);
                                            return 0 === o ? l : i instanceof c.default.Container ? l + i.length() : l + i.index(n, o)
                                        }), i = Math.min(Math.max.apply(Math, o(n)), this.scroll.length() - 1),
                                        l = Math.min.apply(Math, [i].concat(o(n)));
                                    return new m(l, i - l)
                                }
                            }, {
                                key: "normalizeNative", value: function (t) {
                                    if (!l(this.root, t.startContainer) || !t.collapsed && !l(this.root, t.endContainer)) return null;
                                    var e = {
                                        start: {node: t.startContainer, offset: t.startOffset},
                                        end: {node: t.endContainer, offset: t.endOffset},
                                        native: t
                                    };
                                    return [e.start, e.end].forEach(function (t) {
                                        for (var e = t.node, r = t.offset; !(e instanceof Text) && e.childNodes.length > 0;) if (e.childNodes.length > r) e = e.childNodes[r], r = 0; else {
                                            if (e.childNodes.length !== r) break;
                                            e = e.lastChild, r = e instanceof Text ? e.data.length : e.childNodes.length + 1
                                        }
                                        t.node = e, t.offset = r
                                    }), e
                                }
                            }, {
                                key: "rangeToNative", value: function (t) {
                                    var e = this, r = t.collapsed ? [t.index] : [t.index, t.index + t.length], n = [],
                                        o = this.scroll.length();
                                    return r.forEach(function (t, r) {
                                        t = Math.min(o - 1, t);
                                        var i = void 0, l = e.scroll.leaf(t), s = a(l, 2), u = s[0], c = s[1],
                                            f = u.position(c, 0 !== r), d = a(f, 2);
                                        i = d[0], c = d[1], n.push(i, c)
                                    }), n.length < 2 && (n = n.concat(n)), n
                                }
                            }, {
                                key: "scrollIntoView", value: function (t) {
                                    var e = this.lastRange;
                                    if (null != e) {
                                        var r = this.getBounds(e.index, e.length);
                                        if (null != r) {
                                            var n = this.scroll.length() - 1, o = this.scroll.line(Math.min(e.index, n)),
                                                i = a(o, 1), l = i[0], s = l;
                                            if (e.length > 0) {
                                                var u = this.scroll.line(Math.min(e.index + e.length, n));
                                                s = a(u, 1)[0]
                                            }
                                            if (null != l && null != s) {
                                                var c = t.getBoundingClientRect();
                                                r.top < c.top ? t.scrollTop -= c.top - r.top : r.bottom > c.bottom && (t.scrollTop += r.bottom - c.bottom)
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "setNativeRange", value: function (t, e) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
                                        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                    if (v.info("setNativeRange", t, e, r, n), null == t || null != this.root.parentNode && null != t.parentNode && null != r.parentNode) {
                                        var i = document.getSelection();
                                        if (null != i) if (null != t) {
                                            this.hasFocus() || this.root.focus();
                                            var l = (this.getNativeRange() || {}).native;
                                            if (null == l || o || t !== l.startContainer || e !== l.startOffset || r !== l.endContainer || n !== l.endOffset) {
                                                "BR" == t.tagName && (e = [].indexOf.call(t.parentNode.childNodes, t), t = t.parentNode), "BR" == r.tagName && (n = [].indexOf.call(r.parentNode.childNodes, r), r = r.parentNode);
                                                var a = document.createRange();
                                                a.setStart(t, e), a.setEnd(r, n), i.removeAllRanges(), i.addRange(a)
                                            }
                                        } else i.removeAllRanges(), this.root.blur(), document.body.focus()
                                    }
                                }
                            }, {
                                key: "setRange", value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : q.default.sources.API;
                                    if ("string" == typeof e && (r = e, e = !1), v.info("setRange", t), null != t) {
                                        var n = this.rangeToNative(t);
                                        this.setNativeRange.apply(this, o(n).concat([e]))
                                    } else this.setNativeRange(null);
                                    this.update(r)
                                }
                            }, {
                                key: "update", value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q.default.sources.USER,
                                        e = this.lastRange, r = this.getRange(), n = a(r, 2), o = n[0], i = n[1];
                                    if (this.lastRange = o, null != this.lastRange && (this.savedRange = this.lastRange), !(0, h.default)(e, this.lastRange)) {
                                        var l;
                                        !this.composing && null != i && i.native.collapsed && i.start.node !== this.cursor.textNode && this.cursor.restore();
                                        var s = [q.default.events.SELECTION_CHANGE, (0, d.default)(this.lastRange), (0, d.default)(e), t];
                                        if ((l = this.emitter).emit.apply(l, [q.default.events.EDITOR_CHANGE].concat(s)), t !== q.default.sources.SILENT) {
                                            var u;
                                            (u = this.emitter).emit.apply(u, s)
                                        }
                                    }
                                }
                            }]), t
                        }();
                    e.Range = m, e.default = k
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), a = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, s = r(0), u = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(s), c = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), l(e, [{
                            key: "insertInto", value: function (t, r) {
                                0 === t.children.length ? a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertInto", this).call(this, t, r) : this.remove()
                            }
                        }, {
                            key: "length", value: function () {
                                return 0
                            }
                        }, {
                            key: "value", value: function () {
                                return ""
                            }
                        }], [{
                            key: "value", value: function () {
                            }
                        }]), e
                    }(u.default.Embed);
                    c.blotName = "break", c.tagName = "BR", e.default = c
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        var e = a.find(t);
                        if (null == e) try {
                            e = a.create(t)
                        } catch (r) {
                            e = a.create(a.Scope.INLINE), [].slice.call(t.childNodes).forEach(function (t) {
                                e.domNode.appendChild(t)
                            }), t.parentNode && t.parentNode.replaceChild(e.domNode, t), e.attach()
                        }
                        return e
                    }

                    var o = this && this.__extends || function () {
                        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        };
                        return function (e, r) {
                            function n() {
                                this.constructor = e
                            }

                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var i = r(44), l = r(30), a = r(1), s = function (t) {
                        function e(e) {
                            var r = t.call(this, e) || this;
                            return r.build(), r
                        }

                        return o(e, t), e.prototype.appendChild = function (t) {
                            this.insertBefore(t)
                        }, e.prototype.attach = function () {
                            t.prototype.attach.call(this), this.children.forEach(function (t) {
                                t.attach()
                            })
                        }, e.prototype.build = function () {
                            var t = this;
                            this.children = new i.default, [].slice.call(this.domNode.childNodes).reverse().forEach(function (e) {
                                try {
                                    var r = n(e);
                                    t.insertBefore(r, t.children.head || void 0)
                                } catch (t) {
                                    if (t instanceof a.ParchmentError) return;
                                    throw t
                                }
                            })
                        }, e.prototype.deleteAt = function (t, e) {
                            if (0 === t && e === this.length()) return this.remove();
                            this.children.forEachAt(t, e, function (t, e, r) {
                                t.deleteAt(e, r)
                            })
                        }, e.prototype.descendant = function (t, r) {
                            var n = this.children.find(r), o = n[0], i = n[1];
                            return null == t.blotName && t(o) || null != t.blotName && o instanceof t ? [o, i] : o instanceof e ? o.descendant(t, i) : [null, -1]
                        }, e.prototype.descendants = function (t, r, n) {
                            void 0 === r && (r = 0), void 0 === n && (n = Number.MAX_VALUE);
                            var o = [], i = n;
                            return this.children.forEachAt(r, n, function (r, n, l) {
                                (null == t.blotName && t(r) || null != t.blotName && r instanceof t) && o.push(r), r instanceof e && (o = o.concat(r.descendants(t, n, i))), i -= l
                            }), o
                        }, e.prototype.detach = function () {
                            this.children.forEach(function (t) {
                                t.detach()
                            }), t.prototype.detach.call(this)
                        }, e.prototype.formatAt = function (t, e, r, n) {
                            this.children.forEachAt(t, e, function (t, e, o) {
                                t.formatAt(e, o, r, n)
                            })
                        }, e.prototype.insertAt = function (t, e, r) {
                            var n = this.children.find(t), o = n[0], i = n[1];
                            if (o) o.insertAt(i, e, r); else {
                                var l = null == r ? a.create("text", e) : a.create(e, r);
                                this.appendChild(l)
                            }
                        }, e.prototype.insertBefore = function (t, e) {
                            if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function (e) {
                                return t instanceof e
                            })) throw new a.ParchmentError("Cannot insert " + t.statics.blotName + " into " + this.statics.blotName);
                            t.insertInto(this, e)
                        }, e.prototype.length = function () {
                            return this.children.reduce(function (t, e) {
                                return t + e.length()
                            }, 0)
                        }, e.prototype.moveChildren = function (t, e) {
                            this.children.forEach(function (r) {
                                t.insertBefore(r, e)
                            })
                        }, e.prototype.optimize = function (e) {
                            if (t.prototype.optimize.call(this, e), 0 === this.children.length) if (null != this.statics.defaultChild) {
                                var r = a.create(this.statics.defaultChild);
                                this.appendChild(r), r.optimize(e)
                            } else this.remove()
                        }, e.prototype.path = function (t, r) {
                            void 0 === r && (r = !1);
                            var n = this.children.find(t, r), o = n[0], i = n[1], l = [[this, t]];
                            return o instanceof e ? l.concat(o.path(i, r)) : (null != o && l.push([o, i]), l)
                        }, e.prototype.removeChild = function (t) {
                            this.children.remove(t)
                        }, e.prototype.replace = function (r) {
                            r instanceof e && r.moveChildren(this), t.prototype.replace.call(this, r)
                        }, e.prototype.split = function (t, e) {
                            if (void 0 === e && (e = !1), !e) {
                                if (0 === t) return this;
                                if (t === this.length()) return this.next
                            }
                            var r = this.clone();
                            return this.parent.insertBefore(r, this.next), this.children.forEachAt(t, this.length(), function (t, n, o) {
                                t = t.split(n, e), r.appendChild(t)
                            }), r
                        }, e.prototype.unwrap = function () {
                            this.moveChildren(this.parent, this.next), this.remove()
                        }, e.prototype.update = function (t, e) {
                            var r = this, o = [], i = [];
                            t.forEach(function (t) {
                                t.target === r.domNode && "childList" === t.type && (o.push.apply(o, t.addedNodes), i.push.apply(i, t.removedNodes))
                            }), i.forEach(function (t) {
                                if (!(null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                                    var e = a.find(t);
                                    null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== r.domNode || e.detach())
                                }
                            }), o.filter(function (t) {
                                return t.parentNode == r.domNode
                            }).sort(function (t, e) {
                                return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
                            }).forEach(function (t) {
                                var e = null;
                                null != t.nextSibling && (e = a.find(t.nextSibling));
                                var o = n(t);
                                o.next == e && null != o.next || (null != o.parent && o.parent.removeChild(r), r.insertBefore(o, e || void 0))
                            })
                        }, e
                    }(l.default);
                    e.default = s
                }, function (t, e, r) {
                    "use strict";
                    var n = this && this.__extends || function () {
                        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        };
                        return function (e, r) {
                            function n() {
                                this.constructor = e
                            }

                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = r(12), i = r(31), l = r(17), a = r(1), s = function (t) {
                        function e(e) {
                            var r = t.call(this, e) || this;
                            return r.attributes = new i.default(r.domNode), r
                        }

                        return n(e, t), e.formats = function (t) {
                            return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
                        }, e.prototype.format = function (t, e) {
                            var r = a.query(t);
                            r instanceof o.default ? this.attributes.attribute(r, e) : e && (null == r || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e))
                        }, e.prototype.formats = function () {
                            var t = this.attributes.values(), e = this.statics.formats(this.domNode);
                            return null != e && (t[this.statics.blotName] = e), t
                        }, e.prototype.replaceWith = function (e, r) {
                            var n = t.prototype.replaceWith.call(this, e, r);
                            return this.attributes.copy(n), n
                        }, e.prototype.update = function (e, r) {
                            var n = this;
                            t.prototype.update.call(this, e, r), e.some(function (t) {
                                return t.target === n.domNode && "attributes" === t.type
                            }) && this.attributes.build()
                        }, e.prototype.wrap = function (r, n) {
                            var o = t.prototype.wrap.call(this, r, n);
                            return o instanceof e && o.statics.scope === this.statics.scope && this.attributes.move(o), o
                        }, e
                    }(l.default);
                    e.default = s
                }, function (t, e, r) {
                    "use strict";
                    var n = this && this.__extends || function () {
                        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        };
                        return function (e, r) {
                            function n() {
                                this.constructor = e
                            }

                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = r(30), i = r(1), l = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }

                        return n(e, t), e.value = function (t) {
                            return !0
                        }, e.prototype.index = function (t, e) {
                            return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1
                        }, e.prototype.position = function (t, e) {
                            var r = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                            return t > 0 && (r += 1), [this.parent.domNode, r]
                        }, e.prototype.value = function () {
                            return t = {}, t[this.statics.blotName] = this.statics.value(this.domNode) || !0, t;
                            var t
                        }, e.scope = i.Scope.INLINE_BLOT, e
                    }(o.default);
                    e.default = l
                }, function (t, e, r) {
                    function n(t) {
                        this.ops = t, this.index = 0, this.offset = 0
                    }

                    var o = r(11), i = r(3), l = {
                        attributes: {
                            compose: function (t, e, r) {
                                "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                                var n = i(!0, {}, e);
                                r || (n = Object.keys(n).reduce(function (t, e) {
                                    return null != n[e] && (t[e] = n[e]), t
                                }, {}));
                                for (var o in t) void 0 !== t[o] && void 0 === e[o] && (n[o] = t[o]);
                                return Object.keys(n).length > 0 ? n : void 0
                            }, diff: function (t, e) {
                                "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                                var r = Object.keys(t).concat(Object.keys(e)).reduce(function (r, n) {
                                    return o(t[n], e[n]) || (r[n] = void 0 === e[n] ? null : e[n]), r
                                }, {});
                                return Object.keys(r).length > 0 ? r : void 0
                            }, transform: function (t, e, r) {
                                if ("object" != typeof t) return e;
                                if ("object" == typeof e) {
                                    if (!r) return e;
                                    var n = Object.keys(e).reduce(function (r, n) {
                                        return void 0 === t[n] && (r[n] = e[n]), r
                                    }, {});
                                    return Object.keys(n).length > 0 ? n : void 0
                                }
                            }
                        }, iterator: function (t) {
                            return new n(t)
                        }, length: function (t) {
                            return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1
                        }
                    };
                    n.prototype.hasNext = function () {
                        return this.peekLength() < 1 / 0
                    }, n.prototype.next = function (t) {
                        t || (t = 1 / 0);
                        var e = this.ops[this.index];
                        if (e) {
                            var r = this.offset, n = l.length(e);
                            if (t >= n - r ? (t = n - r, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e.delete) return {delete: t};
                            var o = {};
                            return e.attributes && (o.attributes = e.attributes), "number" == typeof e.retain ? o.retain = t : "string" == typeof e.insert ? o.insert = e.insert.substr(r, t) : o.insert = e.insert, o
                        }
                        return {retain: 1 / 0}
                    }, n.prototype.peek = function () {
                        return this.ops[this.index]
                    }, n.prototype.peekLength = function () {
                        return this.ops[this.index] ? l.length(this.ops[this.index]) - this.offset : 1 / 0
                    }, n.prototype.peekType = function () {
                        return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
                    }, t.exports = l
                }, function (t, r) {
                    var n = function () {
                        "use strict";

                        function t(t, e) {
                            return null != e && t instanceof e
                        }

                        function r(n, o, i, l, f) {
                            function d(n, i) {
                                if (null === n) return null;
                                if (0 === i) return n;
                                var q, y;
                                if ("object" != typeof n) return n;
                                if (t(n, s)) q = new s; else if (t(n, u)) q = new u; else if (t(n, c)) q = new c(function (t, e) {
                                    n.then(function (e) {
                                        t(d(e, i - 1))
                                    }, function (t) {
                                        e(d(t, i - 1))
                                    })
                                }); else if (r.__isArray(n)) q = []; else if (r.__isRegExp(n)) q = new RegExp(n.source, a(n)), n.lastIndex && (q.lastIndex = n.lastIndex); else if (r.__isDate(n)) q = new Date(n.getTime()); else {
                                    if (b && e.isBuffer(n)) return q = new e(n.length), n.copy(q), q;
                                    t(n, Error) ? q = Object.create(n) : void 0 === l ? (y = Object.getPrototypeOf(n), q = Object.create(y)) : (q = Object.create(l), y = l)
                                }
                                if (o) {
                                    var g = p.indexOf(n);
                                    if (-1 != g) return h[g];
                                    p.push(n), h.push(q)
                                }
                                t(n, s) && n.forEach(function (t, e) {
                                    var r = d(e, i - 1), n = d(t, i - 1);
                                    q.set(r, n)
                                }), t(n, u) && n.forEach(function (t) {
                                    var e = d(t, i - 1);
                                    q.add(e)
                                });
                                for (var v in n) {
                                    var m;
                                    y && (m = Object.getOwnPropertyDescriptor(y, v)), m && null == m.set || (q[v] = d(n[v], i - 1))
                                }
                                if (Object.getOwnPropertySymbols) for (var k = Object.getOwnPropertySymbols(n), v = 0; v < k.length; v++) {
                                    var w = k[v], _ = Object.getOwnPropertyDescriptor(n, w);
                                    (!_ || _.enumerable || f) && (q[w] = d(n[w], i - 1), _.enumerable || Object.defineProperty(q, w, {enumerable: !1}))
                                }
                                if (f) for (var x = Object.getOwnPropertyNames(n), v = 0; v < x.length; v++) {
                                    var O = x[v], _ = Object.getOwnPropertyDescriptor(n, O);
                                    _ && _.enumerable || (q[O] = d(n[O], i - 1), Object.defineProperty(q, O, {enumerable: !1}))
                                }
                                return q
                            }

                            "object" == typeof o && (i = o.depth, l = o.prototype, f = o.includeNonEnumerable, o = o.circular);
                            var p = [], h = [], b = void 0 !== e;
                            return void 0 === o && (o = !0), void 0 === i && (i = 1 / 0), d(n, i)
                        }

                        function n(t) {
                            return Object.prototype.toString.call(t)
                        }

                        function o(t) {
                            return "object" == typeof t && "[object Date]" === n(t)
                        }

                        function i(t) {
                            return "object" == typeof t && "[object Array]" === n(t)
                        }

                        function l(t) {
                            return "object" == typeof t && "[object RegExp]" === n(t)
                        }

                        function a(t) {
                            var e = "";
                            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e
                        }

                        var s;
                        try {
                            s = Map
                        } catch (t) {
                            s = function () {
                            }
                        }
                        var u;
                        try {
                            u = Set
                        } catch (t) {
                            u = function () {
                            }
                        }
                        var c;
                        try {
                            c = Promise
                        } catch (t) {
                            c = function () {
                            }
                        }
                        return r.clonePrototype = function (t) {
                            if (null === t) return null;
                            var e = function () {
                            };
                            return e.prototype = t, new e
                        }, r.__objToStr = n, r.__isDate = o, r.__isArray = i, r.__isRegExp = l, r.__getRegExpFlags = a, r
                    }();
                    "object" == typeof t && t.exports && (t.exports = n)
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function a(t) {
                        return t instanceof q.default || t instanceof b.BlockEmbed
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var s = function () {
                            function t(t, e) {
                                var r = [], n = !0, o = !1, i = void 0;
                                try {
                                    for (var l, a = t[Symbol.iterator](); !(n = (l = a.next()).done) && (r.push(l.value), !e || r.length !== e); n = !0) ;
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        !n && a.return && a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return r
                            }

                            return function (e, r) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e)) return t(e, r);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(), u = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), c = function t(e, r, n) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, r);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, r, n)
                            }
                            if ("value" in o) return o.value;
                            var l = o.get;
                            if (void 0 !== l) return l.call(n)
                        }, f = r(0), d = n(f), p = r(8), h = n(p), b = r(4), q = n(b), y = r(16), g = n(y), v = r(13),
                        m = n(v), k = r(25), w = n(k), _ = function (t) {
                            function e(t, r) {
                                o(this, e);
                                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return n.emitter = r.emitter, Array.isArray(r.whitelist) && (n.whitelist = r.whitelist.reduce(function (t, e) {
                                    return t[e] = !0, t
                                }, {})), n.domNode.addEventListener("DOMNodeInserted", function () {
                                }), n.optimize(), n.enable(), n
                            }

                            return l(e, t), u(e, [{
                                key: "batchStart", value: function () {
                                    this.batch = !0
                                }
                            }, {
                                key: "batchEnd", value: function () {
                                    this.batch = !1, this.optimize()
                                }
                            }, {
                                key: "deleteAt", value: function (t, r) {
                                    var n = this.line(t), o = s(n, 2), i = o[0], l = o[1], a = this.line(t + r),
                                        u = s(a, 1), f = u[0];
                                    if (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, r), null != f && i !== f && l > 0) {
                                        if (i instanceof b.BlockEmbed || f instanceof b.BlockEmbed) return void this.optimize();
                                        if (i instanceof m.default) {
                                            var d = i.newlineIndex(i.length(), !0);
                                            if (d > -1 && (i = i.split(d + 1)) === f) return void this.optimize()
                                        } else if (f instanceof m.default) {
                                            var p = f.newlineIndex(0);
                                            p > -1 && f.split(p + 1)
                                        }
                                        var h = f.children.head instanceof g.default ? null : f.children.head;
                                        i.moveChildren(f, h), i.remove()
                                    }
                                    this.optimize()
                                }
                            }, {
                                key: "enable", value: function () {
                                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                    this.domNode.setAttribute("contenteditable", t)
                                }
                            }, {
                                key: "formatAt", value: function (t, r, n, o) {
                                    (null == this.whitelist || this.whitelist[n]) && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, r, n, o), this.optimize())
                                }
                            }, {
                                key: "insertAt", value: function (t, r, n) {
                                    if (null == n || null == this.whitelist || this.whitelist[r]) {
                                        if (t >= this.length()) if (null == n || null == d.default.query(r, d.default.Scope.BLOCK)) {
                                            var o = d.default.create(this.statics.defaultChild);
                                            this.appendChild(o), null == n && r.endsWith("\n") && (r = r.slice(0, -1)), o.insertAt(0, r, n)
                                        } else {
                                            var i = d.default.create(r, n);
                                            this.appendChild(i)
                                        } else c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, r, n);
                                        this.optimize()
                                    }
                                }
                            }, {
                                key: "insertBefore", value: function (t, r) {
                                    if (t.statics.scope === d.default.Scope.INLINE_BLOT) {
                                        var n = d.default.create(this.statics.defaultChild);
                                        n.appendChild(t), t = n
                                    }
                                    c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, r)
                                }
                            }, {
                                key: "leaf", value: function (t) {
                                    return this.path(t).pop() || [null, -1]
                                }
                            }, {
                                key: "line", value: function (t) {
                                    return t === this.length() ? this.line(t - 1) : this.descendant(a, t)
                                }
                            }, {
                                key: "lines", value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                                    return function t(e, r, n) {
                                        var o = [], i = n;
                                        return e.children.forEachAt(r, n, function (e, r, n) {
                                            a(e) ? o.push(e) : e instanceof d.default.Container && (o = o.concat(t(e, r, i))), i -= n
                                        }), o
                                    }(this, t, e)
                                }
                            }, {
                                key: "optimize", value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    !0 !== this.batch && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t, r), t.length > 0 && this.emitter.emit(h.default.events.SCROLL_OPTIMIZE, t, r))
                                }
                            }, {
                                key: "path", value: function (t) {
                                    return c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t).slice(1)
                                }
                            }, {
                                key: "update", value: function (t) {
                                    if (!0 !== this.batch) {
                                        var r = h.default.sources.USER;
                                        "string" == typeof t && (r = t), Array.isArray(t) || (t = this.observer.takeRecords()), t.length > 0 && this.emitter.emit(h.default.events.SCROLL_BEFORE_UPDATE, r, t), c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this, t.concat([])), t.length > 0 && this.emitter.emit(h.default.events.SCROLL_UPDATE, r, t)
                                    }
                                }
                            }]), e
                        }(d.default.Scroll);
                    _.blotName = "scroll", _.className = "ql-editor", _.tagName = "DIV", _.defaultChild = "block", _.allowedChildren = [q.default, b.BlockEmbed, w.default], e.default = _
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e, r) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r, t
                    }

                    function i(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function a(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function s(t, e) {
                        var r, n = t === D.keys.LEFT ? "prefix" : "suffix";
                        return r = {key: t, shiftKey: e, altKey: null}, o(r, n, /^$/), o(r, "handler", function (r) {
                            var n = r.index;
                            t === D.keys.RIGHT && (n += r.length + 1);
                            var o = this.quill.getLeaf(n);
                            return !(y(o, 1)[0] instanceof T.default.Embed) || (t === D.keys.LEFT ? e ? this.quill.setSelection(r.index - 1, r.length + 1, S.default.sources.USER) : this.quill.setSelection(r.index - 1, S.default.sources.USER) : e ? this.quill.setSelection(r.index, r.length + 1, S.default.sources.USER) : this.quill.setSelection(r.index + r.length + 1, S.default.sources.USER), !1)
                        }), r
                    }

                    function u(t, e) {
                        if (!(0 === t.index || this.quill.getLength() <= 1)) {
                            var r = this.quill.getLine(t.index), n = y(r, 1), o = n[0], i = {};
                            if (0 === e.offset) {
                                var l = this.quill.getLine(t.index - 1), a = y(l, 1), s = a[0];
                                if (null != s && s.length() > 1) {
                                    var u = o.formats(), c = this.quill.getFormat(t.index - 1, 1);
                                    i = N.default.attributes.diff(u, c) || {}
                                }
                            }
                            var f = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
                            this.quill.deleteText(t.index - f, f, S.default.sources.USER), Object.keys(i).length > 0 && this.quill.formatLine(t.index - f, f, i, S.default.sources.USER), this.quill.focus()
                        }
                    }

                    function c(t, e) {
                        var r = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
                        if (!(t.index >= this.quill.getLength() - r)) {
                            var n = {}, o = 0, i = this.quill.getLine(t.index), l = y(i, 1), a = l[0];
                            if (e.offset >= a.length() - 1) {
                                var s = this.quill.getLine(t.index + 1), u = y(s, 1), c = u[0];
                                if (c) {
                                    var f = a.formats(), d = this.quill.getFormat(t.index, 1);
                                    n = N.default.attributes.diff(f, d) || {}, o = c.length()
                                }
                            }
                            this.quill.deleteText(t.index, r, S.default.sources.USER), Object.keys(n).length > 0 && this.quill.formatLine(t.index + o - 1, r, n, S.default.sources.USER)
                        }
                    }

                    function f(t) {
                        var e = this.quill.getLines(t), r = {};
                        if (e.length > 1) {
                            var n = e[0].formats(), o = e[e.length - 1].formats();
                            r = N.default.attributes.diff(o, n) || {}
                        }
                        this.quill.deleteText(t, S.default.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(t.index, 1, r, S.default.sources.USER), this.quill.setSelection(t.index, S.default.sources.SILENT), this.quill.focus()
                    }

                    function d(t, e) {
                        var r = this;
                        t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
                        var n = Object.keys(e.format).reduce(function (t, r) {
                            return T.default.query(r, T.default.Scope.BLOCK) && !Array.isArray(e.format[r]) && (t[r] = e.format[r]), t
                        }, {});
                        this.quill.insertText(t.index, "\n", n, S.default.sources.USER), this.quill.setSelection(t.index + 1, S.default.sources.SILENT), this.quill.focus(), Object.keys(e.format).forEach(function (t) {
                            null == n[t] && (Array.isArray(e.format[t]) || "link" !== t && r.quill.format(t, e.format[t], S.default.sources.USER))
                        })
                    }

                    function p(t) {
                        return {
                            key: D.keys.TAB, shiftKey: !t, format: {"code-block": !0}, handler: function (e) {
                                var r = T.default.query("code-block"), n = e.index, o = e.length,
                                    i = this.quill.scroll.descendant(r, n), l = y(i, 2), a = l[0], s = l[1];
                                if (null != a) {
                                    var u = this.quill.getIndex(a), c = a.newlineIndex(s, !0) + 1,
                                        f = a.newlineIndex(u + s + o),
                                        d = a.domNode.textContent.slice(c, f).split("\n");
                                    s = 0, d.forEach(function (e, i) {
                                        t ? (a.insertAt(c + s, r.TAB), s += r.TAB.length, 0 === i ? n += r.TAB.length : o += r.TAB.length) : e.startsWith(r.TAB) && (a.deleteAt(c + s, r.TAB.length), s -= r.TAB.length, 0 === i ? n -= r.TAB.length : o -= r.TAB.length), s += e.length + 1
                                    }), this.quill.update(S.default.sources.USER), this.quill.setSelection(n, o, S.default.sources.SILENT)
                                }
                            }
                        }
                    }

                    function h(t) {
                        return {
                            key: t[0].toUpperCase(), shortKey: !0, handler: function (e, r) {
                                this.quill.format(t, !r.format[t], S.default.sources.USER)
                            }
                        }
                    }

                    function b(t) {
                        if ("string" == typeof t || "number" == typeof t) return b({key: t});
                        if ("object" === (void 0 === t ? "undefined" : q(t)) && (t = (0, m.default)(t, !1)), "string" == typeof t.key) if (null != D.keys[t.key.toUpperCase()]) t.key = D.keys[t.key.toUpperCase()]; else {
                            if (1 !== t.key.length) return null;
                            t.key = t.key.toUpperCase().charCodeAt(0)
                        }
                        return t.shortKey && (t[B] = t.shortKey, delete t.shortKey), t
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.SHORTKEY = e.default = void 0;
                    var q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, y = function () {
                            function t(t, e) {
                                var r = [], n = !0, o = !1, i = void 0;
                                try {
                                    for (var l, a = t[Symbol.iterator](); !(n = (l = a.next()).done) && (r.push(l.value), !e || r.length !== e); n = !0) ;
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        !n && a.return && a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return r
                            }

                            return function (e, r) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e)) return t(e, r);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(), g = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), v = r(21), m = n(v), k = r(11), w = n(k), _ = r(3), x = n(_), O = r(2), E = n(O), A = r(20),
                        N = n(A), j = r(0), T = n(j), P = r(5), S = n(P), C = r(10), L = n(C), R = r(9), M = n(R),
                        I = (0, L.default)("quill:keyboard"),
                        B = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", D = function (t) {
                            function e(t, r) {
                                i(this, e);
                                var n = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r));
                                return n.bindings = {}, Object.keys(n.options.bindings).forEach(function (e) {
                                    ("list autofill" !== e || null == t.scroll.whitelist || t.scroll.whitelist.list) && n.options.bindings[e] && n.addBinding(n.options.bindings[e])
                                }), n.addBinding({key: e.keys.ENTER, shiftKey: null}, d), n.addBinding({
                                    key: e.keys.ENTER,
                                    metaKey: null,
                                    ctrlKey: null,
                                    altKey: null
                                }, function () {
                                }), /Firefox/i.test(navigator.userAgent) ? (n.addBinding({key: e.keys.BACKSPACE}, {collapsed: !0}, u), n.addBinding({key: e.keys.DELETE}, {collapsed: !0}, c)) : (n.addBinding({key: e.keys.BACKSPACE}, {
                                    collapsed: !0,
                                    prefix: /^.?$/
                                }, u), n.addBinding({key: e.keys.DELETE}, {
                                    collapsed: !0,
                                    suffix: /^.?$/
                                }, c)), n.addBinding({key: e.keys.BACKSPACE}, {collapsed: !1}, f), n.addBinding({key: e.keys.DELETE}, {collapsed: !1}, f), n.addBinding({
                                    key: e.keys.BACKSPACE,
                                    altKey: null,
                                    ctrlKey: null,
                                    metaKey: null,
                                    shiftKey: null
                                }, {collapsed: !0, offset: 0}, u), n.listen(), n
                            }

                            return a(e, t), g(e, null, [{
                                key: "match", value: function (t, e) {
                                    return e = b(e), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function (r) {
                                        return !!e[r] !== t[r] && null !== e[r]
                                    }) && e.key === (t.which || t.keyCode)
                                }
                            }]), g(e, [{
                                key: "addBinding", value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = b(t);
                                    if (null == n || null == n.key) return I.warn("Attempted to add invalid keyboard binding", n);
                                    "function" == typeof e && (e = {handler: e}), "function" == typeof r && (r = {handler: r}), n = (0, x.default)(n, e, r), this.bindings[n.key] = this.bindings[n.key] || [], this.bindings[n.key].push(n)
                                }
                            }, {
                                key: "listen", value: function () {
                                    var t = this;
                                    this.quill.root.addEventListener("keydown", function (r) {
                                        if (!r.defaultPrevented) {
                                            var n = r.which || r.keyCode, o = (t.bindings[n] || []).filter(function (t) {
                                                return e.match(r, t)
                                            });
                                            if (0 !== o.length) {
                                                var i = t.quill.getSelection();
                                                if (null != i && t.quill.hasFocus()) {
                                                    var l = t.quill.getLine(i.index), a = y(l, 2), s = a[0], u = a[1],
                                                        c = t.quill.getLeaf(i.index), f = y(c, 2), d = f[0], p = f[1],
                                                        h = 0 === i.length ? [d, p] : t.quill.getLeaf(i.index + i.length),
                                                        b = y(h, 2), g = b[0], v = b[1],
                                                        m = d instanceof T.default.Text ? d.value().slice(0, p) : "",
                                                        k = g instanceof T.default.Text ? g.value().slice(v) : "", _ = {
                                                            collapsed: 0 === i.length,
                                                            empty: 0 === i.length && s.length() <= 1,
                                                            format: t.quill.getFormat(i),
                                                            offset: u,
                                                            prefix: m,
                                                            suffix: k
                                                        };
                                                    o.some(function (e) {
                                                        if (null != e.collapsed && e.collapsed !== _.collapsed) return !1;
                                                        if (null != e.empty && e.empty !== _.empty) return !1;
                                                        if (null != e.offset && e.offset !== _.offset) return !1;
                                                        if (Array.isArray(e.format)) {
                                                            if (e.format.every(function (t) {
                                                                return null == _.format[t]
                                                            })) return !1
                                                        } else if ("object" === q(e.format) && !Object.keys(e.format).every(function (t) {
                                                            return !0 === e.format[t] ? null != _.format[t] : !1 === e.format[t] ? null == _.format[t] : (0, w.default)(e.format[t], _.format[t])
                                                        })) return !1;
                                                        return !(null != e.prefix && !e.prefix.test(_.prefix)) && (!(null != e.suffix && !e.suffix.test(_.suffix)) && !0 !== e.handler.call(t, i, _))
                                                    }) && r.preventDefault()
                                                }
                                            }
                                        }
                                    })
                                }
                            }]), e
                        }(M.default);
                    D.keys = {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        ESCAPE: 27,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    }, D.DEFAULTS = {
                        bindings: {
                            bold: h("bold"),
                            italic: h("italic"),
                            underline: h("underline"),
                            indent: {
                                key: D.keys.TAB,
                                format: ["blockquote", "indent", "list"],
                                handler: function (t, e) {
                                    if (e.collapsed && 0 !== e.offset) return !0;
                                    this.quill.format("indent", "+1", S.default.sources.USER)
                                }
                            },
                            outdent: {
                                key: D.keys.TAB,
                                shiftKey: !0,
                                format: ["blockquote", "indent", "list"],
                                handler: function (t, e) {
                                    if (e.collapsed && 0 !== e.offset) return !0;
                                    this.quill.format("indent", "-1", S.default.sources.USER)
                                }
                            },
                            "outdent backspace": {
                                key: D.keys.BACKSPACE,
                                collapsed: !0,
                                shiftKey: null,
                                metaKey: null,
                                ctrlKey: null,
                                altKey: null,
                                format: ["indent", "list"],
                                offset: 0,
                                handler: function (t, e) {
                                    null != e.format.indent ? this.quill.format("indent", "-1", S.default.sources.USER) : null != e.format.list && this.quill.format("list", !1, S.default.sources.USER)
                                }
                            },
                            "indent code-block": p(!0),
                            "outdent code-block": p(!1),
                            "remove tab": {
                                key: D.keys.TAB,
                                shiftKey: !0,
                                collapsed: !0,
                                prefix: /\t$/,
                                handler: function (t) {
                                    this.quill.deleteText(t.index - 1, 1, S.default.sources.USER)
                                }
                            },
                            tab: {
                                key: D.keys.TAB, handler: function (t) {
                                    this.quill.history.cutoff();
                                    var e = (new E.default).retain(t.index).delete(t.length).insert("\t");
                                    this.quill.updateContents(e, S.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index + 1, S.default.sources.SILENT)
                                }
                            },
                            "list empty enter": {
                                key: D.keys.ENTER,
                                collapsed: !0,
                                format: ["list"],
                                empty: !0,
                                handler: function (t, e) {
                                    this.quill.format("list", !1, S.default.sources.USER), e.format.indent && this.quill.format("indent", !1, S.default.sources.USER)
                                }
                            },
                            "checklist enter": {
                                key: D.keys.ENTER,
                                collapsed: !0,
                                format: {list: "checked"},
                                handler: function (t) {
                                    var e = this.quill.getLine(t.index), r = y(e, 2), n = r[0], o = r[1],
                                        i = (0, x.default)({}, n.formats(), {list: "checked"}),
                                        l = (new E.default).retain(t.index).insert("\n", i).retain(n.length() - o - 1).retain(1, {list: "unchecked"});
                                    this.quill.updateContents(l, S.default.sources.USER), this.quill.setSelection(t.index + 1, S.default.sources.SILENT), this.quill.scrollIntoView()
                                }
                            },
                            "header enter": {
                                key: D.keys.ENTER,
                                collapsed: !0,
                                format: ["header"],
                                suffix: /^$/,
                                handler: function (t, e) {
                                    var r = this.quill.getLine(t.index), n = y(r, 2), o = n[0], i = n[1],
                                        l = (new E.default).retain(t.index).insert("\n", e.format).retain(o.length() - i - 1).retain(1, {header: null});
                                    this.quill.updateContents(l, S.default.sources.USER), this.quill.setSelection(t.index + 1, S.default.sources.SILENT), this.quill.scrollIntoView()
                                }
                            },
                            "list autofill": {
                                key: " ",
                                collapsed: !0,
                                format: {list: !1},
                                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                                handler: function (t, e) {
                                    var r = e.prefix.length, n = this.quill.getLine(t.index), o = y(n, 2), i = o[0],
                                        l = o[1];
                                    if (l > r) return !0;
                                    var a = void 0;
                                    switch (e.prefix.trim()) {
                                        case"[]":
                                        case"[ ]":
                                            a = "unchecked";
                                            break;
                                        case"[x]":
                                            a = "checked";
                                            break;
                                        case"-":
                                        case"*":
                                            a = "bullet";
                                            break;
                                        default:
                                            a = "ordered"
                                    }
                                    this.quill.insertText(t.index, " ", S.default.sources.USER), this.quill.history.cutoff();
                                    var s = (new E.default).retain(t.index - l).delete(r + 1).retain(i.length() - 2 - l).retain(1, {list: a});
                                    this.quill.updateContents(s, S.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index - r, S.default.sources.SILENT)
                                }
                            },
                            "code exit": {
                                key: D.keys.ENTER,
                                collapsed: !0,
                                format: ["code-block"],
                                prefix: /\n\n$/,
                                suffix: /^\s+$/,
                                handler: function (t) {
                                    var e = this.quill.getLine(t.index), r = y(e, 2), n = r[0], o = r[1],
                                        i = (new E.default).retain(t.index + n.length() - o - 2).retain(1, {"code-block": null}).delete(1);
                                    this.quill.updateContents(i, S.default.sources.USER)
                                }
                            },
                            "embed left": s(D.keys.LEFT, !1),
                            "embed left shift": s(D.keys.LEFT, !0),
                            "embed right": s(D.keys.RIGHT, !1),
                            "embed right shift": s(D.keys.RIGHT, !0)
                        }
                    }, e.default = D, e.SHORTKEY = B
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var a = function () {
                        function t(t, e) {
                            var r = [], n = !0, o = !1, i = void 0;
                            try {
                                for (var l, a = t[Symbol.iterator](); !(n = (l = a.next()).done) && (r.push(l.value), !e || r.length !== e); n = !0) ;
                            } catch (t) {
                                o = !0, i = t
                            } finally {
                                try {
                                    !n && a.return && a.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return r
                        }

                        return function (e, r) {
                            if (Array.isArray(e)) return e;
                            if (Symbol.iterator in Object(e)) return t(e, r);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                    }(), s = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, u = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), c = r(0), f = n(c), d = r(7), p = n(d), h = function (t) {
                        function e(t, r) {
                            o(this, e);
                            var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                            return n.selection = r, n.textNode = document.createTextNode(e.CONTENTS), n.domNode.appendChild(n.textNode), n._length = 0, n
                        }

                        return l(e, t), u(e, null, [{
                            key: "value", value: function () {
                            }
                        }]), u(e, [{
                            key: "detach", value: function () {
                                null != this.parent && this.parent.removeChild(this)
                            }
                        }, {
                            key: "format", value: function (t, r) {
                                if (0 !== this._length) return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, r);
                                for (var n = this, o = 0; null != n && n.statics.scope !== f.default.Scope.BLOCK_BLOT;) o += n.offset(n.parent), n = n.parent;
                                null != n && (this._length = e.CONTENTS.length, n.optimize(), n.formatAt(o, e.CONTENTS.length, t, r), this._length = 0)
                            }
                        }, {
                            key: "index", value: function (t, r) {
                                return t === this.textNode ? 0 : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, r)
                            }
                        }, {
                            key: "length", value: function () {
                                return this._length
                            }
                        }, {
                            key: "position", value: function () {
                                return [this.textNode, this.textNode.data.length]
                            }
                        }, {
                            key: "remove", value: function () {
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this), this.parent = null
                            }
                        }, {
                            key: "restore", value: function () {
                                if (!this.selection.composing && null != this.parent) {
                                    var t = this.textNode, r = this.selection.getNativeRange(), n = void 0, o = void 0,
                                        i = void 0;
                                    if (null != r && r.start.node === t && r.end.node === t) {
                                        var l = [t, r.start.offset, r.end.offset];
                                        n = l[0], o = l[1], i = l[2]
                                    }
                                    for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                                    if (this.textNode.data !== e.CONTENTS) {
                                        var s = this.textNode.data.split(e.CONTENTS).join("");
                                        this.next instanceof p.default ? (n = this.next.domNode, this.next.insertAt(0, s), this.textNode.data = e.CONTENTS) : (this.textNode.data = s, this.parent.insertBefore(f.default.create(this.textNode), this), this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(this.textNode))
                                    }
                                    if (this.remove(), null != o) {
                                        var u = [o, i].map(function (t) {
                                            return Math.max(0, Math.min(n.data.length, t - 1))
                                        }), c = a(u, 2);
                                        return o = c[0], i = c[1], {
                                            startNode: n,
                                            startOffset: o,
                                            endNode: n,
                                            endOffset: i
                                        }
                                    }
                                }
                            }
                        }, {
                            key: "update", value: function (t, e) {
                                var r = this;
                                if (t.some(function (t) {
                                    return "characterData" === t.type && t.target === r.textNode
                                })) {
                                    var n = this.restore();
                                    n && (e.range = n)
                                }
                            }
                        }, {
                            key: "value", value: function () {
                                return ""
                            }
                        }]), e
                    }(f.default.Embed);
                    h.blotName = "cursor", h.className = "ql-cursor", h.tagName = "span", h.CONTENTS = "\ufeff", e.default = h
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var a = r(0), s = n(a), u = r(4), c = n(u), f = function (t) {
                        function e() {
                            return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return l(e, t), e
                    }(s.default.Container);
                    f.allowedChildren = [c.default, u.BlockEmbed, f], e.default = f
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0;
                    var l = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), a = function t(e, r, n) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, r);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, r, n)
                            }
                            if ("value" in o) return o.value;
                            var l = o.get;
                            if (void 0 !== l) return l.call(n)
                        }, s = r(0), u = function (t) {
                            return t && t.__esModule ? t : {default: t}
                        }(s), c = function (t) {
                            function e() {
                                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }

                            return i(e, t), l(e, [{
                                key: "value", value: function (t) {
                                    var r = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t);
                                    return r.startsWith("rgb(") ? (r = r.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + r.split(",").map(function (t) {
                                        return ("00" + parseInt(t).toString(16)).slice(-2)
                                    }).join("")) : r
                                }
                            }]), e
                        }(u.default.Attributor.Style),
                        f = new u.default.Attributor.Class("color", "ql-color", {scope: u.default.Scope.INLINE}),
                        d = new c("color", "color", {scope: u.default.Scope.INLINE});
                    e.ColorAttributor = c, e.ColorClass = f, e.ColorStyle = d
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function l(t, e) {
                        var r = document.createElement("a");
                        r.href = t;
                        var n = r.href.slice(0, r.href.indexOf(":"));
                        return e.indexOf(n) > -1
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.sanitize = e.default = void 0;
                    var a = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), s = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, u = r(6), c = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(u), f = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), a(e, [{
                            key: "format", value: function (t, r) {
                                if (t !== this.statics.blotName || !r) return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, r);
                                r = this.constructor.sanitize(r), this.domNode.setAttribute("href", r)
                            }
                        }], [{
                            key: "create", value: function (t) {
                                var r = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                return t = this.sanitize(t), r.setAttribute("href", t), r.setAttribute("target", "_blank"), r
                            }
                        }, {
                            key: "formats", value: function (t) {
                                return t.getAttribute("href")
                            }
                        }, {
                            key: "sanitize", value: function (t) {
                                return l(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL
                            }
                        }]), e
                    }(c.default);
                    f.blotName = "link", f.tagName = "A", f.SANITIZED_URL = "about:blank", f.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"], e.default = f, e.sanitize = l
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        t.setAttribute(e, !("true" === t.getAttribute(e)))
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, a = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), s = r(23), u = n(s), c = r(107), f = n(c), d = 0, p = function () {
                        function t(e) {
                            var r = this;
                            o(this, t), this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function () {
                                r.togglePicker()
                            }), this.label.addEventListener("keydown", function (t) {
                                switch (t.keyCode) {
                                    case u.default.keys.ENTER:
                                        r.togglePicker();
                                        break;
                                    case u.default.keys.ESCAPE:
                                        r.escape(), t.preventDefault()
                                }
                            }), this.select.addEventListener("change", this.update.bind(this))
                        }

                        return a(t, [{
                            key: "togglePicker", value: function () {
                                this.container.classList.toggle("ql-expanded"), i(this.label, "aria-expanded"), i(this.options, "aria-hidden")
                            }
                        }, {
                            key: "buildItem", value: function (t) {
                                var e = this, r = document.createElement("span");
                                return r.tabIndex = "0", r.setAttribute("role", "button"), r.classList.add("ql-picker-item"), t.hasAttribute("value") && r.setAttribute("data-value", t.getAttribute("value")), t.textContent && r.setAttribute("data-label", t.textContent), r.addEventListener("click", function () {
                                    e.selectItem(r, !0)
                                }), r.addEventListener("keydown", function (t) {
                                    switch (t.keyCode) {
                                        case u.default.keys.ENTER:
                                            e.selectItem(r, !0), t.preventDefault();
                                            break;
                                        case u.default.keys.ESCAPE:
                                            e.escape(), t.preventDefault()
                                    }
                                }), r
                            }
                        }, {
                            key: "buildLabel", value: function () {
                                var t = document.createElement("span");
                                return t.classList.add("ql-picker-label"), t.innerHTML = f.default, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t
                            }
                        }, {
                            key: "buildOptions", value: function () {
                                var t = this, e = document.createElement("span");
                                e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = "ql-picker-options-" + d, d += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, [].slice.call(this.select.options).forEach(function (r) {
                                    var n = t.buildItem(r);
                                    e.appendChild(n), !0 === r.selected && t.selectItem(n)
                                }), this.container.appendChild(e)
                            }
                        }, {
                            key: "buildPicker", value: function () {
                                var t = this;
                                [].slice.call(this.select.attributes).forEach(function (e) {
                                    t.container.setAttribute(e.name, e.value)
                                }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions()
                            }
                        }, {
                            key: "escape", value: function () {
                                var t = this;
                                this.close(), setTimeout(function () {
                                    return t.label.focus()
                                }, 1)
                            }
                        }, {
                            key: "close", value: function () {
                                this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true")
                            }
                        }, {
                            key: "selectItem", value: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = this.container.querySelector(".ql-selected");
                                if (t !== r && (null != r && r.classList.remove("ql-selected"), null != t && (t.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e))) {
                                    if ("function" == typeof Event) this.select.dispatchEvent(new Event("change")); else if ("object" === ("undefined" == typeof Event ? "undefined" : l(Event))) {
                                        var n = document.createEvent("Event");
                                        n.initEvent("change", !0, !0), this.select.dispatchEvent(n)
                                    }
                                    this.close()
                                }
                            }
                        }, {
                            key: "update", value: function () {
                                var t = void 0;
                                if (this.select.selectedIndex > -1) {
                                    var e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                                    t = this.select.options[this.select.selectedIndex], this.selectItem(e)
                                } else this.selectItem(null);
                                var r = null != t && t !== this.select.querySelector("option[selected]");
                                this.label.classList.toggle("ql-active", r)
                            }
                        }]), t
                    }();
                    e.default = p
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = r(0), i = n(o), l = r(5), a = n(l), s = r(4), u = n(s), c = r(16), f = n(c), d = r(25),
                        p = n(d), h = r(24), b = n(h), q = r(35), y = n(q), g = r(6), v = n(g), m = r(22), k = n(m),
                        w = r(7), _ = n(w), x = r(55), O = n(x), E = r(42), A = n(E), N = r(23), j = n(N);
                    a.default.register({
                        "blots/block": u.default,
                        "blots/block/embed": s.BlockEmbed,
                        "blots/break": f.default,
                        "blots/container": p.default,
                        "blots/cursor": b.default,
                        "blots/embed": y.default,
                        "blots/inline": v.default,
                        "blots/scroll": k.default,
                        "blots/text": _.default,
                        "modules/clipboard": O.default,
                        "modules/history": A.default,
                        "modules/keyboard": j.default
                    }), i.default.register(u.default, f.default, b.default, v.default, k.default, _.default), e.default = a.default
                }, function (t, e, r) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var n = r(1), o = function () {
                        function t(t) {
                            this.domNode = t, this.domNode[n.DATA_KEY] = {blot: this}
                        }

                        return Object.defineProperty(t.prototype, "statics", {
                            get: function () {
                                return this.constructor
                            }, enumerable: !0, configurable: !0
                        }), t.create = function (t) {
                            if (null == this.tagName) throw new n.ParchmentError("Blot definition missing tagName");
                            var e;
                            return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(), parseInt(t).toString() === t && (t = parseInt(t))), e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e
                        }, t.prototype.attach = function () {
                            null != this.parent && (this.scroll = this.parent.scroll)
                        }, t.prototype.clone = function () {
                            var t = this.domNode.cloneNode(!1);
                            return n.create(t)
                        }, t.prototype.detach = function () {
                            null != this.parent && this.parent.removeChild(this), delete this.domNode[n.DATA_KEY]
                        }, t.prototype.deleteAt = function (t, e) {
                            this.isolate(t, e).remove()
                        }, t.prototype.formatAt = function (t, e, r, o) {
                            var i = this.isolate(t, e);
                            if (null != n.query(r, n.Scope.BLOT) && o) i.wrap(r, o); else if (null != n.query(r, n.Scope.ATTRIBUTE)) {
                                var l = n.create(this.statics.scope);
                                i.wrap(l), l.format(r, o)
                            }
                        }, t.prototype.insertAt = function (t, e, r) {
                            var o = null == r ? n.create("text", e) : n.create(e, r), i = this.split(t);
                            this.parent.insertBefore(o, i)
                        }, t.prototype.insertInto = function (t, e) {
                            void 0 === e && (e = null), null != this.parent && this.parent.children.remove(this);
                            var r = null;
                            t.children.insertBefore(this, e), null != e && (r = e.domNode), this.domNode.parentNode == t.domNode && this.domNode.nextSibling == r || t.domNode.insertBefore(this.domNode, r), this.parent = t, this.attach()
                        }, t.prototype.isolate = function (t, e) {
                            var r = this.split(t);
                            return r.split(e), r
                        }, t.prototype.length = function () {
                            return 1
                        }, t.prototype.offset = function (t) {
                            return void 0 === t && (t = this.parent), null == this.parent || this == t ? 0 : this.parent.children.offset(this) + this.parent.offset(t)
                        }, t.prototype.optimize = function (t) {
                            null != this.domNode[n.DATA_KEY] && delete this.domNode[n.DATA_KEY].mutations
                        }, t.prototype.remove = function () {
                            null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach()
                        }, t.prototype.replace = function (t) {
                            null != t.parent && (t.parent.insertBefore(this, t.next), t.remove())
                        }, t.prototype.replaceWith = function (t, e) {
                            var r = "string" == typeof t ? n.create(t, e) : t;
                            return r.replace(this), r
                        }, t.prototype.split = function (t, e) {
                            return 0 === t ? this : this.next
                        }, t.prototype.update = function (t, e) {
                        }, t.prototype.wrap = function (t, e) {
                            var r = "string" == typeof t ? n.create(t, e) : t;
                            return null != this.parent && this.parent.insertBefore(r, this.next), r.appendChild(this), r
                        }, t.blotName = "abstract", t
                    }();
                    e.default = o
                }, function (t, e, r) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var n = r(12), o = r(32), i = r(33), l = r(1), a = function () {
                        function t(t) {
                            this.attributes = {}, this.domNode = t, this.build()
                        }

                        return t.prototype.attribute = function (t, e) {
                            e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName])
                        }, t.prototype.build = function () {
                            var t = this;
                            this.attributes = {};
                            var e = n.default.keys(this.domNode), r = o.default.keys(this.domNode),
                                a = i.default.keys(this.domNode);
                            e.concat(r).concat(a).forEach(function (e) {
                                var r = l.query(e, l.Scope.ATTRIBUTE);
                                r instanceof n.default && (t.attributes[r.attrName] = r)
                            })
                        }, t.prototype.copy = function (t) {
                            var e = this;
                            Object.keys(this.attributes).forEach(function (r) {
                                var n = e.attributes[r].value(e.domNode);
                                t.format(r, n)
                            })
                        }, t.prototype.move = function (t) {
                            var e = this;
                            this.copy(t), Object.keys(this.attributes).forEach(function (t) {
                                e.attributes[t].remove(e.domNode)
                            }), this.attributes = {}
                        }, t.prototype.values = function () {
                            var t = this;
                            return Object.keys(this.attributes).reduce(function (e, r) {
                                return e[r] = t.attributes[r].value(t.domNode), e
                            }, {})
                        }, t
                    }();
                    e.default = a
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        return (t.getAttribute("class") || "").split(/\s+/).filter(function (t) {
                            return 0 === t.indexOf(e + "-")
                        })
                    }

                    var o = this && this.__extends || function () {
                        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        };
                        return function (e, r) {
                            function n() {
                                this.constructor = e
                            }

                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var i = r(12), l = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }

                        return o(e, t), e.keys = function (t) {
                            return (t.getAttribute("class") || "").split(/\s+/).map(function (t) {
                                return t.split("-").slice(0, -1).join("-")
                            })
                        }, e.prototype.add = function (t, e) {
                            return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0)
                        }, e.prototype.remove = function (t) {
                            n(t, this.keyName).forEach(function (e) {
                                t.classList.remove(e)
                            }), 0 === t.classList.length && t.removeAttribute("class")
                        }, e.prototype.value = function (t) {
                            var e = n(t, this.keyName)[0] || "", r = e.slice(this.keyName.length + 1);
                            return this.canAdd(t, r) ? r : ""
                        }, e
                    }(i.default);
                    e.default = l
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        var e = t.split("-"), r = e.slice(1).map(function (t) {
                            return t[0].toUpperCase() + t.slice(1)
                        }).join("");
                        return e[0] + r
                    }

                    var o = this && this.__extends || function () {
                        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        };
                        return function (e, r) {
                            function n() {
                                this.constructor = e
                            }

                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var i = r(12), l = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }

                        return o(e, t), e.keys = function (t) {
                            return (t.getAttribute("style") || "").split(";").map(function (t) {
                                return t.split(":")[0].trim()
                            })
                        }, e.prototype.add = function (t, e) {
                            return !!this.canAdd(t, e) && (t.style[n(this.keyName)] = e, !0)
                        }, e.prototype.remove = function (t) {
                            t.style[n(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style")
                        }, e.prototype.value = function (t) {
                            var e = t.style[n(this.keyName)];
                            return this.canAdd(t, e) ? e : ""
                        }, e
                    }(i.default);
                    e.default = l
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), i = function () {
                        function t(e, r) {
                            n(this, t), this.quill = e, this.options = r, this.modules = {}
                        }

                        return o(t, [{
                            key: "init", value: function () {
                                var t = this;
                                Object.keys(this.options.modules).forEach(function (e) {
                                    null == t.modules[e] && t.addModule(e)
                                })
                            }
                        }, {
                            key: "addModule", value: function (t) {
                                var e = this.quill.constructor.import("modules/" + t);
                                return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t]
                            }
                        }]), t
                    }();
                    i.DEFAULTS = {modules: {}}, i.themes = {default: i}, e.default = i
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var a = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), s = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, u = r(0), c = n(u), f = r(7), d = n(f), p = "\ufeff", h = function (t) {
                        function e(t) {
                            o(this, e);
                            var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                            return r.contentNode = document.createElement("span"), r.contentNode.setAttribute("contenteditable", !1), [].slice.call(r.domNode.childNodes).forEach(function (t) {
                                r.contentNode.appendChild(t)
                            }), r.leftGuard = document.createTextNode(p), r.rightGuard = document.createTextNode(p), r.domNode.appendChild(r.leftGuard), r.domNode.appendChild(r.contentNode), r.domNode.appendChild(r.rightGuard), r
                        }

                        return l(e, t), a(e, [{
                            key: "index", value: function (t, r) {
                                return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, r)
                            }
                        }, {
                            key: "restore", value: function (t) {
                                var e = void 0, r = void 0, n = t.data.split(p).join("");
                                if (t === this.leftGuard) if (this.prev instanceof d.default) {
                                    var o = this.prev.length();
                                    this.prev.insertAt(o, n), e = {
                                        startNode: this.prev.domNode,
                                        startOffset: o + n.length
                                    }
                                } else r = document.createTextNode(n), this.parent.insertBefore(c.default.create(r), this), e = {
                                    startNode: r,
                                    startOffset: n.length
                                }; else t === this.rightGuard && (this.next instanceof d.default ? (this.next.insertAt(0, n), e = {
                                    startNode: this.next.domNode,
                                    startOffset: n.length
                                }) : (r = document.createTextNode(n), this.parent.insertBefore(c.default.create(r), this.next), e = {
                                    startNode: r,
                                    startOffset: n.length
                                }));
                                return t.data = p, e
                            }
                        }, {
                            key: "update", value: function (t, e) {
                                var r = this;
                                t.forEach(function (t) {
                                    if ("characterData" === t.type && (t.target === r.leftGuard || t.target === r.rightGuard)) {
                                        var n = r.restore(t.target);
                                        n && (e.range = n)
                                    }
                                })
                            }
                        }]), e
                    }(c.default.Embed);
                    e.default = h
                }, function (t, e, r) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0}), e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0;
                    var n = r(0), o = function (t) {
                            return t && t.__esModule ? t : {default: t}
                        }(n), i = {scope: o.default.Scope.BLOCK, whitelist: ["right", "center", "justify"]},
                        l = new o.default.Attributor.Attribute("align", "align", i),
                        a = new o.default.Attributor.Class("align", "ql-align", i),
                        s = new o.default.Attributor.Style("align", "text-align", i);
                    e.AlignAttribute = l, e.AlignClass = a, e.AlignStyle = s
                }, function (t, e, r) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0}), e.BackgroundStyle = e.BackgroundClass = void 0;
                    var n = r(0), o = function (t) {
                            return t && t.__esModule ? t : {default: t}
                        }(n), i = r(26),
                        l = new o.default.Attributor.Class("background", "ql-bg", {scope: o.default.Scope.INLINE}),
                        a = new i.ColorAttributor("background", "background-color", {scope: o.default.Scope.INLINE});
                    e.BackgroundClass = l, e.BackgroundStyle = a
                }, function (t, e, r) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0}), e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0;
                    var n = r(0), o = function (t) {
                            return t && t.__esModule ? t : {default: t}
                        }(n), i = {scope: o.default.Scope.BLOCK, whitelist: ["rtl"]},
                        l = new o.default.Attributor.Attribute("direction", "dir", i),
                        a = new o.default.Attributor.Class("direction", "ql-direction", i),
                        s = new o.default.Attributor.Style("direction", "direction", i);
                    e.DirectionAttribute = l, e.DirectionClass = a, e.DirectionStyle = s
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.FontClass = e.FontStyle = void 0;
                    var l = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), a = function t(e, r, n) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, r);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, r, n)
                            }
                            if ("value" in o) return o.value;
                            var l = o.get;
                            if (void 0 !== l) return l.call(n)
                        }, s = r(0), u = function (t) {
                            return t && t.__esModule ? t : {default: t}
                        }(s), c = {scope: u.default.Scope.INLINE, whitelist: ["serif", "monospace"]},
                        f = new u.default.Attributor.Class("font", "ql-font", c), d = function (t) {
                            function e() {
                                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }

                            return i(e, t), l(e, [{
                                key: "value", value: function (t) {
                                    return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t).replace(/["']/g, "")
                                }
                            }]), e
                        }(u.default.Attributor.Style), p = new d("font", "font-family", c);
                    e.FontStyle = p, e.FontClass = f
                }, function (t, e, r) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0}), e.SizeStyle = e.SizeClass = void 0;
                    var n = r(0), o = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(n), i = new o.default.Attributor.Class("size", "ql-size", {
                        scope: o.default.Scope.INLINE,
                        whitelist: ["small", "large", "huge"]
                    }), l = new o.default.Attributor.Style("size", "font-size", {
                        scope: o.default.Scope.INLINE,
                        whitelist: ["10px", "18px", "32px"]
                    });
                    e.SizeClass = i, e.SizeStyle = l
                }, function (t, e, r) {
                    "use strict";
                    t.exports = {
                        align: {"": r(76), center: r(77), right: r(78), justify: r(79)},
                        background: r(80),
                        blockquote: r(81),
                        bold: r(82),
                        clean: r(83),
                        code: r(58),
                        "code-block": r(58),
                        color: r(84),
                        direction: {"": r(85), rtl: r(86)},
                        float: {center: r(87), full: r(88), left: r(89), right: r(90)},
                        formula: r(91),
                        header: {1: r(92), 2: r(93)},
                        italic: r(94),
                        image: r(95),
                        indent: {"+1": r(96), "-1": r(97)},
                        link: r(98),
                        list: {ordered: r(99), bullet: r(100), check: r(101)},
                        script: {sub: r(102), super: r(103)},
                        strike: r(104),
                        underline: r(105),
                        video: r(106)
                    }
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function a(t) {
                        var e = t.ops[t.ops.length - 1];
                        return null != e && (null != e.insert ? "string" == typeof e.insert && e.insert.endsWith("\n") : null != e.attributes && Object.keys(e.attributes).some(function (t) {
                            return null != f.default.query(t, f.default.Scope.BLOCK)
                        }))
                    }

                    function s(t) {
                        var e = t.reduce(function (t, e) {
                            return t += e.delete || 0
                        }, 0), r = t.length() - e;
                        return a(t) && (r -= 1), r
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.getLastChangeIndex = e.default = void 0;
                    var u = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), c = r(0), f = n(c), d = r(5), p = n(d), h = r(9), b = n(h), q = function (t) {
                        function e(t, r) {
                            o(this, e);
                            var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r));
                            return n.lastRecorded = 0, n.ignoreChange = !1, n.clear(), n.quill.on(p.default.events.EDITOR_CHANGE, function (t, e, r, o) {
                                t !== p.default.events.TEXT_CHANGE || n.ignoreChange || (n.options.userOnly && o !== p.default.sources.USER ? n.transform(e) : n.record(e, r))
                            }), n.quill.keyboard.addBinding({
                                key: "Z",
                                shortKey: !0
                            }, n.undo.bind(n)), n.quill.keyboard.addBinding({
                                key: "Z",
                                shortKey: !0,
                                shiftKey: !0
                            }, n.redo.bind(n)), /Win/i.test(navigator.platform) && n.quill.keyboard.addBinding({
                                key: "Y",
                                shortKey: !0
                            }, n.redo.bind(n)), n
                        }

                        return l(e, t), u(e, [{
                            key: "change", value: function (t, e) {
                                if (0 !== this.stack[t].length) {
                                    var r = this.stack[t].pop();
                                    this.stack[e].push(r), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(r[t], p.default.sources.USER), this.ignoreChange = !1;
                                    var n = s(r[t]);
                                    this.quill.setSelection(n)
                                }
                            }
                        }, {
                            key: "clear", value: function () {
                                this.stack = {undo: [], redo: []}
                            }
                        }, {
                            key: "cutoff", value: function () {
                                this.lastRecorded = 0
                            }
                        }, {
                            key: "record", value: function (t, e) {
                                if (0 !== t.ops.length) {
                                    this.stack.redo = [];
                                    var r = this.quill.getContents().diff(e), n = Date.now();
                                    if (this.lastRecorded + this.options.delay > n && this.stack.undo.length > 0) {
                                        var o = this.stack.undo.pop();
                                        r = r.compose(o.undo), t = o.redo.compose(t)
                                    } else this.lastRecorded = n;
                                    this.stack.undo.push({
                                        redo: t,
                                        undo: r
                                    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift()
                                }
                            }
                        }, {
                            key: "redo", value: function () {
                                this.change("redo", "undo")
                            }
                        }, {
                            key: "transform", value: function (t) {
                                this.stack.undo.forEach(function (e) {
                                    e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
                                }), this.stack.redo.forEach(function (e) {
                                    e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
                                })
                            }
                        }, {
                            key: "undo", value: function () {
                                this.change("undo", "redo")
                            }
                        }]), e
                    }(b.default);
                    q.DEFAULTS = {delay: 1e3, maxStack: 100, userOnly: !1}, e.default = q, e.getLastChangeIndex = s
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function a(t) {
                        var e = t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
                        return e ? (e[1] || "https") + "://www.youtube.com/embed/" + e[2] + "?showinfo=0" : (e = t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e[1] || "https") + "://player.vimeo.com/video/" + e[2] + "/" : t
                    }

                    function s(t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e.forEach(function (e) {
                            var n = document.createElement("option");
                            e === r ? n.setAttribute("selected", "selected") : n.setAttribute("value", e), t.appendChild(n)
                        })
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.default = e.BaseTooltip = void 0;
                    var u = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), c = function t(e, r, n) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, r);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, r, n)
                            }
                            if ("value" in o) return o.value;
                            var l = o.get;
                            if (void 0 !== l) return l.call(n)
                        }, f = r(3), d = n(f), p = r(2), h = n(p), b = r(8), q = n(b), y = r(23), g = n(y), v = r(34),
                        m = n(v), k = r(59), w = n(k), _ = r(60), x = n(_), O = r(28), E = n(O), A = r(61), N = n(A),
                        j = [!1, "center", "right", "justify"],
                        T = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"],
                        P = [!1, "serif", "monospace"], S = ["1", "2", "3", !1], C = ["small", !1, "large", "huge"],
                        L = function (t) {
                            function e(t, r) {
                                o(this, e);
                                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r)),
                                    l = function e(r) {
                                        if (!document.body.contains(t.root)) return document.body.removeEventListener("click", e);
                                        null == n.tooltip || n.tooltip.root.contains(r.target) || document.activeElement === n.tooltip.textbox || n.quill.hasFocus() || n.tooltip.hide(), null != n.pickers && n.pickers.forEach(function (t) {
                                            t.container.contains(r.target) || t.close()
                                        })
                                    };
                                return t.emitter.listenDOM("click", document.body, l), n
                            }

                            return l(e, t), u(e, [{
                                key: "addModule", value: function (t) {
                                    var r = c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addModule", this).call(this, t);
                                    return "toolbar" === t && this.extendToolbar(r), r
                                }
                            }, {
                                key: "buildButtons", value: function (t, e) {
                                    t.forEach(function (t) {
                                        (t.getAttribute("class") || "").split(/\s+/).forEach(function (r) {
                                            if (r.startsWith("ql-") && (r = r.slice("ql-".length), null != e[r])) if ("direction" === r) t.innerHTML = e[r][""] + e[r].rtl; else if ("string" == typeof e[r]) t.innerHTML = e[r]; else {
                                                var n = t.value || "";
                                                null != n && e[r][n] && (t.innerHTML = e[r][n])
                                            }
                                        })
                                    })
                                }
                            }, {
                                key: "buildPickers", value: function (t, e) {
                                    var r = this;
                                    this.pickers = t.map(function (t) {
                                        if (t.classList.contains("ql-align")) return null == t.querySelector("option") && s(t, j), new x.default(t, e.align);
                                        if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
                                            var r = t.classList.contains("ql-background") ? "background" : "color";
                                            return null == t.querySelector("option") && s(t, T, "background" === r ? "#ffffff" : "#000000"), new w.default(t, e[r])
                                        }
                                        return null == t.querySelector("option") && (t.classList.contains("ql-font") ? s(t, P) : t.classList.contains("ql-header") ? s(t, S) : t.classList.contains("ql-size") && s(t, C)), new E.default(t)
                                    });
                                    var n = function () {
                                        r.pickers.forEach(function (t) {
                                            t.update()
                                        })
                                    };
                                    this.quill.on(q.default.events.EDITOR_CHANGE, n)
                                }
                            }]), e
                        }(m.default);
                    L.DEFAULTS = (0, d.default)(!0, {}, m.default.DEFAULTS, {
                        modules: {
                            toolbar: {
                                handlers: {
                                    formula: function () {
                                        this.quill.theme.tooltip.edit("formula")
                                    }, image: function () {
                                        var t = this, e = this.container.querySelector("input.ql-image[type=file]");
                                        null == e && (e = document.createElement("input"), e.setAttribute("type", "file"), e.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), e.classList.add("ql-image"), e.addEventListener("change", function () {
                                            if (null != e.files && null != e.files[0]) {
                                                var r = new FileReader;
                                                r.onload = function (r) {
                                                    var n = t.quill.getSelection(!0);
                                                    t.quill.updateContents((new h.default).retain(n.index).delete(n.length).insert({image: r.target.result}), q.default.sources.USER), t.quill.setSelection(n.index + 1, q.default.sources.SILENT), e.value = ""
                                                }, r.readAsDataURL(e.files[0])
                                            }
                                        }), this.container.appendChild(e)), e.click()
                                    }, video: function () {
                                        this.quill.theme.tooltip.edit("video")
                                    }
                                }
                            }
                        }
                    });
                    var R = function (t) {
                        function e(t, r) {
                            o(this, e);
                            var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r));
                            return n.textbox = n.root.querySelector('input[type="text"]'), n.listen(), n
                        }

                        return l(e, t), u(e, [{
                            key: "listen", value: function () {
                                var t = this;
                                this.textbox.addEventListener("keydown", function (e) {
                                    g.default.match(e, "enter") ? (t.save(), e.preventDefault()) : g.default.match(e, "escape") && (t.cancel(), e.preventDefault())
                                })
                            }
                        }, {
                            key: "cancel", value: function () {
                                this.hide()
                            }
                        }, {
                            key: "edit", value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link",
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t) || ""), this.root.setAttribute("data-mode", t)
                            }
                        }, {
                            key: "restoreFocus", value: function () {
                                var t = this.quill.scrollingContainer.scrollTop;
                                this.quill.focus(), this.quill.scrollingContainer.scrollTop = t
                            }
                        }, {
                            key: "save", value: function () {
                                var t = this.textbox.value;
                                switch (this.root.getAttribute("data-mode")) {
                                    case"link":
                                        var e = this.quill.root.scrollTop;
                                        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, q.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, q.default.sources.USER)), this.quill.root.scrollTop = e;
                                        break;
                                    case"video":
                                        t = a(t);
                                    case"formula":
                                        if (!t) break;
                                        var r = this.quill.getSelection(!0);
                                        if (null != r) {
                                            var n = r.index + r.length;
                                            this.quill.insertEmbed(n, this.root.getAttribute("data-mode"), t, q.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(n + 1, " ", q.default.sources.USER), this.quill.setSelection(n + 2, q.default.sources.USER)
                                        }
                                }
                                this.textbox.value = "", this.hide()
                            }
                        }]), e
                    }(N.default);
                    e.BaseTooltip = R, e.default = L
                }, function (t, e, r) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var n = function () {
                        function t() {
                            this.head = this.tail = null, this.length = 0
                        }

                        return t.prototype.append = function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            this.insertBefore(t[0], null), t.length > 1 && this.append.apply(this, t.slice(1))
                        }, t.prototype.contains = function (t) {
                            for (var e, r = this.iterator(); e = r();) if (e === t) return !0;
                            return !1
                        }, t.prototype.insertBefore = function (t, e) {
                            t && (t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1)
                        }, t.prototype.offset = function (t) {
                            for (var e = 0, r = this.head; null != r;) {
                                if (r === t) return e;
                                e += r.length(), r = r.next
                            }
                            return -1
                        }, t.prototype.remove = function (t) {
                            this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1)
                        }, t.prototype.iterator = function (t) {
                            return void 0 === t && (t = this.head), function () {
                                var e = t;
                                return null != t && (t = t.next), e
                            }
                        }, t.prototype.find = function (t, e) {
                            void 0 === e && (e = !1);
                            for (var r, n = this.iterator(); r = n();) {
                                var o = r.length();
                                if (t < o || e && t === o && (null == r.next || 0 !== r.next.length())) return [r, t];
                                t -= o
                            }
                            return [null, 0]
                        }, t.prototype.forEach = function (t) {
                            for (var e, r = this.iterator(); e = r();) t(e)
                        }, t.prototype.forEachAt = function (t, e, r) {
                            if (!(e <= 0)) for (var n, o = this.find(t), i = o[0], l = o[1], a = t - l, s = this.iterator(i); (n = s()) && a < t + e;) {
                                var u = n.length();
                                t > a ? r(n, t - a, Math.min(e, a + u - t)) : r(n, 0, Math.min(u, t + e - a)), a += u
                            }
                        }, t.prototype.map = function (t) {
                            return this.reduce(function (e, r) {
                                return e.push(t(r)), e
                            }, [])
                        }, t.prototype.reduce = function (t, e) {
                            for (var r, n = this.iterator(); r = n();) e = t(e, r);
                            return e
                        }, t
                    }();
                    e.default = n
                }, function (t, e, r) {
                    "use strict";
                    var n = this && this.__extends || function () {
                        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        };
                        return function (e, r) {
                            function n() {
                                this.constructor = e
                            }

                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = r(17), i = r(1),
                        l = {attributes: !0, characterData: !0, characterDataOldValue: !0, childList: !0, subtree: !0},
                        a = function (t) {
                            function e(e) {
                                var r = t.call(this, e) || this;
                                return r.scroll = r, r.observer = new MutationObserver(function (t) {
                                    r.update(t)
                                }), r.observer.observe(r.domNode, l), r.attach(), r
                            }

                            return n(e, t), e.prototype.detach = function () {
                                t.prototype.detach.call(this), this.observer.disconnect()
                            }, e.prototype.deleteAt = function (e, r) {
                                this.update(), 0 === e && r === this.length() ? this.children.forEach(function (t) {
                                    t.remove()
                                }) : t.prototype.deleteAt.call(this, e, r)
                            }, e.prototype.formatAt = function (e, r, n, o) {
                                this.update(), t.prototype.formatAt.call(this, e, r, n, o)
                            }, e.prototype.insertAt = function (e, r, n) {
                                this.update(), t.prototype.insertAt.call(this, e, r, n)
                            }, e.prototype.optimize = function (e, r) {
                                var n = this;
                                void 0 === e && (e = []), void 0 === r && (r = {}), t.prototype.optimize.call(this, r);
                                for (var l = [].slice.call(this.observer.takeRecords()); l.length > 0;) e.push(l.pop());
                                for (var a = function (t, e) {
                                    void 0 === e && (e = !0), null != t && t !== n && null != t.domNode.parentNode && (null == t.domNode[i.DATA_KEY].mutations && (t.domNode[i.DATA_KEY].mutations = []), e && a(t.parent))
                                }, s = function (t) {
                                    null != t.domNode[i.DATA_KEY] && null != t.domNode[i.DATA_KEY].mutations && (t instanceof o.default && t.children.forEach(s), t.optimize(r))
                                }, u = e, c = 0; u.length > 0; c += 1) {
                                    if (c >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");
                                    for (u.forEach(function (t) {
                                        var e = i.find(t.target, !0);
                                        null != e && (e.domNode === t.target && ("childList" === t.type ? (a(i.find(t.previousSibling, !1)), [].forEach.call(t.addedNodes, function (t) {
                                            var e = i.find(t, !1);
                                            a(e, !1), e instanceof o.default && e.children.forEach(function (t) {
                                                a(t, !1)
                                            })
                                        })) : "attributes" === t.type && a(e.prev)), a(e))
                                    }), this.children.forEach(s), u = [].slice.call(this.observer.takeRecords()), l = u.slice(); l.length > 0;) e.push(l.pop())
                                }
                            }, e.prototype.update = function (e, r) {
                                var n = this;
                                void 0 === r && (r = {}), e = e || this.observer.takeRecords(), e.map(function (t) {
                                    var e = i.find(t.target, !0);
                                    return null == e ? null : null == e.domNode[i.DATA_KEY].mutations ? (e.domNode[i.DATA_KEY].mutations = [t], e) : (e.domNode[i.DATA_KEY].mutations.push(t), null)
                                }).forEach(function (t) {
                                    null != t && t !== n && null != t.domNode[i.DATA_KEY] && t.update(t.domNode[i.DATA_KEY].mutations || [], r)
                                }), null != this.domNode[i.DATA_KEY].mutations && t.prototype.update.call(this, this.domNode[i.DATA_KEY].mutations, r), this.optimize(e, r)
                            }, e.blotName = "scroll", e.defaultChild = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "DIV", e
                        }(o.default);
                    e.default = a
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (Object.keys(t).length !== Object.keys(e).length) return !1;
                        for (var r in t) if (t[r] !== e[r]) return !1;
                        return !0
                    }

                    var o = this && this.__extends || function () {
                        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        };
                        return function (e, r) {
                            function n() {
                                this.constructor = e
                            }

                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var i = r(18), l = r(1), a = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }

                        return o(e, t), e.formats = function (r) {
                            if (r.tagName !== e.tagName) return t.formats.call(this, r)
                        }, e.prototype.format = function (r, n) {
                            var o = this;
                            r !== this.statics.blotName || n ? t.prototype.format.call(this, r, n) : (this.children.forEach(function (t) {
                                t instanceof i.default || (t = t.wrap(e.blotName, !0)), o.attributes.copy(t)
                            }), this.unwrap())
                        }, e.prototype.formatAt = function (e, r, n, o) {
                            if (null != this.formats()[n] || l.query(n, l.Scope.ATTRIBUTE)) {
                                this.isolate(e, r).format(n, o)
                            } else t.prototype.formatAt.call(this, e, r, n, o)
                        }, e.prototype.optimize = function (r) {
                            t.prototype.optimize.call(this, r);
                            var o = this.formats();
                            if (0 === Object.keys(o).length) return this.unwrap();
                            var i = this.next;
                            i instanceof e && i.prev === this && n(o, i.formats()) && (i.moveChildren(this), i.remove())
                        }, e.blotName = "inline", e.scope = l.Scope.INLINE_BLOT, e.tagName = "SPAN", e
                    }(i.default);
                    e.default = a
                }, function (t, e, r) {
                    "use strict";
                    var n = this && this.__extends || function () {
                        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        };
                        return function (e, r) {
                            function n() {
                                this.constructor = e
                            }

                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = r(18), i = r(1), l = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }

                        return n(e, t), e.formats = function (r) {
                            var n = i.query(e.blotName).tagName;
                            if (r.tagName !== n) return t.formats.call(this, r)
                        }, e.prototype.format = function (r, n) {
                            null != i.query(r, i.Scope.BLOCK) && (r !== this.statics.blotName || n ? t.prototype.format.call(this, r, n) : this.replaceWith(e.blotName))
                        }, e.prototype.formatAt = function (e, r, n, o) {
                            null != i.query(n, i.Scope.BLOCK) ? this.format(n, o) : t.prototype.formatAt.call(this, e, r, n, o)
                        }, e.prototype.insertAt = function (e, r, n) {
                            if (null == n || null != i.query(r, i.Scope.INLINE)) t.prototype.insertAt.call(this, e, r, n); else {
                                var o = this.split(e), l = i.create(r, n);
                                o.parent.insertBefore(l, o)
                            }
                        }, e.prototype.update = function (e, r) {
                            navigator.userAgent.match(/Trident/) ? this.build() : t.prototype.update.call(this, e, r)
                        }, e.blotName = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "P", e
                    }(o.default);
                    e.default = l
                }, function (t, e, r) {
                    "use strict";
                    var n = this && this.__extends || function () {
                        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        };
                        return function (e, r) {
                            function n() {
                                this.constructor = e
                            }

                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = r(19), i = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }

                        return n(e, t), e.formats = function (t) {
                        }, e.prototype.format = function (e, r) {
                            t.prototype.formatAt.call(this, 0, this.length(), e, r)
                        }, e.prototype.formatAt = function (e, r, n, o) {
                            0 === e && r === this.length() ? this.format(n, o) : t.prototype.formatAt.call(this, e, r, n, o)
                        }, e.prototype.formats = function () {
                            return this.statics.formats(this.domNode)
                        }, e
                    }(o.default);
                    e.default = i
                }, function (t, e, r) {
                    "use strict";
                    var n = this && this.__extends || function () {
                        var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        };
                        return function (e, r) {
                            function n() {
                                this.constructor = e
                            }

                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = r(19), i = r(1), l = function (t) {
                        function e(e) {
                            var r = t.call(this, e) || this;
                            return r.text = r.statics.value(r.domNode), r
                        }

                        return n(e, t), e.create = function (t) {
                            return document.createTextNode(t)
                        }, e.value = function (t) {
                            var e = t.data;
                            return e.normalize && (e = e.normalize()), e
                        }, e.prototype.deleteAt = function (t, e) {
                            this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e)
                        }, e.prototype.index = function (t, e) {
                            return this.domNode === t ? e : -1
                        }, e.prototype.insertAt = function (e, r, n) {
                            null == n ? (this.text = this.text.slice(0, e) + r + this.text.slice(e), this.domNode.data = this.text) : t.prototype.insertAt.call(this, e, r, n)
                        }, e.prototype.length = function () {
                            return this.text.length
                        }, e.prototype.optimize = function (r) {
                            t.prototype.optimize.call(this, r), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove())
                        }, e.prototype.position = function (t, e) {
                            return void 0 === e && (e = !1), [this.domNode, t]
                        }, e.prototype.split = function (t, e) {
                            if (void 0 === e && (e = !1), !e) {
                                if (0 === t) return this;
                                if (t === this.length()) return this.next
                            }
                            var r = i.create(this.domNode.splitText(t));
                            return this.parent.insertBefore(r, this.next), this.text = this.statics.value(this.domNode), r
                        }, e.prototype.update = function (t, e) {
                            var r = this;
                            t.some(function (t) {
                                return "characterData" === t.type && t.target === r.domNode
                            }) && (this.text = this.statics.value(this.domNode))
                        }, e.prototype.value = function () {
                            return this.text
                        }, e.blotName = "text", e.scope = i.Scope.INLINE_BLOT, e
                    }(o.default);
                    e.default = l
                }, function (t, e, r) {
                    "use strict";
                    var n = document.createElement("div");
                    if (n.classList.toggle("test-class", !1), n.classList.contains("test-class")) {
                        var o = DOMTokenList.prototype.toggle;
                        DOMTokenList.prototype.toggle = function (t, e) {
                            return arguments.length > 1 && !this.contains(t) == !e ? e : o.call(this, t)
                        }
                    }
                    String.prototype.startsWith || (String.prototype.startsWith = function (t, e) {
                        return e = e || 0, this.substr(e, t.length) === t
                    }), String.prototype.endsWith || (String.prototype.endsWith = function (t, e) {
                        var r = this.toString();
                        ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > r.length) && (e = r.length), e -= t.length;
                        var n = r.indexOf(t, e);
                        return -1 !== n && n === e
                    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
                        value: function (t) {
                            if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
                            if ("function" != typeof t) throw new TypeError("predicate must be a function");
                            for (var e, r = Object(this), n = r.length >>> 0, o = arguments[1], i = 0; i < n; i++) if (e = r[i], t.call(o, e, i, r)) return e
                        }
                    }), document.addEventListener("DOMContentLoaded", function () {
                        document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1)
                    })
                }, function (t, e) {
                    function r(t, e, r) {
                        if (t == e) return t ? [[q, t]] : [];
                        (r < 0 || t.length < r) && (r = null);
                        var o = l(t, e), i = t.substring(0, o);
                        t = t.substring(o), e = e.substring(o), o = a(t, e);
                        var s = t.substring(t.length - o);
                        t = t.substring(0, t.length - o), e = e.substring(0, e.length - o);
                        var c = n(t, e);
                        return i && c.unshift([q, i]), s && c.push([q, s]), u(c), null != r && (c = f(c, r)), c = d(c)
                    }

                    function n(t, e) {
                        var n;
                        if (!t) return [[b, e]];
                        if (!e) return [[h, t]];
                        var i = t.length > e.length ? t : e, l = t.length > e.length ? e : t, a = i.indexOf(l);
                        if (-1 != a) return n = [[b, i.substring(0, a)], [q, l], [b, i.substring(a + l.length)]], t.length > e.length && (n[0][0] = n[2][0] = h), n;
                        if (1 == l.length) return [[h, t], [b, e]];
                        var u = s(t, e);
                        if (u) {
                            var c = u[0], f = u[1], d = u[2], p = u[3], y = u[4], g = r(c, d), v = r(f, p);
                            return g.concat([[q, y]], v)
                        }
                        return o(t, e)
                    }

                    function o(t, e) {
                        for (var r = t.length, n = e.length, o = Math.ceil((r + n) / 2), l = o, a = 2 * o, s = new Array(a), u = new Array(a), c = 0; c < a; c++) s[c] = -1, u[c] = -1;
                        s[l + 1] = 0, u[l + 1] = 0;
                        for (var f = r - n, d = f % 2 != 0, p = 0, q = 0, y = 0, g = 0, v = 0; v < o; v++) {
                            for (var m = -v + p; m <= v - q; m += 2) {
                                var k, w = l + m;
                                k = m == -v || m != v && s[w - 1] < s[w + 1] ? s[w + 1] : s[w - 1] + 1;
                                for (var _ = k - m; k < r && _ < n && t.charAt(k) == e.charAt(_);) k++, _++;
                                if (s[w] = k, k > r) q += 2; else if (_ > n) p += 2; else if (d) {
                                    var x = l + f - m;
                                    if (x >= 0 && x < a && -1 != u[x]) {
                                        var O = r - u[x];
                                        if (k >= O) return i(t, e, k, _)
                                    }
                                }
                            }
                            for (var E = -v + y; E <= v - g; E += 2) {
                                var O, x = l + E;
                                O = E == -v || E != v && u[x - 1] < u[x + 1] ? u[x + 1] : u[x - 1] + 1;
                                for (var A = O - E; O < r && A < n && t.charAt(r - O - 1) == e.charAt(n - A - 1);) O++, A++;
                                if (u[x] = O, O > r) g += 2; else if (A > n) y += 2; else if (!d) {
                                    var w = l + f - E;
                                    if (w >= 0 && w < a && -1 != s[w]) {
                                        var k = s[w], _ = l + k - w;
                                        if (O = r - O, k >= O) return i(t, e, k, _)
                                    }
                                }
                            }
                        }
                        return [[h, t], [b, e]]
                    }

                    function i(t, e, n, o) {
                        var i = t.substring(0, n), l = e.substring(0, o), a = t.substring(n), s = e.substring(o),
                            u = r(i, l), c = r(a, s);
                        return u.concat(c)
                    }

                    function l(t, e) {
                        if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
                        for (var r = 0, n = Math.min(t.length, e.length), o = n, i = 0; r < o;) t.substring(i, o) == e.substring(i, o) ? (r = o, i = r) : n = o, o = Math.floor((n - r) / 2 + r);
                        return o
                    }

                    function a(t, e) {
                        if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;
                        for (var r = 0, n = Math.min(t.length, e.length), o = n, i = 0; r < o;) t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i) ? (r = o, i = r) : n = o, o = Math.floor((n - r) / 2 + r);
                        return o
                    }

                    function s(t, e) {
                        function r(t, e, r) {
                            for (var n, o, i, s, u = t.substring(r, r + Math.floor(t.length / 4)), c = -1, f = ""; -1 != (c = e.indexOf(u, c + 1));) {
                                var d = l(t.substring(r), e.substring(c)), p = a(t.substring(0, r), e.substring(0, c));
                                f.length < p + d && (f = e.substring(c - p, c) + e.substring(c, c + d), n = t.substring(0, r - p), o = t.substring(r + d), i = e.substring(0, c - p), s = e.substring(c + d))
                            }
                            return 2 * f.length >= t.length ? [n, o, i, s, f] : null
                        }

                        var n = t.length > e.length ? t : e, o = t.length > e.length ? e : t;
                        if (n.length < 4 || 2 * o.length < n.length) return null;
                        var i, s = r(n, o, Math.ceil(n.length / 4)), u = r(n, o, Math.ceil(n.length / 2));
                        if (!s && !u) return null;
                        i = u ? s && s[4].length > u[4].length ? s : u : s;
                        var c, f, d, p;
                        return t.length > e.length ? (c = i[0], f = i[1], d = i[2], p = i[3]) : (d = i[0], p = i[1], c = i[2], f = i[3]), [c, f, d, p, i[4]]
                    }

                    function u(t) {
                        t.push([q, ""]);
                        for (var e, r = 0, n = 0, o = 0, i = "", s = ""; r < t.length;) switch (t[r][0]) {
                            case b:
                                o++, s += t[r][1], r++;
                                break;
                            case h:
                                n++, i += t[r][1], r++;
                                break;
                            case q:
                                n + o > 1 ? (0 !== n && 0 !== o && (e = l(s, i), 0 !== e && (r - n - o > 0 && t[r - n - o - 1][0] == q ? t[r - n - o - 1][1] += s.substring(0, e) : (t.splice(0, 0, [q, s.substring(0, e)]), r++), s = s.substring(e), i = i.substring(e)), 0 !== (e = a(s, i)) && (t[r][1] = s.substring(s.length - e) + t[r][1], s = s.substring(0, s.length - e), i = i.substring(0, i.length - e))), 0 === n ? t.splice(r - o, n + o, [b, s]) : 0 === o ? t.splice(r - n, n + o, [h, i]) : t.splice(r - n - o, n + o, [h, i], [b, s]), r = r - n - o + (n ? 1 : 0) + (o ? 1 : 0) + 1) : 0 !== r && t[r - 1][0] == q ? (t[r - 1][1] += t[r][1], t.splice(r, 1)) : r++, o = 0, n = 0, i = "", s = ""
                        }
                        "" === t[t.length - 1][1] && t.pop();
                        var c = !1;
                        for (r = 1; r < t.length - 1;) t[r - 1][0] == q && t[r + 1][0] == q && (t[r][1].substring(t[r][1].length - t[r - 1][1].length) == t[r - 1][1] ? (t[r][1] = t[r - 1][1] + t[r][1].substring(0, t[r][1].length - t[r - 1][1].length), t[r + 1][1] = t[r - 1][1] + t[r + 1][1], t.splice(r - 1, 1), c = !0) : t[r][1].substring(0, t[r + 1][1].length) == t[r + 1][1] && (t[r - 1][1] += t[r + 1][1], t[r][1] = t[r][1].substring(t[r + 1][1].length) + t[r + 1][1], t.splice(r + 1, 1), c = !0)), r++;
                        c && u(t)
                    }

                    function c(t, e) {
                        if (0 === e) return [q, t];
                        for (var r = 0, n = 0; n < t.length; n++) {
                            var o = t[n];
                            if (o[0] === h || o[0] === q) {
                                var i = r + o[1].length;
                                if (e === i) return [n + 1, t];
                                if (e < i) {
                                    t = t.slice();
                                    var l = e - r, a = [o[0], o[1].slice(0, l)], s = [o[0], o[1].slice(l)];
                                    return t.splice(n, 1, a, s), [n + 1, t]
                                }
                                r = i
                            }
                        }
                        throw new Error("cursor_pos is out of bounds!")
                    }

                    function f(t, e) {
                        var r = c(t, e), n = r[1], o = r[0], i = n[o], l = n[o + 1];
                        if (null == i) return t;
                        if (i[0] !== q) return t;
                        if (null != l && i[1] + l[1] === l[1] + i[1]) return n.splice(o, 2, l, i), p(n, o, 2);
                        if (null != l && 0 === l[1].indexOf(i[1])) {
                            n.splice(o, 2, [l[0], i[1]], [0, i[1]]);
                            var a = l[1].slice(i[1].length);
                            return a.length > 0 && n.splice(o + 2, 0, [l[0], a]), p(n, o, 3)
                        }
                        return t
                    }

                    function d(t) {
                        for (var e = !1, r = function (t) {
                            return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343
                        }, n = 2; n < t.length; n += 1) t[n - 2][0] === q && function (t) {
                            return t.charCodeAt(t.length - 1) >= 55296 && t.charCodeAt(t.length - 1) <= 56319
                        }(t[n - 2][1]) && t[n - 1][0] === h && r(t[n - 1][1]) && t[n][0] === b && r(t[n][1]) && (e = !0, t[n - 1][1] = t[n - 2][1].slice(-1) + t[n - 1][1], t[n][1] = t[n - 2][1].slice(-1) + t[n][1], t[n - 2][1] = t[n - 2][1].slice(0, -1));
                        if (!e) return t;
                        for (var o = [], n = 0; n < t.length; n += 1) t[n][1].length > 0 && o.push(t[n]);
                        return o
                    }

                    function p(t, e, r) {
                        for (var n = e + r - 1; n >= 0 && n >= e - 1; n--) if (n + 1 < t.length) {
                            var o = t[n], i = t[n + 1];
                            o[0] === i[1] && t.splice(n, 2, [o[0], o[1] + i[1]])
                        }
                        return t
                    }

                    var h = -1, b = 1, q = 0, y = r;
                    y.INSERT = b, y.DELETE = h, y.EQUAL = q, t.exports = y
                }, function (t, e) {
                    function r(t) {
                        var e = [];
                        for (var r in t) e.push(r);
                        return e
                    }

                    e = t.exports = "function" == typeof Object.keys ? Object.keys : r, e.shim = r
                }, function (t, e) {
                    function r(t) {
                        return "[object Arguments]" == Object.prototype.toString.call(t)
                    }

                    function n(t) {
                        return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
                    }

                    var o = "[object Arguments]" == function () {
                        return Object.prototype.toString.call(arguments)
                    }();
                    e = t.exports = o ? r : n, e.supported = r, e.unsupported = n
                }, function (t, e) {
                    "use strict";

                    function r() {
                    }

                    function n(t, e, r) {
                        this.fn = t, this.context = e, this.once = r || !1
                    }

                    function o() {
                        this._events = new r, this._eventsCount = 0
                    }

                    var i = Object.prototype.hasOwnProperty, l = "~";
                    Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (l = !1)), o.prototype.eventNames = function () {
                        var t, e, r = [];
                        if (0 === this._eventsCount) return r;
                        for (e in t = this._events) i.call(t, e) && r.push(l ? e.slice(1) : e);
                        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
                    }, o.prototype.listeners = function (t, e) {
                        var r = l ? l + t : t, n = this._events[r];
                        if (e) return !!n;
                        if (!n) return [];
                        if (n.fn) return [n.fn];
                        for (var o = 0, i = n.length, a = new Array(i); o < i; o++) a[o] = n[o].fn;
                        return a
                    }, o.prototype.emit = function (t, e, r, n, o, i) {
                        var a = l ? l + t : t;
                        if (!this._events[a]) return !1;
                        var s, u, c = this._events[a], f = arguments.length;
                        if (c.fn) {
                            switch (c.once && this.removeListener(t, c.fn, void 0, !0), f) {
                                case 1:
                                    return c.fn.call(c.context), !0;
                                case 2:
                                    return c.fn.call(c.context, e), !0;
                                case 3:
                                    return c.fn.call(c.context, e, r), !0;
                                case 4:
                                    return c.fn.call(c.context, e, r, n), !0;
                                case 5:
                                    return c.fn.call(c.context, e, r, n, o), !0;
                                case 6:
                                    return c.fn.call(c.context, e, r, n, o, i), !0
                            }
                            for (u = 1, s = new Array(f - 1); u < f; u++) s[u - 1] = arguments[u];
                            c.fn.apply(c.context, s)
                        } else {
                            var d, p = c.length;
                            for (u = 0; u < p; u++) switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), f) {
                                case 1:
                                    c[u].fn.call(c[u].context);
                                    break;
                                case 2:
                                    c[u].fn.call(c[u].context, e);
                                    break;
                                case 3:
                                    c[u].fn.call(c[u].context, e, r);
                                    break;
                                case 4:
                                    c[u].fn.call(c[u].context, e, r, n);
                                    break;
                                default:
                                    if (!s) for (d = 1, s = new Array(f - 1); d < f; d++) s[d - 1] = arguments[d];
                                    c[u].fn.apply(c[u].context, s)
                            }
                        }
                        return !0
                    }, o.prototype.on = function (t, e, r) {
                        var o = new n(e, r || this), i = l ? l + t : t;
                        return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(o) : (this._events[i] = o, this._eventsCount++), this
                    }, o.prototype.once = function (t, e, r) {
                        var o = new n(e, r || this, !0), i = l ? l + t : t;
                        return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(o) : (this._events[i] = o, this._eventsCount++), this
                    }, o.prototype.removeListener = function (t, e, n, o) {
                        var i = l ? l + t : t;
                        if (!this._events[i]) return this;
                        if (!e) return 0 == --this._eventsCount ? this._events = new r : delete this._events[i], this;
                        var a = this._events[i];
                        if (a.fn) a.fn !== e || o && !a.once || n && a.context !== n || (0 == --this._eventsCount ? this._events = new r : delete this._events[i]); else {
                            for (var s = 0, u = [], c = a.length; s < c; s++) (a[s].fn !== e || o && !a[s].once || n && a[s].context !== n) && u.push(a[s]);
                            u.length ? this._events[i] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new r : delete this._events[i]
                        }
                        return this
                    }, o.prototype.removeAllListeners = function (t) {
                        var e;
                        return t ? (e = l ? l + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new r : delete this._events[e])) : (this._events = new r, this._eventsCount = 0), this
                    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function () {
                        return this
                    }, o.prefixed = l, o.EventEmitter = o, void 0 !== t && (t.exports = o)
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e, r) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r, t
                    }

                    function i(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function a(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function s(t, e, r) {
                        return "object" === (void 0 === e ? "undefined" : _(e)) ? Object.keys(e).reduce(function (t, r) {
                            return s(t, r, e[r])
                        }, t) : t.reduce(function (t, n) {
                            return n.attributes && n.attributes[e] ? t.push(n) : t.insert(n.insert, (0, A.default)({}, o({}, e, r), n.attributes))
                        }, new j.default)
                    }

                    function u(t) {
                        if (t.nodeType !== Node.ELEMENT_NODE) return {};
                        return t["__ql-computed-style"] || (t["__ql-computed-style"] = window.getComputedStyle(t))
                    }

                    function c(t, e) {
                        for (var r = "", n = t.ops.length - 1; n >= 0 && r.length < e.length; --n) {
                            var o = t.ops[n];
                            if ("string" != typeof o.insert) break;
                            r = o.insert + r
                        }
                        return r.slice(-1 * e.length) === e
                    }

                    function f(t) {
                        return 0 !== t.childNodes.length && ["block", "list-item"].indexOf(u(t).display) > -1
                    }

                    function d(t, e, r) {
                        return t.nodeType === t.TEXT_NODE ? r.reduce(function (e, r) {
                            return r(t, e)
                        }, new j.default) : t.nodeType === t.ELEMENT_NODE ? [].reduce.call(t.childNodes || [], function (n, o) {
                            var i = d(o, e, r);
                            return o.nodeType === t.ELEMENT_NODE && (i = e.reduce(function (t, e) {
                                return e(o, t)
                            }, i), i = (o[Z] || []).reduce(function (t, e) {
                                return e(o, t)
                            }, i)), n.concat(i)
                        }, new j.default) : new j.default
                    }

                    function p(t, e, r) {
                        return s(r, t, !0)
                    }

                    function h(t, e) {
                        var r = P.default.Attributor.Attribute.keys(t), n = P.default.Attributor.Class.keys(t),
                            o = P.default.Attributor.Style.keys(t), i = {};
                        return r.concat(n).concat(o).forEach(function (e) {
                            var r = P.default.query(e, P.default.Scope.ATTRIBUTE);
                            null != r && (i[r.attrName] = r.value(t), i[r.attrName]) || (r = G[e], null == r || r.attrName !== e && r.keyName !== e || (i[r.attrName] = r.value(t) || void 0), null == (r = $[e]) || r.attrName !== e && r.keyName !== e || (r = $[e], i[r.attrName] = r.value(t) || void 0))
                        }), Object.keys(i).length > 0 && (e = s(e, i)), e
                    }

                    function b(t, e) {
                        var r = P.default.query(t);
                        if (null == r) return e;
                        if (r.prototype instanceof P.default.Embed) {
                            var n = {}, o = r.value(t);
                            null != o && (n[r.blotName] = o, e = (new j.default).insert(n, r.formats(t)))
                        } else "function" == typeof r.formats && (e = s(e, r.blotName, r.formats(t)));
                        return e
                    }

                    function q(t, e) {
                        return c(e, "\n") || e.insert("\n"), e
                    }

                    function y() {
                        return new j.default
                    }

                    function g(t, e) {
                        var r = P.default.query(t);
                        if (null == r || "list-item" !== r.blotName || !c(e, "\n")) return e;
                        for (var n = -1, o = t.parentNode; !o.classList.contains("ql-clipboard");) "list" === (P.default.query(o) || {}).blotName && (n += 1), o = o.parentNode;
                        return n <= 0 ? e : e.compose((new j.default).retain(e.length() - 1).retain(1, {indent: n}))
                    }

                    function v(t, e) {
                        return c(e, "\n") || (f(t) || e.length() > 0 && t.nextSibling && f(t.nextSibling)) && e.insert("\n"), e
                    }

                    function m(t, e) {
                        if (f(t) && null != t.nextElementSibling && !c(e, "\n\n")) {
                            var r = t.offsetHeight + parseFloat(u(t).marginTop) + parseFloat(u(t).marginBottom);
                            t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * r && e.insert("\n")
                        }
                        return e
                    }

                    function k(t, e) {
                        var r = {}, n = t.style || {};
                        return n.fontStyle && "italic" === u(t).fontStyle && (r.italic = !0), n.fontWeight && (u(t).fontWeight.startsWith("bold") || parseInt(u(t).fontWeight) >= 700) && (r.bold = !0), Object.keys(r).length > 0 && (e = s(e, r)), parseFloat(n.textIndent || 0) > 0 && (e = (new j.default).insert("\t").concat(e)), e
                    }

                    function w(t, e) {
                        var r = t.data;
                        if ("O:P" === t.parentNode.tagName) return e.insert(r.trim());
                        if (0 === r.trim().length && t.parentNode.classList.contains("ql-clipboard")) return e;
                        if (!u(t.parentNode).whiteSpace.startsWith("pre")) {
                            var n = function (t, e) {
                                return e = e.replace(/[^\u00a0]/g, ""), e.length < 1 && t ? " " : e
                            };
                            r = r.replace(/\r\n/g, " ").replace(/\n/g, " "), r = r.replace(/\s\s+/g, n.bind(n, !0)), (null == t.previousSibling && f(t.parentNode) || null != t.previousSibling && f(t.previousSibling)) && (r = r.replace(/^\s+/, n.bind(n, !1))), (null == t.nextSibling && f(t.parentNode) || null != t.nextSibling && f(t.nextSibling)) && (r = r.replace(/\s+$/, n.bind(n, !1)))
                        }
                        return e.insert(r)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0;
                    var _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, x = function () {
                            function t(t, e) {
                                var r = [], n = !0, o = !1, i = void 0;
                                try {
                                    for (var l, a = t[Symbol.iterator](); !(n = (l = a.next()).done) && (r.push(l.value), !e || r.length !== e); n = !0) ;
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        !n && a.return && a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return r
                            }

                            return function (e, r) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e)) return t(e, r);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(), O = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), E = r(3), A = n(E), N = r(2), j = n(N), T = r(0), P = n(T), S = r(5), C = n(S), L = r(10),
                        R = n(L), M = r(9), I = n(M), B = r(36), D = r(37), z = r(13), U = n(z), F = r(26), H = r(38),
                        K = r(39), Y = r(40), V = (0, R.default)("quill:clipboard"), Z = "__ql-matcher",
                        W = [[Node.TEXT_NODE, w], [Node.TEXT_NODE, v], ["br", q], [Node.ELEMENT_NODE, v], [Node.ELEMENT_NODE, b], [Node.ELEMENT_NODE, m], [Node.ELEMENT_NODE, h], [Node.ELEMENT_NODE, k], ["li", g], ["b", p.bind(p, "bold")], ["i", p.bind(p, "italic")], ["style", y]],
                        G = [B.AlignAttribute, H.DirectionAttribute].reduce(function (t, e) {
                            return t[e.keyName] = e, t
                        }, {}),
                        $ = [B.AlignStyle, D.BackgroundStyle, F.ColorStyle, H.DirectionStyle, K.FontStyle, Y.SizeStyle].reduce(function (t, e) {
                            return t[e.keyName] = e, t
                        }, {}), X = function (t) {
                            function e(t, r) {
                                i(this, e);
                                var n = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r));
                                return n.quill.root.addEventListener("paste", n.onPaste.bind(n)), n.container = n.quill.addContainer("ql-clipboard"), n.container.setAttribute("contenteditable", !0), n.container.setAttribute("tabindex", -1), n.matchers = [], W.concat(n.options.matchers).forEach(function (t) {
                                    var e = x(t, 2), o = e[0], i = e[1];
                                    (r.matchVisual || i !== m) && n.addMatcher(o, i)
                                }), n
                            }

                            return a(e, t), O(e, [{
                                key: "addMatcher", value: function (t, e) {
                                    this.matchers.push([t, e])
                                }
                            }, {
                                key: "convert", value: function (t) {
                                    if ("string" == typeof t) return this.container.innerHTML = t.replace(/\>\r?\n +\</g, "><"), this.convert();
                                    var e = this.quill.getFormat(this.quill.selection.savedRange.index);
                                    if (e[U.default.blotName]) {
                                        var r = this.container.innerText;
                                        return this.container.innerHTML = "", (new j.default).insert(r, o({}, U.default.blotName, e[U.default.blotName]))
                                    }
                                    var n = this.prepareMatching(), i = x(n, 2), l = i[0], a = i[1],
                                        s = d(this.container, l, a);
                                    return c(s, "\n") && null == s.ops[s.ops.length - 1].attributes && (s = s.compose((new j.default).retain(s.length() - 1).delete(1))), V.log("convert", this.container.innerHTML, s), this.container.innerHTML = "", s
                                }
                            }, {
                                key: "dangerouslyPasteHTML", value: function (t, e) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.default.sources.API;
                                    if ("string" == typeof t) this.quill.setContents(this.convert(t), e), this.quill.setSelection(0, C.default.sources.SILENT); else {
                                        var n = this.convert(e);
                                        this.quill.updateContents((new j.default).retain(t).concat(n), r), this.quill.setSelection(t + n.length(), C.default.sources.SILENT)
                                    }
                                }
                            }, {
                                key: "onPaste", value: function (t) {
                                    var e = this;
                                    if (!t.defaultPrevented && this.quill.isEnabled()) {
                                        var r = this.quill.getSelection(), n = (new j.default).retain(r.index),
                                            o = this.quill.scrollingContainer.scrollTop;
                                        this.container.focus(), this.quill.selection.update(C.default.sources.SILENT), setTimeout(function () {
                                            n = n.concat(e.convert()).delete(r.length), e.quill.updateContents(n, C.default.sources.USER), e.quill.setSelection(n.length() - r.length, C.default.sources.SILENT), e.quill.scrollingContainer.scrollTop = o, e.quill.focus()
                                        }, 1)
                                    }
                                }
                            }, {
                                key: "prepareMatching", value: function () {
                                    var t = this, e = [], r = [];
                                    return this.matchers.forEach(function (n) {
                                        var o = x(n, 2), i = o[0], l = o[1];
                                        switch (i) {
                                            case Node.TEXT_NODE:
                                                r.push(l);
                                                break;
                                            case Node.ELEMENT_NODE:
                                                e.push(l);
                                                break;
                                            default:
                                                [].forEach.call(t.container.querySelectorAll(i), function (t) {
                                                    t[Z] = t[Z] || [], t[Z].push(l)
                                                })
                                        }
                                    }), [e, r]
                                }
                            }]), e
                        }(I.default);
                    X.DEFAULTS = {
                        matchers: [],
                        matchVisual: !0
                    }, e.default = X, e.matchAttributor = h, e.matchBlot = b, e.matchNewline = v, e.matchSpacing = m, e.matchText = w
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), a = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, s = r(6), u = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(s), c = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), l(e, [{
                            key: "optimize", value: function (t) {
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName)
                            }
                        }], [{
                            key: "create", value: function () {
                                return a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this)
                            }
                        }, {
                            key: "formats", value: function () {
                                return !0
                            }
                        }]), e
                    }(u.default);
                    c.blotName = "bold", c.tagName = ["STRONG", "B"], e.default = c
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e, r) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r, t
                    }

                    function i(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function a(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function s(t, e, r) {
                        var n = document.createElement("button");
                        n.setAttribute("type", "button"), n.classList.add("ql-" + e), null != r && (n.value = r), t.appendChild(n)
                    }

                    function u(t, e) {
                        Array.isArray(e[0]) || (e = [e]), e.forEach(function (e) {
                            var r = document.createElement("span");
                            r.classList.add("ql-formats"), e.forEach(function (t) {
                                if ("string" == typeof t) s(r, t); else {
                                    var e = Object.keys(t)[0], n = t[e];
                                    Array.isArray(n) ? c(r, e, n) : s(r, e, n)
                                }
                            }), t.appendChild(r)
                        })
                    }

                    function c(t, e, r) {
                        var n = document.createElement("select");
                        n.classList.add("ql-" + e), r.forEach(function (t) {
                            var e = document.createElement("option");
                            !1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"), n.appendChild(e)
                        }), t.appendChild(n)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.addControls = e.default = void 0;
                    var f = function () {
                            function t(t, e) {
                                var r = [], n = !0, o = !1, i = void 0;
                                try {
                                    for (var l, a = t[Symbol.iterator](); !(n = (l = a.next()).done) && (r.push(l.value), !e || r.length !== e); n = !0) ;
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        !n && a.return && a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return r
                            }

                            return function (e, r) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e)) return t(e, r);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(), d = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), p = r(2), h = n(p), b = r(0), q = n(b), y = r(5), g = n(y), v = r(10), m = n(v), k = r(9),
                        w = n(k), _ = (0, m.default)("quill:toolbar"), x = function (t) {
                            function e(t, r) {
                                i(this, e);
                                var n = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r));
                                if (Array.isArray(n.options.container)) {
                                    var o = document.createElement("div");
                                    u(o, n.options.container), t.container.parentNode.insertBefore(o, t.container), n.container = o
                                } else "string" == typeof n.options.container ? n.container = document.querySelector(n.options.container) : n.container = n.options.container;
                                if (!(n.container instanceof HTMLElement)) {
                                    var a;
                                    return a = _.error("Container required for toolbar", n.options), l(n, a)
                                }
                                return n.container.classList.add("ql-toolbar"), n.controls = [], n.handlers = {}, Object.keys(n.options.handlers).forEach(function (t) {
                                    n.addHandler(t, n.options.handlers[t])
                                }), [].forEach.call(n.container.querySelectorAll("button, select"), function (t) {
                                    n.attach(t)
                                }), n.quill.on(g.default.events.EDITOR_CHANGE, function (t, e) {
                                    t === g.default.events.SELECTION_CHANGE && n.update(e)
                                }), n.quill.on(g.default.events.SCROLL_OPTIMIZE, function () {
                                    var t = n.quill.selection.getRange(), e = f(t, 1), r = e[0];
                                    n.update(r)
                                }), n
                            }

                            return a(e, t), d(e, [{
                                key: "addHandler", value: function (t, e) {
                                    this.handlers[t] = e
                                }
                            }, {
                                key: "attach", value: function (t) {
                                    var e = this, r = [].find.call(t.classList, function (t) {
                                        return 0 === t.indexOf("ql-")
                                    });
                                    if (r) {
                                        if (r = r.slice("ql-".length), "BUTTON" === t.tagName && t.setAttribute("type", "button"), null == this.handlers[r]) {
                                            if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[r]) return void _.warn("ignoring attaching to disabled format", r, t);
                                            if (null == q.default.query(r)) return void _.warn("ignoring attaching to nonexistent format", r, t)
                                        }
                                        var n = "SELECT" === t.tagName ? "change" : "click";
                                        t.addEventListener(n, function (n) {
                                            var i = void 0;
                                            if ("SELECT" === t.tagName) {
                                                if (t.selectedIndex < 0) return;
                                                var l = t.options[t.selectedIndex];
                                                i = !l.hasAttribute("selected") && (l.value || !1)
                                            } else i = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value")), n.preventDefault();
                                            e.quill.focus();
                                            var a = e.quill.selection.getRange(), s = f(a, 1), u = s[0];
                                            if (null != e.handlers[r]) e.handlers[r].call(e, i); else if (q.default.query(r).prototype instanceof q.default.Embed) {
                                                if (!(i = prompt("Enter " + r))) return;
                                                e.quill.updateContents((new h.default).retain(u.index).delete(u.length).insert(o({}, r, i)), g.default.sources.USER)
                                            } else e.quill.format(r, i, g.default.sources.USER);
                                            e.update(u)
                                        }), this.controls.push([r, t])
                                    }
                                }
                            }, {
                                key: "update", value: function (t) {
                                    var e = null == t ? {} : this.quill.getFormat(t);
                                    this.controls.forEach(function (r) {
                                        var n = f(r, 2), o = n[0], i = n[1];
                                        if ("SELECT" === i.tagName) {
                                            var l = void 0;
                                            if (null == t) l = null; else if (null == e[o]) l = i.querySelector("option[selected]"); else if (!Array.isArray(e[o])) {
                                                var a = e[o];
                                                "string" == typeof a && (a = a.replace(/\"/g, '\\"')), l = i.querySelector('option[value="' + a + '"]')
                                            }
                                            null == l ? (i.value = "", i.selectedIndex = -1) : l.selected = !0
                                        } else if (null == t) i.classList.remove("ql-active"); else if (i.hasAttribute("value")) {
                                            var s = e[o] === i.getAttribute("value") || null != e[o] && e[o].toString() === i.getAttribute("value") || null == e[o] && !i.getAttribute("value");
                                            i.classList.toggle("ql-active", s)
                                        } else i.classList.toggle("ql-active", null != e[o])
                                    })
                                }
                            }]), e
                        }(w.default);
                    x.DEFAULTS = {}, x.DEFAULTS = {
                        container: null, handlers: {
                            clean: function () {
                                var t = this, e = this.quill.getSelection();
                                if (null != e) if (0 == e.length) {
                                    var r = this.quill.getFormat();
                                    Object.keys(r).forEach(function (e) {
                                        null != q.default.query(e, q.default.Scope.INLINE) && t.quill.format(e, !1)
                                    })
                                } else this.quill.removeFormat(e, g.default.sources.USER)
                            }, direction: function (t) {
                                var e = this.quill.getFormat().align;
                                "rtl" === t && null == e ? this.quill.format("align", "right", g.default.sources.USER) : t || "right" !== e || this.quill.format("align", !1, g.default.sources.USER), this.quill.format("direction", t, g.default.sources.USER)
                            }, indent: function (t) {
                                var e = this.quill.getSelection(), r = this.quill.getFormat(e),
                                    n = parseInt(r.indent || 0);
                                if ("+1" === t || "-1" === t) {
                                    var o = "+1" === t ? 1 : -1;
                                    "rtl" === r.direction && (o *= -1), this.quill.format("indent", n + o, g.default.sources.USER)
                                }
                            }, link: function (t) {
                                !0 === t && (t = prompt("Enter link URL:")), this.quill.format("link", t, g.default.sources.USER)
                            }, list: function (t) {
                                var e = this.quill.getSelection(), r = this.quill.getFormat(e);
                                "check" === t ? "checked" === r.list || "unchecked" === r.list ? this.quill.format("list", !1, g.default.sources.USER) : this.quill.format("list", "unchecked", g.default.sources.USER) : this.quill.format("list", t, g.default.sources.USER)
                            }
                        }
                    }, e.default = x, e.addControls = u
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), a = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, s = r(28), u = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(s), c = function (t) {
                        function e(t, r) {
                            n(this, e);
                            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                            return i.label.innerHTML = r, i.container.classList.add("ql-color-picker"), [].slice.call(i.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function (t) {
                                t.classList.add("ql-primary")
                            }), i
                        }

                        return i(e, t), l(e, [{
                            key: "buildItem", value: function (t) {
                                var r = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "buildItem", this).call(this, t);
                                return r.style.backgroundColor = t.getAttribute("value") || "", r
                            }
                        }, {
                            key: "selectItem", value: function (t, r) {
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, r);
                                var n = this.label.querySelector(".ql-color-label"),
                                    o = t ? t.getAttribute("data-value") || "" : "";
                                n && ("line" === n.tagName ? n.style.stroke = o : n.style.fill = o)
                            }
                        }]), e
                    }(u.default);
                    e.default = c
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), a = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, s = r(28), u = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(s), c = function (t) {
                        function e(t, r) {
                            n(this, e);
                            var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                            return i.container.classList.add("ql-icon-picker"), [].forEach.call(i.container.querySelectorAll(".ql-picker-item"), function (t) {
                                t.innerHTML = r[t.getAttribute("data-value") || ""]
                            }), i.defaultItem = i.container.querySelector(".ql-selected"), i.selectItem(i.defaultItem), i
                        }

                        return i(e, t), l(e, [{
                            key: "selectItem", value: function (t, r) {
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, r), t = t || this.defaultItem, this.label.innerHTML = t.innerHTML
                            }
                        }]), e
                    }(u.default);
                    e.default = c
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), i = function () {
                        function t(e, r) {
                            var o = this;
                            n(this, t), this.quill = e, this.boundsContainer = r || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function () {
                                o.root.style.marginTop = -1 * o.quill.root.scrollTop + "px"
                            }), this.hide()
                        }

                        return o(t, [{
                            key: "hide", value: function () {
                                this.root.classList.add("ql-hidden")
                            }
                        }, {
                            key: "position", value: function (t) {
                                var e = t.left + t.width / 2 - this.root.offsetWidth / 2,
                                    r = t.bottom + this.quill.root.scrollTop;
                                this.root.style.left = e + "px", this.root.style.top = r + "px", this.root.classList.remove("ql-flip");
                                var n = this.boundsContainer.getBoundingClientRect(),
                                    o = this.root.getBoundingClientRect(), i = 0;
                                if (o.right > n.right && (i = n.right - o.right, this.root.style.left = e + i + "px"), o.left < n.left && (i = n.left - o.left, this.root.style.left = e + i + "px"), o.bottom > n.bottom) {
                                    var l = o.bottom - o.top, a = t.bottom - t.top + l;
                                    this.root.style.top = r - a + "px", this.root.classList.add("ql-flip")
                                }
                                return i
                            }
                        }, {
                            key: "show", value: function () {
                                this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden")
                            }
                        }]), t
                    }();
                    e.default = i
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var a = function () {
                            function t(t, e) {
                                var r = [], n = !0, o = !1, i = void 0;
                                try {
                                    for (var l, a = t[Symbol.iterator](); !(n = (l = a.next()).done) && (r.push(l.value), !e || r.length !== e); n = !0) ;
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        !n && a.return && a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return r
                            }

                            return function (e, r) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e)) return t(e, r);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(), s = function t(e, r, n) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, r);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, r, n)
                            }
                            if ("value" in o) return o.value;
                            var l = o.get;
                            if (void 0 !== l) return l.call(n)
                        }, u = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), c = r(3), f = n(c), d = r(8), p = n(d), h = r(43), b = n(h), q = r(27), y = n(q), g = r(15),
                        v = r(41), m = n(v),
                        k = [[{header: ["1", "2", "3", !1]}], ["bold", "italic", "underline", "link"], [{list: "ordered"}, {list: "bullet"}], ["clean"]],
                        w = function (t) {
                            function e(t, r) {
                                o(this, e), null != r.modules.toolbar && null == r.modules.toolbar.container && (r.modules.toolbar.container = k);
                                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r));
                                return n.quill.container.classList.add("ql-snow"), n
                            }

                            return l(e, t), u(e, [{
                                key: "extendToolbar", value: function (t) {
                                    t.container.classList.add("ql-snow"), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), m.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), m.default), this.tooltip = new _(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
                                        key: "K",
                                        shortKey: !0
                                    }, function (e, r) {
                                        t.handlers.link.call(t, !r.format.link)
                                    })
                                }
                            }]), e
                        }(b.default);
                    w.DEFAULTS = (0, f.default)(!0, {}, b.default.DEFAULTS, {
                        modules: {
                            toolbar: {
                                handlers: {
                                    link: function (t) {
                                        if (t) {
                                            var e = this.quill.getSelection();
                                            if (null == e || 0 == e.length) return;
                                            var r = this.quill.getText(e);
                                            /^\S+@\S+\.\S+$/.test(r) && 0 !== r.indexOf("mailto:") && (r = "mailto:" + r);
                                            this.quill.theme.tooltip.edit("link", r)
                                        } else this.quill.format("link", !1)
                                    }
                                }
                            }
                        }
                    });
                    var _ = function (t) {
                        function e(t, r) {
                            o(this, e);
                            var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r));
                            return n.preview = n.root.querySelector("a.ql-preview"), n
                        }

                        return l(e, t), u(e, [{
                            key: "listen", value: function () {
                                var t = this;
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function (e) {
                                    t.root.classList.contains("ql-editing") ? t.save() : t.edit("link", t.preview.textContent), e.preventDefault()
                                }), this.root.querySelector("a.ql-remove").addEventListener("click", function (e) {
                                    if (null != t.linkRange) {
                                        var r = t.linkRange;
                                        t.restoreFocus(), t.quill.formatText(r, "link", !1, p.default.sources.USER), delete t.linkRange
                                    }
                                    e.preventDefault(), t.hide()
                                }), this.quill.on(p.default.events.SELECTION_CHANGE, function (e, r, n) {
                                    if (null != e) {
                                        if (0 === e.length && n === p.default.sources.USER) {
                                            var o = t.quill.scroll.descendant(y.default, e.index), i = a(o, 2),
                                                l = i[0], s = i[1];
                                            if (null != l) {
                                                t.linkRange = new g.Range(e.index - s, l.length());
                                                var u = y.default.formats(l.domNode);
                                                return t.preview.textContent = u, t.preview.setAttribute("href", u), t.show(), void t.position(t.quill.getBounds(t.linkRange))
                                            }
                                        } else delete t.linkRange;
                                        t.hide()
                                    }
                                })
                            }
                        }, {
                            key: "show", value: function () {
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this), this.root.removeAttribute("data-mode")
                            }
                        }]), e
                    }(h.BaseTooltip);
                    _.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), e.default = w
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var o = r(29), i = n(o), l = r(36), a = r(38), s = r(64), u = r(65), c = n(u), f = r(66), d = n(f),
                        p = r(67), h = n(p), b = r(37), q = r(26), y = r(39), g = r(40), v = r(56), m = n(v), k = r(68),
                        w = n(k), _ = r(27), x = n(_), O = r(69), E = n(O), A = r(70), N = n(A), j = r(71), T = n(j),
                        P = r(72), S = n(P), C = r(73), L = n(C), R = r(13), M = n(R), I = r(74), B = n(I), D = r(75),
                        z = n(D), U = r(57), F = n(U), H = r(41), K = n(H), Y = r(28), V = n(Y), Z = r(59), W = n(Z),
                        G = r(60), $ = n(G), X = r(61), Q = n(X), J = r(108), tt = n(J), et = r(62), rt = n(et);
                    i.default.register({
                        "attributors/attribute/direction": a.DirectionAttribute,
                        "attributors/class/align": l.AlignClass,
                        "attributors/class/background": b.BackgroundClass,
                        "attributors/class/color": q.ColorClass,
                        "attributors/class/direction": a.DirectionClass,
                        "attributors/class/font": y.FontClass,
                        "attributors/class/size": g.SizeClass,
                        "attributors/style/align": l.AlignStyle,
                        "attributors/style/background": b.BackgroundStyle,
                        "attributors/style/color": q.ColorStyle,
                        "attributors/style/direction": a.DirectionStyle,
                        "attributors/style/font": y.FontStyle,
                        "attributors/style/size": g.SizeStyle
                    }, !0), i.default.register({
                        "formats/align": l.AlignClass,
                        "formats/direction": a.DirectionClass,
                        "formats/indent": s.IndentClass,
                        "formats/background": b.BackgroundStyle,
                        "formats/color": q.ColorStyle,
                        "formats/font": y.FontClass,
                        "formats/size": g.SizeClass,
                        "formats/blockquote": c.default,
                        "formats/code-block": M.default,
                        "formats/header": d.default,
                        "formats/list": h.default,
                        "formats/bold": m.default,
                        "formats/code": R.Code,
                        "formats/italic": w.default,
                        "formats/link": x.default,
                        "formats/script": E.default,
                        "formats/strike": N.default,
                        "formats/underline": T.default,
                        "formats/image": S.default,
                        "formats/video": L.default,
                        "formats/list/item": p.ListItem,
                        "modules/formula": B.default,
                        "modules/syntax": z.default,
                        "modules/toolbar": F.default,
                        "themes/bubble": tt.default,
                        "themes/snow": rt.default,
                        "ui/icons": K.default,
                        "ui/picker": V.default,
                        "ui/icon-picker": $.default,
                        "ui/color-picker": W.default,
                        "ui/tooltip": Q.default
                    }, !0), e.default = i.default
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.IndentClass = void 0;
                    var l = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), a = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, s = r(0), u = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(s), c = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), l(e, [{
                            key: "add", value: function (t, r) {
                                if ("+1" === r || "-1" === r) {
                                    var n = this.value(t) || 0;
                                    r = "+1" === r ? n + 1 : n - 1
                                }
                                return 0 === r ? (this.remove(t), !0) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t, r)
                            }
                        }, {
                            key: "canAdd", value: function (t, r) {
                                return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, r) || a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, parseInt(r))
                            }
                        }, {
                            key: "value", value: function (t) {
                                return parseInt(a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t)) || void 0
                            }
                        }]), e
                    }(u.default.Attributor.Class), f = new c("indent", "ql-indent", {
                        scope: u.default.Scope.BLOCK,
                        whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
                    });
                    e.IndentClass = f
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = r(4), a = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(l), s = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), e
                    }(a.default);
                    s.blotName = "blockquote", s.tagName = "blockquote", e.default = s
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), a = r(4), s = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(a), u = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), l(e, null, [{
                            key: "formats", value: function (t) {
                                return this.tagName.indexOf(t.tagName) + 1
                            }
                        }]), e
                    }(s.default);
                    u.blotName = "header", u.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], e.default = u
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e, r) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r, t
                    }

                    function i(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function a(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.default = e.ListItem = void 0;
                    var s = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), u = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, c = r(0), f = n(c), d = r(4), p = n(d), h = r(25), b = n(h), q = function (t) {
                        function e() {
                            return i(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return a(e, t), s(e, [{
                            key: "format", value: function (t, r) {
                                t !== y.blotName || r ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, r) : this.replaceWith(f.default.create(this.statics.scope))
                            }
                        }, {
                            key: "remove", value: function () {
                                null == this.prev && null == this.next ? this.parent.remove() : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this)
                            }
                        }, {
                            key: "replaceWith", value: function (t, r) {
                                return this.parent.isolate(this.offset(this.parent), this.length()), t === this.parent.statics.blotName ? (this.parent.replaceWith(t, r), this) : (this.parent.unwrap(), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t, r))
                            }
                        }], [{
                            key: "formats", value: function (t) {
                                return t.tagName === this.tagName ? void 0 : u(e.__proto__ || Object.getPrototypeOf(e), "formats", this).call(this, t)
                            }
                        }]), e
                    }(p.default);
                    q.blotName = "list-item", q.tagName = "LI";
                    var y = function (t) {
                        function e(t) {
                            i(this, e);
                            var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)), n = function (e) {
                                if (e.target.parentNode === t) {
                                    var n = r.statics.formats(t), o = f.default.find(e.target);
                                    "checked" === n ? o.format("list", "unchecked") : "unchecked" === n && o.format("list", "checked")
                                }
                            };
                            return t.addEventListener("touchstart", n), t.addEventListener("mousedown", n), r
                        }

                        return a(e, t), s(e, null, [{
                            key: "create", value: function (t) {
                                var r = "ordered" === t ? "OL" : "UL",
                                    n = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, r);
                                return "checked" !== t && "unchecked" !== t || n.setAttribute("data-checked", "checked" === t), n
                            }
                        }, {
                            key: "formats", value: function (t) {
                                return "OL" === t.tagName ? "ordered" : "UL" === t.tagName ? t.hasAttribute("data-checked") ? "true" === t.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0
                            }
                        }]), s(e, [{
                            key: "format", value: function (t, e) {
                                this.children.length > 0 && this.children.tail.format(t, e)
                            }
                        }, {
                            key: "formats", value: function () {
                                return o({}, this.statics.blotName, this.statics.formats(this.domNode))
                            }
                        }, {
                            key: "insertBefore", value: function (t, r) {
                                if (t instanceof q) u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, r); else {
                                    var n = null == r ? this.length() : r.offset(this), o = this.split(n);
                                    o.parent.insertBefore(t, o)
                                }
                            }
                        }, {
                            key: "optimize", value: function (t) {
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
                                var r = this.next;
                                null != r && r.prev === this && r.statics.blotName === this.statics.blotName && r.domNode.tagName === this.domNode.tagName && r.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (r.moveChildren(this), r.remove())
                            }
                        }, {
                            key: "replace", value: function (t) {
                                if (t.statics.blotName !== this.statics.blotName) {
                                    var r = f.default.create(this.statics.defaultChild);
                                    t.moveChildren(r), this.appendChild(r)
                                }
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t)
                            }
                        }]), e
                    }(b.default);
                    y.blotName = "list", y.scope = f.default.Scope.BLOCK_BLOT, y.tagName = ["OL", "UL"], y.defaultChild = "list-item", y.allowedChildren = [q], e.ListItem = q, e.default = y
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = r(56), a = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(l), s = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), e
                    }(a.default);
                    s.blotName = "italic", s.tagName = ["EM", "I"], e.default = s
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), a = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, s = r(6), u = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(s), c = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), l(e, null, [{
                            key: "create", value: function (t) {
                                return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") : a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t)
                            }
                        }, {
                            key: "formats", value: function (t) {
                                return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0
                            }
                        }]), e
                    }(u.default);
                    c.blotName = "script", c.tagName = ["SUB", "SUP"], e.default = c
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = r(6), a = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(l), s = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), e
                    }(a.default);
                    s.blotName = "strike", s.tagName = "S", e.default = s
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = r(6), a = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(l), s = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), e
                    }(a.default);
                    s.blotName = "underline", s.tagName = "U", e.default = s
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), a = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, s = r(0), u = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(s), c = r(27), f = ["alt", "height", "width"], d = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), l(e, [{
                            key: "format", value: function (t, r) {
                                f.indexOf(t) > -1 ? r ? this.domNode.setAttribute(t, r) : this.domNode.removeAttribute(t) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, r)
                            }
                        }], [{
                            key: "create", value: function (t) {
                                var r = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                return "string" == typeof t && r.setAttribute("src", this.sanitize(t)), r
                            }
                        }, {
                            key: "formats", value: function (t) {
                                return f.reduce(function (e, r) {
                                    return t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e
                                }, {})
                            }
                        }, {
                            key: "match", value: function (t) {
                                return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
                            }
                        }, {
                            key: "sanitize", value: function (t) {
                                return (0, c.sanitize)(t, ["http", "https", "data"]) ? t : "//:0"
                            }
                        }, {
                            key: "value", value: function (t) {
                                return t.getAttribute("src")
                            }
                        }]), e
                    }(u.default.Embed);
                    d.blotName = "image", d.tagName = "IMG", e.default = d
                }, function (t, e, r) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0});
                    var l = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), a = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, s = r(4), u = r(27), c = function (t) {
                        return t && t.__esModule ? t : {default: t}
                    }(u), f = ["height", "width"], d = function (t) {
                        function e() {
                            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return i(e, t), l(e, [{
                            key: "format", value: function (t, r) {
                                f.indexOf(t) > -1 ? r ? this.domNode.setAttribute(t, r) : this.domNode.removeAttribute(t) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, r)
                            }
                        }], [{
                            key: "create", value: function (t) {
                                var r = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                return r.setAttribute("frameborder", "0"), r.setAttribute("allowfullscreen", !0), r.setAttribute("src", this.sanitize(t)), r
                            }
                        }, {
                            key: "formats", value: function (t) {
                                return f.reduce(function (e, r) {
                                    return t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e
                                }, {})
                            }
                        }, {
                            key: "sanitize", value: function (t) {
                                return c.default.sanitize(t)
                            }
                        }, {
                            key: "value", value: function (t) {
                                return t.getAttribute("src")
                            }
                        }]), e
                    }(s.BlockEmbed);
                    d.blotName = "video", d.className = "ql-video", d.tagName = "IFRAME", e.default = d
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.default = e.FormulaBlot = void 0;
                    var a = function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e
                        }
                    }(), s = function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n)
                        }
                        if ("value" in o) return o.value;
                        var l = o.get;
                        if (void 0 !== l) return l.call(n)
                    }, u = r(35), c = n(u), f = r(5), d = n(f), p = r(9), h = n(p), b = function (t) {
                        function e() {
                            return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }

                        return l(e, t), a(e, null, [{
                            key: "create", value: function (t) {
                                var r = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                return "string" == typeof t && (window.katex.render(t, r, {
                                    throwOnError: !1,
                                    errorColor: "#f00"
                                }), r.setAttribute("data-value", t)), r
                            }
                        }, {
                            key: "value", value: function (t) {
                                return t.getAttribute("data-value")
                            }
                        }]), e
                    }(c.default);
                    b.blotName = "formula", b.className = "ql-formula", b.tagName = "SPAN";
                    var q = function (t) {
                        function e() {
                            o(this, e);
                            var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            if (null == window.katex) throw new Error("Formula module requires KaTeX.");
                            return t
                        }

                        return l(e, t), a(e, null, [{
                            key: "register", value: function () {
                                d.default.register(b, !0)
                            }
                        }]), e
                    }(h.default);
                    e.FormulaBlot = b, e.default = q
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.default = e.CodeToken = e.CodeBlock = void 0;
                    var a = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), s = function t(e, r, n) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, r);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, r, n)
                            }
                            if ("value" in o) return o.value;
                            var l = o.get;
                            if (void 0 !== l) return l.call(n)
                        }, u = r(0), c = n(u), f = r(5), d = n(f), p = r(9), h = n(p), b = r(13), q = n(b),
                        y = function (t) {
                            function e() {
                                return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }

                            return l(e, t), a(e, [{
                                key: "replaceWith", value: function (t) {
                                    this.domNode.textContent = this.domNode.textContent, this.attach(), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t)
                                }
                            }, {
                                key: "highlight", value: function (t) {
                                    var e = this.domNode.textContent;
                                    this.cachedText !== e && ((e.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML = t(e), this.domNode.normalize(), this.attach()), this.cachedText = e)
                                }
                            }]), e
                        }(q.default);
                    y.className = "ql-syntax";
                    var g = new c.default.Attributor.Class("token", "hljs", {scope: c.default.Scope.INLINE}),
                        v = function (t) {
                            function e(t, r) {
                                o(this, e);
                                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r));
                                if ("function" != typeof n.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
                                var l = null;
                                return n.quill.on(d.default.events.SCROLL_OPTIMIZE, function () {
                                    clearTimeout(l), l = setTimeout(function () {
                                        n.highlight(), l = null
                                    }, n.options.interval)
                                }), n.highlight(), n
                            }

                            return l(e, t), a(e, null, [{
                                key: "register", value: function () {
                                    d.default.register(g, !0), d.default.register(y, !0)
                                }
                            }]), a(e, [{
                                key: "highlight", value: function () {
                                    var t = this;
                                    if (!this.quill.selection.composing) {
                                        this.quill.update(d.default.sources.USER);
                                        var e = this.quill.getSelection();
                                        this.quill.scroll.descendants(y).forEach(function (e) {
                                            e.highlight(t.options.highlight)
                                        }), this.quill.update(d.default.sources.SILENT), null != e && this.quill.setSelection(e, d.default.sources.SILENT)
                                    }
                                }
                            }]), e
                        }(h.default);
                    v.DEFAULTS = {
                        highlight: function () {
                            return null == window.hljs ? null : function (t) {
                                return window.hljs.highlightAuto(t).value
                            }
                        }(), interval: 1e3
                    }, e.CodeBlock = y, e.CodeToken = g, e.default = v
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'
                }, function (t, e) {
                    t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'
                }, function (t, e) {
                    t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'
                }, function (t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'
                }, function (t, e, r) {
                    "use strict";

                    function n(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    Object.defineProperty(e, "__esModule", {value: !0}), e.default = e.BubbleTooltip = void 0;
                    var a = function t(e, r, n) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, r);
                            if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, r, n)
                            }
                            if ("value" in o) return o.value;
                            var l = o.get;
                            if (void 0 !== l) return l.call(n)
                        }, s = function () {
                            function t(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            return function (e, r, n) {
                                return r && t(e.prototype, r), n && t(e, n), e
                            }
                        }(), u = r(3), c = n(u), f = r(8), d = n(f), p = r(43), h = n(p), b = r(15), q = r(41), y = n(q),
                        g = [["bold", "italic", "link"], [{header: 1}, {header: 2}, "blockquote"]], v = function (t) {
                            function e(t, r) {
                                o(this, e), null != r.modules.toolbar && null == r.modules.toolbar.container && (r.modules.toolbar.container = g);
                                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r));
                                return n.quill.container.classList.add("ql-bubble"), n
                            }

                            return l(e, t), s(e, [{
                                key: "extendToolbar", value: function (t) {
                                    this.tooltip = new m(this.quill, this.options.bounds), this.tooltip.root.appendChild(t.container), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), y.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), y.default)
                                }
                            }]), e
                        }(h.default);
                    v.DEFAULTS = (0, c.default)(!0, {}, h.default.DEFAULTS, {
                        modules: {
                            toolbar: {
                                handlers: {
                                    link: function (t) {
                                        t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1)
                                    }
                                }
                            }
                        }
                    });
                    var m = function (t) {
                        function e(t, r) {
                            o(this, e);
                            var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r));
                            return n.quill.on(d.default.events.EDITOR_CHANGE, function (t, e, r, o) {
                                if (t === d.default.events.SELECTION_CHANGE) if (null != e && e.length > 0 && o === d.default.sources.USER) {
                                    n.show(), n.root.style.left = "0px", n.root.style.width = "", n.root.style.width = n.root.offsetWidth + "px";
                                    var i = n.quill.getLines(e.index, e.length);
                                    if (1 === i.length) n.position(n.quill.getBounds(e)); else {
                                        var l = i[i.length - 1], a = n.quill.getIndex(l),
                                            s = Math.min(l.length() - 1, e.index + e.length - a),
                                            u = n.quill.getBounds(new b.Range(a, s));
                                        n.position(u)
                                    }
                                } else document.activeElement !== n.textbox && n.quill.hasFocus() && n.hide()
                            }), n
                        }

                        return l(e, t), s(e, [{
                            key: "listen", value: function () {
                                var t = this;
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function () {
                                    t.root.classList.remove("ql-editing")
                                }), this.quill.on(d.default.events.SCROLL_OPTIMIZE, function () {
                                    setTimeout(function () {
                                        if (!t.root.classList.contains("ql-hidden")) {
                                            var e = t.quill.getSelection();
                                            null != e && t.position(t.quill.getBounds(e))
                                        }
                                    }, 1)
                                })
                            }
                        }, {
                            key: "cancel", value: function () {
                                this.show()
                            }
                        }, {
                            key: "position", value: function (t) {
                                var r = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "position", this).call(this, t),
                                    n = this.root.querySelector(".ql-tooltip-arrow");
                                if (n.style.marginLeft = "", 0 === r) return r;
                                n.style.marginLeft = -1 * r - n.offsetWidth / 2 + "px"
                            }
                        }]), e
                    }(p.BaseTooltip);
                    m.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), e.BubbleTooltip = m, e.default = v
                }, function (t, e, r) {
                    t.exports = r(63)
                }]).default
            })
        }).call(e, r(384).Buffer)
    }, 361: function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), r(483), r(481), r(482), window.Quill || (window.Quill = r(358)), e.default = {
            name: "quill-editor",
            data: function () {
                return {
                    _content: "",
                    defaultModules: {toolbar: [["bold", "italic", "underline", "strike"], ["blockquote", "code-block"], [{header: 1}, {header: 2}], [{list: "ordered"}, {list: "bullet"}], [{script: "sub"}, {script: "super"}], [{indent: "-1"}, {indent: "+1"}], [{direction: "rtl"}], [{size: ["small", !1, "large", "huge"]}], [{header: [1, 2, 3, 4, 5, 6, !1]}], [{color: []}, {background: []}], [{font: []}], [{align: []}], ["clean"], ["link", "image", "video"]]}
                }
            },
            props: {
                content: String,
                value: String,
                disabled: Boolean,
                options: {
                    type: Object, required: !1, default: function () {
                        return {}
                    }
                }
            },
            mounted: function () {
                this.initialize()
            },
            beforeDestroy: function () {
                this.quill = null
            },
            methods: {
                initialize: function () {
                    if (this.$el) {
                        var t = this;
                        t.options.theme = t.options.theme || "snow", t.options.boundary = t.options.boundary || document.body, t.options.modules = t.options.modules || t.defaultModules, t.options.modules.toolbar = void 0 !== t.options.modules.toolbar ? t.options.modules.toolbar : t.defaultModules.toolbar, t.options.placeholder = t.options.placeholder || "Insert text here ...", t.options.readOnly = void 0 !== t.options.readOnly && t.options.readOnly, t.quill = new Quill(t.$refs.editor, t.options), (t.value || t.content) && t.quill.pasteHTML(t.value || t.content), t.quill.on("selection-change", function (e) {
                            e ? t.$emit("focus", t.quill) : t.$emit("blur", t.quill)
                        }), t.quill.on("text-change", function (e, r, n) {
                            var o = t.$refs.editor.children[0].innerHTML, i = t.quill.getText();
                            "<p><br></p>" === o && (o = ""), t._content = o, t.$emit("input", t._content), t.$emit("change", {
                                editor: t.quill,
                                html: o,
                                text: i
                            })
                        }), this.disabled && this.quill.enable(!1), t.$emit("ready", t.quill)
                    }
                }
            },
            watch: {
                content: function (t, e) {
                    this.quill && (t && t !== this._content ? (this._content = t, this.quill.pasteHTML(t)) : t || this.quill.setText(""))
                }, value: function (t, e) {
                    this.quill && (t && t !== this._content ? (this._content = t, this.quill.pasteHTML(t)) : t || this.quill.setText(""))
                }, disabled: function (t, e) {
                    this.quill && this.quill.enable(!t)
                }
            }
        }
    }, 380: function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = r(220), o = r.n(n), i = r(529);
        r.n(i);
        e.default = {
            data: function () {
                return {content: "<h3>文本编辑</h3>", editorOption: {}}
            }, components: {headTop: o.a, quillEditor: i.quillEditor}, computed: {
                editor: function () {
                    return this.$refs.myQuillEditor.quill
                }
            }, methods: {
                onEditorReady: function (t) {
                    console.log("editor ready!", t)
                }, submit: function () {
                    console.log(this.content), this.$message.success("提交成功！")
                }
            }
        }
    }, 383: function (t, e, r) {
        "use strict";

        function n(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
        }

        function o(t) {
            var e = n(t), r = e[0], o = e[1];
            return 3 * (r + o) / 4 - o
        }

        function i(t, e, r) {
            return 3 * (e + r) / 4 - r
        }

        function l(t) {
            for (var e, r = n(t), o = r[0], l = r[1], a = new d(i(t, o, l)), s = 0, u = l > 0 ? o - 4 : o, c = 0; c < u; c += 4) e = f[t.charCodeAt(c)] << 18 | f[t.charCodeAt(c + 1)] << 12 | f[t.charCodeAt(c + 2)] << 6 | f[t.charCodeAt(c + 3)], a[s++] = e >> 16 & 255, a[s++] = e >> 8 & 255, a[s++] = 255 & e;
            return 2 === l && (e = f[t.charCodeAt(c)] << 2 | f[t.charCodeAt(c + 1)] >> 4, a[s++] = 255 & e), 1 === l && (e = f[t.charCodeAt(c)] << 10 | f[t.charCodeAt(c + 1)] << 4 | f[t.charCodeAt(c + 2)] >> 2, a[s++] = e >> 8 & 255, a[s++] = 255 & e), a
        }

        function a(t) {
            return c[t >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t]
        }

        function s(t, e, r) {
            for (var n, o = [], i = e; i < r; i += 3) n = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]), o.push(a(n));
            return o.join("")
        }

        function u(t) {
            for (var e, r = t.length, n = r % 3, o = [], i = 0, l = r - n; i < l; i += 16383) o.push(s(t, i, i + 16383 > l ? l : i + 16383));
            return 1 === n ? (e = t[r - 1], o.push(c[e >> 2] + c[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], o.push(c[e >> 10] + c[e >> 4 & 63] + c[e << 2 & 63] + "=")), o.join("")
        }

        e.byteLength = o, e.toByteArray = l, e.fromByteArray = u;
        for (var c = [], f = [], d = "undefined" != typeof Uint8Array ? Uint8Array : Array, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, b = p.length; h < b; ++h) c[h] = p[h], f[p.charCodeAt(h)] = h;
        f["-".charCodeAt(0)] = 62, f["_".charCodeAt(0)] = 63
    }, 384: function (t, e, r) {
        "use strict";
        (function (t) {
            function n() {
                return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function o(t, e) {
                if (n() < e) throw new RangeError("Invalid typed array length");
                return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = i.prototype) : (null === t && (t = new i(e)), t.length = e), t
            }

            function i(t, e, r) {
                if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i)) return new i(t, e, r);
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                    return u(this, t)
                }
                return l(this, t, e, r)
            }

            function l(t, e, r, n) {
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? d(t, e, r, n) : "string" == typeof e ? c(t, e, r) : p(t, e)
            }

            function a(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative')
            }

            function s(t, e, r, n) {
                return a(e), e <= 0 ? o(t, e) : void 0 !== r ? "string" == typeof n ? o(t, e).fill(r, n) : o(t, e).fill(r) : o(t, e)
            }

            function u(t, e) {
                if (a(e), t = o(t, e < 0 ? 0 : 0 | h(e)), !i.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) t[r] = 0;
                return t
            }

            function c(t, e, r) {
                if ("string" == typeof r && "" !== r || (r = "utf8"), !i.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | q(e, r);
                t = o(t, n);
                var l = t.write(e, r);
                return l !== n && (t = t.slice(0, l)), t
            }

            function f(t, e) {
                var r = e.length < 0 ? 0 : 0 | h(e.length);
                t = o(t, r);
                for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
                return t
            }

            function d(t, e, r, n) {
                if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                return e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n), i.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = i.prototype) : t = f(t, e), t
            }

            function p(t, e) {
                if (i.isBuffer(e)) {
                    var r = 0 | h(e.length);
                    return t = o(t, r), 0 === t.length ? t : (e.copy(t, 0, 0, r), t)
                }
                if (e) {
                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || G(e.length) ? o(t, 0) : f(t, e);
                    if ("Buffer" === e.type && Q(e.data)) return f(t, e.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function h(t) {
                if (t >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
                return 0 | t
            }

            function b(t) {
                return +t != t && (t = 0), i.alloc(+t)
            }

            function q(t, e) {
                if (i.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var r = t.length;
                if (0 === r) return 0;
                for (var n = !1; ;) switch (e) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return r;
                    case"utf8":
                    case"utf-8":
                    case void 0:
                        return K(t).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * r;
                    case"hex":
                        return r >>> 1;
                    case"base64":
                        return Z(t).length;
                    default:
                        if (n) return K(t).length;
                        e = ("" + e).toLowerCase(), n = !0
                }
            }

            function y(t, e, r) {
                var n = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if (r >>>= 0, e >>>= 0, r <= e) return "";
                for (t || (t = "utf8"); ;) switch (t) {
                    case"hex":
                        return S(this, e, r);
                    case"utf8":
                    case"utf-8":
                        return N(this, e, r);
                    case"ascii":
                        return T(this, e, r);
                    case"latin1":
                    case"binary":
                        return P(this, e, r);
                    case"base64":
                        return A(this, e, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return C(this, e, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), n = !0
                }
            }

            function g(t, e, r) {
                var n = t[e];
                t[e] = t[r], t[r] = n
            }

            function v(t, e, r, n, o) {
                if (0 === t.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (o) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!o) return -1;
                    r = 0
                }
                if ("string" == typeof e && (e = i.from(e, n)), i.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, n, o);
                if ("number" == typeof e) return e &= 255, i.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : m(t, [e], r, n, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function m(t, e, r, n, o) {
                function i(t, e) {
                    return 1 === l ? t[e] : t.readUInt16BE(e * l)
                }

                var l = 1, a = t.length, s = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    l = 2, a /= 2, s /= 2, r /= 2
                }
                var u;
                if (o) {
                    var c = -1;
                    for (u = r; u < a; u++) if (i(t, u) === i(e, -1 === c ? 0 : u - c)) {
                        if (-1 === c && (c = u), u - c + 1 === s) return c * l
                    } else -1 !== c && (u -= u - c), c = -1
                } else for (r + s > a && (r = a - s), u = r; u >= 0; u--) {
                    for (var f = !0, d = 0; d < s; d++) if (i(t, u + d) !== i(e, d)) {
                        f = !1;
                        break
                    }
                    if (f) return u
                }
                return -1
            }

            function k(t, e, r, n) {
                r = Number(r) || 0;
                var o = t.length - r;
                n ? (n = Number(n)) > o && (n = o) : n = o;
                var i = e.length;
                if (i % 2 != 0) throw new TypeError("Invalid hex string");
                n > i / 2 && (n = i / 2);
                for (var l = 0; l < n; ++l) {
                    var a = parseInt(e.substr(2 * l, 2), 16);
                    if (isNaN(a)) return l;
                    t[r + l] = a
                }
                return l
            }

            function w(t, e, r, n) {
                return W(K(e, t.length - r), t, r, n)
            }

            function _(t, e, r, n) {
                return W(Y(e), t, r, n)
            }

            function x(t, e, r, n) {
                return _(t, e, r, n)
            }

            function O(t, e, r, n) {
                return W(Z(e), t, r, n)
            }

            function E(t, e, r, n) {
                return W(V(e, t.length - r), t, r, n)
            }

            function A(t, e, r) {
                return 0 === e && r === t.length ? $.fromByteArray(t) : $.fromByteArray(t.slice(e, r))
            }

            function N(t, e, r) {
                r = Math.min(t.length, r);
                for (var n = [], o = e; o < r;) {
                    var i = t[o], l = null, a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (o + a <= r) {
                        var s, u, c, f;
                        switch (a) {
                            case 1:
                                i < 128 && (l = i);
                                break;
                            case 2:
                                s = t[o + 1], 128 == (192 & s) && (f = (31 & i) << 6 | 63 & s) > 127 && (l = f);
                                break;
                            case 3:
                                s = t[o + 1], u = t[o + 2], 128 == (192 & s) && 128 == (192 & u) && (f = (15 & i) << 12 | (63 & s) << 6 | 63 & u) > 2047 && (f < 55296 || f > 57343) && (l = f);
                                break;
                            case 4:
                                s = t[o + 1], u = t[o + 2], c = t[o + 3], 128 == (192 & s) && 128 == (192 & u) && 128 == (192 & c) && (f = (15 & i) << 18 | (63 & s) << 12 | (63 & u) << 6 | 63 & c) > 65535 && f < 1114112 && (l = f)
                        }
                    }
                    null === l ? (l = 65533, a = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), o += a
                }
                return j(n)
            }

            function j(t) {
                var e = t.length;
                if (e <= J) return String.fromCharCode.apply(String, t);
                for (var r = "", n = 0; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += J));
                return r
            }

            function T(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
                return n
            }

            function P(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
                return n
            }

            function S(t, e, r) {
                var n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                for (var o = "", i = e; i < r; ++i) o += H(t[i]);
                return o
            }

            function C(t, e, r) {
                for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o
            }

            function L(t, e, r) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function R(t, e, r, n, o, l) {
                if (!i.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > o || e < l) throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw new RangeError("Index out of range")
            }

            function M(t, e, r, n) {
                e < 0 && (e = 65535 + e + 1);
                for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
            }

            function I(t, e, r, n) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255
            }

            function B(t, e, r, n, o, i) {
                if (r + n > t.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function D(t, e, r, n, o) {
                return o || B(t, e, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(t, e, r, n, 23, 4), r + 4
            }

            function z(t, e, r, n, o) {
                return o || B(t, e, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(t, e, r, n, 52, 8), r + 8
            }

            function U(t) {
                if (t = F(t).replace(tt, ""), t.length < 2) return "";
                for (; t.length % 4 != 0;) t += "=";
                return t
            }

            function F(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }

            function H(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }

            function K(t, e) {
                e = e || 1 / 0;
                for (var r, n = t.length, o = null, i = [], l = 0; l < n; ++l) {
                    if ((r = t.charCodeAt(l)) > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (l + 1 === n) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return i
            }

            function Y(t) {
                for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                return e
            }

            function V(t, e) {
                for (var r, n, o, i = [], l = 0; l < t.length && !((e -= 2) < 0); ++l) r = t.charCodeAt(l), n = r >> 8, o = r % 256, i.push(o), i.push(n);
                return i
            }

            function Z(t) {
                return $.toByteArray(U(t))
            }

            function W(t, e, r, n) {
                for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];
                return o
            }

            function G(t) {
                return t !== t
            }/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
            var $ = r(383), X = r(504), Q = r(505);
            e.Buffer = i, e.SlowBuffer = b, e.INSPECT_MAX_BYTES = 50, i.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype, foo: function () {
                            return 42
                        }
                    }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }(), e.kMaxLength = n(), i.poolSize = 8192, i._augment = function (t) {
                return t.__proto__ = i.prototype, t
            }, i.from = function (t, e, r) {
                return l(null, t, e, r)
            }, i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
                value: null,
                configurable: !0
            })), i.alloc = function (t, e, r) {
                return s(null, t, e, r)
            }, i.allocUnsafe = function (t) {
                return u(null, t)
            }, i.allocUnsafeSlow = function (t) {
                return u(null, t)
            }, i.isBuffer = function (t) {
                return !(null == t || !t._isBuffer)
            }, i.compare = function (t, e) {
                if (!i.isBuffer(t) || !i.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                if (t === e) return 0;
                for (var r = t.length, n = e.length, o = 0, l = Math.min(r, n); o < l; ++o) if (t[o] !== e[o]) {
                    r = t[o], n = e[o];
                    break
                }
                return r < n ? -1 : n < r ? 1 : 0
            }, i.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, i.concat = function (t, e) {
                if (!Q(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return i.alloc(0);
                var r;
                if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                var n = i.allocUnsafe(e), o = 0;
                for (r = 0; r < t.length; ++r) {
                    var l = t[r];
                    if (!i.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
                    l.copy(n, o), o += l.length
                }
                return n
            }, i.byteLength = q, i.prototype._isBuffer = !0, i.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) g(this, e, e + 1);
                return this
            }, i.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
                return this
            }, i.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
                return this
            }, i.prototype.toString = function () {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? N(this, 0, t) : y.apply(this, arguments)
            }, i.prototype.equals = function (t) {
                if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === i.compare(this, t)
            }, i.prototype.inspect = function () {
                var t = "", r = e.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
            }, i.prototype.compare = function (t, e, r, n, o) {
                if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                if (n >= o && e >= r) return 0;
                if (n >= o) return -1;
                if (e >= r) return 1;
                if (e >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === t) return 0;
                for (var l = o - n, a = r - e, s = Math.min(l, a), u = this.slice(n, o), c = t.slice(e, r), f = 0; f < s; ++f) if (u[f] !== c[f]) {
                    l = u[f], a = c[f];
                    break
                }
                return l < a ? -1 : a < l ? 1 : 0
            }, i.prototype.includes = function (t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, i.prototype.indexOf = function (t, e, r) {
                return v(this, t, e, r, !0)
            }, i.prototype.lastIndexOf = function (t, e, r) {
                return v(this, t, e, r, !1)
            }, i.prototype.write = function (t, e, r, n) {
                if (void 0 === e) n = "utf8", r = this.length, e = 0; else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0; else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var o = this.length - e;
                if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var i = !1; ;) switch (n) {
                    case"hex":
                        return k(this, t, e, r);
                    case"utf8":
                    case"utf-8":
                        return w(this, t, e, r);
                    case"ascii":
                        return _(this, t, e, r);
                    case"latin1":
                    case"binary":
                        return x(this, t, e, r);
                    case"base64":
                        return O(this, t, e, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return E(this, t, e, r);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), i = !0
                }
            }, i.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            var J = 4096;
            i.prototype.slice = function (t, e) {
                var r = this.length;
                t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                var n;
                if (i.TYPED_ARRAY_SUPPORT) n = this.subarray(t, e), n.__proto__ = i.prototype; else {
                    var o = e - t;
                    n = new i(o, void 0);
                    for (var l = 0; l < o; ++l) n[l] = this[l + t]
                }
                return n
            }, i.prototype.readUIntLE = function (t, e, r) {
                t |= 0, e |= 0, r || L(t, e, this.length);
                for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;
                return n
            }, i.prototype.readUIntBE = function (t, e, r) {
                t |= 0, e |= 0, r || L(t, e, this.length);
                for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) n += this[t + --e] * o;
                return n
            }, i.prototype.readUInt8 = function (t, e) {
                return e || L(t, 1, this.length), this[t]
            }, i.prototype.readUInt16LE = function (t, e) {
                return e || L(t, 2, this.length), this[t] | this[t + 1] << 8
            }, i.prototype.readUInt16BE = function (t, e) {
                return e || L(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, i.prototype.readUInt32LE = function (t, e) {
                return e || L(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, i.prototype.readUInt32BE = function (t, e) {
                return e || L(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, i.prototype.readIntLE = function (t, e, r) {
                t |= 0, e |= 0, r || L(t, e, this.length);
                for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;
                return o *= 128, n >= o && (n -= Math.pow(2, 8 * e)), n
            }, i.prototype.readIntBE = function (t, e, r) {
                t |= 0, e |= 0, r || L(t, e, this.length);
                for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) i += this[t + --n] * o;
                return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i
            }, i.prototype.readInt8 = function (t, e) {
                return e || L(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, i.prototype.readInt16LE = function (t, e) {
                e || L(t, 2, this.length);
                var r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, i.prototype.readInt16BE = function (t, e) {
                e || L(t, 2, this.length);
                var r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, i.prototype.readInt32LE = function (t, e) {
                return e || L(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, i.prototype.readInt32BE = function (t, e) {
                return e || L(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, i.prototype.readFloatLE = function (t, e) {
                return e || L(t, 4, this.length), X.read(this, t, !0, 23, 4)
            }, i.prototype.readFloatBE = function (t, e) {
                return e || L(t, 4, this.length), X.read(this, t, !1, 23, 4)
            }, i.prototype.readDoubleLE = function (t, e) {
                return e || L(t, 8, this.length), X.read(this, t, !0, 52, 8)
            }, i.prototype.readDoubleBE = function (t, e) {
                return e || L(t, 8, this.length), X.read(this, t, !1, 52, 8)
            }, i.prototype.writeUIntLE = function (t, e, r, n) {
                if (t = +t, e |= 0, r |= 0, !n) {
                    R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
                }
                var o = 1, i = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256);) this[e + i] = t / o & 255;
                return e + r
            }, i.prototype.writeUIntBE = function (t, e, r, n) {
                if (t = +t, e |= 0, r |= 0, !n) {
                    R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
                }
                var o = r - 1, i = 1;
                for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
                return e + r
            }, i.prototype.writeUInt8 = function (t, e, r) {
                return t = +t, e |= 0, r || R(this, t, e, 1, 255, 0), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
            }, i.prototype.writeUInt16LE = function (t, e, r) {
                return t = +t, e |= 0, r || R(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2
            }, i.prototype.writeUInt16BE = function (t, e, r) {
                return t = +t, e |= 0, r || R(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2
            }, i.prototype.writeUInt32LE = function (t, e, r) {
                return t = +t, e |= 0, r || R(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : I(this, t, e, !0), e + 4
            }, i.prototype.writeUInt32BE = function (t, e, r) {
                return t = +t, e |= 0, r || R(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : I(this, t, e, !1), e + 4
            }, i.prototype.writeIntLE = function (t, e, r, n) {
                if (t = +t, e |= 0, !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    R(this, t, e, r, o - 1, -o)
                }
                var i = 0, l = 1, a = 0;
                for (this[e] = 255 & t; ++i < r && (l *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / l >> 0) - a & 255;
                return e + r
            }, i.prototype.writeIntBE = function (t, e, r, n) {
                if (t = +t, e |= 0, !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    R(this, t, e, r, o - 1, -o)
                }
                var i = r - 1, l = 1, a = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (l *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / l >> 0) - a & 255;
                return e + r
            }, i.prototype.writeInt8 = function (t, e, r) {
                return t = +t, e |= 0, r || R(this, t, e, 1, 127, -128), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, i.prototype.writeInt16LE = function (t, e, r) {
                return t = +t, e |= 0, r || R(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2
            }, i.prototype.writeInt16BE = function (t, e, r) {
                return t = +t, e |= 0, r || R(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2
            }, i.prototype.writeInt32LE = function (t, e, r) {
                return t = +t, e |= 0, r || R(this, t, e, 4, 2147483647, -2147483648), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : I(this, t, e, !0), e + 4
            }, i.prototype.writeInt32BE = function (t, e, r) {
                return t = +t, e |= 0, r || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : I(this, t, e, !1), e + 4
            }, i.prototype.writeFloatLE = function (t, e, r) {
                return D(this, t, e, !0, r)
            }, i.prototype.writeFloatBE = function (t, e, r) {
                return D(this, t, e, !1, r)
            }, i.prototype.writeDoubleLE = function (t, e, r) {
                return z(this, t, e, !0, r)
            }, i.prototype.writeDoubleBE = function (t, e, r) {
                return z(this, t, e, !1, r)
            }, i.prototype.copy = function (t, e, r, n) {
                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                var o, l = n - r;
                if (this === t && r < e && e < n) for (o = l - 1; o >= 0; --o) t[o + e] = this[o + r]; else if (l < 1e3 || !i.TYPED_ARRAY_SUPPORT) for (o = 0; o < l; ++o) t[o + e] = this[o + r]; else Uint8Array.prototype.set.call(t, this.subarray(r, r + l), e);
                return l
            }, i.prototype.fill = function (t, e, r, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
                        var o = t.charCodeAt(0);
                        o < 256 && (t = o)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !i.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                if (r <= e) return this;
                e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0);
                var l;
                if ("number" == typeof t) for (l = e; l < r; ++l) this[l] = t; else {
                    var a = i.isBuffer(t) ? t : K(new i(t, n).toString()), s = a.length;
                    for (l = 0; l < r - e; ++l) this[l + e] = a[l % s]
                }
                return this
            };
            var tt = /[^+\/0-9A-Za-z-_]/g
        }).call(e, r(31))
    }, 388: function (t, e, r) {
        e = t.exports = r(188)(!1), e.push([t.i, '/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:"\\2022"}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:"\\2611"}.ql-editor ul[data-checked=false]>li:before{content:"\\2610"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) ". "}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) ". "}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) ". "}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) ". "}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) ". "}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) ". "}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) ". "}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) ". "}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) ". "}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) ". "}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-bubble.ql-toolbar:after,.ql-bubble .ql-toolbar:after{clear:both;content:"";display:table}.ql-bubble.ql-toolbar button,.ql-bubble .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-bubble.ql-toolbar button svg,.ql-bubble .ql-toolbar button svg{float:left;height:100%}.ql-bubble.ql-toolbar button:active:hover,.ql-bubble .ql-toolbar button:active:hover{outline:none}.ql-bubble.ql-toolbar input.ql-image[type=file],.ql-bubble .ql-toolbar input.ql-image[type=file]{display:none}.ql-bubble.ql-toolbar .ql-picker-item.ql-selected,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected,.ql-bubble.ql-toolbar .ql-picker-item:hover,.ql-bubble .ql-toolbar .ql-picker-item:hover,.ql-bubble.ql-toolbar .ql-picker-label.ql-active,.ql-bubble .ql-toolbar .ql-picker-label.ql-active,.ql-bubble.ql-toolbar .ql-picker-label:hover,.ql-bubble .ql-toolbar .ql-picker-label:hover,.ql-bubble.ql-toolbar button.ql-active,.ql-bubble .ql-toolbar button.ql-active,.ql-bubble.ql-toolbar button:focus,.ql-bubble .ql-toolbar button:focus,.ql-bubble.ql-toolbar button:hover,.ql-bubble .ql-toolbar button:hover{color:#fff}.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button.ql-active .ql-fill,.ql-bubble .ql-toolbar button.ql-active .ql-fill,.ql-bubble.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button:focus .ql-fill,.ql-bubble .ql-toolbar button:focus .ql-fill,.ql-bubble.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button:hover .ql-fill,.ql-bubble .ql-toolbar button:hover .ql-fill,.ql-bubble.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button:hover .ql-stroke.ql-fill{fill:#fff}.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-bubble.ql-toolbar button.ql-active .ql-stroke,.ql-bubble .ql-toolbar button.ql-active .ql-stroke,.ql-bubble.ql-toolbar button.ql-active .ql-stroke-miter,.ql-bubble .ql-toolbar button.ql-active .ql-stroke-miter,.ql-bubble.ql-toolbar button:focus .ql-stroke,.ql-bubble .ql-toolbar button:focus .ql-stroke,.ql-bubble.ql-toolbar button:focus .ql-stroke-miter,.ql-bubble .ql-toolbar button:focus .ql-stroke-miter,.ql-bubble.ql-toolbar button:hover .ql-stroke,.ql-bubble .ql-toolbar button:hover .ql-stroke,.ql-bubble.ql-toolbar button:hover .ql-stroke-miter,.ql-bubble .ql-toolbar button:hover .ql-stroke-miter{stroke:#fff}@media (pointer:coarse){.ql-bubble.ql-toolbar button:hover:not(.ql-active),.ql-bubble .ql-toolbar button:hover:not(.ql-active){color:#ccc}.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#ccc}.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#ccc}}.ql-bubble,.ql-bubble *{box-sizing:border-box}.ql-bubble .ql-hidden{display:none}.ql-bubble .ql-out-bottom,.ql-bubble .ql-out-top{visibility:hidden}.ql-bubble .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-bubble .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-bubble .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-bubble .ql-formats{display:inline-block;vertical-align:middle}.ql-bubble .ql-formats:after{clear:both;content:"";display:table}.ql-bubble .ql-stroke{fill:none;stroke:#ccc;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-bubble .ql-stroke-miter{fill:none;stroke:#ccc;stroke-miterlimit:10;stroke-width:2}.ql-bubble .ql-fill,.ql-bubble .ql-stroke.ql-fill{fill:#ccc}.ql-bubble .ql-empty{fill:none}.ql-bubble .ql-even{fill-rule:evenodd}.ql-bubble .ql-stroke.ql-thin,.ql-bubble .ql-thin{stroke-width:1}.ql-bubble .ql-transparent{opacity:.4}.ql-bubble .ql-direction svg:last-child{display:none}.ql-bubble .ql-direction.ql-active svg:last-child{display:inline}.ql-bubble .ql-direction.ql-active svg:first-child{display:none}.ql-bubble .ql-editor h1{font-size:2em}.ql-bubble .ql-editor h2{font-size:1.5em}.ql-bubble .ql-editor h3{font-size:1.17em}.ql-bubble .ql-editor h4{font-size:1em}.ql-bubble .ql-editor h5{font-size:.83em}.ql-bubble .ql-editor h6{font-size:.67em}.ql-bubble .ql-editor a{text-decoration:underline}.ql-bubble .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-bubble .ql-editor code,.ql-bubble .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-bubble .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-bubble .ql-editor code{font-size:85%;padding:2px 4px}.ql-bubble .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-bubble .ql-editor img{max-width:100%}.ql-bubble .ql-picker{color:#ccc;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-bubble .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-bubble .ql-picker-label:before{display:inline-block;line-height:22px}.ql-bubble .ql-picker-options{background-color:#444;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-bubble .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-bubble .ql-picker.ql-expanded .ql-picker-label{color:#777;z-index:2}.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#777}.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#777}.ql-bubble .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-bubble .ql-color-picker,.ql-bubble .ql-icon-picker{width:28px}.ql-bubble .ql-color-picker .ql-picker-label,.ql-bubble .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-bubble .ql-color-picker .ql-picker-label svg,.ql-bubble .ql-icon-picker .ql-picker-label svg{right:4px}.ql-bubble .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-bubble .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-bubble .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-bubble .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-bubble .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""]):before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""]):before,.ql-bubble .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""]):before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""]):before,.ql-bubble .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""]):before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""]):before{content:attr(data-label)}.ql-bubble .ql-picker.ql-header{width:98px}.ql-bubble .ql-picker.ql-header .ql-picker-item:before,.ql-bubble .ql-picker.ql-header .ql-picker-label:before{content:"Normal"}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="1"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="1"]:before{content:"Heading 1"}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="2"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="2"]:before{content:"Heading 2"}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="3"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="3"]:before{content:"Heading 3"}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="4"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="4"]:before{content:"Heading 4"}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="5"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="5"]:before{content:"Heading 5"}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="6"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="6"]:before{content:"Heading 6"}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="1"]:before{font-size:2em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="2"]:before{font-size:1.5em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="3"]:before{font-size:1.17em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="4"]:before{font-size:1em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="5"]:before{font-size:.83em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="6"]:before{font-size:.67em}.ql-bubble .ql-picker.ql-font{width:108px}.ql-bubble .ql-picker.ql-font .ql-picker-item:before,.ql-bubble .ql-picker.ql-font .ql-picker-label:before{content:"Sans Serif"}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:"Serif"}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:"Monospace"}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.ql-bubble .ql-picker.ql-size{width:98px}.ql-bubble .ql-picker.ql-size .ql-picker-item:before,.ql-bubble .ql-picker.ql-size .ql-picker-label:before{content:"Normal"}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:"Small"}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:"Large"}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:"Huge"}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.ql-bubble .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-bubble .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-bubble .ql-toolbar .ql-formats{margin:8px 12px 8px 0}.ql-bubble .ql-toolbar .ql-formats:first-child{margin-left:12px}.ql-bubble .ql-color-picker svg{margin:1px}.ql-bubble .ql-color-picker .ql-picker-item.ql-selected,.ql-bubble .ql-color-picker .ql-picker-item:hover{border-color:#fff}.ql-bubble .ql-tooltip{background-color:#444;border-radius:25px;color:#fff}.ql-bubble .ql-tooltip-arrow{border-left:6px solid transparent;border-right:6px solid transparent;content:" ";display:block;left:50%;margin-left:-6px;position:absolute}.ql-bubble .ql-tooltip:not(.ql-flip) .ql-tooltip-arrow{border-bottom:6px solid #444;top:-6px}.ql-bubble .ql-tooltip.ql-flip .ql-tooltip-arrow{border-top:6px solid #444;bottom:-6px}.ql-bubble .ql-tooltip.ql-editing .ql-tooltip-editor{display:block}.ql-bubble .ql-tooltip.ql-editing .ql-formats{visibility:hidden}.ql-bubble .ql-tooltip-editor{display:none}.ql-bubble .ql-tooltip-editor input[type=text]{background:transparent;border:none;color:#fff;font-size:13px;height:100%;outline:none;padding:10px 20px;position:absolute;width:100%}.ql-bubble .ql-tooltip-editor a{top:10px;position:absolute;right:20px}.ql-bubble .ql-tooltip-editor a:before{color:#ccc;content:"\\D7";font-size:16px;font-weight:700}.ql-container.ql-bubble:not(.ql-disabled) a{position:relative;white-space:nowrap}.ql-container.ql-bubble:not(.ql-disabled) a:before{background-color:#444;border-radius:15px;top:-5px;font-size:12px;color:#fff;content:attr(href);font-weight:400;overflow:hidden;padding:5px 15px;text-decoration:none;z-index:1}.ql-container.ql-bubble:not(.ql-disabled) a:after{border-top:6px solid #444;border-left:6px solid transparent;border-right:6px solid transparent;top:0;content:" ";height:0;width:0}.ql-container.ql-bubble:not(.ql-disabled) a:after,.ql-container.ql-bubble:not(.ql-disabled) a:before{left:0;margin-left:50%;position:absolute;transform:translate(-50%,-100%);transition:visibility 0s ease .2s;visibility:hidden}.ql-container.ql-bubble:not(.ql-disabled) a:hover:after,.ql-container.ql-bubble:not(.ql-disabled) a:hover:before{visibility:visible}', ""])
    }, 389: function (t, e, r) {
        e = t.exports = r(188)(!1), e.push([t.i, '/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:"\\2022"}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:"\\2611"}.ql-editor ul[data-checked=false]>li:before{content:"\\2610"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) ". "}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) ". "}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) ". "}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) ". "}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) ". "}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) ". "}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) ". "}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) ". "}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) ". "}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) ". "}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}', ""])
    }, 390: function (t, e, r) {
        e = t.exports = r(188)(!1), e.push([t.i, '/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:"\\2022"}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:"\\2611"}.ql-editor ul[data-checked=false]>li:before{content:"\\2610"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) ". "}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) ". "}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) ". "}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) ". "}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) ". "}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) ". "}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) ". "}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) ". "}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) ". "}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) ". "}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow.ql-toolbar:after,.ql-snow .ql-toolbar:after{clear:both;content:"";display:table}.ql-snow.ql-toolbar button,.ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow.ql-toolbar button svg,.ql-snow .ql-toolbar button svg{float:left;height:100%}.ql-snow.ql-toolbar button:active:hover,.ql-snow .ql-toolbar button:active:hover{outline:none}.ql-snow.ql-toolbar input.ql-image[type=file],.ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover{color:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow.ql-toolbar button:hover:not(.ql-active),.ql-snow .ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow,.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:"";display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""]):before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]:before{content:"Heading 1"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]:before{content:"Heading 2"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]:before{content:"Heading 3"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]:before{content:"Heading 4"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]:before{content:"Heading 5"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]:before{content:"Heading 6"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:"Sans Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:"Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:"Monospace"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:"Small"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:"Large"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:"Huge"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip:before{content:"Visit URL:";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #ccc;content:"Edit";margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove:before{content:"Remove";margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0;content:"Save";padding-right:0}.ql-snow .ql-tooltip[data-mode=link]:before{content:"Enter link:"}.ql-snow .ql-tooltip[data-mode=formula]:before{content:"Enter formula:"}.ql-snow .ql-tooltip[data-mode=video]:before{content:"Enter video:"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}', ""])
    }, 392: function (t, e, r) {
        e = t.exports = r(188)(!1), e.push([t.i, ".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.edit_container{padding:40px;margin-bottom:40px}.editer{height:350px}.submit_btn{text-align:center}", ""])
    }, 403: function (t, e, r) {
        e = t.exports = r(188)(!1), e.push([t.i, ".quill-editor img{max-width:100%}", ""])
    }, 481: function (t, e, r) {
        var n = r(388);
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        r(189)("1b0419a8", n, !0)
    }, 482: function (t, e, r) {
        var n = r(389);
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        r(189)("24aa2835", n, !0)
    }, 483: function (t, e, r) {
        var n = r(390);
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        r(189)("fdd7165e", n, !0)
    }, 485: function (t, e, r) {
        var n = r(392);
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        r(189)("06b7536a", n, !0)
    }, 496: function (t, e, r) {
        var n = r(403);
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        r(189)("55dee095", n, !0)
    }, 504: function (t, e) {
        e.read = function (t, e, r, n, o) {
            var i, l, a = 8 * o - n - 1, s = (1 << a) - 1, u = s >> 1, c = -7, f = r ? o - 1 : 0, d = r ? -1 : 1,
                p = t[e + f];
            for (f += d, i = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; i = 256 * i + t[e + f], f += d, c -= 8) ;
            for (l = i & (1 << -c) - 1, i >>= -c, c += n; c > 0; l = 256 * l + t[e + f], f += d, c -= 8) ;
            if (0 === i) i = 1 - u; else {
                if (i === s) return l ? NaN : 1 / 0 * (p ? -1 : 1);
                l += Math.pow(2, n), i -= u
            }
            return (p ? -1 : 1) * l * Math.pow(2, i - n)
        }, e.write = function (t, e, r, n, o, i) {
            var l, a, s, u = 8 * i - o - 1, c = (1 << u) - 1, f = c >> 1,
                d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : i - 1, h = n ? 1 : -1,
                b = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, l = c) : (l = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -l)) < 1 && (l--, s *= 2), e += l + f >= 1 ? d / s : d * Math.pow(2, 1 - f), e * s >= 2 && (l++, s /= 2), l + f >= c ? (a = 0, l = c) : l + f >= 1 ? (a = (e * s - 1) * Math.pow(2, o), l += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), l = 0)); o >= 8; t[r + p] = 255 & a, p += h, a /= 256, o -= 8) ;
            for (l = l << o | a, u += o; u > 0; t[r + p] = 255 & l, p += h, l /= 256, u -= 8) ;
            t[r + p - h] |= 128 * b
        }
    }, 505: function (t, e) {
        var r = {}.toString;
        t.exports = Array.isArray || function (t) {
            return "[object Array]" == r.call(t)
        }
    }, 508: function (t, e, r) {
        r(496);
        var n = r(87)(r(361), r(521), null, null);
        t.exports = n.exports
    }, 510: function (t, e) {
        t.exports = {
            render: function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", [r("head-top"), t._v(" "), r("div", {staticClass: "edit_container"}, [r("quill-editor", {
                    ref: "myQuillEditor",
                    staticClass: "editer",
                    attrs: {options: t.editorOption},
                    on: {
                        ready: function (e) {
                            t.onEditorReady(e)
                        }
                    },
                    model: {
                        value: t.content, callback: function (e) {
                            t.content = e
                        }, expression: "content"
                    }
                })], 1), t._v(" "), r("div", {staticClass: "submit_btn"}, [r("el-button", {
                    attrs: {type: "primary"},
                    on: {click: t.submit}
                }, [t._v("提交")])], 1)], 1)
            }, staticRenderFns: []
        }
    }, 521: function (t, e) {
        t.exports = {
            render: function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", {staticClass: "quill-editor"}, [t._t("toolbar"), t._v(" "), r("div", {ref: "editor"})], 2)
            }, staticRenderFns: []
        }
    }, 529: function (t, e, r) {
        var n = r(358), o = r(508);
        o = o.default || o;
        var i = {
            Quill: n, quillEditor: o, install: function (t) {
                t.component(o.name, o)
            }
        };
        t.exports = i
    }
});