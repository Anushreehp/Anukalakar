(window.webpackJsonpXDK = window.webpackJsonpXDK || []).push([
    [169], {
        557: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(4),
                i = a.n(o),
                c = a(16),
                l = a(13),
                p = a(33),
                s = a(32),
                m = (a(117), a(9)),
                u = a(41);

            function b(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, n)
                }
                return a
            }

            function d(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var f = function(e) {
                var t = e.description,
                    a = e.payload,
                    n = e.onClose,
                    o = e.onSubmit,
                    i = e.active,
                    f = e.quickReplies,
                    g = Object(c.d)(l.b),
                    y = g["chat-icon-config"],
                    v = void 0 === y ? {
                        type: "default"
                    } : y,
                    k = g["widget-positioning"],
                    O = g["primary-color"],
                    h = "default" === v.type || !1,
                    w = h ? 58 : 95,
                    j = h ? 58 : 84,
                    E = Object(m.i)() ? j : w,
                    P = "center" === k ? "center-mode" : "",
                    x = "bottom-left" === k ? "bottom-left-mode" : "",
                    N = Math.ceil(t.length / 32),
                    C = 5 * t.length + 134,
                    q = Object(m.l)(k, 0, E),
                    S = Object(m.i)() ? f.slice(0, 2) : f,
                    D = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? b(a, !0).forEach(function(t) {
                                d(e, t, a[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : b(a).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            })
                        }
                        return e
                    }({
                        zIndex: 100002,
                        position: "fixed",
                        width: C > 300 ? 300 : C,
                        height: 18 * N + 70 + 18 + 45 * S.length
                    }, q, {
                        top: "center" === k ? "calc(50% - 60px)" : void 0
                    }),
                    T = function(e) {
                        e.stopPropagation(), n()
                    },
                    _ = r.a.createRef(),
                    R = function(e) {
                        if (f) return r.a.createElement("div", {
                            className: "prompt-quick-reply-wrapper ".concat(e ? "active" : ""),
                            ref: _
                        }, r.a.createElement("div", {
                            className: "prompt-quick-reply-stacked"
                        }, S.map(function(t, a) {
                            var n = t.actionable_text;
                            return r.a.createElement("div", {
                                key: a,
                                onClick: function() {
                                    return function(e) {
                                        var t = e.payload.message;
                                        o(t, {
                                            elementClicked: "QR"
                                        })
                                    }(t)
                                },
                                className: "prompt-quick-reply-option ".concat(e ? "active" : "", "  ").concat(x),
                                style: {
                                    backgroundColor: Object(u.a)(.3, O)
                                }
                            }, r.a.createElement("span", {
                                className: "prompt-quick-reply-option-text"
                            }, n))
                        })))
                    };
                return r.a.createElement(p.a, {
                    active: i,
                    style: D,
                    id: "haptik-xdk",
                    className: "bot-prompt-minimal-wrapper ".concat(P, " ").concat(x)
                }, function(e) {
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        onClick: function() {
                            return o(a, {
                                elementClicked: "TITLE"
                            })
                        },
                        className: "bot-prompt-minimal ".concat(e ? "active" : "", " ").concat(P, " ").concat(x)
                    }, r.a.createElement("div", {
                        className: "bot-prompt-minimal-cross-icon",
                        onClick: T
                    }, r.a.createElement(s.a, {
                        color: "#BABABA"
                    })), r.a.createElement("div", {
                        className: "bot-prompt-minimal-bg"
                    }), r.a.createElement("div", {
                        className: "bot-prompt-minimal-textarea"
                    }, r.a.createElement("span", {
                        className: "bot-prompt-minimal-textarea-text",
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }))), R(e))
                })
            };
            f.propTypes = {
                description: i.a.string,
                onClose: i.a.func,
                payload: i.a.string,
                onSubmit: i.a.func,
                active: i.a.bool,
                quickReplies: i.a.arrayOf(i.a.shape({
                    actionable_text: i.a.string,
                    is_default: i.a.number,
                    payload: i.a.shape({
                        gogo_message: i.a.string,
                        link: i.a.string,
                        message: i.a.string
                    }),
                    type: i.a.string
                }))
            }, f.defaultProps = {
                description: "Hi There! This is a really really long bot prompt. Sweet, this might just work out. or not?",
                onClose: function() {},
                payload: "",
                onSubmit: function() {},
                active: !1,
                quickReplies: []
            };
            var g = f;
            a.d(t, "default", function() {
                return g
            })
        }
    }
]);
//# sourceMappingURL=169.js.map