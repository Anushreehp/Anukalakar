(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var aa, ba;

    function ca(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var da = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ea(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = ea(this),
        ha = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        n = {},
        ia = {};

    function p(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in n ? f = n : f = fa;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ha && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? da(n, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = ha ? fa.Symbol(d) : "$jscp$" + a + "$" + d), da(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ja("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            da(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    ja("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, n.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && da(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ka(ca(this))
                }
            })
        }
        return a
    }, "es6");

    function ka(a) {
        a = {
            next: a
        };
        a[p(n.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function la(a) {
        return a.raw = a
    }

    function t(a) {
        var b = "undefined" != typeof n.Symbol && p(n.Symbol, "iterator") && a[p(n.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ca(a)
        }
    }

    function ma(a) {
        if (!(a instanceof Array)) {
            a = t(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        oa;
    if (ha && "function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa;

    function u(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Fb = b.prototype
    }

    function ta() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    ja("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.D = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.m()
                })
            }
            this.h.push(g)
        };
        var e = fa.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.N),
                reject: g(this.m)
            }
        };
        b.prototype.N = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.R(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.M(g) : this.u(g)
            }
        };
        b.prototype.M = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.ea(h, g) : this.u(g)
        };
        b.prototype.m = function(g) {
            this.A(2, g)
        };
        b.prototype.u = function(g) {
            this.A(1, g)
        };
        b.prototype.A = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.O();
            this.F()
        };
        b.prototype.O = function() {
            var g = this;
            e(function() {
                if (g.L()) {
                    var h = fa.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.L =
            function() {
                if (this.D) return !1;
                var g = fa.CustomEvent,
                    h = fa.Event,
                    k = fa.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g)
            };
        b.prototype.F = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.R = function(g) {
            var h = this.l();
            g.ga(h.resolve, h.reject)
        };
        b.prototype.ea = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(r, y) {
                return "function" == typeof r ? function(F) {
                    try {
                        l(r(F))
                    } catch (z) {
                        m(z)
                    }
                } : y
            }
            var l, m, q = new b(function(r, y) {
                l = r;
                m = y
            });
            this.ga(k(g, l), k(h, m));
            return q
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.ga = function(g, h) {
            function k() {
                switch (l.h) {
                    case 1:
                        g(l.j);
                        break;
                    case 2:
                        h(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.D = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = t(g), m = l.next(); !m.done; m = l.next()) d(m.value).ga(h, k)
            })
        };
        b.all = function(g) {
            var h = t(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function q(F) {
                    return function(z) {
                        r[F] = z;
                        y--;
                        0 == y && l(r)
                    }
                }
                var r = [],
                    y = 0;
                do r.push(void 0), y++, d(k.value).ga(q(r.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    ja("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");

    function ua(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ja("WeakMap", function(a) {
        function b(g) {
            this.h = (f += Math.random() + 1).toString();
            if (g) {
                g = t(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!ua(g, e)) {
                var k = new c;
                da(g, e, {
                    value: k
                })
            }
            if (!ua(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.h] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && ua(g, e) ? g[e][this.h] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && ua(g, e) && ua(g[e], this.h)
        };
        b.prototype.delete = function(g) {
            return d(g) && ua(g, e) && ua(g[e], this.h) ? delete g[e][this.h] : !1
        };
        return b
    }, "es6");
    ja("Map", function(a) {
        function b() {
            var h = {};
            return h.J = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.h;
            return ka(function() {
                if (l) {
                    for (; l.head != h.h;) l = l.J;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.i[l];
            if (m && ua(h.i, l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        v: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                v: void 0
            }
        }

        function e(h) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = t(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(t([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new n.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.v ? l.v.value = k : (l.v = {
                next: this.h,
                J: this.h.J,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.v), this.h.J.next = l.v, this.h.J = l.v, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.v && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.v.J.next = h.v.next, h.v.next.J = h.v.J, h.v.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.J = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).v
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).v) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[p(n.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function va(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[p(n.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    var wa = ha && "function" == typeof p(Object, "assign") ? p(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ua(d, e) && (a[e] = d[e])
        }
        return a
    };
    ja("Object.assign", function(a) {
        return a || wa
    }, "es6");
    ja("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            var d = this.length,
                e = b.length;
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var f = 0; f < e && c < d;)
                if (this[c++] != b[f++]) return !1;
            return f >= e
        }
    }, "es6");
    ja("globalThis", function(a) {
        return a || fa
    }, "es_2020");
    ja("Set", function(a) {
        function b(c) {
            this.h = new n.Map;
            if (c) {
                c = t(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(t([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return p(this.h, "values").call(this.h)
        };
        b.prototype.keys = p(b.prototype,
            "values");
        b.prototype[p(n.Symbol, "iterator")] = p(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    ja("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    ja("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    ja("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    ja("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return n.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return n.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var v = this || self;

    function xa(a) {
        a = a.split(".");
        for (var b = v, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ya(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function za(a) {
        return Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa] || (a[Aa] = ++Ba)
    }
    var Aa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ba = 0;

    function Ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Da(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ea(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ea = Ca : Ea = Da;
        return Ea.apply(null, arguments)
    }

    function Fa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ga(a) {
        var b = ["__uspapi"],
            c = v;
        b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a
    }

    function Ha(a) {
        return a
    };
    var Ia = (new Date).getTime();

    function Ja(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ka(a, b) {
        var c = 0;
        a = Ja(String(a)).split(".");
        b = Ja(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = La(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || La(0 == f[2].length, 0 == g[2].length) || La(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function La(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Ma() {
        var a = v.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function w(a) {
        return -1 != Ma().indexOf(a)
    };

    function Na() {
        return w("Trident") || w("MSIE")
    }

    function Oa() {
        return (w("Chrome") || w("CriOS")) && !w("Edge") || w("Silk")
    }

    function Pa(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[p(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function Qa() {
        var a = Ma();
        if (Na()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Pa(b);
        return w("Opera") ? a(["Version", "Opera"]) :
            w("Edge") ? a(["Edge"]) : w("Edg/") ? a(["Edg"]) : w("Silk") ? a(["Silk"]) : Oa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ra(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Sa(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ta(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ua(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Va(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Wa(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Xa(a, b) {
        a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            }return 0 <= a
    }

    function Ya(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Za(a) {
        Za[" "](a);
        return a
    }
    Za[" "] = function() {};
    var $a = Na();
    !w("Android") || Oa();
    Oa();
    !w("Safari") || Oa();
    var ab = {},
        bb = null;
    var cb = "function" === typeof Uint8Array;
    var db = "function" === typeof n.Symbol && "symbol" === typeof(0, n.Symbol)() ? (0, n.Symbol)(void 0) : void 0;

    function eb(a) {
        Object.isFrozen(a) || (db ? a[db] |= 1 : void 0 !== a.h ? a.h |= 1 : Object.defineProperties(a, {
            h: {
                value: 1,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }));
        return a
    };

    function fb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var hb;

    function ib(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a) && cb && null != a && a instanceof Uint8Array) {
                    var b;
                    void 0 === b && (b = 0);
                    if (!bb) {
                        bb = {};
                        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                            var f = c.concat(d[e].split(""));
                            ab[e] = f;
                            for (var g = 0; g < f.length; g++) {
                                var h = f[g];
                                void 0 === bb[h] && (bb[h] = g)
                            }
                        }
                    }
                    b = ab[b];
                    c = Array(Math.floor(a.length / 3));
                    d = b[64] || "";
                    for (e = f = 0; f < a.length -
                        2; f += 3) {
                        var k = a[f],
                            l = a[f + 1];
                        h = a[f + 2];
                        g = b[k >> 2];
                        k = b[(k & 3) << 4 | l >> 4];
                        l = b[(l & 15) << 2 | h >> 6];
                        h = b[h & 63];
                        c[e++] = g + k + l + h
                    }
                    g = 0;
                    h = d;
                    switch (a.length - f) {
                        case 2:
                            g = a[f + 1], h = b[(g & 15) << 2] || d;
                        case 1:
                            a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
                    }
                    return c.join("")
                }
        }
        return a
    };

    function jb(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = kb(a, b);
            else if (fb(a)) {
                var c = {},
                    d;
                for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = jb(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    }

    function kb(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = jb(c[d], b);
        if (b = Array.isArray(a)) {
            var e;
            db ? e = a[db] : e = a.h;
            b = (null == e ? 0 : e) & 1
        }
        b && eb(c);
        return c
    }

    function lb(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = ib(a);
        return Array.isArray(a) ? kb(a, lb) : a
    };
    var mb;

    function nb(a, b) {
        mb = b;
        a = new a(b);
        mb = null;
        return a
    };

    function x(a, b, c) {
        var d = mb;
        mb = null;
        a || (a = d);
        d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.l = (d ? 0 : -1) - (this.constructor.Bb || 0);
        this.h = void 0;
        this.i = a;
        a: {
            d = this.i.length;a = d - 1;
            if (d && (d = this.i[a], fb(d))) {
                this.m = a - this.l;
                this.j = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, a + 1 - this.l), this.j = void 0) : this.m = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.m) a += this.l, (d = this.i[a]) ? Array.isArray(d) && eb(d) : this.i[a] = ob;
                else {
                    d = this.j || (this.j = this.i[this.m + this.l] = {});
                    var e = d[a];
                    e ? Array.isArray(e) &&
                        eb(e) : d[a] = ob
                }
    }
    var ob = Object.freeze(eb([]));

    function A(a, b, c) {
        return -1 === b ? null : b >= a.m ? a.j ? a.j[b] : void 0 : (void 0 === c ? 0 : c) && a.j && (c = a.j[b], null != c) ? c : a.i[b + a.l]
    }

    function pb(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = A(a, b, c);
        null == d && (d = ob);
        d === ob && (d = eb(d.slice()), B(a, b, d, c));
        return d
    }

    function qb(a, b) {
        a = A(a, b);
        return null == a ? a : !!a
    }

    function C(a, b, c) {
        a = A(a, b);
        return null == a ? c : a
    }

    function rb(a, b, c) {
        a = qb(a, b);
        return null == a ? void 0 === c ? !1 : c : a
    }

    function sb(a, b, c) {
        a = A(a, b);
        a = null == a ? a : +a;
        return null == a ? void 0 === c ? 0 : c : a
    }

    function B(a, b, c, d) {
        (void 0 === d ? 0 : d) || b >= a.m ? (a.j || (a.j = a.i[a.m + a.l] = {}))[b] = c : a.i[b + a.l] = c;
        return a
    }

    function tb(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return B(a, b, null == c ? eb([]) : Array.isArray(c) ? eb(c) : c, d)
    }

    function ub(a, b, c) {
        0 !== c ? B(a, b, c) : B(a, b, void 0, !1);
        return a
    }

    function vb(a, b, c, d) {
        (c = wb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), B(a, c, void 0));
        return B(a, b, d)
    }

    function wb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != A(a, e) && (0 !== c && B(a, c, void 0, !1), c = e)
        }
        return c
    }

    function D(a, b, c) {
        if (-1 === c) return null;
        a.h || (a.h = {});
        var d = a.h[c];
        if (d) return d;
        var e = A(a, c, !1);
        if (null == e) return d;
        b = new b(e);
        return a.h[c] = b
    }

    function G(a, b, c) {
        a.h || (a.h = {});
        var d = a.h[c];
        if (!d) {
            var e = pb(a, c, !1);
            d = [];
            for (var f = 0; f < e.length; f++) d[f] = new b(e[f]);
            a.h[c] = d
        }
        return d
    }

    function xb(a, b, c, d) {
        a.h || (a.h = {});
        var e = d ? d.i : d;
        a.h[b] = d;
        return vb(a, b, c, e)
    }

    function yb(a, b, c) {
        var d = void 0 === d ? !1 : d;
        if (c) {
            var e = eb([]);
            for (var f = 0; f < c.length; f++) e[f] = c[f].i;
            a.h || (a.h = {});
            a.h[b] = c
        } else a.h && (a.h[b] = void 0), e = ob;
        return B(a, b, e, d)
    }
    x.prototype.toJSON = function() {
        var a = this.i;
        return hb ? a : kb(a, lb)
    };

    function zb(a, b) {
        return ib(b)
    }

    function Ab(a) {
        hb = !0;
        try {
            return JSON.stringify(a.toJSON(), zb)
        } finally {
            hb = !1
        }
    }

    function Bb(a, b, c) {
        return wb(a, b) === c ? c : -1
    }

    function Cb(a, b, c) {
        return C(a, b, void 0 === c ? "" : c)
    }

    function Db(a, b, c) {
        return C(a, Bb(a, c, b), 0)
    }

    function Eb(a, b, c, d) {
        return D(a, b, Bb(a, d, c))
    };

    function Fb(a) {
        x.call(this, a, -1, Gb)
    }
    u(Fb, x);

    function Hb(a) {
        x.call(this, a)
    }
    u(Hb, x);
    var Gb = [2, 3];

    function Ib(a, b) {
        this.i = a === Jb && b || "";
        this.h = Kb
    }
    var Kb = {},
        Jb = {};

    function Lb(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Mb(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Nb(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var Ob;

    function Pb(a, b) {
        this.h = b === Qb ? a : ""
    }

    function Rb(a, b) {
        a = Sb.exec(Tb(a).toString());
        var c = a[3] || "";
        return Ub(a[1] + Vb("?", a[2] || "", b) + Vb("#", c, void 0))
    }
    Pb.prototype.toString = function() {
        return this.h + ""
    };

    function Tb(a) {
        return a instanceof Pb && a.constructor === Pb ? a.h : "type_error:TrustedResourceUrl"
    }
    var Sb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Qb = {};

    function Ub(a) {
        if (void 0 === Ob) {
            var b = null;
            var c = v.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: Ha,
                        createScript: Ha,
                        createScriptURL: Ha
                    })
                } catch (d) {
                    v.console && v.console.error(d.message)
                }
                Ob = b
            } else Ob = b
        }
        a = (b = Ob) ? b.createScriptURL(a) : a;
        return new Pb(a, Qb)
    }

    function Vb(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var Wb = {};

    function Xb() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var Yb;

    function Zb() {
        var a, b;
        if (void 0 === Yb) try {
            Yb = null !== (b = null === (a = Xb()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: function(c) {
                    return c
                },
                createScript: function(c) {
                    return c
                },
                createScriptURL: function(c) {
                    return c
                }
            })) && void 0 !== b ? b : null
        } catch (c) {
            Yb = null
        }
        return Yb
    };

    function $b() {}

    function ac(a) {
        this.h = a
    }
    u(ac, $b);
    ac.prototype.toString = function() {
        return this.h.toString()
    };

    function bc(a) {
        var b, c = null === (b = Zb()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new ac(null !== c && void 0 !== c ? c : a, Wb)
    }

    function cc(a) {
        if (a instanceof ac) return a.h;
        throw Error("");
    };

    function dc(a) {
        return a instanceof $b ? cc(a) : Tb(a)
    };

    function ec(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function fc(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function gc(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function hc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function ic(a, b) {
        a.removeEventListener && a.removeEventListener("message", b, !1)
    };

    function jc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function kc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function lc(a) {
        this.h = a || v.document || document
    }
    lc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function mc() {
        return !nc() && (w("iPod") || w("iPhone") || w("Android") || w("IEMobile"))
    }

    function nc() {
        return w("iPad") || w("Android") && !w("Mobile") || w("Silk")
    };
    var oc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        rc = /#|$/;

    function sc(a) {
        var b = a.search(rc),
            c;
        a: {
            for (c = 0; 0 <= (c = a.indexOf("client", c)) && c < b;) {
                var d = a.charCodeAt(c - 1);
                if (38 == d || 63 == d)
                    if (d = a.charCodeAt(c + 6), !d || 61 == d || 38 == d || 35 == d) break a;
                c += 7
            }
            c = -1
        }
        if (0 > c) return null;
        d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        c += 7;
        return decodeURIComponent(a.substr(c, d - c).replace(/\+/g, " "))
    };

    function tc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Za(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function uc(a) {
        return tc(a.top) ? a.top : null
    }

    function vc(a, b) {
        var c = wc("SCRIPT", a);
        c.src = dc(b);
        var d;
        b = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
        var e = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, "script[nonce]");
        (d = e ? e.nonce || e.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function xc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function yc(a, b) {
        if (!zc() && !Ac()) {
            var c = Math.random();
            if (c < b) return c = Bc(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Bc() {
        if (!n.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            n.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Cc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Dc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Ac = fc(function() {
        return Ua(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ec) || 1E-4 > Math.random()
    });

    function Fc(a, b) {
        var c = -1;
        try {
            a && (c = parseInt(a.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function Gc(a, b) {
        var c = Ac() ? null : Math.floor(1E3 * Bc());
        var d;
        if (d = null != c && a) a: {
            var e = String(c);
            try {
                if (a) {
                    a.setItem(b, e);
                    d = e;
                    break a
                }
            } catch (f) {}
            d = null
        }
        return d ? c : null
    }
    var zc = fc(function() {
        return Ec("MSIE")
    });

    function Ec(a) {
        return -1 != Ma().indexOf(a)
    }
    var Hc = /^([0-9.]+)px$/,
        Ic = /^(-?[0-9.]{1,30})$/;

    function Jc(a) {
        var b = void 0 === b ? null : b;
        if (!Ic.test(a)) return b;
        a = Number(a);
        return isNaN(a) ? b : a
    }

    function H(a) {
        return (a = Hc.exec(a)) ? +a[1] : null
    }

    function Kc(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var Lc = fc(function() {
        return mc() ? 2 : nc() ? 1 : 0
    });

    function Mc(a) {
        Cc({
            display: "none"
        }, function(b, c) {
            a.style.setProperty(c, b, "important")
        })
    }
    var Nc = [];

    function Oc() {
        var a = Nc;
        Nc = [];
        a = t(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function Pc(a, b) {
        0 != a.length && b.head && a.forEach(function(c) {
            if (c && c && b.head) {
                var d = wc("META");
                b.head.appendChild(d);
                d.httpEquiv = "origin-trial";
                d.content = c
            }
        })
    }

    function Qc(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function Rc(a) {
        var b = Sc;
        "complete" === b.readyState || "interactive" === b.readyState ? (Nc.push(a), 1 == Nc.length && (n.Promise ? n.Promise.resolve().then(Oc) : window.setImmediate ? setImmediate(Oc) : setTimeout(Oc, 0))) : b.addEventListener("DOMContentLoaded", a)
    }

    function wc(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var Tc = null;
    var Sc = document,
        I = window;
    var Uc = null;

    function Vc(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        v.google_logging_queue || (c = !0, v.google_logging_queue = []);
        v.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == Uc) {
                Uc = !1;
                try {
                    var d = uc(v);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (Uc = !0);
                    v.localStorage.getItem("google_logging") && (Uc = !0)
                } catch (e) {}
            }
            a = Uc
        }
        a && (d = v.document, a = new Ib(Jb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = Ub(a instanceof Ib && a.constructor === Ib && a.h === Kb ? a.i : "type_error:Const"), vc(d, a))
    };

    function Wc(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function Xc(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Yc = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function Zc(a, b) {
        this.h = a;
        this.i = b
    }

    function $c(a, b, c) {
        this.url = a;
        this.ba = b;
        this.Ha = !!c;
        this.depth = null
    };

    function ad(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = wc("IMG", a.document);
        c.src = b;
        a.google_image_requests.push(c)
    }

    function bd(a, b) {
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        Cc(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        cd(c)
    }

    function cd(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : ad(b, a)
    };

    function dd() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function ed(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function fd(a, b, c, d, e) {
        var f = [];
        Cc(a, function(g, h) {
            (g = gd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function gd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(gd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(fd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function hd(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = id(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(m, q) {
            return m - q
        });
        b = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = fd(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function id(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function jd() {
        this.h = Math.random()
    }

    function kd() {
        var a = ld,
            b = v.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function md(a, b, c, d, e) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof dd) var f = c;
            else f = new dd, Cc(c, function(h, k) {
                var l = f,
                    m = l.l++;
                h = ed(k, h);
                l.h.push(m);
                l.i[m] = h
            });
            var g = hd(f, "/pagead/gen_204?id=" + b + "&");
            g && ad(v, g)
        } catch (h) {}
    };
    var nd = null;

    function od() {
        if (null === nd) {
            nd = "";
            try {
                var a = "";
                try {
                    a = v.top.location.hash
                } catch (c) {
                    a = v.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    nd = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return nd
    };

    function pd() {
        var a = void 0 === a ? v : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function qd() {
        var a = void 0 === a ? v : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function rd(a, b) {
        var c = qd() || pd();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var sd = v.performance,
        td = !!(sd && sd.mark && sd.measure && sd.clearMarks),
        ud = fc(function() {
            var a;
            if (a = td) a = od(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function vd() {
        this.events = [];
        this.i = v || v;
        var a = null;
        v && (v.google_js_reporting_queue = v.google_js_reporting_queue || [], this.events = v.google_js_reporting_queue, a = v.google_measure_js_timing);
        this.h = ud() || (null != a ? a : 1 > Math.random())
    }

    function wd(a) {
        a && sd && ud() && (sd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), sd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    vd.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new rd(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        sd && ud() && sd.mark(b);
        return a
    };
    vd.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (qd() || pd()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            sd && ud() && sd.mark(b);
            !this.h || 2048 < this.events.length || this.events.push(a)
        }
    };

    function xd() {
        var a = yd;
        this.m = ld;
        this.i = null;
        this.l = this.G;
        this.h = void 0 === a ? null : a;
        this.j = !1
    }
    aa = xd.prototype;
    aa.Pa = function(a) {
        this.l = a
    };
    aa.Oa = function(a) {
        this.i = a
    };
    aa.Qa = function(a) {
        this.j = a
    };
    aa.ma = function(a, b, c) {
        try {
            if (this.h && this.h.h) {
                var d = this.h.start(a.toString(), 3);
                var e = b();
                this.h.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                wd(d), b = this.l(a, new Wc(h, {
                    message: zd(h)
                }), void 0, c)
            } catch (k) {
                this.G(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    aa.Ka = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = ta.apply(0, arguments);
            return e.ma(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };
    aa.G = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new dd;
            f.h.push(1);
            f.i[1] = ed("context", a);
            Xc(b) || (b = new Wc(b, {
                message: zd(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = ed("msg", g)
            }
            var h = b.meta || {};
            if (this.i) try {
                this.i(h)
            } catch (pc) {}
            if (d) try {
                d(h)
            } catch (pc) {}
            b = [h];
            f.h.push(3);
            f.i[3] = b;
            d = v;
            b = [];
            g = null;
            do {
                var k = d;
                if (tc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new $c(l || "", k));
                try {
                    d = k.parent
                } catch (pc) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = v;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var q = b[m];
                    q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.Ha = !0)
                }
            var r = new $c(v.location.href, v, !1);
            k = null;
            var y = b.length - 1;
            for (q = y; 0 <= q; --q) {
                var F = b[q];
                !k && Yc.test(F.url) && (k = F);
                if (F.url && !F.Ha) {
                    r = F;
                    break
                }
            }
            F = null;
            var z = b.length && b[y].url;
            0 != r.depth && z && (F = b[y]);
            var E = new Zc(r, F);
            if (E.i) {
                var P = E.i.url || "";
                f.h.push(4);
                f.i[4] = ed("top", P)
            }
            var gb = {
                url: E.h.url || ""
            };
            if (E.h.url) {
                var qc = E.h.url.match(oc),
                    Ef = qc[1],
                    Ff = qc[3],
                    Gf = qc[4];
                r = "";
                Ef && (r += Ef + ":");
                Ff && (r += "//", r += Ff, Gf && (r += ":" + Gf));
                var Hf = r
            } else Hf = "";
            gb = [gb, {
                url: Hf
            }];
            f.h.push(5);
            f.i[5] = gb;
            md(this.m, e, f, this.j, c)
        } catch (pc) {
            try {
                md(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: zd(pc),
                    url: E && E.h.url
                }, this.j, c)
            } catch (Eo) {}
        }
        return !0
    };

    function zd(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    };

    function J(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, J) : this.stack = Error().stack || ""
    }
    u(J, Error);

    function Ad(a) {
        return null !== a && void 0 !== a
    }

    function Bd(a, b) {
        if (!b(a)) throw Error(String(a));
    };

    function Cd(a) {
        return "string" === typeof a
    }

    function Dd(a) {
        return void 0 === a
    };

    function Ed(a) {
        x.call(this, a, -1, Fd)
    }
    u(Ed, x);
    var Fd = [2, 8],
        Gd = [3, 4, 5],
        Hd = [6, 7];
    var Id;
    Id = {
        tb: 0,
        Ua: 3,
        Va: 4,
        Wa: 5
    };
    var Jd = Id.Ua,
        Kd = Id.Va,
        Ld = Id.Wa;

    function Md(a) {
        return null != a ? !a : a
    }

    function Nd(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Od(a, b) {
        var c = G(a, Ed, 2);
        if (!c.length) return Pd(a, b);
        a = C(a, 1, 0);
        if (1 === a) return Md(Od(c[0], b));
        c = Ta(c, function(d) {
            return function() {
                return Od(d, b)
            }
        });
        switch (a) {
            case 2:
                return Nd(c, !1);
            case 3:
                return Nd(c, !0)
        }
    }

    function Pd(a, b) {
        var c = wb(a, Gd);
        a: {
            switch (c) {
                case Jd:
                    var d = Db(a, 3, Gd);
                    break a;
                case Kd:
                    d = Db(a, 4, Gd);
                    break a;
                case Ld:
                    d = Db(a, 5, Gd);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, ma(pb(a, 8)))
            } catch (f) {
                return
            }
            b = C(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = Cb(a, Bb(a, Hd, 7), void 0);
            else a: {
                switch (c) {
                    case Kd:
                        a = sb(a, Bb(a, Hd, 6), void 0);
                        break a;
                    case Ld:
                        a = Cb(a, Bb(a, Hd, 7), void 0);
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === Ka(String(e),
                    a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return Cd(a) && Cd(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === Ka(String(e), a);
                    case 11:
                        return null != e && 1 === Ka(String(e), a)
                }
            }
        }
    }

    function Qd(a, b) {
        return !a || !(!b || !Od(a, b))
    };

    function Rd(a) {
        x.call(this, a, -1, Sd)
    }
    u(Rd, x);
    var Sd = [4];

    function Td(a) {
        x.call(this, a)
    }
    u(Td, x);

    function Ud(a) {
        x.call(this, a, -1, Vd)
    }
    u(Ud, x);
    var Vd = [5],
        Wd = [1, 2, 3, 6, 7];

    function Xd(a) {
        a.Na.apply(a, ma(ta.apply(1, arguments).map(function(b) {
            return {
                Ta: 4,
                message: b
            }
        })))
    }

    function Yd(a) {
        a.Na.apply(a, ma(ta.apply(1, arguments).map(function(b) {
            return {
                Ta: 7,
                message: b
            }
        })))
    };

    function Zd(a) {
        return function() {
            var b = ta.apply(0, arguments);
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    var $d = Zd(function(a) {
        var b = [],
            c = {};
        a = t(a);
        for (var d = a.next(); !d.done; c = {
                ca: c.ca
            }, d = a.next()) c.ca = d.value, Zd(function(e) {
            return function() {
                b.push('[{"' + e.ca.Ta + '":' + Ab(e.ca.message) + "}]")
            }
        }(c))();
        return "[[" + b.join(",") + "]]"
    });

    function ae(a, b) {
        if (n.globalThis.fetch) n.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function be(a) {
        var b = void 0 === b ? ae : b;
        this.l = void 0 === a ? 1E3 : a;
        this.j = b;
        this.i = [];
        this.h = null
    }
    be.prototype.Na = function() {
        var a = ta.apply(0, arguments),
            b = this;
        Zd(function() {
            b.i.push.apply(b.i, ma(a));
            var c = Zd(function() {
                var d = $d(b.i);
                b.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                b.i = [];
                b.h = null
            });
            100 <= b.i.length ? (null !== b.h && clearTimeout(b.h), b.h = setTimeout(c, 0)) : null === b.h && (b.h = setTimeout(c, b.l))
        })()
    };

    function ce(a) {
        x.call(this, a, -1, de)
    }
    u(ce, x);

    function ee(a, b) {
        var c;
        a.h || (a.h = {});
        var d = b ? b.i : b;
        a.h[1] = b;
        return B(a, 1, d, void 0 === c ? !1 : c)
    }

    function fe(a, b) {
        return yb(a, 2, b)
    }

    function ge(a, b) {
        return tb(a, 4, b)
    }

    function he(a, b) {
        return yb(a, 5, b)
    }

    function ie(a, b) {
        return ub(a, 6, b)
    }

    function je(a) {
        x.call(this, a)
    }
    u(je, x);
    je.prototype.T = function() {
        return C(this, 1, 0)
    };

    function ke(a, b) {
        return ub(a, 1, b)
    }

    function le(a, b) {
        return ub(a, 2, b)
    }

    function me(a) {
        x.call(this, a)
    }
    u(me, x);
    var de = [2, 4, 5],
        ne = [1, 2];

    function oe(a) {
        x.call(this, a, -1, pe)
    }
    u(oe, x);

    function qe(a) {
        x.call(this, a, -1, re)
    }
    u(qe, x);
    var pe = [2, 3],
        re = [5],
        se = [1, 2, 3, 4];

    function te(a) {
        x.call(this, a)
    }
    u(te, x);
    te.prototype.getTagSessionCorrelator = function() {
        return C(this, 2, 0)
    };

    function ue(a) {
        var b = new te;
        return xb(b, 4, ve, a)
    }
    var ve = [4, 5, 7];

    function we(a, b, c) {
        var d = void 0 === d ? new be(b) : d;
        this.i = a;
        this.m = c;
        this.j = d;
        this.h = [];
        this.l = 0 < this.i && Bc() < 1 / this.i
    }

    function xe(a, b, c, d, e, f) {
        var g = le(ke(new je, b), c);
        b = ie(fe(ee(he(ge(new ce, d), e), g), a.h), f);
        b = ue(b);
        a.l && Xd(a.j, ye(a, b));
        if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
                return h.T() === g.T() && C(h, 2, 0) === c
            })) a.h.push(g), 100 < a.h.length && a.h.shift()
    }

    function ze(a, b, c, d) {
        if (a.m) {
            var e = new oe;
            b = yb(e, 2, b);
            c = yb(b, 3, c);
            d && ub(c, 1, d);
            d = new te;
            d = xb(d, 7, ve, c);
            a.l && Xd(a.j, ye(a, d))
        }
    }

    function ye(a, b) {
        b = ub(b, 1, Date.now());
        var c = Qc(window);
        b = ub(b, 2, c);
        return ub(b, 6, a.i)
    };

    function K(a) {
        var b = "qa";
        if (a.qa && a.hasOwnProperty(b)) return a.qa;
        b = new a;
        return a.qa = b
    };

    function Ae() {
        var a = {};
        this.h = (a[Jd] = {}, a[Kd] = {}, a[Ld] = {}, a)
    };
    var Be = /^true$/.test("false");

    function Ce(a, b) {
        switch (b) {
            case 1:
                return Db(a, 1, Wd);
            case 2:
                return Db(a, 2, Wd);
            case 3:
                return Db(a, 3, Wd);
            case 6:
                return Db(a, 6, Wd);
            default:
                return null
        }
    }

    function De(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return rb(a, 1);
            case 7:
                return Cb(a, 3);
            case 2:
                return sb(a, 2);
            case 3:
                return Cb(a, 3);
            case 6:
                return pb(a, 4);
            default:
                return null
        }
    }
    var Ee = fc(function() {
        if (!Be) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function Fe(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        K(Ge).j[e] = null != (g = null == (f = K(Ge).j[e]) ? void 0 : f.add(b)) ? g : (new n.Set).add(b);
        e = Ee();
        if (null != e[b]) return e[b];
        b = He(d)[b];
        if (!b) return c;
        b = new Ud(b);
        b = Ie(b);
        a = De(b, a);
        return null != a ? a : c
    }

    function Ie(a) {
        var b = K(Ae).h;
        if (b) {
            var c = Wa(G(a, Td, 5), function(d) {
                return Qd(D(d, Ed, 1), b)
            });
            if (c) return D(c, Rd, 2)
        }
        return D(a, Rd, 4)
    }

    function Ge() {
        this.i = {};
        this.l = [];
        this.j = {};
        this.h = new n.Map
    }

    function Je(a, b, c) {
        return !!Fe(1, a, void 0 === b ? !1 : b, c)
    }

    function Ke(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Fe(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Le(a, b, c) {
        return Fe(3, a, void 0 === b ? "" : b, c)
    }

    function Me(a, b, c) {
        b = void 0 === b ? [] : b;
        return Fe(6, a, b, c)
    }

    function He(a) {
        return K(Ge).i[a] || (K(Ge).i[a] = {})
    }

    function Ne(a, b) {
        var c = He(b);
        Cc(a, function(d, e) {
            return c[e] = d
        })
    }

    function Oe(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        Ra(b, function(h) {
            var k = He(h);
            Ra(a, function(l) {
                var m = wb(l, Wd),
                    q = Ce(l, m);
                if (q) {
                    var r, y, F;
                    var z = null != (F = null == (r = K(Ge).h.get(h)) ? void 0 : null == (y = r.get(q)) ? void 0 : y.slice(0)) ? F : [];
                    a: {
                        r = new qe;
                        switch (m) {
                            case 1:
                                vb(r, 1, se, q);
                                break;
                            case 2:
                                vb(r, 2, se, q);
                                break;
                            case 3:
                                vb(r, 3, se, q);
                                break;
                            case 6:
                                vb(r, 4, se, q);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        tb(r, 5, z);m = r
                    }
                    if (z = m) {
                        var E;
                        z = !(null == (E = K(Ge).j[h]) || !E.has(q))
                    }
                    z && f.push(m);
                    if (E = m) {
                        var P;
                        E = !(null == (P = K(Ge).h.get(h)) ||
                            !P.has(q))
                    }
                    E && g.push(m);
                    e || (P = K(Ge), P.h.has(h) || P.h.set(h, new n.Map), P.h.get(h).has(q) || P.h.get(h).set(q, []), d && P.h.get(h).get(q).push(d));
                    k[q] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && ze(c, f, g, null != d ? d : void 0)
    }

    function Pe(a, b) {
        var c = He(b);
        Ra(a, function(d) {
            var e = new Ud(d),
                f = wb(e, Wd);
            (e = Ce(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Qe() {
        return Ta(p(Object, "keys").call(Object, K(Ge).i), function(a) {
            return Number(a)
        })
    }

    function Re(a) {
        Xa(K(Ge).l, a) || Ne(He(4), a)
    };

    function L(a) {
        this.methodName = a
    }
    var Se = new L(1),
        Te = new L(16),
        Ue = new L(15),
        Ve = new L(2),
        We = new L(3),
        Xe = new L(4),
        Ye = new L(5),
        Ze = new L(6),
        $e = new L(7),
        af = new L(8),
        bf = new L(9),
        cf = new L(10),
        df = new L(11),
        ef = new L(12),
        ff = new L(13),
        gf = new L(14);

    function M(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function hf(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function jf(a) {
        M(Ye, Je, a);
        M(Ze, Ke, a);
        M($e, Le, a);
        M(af, Me, a);
        M(ff, Pe, a);
        M(Ue, Re, a)
    }

    function kf(a) {
        M(Xe, function(b) {
            K(Ae).h = b
        }, a);
        M(bf, function(b, c) {
            var d = K(Ae);
            d.h[Jd][b] || (d.h[Jd][b] = c)
        }, a);
        M(cf, function(b, c) {
            var d = K(Ae);
            d.h[Kd][b] || (d.h[Kd][b] = c)
        }, a);
        M(df, function(b, c) {
            var d = K(Ae);
            d.h[Ld][b] || (d.h[Ld][b] = c)
        }, a);
        M(gf, function(b) {
            for (var c = K(Ae), d = t([Jd, Kd, Ld]), e = d.next(); !e.done; e = d.next()) e = e.value, p(Object, "assign").call(Object, c.h[e], b[e])
        }, a)
    }

    function lf(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function mf() {
        this.l = function() {};
        this.i = function() {};
        this.j = function() {};
        this.h = function() {
            return []
        }
    }

    function nf(a, b, c) {
        a.l = hf(Se, b, function() {});
        a.j = function(d) {
            hf(Ve, b, function() {
                return []
            })(d, c)
        };
        a.h = function() {
            return hf(We, b, function() {
                return []
            })(c)
        };
        a.i = function(d) {
            hf(Te, b, function() {})(d, c)
        }
    };
    var ld, of , yd = new vd;

    function pf(a) {
        null != a && (v.google_measure_js_timing = a);
        v.google_measure_js_timing || (a = yd, a.h = !1, a.events != a.i.google_js_reporting_queue && (ud() && Ra(a.events, wd), a.events.length = 0))
    }(function(a) {
        ld = a || new jd;
        "number" !== typeof v.google_srt && (v.google_srt = Math.random());
        kd(); of = new xd; of .Qa(!0);
        "complete" == v.document.readyState ? pf() : yd.h && hc(v, "load", function() {
            pf()
        })
    })();

    function qf(a, b, c) {
        return of.ma(a, b, c)
    }

    function rf(a, b) {
        return of.Ka(a, b, void 0, void 0)
    }

    function sf(a, b, c) {
        var d = K(mf).h();
        !b.eid && d.length && (b.eid = d.toString());
        md(ld, a, b, !0, c)
    }

    function tf(a) {
        return function(b) {
            null != b || (b = "unnamed rejection"); of .G(a, b instanceof Error ? b : Error(b), void 0, void 0)
        }
    }

    function uf(a, b, c, d) {
        var e;
        Xc(b) ? e = b.msg || zd(b.error) : e = zd(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof Wc ? b.error : b, c.pbr || (c.pbr = !0, of .G(a, b, .1, d, "puberror")), !1) : of .G(a, b, c, d)
    };
    var vf = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function wf() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new xf;
        this.sideRailProcessedFixedElements = new n.Set;
        this.sideRailAvailableSpace = new n.Map
    }

    function yf(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new n.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new n.Map)) : a.google_reactive_ads_global_state = new wf;
        return a.google_reactive_ads_global_state
    }

    function xf() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function zf(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Af(a) {
        return zf(a).clientWidth
    };
    $a || !w("Safari") || Oa();

    function Bf(a) {
        a = void 0 === a ? v : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Cf(a) {
        return (a = a || Bf()) ? tc(a.master) ? a.master : null : null
    };

    function Df(a) {
        var b = ta.apply(1, arguments);
        if (0 === b.length) return bc(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return bc(c.join(""))
    };

    function If(a) {
        var b = void 0 === b ? 1 : b;
        a = Cf(Bf(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function Jf(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    var Kf = !!window.google_async_iframe_id,
        Lf = Kf && window.parent || window;

    function Mf() {
        if (Kf && !tc(Lf)) {
            var a = "." + Sc.domain;
            try {
                for (; 2 < a.split(".").length && !tc(Lf);) Sc.domain = a = a.substr(a.indexOf(".") + 1), Lf = window.parent
            } catch (b) {}
            tc(Lf) || (Lf = window)
        }
        Lf !== window && .01 > Math.random() && bd({
            stack: Error().stack,
            aswift: window.google_async_iframe_id
        }, "badpubwin");
        return Lf
    }

    function Nf() {
        var a = void 0 === a ? I : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function Of(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function Pf() {
        this.i = new Qf(this);
        this.h = 0
    }
    Pf.prototype.resolve = function(a) {
        Rf(this);
        this.h = 1;
        this.l = a;
        Sf(this.i)
    };
    Pf.prototype.reject = function(a) {
        Rf(this);
        this.h = 2;
        this.j = a;
        Sf(this.i)
    };

    function Rf(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }

    function Qf(a) {
        this.h = a
    }
    Qf.prototype.then = function(a, b) {
        if (this.i) throw Error("Then functions already set.");
        this.i = a;
        this.j = b;
        Sf(this)
    };

    function Sf(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Tf(a) {
        this.h = a.slice(0)
    }
    Tf.prototype.apply = function(a) {
        return new Tf(a(this.h.slice(0)))
    };
    Tf.prototype.get = function(a) {
        return this.h[a]
    };
    Tf.prototype.add = function(a) {
        var b = this.h.slice(0);
        b.push(a);
        return new Tf(b)
    };

    function Uf(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function Vf() {
        this.h = {};
        this.i = {}
    }
    Vf.prototype.set = function(a, b) {
        var c = Wf(a);
        this.h[c] = b;
        this.i[c] = a
    };
    Vf.prototype.get = function(a, b) {
        a = Wf(a);
        return void 0 !== this.h[a] ? this.h[a] : b
    };
    Vf.prototype.clear = function() {
        this.h = {};
        this.i = {}
    };

    function Wf(a) {
        return a instanceof Object ? String(za(a)) : a + ""
    };

    function Xf(a, b) {
        this.h = a;
        this.i = b
    }

    function Yf(a) {
        return null != a.h ? a.h.value : null
    }

    function Zf(a, b) {
        null != a.h && b(a.h.value);
        return a
    }
    Xf.prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof Xf ? a : $f(a)) : this
    };

    function ag(a, b) {
        null != a.h || b(a.i);
        return a
    }

    function $f(a) {
        return new Xf({
            value: a
        }, null)
    }

    function bg(a) {
        return new Xf(null, a)
    }

    function cg(a) {
        try {
            return $f(a())
        } catch (b) {
            return bg(b)
        }
    };

    function dg(a) {
        this.h = new Vf;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    dg.prototype.add = function(a) {
        this.h.set(a, !0)
    };
    dg.prototype.contains = function(a) {
        return void 0 !== this.h.h[Wf(a)]
    };

    function eg() {
        this.h = new Vf
    }
    eg.prototype.set = function(a, b) {
        var c = this.h.get(a);
        c || (c = new dg, this.h.set(a, c));
        c.add(b)
    };

    function fg(a) {
        x.call(this, a, -1, gg)
    }
    u(fg, x);
    fg.prototype.getId = function() {
        return A(this, 3)
    };
    var gg = [4];

    function hg(a) {
        var b = void 0 === a.Da ? void 0 : a.Da,
            c = void 0 === a.cb ? void 0 : a.cb,
            d = void 0 === a.Ma ? void 0 : a.Ma;
        this.h = void 0 === a.Ya ? void 0 : a.Ya;
        this.l = new Tf(b || []);
        this.j = d;
        this.i = c
    };

    function ig(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({
            V: "a",
            $: jg(c)
        });
        null != a.h && b.push({
            V: "as",
            $: a.h
        });
        null != a.i && b.push({
            V: "i",
            $: String(a.i)
        });
        null != a.j && b.push({
            V: "rp",
            $: String(a.j)
        });
        b.sort(function(d, e) {
            return d.V.localeCompare(e.V)
        });
        b.unshift({
            V: "t",
            $: "aa"
        });
        return b
    }

    function jg(a) {
        a = a.h.slice(0).map(kg);
        a = JSON.stringify(a);
        return Dc(a)
    }

    function kg(a) {
        var b = {};
        null != A(a, 7) && (b.q = A(a, 7));
        null != A(a, 2) && (b.o = A(a, 2));
        null != A(a, 5) && (b.p = A(a, 5));
        return b
    };

    function lg(a) {
        x.call(this, a)
    }
    u(lg, x);
    lg.prototype.setLocation = function(a) {
        return B(this, 1, a)
    };

    function mg(a, b) {
        this.Fa = a;
        this.La = b
    }

    function ng(a) {
        var b = [].slice.call(arguments).filter(ec(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Fa || []);
            d = p(Object, "assign").call(Object, d, e.La)
        });
        return new mg(c, d)
    }

    function og(a) {
        switch (a) {
            case 1:
                return new mg(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new mg(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new mg(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new mg(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function pg(a) {
        if (null == a) a = null;
        else {
            var b = ig(a);
            a = [];
            b = t(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.$);
                a.push(c.V + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new mg(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var qg = {},
        rg = new mg(["google-auto-placed"], (qg.google_reactive_ad_format = 40, qg.google_tag_origin = "qs", qg));

    function sg(a) {
        x.call(this, a)
    }
    u(sg, x);

    function tg(a) {
        x.call(this, a)
    }
    u(tg, x);
    tg.prototype.getName = function() {
        return A(this, 4)
    };

    function ug(a) {
        x.call(this, a)
    }
    u(ug, x);

    function vg(a) {
        x.call(this, a)
    }
    u(vg, x);

    function wg(a) {
        x.call(this, a)
    }
    u(wg, x);
    var xg = [1, 2, 3];

    function yg(a) {
        x.call(this, a)
    }
    u(yg, x);

    function zg(a) {
        x.call(this, a, -1, Ag)
    }
    u(zg, x);
    var Ag = [6, 7, 9, 10, 11];

    function Bg(a) {
        x.call(this, a, -1, Cg)
    }
    u(Bg, x);

    function Dg(a) {
        x.call(this, a)
    }
    u(Dg, x);

    function Eg(a) {
        x.call(this, a)
    }
    u(Eg, x);
    var Cg = [1],
        Fg = [1, 2];

    function Gg(a) {
        x.call(this, a, -1, Hg)
    }
    u(Gg, x);

    function Ig(a) {
        x.call(this, a)
    }
    u(Ig, x);

    function Jg(a) {
        x.call(this, a, -1, Kg)
    }
    u(Jg, x);

    function Lg(a) {
        x.call(this, a)
    }
    u(Lg, x);

    function Mg(a) {
        x.call(this, a)
    }
    u(Mg, x);

    function Ng(a) {
        x.call(this, a)
    }
    u(Ng, x);

    function Og(a) {
        x.call(this, a)
    }
    u(Og, x);
    var Hg = [1, 2, 5, 7],
        Kg = [2, 5, 6, 11];

    function Pg(a) {
        x.call(this, a)
    }
    u(Pg, x);

    function Qg(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function Rg(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Qg(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function N(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function O(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function Sg(a, b) {
        b = void 0 === b ? [] : b;
        this.h = a;
        this.defaultValue = b
    };
    var Tg = new N(1084),
        Ug = new N(1082, !0),
        Vg = new O(62, .001),
        Wg = new O(1130),
        Xg = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        Yg = new O(1114, 1),
        Zg = new O(1110),
        $g = new O(1111),
        ah = new O(1112),
        bh = new O(1113),
        ch = new O(1104),
        dh = new O(1108),
        eh = new O(1106),
        fh = new O(1107),
        gh = new O(1105),
        hh = new O(1115, 1),
        ih = new N(1121),
        jh = new N(316),
        kh = new N(313),
        lh = new N(369),
        mh = new N(1093),
        nh = new O(1098),
        oh = new N(1129),
        ph = new N(1128),
        qh = new N(1026),
        rh = new N(1090),
        sh = new N(1136),
        th = new N(1053, !0),
        uh = new N(1120),
        vh = new N(1100, !0),
        wh = new N(1109, !0),
        xh = new N(1135),
        yh = new O(1046),
        zh = new N(1102, !0),
        Ah = new N(218),
        Bh = new N(216),
        Ch = new N(217),
        Dh = new N(1125),
        Eh = new N(227),
        Fh = new N(208),
        Gh = new N(282),
        Hh = new N(1086),
        Ih = new O(1079, 5),
        Jh = new Sg(1939),
        Kh = new Sg(1934, ["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
            "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"
        ]),
        Lh = new N(1959),
        Mh = new N(203),
        Nh = new N(84),
        Oh = new N(1928),
        Ph = new N(1941),
        Qh = new N(370946349),
        Rh = new N(392736476),
        Sh = new O(406149835),
        Th = new Sg(1932, ["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        Uh = new O(1935);

    function Vh() {
        var a = {};
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    }

    function Q(a) {
        return K(Vh).i(a.h, a.defaultValue)
    }

    function R(a) {
        return K(Vh).j(a.h, a.defaultValue)
    }

    function Wh() {
        return K(Vh).l(Xg.h, Xg.defaultValue)
    };

    function Xh(a, b, c) {
        function d(f) {
            f = Yh(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Yh(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Zh(a.previousSibling, e),
                    ha: function(f) {
                        return Zh(f.previousSibling, e)
                    },
                    la: 0
                };
            case 2:
                return {
                    init: Zh(a.lastChild, e),
                    ha: function(f) {
                        return Zh(f.previousSibling, e)
                    },
                    la: 0
                };
            case 3:
                return {
                    init: Zh(a.nextSibling, d),
                    ha: function(f) {
                        return Zh(f.nextSibling, d)
                    },
                    la: 3
                };
            case 1:
                return {
                    init: Zh(a.firstChild, d),
                    ha: function(f) {
                        return Zh(f.nextSibling, d)
                    },
                    la: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Yh(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Zh(a, b) {
        return a && b(a) ? a : null
    };
    var $h = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function ai(a, b) {
        do {
            var c = xc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function bi(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = H(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function ci(a, b) {
        return !((Ic.test(b.google_ad_width) || Hc.test(a.style.width)) && (Ic.test(b.google_ad_height) || Hc.test(a.style.height)))
    }

    function di(a, b) {
        return (a = ei(a, b)) ? a.y : 0
    }

    function ei(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function fi(a) {
        var b = 0,
            c;
        for (c in $h) - 1 != a.indexOf(c) && (b |= $h[c]);
        return b
    }

    function gi(a, b, c, d, e) {
        if (a !== a.top) return uc(a) ? 3 : 16;
        if (!(488 > Af(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = Af(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = Af(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = xc(b, a)) && (e = H(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function hi(a, b, c, d) {
        var e = gi(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || ai(c, b) ? (b = Af(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function ii(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function ji(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = xc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function ki(a, b, c) {
        a = ei(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function li(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = xc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            ii(b, c, "0px");
            b.style.width = Af(a) + "px";
            if (0 !== ki(a, b, c)) {
                ii(b, c, "0px");
                var d = ki(a, b, c);
                ii(b, c, -1 * d + "px");
                a = ki(a, b, c);
                0 !== a && a !== d && ii(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };

    function S(a, b) {
        this.l = a;
        this.j = b
    }
    S.prototype.minWidth = function() {
        return this.l
    };
    S.prototype.height = function() {
        return this.j
    };
    S.prototype.h = function(a) {
        return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a))
    };
    S.prototype.i = function() {};

    function mi(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = xc(a, b)) && e[c] && d(e[c]) || null
    }

    function ni(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function oi(a, b, c, d) {
        var e = a && pi(c, b),
            f = qi(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function ri(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function pi(a, b) {
        return di(a, b) < zf(b).clientHeight - 100
    }

    function si(a, b) {
        var c = mi(b, a, "height", H);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = mi(b, a, "height", H);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && H(b.style.height)) && (c = Math.min(c, d)), (d = mi(b, a, "maxHeight", H)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function qi(a, b) {
        var c = 0 == Jf(a);
        return b && c ? Math.max(250, 2 * zf(a).clientHeight / 3) : 250
    };
    var T = {},
        ti = (T.google_ad_channel = !0, T.google_ad_client = !0, T.google_ad_host = !0, T.google_ad_host_channel = !0, T.google_adtest = !0, T.google_tag_for_child_directed_treatment = !0, T.google_tag_for_under_age_of_consent = !0, T.google_tag_partner = !0, T.google_restrict_data_processing = !0, T.google_page_url = !0, T.google_debug_params = !0, T.google_adbreak_test = !0, T.google_ad_frequency_hint = !0, T.google_admob_interstitial_slot = !0, T.google_admob_rewarded_slot = !0, T.google_max_ad_content_rating = !0, T),
        ui = RegExp("(^| )adsbygoogle($| )");

    function vi(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = jc(d.Cb);
            a[e] = d.value
        }
    };

    function wi(a, b, c, d) {
        this.l = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function xi(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.l)
        } catch (g) {}
        if (!c.length) return [];
        b = Ya(c);
        b = yi(a, b);
        "number" === typeof a.i && (c = a.i, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.j) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = zi(b[d]),
                    f = a.j;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    wi.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.l,
            occurrenceIndex: this.i,
            paragraphIndex: this.j,
            ignoreMode: this.h
        })
    };

    function yi(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }

    function zi(a) {
        var b = [];
        Uf(a.getElementsByTagName("p"), function(c) {
            100 <= Ai(c) && b.push(c)
        });
        return b
    }

    function Ai(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Uf(a.childNodes, function(c) {
            b += Ai(c)
        });
        return b
    }

    function Bi(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function Ci(a) {
        if (!a) return null;
        var b = A(a, 7);
        if (A(a, 1) || a.getId() || 0 < pb(a, 4).length) {
            var c = a.getId();
            b = pb(a, 4);
            var d = A(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Bi(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Bi(b[c]);
            a = (b = e) ? new wi(b, A(a, 2), A(a, 5), Di(A(a, 6))) : null
        } else a = b ? new wi(b, A(a, 2), A(a, 5), Di(A(a, 6))) : null;
        return a
    }
    var Ei = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Di(a) {
        return null == a ? a : Ei[a]
    }
    var Fi = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Gi(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Hi(a) {
        a = Gi(a);
        return a.optimization = a.optimization || {}
    };

    function Ii(a) {
        switch (A(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = D(a, fg, 1), null == b ? b = null : (a = A(a, 2), b = null == a ? null : new hg({
                    Da: [b],
                    Ma: a
                }));
                return null != b ? $f(b) : bg(Error("Missing dimension when creating placement id"));
            case 3:
                return bg(Error("Missing dimension when creating placement id"));
            default:
                return bg(Error("Invalid type: " + A(a, 8)))
        }
    };

    function Ji(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null === a || void 0 === a ? 0 : a.apiReady) ? a : void 0
    };

    function Ki(a) {
        var b = Ji(a);
        return b ? Sa(Ta(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    }

    function Li(a, b) {
        return Ya(a.document.querySelectorAll(b))
    }

    function Mi(a) {
        var b = [];
        a = t(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };

    function Ni(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function Oi(a, b) {
        this.i = a;
        this.h = b
    }

    function Pi(a, b) {
        var c = new eg,
            d = new dg;
        b.forEach(function(e) {
            if (Eb(e, ug, 1, xg)) {
                e = Eb(e, ug, 1, xg);
                if (D(e, sg, 1) && D(D(e, sg, 1), fg, 1) && D(e, sg, 2) && D(D(e, sg, 2), fg, 1)) {
                    var f = Qi(a, D(D(e, sg, 1), fg, 1)),
                        g = Qi(a, D(D(e, sg, 2), fg, 1));
                    if (f && g)
                        for (f = t(Ni({
                                anchor: f,
                                position: A(D(e, sg, 1), 2)
                            }, {
                                anchor: g,
                                position: A(D(e, sg, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(za(g.anchor), g.position)
                }
                D(e, sg, 3) && D(D(e, sg, 3), fg, 1) && (f = Qi(a, D(D(e, sg, 3), fg, 1))) && c.set(za(f), A(D(e, sg, 3), 2))
            } else Eb(e, vg, 2, xg) ? Ri(a, Eb(e, vg, 2, xg),
                c) : Eb(e, wg, 3, xg) && Si(a, Eb(e, wg, 3, xg), d)
        });
        return new Oi(c, d)
    }

    function Ri(a, b, c) {
        D(b, fg, 1) && (a = Ti(a, D(b, fg, 1))) && a.forEach(function(d) {
            d = za(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function Si(a, b, c) {
        D(b, fg, 1) && (a = Ti(a, D(b, fg, 1))) && a.forEach(function(d) {
            c.add(za(d))
        })
    }

    function Qi(a, b) {
        return (a = Ti(a, b)) && 0 < a.length ? a[0] : null
    }

    function Ti(a, b) {
        return (b = Ci(b)) ? xi(b, a) : null
    };

    function Ui() {
        this.h = new n.Set
    }

    function Vi(a) {
        a = Wi(a);
        return a.has("all") || a.has("after")
    }

    function Xi(a) {
        a = Wi(a);
        return a.has("all") || a.has("before")
    }

    function Yi(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Zi(b)) return !0;
            if (a.h.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(function(d) {
            return a.h.add(d)
        });
        return !1
    }

    function Zi(a) {
        var b = Wi(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }

    function Wi(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new n.Set(a.split("|")) : new n.Set
    };

    function $i(a, b) {
        if (!a) return !1;
        a = xc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function aj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function bj(a) {
        return !!a.nextSibling || !!a.parentNode && bj(a.parentNode)
    };

    function cj(a) {
        var b = {};
        a && pb(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function dj(a, b, c, d, e) {
        this.h = a;
        this.F = b;
        this.j = c;
        this.m = e || null;
        this.u = (this.A = d) ? Pi(a.document, G(d, tg, 5)) : Pi(a.document, []);
        this.D = new Ui;
        this.i = 0;
        this.l = !1
    }

    function ej(a, b) {
        if (a.l) return !0;
        a.l = !0;
        var c = G(a.j, zg, 1);
        a.i = 0;
        var d = cj(a.A);
        var e = a.h;
        try {
            var f = e.localStorage.getItem("google_ama_settings");
            var g = f ? nb(Pg, f ? JSON.parse(f) : null) : null
        } catch (P) {
            g = null
        }
        var h = null !== g && rb(g, 2, !1);
        g = Gi(e);
        h && (g.eatf = !0, Vc(7, [!0, 0, !1]));
        var k = Q(ph) || Q(oh);
        f = Q(oh);
        if (k) {
            b: {
                var l = {
                        bb: !1
                    },
                    m = Li(e, ".google-auto-placed"),
                    q = Li(e, 'ins.adsbygoogle[data-anchor-shown="true"]'),
                    r = Li(e, "ins.adsbygoogle[data-ad-format=autorelaxed]");
                var y = (Ki(e) || Li(e, "div[id^=div-gpt-ad]")).concat(Li(e,
                    "iframe[id^=google_ads_iframe]"));
                var F = Li(e, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                    z = Li(e, "ins.adsbygoogle-ablated-ad-slot"),
                    E = Li(e, "div.googlepublisherpluginad");k = [].concat(Li(e, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), Li(e, "ins.adsbygoogle"));h = [];l = t([
                    [l.wb, m],
                    [l.bb, q],
                    [l.zb, r],
                    [l.xb, y],
                    [l.Ab, F],
                    [l.vb, z],
                    [l.yb, E]
                ]);
                for (m = l.next(); !m.done; m = l.next()) q = t(m.value),
                m = q.next().value,
                q = q.next().value,
                !1 === m ? h = h.concat(q) : k = k.concat(q);k = Mi(k);l = Mi(h);h = k.slice(0);k = t(l);
                for (l = k.next(); !l.done; l = k.next())
                    for (l = l.value, m = 0; m < h.length; m++)(l.contains(h[m]) || h[m].contains(l)) && h.splice(m, 1);e = zf(e).clientHeight;
                for (k =
                    0; k < h.length; k++)
                    if (l = h[k].getBoundingClientRect(), !(0 === l.height && !f || l.top > e)) {
                        e = !0;
                        break b
                    }
                e = !1
            }
            g = e ? g.eatfAbg = !0 : !1
        }
        else g = h;
        if (g) return !0;
        g = new dg([2]);
        for (e = 0; e < c.length; e++) {
            f = a;
            k = c[e];
            h = e;
            l = b;
            if (!D(k, lg, 4) || !g.contains(A(D(k, lg, 4), 1)) || 1 !== A(k, 8) || k && null != A(k, 4) && d[A(D(k, lg, 4), 2)]) f = null;
            else {
                f.i++;
                if (k = fj(f, k, l, d)) l = Gi(f.h), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++, l.placed.push({
                    index: h,
                    element: k.fa
                }), Vc(7, [!1, f.i, !0]);
                f = k
            }
            if (f) return !0
        }
        Vc(7, [!1, a.i, !1]);
        return !1
    }

    function fj(a, b, c, d) {
        if (b && null != A(b, 4) && d[A(D(b, lg, 4), 2)] || 1 != A(b, 8)) return null;
        d = D(b, fg, 1);
        if (!d) return null;
        d = Ci(d);
        if (!d) return null;
        d = xi(d, a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = Fi[A(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = $i(aj(d), f);
                        break a;
                    case 3:
                        f = $i(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = $i(g ? 1 == g.nodeType ? g : aj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !bj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !Qg(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c =
                f)) {
            c = a.u;
            f = A(b, 2);
            g = za(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(za(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(za(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c && (c = Q(xh))) {
            c = a.D;
            f = A(b, 2);
            a: switch (f) {
                case 1:
                    g = Vi(d.previousElementSibling) || Xi(d);
                    break a;
                case 4:
                    g = Vi(d) || Xi(d.nextElementSibling);
                    break a;
                case 2:
                    g = Xi(d.firstElementChild);
                    break a;
                case 3:
                    g = Vi(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " +
                        f);
            }
            c = g || Yi(c, d, f)
        }
        if (c) return null;
        c = D(b, yg, 3);
        f = {};
        c && (f.Sa = A(c, 1), f.Ea = A(c, 2), f.$a = !!qb(c, 3));
        c = D(b, lg, 4) && A(D(b, lg, 4), 2) ? A(D(b, lg, 4), 2) : null;
        c = og(c);
        g = null == A(b, 12) ? null : A(b, 12);
        g = null == g ? null : new mg(null, {
            google_ml_rank: g
        });
        b = gj(a, b);
        b = ng(a.m, c, g, b);
        c = a.h;
        a = a.F;
        var h = c.document,
            k = f.$a || !1;
        g = kc((new lc(h)).h, "DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.ib && vi(k, f.ib);
        h = kc((new lc(h)).h, "INS");
        k = h.style;
        k.display = "block";
        k.margin =
            "auto";
        k.backgroundColor = "transparent";
        f.Sa && (k.marginTop = f.Sa);
        f.Ea && (k.marginBottom = f.Ea);
        f.Xa && vi(k, f.Xa);
        g.appendChild(h);
        f = {
            pa: g,
            fa: h
        };
        f.fa.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Fa) f.pa.className = h.join(" ");
        h = f.fa;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.pa;
                var q = void 0 === q ? 0 : q;
                if (Q(kh)) {
                    q = void 0 === q ? 0 : q;
                    var r = Xh(d, e, q);
                    if (r.init) {
                        var y = r.init;
                        for (d = y; d = r.ha(d);) y = d;
                        var F = {
                            anchor: y,
                            position: r.la
                        }
                    } else F = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = q;
                    Rg(m, F.anchor, F.position)
                } else Rg(m, d, e);
                b: {
                    var z = f.fa;z.dataset.adsbygoogleStatus = "reserved";z.className += " adsbygoogle-noablate";m = {
                        element: z
                    };
                    var E = b && b.La;
                    if (z.hasAttribute("data-pub-vars")) {
                        try {
                            E = JSON.parse(z.getAttribute("data-pub-vars"))
                        } catch (P) {
                            break b
                        }
                        z.removeAttribute("data-pub-vars")
                    }
                    E && (m.params = E);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (P) {
                (z = f.pa) && z.parentNode && (E = z.parentNode, E.removeChild(z), Qg(E) && (E.style.display =
                    E.getAttribute("data-init-display") || "none"));
                z = !1;
                break a
            }
            z = !0
        }
        return z ? f : null
    }

    function gj(a, b) {
        return Yf(ag(Ii(b).map(pg), function(c) {
            Gi(a.h).exception = c
        }))
    };

    function hj(a) {
        if (Q(jh)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? nb(Gg, b ? JSON.parse(b) : null) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function ij(a) {
        x.call(this, a)
    }
    u(ij, x);

    function jj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? cg(function() {
            return nb(ij, c ? JSON.parse(c) : null)
        }) : $f(null)
    };

    function kj() {
        this.S = {}
    }

    function lj() {
        if (mj) return mj;
        var a = Cf() || Mf(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? mj = b : a.google_persistent_state_async = mj = new kj
    }

    function nj(a) {
        return oj[a] || "google_ps_" + a
    }

    function pj(a, b, c) {
        b = nj(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    var mj = null,
        qj = {},
        oj = (qj[8] = "google_prev_ad_formats_by_region", qj[9] = "google_prev_ad_slotnames_by_region", qj);

    function rj(a) {
        this.h = a || {
            cookie: ""
        }
    }
    rj.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Db;
            d = c.Eb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.gb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    rj.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ja(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    rj.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    rj.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ja(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            gb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function sj(a) {
        x.call(this, a)
    }
    u(sj, x);

    function tj(a) {
        var b = new sj;
        return B(b, 5, a)
    };

    function uj() {
        this.u = this.u;
        this.D = this.D
    }
    uj.prototype.u = !1;
    uj.prototype.j = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };

    function vj(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function wj(a, b) {
        b = void 0 === b ? 500 : b;
        uj.call(this);
        this.h = a;
        this.i = null;
        this.m = {};
        this.F = 0;
        this.A = b;
        this.l = null
    }
    u(wj, uj);
    wj.prototype.j = function() {
        this.m = {};
        this.l && (ic(this.h, this.l), delete this.l);
        delete this.m;
        delete this.h;
        delete this.i;
        uj.prototype.j.call(this)
    };

    function xj(a) {
        return "function" === typeof a.h.__tcfapi || null != yj(a)
    }
    wj.prototype.addEventListener = function(a) {
        function b(f, g) {
            clearTimeout(e);
            f ? (c = f, c.internalErrorState = vj(c), g && 0 === c.internalErrorState || (c.tcString = "tcunavailable", g || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        }
        var c = {},
            d = gc(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.A && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.A));
        try {
            zj(this, "addEventListener", b)
        } catch (f) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e),
                e = 0), d()
        }
    };
    wj.prototype.removeEventListener = function(a) {
        a && a.listenerId && zj(this, "removeEventListener", null, a.listenerId)
    };

    function zj(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (yj(a)) {
            Aj(a);
            var e = ++a.F;
            a.m[e] = c;
            a.i && (c = {}, a.i.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function yj(a) {
        if (a.i) return a.i;
        a.i = Kc(a.h, "__tcfapiLocator");
        return a.i
    }

    function Aj(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.m[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, hc(a.h, "message", a.l))
    };

    function Bj(a) {
        var b = a.ba,
            c = a.Ra,
            d = a.Za;
        a = Cj({
            ba: b,
            ka: a.ka,
            ia: void 0 === a.ia ? !1 : a.ia,
            ja: void 0 === a.ja ? !1 : a.ja
        });
        null != a.h || "tcunav" != a.i.message ? d(a) : Dj(b, c).then(function(e) {
            return e.map(Ej)
        }).then(function(e) {
            return e.map(function(f) {
                return Fj(b, f)
            })
        }).then(d)
    }

    function Cj(a) {
        var b = a.ba,
            c = a.ka,
            d = void 0 === a.ia ? !1 : a.ia;
        if (!(a = !(void 0 === a.ja ? 0 : a.ja) && xj(new wj(b)))) {
            if (d = !d) {
                if (c) {
                    c = jj(b);
                    if (null == c.h) of .G(806, c.i, void 0, void 0), c = !1;
                    else if ((c = c.h.value) && null != A(c, 1)) b: switch (c = A(c, 1), c) {
                        case 1:
                            c = !0;
                            break b;
                        default:
                            throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                    } else c = !1;
                    c = !c
                }
                d = c
            }
            a = d
        }
        if (!a) return Fj(b, tj(!0));
        c = lj();
        return (c = pj(c, 24, void 0)) ? Fj(b, Ej(c)) : bg(Error("tcunav"))
    }

    function Dj(a, b) {
        return n.Promise.race([Gj(), Hj(a, b)])
    }

    function Gj() {
        return (new n.Promise(function(a) {
            var b = lj();
            a = {
                resolve: a
            };
            var c = pj(b, 25, []);
            c.push(a);
            b.S[nj(25)] = c
        })).then(Ij)
    }

    function Hj(a, b) {
        return new n.Promise(function(c) {
            a.setTimeout(c, b, bg(Error("tcto")))
        })
    }

    function Ij(a) {
        return a ? $f(a) : bg(Error("tcnull"))
    }

    function Ej(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = vj(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"],
                            void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return tj(a)
    }

    function Fj(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (qb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? $f(b) : bg(Error("unav"))
    };

    function Jj(a) {
        this.exception = a
    }

    function Kj(a, b, c) {
        this.j = a;
        this.h = b;
        this.i = c
    }
    Kj.prototype.start = function() {
        this.l()
    };
    Kj.prototype.l = function() {
        try {
            switch (this.j.document.readyState) {
                case "complete":
                case "interactive":
                    ej(this.h, !0);
                    Lj(this);
                    break;
                default:
                    ej(this.h, !1) ? Lj(this) : this.j.setTimeout(Ea(this.l, this), 100)
            }
        } catch (a) {
            Lj(this, a)
        }
    };

    function Lj(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            Gi(e.h);
            G(e.j, zg, 1);
            d.call(c, new Jj(b))
        } catch (f) {
            a.i.reject(f)
        }
    };

    function Mj(a) {
        x.call(this, a, -1, Nj)
    }
    u(Mj, x);
    var Nj = [6];

    function Oj(a) {
        x.call(this, a, -1, Pj)
    }
    u(Oj, x);

    function Qj(a) {
        x.call(this, a)
    }
    u(Qj, x);

    function Rj(a) {
        x.call(this, a)
    }
    u(Rj, x);
    var Pj = [7];

    function Sj(a) {
        a = (a = (new rj(a)).get("FCCDCF", "")) ? a : null;
        try {
            return a ? nb(Oj, a ? JSON.parse(a) : null) : null
        } catch (b) {
            return null
        }
    };

    function Tj(a) {
        function b() {
            if (!a.frames.__uspapiLocator)
                if (c.body) {
                    var d = wc("IFRAME", c);
                    d.style.display = "none";
                    d.style.width = "0px";
                    d.style.height = "0px";
                    d.style.border = "none";
                    d.style.zIndex = "-1000";
                    d.style.left = "-1000px";
                    d.style.top = "-1000px";
                    d.name = "__uspapiLocator";
                    c.body.appendChild(d)
                } else a.setTimeout(b, 5)
        }
        var c = a.document;
        b()
    };

    function Uj(a) {
        this.h = a;
        this.i = a.document;
        this.j = (a = (a = Sj(this.i)) ? D(a, Rj, 5) || null : null) ? A(a, 2) : null;
        (a = Sj(this.i)) && D(a, Qj, 4);
        (a = Sj(this.i)) && D(a, Qj, 4)
    }

    function Vj() {
        var a = window;
        a.__uspapi || a.frames.__uspapiLocator || (a = new Uj(a), Wj(a))
    }

    function Wj(a) {
        !a.j || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", Tj(a.h), Ga(function() {
            return a.l.apply(a, ma(ta.apply(0, arguments)))
        }))
    }
    Uj.prototype.l = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.j
        }, !0)
    };

    function Xj(a) {
        x.call(this, a)
    }
    u(Xj, x);

    function Yj(a) {
        x.call(this, a)
    }
    u(Yj, x);
    var Zj = [4, 5];

    function ak(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function bk(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function ck(a, b) {
        a = bk(ak(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Dc(a),
            d = dk(a);
        return p(b, "find").call(b, function(e) {
            var f = null != A(e, 7) ? A(D(e, Lg, 7), 1) : A(e, 1);
            e = null != A(e, 7) ? A(D(e, Lg, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function dk(a) {
        for (var b = {};;) {
            b[Dc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var ek = {},
        fk = (ek.google_ad_channel = !0, ek.google_ad_host = !0, ek);

    function gk(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        sf("ama", b, .01)
    }

    function hk(a) {
        var b = {};
        Cc(fk, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function ik(a) {
        a = D(a, Ig, 3);
        return !a || A(a, 1) <= Date.now() ? !1 : !0
    }

    function jk(a) {
        return (a = hj(a)) ? ik(a) ? a : null : null
    }

    function kk(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            gk(a, {
                lserr: 1
            })
        }
    };

    function lk(a) {
        gk(a, {
            atf: 1
        })
    }

    function mk(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        gk(a, {
            atf: 0
        })
    };

    function U(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function nk(a) {
        a = U(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ca: !0,
            qb: b,
            oa: a.ablation_viewport_offset
        } : null
    }

    function ok(a, b) {
        a = U(a);
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function pk(a) {
        U(I).allow_second_reactive_tag = a
    }

    function qk() {
        var a = U(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function rk(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = sk(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function sk(a) {
        var b = "";
        Cc(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };

    function tk() {
        var a = this;
        this.promise = new n.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function uk() {
        var a = new tk;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function vk(a) {
        a = void 0 === a ? function() {} : a;
        v.google_llp || (v.google_llp = {});
        var b = v.google_llp,
            c = b[7];
        if (c) return c;
        c = uk();
        b[7] = c;
        a();
        return c
    }

    function wk(a) {
        return vk(function() {
            vc(v.document, a)
        }).promise
    };

    function xk(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function yk(a) {
        if (v.google_apltlad || v !== v.top || !a.google_ad_client) return null;
        v.google_apltlad = !0;
        var b = xk(a.google_ad_client),
            c = b.enable_page_level_ads;
        Cc(a, function(d, e) {
            ti[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    }

    function zk(a) {
        return ya(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function Ak(a, b) {
        this.h = v;
        this.j = a;
        this.i = b
    }

    function Bk(a) {
        Bj({
            ba: a.h,
            ka: a.i,
            Ra: 50,
            Za: function(b) {
                return Ck(a, b)
            }
        })
    }

    function Ck(a, b) {
        ag(Zf(b, function(c) {
            Dk("ok");
            Ek(a.h, a.j, c)
        }), function(c) {
            return Dk(c.message)
        })
    }

    function Dk(a) {
        sf("abg::amalserr", {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: .01
        }, .01)
    }

    function Ek(a, b, c) {
        if (!U(I).ama_ran_on_page) {
            var d = jk(c);
            if (d) {
                if (null != A(d, 24)) {
                    c = Hi(a);
                    c.availableAbg = !0;
                    var e, f;
                    c.ablationFromStorage = !!(null == (e = D(d, Bg, 24)) ? 0 : null == (f = D(e, Dg, 3)) ? 0 : Eb(f, Eg, 2, Fg))
                }
                if (zk(b) && (e = ck(a, G(d, Jg, 7)), !e || !qb(e, 8))) return;
                U(I).ama_ran_on_page = !0;
                var g;
                if (null == (g = D(d, Og, 15)) ? 0 : qb(g, 23)) U(a).enable_overlap_observer = !0;
                if ((g = D(d, Mg, 13)) && 1 === A(g, 1)) {
                    var h = 0,
                        k = D(g, Ng, 6);
                    k && A(k, 3) && (h = A(k, 3) || 0);
                    ok(a, h)
                } else if (null == (h = D(d, Bg, 24)) ? 0 : null == (k = D(h, Dg, 3)) ? 0 : Eb(k, Eg, 2, Fg)) Hi(a).ablatingThisPageview = !0, ok(a, 1);
                Vc(3, [d.toJSON()]);
                var l = b.google_ad_client || "";
                b = hk(ya(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
                var m = ng(rg, new mg(null, b));
                qf(782, function() {
                    var q = m;
                    try {
                        var r = ck(a, G(d, Jg, 7)),
                            y;
                        if (y = r) a: {
                            var F = pb(r, 2);
                            if (F)
                                for (var z = 0; z < F.length; z++)
                                    if (1 == F[z]) {
                                        y = !0;
                                        break a
                                    }
                            y = !1
                        }
                        if (y) {
                            if (A(r, 4)) {
                                y = {};
                                var E = new mg(null, (y.google_package = A(r, 4), y));
                                q = ng(q, E)
                            }
                            var P = new dj(a, l, d, r, q),
                                gb = new Pf;
                            (new Kj(a, P, gb)).start();
                            gb.i.then(Fa(lk, a), Fa(mk, a))
                        }
                    } catch (qc) {
                        gk(a, {
                            atf: -1
                        })
                    }
                })
            } else kk(a, c)
        }
    };

    function Fk(a, b, c) {
        a = a.style;
        a.border = "none";
        a.height = c + "px";
        a.width = b + "px";
        a.margin = 0;
        a.padding = 0;
        a.position = "relative";
        a.visibility = "visible";
        a.backgroundColor = "transparent"
    };
    var Gk = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Hk(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function V(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        S.call(this, a, b);
        this.aa = c;
        this.fb = d
    }
    u(V, S);
    V.prototype.na = function() {
        return this.aa
    };
    V.prototype.i = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function Ik(a) {
        return function(b) {
            return !!(b.aa & a)
        }
    };
    var Jk = {},
        Kk = (Jk.image_stacked = 1 / 1.91, Jk.image_sidebyside = 1 / 3.82, Jk.mobile_banner_image_sidebyside = 1 / 3.82, Jk.pub_control_image_stacked = 1 / 1.91, Jk.pub_control_image_sidebyside = 1 / 3.82, Jk.pub_control_image_card_stacked = 1 / 1.91, Jk.pub_control_image_card_sidebyside = 1 / 3.74, Jk.pub_control_text = 0, Jk.pub_control_text_card = 0, Jk),
        Lk = {},
        Mk = (Lk.image_stacked = 80, Lk.image_sidebyside = 0, Lk.mobile_banner_image_sidebyside = 0, Lk.pub_control_image_stacked = 80, Lk.pub_control_image_sidebyside = 0, Lk.pub_control_image_card_stacked =
            85, Lk.pub_control_image_card_sidebyside = 0, Lk.pub_control_text = 80, Lk.pub_control_text_card = 80, Lk),
        Nk = {},
        Ok = (Nk.pub_control_image_stacked = 100, Nk.pub_control_image_sidebyside = 200, Nk.pub_control_image_card_stacked = 150, Nk.pub_control_image_card_sidebyside = 250, Nk.pub_control_text = 100, Nk.pub_control_text_card = 150, Nk);

    function Pk(a) {
        var b = 0;
        a.P && b++;
        a.H && b++;
        a.I && b++;
        if (3 > b) return {
            K: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.P.split(",");
        var c = a.I.split(",");
        a = a.H.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            K: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            K: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (p(Number, "isNaN").call(Number, g) || 0 === g) return {
                K: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (p(Number, "isNaN").call(Number, g) || 0 === g) return {
                K: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            I: d,
            H: e,
            Ja: b
        }
    }

    function Qk(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var Rk = Za("script");

    function Sk(a, b, c, d, e, f, g, h, k, l, m, q) {
        this.u = a;
        this.R = b;
        this.aa = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.N = void 0 === e ? null : e;
        this.i = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.F = void 0 === h ? null : h;
        this.L = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.m = void 0 === m ? null : m;
        this.M = void 0 === q ? null : q;
        this.O = this.A = this.D = null
    }
    Sk.prototype.size = function() {
        return this.R
    };

    function Tk(a, b, c) {
        null != a.aa && (c.google_responsive_formats = a.aa);
        null != a.N && (c.google_safe_for_responsive_override = a.N);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.u;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.F && (c.gfwroml = a.F);
        null != a.L && (c.gfwromr = a.L);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.M && (c.gfwroz = a.M);
        null != a.D && (c.gml = a.D);
        null != a.A && (c.gmr = a.A);
        null != a.O && (c.gzi = a.O);
        b = Mf();
        b = uc(b) || b;
        rk(b.location, "google_responsive_dummy_ad") &&
            (Xa([1, 2, 3, 4, 5, 6, 7, 8], a.u) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + Rk + ">window.top.postMessage('" + a + "', '*');\n          </" + Rk + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    var Uk = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Vk(a, b) {
        S.call(this, a, b)
    }
    u(Vk, S);
    Vk.prototype.h = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Wk(a, b) {
        Xk(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new Sk(9, new Vk(a, Math.floor(a * b.google_phwr)));
        var c = mc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Kk.mobile_banner_image_sidebyside + Mk.mobile_banner_image_sidebyside) + 96), a = {
            Y: a,
            X: c,
            H: 1,
            I: 12,
            P: "mobile_banner_image_sidebyside"
        }) : (a = Qk(a), a = {
            Y: a.width,
            X: a.height,
            H: 1,
            I: 13,
            P: "image_sidebyside"
        }) : (a = Qk(a), a = {
            Y: a.width,
            X: a.height,
            H: 4,
            I: 2,
            P: "image_stacked"
        });
        Yk(b, a);
        return new Sk(9, new Vk(a.Y, a.X))
    }

    function Zk(a, b) {
        Xk(a, b);
        var c = Pk({
            I: b.google_content_recommendation_rows_num,
            H: b.google_content_recommendation_columns_num,
            P: b.google_content_recommendation_ui_type
        });
        if (c.K) a = {
            Y: 0,
            X: 0,
            H: 0,
            I: 0,
            P: "image_stacked",
            K: c.K
        };
        else {
            var d = 2 === c.Ja.length && 468 <= a ? 1 : 0;
            var e = c.Ja[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Ok[e];
            for (var g = c.H[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.I[d];
            d = Math.floor(((a - 8 * f - 8) / f * Kk[e] + Mk[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    ob: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    ob: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = {
                Y: a.width,
                X: a.height,
                H: f,
                I: c,
                P: e
            }
        }
        if (a.K) throw new J(a.K);
        Yk(b, a);
        return new Sk(9, new Vk(a.Y, a.X))
    }

    function Xk(a, b) {
        if (0 >= a) throw new J("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Yk(a, b) {
        a.google_content_recommendation_ui_type = b.P;
        a.google_content_recommendation_columns_num = b.H;
        a.google_content_recommendation_rows_num = b.I
    };

    function $k(a, b) {
        S.call(this, a, b)
    }
    u($k, S);
    $k.prototype.h = function() {
        return this.minWidth()
    };
    $k.prototype.i = function(a, b, c) {
        li(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var al = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function bl(a, b) {
        S.call(this, a, b)
    }
    u(bl, S);
    bl.prototype.h = function() {
        return Math.min(1200, this.minWidth())
    };

    function cl(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive) a = g;
            else if (a = gi(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
            else if (a = Af(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (var h = 0; 100 > h && g.parentElement; ++h) {
                            for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                                var m = k[l];
                                if (m != g && ji(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    li(b, c)
                }
            else a = g;
            else a = g
        }
        if (250 > a) throw new J("Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new J("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new Sk(11, new S(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new J("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 *
                c - -725 + 10);
            if (isNaN(f)) throw new J("Invalid height: height=" + f);
            if (50 > f) throw new J("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new J("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new Sk(11, new S(a, f))
        }
        d = al[f];
        if (!d) throw new J("Invalid data-ad-layout value: " + f);
        c = pi(c, b);
        b = Af(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new Sk(11, "in-article" == f ? new bl(a, b) : new S(a, b))
    };

    function dl(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function el(a, b) {
        for (var c = fl.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var W = [new V(970, 90, 2), new V(728, 90, 2), new V(468, 60, 2), new V(336, 280, 1), new V(320, 100, 2), new V(320, 50, 2), new V(300, 600, 4), new V(300, 250, 1), new V(250, 250, 1), new V(234, 60, 2), new V(200, 200, 1), new V(180, 150, 1), new V(160, 600, 4), new V(125, 125, 1), new V(120, 600, 4), new V(120, 240, 4), new V(120, 120, 1, !0)],
        fl = [W[6], W[12], W[3], W[0], W[7], W[14], W[1], W[8], W[10], W[4], W[15], W[2], W[11], W[5], W[13], W[9], W[16]];

    function gl(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            B: a,
            C: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || hl(b) || e.google_ad_resize ? (b = hi(a, c, d, e), c = !0 !== b ? {
            B: a,
            C: b
        } : {
            B: Af(c) || a,
            C: !0
        }) : c = {
            B: a,
            C: 2
        };
        b = c.C;
        return !0 !== b ? {
            B: a,
            C: b
        } : d.parentElement ? {
            B: c.B,
            C: b
        } : {
            B: a,
            C: b
        }
    }

    function il(a, b, c, d, e) {
        var f = qf(247, function() {
                return gl(a, b, c, d, e)
            }),
            g = f.B;
        f = f.C;
        var h = !0 === f,
            k = H(d.style.width),
            l = H(d.style.height),
            m = jl(g, b, c, d, e, h);
        g = m.W;
        h = m.U;
        var q = m.na;
        m = m.Ia;
        var r = kl(b, q),
            y, F = (y = mi(d, c, "marginLeft", H)) ? y + "px" : "",
            z = (y = mi(d, c, "marginRight", H)) ? y + "px" : "";
        y = mi(d, c, "zIndex") || "";
        return new Sk(r, g, q, null, m, f, h, F, z, l, k, y)
    }

    function hl(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function jl(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, Af(c)) ? 4 : 3 : fi(b);
        var g = !1,
            h = !1;
        if (488 > Af(c)) {
            var k = ai(d, c);
            var l = pi(d, c);
            g = !l && k;
            h = l && k
        }
        l = [ni(a), Ik(b)];
        l.push(oi(488 > Af(c), c, d, h));
        null != e.google_max_responsive_height && l.push(ri(e.google_max_responsive_height));
        var m = [function(r) {
            return !r.fb
        }];
        if (g || h) g = si(c, d), m.push(ri(g));
        var q = el(dl(l), dl(m));
        if (!q) throw new J("No slot size for availableWidth=" + a);
        l = qf(248, function() {
            var r;
            a: if (f) {
                if (e.gfwrnh && (r = H(e.gfwrnh))) {
                    r = {
                        W: new $k(a, r),
                        U: !0
                    };
                    break a
                }
                r = a / 1.2;
                var y = Math;
                var F = y.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var z = Infinity;
                else {
                    z = d;
                    var E = Infinity;
                    do {
                        var P = mi(z, c, "height", H);
                        P && (E = Math.min(E, P));
                        (P = mi(z, c, "maxHeight", H)) && (E = Math.min(E, P))
                    } while ((z = z.parentElement) && "HTML" != z.tagName);
                    z = E
                }
                y = F.call(y, r, z);
                if (y < .5 * r || 100 > y) y = r;
                Q(Gh) && !pi(d, c) && (y = Math.max(y, .5 * zf(c).clientHeight));
                r = {
                    W: new $k(a, Math.floor(y)),
                    U: y < r ? 102 : !0
                }
            } else r = {
                W: q,
                U: 100
            };
            return r
        });
        g = l.W;
        l = l.U;
        return "in-article" === e.google_ad_layout &&
            ll(c) ? {
                W: ml(a, c, d, g, e),
                U: !1,
                na: b,
                Ia: k
            } : {
                W: g,
                U: l,
                na: b,
                Ia: k
            }
    }

    function kl(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function ml(a, b, c, d, e) {
        var f = e.google_ad_height || mi(c, b, "height", H);
        b = cl(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new V(b.minWidth(), b.height(), 1) : d
    }

    function ll(a) {
        return Q(Eh) || a.location && "#hffwroe2etoq" == a.location.hash
    };

    function nl(a, b, c, d, e) {
        var f;
        (f = Af(b)) ? 488 > Af(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, li(b, c), f = {
            B: f,
            C: !0
        }) : f = {
            B: a,
            C: 5
        } : f = {
            B: a,
            C: 4
        }: f = {
            B: a,
            C: 10
        };
        var g = f;
        f = g.B;
        g = g.C;
        if (!0 !== g || a == f) return new Sk(12, new S(a, d), null, null, !0, g, 100);
        a = jl(f, "auto", b, c, e, !0);
        return new Sk(1, a.W, a.na, 2, !0, g, a.U)
    };

    function ol(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = t(Uk), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (hl(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = Q(Fh) || Q(Eh) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (pl(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return pl(b), 1
    }

    function ql(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && mi(b, d, "width", H) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = rl(a, e, b, c, d)) ? f : il(e, c.google_ad_format, d, b, c);
        f.size().i(d, c, b);
        Tk(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function rl(a, b, c, d, e) {
        var f = d.google_ad_height || mi(c, e, "height", H);
        switch (a) {
            case 5:
                return f = qf(247, function() {
                    return gl(b, d.google_ad_format, e, c, d)
                }), a = f.B, f = f.C, !0 === f && b != a && li(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Wk(a, d);
            case 9:
                return Zk(b, d);
            case 8:
                return cl(b, e, c, f, d);
            case 10:
                return nl(b, e, c, f, d)
        }
    }

    function pl(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function sl(a, b) {
        var c = uc(b);
        if (c) {
            c = Af(c);
            var d = xc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var tl = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        ul = la(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        vl = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        wl = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
        xl = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);

    function yl(a) {
        x.call(this, a)
    }
    u(yl, x);

    function zl(a) {
        x.call(this, a, -1, Al)
    }
    u(zl, x);
    var Al = [1];

    function Bl(a) {
        x.call(this, a, -1, Cl)
    }
    u(Bl, x);
    Bl.prototype.getId = function() {
        return C(this, 1, 0)
    };
    Bl.prototype.T = function() {
        return C(this, 7, 0)
    };
    var Cl = [2];

    function Dl(a) {
        x.call(this, a, -1, El)
    }
    u(Dl, x);
    Dl.prototype.T = function() {
        return C(this, 5, 0)
    };
    var El = [2];

    function Fl(a) {
        x.call(this, a, -1, Gl)
    }
    u(Fl, x);

    function Hl(a) {
        x.call(this, a, -1, Il)
    }
    u(Hl, x);
    Hl.prototype.T = function() {
        return C(this, 1, 0)
    };

    function Jl(a) {
        x.call(this, a)
    }
    u(Jl, x);
    var Gl = [1, 4, 2, 3],
        Il = [2];

    function Kl(a) {
        x.call(this, a, -1, Ll)
    }
    u(Kl, x);
    var Ll = [19],
        Ml = [13, 14];
    var Nl = void 0;

    function Ol() {
        Bd(Nl, Ad);
        return Nl
    }

    function Pl(a) {
        Bd(Nl, Dd);
        Nl = a
    };

    function Ql(a, b, c, d) {
        c = void 0 === c ? "" : c;
        return 1 === b && Rl(c, void 0 === d ? null : d) ? !0 : Sl(a, c, function(e) {
            return Ua(G(e, Hb, 2), function(f) {
                return A(f, 1) === b
            })
        })
    }

    function Rl(a, b) {
        return b ? 13 === wb(b, Ml) ? rb(Eb(b, yl, 13, Ml), 1) : 14 === wb(b, Ml) && "" !== a && 1 === pb(Eb(b, zl, 14, Ml), 1).length && pb(Eb(b, zl, 14, Ml), 1)[0] === a ? rb(D(Eb(b, zl, 14, Ml), yl, 2), 1) : !1 : !1
    }

    function Tl(a, b) {
        b = C(b, 18, 0); - 1 !== b && (a.tmod = b)
    }

    function Ul(a) {
        var b = void 0 === b ? "" : b;
        var c = uc(I) || I;
        return Vl(c, a) ? !0 : Sl(I, b, function(d) {
            return Ua(pb(d, 3), function(e) {
                return e === a
            })
        })
    }

    function Wl(a) {
        return Sl(v, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function Vl(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Xa(a.split(","), b.toString())
    }

    function Sl(a, b, c) {
        a = uc(a) || a;
        var d = Xl(a);
        b && (b = Of(String(b)));
        return Mb(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function Xl(a) {
        a = Yl(a);
        var b = {};
        Cc(a, function(c, d) {
            try {
                var e = new Fb(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function Yl(a) {
        return Q(Ug) ? (a = Cj({
            ba: a,
            ka: Ol()
        }), null != a.h ? (Zl("ok"), a = $l(a.h.value)) : (Zl(a.i.message), a = {}), a) : $l(a.localStorage)
    }

    function $l(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Lb(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function Zl(a) {
        Q(Tg) && sf("abg_adsensesettings_lserr", {
            s: a,
            g: Q(Ug),
            c: Ol(),
            r: .01
        }, .01)
    };

    function am(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function bm(a) {
        var b = I.document;
        if (b.currentScript) return am(b.currentScript, a);
        b = t(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === am(c.value, a)) return 0;
        return 1
    };

    function cm(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[Jd] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(g) {
            return Ql(I, Number(g))
        }, c[24] = function(g) {
            return Ul(Number(g))
        }, c[61] = function() {
            return rb(b, 6)
        }, c[63] = function() {
            return rb(b, 6) || ".google.ch" === Cb(b, 8)
        }, c), f[Kd] = (d[7] = function(g) {
            try {
                var h = window.localStorage
            } catch (l) {
                h = null
            }
            g = Number(g);
            g = void 0 === g ? 0 : g;
            g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
            var k = Fc(h, g);
            h = null === k ? Gc(h, g) : k;
            return null !== h && void 0 !== h ? h : void 0
        }, d), f[Ld] = (e[6] =
            function() {
                return Cb(b, 15)
            }, e), f
    };

    function dm(a) {
        a = void 0 === a ? v : a;
        return a.ggeac || (a.ggeac = {})
    };

    function em(a, b) {
        try {
            var c = a.split(".");
            a = v;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }

    function fm() {
        var a = {};
        this[Jd] = (a[8] = function(b) {
            try {
                return null != xa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = xa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return Xa(K(mf).h(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = em(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a[60] = function(b) {
            try {
                return !!v.document.querySelector(b)
            } catch (c) {}
        }, a);
        a = {};
        this[Kd] =
            (a[3] = function() {
                return Lc()
            }, a[6] = function(b) {
                b = em(b, "number");
                return void 0 !== b ? b : void 0
            }, a[11] = function(b) {
                b = void 0 === b ? "" : b;
                var c = v;
                b = void 0 === b ? "" : b;
                c = void 0 === c ? window : c;
                b = (c = (c = c.location.href.match(oc)[3] || null) ? decodeURI(c) : c) ? Dc(c + b) : null;
                return null == b ? void 0 : b % 1E3
            }, a);
        a = {};
        this[Ld] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = em(b, "string");
            return void 0 !== b ? b : void 0
        }, a)
    };
    var gm = [12, 13, 20];

    function hm() {}
    hm.prototype.init = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? {} : d;
        var f = void 0 === d.Ga ? !1 : d.Ga,
            g = void 0 === d.hb ? {} : d.hb;
        d = void 0 === d.jb ? [] : d.jb;
        this.l = a;
        this.u = {};
        this.D = f;
        this.m = g;
        a = {};
        this.i = (a[b] = [], a[4] = [], a);
        this.j = {};
        (b = od()) && Ra(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.j[h] = !0)
        });
        Ra(d, function(h) {
            e.j[h] = !0
        });
        this.h = c;
        return this
    };

    function im(a, b, c) {
        var d = [],
            e = jm(a.l, b),
            f;
        if (f = 9 !== b) a.u[b] ? f = !0 : (a.u[b] = !0, f = !1);
        if (f) {
            var g;
            null == (g = a.h) || xe(g, b, c, d, [], 4);
            return d
        }
        if (!e.length) {
            var h;
            null == (h = a.h) || xe(h, b, c, d, [], 3);
            return d
        }
        var k = Xa(gm, b),
            l = [];
        Ra(e, function(q) {
            var r = new me;
            if (q = km(a, q, c, r)) 0 !== wb(r, ne) && l.push(r), r = q.getId(), d.push(r), lm(a, r, k ? 4 : c), (q = G(q, Ud, 2)) && (k ? Oe(q, Qe(), a.h, r) : Oe(q, [c], a.h, r))
        });
        var m;
        null == (m = a.h) || xe(m, b, c, d, l, 1);
        return d
    }

    function lm(a, b, c) {
        a.i[c] || (a.i[c] = []);
        a = a.i[c];
        Xa(a, b) || a.push(b)
    }

    function mm(a, b) {
        a.l.push.apply(a.l, ma(Sa(Ta(b, function(c) {
            return new Hl(c)
        }), function(c) {
            return !Xa(gm, c.T())
        })))
    }

    function km(a, b, c, d) {
        var e = K(Ae).h;
        if (!Qd(D(b, Ed, 3), e)) return null;
        var f = G(b, Bl, 2),
            g = C(b, 6, 0);
        if (g) {
            vb(d, 1, ne, g);
            f = e[Kd];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), ub(d, 3, c)
            } catch (k) {}
            return (b = nm(b, c)) ? om(a, [b], 1) : null
        }
        if (g = C(b, 10, 0)) {
            vb(d, 2, ne, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[Kd][9];
                    break;
                case 2:
                    h = e[Kd][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === C(b, 11, 0)) return null;
            void 0 !== c && ub(d, 3, c);
            return (b = nm(b, c)) ? om(a, [b], 1) : null
        }
        d = e ? Sa(f, function(k) {
            return Qd(D(k,
                Ed, 3), e)
        }) : f;
        if (!d.length) return null;
        c = d.length * C(b, 1, 0);
        return (b = C(b, 4, 0)) ? pm(a, b, c, d) : om(a, d, c / 1E3)
    }

    function pm(a, b, c, d) {
        var e = null != a.m[b] ? a.m[b] : 1E3;
        if (0 >= e) return null;
        d = om(a, d, c / e);
        a.m[b] = d ? 0 : e - c;
        return d
    }

    function om(a, b, c) {
        var d = a.j,
            e = Va(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.D ? null : yc(b, c)
    }

    function qm(a, b) {
        M(Se, function(c) {
            a.j[c] = !0
        }, b);
        M(Ve, function(c, d) {
            return im(a, c, d)
        }, b);
        M(We, function(c) {
            return (a.i[c] || []).concat(a.i[4])
        }, b);
        M(ef, function(c) {
            return mm(a, c)
        }, b);
        M(Te, function(c, d) {
            return lm(a, c, d)
        }, b)
    }

    function jm(a, b) {
        return (a = Va(a, function(c) {
            return c.T() == b
        })) && G(a, Dl, 2) || []
    }

    function nm(a, b) {
        var c = G(a, Bl, 2),
            d = c.length,
            e = C(a, 8, 0);
        a = d * C(a, 1, 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * Bc());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = K(Ae).h;
        return !c || e && !Qd(D(c, Ed, 3), e) ? null : c
    };

    function rm() {
        this.h = function() {}
    }

    function sm(a) {
        K(rm).h(a)
    };
    var tm, um, vm, wm, xm, ym;

    function zm(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? dm() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new we(null != (wm = null == (tm = D(a, Jl, 5)) ? void 0 : C(tm, 2, 0)) ? wm : 0, null != (xm = null == (um = D(a, Jl, 5)) ? void 0 : C(um, 4, 0)) ? xm : 0, null != (ym = null == (vm = D(a, Jl, 5)) ? void 0 : rb(vm, 3)) ? ym : !1) : f;
        d.hasOwnProperty("init-done") ? (hf(ef, d)(Ta(G(a, Hl, 2), function(g) {
            return g.toJSON()
        })), hf(ff, d)(Ta(G(a, Ud, 1), function(g) {
            return g.toJSON()
        }), e), b && hf(gf, d)(b), Am(d, e)) : (qm(K(hm).init(G(a, Hl, 2), e, f, c), d), jf(d), kf(d), lf(d), Am(d, e), Oe(G(a, Ud, 1), [e], f,
            void 0, !0), Be = Be || !(!c || !c.eb), sm(K(fm)), b && sm(b))
    }

    function Am(a, b) {
        a = void 0 === a ? dm() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        nf(K(mf), c, d);
        Bm(a, b);
        K(rm).h = hf(gf, a);
        K(Vh).m()
    }

    function Bm(a, b) {
        var c = K(Vh);
        c.i = function(d, e) {
            return hf(Ye, a, function() {
                return !1
            })(d, e, b)
        };
        c.j = function(d, e) {
            return hf(Ze, a, function() {
                return 0
            })(d, e, b)
        };
        c.l = function(d, e) {
            return hf($e, a, function() {
                return ""
            })(d, e, b)
        };
        c.h = function(d, e) {
            return hf(af, a, function() {
                return []
            })(d, e, b)
        };
        c.m = function() {
            hf(Ue, a)(b)
        }
    };

    function Cm(a, b, c) {
        var d = U(a);
        if (d.plle) Am(dm(a), 1);
        else {
            d.plle = !0;
            try {
                var e = a.localStorage
            } catch (f) {
                e = null
            }
            d = e;
            null == Fc(d, "goog_pem_mod") && Gc(d, "goog_pem_mod");
            d = D(b, Fl, 12);
            e = rb(b, 9);
            zm(d, cm(c, b), {
                Ga: e && !!a.google_disable_experiments,
                eb: e
            }, dm(a));
            if (c = Cb(b, 15)) c = Number(c), K(mf).l(c);
            if (c = Cb(b, 10)) c = Number(c), K(mf).i(c);
            b = t(pb(b, 19));
            for (c = b.next(); !c.done; c = b.next()) c = c.value, K(mf).i(c);
            K(mf).j(12);
            K(mf).j(10);
            a = uc(a) || a;
            rk(a.location, "google_mc_lab") && K(mf).i(44738307)
        }
    };

    function Dm(a) { of .Oa(function(b) {
            b.shv = String(a);
            b.mjsv = "m202201060101";
            var c = K(mf).h(),
                d = U(v);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };

    function Em(a) {
        var b = a.kb;
        return a.ab || ("dev" === b ? "dev" : "")
    };
    var Fm = {},
        Gm = (Fm.google_ad_modifications = !0, Fm.google_analytics_domain_name = !0, Fm.google_analytics_uacct = !0, Fm.google_pause_ad_requests = !0, Fm.google_user_agent_client_hint = !0, Fm);

    function Hm(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function Im(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function Jm(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };

    function Km(a) {
        var b, c, d, e;
        if (a.google_ad_client) return String(a.google_ad_client);
        var f = U(a).head_tag_slot_vars;
        if (null !== (d = null !== (b = null === f || void 0 === f ? void 0 : f.google_ad_client) && void 0 !== b ? b : null === (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) || void 0 === c ? void 0 : c.getAttribute("data-ad-client")) && void 0 !== d) f = d;
        else {
            b: {
                f = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                    "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Nf() ? Hm : Im;
                for (var g = f.length - 1; 0 <= g; g--) {
                    var h = f[g];
                    if (!h.google_parsed_script_for_pub_code && (h.google_parsed_script_for_pub_code = !0, h = a(h))) {
                        f = h;
                        break b
                    }
                }
                f = null
            }
            if (f) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (g = {}; h = a.exec(f);) g[h[1]] = Jm(h[2]);
                f = g.google_ad_client ? g.google_ad_client : ""
            } else f = ""
        }
        return null !== (e = f) && void 0 !== e ? e : ""
    };
    var Lm = "undefined" === typeof sttc ? void 0 : sttc;

    function Mm(a) {
        var b = of ;
        try {
            return Bd(a, Cd), new Kl(JSON.parse(a))
        } catch (c) {
            b.G(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new Kl
    };
    var Nm = K(Vh).h(Jh.h, Jh.defaultValue);

    function Om() {
        var a = I.document;
        a = void 0 === a ? window.document : a;
        Pc(Nm, a)
    };
    var Pm = K(Vh).h(Kh.h, Kh.defaultValue);

    function Qm() {
        var a = I.document;
        a = void 0 === a ? window.document : a;
        Pc(Pm, a)
    };
    var Rm = la(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function Sm() {
        this.h = null;
        this.j = !1;
        this.l = Math.random();
        this.i = this.G;
        this.m = null
    }
    aa = Sm.prototype;
    aa.Oa = function(a) {
        this.h = a
    };
    aa.Qa = function(a) {
        this.j = a
    };
    aa.Pa = function(a) {
        this.i = a
    };
    aa.G = function(a, b, c, d, e) {
        if ((this.j ? this.l : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        Xc(b) || (b = new Wc(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        v.google_js_errors = v.google_js_errors || [];
        v.google_js_errors.push(b);
        if (!v.error_rep_loaded) {
            a = Df(Rm);
            var f;
            vc(v.document, null != (f = this.m) ? f : Ub(dc(a).toString()));
            v.error_rep_loaded = !0
        }
        return !1
    };
    aa.ma = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.i(a, e, .01, c, "jserror")) throw e;
        }
        return d
    };
    aa.Ka = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = ta.apply(0, arguments);
            return e.ma(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };

    function Tm(a, b, c) {
        var d = window;
        return function() {
            var e = qd(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (qd() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function Um(a, b) {
        return Tm(a, b, function(c, d) {
            (new Sm).G(c, d)
        })
    };

    function Vm(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Wm(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Xm() {
        var a = new n.Set,
            b = Ji();
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = t(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Ym(a) {
        a = a.id;
        return null != a && (Xm().has(a) || p(a, "startsWith").call(a, "google_ads_iframe_") || p(a, "startsWith").call(a, "aswift"))
    }

    function Zm(a, b, c) {
        if (!a.sources) return !1;
        switch ($m(a)) {
            case 2:
                var d = an(a);
                if (d) return c.some(function(f) {
                    return bn(d, f)
                });
            case 1:
                var e = cn(a);
                if (e) return b.some(function(f) {
                    return bn(e, f)
                })
        }
        return !1
    }

    function $m(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function cn(a) {
        return dn(a, function(b) {
            return b.currentRect
        })
    }

    function an(a) {
        return dn(a, function(b) {
            return b.previousRect
        })
    }

    function dn(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function en() {
        uj.call(this);
        this.i = this.h = this.N = this.M = this.F = 0;
        this.ya = this.va = Number.NEGATIVE_INFINITY;
        this.ra = this.ta = this.ua = this.wa = this.Ba = this.m = this.Aa = this.R = 0;
        this.sa = !1;
        this.O = this.L = this.A = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.za = a ? a.getAttribute("data-google-query-id") : null;
        this.l = null;
        this.xa = !1;
        this.ea = function() {}
    }
    u(en, uj);

    function fn() {
        var a = new en;
        if (Q(Mh) && !window.google_plmetrics && window.PerformanceObserver) {
            window.google_plmetrics = !0;
            for (var b = t(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next()) c = c.value, gn(a).observe({
                type: c,
                buffered: !0
            });
            hn(a)
        }
    }

    function gn(a) {
        a.l || (a.l = new PerformanceObserver(Um(640, function(b) {
            var c = jn !== window.scrollX || kn !== window.scrollY ? [] : ln,
                d = mn();
            b = t(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput) {
                        f.F += Number(e.value);
                        Number(e.value) > f.M && (f.M = Number(e.value));
                        f.N += 1;
                        var g = Zm(e, c, d);
                        g && (f.m += e.value, f.wa++);
                        if (5E3 < e.startTime - f.va || 1E3 < e.startTime - f.ya) f.va = e.startTime, f.h = 0, f.i = 0;
                        f.ya = e.startTime;
                        f.h += e.value;
                        g && (f.i += e.value);
                        f.h > f.R && (f.R = f.h, f.Ba = f.i, f.Aa = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.ua = Math.floor(e.renderTime || e.loadTime);
                    a.ta = e.size;
                    break;
                case "first-input":
                    a.ra = Number((e.processingStart - e.startTime).toFixed(3));
                    a.sa = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.A += e, a.L = Math.max(a.L, e), a.O += 1
            }
        })));
        return a.l
    }

    function hn(a) {
        var b = Um(641, function() {
                var d = document;
                2 == (Q(Lh) && d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && nn(a)
            }),
            c = Um(641, function() {
                return void nn(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.ea = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            gn(a).disconnect()
        }
    }
    en.prototype.j = function() {
        uj.prototype.j.call(this);
        this.ea()
    };

    function nn(a) {
        if (!a.xa) {
            a.xa = !0;
            gn(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Wm("cls", a.F), b += Wm("mls", a.M), b += Vm("nls", a.N), window.LayoutShiftAttribution && (b += Wm("cas", a.m), b += Vm("nas", a.wa)), b += Wm("wls", a.R), b += Wm("tls", a.Aa), window.LayoutShiftAttribution && (b += Wm("was", a.Ba)));
            window.LargestContentfulPaint && (b += Vm("lcp", a.ua), b += Vm("lcps", a.ta));
            window.PerformanceEventTiming && a.sa && (b += Vm("fid", a.ra));
            window.PerformanceLongTaskTiming &&
                (b += Vm("cbt", a.A), b += Vm("mbt", a.L), b += Vm("nlt", a.O));
            for (var c = 0, d = t(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Ym(e.value) && c++;
            b += Vm("nif", c);
            b += Vm("ifi", Jf(window));
            c = K(mf).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (v === v.top ? 1 : 0);
            b += a.za ? "&qqid=" + encodeURIComponent(a.za) : Vm("pvsid", Qc(v));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.u || (a.u = !0, a.j())
        }
    }

    function bn(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function mn() {
        var a = [].concat(ma(document.getElementsByTagName("iframe"))).filter(Ym),
            b = [].concat(ma(Xm())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        jn = window.scrollX;
        kn = window.scrollY;
        return ln = [].concat(ma(a), ma(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var jn = void 0,
        kn = void 0,
        ln = [];
    var X = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function on() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }
    var pn = K(Vh).h(Th.h, Th.defaultValue);

    function qn(a, b, c) {
        a = void 0 === a ? !1 : a;
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        uj.call(this);
        var d = this;
        this.h = a;
        a = [];
        b && on() && a.push(X);
        c && a.push(Y);
        if (document.hasTrustToken && !Q(Qh) && !Array.isArray(window.goog_tt_state)) {
            var e = a.map(function(f) {
                return {
                    issuerOrigin: f.issuerOrigin,
                    state: d.h ? 1 : 12
                }
            });
            Object.defineProperty(window, "goog_tt_state", {
                configurable: !1,
                get: function() {
                    return e.slice()
                }
            })
        }
    }
    u(qn, uj);

    function rn() {
        var a = void 0 === a ? window.document : a;
        Pc(pn, a)
    }

    function sn(a, b) {
        return a || ".google.ch" === b || "function" === typeof I.__tcfapi
    }

    function Z(a, b, c) {
        var d, e = null == (d = window.goog_tt_state) ? void 0 : p(d, "find").call(d, function(f) {
            return f.issuerOrigin === a
        });
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function tn() {
        var a = X.issuerOrigin + X.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: X.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(X.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5)
        })
    }

    function un() {
        var a = X.issuerOrigin + X.issuancePath;
        Z(X.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 10);
            return tn()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return Z(X.issuerOrigin, 10), tn();
            Z(X.issuerOrigin, 9)
        })
    }

    function vn() {
        Z(X.issuerOrigin, 13);
        return document.hasTrustToken(X.issuerOrigin).then(function(a) {
            return a ? tn() : un()
        })
    }

    function wn() {
        Z(Y.issuerOrigin, 13);
        if (n.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return n.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = Y.issuerOrigin + Y.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" ===
                        f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e) return n.Promise.reject({
                            state: 17,
                            error: f
                        });
                        Z(Y.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return n.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return n.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = Qc(window);
            return a.then(function(e) {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(function(g) {
                    return n.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return n.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                Z(Y.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" ===
                        typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = R(Sh);
                        Math.random() <= f && bd({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function xn(a) {
        if (document.hasTrustToken && !Q(Qh) && a.h) {
            if (window.goog_tt_promise) return window.goog_tt_promise;
            a = window.goog_tt_state;
            if (Array.isArray(a)) {
                var b = [];
                p(a, "find").call(a, function(c) {
                    return c.issuerOrigin === X.issuerOrigin
                }) && b.push(vn());
                p(a, "find").call(a, function(c) {
                    return c.issuerOrigin === Y.issuerOrigin
                }) && b.push(wn());
                if (n.Promise && n.Promise.all) return a = n.Promise.all(b), "object" != typeof window.goog_tt_promise && Object.defineProperty(window, "goog_tt_promise", {
                    configurable: !1,
                    value: a,
                    writable: !1
                }), a
            }
        }
    };
    var yn = "platform platformVersion architecture model uaFullVersion bitness".split(" ");

    function zn() {
        var a, b;
        return "function" !== typeof(null === (b = null === (a = null === I || void 0 === I ? void 0 : I.navigator) || void 0 === a ? void 0 : a.userAgentData) || void 0 === b ? void 0 : b.getHighEntropyValues) ? null : I.navigator.userAgentData.getHighEntropyValues(yn).then(function(c) {
            var d = new Mj;
            d = B(d, 1, c.platform);
            d = B(d, 2, c.platformVersion);
            d = B(d, 3, c.architecture);
            d = B(d, 4, c.model);
            d = B(d, 5, c.uaFullVersion);
            return B(d, 9, c.bitness)
        })
    };

    function An(a, b) {
        b.google_ad_host || (a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute("content"))
    }

    function Bn(a, b, c) {
        c = void 0 === c ? "" : c;
        I.google_sa_impl && !I.document.getElementById("google_shimpl") && (delete I.google_sa_queue, I.google_sl_win = null, delete I.google_sa_impl);
        I.google_sa_queue || (I.google_sa_queue = [], Q(sh) || (I.google_sl_win = I), I.google_process_slots = rf(215, function() {
            return Cn(I.google_sa_queue)
        }), a = Dn(c, a, b), vc(I.document, a).id = "google_shimpl")
    }

    function Cn(a) {
        var b = a.shift();
        "function" === typeof b && qf(216, b);
        a.length && v.setTimeout(rf(215, function() {
            return Cn(a)
        }), 0)
    }

    function En(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function Dn(a, b, c) {
        var d = Math.random() < R(yh) ? Ub(dc(b.mb).toString()) : null;
        b = rb(c, 4) ? b.lb : b.nb;
        d = d ? d : Ub(dc(b).toString());
        b = {};
        a: {
            if (rb(c, 4)) {
                if (c = a || Km(I)) {
                    var e = {};
                    c = (e.client = c, e.plah = I.location.host, e);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            c = {}
        }
        Fn(c, b);
        a: {
            if (Q(uh) && (a = a || Km(I))) {
                c = {};
                a = (c.client = a, c.plah = I.location.host, c.ama_t = "adsense", c.asntp = R(ch), c.asntpv = R(gh), c.asntpl = R(eh), c.asntpm = R(fh), c.asntpc = R(dh), c.asna = R(Zg), c.asnd = R($g), c.asnp = R(ah), c.asns = R(bh), c.asmat = R(Yg), c.asptt =
                    R(hh), c.easpi = Q(uh), c.asro = Q(ih), c);
                break a
            }
            a = {}
        }
        Fn(a, b);
        Fn(Wh() ? {
            bust: Wh()
        } : {}, b);
        return Rb(d, b)
    }

    function Fn(a, b) {
        Cc(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Gn(a) {
        a: {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? 1024 : c;
            for (var d = [v.top], e = [], f = 0, g; g = d[f++];) {
                b && !tc(g) || e.push(g);
                try {
                    if (g.frames)
                        for (var h = 0; h < g.frames.length && d.length < c; ++h) d.push(g.frames[h])
                } catch (l) {}
            }
            for (b = 0; b < e.length; b++) try {
                var k = e[b].frames.google_esf;
                if (k) {
                    Tc = k;
                    break a
                }
            } catch (l) {}
            Tc = null
        }
        if (Tc) return null;e = wc("IFRAME");e.id = "google_esf";e.name = "google_esf";a = a.sb;a = a instanceof $b ? cc(a).toString() : Tb(a).toString();e.src = a;e.style.display = "none";
        return e
    }

    function Hn(a, b, c, d) {
        In(a, b, c, d, function(e, f) {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + "_anchor");) g = "aswift_" + h++;
            e = g;
            g = Number(f.google_ad_width || 0);
            f = Number(f.google_ad_height || 0);
            h = wc("INS");
            h.id = e + "_anchor";
            Fk(h, g, f);
            h.style.display = "block";
            var k = wc("INS");
            k.id = e + "_expand";
            Fk(k, g, f);
            k.style.display = "inline-table";
            k.appendChild(h);
            c.appendChild(k);
            return e
        })
    }

    function In(a, b, c, d, e) {
        var f = e(a, b);
        Jn(a, c, b);
        c = Ia;
        e = (new Date).getTime();
        b.google_lrv = Cb(d, 2);
        b.google_async_iframe_id = f;
        b.google_start_time = c;
        b.google_bpp = e > c ? e - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[f] = b;
        b.dninfo = b.google_loader_used;
        c = (d = !!a.document.getElementById(f + "_anchor")) ? function(h) {
            return h()
        } : function(h) {
            return window.setTimeout(h, 0)
        };
        b.dninfo += "_" + d;
        var g = {
            pubWin: a,
            ub: null,
            vars: b
        };
        En(a, function() {
            var h = !!a.document.getElementById(f + "_anchor");
            b.dninfo += "_" + h;
            (h = a.google_sa_impl(g)) &&
            h.catch && h.catch(tf(911))
        }, c)
    }

    function Jn(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Gk[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Dc(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var q = k[m];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === q) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var r = a.parent;
                for (e = 0; r && r !== a && 25 > e; ++e) {
                    var y = r.frames;
                    for (d = 0; d < y.length; ++d)
                        if (a === y[d]) {
                            b.push(d);
                            break
                        }
                    a = r;
                    r = a.parent
                }
            } catch (F) {}
            c.google_ad_dom_fingerprint = Dc(h + b.join()).toString()
        }
    }

    function Kn() {
        var a = uc(v);
        a && (a = yf(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Ln(a) {
        rn();
        sn(Ol(), Cb(a, 8)) || rf(779, function() {
            var b = window;
            b = void 0 === b ? window : b;
            b = Q(b.PeriodicSyncManager ? Oh : Ph);
            var c = Q(Rh);
            b = new qn(!0, b, c);
            0 < R(Uh) ? I.google_trust_token_operation_promise = xn(b) : xn(b)
        })();
        a = zn();
        null != a && a.then(function(b) {
            I.google_user_agent_client_hint = Ab(b)
        });
        Qm();
        Om()
    };

    function Mn(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Nn(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            (c = sc(c)) && (b.google_ad_client = Mn("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = Ja(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Mn(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function On(a) {
        if (a = Bf(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Pn(a, b, c, d) {
        Nn(a, b);
        if (c.document && c.document.body && !ol(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = sl(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Gk[e + "x" + g];
                var h = f;
                if (e) {
                    var k = Hk(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new J("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = il(f, "auto", c, a, b);
                h = f;
                g.size().i(c, b,
                    a);
                Tk(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
            }
        }
        e = a.offsetWidth || mi(a, c, "width", H) || b.google_ad_width || 0;
        f = Fa(il, e, "auto", c, a, b, !1, !0);
        !(g = Q(rh) || !(488 > Af(c)) && !Q(Bh)) && (g = Q(Dh)) && (g = c === c.top, g || (uc(c) ? b.gfwrnwer = 3 : b.gfwrnwer = 16, g = !1), g = !g);
        if (g) d = !1;
        else {
            g = uc(c) || c;
            h = b.google_ad_client;
            d = g.location && "#ftptohbh" === g.location.hash ? 2 : rk(g.location, "google_responsive_slot_preview") || Q(Ch) ? 1 : Q(Ah) ? 2 : Ql(g, 1,
                h, d) ? 1 : 0;
            if (g = 0 !== d) b: if (b.google_reactive_ad_format || ol(c, b) || ci(a, b)) g = !1;
                else {
                    for (g = a; g; g = g.parentElement) {
                        h = xc(g, c);
                        if (!h) {
                            b.gfwrnwer = 18;
                            g = !1;
                            break b
                        }
                        if (!Xa(["static", "relative"], h.position)) {
                            b.gfwrnwer = 17;
                            g = !1;
                            break b
                        }
                    }
                    if (!Q(Bh) && (g = gi(c, a, e, .3, b), !0 !== g)) {
                        b.gfwrnwer = g;
                        g = !1;
                        break b
                    }
                    g = c === c.top ? !0 : !1
                }
            g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, Tk(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1
        }
        if (e = ol(c, b)) ql(e, a, b, c, d);
        else {
            if (ci(a, b)) {
                if (d = xc(a, c)) a.style.width = d.width, a.style.height = d.height, bi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = On(c)
            } else bi(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? ql(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format &&
                (a = hi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Qn(a) {
        this.j = new n.Set;
        this.h = R(Wg);
        this.m = (this.i = 0 < this.h && Bc() < 1 / this.h) ? Qc(Mf()) : 0;
        this.u = this.i ? Km(Mf()) : "";
        this.l = null !== a && void 0 !== a ? a : new be(100)
    }

    function Rn() {
        var a = K(Qn);
        var b = new Yj;
        b = B(b, 1, a.m);
        b = B(b, 2, a.u);
        b = B(b, 3, a.h);
        var c = new Xj;
        b = xb(b, 4, Zj, c);
        a.i && !a.j.has(1) && (a.j.add(1), Yd(a.l, b))
    };

    function Sn(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        hc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function Tn(a, b) {
        b = void 0 === b ? 500 : b;
        uj.call(this);
        this.i = a;
        this.Ra = b;
        this.h = null;
        this.m = {};
        this.l = null
    }
    u(Tn, uj);
    Tn.prototype.j = function() {
        this.m = {};
        this.l && (ic(this.i, this.l), delete this.l);
        delete this.m;
        delete this.i;
        delete this.h;
        uj.prototype.j.call(this)
    };

    function Un(a) {
        uj.call(this);
        this.h = a;
        this.i = null;
        this.l = !1
    }
    u(Un, uj);
    var Vn = null,
        Wn = [],
        Xn = new n.Map,
        Yn = -1;

    function Zn(a) {
        return ui.test(a.className) && "done" != a.dataset.adsbygoogleStatus
    }

    function $n(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        ao(a, b, c)
    }

    function ao(a, b, c) {
        var d = window,
            e = Mf();
        e.google_spfd || (e.google_spfd = Pn);
        (e = b.google_reactive_ads_config) || Pn(a, b, d, c);
        An(d, b);
        if (!bo(a, b, d)) {
            e || (d.google_lpabyc = di(a, d) + mi(a, d, "height", H));
            if (e) {
                e = e.page_level_pubvars || {};
                if (U(I).page_contains_reactive_tag && !U(I).allow_second_reactive_tag) {
                    if (e.pltais) {
                        pk(!1);
                        return
                    }
                    throw new J("Only one 'enable_page_level_ads' allowed per page.");
                }
                U(I).page_contains_reactive_tag = !0;
                pk(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = If(d);
            Cc(Gm, function(f, g) {
                b[g] =
                    b[g] || d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (U(I).first_tag_on_page || 0);
            qf(164, function() {
                Hn(d, b, a, c)
            })
        }
    }

    function bo(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = nk(c);
        if (f && f.Ca && "on" != b.google_adtest && !e) {
            e = di(a, c);
            var g = zf(c).clientHeight;
            if (!f.oa || f.oa && ((0 == g ? null : e / g) || 0) >= f.oa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = za(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.qb && (null !== Jc(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== Jc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = xc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (v.console && v.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function co(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (Zn(e) && "reserved" != e.dataset.adsbygoogleStatus && (!a || d.id == a)) return d
        }
        return null
    }

    function eo(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    fo(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function go() {
        var a = wc("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Mc(a);
        return a
    }

    function ho(a, b) {
        var c = {};
        Cc(vf, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        ya(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = go();
        Sc.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!U(I).pause_ad_requests;
        $n(d, e, b)
    }

    function io(a, b) {
        function c() {
            return ho(a, b)
        }
        yf(v).wasPlaTagProcessed = !0;
        var d = v.document;
        if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
        else {
            var e = gc(rf(191, c));
            hc(d, "DOMContentLoaded", e);
            (new v.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function fo(a, b, c) {
        var d = {};
        qf(165, function() {
            jo(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function ko(a) {
        delete a.google_checked_head;
        Cc(a, function(b, c) {
            ti[c] || (delete a[c], v.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function lo(a, b) {
        var c = I.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || I.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = U(window);
            if (d.head_tag_slot_vars) {
                if (Q(wh)) {
                    mo(c);
                    return
                }
                throw new J("Only one AdSense head tag supported per page. The second tag is ignored.");
            }
            var e = {};
            Nn(c, e);
            ko(e);
            var f = Nb(e);
            d.head_tag_slot_vars = f;
            c = {
                google_ad_client: e.google_ad_client,
                enable_page_level_ads: e
            };
            I.adsbygoogle || (I.adsbygoogle = []);
            d = I.adsbygoogle;
            d.loaded ? d.push(c) : d.splice(0, 0, c);
            var g;
            e.google_adbreak_test || (null == (g = Eb(b, yl, 13, Ml)) ? 0 : rb(g, 3)) && Q(Hh) ? no(f, a) : Sn(function() {
                no(f, a)
            })
        }
    }

    function mo(a) {
        var b = U(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = sc(c) || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new J("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function oo(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function jo(a, b, c, d) {
        if (null == a) throw new J("push() called with no parameters.");
        14 === wb(d, Ml) && po(a, pb(Eb(d, zl, 14, Ml), 1), Cb(d, 2));
        var e = oo(a);
        if (0 !== e) Q(vh) && (d = qk(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Ia)), null == Vn ? (qo(a), Wn.push(a)) : 3 === e ? qf(787, function() {
            Vn.handleAdConfig(a)
        }) : Vn.handleAdBreak(a).catch(tf(730));
        else {
            Ia = (new Date).getTime();
            Bn(c, d, ro(a));
            so();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" ===
                        typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new J("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) to(a, d);
            else if ((e = a.params) && Cc(e, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = uo(a.element);
                Nn(e, b);
                c = U(v).head_tag_slot_vars || {};
                Cc(c, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") &&
                    !U(v).head_tag_slot_vars) throw new J("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new J("Ad client is missing from the slot.");
                b.google_apsail = Wl(b.google_ad_client);
                var f = (c = 0 === (U(I).first_tag_on_page || 0) && yk(b)) && zk(c);
                c && !f && (to(c, d), U(I).skip_next_reactive_tag = !0);
                0 === (U(I).first_tag_on_page || 0) && (U(I).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!U(I).pause_ad_requests;
                $n(e, b, d);
                c && f && vo(c)
            }
        }
    }
    var wo = !1;

    function po(a, b, c) {
        Q(th) && !wo && (wo = !0, a = ro(a) || Km(I), sf("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, .01))
    }

    function ro(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function so() {
        if (Q(lh)) {
            var a = nk(I);
            if (!(a = a && a.Ca)) {
                try {
                    var b = I.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? hj(b) : null;
                a = !(b && ik(b) && b)
            }
            a || ok(I, 1)
        }
    }

    function vo(a) {
        Rc(function() {
            yf(v).wasPlaTagProcessed || v.adsbygoogle && v.adsbygoogle.push(a)
        })
    }

    function to(a, b) {
        if (U(I).skip_next_reactive_tag) U(I).skip_next_reactive_tag = !1;
        else {
            0 === (U(I).first_tag_on_page || 0) && (U(I).first_tag_on_page = 1);
            if (a.tag_partner) {
                var c = a.tag_partner,
                    d = U(v);
                d.tag_partners = d.tag_partners || [];
                d.tag_partners.push(c)
            }
            c = rb(b, 6);
            U(I).ama_ran_on_page || Bk(new Ak(a, c));
            io(a, b)
        }
    }

    function uo(a) {
        if (a) {
            if (!Zn(a) && (a.id ? a = co(a.id) : a = null, !a)) throw new J("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new J("'element' is not a good DOM element.");
        } else if (a = co(), !a) throw new J("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function xo() {
        var a = new wj(I),
            b = new Tn(I),
            c = new Un(I),
            d = I.__cmp ? 1 : 0;
        a = xj(a) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null === (e = b.i) || void 0 === e ? void 0 : e.__uspapi)) || (b.h ? b = b.h : (b.h = Kc(b.i, "__uspapiLocator"), b = b.h), f = null != b);
        c.l || (c.i || (c.i = c.h.googlefc ? c.h : Kc(c.h, "googlefcPresent")), c.l = !0);
        sf("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: f ? 1 : 0,
            fc: c.i ? 1 : 0,
            ptt: 9
        }, R(Vg))
    }

    function yo(a) {
        a = {
            value: rb(a, 16)
        };
        var b = .01;
        R(nh) && (a.eid = R(nh), b = 1);
        a.frequency = b;
        sf("new_abg_tag", a, b)
    }

    function zo(a) {
        lj().S[nj(26)] = !!Number(a)
    }

    function Ao(a) {
        Number(a) ? U(I).pause_ad_requests = !0 : (U(I).pause_ad_requests = !1, a = function() {
            if (!U(I).pause_ad_requests) {
                var b = void 0 === b ? {} : b;
                if ("function" === typeof window.CustomEvent) var c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
                else c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
                I.dispatchEvent(c)
            }
        }, v.setTimeout(a, 0), v.setTimeout(a, 1E3))
    }

    function Bo(a) {
        sf("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        I._gfp_a_ = a
    }

    function Co(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function no(a, b) {
        (ba = wk(Rb(Ub(dc(b.pb).toString()), Wh() ? {
            bust: Wh()
        } : {})).then(function(c) {
            null == Vn && (c.init(a), Vn = c, Do())
        }).catch(tf(723)), p(ba, "finally")).call(ba, function() {
            Wn.length = 0;
            sf("slotcar", {
                event: "api_ld",
                time: Date.now() - Ia,
                time_pr: Date.now() - Yn
            })
        })
    }

    function Do() {
        for (var a = t(p(Xn, "keys").call(Xn)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Xn.get(b); - 1 !== c && (v.clearTimeout(c), Xn.delete(b))
        }
        a = {};
        for (b = 0; b < Wn.length; a = {
                da: a.da,
                Z: a.Z
            }, b++) Xn.has(b) || (a.Z = Wn[b], a.da = oo(a.Z), qf(723, function(d) {
            return function() {
                3 === d.da ? Vn.handleAdConfig(d.Z) : 2 === d.da && Vn.handleAdBreakBeforeReady(d.Z).catch(tf(730))
            }
        }(a)))
    }

    function qo(a) {
        var b = Wn.length;
        if (2 === oo(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === Yn && (Yn = Date.now());
            var c = v.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), Xn.set(b, -1), sf("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * R(Ih));
            Xn.set(b, c)
        }
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d; of .Pa(uf);
        qf(166, function() {
            var e = Mm(b);
            Dm(Cb(e, 2));
            Pl(rb(e, 6));
            d();
            Vc(16, [1, e.toJSON()]);
            var f = Cf(Bf(I)) || I,
                g = c(Em({
                    ab: a,
                    kb: Cb(e, 2)
                }), e);
            Rn();
            Q(zh) && Tl(f, e);
            Cm(f, e, null === I.document.currentScript ? 1 : bm(g.rb));
            if ((!Na() || 0 <= Ka(Qa(), 11)) && (null == (I.Prototype || {}).Version || !Q(qh))) {
                pf(Q(Nh));
                Ln(e);
                Vj();
                try {
                    fn()
                } catch (q) {}
                Kn();
                lo(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    if (Q(mh) && !rb(e, 16)) try {
                        if (I.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return
                    } catch (q) {}
                    yo(e);
                    R(Vg) && xo();
                    var k = {
                        push: function(q) {
                            fo(q, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k, "requestNonPersonalizedAds", {
                            set: zo
                        }), Object.defineProperty(k, "pauseAdRequests", {
                            set: Ao
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: Bo
                        }), Object.defineProperty(k, "onload", {
                            set: Co
                        })
                    } catch (q) {}
                    if (h)
                        for (var l = t(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] = h[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    eo(h, g, e);
                    f.adsbygoogle = k;
                    h && (k.onload =
                        h.onload);
                    (f = Gn(g)) && document.documentElement.appendChild(f)
                }
            }
        })
    })("m202201060101", Lm, function(a, b) {
        var c = 2012 < C(b, 1, 0) ? "_fy" + C(b, 1, 0) : "",
            d = Cb(b, 3),
            e = Cb(b, 2);
        b = Df(tl, a, c);
        d = Df(ul, e, d);
        return {
            pb: b,
            nb: Df(vl, a, c),
            lb: Df(wl, a, c),
            mb: Df(xl, a, c),
            sb: d,
            rb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2019,\"r20220112\",\"r20190131\",null,[],null,null,\".google.co.in\",null,null,[],[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1126,null,[null,5000]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1053,null,null,[1]],[1100,null,null,[1]],[1109,null,null,[1]],[1102,null,null,[1]],[1101,null,null,[1]],[1036,null,null,[1]],[1127,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,null,null,[null,null,null,[\"A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\",\"A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\",\"A4\/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme\/J33Q\/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\"]],null,1934],[1903,null,null,[1]],[1953,null,null,[1]],[1938,null,null,[1]],[1948,null,null,[1]],[null,null,null,[null,null,null,[\"AxujKG9INjsZ8\/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=\",\"Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt\/P\/H4\/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"AxBHdr0J44vFBQtZUqX9sjiqf5yWZ\/OcHRcRMN3H9TH+t90V\/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1932],[null,397907552,null,[null,500]],[401243724,null,null,[1]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[42531397],[42531398,[[1135,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[200,[[44750773],[44750774,[[1087,null,null,[1]]]]],null,null,null,57],[100,[[44753738,[[290,null,null,[]]]],[44753740,[[null,1072,null,[null,0.75]],[290,null,null,[]]]]],null,null,null,53,null,200],[1,[[44756427],[44756428,[[1129,null,null,[1]]]],[44756429,[[1128,null,null,[1]]]]]],[10,[[44752536,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753656],[44753657,[[1033,null,null,[1]]]],[44753658,[[1033,null,null,[1]]]],[44753659,[[1033,null,null,[1]]]]]],[null,[[44755592],[44755593,[[1033,null,null,[1]]]],[44755594,[[1033,null,null,[1]]]],[44755653,[[1033,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,36,10,101],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,36,10,101],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[null,[[31062369],[31062370,[[380254521,null,null,[1]]]]],null,null,null,56],[50,[[31062422],[31062423,[[381914117,null,null,[1]]]]]],[1,[[31063331,[[null,1103,null,[null,31063331]],[1121,null,null,[1]]]],[31063332,[[null,1103,null,[null,31063332]],[1121,null,null,[1]],[1120,null,null,[1]]]],[31063333,[[null,1103,null,[null,31063333]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44754313,[[null,1103,null,[null,44754313]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,100]],[1120,null,null,[1]]]],[44754314,[[null,1103,null,[null,44754314]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,500]],[1120,null,null,[1]]]],[44755514,[[null,1103,null,[null,44755514]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755515,[[null,1103,null,[null,44755515]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755516,[[null,1103,null,[null,44755516]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755517,[[null,1103,null,[null,44755517]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44756798,[[null,1103,null,[null,44756798]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,200]],[1120,null,null,[1]]]],[44756799,[[null,1103,null,[null,44756799]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44756800,[[null,1103,null,[null,44756800]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,400]],[1120,null,null,[1]]]]]],[10,[[31063938],[31063939,[[1125,null,null,[1]]]]]],[1000,[[31064016,[[null,null,14,[null,null,\"31064016\"]]],[6,null,null,null,6,null,\"31064016\"]],[31064017,[[null,null,14,[null,null,\"31064017\"]]],[6,null,null,null,6,null,\"31064017\"]]],[4,null,55]],[100,[[31064036],[31064037,[[1134,null,null,[1]]]]]],[100,[[31064070],[31064071,[[1131,null,null,[1]]]]]],[100,[[31064080],[31064081,[[1132,null,null,[1]]]]]],[1000,[[31064092,[[null,null,14,[null,null,\"31064092\"]]],[6,null,null,null,6,null,\"31064092\"]],[31064093,[[null,null,14,[null,null,\"31064093\"]]],[6,null,null,null,6,null,\"31064093\"]]],[4,null,55]],[1000,[[31064105,[[null,null,14,[null,null,\"31064105\"]]],[6,null,null,null,6,null,\"31064105\"]],[31064106,[[null,null,14,[null,null,\"31064106\"]]],[6,null,null,null,6,null,\"31064106\"]]],[4,null,55]],[1000,[[31064115,[[null,null,14,[null,null,\"31064115\"]]],[6,null,null,null,6,null,\"31064115\"]],[31064116,[[null,null,14,[null,null,\"31064116\"]]],[6,null,null,null,6,null,\"31064116\"]]],[4,null,55]],[10,[[31064124],[31064125,[[1136,null,null,[1]]]]]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.1]]]]]],[null,[[44754319,[[null,1103,null,[null,44754319]]]],[44754320,[[null,1103,null,[null,44754320]],[1120,null,null,[1]]]],[44754321,[[null,1103,null,[null,44754321]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754322,[[null,1103,null,[null,44754322]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754323,[[null,1103,null,[null,44754323]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754324,[[null,1103,null,[null,44754324]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754325,[[null,1103,null,[null,44754325]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]]]],[10,[[44756554],[44756555,[[null,1130,null,[null,100]]]]]],[150,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31063913,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15],[50,[[31063202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31063912],[44753753,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[44756455,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15],[10,[[31063221],[31063222,[[1954,null,null,[1]]]]]]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[11,[[2,[[44756083],[44756084,[[1957,null,null,[1]]]],[44756085,[[1957,null,null,[1]]]],[44756086,[[1957,null,null,[1]]]],[44756087,[[1957,null,null,[1]]]],[44756088,[[1957,null,null,[1]]]],[44756089,[[1957,null,null,[1]]]]]],[500,[[31063741,null,[4,null,8,null,null,null,null,[\"top.frames.google_ads_top_frame\"]]],[31063742,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,[\"top.frames.google_ads_top_frame\"]]]]]]],[13,[[10,[[44756894],[44756895,[[1947,null,null,[1]]]]]],[10,[[44756896],[44756897]]],[10,[[44756431],[44756432,[[1960,null,null,[1]]]]]],[1,[[31062554,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[31062555,[[395842139,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,[\"document.prerendering\"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,[\"document.prerendering\"]]]]]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[12,[[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,517,null,[null,1]]]]],null,15],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]]],null,21],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]],null,21],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31063244],[31063245,[[392736476,null,null,[1]]]]],null,45],[50,[[31063246],[31063247,[[392736476,null,null,[1]],[null,406149835,null,[null,0.01]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/(9[3456789]|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],45],[10,[[31063910],[31063911,[[1948,null,null,[]]]]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],[],null,\"31064016\",null,null,41]");