(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var n, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        ha = {},
        ia = {};

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in ha ? f = ha : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aa(ha, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ja("globalThis", function(a) {
        return a || ca
    }, "es_2020");
    var t = this || self;

    function la(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ma(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function na(a) {
        return Object.prototype.hasOwnProperty.call(a, oa) && a[oa] || (a[oa] = ++pa)
    }
    var oa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        pa = 0;

    function ra(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function sa(a, b, c) {
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

    function ta(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ta = ra : ta = sa;
        return ta.apply(null, arguments)
    }

    function ua(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function va() {
        return Date.now()
    }

    function wa(a, b) {
        a = a.split(".");
        var c = t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function xa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.si = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.hi = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function ya(a) {
        return a
    };

    function za(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, za);
        else {
            const b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    xa(za, Error);
    za.prototype.name = "CustomError";
    var Aa;

    function Ba(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        za.call(this, c + a[d])
    }
    xa(Ba, za);
    Ba.prototype.name = "AssertionError";

    function Ca(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Da(a, b) {
        if (b) a = a.replace(Ea, "&amp;").replace(Fa, "&lt;").replace(Ga, "&gt;").replace(Ha, "&quot;").replace(Ia, "&#39;").replace(Ja, "&#0;");
        else {
            if (!Ka.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ea, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Fa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ga, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ha, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ia, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ja, "&#0;"))
        }
        return a
    }
    var Ea = /&/g,
        Fa = /</g,
        Ga = />/g,
        Ha = /"/g,
        Ia = /'/g,
        Ja = /\x00/g,
        Ka = /[\x00&<>"']/;

    function Ma(a, b) {
        let c = 0;
        a = Ca(String(a)).split(".");
        b = Ca(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = Na(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Na(0 == e[2].length, 0 == f[2].length) || Na(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function Na(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Oa() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function v(a) {
        return -1 != Oa().indexOf(a)
    };

    function Pa() {
        return v("Opera")
    }

    function Qa() {
        return v("Trident") || v("MSIE")
    }

    function Ra() {
        return v("Firefox") || v("FxiOS")
    }

    function Sa() {
        return v("Safari") && !(Ta() || v("Coast") || Pa() || v("Edge") || v("Edg/") || v("OPR") || Ra() || v("Silk") || v("Android"))
    }

    function Ta() {
        return (v("Chrome") || v("CriOS")) && !v("Edge") || v("Silk")
    }

    function Ua() {
        return v("Android") && !(Ta() || Ra() || Pa() || v("Silk"))
    }

    function Va(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function Wa() {
        var a = Oa();
        if (Qa()) {
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
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Va(b);
        return Pa() ? a(["Version", "Opera"]) :
            v("Edge") ? a(["Edge"]) : v("Edg/") ? a(["Edg"]) : v("Silk") ? a(["Silk"]) : Ta() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Xa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ya(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function $a(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function ab(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function bb(a, b, c) {
        let d = c;
        Ya(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function cb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function db(a, b) {
        return 0 <= Xa(a, b)
    }

    function eb(a, b) {
        b = Xa(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function fb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function hb(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function ib(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function jb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = jb.apply(null, ib(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function kb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function lb(a) {
        lb[" "](a);
        return a
    }
    lb[" "] = function() {};

    function mb(a, b) {
        try {
            return lb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function nb(a, b) {
        var c = ob;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var pb = Pa(),
        qb = Qa(),
        rb = v("Edge"),
        tb = rb || qb,
        ub = v("Gecko") && !(-1 != Oa().toLowerCase().indexOf("webkit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge"),
        vb = -1 != Oa().toLowerCase().indexOf("webkit") && !v("Edge");

    function wb() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var xb;
    a: {
        var yb = "",
            zb = function() {
                var a = Oa();
                if (ub) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (rb) return /Edge\/([\d\.]+)/.exec(a);
                if (qb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (vb) return /WebKit\/(\S+)/.exec(a);
                if (pb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();zb && (yb = zb ? zb[1] : "");
        if (qb) {
            var Ab = wb();
            if (null != Ab && Ab > parseFloat(yb)) {
                xb = String(Ab);
                break a
            }
        }
        xb = yb
    }
    var Bb = xb,
        ob = {};

    function Cb(a) {
        return nb(a, function() {
            return 0 <= Ma(Bb, a)
        })
    }
    var Db;
    if (t.document && qb) {
        var Eb = wb();
        Db = Eb ? Eb : parseInt(Bb, 10) || void 0
    } else Db = void 0;
    var Fb = Db;
    Ua();
    Ta();
    Sa();
    var Gb = {},
        Hb = null;

    function Ib(a, b) {
        void 0 === b && (b = 0);
        if (!Hb) {
            Hb = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Gb[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Hb[h] && (Hb[h] = g)
                }
            }
        }
        b = Gb[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var l = a[f],
                k = a[f + 1];
            h = a[f + 2];
            g = b[l >> 2];
            l = b[(l & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = g + l + k + h
        }
        g = 0;
        h = d;
        switch (a.length - f) {
            case 2:
                g =
                    a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    }

    function Jb(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Ib(b, 3)
    };
    var Kb = "function" === typeof Uint8Array;
    const Lb = Symbol(void 0);

    function Mb(a) {
        Object.isFrozen(a) || (Lb ? a[Lb] |= 1 : void 0 !== a.j ? a.j |= 1 : Object.defineProperties(a, {
            j: {
                value: 1,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }));
        return a
    };

    function Nb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Ob;

    function Pb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a) && Kb && null != a && a instanceof Uint8Array) return Ib(a)
        }
        return a
    };

    function Qb(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Rb(a, b);
            else if (Nb(a)) {
                const c = {};
                for (let d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = Qb(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    }

    function Rb(a, b) {
        const c = a.slice();
        for (let d = 0; d < c.length; d++) c[d] = Qb(c[d], b);
        if (b = Array.isArray(a)) {
            let d;
            Lb ? d = a[Lb] : d = a.j;
            b = (null == d ? 0 : d) & 1
        }
        b && Mb(c);
        return c
    }

    function Sb(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Pb(a);
        return Array.isArray(a) ? Rb(a, Sb) : a
    }

    function Tb(a) {
        return Kb && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    };
    let Ub;

    function Vb(a, b) {
        Ub = b;
        a = new a(b);
        Ub = null;
        return a
    };

    function w(a, b, c) {
        var d = Ub;
        Ub = null;
        a || (a = d);
        d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.C = (d ? 0 : -1) - (this.constructor.ki || 0);
        this.j = void 0;
        this.A = a;
        a: {
            d = this.A.length;a = d - 1;
            if (d && (d = this.A[a], Nb(d))) {
                this.D = a - this.C;
                this.B = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.D = Math.max(b, a + 1 - this.C), this.B = void 0) : this.D = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.D) a += this.C, (d = this.A[a]) ? Array.isArray(d) && Mb(d) : this.A[a] = Wb;
                else {
                    d = this.B || (this.B = this.A[this.D + this.C] = {});
                    let e = d[a];
                    e ? Array.isArray(e) &&
                        Mb(e) : d[a] = Wb
                }
    }
    const Wb = Object.freeze(Mb([]));

    function y(a, b, c = !1) {
        return -1 === b ? null : b >= a.D ? a.B ? a.B[b] : void 0 : c && a.B && (c = a.B[b], null != c) ? c : a.A[b + a.C]
    }

    function Yb(a, b) {
        return null != y(a, b)
    }

    function Zb(a, b, c = !1) {
        let d = y(a, b, c);
        null == d && (d = Wb);
        d === Wb && (d = Mb(d.slice()), z(a, b, d, c));
        return d
    }

    function $b(a, b) {
        a = y(a, b);
        return null == a ? a : +a
    }

    function B(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    }

    function ac(a, b, c) {
        a = y(a, b);
        return null == a ? c : a
    }

    function bc(a, b, c = !1) {
        a = B(a, b);
        return null == a ? c : a
    }

    function z(a, b, c, d = !1) {
        d || b >= a.D ? (a.B || (a.B = a.A[a.D + a.C] = {}))[b] = c : a.A[b + a.C] = c;
        return a
    }

    function cc(a, b, c) {
        return z(a, b, null == c ? Mb([]) : Array.isArray(c) ? Mb(c) : c, !1)
    }

    function dc(a, b, c, d) {
        c !== d ? z(a, b, c) : z(a, b, void 0, !1);
        return a
    }

    function ec(a, b, c, d) {
        (c = fc(a, c)) && c !== b && null != d && (a.j && c in a.j && (a.j[c] = void 0), z(a, c, void 0));
        return z(a, b, d)
    }

    function fc(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != y(a, e) && (0 !== c && z(a, c, void 0, !1), c = e)
        }
        return c
    }

    function D(a, b, c, d, e = !1) {
        if (-1 === c) return null;
        a.j || (a.j = {});
        const f = a.j[c];
        if (f) return f;
        e = y(a, c, e);
        if (null == e && !d) return f;
        b = new b(e);
        return a.j[c] = b
    }

    function G(a, b, c, d = !1) {
        a.j || (a.j = {});
        let e = a.j[c];
        if (!e) {
            d = Zb(a, c, d);
            e = [];
            for (let f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
        return e
    }

    function gc(a, b, c) {
        a.j || (a.j = {});
        let d = c ? c.A : c;
        a.j[b] = c;
        return z(a, b, d, !1)
    }

    function hc(a, b, c, d) {
        a.j || (a.j = {});
        let e = d ? d.A : d;
        a.j[b] = d;
        return ec(a, b, c, e)
    }

    function ic(a, b, c) {
        let d;
        if (c) {
            d = Mb([]);
            for (let e = 0; e < c.length; e++) d[e] = c[e].A;
            a.j || (a.j = {});
            a.j[b] = c
        } else a.j && (a.j[b] = void 0), d = Wb;
        return z(a, b, d, !1)
    }
    w.prototype.toJSON = function() {
        const a = this.A;
        return Ob ? a : Rb(a, Sb)
    };

    function jc(a, b) {
        return Pb(b)
    }

    function kc(a) {
        Ob = !0;
        try {
            return JSON.stringify(a.toJSON(), jc)
        } finally {
            Ob = !1
        }
    }

    function lc(a, b) {
        return Vb(a, b ? JSON.parse(b) : null)
    }

    function mc(a, b) {
        b.G && (a.G = b.G.slice());
        const c = b.j;
        if (c) {
            b = b.B;
            for (let f in c) {
                if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
                const g = c[f];
                if (g) {
                    var d = !(!b || !b[f]),
                        e = +f;
                    if (Array.isArray(g)) {
                        if (g.length)
                            for (d = G(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) mc(d[e], g[e])
                    } else(d = D(a, g.constructor, e, void 0, d)) && mc(d, g)
                }
            }
        }
    }

    function J(a, b) {
        return ac(a, b, "")
    }

    function nc(a, b, c, d) {
        c = fc(a, d) === c ? c : -1;
        return D(a, b, c)
    }

    function oc(a, b, c) {
        return dc(a, b, c, !1)
    }

    function pc(a, b) {
        return dc(a, b, 1, 0)
    };

    function qc(a, b) {
        this.j = a === rc && b || "";
        this.l = sc
    }
    qc.prototype.ka = !0;
    qc.prototype.ba = function() {
        return this.j
    };

    function tc(a) {
        return a instanceof qc && a.constructor === qc && a.l === sc ? a.j : "type_error:Const"
    }

    function vc(a) {
        return new qc(rc, a)
    }
    var sc = {},
        rc = {};
    var wc = vc("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function xc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function yc(a) {
        var b = zc;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Ac(a) {
        let b = 0;
        for (const c in a) b++
    }

    function Bc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Cc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Dc(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Cc.length; f++) c = Cc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Ec = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Fc;

    function Gc() {
        if (void 0 === Fc) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ya,
                        createScript: ya,
                        createScriptURL: ya
                    })
                } catch (c) {
                    t.console && t.console.error(c.message)
                }
                Fc = a
            } else Fc = a
        }
        return Fc
    };
    const Hc = {};
    class Ic {
        constructor(a, b) {
            this.j = b === Hc ? a : "";
            this.ka = !0
        }
        ba() {
            return this.j.toString()
        }
    }
    Ic.prototype.toString = function() {
        return this.j.toString()
    };
    var Kc = class {
        constructor(a, b) {
            this.j = b === Jc ? a : ""
        }
    };
    n = Kc.prototype;
    n.ka = !0;
    n.ba = function() {
        return this.j.toString()
    };
    n.ac = !0;
    n.Da = function() {
        return 1
    };

    function Lc(a, b) {
        a = Mc.exec(Nc(a).toString());
        var c = a[3] || "";
        return Oc(a[1] + Pc("?", a[2] || "", b) + Pc("#", c, void 0))
    }
    n.toString = function() {
        return this.j + ""
    };

    function Nc(a) {
        return a instanceof Kc && a.constructor === Kc ? a.j : "type_error:TrustedResourceUrl"
    }

    function Qc(a, b) {
        var c = tc(a);
        if (!Rc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Sc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof qc ? tc(d) : encodeURIComponent(String(d))
        });
        return Oc(a)
    }
    var Sc = /%{(\w+)}/g,
        Rc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Mc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Jc = {};

    function Oc(a) {
        const b = Gc();
        a = b ? b.createScriptURL(a) : a;
        return new Kc(a, Jc)
    }

    function Pc(a, b, c) {
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
    var Uc = class {
        constructor(a, b) {
            this.j = b === Tc ? a : ""
        }
    };
    n = Uc.prototype;
    n.ka = !0;
    n.ba = function() {
        return this.j.toString()
    };
    n.ac = !0;
    n.Da = function() {
        return 1
    };
    n.toString = function() {
        return this.j.toString()
    };

    function Vc(a) {
        return a instanceof Uc && a.constructor === Uc ? a.j : "type_error:SafeUrl"
    }
    var Yc = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"),
        Zc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;

    function $c(a) {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(Zc);
        return b && Yc.test(b[1]) ? new Uc(a, Tc) : null
    }
    var ad = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function bd(a) {
        a instanceof Uc || (a = "object" == typeof a && a.ka ? a.ba() : String(a), a = ad.test(a) ? new Uc(a, Tc) : $c(a));
        return a || cd
    }

    function dd(a, b) {
        if (a instanceof Uc) return a;
        a = "object" == typeof a && a.ka ? a.ba() : String(a);
        if (b && /^data:/i.test(a) && (b = $c(a) || cd, b.ba() == a)) return b;
        ad.test(a) || (a = "about:invalid#zClosurez");
        return new Uc(a, Tc)
    }
    var Tc = {},
        cd = new Uc("about:invalid#zClosurez", Tc);
    const ed = {};

    function fd(a) {
        return a instanceof gd && a.constructor === gd ? a.j : "type_error:SafeStyle"
    }

    function hd(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(id).join(" ") : id(d), b += `${c}:${d};`)
            }
        return b ? new gd(b, ed) : jd
    }
    class gd {
        constructor(a, b) {
            this.j = b === ed ? a : "";
            this.ka = !0
        }
        ba() {
            return this.j
        }
        toString() {
            return this.j.toString()
        }
    }
    var jd = new gd("", ed);

    function id(a) {
        if (a instanceof Uc) return 'url("' + Vc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof qc) a = tc(a);
        else {
            a = String(a);
            var b = a.replace(kd, "$1").replace(kd, "$1").replace(ld, "url");
            if (md.test(b)) {
                if (b = !nd.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && od(a)
                }
                a = b ? pd(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Ba("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function od(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const md = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        ld = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        kd = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        nd = /\/\*/;

    function pd(a) {
        return a.replace(ld, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, l) => {
                f = h;
                return l
            });
            b = bd(d).ba();
            return c + f + b + f + e
        })
    };
    const qd = {};

    function rd(a) {
        return a instanceof sd && a.constructor === sd ? a.j : "type_error:SafeHtml"
    }

    function td(a) {
        if (a instanceof sd) return a;
        const b = "object" == typeof a;
        let c = null;
        b && a.ac && (c = a.Da());
        return ud(Da(b && a.ka ? a.ba() : String(a)), c)
    }

    function ud(a, b) {
        const c = Gc();
        a = c ? c.createHTML(a) : a;
        return new sd(a, b, qd)
    }

    function vd(a) {
        if (!wd.test(a)) throw Error("");
        if (a.toUpperCase() in xd) throw Error("");
    }

    function yd(a, b, c) {
        var d = null;
        let e;
        e = `<${a}` + zd(b);
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Ec[a.toLowerCase()] ? e += ">" : (d = Ad(c), e += ">" + rd(d).toString() + "</" + a + ">", d = d.Da());
        (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
        return ud(e, d)
    }

    function Bd(a) {
        const b = td(Cd);
        let c = b.Da();
        const d = [],
            e = f => {
                Array.isArray(f) ? f.forEach(e) : (f = td(f), d.push(rd(f).toString()), f = f.Da(), 0 == c ? c = f : 0 != f && c != f && (c = null))
            };
        a.forEach(e);
        return ud(d.join(rd(b).toString()), c)
    }

    function Ad(a) {
        return Bd(Array.prototype.slice.call(arguments))
    }

    function zd(a) {
        var b = "";
        if (a)
            for (let e in a)
                if (Object.prototype.hasOwnProperty.call(a, e)) {
                    if (!wd.test(e)) throw Error("");
                    var c = a[e];
                    if (null != c) {
                        var d = e;
                        if (c instanceof qc) c = tc(c);
                        else if ("style" == d.toLowerCase()) {
                            if (!ma(c)) throw Error("");
                            c instanceof gd || (c = hd(c));
                            c = fd(c)
                        } else {
                            if (/^on/i.test(d)) throw Error("");
                            if (d.toLowerCase() in Dd)
                                if (c instanceof Kc) c = Nc(c).toString();
                                else if (c instanceof Uc) c = Vc(c);
                            else if ("string" === typeof c) c = bd(c).ba();
                            else throw Error("");
                        }
                        c.ka && (c = c.ba());
                        d = `${d}="` + Da(String(c)) +
                            '"';
                        b += " " + d
                    }
                }
        return b
    }
    class sd {
        constructor(a, b, c) {
            this.j = c === qd ? a : "";
            this.l = b;
            this.ka = this.ac = !0
        }
        Da() {
            return this.l
        }
        ba() {
            return this.j.toString()
        }
        toString() {
            return this.j.toString()
        }
    }
    const wd = /^[a-zA-Z0-9-]+$/,
        Dd = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        xd = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var Ed = ud("<!DOCTYPE html>", 0),
        Cd = new sd(t.trustedTypes && t.trustedTypes.emptyHTML || "", 0, qd);
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Fd() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    let Gd;

    function Hd() {
        var a, b;
        if (void 0 === Gd) try {
            Gd = null !== (b = null === (a = Fd()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: c => c,
                createScript: c => c,
                createScriptURL: c => c
            })) && void 0 !== b ? b : null
        } catch (c) {
            Gd = null
        }
        return Gd
    };
    var Id = class {};
    class Jd extends Id {
        constructor(a) {
            super();
            this.j = a
        }
        toString() {
            return this.j.toString()
        }
    }

    function Kd(a) {
        var b;
        const c = null === (b = Hd()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new Jd(null !== c && void 0 !== c ? c : a)
    }

    function Ld(a) {
        if (a instanceof Jd) return a.j;
        throw Error("");
    }

    function Md(a) {
        var b;
        a = Ld(a);
        return (null === (b = Fd()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
    };
    var Nd = class {};
    class Od extends Nd {
        constructor(a) {
            super();
            this.l = a
        }
        toString() {
            return this.l.toString()
        }
    }

    function Pd(a) {
        var b, c = null === (b = Hd()) || void 0 === b ? void 0 : b.createScript(a);
        return new Od(null !== c && void 0 !== c ? c : a)
    };
    var Qd = class {};
    class Sd extends Qd {
        constructor(a) {
            super();
            this.j = a
        }
        toString() {
            return this.j
        }
    }
    var Td = new Sd("about:invalid#zTSz");

    function Ud(a) {
        return a instanceof Id ? Ld(a) : Nc(a)
    }

    function Vd(a) {
        if (a instanceof Qd)
            if (a instanceof Sd) a = a.j;
            else throw Error("");
        else a = Vc(a);
        return a
    }

    function Wd(a) {
        return Oc(Ud(a).toString())
    };

    function Xd(a, b) {
        a.href = Vd(b)
    };

    function Yd(a, b) {
        if (null !== a && void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        a.innerHTML = rd(b)
    }

    function Zd(a, b) {
        a.style.cssText = fd(b)
    };

    function $d(a, b) {
        a.src = Vd(b)
    };
    const ae = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function be(a) {
        var b;
        const c = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            d = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function ce(a, b) {
        if (b instanceof Nd)
            if (b instanceof Od) b = b.l;
            else throw Error("");
        else b = b instanceof Ic && b.constructor === Ic ? b.j : "type_error:SafeScript";
        a.textContent = b;
        be(a)
    }

    function de(a, b) {
        a.src = Ud(b);
        be(a)
    };

    function ee() {
        return !1
    }

    function fe() {
        return !0
    }

    function ge(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function he(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function ie(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function je(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function ke(a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function le(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var me = {
            passive: !0
        },
        ne = ie(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function oe(a) {
        return a ? a.passive && ne() ? a : a.capture || !1 : !1
    }

    function pe(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, oe(d)), !0) : !1
    }

    function qe(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, oe(d)), !0) : !1
    };

    function re(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                var g;
                f.onload = null;
                f.onerror = null;
                null === (g = f.parentElement) || void 0 === g ? void 0 : g.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            de(f, a);
            "complete" !== b.document.readyState ? pe(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function se(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.La}`;
        let c = void 0;
        try {
            c = await te(b)
        } catch (g) {}
        if (c) {
            b = a.Wa || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.B,
                Jd: c.bg_hash_basename,
                Id: c.bg_binary,
                ce: a.j + "_" + a.l,
                Wa: b,
                La: a.La,
                Db: d,
                Jb: e,
                Bb: f
            }
        }
    }
    let te = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function ue(a) {
        var b = await se(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Jd,
                _bgp_: b.Id,
                _li_: b.ce,
                _jk_: b.Wa,
                _st_: b.La,
                _rc_: b.Db,
                _dl_: b.Jb,
                _g2_: b.Bb
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Qc(wc, {
                basename: "sodar2"
            });
            re(a)
        }
    };

    function ve(a, b) {
        return gc(a, 5, b)
    }

    function we(a, b) {
        return dc(a, 3, b, "")
    }
    var xe = class extends w {
        constructor() {
            super(void 0)
        }
    };

    function ye(a, b) {
        return dc(a, 1, b, "")
    }
    var ze = class extends w {
        constructor(a) {
            super(a)
        }
    };

    function Ae(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Be = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.A;
                this.B = a.B;
                this.Wa = a.Wa;
                this.win = a.N();
                this.La = a.La;
                this.Db = a.Db;
                this.Jb = a.Jb;
                this.Bb = a.Bb;
                this.A = a.j
            }
        },
        Ce = class {
            constructor(a, b, c) {
                this.l = a;
                this.A = b;
                this.B = c;
                this.win = window;
                this.La = "env";
                this.Db = "n";
                this.Jb = "0";
                this.Bb = "1";
                this.j = !0
            }
            N() {
                return this.win
            }
            build() {
                return new Be(this)
            }
        };
    var Ee = class extends w {
            constructor(a) {
                super(a, -1, De)
            }
        },
        De = [2, 3];

    function Fe(a, b) {
        return z(a, 1, b)
    }

    function Ge(a, b) {
        return z(a, 2, b)
    }

    function He(a, b) {
        return z(a, 3, b)
    }

    function Ie(a, b) {
        return z(a, 4, b)
    }
    var Je = class extends w {
        constructor() {
            super(void 0)
        }
        getVersion() {
            return y(this, 5)
        }
    };
    var Ke = document,
        Le = window;
    var Me = {
        Oe: "google_adtest",
        Se: "google_ad_client",
        Te: "google_ad_format",
        Ve: "google_ad_height",
        jf: "google_ad_width",
        Ze: "google_ad_layout",
        $e: "google_ad_layout_key",
        bf: "google_ad_output",
        cf: "google_ad_region",
        ff: "google_ad_slot",
        gf: "google_ad_type",
        hf: "google_ad_url",
        kf: "google_allow_expandable_ads",
        zf: "google_analytics_domain_name",
        Af: "google_analytics_uacct",
        Of: "google_container_id",
        Yf: "google_gl",
        rg: "google_enable_ose",
        Bg: "google_full_width_responsive",
        Ah: "google_rl_filtering",
        zh: "google_rl_mode",
        Bh: "google_rt",
        yh: "google_rl_dest_url",
        gh: "google_max_radlink_len",
        lh: "google_num_radlinks",
        mh: "google_num_radlinks_per_unit",
        Re: "google_ad_channel",
        fh: "google_max_num_ads",
        hh: "google_max_responsive_height",
        Jf: "google_color_border",
        qg: "google_enable_content_recommendations",
        Vf: "google_content_recommendation_ui_type",
        Uf: "google_source_type",
        Tf: "google_content_recommendation_rows_num",
        Sf: "google_content_recommendation_columns_num",
        Rf: "google_content_recommendation_ad_positions",
        Wf: "google_content_recommendation_use_square_imgs",
        Lf: "google_color_link",
        Kf: "google_color_line",
        Nf: "google_color_url",
        Pe: "google_ad_block",
        ef: "google_ad_section",
        Qe: "google_ad_callback",
        Gf: "google_captcha_token",
        Mf: "google_color_text",
        xf: "google_alternate_ad_url",
        Ye: "google_ad_host_tier_id",
        Hf: "google_city",
        We: "google_ad_host",
        Xe: "google_ad_host_channel",
        yf: "google_alternate_color",
        If: "google_color_bg",
        sg: "google_encoding",
        zg: "google_font_face",
        ag: "google_cust_ch",
        dg: "google_cust_job",
        cg: "google_cust_interests",
        bg: "google_cust_id",
        eg: "google_cust_u_url",
        Dg: "google_hints",
        Sg: "google_image_size",
        ih: "google_mtl",
        ai: "google_cpm",
        Qf: "google_contents",
        kh: "google_native_settings_key",
        Xf: "google_country",
        Th: "google_targeting",
        Ag: "google_font_size",
        hg: "google_disable_video_autoplay",
        fi: "google_video_product_type",
        ei: "google_video_doc_id",
        di: "google_cust_gender",
        Ph: "google_cust_lh",
        Oh: "google_cust_l",
        $h: "google_tfs",
        jh: "google_native_ad_template",
        Xg: "google_kw",
        Qh: "google_tag_for_child_directed_treatment",
        Rh: "google_tag_for_under_age_of_consent",
        Dh: "google_region",
        $f: "google_cust_criteria",
        df: "google_safe",
        Zf: "google_ctr_threshold",
        Eh: "google_resizing_allowed",
        Gh: "google_resizing_width",
        Fh: "google_resizing_height",
        ci: "google_cust_age",
        LANGUAGE: "google_language",
        Yg: "google_kw_type",
        th: "google_pucrd",
        sh: "google_page_url",
        Sh: "google_tag_partner",
        Kh: "google_restrict_data_processing",
        Le: "google_adbreak_test",
        Ue: "google_ad_frequency_hint",
        Me: "google_admob_interstitial_slot",
        Ne: "google_admob_rewarded_slot",
        eh: "google_max_ad_content_rating",
        xh: "google_ad_public_floor",
        uh: "google_ad_private_floor"
    };
    var Ne = ie(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = rd(Cd);
        return !b.parentElement
    });

    function Oe(a, b) {
        if (Ne())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = rd(b)
    }

    function Pe(a, b) {
        b = b instanceof Uc ? b : dd(b, /^data:image\//i.test(b));
        a.src = Vc(b)
    }
    var Qe = /^[\w+/_-]+[=]{0,2}$/;

    function Re() {
        var a = t.document;
        return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Qe.test(a) ? a : "" : ""
    };

    function Se(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Te(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Ue(a) {
        return Te.apply(null, arguments) / arguments.length
    };

    function Ve(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    Ve.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Ve.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Ve.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function We(a, b) {
        this.width = a;
        this.height = b
    }
    n = We.prototype;
    n.aspectRatio = function() {
        return this.width / this.height
    };
    n.isEmpty = function() {
        return !(this.width * this.height)
    };
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Xe(a) {
        return a = Da(a, void 0)
    }

    function Ye(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(Ze, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = ud(e + " ", null), Oe(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Ze = /&([^;\s<&]+);?/g;

    function $e() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ va()).toString(36)
    }

    function af(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function bf(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function cf(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function df(a) {
        return a ? new ef(ff(a)) : Aa || (Aa = new ef)
    }

    function gf(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new We(a.clientWidth, a.clientHeight)
    }

    function hf(a) {
        var b = a.scrollingElement ? a.scrollingElement : vb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return qb && Cb("10") && a.pageYOffset != b.scrollTop ? new Ve(b.scrollLeft, b.scrollTop) : new Ve(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function jf(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function kf(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!la(f) || ma(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ma(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Ya(g ? hb(f) : f, d)
            }
        }
    }

    function lf(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function mf(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function ff(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var nf = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        of = {
            IMG: " ",
            BR: "\n"
        };

    function pf(a) {
        var b = [];
        qf(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function qf(a, b, c) {
        if (!(a.nodeName in nf))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in of ) b.push( of [a.nodeName]);
        else
            for (a = a.firstChild; a;) qf(a, b, c), a = a.nextSibling
    }

    function rf(a, b, c, d) {
        if (!b && !c) return null;
        var e = b ? String(b).toUpperCase() : null;
        return sf(a, function(f) {
            return (!e || f.nodeName == e) && (!c || "string" === typeof f.className && db(f.className.split(/\s+/), c))
        }, d)
    }

    function sf(a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    }

    function ef(a) {
        this.j = a || t.document || document
    }
    n = ef.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };

    function tf(a, b) {
        return lf(a.j, b)
    }
    n.N = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    n.appendChild = function(a, b) {
        a.appendChild(b)
    };
    n.append = function(a, b) {
        kf(ff(a), a, arguments)
    };
    n.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    n.Ud = mf;

    function uf() {
        return !(v("iPad") || v("Android") && !v("Mobile") || v("Silk")) && (v("iPod") || v("iPhone") || v("Android") || v("IEMobile"))
    };
    var vf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function wf(a) {
        return a ? decodeURI(a) : a
    };

    function xf(a) {
        try {
            return !!a && null != a.location.href && mb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function yf(a, b = !1, c = !1, d = t) {
        c = c ? zf(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !xf(c) || !a(c));) c = zf(c)
    }

    function zf(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch (b) {}
        return null
    }

    function Af(a) {
        return xf(a.top) ? a.top : null
    }

    function Bf(a, b) {
        const c = Ef("SCRIPT", a);
        de(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Ff(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Gf() {
        if (!ha.globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            ha.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (a) {
            return Math.random()
        }
    }

    function Hf(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function If(a) {
        const b = [];
        Hf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Jf(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Lf = ie(() => cb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Kf) || 1E-4 > Math.random());
    const Kf = a => -1 != Oa().indexOf(a);
    var Mf = /^([0-9.]+)px$/,
        Nf = /^(-?[0-9.]{1,30})$/;

    function Of(a, b = null) {
        if (!Nf.test(a)) return b;
        a = Number(a);
        return isNaN(a) ? b : a
    }

    function Pf(a) {
        return /^true$/.test(a)
    }

    function Qf(a) {
        return (a = Mf.exec(a)) ? +a[1] : null
    }

    function Rf() {
        var a = t.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    var Sf = {
        lf: "allow-forms",
        mf: "allow-modals",
        nf: "allow-orientation-lock",
        pf: "allow-pointer-lock",
        qf: "allow-popups",
        rf: "allow-popups-to-escape-sandbox",
        sf: "allow-presentation",
        tf: "allow-same-origin",
        uf: "allow-scripts",
        vf: "allow-top-navigation",
        wf: "allow-top-navigation-by-user-activation"
    };
    const Tf = ie(() => If(Sf));

    function Uf() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = Tf();
        return a.length ? $a(b, c => !db(a, c)) : b
    }

    function Vf() {
        const a = Ef("IFRAME"),
            b = {};
        Ya(Tf(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var Wf = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        Xf = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (Wf(a, b)) return a;
                if (!(a = zf(a))) break
            }
            return null
        },
        K = (a, b) => {
            Hf(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Yf = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Zf = /\.proxy\.googleprod\.com(:\d+)?$/;
    const $f = /.*domain\.test$/,
        ag = /\.prod\.google\.com(:\d+)?$/;
    var bg = a => !!Yf[a] || Zf.test(a) || $f.test(a) || ag.test(a);
    let cg = [];
    const dg = () => {
        const a = cg;
        cg = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var eg = (a, b) => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52),
                configurable: !1
            })
        } catch (c) {
            b && b.ua(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.ua(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    };

    function fg(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || mf(h, b))) {
                        for (const l of d) l.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        yf(f => {
            if (!f.parent || !xf(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let k = 0; k < g.length; k++) try {
                a: {
                    var h = g[k];
                    try {
                        var l = h.contentWindow || (h.contentDocument ? jf(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    l =
                    null
                }
                if (l == f) {
                    fg(f.parent, g[k], c, d);
                    break
                }
            }
            catch (m) {}
            return !1
        }, !1, !1, a)
    }
    var gg = (a, b) => {
            fg(jf(ff(a)), a, b)
        },
        hg = (a, b) => {
            "complete" === a.document.readyState ? (cg.push(b), 1 == cg.length && (window.Promise ? Promise.resolve().then(dg) : window.setImmediate ? setImmediate(dg) : setTimeout(dg, 0))) : a.addEventListener("load", b)
        },
        ig = (a, b) => {
            const c = Ef("DIV");
            c.id = a;
            c.textContent = b;
            K(c, {
                height: "24px",
                "line-height": "24px",
                "text-align": "center",
                "vertical-align": "middle",
                color: "white",
                "background-color": "black",
                margin: "0",
                "font-family": "Roboto",
                "font-style": "normal",
                "font-weight": "500",
                "font-size": "11px",
                "letter-spacing": "0.08em"
            });
            return c
        },
        jg = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function kg(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    }

    function Ef(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var lg = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, xf(a) && (b = a);
        return b
    };

    function mg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    n = mg.prototype;
    n.getWidth = function() {
        return this.right - this.left
    };
    n.getHeight = function() {
        return this.bottom - this.top
    };

    function ng(a) {
        return new mg(a.top, a.right, a.bottom, a.left)
    }
    n.contains = function(a) {
        return this && a ? a instanceof mg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function og(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    n.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    n.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    n.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function pg(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function qg(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new pg(c, e, d - c, a - e)
        }
        return null
    }

    function rg(a, b) {
        var c = qg(a, b);
        if (!c || !c.height || !c.width) return [new pg(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            l = b.top + b.height;
        b.top > a.top && (c.push(new pg(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        l < g && (c.push(new pg(a.left, l, a.width, g - l)), e = l - d);
        b.left > a.left && c.push(new pg(a.left, d, b.left - a.left, e));
        h < f && c.push(new pg(h, d, f - h, e));
        return c
    }
    pg.prototype.contains = function(a) {
        return a instanceof Ve ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    pg.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    pg.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    pg.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const sg = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function tg(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function ug() {
        const a = tg();
        return a && a.initialIntersection
    }

    function vg() {
        const a = ug();
        return a && ma(a.rootBounds) ? new We(a.rootBounds.width, a.rootBounds.height) : null
    }

    function wg(a) {
        return (a = a || tg()) ? xf(a.master) ? a.master : null : null
    }

    function xg(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            eb(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, l = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !l && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Bf(a.document, g ? Qc(vc("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : Oc(tc(vc("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, pe(a, "message", f), d = () => {
            qe(a, "message", f)
        });
        return e
    };

    function yg(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        const c = Ef("IMG", a.document);
        c.src = b;
        a.google_image_requests.push(c)
    }
    var Ag = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Hf(a, (d, e) => {
                d && (c += `&${e}=${encodeURIComponent(d)}`)
            });
            zg(c)
        },
        zg = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : yg(b, a)
        };
    class Bg {
        constructor(a) {
            this.be = a
        }
    }

    function Cg(a) {
        return new Bg(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Dg = [Cg("data"), Cg("http"), Cg("https"), Cg("mailto"), Cg("ftp"), new Bg(a => /^[^:]*([/?#]|$)/.test(a))];

    function Eg(a = Dg) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Bg && c.be("#")) return new Sd("#")
        }
    };

    function L(a, ...b) {
        if (0 === b.length) return Kd(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Kd(c.join(""))
    }

    function Fg(a, b) {
        let c = Md(a);
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Kd(c)
    };

    function Gg(a) {
        return Pd(a[0])
    }

    function Hg(a) {
        return (...b) => {
            b = b.map(c => Pd(JSON.stringify(c).replace(/</g, "\\x3c")).toString());
            return Pd(`(${a.join("")})(${b.join(",")})`)
        }
    };

    function Ig(a, b, c) {
        if ("string" === typeof b)(b = Jg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Jg(c, d);
                f && (c.style[f] = e)
            }
    }
    var Kg = {};

    function Jg(a, b) {
        var c = Kg[b];
        if (!c) {
            var d = bf(b);
            c = d;
            void 0 === a.style[d] && (d = (vb ? "Webkit" : ub ? "Moz" : qb ? "ms" : null) + cf(d), void 0 !== a.style[d] && (c = d));
            Kg[b] = c
        }
        return c
    }

    function Lg(a, b) {
        var c = ff(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Mg(a, b) {
        return Lg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Ng(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Og(a) {
        var b = ff(a),
            c = new Ve(0, 0);
        var d = b ? ff(b) : document;
        d = !qb || 9 <= Number(Fb) || "CSS1Compat" == df(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Ng(a);
        b = hf(df(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Pg(a) {
        var b = Qg;
        if ("none" != Mg(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Qg(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = vb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ng(a), new We(a.right - a.left, a.bottom - a.top)) : new We(b, c)
    }

    function Rg(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function Sg(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Rg(a, b) : 0
    }
    var Tg = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Ug(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Tg ? Tg[b] : Rg(a, b)
    };
    var Vg = a => "number" === typeof a && 0 < a,
        Xg = (a, b) => {
            a = Wg(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        Wg = a => Object.entries(Yg(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        Yg = a => {
            const b = {};
            Hf(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        Zg = () => {
            try {
                return Le.history.length
            } catch (a) {
                return 0
            }
        },
        $g = a => {
            a = wg(tg(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        ah = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        bh = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = Zg();
            let b;
            a.u_h = null == (b = Le.screen) ? void 0 : b.height;
            let c;
            a.u_w = null == (c = Le.screen) ? void 0 : c.width;
            let d;
            a.u_ah = null == (d = Le.screen) ? void 0 : d.availHeight;
            let e;
            a.u_aw = null == (e = Le.screen) ? void 0 : e.availWidth;
            let f;
            a.u_cd = null == (f = Le.screen) ? void 0 : f.colorDepth
        },
        ch = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g =
                            d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        dh = !!window.google_async_iframe_id;
    let eh = dh && window.parent || window;
    var N = () => {
            if (dh && !xf(eh)) {
                let a = "." + Ke.domain;
                try {
                    for (; 2 < a.split(".").length && !xf(eh);) Ke.domain = a = a.substr(a.indexOf(".") + 1), eh = window.parent
                } catch (b) {}
                xf(eh) || (eh = window)
            }
            eh !== window && .01 > Math.random() && Ag({
                stack: Error().stack,
                aswift: window.google_async_iframe_id
            }, "badpubwin");
            return eh
        },
        fh = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        gh = () => {
            if (!Le) return !1;
            try {
                return !(!Le.navigator.standalone && !Le.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        hh = a => {
            let b;
            var c = a.ActiveXObject;
            if (a.navigator.plugins && a.navigator.mimeTypes.length) {
                if ((c = a.navigator.plugins["Shockwave Flash"]) && c.description) return c.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
            } else {
                if (a.navigator.userAgent && 0 <= a.navigator.userAgent.indexOf("Windows CE")) {
                    b = 3;
                    for (a = 1; a;) try {
                        a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1)), b++
                    } catch (d) {
                        a = null
                    }
                    return b.toString()
                }
                if (Qa()) {
                    a = null;
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        b = 0;
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash.6"), b = 6, a.AllowScriptAccess =
                                "always"
                        } catch (e) {
                            if (6 === b) return b.toString()
                        }
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a) return b = a.GetVariable("$version").split(" ")[1], b.replace(/,/g, ".")
                }
            }
            return "0"
        },
        ih = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        jh = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        kh = (a, b) => a.source !== b.contentWindow && a.source.parent !== b.contentWindow ? !1 : !0;
    class lh {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const mh = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var nh = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        oh = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.Lc = !!c;
                this.depth = null
            }
        };

    function ph(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function qh(a, b, c, d, e) {
        const f = [];
        Hf(a, function(g, h) {
            (g = rh(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function rh(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(rh(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(qh(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function sh(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function th(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = sh(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = qh(h[l], a.A, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.A;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class uh {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function vh() {
        var a = wh,
            b = t.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    }

    function xh(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof uh ? f = c : (f = new uh, Hf(c, (h, l) => {
                var k = f,
                    m = k.B++;
                h = ph(l, h);
                k.j.push(m);
                k.l[m] = h
            }));
            const g = th(f, "/pagead/gen_204?id=" + b + "&");
            g && yg(t, g)
        } catch (f) {}
    }
    class yh {
        constructor() {
            this.j = Math.random()
        }
    };
    let zh = null;

    function Ah() {
        if (null === zh) {
            zh = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    zh = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return zh
    };
    var Bh = () => {
            const a = t.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : va()
        },
        Ch = () => {
            const a = t.performance;
            return a && a.now ? a.now() : null
        };
    class Dh {
        constructor(a, b) {
            var c = Ch() || Bh();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
    };
    const Eh = t.performance,
        Fh = !!(Eh && Eh.mark && Eh.measure && Eh.clearMarks),
        Gh = ie(() => {
            var a;
            if (a = Fh) a = Ah(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Hh(a) {
        a && Eh && Gh() && (Eh.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Eh.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Ih() {
        var a = Jh;
        a.j = !1;
        a.events != a.l.google_js_reporting_queue && (Gh() && Ya(a.events, Hh), a.events.length = 0)
    }

    function Kh(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Hh(c), e;
        }
        a.end(c);
        return d
    }
    class Lh {
        constructor(a) {
            this.events = [];
            this.l = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = Gh() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new Dh(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Eh && Gh() && Eh.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (Ch() || Bh()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Eh && Gh() && Eh.mark(b);
                !this.j ||
                    2048 < this.events.length || this.events.push(a)
            }
        }
    };

    function Mh(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = Nh(a.stack, b));
        return b
    }

    function Nh(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (c) {
            return b
        }
    }

    function Oh(a, b, c, d) {
        let e, f;
        try {
            a.j && a.j.j ? (f = a.j.start(b.toString(), 3), e = c(), a.j.end(f)) : e = c()
        } catch (g) {
            c = !0;
            try {
                Hh(f), c = a.B(b, new lh(g, {
                    message: Mh(g)
                }), void 0, d)
            } catch (h) {
                a.ua(217, h)
            }
            if (c) {
                let h, l;
                null == (h = window.console) || null == (l = h.error) || l.call(h, g)
            } else throw g;
        }
        return e
    }

    function Ph(a, b, c, d, e) {
        return (...f) => Oh(a, b, () => c.apply(d, f), e)
    }
    class Qh {
        constructor(a = null) {
            this.l = wh;
            this.Nb = null;
            this.B = this.ua;
            this.j = a;
            this.A = !1
        }
        da() {
            return this.l
        }
        ua(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const E = new uh;
                var g = E;
                g.j.push(1);
                g.l[1] = ph("context", a);
                b.error && b.meta && b.id || (b = new lh(b, {
                    message: Mh(b)
                }));
                if (b.msg) {
                    g = E;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = ph("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.Nb) try {
                    this.Nb(b)
                } catch (fa) {}
                if (d) try {
                    d(b)
                } catch (fa) {}
                d = E;
                l = [l];
                d.j.push(3);
                d.l[3] = l;
                d = t;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (xf(k)) {
                        var m = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else m = b, b = null;
                    l.push(new oh(m || "", k));
                    try {
                        d = k.parent
                    } catch (fa) {
                        d = null
                    }
                } while (d && k != d);
                for (let fa = 0, La = l.length - 1; fa <= La; ++fa) l[fa].depth = La - fa;
                k = t;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var p = l[m];
                        p.url || (p.url = k.location.ancestorOrigins[m - 1] || "", p.Lc = !0)
                    }
                var q = l;
                let S = new oh(t.location.href, t, !1);
                k = null;
                const qa = q.length - 1;
                for (p = qa; 0 <= p; --p) {
                    var r = q[p];
                    !k && mh.test(r.url) && (k = r);
                    if (r.url &&
                        !r.Lc) {
                        S = r;
                        break
                    }
                }
                r = null;
                const O = q.length && q[qa].url;
                0 != S.depth && O && (r = q[qa]);
                f = new nh(S, r);
                if (f.l) {
                    q = E;
                    var u = f.l.url || "";
                    q.j.push(4);
                    q.l[4] = ph("top", u)
                }
                var x = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var H = f.j.url.match(vf),
                        A = H[1],
                        C = H[3],
                        F = H[4];
                    u = "";
                    A && (u += A + ":");
                    C && (u += "//", u += C, F && (u += ":" + F));
                    var I = u
                } else I = "";
                A = E;
                x = [x, {
                    url: I
                }];
                A.j.push(5);
                A.l[5] = x;
                xh(this.l, e, E, this.A, c)
            } catch (E) {
                try {
                    xh(this.l, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Mh(E),
                        url: f && f.j.url
                    }, this.A, c)
                } catch (S) {}
            }
            return !0
        }
    };
    const Rh = a => null !== a && void 0 !== a;

    function Sh(a, b) {
        if (!b(a)) throw Error(String(a));
    };
    var Th = a => "string" === typeof a,
        Uh = a => void 0 === a;
    var Vh;
    Vh = {
        wh: 0,
        hd: 3,
        jd: 4,
        md: 5
    };
    var Wh = Vh.hd,
        Xh = Vh.jd,
        Yh = Vh.md;

    function Zh(a, ...b) {
        $h(a, ...b.map(c => ({
            Ge: 7,
            message: c
        })))
    };

    function ai(a) {
        return function(...b) {
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    var bi = ai(a => {
        const b = [];
        for (const c of a) ai(() => {
            b.push(`[{"${c.Ge}":${kc(c.message)}}]`)
        })();
        return `[[${b.join(",")}]]`
    });
    var ci = (a, b) => {
        ha.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        })
    };

    function $h(a, ...b) {
        ai(() => {
            a.l.push(...b);
            const c = ai(() => {
                const d = bi(a.l);
                a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                a.l = [];
                a.j = null
            });
            100 <= a.l.length ? (null !== a.j && clearTimeout(a.j), a.j = setTimeout(c, 0)) : null === a.j && (a.j = setTimeout(c, 100))
        })()
    }
    var di = class {
        constructor() {
            this.A = ci;
            this.l = [];
            this.j = null
        }
    };
    var R = a => {
        var b = "cc";
        if (a.cc && a.hasOwnProperty(b)) return a.cc;
        b = new a;
        return a.cc = b
    };
    class ei {
        constructor(a) {
            this.methodName = a
        }
    }
    var fi = new ei(15),
        gi = new ei(2),
        hi = new ei(3),
        ii = new ei(5),
        ji = new ei(6),
        ki = new ei(7),
        li = new ei(8),
        mi = new ei(14),
        ni = (a, b, c) => b[a.methodName] || c || (() => {});

    function oi(a, b) {
        a.j = c => {
            ni(gi, b, () => [])(c, 1)
        };
        a.l = () => ni(hi, b, () => [])(1)
    }
    class pi {
        constructor() {
            this.j = () => {};
            this.l = () => []
        }
    };
    let wh, qi;
    const Jh = new Lh(t);
    (a => {
        wh = a || new yh;
        "number" !== typeof t.google_srt && (t.google_srt = Math.random());
        vh();
        qi = new Qh(Jh);
        qi.A = !0;
        "complete" == t.document.readyState ? t.google_measure_js_timing || Ih() : Jh.j && pe(t, "load", () => {
            t.google_measure_js_timing || Ih()
        })
    })();
    var ri = (a, b, c) => Oh(qi, a, b, c),
        si = (a, b) => Ph(qi, a, b, void 0, void 0),
        V = (a, b, c) => {
            const d = R(pi).l();
            !b.eid && d.length && (b.eid = d.toString());
            xh(wh, a, b, !0, c)
        },
        ti = (a, b) => qi.ua(a, b, void 0, void 0),
        ui = a => b => {
            null != b || (b = "unnamed rejection");
            ti(a, b instanceof Error ? b : Error(b))
        };
    var vi = (a, b) => {
        const c = Rf();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(t.document.location.protocol), "//", encodeURIComponent(t.document.location.host)].join("")
    };
    Oc(tc(vc("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var wi = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (l) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            pe(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = qe(a, "message", e));
                return g
            }
        },
        Ci = (a, b, c, d = null) => {
            const e = wi(a, b, ge(c, () => e()), d);
            return e
        },
        Di = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Di(a[f], b, c, d, --e)
        };

    function Ei(a, b, c, d) {
        bg(d.origin) && "expandable-xpc-ready" == c.notify && Fi(a, b)
    }

    function Fi(a, b) {
        var c = a.$b;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.xc,
            f: a.re,
            g: a.zd,
            h: a.ae,
            i: void 0
        });
        t.setTimeout(si(220, fh(() => {
            Bf(c.document, Wd(b))
        })), 0)
    };
    var Hi = class extends w {
            constructor() {
                super(void 0, -1, Gi)
            }
        },
        Gi = [15];
    var Ii = class extends w {
        constructor() {
            super(void 0)
        }
        getCorrelator() {
            return ac(this, 1, 0)
        }
        setCorrelator(a) {
            return dc(this, 1, a, 0)
        }
    };
    var Ji = class extends w {
        constructor() {
            super(void 0)
        }
    };
    let Ki = null,
        Li = null;
    var Mi = () => {
            if (null != Ki) return Ki;
            Ki = !1;
            try {
                const a = Af(t);
                a && -1 !== a.location.hash.indexOf("google_logging") && (Ki = !0);
                t.localStorage.getItem("google_logging") && (Ki = !0)
            } catch (a) {}
            return Ki
        },
        Ni = () => {
            if (null != Li) return Li;
            Li = !1;
            try {
                const a = Af(t);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || t.localStorage.getItem("auto_ads_logging")) Li = !0
            } catch (a) {}
            return Li
        },
        Oi = (a, b = []) => {
            let c = !1;
            t.google_logging_queue || (c = !0, t.google_logging_queue = []);
            t.google_logging_queue.push([a, b]);
            c && Mi() && Bf(t.document,
                Oc(tc(vc("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    Oc(tc(vc("https://pagead2.googlesyndication.com/pagead/osd.js")));
    var Pi = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var Ri = class extends w {
            constructor(a) {
                super(a, -1, Qi)
            }
            getId() {
                return y(this, 3)
            }
        },
        Qi = [4];
    var Si = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Ti = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Vi = class extends w {
            constructor(a) {
                super(a, -1, Ui)
            }
        },
        Wi = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Xi = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Ui = [1];
    var Yi = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var $i = class extends w {
            constructor(a) {
                super(a, -1, Zi)
            }
        },
        aj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        bj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Zi = [3];
    var dj = class extends w {
            constructor(a) {
                super(a, -1, cj)
            }
        },
        cj = [2];
    var ej = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var gj = class extends w {
            constructor(a) {
                super(a, -1, fj)
            }
        },
        fj = [1];
    var hj = class extends w {
        constructor(a) {
            super(a)
        }
        V() {
            return D(this, Ri, 1)
        }
        l() {
            return y(this, 2)
        }
    };
    var ij = class extends w {
            constructor(a) {
                super(a)
            }
            getName() {
                return y(this, 4)
            }
        },
        jj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        kj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        lj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        mj = [1, 2, 3];
    var nj = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var pj = class extends w {
            constructor(a) {
                super(a, -1, oj)
            }
        },
        qj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        oj = [1];
    var sj = class extends w {
            constructor(a) {
                super(a, -1, rj)
            }
        },
        rj = [3, 4];
    var tj = class extends w {
        constructor(a) {
            super(a)
        }
    };

    function uj() {
        var a = new vj;
        return z(a, 2, 1)
    }
    var vj = class extends w {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return z(this, 1, a)
        }
    };
    var xj = class extends w {
            constructor(a) {
                super(a, -1, wj)
            }
            V() {
                return D(this, Ri, 1)
            }
            l() {
                return y(this, 2)
            }
        },
        wj = [6, 7, 9, 10, 11];
    var zj = class extends w {
            constructor(a) {
                super(a, -1, yj)
            }
        },
        yj = [4];
    var Aj = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var Cj = class extends w {
            constructor(a) {
                super(a, -1, Bj)
            }
        },
        Ej = class extends w {
            constructor(a) {
                super(a, -1, Dj)
            }
        },
        Fj = class extends w {
            constructor(a) {
                super(a)
            }
            ub() {
                return J(this, 1)
            }
            Zb() {
                return ac(this, 2, 0)
            }
        },
        Gj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Hj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Ij = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Bj = [1],
        Dj = [1],
        Jj = [1, 2];

    function Kj(a) {
        return D(a, Lj, 13)
    }

    function Mj(a) {
        return D(a, Nj, 15)
    }
    var Pj = class extends w {
            constructor(a) {
                super(a, -1, Oj)
            }
        },
        Qj = class extends w {
            constructor() {
                super(void 0)
            }
        },
        Rj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Tj = class extends w {
            constructor(a) {
                super(a, -1, Sj)
            }
        },
        Uj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Vj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Lj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Wj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Nj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Xj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Yj = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Oj = [1, 2, 5, 7],
        Sj = [2, 5, 6, 11];
    var Zj = class extends w {
        constructor() {
            super(void 0)
        }
    };
    var zc = {
        Ch: 0,
        tg: 1,
        wg: 2,
        ug: 3,
        vg: 4,
        Cg: 8,
        Nh: 9,
        ah: 10,
        bh: 11,
        Jh: 16,
        gg: 17,
        fg: 24,
        Zg: 25,
        Cf: 26,
        Bf: 27,
        kd: 30,
        Ug: 32,
        Wg: 40
    };
    var ak = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        },
        bk = {
            [1]: 1,
            [2]: 1,
            [3]: 1,
            [4]: 1,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function ck(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.jb = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                ma(c) && (a.F = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                Vg(a.B) && Vg(a.l) || V("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.H(b)
    }
    class dk {
        constructor() {
            this.D = this.F = this.A = this.jb = null;
            this.l = this.B = 0
        }
        H() {
            return !0
        }
    };
    var W = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        ek = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        fk = class {
            constructor(a, b = []) {
                this.j = a;
                this.defaultValue = b
            }
        };
    var gk = new W(1084),
        hk = new W(1082, !0),
        ik = new W(236),
        jk = new W(383, !0),
        kk = new ek(1130),
        lk = new ek(1126, 5E3),
        mk = new ek(1032),
        nk = new class {
            constructor(a, b = "") {
                this.j = a;
                this.defaultValue = b
            }
        }(14),
        ok = new ek(1044),
        pk = new W(1132),
        qk = new W(1131),
        rk = new ek(1103),
        sk = new ek(1116, 300),
        tk = new ek(1117, 100),
        uk = new W(1121),
        vk = new ek(1119),
        wk = new W(1122),
        xk = new W(316),
        yk = new W(334),
        zk = new ek(54),
        Ak = new W(313),
        Bk = new ek(66, -1),
        Ck = new ek(65, -1),
        Dk = new W(369),
        Ek = new W(368),
        Fk = new W(1087),
        Gk = new W(265),
        Hk = new W(1120),
        Ik =
        new W(1135),
        Jk = new W(1102, !0),
        Kk = new W(260),
        Lk = new W(1133),
        Mk = new ek(1072),
        Nk = new W(290),
        Ok = new W(190),
        Pk = new W(1036, !0),
        Qk = new W(154),
        Rk = new W(1127),
        Sk = new W(380254521),
        Tk = new W(381914117),
        Uk = new W(83),
        Vk = new W(360245598),
        Wk = new ek(1927),
        Xk = new fk(1934, ["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
            "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"
        ]),
        Yk = new W(77),
        Zk = new W(78),
        $k = new W(309),
        al = new W(1959),
        bl = new W(1953, !0),
        cl = new W(1960),
        dl = new W(80),
        el = new W(76),
        fl = new W(81),
        gl = new W(1957),
        hl = new W(380025941),
        il = new W(84),
        jl = new W(188),
        kl = new W(1928),
        ll = new W(1941),
        ml = new W(370946349),
        nl = new W(392736476),
        ol = new ek(406149835),
        pl = new fk(1932, ["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
            "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        ql = new ek(397907552, 500),
        rl = new W(419638674),
        sl = new ek(1935);
    var tl = class {
            constructor() {
                const a = {};
                this.B = (b, c) => null != a[b] ? a[b] : c;
                this.C = (b, c) => null != a[b] ? a[b] : c;
                this.j = (b, c) => null != a[b] ? a[b] : c;
                this.l = () => {};
                this.A = () => {}
            }
        },
        X = a => R(tl).B(a.j, a.defaultValue),
        ul = a => R(tl).C(a.j, a.defaultValue);

    function vl(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new wl;
        return a.google_reactive_ads_global_state
    }
    class wl {
        constructor() {
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
            this.floatingAdsStacking = new xl;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var xl = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var yl = 728 * 1.38,
        zl = (a, b = 420) => (a = Y(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        Al = a => {
            var b = Y(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        Cl = a => Math.max(0, Bl(a, !0) - Y(a).clientHeight),
        Y = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        Bl = (a, b) => {
            const c = Y(a);
            return b ? c.scrollHeight == Y(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        El = (a, b) => Dl(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        Fl = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        Gl = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        Hl = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Il = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        Jl = (a, b, c, d, e) => {
            xh(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        Dl = a => 26 === a || 27 === a || 40 === a;

    function Kl(a, b = []) {
        const c = Date.now();
        return $a(b, d => c - d < 1E3 * a)
    }

    function Ll(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || cb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = Kl(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function Ml(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : Ll(a, b)
    };
    var Nl = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= Al(a);
            d |= zl(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = Ml(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            X(hl) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class Ol extends dk {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.G = !1
        }
        H(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = lc(Pj, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.G = !0);
            return !0
        }
    };
    var Pl = (a, b = !1) => {
        try {
            return b ? (new We(a.innerWidth, a.innerHeight)).round() : gf(a || window).round()
        } catch (c) {
            return new We(-12245933, -12245933)
        }
    };

    function Ql(a = t) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function Rl(a, b = t) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new Ve(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function Sl(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var Tl = !qb && !Sa();

    function Ul(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (Tl && a.dataset) {
            if (Ua() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var Vl = (a, b, c) => {
            if (!b) return null;
            const d = lf(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = Y(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var l = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = l - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        Xl = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, uf() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768), Wl(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        Wl = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == Ul(a[b])) return !0;
            return !1
        };
    let Yl = (new Date).getTime();
    var Zl = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var $l = {
        Og: 0,
        Ng: 1,
        Kg: 2,
        Fg: 3,
        Lg: 4,
        Gg: 5,
        Mg: 6,
        Ig: 7,
        Jg: 8,
        Eg: 9,
        Hg: 10
    };
    var am = {
        Qg: 0,
        Rg: 1,
        Pg: 2
    };

    function bm(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function cm(a) {
        a = ab(a, b => new mg(b.top, b.right, b.bottom, b.left));
        a = dm(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function dm(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return bb(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, ng(a[0]))
    };

    function em(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }
    var hm = class {
        constructor() {
            this.l = new fm(this);
            this.j = 0
        }
        resolve(a) {
            em(this);
            this.j = 1;
            this.B = a;
            gm(this.l)
        }
    };

    function gm(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var fm = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.A = b;
            gm(this)
        }
    };

    function im(a, b) {
        jm(a).forEach(b, void 0)
    }

    function jm(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function km(a, b) {
        return void 0 !== a.j[lm(b)]
    }

    function mm(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function nm(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const om = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = lm(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = lm(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = lm(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        Ua() {
            return mm(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function lm(a) {
        return a instanceof Object ? String(na(a)) : a + ""
    };
    const pm = class {
        constructor(a) {
            this.j = new om;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return km(this.j, a)
        }
    };
    const qm = new pm("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    var tm = (a, b) => {
        const c = new rm(a, b);
        return () => sm(c)
    };

    function sm(a) {
        if (a.j) return !1;
        if (null == a.l) return um(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return um(a), !0;
        vm(a, b);
        return !0
    }

    function um(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function vm(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            um(a)
        }, b)
    }
    class rm {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function wm(a, b) {
        return {
            top: a.j - b,
            right: a.A + a.l,
            bottom: a.j + b,
            left: a.A
        }
    }
    class xm {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };

    function ym(a, b) {
        a = a.getBoundingClientRect();
        return new zm(a.top + Gl(b), a.bottom - a.top)
    }

    function Am(a) {
        return new zm(Math.round(a.j), Math.round(a.l))
    }
    class zm {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };

    function Bm(a, b) {
        a.D ? b(a.A) : a.l.push(b)
    }

    function Cm(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class Dm {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.G = tm(a, () => {
                if (null != this.C) {
                    var b = Bl(this.j, !0) - this.C;
                    1E3 < b && Cm(this, b)
                }
            });
            this.B = null
        }
        init(a, b) {
            null == a ? (this.C = a = Bl(this.j, !0), this.j.addEventListener("scroll", this.G), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        qb() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.G);
            this.l = [];
            this.A = null
        }
    };
    var Em = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Fm {
        constructor(a = 1) {
            this.j = a
        }
    };

    function Gm(a, b) {
        a.j.forEach((c, d) => void b(c, d, a))
    }

    function Hm(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new Im(d)
    }

    function Jm(a, b = 1) {
        a = a.j.slice(0);
        const c = new Fm(b);
        kb(a, () => {
            var d = 48271 * c.j % 2147483647;
            c.j = 0 > 2147483647 * d ? d + 2147483647 : d;
            return c.j / 2147483647
        });
        return new Im(a)
    }
    const Im = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        filter(a) {
            return new Im($a(this.j, a))
        }
        apply(a) {
            return new Im(a(this.j.slice(0)))
        }
        sort(a) {
            return new Im(this.j.slice(0).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new Im(b)
        }
    };
    class Km {
        constructor(a) {
            this.j = new pm(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function Lm(a, b, c = !1) {
        a.l.push(b);
        c && b(a.j)
    }

    function Mm(a, b) {
        a.j = b;
        Ya(a.l, c => {
            c(a.j)
        })
    }

    function Nm(a, b) {
        Lm(b, c => Mm(a, c), !0)
    }
    class Om {
        constructor(a) {
            this.j = a;
            this.l = []
        }
        map(a) {
            const b = new Om(a(this.j));
            Lm(this, c => Mm(b, a(c)));
            return b
        }
    };

    function Pm(a) {
        return new Qm({
            value: a
        }, null)
    }

    function Rm(a) {
        return new Qm(null, Error(a))
    }

    function Sm(a) {
        try {
            return Pm(a())
        } catch (b) {
            return new Qm(null, b)
        }
    }

    function Tm(a) {
        return null != a.j ? a.j.value : null
    }

    function Um(a, b) {
        null != a.j && b(a.j.value)
    }

    function Vm(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class Qm {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof Qm ? a : Pm(a)) : this
        }
    };
    class Wm {
        constructor() {
            this.j = new om
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new pm, this.j.set(a, c));
            c.add(b)
        }
    };
    class Xm {
        constructor(a, {
            vc: b,
            qd: c,
            Zd: d,
            Xc: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new Im(b || []);
            this.l = e;
            this.j = d
        }
    };
    var Ym = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new om;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        $m = a => {
            var b = Zm(a);
            a = [];
            for (let c of b) b = String(c.Oa), a.push(c.xa + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Zm = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                xa: "a",
                Oa: an(c)
            });
            null != a.A && b.push({
                xa: "as",
                Oa: a.A
            });
            null != a.j && b.push({
                xa: "i",
                Oa: String(a.j)
            });
            null != a.l && b.push({
                xa: "rp",
                Oa: String(a.l)
            });
            b.sort(function(d, e) {
                return d.xa.localeCompare(e.xa)
            });
            b.unshift({
                xa: "t",
                Oa: bn(a.C)
            });
            return b
        },
        bn = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        an = a => {
            a = a.j.slice(0).map(cn);
            a = JSON.stringify(a);
            return Jf(a)
        },
        cn = a => {
            const b = {};
            null != y(a, 7) && (b.q = y(a, 7));
            null !=
                y(a, 2) && (b.o = y(a, 2));
            null != y(a, 5) && (b.p = y(a, 5));
            return b
        };

    function dn(a) {
        const b = [].slice.call(arguments).filter(he(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.yc || []);
            d = Object.assign(d, e.Va())
        });
        return new en(c, d)
    }

    function fn(a) {
        switch (a) {
            case 1:
                return new en(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new en(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new en(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new en(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function gn(a) {
        return null == a ? null : new en(null, {
            google_placement_id: $m(a)
        })
    }
    class en {
        constructor(a, b) {
            this.yc = a;
            this.j = b
        }
        Va() {
            return this.j
        }
    };
    var hn = class extends w {
        constructor(a) {
            super(a)
        }
    };

    function jn(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? lc(hn, b) : null
        } catch (b) {
            return null
        }
    }

    function kn(a, b) {
        if (void 0 !== a.Ub) {
            let c = jn(b);
            c || (c = new hn);
            void 0 !== a.Ub && z(c, 2, a.Ub);
            z(c, 1, va() + 864E5);
            a = kc(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = jn(b)) && y(a, 1) < va()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function ln(a) {
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
    }

    function mn(a) {
        return jm(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function nn(a, b) {
        a = tf(new ef(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function on(a, b, c) {
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
        ln(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function pn(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            ln(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var rn = (a, b, c, d = 0) => {
            var e = qn(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.tb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Gb
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            on(a, e.anchor, e.position)
        },
        sn = (a, b, c, d = 0) => {
            X(Ak) ? rn(a, b, c, d) : on(a, b, c)
        };

    function qn(a, b, c) {
        const d = f => {
                f = tn(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = tn(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: un(a.previousSibling, d),
                    tb: f => un(f.previousSibling, d),
                    Gb: 0
                };
            case 2:
                return {
                    init: un(a.lastChild, d),
                    tb: f => un(f.previousSibling, d),
                    Gb: 0
                };
            case 3:
                return {
                    init: un(a.nextSibling, e),
                    tb: f => un(f.nextSibling, e),
                    Gb: 3
                };
            case 1:
                return {
                    init: un(a.firstChild, e),
                    tb: f => un(f.nextSibling, e),
                    Gb: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function tn(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function un(a, b) {
        return a && b(a) ? a : null
    };
    var vn = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        wn = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        xn = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const yn = (a, b, c) => {
        a = vn(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var zn = (a, b) => {
            b = b.parentElement;
            return b ? (a = Ff(b, a)) ? a.direction : "" : ""
        },
        An = (a, b, c) => {
            if (0 === yn(a, b, c)) return !1;
            xn(b, c, "0px");
            const d = yn(a, b, c);
            xn(b, c, -1 * d + "px");
            a = yn(a, b, c);
            0 !== a && a !== d && xn(b, c, d / (a - d) * d + "px");
            return !0
        };
    const Bn = RegExp("(^| )adsbygoogle($| )");

    function Cn(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = bf(d.kc);
            a[e] = d.value
        }
    }

    function Dn(a, b, c, d, e, f) {
        a = En(a, e);
        a.ga.setAttribute("data-ad-format", d ? d : "auto");
        Fn(a, b, c, f);
        return a
    }

    function Gn(a, b, c = null) {
        a = En(a, {});
        Fn(a, b, null, c);
        return a
    }

    function Fn(a, b, c, d) {
        var e = [];
        if (d = d && d.yc) a.Ca.className = d.join(" ");
        a = a.ga;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function En(a, b) {
        var c = nn(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.Fb && Cn(d, b.Fb);
        a = tf(new ef(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.rc && (d.marginTop = b.rc);
        b.Pb && (d.marginBottom = b.Pb);
        b.Ma && Cn(d, b.Ma);
        c.appendChild(a);
        return {
            Ca: c,
            ga: a
        }
    }

    function Hn(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.Va();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function In(a) {
        var b = mn(a.document);
        Ya(b, function(c) {
            var d = Jn(a, c),
                e;
            if (e = d) e = vn(c, a), e = !((e ? e.y : 0) < Y(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), Hn(a, c))
        })
    }

    function Jn(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in Me) a[Me[c]] && (b[Me[c]] = a[Me[c]]);
        return b
    };
    const Kn = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = -1 != b.indexOf("&") ? Ye(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && qm.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Kn(a, b[c])) return !0
        }
        return !1
    };
    var Ln = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    var Mn = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return Dn(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return Ln(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function Nn(a) {
        var b = [];
        im(a.getElementsByTagName("p"), function(c) {
            100 <= On(c) && b.push(c)
        });
        return b
    }

    function On(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        im(a.childNodes, function(c) {
            b += On(c)
        });
        return b
    }

    function Pn(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Qn(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }

    function Rn(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.B)
        } catch (g) {}
        if (!c.length) return [];
        b = hb(c);
        b = Qn(a, b);
        "number" === typeof a.l && (c = a.l, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.A) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Nn(b[d]),
                    f = a.A;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const Sn = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };

    function Tn(a) {
        if (!a) return null;
        var b = y(a, 7);
        if (y(a, 1) || a.getId() || 0 < Zb(a, 4).length) {
            var c = a.getId();
            b = Zb(a, 4);
            var d = y(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Pn(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Pn(b[c]);
            a = (b = e) ? new Sn(b, y(a, 2), y(a, 5), Un(y(a, 6))) : null
        } else a = b ? new Sn(b, y(a, 2), y(a, 5), Un(y(a, 6))) : null;
        return a
    }
    var Vn = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Un(a) {
        return null == a ? a : Vn[a]
    }

    function Wn(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = y(a[c], 1),
                e = y(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.kc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Xn(a, b) {
        var c = {};
        a && (c.rc = y(a, 1), c.Pb = y(a, 2), c.clearBoth = !!B(a, 3));
        b && (c.Fb = Wn(G(b, Pi, 3)), c.Ma = Wn(G(b, Pi, 4)));
        return c
    }
    var Yn = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Zn = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const $n = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return Dn(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };
    class ao {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Ln(a);
            return new en(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    var bo = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.B
        }
        l() {
            return this.A
        }
    };
    const co = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < G(this.j, sj, 9).length ? G(this.j, sj, 9)[0] : null,
                f = Xn(D(this.j, tj, 3), e);
            if (!e) return null;
            if (e = y(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = tf(new ef(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Fb && Cn(c.style, f.Fb);
                d = tf(new ef(d), "INS");
                f.Ma && Cn(d.style, f.Ma);
                c.appendChild(d);
                f = {
                    Ca: c,
                    ga: d
                };
                f.ga.setAttribute("data-ad-type", "text");
                f.ga.setAttribute("data-native-settings-key",
                    e);
                Fn(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < G(this.j, sj, 9).length ? G(this.j, sj, 9)[0] : null;
            if (!a) return null;
            a = G(a, Pi, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == y(c, 1) && 0 < parseInt(y(c, 2), 10)) return parseInt(y(c, 2), 10)
            }
            return null
        }
    };
    var eo = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const l = c.item(h);
                    "width" !== l && "height" !== l && g.push({
                        kc: l,
                        value: c.getPropertyValue(l)
                    })
                }
                c = {
                    Ma: g
                }
            } else c = {};
            a = Dn(d.document, a, f, e, c, b);
            a.ga.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        Va() {
            return this.j
        }
    };
    class fo {
        constructor(a) {
            this.l = a
        }
        j() {
            return new en([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    var go = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.A
        }
        j(a) {
            a = Rn(this.B, a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function ho(a, b, c, d) {
        var e = a.V();
        if (!e) return null;
        var f = Tn(e);
        if (!f) return null;
        var g = Yn[a.l()];
        var h = void 0 === g ? null : g;
        if (null === h) return null;
        g = (g = D(a, tj, 3)) ? B(g, 3) : null;
        f = new go(f, h);
        h = Zb(a, 10).slice(0);
        Yb(e, 5) && h.push(1);
        var l = d ? d : {};
        d = y(a, 12);
        e = Yb(a, 4) ? D(a, vj, 4) : null;
        switch (y(a, 8)) {
            case 1:
                return l = l.Hd || null, new io(f, new $n(Xn(D(a, tj, 3), null)), l, g, 0, h, e, c, b, d, a);
            case 2:
                return new io(f, new co(a), l.$d || new fo("text"), g, 1, h, e, c, b, d, a)
        }
        return null
    }

    function jo(a, b, c) {
        const d = [];
        for (let e = 0; e < a.length; e++) {
            const f = ho(a[e], e, b, c);
            null !== f && d.push(f)
        }
        return d
    }

    function ko(a) {
        return a.B
    }

    function lo(a) {
        return a.D instanceof eo ? a.D.Va() : null
    }

    function mo(a, b, c) {
        km(a.L, b) || a.L.set(b, []);
        a.L.get(b).push(c)
    }

    function no(a) {
        return nn(a.j.document, a.I || !1)
    }

    function oo(a) {
        return a.D.A(a.j)
    }

    function po(a, b = null, c = null) {
        return new io(a.H, b || a.D, c || a.U, a.I, a.Fa, a.hc, a.Za, a.j, a.Z, a.G, a.A, a.C, a.R)
    }
    class io {
        constructor(a, b, c, d, e, f, g, h, l, k = null, m = null, p = null, q = null) {
            this.H = a;
            this.D = b;
            this.U = c;
            this.I = d;
            this.Fa = e;
            this.hc = f;
            this.Za = g ? g : new vj;
            this.j = h;
            this.Z = l;
            this.G = k;
            this.A = m;
            this.C = p;
            this.R = q;
            this.J = [];
            this.B = !1;
            this.L = new om
        }
        N() {
            return this.j
        }
        l() {
            return this.H.l()
        }
    };
    const qo = {
        TABLE: {
            Qa: new Km([1, 2])
        },
        THEAD: {
            Qa: new Km([0, 3, 1, 2])
        },
        TBODY: {
            Qa: new Km([0, 3, 1, 2])
        },
        TR: {
            Qa: new Km([0, 3, 1, 2])
        },
        TD: {
            Qa: new Km([0, 3])
        }
    };

    function ro(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Xa(e, f), 0 > c || b.push(new so(a, [f], c, f, 3, pf(f).trim(), d));
        return b
    }

    function to(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            l = "";
        for (let p = 0; p < g; p++) {
            var k = f[p];
            if (1 == k.nodeType || 3 == k.nodeType) {
                a: {
                    var m = k;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const q = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == q || "inline-block" == q ? null : m
                }
                m ? (d.length && l && e.push(new so(a, d, p - 1, m, 0, l, c)), d = [], h = p + 1, l = "") : (d.push(k), k = pf(k).trim(), l += k && l ? " " + k : k)
            }
        }
        d.length && l && e.push(new so(a, d, h, b, 2, l, c));
        return e
    }

    function uo(a, b) {
        return a.j - b.j
    }

    function vo(a) {
        const b = uj();
        return new io(new bo(a.Lb, a.Mb), new $n({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.A, a.j)
    }
    class so {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.Pa = b.slice(0);
            this.j = c;
            this.Lb = d;
            this.Mb = e;
            this.B = f;
            this.l = g
        }
        N() {
            return this.l
        }
    };

    function wo(a) {
        return fb(a.B ? to(a.j, a.na, a.l) : [], a.A ? ro(a.j, a.A, a.na, a.l) : []).filter(b => {
            var c = b.Lb.tagName;
            c ? (c = qo[c.toUpperCase()], b = null != c && c.Qa.contains(b.Mb)) : b = !1;
            return !b
        })
    }
    class xo {
        constructor(a, b, c) {
            this.na = a;
            this.A = b.ob;
            this.B = b.Dc;
            this.j = b.articleStructure;
            this.l = c
        }
    };

    function yo(a, b) {
        if (!b) return !1;
        const c = na(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = yo(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function zo(a, b) {
        return cb(b.Pa, c => yo(a, c))
    }
    class Ao {
        constructor(a) {
            this.j = new om;
            this.l = a
        }
    };
    class Bo {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var Do = (a, {
            ji: b = !1,
            li: c = 3,
            De: d = null
        } = {}) => {
            a = wo(a);
            return Co(a, b, c, d)
        },
        Co = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(uo);
            a = [];
            b = new Bo(b, d);
            for (const k of e) {
                d = b;
                e = {
                    Hb: k,
                    zb: 51 > k.B.length ? !1 : null != d.A ? !zo(d.A, k) : !0
                };
                if (d.B || e.zb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].Hb;
                        b: {
                            var g = f.N();
                            var h = f.Pa[f.Pa.length - 1];f = e.Hb.Pa[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var l = h.parentElement;
                            const m = f.parentElement;
                            if (l && m && l == m) {
                                l = 0;
                                for (h = h.nextSibling; 10 >
                                    l && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (Kn(g, h)) break;
                                    h = h.nextSibling;
                                    l++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.zb && d.l.push(e.Hb)) : (d.j = [e], d.l = e.zb ? [e.Hb] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].zb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var Fo = (a, b) => {
            a = Eo(a, b);
            const c = new Ao(b);
            return Em(a, d => Do(d, {
                De: c
            }))
        },
        Eo = (a, b) => {
            const c = new om;
            a.forEach(d => {
                var e = Tn(D(d, Ri, 1));
                if (e) {
                    const f = e.toString();
                    km(c, f) || c.set(f, {
                        articleStructure: d,
                        xd: e,
                        ob: null,
                        Dc: !1
                    });
                    e = c.get(f);
                    (d = (d = D(d, Ri, 2)) ? y(d, 7) : null) ? e.ob = e.ob ? e.ob + "," + d : d: e.Dc = !0
                }
            });
            return nm(c).map(d => {
                const e = Rn(d.xd, b.document);
                return e.length ? new xo(e[0], d, b) : null
            }).filter(d => null != d)
        };
    const Go = a => {
            a = a.na.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        Ho = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.na.getBoundingClientRect().width));
            return c => c.na.getBoundingClientRect().width > .5 * b
        },
        Io = a => {
            const b = Y(a).clientHeight || 0;
            return c => c.na.getBoundingClientRect().height >= .75 * b
        },
        Jo = (a, b) => a.na.getBoundingClientRect().top - b.na.getBoundingClientRect().top;
    var Ko = a => (null == a ? 0 : a.google_ad_slot) ? Pm(new Xm(1, {
            qd: a.google_ad_slot
        })) : Rm("Missing dimension when creating placement id"),
        Mo = a => {
            switch (a.Fa) {
                case 0:
                case 1:
                    var b = a.A;
                    null == b ? a = null : (a = b.V(), null == a ? a = null : (b = b.l(), a = null == b ? null : new Xm(0, {
                        vc: [a],
                        Xc: b
                    })));
                    return null != a ? Pm(a) : Rm("Missing dimension when creating placement id");
                case 2:
                    return a = Lo(a), null != a ? Pm(a) : Rm("Missing dimension when creating placement id");
                default:
                    return Rm("Invalid type: " + a.Fa)
            }
        };
    const Lo = a => {
        if (null == a || null == a.C) return null;
        const b = D(a.C, Ri, 1),
            c = D(a.C, Ri, 2);
        if (null == b || null == c) return null;
        const d = a.R;
        if (null == d) return null;
        a = a.l();
        return null == a ? null : new Xm(0, {
            vc: [b, c],
            Zd: d,
            Xc: Zn[a]
        })
    };

    function No(a) {
        const b = lo(a.O);
        return (b ? Ko(b) : Mo(a.O)).map(c => $m(c))
    }

    function Oo(a) {
        a.j = a.j || No(a);
        return a.j
    }

    function Po(a, b) {
        if (a.O.B) throw Error("AMA:AP:AP");
        sn(b, a.V(), a.O.l());
        a = a.O;
        a.B = !0;
        null != b && a.J.push(b)
    }
    var Qo = class {
        constructor(a, b, c) {
            this.O = a;
            this.l = b;
            this.T = c;
            this.j = null
        }
        V() {
            return this.l
        }
        fill(a, b) {
            var c = this.O;
            (a = c.D.l(a, b, this.l, c.j)) && Po(this, a.Ca);
            return a
        }
    };
    var Ro = si(754, function(a, b) {
        var c = [],
            d = [];
        try {
            for (var e = [], f = 0; f < a.length; f++) {
                var g = a[f],
                    h = g.H.j(g.j);
                h && e.push({
                    Uc: g,
                    anchorElement: h
                })
            }
            for (f = 0; f < e.length; f++) {
                a = d;
                var l = a.push;
                var k = e[f],
                    m = k.anchorElement,
                    p = k.Uc,
                    q = p.I,
                    r = p.j.document.createElement("div");
                r.className = "google-auto-placed";
                var u = r.style;
                u.textAlign = "center";
                u.width = "100%";
                u.height = "0px";
                u.clear = q ? "both" : "none";
                var x = r;
                try {
                    sn(x, m, p.l());
                    var H = x
                } catch (E) {
                    throw pn(x), E;
                }
                l.call(a, H)
            }
            var A = Gl(b),
                C = Hl(b);
            for (f = 0; f < d.length; f++) {
                b = C;
                l = A;
                var F =
                    d[f].getBoundingClientRect(),
                    I = e[f];
                c.push(new Qo(I.Uc, I.anchorElement, new xm(F.left + b, F.top + l, F.right - F.left)))
            }
        } finally {
            for (f = 0; f < d.length; f++) pn(d[f])
        }
        return c
    });

    function So(a, b) {
        const c = wo(b);
        c.sort(uo);
        return new To(a, b, c)
    }

    function Uo(a) {
        if (!a.l) {
            if (a.A >= a.B.length) var b = null;
            else {
                {
                    const c = a.B[a.A++].Pa[0];
                    ma(c) && 1 == c.nodeType ? b = Vo(a, c, 0) : (b = a.j.document.createElement("div"), K(b, {
                        display: "none"
                    }), c.parentNode.insertBefore(b, c), b = Vo(a, b, 3))
                }
                b = Ro([b], a.j)[0] || null
            }
            if (b) return b;
            a.l = !0
        }
        return null
    }

    function Vo(a, b, c) {
        return new io(new bo(b, c), new $n({}), null, !0, 2, [], null, a.j, null, null, null, a.C.j, null)
    }
    var To = class {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.B = c;
            this.l = !1;
            this.A = 0
        }
    };
    var Wo = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return Uo(this.l)
        }
    };
    const Xo = {
            1: "0.5vp",
            2: "300px"
        },
        Yo = {
            1: 700,
            2: 1200
        },
        Zo = {
            [1]: {
                dd: "3vp",
                pc: "1vp",
                cd: "0.3vp"
            },
            [2]: {
                dd: "900px",
                pc: "300px",
                cd: "90px"
            }
        };

    function $o(a) {
        const b = ap(a);
        return bp(b, Y(a).clientHeight || Yo[b])
    }
    class cp {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function dp(a, b) {
        for (let c of a)
            if (y(c, 1) == b) return c;
        return null
    }

    function ep(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = y(d, 1);
            const e = fp(y(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                oc: {
                    Eb: e,
                    va: fp(y(d, 3), b)
                }
            })
        }
        return c
    }

    function gp(a, b) {
        const c = fp(y(a, 2), b),
            d = fp(y(a, 5), b);
        if (null === c) return null;
        const e = y(a, 4);
        if (null == e) return null;
        var f = G(a, aj, 3);
        f = ep(f, b);
        if (null === f) return null;
        const g = D(a, bj, 7);
        return new cp(c, d, f, e, $b(a, 6), g ? hp(g, b) : void 0)
    }

    function bp(a, b) {
        a = fp(Xo[a], b);
        return new cp(null === a ? Infinity : a, null, [], 3, null)
    }

    function fp(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function ap(a) {
        a = 900 <= Y(a).clientWidth;
        return uf() && !a ? 1 : 2
    }

    function ip(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            oc: {
                Eb: 2 * a,
                va: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            oc: {
                Eb: 3 * a,
                va: 3 * b
            }
        }]
    }

    function hp(a, b) {
        return {
            Qc: fp(y(a, 2), b) || 0,
            Oc: y(a, 3) || 1,
            Na: fp(y(a, 1), b) || 0
        }
    };

    function jp(a, b, c) {
        return bm({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function kp(a) {
        if (!a.length) return null;
        const b = cm(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new lp(b, a)
    }
    class lp {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function mp(a = window) {
        a = a.googletag;
        return (null === a || void 0 === a ? 0 : a.apiReady) ? a : void 0
    };
    var sp = (a, b) => {
        const c = hb(b.document.querySelectorAll(".google-auto-placed")),
            d = np(b),
            e = op(b),
            f = pp(b),
            g = qp(b),
            h = hb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = hb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        let k = [].concat(hb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), hb(b.document.querySelectorAll("ins.adsbygoogle")));
        b = [];
        for (const [m, p] of [
                [a.wb, c],
                [a.Ea, d],
                [a.Yd, e],
                [a.xb, f],
                [a.yb, g],
                [a.Wd, h],
                [a.Xd, l]
            ]) a = p, !1 === m ? b = b.concat(a) :
            k = k.concat(a);
        a = rp(k);
        b = rp(b);
        a = a.slice(0);
        for (const m of b)
            for (b = 0; b < a.length; b++)(m.contains(a[b]) || a[b].contains(m)) && a.splice(b, 1);
        return a
    };
    const tp = a => {
            const b = mp(a);
            return b ? $a(ab(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        np = a => hb(a.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')),
        op = a => hb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        pp = a => (tp(a) || hb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(hb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        qp = a => hb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var rp = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var up = si(453, sp),
        vp = si(454, (a, b) => {
            const c = hb(b.document.querySelectorAll(".google-auto-placed")),
                d = np(b),
                e = op(b),
                f = pp(b),
                g = qp(b),
                h = hb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
            b = hb(b.document.querySelectorAll("div.googlepublisherpluginad"));
            return rp([].concat(!0 === a.wb ? c : [], !0 === a.Ea ? d : [], !0 === a.Yd ? e : [], !0 === a.xb ? f : [], !0 === a.yb ? g : [], !0 === a.Wd ? h : [], !0 === a.Xd ? b : []))
        });

    function wp(a, b, c) {
        const d = xp(a);
        b = yp(d, b, c);
        return new zp(a, d, b)
    }

    function Ap(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function Bp(a) {
        return a.j.map(b => b.box)
    }

    function Cp(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class zp {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function xp(a) {
        const b = up({
                Ea: !1
            }, a),
            c = Hl(a),
            d = Gl(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || Ap(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                gi: e ? 1 : 0
            } : null
        }).filter(he(e => null === e))
    }

    function yp(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? Dp(a, b) : ab(a, d => new lp(d.box, 1))
    }

    function Dp(a, b) {
        a = ab(a, d => new lp(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (jp(d, a[f], b)) {
                        d = kp([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Ep(a, b, c) {
        const d = wm(c, b);
        return !cb(a, e => bm(e, d))
    }

    function Fp(a, b, c, d, e) {
        e = e.T;
        const f = wm(e, b),
            g = wm(e, c),
            h = wm(e, d);
        return !cb(a, l => bm(l, g) || bm(l, f) && !bm(l, h))
    }

    function Gp(a, b, c, d) {
        const e = Bp(a);
        if (Ep(e, b, d.T)) return !0;
        if (!Fp(e, b, c.Qc, c.Na, d)) return !1;
        const f = new lp(wm(d.T, 0), 1);
        a = $a(a.B, g => jp(g, f, c.Na));
        b = bb(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.Oc ? !1 : !0
    };
    var Mp = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Np(a, b) {
        const c = new Wm,
            d = new pm;
        b.forEach(e => {
            if (nc(e, jj, 1, mj)) {
                e = nc(e, jj, 1, mj);
                if (D(e, hj, 1) && D(e, hj, 1).V() && D(e, hj, 2) && D(e, hj, 2).V()) {
                    const g = Op(a, D(e, hj, 1).V()),
                        h = Op(a, D(e, hj, 2).V());
                    if (g && h)
                        for (var f of Mp({
                                anchor: g,
                                position: D(e, hj, 1).l()
                            }, {
                                anchor: h,
                                position: D(e, hj, 2).l()
                            })) c.set(na(f.anchor), f.position)
                }
                D(e, hj, 3) && D(e, hj, 3).V() && (f = Op(a, D(e, hj, 3).V())) && c.set(na(f), D(e, hj, 3).l())
            } else nc(e, kj, 2, mj) ? Pp(a, nc(e, kj, 2, mj), c) : nc(e, lj, 3, mj) && Qp(a, nc(e, lj, 3, mj), d)
        });
        return new Rp(c, d)
    }
    class Rp {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Pp = (a, b, c) => {
            D(b, Ri, 1) && (a = Sp(a, D(b, Ri, 1))) && a.forEach(d => {
                d = na(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Qp = (a, b, c) => {
            D(b, Ri, 1) && (a = Sp(a, D(b, Ri, 1))) && a.forEach(d => {
                c.add(na(d))
            })
        },
        Op = (a, b) => (a = Sp(a, b)) && 0 < a.length ? a[0] : null,
        Sp = (a, b) => (b = Tn(b)) ? Rn(b, a) : null;

    function Tp(a, b, c) {
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
            if (Up(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function Vp(a) {
        a = Wp(a);
        return a.has("all") || a.has("after")
    }

    function Xp(a) {
        a = Wp(a);
        return a.has("all") || a.has("before")
    }

    function Wp(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Up(a) {
        const b = Wp(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var Yp = class {
        constructor() {
            this.j = new Set
        }
    };

    function Zp(a) {
        return function(b) {
            return Ro(b, a)
        }
    }

    function $p(a) {
        const b = Y(a).clientHeight;
        return b ? ua(aq, b + Gl(a)) : ee
    }

    function bq(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return ee;
        const d = Bp(c || wp(b));
        return e => Ep(d, a, e.T)
    }

    function cq(a, b, c, d) {
        if (0 > a || 0 > b.Qc || 0 > b.Oc || 0 > b.Na) throw Error("ama::ead:nd");
        return Infinity === a ? ee : e => Gp(d || wp(c, b.Na), a, b, e)
    }

    function dq(a) {
        if (!a.length) return ee;
        const b = new Km(a);
        return c => b.contains(c.Fa)
    }

    function eq(a) {
        return function(b) {
            for (let c of b.hc)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function fq(a) {
        return a.length ? function(b) {
            const c = b.hc;
            return a.some(d => -1 < c.indexOf(d))
        } : fe
    }

    function gq(a, b) {
        if (0 >= a) return fe;
        const c = Y(b).scrollHeight - a;
        return function(d) {
            return d.T.j <= c
        }
    }

    function hq(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[y(c.Za, 2) || 0]
        }
    }

    function iq(a) {
        return a.length ? b => a.includes(y(b.Za, 2) || 0) : fe
    }

    function jq(a) {
        return a.length ? b => a.includes(y(b.Za, 1) || 0) : fe
    }

    function kq(a, b) {
        const c = Np(a, b);
        return function(d) {
            var e = d.V();
            d = Zn[d.O.l()];
            var f = na(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(na(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(na(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function lq() {
        const a = new Yp;
        return function(b) {
            var c = b.V();
            b = Zn[b.O.l()];
            a: switch (b) {
                case 1:
                    var d = Vp(c.previousElementSibling) || Xp(c);
                    break a;
                case 4:
                    d = Vp(c) || Xp(c.nextElementSibling);
                    break a;
                case 2:
                    d = Xp(c.firstElementChild);
                    break a;
                case 3:
                    d = Vp(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || Tp(a, c, b))
        }
    }
    const aq = (a, b) => b.T.j >= a,
        mq = (a, b, c) => {
            c = c.T.l;
            return a <= c && c <= b
        };
    var nq = class {
        constructor(a, b) {
            this.A = a;
            this.l = b
        }
        j() {
            const a = $p(this.A);
            let b = Uo(this.l);
            for (; b;) {
                if (a(b)) return b;
                b = Uo(this.l)
            }
            return null
        }
    };
    var oq = class {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = new xj;
            var b = D(this.A.j, Ri, 1);
            a = gc(a, 1, b);
            a = z(a, 2, 2);
            a = z(a, 8, 1);
            a = jo([a], this.l);
            return Ro(a, this.l)[0] || null
        }
    };
    const pq = (a, b, c) => {
            a = a.createElement("script");
            de(a, Oc(tc(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        qq = {
            [1]: "out_of_view"
        };
    class rq {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function sq() {
        const {
            promise: a,
            resolve: b
        } = new rq;
        return {
            promise: a,
            resolve: b
        }
    };

    function tq(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = sq();
        b[a] = d;
        c();
        return d
    }

    function uq(a, b, c) {
        return tq(a, b, () => {
            Bf(b.document, c)
        }).promise
    };

    function vq(a, b, c) {
        return new wq(uq(7, a, c).then(d => {
            d.init(b);
            d.handleAdConfig({
                preloadAdBreaks: "on",
                sound: "on"
            });
            return d
        }).catch(ui(915)))
    }

    function xq(a, b) {
        a.j || (a.l.then(c => {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        }), a.j = !0)
    }
    var wq = class {
        constructor(a) {
            this.l = a;
            this.j = !1
        }
    };
    var yq = {
            ha: "ama_success",
            ca: .1,
            pa: !0
        },
        zq = {
            ha: "ama_failure",
            ca: .1,
            pa: !0
        },
        Aq = {
            ha: "ama_inf_scr",
            ca: .1,
            pa: !0
        },
        Bq = {
            ha: "ama_inf_scr",
            ca: .1,
            pa: !0
        },
        Cq = {
            ha: "ama_coverage",
            ca: .1,
            pa: !0
        },
        Dq = {
            ha: "ama_inf_scr",
            ca: 1,
            pa: !0
        },
        Eq = {
            ha: "ama_opt",
            ca: .1,
            pa: !0
        },
        Fq = {
            ha: "ama_aud_sen",
            ca: 1,
            pa: !0
        };

    function Gq(a, b) {
        for (var c = 0; c < b.length; c++) a.ia(b[c]);
        return a
    }

    function Hq(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class Iq {
        constructor(a) {
            this.G = {};
            this.G.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.H = 0
        }
        Ka(a) {
            this.G.wpc = a;
            return this
        }
        ia(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = Bc(this.G);
            0 < this.H && (b.t = this.H);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && Nh(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function Jq(a, b, c) {
        c = c.B(a.j);
        b.pa && (c.pvc = eg(a.j));
        0 < b.ca && (c.r = b.ca, V(b.ha, c, b.ca))
    }
    var Kq = class {
        constructor(a) {
            this.j = a
        }
    };

    function Lq(a, b, c, d) {
        let e;
        const f = null == (e = D(b, pj, 6)) ? void 0 : G(e, qj, 1);
        return f && 0 != f.length ? (b = D(b, Si, 27)) ? D(b, Ti, 2) ? Pm(new Mq(a, f, b, c, d)) : Rm("No AudioSenseConfig.PlacementConfig found") : Rm("No AudioSenseConfig found") : Rm("No ArticleStructure found")
    }

    function Nq(a) {
        a.A.addEventListener("playing", () => {
            a.C.j || (a.A.pause(), xq(a.C, () => a.A.play()))
        })
    }

    function Oq(a) {
        return (a = D(a.l, Vi, 3)) ? G(a, Wi, 1).some(b => 1 === ac(b, 1, 0)) : !1
    }

    function Pq(a, b) {
        let c;
        a = Object.assign({}, b, {
            vh: Y(a.j).clientHeight,
            eid: null == (c = D(a.l, Xi, 4)) ? void 0 : J(c, 2)
        });
        V(Fq.ha, a, Fq.ca)
    }
    var Mq = class {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.G = b;
            this.l = c;
            this.B = d;
            this.D = e;
            this.A = this.C = null
        }
    };
    const Qq = ["-webkit-text-fill-color"];

    function Rq(a) {
        if (tb) {
            {
                const c = Ff(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Sq(a)
                } else a = Tq()
            }
        } else a = Tq();
        return a
    }
    var Tq = () => {
        const a = {
            all: "initial"
        };
        Ya(Qq, b => {
            a[b] = "unset"
        });
        return a
    };

    function Sq(a) {
        Ya(Qq, b => {
            delete a[b]
        });
        return a
    };
    var Uq = class {
        constructor(a) {
            this.j = a
        }
        ta(a) {
            const b = a.document.createElement("div");
            K(b, Rq(a));
            K(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            K(c, Rq(a));
            K(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var Vq = (a, b) => (b = D(b, pj, 6)) ? Fo(G(b, qj, 1), a).map(c => vo(c)) : [];
    var Wq = {};

    function Xq() {
        throw Error("Do not instantiate directly");
    }
    Xq.prototype.j = null;
    Xq.prototype.ta = function() {
        return this.content
    };
    Xq.prototype.toString = function() {
        return this.content
    };

    function Yq(a) {
        if (a.Ac !== Wq) throw Error("Sanitized content was not of kind HTML.");
        return ud(a.toString(), a.j || null)
    }

    function Zq() {
        Xq.call(this)
    }
    xa(Zq, Xq);
    Zq.prototype.Ac = Wq;
    var $q = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.j = d);
            return c
        }
    }(Zq);

    function ar(a) {
        return null != a && a.Ac === Wq ? String(String(a.ta()).replace(br, "").replace(cr, "&lt;")).replace(dr, er) : String(a).replace(fr, er)
    }
    const gr = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function er(a) {
        return gr[a]
    }
    const fr = /[\x00\x22\x26\x27\x3c\x3e]/g,
        dr = /[\x00\x22\x27\x3c\x3e]/g,
        br = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        cr = /</g;
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var hr = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.l = b;
            this.host = c;
            this.language = d
        }
        init() {
            this.j.setAttribute("id", "prose-iframe");
            this.j.setAttribute("width", "100%");
            this.j.setAttribute("height", "100%");
            Zd(this.j, hd({
                "box-sizing": "border-box",
                border: "unset"
            }));
            var a = this.l;
            var b = this.host,
                c = this.language;
            a = $q('<div class="gcse-search" data-gname="' + ar("auto-rs-prose") + '" data-adclient="' + ar(a) + '" data-as_sitesearch="' + ar(b) + '" data-gl="' + ar(c) + '"></div>');
            a = Yq(a);
            b = $q("<style>.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}</style>");
            c = Yq(b);
            b = {
                style: hd({
                    margin: 0
                })
            };
            var d = {
                    src: Qc(vc("https://cse.google.com/cse.js?cx=9d449ff4a772956c6&language=%{lang}"), {
                        lang: this.language
                    })
                },
                e = {};
            const f = {};
            for (g in d) Object.prototype.hasOwnProperty.call(d, g) && (f[g] = d[g]);
            for (const h in e) Object.prototype.hasOwnProperty.call(e, h) && (f[h] = e[h]);
            var g = yd("script", f);
            g = [a, c, g];
            vd("body");
            g = yd("body", b, g);
            this.j.srcdoc = rd(g)
        }
    };

    function ir(a) {
        const b = jr(a);
        Ya(a.j.maxZIndexListeners, c => c(b))
    }

    function jr(a) {
        a = If(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class kr {
        constructor(a) {
            this.j = vl(a).floatingAdsStacking
        }
    }

    function lr(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.A;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            ir(b);
            a.j = d
        }
    }

    function mr(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            ir(b);
            a.j = null
        }
    }
    class nr {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = null
        }
    };

    function or(a, b) {
        a.j++;
        const c = "{SafeHtmlFormatter:" + a.j + "_" + $e() + "}";
        a.l[Xe(c)] = b;
        return c
    }
    class pr {
        constructor() {
            this.l = {};
            this.j = 0
        }
        A(a, b) {
            a = this.l[b];
            if (!a) return b;
            b = "";
            a.Kb && (b += "<" + a.Kb + a.attributes + ">");
            a.Hc && (b += a.Hc);
            a.rb && (b += "</" + a.rb + ">");
            return b
        }
        Kb(a, b) {
            vd(a);
            return or(this, {
                Kb: a,
                attributes: zd(b)
            })
        }
        rb(a) {
            vd(a);
            return or(this, {
                rb: a
            })
        }
        text(a) {
            return or(this, {
                Hc: Xe(a)
            })
        }
    };

    function qr(a) {
        let b;
        a.j.id = "cse-overlay-div";
        Zd(a.j, hd({
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            "flex-direction": "column",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        }));
        b = tf(a.l, "DIV");
        b.id = "cse-overlay-close-button";
        Zd(b, hd({
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        }));
        var c = a.A.location.host;
        const d = tf(a.l, "IMG");
        $d(d, bd("https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(c)));
        Zd(d, hd({
            display: "block",
            "float": "left",
            height: "16px",
            position: "absolute",
            left: "15px",
            top: "15px",
            width: "16px"
        }));
        const e = tf(a.l, "P");
        Yd(e, rr(a.C.trim().substring(0, 2),
            c.startsWith("www.") ? c.slice(4) : c));
        e.style.fontSize = "16px";
        e.style.marginLeft = "35px";
        e.style.marginTop = "6px";
        e.style.marginBottom = "unset";
        e.style.display = "inline-block";
        a.B.classList.add("gsc-modal-background-image");
        a.B.setAttribute("tabindex", 0);
        a.A.document.body.appendChild(a.j);
        a.A.document.body.appendChild(a.B);
        a.j.appendChild(d);
        a.j.appendChild(e);
        c = () => {
            "flex" === a.j.style.display && (a.j.style.display = "none");
            a.B.classList.remove("gsc-modal-background-image-visible");
            mr(a.J)
        };
        b.onclick = c;
        a.B.onclick =
            c;
        a.j.appendChild(b);
        a.j.appendChild(a.H);
        a.I.init()
    }

    function sr(a) {
        const b = tf(a.l, "SCRIPT");
        b.type = "text/javascript";
        var c = a.G.map(d => ({
            container: d,
            relatedSearches: 5
        }));
        wa("google.ads.autorscse.startProseSearch", (d, e) => {
            lr(a.J);
            a.B.classList.add("gsc-modal-background-image-visible");
            a.j.style.display = "flex";
            a.I.j.contentWindow.google.search.cse.element.getElement("auto-rs-prose").execute(d, void 0, {
                rsToken: e
            })
        });
        c = Hg `function(afsProperty, cseElementName, rsBlocks, language){ 
          function performSearch(query, rsToken) { 
            google.ads.autorscse.startProseSearch(query, rsToken); 
          } 
          const pageOptions = { 
            pubId: afsProperty, 
            styleId: '5134551505', 
            hl: language, 
            resultsPageBaseUrl: 'http://google.com', 
            resultsPageQueryParam: 'q', 
            relatedSearchTargeting: 'content', 
            relatedSearchResultClickedCallback: performSearch, 
            relatedSearchUseResultCallback: true, 
          }; 
          _googCsa('relatedsearch', pageOptions, rsBlocks); 
        }` (a.D, "auto-rs-prose", c, a.C);
        ce(b, c);
        a.A.document.body.appendChild(b)
    }
    var tr = class {
        constructor(a, b, c, d) {
            this.A = a;
            this.G = b;
            this.C = d || "en";
            this.D = c.replace("ca", "partner");
            b = new kr(a);
            this.J = new nr(b, 1E5);
            this.l = new ef(a.document);
            this.j = tf(this.l, "DIV");
            this.B = tf(this.l, "DIV");
            this.H = tf(this.l, "IFRAME");
            this.I = new hr(this.H, this.D, a.location.host, this.C)
        }
        init() {
            if (0 != this.G.length && !this.A.document.querySelector('script[src*="cse.google.com/cse"]')) {
                qr(this);
                var a = tf(this.l, "SCRIPT");
                de(a, L `https://www.google.com/adsense/search/async-ads.js`);
                this.A.document.head.appendChild(a);
                a = tf(this.l, "SCRIPT");
                a.type = "text/javascript";
                var b = Gg `(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');`;
                ce(a, b);
                this.A.document.head.appendChild(a);
                a = tf(this.l, "SCRIPT");
                b = L `https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
                b = Fg(b, new Map([
                    ["language", this.C]
                ]));
                de(a, b);
                this.A.document.head.appendChild(a);
                sr(this)
            }
        }
    };

    function rr(a, b) {
        var c = new pr;
        const d = c.Kb("strong"),
            e = c.rb("strong");
        b = {
            en: `Search results from ${d}${b}${e}`,
            de: `Suchergebnisse von ${d}${b}${e}`,
            ja: `${d}${b}${e}\u304b\u3089\u306e\u691c\u7d22\u7d50\u679c`,
            fr: `R\u00e9sultats de recherche sur ${d}${b}${e}`,
            es: `Resultados de b\u00fasqueda de ${d}${b}${e}`
        };
        a = b[a] || b.en;
        b = Xe("SafeHtmlFormatter:");
        c = Xe(a).replace(new RegExp(`\\{${b}[\\w&#;]+\\}`, "g"), ta(c.A, c, []));
        return ud(c, null)
    };

    function ur(a) {
        const b = no(a.A.O),
            c = a.C.ta(a.D, () => a.remove());
        b.appendChild(c);
        a.B && (b.className = a.B);
        return {
            Qd: b,
            Nd: c
        }
    }
    class vr {
        constructor(a, b, c, d) {
            this.D = a;
            this.A = b;
            this.C = c;
            this.B = d || null;
            this.j = null;
            this.l = new Om(null)
        }
        init() {
            const a = ur(this);
            this.j = a.Qd;
            Po(this.A, this.j);
            Mm(this.l, a.Nd)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            Mm(this.l, null)
        }
        G() {
            return this.l
        }
    };
    var wr = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.A = c
        }
    };

    function xr(a, b) {
        return a.T.j - b.T.j
    };

    function yr(a, b) {
        const c = a.document.createElement("img");
        zr(a, c);
        Pe(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg");
        K(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function Ar(a, b) {
        const c = b.document.createElement("button");
        zr(b, c);
        K(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function Br(a, b, c) {
        const d = b.document.createElement("img");
        Pe(d, "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg");
        d.setAttribute("aria-label", a.B);
        zr(b, d);
        K(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function Cr(a) {
        const b = a.document.createElement("ins");
        zr(a, b);
        K(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class Dr {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new Om(!1)
        }
        ta(a, b, c, d) {
            const e = yr(a, d),
                f = yr(a),
                g = Ar(this, a),
                h = Br(this, a, c);
            a = Cr(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            Lm(this.j, l => {
                K(e, {
                    display: l ? "none" : "inline"
                });
                K(f, {
                    display: l ? "inline" : "none"
                });
                l ? (K(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), K(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (K(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), K(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        Gc() {
            return 40
        }
        Rc() {
            Mm(this.j, !1);
            return 0
        }
        Sc() {
            Mm(this.j, !0)
        }
    }

    function zr(a, b) {
        K(b, Rq(a));
        K(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function Er(a, b) {
        const c = b.document.createElement("button");
        Fr(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        K(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function Gr(a, b, c, d) {
        const e = b.document.createElement("div");
        K(e, Rq(b));
        K(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        K(f, Rq(b));
        K(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (K(e, {
                    "flex-direction": "row"
                }), a.j && K(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), K(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                K(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (K(e, {
                border: "0",
                "flex-direction": "column"
            }), K(f, {
                "margin-left": "0",
                "text-align": "center"
            }), K(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && K(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function Fr(a, b, c) {
        K(c, Rq(b));
        K(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.G,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.H,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class Hr {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.H = c;
            this.l = d;
            this.G = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        ta(a) {
            const b = a.document.createElement("div");
            Fr(this, a, b);
            K(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = a.document.createElement("img");
                Pe(c, this.B);
                Fr(this, a, c);
                K(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            Fr(this, a, c);
            K(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = Er(this, a);
            c.appendChild(b);
            return this.A ? Gr(this, a, c, this.A) : c
        }
    };
    var Ir = (a, b) => {
        b = b.filter(c => 5 == y(D(c, vj, 4), 1) && 1 == y(c, 8));
        b = jo(b, a);
        a = Ro(b, a);
        a.sort((c, d) => d.T.j - c.T.j);
        return a[0] || null
    };
    var Jr = a => !X(cl) && /Firefox/.test(a) || /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a),
        Nr = (a, b = null) => {
            const c = Kr(a.innerWidth, 0, Math.min(Math.round(a.innerWidth / 320 * 50), Lr) + 15);
            return Mr(a, c, b)
        },
        Or = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), Lr) + 15,
                f = Kr(c, d - e, d);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return Mr(a, f, b)
        },
        Qr = (a, b) => {
            const c = a.innerWidth,
                d = a.innerHeight;
            let e = d;
            for (; e > b;) {
                var f = Kr(c, e - b, e);
                f = Pr(a, f);
                if (!f) return d - e;
                e = f.getBoundingClientRect().top - 1
            }
            return null
        },
        Mr = (a, b, c = null) => null != Pr(a, b, c);

    function Pr(a, b, c = null) {
        for (const d of b)
            if (b = Rr(a, d, c)) return b;
        return null
    }

    function Rr(a, b, c = null) {
        const d = Sr(a.document, b.x, b.y);
        return d ? Tr(d, a, b, c) || Ur(d, a, b, c) || null : null
    }
    var Sr = (a, b, c) => {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    };

    function Ur(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a != e.body; a = a.offsetParent) {
            const f = Tr(a, b, c, d);
            if (f) return f
        }
        return null
    }
    var Kr = (a, b, c) => {
        const d = [];
        for (let f = 0; 3 > f; f++)
            for (let g = 0; 3 > g; g++) {
                var e = d;
                e.push.call(e, {
                    x: g / 2 * a,
                    y: b + f / 2 * (c - b)
                })
            }
        return d
    };

    function Tr(a, b, c, d = null) {
        if ("fixed" !== Mg(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= Pg(a).width && 1 >= Pg(a).height ? !0 : !1;
        d && xh(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const Lr = 90 * 1.38;

    function Vr(a) {
        if (a.H) {
            const b = Gl(a.j);
            if (b > a.l + 100 || b < a.l - 100) Wr(a), a.l = Cl(a.j)
        }
        a.I && a.j.clearTimeout(a.I);
        a.I = a.j.setTimeout(() => Xr(a), 200)
    }

    function Xr(a) {
        var b = Cl(a.j);
        a.l && a.l > b && (a.l = b);
        b = Gl(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), Yr(a))
    }

    function Zr(a) {
        a.j.removeEventListener("scroll", a.L)
    }

    function Wr(a) {
        a.H = !1;
        const b = a.C.Rc();
        switch (b) {
            case 0:
                Mm(a.B, a.D);
                break;
            case 1:
                a.A && (K(a.A, {
                    display: "none"
                }), Mm(a.B, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function Yr(a) {
        a.A || (a.A = $r(a));
        K(a.A, {
            display: "block"
        });
        a.H = !0;
        a.C.Sc();
        Mm(a.B, a.D)
    }

    function $r(a) {
        var b = Qr(a.j, a.C.Gc() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        K(c, Rq(a.j));
        K(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.D = a.C.ta(a.j, () => a.remove(), () => {
            Zr(a);
            Wr(a)
        }, () => {
            Zr(a);
            Yr(a)
        });
        c.appendChild(a.D);
        a.J && (c.className = a.J);
        a.j.document.body.appendChild(c);
        return c
    }
    class as {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.D = null;
            this.B = new Om(null);
            this.J = c || null;
            this.A = null;
            this.H = !1;
            this.l = 0;
            this.I = null;
            this.L = () => Vr(this)
        }
        init() {
            this.j.addEventListener("scroll", this.L);
            this.l = Cl(this.j);
            Xr(this)
        }
        remove() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            Zr(this);
            Mm(this.B, null)
        }
        G() {
            return this.B
        }
    };

    function bs(a) {
        Mm(a.D, 0);
        null != a.A && (a.A.remove(), a.A = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function cs(a) {
        a.l = new as(a.C, a.J, a.H);
        a.l.init();
        Nm(a.B, a.l.G());
        Mm(a.D, 2)
    }
    class ds {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.I = b;
            this.L = c;
            this.J = d;
            this.H = e;
            this.D = new Om(0);
            this.B = new Om(null);
            this.l = this.A = this.j = null
        }
        init() {
            this.I ? (this.A = new vr(this.C, this.I, this.L, this.H), this.A.init(), Nm(this.B, this.A.G()), Mm(this.D, 1), null == this.j && (this.j = new Dm(this.C), this.j.init(2E3)), Bm(this.j, () => {
                bs(this);
                cs(this)
            })) : cs(this)
        }
        remove() {
            bs(this);
            this.j && (this.j.qb(), this.j = null)
        }
        G() {
            return this.B
        }
    };
    var es = (a, b, c, d, e) => {
        a = new ds(a, Ir(a, e), new Hr(b, d, "#FFF", "#4A4A4A", "normal"), new Dr(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var fs = a => a.googlefc = a.googlefc || {},
        gs = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function hs(a) {
        var b = gs(a.j);
        if (is(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = es(a.j, c, b, () => js(a), a.B))
        }
    }

    function ks(a) {
        const b = fs(a.j);
        gs(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => hs(a)
        })
    }

    function js(a) {
        lr(a.A);
        gs(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            mr(a.A)
        })
    }
    class ls {
        constructor(a, b, c) {
            this.j = a;
            this.A = new nr(b, 2147483643);
            this.B = c;
            this.l = null
        }
    }

    function is(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function ms(a) {
        const b = a.document.createElement("ins");
        ns(a, b);
        K(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function os(a, b, c, d) {
        const e = a.document.createElement("img");
        Pe(e, b);
        d && e.setAttribute("aria-label", d);
        ns(a, e);
        K(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function ps(a, b) {
        const c = b.document.createElement("span");
        ns(b, c);
        K(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function qs(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        K(c, Rq(b));
        K(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function rs(a) {
        const b = a.document.createElement("div");
        K(b, Rq(a));
        K(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class ss {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new Om(!1)
        }
        ta(a, b, c, d) {
            c = ms(a);
            const e = os(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = os(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = ps(this, a),
                h = os(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            K(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const l = qs(this, a);
            a = rs(a);
            a.appendChild(c);
            a.appendChild(l);
            Lm(this.j, k => {
                K(e, {
                    display: k ? "none" : "inline"
                });
                K(f, {
                    display: k ? "inline" : "none"
                });
                k ? (K(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), K(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), K(l, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (K(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), K(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), K(l, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        Gc() {
            return 71
        }
        Rc() {
            Mm(this.j, !1);
            return 0
        }
        Sc() {
            Mm(this.j, !0)
        }
    }

    function ns(a, b) {
        K(b, Rq(a));
        K(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function ts(a) {
        us(a.l, b => {
            var c = a.B,
                d = b.Ae,
                e = b.Ld,
                f = b.Ad;
            b = b.showRevocationMessage;
            (new ds(c, Ir(c, a.A), new Hr(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new ss(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            mr(a.j)
        })
    }
    class vs {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = new nr(b, 2147483643);
            this.A = c;
            this.l = d
        }
    };
    var ws = a => {
        if (!a || !Yb(a, 1)) return !1;
        a = y(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function xs(a) {
        if (!0 !== a.j.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            ws(a.l) && (b = new vs(a.j, a.C, a.B || G(a.l, xj, 4), a.A), lr(b.j), ts(b), b = !0);
            var c;
            a: if ((c = a.l) && Yb(c, 3)) switch (c = y(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (ks(new ls(a.j, a.C, a.B || G(a.l, xj, 4))), b = !0);
            b && (a.A.start(), a.j.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class ys {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.C = d;
            this.B = e || null
        }
    };
    var zs = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = Ef("SCRIPT", g);
                h.async = !0;
                de(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? zs(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        As = (a, b, c = () => {}, d = () => {}) => {
            zs(df(a), b, 0, !1, c, d)
        };
    var Bs = (a = null) => {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    Ac($l);
    Ac(am);
    var Cs = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Ef("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };

    function Ds() {
        this.U = this.U;
        this.H = this.H
    }
    Ds.prototype.U = !1;
    Ds.prototype.qb = function() {
        this.U || (this.U = !0, this.B())
    };

    function Es(a, b) {
        a.U ? b() : (a.H || (a.H = []), a.H.push(b))
    }
    Ds.prototype.B = function() {
        if (this.H)
            for (; this.H.length;) this.H.shift()()
    };
    const Fs = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function Gs(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Fs(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
    }

    function Hs(a) {
        if (Gs(a))
            if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                b: {
                    if (a.publisher && a.publisher.restrictions) {
                        var b = a.publisher.restrictions["1"];
                        if (void 0 !== b) {
                            b = b["755"];
                            break b
                        }
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
            }
        else a = !0;
        else a = !1;
        return a
    }

    function Is(a) {
        if (a.l) return a.l;
        a.l = Xf(a.j, "__tcfapiLocator");
        return a.l
    }

    function Js(a) {
        return "function" === typeof a.j.__tcfapi || null != Is(a)
    }

    function Ks(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (Is(a)) {
            Ls(a);
            const e = ++a.G;
            a.D[e] = c;
            a.l && a.l.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Ms(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = je(() => b(c));
        let e = 0; - 1 !== a.C && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.C));
        Ks(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = Fs(c), Gs(c) && (0 != c.internalErrorState && (c.tcString = "tcunavailable"), Ks(a, "removeEventListener", null, c.listenerId), e && (clearTimeout(e), e = 0), d()))
        })
    }

    function Ns(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = je(() => b(c));
        let e = 0; - 1 !== a.C && (e = setTimeout(() => {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.C));
        Ks(a, "addEventListener", (f, g) => {
            e && (clearTimeout(e), e = 0);
            g && (c = f);
            c.internalErrorState = Fs(c);
            0 != c.internalErrorState && (c.tcString = "tcunavailable");
            if (0 != c.internalErrorState || Gs(c)) Ks(a, "removeEventListener", null, c.listenerId), d()
        })
    }

    function Os(a) {
        return new Promise(b => {
            Ns(a, b)
        })
    }

    function Ls(a) {
        a.A || (a.A = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.D[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, pe(a.j, "message", a.A))
    }
    class Ps extends Ds {
        constructor(a, b = 500) {
            super();
            this.j = a;
            this.l = null;
            this.D = {};
            this.G = 0;
            this.C = b;
            this.A = null
        }
        B() {
            this.D = {};
            this.A && (qe(this.j, "message", this.A), delete this.A);
            delete this.D;
            delete this.j;
            delete this.l;
            super.B()
        }
        addEventListener(a) {
            let b = {};
            const c = je(() => a(b));
            let d = 0; - 1 !== this.C && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.C));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Fs(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
                    g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Ks(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Ks(this, "removeEventListener", null, a.listenerId)
        }
    };

    function us(a, b, c) {
        const d = Bs(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = Bs(a.j),
                    f = new Ps(a.j);
                Js(f) && Ms(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        Ae: e.getDefaultConsentRevocationText(),
                        Ld: e.getDefaultConsentRevocationCloseText(),
                        Ad: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function Qs(a) {
        const b = Qc(vc("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        As(a.j, b, () => {}, () => {})
    }
    class Rs {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            try {
                Cs(this.j, "googlefcPresent"), Qs(this)
            } catch (a) {}
        }
    };
    var Ss = (a, b, c) => {
        const d = D(a, pj, 6);
        if (!d) return [];
        c = Fo(G(d, qj, 1), c);
        return (a = Mj(a)) && B(a, 11) ? c.map(e => vo(e)) : c.map(e => {
            const f = uj();
            return new io(new bo(e.Lb, e.Mb), new Mn, new ao(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };
    var Us = class extends w {
        constructor() {
            super(void 0, -1, Ts)
        }
    };

    function Vs(a, b) {
        return z(a, 1, b)
    }

    function Ws(a, b) {
        return ic(a, 2, b)
    }
    var Ys = class extends w {
            constructor(a) {
                super(a, -1, Xs)
            }
        },
        Zs = class extends w {
            constructor(a) {
                super(a)
            }
            getHeight() {
                return ac(this, 2, 0)
            }
        },
        Ts = [5],
        Xs = [2];
    var $s = class extends w {
            constructor() {
                super(void 0)
            }
        },
        at = [1, 2];

    function bt(a) {
        return new en(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class ct {
        j(a) {
            return bt(Math.floor(a.l))
        }
    };
    var dt = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        Mh: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function et(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."],
            c, d;
        a = null === (c = vl(a)) || void 0 === c ? void 0 : c.tagSpecificState[1];
        (c = null == a ? null : 4 === (null === (d = a.debugCard) || void 0 === d ? void 0 : d.getAdType()) ? a.debugCard : null) && c.displayAdLoadedContent(b)
    };
    var ft = {};

    function gt(a, b, c) {
        let d = ht(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.Ya && d.Ya.length;) {
            const h = d.Ya.shift();
            var g = oo(h.O);
            const l = h.T.j,
                k = !!c.l.$a || !!c.l.cb || it(c) || !!c.l.Bc || l > e;
            g = !g || g <= d.nb;
            if (k && g && jt(c, h, {
                    Mc: d.nb
                })) {
                e = l;
                if (d.lb.j.length + 1 >= f) return !0;
                d = ht(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    var ht = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = wp(b.N(), f.j ? f.j.Na : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = Y(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - Cp(f)) : e = void 0;
        a = null == e || 50 <= e ? kt(b, f, {
            types: a
        }, c) : null;
        return {
            lb: f,
            nb: e,
            Ya: a
        }
    };
    ft[2] = ua(function(a, b) {
        a = kt(b, wp(b.N()), {
            types: a,
            za: $o(b.N())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (jt(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    ft[5] = ua(gt, [0], 5);
    ft[3] = function(a) {
        if (!a.B) return !1;
        var b = kt(a, wp(a.N()), {
            types: [0],
            za: $o(a.N())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (jt(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    var lt = a => {
            var b;
            a.l.ed ? b = new cp(0, null, [], 3, null) : b = $o(a.N());
            return {
                types: [0],
                za: b
            }
        },
        nt = a => {
            var b = a.N().document.body.getBoundingClientRect().width;
            b = bt(b);
            var c = a.j;
            var d = c.document.body,
                e = Vl(c, d, null);
            if (e) c = e;
            else {
                if (c.document.body) {
                    e = Math.floor(c.document.body.getBoundingClientRect().width);
                    for (var f = [{
                            element: c.document.body,
                            depth: 0,
                            height: 0
                        }], g = -1, h = null; 0 < f.length;) {
                        const k = f.pop(),
                            m = k.element;
                        var l = k.height;
                        0 < k.depth && l > g && (g = l, h = m);
                        if (5 > k.depth)
                            for (let p = 0; p < m.children.length; p++) {
                                const q =
                                    m.children[p];
                                l = e;
                                const r = q.getBoundingClientRect().width;
                                (null == r || null == l ? 0 : r >= .9 * l && r <= 1.01 * l) && f.push({
                                    element: q,
                                    depth: k.depth + 1,
                                    height: q.getBoundingClientRect().height
                                })
                            }
                    }
                    e = h
                } else e = null;
                c = e ? Vl(c, e.parentNode || d, e) : null
            }
            c && (b = dn(a.J, b), d = Dn(a.j.document, a.G, null, null, {}, b)) && (sn(d.Ca, c, 2, 256), mt(a, d, b))
        },
        pt = (a, b) => {
            var c = lt(a);
            c.nc = [5];
            c = kt(a, wp(a.N()), c, 8);
            ot(a, c.reverse(), b)
        },
        ot = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.T), jt(a, d, {
                        pd: b
                    })) return !0;
            return !1
        };
    ft[8] = function(a) {
        var b = a.N().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => ft[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.Cb()) return !0;
        b = lt(a);
        b.mc = [2, 4, 5];
        b = kt(a, wp(a.N()), b, 8);
        const c = new ct;
        if (ot(a, b, c)) return !0;
        if (a.l.Cc) switch (a.l.Tc || 0) {
            case 1:
                pt(a, c);
                break;
            default:
                nt(a)
        }
        return !0
    };
    ft[6] = ua(gt, [2], 6);
    ft[7] = ua(gt, [1], 7);
    ft[9] = function(a) {
        const b = ht([0, 2], a, 9);
        if (!b || !b.Ya) return a.C.push(17), et(a.N()), a.B;
        for (var c of b.Ya) {
            var d = c;
            var e = a.l.Xb || null;
            null == e ? d = null : (e = po(d.O, new qt, new rt(e, a.N())), d = new Qo(e, d.V(), d.T));
            if (d && !(oo(d.O) > b.nb) && jt(a, d, {
                    Mc: b.nb,
                    Kd: !0
                })) return a = d.O.J, c = c.O, a = 0 < a.length ? a[0] : null, c.B = !0, null != a && c.J.push(a), !0
        }
        a.C.push(17);
        et(a.N());
        return a.B
    };
    class qt {
        l(a, b, c, d) {
            return Gn(d.document, a, b)
        }
        A(a) {
            return Y(a).clientHeight || 0
        }
    };
    class rt {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.F || {};
            c.google_ad_client = a.jb;
            c.google_ad_height = Y(b).clientHeight || 0;
            c.google_ad_width = Y(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new Zj;
            z(b, 1, a.C);
            a.j && gc(b, 2, a.j);
            a.G && z(b, 3, !0);
            c.google_rasc = kc(b);
            a.A && (c.google_adtest = "on");
            return new en(["fsi_container"], c)
        }
    };
    var st = $m(new Xm(0, {})),
        tt = $m(new Xm(1, {})),
        ut = a => a === st || a === tt;

    function vt(a, b, c) {
        km(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class wt {
        constructor() {
            this.j = new om
        }
    };

    function xt(a, b) {
        b && (a.l.apv = y(b, 4), Yb(b, 23) && (a.l.sat = "" + y(D(b, Rj, 23), 1)));
        return a
    }

    function yt(a, b) {
        a.l.afm = b.join(",");
        return a
    }
    class zt extends Iq {
        constructor(a) {
            super(a);
            this.l = {}
        }
        B(a) {
            try {
                this.l.su = a.location.hostname
            } catch (b) {
                this.l.su = "_ex"
            }
            a = super.B(a);
            Dc(a, this.l);
            return a
        }
    }

    function At(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Bt(a, b) {
        a.j.op = Ct(b)
    }

    function Dt(a, b, c) {
        30 >= c.length ? a.j[b] = Et(c) : (a.j[b] = Et(c.slice(0, 30)), a.j[b + "_c"] = c.length.toString())
    }

    function Ft(a, b, c) {
        Dt(a, "fap", b);
        a.j.fad = Ct(c)
    }

    function Gt(a, b, c) {
        Dt(a, "fmp", b);
        a.j.fmd = Ct(c)
    }

    function Ht(a, b, c) {
        Dt(a, "vap", b);
        a.j.vad = Ct(c)
    }

    function It(a, b, c) {
        Dt(a, "vmp", b);
        a.j.vmd = Ct(c)
    }

    function Jt(a, b, c) {
        Dt(a, "pap", b);
        a.j.pad = Ct(c)
    }

    function Kt(a, b, c) {
        Dt(a, "pmp", b);
        a.j.pmd = Ct(c)
    }

    function Lt(a, b) {
        Dt(a, "psq", b)
    }
    var Mt = class extends zt {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.j = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.j);
            return a
        }
    };

    function Et(a) {
        return a.map(b => {
            let c;
            return null != (c = null == b ? void 0 : b.toString()) ? c : "null"
        }).join("~")
    }

    function Ct(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };
    var Nt = class extends w {
        constructor() {
            super(void 0)
        }
        ub() {
            return J(this, 1)
        }
        Zb() {
            return ac(this, 2, 0)
        }
    };

    function Ot(a, b) {
        return cc(a, 1, b)
    }

    function Pt() {
        var a = new Qt;
        Zb(a, 2).push("irr");
        return a
    }

    function Rt(a, b) {
        return z(a, 3, b)
    }

    function St(a, b) {
        return z(a, 4, b)
    }

    function Tt(a, b) {
        return z(a, 5, b)
    }

    function Ut(a, b) {
        return z(a, 7, b)
    }

    function Vt(a, b) {
        return z(a, 8, b)
    }

    function Wt(a, b) {
        return z(a, 9, b)
    }

    function Xt(a, b) {
        return ic(a, 10, b)
    }

    function Yt(a, b) {
        return cc(a, 11, b)
    }
    var Qt = class extends w {
            constructor() {
                super(void 0, -1, Zt)
            }
        },
        Zt = [1, 2, 10, 11];
    class $t {
        constructor(a) {
            this.A = this.l = this.j = !1;
            this.Ha = null;
            this.wa = a
        }
    }

    function au(a, b, c) {
        const d = b.O;
        if (!km(a.j, d)) {
            let e;
            a.j.set(d, new $t(null != (e = Tm(Oo(b))) ? e : ""))
        }
        c(a.j.get(d))
    }

    function bu(a) {
        au(cu, a, b => {
            b.j = !0
        })
    }

    function du(a) {
        au(cu, a, b => {
            b.l = !0
        })
    }

    function eu(a) {
        var b = cu;
        au(b, a, c => {
            c.A = !0
        });
        b.I.push(a.O)
    }

    function fu(a, b) {
        au(cu, a, c => {
            c.Ha = b
        })
    }

    function gu(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) {
            let g;
            if (ut(null != (g = f.Ha) ? g : "")) ++e;
            else {
                let h;
                b = a.l.get(null != (h = f.Ha) ? h : "", null);
                d.push(b)
            }
        }
        return {
            list: d.sort((f, g) => (null != f ? f : -1) - (null != g ? g : -1)),
            Ia: e
        }
    }

    function hu(a, b) {
        Bt(b, a.l.Ua());
        var c = nm(a.j).filter(f => 0 === (f.wa.startsWith(st) ? 0 : 1)),
            d = nm(a.j).filter(f => 1 === (f.wa.startsWith(st) ? 0 : 1)),
            e = gu(a, f => f.j, c);
        Ft(b, e.list, e.Ia);
        e = gu(a, f => f.j, d);
        Gt(b, e.list, e.Ia);
        e = gu(a, f => f.l, c);
        Ht(b, e.list, e.Ia);
        e = gu(a, f => f.l, d);
        It(b, e.list, e.Ia);
        c = gu(a, f => f.A, c);
        Jt(b, c.list, c.Ia);
        d = gu(a, f => f.A, d);
        Kt(b, d.list, d.Ia);
        Lt(b, a.I.map(f => {
            let g;
            return null == (g = a.j.get(f)) ? void 0 : g.Ha
        }).map(f => {
            let g;
            return null != (g = a.l.get(f)) ? g : null
        }))
    }

    function iu() {
        var a = cu;
        if (!a.B) return Pt();
        let b, c;
        const d = Yt(Xt(Wt(Vt(Ut(Tt(St(Rt(Ot(new Qt, null != (b = a.B) ? b : []), a.C), a.G), a.H), a.J), a.L), null != (c = a.D) ? c : 0), nm(a.j).map(e => {
            var f;
            var g = new Nt;
            g = z(g, 1, e.wa);
            var h = a.l.get(null != (f = e.Ha) ? f : "", -1);
            f = z(g, 2, h);
            f = z(f, 3, e.j);
            return z(f, 4, e.l)
        })), a.I.map(e => {
            let f;
            return null == (f = a.j.get(e)) ? void 0 : f.Ha
        }).map(e => {
            let f;
            return null != (f = a.l.get(e)) ? f : null
        }));
        null != a.A && z(d, 6, a.A);
        return d
    }
    var cu = new class {
        constructor() {
            this.B = null;
            this.H = this.G = !1;
            this.A = null;
            this.L = this.C = this.J = !1;
            this.D = null;
            this.l = new om;
            this.j = new om;
            this.I = []
        }
    };
    class ju {
        constructor(a = 0) {
            this.j = a
        }
    };
    class ku {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function lu(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function mu(a, b) {
        const c = a.B.filter(d => mm(d.pb).every(e => d.pb.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.pb.Ua() > e.pb.Ua() ? d : e, c[0])
    }

    function nu(a, b) {
        b = Oo(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (km(a.A, b)) return a.A.get(b);
        var c = Ym(b);
        c = mu(a, c);
        a.A.set(b, c);
        return c
    }

    function ou(a, b) {
        let c;
        return (null == (c = nu(a, b)) ? void 0 : c.se) || Number.MAX_VALUE
    }

    function pu(a, b) {
        const c = ul(Mk) || 0;
        if (0 == b.length || 0 == c) return !0;
        const d = (new Im(b)).filter(e => {
            let f;
            e = (null == (f = nu(a, e)) ? void 0 : f.wa) || "";
            return "" != e && !(e === st || e === tt)
        });
        return c <= d.j.length / b.length
    }
    var qu = class {
        constructor(a) {
            this.j = a;
            this.A = new om;
            let b;
            this.B = ((null == (b = D(a, Ej, 2)) ? void 0 : G(b, Fj, 1)) || []).map(c => ({
                pb: Ym(c.ub()),
                se: c.Zb(),
                wa: c.ub()
            }));
            this.l = []
        }
    };

    function ru(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => ou(a.j, c) - ou(a.j, d))
    }

    function su(a, b) {
        var c = b.T.j,
            d = Math,
            e = d.min;
        const f = b.V(),
            g = b.O.l();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? lu(f.parentElement) : lu(f));
        d = a.A;
        0 > d.j && (d.j = Y(d.l).scrollHeight || 0);
        d = d.j - b.T.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.V();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function tu(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => su(a, c) - su(a, d))
    }

    function uu(a, b) {
        return b.sort((c, d) => {
            const e = c.O.G,
                f = d.O.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? su(a, c) - su(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class vu {
        constructor(a, b = 0, c = null) {
            this.A = new ku(a);
            this.l = new ju(b);
            this.j = c && new qu(c)
        }
    };
    class wu {
        constructor(a, b, c = 0, d = null) {
            this.A = new Im(a);
            this.l = new vu(b, c, d);
            this.j = b;
            this.B = new wt
        }
        find(a, b = 0) {
            const c = a.ic ? a.ic : [0],
                d = "number" === typeof a.Pc ? a.Pc : 0,
                e = "number" === typeof a.minWidth ? a.minWidth : 0,
                f = "number" === typeof a.maxWidth ? a.maxWidth : Infinity,
                g = "number" === typeof a.va ? a.va : 0;
            let h = this.A;
            h = Hm(Hm(Hm(Hm(Hm(Hm(Hm(h, dq(c), xu(1, b)), eq(a.Sa || []), xu(2, b)), hq(a.Vb || []), xu(3, b)), iq(a.mi || []), xu(4, b)), jq(a.nc || []), xu(5, b)), fq(a.mc || []), xu(6, b)), he(ko), xu(7, b));
            let l = h = h.apply(Zp(this.j));
            l = a.mb &&
                a.zc ? Hm(l, cq(d, a.zc, this.j, a.lb), yu(16, b)) : Hm(l, bq(d, this.j, a.lb), yu(9, b));
            l = Hm(l, ua(mq, e, f), yu(10, b));
            a.kb && (l = Hm(l, kq(this.j.document, a.kb), yu(11, b)));
            a.Wb && (l = Hm(l, lq(), yu(17, b)));
            l = Hm(Hm(l, $p(this.j), yu(12, b)), gq(g, this.j), yu(13, b));
            a.cb ? l = uu(this.l, l) : a.He ? (l = ru(this.l, l), Gm(h, k => {
                bu(k);
                var m;
                null != (m = this.l.j) && (m = nu(m, k), null != (null == m ? void 0 : m.wa) && fu(k, m.wa))
            }), Gm(l, k => du(k))) : l = tu(this.l, l);
            a.$a && (l = Jm(l, af(this.j.location.href + this.j.localStorage.google_experiment_mod)));
            1 === c.length &&
                vt(this.B, c[0], {
                    Cd: h.j.length,
                    Ie: l.j.length
                });
            return l.j.slice(0)
        }
    }
    const xu = (a, b) => c => mo(c, b, a),
        yu = (a, b) => c => mo(c.O, b, a);

    function zu(a, b) {
        if (!a) return !1;
        a = Ff(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Au(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Bu(a) {
        return !!a.nextSibling || !!a.parentNode && Bu(a.parentNode)
    };

    function Cu(a) {
        const b = Bl(a, !0),
            c = Y(a).scrollWidth,
            d = Y(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Gl(a);
        const g = [];
        var h = [];
        const l = [],
            k = [];
        var m = [],
            p = [],
            q = [];
        let r = 0,
            u = 0,
            x = Infinity,
            H = Infinity,
            A = null;
        var C = sp({
            Ea: !1
        }, a);
        for (var F of C) {
            C = F.getBoundingClientRect();
            const S = b - (C.bottom + f);
            var I = void 0,
                E = void 0;
            if (F.className && -1 != F.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                I = F.getAttribute("google_element_uid");
                E = a.google_sv_map;
                if (!I ||
                    !E || !E[I]) continue;
                I = (E = jh(E[I])) ? E.height : 0;
                E = E ? E.width : 0
            } else if (I = C.bottom - C.top, E = C.right - C.left, 1 >= I || 1 >= E) continue;
            g.push(I);
            l.push(E);
            k.push(I * E);
            F.className && -1 != F.className.indexOf("google-auto-placed") ? (u += 1, F.className && -1 != F.className.indexOf("pedestal_container") && (A = I)) : (x = Math.min(x, S), p.push(C), r += 1, h.push(I), m.push(I * E));
            H = Math.min(H, S);
            q.push(C)
        }
        x = Infinity === x ? null : x;
        H = Infinity === H ? null : H;
        f = Du(p);
        q = Du(q);
        h = Eu(b, h);
        p = Eu(b, g);
        m = Eu(b * c, m);
        F = Eu(b * c, k);
        return new Fu(a, {
            Pd: e,
            jc: b,
            me: c,
            le: d,
            ee: r,
            Bd: u,
            Ed: Gu(g),
            Fd: Gu(l),
            Dd: Gu(k),
            je: f,
            ie: q,
            he: x,
            ge: H,
            Rb: h,
            Qb: p,
            wd: m,
            vd: F,
            ne: A
        })
    }

    function Hu(a, b, c, d) {
        const e = uf() && !(900 <= Y(a.l).clientWidth);
        d = $a(d, f => db(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Pd,
            pg_h: Iu(a.j.jc),
            pg_w: Iu(a.j.me),
            pg_hs: Iu(a.j.le),
            c: Iu(a.j.ee),
            aa_c: Iu(a.j.Bd),
            av_h: Iu(a.j.Ed),
            av_w: Iu(a.j.Fd),
            av_a: Iu(a.j.Dd),
            s: Iu(a.j.je),
            all_s: Iu(a.j.ie),
            b: Iu(a.j.he),
            all_b: Iu(a.j.ge),
            d: Iu(a.j.Rb),
            all_d: Iu(a.j.Qb),
            ard: Iu(a.j.wd),
            all_ard: Iu(a.j.vd),
            pd_h: Iu(a.j.ne),
            dt: e ? "m" : "d"
        }
    }
    class Fu {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function Gu(a) {
        return Ue.apply(null, $a(a, b => 0 < b)) || null
    }

    function Eu(a, b) {
        return 0 >= a ? null : Te.apply(null, b) / a
    }

    function Du(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function Iu(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Ju(a, b) {
        b = (Y(b).clientHeight || 0) - Gl(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            Ap(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function Ku(a) {
        const b = {};
        var c = up({
            Ea: !1,
            wb: !1,
            xb: !1,
            yb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Ap);
        b.rd = c.length;
        c = vp({
            xb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Ap);
        b.Rd = c.length;
        c = vp({
            yb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Ap);
        b.ke = c.length;
        c = vp({
            wb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Ap);
        b.ud = c.length;
        c = (Y(a).clientHeight || 0) - Gl(a);
        c = up({
            Ea: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Ap).filter(ta(Lu, null, c));
        b.sd = c.length;
        a = Cu(a);
        c = null != a.j.Rb ? a.j.Rb :
            null;
        null != c && (b.fe = c);
        a = null != a.j.Qb ? a.j.Qb : null;
        null != a && (b.td = a);
        return b
    }

    function it(a) {
        var b;
        let c;
        if (0 == (null != (c = null == (b = a.A.l.j) ? void 0 : [...Zb(b.j, 1)].length) ? c : 0)) return !1;
        if (0 == (ul(Mk) || 0)) return !0;
        if (void 0 === a.I) {
            b = a.A.find({
                ic: [0, 1, 2]
            });
            let d;
            a.I = (null == (d = a.A.l.j) ? void 0 : pu(d, b)) || !1
        }
        return a.I
    }

    function jt(a, b, {
        Mc: c,
        pd: d,
        Kd: e
    } = {}) {
        const f = b.O;
        if (f.B) return !1;
        var g = b.V(),
            h = f.l(),
            l = a.B;
        a: {
            var k = a.j;
            switch (h) {
                case 0:
                    k = zu(Au(g), k);
                    break a;
                case 3:
                    k = zu(g, k);
                    break a;
                case 2:
                    var m = g.lastChild;
                    k = zu(m ? 1 == m.nodeType ? m : Au(m) : null, k);
                    break a
            }
            k = !1
        }
        if (l = !k && !(!l && 2 == h && !Bu(g))) g = 1 == h || 2 == h ? g : g.parentNode, l = !(g && !ln(g) && 0 >= g.offsetWidth);
        if (!l) return !1;
        c = null == c ? null : new en(null, {
            google_max_responsive_height: c
        });
        g = fn(y(f.Za, 2) || 0);
        h = f.G;
        h = null == h ? null : new en(null, {
            google_ml_rank: h
        });
        l = Mu(a, f);
        d = dn(a.J, f.U ?
            f.U.j(b.T) : null, c, d || null, g, h, l);
        c = b.fill(a.G, d);
        if (e) {
            if (c) {
                e = c.ga;
                g = e.style.width;
                e.style.width = "100%";
                h = e.offsetWidth;
                e.style.width = g;
                e = h;
                g = a.j;
                h = c.ga;
                l = d && d.Va() || {};
                if (g !== g.top) k = Af(g) ? 3 : 16;
                else if (488 > Y(g).clientWidth)
                    if (g.innerHeight >= g.innerWidth)
                        if (k = Y(g).clientWidth, !k || .3 < (k - e) / k) k = 6;
                        else {
                            if (k = "true" != l.google_full_width_responsive) c: {
                                m = h.parentElement;
                                for (k = Y(g).clientWidth; m; m = m.parentElement) {
                                    const p = Ff(m, g);
                                    if (!p) continue;
                                    const q = Qf(p.width);
                                    if (q && !(q >= k) && "visible" != p.overflow) {
                                        k = !0;
                                        break c
                                    }
                                }
                                k = !1
                            }
                            k = k ? 7 : !0
                        }
                else k = 5;
                else k = 4;
                if (!0 !== k) e = k;
                else {
                    if (!(l = "true" == l.google_full_width_responsive)) b: {
                        do
                            if ((l = Ff(h, g)) && "fixed" == l.position) {
                                l = !1;
                                break b
                            }
                        while (h = h.parentElement);
                        l = !0
                    }
                    l ? (g = Y(g).clientWidth, e = g - e, e = g && 0 <= e ? !0 : g ? -10 > e ? 11 : 0 > e ? 14 : 12 : 10) : e = 9
                }
                if (e) {
                    e = a.j;
                    g = c.ga;
                    if (h = zn(e, g)) g.style.border = g.style.borderStyle = g.style.outline = g.style.outlineStyle = g.style.transition = "none", g.style.borderSpacing = g.style.padding = "0", xn(g, h, "0px"), g.style.width = Y(e).clientWidth + "px", An(e, g, h), g.style.zIndex =
                        30;
                    e = !0
                } else pn(c.Ca), e = !1
            } else e = !1;
            e = !e
        }
        if (e || !mt(a, c, d)) return !1;
        Oi(9, [f.G, f.Fa]);
        it(a) && eu(b);
        return !0
    }

    function kt(a, b, c, d) {
        const e = c.za ? c.za : a.D;
        var f = {
            Eb: e.A,
            va: e.C
        };
        for (let g of e.D) g.adCount <= b.j.length && (f = g.oc);
        return a.A.find({
            ic: c.types,
            Pc: f.Eb,
            lb: b,
            Sa: a.da,
            va: f.va || void 0,
            $a: !!a.l.$a,
            cb: !!a.l.cb,
            He: it(a),
            mc: c.mc,
            minWidth: c.minWidth,
            maxWidth: c.maxWidth,
            Vb: a.R,
            kb: a.U,
            nc: c.nc,
            mb: !!a.l.mb,
            zc: e.j,
            Wb: !!a.Z
        }, d)
    }

    function Nu(a) {
        return a.H ? a.H : a.H = a.j.google_ama_state
    }

    function Mu(a, b) {
        return Tm(Vm(Mo(b).map(gn), () => {
            a.C.push(18)
        }))
    }

    function mt(a, b, c) {
        if (!b) return !1;
        try {
            Hn(a.j, b.ga, c)
        } catch (d) {
            return pn(b.Ca), a.C.push(6), !1
        }
        return !0
    }
    class Ou {
        constructor(a, b, c, d, e = {}) {
            this.A = a;
            this.G = b;
            this.j = c;
            this.D = d.za;
            this.da = d.Sa || [];
            this.J = d.Sd || null;
            this.R = d.Vb || [];
            this.U = d.kb || [];
            this.Z = !!d.Wb;
            this.l = e;
            this.B = !1;
            this.L = [];
            this.C = [];
            this.I = this.H = void 0
        }
        N() {
            return this.j
        }
        ia(a) {
            this.L.push(a)
        }
        dc() {
            return !!this.l.Zc
        }
        Cb() {
            return !Wl(this.j)
        }
    }
    const Lu = (a, b) => b.top <= a;

    function Pu(a, b, c, d, e) {
        this.Aa = a;
        this.errors = b;
        this.eb = c;
        this.j = d;
        this.l = e
    };
    var Qu = (a, b, {
        Cb: c = !1,
        dc: d = !1,
        Be: e = !1
    } = {}) => {
        const f = [];
        e && f.push(9); - 1 < b.indexOf(3) && f.push(6); - 1 < b.indexOf(4) && !d && c && f.push(8); - 1 < b.indexOf(1) && (3 === a ? f.push(1, 5) : f.push(1, 2, 3)); - 1 < b.indexOf(2) && f.push(7); - 1 < b.indexOf(4) && d && c && f.push(8);
        return f
    };
    class Ru {
        constructor(a, b) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = eb(this.l, 1);
            this.j = b
        }
    };
    const Su = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };
    class Tu {
        j() {
            return new en([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class Uu {
        j() {
            return new en(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function Vu(a) {
        return mn(a.j.document).map(b => {
            const c = new bo(b, 3);
            b = new eo(Jn(a.j, b));
            return new io(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class Wu {
        constructor(a) {
            var b = new Uu;
            this.j = a;
            this.l = b || null
        }
    };
    const Xu = {
        rc: "10px",
        Pb: "10px"
    };

    function Yu(a) {
        return jm(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new io(new bo(b, 1), new $n(Xu), a.l, !1, 0, [], null, a.j, null))
    }
    class Zu {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function $u(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function av(a, b, c) {
        const d = $u(c.sb, "gapsMeasurementWindow") || $u(c.Ta, "gapsPerMeasurementWindow") || $u(c.Xa, "maxGapsToReport");
        return null != d ? Rm(d) : c.uc || -1 != c.Ta || -1 != c.Xa ? Pm(new bv(a, b, c)) : Rm("ShouldHaveLimits")
    }

    function cv(a) {
        return Nu(a.A) && Nu(a.A).placed || []
    }

    function dv(a) {
        return cv(a).map(b => Am(ym(b.element, a.j)))
    }

    function ev(a) {
        return cv(a).map(b => b.index)
    }

    function fv(a, b) {
        const c = b.O;
        return !a.D && c.A && Yb(c.A, 8) && 1 == y(c.A, 8) ? [] : c.B ? (c.J || []).map(d => Am(ym(d, a.j))) : [Am(new zm(b.T.j, 0))]
    }

    function gv(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new zm(c, f - c)), c = d)
        }
        return b
    }

    function hv(a, b) {
        b = b.map(c => {
            var d = new Zs;
            d = z(d, 1, c.j);
            c = c.getHeight();
            return z(d, 2, c)
        });
        return Ws(Vs(new Ys, a), b)
    }

    function iv(a) {
        const b = G(a, Zs, 2).map(c => `G${ac(c,1,0)}~${c.getHeight()}`);
        return `W${ac(a,1,0)}${b.join("")}`
    }

    function jv(a, b) {
        const c = [];
        let d = 0;
        for (const e of mm(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.I || f.splice(a.C, f.length);
            !a.G && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(hv(e, f));
            d += f.length;
            if (!a.G && d >= a.l) break
        }
        return c
    }

    function kv(a) {
        const b = G(a, Ys, 5).map(c => iv(c));
        return `M${ac(a,1,0)}H${ac(a,2,0)}C${ac(a,3,0)}B${Number(!!bc(a,4))}${b.join("")}`
    }

    function lv(a) {
        var b = Ro(a.A.A.A.j.slice(0), a.j),
            c = dv(a),
            d = new pm(ev(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = fv(a, b[e]);
                c.push(...f)
            }
        c.push(new zm(0, 0));
        c.push(Am(new zm(Y(a.j).scrollHeight, 0)));
        b = gv(c);
        c = new om;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.H ? 0 : Math.floor(e.j / a.B), km(c, f) || c.set(f, []), c.get(f).push(e);
        b = jv(a, c);
        c = new Us;
        c = z(c, 1, a.l);
        c = z(c, 2, a.B);
        c = z(c, 3, a.C);
        a = z(c, 4, a.D);
        return ic(a, 5, b)
    }

    function mv(a) {
        a = lv(a);
        return kv(a)
    }
    var bv = class {
        constructor(a, b, c) {
            this.H = -1 == c.sb;
            this.B = c.sb;
            this.I = -1 == c.Ta;
            this.C = c.Ta;
            this.G = -1 == c.Xa;
            this.l = c.Xa;
            this.D = c.Kc;
            this.A = b;
            this.j = a
        }
    };
    var nv = class extends w {
        constructor() {
            super(void 0)
        }
    };
    const ov = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        pv = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var qv = (a, b) => {
        a = Zb(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const sv = (a, b) => {
            a = pv(ov(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Jf(a),
                d = rv(a);
            return b.find(e => {
                const f = Yb(e, 7) ? y(D(e, Uj, 7), 1) : y(e, 1);
                e = Yb(e, 7) ? y(D(e, Uj, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        rv = a => {
            const b = {};
            for (;;) {
                b[Jf(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    var tv = class extends w {
            constructor() {
                super(void 0)
            }
            Ka(a) {
                return z(this, 2, a)
            }
        },
        uv = [4, 5];
    var vv = a => {
            a.google_ad_modifications || (a.google_ad_modifications = {});
            return a.google_ad_modifications
        },
        wv = a => {
            a = vv(a);
            a.eids || (a.eids = []);
            return a.eids
        },
        xv = (a, b) => {
            a = vv(a);
            a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
            const c = !a.processed_sra_frame_pingbacks[b];
            a.processed_sra_frame_pingbacks[b] = !0;
            return c
        };
    var yv = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_flash_version: "flash",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl"
        },
        zv = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        Av = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g,
                        ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        Bv = a => {
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
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };

    function Cv(a, b) {
        var c = new tv;
        c = z(c, 1, a.B).Ka(a.webPropertyCode);
        c = z(c, 3, a.l);
        b = hc(c, 5, uv, b);
        a.j && !a.A.has(2) && (a.A.add(2), Zh(a.da, b))
    }
    var Dv = class {
        constructor(a) {
            this.A = new Set;
            this.l = ul(kk);
            this.B = (this.j = 0 < this.l && Gf() < 1 / this.l) ? eg(N()) : 0;
            if (this.j) {
                var b = N(),
                    c, d, e;
                if (b.google_ad_client) var f = String(b.google_ad_client);
                else {
                    var g = vv(b).head_tag_slot_vars;
                    if (null !== (d = null !== (f = null === g || void 0 === g ? void 0 : g.google_ad_client) && void 0 !== f ? f : null === (c = b.document.querySelector(".adsbygoogle[data-ad-client]")) || void 0 === c ? void 0 : c.getAttribute("data-ad-client")) && void 0 !== d) f = d;
                    else {
                        c: {
                            f = b.document.getElementsByTagName("script");b =
                            b.navigator && b.navigator.userAgent || "";b = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(b) || /i(phone|pad|pod)/i.test(b) && /applewebkit/i.test(b) && !/version|safari/i.test(b) && !gh() ? zv : Av;
                            for (c = f.length - 1; 0 <= c; c--)
                                if (d = f[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = b(d))) {
                                    f = d;
                                    break c
                                }
                            f = null
                        }
                        if (f) {
                            b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                            for (c = {}; d = b.exec(f);) c[d[1]] = Bv(d[2]);
                            f = c;
                            f = f.google_ad_client ? f.google_ad_client : ""
                        } else f = ""
                    }
                    f = null !== (e = f) && void 0 !== e ? e : ""
                }
            } else f = "";
            this.webPropertyCode = f;
            this.da = null !== a && void 0 !== a ? a : new di
        }
    };
    var Fv = (a, b, c, d, e, f = null, g = null, h) => {
            Ev(a, new Kq(a), b, c, d, e, f, new Dm(a), g, h)
        },
        Ev = (a, b, c, d, e, f, g = null, h = null, l = null, k) => {
            if (c)
                if (d) {
                    var m = [];
                    D(d, zj, 18) && m.push(2);
                    e.W && m.push(0);
                    const p = Mj(d) && B(Mj(d), 22),
                        q = D(d, Yi, 28) && 1 == ac(D(d, Yi, 28), 1, 0);
                    (p || q) && m.push(1);
                    D(d, Si, 27) && 1 == ac(D(d, Si, 27), 1, 0) && m.push(3);
                    D(d, Aj, 29) && m.push(4);
                    try {
                        Gv(new Hv(a, b, c, d, e, m, f, g, h, l, k))
                    } catch (r) {
                        Ni() && Oi(15, [r]), Jq(b, zq, Hq(yt(xt((new zt(0)).Ka(c), d), m).ia(1), r)), Cv(R(Dv), new nv)
                    }
                } else Jq(b, zq, (new zt(0)).Ka(c).ia(8)), Cv(R(Dv),
                    new nv);
            else Jq(b, zq, (new zt(0)).ia(9)), Cv(R(Dv), new nv)
        };

    function Gv(a) {
        a.G.forEach(b => {
            switch (b) {
                case 0:
                    Iv(a);
                    break;
                case 1:
                    var c = new wr(a.l, a.j, a.C),
                        d = Vq(c.j, c.l);
                    d = Ro(d, c.j).sort(xr);
                    d = 0 == d.length ? [] : [d[Math.floor(d.length / 2)]];
                    b = c.j;
                    const e = [];
                    for (let f = 0; f < d.length; f++) {
                        const g = d[f],
                            h = "autors-container-" + f,
                            l = b.document.createElement("div");
                        l.setAttribute("id", h);
                        (new vr(b, g, new Uq(l))).init();
                        e.push(h)
                    }(new tr(c.j, e, c.A, y(D(c.l, nj, 22), 1))).init();
                    break;
                case 2:
                    (c = D(a.j, zj, 18)) && xs(new ys(a.l, new Rs(a.l, a.C), c, new kr(a.l), G(a.j, xj, 1)));
                    break;
                case 3:
                    Jv(a);
                    break;
                case 4:
                    (b = D(a.j, Aj, 29)) && Kv(a.ea, {
                        win: a.l,
                        webPropertyCode: a.C,
                        Vd: b,
                        yd: null != (d = null == (c = D(a.j, pj, 6)) ? void 0 : G(c, qj, 1)) ? d : []
                    })
            }
        })
    }

    function Iv(a) {
        Lv(a) && Mv(a, "p", Nv(a));
        if (Kj(a.j) && 1 === y(Kj(a.j), 1)) {
            var b = D(Kj(a.j), Wj, 6);
            b && 2 === y(b, 1) && In(a.l)
        }
        b = a.B.qe;
        a: {
            var c = a.l;
            var d = ap(c);c = Y(c).clientHeight || Yo[d];
            var e = dp(G(b, $i, 2), d);
            if (e && (e = gp(e, c))) {
                d = e;
                break a
            }
            d = bp(d, c)
        }
        if (a.B.W && Yb(a.B.W, 10) && (c = $b(D(a.B.W, Vj, 10), 1), null !== c && void 0 !== c)) {
            var f = a.l;
            d = c;
            c = ap(f);
            e = Y(f).clientHeight || Yo[c];
            var g = void 0;
            b && (g = (g = (g = dp(G(b, $i, 2), c)) ? D(g, bj, 7) : void 0) ? hp(g, e) : void 0);
            var h = ap(f);
            f = Y(f).clientHeight || Yo[h];
            const O = fp(Zo[h].pc, f);
            f = null ===
                O ? bp(h, f) : new cp(O, O, ip(O, O, 8), 8, .3, g);
            g = fp(Zo[c].dd, e);
            h = fp(Zo[c].pc, e);
            e = fp(Zo[c].cd, e);
            c = f.A;
            g && e && h && void 0 !== d && (c = .5 >= d ? h + (1 - 2 * d) * (g - h) : e + (2 - 2 * d) * (h - e));
            d = c;
            d = new cp(c, d, ip(c, d, f.l), f.l, f.B, f.j)
        }
        if (Yb(a.j, 26)) {
            c = D(a.j, Yj, 26);
            e = a.l;
            g = B(c, 2);
            c = D(c, $i, 1);
            f = Y(e).clientHeight || Yo[ap(e)];
            var l;
            e = null != (l = fp(null == c ? void 0 : y(c, 2), f)) ? l : d.A;
            var k;
            l = null != (k = fp(null == c ? void 0 : y(c, 5), f)) ? k : d.C;
            var m;
            k = g ? [] : null != (m = ep(null == c ? void 0 : G(c, aj, 3), f)) ? m : d.D;
            var p;
            m = null != (p = null == c ? void 0 : y(c, 4)) ? p : d.l;
            var q;
            p = null != (q = null == c ? void 0 : $b(c, 6)) ? q : d.B;
            var r;
            q = null != (r = (null == c ? 0 : Yb(c, 7)) ? hp(D(c, bj, 7), f) : null) ? r : d.j;
            d = new cp(e, l, k, m, p, q)
        }
        r = a.B.W ? Zb(a.B.W, 6) : [];
        q = a.B.W ? G(a.B.W, ij, 5) : [];
        p = X(Ik);
        var u;
        k = a.j;
        c = G(k, xj, 1);
        l = a.B.W && qv(a.B.W, 1) ? "text_image" : "text";
        e = new Tu;
        m = jo(c, a.l, {
            Hd: e,
            $d: new fo(l)
        });
        c.length != m.length && a.L.push(13);
        m = m.concat(Yu(new Zu(a.l, e)));
        c = 0;
        e = X(Dk);
        f = !1;
        Kj(k) && 1 === y(Kj(k), 1) && (g = D(Kj(k), Wj, 6)) && (c = y(g, 2) || 0, 1 === y(g, 1) && (f = !0));
        var x, H;
        g = (null == (u = D(k, Cj, 24)) ? void 0 : null == (x = D(u, Gj, 3)) ?
            void 0 : null == (H = D(x, Hj, 3)) ? void 0 : nc(H, Ij, 2, Jj)) || !1;
        if (e || f || g) u = Vu(new Wu(a.l)), m = m.concat(u), cu.J = !0, cu.D = u.length;
        m = m.concat(Ss(k, l, a.l));
        u = D(k, Cj, 24);
        u = new wu(m, a.l, c, u);
        x = a.C;
        H = a.l;
        r = {
            za: d,
            Sd: a.Z,
            Sa: a.B.Sa,
            Vb: r,
            kb: q,
            Wb: p
        };
        p = X(Ek);
        Mj(a.j) ? (q = Mj(a.j), m = $b(q, 8), q = {
            $a: p || bc(q, 14, !1),
            cb: bc(q, 2, !1),
            Bc: bc(q, 3, !1),
            ed: bc(q, 4, !1),
            Cc: bc(q, 5, !1),
            Zc: bc(q, 6, !1),
            pe: null == m ? 0 : m,
            Tc: y(q, 10),
            mb: Ov(a),
            Xb: a.U
        }) : q = {
            $a: p,
            cb: !1,
            Bc: !1,
            ed: !1,
            Cc: !1,
            Zc: !1,
            pe: 0,
            Tc: 0,
            mb: Ov(a),
            Xb: a.U
        };
        a.A = new Ou(u, x, H, r, q);
        var A, C;
        (null ==
            (A = Nu(a.A)) ? 0 : null == (C = A.optimization) ? 0 : C.ablatingThisPageview) && !it(a.A) && (In(a.l), cu.C = !0);
        C = a.B.W ? Zb(a.B.W, 2) : [];
        A = a.A;
        b = Qu(y(b, 1), C, {
            Cb: A.Cb(),
            dc: A.dc(),
            Be: !!A.l.Xb
        });
        b = new Ru(b, A);
        a.H = b;
        A = a.H;
        b = new hm;
        for (A.j.B = !0; 0 < A.l.length;) C = A, (u = ft[A.l[0]]) ? C = u(C.j) : (C.j.ia(12), C = !0), C || A.j.ia(5), A.l.shift();
        try {
            var F = b.resolve,
                I = A.j.A.A.filter(ko).j.length,
                E = A.j.L.slice(0),
                S = A.j;
            let O;
            var qa = [...S.C, ...((null == (O = S.A.l.j) ? void 0 : [...O.l]) || [])];
            F.call(b, new Su(new Pu(I, E, qa, A.j.A.A.j.length, A.j.A.B.j)))
        } catch (O) {
            F =
                O, em(b), b.j = 2, b.A = F, gm(b.l)
        }
        b.l.then(ta(a.la, a), ta(a.R, a))
    }

    function Jv(a) {
        Um(Lq(a.l, a.j, a.da, {
            google_ad_client: a.C
        }), b => {
            const c = !!b.B.bb && Oq(b);
            c && (b.C = vq(b.j, b.D, b.B.bb));
            var d = b.j;
            var e = D(b.l, Ti, 2);
            var f = Eo(b.G, d);
            f = f.filter(Go).filter(Ho(f)).filter(Io(d));
            f.sort(Jo);
            if (f = f[0] || null) {
                a: switch (ac(e, 1, 0)) {
                    case 1:
                        d = new oq(d, f);
                        break a;
                    case 2:
                        d = new Wo(So(d, f));
                        break a;
                    case 3:
                        d = new nq(d, So(d, f));
                        break a;
                    default:
                        throw Error(`Unknown player position: ${ac(e,1,0)}`);
                }
                d = d.j()
            }
            else d = null;
            if (d) {
                e = b.j;
                f = D(b.l, Xi, 4) || void 0;
                if (0 < e.document.getElementsByTagName("google-read-aloud-player").length) e =
                    Rm("Player already created");
                else {
                    var g = b.B,
                        h = e.document;
                    const l = h.createElement("div");
                    l.id = "google-auto-placed-read-aloud-player";
                    K(l, {
                        margin: "5px"
                    });
                    const k = h.createElement("script");
                    ce(k, Gg `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`);
                    l.appendChild(k);
                    pq(h, l, vc("https://www.google-analytics.com/analytics.js"));
                    pq(h, l, vc("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
                    h = h.createElement("google-read-aloud-player");
                    h.setAttribute("data-api-key",
                        "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
                    h.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
                    h.setAttribute("data-url", g.url);
                    h.setAttribute("data-voice", "en-us-f-1");
                    f && (Yb(f, 1) && 0 != ac(f, 1, 0) && h.setAttribute("data-docking-begin-trigger", qq[ac(f, 1, 0)]), Yb(f, 2) && h.setAttribute("data-experiment", J(f, 2)));
                    l.appendChild(h);
                    Po(d, l);
                    e = Pm(e.document.getElementsByTagName("google-read-aloud-player")[0])
                }
                null != e.j ? (b.A = e.j.value, c && Nq(b), Pq(b, {
                    sts: "ok",
                    pp: d.T.j
                })) : Pq(b, {
                    sts: "wf"
                })
            } else Pq(b, {
                sts: "pf"
            })
        })
    }

    function Ov(a) {
        return a.B.W && Yb(a.B.W, 10) ? .5 <= ($b(D(a.B.W, Vj, 10), 1) || 0) : !0
    }

    function Pv(a, b) {
        for (var c = Gq(Gq(new zt(b.Aa), b.errors), a.L), d = b.eb, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.l.ppos = b.placementPositionDiffs;
        c.l.eatf = b.Sb;
        c.l.eatfAbg = b.Tb;
        c.l.reatf = b.vb;
        c.l.a = a.H.B.slice(0).join(",");
        a = yt(xt(c, a.j), a.G).Ka(a.C);
        if (c = b.Ob) a.l.as_count = c.rd, a.l.d_count = c.Rd, a.l.ng_count = c.ke, a.l.am_count = c.ud, a.l.atf_count = c.sd, a.l.mdns = At(c.fe), a.l.alldns = At(c.td);
        c = b.Ib;
        null != c && (a.l.allp = c);
        if (c = b.Td) {
            d = [];
            for (var h of mm(c)) 0 <
                c.get(h).length && (e = c.get(h)[0], d.push("(" + [h, e.Cd, e.Ie].join() + ")"));
            a.l.fd = d.join(",")
        }
        h = b.jc;
        null != h && (a.l.pgh = h);
        void 0 !== b.exception && Hq(a, b.exception).ia(1);
        return a
    }

    function Qv(a, b) {
        var c = Pv(a, b);
        Jq(a.D, 0 < b.errors.length || 0 < a.L.length || void 0 !== b.exception ? 0 < a.J ? Bq : zq : 0 < a.J ? Aq : yq, c);
        if (D(a.j, Cj, 24)) {
            if (null != (b = a.A.A.l.j)) {
                cu.B = [...Zb(b.j, 1)];
                var d;
                let k;
                cu.H = !!(null == (d = D(b.j, Gj, 3)) ? 0 : null == (k = D(d, Hj, 3)) ? 0 : nc(k, Ij, 2, Jj));
                d = new om;
                var e;
                let m;
                for (const p of null != (m = null == (e = D(b.j, Ej, 2)) ? void 0 : G(e, Fj, 1)) ? m : []) d.set(p.ub(), p.Zb());
                cu.l = d
            }
            e = Nu(a.A);
            var f;
            cu.A = !!(null == e ? 0 : null == (f = e.optimization) ? 0 : f.ablationFromStorage);
            var g;
            if (null == e ? 0 : null == (g = e.optimization) ?
                0 : g.ablatingThisPageview) cu.G = !0;
            let l;
            cu.L = !!(null == e ? 0 : null == (l = e.optimization) ? 0 : l.availableAbg);
            var h;
            f = cu;
            c = new Mt(c);
            f.B ? (g = null != (h = f.B) ? h : [], c.j.sl = g.join("~"), c.j.ab = Ct(f.G), c.j.rr = Ct(f.J), c.j.oab = Ct(f.H), null != f.A && (c.j.sab = Ct(f.A)), f.C && (c.j.fb = Ct(f.C)), c.j.ls = Ct(f.L), Bt(c, f.l.Ua()), null != f.D && (c.j.rp = Ct(f.D)), hu(f, c)) : (h = c, f = "irr".replace(RegExp("~", "g"), ""), h.j.e = h.j.e ? h.j.e + ("~" + f) : f);
            h = c;
            Jq(a.D, Eq, h)
        }
    }

    function Rv(a) {
        const b = new nv,
            c = R(Dv);
        c.j && D(a.j, Cj, 24) && (a = iu(), gc(b, 1, a));
        Cv(c, b)
    }

    function Sv(a) {
        return Kj(a.j) && 1 === y(Kj(a.j), 1) ? !(D(Kj(a.j), Wj, 6) && 1 <= (y(D(Kj(a.j), Wj, 6), 3) || 0)) : !1
    }

    function Tv(a) {
        if (Sv(a)) {
            a = a.A;
            var b = vp({
                xb: !0,
                yb: !0
            }, a.j);
            a = 0 < Ju(b, a.j)
        } else a = a.A.j, b = up({
            Ea: !1,
            wb: !1
        }, a), a = 0 < Ju(b, a);
        return a
    }

    function Uv(a) {
        if (Lv(a)) {
            var b = Nv(a);
            a.I.init(null == b ? void 0 : b, () => {
                Mv(a, "s", b)
            });
            Bm(a.I, c => {
                Mv(a, "d", Nv(a), c);
                a.I.qb();
                let d, e;
                if (null == (d = a.j) ? 0 : null == (e = Mj(d)) ? 0 : bc(e, 21, !1)) {
                    let f, g;
                    null != (f = a.j) && null != (g = Mj(f)) && z(g, 18, !1);
                    try {
                        let h;
                        if (null == (h = a.G) ? 0 : h.includes(0)) a.J++, Iv(a), Mv(a, "r", Nv(a), c)
                    } catch (h) {
                        Mv(a, "f", Nv(a), c), Jq(a.D, Bq, Hq(yt(xt((new zt(0)).Ka(a.C), a.j), a.G).ia(1), h))
                    }
                }
            })
        }
    }

    function Vv(a, b, c) {
        {
            var d = Nu(a.A),
                e = b.j;
            const f = e.j;
            let g = e.Aa,
                h = e.errors.slice(),
                l = e.eb.slice(),
                k = b.exception;
            d ? (d.numAutoAdsPlaced ? g += d.numAutoAdsPlaced : a.H.A && l.push(13), void 0 !== d.exception && (k = d.exception), c = {
                Aa: g,
                Ib: f,
                errors: e.errors.slice(),
                eb: l,
                exception: k,
                vb: c,
                Sb: !!d.eatf,
                Tb: !!d.eatfAbg
            }) : (l.push(12), a.H.A && l.push(13), c = {
                Aa: g,
                Ib: f,
                errors: h,
                eb: l,
                exception: k,
                vb: c,
                Sb: !1,
                Tb: !1
            })
        }
        c.Ob = Ku(a.A.j);
        if (b = b.j.l) c.Td = b;
        c.jc = Y(a.l).scrollHeight;
        if (Ni()) {
            d = a.A.A.A.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.L;
                for (const g of mm(e)) d[g] = e.get(g);
                d = {
                    anchorElement: f.H.j(f.j),
                    position: f.l(),
                    clearBoth: f.I,
                    locationType: f.Fa,
                    placed: f.B,
                    placementProto: f.A ? f.A.toJSON() : null,
                    articleStructure: f.C ? f.C.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Oi(14, [{
                placementIdentifiers: b
            }, a.A.G, c.Ob])
        }
        return c
    }

    function Wv(a, b) {
        var c = a.A.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Ib;
        c.numAutoAdsPlaced = b.Aa;
        c.hasAtfAd = b.vb;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.A && (a = av(a.l, a.A, {
            sb: -1,
            Ta: -1,
            Xa: -1,
            Kc: !0,
            uc: !0
        }), null != a.j ? (c.placementPositionDiffs = mv(a.j.value), b = lv(a.j.value), a = new $s, a = hc(a, 2, at, b), c.placementPositionDiffsReport = kc(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new $s, a = ec(a, 1, at, b), c.placementPositionDiffsReport = kc(a)))
    }

    function Mv(a, b, c, d) {
        a = {
            r: b,
            pg_h: Y(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (a.pg_hd = d);
        V(Dq.ha, a, Dq.ca)
    }

    function Lv(a) {
        let b, c, d;
        return null != (d = null == (b = a.j) ? void 0 : null == (c = Mj(b)) ? void 0 : bc(c, 18, !1)) ? d : !1
    }

    function Nv(a) {
        let b = null;
        Mj(a.j) && Yb(Mj(a.j), 19) && (b = y(Mj(a.j), 19));
        return b
    }
    class Hv {
        constructor(a, b, c, d, e, f, g, h, l, k, m) {
            this.l = a;
            this.D = b;
            this.C = c;
            this.j = d;
            this.B = e;
            this.G = f;
            this.Z = h || null;
            this.L = [];
            this.I = l;
            this.U = k;
            this.ea = g;
            this.J = 0;
            this.da = m ? m : {
                url: a.location.href,
                bb: void 0
            }
        }
        la(a) {
            try {
                const b = Tv(this) || Sv(this) ? Tv(this) : void 0;
                kn({
                    Ub: b
                }, this.l);
                Uv(this);
                const c = Vv(this, a, Tv(this));
                Yb(this.j, 25) && B(D(this.j, Xj, 25), 1) && Wv(this, c);
                Qv(this, c);
                Rv(this);
                si(753, () => {
                    if (X(yk) && null != this.A) {
                        var d = av(this.l, this.A, {
                                sb: ul(Ck),
                                Ta: ul(Bk),
                                Xa: ul(zk),
                                Kc: !0,
                                uc: !1
                            }),
                            e = Bc(c);
                        null != d.j ?
                            (d = mv(d.j.value), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = Pv(this, e);
                        Jq(this.D, Cq, e)
                    }
                })()
            } catch (b) {
                this.R(b)
            }
        }
        R(a) {
            Qv(this, {
                Aa: 0,
                Ib: void 0,
                errors: [],
                eb: [],
                exception: a,
                vb: void 0,
                Sb: void 0,
                Tb: void 0,
                Ob: void 0
            });
            Rv(this)
        }
    };
    var Xv = class extends w {
        constructor(a) {
            super(a)
        }
    };

    function Yv(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Sm(() => lc(Xv, c)) : Pm(null)
    };

    function Zv() {
        if ($v) return $v;
        const a = wg() || N(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? $v = b : a.google_persistent_state_async = $v = new aw
    }

    function bw(a) {
        return cw[a] || "google_ps_" + a
    }

    function dw(a, b, c) {
        b = bw(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function ew(a, b) {
        var c = dw(a, b, 0) + 1;
        return a.S[bw(b)] = c
    }

    function fw() {
        var a = Zv();
        return dw(a, 20, {})
    }

    function gw() {
        var a = Zv();
        return dw(a, 28, [])
    }
    class aw {
        constructor() {
            this.S = {}
        }
    }
    var $v = null;
    const cw = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function hw(a) {
        this.j = a || {
            cookie: ""
        }
    }
    n = hw.prototype;
    n.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.ni, g = c.Ce || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Nc);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    n.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Ca(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    n.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            Nc: 0,
            path: b,
            domain: c
        });
        return d
    };
    n.isEmpty = function() {
        return !this.j.cookie
    };
    n.Ua = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    n.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Ca(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function iw(a, b = window) {
        if (B(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    }

    function jw(a) {
        return "null" !== a.origin
    }

    function kw(a, b, c) {
        b = B(b, 5) && jw(c) ? c.document.cookie : null;
        return null === b ? null : (new hw({
            cookie: b
        })).get(a) || ""
    };

    function lw(a, b) {
        return z(a, 5, b)
    }
    var mw = class extends w {
        constructor() {
            super(void 0)
        }
    };
    var pw = ({
        win: a,
        Ab: b,
        Ic: c = !1,
        Jc: d = !1
    }) => {
        if (!nw({
                win: a,
                Ab: b,
                Ic: c,
                Jc: d
            })) return ow(a, lw(new mw, !0));
        b = Zv();
        (b = dw(b, 24, void 0)) ? (b = lw(new mw, Hs(b)), a = ow(a, b)) : a = new Qm(null, Error("tcunav"));
        return a
    };

    function nw({
        win: a,
        Ab: b,
        Ic: c,
        Jc: d
    }) {
        if (!(d = !d && Js(new Ps(a)))) {
            if (c = !c) {
                if (b) {
                    a = Yv(a);
                    if (null != a.j)
                        if ((a = a.j.value) && Yb(a, 1)) b: switch (a = y(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else ti(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function ow(a, b) {
        return (a = iw(b, a)) ? Pm(a) : new Qm(null, Error("unav"))
    };
    var qw = class extends w {
        constructor(a) {
            super(a)
        }
    };
    class rw {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };
    Ac($l);
    Ac(am);
    var tw = class extends w {
            constructor(a) {
                super(a, -1, sw)
            }
        },
        uw = class extends w {
            constructor(a) {
                super(a)
            }
        },
        vw = class extends w {
            constructor(a) {
                super(a)
            }
        },
        sw = [7];

    function ww(a) {
        (a = xw(a)) && D(a, uw, 4)
    }

    function xw(a) {
        a = (a = (new hw(a)).get("FCCDCF", "")) ? a : null;
        try {
            return a ? lc(tw, a) : null
        } catch (b) {
            return null
        }
    };

    function yw(a) {
        a.__uspapi || a.frames.__uspapiLocator || (a = new zw(a), Aw(a))
    }

    function Aw(a) {
        !a.A || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", Cs(a.j, "__uspapiLocator"), wa("__uspapi", (...b) => Bw(a, ...b)))
    }

    function Bw(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.A
        }, !0)
    }
    class zw {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.A = (a = (a = xw(this.l)) ? D(a, vw, 5) || null : null) ? y(a, 2) : null;
            ww(this.l);
            ww(this.l)
        }
    };

    function Cw(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function Dw(a, b) {
        a = Cw(a);
        b = Cw(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    const Ew = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var Fw = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            V("ama", b, .01)
        },
        Gw = a => {
            const b = {};
            Hf(Ew, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    const Iw = (a, b, c) => {
        var d = new Qj;
        gc(c, 3, d);
        var e = Mj(c) && y(Mj(c), 13) ? y(Mj(c), 13) : 1;
        z(d, 1, Date.now() + 864E5 * e);
        d = c.constructor;
        e = Rb(c.A, Tb);
        d = Vb(d, e);
        mc(d, c);
        if (Mj(c)) {
            e = new Nj;
            var f = B(Mj(c), 23);
            e = z(e, 23, f);
            f = bc(Mj(c), 12, !1);
            e = z(e, 12, f);
            c = bc(Mj(c), 15, !1);
            c = z(e, 15, c);
            gc(d, 15, c)
        }
        c = G(d, xj, 1);
        for (e = 0; e < c.length; e++) z(c[e], 11, Wb);
        gc(d, 22, void 0);
        if (X(xk)) Hw(a);
        else try {
            (b || a.localStorage).setItem("google_ama_config", kc(d))
        } catch (g) {
            Fw(a, {
                lserr: 1
            })
        }
    };
    var Hw = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                Fw(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            Fw(a, {
                lserr: 1
            })
        }
    };

    function Kv(a, {
        win: b,
        webPropertyCode: c,
        Vd: d,
        yd: e
    }) {
        uq(8, b, a.j).then(f => f.runGallerify({
            win: b,
            webPropertyCode: c,
            serializedGallerifyConfig: kc(d),
            serializedArticleStructures: e.map(g => kc(g))
        })).catch(ui(927))
    }
    var Jw = class {
        constructor(a) {
            this.j = a
        }
    };
    var Kw = (a, b, c, d, e, f, g = null, h) => {
        try {
            var l = a.localStorage
        } catch (r) {
            l = null
        }
        if (l) {
            if (X(xk)) var k = null;
            else try {
                k = l.getItem("google_ama_config")
            } catch (r) {
                k = null
            }
            try {
                var m = k ? lc(Pj, k) : null
            } catch (r) {
                m = null
            }
            k = m
        } else k = null;
        a: {
            if (d) try {
                var p = lc(Pj, d);
                break a
            } catch (r) {
                Fw(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            p = null
        }
        if (d = p) {
            X(Fk) ? e && Iw(a, e, d) : Iw(a, null, d);
            e = sv(a, G(d, Tj, 7));
            a: {
                if (e && (p = y(e, 3), k = D(d, gj, 9), p && k)) {
                    b: {
                        k = G(k, ej, 1);
                        for (q of k)
                            if (y(q, 1) == p) {
                                var q = D(q, dj, 2) || null;
                                break b
                            }
                        q = null
                    }
                    if (q) break a
                }
                q = D(d, dj, 8) || new dj
            }
            q = {
                qe: q
            };
            e && (q.W = e);
            e && qv(e, 3) && (q.Sa = [1]);
            if (7 == c.google_pgb_reactive && (e = q.W, !e || !B(e, 8))) return !1;
            xv(a, 2) && (Oi(5, [d.toJSON()]), e = Gw(c), f = new Jw(f), c = q.W, e.google_package = c && y(c, 4) || "", Fv(a, b, d, q, f, new en(["google-auto-placed"], e), g, {
                url: a.location.href,
                bb: h
            }));
            return !0
        }
        k && (Fw(a, {
            cfg: 1,
            cl: 1
        }), Hw(a));
        return !1
    };
    const Lw = [255, 255, 255];

    function Mw(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function Nw(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = Mw(b.backgroundColor);
        var c = Ow(b);
        if (c) return c;
        a = (a = a.parentElement) ? Nw(a) : Lw;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function Ow(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var Pw = class {
        constructor(a, b, c, d, e = !1) {
            this.C = a;
            this.j = b;
            this.B = c;
            this.A = d;
            this.l = e
        }
    };
    var Qw = function(a, ...b) {
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return new Sd(c.join(""))
    }
    `https://support.google.com/adsense/answer/11188578`;
    const Rw = /[\s!'",:;\\(\\)\\?\\.]/,
        Sw = "\u00bf\u00a1\u037e\u061f\u3002\uff0c\u00b7\u2019".split(""),
        Tw = ["block", "inline", "inline-block", "list-item", "table-cell"],
        Uw = ["ja", "zh_CN", "zh_TW"];
    class Vw {
        constructor() {
            this.l = null;
            this.j = Infinity
        }
    }

    function Ww(a, b, c, d, e, f) {
        var g;
        if (a.performance.now() >= c.A) return !1;
        for (let F = 0; F < b.childNodes.length; F++) {
            var h = b.childNodes[F];
            if (h.nodeType === Node.TEXT_NODE && "" !== h.textContent) {
                var l = b;
                a: {
                    var k = a;
                    var m = c,
                        p = l,
                        q = h.textContent,
                        r = e,
                        u = f;
                    const I = m.j;
                    var x = [];
                    let E = 0;
                    for (;;) {
                        var H = q.length;
                        let S = null;
                        var A = "";
                        b: for (const qa of G(I, Xw, 2))
                            for (const O of G(qa, Yw, 2)) {
                                const fa = J(O, 1);
                                for (var C = E; C < q.length;) {
                                    C = q.indexOf(fa, C);
                                    if (-1 === C) break;
                                    if (C > H || C === H && null !== S && fa.length < S.length) break;
                                    if (!Zw(q.charAt(C -
                                            1)) || !Zw(q.charAt(C + fa.length))) break;
                                    if (r.j + $w(q.substr(E, C - E)) >= ul(tk)) {
                                        const La = k.getComputedStyle(p),
                                            gb = La.fontSize.match(/\d+/);
                                        if (!(gb && 12 <= Number(gb[0]) && db(Tw, La.display))) break b;
                                        H = C;
                                        S = fa;
                                        A = J(qa, 1);
                                        break
                                    }
                                    C += 1
                                }
                            }
                        if (null === S) {
                            if (0 === E) {
                                r.j += $w(q);
                                k = null;
                                break a
                            }
                            E < q.length && (m = q.substr(E), x.push(k.document.createTextNode(m)), r.j += $w(m));
                            k = x;
                            break a
                        }
                        H > E && x.push(k.document.createTextNode(q.substr(E, H - E)));
                        x.push(ax(k, m, A, S));
                        r.j = 0;
                        E = H + S.length;
                        H = u;
                        H.j++;
                        H.l.add(A)
                    }
                }
                if (k) {
                    if (!X(uk)) {
                        for (const I of k) b.insertBefore(I,
                            h), bx(I);
                        b.removeChild(h);
                        F += k.length - 1
                    }
                    if (null !== (g = e.l) && void 0 !== g) g;
                    else {
                        a: {
                            h = a;
                            for (k = l; k;) {
                                b: switch (k.tagName) {
                                    case "DIV":
                                    case "DL":
                                    case "P":
                                    case "UL":
                                    case "OL":
                                    case "TABLE":
                                        l = !!k.parentElement && db(Tw, h.getComputedStyle(k.parentElement).display);
                                        break b;
                                    default:
                                        l = !1
                                }
                                if (l) {
                                    h = k;
                                    break a
                                }
                                k = k.parentElement
                            }
                            h = h.document.body.childNodes[0]
                        }
                        e.l = h
                    }
                }
            } else {
                a: if (x = r = k = void 0, l = h, l.nodeType !== Node.ELEMENT_NODE || (null === (x = l.classList) || void 0 === x ? 0 : x.contains("google-adfil-skip"))) l = !1;
                    else switch (null ===
                        (k = null === (r = l.tagName) || void 0 === r ? void 0 : r.toUpperCase) || void 0 === k ? void 0 : k.call(r)) {
                        case "A":
                        case "IFRAME":
                        case "AUDIO":
                        case "BUTTON":
                        case "CANVAS":
                        case "CITE":
                        case "CODE":
                        case "EMBED":
                        case "FOOTER":
                        case "H1":
                        case "H2":
                        case "H3":
                        case "H4":
                        case "H5":
                        case "H6":
                        case "KBD":
                        case "OBJECT":
                        case "PRE":
                        case "SAMP":
                        case "SCRIPT":
                        case "SELECT":
                        case "SUB":
                        case "SUPER":
                        case "SVG":
                        case "TEXTAREA":
                        case "TIME":
                        case "VAR":
                        case "VIDEO":
                        case null:
                            l = !1;
                            break a;
                        default:
                            q = p = m = x = r = k = void 0, u = l, l = !((null === (m = null ===
                                (p = (q = u.className).toUpperCase) || void 0 === p ? void 0 : p.call(q)) || void 0 === m ? 0 : m.includes("CRUMB")) || (null === (k = null === (r = (x = u.id).toUpperCase) || void 0 === r ? void 0 : r.call(x)) || void 0 === k ? 0 : k.includes("CRUMB")))
                    }
                if (l && !Ww(a, h, c, d, e, f)) return !1
            }
        }
        return !0
    }

    function bx(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = Ow(Mw(getComputedStyle(a.parentElement).color)),
                    c = Ow(Mw(getComputedStyle(a).color));
                var d = Nw(a);
                if (d = b && c && d ? Dw(c, d) < Math.min(Dw(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).substr(1) : "#" + c.toString(16);
                    K(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) bx(a.children[b])
        }
    }

    function Zw(a) {
        return "" === a || !!a.match(Rw) || db(Sw, a)
    }

    function ax(a, b, c, d) {
        const e = b.j,
            f = a.document.createElement("SPAN");
        cx(f);
        f.appendChild(a.document.createTextNode(d));
        const g = a.document.createElement("A");
        dx(g);
        K(g, {
            "text-decoration": "none"
        });
        Xd(g, Eg(Dg) || Td);
        g.className = "google-adfil";
        g.appendChild(ex(a));
        g.appendChild(a.document.createTextNode("\u00a0"));
        g.appendChild(f);
        const h = a.performance.now();
        g.addEventListener("click", l => {
            var k = a.performance.now();
            k = {
                wp: b.C,
                c: b.B,
                e: ul(rk),
                m: d,
                q: c,
                v: Math.round(k - h)
            };
            V("adfil-clk", k, 1);
            k = `goog-${Math.random()}`;
            var m = fx(a.document, k, c);
            a.document.body.appendChild(m);
            m = {
                pubId: "vert-pla-adfiliates-srp",
                styleId: "1138882718",
                query: c,
                hl: J(e, 7),
                personalizedAds: "false",
                fexp: ul(rk)
            };
            b.l && (m.adtest = "on");
            k = {
                container: k,
                linkTarget: "_blank",
                number: 4,
                width: Math.round(.8 * a.document.body.offsetWidth - 6)
            };
            (a._googCsa = a._googCsa || gx(a))("plas", m, k);
            l.preventDefault();
            return !1
        });
        return g
    }

    function gx(a) {
        return (b, c, d) => {
            const e = a._googCsa;
            (e.q = e.q || []).push([b, c, d]);
            e.t = Number(new Date)
        }
    }

    function cx(a) {
        dx(a);
        K(a, {
            "text-decoration": "underline"
        });
        K(a, {
            "text-decoration-style": "dotted"
        });
        K(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        })
    }

    function ex(a) {
        const b = a.document.createElement("SPAN");
        b.appendChild(a.document.createTextNode("shoppingmode"));
        hx(b);
        K(b, {
            bottom: "-1px",
            "font-family": '"Google Material Icons"',
            "font-size": "90%",
            position: "relative"
        });
        return b
    }

    function fx(a, b, c) {
        const d = a.createElement("DIV");
        d.className = "google-adfil-overlay";
        hx(d);
        K(d, {
            position: "fixed",
            "background-color": "rgba(0,0,0,.92)",
            width: "80%",
            height: "90%",
            top: "5%",
            left: "10%",
            "z-index": "2147483647",
            border: "3px outset"
        });
        const e = a.createElement("INPUT");
        e.type = "TEXT";
        e.value = c;
        hx(e);
        K(e, {
            padding: "8pt",
            "background-color": "#eee"
        });
        d.appendChild(e);
        c = a.createElement("SPAN");
        hx(c);
        K(c, {
            color: "red"
        });
        c.appendChild(a.createTextNode(" [CLOSE]"));
        c.addEventListener("click", () => {
            d.parentElement.removeChild(d)
        });
        d.appendChild(c);
        a = a.createElement("DIV");
        a.setAttribute("id", b);
        d.appendChild(a);
        return d
    }

    function hx(a) {
        dx(a);
        K(a, {
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none"
        })
    }

    function dx(a) {
        K(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    }

    function $w(a) {
        a = a.trim();
        return "" === a ? 0 : a.split(/\s+/).length
    };
    var ix = class {
        constructor() {
            this.j = 0;
            this.l = new Set;
            this.A = 0;
            this.B = this.C = null
        }
    };

    function jx(a) {
        return (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : ""
    }

    function kx(a) {
        return new Set(a.map(jx).filter(b => b.length))
    };
    var mx = class extends w {
            constructor(a) {
                super(a, -1, lx)
            }
        },
        Yw = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Xw = class extends w {
            constructor(a) {
                super(a, -1, nx)
            }
        },
        lx = [2],
        nx = [2];

    function ox(a, b, c, d) {
        const e = px(a) || qx(c);
        e && ri(898, () => {
            a: {
                var f;
                try {
                    if (!a.document.body) break a
                } catch (H) {
                    break a
                }
                if (a.performance) {
                    var g = a.document.body;
                    if (null !== (f = g.classList) && void 0 !== f && f.contains && !g.hasAttribute("data-google-affiliate-annotated")) {
                        g.setAttribute("data-google-affiliate-annotated", "1");
                        f = a.performance.now();
                        var h = ul(vk),
                            l = h ? f + h : Infinity;
                        if (!X(uk)) {
                            h = a.document;
                            var k = h.createElement("LINK"),
                                m = L `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
                            if (m instanceof Kc || m instanceof Id) m = m instanceof Id ? Ld(m).toString() : Nc(m).toString(), k.href = m;
                            else {
                                if (-1 === ae.indexOf("stylesheet")) throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');
                                k.href = Vd(m)
                            }
                            k.rel = "stylesheet";
                            h.head.appendChild(k)
                        }
                        b.hasOwnProperty("adfcb") || (b.adfcb = Lf() ? null : Math.floor(20 * Gf()));
                        k = b.adfcb;
                        if (null != k) {
                            h = new ix;
                            l = new Pw(d, e, k, l, "on" === b.google_adtest);
                            g = $w(g.innerText);
                            h.A = g;
                            m = jx(J(l.j, 7));
                            var p = jx(a.document.documentElement.lang);
                            if ("" !== p) var q =
                                new Set([p]);
                            else {
                                p = a.location;
                                var r = p.host.match(/^[a-z]{2}\./i);
                                r = r ? [r[0]] : [];
                                for (u of p.pathname.split("/")) 2 === u.length && r.push(u);
                                var u = kx(r);
                                u.size || (p = a.navigator, u = kx((null === (q = p.languages) || void 0 === q ? 0 : q.length) ? p.languages : [p.language]));
                                q = u
                            }
                            h.C = m;
                            h.B = new Set(q);
                            g < ul(sk) ? q = "sw" : a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]') ? q = "si" : q.has(m) ? (u = new Vw, q = Ww(a, a.document.body, l, db(Uw, J(l.j, 7)) ? 1 : 0, u, h), u.l && !X(uk) && (l = l.j, g = a.document.createElement("A"), g.appendChild(a.document.createTextNode(J(l,
                                6))), Xd(g, Qw), g.setAttribute("target", "_blank"), cx(g), K(g, {
                                padding: "0 8px"
                            }), m = a.document.createElement("P"), m.className = "google-adfil-skip", m.appendChild(a.document.createTextNode(J(l, 3))), m.appendChild(g), hx(m), K(m, {
                                border: "0 solid #bdc1c6",
                                "border-width": "1px 0",
                                display: "block",
                                margin: "6pt 0",
                                padding: "21px",
                                "text-align": "center",
                                width: "auto"
                            }), l = m, u = u.l, u.parentNode && u.parentNode.insertBefore(l, u), bx(l)), q = q ? "a" : "p") : q = "sl";
                            f = a.performance.now() - f;
                            !X(uk) && 0 < h.j && (l = a.document, u = l.createElement("SCRIPT"),
                                u.setAttribute("async", "async"), de(u, L `https://www.google.com/adsense/search/ads.js`), l.body.appendChild(u));
                            var x;
                            k = {
                                wp: d,
                                c: k,
                                e: ul(rk),
                                ld: Array.from(null !== (x = h.B) && void 0 !== x ? x : []).sort().join(","),
                                lx: h.C || "",
                                n: h.j,
                                o: q,
                                p: G(e, Xw, 2).length,
                                t: h.l.size,
                                w: h.A,
                                x: Math.round(f)
                            };
                            V("adfil-imp", k, 1)
                        }
                    }
                }
            }
        }, f => {
            f.e = `${ul(rk)}`
        })
    }

    function px(a) {
        var b, c;
        try {
            const d = null === (c = null === (b = a.location) || void 0 === b ? void 0 : b.hash) || void 0 === c ? void 0 : c.match(/\bgoog_cpmi=([^&]*)/);
            if (!d) return null;
            const e = decodeURIComponent(d[1]);
            return new mx(JSON.parse(e))
        } catch (d) {
            return null
        }
    }

    function qx(a) {
        return X(Hk) ? D(a, mx, 11) : null
    };
    var sx = class extends w {
            constructor(a) {
                super(a, -1, rx)
            }
        },
        rx = [19];
    var tx = class {
        constructor(a) {
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.F = a.F;
            this.X = a.X;
            this.$ = a.$;
            this.Ga = a.Ga;
            this.Y = a.Y;
            this.aa = a.aa;
            this.B = -1;
            this.j = 0;
            this.A = this.G = null;
            this.H = this.D = 0;
            this.l = [];
            this.Ra = this.C = ""
        }
    };
    var vx = a => {
            const b = a.F;
            null == b.google_ad_output && (b.google_ad_output = "html");
            if (null != b.google_ad_client) {
                var c;
                (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
                b.google_ad_client = c
            }
            null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
            if (null == b.google_flash_version) {
                c = window;
                try {
                    var d = hh(c)
                } catch (e) {
                    d = "0"
                }
                b.google_flash_version = d
            }
            b.google_webgl_support = !!Le.WebGLRenderingContext;
            b.google_ad_section = b.google_ad_section || b.google_ad_region ||
                "";
            b.google_country = b.google_country || b.google_gl || "";
            d = (new Date).getTime();
            Array.isArray(b.google_color_bg) && (b.google_color_bg = ux(a, b.google_color_bg, d));
            Array.isArray(b.google_color_text) && (b.google_color_text = ux(a, b.google_color_text, d));
            Array.isArray(b.google_color_link) && (b.google_color_link = ux(a, b.google_color_link, d));
            Array.isArray(b.google_color_url) && (b.google_color_url = ux(a, b.google_color_url, d));
            Array.isArray(b.google_color_border) && (b.google_color_border = ux(a, b.google_color_border, d));
            Array.isArray(b.google_color_line) && (b.google_color_line = ux(a, b.google_color_line, d))
        },
        ux = (a, b, c) => {
            a.j |= 2;
            return b[c % b.length]
        };
    var wx = (a, b, c, d) => {
        c = c || a.google_ad_width;
        d = d || a.google_ad_height;
        if (a && a.top == a) return !1;
        const e = b.documentElement;
        if (c && d) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
            if (g > 2 * d || f > 2 * c) return !1
        }
        return !0
    };

    function xx(a, b) {
        Hf(a, (c, d) => {
            b[d] = c
        })
    }
    var yx = a => {
        let b = a.location.href;
        if (a == a.top) return {
            url: b,
            ec: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            ec: c
        }
    };

    function zx() {
        var a = N();
        if (a == a.top) return 0;
        for (; a && a != a.top && xf(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var Ax = (a, b) => {
        var c = qi,
            d;
        var e;
        d = (e = (e = tg()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new pg(d.left, d.top, d.width, d.height) : null) ? new Ve(e.left, e.top) : (d = ug()) && ma(d.rootBounds) ? new Ve(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new Ve(0, 0),
                g = jf(ff(b));
            if (mb(g, "parent")) {
                do {
                    if (g == a) var h = Og(b);
                    else {
                        var l = Ng(b);
                        h = new Ve(l.left, l.top)
                    }
                    d = h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (k) {
            return c.ua(888, k), new Ve(-12245933, -12245933)
        }
    };
    var Bx = {
            Df: "google_ads_preview",
            ig: "google_mc_lab",
            yg: "google_anchor_debug",
            xg: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Tg: "google_scr_debug",
            Vg: "google_ia_debug_allow_onclick",
            rh: "googleads",
            kd: "google_pedestal_debug",
            Ih: "google_responsive_slot_preview",
            Hh: "google_responsive_dummy_ad"
        },
        Cx = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var Ex = (a, b) => {
            if (!a) return !1;
            a = a.hash;
            if (!a || !a.indexOf) return !1;
            if (-1 != a.indexOf(b)) return !0;
            b = Dx(b);
            return "go" != b && -1 != a.indexOf(b) ? !0 : !1
        },
        Dx = a => {
            let b = "";
            Hf(a.split("_"), c => {
                b += c.substr(0, 2)
            });
            return b
        },
        Fx = () => {
            var a = t.location;
            let b = !1;
            Hf(Bx, c => {
                Ex(a, c) && (b = !0)
            });
            return b
        },
        Gx = (a, b) => {
            switch (a) {
                case 1:
                    return Ex(b, "google_ia_debug");
                case 2:
                    return Ex(b, "google_bottom_anchor_debug");
                case 3:
                    return Ex(b, "google_anchor_debug") || Ex(b, "googleads");
                case 4:
                    return Ex(b, "google_scr_debug")
            }
            return !1
        };

    function Hx(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var Ix = class {
            constructor() {
                this.j = null;
                this.l = {
                    [Wh]: {},
                    [Xh]: {},
                    [Yh]: {}
                };
                const a = b => this.j ? Jf(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[Xh] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        Jx;
    let Kx = void 0;

    function Lx() {
        Sh(Kx, Rh);
        return Kx
    };

    function Mx(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : xc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function Nx(a) {
        X(gk) && V("abg_adsensesettings_lserr", {
            s: a,
            g: X(hk),
            c: Lx(),
            r: .01
        }, .01)
    };
    var Ox = (a = t) => a.ggeac || (a.ggeac = {});
    class Px {
        constructor() {
            this.j = () => {}
        }
    };
    var Rx = (a = Ox()) => {
            oi(R(pi), a);
            Qx(a);
            R(Px).j = ni(mi, a);
            R(tl).A()
        },
        Qx = a => {
            const b = R(tl);
            b.B = (c, d) => ni(ii, a, () => !1)(c, d, 1);
            b.C = (c, d) => ni(ji, a, () => 0)(c, d, 1);
            b.j = (c, d) => ni(ki, a, () => "")(c, d, 1);
            b.l = (c, d) => {
                ni(li, a, () => [])(c, d, 1)
            };
            b.A = () => {
                ni(fi, a)(1)
            }
        };
    var Sx = a => {
        const b = R(pi).l();
        a = wv(a);
        return b.concat(a).join(",")
    };

    function Tx(a, b, c) {
        return c ? kw(b, c, a.j) : null
    }

    function Ux(a, b, c, d) {
        if (d) {
            var e = {
                Nc: y(c, 2) - Date.now() / 1E3,
                path: y(c, 3),
                domain: y(c, 4),
                Ce: !1
            };
            a = a.j;
            B(d, 5) && jw(a) && (new hw(a.document)).set(b, y(c, 1), e)
        }
    }

    function Vx(a, b, c) {
        if (c && kw(b, c, a.j))
            for (const e of kg(a.j.location.hostname)) {
                var d = a.j;
                B(c, 5) && jw(d) && (new hw(d.document)).remove(b, "/", e)
            }
    }
    var Wx = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function Xx(a, b, c) {
        return si(629, d => {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    l = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof l || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = Ie(He(Ge(Fe(new Je, g), h), l), e);
                switch (d) {
                    case 1:
                        Ux(c, "__gads",
                            e, b);
                        break;
                    case 2:
                        X(Sk) && "1" !== Tx(c, "__gpi_opt_out", b) && Ux(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function Yx(a, b, c) {
        let d = void 0;
        if (0 === a.l) {
            if (Tx(a, "__gads", b)) var e = !0;
            else if (e = a.j, B(b, 5) && jw(e) && (new hw(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === kw("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                B(b, 5) && jw(f) && (new hw(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = Xx(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function Zx(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = Tx(b, "__gads", a);
        e && (d.cookie = e);
        X(Sk) && ((e = Tx(b, "__gpi", a)) && !e.includes("&") && (d.gpi_cookie = e), d.gpid_exp = "1");
        const f = Lc(Oc(tc(vc("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = Yx(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = l => {
                g(l).then(h)
            };
            Bf(c.document, f)
        }) : Promise.resolve()
    }
    var $x = (a, b, c) => {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        const d = new Wx(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : Zx(a, d, b, c)
        } else Promise.resolve();
        a = Tx(d, "__gads", a) || "";
        Jx || (Jx = new Ix);
        b = Jx;
        Hx(b, a);
        a = b.l;
        R(Px).j(a);
        R(pi).j(20);
        R(pi).j(17)
    };
    var ay = (a, b) => {
        var c = a.innerWidth > yl ? 650 : 0,
            d = wh;
        let e = 0;
        try {
            e |= a != a.top ? 512 : 0;
            const f = Math.min(a.screen.width || 0, a.screen.height || 0);
            e |= f ? 320 > f ? 8192 : 0 : 2048;
            e |= a.navigator && Jr(a.navigator.userAgent) ? 1048576 : 0;
            e = c ? e | (a.innerHeight >= c ? 0 : 1024) : e | (a.innerHeight >= a.innerWidth ? 0 : 8);
            e |= zl(a, 3E3);
            e |= Al(a)
        } catch (f) {
            e |= 32
        }
        switch (b) {
            case 2:
                Nr(a, d) && (e |= 16777216);
                break;
            case 1:
                Or(a, d) && (e |= 16777216)
        }
        return e
    };
    var by = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= zl(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var cy = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= zl(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var dy = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        ey = (a, b, c) => {
            let d = 0;
            try {
                d |= zl(a, 2500);
                if (X($k)) {
                    const g = Y(a).clientHeight;
                    d |= g ? 320 > g ? -2147483648 : 0 : 1073741824
                }
                d |= Al(a);
                var e;
                if (e = 0 < b) {
                    var f = Ml(c, b);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };

    function fy(a, b = null) {
        var c;
        if (!X(gl)) return 32;
        let d = a != a.top ? 512 : 0;
        Jr(null === (c = a.navigator) || void 0 === c ? void 0 : c.userAgent) && (d |= 1048576);
        const e = a.innerWidth;
        1200 > e && (d |= 65536);
        const f = a.innerHeight;
        650 > f && (d |= -2147483648);
        b && 0 === d && (gy({
            K: a,
            bd: 1,
            position: 3 === b ? "left" : "right",
            M: e,
            P: f,
            sa: new Set,
            minWidth: 120,
            minHeight: 500
        }) || (d |= 16));
        return d
    }

    function hy(a) {
        if (0 !== fy(a)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = gy({
                K: a,
                bd: 1,
                position: e,
                M: c,
                P: d,
                sa: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function iy(a, b) {
        return null !== sf(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function jy(a, b) {
        return null !== sf(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function ky(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function ly(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function my(a) {
        return `${a.position}-${ly(a.M)}x${ly(a.P)}-${ly(a.scrollY+a.Ja)}Y`
    }

    function ny(a) {
        return `f-${my({position:a.position,Ja:a.Ja,scrollY:0,M:a.M,P:a.P})}`
    }

    function oy(a, b) {
        a = Math.min(null !== a && void 0 !== a ? a : Infinity, null !== b && void 0 !== b ? b : Infinity);
        return Infinity !== a ? a : 0
    }

    function py(a, b, c) {
        const d = vl(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top, 0),
                    g = Math.min(e.bottom, c.P),
                    h = Math.max(e.left, 0);
                e = Math.min(e.right, c.M);
                for (var l = .3 * c.M; f < g; f += 10) {
                    if (0 < e && h < l) {
                        var k = ny({
                            position: "left",
                            Ja: f,
                            M: c.M,
                            P: c.P
                        });
                        b.set(k, oy(b.get(k), h))
                    }
                    if (h < c.M && e > c.M - l) {
                        k = ny({
                            position: "right",
                            Ja: f,
                            M: c.M,
                            P: c.P
                        });
                        const m = c.M - e;
                        b.set(k, oy(b.get(k), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function gy(a) {
        var b = vl(a.K).sideRailAvailableSpace,
            c = {
                K: a.K,
                M: a.M,
                P: a.P,
                sa: a.sa
            },
            d = `f-${ly(c.M)}x${ly(c.P)}`;
        if (!b.has(d)) {
            b.set(d, 0);
            d = new Set([...Array.from(c.K.document.querySelectorAll("[data-anchor-status]")), ...c.sa]);
            for (var e of ky(c.K)) iy(e, d) || py(e, b, c)
        }
        c = [];
        d = .9 * a.P;
        var f = Gl(a.K),
            g = e = (a.P - d) / 2,
            h = d / 11;
        for (var l = 0; 12 > l; l++) {
            var k = c,
                m = k.push;
            a: {
                var p = g;
                var q = a.position,
                    r = b,
                    u = {
                        K: a.K,
                        M: a.M,
                        P: a.P,
                        sa: a.sa
                    };
                const H = ny({
                        position: q,
                        Ja: p,
                        M: u.M,
                        P: u.P
                    }),
                    A = my({
                        position: q,
                        Ja: p,
                        scrollY: f,
                        M: u.M,
                        P: u.P
                    });
                if (r.has(A)) {
                    p = oy(r.get(H), r.get(A));
                    break a
                }
                const C = "left" === q ? 20 : u.M - 20;
                let F = C;q = .3 * u.M / 7 * ("left" === q ? 1 : -1);
                for (let I = 0; 8 > I; I++) {
                    const E = Sr(u.K.document, Math.round(F), Math.round(p));
                    var x = iy(E, u.sa);
                    const S = jy(E, u.K);
                    if (!x && S) {
                        py(E, r, u);
                        r.delete(A);
                        break
                    }
                    x || (x = E.offsetHeight >= .25 * u.P, x = E.offsetWidth >= .9 * u.M && x);
                    if (x) r.set(A, Math.round(Math.abs(F - C) + 20));
                    else if (F !== C) F -= q, q /= 2;
                    else {
                        r.set(A, 0);
                        break
                    }
                    F += q
                }
                p = oy(r.get(H), r.get(A))
            }
            m.call(k, p);
            g += h
        }
        b = a.bd;
        f = a.position;
        d = Math.round(d / 12);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[k];) m.pop();
            h[k] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(k)
        }
        m = [];
        l = c.length - 1;
        k = Array(c.length).fill(0);
        for (p = l; 0 <= p; p--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[p];) m.pop();
            k[p] = 0 === m.length ? l : m[m.length - 1] - 1;
            m.push(p)
        }
        m = null;
        for (l = 0; l < c.length; l++)
            if (p = {
                    position: f,
                    width: Math.round(c[l]),
                    height: Math.round((k[l] - h[l] + 1) * d),
                    ri: e + h[l] * d
                }, r = p.width >= g && p.height >= a, 0 === b && r) {
                m = p;
                break
            } else 1 ===
                b && r && (!m || p.width * p.height > m.width * m.height) && (m = p);
        return m
    };
    const qy = {
        [27]: 512,
        [26]: 128
    };
    var ry = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === ay(a, c);
                case 3:
                case 4:
                    return 0 === fy(a, c);
                case 8:
                    return b = "on" === b.google_adtest || Ex(a.location, "google_ia_debug") ? -1 : 3600, 0 == (dy(a) | ey(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || Ex(a.location, "google_scr_debug")), !Nl(a, b, d);
                case 30:
                    return 0 == Xl(a);
                case 26:
                    return 0 == cy(a);
                case 27:
                    return 0 === by(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        sy = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return ay(a, c);
                case 3:
                case 4:
                    return fy(a,
                        c);
                case 8:
                    return b = "on" === b.google_adtest || Ex(a.location, "google_ia_debug") ? -1 : 3600, dy(a) | ey(a, b, d);
                case 9:
                    return Nl(a, !("on" === b.google_adtest || Ex(a.location, "google_scr_debug")), d);
                case 16:
                    return wn(b, a) ? 0 : 8388608;
                case 30:
                    return Xl(a);
                case 26:
                    return cy(a);
                case 27:
                    return by(a);
                default:
                    return 32
            }
        },
        ty = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!yc(d)) return !1;
            a = Af(a);
            if (!a || !ry(a, b, d, c)) return !1;
            b = vl(a);
            if (El(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        vy = a => {
            const b =
                a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && uy(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
        },
        wy = a => {
            if (!a.hash) return null;
            let b = null;
            Hf(Bx, c => {
                !b && Ex(a, c) && (b = Cx[c])
            });
            return b
        },
        yy = (a, b) => {
            const c = vl(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && Hf(dt, d => {
                !c.debugCardRequested && "number" === typeof d && Gx(d, a.location) && (c.debugCardRequested = !0, xy(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        Ay = (a, b, c) => {
            if (!b) return null;
            const d = vl(b);
            let e = 0;
            Hf(zc, f => {
                const g = qy[f];
                g && 0 ===
                    zy(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        By = (a, b, c) => {
            const d = [];
            Hf(zc, e => {
                const f = zy(b, a, e, c);
                0 !== f && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        Cy = a => {
            const b = [],
                c = {};
            Hf(a, (d, e) => {
                if ((e = ak[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        Dy = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        zy = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = vl(b),
                g = El(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            Hf(f.reactiveTypeDisabledByPublisher, (l, k) => {
                String(c) === String(k) && (h = !0)
            });
            h && wy(b.location) !== c && (e |= 128);
            return e | sy(b, a, c, d)
        },
        Ey = (a, b) => {
            if (a) {
                var c = vl(a),
                    d = {};
                Hf(b, (e, f) => {
                    (f = ak[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                Hf(zc, e => {
                    d[bk[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        Fy = (a, b, c) => {
            b = si(b, c);
            return uq(1, N(), Lc(Wd(a), R(tl).j(nk.j, nk.defaultValue) ? {
                bust: R(tl).j(nk.j, nk.defaultValue)
            } : {})).then(b)
        },
        xy = (a, b, c) => {
            c =
                si(212, c);
            uq(3, a, Wd(b)).then(c)
        };
    const Gy = a => {
        a.adsbygoogle || (a.adsbygoogle = [], Bf(a.document, Wd(L `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)))
    };
    var Hy = (a, b) => {
            pe(a, "load", () => {
                Gy(a);
                a.adsbygoogle.push(b)
            })
        },
        Iy = a => {
            a = a.google_reactive_ad_format;
            return yc(a) ? "" + a : null
        },
        uy = a => !!Iy(a) || null != a.google_pgb_reactive,
        Jy = a => {
            a = Iy(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
        };
    var Ky = a => "number" === typeof a.google_reactive_sra_index,
        Py = (a, b, c) => {
            const d = b.K || b.pubWin,
                e = b.F;
            e.google_reactive_plat = By(d, e, c);
            var f = Cy(a);
            f && (e.google_reactive_plaf = f);
            (f = Dy(a)) && (e.google_reactive_fba = f);
            (f = hy(d)) && (e.google_plas = f);
            Ly(a, e);
            f = wy(b.pubWin.location);
            My(a, f, e);
            f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
            vg() || Pl(b.pubWin.top);
            f = Ci(b.pubWin, "rsrai", si(429, (g, h) => Ny(b, d, e.google_ad_client, a, g, h, c)), si(430, ua(Jl, b.pubWin, 431, wh)));
            b.l.push(f);
            vl(d).wasReactiveTagRequestSent = !0;
            Oy(b, a, c)
        };
    const Oy = (a, b, c) => {
        const d = a.F,
            e = ma(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = Ci(a.pubWin, "apcnf", si(353, (f, g) => {
            var h = a.pubWin,
                l = d.google_ad_client,
                k = Wd(a.$.Ec),
                m = Wd(a.$.bb);
            return bg(g.origin) ? Kw(h, l, e, f.config, c, k, null, m) : !1
        }), si(353, ua(Jl, a.pubWin, 353, wh)));
        a.l.push(b)
    };
    var Ny = (a, b, c, d, e, f, g) => {
            if (!bg(f.origin)) return !1;
            f = e.data;
            if (!Array.isArray(f)) return !1;
            if (!xv(b, 1)) return !0;
            f && Oi(6, [f]);
            e = e.amaConfig;
            const h = [],
                l = [],
                k = vl(b);
            let m = null;
            for (let p = 0; p < f.length; p++) {
                if (!f[p]) continue;
                const q = f[p],
                    r = q.adFormat;
                k && q.enabledInAsfe && (k.reactiveTypeEnabledInAsfe[r] = !0);
                if (!q.noCreative) {
                    q.google_reactive_sra_index = p;
                    if (9 === r && e) {
                        q.pubVars = Object.assign(q.pubVars || {}, Qy(d, q));
                        const u = new Ol;
                        if (ck(u, q)) {
                            m = u;
                            continue
                        }
                    }
                    h.push(q);
                    l.push(r)
                }
            }
            h.length && (V("rasra::pm", {
                rt: l.join(","),
                c
            }, .1), Fy(a.$.Vc, 522, p => {
                Ry(h, b, c, p, d, g)
            }));
            e && Kw(b, c, d, e, g, Wd(a.$.Ec), m);
            return !0
        },
        Qy = (a, b) => {
            const c = b.adFormat,
                d = b.adKey;
            delete b.adKey;
            const e = {};
            a = a.page_level_pubvars;
            ma(a) && Object.assign(e, a);
            e.google_ad_unit_key = d;
            e.google_reactive_sra_index = b.google_reactive_sra_index;
            30 === c && (e.google_reactive_ad_format = 30);
            e.google_pgb_reactive = e.google_pgb_reactive || 5;
            return b.pubVars = e
        },
        Ry = (a, b, c, d, e, f) => {
            const g = [];
            for (let h = 0; h < a.length; h++) {
                const l = a[h],
                    k = l.adFormat,
                    m = l.adKey,
                    p = d.configProcessorForAdFormat(k);
                k && p && m ? (l.pubVars = Qy(e, l), delete l.google_reactive_sra_index, g.push(k), ri(466, () => p.verifyAndProcessConfig(b, l, f))) : V("rasra::ivc", {
                    af: k,
                    ak: m,
                    c
                }, .1)
            }
            V("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        Ly = (a, b) => {
            const c = [];
            let d = !1;
            Hf(ak, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    ma(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = ak[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        My = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest &&
                ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
        };
    lb("script");
    var Sy = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function Ty(a, b) {
        if (!wn(b, a)) return () => {};
        a = Uy(b, a);
        if (!a) return () => {};
        const c = gw();
        b = Bc(b);
        const d = {
            lc: a,
            F: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => eb(c, d)
    }

    function Uy(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Bn.test(a.className);) a = a.parentElement;
        return a
    }

    function Vy(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                l = a.childNodes[g];
            var c = l.style,
                d = h,
                e = ["width", "height"];
            for (let k = 0; k < e.length; k++) {
                const m = "google_ad_" + e[k];
                if (!d.hasOwnProperty(m)) {
                    var f = Qf(c[e[k]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return l
        }
        return null
    }

    function Wy(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function Xy(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            a = gw();
            for (const d of a)
                if (d.lc.offsetWidth != d.offsetWidth || d.F.google_full_width_responsive_allowed) d.offsetWidth = d.lc.offsetWidth, ri(467, () => {
                    var e = d.lc,
                        f = d.F;
                    const g = Vy(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    N().google_spfd(e, f, b);
                    const h = Vy(e, f);
                    !h && g && 1 == e.childNodes.length ? (Wy(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", Gy(b), b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ?
                        h != g && (Wy(g, !1), Wy(h, !0)) : V("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: e.childNodes.length
                        })
                })
        }
    }
    class Yy extends Ds {
        constructor() {
            super();
            this.j = null
        }
        init(a) {
            const b = Zv();
            if (!dw(b, 27, !1)) {
                b.S[bw(27)] = !0;
                this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => Xy(this, a);
                pe(a, "resize", c);
                Es(this, () => {
                    qe(a, "resize", c)
                })
            }
        }
    };
    var Zy = class {
        constructor(a, b, c) {
            this.B = a;
            this.A = b;
            this.j = c;
            this.l = null;
            this.C = this.D = 0
        }
        G() {
            10 <= ++this.D && t.clearInterval(this.l);
            var a = zn(this.B, this.A);
            a = An(this.B, this.A, a);
            const b = vn(this.A, this.B);
            null != b && 0 === b.x || t.clearInterval(this.l);
            a && (this.C++, V("rspv:al", {
                aligns: this.C,
                attempt: this.D,
                client: this.j.google_ad_client,
                eoffs: null != b ? b.x : null,
                eids: Sx(this.j),
                slot: this.j.google_ad_slot,
                url: this.j.google_page_url
            }, .01))
        }
    };
    var az = a => {
            const b = {};
            b.dtd = $y((new Date).getTime(), Yl);
            return Xg(b, a)
        },
        $y = (a, b, c = 1E5) => {
            a -= b;
            return a >= c ? "M" : 0 <= a ? a : "-M"
        };
    var cz = (a, b, c) => {
        let d;
        const e = (null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")) ? b.parentElement : b;
        c.addEventListener("load", () => bz(e));
        return Ci(a, "adpnt", (f, g) => {
            var h;
            if (Fl(g, c.contentWindow)) {
                f = Il(f).qid;
                try {
                    c.setAttribute("data-google-query-id", f);
                    var l;
                    null !== (h = a.googletag) && void 0 !== h ? h : a.googletag = {};
                    const k = null !== (l = a.googletag.queryIds) && void 0 !== l ? l : [];
                    k.push(f);
                    500 < k.length && k.shift();
                    a.googletag.queryIds = k
                } catch (k) {}
                e.dataset.adStatus && V("adsense_late_fill", {
                    status: e.dataset.adStatus
                });
                e.dataset.adStatus = "filled";
                h = !0
            } else h = !1;
            return h
        })
    };

    function bz(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function dz(a, b, c) {
        try {
            if (!bg(c.origin)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.ib[d]) && Oh(a.la, 168, () => {
            e.call(a, b, c)
        })
    }
    class ez extends Ds {
        constructor(a) {
            var b = qi,
                c = wh;
            super();
            this.j = a;
            this.la = b;
            this.da = c;
            this.ib = {};
            this.gd = Ph(this.la, 168, (d, e) => void dz(this, d, e));
            this.Gd = Ph(this.la, 169, (d, e) => Jl(this.j, "ras::xsf", this.da, d, e));
            this.ya = [];
            this.Z(this.ib);
            this.ya.push(wi(this.j, "sth", this.gd, this.Gd))
        }
        B() {
            for (const a of this.ya) a();
            this.ya.length = 0;
            super.B()
        }
    };
    class fz extends ez {
        constructor(a) {
            super(a);
            this.j = a
        }
    };
    var gz = class extends fz {
        constructor(a, b) {
            super(a);
            this.l = b;
            this.A = () => {};
            pe(this.l, "load", this.A)
        }
        B() {
            this.l && qe(this.l, "load", this.A);
            super.B();
            this.l = null
        }
        Z(a) {
            a["adsense-labs"] = b => {
                if (b = Il(b).settings) try {
                    var c = new Ee(JSON.parse(b));
                    if (Yb(c, 1)) {
                        var d = this.j,
                            e = y(c, 1) || "";
                        if (X(hk) ? null != pw({
                                win: d,
                                Ab: Lx()
                            }).j : 1) {
                            if (X(hk)) {
                                var f = pw({
                                    win: d,
                                    Ab: Lx()
                                });
                                if (null != f.j) {
                                    Nx("ok");
                                    var g = Mx(f.j.value)
                                } else Nx(f.l.message), g = {}
                            } else g = Mx(d.localStorage);
                            null !== c && (g[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings",
                                    JSON.stringify(g))
                            } catch (h) {}
                        }
                    }
                } catch (h) {}
            }
        }
    };

    function hz(a) {
        a.A = a.D;
        a.I.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.G.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        iz(a)
    }

    function jz(a, b) {
        (a.l.contentWindow || a.l.contentWindow).postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function iz(a) {
        const b = `rect(0px, ${a.l.width}px, ${a.A}px, 0px)`;
        a.l.style.clip = b;
        a.G.style.clip = b;
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.G.setAttribute("height", a.A);
        a.G.style.height = a.A + "px";
        a.C.style.height = a.A + "px";
        a.I.style.height = a.A + "px"
    }

    function kz(a, b) {
        b = Of(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "1";
        a.L = Og(a.I).y;
        a.J = Gl(a.j);
        if (a.L + a.A < a.J) return "2";
        if (a.L > Bl(a.j) - a.j.innerHeight) return "3";
        b = a.J;
        a.l.setAttribute("height", a.D);
        a.l.style.height = a.D + "px";
        a.G.style.overflow = "hidden";
        a.I.style.position = "relative";
        a.I.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.G.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.L, a.A);
        Ig(a.C, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.l.width}px, ${b}px, 0px)`;
        Ig(a.l, {
            clip: b
        });
        Ig(a.G, {
            clip: b
        });
        return "0"
    }

    function lz(a, b = {}) {
        a.ea && (b.eid = a.ea);
        b.qid = a.qa;
        V("eoscrl", b, Zl(String(a.gb)))
    }
    class mz extends fz {
        constructor(a, b) {
            super(a.K);
            this.l = b;
            this.G = a.aa.firstElementChild;
            this.C = a.aa;
            this.I = this.C.parentElement && this.C.parentElement.classList.contains("adsbygoogle") ? this.C.parentElement : this.C;
            this.A = parseInt(this.C.style.height, 10);
            this.ea = null;
            this.sc = this.hb = !1;
            this.qa = "";
            this.ma = this.J = this.D = 0;
            this.od = this.A / 5;
            this.L = Og(this.I).y;
            this.gb = null;
            this.nd = le(si(651, () => {
                this.L = Og(this.I).y;
                var c = this.J;
                this.J = Gl(this.j);
                this.A < this.D ? (c = this.J - c, 0 < c && (this.ma += c, this.ma >= this.od ?
                    (hz(this), jz(this, this.D)) : (this.A = Math.min(this.D, this.A + c), jz(this, c), iz(this)))) : qe(this.j, "scroll", this.R)
            }), this);
            this.R = () => {
                var c = this.nd;
                Le.requestAnimationFrame ? Le.requestAnimationFrame(c) : c()
            }
        }
        Z(a) {
            a["expand-on-scroll"] = (b, c) => {
                kh(c, this.l) && (b = Il(b), this.ea = b.i_expid, this.qa = b.qid, this.gb = b.gen204_fraction, this.hb || (this.hb = !0, b = kz(this, b), "0" === b && pe(this.j, "scroll", this.R, me), c.source.postMessage(JSON.stringify({
                        msg_type: "expand-on-scroll-result",
                        eos_success: "0" === b,
                        googMsgType: "sth"
                    }),
                    "*"), lz(this, {
                    err: b
                })))
            };
            a["expand-on-scroll-force-expand"] = (b, c) => {
                kh(c, this.l) && !this.sc && (this.sc = !0, hz(this), qe(this.j, "scroll", this.R))
            }
        }
        B() {
            this.R && qe(this.j, "scroll", this.R, me);
            super.B()
        }
    };

    function nz(a) {
        const b = a.J.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.l.innerHeight) && !c
    }
    class oz extends Ds {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.C = b;
            this.J = c;
            this.D = 0;
            this.A = nz(this);
            this.I = ke(this.G, this);
            this.j = si(433, () => {
                var d = this.I;
                Le.requestAnimationFrame ? Le.requestAnimationFrame(d) : d()
            });
            pe(this.l, "scroll", this.j, me)
        }
        G() {
            const a = nz(this);
            if (a && !this.A) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.C.contentWindow;
                c && (Di(c, "ig", b, "*", 2), 10 <= ++this.D && this.j && qe(this.l, "scroll", this.j, me))
            }
            this.A = a
        }
    };
    class pz extends fz {
        constructor(a, b) {
            a.K && super(a.K);
            this.l = b;
            this.C = a.aa;
            this.A = a.Y
        }
        Z(a) {
            a.interscroller = (b, c) => {
                if (kh(c, this.l) && (c = Il(b), b = c.i_h, c = c.i_f, null != b && "" !== b && null != c && "" !== c)) {
                    this.C.style.position = "relative";
                    K(this.A, {
                        position: "absolute",
                        clip: "rect(0, auto, auto, 0)"
                    });
                    var d = this.A.firstElementChild;
                    d && d.id == this.l.id && K(d, {
                        position: "fixed"
                    });
                    d = Of(Mg(this.A, "zIndex").toString(), 0) + 1;
                    b = ig(this.l.id + "_header", b);
                    K(b, {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("afterbegin", b);
                    b = ig(this.l.id + "_footer", c);
                    K(b, {
                        position: "absolute",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("beforeend", b)
                }
            }
        }
    };
    const qz = {
        display: "block",
        left: "auto",
        position: "fixed",
        bottom: "0px"
    };

    function rz(a, b) {
        if (!a.qa) return "1";
        b = Of(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "2";
        a.C = Og(a.A).y;
        b = a.j.innerHeight;
        if (a.C + a.ea < b) return "4";
        if (a.C > Bl(a.j) - b) return "3";
        a.A.setAttribute("height", a.D);
        a.A.style.height = a.D + "px";
        Ig(a.l, qz);
        a.l.style.height = a.D + "px";
        a.R.style.position = "relative";
        a.ma();
        return "0"
    }

    function sz(a, b = {}) {
        a.G && (b.eid = a.G);
        b.qid = a.I;
        V("pscrl", b, Zl(String(a.J)))
    }
    class tz extends fz {
        constructor(a, b) {
            a.K && super(a.K);
            this.A = b;
            this.l = a.aa;
            this.R = this.l.parentElement;
            this.ea = parseInt(this.l.style.height, 10);
            this.G = null;
            this.L = !1;
            this.I = "";
            this.D = 0;
            this.C = Og(this.A).y;
            this.J = null;
            this.qa = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame;
            this.ma = si(636, () => {
                this.qa.call(this.j, this.ma);
                var c = this.j.innerHeight,
                    d = Gl(this.j);
                this.C = Og(this.R).y;
                d + c > this.C ? (d = d + c - this.C, c = Math.min(d,
                    this.ea), d = this.D - d, d = Math.max(0, d), 0 >= d ? Ig(this.l, {
                    position: "absolute",
                    top: "0px",
                    bottom: "auto"
                }) : Ig(this.l, {
                    position: "fixed",
                    top: "auto",
                    bottom: "0px"
                }), Ig(this.l, {
                    clip: "rect(" + d + "px, " + this.A.width + "px, " + (d + c) + "px, 0px)"
                })) : Ig(this.l, {
                    clip: "rect(3000px, " + this.A.width + "px, 0px, 0px)"
                })
            })
        }
        Z(a) {
            a["parallax-scroll"] = (b, c) => {
                b = Il(b);
                this.G = b.i_expid;
                this.I = b.qid;
                this.J = b.gen204_fraction;
                !this.L && kh(c, this.A) && (this.L = !0, b = rz(this, b), c.source.postMessage(JSON.stringify({
                    msg_type: "parallax-scroll-result",
                    ps_success: "0" === b,
                    googMsgType: "sth"
                }), "*"), sz(this, {
                    err: b
                }))
            }
        }
    };

    function uz(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = gf(a.j.N() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = vz(a, b, c, a.j.j.elementsFromPoint(Se(c.left + c.width / 2, c.left, c.right - 1), Se(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = vz(a, b, c, a.j.j.elementsFromPoint(Se(c.left + c.width / 2, c.left, c.right - 1), Se(c.top + 2, c.top, c.bottom - 1)), 2, e.ra),
            g = vz(a, b, c, a.j.j.elementsFromPoint(Se(c.left + 2, c.left, c.right - 1), Se(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.ra, ...f.ra]);
        const h = vz(a, b, c, a.j.j.elementsFromPoint(Se(c.right - 1 - 2, c.left, c.right - 1), Se(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.ra, ...f.ra, ...g.ra]);
        var l = wz(a, b, c),
            k = p => db(a.A, p.overlapType) && db(a.B, p.overlapDepth) && db(a.l, p.overlapDetectionPoint);
        e = $a([...e.entries, ...f.entries, ...g.entries, ...h.entries], k);
        k = $a(l, k);
        l = [...e, ...k];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < l.length || f;
        g = hf(a.j.j);
        const m = new pg(c.left, c.top, c.width, c.height);
        e = [...ab(e, p => new pg(p.elementRect.left,
            p.elementRect.top, p.elementRect.width, p.elementRect.height)), ...jb(ab(k, p => rg(m, p.elementRect))), ...$a(rg(m, new pg(0, 0, d.width, d.height)), p => 0 <= p.top && p.top + p.height <= d.height)];
        return {
            entries: l,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? xz(m, e) : yz(c, e)
        }
    }

    function zz(a, b) {
        const c = a.j.N(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(l => {
                                    const k = new Lh,
                                        m = Kh(k, () => uz(a, l));
                                    m && (k.events.length && (m.executionTime = Math.round(Number(k.events[0].duration))), h.disconnect(), e(m))
                                }, Az);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function vz(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            ra: []
        };
        const g = [],
            h = [];
        for (let p = 0; p < d.length; p++) {
            const q = d[p];
            if (q === b) continue;
            if (db(f, q)) continue;
            h.push(q);
            const r = q.getBoundingClientRect();
            if (a.j.contains(q, b)) {
                g.push(Bz(a, c, q, r, 1, e));
                continue
            }
            if (a.j.contains(b, q)) {
                g.push(Bz(a, c, q, r, 2, e));
                continue
            }
            a: {
                var l = a;
                var k = b,
                    m = q;
                const H = l.j.Ud(k, m);
                if (!H) {
                    l = null;
                    break a
                }
                const {
                    suspectAncestor: A,
                    Ba: C
                } = Cz(l, k, H, m) || {},
                {
                    suspectAncestor: F,
                    Ba: I
                } = Cz(l, m, H, k) || {};l = A && C && F && I ? C <= I ? {
                    suspectAncestor: A,
                    overlapType: Dz[C]
                } : {
                    suspectAncestor: F,
                    overlapType: Ez[I]
                } : A && C ? {
                    suspectAncestor: A,
                    overlapType: Dz[C]
                } : F && I ? {
                    suspectAncestor: F,
                    overlapType: Ez[I]
                } : null
            }
            const {
                suspectAncestor: u,
                overlapType: x
            } = l || {};
            u && x ? g.push(Bz(a, c, q, r, x, e, u)) : g.push(Bz(a, c, q, r, 9, e))
        }
        return {
            entries: g,
            ra: h
        }
    }

    function wz(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Ff(b, a.j.N());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(Bz(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(Bz(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(Bz(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function xz(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = qg(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function yz(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function Bz(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (db(a.A, e) && db(a.l, f)) {
            b = new mg(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = Fz(a, c)) && og(b, a)) c = 4;
            else {
                a = Gz(c, d);
                if (qb) {
                    e = Sg(c, "paddingLeft");
                    f = Sg(c, "paddingRight");
                    var l = Sg(c, "paddingTop"),
                        k = Sg(c, "paddingBottom");
                    e = new mg(l, f, k, e)
                } else e = Lg(c, "paddingLeft"), f = Lg(c, "paddingRight"), l = Lg(c, "paddingTop"), k = Lg(c, "paddingBottom"), e = new mg(parseFloat(l), parseFloat(f), parseFloat(k), parseFloat(e));
                og(b, new mg(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = Gz(c, d), c = og(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function Cz(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.N();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Ff(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Ba: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Ba: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Ba: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const l = Hz(a, e.slice(0, f), h);
                    if (g || l) return {
                        suspectAncestor: h,
                        Ba: 4
                    }
                }
            }
        }
        return (a = Hz(a, e, b)) ? {
                suspectAncestor: a,
                Ba: 5
            } :
            null
    }

    function Hz(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Ff(f, a.j.N());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function Fz(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new mg(a.top, a.right, a.bottom, a.left)
    }

    function Gz(a, b) {
        if (!qb || 9 <= Number(Fb)) {
            var c = Lg(a, "borderLeftWidth");
            d = Lg(a, "borderRightWidth");
            e = Lg(a, "borderTopWidth");
            a = Lg(a, "borderBottomWidth");
            c = new mg(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = Ug(a, "borderLeft");
            var d = Ug(a, "borderRight"),
                e = Ug(a, "borderTop");
            a = Ug(a, "borderBottom");
            c = new mg(e, d, a, c)
        }
        return new mg(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class Iz {
        constructor(a, b = Jz) {
            this.j = df(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const Dz = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        Ez = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    $a(If({
        og: 1,
        pg: 2,
        Vh: 3,
        Wh: 4,
        Yh: 5,
        kg: 6,
        lg: 7,
        ng: 8,
        oh: 9,
        Xh: 10,
        mg: 11,
        Uh: 12,
        jg: 13
    }), a => !db([1, 2], a));
    If({
        Ef: 1,
        qh: 2,
        Pf: 3,
        Zh: 4
    });
    const Jz = If({
            Ff: 1,
            bi: 2,
            $g: 3,
            Lh: 4
        }),
        Az = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function Kz(a) {
        return X(al) && a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function Lz(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function Mz(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function Nz(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.kc + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Ig(a, "transition", b.join(","))
    }
    var Oz = ie(function() {
        if (qb) return Cb("10.0");
        var a = lf(document, "DIV"),
            b = vb ? "-webkit" : ub ? "-moz" : qb ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        vd("div");
        b = yd("div", b, void 0);
        Oe(a, b);
        a = a.firstChild;
        b = a.style[bf("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Jg(a, "transition")] || "")
    });

    function Pz(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function Qz(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function Rz(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function Sz(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(Tz, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function Uz(a) {
        var b = Sz(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var Vz = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function Wz(a) {
        let b = a.da;
        a.J = function() {};
        Xz(a, a.I, b);
        let c = a.I.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Ff(c, b)
            } catch (g) {
                Rz(a.j, "c")
            }
            const f = Yz(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.Z = !0);
            if (d && !f && Zz(e)) {
                Qz(a.j, "l");
                a.L = c;
                break
            }
            d = d && f;
            if (e && $z(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.hb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !xf(b)) {
                        Qz(a.j, "c");
                        break
                    }
                } catch (g) {
                    Qz(a.j,
                        "c");
                    break
                }
            }
        }
        a.H && a.B && aA(a);
        return a.j
    }

    function bA(a) {
        function b() {
            cA(c, f, g);
            if (h && !l && !g) {
                const k = function(m) {
                    for (let p = 0; p < m.length; p++) Ig(h, m[p], "0px")
                };
                k(dA);
                k(eA)
            }
        }
        const c = a.I;
        c.style.overflow = a.gb ? "visible" : "hidden";
        a.H && (a.L ? (Nz(c, fA), Nz(a.L, fA)) : Nz(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.R && (c.style.opacity = a.R);
        const d = null != a.G && null != a.A && (a.la || a.A > a.G) ? a.A : null,
            e = null != a.D && null != a.l && (a.la || a.l > a.D) ? a.l : null;
        if (a.U) {
            const k = a.U.length;
            for (let m = 0; m < k; m++) cA(a.U[m], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.L,
            l = a.Z;
        a.H ? t.setTimeout(b, 1E3) : b()
    }

    function gA(a) {
        if (a.B && !a.ma || null == a.A && null == a.l && null == a.R && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        Wz(a);
        a.B = b;
        if (!b || null != a.ea && !Sz(a.j, a.ea, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.G = null, a.D = null);
        if (null == a.G && null !== a.A || null == a.D && null !== a.l) a.H = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        bA(a);
        return Wz(a)
    }

    function $z(a, b) {
        let c = !1;
        "none" == b.display && (Qz(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || Qz(a.j, "v");
        "hidden" == b.overflow && Qz(a.j, "o");
        "absolute" == b.position ? (Qz(a.j, "a"), c = !0) : "fixed" == b.position && (Qz(a.j, "f"), c = !0);
        return c
    }

    function Xz(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let l = 0; l < g.length; l++) {
            var h = g[l];
            h == b ? e = !0 : (h = hA(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && Pz(a.j, 0, "o"), d & 4 && Pz(a.j, 1, "o"));
        return !(d & 1)
    }

    function Yz(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (H) {
            Rz(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = Of(f),
            h = c.getAttribute("height"),
            l = Of(h),
            k = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        const m = Xz(a, c, b);
        var p = d && d.width,
            q = d && d.height,
            r = e && e.width,
            u = e && e.height,
            x = Qf(p) == a.G && Qf(q) == a.D;
        p = x ? p : r;
        u = x ? q : u;
        r = Qf(p);
        x = Qf(u);
        g = null !== a.G && (null !== r && a.G >= r || null !== g && a.G >= g);
        x = null !== a.D && (null !== x && a.D >= x || null !== l && a.D >= l);
        l = !m && Zz(d);
        x = m || x || l || !(f || p || d && (!iA(String(d.minWidth)) || !jA(String(d.maxWidth))));
        k = m || g || l || k || !(h || u || d && (!iA(String(d.minHeight)) || !jA(String(d.maxHeight))));
        kA(a, 0, x, c, "width", f, a.G, a.A);
        lA(a, 0, "d", x, e, d, "width", p, a.G, a.A);
        lA(a, 0, "m", x, e, d, "minWidth", e && e.minWidth, a.G, a.A);
        lA(a, 0, "M", x, e, d, "maxWidth", e && e.maxWidth, a.G, a.A);
        if (a.ib) {
            c = /^html|body$/i.test(c.nodeName);
            q = Qf(q);
            h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1;
            (f = null != a.l && d && q && Math.round(q) !== a.l) && !(f = !h) && (f = q, f = (X(Kk) || b.location && "#gffwroe2ettq" == b.location.hash) && Math.round(f) < .8 * Math.round(b.innerHeight));
            f = f && "100%" !== d.minHeight;
            if (c = a.B && !c && f) c = !(a.qa && d && (X(Gk) || b.location && "#gffwroe2etoq" == b.location.hash) && Math.round(Qf(d.minHeight)) === Math.round(b.innerHeight));
            c && (e.setProperty("height", "auto", "important"), d && !iA(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !jA(String(d.maxHeight)) && a.l && Math.round(q) < a.l && e.setProperty("max-height", "none", "important"))
        } else kA(a, 1, k, c, "height", h, a.D, a.l), lA(a, 1, "d", k, e, d, "height", u, a.D, a.l), lA(a, 1, "m", k, e, d, "minHeight", e && e.minHeight,
            a.D, a.l), lA(a, 1, "M", k, e, d, "maxHeight", e && e.maxHeight, a.D, a.l);
        return m
    }

    function aA(a) {
        function b() {
            if (0 < c) {
                var k = Ff(e, d) || {};
                const m = Qf(k.width);
                k = Qf(k.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== k && null !== g && h && h(1, g - k);
                --c
            } else t.clearInterval(l), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.da,
            e = a.I,
            f = a.A,
            g = a.l,
            h = a.J;
        let l;
        t.setTimeout(function() {
            l = t.setInterval(b, 16)
        }, 990)
    }

    function hA(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Ff(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function kA(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = Of(f);
                null == f && (Rz(a.j, "n"), Pz(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.H) {
                            const l = Math.max(f + h - (g || 0), 0),
                                k = a.J;
                            a.J = function(m, p) {
                                m == b && d.setAttribute(e, l - p);
                                k && k(m, p)
                            }
                        } else d.setAttribute(e, h)
                } else Pz(a.j, b, "d")
        }
    }

    function lA(a, b, c, d, e, f, g, h, l, k) {
        if (null != k) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? iA(f) : jA(f)) || (f = Qf(f), null == f ? Qz(a.j, "p") : null != l && Qz(a.j, f == l ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? iA(h) : jA(h)) return;
                h = Qf(h);
                null == h && (Rz(a.j, "p"), Pz(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.H) {
                            const m = Math.max(h + k - (l || 0), 0),
                                p = a.J;
                            a.J = function(q, r) {
                                q == b && (e[g] = m - r + "px");
                                p && p(q, r)
                            }
                        } else e[g] = k + "px"
                } else Pz(a.j, b, c)
        }
    }
    var qA = class {
        constructor(a, b, c, d, e, f, g) {
            this.hb = a;
            this.U = c;
            this.I = b;
            this.da = (a = this.I.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new mA(this.I);
            this.B = g;
            this.ma = nA(this.C, d.qc, d.height, d.$c);
            this.G = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = oA(d.width);
            this.l = oA(d.height);
            this.R = this.B ? oA(d.opacity) : null;
            this.ea =
                d.check;
            this.H = "animate" == d.qc && !pA(this.C, this.l, this.ya) && Oz();
            this.gb = !!d.tc;
            this.j = new Vz;
            pA(this.C, this.l, this.ya) && Qz(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && Qz(this.j, "b");
            this.L = this.J = null;
            this.Z = !1;
            this.la = !!d.ze;
            this.ib = !!d.Yc;
            this.ya = !!d.$c;
            this.qa = d.jb
        }
    };

    function pA(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, oA(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var mA = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && Af(c);
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || t;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && Kz(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function nA(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return pA(a, c, d)
        }
    }

    function Zz(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function rA(a, b, c, d) {
        return gA(new qA(a, b, d, c, null, null, !0))
    }
    var sA = new Vz("s", ""),
        Tz = RegExp("[lonvafrbpEe]", "g");

    function jA(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function iA(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function cA(a, b, c) {
        null !== b && null !== Of(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== Of(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var dA = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        eA = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let tA = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        uA = dA;
    for (let a = 0; a < uA.length; a++) tA += ", " + uA[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    uA = eA;
    for (let a = 0; a < uA.length; a++) tA += ", " + uA[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var fA = tA;

    function oA(a) {
        return "string" === typeof a ? Of(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function vA(a, b, c, d, e, f, g, h, l, k) {
        const m = N();
        if (!a.l || !m) return k.err = "2", wA(a, k, null), !1;
        if ("no_rsz" === f) return k.err = "7", wA(a, k, null), !0;
        const p = new mA(a.l);
        if (!p.j) return k.err = "3", wA(a, k, null), !1;
        var q = p.getWidth();
        null != q && (k.w = q);
        q = p.getHeight();
        null != q && (k.h = q);
        if (nA(p, f, d, l)) {
            var r = a.l.ownerDocument.getElementById(a.l.id + "_anchor");
            q = r ? [a.l] : null;
            r = r || a.l;
            const u = X(Qk);
            b = rA(m, r, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                qc: f,
                tc: g,
                ze: h,
                Yc: u,
                $c: l
            }, q);
            k.r_cui && Pf(k.r_cui.toString()) && K(r, {
                height: (null ===
                    d ? 0 : d - 48) + "px",
                top: "24px"
            });
            null != c && (k.nw = c);
            null != d && (k.nh = d);
            k.rsz = b.toString();
            k.abl = Uz(b);
            k.frsz = ("force" === f).toString();
            k.err = "0";
            wA(a, k, p);
            cb(R(pi).l(), x => db([248427477, 248427478], x)) && a.j === m && zz(new Iz(a.j, void 0), r).then(x => {
                Oi(8, [x]);
                return x
            }).then(x => {
                V("resize-ovlp", {
                    adf: a.A,
                    eid: a.G,
                    io: Number(x.isOverlappingOrOutsideViewport),
                    oa: x.overlappedArea.toFixed(2),
                    qid: k.qid || "",
                    slot: a.I,
                    url: a.J,
                    vp: x.viewportSize.width + "x" + x.viewportSize.height
                }, 1)
            }).catch(x => {
                V("resize-ovlp-err", {
                        err: x.message
                    },
                    1)
            });
            return !0
        }
        k.err = "1";
        wA(a, k, p);
        return !1
    }

    function xA(a, b, c) {
        const d = {
            scrl: Gl(a.j || N()),
            adk: a.D,
            adf: a.A,
            fmt: a.C
        };
        b && (d.str = pA(b, Of(c.r_nh), Pf(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        Hf(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function wA(a, b, c) {
        const d = Zl(String(b.gen204_fraction));
        b = xA(a, c, b);
        b.url = a.j.document.URL;
        V("resize", b, d)
    }
    class yA extends fz {
        constructor(a, b, c) {
            super(a);
            this.l = b;
            this.D = String(c.google_ad_unit_key || "");
            this.A = String(c.google_ad_dom_fingerprint || "");
            this.C = String(c.google_ad_format || "");
            this.G = Sx(c);
            this.I = String(c.google_ad_slot || "");
            this.J = String(c.google_page_url || "")
        }
        Z(a) {
            a["resize-me"] = (b, c) => {
                if (Fl(c, this.l.contentWindow)) {
                    b = Il(b);
                    var d = b.r_chk;
                    if (null == d || "" === d) {
                        var e = Of(b.r_nw),
                            f = Of(b.r_nh),
                            g = Of(b.r_no);
                        null != g || 0 !== e && 0 !== f || (g = 0);
                        var h = b.r_str;
                        h = h ? h : null;
                        e = vA(this, d, e, f, g, h, Pf(b.r_ao), Pf(b.r_ifr),
                            Pf(b.r_cab), b);
                        d = {
                            msg_type: "resize-result"
                        };
                        d.r_str = h;
                        d.r_status = e;
                        c = c.source;
                        d.googMsgType = "sth";
                        c.postMessage(JSON.stringify(d), "*");
                        this.l.dataset.googleQueryId || this.l.setAttribute("data-google-query-id", b.qid)
                    }
                }
            }
        }
        B() {
            super.B();
            this.l = null
        }
    };
    const zA = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const AA = /^blogger$/,
        BA = /^wordpress(.|\s|$)/i,
        CA = /^joomla!/i,
        DA = /^drupal/i,
        EA = /\/wp-content\//,
        FA = /\/wp-content\/plugins\/advanced-ads/,
        GA = /\/wp-content\/themes\/genesis/,
        HA = /\/wp-content\/plugins\/genesis/;
    var IA = a => {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src");
                if (FA.test(e)) return 5;
                if (HA.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href"), GA.test(e) || HA.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content");
                if (AA.test(f)) return 1;
                if (BA.test(f)) return 2;
                if (CA.test(f)) return 3;
                if (DA.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"), EA.test(d))) return 2;
        return 0
    };
    let JA = navigator;
    var KA = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        LA = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return KA(a.toLowerCase())
        };
    const MA = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        NA = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        OA = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");

    function PA(a) {
        -1 == a.l && (a.l = bb(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class QA {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    var RA = () => {
        const a = new QA;
        t.SVGElement && t.document.createElementNS && a.set(0);
        const b = Vf();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        t.TextDecoder && t.TextEncoder && a.set(4);
        return PA(a)
    };
    var SA = new Map([
        [".google.com", a => L `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => L `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => L `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => L `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => L `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => L `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => L `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => L `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => L `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => L `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => L `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => L `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => L `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => L `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => L `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => L `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => L `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => L `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => L `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => L `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => L `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => L `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => L `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => L `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => L `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => L `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => L `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => L `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => L `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => L `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => L `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => L `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => L `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => L `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => L `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => L `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => L `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => L `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => L `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => L `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => L `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => L `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => L `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => L `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => L `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => L `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => L `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => L `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => L `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => L `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => L `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => L `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => L `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => L `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => L `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => L `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => L `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => L `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => L `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => L `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => L `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => L `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => L `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => L `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => L `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => L `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => L `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => L `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => L `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => L `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => L `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => L `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => L `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => L `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => L `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => L `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => L `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => L `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => L `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => L `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => L `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => L `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => L `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => L `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => L `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => L `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => L `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => L `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => L `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => L `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => L `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => L `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => L `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => L `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => L `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => L `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => L `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => L `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => L `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => L `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => L `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => L `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => L `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => L `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => L `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => L `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => L `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => L `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => L `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => L `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => L `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => L `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => L `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => L `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => L `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => L `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => L `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => L `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => L `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => L `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => L `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => L `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => L `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => L `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => L `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => L `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => L `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => L `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => L `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => L `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => L `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => L `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => L `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => L `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => L `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => L `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => L `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => L `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.ru", a => L `https://adservice.google.ru/adsid/integrator.${a}`],
        [".google.rw", a => L `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => L `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => L `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => L `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => L `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => L `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => L `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => L `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => L `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => L `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => L `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => L `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => L `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => L `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => L `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => L `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => L `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => L `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => L `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => L `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => L `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => L `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => L `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => L `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => L `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => L `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => L `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => L `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => L `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => L `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => L `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => L `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => L `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => L `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => L `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => L `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => L `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => L `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => L `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => L `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => L `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => L `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => L `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => L `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a, b]) => [a, {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function TA(a, b, c) {
        const d = Ef("LINK", a);
        try {
            d.rel = "preload", d.href = b instanceof Kc ? Nc(b).toString() : b instanceof Uc ? Vc(b) : Vc(dd(b))
        } catch (e) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (e) {}
    };
    let UA = () => t,
        VA = t;
    const XA = a => {
        const b = new Map([
            ["domain", t.location.hostname]
        ]);
        WA[3] >= va() && b.set("adsid", WA[1]);
        return Fg(SA.get(a).js, b)
    };
    let WA, YA;
    const ZA = () => {
        VA = UA();
        WA = VA.googleToken = VA.googleToken || {};
        const a = va();
        WA[1] && WA[3] > a && 0 < WA[2] || (WA[1] = "", WA[2] = -1, WA[3] = -1, WA[4] = "", WA[6] = "");
        YA = VA.googleIMState = VA.googleIMState || {};
        SA.has(YA[1]) || (YA[1] = ".google.com");
        Array.isArray(YA[5]) || (YA[5] = []);
        "boolean" !== typeof YA[6] && (YA[6] = !1);
        Array.isArray(YA[7]) || (YA[7] = []);
        "number" !== typeof YA[8] && (YA[8] = 0)
    };
    var $A = a => {
        ZA();
        SA.has(a) && (YA[1] = a)
    };
    const aB = {
        Yb: () => 0 < YA[8],
        ve: () => {
            YA[8]++
        },
        we: () => {
            0 < YA[8] && YA[8]--
        },
        xe: () => {
            YA[8] = 0
        },
        oi: () => !1,
        Fc: () => YA[5],
        wc: a => {
            try {
                a()
            } catch (b) {
                t.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        Wc: () => {
            if (!aB.Yb()) {
                var a = t.document,
                    b = e => {
                        e = XA(e);
                        a: {
                            try {
                                var f = Re();
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        TA(a, e.toString(), f);
                        f = Ef("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => t.processGoogleToken({}, 2);
                        de(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), aB.ve()
                        } catch (g) {}
                    },
                    c = YA[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    newToken: "FBT"
                };
                t.setTimeout(() => t.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function bB(a) {
        ZA();
        const b = VA.googleToken[5] || 0;
        a && (0 != b || WA[3] >= va() ? aB.wc(a) : (aB.Fc().push(a), aB.Wc()));
        WA[3] >= va() && WA[2] >= va() || aB.Wc()
    }
    var dB = a => {
        t.processGoogleToken = t.processGoogleToken || ((b, c) => cB(b, c));
        bB(a)
    };
    const cB = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        ZA();
        1 == b ? aB.xe() : aB.we();
        var h = VA.googleToken = VA.googleToken || {},
            l = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !aB.Yb() && (!(WA[3] >= va()) || "NT" == WA[1]);
        var k = !(WA[3] >= va()) && 0 != b;
        if (l || d || k) d = va(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && yg(t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, ZA();
        if (l || !aB.Yb()) {
            b = aB.Fc();
            for (c = 0; c < b.length; c++) aB.wc(b[c]);
            b.length = 0
        }
    };
    const eB = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        fB = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function gB(a) {
        var b, c, d, e, f, g;
        try {
            const h = null === (c = null === (b = a.performance) || void 0 === b ? void 0 : b.getEntriesByType("navigation")) || void 0 === c ? void 0 : c[0];
            if (null === h || void 0 === h ? 0 : h.type) return null !== (d = eB.get(h.type)) && void 0 !== d ? d : 0
        } catch (h) {}
        return null !== (g = fB.get(null === (f = null === (e = a.performance) || void 0 === e ? void 0 : e.navigation) || void 0 === f ? void 0 : f.type)) && void 0 !== g ? g : 0
    };
    var hB = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Z = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };
    const iB = () => {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    };
    R(tl).l(pl.j, pl.defaultValue);

    function jB(a = window) {
        return !a.PeriodicSyncManager
    }

    function kB(a = window) {
        return a.goog_tt_state
    }

    function lB(a) {
        return a.some(b => b.hasRedemptionRecord)
    }

    function mB(a, b, c) {
        return b || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function nB(a, b) {
        a = a.filter(c => c.hasRedemptionRecord).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: X(rl) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !X(rl) && b && 0 < Object.keys(b).length && (a.additionalSigningData = Jb(JSON.stringify(b)));
        return a
    }

    function oB(a, b, c) {
        let d;
        const e = null == (d = window.goog_tt_state) ? void 0 : d.find(f => f.issuerOrigin === a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function pB() {
        const a = `${hB.issuerOrigin}${hB.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: hB.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        oB(hB.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            oB(hB.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? oB(hB.issuerOrigin, 6, !0) : oB(hB.issuerOrigin, 5)
        })
    }

    function qB() {
        const a = `${hB.issuerOrigin}${hB.issuancePath}`;
        oB(hB.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            oB(hB.issuerOrigin, 10);
            return pB()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return oB(hB.issuerOrigin, 10), pB();
            oB(hB.issuerOrigin, 9)
        })
    }

    function rB() {
        oB(hB.issuerOrigin, 13);
        return document.hasTrustToken(hB.issuerOrigin).then(a => a ? pB() : qB())
    }

    function sB() {
        oB(Z.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(Z.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${Z.issuerOrigin}${Z.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            oB(Z.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                oB(Z.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) oB(Z.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    oB(Z.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(Z.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${Z.issuerOrigin}${Z.getStatePath}`;
                oB(Z.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Z.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    oB(Z.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = eg(window);
            return a.then(e => {
                const f = `${Z.issuerOrigin}${Z.issuancePath}`;
                return e && e.srqt && e.cs ? (oB(Z.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    oB(Z.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return oB(Z.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    oB(Z.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                oB(Z.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        oB(Z.issuerOrigin, e.state);
                        const f = ul(ol);
                        Math.random() <= f && Ag({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function tB(a) {
        if (document.hasTrustToken && !X(ml) && a.j) {
            if (window.goog_tt_promise) return window.goog_tt_promise;
            a = window.goog_tt_state;
            if (Array.isArray(a)) {
                var b = [];
                a.find(c => c.issuerOrigin === hB.issuerOrigin) && b.push(rB());
                a.find(c => c.issuerOrigin === Z.issuerOrigin) && b.push(sB());
                if (window.Promise && window.Promise.all) return a = window.Promise.all(b), "object" != typeof window.goog_tt_promise && Object.defineProperty(window, "goog_tt_promise", {
                    configurable: !1,
                    value: a,
                    writable: !1
                }), a
            }
        }
    }
    var uB = class extends Ds {
        constructor(a = !1, b = !1, c = !1) {
            super();
            this.j = a;
            a = [];
            b && iB() && a.push(hB);
            c && a.push(Z);
            if (document.hasTrustToken && !X(ml) && !Array.isArray(window.goog_tt_state)) {
                const d = a.map(e => ({
                    issuerOrigin: e.issuerOrigin,
                    state: this.j ? 1 : 12
                }));
                Object.defineProperty(window, "goog_tt_state", {
                    configurable: !1,
                    get() {
                        return d.slice()
                    }
                })
            }
        }
    };

    function vB(a) {
        var b;
        if (a = null === (b = a.navigator) || void 0 === b ? void 0 : b.userActivation) {
            var c = 0;
            if (null === a || void 0 === a ? 0 : a.hasBeenActive) c |= 1;
            if (null === a || void 0 === a ? 0 : a.isActive) c |= 2;
            return c
        }
    };
    const wB = /[+, ]/;
    var zB = (a, b) => {
            const c = a.F;
            var d = N().document,
                e = {},
                f = N(),
                g;
            var h = lg(N());
            var l = yx(h);
            var k = g = wx(N(), d, c.google_ad_width, c.google_ad_height);
            l = l.ec;
            var m = N();
            m = m.top == m ? 0 : xf(m.top) ? 1 : 2;
            let p = 4;
            k || 1 != m ? k || 2 != m ? k && 1 == m ? p = 7 : k && 2 == m && (p = 8) : p = 6 : p = 5;
            l && (p |= 16);
            k = "" + p;
            l = zx();
            m = !!c.google_page_url;
            e.google_iframing = k;
            0 != l && (e.google_iframing_environment = l);
            if (!m && "ad.yieldmanager.com" == d.domain) {
                for (k = d.URL.substring(d.URL.lastIndexOf("http")); - 1 < k.indexOf("%");) try {
                    k = decodeURIComponent(k)
                } catch (r) {
                    break
                }
                c.google_page_url = k;
                m = !!k
            }
            m ? (e.google_page_url = c.google_page_url, e.google_page_location = (g ? d.referrer : d.URL) || "EMPTY") : (g && xf(f.top) && d.referrer && f.top.document.referrer === d.referrer ? e.google_page_url = f.top.document.URL : e.google_page_url = g ? d.referrer : d.URL, e.google_page_location = null);
            if (d.URL === e.google_page_url) try {
                var q = Math.round(Date.parse(d.lastModified) / 1E3) || null
            } catch (r) {
                q = null
            } else q = null;
            e.google_last_modified_time = q;
            d = h == h.top ? h.document.referrer : (d = tg()) && d.referrer || "";
            e.google_referrer_url = d;
            xx(e, c);
            e =
                c.google_page_location || c.google_page_url;
            "EMPTY" == e && (e = c.google_page_url);
            e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in zA), 2 <= e.length && (d = d || e[e.length - 2] in zA), e = d) : e = !1;
            e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
            b = xB(a, b);
            d = a.F;
            f = d.google_ad_channel;
            q = "/pagead/ads?";
            "ca-pub-6219811747049371" ===
            d.google_ad_client && yB.test(f) && (q = "/pagead/lopri?");
            a = Xg(b, `https://${e}${q}` + (bc(a.X, 9) && c.google_debug_params ? c.google_debug_params : ""));
            return c.google_ad_url = a
        },
        AB = a => encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + Wg({
            adk: a.google_ad_unit_key,
            client: a.google_ad_client,
            fa: a.google_reactive_ad_format
        }),
        BB = a => {
            try {
                if (a.parentNode) return a.parentNode
            } catch (c) {
                return null
            }
            if (9 === a.nodeType) a: {
                try {
                    const c = jf(a);
                    if (c) {
                        const d = c.frameElement;
                        if (d && xf(c.parent)) {
                            var b = d;
                            break a
                        }
                    }
                } catch (c) {}
                b =
                null
            }
            else b = null;
            return b
        },
        CB = (a, b) => {
            b.eid = Sx(a.pubWin);
            const c = a.F.google_loeid;
            "string" === typeof c && (a.j |= 4096, b.loeid = c)
        },
        DB = (a, b) => {
            a = (a = Af(a.pubWin)) && a.document ? Rl(a.document, a) : new Ve(-12245933, -12245933);
            b.scr_x = Math.round(a.x);
            b.scr_y = Math.round(a.y)
        };
    const EB = a => {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    };
    var FB = a => {
            const b = Ah();
            b && (a.debug_experiment_id = b);
            a.creatives = EB(/\b(?:creatives)=([\d,]+)/);
            a.adgroups = EB(/\b(?:adgroups)=([\d,]+)/);
            a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
        },
        GB = (a, b, c) => {
            const d = a.F;
            var e = a.pubWin,
                f = a.K,
                g = lg(window);
            b.ref = d.google_referrer_url;
            b.loc = d.google_page_location;
            var h;
            (h = tg(e)) && ma(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null :
                h) : h = null;
            h && (b.apn = h.substr(0, 10));
            g = yx(g);
            b.url || b.loc || !g.url || (b.url = g.url, g.ec || (b.usrc = 1));
            h = d.google_trust_token_additional_signing_data || {};
            h.url = b.url;
            d.google_trust_token_additional_signing_data = h;
            g.url != (b.loc || b.url) && (b.top = g.url);
            0 < ul(ok) && a.Ra && (b.etu = a.Ra);
            0 <= a.B && (b.eae = a.B);
            (c = Ay(d, f, f ? iw(c, f) : null)) && (b.fc = c);
            if (!ih(d)) {
                c = a.pubWin.document;
                g = "";
                if (c.documentMode && (h = tf(new ef(c), "IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                    c.body.appendChild(h);
                    try {
                        const Q = h.contentWindow.document;
                        Q.open();
                        Q.write(rd(Ed));
                        Q.close();
                        g += Q.documentMode
                    } catch (Q) {}
                    c.body.removeChild(h)
                }
                b.docm = g
            }
            let l, k, m, p, q, r, u, x, H;
            try {
                var A = e.screenX;
                l = e.screenY
            } catch (Q) {}
            try {
                k = e.outerWidth, m = e.outerHeight
            } catch (Q) {}
            try {
                p = e.innerWidth, q = e.innerHeight
            } catch (Q) {}
            try {
                r = e.screenLeft, u = e.screenTop
            } catch (Q) {}
            try {
                p = e.innerWidth, q = e.innerHeight
            } catch (Q) {}
            try {
                x = e.screen.availWidth, H = e.screen.availTop
            } catch (Q) {}
            b.brdim = [r, u, A, l, x, H, k, m, p, q].join();
            A = 0;
            void 0 === t.postMessage && (A |= 1);
            0 < A && (b.osd = A);
            b.vis = Kz(e.document);
            A = a.Y;
            e = uy(d) ? sA : gA(new qA(e, A, null, {
                width: 0,
                height: 0
            }, d.google_ad_width, d.google_ad_height, !1));
            b.rsz = e.toString();
            b.abl = Uz(e);
            if (!uy(d) && (e = jh(d))) {
                A = 0;
                a: {
                    try {
                        {
                            var C = d.google_async_iframe_id;
                            const Q = N().document;
                            if (C) var F = Q.getElementById(C);
                            else {
                                var I = Q.getElementsByTagName("script"),
                                    E = I[I.length - 1];
                                F = E && E.parentNode || null
                            }
                        }
                        if (C = F) {
                            F = [];
                            I = 0;
                            for (var S = Date.now(); 100 >= ++I && 50 > Date.now() - S && (C = BB(C));) 1 === C.nodeType && F.push(C);
                            var qa = F;
                            b: {
                                for (S = 0; S < qa.length; S++) {
                                    c: {
                                        var O =
                                            qa[S];
                                        try {
                                            if (O.parentNode && 0 < O.offsetWidth && 0 < O.offsetHeight && O.style && "none" !== O.style.display && "hidden" !== O.style.visibility && (!O.style.opacity || 0 !== Number(O.style.opacity))) {
                                                const Q = O.getBoundingClientRect();
                                                var fa = 0 < Q.right && 0 < Q.bottom;
                                                break c
                                            }
                                        } catch (Q) {}
                                        fa = !1
                                    }
                                    if (!fa) {
                                        var La = !1;
                                        break b
                                    }
                                }
                                La = !0
                            }
                            if (La) {
                                b: {
                                    const Q = Date.now();La = /^html|body$/i;fa = /^fixed/i;
                                    for (O = 0; O < qa.length && 50 > Date.now() - Q; O++) {
                                        const Wc = qa[O];
                                        if (!La.test(Wc.tagName) && fa.test(Wc.style.position || Mg(Wc, "position"))) {
                                            var gb = Wc;
                                            break b
                                        }
                                    }
                                    gb =
                                    null
                                }
                                break a
                            }
                        }
                    } catch (Q) {}
                    gb = null
                }
                gb && gb.offsetWidth * gb.offsetHeight <= 4 * e.width * e.height && (A = 1);
                b.pfx = A
            }
            a: {
                if (.05 > Math.random() && f) try {
                    const Q = f.document.getElementsByTagName("head")[0];
                    var Xb = Q ? IA(Q) : 0;
                    break a
                } catch (Q) {}
                Xb = 0
            }
            f = Xb;
            0 !== f && (b.cms = f);
            d.google_lrv !== J(a.X, 2) && (b.alvm = d.google_lrv || "none")
        },
        HB = (a, b) => {
            let c = 0;
            a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : yf(() => {
                c++;
                return !1
            }, !0, !0, a);
            c && (b.nhd = c)
        },
        IB = (a, b) => {
            const c = dw(b, 8, {});
            b = dw(b, 9, {});
            const d = a.google_ad_section,
                e = a.google_ad_format;
            a = a.google_ad_slot;
            e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
        },
        JB = (a, b, c) => {
            const d = a.F,
                e = a.F;
            b.dt = Yl;
            e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
            var f;
            const g = N();
            a: {
                const P = N();
                try {
                    const M = P.performance;
                    if (M && M.timing && M.now) {
                        var h = M.timing.navigationStart + Math.round(M.now()) - M.timing.domLoading;
                        break a
                    }
                } catch (M) {}
                h = null
            }
            const l = h;
            (f = l ? $y(l, g.Date.now() - Yl, 1E6) : null) && (b.bdt = f);
            b.idt = $y(a.H, Yl);
            const k = a.F;
            b.shv = J(a.X, 2);
            a.Ga && (b.mjsv = a.Ga);
            "sa" ==
            k.google_loader_used ? b.ptt = 5 : "aa" == k.google_loader_used && (b.ptt = 9);
            /^\w{1,3}$/.test(k.google_loader_used) && (b.saldr = k.google_loader_used);
            const m = tg(a.pubWin);
            if (m) {
                b.is_amp = 1;
                const P = m || tg();
                b.amp_v = P && P.mode ? +P.mode.version || null : null; {
                    const T = m || tg();
                    if (T && T.container) {
                        const ea = T.container.split(","),
                            U = [];
                        for (let Za = 0; Za < ea.length; Za++) U.push(sg[ea[Za]] || "x");
                        var p = U.join()
                    } else p = null
                }
                const M = p;
                M && (b.act = M)
            }
            N() == window.top && (b.abxe = 1);
            if ("_gfp_a_" in a.pubWin) {
                const P = a.pubWin._gfp_a_;
                if ("boolean" !==
                    typeof P) throw Error(`Illegal value of ${"_gfp_a_"}: ${P}`);
                if (P) {
                    const M = new Wx(a.pubWin),
                        T = Tx(M, "__gads", c);
                    T && (b.cookie = T);
                    if (X(Sk)) {
                        const ea = Tx(M, "__gpi", c);
                        ea && !ea.includes("&") && (b.gpic = ea)
                    }
                    X(Tk) && "1" === Tx(M, "__gpi_opt_out", c) && (b.gpico = "1")
                }
            }
            const q = Zv(),
                r = dw(q, 8, {}),
                u = d.google_ad_section;
            r[u] && (b.prev_fmts = r[u]);
            const x = dw(q, 9, {});
            x[u] && (b.prev_slotnames = x[u].toLowerCase());
            IB(d, q);
            const H = dw(q, 15, 0);
            0 < H && (b.nras = String(H)); {
                const P = N(),
                    M = tg(P);
                if (M) {
                    {
                        const T = M || tg();
                        if (T) {
                            let ea = T.pageViewId;
                            const U = T.clientId;
                            "string" === typeof U && (ea += U.replace(/\D/g, "").substr(0, 6));
                            var A = ea
                        } else A = null
                    }
                    var C = +A
                } else {
                    var F = lg(P),
                        I = F.google_global_correlator;
                    I || (F.google_global_correlator = I = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
                    C = I
                }
            }
            b.correlator = dw(q, 7, C);
            X(Uk) && (b.rume = 1);
            if (d.google_ad_channel) {
                const P = dw(q, 10, {});
                let M = "";
                const T = d.google_ad_channel.split(wB);
                for (let ea = 0; ea < T.length; ea++) {
                    const U = T[ea];
                    P[U] ? M += U + "+" : P[U] = !0
                }
                b.pv_ch = M
            }
            if (d.google_ad_host_channel) {
                var E = dw(q, 11, []);
                const P = d.google_ad_host_channel.split("|");
                let M = -1;
                const T = [];
                for (let U = 0; U < P.length; U++) {
                    const Za = P[U].split(wB);
                    E[U] || (E[U] = {});
                    let sb = "";
                    for (let uc = 0; uc < Za.length; uc++) {
                        const Cf = Za[uc];
                        "" !== Cf && (E[U][Cf] ? sb += "+" + Cf : E[U][Cf] = !0)
                    }
                    sb = sb.slice(1);
                    T[U] = sb;
                    "" !== sb && (M = U)
                }
                let ea = "";
                if (-1 < M) {
                    for (let U = 0; U < M; U++) ea += T[U] + "|";
                    ea += T[M]
                }
                b.pv_h_ch = ea
            }
            b.frm = d.google_iframing;
            b.ife = d.google_iframing_environment;
            var S = d.google_ad_client;
            try {
                const P = lg(window);
                let M = P.google_prev_clients;
                M || (M = P.google_prev_clients = {});
                if (S in M) var qa = 1;
                else M[S] = !0,
                    qa = 2
            } catch (P) {
                qa = 0
            }
            b.pv = qa;
            const O = a.pubWin.document,
                fa = a.F;
            var La = a.pubWin;
            var gb = O.domain,
                Xb = (B(c, 5) && jw(La) ? La.document.cookie : null) || "",
                Q = a.pubWin.screen,
                Wc = O.referrer,
                WB = Zg();
            if (tg()) var Hp = N().gaGlobal || {};
            else {
                var xi = Math.round((new Date).getTime() / 1E3),
                    yi = fa.google_analytics_domain_name,
                    Df = "undefined" == typeof yi ? LA("auto", gb) : LA(yi, gb),
                    XB = -1 < Xb.indexOf("__utma=" + Df + "."),
                    YB = -1 < Xb.indexOf("__utmb=" + Df),
                    zi;
                if (!(zi = (wg() || N()).gaGlobal)) {
                    var ZB = {};
                    zi = (wg() || N()).gaGlobal = ZB
                }
                var ka = zi,
                    Ip = !1;
                if (XB) {
                    var Ai =
                        Xb.split("__utma=" + Df + ".")[1].split(";")[0].split(".");
                    YB ? ka.sid = Ai[3] : ka.sid || (ka.sid = xi + "");
                    ka.vid = Ai[0] + "." + Ai[1];
                    ka.from_cookie = !0
                } else {
                    ka.sid || (ka.sid = xi + "");
                    if (!ka.vid) {
                        Ip = !0;
                        var $B = Math.round(2147483647 * Math.random()),
                            Jp = WB;
                        let P, M;
                        var aC = JA.appName,
                            bC = JA.version,
                            cC = JA.language ? JA.language : JA.browserLanguage,
                            dC = JA.platform,
                            eC = JA.userAgent;
                        try {
                            var Kp = JA.javaEnabled()
                        } catch (ea) {
                            Kp = !1
                        }
                        let T = [aC, bC, cC, dC, eC, Kp ? 1 : 0].join("");
                        Q ? T += Q.width + "x" + Q.height + Q.colorDepth : t.java && t.java.awt && (M = t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(),
                            T += M.screen.width + "x" + M.screen.height);
                        T = T + Xb + (Wc || "");
                        for (P = T.length; 0 < Jp;) T += Jp-- ^ P++;
                        ka.vid = ($B ^ KA(T) & 2147483647) + "." + xi
                    }
                    X(bl) && ka.from_cookie || (ka.from_cookie = !1)
                }
                if (!ka.cid) {
                    b: {
                        var Xc = yi;
                        let M = 999;Xc && (Xc = 0 == Xc.indexOf(".") ? Xc.substr(1) : Xc, M = Xc.split(".").length);
                        let T, ea = 999;
                        const U = Xb.split(";");
                        for (let Za = 0; Za < U.length; Za++) {
                            const sb = MA.exec(U[Za]) || NA.exec(U[Za]) || OA.exec(U[Za]);
                            if (!sb) continue;
                            const uc = sb[1] || 0;
                            if (uc == M) {
                                var Lp = sb[2];
                                break b
                            }
                            uc < ea && (ea = uc, T = sb[2])
                        }
                        Lp = T
                    }
                    const P = Lp;Ip && P &&
                    -1 != P.search(/^\d+\.\d+$/) ? (ka.vid = P, ka.from_cookie = !0) : P != ka.vid && (ka.cid = P)
                }
                ka.dh = Df;
                ka.hid || (ka.hid = Math.round(2147483647 * Math.random()));
                Hp = ka
            }
            const Rd = Hp;
            b.ga_vid = Rd.vid;
            b.ga_sid = Rd.sid;
            b.ga_hid = Rd.hid;
            b.ga_fc = Rd.from_cookie;
            b.ga_cid = Rd.cid;
            b.ga_wpids = fa.google_analytics_uacct;
            HB(a.pubWin, b);
            const Bi = d.google_ad_layout;
            Bi && 0 <= Sy[Bi] && (b.rplot = Sy[Bi])
        };
    const KB = (a, b) => {
        a = a.A;
        var c;
        (c = null == a ? 0 : B(a, 6)) || (c = Zv(), c = dw(c, 26, void 0));
        c && (b.npa = 1);
        a && (Yb(a, 3) && (b.gdpr = B(a, 3) ? "1" : "0"), (c = y(a, 1)) && (b.us_privacy = c), (c = y(a, 2)) && (b.gdpr_consent = c), (c = y(a, 4)) && (b.addtl_consent = c), (a = y(a, 7)) && (b.tcfe = a))
    };
    var LB = (a, b) => {
            const c = a.F;
            KB(a, b);
            Hf(yv, (d, e) => {
                b[d] = c[e]
            });
            uy(c) && (a = Iy(c), b.fa = a);
            b.pi || null == c.google_ad_slot || (a = Ko(c), null != a.j && (a = $m(a.j.value), b.pi = a))
        },
        MB = (a, b) => {
            var c = vg() || Pl(a.pubWin.top);
            c && (b.biw = c.width, b.bih = c.height);
            c = a.pubWin;
            c !== c.top && (a = Pl(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
        },
        NB = (a, b) => {
            var c = a.pubWin;
            null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = Pl(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Jf(a.join(""))) : a = 0;
            0 !== a && (b.ifk = a)
        },
        OB = (a, b) => {
            (a = fw()[a.F.google_ad_client]) && (b.psts = a.join())
        },
        PB = (a, b, c) => {
            a: {
                c = iw(c, a.pubWin);
                let d = -1;
                try {
                    c && (d = parseInt(c.getItem("goog_pem_mod"), 10))
                } catch (e) {
                    c = null;
                    break a
                }
                c = 0 <= d && 1E3 > d ? d : null
            }
            b.pem = c;X(Jk) && (a = a.pubWin.tmod) && (b.tmod = a)
        },
        QB = (a, b) => {
            (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Jb(a))
        },
        RB = (a, b) => {
            (a = kB(a.pubWin)) && 0 < a.length && (b.tt_state = Jb(JSON.stringify(a)))
        },
        SB = (a, b) => {
            if (a = a.F.google_floc) b.floc_id = a.id, b.floc_ver = a.version
        },
        TB = (a, b) => {
            try {
                const d = a.pubWin && a.pubWin.external &&
                    a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
                if (d) {
                    var c = parseInt(JSON.parse(d("os-mode"))["os-mode"], 10);
                    0 <= c && (b.wsm = c + 1)
                }
            } catch (d) {}
        };

    function UB(a, b) {
        0 <= a.F.google_ad_public_floor && (b.pubf = a.F.google_ad_public_floor);
        0 <= a.F.google_ad_private_floor && (b.pvtf = a.F.google_ad_private_floor)
    }

    function VB(a, b) {
        if (X(Lk))
            if ((new Set(["e", "pg", "t", "ma"])).has(a.F.google_max_ad_content_rating)) b.macr = a.F.google_max_ad_content_rating;
            else throw Error(`Illegal value of ${"google_max_ad_content_rating"}: ${a.F.google_max_ad_content_rating}`);
    }
    var xB = (a, b) => {
        const c = {};
        LB(a, c);
        ZA();
        c.adsid = WA[1];
        ZA();
        c.pucrd = WA[6];
        QB(a, c);
        RB(a, c);
        SB(a, c);
        JB(a, c, b);
        bh(c);
        c.u_sd = Ql(a.pubWin);
        var d;
        c.dmc = null == (d = a.pubWin.navigator) ? void 0 : d.deviceMemory;
        ri(889, () => {
            if (null == a.K) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = Ax(a.K, a.Y);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                Sl(a.Y) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        MB(a, c);
        NB(a, c);
        DB(a, c);
        CB(a, c);
        a.D && (c.oid = a.D);
        OB(a, c);
        c.pvsid = eg(a.pubWin,
            qi);
        PB(a, c, b);
        TB(a, c);
        X(qk) && (c.uas = vB(a.pubWin));
        X(pk) && (d = gB(a.pubWin), 0 !== d && (c.nvt = d));
        a.C && (c.scar = a.C);
        GB(a, c, b);
        c.fu = a.j;
        c.bc = RA();
        ZA();
        c.jar = WA[4];
        bc(a.X, 9) && FB(c);
        Mi() && (c.atl = !0);
        UB(a, c);
        a.F.google_max_ad_content_rating && VB(a, c);
        return c
    };
    const yB = /YtLoPri/;

    function fC(a) {
        qi.Nb = b => {
            b.shv = String(a);
            b.mjsv = "m202201060101";
            b.eid = Sx(t)
        }
    }

    function gC(a) {
        fC(J(a, 2));
        a = bc(a, 6);
        Sh(Kx, Uh);
        Kx = a
    };

    function hC({
        Md: a,
        Ee: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var iC = "undefined" === typeof sttc ? void 0 : sttc;

    function jC(a) {
        var b = qi;
        try {
            return Sh(a, Th), new sx(JSON.parse(a))
        } catch (c) {
            b.ua(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new sx
    };
    R(tl).l(Xk.j, Xk.defaultValue);

    function kC(a, b, c, d) {
        var e, f, g, h, l, k, m;
        const p = new rq;
        let q = "";
        const r = u => {
            try {
                const x = "object" === typeof u.data ? u.data : JSON.parse(u.data);
                q === x.paw_id && (qe(a, "message", r), x.error ? p.j(Error(x.error)) : p.resolve(d(x)))
            } catch (x) {}
        };
        return "function" === typeof(null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (pe(a, "message", r), q = c(a.gmaSdk), p.promise) : "function" === typeof(null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ?
            void 0 : h.postMessage) || "function" === typeof(null === (m = null === (k = null === (l = a.webkit) || void 0 === l ? void 0 : l.messageHandlers) || void 0 === k ? void 0 : k.getGmaSig) || void 0 === m ? void 0 : m.postMessage) ? (q = String(Math.floor(2147483647 * Gf())), pe(a, "message", r), b(a.webkit.messageHandlers, q), p.promise) : null
    }

    function lC(a) {
        return kC(a, (b, c) => {
            var d;
            return void(null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c)
        }, b => b.getQueryInfo(), b => b.signal)
    };

    function mC(a) {
        if (a.j) return a.j;
        a.j = Xf(a.l, "__uspapiLocator");
        return a.j
    }

    function nC(a) {
        var b;
        return "function" === typeof(null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) || null != mC(a)
    }

    function oC(a, b) {
        var c;
        if ("function" === typeof(null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi)) a = a.l.__uspapi, a("getUSPData", 1, b);
        else if (mC(a)) {
            pC(a);
            const d = ++a.D;
            a.C[d] = b;
            a.j && a.j.postMessage({
                __uspapiCall: {
                    command: "getUSPData",
                    version: 1,
                    callId: d
                }
            }, "*")
        }
    }

    function qC(a, b) {
        let c = {};
        if (nC(a)) {
            var d = je(() => b(c));
            oC(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else b(c)
    }

    function pC(a) {
        a.A || (a.A = b => {
            var c;
            try {
                let e = {};
                "string" === typeof b.data ? e = JSON.parse(b.data) : e = b.data;
                var d = e.__uspapiReturn;
                null === (c = a.C) || void 0 === c ? void 0 : c[d.callId](d.returnValue, d.success)
            } catch (e) {}
        }, pe(a.l, "message", a.A))
    }
    var rC = class extends Ds {
        constructor(a) {
            super();
            this.l = a;
            this.j = null;
            this.C = {};
            this.D = 0;
            this.A = null
        }
        B() {
            this.C = {};
            this.A && (qe(this.l, "message", this.A), delete this.A);
            delete this.C;
            delete this.l;
            delete this.j;
            super.B()
        }
    };
    var sC = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var uC = class extends w {
            constructor(a) {
                super(a, -1, tC)
            }
        },
        tC = [1, 2];
    var vC = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var wC = class extends w {
        constructor(a) {
            super(a)
        }
    };

    function xC(a) {
        a.D || (a.j || (a.j = a.l.googlefc ? a.l : Xf(a.l, "googlefcPresent")), a.D = !0);
        return !!a.j
    }

    function yC(a) {
        a.A || (a.A = b => {
            try {
                const c = lc(wC, b.data.__fciReturn);
                (0, a.C[y(c, 1)])(c)
            } catch (c) {}
        }, pe(a.l, "message", a.A))
    }

    function zC(a, b, c) {
        if (xC(a))
            if (a.j === a.l) a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push(b, d => {
                c(lc(wC, d))
            });
            else {
                yC(a);
                const d = a.G++;
                a.C[d] = c;
                a.j.postMessage({
                    __fciCall: {
                        command: b,
                        callId: d
                    }
                }, "*")
            }
    }

    function AC(a, b) {
        return new Promise(c => {
            zC(a, b, c)
        })
    }
    var BC = class extends Ds {
            constructor(a) {
                super();
                this.l = a;
                this.A = this.j = null;
                this.C = {};
                this.G = 0;
                this.D = !1
            }
        },
        CC = (a, b, c, d) => {
            if (!b) return Promise.resolve(null);
            const e = D(b, sC, 3);
            b = D(b, vC, 2);
            return e && b && 1 === y(b, 1) && 2 === y(e, 1) ? AC(a, "getM25Consent").then(f => {
                var g = D(f, uC, 4);
                if (g) {
                    if (f = d, c) {
                        const h = Zb(g, 1);
                        h && h.includes(c) && (f = !1);
                        (g = Zb(g, 2)) && g.includes(c) && (f = !0)
                    }
                } else f = null;
                return f
            }) : Promise.resolve(null)
        };
    const DC = (a, b) => {
        try {
            var c, d;
            const l = void 0 === bc(b, 6) ? !0 : bc(b, 6);
            a: switch (ac(b, 4, 0)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new Ce(Ae(ac(b, 2, 0)), J(b, 3), e),
                g = null !== (d = null === (c = D(b, ze, 5)) || void 0 === c ? void 0 : J(c, 1)) && void 0 !== d ? d : "";
            f.Wa = g;
            f.j = l;
            f.win = a;
            var h = f.build();
            ue(h)
        } catch (l) {}
    };

    function EC(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? DC(a, b) : pe(a, "load", () => void DC(a, b)))
    };

    function FC(a) {
        var b, c;
        try {
            return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    }

    function GC(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function HC(a) {
        if (a === a.top || xf(a.top)) return Promise.resolve({
            status: 4
        });
        const b = FC(a);
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && GC(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new rq;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Ra: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function IC(a, b) {
        const c = a.document.getElementById(b.google_async_iframe_id + "_anchor");
        a = a.document.getElementById(b.google_async_iframe_id + "_expand");
        if (null == c || null == a) throw Error("no_ins");
        return {
            Y: c,
            aa: a
        }
    }
    var KC = async ({
            X: a,
            $: b,
            Ga: c,
            slot: d
        }) => {
            const e = d.vars,
                {
                    Y: f,
                    aa: g
                } = IC(d.pubWin, d.vars),
                h = Af(d.pubWin),
                l = new tx({
                    K: h,
                    pubWin: d.pubWin,
                    F: e,
                    X: a,
                    $: b,
                    Ga: c,
                    Y: f,
                    aa: g
                });
            l.H = Date.now();
            Oi(1, [l.F]);
            try {
                await JC(l)
            } catch (k) {
                if (!ti(159, k)) throw k;
            }
            ri(639, () => {
                {
                    var k = l.F;
                    const p = l.K;
                    if (p && 1 === k.google_responsive_auto_format && !0 === k.google_full_width_responsive_allowed) {
                        var m;
                        (m = (m = p.document.getElementById(k.google_async_iframe_id)) ? rf(m, "INS", "adsbygoogle") : null) ? (k = new Zy(p, m, k), k.l = t.setInterval(ta(k.G, k), 500),
                            k.G(), k = !0) : k = !1
                    } else k = !1
                }
                return k
            });
            ri(914, () => {
                h && ox(h, d.vars, a, d.vars.google_ad_client)
            });
            return l
        },
        JC = a => {
            if (/_sdo/.test(a.F.google_ad_format)) return Promise.resolve();
            var b = Zv(),
                c = dw(b, 22, !1);
            c || (b.S[bw(22)] = !0);
            c || (c = a.F, b = a.X, R(pi).j(13), R(pi).j(11), c = wv(c), (b = J(b, 10)) && c.push(b));
            b = Zv();
            (c = dw(b, 23, !1)) || (b.S[bw(23)] = !0);
            if (!c) {
                b = D(a.X, qw, 5) || new qw;
                b = new rw(a.pubWin, a.F.google_ad_client, b, bc(a.X, 6));
                c = X(Pk);
                b.l = c;
                const e = D(b.C, zj, 1);
                if (b.l) {
                    c = b.j;
                    if (b.B && !ws(e)) {
                        var d = new Xv;
                        d = z(d, 1, 1)
                    } else d =
                        null;
                    if (d) {
                        d = kc(d);
                        try {
                            c.localStorage.setItem("google_auto_fc_cmp_setting", d)
                        } catch (f) {}
                    }
                }
                e && xs(new ys(b.j, new Rs(b.j, b.A), e, new kr(b.j)))
            }
            b = !tg() && !Pa();
            return !b || b && !LC(a) ? MC(a) : Promise.resolve()
        };
    const NC = (a, b, c = !1) => {
        b = Ax(a.K, b);
        const d = vg() || Pl(a.pubWin.top);
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = Rl(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    };

    function LC(a) {
        return OC(a) || PC(a)
    }

    function OC(a) {
        const b = a.F;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                V("abg:cmppar", {
                    client: a.F.google_ad_client,
                    url: a.F.google_page_url
                })
            }, 1E4),
            d = si(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                LC(a) || MC(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function PC(a) {
        const b = a.pubWin.document,
            c = QC();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.Y,
            e = Lz(b);
        if (!e) return !1;
        if (!Mz(b)) return RC(a, c.visible, d);
        const f = 3 === Kz(b);
        if (NC(a, d) <= c.hidden && !f) return !1;
        let g = si(332, () => {
            !Mz(b) && g && (qe(b, e, g), RC(a, c.visible, d) || MC(a), g = null)
        });
        return pe(b, e, g)
    }

    function QC() {
        const a = {
            hidden: 0,
            visible: 3
        };
        t.IntersectionObserver || (a.visible = -1);
        uf() && (a.visible *= 2);
        return a
    }

    function RC(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.F;
        if (!Dl(d.google_reactive_ad_format) && (uy(d) || d.google_reactive_ads_config) || !Sl(c) || NC(a, c) <= b) return !1;
        var e = Zv();
        const f = dw(e, 8, {});
        e = dw(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        a.G = new t.IntersectionObserver((h, l) => {
            Ya(h, k => {
                0 >= k.intersectionRatio || (l.unobserve(k.target), ri(294, () => {
                    MC(a)
                }))
            })
        }, {
            rootMargin: 100 * b + "%"
        });
        a.G.observe(c);
        return !0
    }
    async function MC(a) {
        ri(326, () => {
            if (1 === ah(a.F)) {
                var c = X(jl),
                    d = c || X(il),
                    e = a.pubWin;
                if (d && e === a.K) {
                    var f = new Ii;
                    d = new Ji;
                    f.setCorrelator(eg(a.pubWin));
                    var g = Sx(a.pubWin);
                    dc(f, 5, g, "");
                    pc(f, 2);
                    gc(d, 1, f);
                    g = new Hi;
                    g = oc(g, 10, !0);
                    f = X(Yk);
                    g = oc(g, 8, f);
                    f = X(Zk);
                    g = oc(g, 9, f);
                    f = X(el);
                    g = oc(g, 7, f);
                    f = X(dl);
                    g = oc(g, 13, f);
                    f = X(fl);
                    g = oc(g, 14, f);
                    gc(d, 2, g);
                    e.google_rum_config = d.toJSON();
                    Bf(e.document, Wd(bc(a.X, 9) && c ? a.$.te : a.$.ue))
                } else Ih()
            }
        });
        try {
            await SC(a)
        } catch (c) {
            ti(827, c)
        }
        a.F.google_ad_channel = TC(a, a.F.google_ad_channel);
        a.F.google_tag_partner = UC(a, a.F.google_tag_partner);
        VC(a);
        const b = a.F.google_start_time;
        "number" === typeof b && (Yl = b, a.F.google_start_time = null);
        vx(a);
        WC(a);
        uy(a.F) && (Fx() && (a.F.google_adtest = a.F.google_adtest || "on"), a.F.google_pgb_reactive = a.F.google_pgb_reactive || 3);
        XC(a.K);
        return YC(a)
    }

    function WC(a) {
        a.K && (yy(a.K, a.$.Od), wy(a.K.location) && Hy(a.K, {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.F.google_ad_client
        }))
    }
    var TC = (a, b) => (b ? [b] : []).concat(vv(a.F).ad_channels || []).join("+"),
        UC = (a, b) => (b ? [b] : []).concat(vv(a.F).tag_partners || []).join("+");

    function ZC(a, b, c, d) {
        c.src = az(a);
        const e = d.pubWin.document;
        a = N() == window.top;
        c = $C(c);
        a && d.l.push(xg(d.pubWin, c));
        aD(d.Y, c);
        X(ik) && t.setTimeout(si(644, () => {
            const f = e.getElementById(b);
            gg(f, () => {
                t.setTimeout(() => {
                    for (const g of d.l) g();
                    d.l.length = 0
                }, 200)
            })
        }), 0);
        return Promise.resolve(c)
    }

    function $C(a) {
        const b = Ef("IFRAME");
        Hf(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function bD(a, b, c) {
        return 9 == a.F.google_reactive_ad_format && rf(a.aa, null, "fsi_container", void 0) ? (a.Y.appendChild(b), Promise.resolve(b)) : Fy(a.$.Vc, 525, d => {
            a.Y.appendChild(b);
            d.createAdSlot(a.K, a.F, b, a.aa.parentElement, iw(c, a.pubWin));
            return b
        })
    }

    function cD(a, b, c) {
        EC(a.pubWin, oc(we(pc(pc(ve(new xe, ye(new ze, String(eg(a.pubWin)))), 4), 2), J(a.X, 2)), 6, !0));
        const d = a.K;
        a.F.google_acr && a.F.google_acr(b);
        pe(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = d ? vv(d).enable_overlap_observer || !1 : !1;
            (a.F.ovlp || X(Ok) || f) && d && d === a.pubWin && dD(d, a, a.aa, b)
        });
        var e = f => {
            f && a.l.push(() => f.qb())
        };
        eD(a, b);
        X(Tk) && fD(a, b);
        !d || uy(a.F) && !Jy(a.F) || (e(new pz(a, b)), e(new yA(d, b, a.F)), e(new tz(a, b)), e(new mz(a, b)), e(d.IntersectionObserver ? null : new oz(d,
            b, a.Y)));
        d && (e(new gz(d, b)), a.l.push(Ty(d, a.F)), R(Yy).init(d), a.l.push(cz(d, a.aa, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.F.iaaso;
        if (null != c) {
            e = a.aa;
            const f = e.parentElement;
            (f && Bn.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c)
        }
        c = a.aa;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        gD(a)
    }
    var eD = (a, b) => {
            const c = a.pubWin,
                d = a.F.google_ad_client,
                e = fw();
            let f = null;
            const g = wi(c, "pvt", (h, l) => {
                "string" === typeof h.token && l.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
            });
            a.l.push(g)
        },
        hD = (a, b) => {
            var c = Tx(a, "__gpi_opt_out", b.A);
            c && (c = Ie(He(Ge(Fe(new Je, c), 2147483647), "/"), wf(b.F.google_page_url.match(vf)[3] || null)), Ux(a, "__gpi_opt_out", c, b.A))
        },
        fD = (a, b) => {
            const c = wi(a.pubWin, "gpi-uoo", (d, e) => {
                if (e.source === b.contentWindow) {
                    e = Ie(He(Ge(Fe(new Je,
                        d.userOptOut ? "1" : "0"), 2147483647), "/"), wf(a.F.google_page_url.match(vf)[3] || null));
                    var f = new Wx(a.pubWin);
                    Ux(f, "__gpi_opt_out", e, a.A);
                    if (d.userOptOut || d.clearAdsData) Vx(f, "__gads", a.A), Vx(f, "__gpi", a.A)
                }
            });
            a.l.push(c)
        };
    const gD = a => {
            const b = tg(a.pubWin);
            if (b)
                if ("AMP-STICKY-AD" === b.container) {
                    const c = d => {
                        "fill_sticky" === d.data && b.renderStart && b.renderStart()
                    };
                    pe(a.pubWin, "message", si(616, c));
                    a.l.push(() => {
                        qe(a.pubWin, "message", c)
                    })
                } else b.renderStart && b.renderStart()
        },
        dD = (a, b, c, d) => {
            zz(new Iz(a, void 0), c).then(e => {
                Oi(8, [e]);
                return e
            }).then(e => {
                const f = c.parentElement;
                (f && Bn.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
                return e
            }).then(e => {
                const f = b.F.armr || "",
                    g = e.executionTime ||
                    "",
                    h = null == b.F.iaaso ? "" : Number(b.F.iaaso),
                    l = Number(e.isOverlappingOrOutsideViewport),
                    k = ab(e.entries, H => `${H.overlapType}:${H.overlapDepth}:${H.overlapDetectionPoint}`),
                    m = e.overlappedArea.toFixed(2),
                    p = d.dataset.googleQueryId || "",
                    q = m * e.targetRect.width * e.targetRect.height,
                    r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                    u = ch(e.target),
                    x = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
                e = e.viewportSize.width + "x" + e.viewportSize.height;
                V("ovlp", {
                    adf: b.F.google_ad_dom_fingerprint,
                    armr: f,
                    client: b.F.google_ad_client,
                    eid: Sx(b.F),
                    et: g,
                    fwrattr: b.F.google_full_width_responsive,
                    iaaso: h,
                    io: l,
                    saldr: b.F.google_loader_used,
                    oa: m,
                    oe: k.join(","),
                    qid: p,
                    rafmt: b.F.google_responsive_auto_format,
                    roa: q,
                    slot: b.F.google_ad_slot,
                    sp: r,
                    tgt: u,
                    tr: x,
                    url: b.F.google_page_url,
                    vp: e
                }, 1)
            }).catch(e => {
                Oi(8, ["Error:", e.message, c]);
                V("ovlp-err", {
                    err: e.message
                }, 1)
            })
        };

    function iD(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }
    var jD = a => {
            var b = v("Edge") ? 4E3 : 8100;
            var c = a;
            c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
            if (c !== a) {
                b -= 8;
                let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
                V("trn", {
                    ol: a.length,
                    tr: -1 === d ? "" : a.substring(d + 1),
                    url: a
                }, .01)
            }
            return c
        },
        kD = (a, b, c) => {
            var d = b,
                e = 0 === a.B;
            b = a.F;
            const f = b.google_async_iframe_id,
                g = b.google_ad_width,
                h = b.google_ad_height,
                l = Ky(b);
            var k = {
                id: f,
                name: f
            };
            l || (k.style = "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` +
                `height:${h}px;`);
            var m = Vf();
            if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
                m = d;
                if (d = "fsb=" + encodeURIComponent("1")) {
                    var p = m.indexOf("#");
                    0 > p && (p = m.length);
                    var q = m.indexOf("?");
                    if (0 > q || q > p) {
                        q = p;
                        var r = ""
                    } else r = m.substring(q + 1, p);
                    m = [m.substr(0, q), r, m.substr(p)];
                    p = m[1];
                    m[1] = d ? p ? p + "&" + d : d : p;
                    d = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
                } else d = m;
                k.sandbox = Uf().join(" ")
            }
            X(wk) && !1 === b.google_video_play_muted && iD("autoplay", k);
            p = d;
            d = jD(d);
            q = e ? d.replace(/&ea=[^&]*/, "") + "&ea=0" : d;
            m = l ? d : az(q);
            null != g && (k.width = String(g));
            null != h && (k.height = String(h));
            k.frameborder = "0";
            X(Rk) || (k.src = m);
            k.marginwidth = "0";
            k.marginheight = "0";
            k.vspace = "0";
            k.hspace = "0";
            k.allowtransparency = "true";
            k.scrolling = "no";
            k.allowfullscreen = "true";
            m = "";
            if (e) {
                m = 10;
                for (q = ""; 0 < m--;) q += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
                m = q;
                d = vi(d, m);
                vi(p, m)
            } else d = q;
            b.dash && (k.srcdoc = b.dash);
            p = kB(a.pubWin);
            q = b.google_trust_token_additional_signing_data;
            p && lB(p) &&
                (p = nB(p, q)) && (k.trustToken = JSON.stringify(p));
            p = (p = window.navigator.userAgent.match(/Chrome\/([0-9]+)/)) && 92 > Number(p[1]) ? "conversion-measurement" : "attribution-reporting";
            var u;
            (null == (u = a.pubWin.document.featurePolicy) ? 0 : u.features().includes(p)) && iD(p, k);
            l ? (u = d, k.name = "", X(Rk) && (k.src = u), k = $C(k), c = bD(a, k, c)) : c = ZC(d, f, k, a);
            e && (e = a.$.Je, b = {
                    id: f,
                    url: d,
                    width: g,
                    height: h,
                    xc: m,
                    re: a.pubWin,
                    zd: f,
                    ii: "google_expandable_ad_slot" + ah(b),
                    ae: e.toString(),
                    $b: a.pubWin
                }, b = !b.id || !b.url || 0 >= b.width || 0 >= b.height || !b.xc ||
                !b.$b ? void 0 : wi(b.$b, "ct", ua(Ei, b, e)), b && a.l.push(b));
            return c
        };
    async function lD(a) {
        var b = a.F,
            c = a.pubWin,
            d = a.A;
        X(Sk) && B(d, 5) && hD(new Wx(a.pubWin), a);
        var e = iw(d, a.pubWin);
        if (!B(d, 5) && X(jk)) return Promise.resolve();
        B(d, 5) && $x(d, a.pubWin, a.F.google_ad_client);
        var f = a.F.google_reactive_ads_config;
        f && (Ey(a.K, f), Py(f, a, iw(d)), f = f.page_level_pubvars, ma(f) && Dc(a.F, f));
        B(d, 5) && await mD();
        if (!mB(a.pubWin, Lx(), J(a.X, 8))) {
            const g = ul(sl);
            f = c.google_trust_token_operation_promise;
            0 < g && f && await Promise.race([f, new Promise(h => void setTimeout(() => h(), g))])
        }
        f = "";
        Ky(b) ? (f = a.$.Ke.toString() +
            "#" + AB(b), IB(b, Zv()), nD(b)) : (5 == b.google_pgb_reactive && b.google_reactive_ads_config || !vy(b) || ty(c, b, e)) && nD(b) && (f = zB(a, d));
        Oi(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || $g(c);
        e = ah(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${$e()}`;
        c = 0 < NC(a, a.Y, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = Zv(), e.btvi = dw(c, 21, 1), ew(c, 21));
        f = Xg(e, f);
        d = kD(a, f, d);
        f = jD(f);
        a.F.rpe && rA(a.pubWin, a.Y, {
            height: a.F.google_ad_height,
            qc: "force",
            tc: !0,
            Yc: !0,
            jb: a.F.google_ad_client
        });
        d = await d;
        try {
            cD(a, d, b)
        } catch (g) {
            ti(223,
                g)
        }
    }

    function mD() {
        return (Sa() ? 0 <= Ma(Wa(), 11) : Ra() && 0 <= Ma(Wa(), 65)) ? new Promise(a => {
            dB(a.bind(null, !0))
        }) : (dB(null), Promise.resolve(!1))
    }
    const oD = a => {
            const b = new rC(a);
            return new Promise(c => {
                qC(b, d => {
                    d && "string" === typeof d.uspString ? c(d.uspString) : c()
                })
            })
        },
        pD = a => {
            a = new Ps(a, -1);
            return Js(a) ? Os(a) : Promise.resolve()
        },
        qD = a => {
            var b = Wf(t.top, "googlefcPresent");
            t.googlefc && !b && V("adsense_fc_has_namespace_but_no_iframes", {
                publisherId: a
            }, 1)
        },
        rD = a => xC(a) ? AC(a, "loaded") : Promise.resolve(),
        sD = (a, b) => {
            const c = b.Fe,
                d = b.uspString;
            b = b.ye;
            const e = new mw;
            if (c) {
                var f = lw(e, Hs(c));
                f = z(f, 2, c.tcString);
                f = z(f, 4, c.addtlConsent || "");
                z(f, 7, c.internalErrorState);
                void 0 !== c.gdprApplies && z(e, 3, c.gdprApplies)
            } else lw(e, !0);
            d && z(e, 1, d);
            null !== b && z(e, 6, b);
            a.A = e
        },
        tD = async a => {
            var b = ul(mk);
            if (0 >= b) return Promise.resolve();
            const c = ri(809, () => lC(a));
            if (c) try {
                const d = await Promise.race([c, jg(b, "0")]);
                return (null == d ? void 0 : d.length) > ul(lk) ? (ti(809, Error(`ML:${d.length}`)), "0") : d
            } catch (d) {
                return ti(809, d), "0"
            }
        },
        uD = a => {
            var b = ul(ok);
            if (0 >= b) return Promise.resolve();
            const c = Bh();
            return Promise.race([ri(832, () => HC(a)), jg(b)]).then(d => {
                let e;
                const f = null != (e = null == d ? void 0 :
                    d.status) ? e : 100;
                V("afc_etu", {
                    etus: f,
                    sig: Bh() - c,
                    tms: b
                });
                return null == d ? void 0 : d.Ra
            })
        },
        vD = a => {
            var b = ul(ql);
            return Promise.race([si(779, () => {
                const c = X(jB(window) ? ll : kl),
                    d = X(nl);
                return tB(new uB(a, c, d))
            })(), jg(b)])
        };
    var wD = async a => {
            UA = N;
            $A(J(a.X, 8));
            yw(a.pubWin);
            qD(a.F.google_ad_client);
            var b = new BC(a.pubWin),
                c = await rD(b);
            b = [pD(a.pubWin), oD(a.pubWin), CC(b, c, a.F.google_ad_client, bc(a.X, 6))];
            b = await Promise.all(b);
            sD(a, {
                Fe: b[0],
                uspString: b[1],
                ye: b[2]
            });
            mB(a.pubWin, Lx(), J(a.X, 8)) && await vD(!!B(a.A, 5));
            b = tD(a.pubWin);
            c = ri(868, () => uD(a.pubWin));
            a.C = await b || "";
            a.Ra = await c || "";
            await lD(a)
        },
        YC = a => {
            var b = a.pubWin.document,
                c = a.F;
            const d = c.google_ad_width,
                e = c.google_ad_height;
            let f = 0;
            try {
                !1 === c.google_allow_expandable_ads &&
                    (f |= 1);
                if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2;
                a: {
                    c = navigator;
                    const h = c.userAgent,
                        l = c.platform,
                        k = /WebKit\/(\d+)/,
                        m = /rv:(\d+\.\d+)/,
                        p = /rv:1\.8([^.]|\.0)/;
                    if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(l) && !/^Opera/.test(h)) {
                        const q = (k.exec(h) || [0, 0])[1],
                            r = (m.exec(h) || [0, 0])[1];
                        if (/Win/.test(l) && /Trident/.test(h) && 11 <= b.documentMode || !q && "Gecko" === c.product && 27 <= r && !p.test(h) || 536 <= q) {
                            var g = !0;
                            break a
                        }
                    }
                    g = !1
                }
                g || (f |= 4);
                wx(a.pubWin, a.pubWin.document,
                    d, e) && (f |= 2)
            } catch (h) {
                f |= 8
            }
            a.B = f;
            0 === a.B || (a.F.google_allow_expandable_ads = !1);
            lg(a.pubWin) != a.pubWin && (a.j |= 4);
            3 === Kz(a.pubWin.document) && (a.j |= 32);
            if (b = a.K) b = a.K, b = !(Y(b).scrollWidth <= Y(b).clientWidth);
            b && (a.j |= 1024);
            a.pubWin.Prototype && a.pubWin.Prototype.Version && (a.j |= 16384);
            a.F.google_loader_features_used && (a.j |= a.F.google_loader_features_used);
            a.D = 2;
            return wD(a)
        };

    function aD(a, b) {
        a.style.visibility = "visible";
        for (var c; c = a.firstChild;) a.removeChild(c);
        a.appendChild(b)
    }
    var nD = a => {
            const b = Zv(),
                c = a.google_ad_section;
            uy(a) && ew(b, 15);
            if (ih(a)) {
                if (100 < ew(b, 5)) return !1
            } else if (100 < ew(b, 6) - dw(b, 15, 0) && "" == c) return !1;
            return !0
        },
        VC = a => {
            const b = a.K;
            if (b && !vv(b).ads_density_stats_processed && !tg(b) && (vv(b).ads_density_stats_processed = !0, X(Nk) || .01 > Gf())) {
                const c = () => {
                    if (b) {
                        var d = Hu(Cu(b), a.F.google_ad_client, b.location.hostname, Sx(a.F).split(","));
                        V("ama_stats", d, 1)
                    }
                };
                hg(b, () => {
                    t.setTimeout(c, 1E3)
                })
            }
        },
        XC = a => {
            a && !vv(a).host_pinged_back && (vv(a).host_pinged_back = !0, V("abg_host", {
                host: a.location.host
            }, .01))
        },
        SC = async a => {
            const b = a.pubWin.document;
            if ("function" === typeof b.interestCohort && X(Vk)) {
                const c = ul(Wk),
                    d = await Promise.race([(async () => {
                        const e = performance.now(),
                            f = await b.interestCohort();
                        V("flocapi", {
                            time: performance.now() - e
                        }, 1);
                        return f
                    })(), new Promise(e => void setTimeout(() => e(), c))]);
                d && (a.F.google_floc = d)
            }
        };
    ((a, b, c) => {
        ri(843, () => {
            var d = t.google_sl_win || t;
            if (!d.google_sa_impl) {
                var e = jC(a);
                gC(e);
                Oi(16, [3, e.toJSON()]);
                var f = hC({
                        Md: b,
                        Ee: J(e, 2)
                    }),
                    g = c(f, e);
                d.google_sa_impl = async l => await KC({
                    X: e,
                    $: g,
                    Ga: f,
                    slot: l
                });
                Rx(Ox(d));
                var h;
                null == (h = d.google_process_slots) || h.call(d);
                d = (t.Prototype || {}).Version;
                null != d && V("prtpjs", {
                    version: d
                })
            }
        })
    })(iC, "m202201060101", function(a, b) {
        const c = 2012 < ac(b, 1, 0) ? `_fy${ac(b,1,0)}` : "",
            d = J(b, 3);
        b = J(b, 2);
        return {
            ue: L `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            te: L `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Vc: L `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            Od: L `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            Je: L `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            Ke: L `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            bb: L `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            Ec: L `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`
        }
    });
}).call(this, "[2019,\"r20220112\",\"r20110914\",null,[],null,null,\".google.co.in\",null,null,[],null,[],null,null,null,null,-1]");