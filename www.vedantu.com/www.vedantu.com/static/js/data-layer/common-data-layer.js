//         (function (d, w, c) { if(!d.getElementById("spd-busns-spt")) { var n = d.getElementsByTagName('script')[0], s = d.createElement('script'); var loaded = false; s.id = "spd-busns-spt"; s.async = "async"; s.setAttribute("data-self-init", "false"); s.setAttribute("data-init-type", "opt"); s.src = 'https://cdn.freshbots.ai/assets/share/js/freshbots.min.js'; s.setAttribute("data-client", "d771e89be9101d819a85aa1cf5fc3c0e669e90a4"); s.setAttribute("data-bot-hash", "b7f824fc01c88db8543bc469cdb4519bedb8342f"); s.setAttribute("data-env", "prod"); s.setAttribute("data-region", "us"); if (c) { s.onreadystatechange = s.onload = function () { if (!loaded) { c(); } loaded = true; }; } n.parentNode.insertBefore(s, n); } }) (document, window, function () { Freshbots.initiateWidget({ autoInitChat: false, getClientParams: function () { return {}; } }, function(successResponse) { }, function(errorResponse) { }); });

(function(e, t, n) {
    e.dataLayer = e.dataLayer || [];
    var r = ["", "/"],
        i = function(e) {
            var n = "; " + t.cookie,
                r = n.split("; " + e + "=");
            return r.length == 2 ? r.pop().split(";").shift() : null
        },
        s = new function() {
            var t = function(e, t, o, u, a, f, l) {
                    var c = "";
                    e === "platform" ? c = i(t) : c = s(e, t);
                    var h = new XMLHttpRequest;
                    h.timeout = 5e3, h.onreadystatechange = function() {
                        h.readyState == 4 && (h.status == 200 && typeof f == "function" ? f(h.responseText) : typeof l == "function" && l(h.responseText))
                    }, u = u || {}, u.ver = n["static"].version, o === "GET" ? (h.open(o, c + r(u), !0), h.withCredentials = !0, a && h.setRequestHeader("Content-Type", "application/json"), h.send()) : (h.open(o, c, !0), h.withCredentials = !0, a ? (h.setRequestHeader("Content-Type", "application/json"), h.send(JSON.stringify(u))) : h.send(u))
                },
                r = function(e) {
                    return Object.keys(e).reduce(function(t, n, r) {
                        var i, s;
                        return i = r === 0 ? "?" : "&", n = encodeURIComponent(n), s = encodeURIComponent(e[n]), [t, i, n, "=", s].join("")
                    }, "")
                },
                i = function(e) {
                    var t = n.platform.notification,
                        r = "//" + t.domain;
                    return !t.port || (r = r + ":" + t.port), r = r + "/platform" + e, r
                },
                s = function(t, r) {
                    if (typeof n == "undefined") return "";
                    var i = n.platformNew[t];
                    if (!!i) {
                        var s = e.location.protocol + "//" + i.domain;
                        return !i.port || (s = s + ":" + i.port), s = s + i.folder + r, s
                    }
                };
            return {
                callApi: t
            }
        },
        o = function(n) {
            var r = function(t) {
                    var n = !1;
                    return function(e) {
                        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) n = !0
                    }(navigator.userAgent || navigator.vendor || e.opera), n
                },
                s = function(e) {
                    var t = !!i("X-Ved-Token");
                    if (!t) {
                        e(null);
                        return
                    }
                    n.callApi("user", "/getLoginData", "GET", {}, !0, function(t) {
                        if (!e || typeof e != "function" || !t) !!e && typeof e == "function" && e(null);
                        else {
                            var r = JSON.parse(t);
                            n.callApi("platform", "/getforwarder?forwardTo=/platform/user/getUserProfile", "GET", {
                                userId: r.userId
                            }, !0, function(t) {
                                !!e && typeof e == "function" && e(JSON.parse(t))
                            }, function() {
                                e(null)
                            })
                        }
                    }, function() {
                        !!e && typeof e == "function" && e(null)
                    })
                },
                o = function() {
                    var e = "";
                    return t.URL.indexOf("/ncert-solutions") != -1 ? e = "ncert" : t.URL.indexOf("/rd-sharma-solutions") != -1 ? e = "referenceBook" : t.URL.indexOf("/hc-verma-solutions") != -1 ? e = "referenceBook" : location.pathname === "/" ? e = "homePage" : t.URL.indexOf("/webinar") != -1 ? e = "masterClass" : e = "-", e
                };
            return {
                isMobile: r,
                getUserDetails: s,
                getPageType: o
            }
        }(s),
        u = function(t) {
            t = t || {};
            var n = o.isMobile(),
                r = t.fullName || "-",
                i = t.userId || "-",
                s = t.email || "-",
                u = !!t.userId,
                a = !t.userId,
                f = "-",
                l = t.grade || "-",
                c = o.getPageType(),
                h = t.contactNumber || "",
                p = t.phoneCode || "",
                d = t.role || "STUDENT",
                v = t.info && t.info.teacherCategoryTypes && t.info.teacherCategoryTypes.includes("EARLY_LEARNING");
            e.dataLayer.push({
                isMobile: n,
                userName: r,
                userId: i,
                emailId: s,
                isLoggedIn: u,
                isLoggedOut: a,
                loginType: f,
                classSubscribed: l,
                pageType: c,
                contactNumber: h,
                phoneCode: p,
                userRole: d,
                isVskTeacher: v
            });
            if (!!e.page_type) {
                var c = e.page_type,
                    m = e.grade,
                    g = e.target,
                    y = e.subject,
                    b = e.chapterTitle;
                e.dataLayer.push({
                    pageType: c,
                    pageClass: m,
                    target: g,
                    pageSubject: y,
                    chapterTitle: b
                })
            }
        };
    setTimeout(function() {
        userDetails = o.getUserDetails(function(n) {
            u(n), e.userDataFromDataLayer = n || null, r.indexOf(e.location.pathname) < 0 && a(n), setTimeout(function() {
                var r = new CustomEvent("dataLayerLoaded", {
                    detail: n
                });
                e.dispatchEvent(r), console.log("dispatched Event", r, t.readyState)
            }, 50)
        })
    });
    var a = function(n, r) {
        n && !n.userId && n.id && (n.userId = n.id), e.haptikScriptLoaded ? (console.log("Haptik", "Script Preloaded"), t.dispatchEvent(new CustomEvent("refreshBotAsPerCredentials", {
            detail: n
        }))) : (console.log("Haptik", "Script Waiting for load"), t.addEventListener("gtmHaptikLoadCb", function(e) {
            console.log("Haptik", "GTM Loaded"), t.dispatchEvent(new CustomEvent("refreshBotAsPerCredentials", {
                detail: n
            }))
        }))
    };
    e.initiatehaptikBot = a
})(window, document, window.config);