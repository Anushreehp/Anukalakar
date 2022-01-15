/*!
 * MoEngage Web SDK
 * v2.7.25
 */
! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 69)
}({
    0: function(e, t, n) {
        "use strict";
        var o = this && this.__awaiter || function(e, t, n, o) {
                return new(n = n || Promise)((function(r, a) {
                    function i(e) {
                        try {
                            _(o.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function E(e) {
                        try {
                            _(o.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function _(e) {
                        e.done ? r(e.value) : new n((function(t) {
                            t(e.value)
                        })).then(i, E)
                    }
                    _((o = o.apply(e, t || [])).next())
                }))
            },
            r = this && this.__generator || function(e, t) {
                var n, o, r, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: E(0),
                    throw: E(1),
                    return: E(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function E(a) {
                    return function(E) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, o && (r = 2 & a[0] ? o.return : a[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, a[1])).done) return r;
                                switch (o = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        r = a;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, o = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = 0 < (r = i.trys).length && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < r[1]) {
                                            i.label = r[1], r = a;
                                            break
                                        }
                                        if (r && i.label < r[2]) {
                                            i.label = r[2], i.ops.push(a);
                                            break
                                        }
                                        r[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e], o = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, E])
                    }
                }
            },
            a = this;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(2);
        t.isObjectEmpty = function(e) {
            return 0 === Object.keys(e).length && e.constructor === Object
        }, t.getProp = function e(t, n, o) {
            return null == t ? null : (t = t[(n = Array.isArray(n) ? n : n.split("."))[0]]) && 1 < n.length ? e(t, n.slice(1), o) : void 0 === t ? o || null : t
        }, t.getCurrentProtocol = function() {
            if (window) {
                if ("localhost" === window.location.hostname) return "https";
                if ("http:" === window.location.protocol) return "http";
                if ("https:" === window.location.protocol) return "https"
            }
        }, t.stringToBuffer = function(e) {
            for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), o = new Uint8Array(n.length), r = 0; r < n.length; ++r) o[r] = n.charCodeAt(r);
            return o
        }, t.bufferToString = function(e) {
            for (var t, n = "", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(e), a = r.byteLength, i = a % 3, E = a - i, _ = 0; _ < E; _ += 3) n += o[(16515072 & (t = r[_] << 16 | r[_ + 1] << 8 | r[_ + 2])) >> 18] + o[(258048 & t) >> 12] + o[(4032 & t) >> 6] + o[63 & t];
            return 1 == i ? n += o[(252 & (t = r[E])) >> 2] + o[(3 & t) << 4] + "==" : 2 == i && (n += o[(64512 & (t = r[E] << 8 | r[1 + E])) >> 10] + o[(1008 & t) >> 4] + o[(15 & t) << 2] + "="), n
        }, t.isVapid = function(e, t) {
            return t.isChrome() || t.isOpera() ? "vapid" === e.chrome.subscriptionMode && !!e.chrome.vapidPublicKey : !!t.isFirefox() && "vapid" === e.firefox.subscriptionMode && !!e.firefox.vapidPublicKey
        }, t.getVapidPublicKey = function(e, t) {
            return t.isChrome() || t.isOpera() ? e.chrome.vapidPublicKey : t.isFirefox() ? e.firefox.vapidPublicKey : ""
        }, t.isMobile = function() {
            var e = navigator.userAgent;
            return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)))
        }, t.parseISOString = function(e) {
            return new Date(Date.parse(e))
        }, t.asyncForEach = function(e, t) {
            return o(this, void 0, void 0, (function() {
                var n;
                return r(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            n = 0, o.label = 1;
                        case 1:
                            return n < e.length ? [4, t(e[n], n, e)] : [3, 4];
                        case 2:
                            o.sent(), o.label = 3;
                        case 3:
                            return n++, [3, 1];
                        case 4:
                            return [2]
                    }
                }))
            }))
        }, t.getMoeWindowVar = function() {
            return window[window.moengage_object || "Moengage"]
        }, t.PromiseObject = function() {
            var e = this;
            this.p = null, this.res = null, this.rej = null;
            try {
                this.p = new Promise((function(t, n) {
                    e.res = t, e.rej = n
                }))
            } catch (e) {
                i.default.error(1, "Utils.PromiseObject", "Promises not supported")
            }
        }, t.validateDataType = {
            isBoolean: function(e) {
                return "boolean" == typeof e
            },
            isNumber: function(e) {
                return "number" == typeof e
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumeric: function(e) {
                return a.isNumber(e) || a.isString(e) && String(+e) === e
            },
            isDate: function(e) {
                return "[object Date]" === Object.prototype.toString.call(e)
            }
        }, t.deepCompareObjects = function e(t, n) {
            if (null == t || null == n) return t === n;
            if (t instanceof Function) return t === n;
            if (t instanceof RegExp) return t === n;
            if (t === n || t.valueOf() === n.valueOf()) return !0;
            if (Array.isArray(t) && t.length !== n.length) return !1;
            if (t instanceof Date) return !1;
            if (!(t instanceof Object)) return !1;
            if (!(n instanceof Object)) return !1;
            var o = Object.keys(t);
            return Object.keys(n).every((function(e) {
                return -1 !== o.indexOf(e)
            })) && o.every((function(o) {
                return e(t[o], n[o])
            }))
        }, t.convertDateToDateMonthYearFormat = function() {
            var e = new Date;
            return e.getDate() + ":" + (e.getMonth() + 1) + ":" + e.getFullYear() + ":" + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds()
        }, t.deserializeQueryParams = function(e) {
            if (e) {
                var t = e.replace("?", "").split("&"),
                    n = {};
                return t.forEach((function(e) {
                    var t = e.split("="),
                        o = t[0],
                        r = decodeURIComponent(t[1] || "");
                    n[o] ? "[object Array]" === Object.prototype.toString.call(n[o]) ? n[o].push(r) : n[o] = [n[o], r] : n[o] = r
                })), JSON.parse(JSON.stringify(n))
            }
            return {}
        }, t.debounce = function(e, t, n) {
            var o = 0;
            return function() {
                for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
                var i = this,
                    E = n && !o;
                clearTimeout(o), o = setTimeout((function() {
                    o = null, n || e.apply(i, r)
                }), t), E && e.apply(i, r)
            }
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, r = (a.EPHEMERAL_STORAGE = {
            INIT_DATA: "initData",
            BROWSER_DETAILS: "browserDetails",
            UNIFIED_LOGS: "unifiedLogs"
        }, a.PERSISTENT_STORAGE = {
            USER_DATA: "USER_DATA",
            PUSH_TOKEN: "PUSH_TOKEN",
            SUBSCRIPTION_DETAILS: "SUBSCRIPTION_DETAILS",
            SETUP_TIME: "SETUP_TIME",
            OPT_IN_SHOWN_TIME: "OPT_IN_SHOWN_TIME",
            SOFT_ASK_STATUS: "SOFT_ASK_STATUS",
            HARD_ASK_STATUS: "HARD_ASK_STATUS",
            WEB_SETTINGS: "WEB_SETTINGS",
            GRACEFUL_DATA: "GRACEFUL_DATA",
            Q: {
                PREFIX: "Q",
                REPORT: "REPORT",
                DEVICE: "DEVICE"
            },
            INIT_DATA: "INIT_DATA",
            OLD_SDK: {
                USER_DATA: "moengage_data",
                SUBSCRIPTION_DETAILS: "MOE_PUSH_ENDPOINT",
                PUSH_TOKEN: "MOE_PUSH_TOKEN"
            },
            BROWSER_DETAILS: "browserDetails",
            SESSION: "SESSION"
        }, a.COOKIE_STORAGE = {
            SESSION_COOKIE: {
                EXPIRY_YEARS: 2
            }
        }, a.EVENT_NAMES = {
            USER_ATTRIBUTE: "EVENT_ACTION_USER_ATTRIBUTE",
            UNSUBSCRIBED: "MOE_WEB_UNSUBSCRIBED",
            WEB_SESSION_START: "EVENT_ACTION_WEB_SESSION_START",
            PAGE_VIEWED: "MOE_PAGE_VIEWED",
            WEB_OPTIN_BANNER_LOAD: "MOE_WEB_OPTIN_BANNER_LOAD",
            WEB_OPTIN_CLOSED: "MOE_WEB_OPTIN_CLOSED",
            WEB_OPTIN_ACCEPTED: "MOE_WEB_OPTIN_ACCEPTED",
            USER_SUBSCRIBED: "MOE_USER_SUBSCRIBED",
            OPT_IN_SHOWN: "MOE_OPT_IN_SHOWN",
            OPT_IN_ALLOWED: "MOE_OPT_IN_ALLOWED",
            OPT_IN_DISMISSED: "MOE_OPT_IN_DISMISSED",
            OPT_IN_BLOCKED: "MOE_OPT_IN_BLOCKED",
            USER_SUBSCRIPTION_CHECK: "MOE_USER_SUBSCRIPTION_CHECK",
            LOGOUT: "MOE_LOGOUT",
            UPDATE_DEVICE_ATTRIBUTE: "EVENT_ACTION_DEVICE_ATTRIBUTE"
        }, a.EVENT_ATTRIBUTES_NAMES = {
            URL: "URL",
            LOGGED_IN_STATUS: "moe_logged_in_status",
            FIRST_VISIT: "moe_first_visit"
        }, a.ATTRIBUTE_NAMES = {
            ID: "USER_ATTRIBUTE_UNIQUE_ID",
            EMAIL: "USER_ATTRIBUTE_USER_EMAIL",
            NAME: "USER_ATTRIBUTE_USER_NAME",
            FIRST_NAME: "USER_ATTRIBUTE_USER_FIRST_NAME",
            LAST_NAME: "USER_ATTRIBUTE_USER_LAST_NAME",
            MOBILE: "USER_ATTRIBUTE_USER_MOBILE",
            GENDER: "USER_ATTRIBUTE_USER_GENDER",
            BDAY: "USER_ATTRIBUTE_USER_BDAY",
            ID_MODIFIED: "USER_ID_MODIFIED_FROM"
        }, a.SDK_FEATURES = {
            WEB_PUSH: "WEB_PUSH"
        }, a.BROADCAST_TOPICS = {
            MOE_LIFECYCLE: {
                TOPIC_NAME: "MOE_LIFECYCLE",
                EVENT_NAMES: {
                    MOE_INIT: "SDK_INITIALIZED",
                    SETTINGS_FETCHED: "SETTINGS_FETCHED"
                }
            },
            OPT_IN_LIFECYCLE: {
                TOPIC_NAME: "MOE_OPT_IN",
                EVENT_NAMES: {
                    HARD_ASK_SHOWN: "HARD_ASK_SHOWN",
                    HARD_ASK_DISMISSED: "HARD_ASK_DISMISSED",
                    HARD_ASK_ALLOWED: "HARD_ASK_ALLOWED",
                    HARD_ASK_DENIED: "HARD_ASK_DENIED",
                    SOFT_ASK_SHOWN: "SOFT_ASK_SHOWN",
                    SOFT_ASK_DISMISSED: "SOFT_ASK_DISMISSED",
                    SOFT_ASK_ALLOWED: "SOFT_ASK_ALLOWED"
                }
            },
            INAPP_LIFECYCLE: {
                TOPIC_NAME: "INAPP_LIFECYCLE",
                EVENT_NAMES: {
                    MODULE_LOADED: "MODULE_LOADED"
                }
            }
        }, a.ERRORS = {
            WEB_PUSH_NOT_SUPPORTED: {
                code: 1e3,
                reason: "Web push not supported in current browser environment"
            },
            SERVICE_WORKER_REGISTRATION_FAILED: {
                code: 1001,
                reason: "Registering the service worker failed"
            },
            WEB_PUSH_NOT_CONFIGURED: {
                code: 1002,
                reason: "Web push settings not configured"
            },
            NOTIFICATION_MANAGER_NOT_CONFIGURED: {
                code: 1003,
                reason: "Could not configure a notification manager for the current browser and settings"
            },
            PERMISSION_DISMISSED_TOO_MANY_TIMES: {
                code: 1004,
                reason: "Hard ask was dismissed to many times"
            },
            SERVICE_WORKER_NOT_IN_CORRECT_SCOPE: {
                code: 1005,
                reason: "Service worker can not be registered on this page due to scope issues"
            }
        }, a.HTML_COMM = {
            CHANNEL: {
                MAIN: "moe",
                SUBD: "moe-subd"
            },
            TOPICS: {
                PERSISTENT_STORAGE: "STORAGE",
                EPHEMERAL_STORAGE: "EPHEMERAL_STORAGE",
                PERMISSION_STATE: "PERMISSION_STATE",
                CONFIG: "CONFIG",
                HARD_ASK_RESULT: "HARD_ASK_RESULT",
                SHOW_NOTIF: "SHOW_NOTIF"
            }
        }, a.GIFS = {
            AMAZED: "https://media.giphy.com/media/90F8aUepslB84/giphy.gif",
            SAD: "https://media.giphy.com/media/KDRv3QggAjyo/giphy.gif"
        }, a.DEPRECATED_CLUSTERS = {
            dc_1: "us",
            dc_2: "eu",
            dc_3: "in"
        }, a.CLUSTERS = {
            dc_1: "DC_1",
            dc_2: "DC_2",
            dc_3: "DC_3"
        }, a.CLUSTER_ENVIRONMENT_MAP = {
            DC_2: "sdk-02.moengage.com",
            DC_3: "sdk-03.moengage.com",
            eu: "sdk-02.moengage.com",
            in: "sdk-03.moengage.com"
        }, a.LINKS = {
            MOE_DASHBOARD: "https://app.moengage.com",
            MIGRATION_DOCS: "https://docs.moengage.com/docs/web-sdk-integration",
            WEBSDK_DOCS: "https://docs.moengage.com/docs/web-sdk-integration",
            SELF_HANDLED_DOCS: "https://docs.moengage.com/docs/self-handled-opt-ins"
        }, a.WEB_SDK_API_MAX_RETRIES = 3, a.ADD_REPORT_API_MAX_RETRIES = 3, a.PUSH_SETTINGS_PAGE_LINK = "Dashboard --\x3e Settings --\x3e Channel --\x3e Push", a.SESSION_SOURCE = {
            SESSION: "SESSION",
            SESSION_KEY: "sessionKey",
            SESSION_START_TIME: "sessionStartTime",
            SESSION_EXPIRY_TIME: "sessionExpiryTime",
            SESSION_MAX_TIME: "sessionMaxTime",
            SESSION_ENABLED: "sessionEnabled",
            CUSTOM_IDENTIFIERS_TO_TRACK: "customIdentifiersToTrack",
            CURRENT_SOURCE: "currentSource",
            NUMBER_OF_SESSIONS: "numberOfSessions"
        }, a.CONFIG = {
            HOST: "https://apiv2.moengage.com/",
            API: {
                META: "v3/sdkconfig/"
            }
        }, a.EVENTS = {
            DATABASE_NAME: "moe_tracking",
            STORE_NAME: "events"
        }, a.AMP = {
            UUID: "moe_uuid"
        }, a.BRANCH = "master", a.SEGMENT_CLUSTER = "moe_segment_cluster", a.SEGMENT_SW_PATH = "moe_segment_sw_path", a.SEGMENT_SW_SCOPE = "moe_segment_sw_scope", a);

        function a() {}
        t.default = r, t.WINDOW_OBJECTS = {
            PageEventHistoryManager: "MoengagePageEventHistoryManager"
        }, t.INAPP_CONSTANTS = {
            HOST_1: "https://sdk-01.moengage.com/",
            HOST_2: "https://sdk-02.moengage.com/",
            HOST_3: "https://sdk-03.moengage.com/",
            API: {
                META: "v3/campaigns/inapp/live",
                CAMPAIGN_PAYLOAD: "v3/campaigns/inapp/live/",
                DRAFT_CAMPAIGN_PAYLOAD: "v3/campaigns/inapp/test/"
            },
            DRAFT_CAMPAIGN_TPYES: {
                WEB_PERSONALIZATON: "web_personalization",
                ONSITE_MESSAGING: "onsite_messaging"
            },
            META_REFRESH_TIME: 9e5,
            DATABASE_NAME: "moe_onsite",
            STORES: {
                CAMPAIGNS_META: {
                    NAME: "campaigns_meta"
                },
                CAMPAIGNS_TAGS: {
                    NAME: "campaigns_tags"
                },
                CAMPAIGNS_STATS: {
                    NAME: "campaigns_stats"
                },
                TEST_CAMPAIGN_STORE: {
                    NAME: "test_campaign"
                },
                EXIT_INTENT_CAMPAIGN_STORE: {
                    NAME: "exit_intent"
                },
                SERVICE_META: {
                    NAME: "service_meta",
                    KEYS: {
                        LAST_META_CALL_TIME: "last_meta_call_time",
                        GLOBAL_DELAY: "global_delay_between_inapps",
                        LAST_INAPP_SHOWN_TIME: "last_inapp_shown",
                        LAST_FETCH_SDK_VERSION: "last_fetch_sdk_version",
                        UNIQUE_ID: "unique_id"
                    }
                }
            },
            EVENT_NAMES: {
                OSM: {
                    CLICK: "MOE_ONSITE_MESSAGE_CLICKED",
                    IMPRESSION: "MOE_ONSITE_MESSAGE_SHOWN",
                    DISMISS: "MOE_ONSITE_MESSAGE_DISMISSED",
                    AUTO_DISMIS: "MOE_ONSITE_MESSAGE_AUTO_DISMISS",
                    TYPE: "onsite"
                },
                WP: {
                    CLICK: "MOE_WEBP_MESSAGE_CLICKED",
                    IMPRESSION: "MOE_WEBP_MESSAGE_SHOWN",
                    DISMISS: "MOE_WEBP_MESSAGE_DISMISSED",
                    DELIVERED: "MOE_WEBP_MESSAGE_DELIVERED",
                    TYPE: "webp"
                }
            },
            WEB_HELPER_IFRAME_URL: "https://cdn.moengage.com/webpush/beta/webpushhelper.html",
            IFRAME_CHANNEL: "inapp_helper",
            IFRAME_TOPICS: {
                COOKIE_STORAGE: "COOKIE_STORAGE"
            },
            COOKIE_STORAGE: {
                TEST_DRAFT_TYPE: "moe_inapp_draft_type",
                TEST_DRAFT_ID: "moe_inapp_draft_id",
                TEST_DRAFT_TAG: "moe_inapp_draft_tag",
                TEST_CAMPAIGN_META: "test_campaign_meta",
                TEST_TEMPLATE_TYPE: "test_template_type",
                TEST_VARIATION: "moe_inapp_draft_variation",
                TEST_LOCALE: "moe_inapp_draft_locale"
            },
            CSS_SELECTORS: {
                CLICK_INAPP: "moe-inapp-click",
                DISMISS_INAPP: "moe-inapp-close"
            },
            EXIT_INTENT: {
                CONFIG: {
                    SCROLL_DOWN_THRESHOLD: 50,
                    SCROLL_UP_THRESHOLD: 5,
                    SCROLL_INTERVAL: 1e3
                }
            },
            POSITIONED_TEMPLATE: 'data-editor-type="MOE_EDITOR"',
            SIDE_BANNER: 'data-template-type="SIDE_BANNER"',
            GCG_ERROR_CODE: "E001"
        }, t.SDK_MODULES = {
            INAPP: {
                name: "INAPP",
                src: "https://cdn.moengage.com/webpush/modules/inapp.js",
                windowLocation: "moeOnsite"
            }
        }, (o = t.SESSION_SOURCE_STATUS || (t.SESSION_SOURCE_STATUS = {})).BLOCKED = "blocked", o.ALLOWED = "allowed", t.OFFLINE = {
            DATABASE_NAME: "moe_database",
            OFFLINE_SYNC_EVENT: "moe_offline_data_sync",
            STORES: {
                OFFLINE_DATA: {
                    NAME: "offline_data"
                }
            }
        }, t.BATCH = {
            API: {
                REPORT_ADD: "v2/sdk/report/"
            },
            CONFIG: {
                TIME_BETWEEN_BATCHES: 15e3
            }
        }, t.DATA_TYPES = {
            NUMBER: "number"
        }, t.PAGE_LIFE_CYCLE = {
            FIRST_SEEN_SESSIONS: 1
        }
    },
    12: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            r = n(1),
            a = n(0),
            i = (E.set = function(e, t) {
                var n = E.baseTag + ".set";
                if (null == t) E.remove(e);
                else {
                    t = "boolean" == typeof t ? JSON.stringify({
                        actualValue: t,
                        MOE_DATA_TYPE: "boolean"
                    }) : "string" == typeof t ? JSON.stringify({
                        actualValue: t,
                        MOE_DATA_TYPE: "string"
                    }) : JSON.stringify(t), o.default.log(3, n, "Setting ", e, ":", t);
                    var a = Date.now(),
                        i = ";expires=" + new Date(a + 31536e6 * r.default.COOKIE_STORAGE.SESSION_COOKIE.EXPIRY_YEARS).toUTCString();
                    document.cookie = e + "=" + encodeURIComponent(t) + i + ";domain=" + E.getOrigin() + ";path=/;SameSite=None; Secure"
                }
            }, E.get = function(e) {
                for (var t = E.baseTag + ".get", n = e + "=", r = decodeURIComponent(document.cookie).split(";"), i = r.length - 1; 0 <= i; i--) {
                    for (var _ = r[i];
                        " " === _.charAt(0);) _ = _.substring(1);
                    if (0 === _.indexOf(n)) {
                        var s = _.substring(n.length, _.length);
                        try {
                            s = JSON.parse(s), "string" === a.getProp(s, "MOE_DATA_TYPE", null) ? s = (s = a.getProp(s, "actualValue", null)) ? String(s) : null : "boolean" === a.getProp(s, "MOE_DATA_TYPE", null) && (s = a.getProp(s, "actualValue", null))
                        } catch (e) {}
                        return o.default.log(3, t, "Got ", e, ":", s), s
                    }
                }
                return null
            }, E.remove = function(e) {
                var t = E.baseTag + ".remove";
                document.cookie = e + "=;domain=" + E.getOrigin() + ";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;", o.default.log(3, t, "Removed ", e)
            }, E.setRaw = function(e, t, n) {
                var r = E.baseTag + ".setRaw";
                if (null == t) E.remove(e);
                else {
                    o.default.log(3, r, "Setting ", e, ":", t);
                    var a = "";
                    null != n && (a = ";expires=" + n.toISOString()), document.cookie = e + "=" + encodeURIComponent(t) + a + ";domain=" + E.getOrigin() + ";path=/;"
                }
            }, E.getOrigin = function() {
                var e = E.baseTag + ".getOrigin",
                    t = window.location.origin;
                return t = t.indexOf(".") !== t.lastIndexOf(".") ? t.substring(t.indexOf(".")) : "." + t.substring(t.lastIndexOf("/") + 1), "localhost" === window.location.hostname && (o.default.warn(1, e, "Cross domain user persitence will not work with localhost. \n\nWe will save the key-value pairs in the localhost cookie store for reference. You'll be able to test this functionality in a hosted staging/test environment."), t = ""), t
            }, E.baseTag = "CookieStorage", E);

        function E() {}
        t.default = i
    },
    15: function(e, t) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
            var o = new Uint8Array(16);
            e.exports = function() {
                return n(o), o
            }
        } else {
            var r = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
                return r
            }
        }
    },
    16: function(e, t) {
        for (var n = [], o = 0; o < 256; ++o) n[o] = (o + 256).toString(16).substr(1);
        e.exports = function(e, t) {
            var o = t || 0;
            return [n[e[o++]], n[e[o++]], n[e[o++]], n[e[o++]], "-", n[e[o++]], n[e[o++]], "-", n[e[o++]], n[e[o++]], "-", n[e[o++]], n[e[o++]], "-", n[e[o++]], n[e[o++]], n[e[o++]], n[e[o++]], n[e[o++]], n[e[o++]]].join("")
        }
    },
    18: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0),
            r = n(6),
            a = (i.prototype.sendMessage = function(e, t) {
                var n = this;
                return new Promise((function(o, a) {
                    var i = {
                        id: r.v4(),
                        channel: n.channel,
                        topic: e,
                        message: t
                    };
                    n.addToListener(i, o, a), n.target instanceof HTMLIFrameElement ? n.target.contentWindow.postMessage(i, n.target.src) : n.target.postMessage(i, "*")
                }))
            }, i.listenToChannel = function(e, t, n) {
                window.addEventListener("message", (function(o) {
                    o.data && o.data.channel && o.data.topic && o.data.channel === e && o.data.topic === t && n(o.data, (function(n) {
                        var r = {
                            id: o.data.id,
                            channel: e,
                            topic: t,
                            message: n
                        };
                        o.source.postMessage(r, o.origin)
                    }))
                }))
            }, i.prototype.addToListener = function(e, t, n) {
                var r = this;
                i.pendingPromises[e.id] = {
                    resolve: t,
                    reject: n
                }, window.addEventListener("message", (function(e) {
                    e.data && o.getProp(e.data, "channel", null) === r.channel && null != i.pendingPromises[e.data.id] && (i.pendingPromises[e.data.id].resolve(e.data), delete i.pendingPromises[e.data.id])
                }))
            }, i.pendingPromises = {}, i);

        function i(e, t) {
            this.channel = e, this.target = t
        }
        t.default = a
    },
    2: function(e, t, n) {
        "use strict";
        var o = this && this.__read || function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var o, r, a = n.call(e),
                    i = [];
                try {
                    for (;
                        (void 0 === t || 0 < t--) && !(o = a.next()).done;) i.push(o.value)
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (n = a.return) && n.call(a)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return i
            },
            r = this && this.__spread || function() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
                return e
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(7),
            i = n(1),
            E = "color: white; background: #41AE55; border-radius: 5px;",
            _ = "color: white; background: #48beab; border-radius: 5px;",
            s = (S.setLogLevel = function(e, t) {
                var n = S.baseLogTag + ".setLogLevel";
                null == a.default.get(i.default.EPHEMERAL_STORAGE.UNIFIED_LOGS) && a.default.set(i.default.EPHEMERAL_STORAGE.UNIFIED_LOGS, []), null == e ? S.logLevel = 0 : e in [0, 1, 2] ? 0 < (S.logLevel = e) && t && S.releaseAllLogs() : S.warn(0, n, "Value", e, "not supported for setDebugLevel(). Current log level is", S.logLevel, ". Debug level can only be [0, 1, 2]")
            }, S.log = function(e, t, n) {
                for (var o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
                e <= S.logLevel ? console.log.apply(console, r(["%c " + S.logBrand + " %c %c info %c %c " + t + " ", E, "", "color: white; background: #18a0bf; border-radius: 5px;", "", _, n], o)) : S.cacheLog((function() {
                    S.log.apply(S, r([e, t, n], o))
                }))
            }, S.error = function(e, t, n) {
                for (var o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
                e <= S.logLevel ? console.error.apply(console, r(["%c " + S.logBrand + " %c %c error %c %c " + t + " ", E, "", "color: white; background: #cc0a0a; border-radius: 5px;", "", _, n], o)) : S.cacheLog((function() {
                    S.error.apply(S, r([e, t, n], o))
                }))
            }, S.warn = function(e, t, n) {
                for (var o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
                e <= S.logLevel ? console.warn.apply(console, r(["%c " + S.logBrand + " %c %c warn %c %c " + t + " ", E, "", "color: white; background: #e8ab51; border-radius: 5px;", "", _, n], o)) : S.cacheLog((function() {
                    S.warn.apply(S, r([e, t, n], o))
                }))
            }, S.customLabel = function(e, t, n) {
                for (var o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
                e <= S.logLevel ? console.log.apply(console, r(["%c " + S.logBrand + " %c %c " + t + " %c %c " + n + " %c ", E, "", _, "", "color: white; background: #a400ff; border-radius: 5px;", ""], o)) : S.cacheLog((function() {
                    S.customLabel.apply(S, r([e, t, n], o))
                }))
            }, S.image = function(e, t) {
                e <= S.logLevel ? console.log("%c+", "font-size: 1px; padding: 20px 80px; line-height: 45px; background: url(" + t + "); background-size: 160px 90px; color: transparent;") : S.cacheLog((function() {
                    S.image(e, t)
                }))
            }, S.releaseAllLogs = function() {
                var e = a.default.get(i.default.EPHEMERAL_STORAGE.UNIFIED_LOGS),
                    t = e.length,
                    n = e;
                if (a.default.set(i.default.EPHEMERAL_STORAGE.UNIFIED_LOGS, []), 0 < t) {
                    S.log(0, "Logger.releaseAllLogs", "<---- HISTORICAL LOGS BEGIN ----\x3e");
                    for (var o = 0; o < t; o++) n[o]();
                    S.log(0, "Logger.releaseAllLogs", "<---- HISTORICAL LOGS END ----\x3e")
                }
            }, S.setLogBrand = function(e) {
                S.logBrand = e
            }, S.setBrandColor = function(e) {
                E = "color: white; background: " + e + "; border-radius: 5px;"
            }, S.cacheLog = function(e) {
                var t = a.default.get(i.default.EPHEMERAL_STORAGE.UNIFIED_LOGS);
                null == t && (t = []), t.push(e), a.default.set(i.default.EPHEMERAL_STORAGE.UNIFIED_LOGS, t)
            }, S.baseLogTag = "Logger", S.logBrand = "MoEngage", S.logLevel = 0, S);

        function S() {}
        t.default = s
    },
    24: function(e, t, n) {
        var o, r, a = n(15),
            i = n(16),
            E = 0,
            _ = 0;
        e.exports = function(e, t, n) {
            var s = t && n || 0,
                S = t || [],
                l = (e = e || {}).node || o,
                c = void 0 !== e.clockseq ? e.clockseq : r;
            if (null == l || null == c) {
                var T = a();
                null == l && (l = o = [1 | T[0], T[1], T[2], T[3], T[4], T[5]]), null == c && (c = r = 16383 & (T[6] << 8 | T[7]))
            }
            var u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                A = void 0 !== e.nsecs ? e.nsecs : _ + 1,
                O = u - E + (A - _) / 1e4;
            if (O < 0 && void 0 === e.clockseq && (c = c + 1 & 16383), (O < 0 || E < u) && void 0 === e.nsecs && (A = 0), 1e4 <= A) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            E = u, r = c;
            var I = (1e4 * (268435455 & (u += 122192928e5)) + (_ = A)) % 4294967296;
            S[s++] = I >>> 24 & 255, S[s++] = I >>> 16 & 255, S[s++] = I >>> 8 & 255, S[s++] = 255 & I;
            var d = u / 4294967296 * 1e4 & 268435455;
            S[s++] = d >>> 8 & 255, S[s++] = 255 & d, S[s++] = d >>> 24 & 15 | 16, S[s++] = d >>> 16 & 255, S[s++] = c >>> 8 | 128, S[s++] = 255 & c;
            for (var p = 0; p < 6; ++p) S[s + p] = l[p];
            return t || i(S)
        }
    },
    25: function(e, t, n) {
        var o = n(15),
            r = n(16);
        e.exports = function(e, t, n) {
            var a = t && n || 0;
            "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
            var i = (e = e || {}).random || (e.rng || o)();
            if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
                for (var E = 0; E < 16; ++E) t[a + E] = i[E];
            return t || r(i)
        }
    },
    6: function(e, t, n) {
        var o = n(24),
            r = n(25),
            a = r;
        a.v1 = o, a.v4 = r, e.exports = a
    },
    69: function(e, t, n) {
        "use strict";

        function o() {
            for (var e = window.location.search.substring(1).split("&"), t = {}, n = 0; n < e.length; n++) {
                var o = e[n].split("="),
                    r = decodeURIComponent(o[0]),
                    a = decodeURIComponent(o[1]);
                if (void 0 === t[r]) t[r] = decodeURIComponent(a);
                else if ("string" == typeof t[r]) {
                    var i = [t[r], decodeURIComponent(a)];
                    t[r] = i
                } else t[r].push(decodeURIComponent(a))
            }
            return t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(18),
            a = n(1),
            i = n(12),
            E = n(0);
        window.getParams = o;

        function _(e, t, n) {
            document.cookie = e + "=" + t + ";expires=" + n.toUTCString() + ";domain=.moengage.com;path=/;SameSite=None; Secure"
        }! function(e) {
            if (E.getProp(e, "action") && "inapp_test" === e.action) {
                var t = e.redirect_url,
                    n = e.draft_id,
                    o = e.draft_campaign_tag,
                    r = e.draft_type || a.INAPP_CONSTANTS.DRAFT_CAMPAIGN_TPYES.WEB_PERSONALIZATON,
                    i = e.template_type || null,
                    s = e.campaign_meta || null,
                    S = e.locale || null,
                    l = e.variation || null;
                if (null == t) return console.error("Please specify a 'redirect_url' in the queryParams");
                if (null == n) return console.error("Please specify a 'draft_id' in the queryParams");
                if (r === a.INAPP_CONSTANTS.DRAFT_CAMPAIGN_TPYES.WEB_PERSONALIZATON && null == o) return console.error("Please specify a 'draft_campaign_tag' in the queryParams");
                var c = new Date;
                c.setTime(c.getTime() + 3e4), _(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_DRAFT_TYPE, r, c), _(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_DRAFT_ID, n, c), _(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_DRAFT_TAG, o, c), _(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_CAMPAIGN_META, s, c), _(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_TEMPLATE_TYPE, i, c), _(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_LOCALE, S, c), _(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_VARIATION, l, c), window.location.href = t
            }
        }(o()), r.default.listenToChannel(a.INAPP_CONSTANTS.IFRAME_CHANNEL, a.INAPP_CONSTANTS.IFRAME_TOPICS.COOKIE_STORAGE, (function(e, t) {
            if (e.message && "GET" === e.message.TYPE)
                if (e.message.KEY === a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_DRAFT_ID) {
                    var n = i.default.get(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_DRAFT_ID);
                    if (null == n) t();
                    else try {
                        t({
                            draft_type: i.default.get(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_DRAFT_TYPE),
                            draft_id: n,
                            draft_tag: i.default.get(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_DRAFT_TAG),
                            campaign_meta: i.default.get(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_CAMPAIGN_META),
                            template_type: i.default.get(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_TEMPLATE_TYPE),
                            locale: i.default.get(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_LOCALE),
                            variation: i.default.get(a.INAPP_CONSTANTS.COOKIE_STORAGE.TEST_VARIATION)
                        })
                    } catch (e) {
                        console.error(e), t()
                    }
                } else t()
        })), window.getParams = o
    },
    7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0),
            r = (a.set = function(e, t) {
                window && (window.moeInternals ? window.moeInternals.ephemeral || (window.moeInternals.ephemeral = {}) : (window.moeInternals = {}, window.moeInternals.ephemeral = {}), window.moeInternals.ephemeral[e] = t)
            }, a.get = function(e) {
                return o.getProp(window, "moeInternals.ephemeral." + e, null)
            }, a.baseLogTag = "EphemeralStorage", a);

        function a() {}
        t.default = r
    }
});