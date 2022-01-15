/*!
 * @author Manish Kumar Singh <email>
 * date 08/27/2018
 * description
 */

var clickStream = new function() {
    var e = "",
        t = {
            CLIENT_ID: {
                name: "clientId",
                cookieName: "",
                expiryTime: 63072e6
            },
            SESSION_ID: {
                name: "sessionId",
                cookieName: "",
                expiryTime: 18e5
            }
        },
        n = {
            name: "VEDANTU",
            trackingId: "UA-52838179-3"
        },
        r = {
            PAGE_VIEW: "pageview",
            EVENT: "event"
        },
        i = {},
        s = 128,
        o = 64,
        u = function(e) {
            return e !== undefined ? e : null
        },
        a = function(e, t) {
            var n = null;
            if (e) switch (t) {
                case "key":
                    n = e.substring(0, o);
                    break;
                case "value":
                    n = e.substring(0, s);
                    break;
                default:
            }
            return n
        },
        f = {
            clientId: "cid",
            sessionId: "sid",
            userId: "uid",
            email: "em",
            role: "rl",
            grade: "gd",
            target: "tr",
            board: "bd",
            deviceType: "dvct",
            source: "src",
            referrer: "dr",
            utm_source: "usrc",
            utm_medium: "umed",
            utm_campaign: "ucam",
            utm_term: "utrm",
            utm_content: "ucnt",
            channel: "chl",
            domain: "dh",
            fullUrl: "dl",
            pageTitle: "dt",
            pathName: "dp",
            screenName: "cd",
            type: "t",
            ipAddress: "uip",
            country: "cn",
            city: "ct",
            state: "st",
            appName: "an",
            appTrackingId: "aid",
            timestamp: "utt",
            screenResolution: "sr",
            viewportSize: "vp",
            browser: "br",
            timeSpent: "uts",
            userAgent: "ua",
            eventCategory: "ec",
            eventAction: "ea",
            eventLabel: "el",
            eventValue: "ev",
            key1: "k1",
            key2: "k2",
            key3: "k3",
            key4: "k4",
            key5: "k5",
            key6: "k6",
            key7: "k7",
            key8: "k8",
            key9: "k9",
            key10: "k10",
            value1: "v1",
            value2: "v2",
            value3: "v3",
            value4: "v4",
            value5: "v5",
            value6: "v6",
            value7: "v7",
            value8: "v8",
            value9: "v9",
            value10: "v10",
            loggedIn: "li"
        },
        l = new function() {
            var e = function(e, i, s, o, u, a, f) {
                    var l = "";
                    e === "platform" ? l = n(i) : l = r(e, i);
                    var c = new XMLHttpRequest;
                    c.timeout = 5e3, c.onreadystatechange = function() {
                        c.readyState == 4 && (c.status == 200 && typeof a == "function" ? a(c.responseText) : typeof f == "function" && f(c.responseText))
                    }, o = o || {}, o.ver = config["static"].version, s === "GET" ? (c.open(s, l + t(o), !0), c.withCredentials = !0, u && c.setRequestHeader("Content-Type", "application/json"), c.send()) : (c.open(s, l, !0), c.withCredentials = !0, u ? (c.setRequestHeader("Content-Type", "application/json"), c.send(JSON.stringify(o))) : c.send(o))
                },
                t = function(e) {
                    return Object.keys(e).reduce(function(t, n, r) {
                        var i, s;
                        return i = r === 0 ? "?" : "&", n = encodeURIComponent(n), s = encodeURIComponent(e[n]), [t, i, n, "=", s].join("")
                    }, "")
                },
                n = function(e) {
                    var t = config.platform.notification,
                        n = "//" + t.domain;
                    return !t.port || (n = n + ":" + t.port), n = n + "/platform" + e, n
                },
                r = function(e, t) {
                    if (typeof config == "undefined") return "";
                    var n = config.platformNew[e];
                    if (!!n) {
                        var r = window.location.protocol + "//" + n.domain;
                        return !n.port || (r = r + ":" + n.port), r = r + n.folder + t, r
                    }
                };
            return {
                sendRequest: e
            }
        },
        c = function(e) {
            var s = {
                    create: function(e, t, n) {
                        n = n ? n : 18e5;
                        var r = new Date;
                        r.setTime(r.getTime() + n);
                        var i = "; expires=" + r.toGMTString();
                        document.cookie = e + "=" + t + i + "; path=/"
                    },
                    get: function(e) {
                        var t = "; " + document.cookie,
                            n = t.split("; " + e + "=");
                        if (n.length == 2) return n.pop().split(";").shift()
                    },
                    "delete": function(e) {
                        document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    }
                },
                o = function(e) {
                    return Math.floor(Math.pow(10, e - 1) + Math.random() * (Math.pow(10, e) - Math.pow(10, e - 1) - 1))
                },
                l = function(e) {
                    var n = null;
                    switch (e) {
                        case t.CLIENT_ID.name:
                            n = "cid." + o(10) + "." + (new Date).getTime();
                            break;
                        case t.SESSION_ID.name:
                            n = "sid." + o(10) + "." + (new Date).getTime();
                            break;
                        default:
                    }
                    return n
                },
                c = function(e) {
                    switch (e) {
                        case t.CLIENT_ID.name:
                            var n = s.get(e);
                            n = n === "null" ? null : n, n = n || l(e), s.create(e, n, t.CLIENT_ID.expiryTime), i[f.clientId] = n;
                            break;
                        case t.SESSION_ID.name:
                            var r = s.get(e);
                            r = r === "null" ? null : r, r = r || l(e), s.create(e, r, t.SESSION_ID.expiryTime), i[f.sessionId] = r;
                            break;
                        default:
                    }
                },
                h = new function() {
                    var e = function() {
                            var e = !1;
                            return function(t, n) {
                                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) e = !0
                            }(navigator.userAgent || navigator.vendor || window.opera), e
                        },
                        t = function() {
                            var e = !1;
                            return function(t) {
                                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) e = !0
                            }(navigator.userAgent || navigator.vendor || window.opera), e
                        },
                        n = function() {
                            var n = "DESKTOP";
                            return e() ? n = "MOBILE" : t() && (n = "TABLET"), n
                        };
                    return {
                        getDeviceType: n
                    }
                },
                p = function() {
                    var e = location.href,
                        t = {};
                    if (e) try {
                        e = e.split("?")[1];
                        if (!e) return t;
                        e = e.split("&");
                        for (var n in e) {
                            var r = e[n].split("=");
                            t[r[0]] = r[1]
                        }
                    } catch (i) {
                        console.error(i)
                    }
                    return t
                },
                d = function() {
                    var e = p(),
                        t = {
                            utm_source: e.utm_source || null,
                            utm_medium: e.utm_medium || null,
                            utm_campaign: e.utm_campaign || null,
                            utm_term: e.utm_term || null,
                            utm_content: e.utm_content || null,
                            channel: e.channel || null
                        };
                    return t
                },
                v = function() {
                    var e = {
                            width: window.screen.width,
                            height: window.screen.height
                        },
                        t = {
                            width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                            height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                        },
                        s = d();
                    i[f.screenResolution] = e.width + "x" + e.height, i[f.viewportSize] = t.width + "x" + t.height, i[f.deviceType] = h.getDeviceType(), i[f.referrer] = document.referrer, i[f.domain] = location.hostname, i[f.fullUrl] = document.URL, i[f.pageTitle] = document.title, i[f.pathName] = location.pathname, i[f.type] = r.PAGE_VIEW, i[f.appName] = n.name, i[f.appTrackingId] = n.trackingId, i[f.timestamp] = (new Date).getTime(), i[f.userAgent] = window.navigator.userAgent, i[f.utm_source] = s.utm_source, i[f.utm_medium] = s.utm_medium, i[f.utm_campaign] = s.utm_campaign, i[f.utm_term] = s.utm_term, i[f.utm_content] = s.utm_content, i[f.channel] = s.channel, i[f.source] = m()
                },
                m = function() {
                    var e = p(),
                        t = "WEB";
                    return !!e && Object.keys(e).length && e.doubtApp && (t = "DOUBT_APP"), t
                },
                g = function(e) {
                    e = e || {};
                    var t = {
                        userId: e.userId || null,
                        email: e.email || null,
                        role: e.role || null,
                        grade: e.grade || null,
                        target: e.target || null,
                        board: e.board || null
                    };
                    i[f.userId] = t.userId, i[f.email] = t.email, i[f.role] = t.role, i[f.grade] = t.grade, i[f.target] = t.target, i[f.loggedIn] = !!t.userId, i[f.board] = t.board
                },
                y = function(e, t, n, s, o) {
                    var u = {
                        eventCategory: e,
                        eventAction: t,
                        eventLabel: n,
                        eventValue: s
                    };
                    i[f.eventCategory] = u.eventCategory, i[f.eventAction] = u.eventAction, i[f.eventLabel] = u.eventLabel, i[f.eventValue] = u.eventValue, i[f.type] = r.EVENT;
                    try {
                        typeof o == "object" && b(o)
                    } catch (a) {
                        console.error(a)
                    }
                },
                b = function(e) {
                    var t = "key",
                        n = "value";
                    i[f.key1] = e.key1 || null, i[f.key2] = e.key2 || null, i[f.key3] = e.key3 || null, i[f.key4] = a(e.key4, t), i[f.key5] = a(e.key5, t), i[f.key6] = a(e.key6, t), i[f.key7] = a(e.key7, t), i[f.key8] = a(e.key8, t), i[f.key9] = a(e.key9, t), i[f.key10] = a(e.key10, t), i[f.value1] = u(e.value1), i[f.value2] = u(e.value2), i[f.value3] = u(e.value3), i[f.value4] = a(u(e.value4), n), i[f.value5] = a(u(e.value5), n), i[f.value6] = a(u(e.value6), n), i[f.value7] = a(u(e.value7), n), i[f.value8] = a(u(e.value8), n), i[f.value9] = a(u(e.value9), n), i[f.value10] = a(u(e.value10), n)
                },
                w = function(e, t, n) {
                    var r = "cs_ud",
                        i = this;
                    if (!e) i.setUserTrackingInfos();
                    else {
                        var s = !e.info || !e.info.examTargets || !e.info.examTargets.length ? null : e.info.examTargets.join();
                        t = s || t;
                        var o = !e.info || !e.info.board ? null : e.info.board;
                        o = o ? o : e.board ? e.board : !e.studentInfo || !e.studentInfo.board ? null : e.studentInfo.board, t = t ? t : e.examTargets ? String(e.examTargets) : !e.studentInfo || !e.studentInfo.examTargets ? null : String(e.studentInfo.examTargets);
                        var u = e.user;
                        !u || (o = o ? o : u.board ? u.board : !u.studentInfo || !u.studentInfo.board ? null : u.studentInfo.board, t = t ? t : u.examTargets ? String(u.examTargets) : !u.studentInfo || !u.studentInfo.examTargets ? null : String(u.studentInfo.examTargets)), n = o || n;
                        try {
                            var a = {};
                            !!t && !!n && (a.target = t, a.board = n, localStorage.setItem(r, JSON.stringify(a)))
                        } catch (f) {
                            console.warn("Error while setting/getting user data to local storage: ", f)
                        }
                        var l = {
                            userId: e.userId || e.id || !!u && u.userId || !!u && u.id || null,
                            email: e.email || !!u && u.email || null,
                            role: e.role || !!u && u.role || null,
                            grade: e.grade || !!e.studentInfo && e.studentInfo.grade || null,
                            target: t || null,
                            board: n || null
                        };
                        i.setUserTrackingInfos(l)
                    }
                };
            return {
                createUpdateIds: c,
                setBasicTrackingInfos: v,
                setUserTrackingInfos: g,
                setEventTrackingInfos: y,
                updateUserDetailsInStoreage: w
            }
        }(l),
        h = new function() {
            var e = "STORAGE_DATA",
                t = 500,
                n = 3,
                r = 0,
                i = null,
                s = null,
                o = !1,
                u = !1;
            this.addData = function(t) {
                i = !i || !i.length ? [] : i, i.push(t), window.localStorage.setItem(e, window.JSON.stringify(i))
            };
            var a = function() {
                    var t = null,
                        t = window.localStorage.getItem(e);
                    return !t || (t = window.JSON.parse(t)), t
                },
                f = function() {
                    if (o) return;
                    var t = null;
                    if (i && i.length && !o) {
                        o = !0, t = i[0];
                        var s = p.getClickStreamEndPoint();
                        r++, l.sendRequest("analytics", s, "GET", t, null, function() {
                            i.splice(0, 1), window.localStorage.setItem(e, window.JSON.stringify(i)), o = !1, r = 0
                        }, function() {
                            r >= n && (r = 0, i.splice(0, 1), window.localStorage.setItem(e, window.JSON.stringify(i))), o = !1
                        })
                    }
                };
            this.init = function() {
                u || (i = a(), u = !0), s && window.clearInterval(s), s = setInterval(function() {
                    f()
                }, t)
            }
        }(l, p),
        p = function(n, r, s) {
            var o = null,
                l = function(e, o, u, a, f) {
                    try {
                        n.createUpdateIds(t.SESSION_ID.name), n.setEventTrackingInfos(e, o, u, a, f);
                        var l = p(i);
                        if (!window.localStorage) {
                            console.log("Send Click Stream ", l);
                            var c = m();
                            r.sendRequest("analytics", c, "GET", l)
                        } else s.addData(l)
                    } catch (h) {
                        console.error("Error while pushing event to server", h)
                    }
                },
                c = function(e) {
                    var t = {},
                        n = {};
                    document.querySelector("body").addEventListener("click", function(e) {
                        try {
                            var t = e.target;
                            o = {}, n = {};
                            var r = [],
                                i = "key",
                                s = "value";
                            while (t) {
                                var o = t.dataset;
                                if (!!o && !!o.analyticsType && o.analyticsType === "clickStream") {
                                    n.key1 = o.clickStreamKey1 || null, n.key2 = o.clickStreamKey2 || null, n.key3 = o.clickStreamKey3 || null, n.key4 = a(o.clickStreamKey4, i), n.key5 = a(o.clickStreamKey5, i), n.key6 = a(o.clickStreamKey6, i), n.key7 = a(o.clickStreamKey7, i), n.key8 = a(o.clickStreamKey8, i), n.key9 = a(o.clickStreamKey9, i), n.key10 = a(o.clickStreamKey10, i), n.value1 = u(o.clickStreamValue1), n.value2 = u(o.clickStreamValue2), n.value3 = u(o.clickStreamValue3), n.value4 = a(u(o.clickStreamValue4), s), n.value5 = a(u(o.clickStreamValue5), s), n.value6 = a(u(o.clickStreamValue6), s), n.value7 = a(u(o.clickStreamValue7), s), n.value8 = a(u(o.clickStreamValue8), s), n.value9 = a(u(o.clickStreamValue9), s), n.value10 = a(u(o.clickStreamValue10), s);
                                    var f = o.clickStreamCategory;
                                    f = f || h(t), !!f && l(f, o.clickStreamAction, o.clickStreamLabel, null, n);
                                    break
                                }
                                r.unshift(t), t = t.parentNode
                            }
                        } catch (c) {
                            console.error("Error while adding event listner on tracking element", c)
                        }
                    })
                },
                h = function(e) {
                    var t = null,
                        n = null;
                    try {
                        var r = [];
                        while (e) {
                            if (!!e.className && e.className.indexOf("clickStreamCategoryParent") >= 0) {
                                n = e.dataset.clickStreamCategory;
                                break
                            }
                            r.unshift(e), e = e.parentNode
                        }
                    } catch (i) {
                        console.warn("Error while finding event category, ", i)
                    }
                    return n
                },
                p = function(e) {
                    var t = null;
                    try {
                        t = JSON.parse(JSON.stringify(e));
                        var n = Object.keys(t);
                        for (var r in n) t[n[r]] == null && delete t[n[r]]
                    } catch (i) {
                        console.error("Error While processing: ", i)
                    }
                    return t
                },
                d = function(e, t, r) {
                    try {
                        i[f.pageTitle] = document.title || null, n.updateUserDetailsInStoreage(e, t, r), v()
                    } catch (s) {
                        console.error("Error while initializing click stream", s)
                    }
                },
                v = function() {
                    if (e !== window.location.pathname) {
                        g();
                        var t = p(i);
                        if (!window.localStorage) {
                            var n = m();
                            r.sendRequest("analytics", n, "GET", t)
                        } else s.init(), s.addData(t);
                        e = window.location.pathname
                    }
                },
                m = function() {
                    return o || (o = "/sendtoclickstream", window.config && window.config.mode && window.config.mode != "PROD" && (o = "/send")), o
                },
                g = function() {
                    n.createUpdateIds(t.CLIENT_ID.name), n.createUpdateIds(t.SESSION_ID.name), n.setEventTrackingInfos(null, null, null, null, {}), n.setBasicTrackingInfos()
                };
            return g(), {
                initBasicTrackingData: g,
                pushEvent: l,
                trackPageView: d,
                addEventListeners: c,
                getClickStreamEndPoint: m
            }
        }(c, l, h);
    return window.addEventListener("normal-signup", function(e) {
        c.updateUserDetailsInStoreage(e.detail)
    }), window.addEventListener("normal-login", function(e) {
        c.updateUserDetailsInStoreage(e.detail)
    }), window.addEventListener("vsat-logout", function(e) {
        c.updateUserDetailsInStoreage({})
    }), window.addEventListener("social-signup", function(e) {
        c.updateUserDetailsInStoreage(e.detail)
    }), window.addEventListener("social-login", function(e) {
        c.updateUserDetailsInStoreage(e.detail)
    }), document.onreadystatechange = function() {
        switch (document.readyState) {
            case "loading":
                break;
            case "interactive":
                p.addEventListeners();
                break;
            case "complete":
        }
    }, setTimeout(function() {
        window.onClickStreamLoaded && window.onClickStreamLoaded()
    }), {
        pushEvent: p.pushEvent,
        trackPageView: p.trackPageView
    }
};