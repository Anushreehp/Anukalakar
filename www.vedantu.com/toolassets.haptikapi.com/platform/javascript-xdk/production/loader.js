! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "https://toolassets.haptikapi.com/platform/javascript-xdk/production/", n(n.s = 90)
}({
    90: function(t, e) {
        var n = ["app.js", "styles.js"],
            r = document.currentScript,
            o = new URL(r.src),
            i = o.searchParams.get("init"),
            a = o.searchParams.get("callback") || "",
            c = 0,
            u = function() {
                if ((c += 1) === n.length) {
                    if ("false" === i) return a ? setTimeout(function() {
                        return window[a]()
                    }, 0) : null;
                    if (!window.haptikInitSettings) return console.error("Missing Init settings");
                    HaptikSDK.init(window.haptikInitSettings)
                }
            };
        n.forEach(function(t) {
            var e = document.createElement("script");
            e.type = "text/javascript", e.src = "".concat("https://toolassets.haptikapi.com/platform/javascript-xdk/production/").concat(t), e.onload = u, e.setAttribute("crossorigin", "anonymous"), document.body.appendChild(e)
        })
    }
});
//# sourceMappingURL=loader.js.map