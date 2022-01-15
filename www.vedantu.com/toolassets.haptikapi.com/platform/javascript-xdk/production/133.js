(window.webpackJsonpXDK = window.webpackJsonpXDK || []).push([
    [133], {
        183: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return r
            });
            var n = function(e) {
                    return e.sdk.SDK
                },
                r = function(e) {
                    return e.sdk.Voice
                }
        },
        210: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(4),
                s = a.n(o),
                i = function(e) {
                    var t = e.primaryColor,
                        a = e.disabled;
                    return r.a.createElement("svg", {
                        fill: a ? "#BABABA" : t,
                        viewBox: "0 0 24 24",
                        height: "20",
                        width: "20",
                        className: "transition-ease-point-3-s"
                    }, r.a.createElement("path", {
                        d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                    }), r.a.createElement("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }))
                };
            i.propTypes = {
                primaryColor: s.a.string,
                disabled: s.a.bool
            }, t.a = i
        },
        211: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n);
            t.a = function(e) {
                var t = e.primaryColor,
                    a = e.disabled;
                return r.a.createElement("svg", {
                    width: "24px",
                    height: "24px",
                    viewBox: "0 0 32 32",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("g", {
                    id: "Symbols",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd"
                }, r.a.createElement("g", {
                    id: "Footer/Active-Taskbox",
                    transform: "translate(-16.000000, -12.000000)"
                }, r.a.createElement("g", {
                    id: "Taskbox",
                    transform: "translate(16.000000, 12.000000)"
                }, r.a.createElement("g", {
                    id: "Group"
                }, r.a.createElement("rect", {
                    id: "Rectangle",
                    fill: t,
                    x: "0",
                    y: "0",
                    width: "32",
                    height: "32",
                    rx: "8"
                }), r.a.createElement("g", {
                    id: "icon/arrow/up",
                    stroke: "#FFFFFF",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    style: {
                        transformOrigin: "50% 50%",
                        transition: "0.2s ease-out",
                        transform: "rotate(".concat(a ? 180 : 0, "deg) translate(4px, 4px)")
                    }
                }, r.a.createElement("polyline", {
                    id: "Path-2",
                    transform: "translate(12.000000, 12.000000) scale(1, -1) translate(-12.000000, -12.000000) ",
                    points: "6 9 12 15 18 9"
                })))))))
            }
        },
        212: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(4),
                s = a.n(o),
                i = function(e) {
                    var t = e.backgroundColor,
                        a = e.backgroundColorDisabled,
                        n = e.disabled;
                    return r.a.createElement("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none"
                    }, r.a.createElement("path", {
                        d: "M7.20591 18L19.2002 12L7.20591 6L7.2002 10.6667L15.7716 12L7.2002 13.3333L7.20591 18Z",
                        fill: n ? a : t
                    }))
                };
            i.propTypes = {
                backgroundColor: s.a.string,
                backgroundColorDisabled: s.a.string,
                disabled: s.a.bool
            }, i.defaultProps = {
                backgroundColor: "#3498db",
                disabled: !1,
                backgroundColorDisabled: "#3498db"
            }, t.a = i
        },
        213: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n);
            t.a = function() {
                return r.a.createElement("a", {
                    href: "https://www.haptik.ai/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, r.a.createElement("svg", {
                    width: "140",
                    height: "22",
                    viewBox: "0 0 101 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M3.146 4.146C4.17267 4.146 4.92067 4.34767 5.39 4.751C5.85933 5.15433 6.094 5.72267 6.094 6.456C6.094 6.88867 5.995 7.29567 5.797 7.677C5.60633 8.051 5.28 8.35533 4.818 8.59C4.36333 8.82467 3.74367 8.942 2.959 8.942H2.057V12H1.067V4.146H3.146ZM3.058 4.993H2.057V8.095H2.849C3.597 8.095 4.15433 7.974 4.521 7.732C4.88767 7.49 5.071 7.07933 5.071 6.5C5.071 5.994 4.906 5.61633 4.576 5.367C4.25333 5.11767 3.74733 4.993 3.058 4.993ZM12.7212 9.041C12.7212 10.0163 12.4718 10.7717 11.9732 11.307C11.4818 11.8423 10.8145 12.11 9.97116 12.11C9.45049 12.11 8.98482 11.9927 8.57416 11.758C8.17082 11.516 7.85182 11.1677 7.61716 10.713C7.38249 10.251 7.26516 9.69367 7.26516 9.041C7.26516 8.06567 7.50716 7.314 7.99116 6.786C8.48249 6.258 9.15349 5.994 10.0042 5.994C10.5322 5.994 11.0015 6.115 11.4122 6.357C11.8228 6.59167 12.1418 6.93633 12.3692 7.391C12.6038 7.83833 12.7212 8.38833 12.7212 9.041ZM8.26616 9.041C8.26616 9.73767 8.40182 10.2913 8.67316 10.702C8.95182 11.1053 9.39182 11.307 9.99316 11.307C10.5872 11.307 11.0235 11.1053 11.3022 10.702C11.5808 10.2913 11.7202 9.73767 11.7202 9.041C11.7202 8.34433 11.5808 7.798 11.3022 7.402C11.0235 7.006 10.5835 6.808 9.98216 6.808C9.38082 6.808 8.94449 7.006 8.67316 7.402C8.40182 7.798 8.26616 8.34433 8.26616 9.041ZM18.8585 11.989L17.8465 8.667C17.7511 8.36633 17.6668 8.073 17.5935 7.787C17.5201 7.501 17.4688 7.27367 17.4395 7.105H17.3955C17.3661 7.27367 17.3185 7.501 17.2525 7.787C17.1865 8.073 17.1021 8.37 16.9995 8.678L15.9435 11.989H14.8435L13.2265 6.093H14.2275L15.0415 9.239C15.1221 9.55433 15.1991 9.87333 15.2725 10.196C15.3458 10.5187 15.3971 10.7863 15.4265 10.999H15.4705C15.4925 10.8743 15.5255 10.7203 15.5695 10.537C15.6135 10.3537 15.6611 10.163 15.7125 9.965C15.7638 9.75967 15.8151 9.57633 15.8665 9.415L16.9115 6.093H17.9675L18.9795 9.415C19.0528 9.67167 19.1298 9.94667 19.2105 10.24C19.2911 10.5333 19.3461 10.7827 19.3755 10.988H19.4195C19.4415 10.8047 19.4891 10.5517 19.5625 10.229C19.6431 9.90633 19.7275 9.57633 19.8155 9.239L20.6405 6.093H21.6305L19.9915 11.989H18.8585ZM24.9649 5.994C25.4636 5.994 25.8963 6.104 26.2629 6.324C26.6296 6.544 26.9083 6.85567 27.0989 7.259C27.2969 7.655 27.3959 8.12067 27.3959 8.656V9.239H23.3589C23.3736 9.90633 23.5423 10.416 23.8649 10.768C24.1949 11.1127 24.6533 11.285 25.2399 11.285C25.6139 11.285 25.9439 11.252 26.2299 11.186C26.5233 11.1127 26.8239 11.01 27.1319 10.878V11.725C26.8313 11.857 26.5343 11.9523 26.2409 12.011C25.9476 12.077 25.5993 12.11 25.1959 12.11C24.6313 12.11 24.1363 11.9963 23.7109 11.769C23.2856 11.5417 22.9519 11.2043 22.7099 10.757C22.4753 10.3097 22.3579 9.756 22.3579 9.096C22.3579 8.45067 22.4643 7.897 22.6769 7.435C22.8969 6.973 23.2013 6.61733 23.5899 6.368C23.9859 6.11867 24.4443 5.994 24.9649 5.994ZM24.9539 6.786C24.4919 6.786 24.1253 6.93633 23.8539 7.237C23.5899 7.53033 23.4323 7.941 23.3809 8.469H26.3839C26.3766 7.97033 26.2593 7.567 26.0319 7.259C25.8046 6.94367 25.4453 6.786 24.9539 6.786ZM31.6469 5.994C31.7569 5.994 31.8742 6.00133 31.9989 6.016C32.1236 6.02333 32.2372 6.038 32.3399 6.06L32.2189 6.951C32.1236 6.929 32.0172 6.91067 31.8999 6.896C31.7826 6.88133 31.6762 6.874 31.5809 6.874C31.2802 6.874 30.9979 6.95833 30.7339 7.127C30.4699 7.28833 30.2572 7.51933 30.0959 7.82C29.9419 8.11333 29.8649 8.458 29.8649 8.854V12H28.8969V6.104H29.6889L29.7989 7.182H29.8429C30.0262 6.85933 30.2682 6.58067 30.5689 6.346C30.8769 6.11133 31.2362 5.994 31.6469 5.994ZM35.503 5.994C36.0017 5.994 36.4343 6.104 36.801 6.324C37.1677 6.544 37.4463 6.85567 37.637 7.259C37.835 7.655 37.934 8.12067 37.934 8.656V9.239H33.897C33.9117 9.90633 34.0803 10.416 34.403 10.768C34.733 11.1127 35.1913 11.285 35.778 11.285C36.152 11.285 36.482 11.252 36.768 11.186C37.0613 11.1127 37.362 11.01 37.67 10.878V11.725C37.3693 11.857 37.0723 11.9523 36.779 12.011C36.4857 12.077 36.1373 12.11 35.734 12.11C35.1693 12.11 34.6743 11.9963 34.249 11.769C33.8237 11.5417 33.49 11.2043 33.248 10.757C33.0133 10.3097 32.896 9.756 32.896 9.096C32.896 8.45067 33.0023 7.897 33.215 7.435C33.435 6.973 33.7393 6.61733 34.128 6.368C34.524 6.11867 34.9823 5.994 35.503 5.994ZM35.492 6.786C35.03 6.786 34.6633 6.93633 34.392 7.237C34.128 7.53033 33.9703 7.941 33.919 8.469H36.922C36.9147 7.97033 36.7973 7.567 36.57 7.259C36.3427 6.94367 35.9833 6.786 35.492 6.786ZM41.525 12.11C40.7917 12.11 40.205 11.857 39.765 11.351C39.325 10.8377 39.105 10.075 39.105 9.063C39.105 8.051 39.325 7.28833 39.765 6.775C40.2123 6.25433 40.8027 5.994 41.536 5.994C41.9907 5.994 42.361 6.07833 42.647 6.247C42.9403 6.41567 43.1787 6.621 43.362 6.863H43.428C43.4133 6.76767 43.3987 6.62833 43.384 6.445C43.3693 6.25433 43.362 6.104 43.362 5.994V3.64H44.33V12H43.549L43.406 11.208H43.362C43.186 11.4573 42.9513 11.67 42.658 11.846C42.3647 12.022 41.987 12.11 41.525 12.11ZM41.679 11.307C42.3023 11.307 42.7387 11.1383 42.988 10.801C43.2447 10.4563 43.373 9.93933 43.373 9.25V9.074C43.373 8.34067 43.252 7.77967 43.01 7.391C42.768 6.995 42.3207 6.797 41.668 6.797C41.1473 6.797 40.755 7.006 40.491 7.424C40.2343 7.83467 40.106 8.38833 40.106 9.085C40.106 9.789 40.2343 10.3353 40.491 10.724C40.755 11.1127 41.151 11.307 41.679 11.307ZM50.028 3.64V5.675C50.028 5.92433 50.0207 6.159 50.006 6.379C49.9987 6.59167 49.9877 6.76033 49.973 6.885H50.028C50.1967 6.63567 50.4277 6.42667 50.721 6.258C51.0143 6.08933 51.392 6.005 51.854 6.005C52.5873 6.005 53.174 6.26167 53.614 6.775C54.0613 7.281 54.285 8.04 54.285 9.052C54.285 10.064 54.0613 10.8267 53.614 11.34C53.1667 11.8533 52.58 12.11 51.854 12.11C51.392 12.11 51.0143 12.0257 50.721 11.857C50.4277 11.6883 50.1967 11.4867 50.028 11.252H49.951L49.753 12H49.06V3.64H50.028ZM51.689 6.808C51.0583 6.808 50.622 6.98767 50.38 7.347C50.1453 7.70633 50.028 8.26367 50.028 9.019V9.063C50.028 9.789 50.1453 10.3463 50.38 10.735C50.622 11.1163 51.0657 11.307 51.711 11.307C52.239 11.307 52.6313 11.1127 52.888 10.724C53.152 10.3353 53.284 9.77433 53.284 9.041C53.284 7.55233 52.7523 6.808 51.689 6.808ZM54.6887 6.104H55.7227L56.9987 9.459C57.1087 9.75967 57.2077 10.042 57.2957 10.306C57.3837 10.57 57.4497 10.823 57.4937 11.065H57.5377C57.5817 10.8817 57.6514 10.6433 57.7467 10.35C57.8421 10.0493 57.9411 9.74867 58.0437 9.448L59.2427 6.104H60.2877L57.7467 12.814C57.5341 13.3713 57.2664 13.815 56.9437 14.145C56.6211 14.475 56.1737 14.64 55.6017 14.64C55.4257 14.64 55.2717 14.629 55.1397 14.607C55.0077 14.5923 54.8941 14.574 54.7987 14.552V13.782C54.8794 13.7967 54.9747 13.8113 55.0847 13.826C55.2021 13.8407 55.3231 13.848 55.4477 13.848C55.7851 13.848 56.0564 13.7527 56.2617 13.562C56.4671 13.3713 56.6321 13.1183 56.7567 12.803L57.0647 12.022L54.6887 6.104Z",
                    fill: "#909090"
                }), r.a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M93.4078 3.84693C93.4078 4.59375 92.8077 5.19387 92.0609 5.19387C91.3141 5.19387 90.714 4.59375 90.714 3.84693C90.714 3.10012 91.3141 2.5 92.0609 2.5C92.8077 2.5 93.4078 3.10012 93.4078 3.84693ZM67.3765 12.1326V8.19369C67.5746 7.96899 67.8518 7.69141 68.3931 7.69141C68.9609 7.69141 69.3173 7.91612 69.3173 8.57701V12.1326H71.6939V7.57245C71.6939 6.46215 71.0469 5.58978 69.5682 5.58978C68.4459 5.58978 67.7462 6.0524 67.3765 6.47537V3.31631H65V12.1326H67.3765ZM74.1419 12.296C74.9383 12.296 75.7215 11.9791 76.0799 11.5302V12.1375H78.4691V8.2823C78.4691 6.15664 76.9161 5.60212 75.3233 5.60212C74.3543 5.60212 73.1597 5.87938 72.2969 6.56593L73.1066 8.03144C73.611 7.64856 74.2879 7.41091 74.8852 7.41091C75.6684 7.41091 76.0799 7.75418 76.0799 8.20308V8.92924C75.7348 8.49354 74.9782 8.22949 74.1419 8.22949C73.1862 8.22949 71.9385 8.61237 71.9385 10.1967C71.9385 11.649 73.1862 12.296 74.1419 12.296ZM74.2237 10.2209C74.2237 10.6239 74.6659 10.7448 75.068 10.7448C75.4433 10.7448 75.8587 10.6239 76.0196 10.3955V10.0328C75.8587 9.80444 75.4433 9.68354 75.068 9.68354C74.6659 9.68354 74.2237 9.81787 74.2237 10.2209ZM81.4875 14.5V11.4205C82.0132 12.0233 82.6177 12.2461 83.2748 12.2461C84.8518 12.2461 86.0608 11.0929 86.0608 8.91754C86.0608 8.52402 86.0208 8.16392 85.9457 7.83811H86.8626V10.2971C86.8626 11.6252 87.6348 12.2959 89.0351 12.2959C89.8335 12.2959 90.3832 12.0986 90.6319 11.8751L90.213 10.0867C90.1607 10.1393 89.9513 10.2051 89.7419 10.2051C89.4278 10.2051 89.2184 9.94206 89.2184 9.61332V7.83811H90.501V5.78675H89.2184V4.05099H86.8626V5.78675H85.8155V7.39674C85.385 6.21913 84.4283 5.60212 83.2748 5.60212C82.6177 5.60212 82.0001 5.82489 81.4875 6.4277V5.75937H79.1221V14.5H81.4875ZM85.8155 7.39674C85.8665 7.53605 85.9101 7.6832 85.9457 7.83811H85.8155V7.39674ZM81.5713 9.73165C81.7783 9.99944 82.2313 10.1735 82.5289 10.1735C83.1501 10.1735 83.6937 9.71826 83.6937 8.9015C83.6937 8.09814 83.1501 7.6429 82.5289 7.6429C82.2313 7.6429 81.7913 7.80357 81.5713 8.08475V9.73165ZM93.1623 12.1327V5.84701H90.7949V12.1327H93.1623ZM96.2764 10.6919V12.1326H93.8982V3.31631H96.2764V8.02186L97.743 5.74839H100.61L98.4168 8.65631L100.755 12.1326H97.8355L96.7388 10.0706L96.2764 10.6919Z",
                    fill: "#909090"
                })))
            }
        },
        268: function(e, t, a) {
            var n = {
                "./af.js": [423, 3],
                "./ar-dz.js": [424, 4],
                "./ar-kw.js": [425, 6],
                "./ar-ly.js": [426, 7],
                "./ar-ma.js": [427, 8],
                "./ar-sa.js": [428, 9],
                "./ar-tn.js": [429, 10],
                "./ar.js": [430, 5],
                "./az.js": [431, 11],
                "./be.js": [432, 12],
                "./bg.js": [433, 13],
                "./bm.js": [434, 14],
                "./bn.js": [435, 15],
                "./bo.js": [436, 16],
                "./br.js": [437, 17],
                "./bs.js": [438, 18],
                "./ca.js": [439, 19],
                "./cs.js": [440, 20],
                "./cv.js": [441, 21],
                "./cy.js": [442, 22],
                "./da.js": [443, 23],
                "./de-at.js": [444, 24],
                "./de-ch.js": [445, 25],
                "./de.js": [446, 26],
                "./dv.js": [447, 27],
                "./el.js": [448, 28],
                "./en-SG.js": [449, 29],
                "./en-au.js": [450, 30],
                "./en-ca.js": [451, 31],
                "./en-gb.js": [452, 32],
                "./en-ie.js": [453, 33],
                "./en-il.js": [454, 34],
                "./en-nz.js": [455, 35],
                "./eo.js": [456, 36],
                "./es-do.js": [457, 37],
                "./es-us.js": [458, 39],
                "./es.js": [459, 38],
                "./et.js": [460, 40],
                "./eu.js": [461, 41],
                "./fa.js": [462, 42],
                "./fi.js": [463, 43],
                "./fo.js": [464, 44],
                "./fr-ca.js": [465, 45],
                "./fr-ch.js": [466, 46],
                "./fr.js": [467, 47],
                "./fy.js": [468, 48],
                "./ga.js": [469, 49],
                "./gd.js": [470, 50],
                "./gl.js": [471, 51],
                "./gom-latn.js": [472, 52],
                "./gu.js": [473, 53],
                "./he.js": [474, 54],
                "./hi.js": [475, 55],
                "./hr.js": [476, 56],
                "./hu.js": [477, 57],
                "./hy-am.js": [478, 58],
                "./id.js": [479, 59],
                "./is.js": [480, 60],
                "./it-ch.js": [481, 61],
                "./it.js": [482, 62],
                "./ja.js": [483, 63],
                "./jv.js": [484, 64],
                "./ka.js": [485, 65],
                "./kk.js": [486, 66],
                "./km.js": [487, 67],
                "./kn.js": [488, 68],
                "./ko.js": [489, 69],
                "./ku.js": [490, 70],
                "./ky.js": [491, 71],
                "./lb.js": [492, 72],
                "./lo.js": [493, 73],
                "./lt.js": [494, 74],
                "./lv.js": [495, 75],
                "./me.js": [496, 76],
                "./mi.js": [497, 77],
                "./mk.js": [498, 78],
                "./ml.js": [499, 79],
                "./mn.js": [500, 80],
                "./mr.js": [501, 81],
                "./ms-my.js": [502, 83],
                "./ms.js": [503, 82],
                "./mt.js": [504, 84],
                "./my.js": [505, 85],
                "./nb.js": [506, 86],
                "./ne.js": [507, 87],
                "./nl-be.js": [508, 88],
                "./nl.js": [509, 89],
                "./nn.js": [510, 90],
                "./pa-in.js": [511, 91],
                "./pl.js": [512, 92],
                "./pt-br.js": [513, 93],
                "./pt.js": [514, 94],
                "./ro.js": [515, 95],
                "./ru.js": [516, 96],
                "./sd.js": [517, 97],
                "./se.js": [518, 98],
                "./si.js": [519, 99],
                "./sk.js": [520, 100],
                "./sl.js": [521, 101],
                "./sq.js": [522, 102],
                "./sr-cyrl.js": [523, 103],
                "./sr.js": [524, 104],
                "./ss.js": [525, 105],
                "./sv.js": [526, 106],
                "./sw.js": [527, 107],
                "./ta.js": [528, 108],
                "./te.js": [529, 109],
                "./tet.js": [530, 110],
                "./tg.js": [531, 111],
                "./th.js": [532, 112],
                "./tl-ph.js": [533, 113],
                "./tlh.js": [534, 114],
                "./tr.js": [535, 115],
                "./tzl.js": [536, 116],
                "./tzm-latn.js": [537, 118],
                "./tzm.js": [538, 117],
                "./ug-cn.js": [539, 119],
                "./uk.js": [540, 120],
                "./ur.js": [541, 121],
                "./uz-latn.js": [542, 123],
                "./uz.js": [543, 122],
                "./vi.js": [544, 124],
                "./x-pseudo.js": [545, 125],
                "./yo.js": [546, 126],
                "./zh-cn.js": [547, 127],
                "./zh-hk.js": [548, 128],
                "./zh-tw.js": [549, 129]
            };

            function r(e) {
                if (!a.o(n, e)) return Promise.resolve().then(function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                });
                var t = n[e],
                    r = t[0];
                return a.e(t[1]).then(function() {
                    return a.t(r, 7)
                })
            }
            r.keys = function() {
                return Object.keys(n)
            }, r.id = 268, e.exports = r
        },
        552: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(4),
                s = a.n(o),
                i = a(16),
                l = a(13),
                c = a(24),
                u = (a(94), function(e) {
                    var t = e.primaryColor;
                    return r.a.createElement("div", {
                        className: "circular-loader"
                    }, r.a.createElement("span", {
                        className: "circular-loader-main"
                    }, r.a.createElement("span", {
                        className: "circular-loader-pseudo",
                        style: {
                            borderColor: t
                        }
                    })))
                });
            u.propTypes = {
                primaryColor: s.a.string
            };
            var d = u,
                p = a(32),
                m = function(e) {
                    var t = e.primaryColor;
                    switch (e.language) {
                        case "en":
                            return r.a.createElement("svg", {
                                width: "24px",
                                height: "24px",
                                viewBox: "0 0 24 24",
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, r.a.createElement("g", {
                                id: "Android-App",
                                stroke: "none",
                                strokeWidth: "1",
                                fill: "none",
                                fillRule: "evenodd"
                            }, r.a.createElement("g", {
                                id: "mockup-01",
                                transform: "translate(-246.000000, -40.000000)",
                                fill: "#FFFFFF"
                            }, r.a.createElement("g", {
                                id: "Group",
                                transform: "translate(246.000000, 36.000000)"
                            }, r.a.createElement("g", {
                                id: "ic_3d_rotation",
                                transform: "translate(0.000000, 4.000000)"
                            }, r.a.createElement("path", {
                                d: "M7.52,21.48 L8.85,20.16 L12.66,23.97 L12,24 C5.71,24 0.56,19.16 0.05,13 L1.55,13 C1.91,16.76 4.25,19.94 7.52,21.48 Z M12,4.4408921e-15 C18.29,4.4408921e-15 23.44,4.84 23.94,10.99 L22.44,10.99 C22.09,7.23 19.75,4.06 16.48,2.51 L15.15,3.84 L11.34,0.03 L12,4.4408921e-15 Z M14.6088773,14.4023438 L10.4389554,14.4023438 L9.50243194,17 L8.14891632,17 L11.9496976,7.046875 L13.0981351,7.046875 L16.9057523,17 L15.5590726,17 L14.6088773,14.4023438 Z M10.8354398,13.3222656 L14.2192288,13.3222656 L12.5239163,8.66699219 L10.8354398,13.3222656 Z",
                                id: "Combined-Shape",
                                fill: t || "#3C7FEB"
                            }))))));
                        case "hi":
                            return r.a.createElement("svg", {
                                width: "24px",
                                height: "24px",
                                viewBox: "0 0 24 24",
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, r.a.createElement("g", {
                                id: "Android-App",
                                stroke: "none",
                                strokeWidth: "1",
                                fill: "none",
                                fillRule: "evenodd"
                            }, r.a.createElement("g", {
                                id: "mockup-02",
                                transform: "translate(-249.000000, -40.000000)",
                                fill: "#FFFFFF"
                            }, r.a.createElement("g", {
                                id: "Group",
                                transform: "translate(249.000000, 32.000000)"
                            }, r.a.createElement("g", {
                                id: "ic_3d_rotation-copy",
                                transform: "translate(0.000000, 8.000000)"
                            }, r.a.createElement("path", {
                                d: "M7.52,21.48 L8.85,20.16 L12.66,23.97 L12,24 C5.71,24 0.56,19.16 0.05,13 L1.55,13 C1.91,16.76 4.25,19.94 7.52,21.48 Z M12,4.4408921e-15 C18.29,4.4408921e-15 23.44,4.84 23.94,10.99 L22.44,10.99 C22.09,7.23 19.75,4.06 16.48,2.51 L15.15,3.84 L11.34,0.03 L12,4.4408921e-15 Z M8.25632257,14.27 C8.59232257,14.662 9.18032257,15.124 10.0483226,15.124 C11.0983226,15.124 11.6163226,14.48 11.6163226,13.696 C11.6163226,12.912 11.0703226,12.45 10.0763226,12.45 L9.32032257,12.45 L9.32032257,11.512 L9.75432257,11.512 C10.6223226,11.512 11.2103226,10.994 11.2103226,10.154 C11.2103226,9.426 10.7483226,8.95 9.99232257,8.95 C9.39032257,8.95 9.01232257,9.23 8.77432257,9.566 L8.03232257,8.894 C8.41032257,8.404 9.09632257,7.998 10.0203226,7.998 C11.4343226,7.998 12.2743226,8.922 12.2743226,10.084 C12.2743226,10.952 11.7283226,11.568 11.2803226,11.792 L11.2803226,11.848 C11.5603226,11.918 11.8543226,12.072 12.1063226,12.296 C12.4423226,12.492 12.8763226,12.646 13.4363226,12.646 C13.9963226,12.646 14.3883226,12.506 14.6403226,12.352 L14.6403226,8.908 L13.1423226,8.908 L13.1423226,8.012 L17.3983226,8.012 L17.3983226,8.908 L15.7043226,8.908 L15.7043226,17 L14.6403226,17 L14.6403226,13.36 C14.4163226,13.458 14.1083226,13.556 13.7023226,13.556 C13.2963226,13.556 12.9463226,13.472 12.6523226,13.332 C12.6663226,13.444 12.6803226,13.556 12.6803226,13.682 C12.6803226,15.012 11.6723226,16.062 10.0483226,16.062 C8.83032257,16.062 7.97632257,15.46 7.52832257,14.998 L8.25632257,14.27 Z",
                                id: "Combined-Shape",
                                fill: t || "#3C7FEB"
                            }))))));
                        default:
                            return r.a.createElement("svg", {
                                width: "20px",
                                height: "20px",
                                viewBox: "0 0 20 20",
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, r.a.createElement("g", {
                                id: "Page-1",
                                stroke: "none",
                                strokeWidth: "1",
                                fill: "none",
                                fillRule: "evenodd"
                            }, r.a.createElement("path", {
                                d: "M9.99,0 C4.47,0 0,4.48 0,10 C0,15.52 4.47,20 9.99,20 C15.52,20 20,15.52 20,10 C20,4.48 15.52,0 9.99,0 Z M16.92,6 L13.97,6 C13.65,4.75 13.19,3.55 12.59,2.44 C14.43,3.07 15.96,4.35 16.92,6 Z M10,2.04 C10.83,3.24 11.48,4.57 11.91,6 L8.09,6 C8.52,4.57 9.17,3.24 10,2.04 Z M2.26,12 C2.1,11.36 2,10.69 2,10 C2,9.31 2.1,8.64 2.26,8 L5.64,8 C5.56,8.66 5.5,9.32 5.5,10 C5.5,10.68 5.56,11.34 5.64,12 L2.26,12 Z M3.08,14 L6.03,14 C6.35,15.25 6.81,16.45 7.41,17.56 C5.57,16.93 4.04,15.66 3.08,14 Z M6.03,6 L3.08,6 C4.04,4.34 5.57,3.07 7.41,2.44 C6.81,3.55 6.35,4.75 6.03,6 Z M10,17.96 C9.17,16.76 8.52,15.43 8.09,14 L11.91,14 C11.48,15.43 10.83,16.76 10,17.96 Z M12.34,12 L7.66,12 C7.57,11.34 7.5,10.68 7.5,10 C7.5,9.32 7.57,8.65 7.66,8 L12.34,8 C12.43,8.65 12.5,9.32 12.5,10 C12.5,10.68 12.43,11.34 12.34,12 Z M12.59,17.56 C13.19,16.45 13.65,15.25 13.97,14 L16.92,14 C15.96,15.65 14.43,16.93 12.59,17.56 Z M14.36,12 C14.44,11.34 14.5,10.68 14.5,10 C14.5,9.32 14.44,8.66 14.36,8 L17.74,8 C17.9,8.64 18,9.31 18,10 C18,10.69 17.9,11.36 17.74,12 L14.36,12 Z",
                                id: "path-1",
                                fill: t || "#3C7FEB"
                            })))
                    }
                },
                g = function(e) {
                    var t = e.primaryColor;
                    return r.a.createElement("svg", {
                        width: "10px",
                        height: "5px",
                        viewBox: "0 0 10 5",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("g", {
                        id: "Page-1",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, r.a.createElement("polygon", {
                        id: "path-1",
                        fill: t || "#3C7FEB",
                        points: "0 0 5 5 10 0"
                    })))
                },
                f = a(19),
                h = a(5),
                C = a(11),
                b = a(17);
            a(95);

            function y(e) {
                return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function E(e) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function k(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function w(e, t) {
                return (w = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function L(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var x = function(e) {
                function t(e) {
                    var a, n, o;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), n = this, o = E(t).call(this, e), a = !o || "object" !== y(o) && "function" != typeof o ? k(n) : o, L(k(a), "_TopLeftImage", r.a.createRef()), L(k(a), "_TopLeftTitle", r.a.createRef()), L(k(a), "_TopLeftCredentials", r.a.createRef()), L(k(a), "_PromoImage", r.a.createRef()), L(k(a), "_PromoTitle", r.a.createRef()), L(k(a), "_PromoCredentials", r.a.createRef()), L(k(a), "_transition", function(e, t) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            n = e.getBoundingClientRect(),
                            r = t.getBoundingClientRect(),
                            o = n.width / r.width,
                            s = n.height / r.height,
                            i = n.x - r.x,
                            l = n.y - r.y;
                        t.style.animation = "none", t.style.transition = "0.15s ease-out", t.style.transitionDelay = "".concat(a, "s"), t.style.transformOrigin = "0% 0%", t.style.transform = "translate3d(".concat(i, "px, ").concat(l, "px, 0) scale3d(").concat(o, ", ").concat(s, ", 1)")
                    }), L(k(a), "_transitionOff", function(e) {
                        e.style.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)"
                    }), L(k(a), "_transitionAll", function(e) {
                        e ? (a._transitionOff(a._PromoImage.current), a._transitionOff(a._PromoTitle.current), a._transitionOff(a._PromoCredentials.current), a.setState({
                            expanded: !0
                        })) : (a._transition(a._TopLeftImage.current, a._PromoImage.current), a._transition(a._TopLeftTitle.current, a._PromoTitle.current), a._transition(a._TopLeftCredentials.current, a._PromoCredentials.current), a.setState({
                            expanded: !1
                        }))
                    }), a.state = {
                        expanded: a.props.expanded
                    }, a
                }
                var a, n, o;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && w(e, t)
                }(t, r.a.Component), a = t, (n = [{
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function(e) {
                        this.props.expanded === e.expanded || e.isHeaderDisabled || this._transitionAll(e.expanded)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state.expanded ? "expanded" : "",
                            t = this.props,
                            a = t.appSettings,
                            n = t.isHeaderDisabled,
                            o = a["primary-color"];
                        return n ? null : r.a.createElement("div", {
                            className: "header-wrapper"
                        }, r.a.createElement("div", {
                            style: {
                                backgroundColor: o
                            },
                            className: "header ".concat(e)
                        }, this.props.loading && this.state.expanded ? r.a.createElement("div", {
                            className: "header-loader"
                        }, r.a.createElement(d, null)) : this.renderBody()))
                    }
                }, {
                    key: "renderBody",
                    value: function() {
                        var e = this.props.business,
                            t = e.name,
                            a = e.preview_text,
                            n = e.image_url,
                            o = this.props.appSettings,
                            s = o["header-icon"],
                            i = o["header-text"],
                            l = this.props.agent || {},
                            c = l.avatar,
                            u = l.name,
                            d = c || n || s,
                            p = "Haptik" === i.text ? void 0 : i.text,
                            m = u || p || t,
                            g = this.state.expanded ? "expanded" : "";
                        return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: "header-top",
                            "data-testid": "header"
                        }, r.a.createElement("div", {
                            className: "header-top-left ".concat(g)
                        }, r.a.createElement("div", {
                            ref: this._TopLeftImage,
                            className: "header-top-left-image"
                        }, r.a.createElement("img", {
                            role: "presentation",
                            src: d,
                            "data-testid": "businessPreviewImage"
                        })), r.a.createElement("div", {
                            className: "header-top-left-text"
                        }, r.a.createElement("div", {
                            ref: this._TopLeftTitle,
                            className: "header-top-left-text-title",
                            "data-testid": "headerTitleText"
                        }, m), r.a.createElement("div", {
                            ref: this._TopLeftCredentials,
                            className: "header-top-left-text-credentials",
                            "data-testid": "headerSubtitleText"
                        }, a))), r.a.createElement("div", {
                            className: "header-top-right"
                        }, this.renderLanguageSwitcher(), this.renderCross())), r.a.createElement("div", {
                            className: "header-promo ".concat(g)
                        }, r.a.createElement("div", {
                            ref: this._PromoImage,
                            className: "header-promo-image"
                        }, r.a.createElement("img", {
                            role: "presentation",
                            src: d
                        })), r.a.createElement("div", {
                            ref: this._PromoTitle,
                            className: "header-promo-title"
                        }, m), r.a.createElement("div", {
                            ref: this._PromoCredentials,
                            className: "header-promo-credentials"
                        }, a)))
                    }
                }, {
                    key: "renderCross",
                    value: function() {
                        return this.props.noCross ? null : r.a.createElement("div", {
                            className: "header-top-right-cross",
                            onClick: this.props.onClose,
                            "data-testid": "headerCross"
                        }, r.a.createElement(p.a, null))
                    }
                }, {
                    key: "renderLanguageSwitcher",
                    value: function() {
                        var e = this.props.languages || [];
                        return e.length <= 1 ? null : e.length <= 2 ? this.renderTwoLanguageSwitcher() : this.renderMultipleLanguageSwitcher()
                    }
                }, {
                    key: "renderMultipleLanguageSwitcher",
                    value: function() {
                        var e = this.props,
                            t = e.language,
                            a = e.languagesIndexed[t].languageNativeName,
                            n = {
                                color: "#FFF"
                            };
                        return r.a.createElement("div", {
                            className: "header-top-right-language",
                            onClick: this.props.openLanguagePicker
                        }, r.a.createElement("div", {
                            className: "header-top-right-language-icon"
                        }, r.a.createElement(m, {
                            primaryColor: "#FFF"
                        })), r.a.createElement("div", {
                            className: "header-top-right-language-text",
                            style: n
                        }, a), r.a.createElement("div", {
                            className: "header-top-right-language-arrow"
                        }, r.a.createElement(g, {
                            primaryColor: "#FFF"
                        })))
                    }
                }, {
                    key: "renderTwoLanguageSwitcher",
                    value: function() {
                        var e = this,
                            t = this.props,
                            a = t.language,
                            n = t.languages,
                            o = n[0].languageCode === a ? n[1] : n[0];
                        return r.a.createElement("div", {
                            className: "header-top-right-language"
                        }, r.a.createElement("div", {
                            className: "header-top-right-language-icon"
                        }, r.a.createElement(m, {
                            primaryColor: "#FFF",
                            language: o.languageCode
                        })), r.a.createElement("div", {
                            className: "header-top-right-language-switcher",
                            onClick: function() {
                                return e.props.changeLanguage(o.languageCode)
                            }
                        }, r.a.createElement(c.a.component, {
                            id: "HEADER_CHAT_IN",
                            override: o.languageCode
                        })))
                    }
                }]) && v(a.prototype, n), o && v(a, o), t
            }();
            x.propTypes = {
                business: s.a.object,
                changeLanguage: s.a.func,
                expanded: s.a.bool,
                language: s.a.string,
                languages: s.a.arrayOf(s.a.object),
                languagesIndexed: s.a.object,
                loading: s.a.bool,
                isHeaderDisabled: s.a.bool,
                noCross: s.a.bool,
                onClose: s.a.func,
                openLanguagePicker: s.a.func,
                appSettings: s.a.object,
                agent: s.a.string
            }, x.defaultProps = {
                onClose: function() {},
                noCross: !1,
                expanded: !1,
                loading: !1
            };
            var O = Object(i.b)(function(e) {
                    return {
                        expanded: l.o(e),
                        isHeaderDisabled: l.n(e),
                        appSettings: l.b(e),
                        business: b.a(e),
                        languages: b.i(e),
                        languagesIndexed: b.n(e),
                        language: b.b(e),
                        agent: b.d(e)
                    }
                }, function(e) {
                    return Object(f.b)({
                        openLanguagePicker: h.q,
                        changeLanguage: C.a
                    }, e)
                })(x),
                S = function(e) {
                    var t = e.className;
                    return r.a.createElement("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: t
                    }, r.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19 6.4L17.6 5L12 10.6L6.4 5L5 6.4L10.6 12L5 17.6L6.4 19L12 13.4L17.6 19L19 17.6L13.4 12L19 6.4Z",
                        fill: "#606060"
                    }))
                };
            S.propTypes = {
                className: s.a.string
            }, S.defaultProps = {
                className: ""
            };
            var T = S,
                j = function(e) {
                    var t = e.color,
                        a = void 0 === t ? "#606060" : t;
                    return r.a.createElement("svg", {
                        width: "26",
                        height: "26",
                        viewBox: "0 0 26 26",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.3221 7.6875V8.82713L13.2974 8.86929H13.2977L12.6779 9.92826V9.92767L11.8735 11.302V10.8528C11.8735 10.3628 11.7505 10.0081 11.5045 9.78881C11.2632 9.56948 10.9274 9.45981 10.4968 9.45981C10.2556 9.45981 10.0261 9.50647 9.80848 9.59981C9.59559 9.68848 9.42764 9.83081 9.30464 10.0268H9.25496L9.12723 9.52981H8.43887V13.3238H9.33302V11.4688C9.33302 11.0535 9.39925 10.7338 9.53172 10.5098C9.66419 10.2858 9.9102 10.1738 10.2697 10.1738C10.7428 10.1738 10.9794 10.4585 10.9794 11.0278V12.8296L8.82779 16.5057H5C3.89543 16.5057 3 15.6103 3 14.5057V7.6875C3 6.58293 3.89543 5.6875 5 5.6875H11.3221C12.4266 5.6875 13.3221 6.58293 13.3221 7.6875ZM9.89011 19.1448L11.4348 16.5057H11.4357L12.6779 14.3833V14.3839L13.3231 13.2817V13.2796L15.5319 9.50566H15.5332L15.9056 8.86929H15.9044L17.1475 6.74536C17.2812 6.51695 17.2019 6.22489 16.9703 6.09302C16.7388 5.96115 16.4427 6.0394 16.309 6.26781L9.05158 18.6673C8.91789 18.8957 8.99723 19.1877 9.22878 19.3196C9.46033 19.4515 9.75642 19.3732 9.89011 19.1448ZM12.9256 16.5057L13.3221 15.8282V15.8288L13.3231 15.8272V18.4148C13.3231 18.7662 13.6119 19.0511 13.9682 19.0511H21.7097C22.066 19.0511 22.3549 18.7662 22.3549 18.4148V10.142C22.3549 9.79057 22.066 9.50566 21.7097 9.50566H17.023L17.3955 8.86929H21.7097C22.4223 8.86929 23 9.43911 23 10.142V18.4148C23 19.1177 22.4223 19.6875 21.7097 19.6875H13.9682C13.2556 19.6875 12.6779 19.1177 12.6779 18.4148V16.9294L12.9259 16.5057H12.9256ZM4.56694 13.3238H7.44809V12.5678H5.47528V11.0978H7.32035V10.3488H5.47528V9.07481H7.44809V8.32581H4.56694V13.3238ZM14.872 13.4529H15.461V17.1419H16.27V13.4529H16.8679H16.9655H19.4084V13.9289H18.6065C18.3511 13.9289 18.1453 13.9476 17.9891 13.9849C17.8378 14.0176 17.7053 14.0806 17.5917 14.1739C17.5019 14.2392 17.4309 14.3232 17.3789 14.4259C17.3315 14.5239 17.3079 14.6429 17.3079 14.7829C17.3079 14.9462 17.3363 15.0886 17.393 15.2099C17.4498 15.3312 17.5231 15.4386 17.613 15.5319C17.49 15.6346 17.393 15.7559 17.3221 15.8959C17.2558 16.0312 17.2227 16.1876 17.2227 16.3649C17.2227 16.7196 17.341 17.0393 17.5776 17.3239C17.8141 17.6133 18.1405 17.9236 18.5569 18.2549L19.0891 17.7229C18.7958 17.5129 18.5734 17.3333 18.422 17.1839C18.2706 17.0346 18.1666 16.9016 18.1098 16.7849C18.0577 16.6636 18.0317 16.5399 18.0317 16.4139C18.0317 16.2226 18.1074 16.0709 18.2588 15.9589C18.4149 15.8469 18.642 15.7909 18.9401 15.7909C19.2097 15.7909 19.4037 15.8282 19.522 15.9029C19.645 15.9776 19.7065 16.0826 19.7065 16.2179C19.7065 16.3346 19.6592 16.4256 19.5646 16.4909C19.4747 16.5562 19.3564 16.6076 19.2097 16.6449L19.4439 17.2819C19.7893 17.1979 20.0518 17.0673 20.2316 16.8899C20.4114 16.7126 20.5013 16.4792 20.5013 16.1899C20.5013 16.0032 20.4469 15.8306 20.3381 15.6719C20.234 15.5086 20.0684 15.3756 19.8413 15.2729C19.619 15.1702 19.328 15.1189 18.9685 15.1189C18.713 15.1189 18.4717 15.1492 18.2446 15.2099C18.1453 15.1119 18.0956 15.0069 18.0956 14.8949C18.0956 14.8016 18.1287 14.7292 18.1949 14.6779C18.2328 14.6452 18.2777 14.6242 18.3298 14.6149C18.3865 14.6009 18.4835 14.5939 18.6207 14.5939H20.2174V13.4529H20.9129V12.7879H20.2498C19.985 12.4388 19.6921 12.1238 19.3712 11.8429C19.0353 11.5442 18.6615 11.3086 18.2499 11.1359C17.8431 10.9586 17.3913 10.8699 16.8945 10.8699C16.3599 10.8699 15.9483 10.9796 15.6597 11.1989C15.3712 11.4182 15.2269 11.7122 15.2269 12.0809C15.2269 12.2069 15.2434 12.3282 15.2765 12.4449C15.3144 12.5569 15.3617 12.6712 15.4185 12.7879H14.872V13.4529ZM19.344 12.7879C19.0059 12.392 18.6459 12.0886 18.2641 11.8779C17.8715 11.6539 17.4575 11.5419 17.0223 11.5419C16.7053 11.5419 16.4616 11.6026 16.2913 11.7239C16.1257 11.8452 16.043 12.0109 16.043 12.2209C16.043 12.3329 16.0595 12.4379 16.0926 12.5359C16.1305 12.6292 16.1707 12.7132 16.2133 12.7879H16.8679H16.9655H19.344Z",
                        fill: a
                    }))
                };
            j.propTypes = {
                color: s.a.string
            };
            var N = j,
                _ = a(14),
                P = a(41),
                M = a(43);
            a(96);

            function I(e) {
                return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function R(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function F(e) {
                return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function D(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function A(e, t) {
                return (A = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function H(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var V = function(e) {
                function t(e) {
                    var a, n, o;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), n = this, a = !(o = F(t).call(this, e)) || "object" !== I(o) && "function" != typeof o ? D(n) : o, H(D(a), "_TopLeftImage", r.a.createRef()), H(D(a), "_TopLeftTitle", r.a.createRef()), H(D(a), "_TopLeftCredentials", r.a.createRef()), H(D(a), "_Header", r.a.createRef()), a.handleCrossClick = a.handleCrossClick.bind(D(a)), a.state = {
                        showTooltip: e.appExpandedCount < 3
                    }, a
                }
                var a, n, o;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && A(e, t)
                }(t, r.a.Component), a = t, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this._Header && this._Header.current) {
                            var t = Object(P.a)(.3, this.props.appSettings["primary-color"]);
                            this._Header.current.style.setProperty("--primary-color", t)
                        }
                        setTimeout(function() {
                            e.setState({
                                showTooltip: !1
                            })
                        }, 3e3)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.isHeaderDisabled ? null : r.a.createElement("div", {
                            className: "header-v2-wrapper"
                        }, r.a.createElement("div", {
                            className: "header-v2"
                        }, this.renderBody()))
                    }
                }, {
                    key: "renderBody",
                    value: function() {
                        var e = this.props.business,
                            t = e.name,
                            a = e.preview_text,
                            n = e.image_url,
                            o = this.props.appSettings,
                            s = o["header-icon"],
                            i = o["header-text"],
                            l = o["language-config"],
                            c = this.props.agent || {},
                            u = c.avatar,
                            d = c.name,
                            p = u || n || s,
                            m = "Haptik" === i.text ? void 0 : i.text,
                            g = l[this.props.language] || {},
                            f = g.headerText || d || m || t,
                            h = g.previewText || a;
                        return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: "header-v2-top",
                            "data-testid": "header",
                            ref: this._Header
                        }, r.a.createElement("div", {
                            className: "header-v2-top-left"
                        }, r.a.createElement("div", {
                            ref: this._TopLeftImage,
                            className: "header-v2-top-left-image"
                        }, r.a.createElement("img", {
                            role: "presentation",
                            src: p,
                            "data-testid": "businessPreviewImage"
                        })), r.a.createElement("div", {
                            className: "header-v2-top-left-text"
                        }, r.a.createElement("div", {
                            ref: this._TopLeftTitle,
                            className: "header-v2-top-left-text-title",
                            "data-testid": "headerTitleText"
                        }, f), r.a.createElement("div", {
                            ref: this._TopLeftCredentials,
                            className: "header-v2-top-left-text-credentials",
                            "data-testid": "headerSubtitleText"
                        }, h))), r.a.createElement("div", {
                            className: "header-v2-top-right"
                        }, this.renderLanguageSwitcher(), this.renderCross())))
                    }
                }, {
                    key: "handleCrossClick",
                    value: function() {
                        Object(M.a)({
                            event_name: "close_webview",
                            event_type: "internal",
                            status: !0
                        }), this.props.onClose()
                    }
                }, {
                    key: "renderCross",
                    value: function() {
                        return this.props.noCross ? null : r.a.createElement("div", {
                            className: "header-v2-top-right-cross",
                            onClick: this.handleCrossClick,
                            "data-testid": "headerCross"
                        }, r.a.createElement(T, null))
                    }
                }, {
                    key: "renderLanguageTooltip",
                    value: function() {
                        var e = this;
                        if (!this.state.showTooltip) return null;
                        var t = [_.a[this.props.language].language],
                            a = this.props.languages.length,
                            n = a > 2 ? 2 : a;
                        return this.props.languages.map(function(a) {
                            a !== e.props.language && t.length <= n && t.push(_.a[a].language)
                        }), r.a.createElement("div", {
                            className: "header-v2-top-right-language-tooltip"
                        }, r.a.createElement("div", {
                            className: "header-v2-top-right-language-tooltip-arrow"
                        }), r.a.createElement("span", {
                            className: "header-v2-top-right-language-tooltip-text"
                        }, t.join(" / ")))
                    }
                }, {
                    key: "renderLanguageSwitcher",
                    value: function() {
                        return this.props.languages.length < 2 ? null : r.a.createElement("div", {
                            className: "header-v2-top-right-language"
                        }, r.a.createElement("div", {
                            className: "header-v2-top-right-language-icon",
                            onClick: this.props.openLanguagePicker
                        }, r.a.createElement(N, null)), this.renderLanguageTooltip())
                    }
                }]) && R(a.prototype, n), o && R(a, o), t
            }();
            V.propTypes = {
                business: s.a.object,
                language: s.a.string,
                languages: s.a.arrayOf(s.a.object),
                isHeaderDisabled: s.a.bool,
                noCross: s.a.bool,
                onClose: s.a.func,
                openLanguagePicker: s.a.func,
                appSettings: s.a.object,
                agent: s.a.string,
                appExpandedCount: s.a.number
            }, V.defaultProps = {
                onClose: function() {},
                noCross: !1
            };
            var B = Object(i.b)(function(e) {
                    return {
                        isHeaderDisabled: l.n(e),
                        appSettings: l.b(e),
                        appExpandedCount: l.a(e),
                        business: b.a(e),
                        languages: b.i(e),
                        languagesIndexed: b.n(e),
                        language: b.b(e),
                        agent: b.d(e)
                    }
                }, function(e) {
                    return Object(f.b)({
                        openLanguagePicker: h.q,
                        changeLanguage: C.a
                    }, e)
                })(V),
                Z = function() {
                    return r.a.createElement("svg", {
                        width: "18",
                        height: "8",
                        viewBox: "0 0 8 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.53806 2.00903C6.56735 2.10644 6.58309 2.20971 6.58309 2.31667V4.25C6.58309 4.52614 6.80695 4.75 7.08311 4.75C7.35927 4.75 7.58305 4.52614 7.58305 4.25V1.31667C7.58305 0.727558 7.10551 0.25 6.51642 0.25H3.5831C3.30695 0.25 3.0831 0.473851 3.0831 0.75C3.0831 1.02614 3.30695 1.25 3.5831 1.25H5.51642C5.62725 1.25 5.73413 1.2669 5.83461 1.29827L0.372514 6.76038C0.177261 6.95558 0.177261 7.27217 0.372514 7.46747C0.567778 7.66267 0.884365 7.66267 1.07963 7.46747L6.53806 2.00903Z",
                        fill: "#A6A6A6"
                    }))
                },
                U = function(e) {
                    return {
                        shouldShowGDPRView: l.x(e),
                        appSettings: l.b(e)
                    }
                };
            a(97);

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var W = function() {
                    var e = Object(i.d)(U),
                        t = e.shouldShowGDPRView,
                        a = e.appSettings,
                        n = G(r.a.useState(t), 2),
                        o = n[0],
                        s = n[1],
                        l = a.gdpr,
                        u = a["privacy-policy-url"];
                    if (r.a.useEffect(function() {
                            !t && o && setTimeout(function() {
                                s(!1)
                            }, 400)
                        }, [t]), !l || !o) return null;
                    var d = t ? "gdpr-view active" : "gdpr-view";
                    return r.a.createElement("div", {
                        className: d
                    }, r.a.createElement(c.a.component, {
                        id: "GDPR_START_TEXT",
                        className: "gdpr-view-text"
                    }), r.a.createElement("a", {
                        href: u,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: function() {
                            var e = {
                                event_name: "external_link",
                                event_type: "internal",
                                link: u,
                                status: !0
                            };
                            Object(M.a)(e)
                        }
                    }, r.a.createElement(c.a.component, {
                        id: "GDPR_LINK_TEXT",
                        className: "gdpr-view-text"
                    })), r.a.createElement("span", null, r.a.createElement(Z, null)), r.a.createElement(c.a.component, {
                        id: "GDPR_END_TEXT",
                        className: "gdpr-view-text"
                    }))
                },
                K = a(40),
                q = function() {
                    return r.a.createElement("svg", {
                        width: "44px",
                        height: "45px",
                        viewBox: "0 0 44 45",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("g", {
                        id: "Page-1",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, r.a.createElement("g", {
                        id: "Group"
                    }, r.a.createElement("path", {
                        d: "M42.5083425,44.5 C43.6083045,44.5 44.0999211,43.6998421 43.6040887,42.7081773 L22.8959113,1.29182266 C22.4011132,0.30222633 21.5999211,0.30015785 21.1040887,1.29182266 L0.39591133,42.7081773 C-0.09888683,43.6977737 0.39889206,44.5 1.49165754,44.5 L42.5083425,44.5 Z",
                        id: "Oval-1-Copy-2",
                        fill: "#F76B6B"
                    }), r.a.createElement("path", {
                        d: "M20.1295728,15.52657 C20.0842807,15.154209 20.3748946,14.8261045 20.75,14.8261045 L23.25,14.8261045 C23.6251054,14.8261045 23.9157193,15.154209 23.8704272,15.52657 L22.6204272,30.8032403 C22.5313039,31.535953 21.4686961,31.535953 21.3795728,30.8032403 L20.1295728,15.52657 Z",
                        id: "Path",
                        fill: "#FFFFFF"
                    }), r.a.createElement("path", {
                        d: "M20.125,37 C20.125,35.9644661 20.9644661,35.125 22,35.125 C23.0355339,35.125 23.875,35.9644661 23.875,37 C23.875,38.0355339 23.0355339,38.875 22,38.875 C20.9644661,38.875 20.125,38.0355339 20.125,37 Z",
                        id: "Path",
                        fill: "#FFFFFF"
                    }))))
                },
                z = function() {
                    return r.a.createElement("svg", {
                        width: "24px",
                        height: "24px",
                        viewBox: "0 0 24 24",
                        version: "1.1"
                    }, r.a.createElement("g", {
                        id: "Assets",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, r.a.createElement("g", {
                        id: "icon/log"
                    }, r.a.createElement("g", {
                        id: "Group-5",
                        transform: "translate(2.000000, 2.000000)"
                    }, r.a.createElement("path", {
                        d: "M17.3913043,17.3913043 L17.3913043,20 L2.60869565,20 L2.60869565,17.3913043 M2.60869565,9.13043478 L2.60869565,0 L11.4782609,0 L17.3913043,5.91304348 L17.3913043,9.13043478",
                        id: "Rectangle-1948",
                        stroke: "#333333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), r.a.createElement("rect", {
                        id: "Rectangle-1949",
                        stroke: "#333333",
                        fill: "#333333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        x: "0",
                        y: "9.13043478",
                        width: "20",
                        height: "8.26086957"
                    }), r.a.createElement("polygon", {
                        id: "Path-4339",
                        stroke: "#333333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        points: "11.2278261 5.47695652 17.3913043 5.47695652 11.2278261 0"
                    }), r.a.createElement("path", {
                        d: "M11.2278261,13.4630435 C11.2278261,13.8769586 11.1847106,14.2526795 11.0984783,14.5902174 C11.0122459,14.9277553 10.8878269,15.2172452 10.7252174,15.4586957 C10.5626079,15.7001461 10.3642765,15.8873906 10.1302174,16.0204348 C9.89615825,16.1534789 9.63376957,16.22 9.34304348,16.22 C9.04738983,16.22 8.78376927,16.1534789 8.55217391,16.0204348 C8.32057855,15.8873906 8.12347907,15.7001461 7.96086957,15.4586957 C7.79826006,15.2172452 7.67384101,14.9277553 7.5876087,14.5902174 C7.50137638,14.2526795 7.45826087,13.8769586 7.45826087,13.4630435 C7.45826087,13.0491284 7.50014451,12.6746394 7.58391304,12.3395652 C7.66768158,12.0044911 7.79086875,11.7162331 7.95347826,11.4747826 C8.11608777,11.2333321 8.31441912,11.0473195 8.54847826,10.9167391 C8.7825374,10.7861588 9.04738983,10.7208696 9.34304348,10.7208696 C9.63376957,10.7208696 9.89615825,10.7861588 10.1302174,10.9167391 C10.3642765,11.0473195 10.5626079,11.2333321 10.7252174,11.4747826 C10.8878269,11.7162331 11.0122459,12.0044911 11.0984783,12.3395652 C11.1847106,12.6746394 11.2278261,13.0491284 11.2278261,13.4630435 L11.2278261,13.4630435 Z M10.3113043,13.4630435 C10.3113043,13.1969552 10.2903625,12.9468852 10.2484783,12.7128261 C10.206594,12.4787669 10.1450004,12.27674 10.0636957,12.1067391 C9.9823909,11.9367383 9.88137742,11.8024643 9.76065217,11.703913 C9.63992693,11.6053618 9.50072543,11.556087 9.34304348,11.556087 C9.18043397,11.556087 9.03876872,11.6053618 8.91804348,11.703913 C8.79731824,11.8024643 8.69630475,11.9367383 8.615,12.1067391 C8.53369525,12.27674 8.47333353,12.4787669 8.43391304,12.7128261 C8.39449256,12.9468852 8.37478261,13.1969552 8.37478261,13.4630435 C8.37478261,13.7291318 8.39449256,13.9792017 8.43391304,14.2132609 C8.47333353,14.44732 8.53369525,14.6505788 8.615,14.8230435 C8.69630475,14.9955081 8.79731824,15.131014 8.91804348,15.2295652 C9.03876872,15.3281164 9.18043397,15.3773913 9.34304348,15.3773913 C9.50565299,15.3773913 9.64731824,15.3281164 9.76804348,15.2295652 C9.88876872,15.131014 9.9897822,14.9955081 10.071087,14.8230435 C10.1523917,14.6505788 10.2127534,14.44732 10.2521739,14.2132609 C10.2915944,13.9792017 10.3113043,13.7291318 10.3113043,13.4630435 L10.3113043,13.4630435 Z",
                        id: "OTF",
                        fill: "#FFFFFF"
                    }), r.a.createElement("path", {
                        d: "M15.5147826,15.9178261 C15.3571007,16.0459427 15.1686243,16.1494199 14.9493478,16.2282609 C14.7300714,16.3071018 14.4676827,16.3465217 14.1621739,16.3465217 C13.8517376,16.3465217 13.5733346,16.2812325 13.3269565,16.1506522 C13.0805785,16.0200718 12.8723922,15.8340592 12.7023913,15.5926087 C12.5323905,15.3511582 12.4018121,15.0629002 12.3106522,14.7278261 C12.2194923,14.3927519 12.173913,14.0207267 12.173913,13.6117391 C12.173913,13.2126067 12.2182604,12.8455089 12.3069565,12.5104348 C12.3956526,12.1753606 12.5237673,11.8858708 12.6913043,11.6419565 C12.8588414,11.3980423 13.0608684,11.208334 13.2973913,11.0728261 C13.5339142,10.9373182 13.7999985,10.8695652 14.0956522,10.8695652 C14.4060885,10.8695652 14.6746365,10.9249994 14.9013043,11.0358696 C15.1279721,11.1467397 15.3127529,11.3031874 15.4556522,11.5052174 L14.9456522,12.126087 C14.7485497,11.8402884 14.4824654,11.6973913 14.1473913,11.6973913 C13.9650716,11.6973913 13.8061601,11.7491299 13.6706522,11.8526087 C13.5351443,11.9560875 13.4230439,12.095289 13.3343478,12.2702174 C13.2456517,12.4451458 13.1791307,12.6484046 13.1347826,12.88 C13.0904346,13.1115954 13.0682609,13.355506 13.0682609,13.6117391 C13.0682609,13.8778274 13.0904346,14.1278974 13.1347826,14.3619565 C13.1791307,14.5960157 13.2456517,14.8005064 13.3343478,14.9754348 C13.4230439,15.1503632 13.5351443,15.287101 13.6706522,15.3856522 C13.8061601,15.4842034 13.9675353,15.5334783 14.1547826,15.5334783 C14.2730441,15.5334783 14.3802169,15.5199277 14.4763043,15.4928261 C14.5723918,15.4657245 14.6499997,15.4300002 14.7091304,15.3856522 L14.7091304,14.0330435 L14.0734783,14.0330435 L14.0734783,13.2643478 L15.5147826,13.2643478 L15.5147826,15.9178261 Z",
                        id: "Path",
                        fill: "#FFFFFF"
                    }), r.a.createElement("polygon", {
                        id: "Path",
                        fill: "#FFFFFF",
                        points: "4.34782609 16.1026087 4.34782609 10.8695652 5.24217391 10.8695652 5.24217391 15.2821739 6.68347826 15.2821739 6.68347826 16.1026087"
                    })))))
                },
                Y = a(22),
                Q = a(158),
                X = a.n(Q);

            function J(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                e && function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 300,
                        n = t || document.scrollingElement || document.documentElement,
                        r = n.scrollTop,
                        o = e - r,
                        s = +new Date;
                    ! function t() {
                        var i, l, c, u = +new Date - s;
                        n.scrollTop = parseInt((i = u, l = r, c = o, (i /= a / 2) < 1 ? c / 2 * i * i + l : -c / 2 * ((i -= 1) * (i - 2) - 1) + l), 10), u < a ? requestAnimationFrame(t) : n.scrollTop = e
                    }()
                }(e.scrollHeight, e, t)
            }

            function $(e, t) {
                if (!e || !e.lastUserMessage || !e.lastUserMessage.freeform) return !1;
                var a;
                try {
                    a = JSON.parse(e.body)
                } catch (e) {
                    a = null
                }
                var n = function(e) {
                        return !(!e || !e.data || !Object.keys(e.data).length > 0 || e.text || !e.data.quick_replies)
                    }(a),
                    r = function(e) {
                        return !!e && "SYSTEM" === e.type
                    }(a),
                    o = function(e) {
                        return !(!e || !e.body || "string" != typeof e.body) && e.body.includes("FEEDBACK")
                    }(e);
                return !(!t || e.direction || !e.lastUserMessage || !e.lastUserMessage.freeform || n || r || o)
            }
            a(98);
            var ee = function(e) {
                var t = e.children,
                    a = e.redesign;
                return r.a.createElement("div", {
                    className: "timeline-message"
                }, r.a.createElement("div", {
                    className: "timeline-message-text ".concat(a)
                }, t))
            };
            ee.propTypes = {
                children: s.a.node,
                redesign: s.a.string
            };
            var te = ee,
                ae = (a(99), function(e) {
                    var t = e.isTyping,
                        a = e.isMirrored ? "mirrored" : "";
                    return r.a.createElement("div", {
                        className: "typing-indicator ".concat(t ? "typing" : "", " ").concat(a)
                    }, r.a.createElement("div", {
                        className: "typing-indicator-loader ".concat(a)
                    }, r.a.createElement("span", {
                        className: "typing-indicator-text"
                    }, t && c.a.get.TYPING_INDICATOR), r.a.createElement("div", {
                        className: "typing-loader-circle"
                    }), r.a.createElement("div", {
                        className: "typing-loader-circle"
                    }), r.a.createElement("div", {
                        className: "typing-loader-circle"
                    })))
                });
            ae.propTypes = {
                isTyping: s.a.bool,
                isMirrored: s.a.bool
            };
            var ne = ae,
                re = (a(100), function() {
                    return r.a.createElement("span", {
                        className: "powered-by-logo"
                    }, r.a.createElement("span", {
                        className: "powered-by-logo-text"
                    }, "Powered By"), r.a.createElement("img", {
                        alt: "powered-by-logo",
                        className: "powered-by-logo-image",
                        src: "https://toolassets.haptikapi.com/js-sdk/images/haptik_logo_even.svg"
                    }))
                }),
                oe = a(9),
                se = function(e) {
                    e.className;
                    return r.a.createElement("svg", {
                        width: "34px",
                        height: "34px",
                        viewBox: "0 0 34 34",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("g", {
                        id: "Page-1",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, r.a.createElement("g", {
                        id: "feedback",
                        transform: "translate(1.000000, -2.000000)",
                        fillRule: "nonzero"
                    }, r.a.createElement("g", {
                        id: "thumbs"
                    }, r.a.createElement("circle", {
                        id: "Oval",
                        stroke: "#E6E6E6",
                        fill: "#FFFFFF",
                        cx: "16",
                        cy: "19",
                        r: "16"
                    }), r.a.createElement("g", {
                        id: "sparkles",
                        transform: "translate(16.719470, 11.596806) rotate(-330.000000) translate(-16.719470, -11.596806) translate(8.219470, 4.096806)",
                        fill: "#000000"
                    }, r.a.createElement("path", {
                        d: "M7.7005814,10.3122442 C7.7486143,10.3250528 7.79771564,10.296233 7.80945744,10.2471328 C7.82226603,10.2001656 7.79344629,10.151067 7.74434605,10.1382567 C7.48496616,10.0710112 7.32913384,9.80630558 7.39638209,9.54583814 C7.40919096,9.49780523 7.38037094,9.4487039 7.3312707,9.43696209 C7.28323779,9.4241535 7.23413645,9.45297324 7.22239465,9.50207349 C7.15514913,9.76145337 6.89044349,9.9172857 6.62997605,9.85003744 C6.58194314,9.83722858 6.5328418,9.86604859 6.5211,9.91514884 C6.50829113,9.96318174 6.53711115,10.0122831 6.5862114,10.0240249 C6.84559128,10.0912704 7.0014236,10.355976 6.93417535,10.6164435 C6.92136676,10.6644764 6.9501865,10.7135777 6.99928674,10.7253195 C7.04731965,10.7381284 7.09642099,10.7093084 7.10816279,10.6602081 C7.17540831,10.4008283 7.44120698,10.2439302 7.7005814,10.3122442 Z M7.1049657,10.3154462 C7.07401128,10.204436 7.01423657,10.1019651 6.93204669,10.0208491 C7.04305686,9.98989469 7.14552779,9.93011998 7.22664378,9.84793009 C7.2575982,9.95894027 7.31737291,10.0614112 7.39956279,10.1425272 C7.28748419,10.1734816 7.18715012,10.2321879 7.1049657,10.3154462 Z",
                        id: "sparkle-1"
                    }), r.a.createElement("polygon", {
                        id: "sparkle-2",
                        points: "15.3763372 5.98305233 15.8598634 5.72260401 16.3487453 5.97451308 16.2505427 5.43226424 16.6401508 5.0458532 16.0957706 4.97113413 15.8481325 4.48118645 15.6090337 4.97646262 15.0667848 5.06185506 15.4638528 5.4397132"
                    }), r.a.createElement("polygon", {
                        id: "sparkle-3",
                        points: "7.8489593 7.08563953 8.33355116 6.82625965 8.82136744 7.07603186 8.7242332 6.53591442 9.11384134 6.14843767 8.5694611 6.07478703 8.32075459 5.58377366 8.08272419 6.07904983 7.53940965 6.16337384 7.93754337 6.54229767"
                    }), r.a.createElement("polygon", {
                        id: "sparkle-4",
                        points: "4.6808314 3.36252907 5.16542326 3.10208349 5.65430523 3.3518557 5.55610256 2.81280395 5.9457107 2.42426151 5.40133047 2.35061087 5.15262395 1.8595975 4.91565924 2.35593936 4.37127901 2.44026337 4.76941273 2.82025291"
                    }), r.a.createElement("polygon", {
                        id: "sparkle-5",
                        points: "5.42490698 10.4671802 5.17620047 9.97723256 4.93817006 10.4725087 4.39485552 10.555767 4.79192355 10.9368223 4.70439698 11.4790711 5.18898884 11.2186255 5.67787081 11.4705346 5.57966814 10.9282858 5.96927628 10.5418747"
                    }), r.a.createElement("path", {
                        d: "M12.0223953,7.6715 L12.0255976,7.77610506 L11.9498129,7.70458855 C11.8847015,7.64374541 11.7822305,7.64588227 11.7213874,7.70992551 C11.6605443,7.7750369 11.6626811,7.87750783 11.7267244,7.93835097 L11.8025091,8.00986748 L11.6989698,8.01306977 C11.6093091,8.01520472 11.5399267,8.08992297 11.5409951,8.17851797 C11.5431298,8.26604453 11.6146458,8.33649262 11.7021723,8.33649262 L11.7053746,8.33649262 L11.8099797,8.33329033 L11.7384632,8.4090751 C11.6765543,8.47418649 11.6797569,8.57559173 11.7438001,8.63750056 C11.7747545,8.66632085 11.8153166,8.68233091 11.8548103,8.68233091 C11.8975065,8.68233091 11.9402027,8.66525242 11.9711572,8.63216388 L12.0426737,8.55637911 L12.0458759,8.66098417 C12.0480106,8.74957917 12.1195266,8.81895882 12.2070532,8.81895882 L12.2113225,8.81895882 C12.3009859,8.81682387 12.3703656,8.74210562 12.3692999,8.65351062 L12.3660976,8.54890556 L12.4418824,8.62042208 C12.4728368,8.64924237 12.5133989,8.66525242 12.5528925,8.66525242 C12.5955888,8.66525242 12.638285,8.64817394 12.6703078,8.61508539 C12.731151,8.54997399 12.7290141,8.44856876 12.6649709,8.38665992 L12.5891861,8.31514341 L12.6937912,8.31194113 C12.7834519,8.30873884 12.8528342,8.23508793 12.8517658,8.14649293 C12.8496311,8.05683223 12.7717101,7.98638142 12.6863176,7.98851828 L12.5827783,7.99172056 L12.6542948,7.9159358 C12.7151379,7.8508244 12.7130011,7.74835347 12.6489578,7.68751033 C12.5838464,7.62666719 12.4813755,7.62880405 12.4205323,7.69284729 L12.3490158,7.76863206 L12.3458136,7.66189287 C12.3436789,7.57223217 12.2657578,7.50178136 12.1803654,7.50391822 C12.0907047,7.50712023 12.0202538,7.58077142 12.0223907,7.67150055 L12.0223953,7.6715 Z M12.1931802,8.07925233 C12.2059891,8.07925233 12.2177306,8.07391537 12.2294713,8.07071308 C12.2358756,8.08138727 12.2412129,8.09206147 12.2508194,8.1016675 C12.260426,8.11127353 12.2732349,8.10913941 12.283908,8.1155437 C12.2807057,8.13048724 12.2753687,8.14329556 12.2753687,8.15930835 C12.2753687,8.17211722 12.2796381,8.18385875 12.283908,8.19559946 C12.2732338,8.20200376 12.2625596,8.20734072 12.2529536,8.21694757 C12.243347,8.22655415 12.2390774,8.23829568 12.2326731,8.24897042 C12.2219989,8.24576841 12.2102574,8.24149851 12.1974477,8.24256612 C12.1846388,8.24256612 12.1728975,8.24790308 12.1611566,8.25110537 C12.154752,8.24043117 12.149415,8.22975726 12.1398085,8.22015095 C12.1302019,8.21054409 12.1184603,8.20627447 12.1077856,8.19987017 C12.1109879,8.18706131 12.1152575,8.17638712 12.1141902,8.16251064 C12.1141902,8.14863444 12.1099206,8.13689291 12.1056509,8.1251511 C12.1152575,8.11874681 12.126999,8.11340958 12.1355397,8.10380299 C12.1451462,8.09419641 12.1494159,8.08245488 12.1558204,8.07178015 C12.1664943,8.07498243 12.1771683,8.07818444 12.188909,8.07818444 C12.1910439,8.07925178 12.1921113,8.07925178 12.1931786,8.07925178 L12.1931802,8.07925233 Z",
                        id: "sparkle-6"
                    }), r.a.createElement("path", {
                        d: "M7.83174419,1.49455233 L7.83494647,1.49455233 L7.93955153,1.49135031 L7.86803502,1.56713508 C7.80612618,1.63224648 7.80932874,1.73471741 7.87337198,1.79662624 C7.9043264,1.82544653 7.94488849,1.84145659 7.98438215,1.84145659 C8.02707837,1.84145659 8.06977459,1.8243781 8.10072901,1.79128956 L8.17224552,1.71550479 L8.17544781,1.82010985 C8.17758276,1.90870485 8.24909845,1.97808723 8.33662502,1.97808723 L8.34089464,1.97808723 C8.43055534,1.97595228 8.49993772,1.90123403 8.49886929,1.81263903 L8.49566701,1.70803398 L8.57145177,1.77955049 C8.60240619,1.80837078 8.64296828,1.82438084 8.68246195,1.82438084 C8.72515817,1.82438084 8.76785439,1.80730235 8.79987724,1.7742138 C8.86072038,1.70910241 8.85858352,1.60769717 8.79454001,1.54578834 L8.71875524,1.47427183 L8.8233603,1.47106954 C8.91302099,1.46786726 8.98347181,1.39314791 8.98133495,1.30455291 C8.97920027,1.21489222 8.90127919,1.1444414 8.81588675,1.14657826 L8.71234739,1.14978055 L8.7838639,1.07399578 C8.84470704,1.00888438 8.84257018,0.906413453 8.77852667,0.845570314 C8.71341527,0.784727174 8.61094434,0.786864035 8.5501012,0.850907547 L8.47858469,0.926692314 L8.47538268,0.822087256 C8.4721804,0.733492256 8.39425849,0.663044174 8.30886605,0.665178302 C8.21920535,0.667312977 8.14982297,0.7420315 8.1508914,0.8306265 L8.15409341,0.935231558 L8.07830865,0.863715047 C8.01319725,0.802871907 7.91072632,0.805008767 7.84988318,0.869052279 C7.78904004,0.934163674 7.7911769,1.0366346 7.85522014,1.09747774 L7.93100491,1.16899426 L7.82746555,1.17112893 C7.73780485,1.17326388 7.66842247,1.24798213 7.6694909,1.33657713 C7.67269318,1.42517213 7.74420997,1.49455178 7.83173653,1.49455178 L7.83174419,1.49455233 Z M8.26616628,1.26399273 C8.27577313,1.25438615 8.28004276,1.24264462 8.28644705,1.23196988 C8.29712124,1.23517217 8.30779516,1.23837418 8.3195356,1.23837418 L8.32380522,1.23837418 C8.33661409,1.23837418 8.34835562,1.23303722 8.36009633,1.22983494 C8.3665009,1.24050913 8.37183785,1.25118305 8.38144471,1.26078935 C8.39105129,1.27039594 8.40386016,1.26826099 8.41453326,1.27466556 C8.41133097,1.2896091 8.40599401,1.30241742 8.40599401,1.31843021 C8.40599401,1.33123908 8.41026363,1.3429806 8.41453326,1.35472131 C8.40385934,1.36219295 8.39318515,1.36646257 8.38357884,1.37606915 C8.37397226,1.38567601 8.36970263,1.39741753 8.36329806,1.408092 C8.35369148,1.40488972 8.34194995,1.40062009 8.32807266,1.40168743 C8.31526379,1.40168743 8.30352226,1.40702466 8.29178155,1.41022667 C8.28537726,1.39955276 8.2800403,1.38887884 8.27043372,1.37927226 C8.26082686,1.36966567 8.24908533,1.36539605 8.23841087,1.35899148 C8.24161315,1.34618289 8.24588277,1.3355087 8.24481544,1.32163195 C8.24481544,1.30775547 8.24054554,1.29601422 8.23627619,1.28427241 C8.24588277,1.27893545 8.25762403,1.27359822 8.26616218,1.26399164 L8.26616628,1.26399273 Z",
                        id: "sparkle-7"
                    }), r.a.createElement("path", {
                        d: "M7.58854651,12.7843895 L7.66006302,12.7086048 L7.66326531,12.8132098 C7.66540026,12.9018048 7.73691595,12.9711845 7.82444252,12.9711845 L7.82871214,12.9711845 C7.91837284,12.9690498 7.98775522,12.8943313 7.98668679,12.8057363 L7.98348451,12.7011312 L8.05926927,12.7726477 C8.09022369,12.801468 8.13078578,12.8174781 8.17027945,12.8174781 C8.21297567,12.8174781 8.25567189,12.8003996 8.28769474,12.767311 C8.34853788,12.7021997 8.34640102,12.6007972 8.28235751,12.5388856 L8.20657274,12.4673691 L8.3111778,12.4641671 C8.40083849,12.4620321 8.47022088,12.3873139 8.46915245,12.2987189 C8.46701777,12.2090582 8.38909669,12.1386073 8.30370425,12.1407442 L8.20016489,12.1439462 L8.2716814,12.0681615 C8.33252454,12.0030501 8.33038768,11.9005791 8.26634417,11.839736 C8.20123277,11.7788928 8.09876184,11.7810297 8.0379187,11.8450729 L7.96640219,11.9208577 L7.96320018,11.8162527 C7.96106523,11.726592 7.88314442,11.6561411 7.79775198,11.658278 C7.70809128,11.6604127 7.6387089,11.7351312 7.63977733,11.8237262 L7.64297934,11.9283313 L7.56719458,11.8568148 C7.50208318,11.7959716 7.39961225,11.7981085 7.33876911,11.8621517 C7.27792597,11.9272631 7.28006283,12.029734 7.34410607,12.0905772 L7.41989084,12.1620937 L7.31635148,12.165296 C7.22669078,12.1674306 7.1573084,12.2421492 7.15837683,12.3307442 C7.16051177,12.4182707 7.23202747,12.4887188 7.31955403,12.4887188 L7.32275632,12.4887188 L7.42736138,12.4855165 L7.35584487,12.5613013 C7.29393603,12.6264127 7.29713859,12.7278179 7.36118183,12.7897268 C7.39213624,12.8185471 7.43269834,12.8345571 7.472192,12.8345571 C7.51488822,12.8345571 7.55758444,12.8164113 7.58853886,12.7843901 L7.58854651,12.7843895 Z M7.75292628,12.2581535 C7.76253286,12.2485469 7.76680276,12.2368054 7.77320705,12.2261306 C7.78388124,12.2293327 7.79455516,12.2325349 7.8062956,12.2325349 L7.81056522,12.2325349 C7.82337409,12.2325349 7.83511562,12.227198 7.84685633,12.2239957 C7.8532609,12.2346699 7.85859785,12.2453438 7.86820444,12.2549501 C7.87781129,12.264557 7.89061988,12.262422 7.90129298,12.2688266 C7.8980907,12.2837701 7.89275374,12.2965784 7.89275374,12.3125912 C7.89275374,12.3254001 7.89702336,12.3371416 7.90129298,12.3488823 C7.89061879,12.3552869 7.87994487,12.3606239 7.87033856,12.3702307 C7.86073198,12.3798373 7.85646209,12.3915786 7.85005779,12.4022536 C7.84045121,12.3990513 7.82870968,12.3958493 7.81483238,12.3958493 C7.80202352,12.3958493 7.79028199,12.4011862 7.77854128,12.4043885 C7.77213698,12.3937143 7.76680002,12.3830401 7.75719317,12.3734341 C7.74758659,12.3638275 7.73584506,12.3595579 7.72517032,12.3531536 C7.72837233,12.3403445 7.73264223,12.3296705 7.73157462,12.3157941 C7.73157462,12.3019179 7.72730499,12.2901763 7.72303537,12.2784345 C7.73264223,12.2730976 7.74438348,12.2677606 7.75292409,12.2581538 L7.75292628,12.2581535 Z",
                        id: "sparkle-8"
                    }), r.a.createElement("path", {
                        d: "M8.72638372,3.72978488 C8.71464247,3.7404588 8.70396827,3.75113299 8.69436087,3.76394186 C8.65273308,3.82264814 8.65379878,3.90377233 8.69649555,3.96141291 C8.75413613,4.03292942 8.85874119,4.04467122 8.9302577,3.98703064 L9.0316602,3.90377233 C9.10317671,3.84506605 9.21098433,3.75540262 9.28356927,3.7116407 C9.26755812,3.79596471 9.220592,3.92725593 9.18963758,4.0147907 C9.08716665,4.29873081 8.98256159,4.59226221 9.19283987,4.7384814 C9.40204998,4.88471698 9.64220905,4.6861775 9.87384801,4.49297744 C9.94536452,4.43427116 10.0521037,4.34460773 10.1257571,4.30084581 C10.1097459,4.38516983 10.0627798,4.51646105 10.0318254,4.60399581 C9.93042289,4.88793593 9.8247494,5.18253302 10.0350277,5.32768651 C10.2442378,5.47392209 10.4843969,5.27538262 10.7160358,5.08218256 C10.7875523,5.02347628 10.8942915,4.93381285 10.9679449,4.89005093 C10.951934,4.97437494 10.9049676,5.10566616 10.8740132,5.19320093 C10.8505304,5.26044645 10.8259803,5.32876041 10.8067677,5.3928061 C10.7800823,5.48033267 10.8291831,5.57319866 10.9167094,5.60095052 C11.004236,5.62763559 11.0981677,5.57853508 11.1248538,5.49100878 C11.144067,5.4323025 11.1654159,5.36932523 11.1888995,5.30634797 C11.2913705,5.02134215 11.3959755,4.72781076 11.1856973,4.58159157 C10.9775528,4.43535599 10.7373938,4.63389547 10.5057548,4.82709552 C10.4342383,4.8858018 10.3274991,4.97546523 10.2538457,5.01922715 C10.2698569,4.93490314 10.316823,4.80467762 10.3477774,4.71714285 C10.4502484,4.43320273 10.5548534,4.13860564 10.3445751,3.99345215 C10.1364307,3.84721657 9.89627165,4.04575605 9.6646327,4.2389561 C9.59311619,4.29766238 9.486377,4.38732581 9.41272363,4.43108773 C9.42873478,4.34676372 9.4757009,4.2154725 9.50665531,4.12793773 C9.60912624,3.84399762 9.7137313,3.55046622 9.50345303,3.40424703 C9.29424291,3.25801145 9.05408384,3.45761663 8.82351059,3.64975099 L8.72638372,3.72978488 Z",
                        id: "sparkle-9"
                    }), r.a.createElement("path", {
                        d: "M2.51418605,6.9170407 C2.44373797,6.93411919 2.39036837,6.99496233 2.38716581,7.06967866 C2.38182858,7.16147622 2.45334564,7.23939512 2.54514047,7.2447318 L2.67536326,7.24900142 C2.76822651,7.2511361 2.90805698,7.25647333 2.99130163,7.27248448 C2.9240561,7.32478838 2.80130413,7.3920339 2.72017994,7.43686425 C2.4565318,7.58309983 2.18328692,7.73252704 2.23878517,7.98017878 C2.29749145,8.22781687 2.61024913,8.23849024 2.9123061,8.24809791 C3.00516936,8.2513002 3.14499983,8.25663716 3.22824448,8.27158097 C3.16099895,8.32388487 3.03824698,8.39113039 2.95712279,8.43596074 C2.69347465,8.58112789 2.42022977,8.73055783 2.47892512,8.97927527 C2.5376314,9.22691335 2.85038907,9.23758673 3.15244605,9.2471944 C3.2453093,9.25039669 3.38513977,9.25466631 3.46838442,9.27067746 C3.4011389,9.32298135 3.27838692,9.39129531 3.19726273,9.43505723 C3.13428547,9.47028263 3.0713082,9.50550531 3.01366762,9.53966228 C2.93574599,9.58662949 2.91119669,9.69016612 2.9581639,9.76808775 C3.0061968,9.84600938 3.10866773,9.87162711 3.18658936,9.82359147 C3.23889326,9.79156862 3.29866797,9.75848008 3.35737424,9.72752566 C3.62209081,9.58235851 3.89536029,9.43292856 3.83663762,9.18421112 C3.77793134,8.93657304 3.46623936,8.92696537 3.16418238,8.91629199 C3.07238483,8.91308998 2.93148866,8.90775275 2.84824401,8.89280921 C2.91655797,8.84050531 3.03824151,8.77325979 3.1193657,8.72842944 C3.38408227,8.58219386 3.65735174,8.43276665 3.59862907,8.18511491 C3.53992279,7.93747683 3.22823081,7.92786915 2.92617384,7.91719578 C2.83331058,7.91399377 2.69348012,7.90972415 2.60914244,7.89371299 C2.67638797,7.8414091 2.79807424,7.77309515 2.88026413,7.72933323 C3.14391227,7.58309765 3.41715715,7.43473613 3.3584618,7.18601869 C3.29868709,6.93624648 2.98806355,6.92663881 2.68600657,6.91703113 L2.56112047,6.91169417 C2.54510931,6.91169417 2.52909762,6.91276151 2.51415326,6.91703113 L2.51418605,6.9170407 Z",
                        id: "sparkle-10"
                    }), r.a.createElement("path", {
                        d: "M16.6188314,2.86711628 C16.6188314,3.20868605 16.1064767,3.20868605 16.1064767,2.86711628 C16.1064767,2.52661221 16.6188314,2.52661221 16.6188314,2.86711628",
                        id: "sparkle-11"
                    }), r.a.createElement("path", {
                        d: "M13.8466512,8.07181977 C13.9170992,8.1337286 14.0024917,8.16361733 14.0878841,8.16361733 C14.1892866,8.16361733 14.2896234,8.12198953 14.3611399,8.03873122 C14.4945653,7.88715895 14.4796209,7.65767599 14.3280514,7.52531087 C12.8849328,6.25510855 13.080256,5.87615738 13.6587933,4.75531669 C13.7527249,4.57385843 13.8530617,4.37958994 13.9533903,4.1661225 C14.7443293,2.49349634 14.3696683,1.59582366 14.3237886,1.49868122 C14.2394646,1.31935709 14.0302572,1.2425039 13.848788,1.32255965 C13.6673298,1.40154698 13.5851399,1.61715674 13.6609247,1.79862593 C13.6641269,1.80609756 13.9373776,2.49671256 13.2948165,3.85337302 C13.1976823,4.05938331 13.100548,4.24617826 13.0108764,4.42016023 C12.3512095,5.70211256 12.0651653,6.50160442 13.8466566,8.07167767 L13.8466512,8.07181977 Z",
                        id: "line-right"
                    }), r.a.createElement("path", {
                        d: "M4.3190407,11.8132384 C3.52274593,11.7961599 2.79585814,12.2007151 2.14367849,13.0055355 C1.88003035,13.3310924 1.47015756,13.7932773 0.944987209,14.0707959 C0.766731512,14.1647276 0.698417558,14.3846029 0.792349244,14.562875 C0.85746064,14.6866927 0.983415174,14.7582092 1.11470913,14.7582092 C1.17234971,14.7582092 1.22998756,14.7432654 1.28549401,14.715513 C1.92808238,14.3760746 2.40628006,13.8391816 2.70940273,13.4645205 C3.2142975,12.8433008 3.74373064,12.4953095 4.30196494,12.5422822 C5.32880564,12.5582933 6.15712599,13.6374368 6.16565157,13.6491868 C6.28626942,13.8082299 6.51574692,13.8413184 6.67587483,13.7207033 C6.83600273,13.6000882 6.86800645,13.3716737 6.74739134,13.2104801 C6.70682924,13.156042 5.70347215,11.8388725 4.3190489,11.8132411 L4.3190407,11.8132384 Z",
                        id: "line-left"
                    }), r.a.createElement("path", {
                        d: "M6.8125,7.98437791 C9.59643023,8.20426413 9.59643023,9.6100314 9.59643023,10.739343 C9.59643023,10.9400139 9.7597443,11.1033198 9.96040698,11.1033198 C10.1610697,11.1033198 10.323318,10.93894 10.323318,10.7382773 C10.323318,9.61749128 10.323318,7.52861453 6.86799826,7.25754477 C4.82603953,7.09529913 4.7385157,5.64254826 4.7353186,5.5742343 C4.72891403,5.37676326 4.56773628,5.21984884 4.37134186,5.21984884 C4.36813985,5.21984884 4.36493756,5.21984884 4.36173528,5.22091617 C4.16106167,5.2251858 4.00202133,5.39170106 4.00628412,5.59344583 C4.00841879,5.61479394 4.09167656,7.76880803 6.81262133,7.9844342 L6.8125,7.98437791 Z",
                        id: "line-middle"
                    }), r.a.createElement("path", {
                        d: "M6.58077907,5.18131977 C6.63521709,5.20266788 6.70032849,5.19733092 6.75156395,5.16103899 L7.08887093,4.91126678 C7.12729616,4.88351492 7.1518482,4.83975027 7.15825331,4.79385149 C7.16572522,4.74688428 7.15184902,4.69885138 7.12302791,4.66149184 L6.9746582,4.4746969 L7.16572413,4.33380074 C7.20414936,4.30604888 7.22976983,4.26335266 7.23617221,4.21638545 C7.24257678,4.16941824 7.22976791,4.12138533 7.1998811,4.0840258 L7.05364552,3.89829655 L7.24364302,3.75846609 C7.28206826,3.73071423 7.30768872,3.68694958 7.3140911,3.6399851 C7.3204954,3.59301789 7.30768653,3.54498498 7.2778,3.50762545 L7.13156442,3.3218962 L7.32156192,3.18206574 C7.39948355,3.12442516 7.41656203,3.01554911 7.35892145,2.93656178 C7.30128087,2.85864016 7.19240483,2.84156167 7.1134175,2.89920225 L6.77611052,3.1457719 C6.73768256,3.17352376 6.71206483,3.21621998 6.70566244,3.26318719 C6.69925815,3.3101544 6.71206674,3.35818731 6.74195355,3.39554684 L6.88818913,3.58127609 L6.69925733,3.72110655 C6.66082936,3.74885841 6.63521163,3.79155463 6.62880924,3.83852184 C6.62240686,3.88548905 6.63628115,3.93352196 6.66510035,3.97088149 L6.81133593,4.15661074 L6.62027,4.2975069 C6.58184477,4.32525876 6.55729273,4.36795498 6.55088762,4.41492219 C6.54341571,4.4618894 6.55729191,4.50992231 6.58611302,4.54728184 L6.7334143,4.73514522 L6.54234837,4.87817824 C6.46442674,4.93581882 6.44841669,5.04576056 6.50605727,5.12368219 C6.52633804,5.15036726 6.55195605,5.16958097 6.58077634,5.18132277 L6.58077907,5.18131977 Z",
                        id: "sparkle-11"
                    }), r.a.createElement("path", {
                        d: "M11.7707267,1.42514535 L11.6052785,1.59166198 C11.5711216,1.62581895 11.5529747,1.67171773 11.5540431,1.71868221 C11.5551107,1.76564942 11.5753915,1.81154547 11.6106152,1.84356831 L11.7856684,2.00367983 L11.6191517,2.17339628 C11.5860632,2.20755326 11.5679163,2.2523836 11.5689847,2.30041651 C11.5700531,2.34844942 11.5903328,2.39327977 11.6255569,2.42530262 L11.8016784,2.58754826 L11.6340961,2.75833314 C11.5668506,2.82771552 11.5679163,2.9387257 11.6372984,3.00597122 C11.6607814,3.02945428 11.6896023,3.04439645 11.7205567,3.05187 C11.7760604,3.06467887 11.8390377,3.04866772 11.8806682,3.00810535 L12.1752653,2.70815244 C12.2083539,2.67399547 12.2265008,2.62916512 12.2254323,2.58113221 C12.2243639,2.5330993 12.2040842,2.48826895 12.1688602,2.4562461 L11.9938071,2.29400047 L12.1603209,2.12428401 C12.1934095,2.09012703 12.2115564,2.04422826 12.210488,1.99726378 C12.2094196,1.9502993 12.1891399,1.90440052 12.1539158,1.87237767 L11.9799284,1.71226616 L12.1453766,1.54468384 C12.1795336,1.51052686 12.1976805,1.46462808 12.1966121,1.4176636 C12.1955436,1.37069913 12.1752639,1.32480035 12.1400399,1.2927775 L11.9660525,1.13160029 L12.1325691,0.962949535 C12.200883,0.894635581 12.1998146,0.783625407 12.1315017,0.715311453 C12.0621194,0.6469975 11.9521776,0.64806593 11.8838637,0.716378791 L11.5903323,1.01310728 C11.5572437,1.04726426 11.5390968,1.09316303 11.5401652,1.14012751 C11.5412328,1.18709472 11.5615133,1.23299077 11.5967374,1.26501362 L11.7707267,1.42514535 Z",
                        id: "sparkle-12"
                    }), r.a.createElement("path", {
                        d: "M2.12124419,3.59616279 L1.95579599,3.76161099 C1.92163901,3.79576797 1.90349209,3.84166674 1.90456052,3.88863122 C1.90562813,3.93773256 1.92590891,3.98256291 1.96113267,4.01565145 L2.13618581,4.17576297 L1.96966919,4.34547942 C1.93551221,4.37856797 1.91736529,4.42446674 1.91843372,4.47143395 C1.9205684,4.51946686 1.93978183,4.56429721 1.97500587,4.59632006 L2.15112744,4.7585657 L1.98354512,4.92828215 C1.91523116,4.99766453 1.91629959,5.10867471 1.98568006,5.17698866 C2.00916285,5.20047145 2.03798396,5.2154139 2.06786995,5.22288744 C2.12657623,5.23569603 2.1884878,5.21968516 2.23224972,5.1737861 L2.52684681,4.8748989 C2.55993535,4.84074192 2.57808227,4.79591157 2.57701384,4.74787866 C2.57594651,4.70091145 2.55566573,4.6560811 2.52044169,4.62299256 L2.34538855,4.46181535 L2.51190518,4.2920989 C2.54499373,4.25794192 2.56314065,4.21311157 2.56207222,4.16507866 C2.56100488,4.11811145 2.54179172,4.07221541 2.50550006,4.04126099 L2.33151262,3.88008378 L2.49589239,3.71250145 C2.53004937,3.67834448 2.54819628,3.6324457 2.54712785,3.58548122 C2.54712785,3.53851401 2.52684708,3.49261797 2.49162413,3.46059512 L2.31763669,3.3004836 L2.48415332,3.13290128 C2.55139884,3.06458733 2.55033315,2.95250872 2.48201865,2.88419477 C2.41263626,2.81694924 2.30269452,2.81801494 2.23438056,2.88632944 L1.94084917,3.18305793 C1.90776062,3.21828334 1.8896137,3.26311369 1.89068213,3.31114659 C1.89174974,3.3581138 1.91203024,3.40294415 1.94725428,3.4360327 L2.12124419,3.59616279 Z",
                        id: "sparkle-13"
                    })), r.a.createElement("g", {
                        id: "Thumbs",
                        transform: "translate(8.000000, 11.000000)",
                        fill: "#808080"
                    }, r.a.createElement("path", {
                        d: "M1.1694627,15.5842128 L3.27664273,15.5842128 C3.50746151,15.5842128 3.71373319,15.5114526 3.92380219,15.3667816 L4.11494754,15.3808145 C4.54957627,15.7825353 5.08439226,16 5.66793693,16 L12.3682959,16 C13.9172173,16 14.9213985,15.1365822 15.1022464,13.6660042 L16,7.8459088 L16,7.65024424 C16,6.32095442 14.9572801,5.24379945 13.6704858,5.24379945 L10.5925824,5.24379945 L10.4360977,5.0821469 L10.4360977,2.88092061 C10.4360977,1.74424215 10.1182908,0.943645515 9.48246675,0.468015594 C8.73606773,-0.0927468456 7.84618986,-0.0816042339 7.06696402,0.148225441 C6.84526408,0.224565918 6.70044035,0.432946313 6.70044035,0.679694319 L6.70044035,3.51683042 C6.70044035,4.46642051 6.2235112,5.20862934 5.43561434,5.76785379 C5.01809111,6.06419867 4.73484238,6.19388513 4.22981515,6.38359619 L4.06568615,6.34598181 C3.85442233,6.12774114 3.56118358,6.00199962 3.25296655,6.00199962 L1.14578651,6.00199962 C0.521925248,6.00199962 0,6.54107705 0,7.1855409 L0,14.3710016 C0.0209884167,15.0431295 0.54477411,15.5842128 1.1694627,15.5842128 Z M4.42234789,7.62578616 L4.53215715,7.47149203 C5.07393194,7.29659624 5.7055316,6.9942908 6.30566687,6.51081896 C7.23818614,5.75957697 7.78436547,4.78242993 7.78436547,3.54128849 L7.78436547,1.31560414 L7.92785488,1.15450997 C8.27898784,1.12428256 8.63167315,1.19714906 8.88226539,1.37835922 C9.23679456,1.63190809 9.39952489,2.13622125 9.39952489,2.88092061 L9.39952489,5.81588899 C9.39952489,6.11793987 9.63725462,6.36352047 9.92964936,6.36352047 L13.6941621,6.36352047 C14.3961669,6.36352047 14.9634272,6.94951425 14.9634272,7.67470231 L14.9614537,7.72475248 L14.8568977,8.39838742 L14.7023864,8.53444786 L10.1087286,8.52576047 C9.82521211,8.62586019 9.63612058,8.86703402 9.63612058,9.08996816 C9.63612058,9.32823735 9.81820566,9.56402683 10.0581198,9.64548846 L14.6633329,9.64548846 L14.4079637,11.2907837 L14.2534523,11.4268442 L10.0967587,11.4246054 C9.81679264,11.4732453 9.63612058,11.6871618 9.63612058,11.9853362 C9.63612058,12.2888561 9.80212689,12.4814577 10.0708055,12.5149929 L14.2243135,12.5149929 L14.195251,12.7022376 C14.1706254,12.8608958 14.1260535,13.1343786 14.0637323,13.495723 L14.0637323,13.507952 C14.0637323,13.5171238 14.0637323,13.5171238 14.0621597,13.5430422 C14.0243454,13.8164837 13.9948373,13.949889 13.9061339,14.136047 C13.6746905,14.6217678 13.1926526,14.904737 12.3919721,14.904737 L5.69161311,14.904737 C4.98960829,14.904737 4.42234789,14.3187433 4.42234789,13.5935552 L4.42234789,7.62578616 Z M1.08400648,7.28337319 L1.24049123,7.12172063 L3.18193801,7.12172063 L3.33842277,7.28337319 L3.33842277,14.3272973 L3.18193801,14.4889498 L1.24049123,14.4889498 L1.08400648,14.3272973 L1.08400648,7.28337319 Z",
                        id: "Combined-Shape"
                    }))))))
                },
                ie = function(e) {
                    e.className;
                    return r.a.createElement("svg", {
                        width: "34px",
                        height: "34px",
                        viewBox: "0 0 34 34",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("g", {
                        id: "Page-1",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, r.a.createElement("g", {
                        id: "feedback",
                        transform: "translate(1.000000, 1.000000)",
                        fillRule: "nonzero"
                    }, r.a.createElement("g", {
                        id: "thumbs2",
                        fill: "#FFFFFF",
                        stroke: "#E6E6E6"
                    }, r.a.createElement("circle", {
                        id: "Oval",
                        cx: "16",
                        cy: "16",
                        r: "16"
                    })), r.a.createElement("path", {
                        d: "M9.1694627,23.5842128 L11.2766427,23.5842128 C11.5074615,23.5842128 11.7137332,23.5114526 11.9238022,23.3667816 L12.1149475,23.3808145 C12.5495763,23.7825353 13.0843923,24 13.6679369,24 L20.3682959,24 C21.9172173,24 22.9213985,23.1365822 23.1022464,21.6660042 L24,15.8459088 L24,15.6502442 C24,14.3209544 22.9572801,13.2437995 21.6704858,13.2437995 L18.5925824,13.2437995 L18.4360977,13.0821469 L18.4360977,10.8809206 C18.4360977,9.74424215 18.1182908,8.94364552 17.4824668,8.46801559 C16.7360677,7.90725315 15.8461899,7.91839577 15.066964,8.14822544 C14.8452641,8.22456592 14.7004404,8.43294631 14.7004404,8.67969432 L14.7004404,11.5168304 C14.7004404,12.4664205 14.2235112,13.2086293 13.4356143,13.7678538 C13.0180911,14.0641987 12.7348424,14.1938851 12.2298152,14.3835962 L12.0656861,14.3459818 C11.8544223,14.1277411 11.5611836,14.0019996 11.2529665,14.0019996 L9.14578651,14.0019996 C8.52192525,14.0019996 8,14.5410771 8,15.1855409 L8,22.3710016 C8.02098842,23.0431295 8.54477411,23.5842128 9.1694627,23.5842128 Z M12.4223479,15.6257862 L12.5321572,15.471492 C13.0739319,15.2965962 13.7055316,14.9942908 14.3056669,14.510819 C15.2381861,13.759577 15.7843655,12.7824299 15.7843655,11.5412885 L15.7843655,9.31560414 L15.9278549,9.15450997 C16.2789878,9.12428256 16.6316732,9.19714906 16.8822654,9.37835922 C17.2367946,9.63190809 17.3995249,10.1362212 17.3995249,10.8809206 L17.3995249,13.815889 C17.3995249,14.1179399 17.6372546,14.3635205 17.9296494,14.3635205 L21.6941621,14.3635205 C22.3961669,14.3635205 22.9634272,14.9495143 22.9634272,15.6747023 L22.9614537,15.7247525 L22.8568977,16.3983874 L22.7023864,16.5344479 L18.1087286,16.5257605 C17.8252121,16.6258602 17.6361206,16.867034 17.6361206,17.0899682 C17.6361206,17.3282373 17.8182057,17.5640268 18.0581198,17.6454885 L22.6633329,17.6454885 L22.4079637,19.2907837 L22.2534523,19.4268442 L18.0967587,19.4246054 C17.8167926,19.4732453 17.6361206,19.6871618 17.6361206,19.9853362 C17.6361206,20.2888561 17.8021269,20.4814577 18.0708055,20.5149929 L22.2243135,20.5149929 L22.195251,20.7022376 C22.1706254,20.8608958 22.1260535,21.1343786 22.0637323,21.495723 L22.0637323,21.507952 C22.0637323,21.5171238 22.0637323,21.5171238 22.0621597,21.5430422 C22.0243454,21.8164837 21.9948373,21.949889 21.9061339,22.136047 C21.6746905,22.6217678 21.1926526,22.904737 20.3919721,22.904737 L13.6916131,22.904737 C12.9896083,22.904737 12.4223479,22.3187433 12.4223479,21.5935552 L12.4223479,15.6257862 Z M9.08400648,15.2833732 L9.24049123,15.1217206 L11.181938,15.1217206 L11.3384228,15.2833732 L11.3384228,22.3272973 L11.181938,22.4889498 L9.24049123,22.4889498 L9.08400648,22.3272973 L9.08400648,15.2833732 Z",
                        id: "Thumbs",
                        fill: "#808080",
                        transform: "translate(16.000000, 16.000000) scale(1, -1) translate(-16.000000, -16.000000) "
                    }))))
                };
            a(101);

            function le(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
                        return a
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function ce(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function ue(e) {
                var t = e.active,
                    a = e.onClose,
                    n = e.question,
                    o = e.tags,
                    s = e.onSubmit,
                    i = e.primaryColor,
                    l = e.type,
                    c = void 0 === l ? "POSITIVE" : l,
                    u = e.shouldShowRedesignUI,
                    d = ce(r.a.useState(new Set([])), 2),
                    p = d[0],
                    m = d[1],
                    g = ce(r.a.useState(""), 2),
                    f = g[0],
                    h = g[1],
                    C = ce(r.a.useState(!1), 2),
                    b = C[0],
                    y = C[1],
                    v = r.a.useCallback(function() {
                        (f.trim().length > 0 || p.size > 0) && s({
                            tags: le(p),
                            comment: f
                        })
                    }),
                    E = r.a.useCallback(function(e) {
                        return function(t) {
                            t.stopPropagation(), t.preventDefault(), p.has(e) ? p.delete(e) : p.add(e), m(new Set(le(p))), k()
                        }
                    });
                r.a.useEffect(function() {
                    k()
                }, [f]);
                var k = r.a.useCallback(function() {
                        p.size > 0 || f.trim().length > 0 ? y(!0) : y(!1)
                    }),
                    w = "POSITIVE" === c ? "#25b27c" : "#b22525",
                    L = {
                        borderColor: w,
                        color: w,
                        backgroundColor: Object(oe.g)(w, .1)
                    };
                if (!c) return null;
                var x = u ? "v2" : "";
                return r.a.createElement(K.a.Modal, {
                    onClose: a,
                    active: t,
                    noHeader: !0,
                    className: "feedback-comments-modal-wrapper"
                }, r.a.createElement("div", {
                    className: "feedback-comments-modal"
                }, r.a.createElement("div", {
                    className: "feedback-comments-modal-icon ".concat(c)
                }, "POSITIVE" === c ? r.a.createElement(se, null) : r.a.createElement(ie, null)), r.a.createElement("div", {
                    className: "feedback-comments-modal-title ".concat(x)
                }, n[c.toLowerCase()]), r.a.createElement("div", {
                    className: "feedback-comments-modal-tags"
                }, o[c.toLowerCase()].map(function(e, t) {
                    return r.a.createElement("div", {
                        key: t,
                        onClick: E(e),
                        style: p.has(e) ? L : void 0,
                        className: "feedback-comments-modal-tag ".concat(x, " ").concat(p.has(e) ? "active" : "")
                    }, e)
                })), r.a.createElement("textarea", {
                    placeholder: "Add a note...",
                    value: f,
                    onChange: function(e) {
                        return h(e.target.value)
                    },
                    className: "feedback-comments-modal-textarea ".concat(x)
                }), r.a.createElement("div", {
                    className: "feedback-comments-modal-footer"
                }, r.a.createElement("div", {
                    onClick: a,
                    style: {
                        color: i
                    },
                    className: "feedback-comments-modal-footer-skip ".concat(x)
                }, "Skip"), r.a.createElement("div", {
                    onClick: v,
                    style: {
                        backgroundColor: b ? i : "#E1E1E1"
                    },
                    className: "feedback-comments-modal-footer-submit ".concat(x)
                }, "Submit"))))
            }
            ue.propTypes = {
                active: s.a.bool,
                onClose: s.a.func,
                onSubmit: s.a.func,
                tags: s.a.arrayOf(s.a.string),
                shouldShowRedesignUI: s.a.bool,
                question: s.a.object,
                type: s.a.string,
                primaryColor: s.a.string
            }, ue.defaultProps = {
                active: !1,
                onClose: function() {},
                onSubmit: function() {},
                tags: ["test", "one", "two", "three"],
                shouldShowRedesignUI: !1
            };
            var de = ue,
                pe = function(e) {
                    e.className;
                    return r.a.createElement("svg", {
                        width: "34px",
                        height: "34px",
                        viewBox: "0 0 34 34",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("g", {
                        id: "Page-1",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, r.a.createElement("g", {
                        id: "feedback",
                        transform: "translate(1.000000, 1.000000)",
                        fillRule: "nonzero"
                    }, r.a.createElement("g", {
                        id: "thumbs",
                        fill: "#FFFFFF",
                        stroke: "#E6E6E6"
                    }, r.a.createElement("circle", {
                        id: "Oval",
                        cx: "16",
                        cy: "16",
                        r: "16"
                    })), r.a.createElement("path", {
                        d: "M11.3560091,20.0114218 C10.1854827,20.0114218 9.23658355,19.0625227 9.23658355,17.8919963 L9.23658355,11.3560091 C9.23658355,10.1854827 10.1854827,9.23658355 11.3560091,9.23658355 L20.643991,9.23658355 C21.8145173,9.23658355 22.7634165,10.1854827 22.7634165,11.3560091 L22.7634165,17.8919963 C22.7634165,19.0625227 21.8145173,20.0114218 20.643991,20.0114218 L19.5984698,20.0114218 L19.5984698,23.4300643 L15.5885397,20.0114218 L11.3560091,20.0114218 Z M18.4556127,18.8685647 L20.643991,18.8685647 C21.1833348,18.8685647 21.6205593,18.4313401 21.6205593,17.8919963 L21.6205593,11.3560091 C21.6205593,10.8166653 21.1833348,10.3794407 20.643991,10.3794407 L11.3560091,10.3794407 C10.8166653,10.3794407 10.3794407,10.8166653 10.3794407,11.3560091 L10.3794407,17.8919963 C10.3794407,18.4313401 10.8166653,18.8685647 11.3560091,18.8685647 L16.0095848,18.8685647 L18.4556127,20.9539114 L18.4556127,18.8685647 Z",
                        id: "Thumbs",
                        fill: "#808080"
                    }))))
                };
            a(102);

            function me(e) {
                var t = e.onClick,
                    a = e.active,
                    n = e.type,
                    o = e.highlighted,
                    s = e.disabled,
                    i = "";
                switch (n) {
                    case "POSITIVE":
                        i = se;
                        break;
                    case "NEGATIVE":
                        i = ie;
                        break;
                    case "COMMENT":
                        i = pe
                }
                if (!a) return null;
                var l = o ? "highlighted" : "";
                return r.a.createElement("div", {
                    onClick: !s && t,
                    className: "feedback-icon ".concat(l, " ").concat(n)
                }, r.a.createElement(i, null))
            }
            me.TYPES = {
                POSITIVE: "POSITIVE",
                NEGATIVE: "NEGATIVE",
                COMMENT: "COMMENT"
            };
            var ge = me,
                fe = a(183);
            a(103);

            function he(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var Ce = {
                POSITIVE: "POSITIVE",
                NEGATIVE: "NEGATIVE"
            };

            function be(e) {
                var t = e.id,
                    a = e.primaryColor,
                    n = e.question,
                    o = e.tags,
                    s = e.shouldShowRedesignUI,
                    l = he(r.a.useState(!1), 2),
                    c = l[0],
                    u = l[1],
                    d = he(r.a.useState(!1), 2),
                    p = d[0],
                    m = d[1],
                    g = he(r.a.useState(!1), 2),
                    f = g[0],
                    h = g[1],
                    C = "/api/feedback/messages/".concat(t, "/"),
                    b = "".concat(C, "comments/"),
                    y = Object(i.d)(fe.a),
                    v = r.a.useCallback(function() {
                        m(Ce.POSITIVE), y.makeRequest(C, "POST", {
                            feedback_positive: !0
                        })
                    }),
                    E = r.a.useCallback(function() {
                        m(Ce.NEGATIVE), y.makeRequest(C, "POST", {
                            feedback_positive: !1
                        })
                    }),
                    k = r.a.useCallback(function(e) {
                        var t = e.tags,
                            a = e.comment;
                        h(!0), u(!1), y.makeRequest(b, "POST", {
                            tags: t,
                            user_feedback_message: a
                        })
                    }),
                    w = r.a.useCallback(function() {
                        return u(!0)
                    }),
                    L = r.a.useCallback(function() {
                        return u(!1)
                    }),
                    x = !p || p === Ce.POSITIVE,
                    O = !p || p === Ce.NEGATIVE;
                return r.a.createElement("div", {
                    className: "message-feedback"
                }, r.a.createElement(ge, {
                    type: ge.TYPES.POSITIVE,
                    onClick: v,
                    active: x,
                    highlighted: p === Ce.POSITIVE
                }), r.a.createElement(ge, {
                    type: ge.TYPES.NEGATIVE,
                    onClick: E,
                    active: O,
                    highlighted: p === Ce.NEGATIVE
                }), r.a.createElement(ge, {
                    type: ge.TYPES.COMMENT,
                    onClick: w,
                    active: p,
                    highlighted: f,
                    disabled: f
                }), r.a.createElement(de, {
                    question: n,
                    tags: o,
                    type: p,
                    primaryColor: a,
                    onClose: L,
                    active: c,
                    onSubmit: k,
                    shouldShowRedesignUI: s
                }))
            }
            be.propTypes = {
                id: s.a.string,
                question: s.a.object,
                tags: s.a.arrayOf(s.a.string),
                primaryColor: s.a.string,
                shouldShowRedesignUI: s.a.bool
            };
            var ye, ve = be;
            a(104);

            function Ee(e) {
                return (Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function ke(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function we(e) {
                return (we = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function Le(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function xe(e, t) {
                return (xe = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Oe(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var Se = Object(i.b)(function(e) {
                    return {
                        messages: b.e(e),
                        isTyping: l.t(e),
                        shouldShowGDPRView: l.x(e),
                        hideBranding: l.f(e),
                        debugIndex: b.g(e),
                        appSettings: l.b(e),
                        quickReplies: b.c(e),
                        welcomeMessages: b.m(e),
                        promptConfig: b.h(e),
                        isTaskboxOpen: l.s(e),
                        shouldShowRedesignUI: l.y(e),
                        tasks: b.j(e),
                        isMirrored: b.p(e)
                    }
                }, function(e) {
                    return Object(f.b)({
                        sendMessage: C.s,
                        resendMessage: C.l,
                        sendFormMessage: C.r,
                        openDebugView: h.n,
                        openLocationPicker: h.r,
                        openUpload: h.u,
                        openFeedback: h.o,
                        openWebview: h.v,
                        openImage: h.p,
                        closeTaskbox: h.h,
                        hideGDPRView: h.k
                    }, e)
                })(ye = function(e) {
                    function t(e) {
                        var a, n, o;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), n = this, o = we(t).call(this, e), a = !o || "object" !== Ee(o) && "function" != typeof o ? Le(n) : o, Oe(Le(a), "componentDidMount", function() {
                            if (a._observer = function(e) {
                                    if (e) {
                                        var t = new MutationObserver(function(t) {
                                            t.forEach(function(t) {
                                                "childList" === t.type && t.target.classList.contains("message-section-messages") && setTimeout(function() {
                                                    return J(e)
                                                }, 0)
                                            })
                                        });
                                        return t.observe(e, {
                                            attributes: !0,
                                            childList: !0,
                                            subtree: !0
                                        }), setTimeout(function() {
                                            return J(e, 0)
                                        }, 0), t
                                    }
                                }(a._messageSectionDOM), !a.props.shouldShowRedesignUI) {
                                var e = a.getBackgroundStyles();
                                a._messageSectionDOM.style.setProperty("background-image", e.backgroundImage), a._messageSectionDOM.style.setProperty("background-size", e.backgroundSize)
                            }
                            a.props.isTaskboxOpen && J(a._messageSectionDOM)
                        }), Oe(Le(a), "componentDidUpdate", function(e) {
                            e.isTaskboxOpen !== a.props.isTaskboxOpen && a.props.shouldShowRedesignUI && a.handleTaskBoxOpen();
                            var t = a.props.appSettings.gdpr && a.props.shouldShowGDPRView,
                                n = a.props,
                                r = n.messages,
                                o = n.welcomeMessages;
                            if (t && r.length + o.length > 6 && a.props.hideGDPRView(), e.shouldShowRedesignUI !== a.props.shouldShowRedesignUI && !a.props.shouldShowRedesignUI) {
                                var s = a.getBackgroundStyles();
                                a._messageSectionDOM.style.setProperty("backgroundImage", s.backgroundImage), a._messageSectionDOM.style.setProperty("background-size", s.backgroundSize)
                            }
                        }), Oe(Le(a), "componentWillUnmount", function() {
                            a._observer.disconnect()
                        }), Oe(Le(a), "renderWelcomeMessages", function(e) {
                            return function(e, t) {
                                if (e && !(e.length < 0)) {
                                    var a = Y.f.type,
                                        n = Y.f.agentName;
                                    return e.map(function(e, r) {
                                        var o = "welcom-".concat(r);
                                        return {
                                            id: "".concat(o),
                                            created_at: (new Date).toString(),
                                            businessId: t,
                                            type: a,
                                            body: e,
                                            agentName: n,
                                            key: "".concat(o),
                                            isWelcomeMessage: !0
                                        }
                                    })
                                }
                            }(e).map(function(e, t) {
                                if (e.hidden || "{}" === e.body) return null;
                                var n = e.direction ? "from-user" : "from-business",
                                    o = e.isWelcomeMessage ? "welcome-message-".concat(t) : "";
                                return r.a.createElement(r.a.Fragment, null, a.renderTimelineMessage(e, t), r.a.createElement("div", {
                                    className: "message-section-message-row ".concat(n)
                                }, a.renderPrefixCTAS(e), r.a.createElement(K.a.ChatElement, {
                                    prefixClassName: "message-section-message",
                                    key: e.key,
                                    value: e.body,
                                    primary: e.direction,
                                    onClick: a.handleClick,
                                    dataTestID: o,
                                    fromUser: e.direction
                                })))
                            })
                        }), Oe(Le(a), "handleQuickReplyClick", function(e) {
                            var t = e.payload,
                                n = t.message,
                                r = t.gogo_message ? "".concat(n, "{").concat(e.payload.gogo_message, "}") : n;
                            a.props.sendMessage(r)
                        }), a.state = {}, a.lastMessageTime = +new Date, a.quickReplyRef = r.a.createRef(), a._messageSectionDOM = r.a.createRef(), a.renderMessages = a.renderMessages.bind(Le(a)), a.renderQuickReplies = a.renderQuickReplies.bind(Le(a)), a.renderTypingIndicator = a.renderTypingIndicator.bind(Le(a)), a.renderPoweredByLogo = a.renderPoweredByLogo.bind(Le(a)), a.renderVoiceInterimResults = a.renderVoiceInterimResults.bind(Le(a)), a.handleClick = a.handleClick.bind(Le(a)), a.handleQuickReplyClick = a.handleQuickReplyClick.bind(Le(a)), a.openEmail = a.openEmail.bind(Le(a)), a.handleTaskBoxOpen = a.handleTaskBoxOpen.bind(Le(a)), a
                    }
                    var a, n, o;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && xe(e, t)
                    }(t, r.a.Component), a = t, (n = [{
                        key: "getBackgroundStyles",
                        value: function() {
                            return {
                                backgroundImage: "url('".concat(Y.e.old, "')"),
                                backgroundSize: "256px"
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.isTaskboxOpen && this.props.shouldShowRedesignUI ? "taskbox-open" : "",
                                a = this.props.shouldShowRedesignUI ? "v2" : "";
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: "message-section-area ".concat(t, " ").concat(a),
                                id: "message-section-area",
                                ref: function(t) {
                                    e._messageSectionDOM = t
                                }
                            }, this.renderMessages(), this.renderVoiceInterimResults()), this.renderFixedBottomArea())
                        }
                    }, {
                        key: "handleTaskBoxOpen",
                        value: function() {
                            var e = this;
                            this._messageSectionDOM && setTimeout(function() {
                                J(e._messageSectionDOM)
                            }, 0)
                        }
                    }, {
                        key: "renderFixedBottomArea",
                        value: function() {
                            var e = this.props,
                                t = e.isTaskboxOpen,
                                a = e.shouldShowRedesignUI,
                                n = e.tasks,
                                o = e.hideBranding;
                            if (!a || !t) {
                                var s = this.props.appSettings["hide-composer"],
                                    i = this.props.appSettings["bot-type-voice-only"],
                                    l = s ? "no-composer" : "",
                                    c = n.length ? "" : "taskbox-hidden",
                                    u = a ? "v2" : "",
                                    d = a && o && !i && !n.length ? {
                                        bottom: "76px"
                                    } : {};
                                return a && (!i && o && n.length && (d.bottom = "110px"), i && (o || n.length && (d.bottom = "150px"), o && (n.length ? d.bottom = "127px" : d.bottom = "76px"))), r.a.createElement("div", {
                                    className: "fixed-bottom-area ".concat(l, " ").concat(u, " ").concat(c),
                                    style: d
                                }, this.renderTypingIndicator(), !a && this.renderPoweredByLogo())
                            }
                        }
                    }, {
                        key: "renderMessages",
                        value: function() {
                            var e = this,
                                t = this.props.appSettings,
                                a = t["user-feedback-questions"],
                                n = t["user-feedback-tags"],
                                o = t["primary-color"],
                                s = this.props,
                                i = s.messages,
                                l = s.welcomeMessages,
                                c = s.shouldShowRedesignUI,
                                u = this.props.messages.length;
                            return r.a.createElement("div", {
                                className: "message-section-messages",
                                id: "message-section-messages"
                            }, c ? this.renderWelcomeMessages(l) : null, i.map(function(t, s) {
                                if (t.hidden) return null;
                                if ("{}" === t.body) return null;
                                var i = t.direction ? "from-user" : "from-business",
                                    l = t.isMirrored ? "mirrored" : "",
                                    c = $(t, e.props.appSettings["show-user-feedback"]),
                                    d = s === u - 1 ? e.props.quickReplies : null;
                                return r.a.createElement(r.a.Fragment, null, e.renderTimelineMessage(t, s), r.a.createElement("div", {
                                    className: "message-section-message-row ".concat(i, " ").concat(l)
                                }, e.renderPrefixCTAS(t), r.a.createElement(K.a.ChatElement, {
                                    prefixClassName: "message-section-message",
                                    key: t.key,
                                    value: t.body,
                                    messageId: t.id,
                                    primary: t.direction,
                                    onClick: e.handleClick,
                                    fromUser: t.direction,
                                    isMirrored: t.isMirrored
                                }), c ? r.a.createElement(ve, {
                                    id: t.id,
                                    primaryColor: o,
                                    question: a,
                                    tags: n,
                                    shouldShowRedesignUI: !0
                                }) : null), d && d.length ? e.renderQuickReplies(d) : null)
                            }))
                        }
                    }, {
                        key: "renderQuickReplies",
                        value: function(e) {
                            var t = this,
                                a = this.props.appSettings["primary-color"],
                                n = this.props.isMirrored,
                                o = this.props.shouldShowRedesignUI ? "v2" : "",
                                s = n ? "mirrored" : "";
                            return r.a.createElement("div", {
                                className: "quick-reply-wrapper",
                                ref: this.quickReplyRef
                            }, r.a.createElement("div", {
                                className: "quick-reply-stacked"
                            }, e.map(function(e, n) {
                                var i = e.actionable_text;
                                return r.a.createElement("div", {
                                    key: n,
                                    onClick: function() {
                                        return t.handleQuickReplyClick(e, n)
                                    },
                                    className: "quick-reply-option",
                                    style: {
                                        backgroundColor: a
                                    }
                                }, r.a.createElement("span", {
                                    className: "quick-reply-option-text ".concat(o, " ").concat(s)
                                }, i))
                            })))
                        }
                    }, {
                        key: "renderPrefixCTAS",
                        value: function(e) {
                            var t = this,
                                a = e.direction,
                                n = e.id,
                                o = e.failed,
                                s = this.props.appSettings,
                                i = s.debug,
                                l = s["debug-section-dom-function"];
                            return a && this.props.debugIndex[n] && i && l ? r.a.createElement("div", {
                                onClick: function() {
                                    return t.props.openDebugView(t.props.debugIndex[n])
                                },
                                className: "message-section-message-debug-cta"
                            }, r.a.createElement(z, null)) : o ? r.a.createElement("div", {
                                onClick: function() {
                                    return t.props.resendMessage(n)
                                },
                                className: "message-section-message-retry-cta"
                            }, "Resend", r.a.createElement("div", {
                                className: "message-section-message-retry-cta-icon"
                            }, r.a.createElement(q, null))) : null
                        }
                    }, {
                        key: "renderTimelineMessage",
                        value: function(e, t) {
                            var a = function(e, t) {
                                var a = X()(e.createdAt).valueOf();
                                if (t > 0 && a - this.lastMessageTime <= Y.c) return this.lastMessageTime = a, null;
                                this.lastMessageTime = a;
                                var n = X()(a),
                                    r = X()(),
                                    o = X()().subtract(1, "day");
                                return (new Date).getTime() - a <= 36e5 ? n.fromNow() : n.isSame(r, "day") || n.isSame(o, "day") ? "".concat(n.format("LT"), ", ").concat(n.calendar().split(" ")[0]) : n.format("LT, Do MMM")
                            }.call(this, e, t);
                            return a ? r.a.createElement(te, {
                                key: "".concat(e.key, "-index"),
                                redesign: this.props.shouldShowRedesignUI ? "v2" : ""
                            }, a) : null
                        }
                    }, {
                        key: "renderTypingIndicator",
                        value: function() {
                            return r.a.createElement(ne, {
                                isTyping: this.props.isTyping,
                                isMirrored: this.props.isMirrored
                            })
                        }
                    }, {
                        key: "renderVoiceInterimResults",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "renderPoweredByLogo",
                        value: function() {
                            return this.props.hideBranding ? null : r.a.createElement(re, {
                                className: "message-section-powered-by-logo"
                            })
                        }
                    }, {
                        key: "handleClick",
                        value: function(e, t, a) {
                            switch (t) {
                                case K.a.CLICK_TYPES.MESSAGE:
                                    return this.props.sendMessage(a.message);
                                case K.a.CLICK_TYPES.LINK:
                                    var n = {
                                        event_name: "external_link",
                                        event_type: "internal",
                                        link: a.url,
                                        status: !0
                                    };
                                    return Object(M.a)(n), window.open(a.url, "_blank");
                                case K.a.CLICK_TYPES.CHATFORM:
                                    return this.props.sendFormMessage(a);
                                case K.a.CLICK_TYPES.LOCATION:
                                    return this.props.openLocationPicker(a);
                                case K.a.CLICK_TYPES.UPLOAD:
                                    return this.props.openUpload(a);
                                case K.a.CLICK_TYPES.FEEDBACK:
                                    return this.props.openFeedback(a);
                                case K.a.CLICK_TYPES.WEBVIEW:
                                    return this.props.openWebview(a);
                                case K.a.CLICK_TYPES.IMAGE:
                                    return this.props.openImage(a);
                                case K.a.CLICK_TYPES.SHARE:
                                case K.a.CLICK_TYPES.EMAIL:
                                    return this.openEmail(a);
                                case K.a.CLICK_TYPES.CAROUSEL:
                                    return console.log("Not implemented yet");
                                default:
                                    return null
                            }
                        }
                    }, {
                        key: "openEmail",
                        value: function(e) {
                            if (!e) return null;
                            var t = e.to,
                                a = e.subject,
                                n = e.body;
                            window.open("mailto:".concat(t, "?subject=").concat(a, "&body=").concat(n.replace(/<br\s*\/?>/gm, "%0D%0A")))
                        }
                    }]) && ke(a.prototype, n), o && ke(a, o), t
                }()) || ye,
                Te = Se;
            Se.propTypes = {
                appSettings: s.a.shape({
                    "hide-composer": s.a.bool,
                    "user-feedback-questions": s.a.arrayOf(s.a.string),
                    "user-feedback-tags": s.a.arrayOf(s.a.string),
                    "primary-color": s.a.string,
                    "show-user-feedback": s.a.bool,
                    "bot-type-voice-only": s.a.bool,
                    "debug-section-dom-function": s.a.func,
                    gdpr: s.a.bool,
                    debug: s.a.bool
                }),
                sendMessage: s.a.func,
                sendFormMessage: s.a.func,
                openLocationPicker: s.a.func,
                openDebugView: s.a.func,
                resendMessage: s.a.func,
                openUpload: s.a.func,
                openFeedback: s.a.func,
                openWebview: s.a.func,
                openImage: s.a.func,
                hideGDPRView: s.a.func,
                isTyping: s.a.bool,
                shouldShowGDPRView: s.a.bool,
                shouldShowRedesignUI: s.a.bool,
                hideBranding: s.a.bool,
                isTaskboxOpen: s.a.bool,
                debugIndex: s.a.array,
                welcomeMessages: s.a.array,
                messages: s.a.arrayOf(s.a.shape({
                    active: s.a.bool,
                    additionalData: s.a.object,
                    agentName: s.a.string,
                    hidden: s.a.bool,
                    body: s.a.string,
                    id: s.a.number,
                    key: s.a.string,
                    type: s.a.string,
                    user_id: s.a.string,
                    coll_id: s.a.number,
                    direction: s.a.bool,
                    business_id: s.a.number,
                    claim_name: s.a.string,
                    conversation_number: s.a.number,
                    messageType: s.a.string,
                    timestamp: s.a.instanceOf(Date),
                    failed: s.a.bool,
                    freeform: s.a.bool
                })),
                quickReplies: s.a.arrayOf(s.a.shape({
                    actionable_text: s.a.string,
                    is_default: s.a.number,
                    payload: s.a.shape({
                        gogo_message: s.a.string,
                        link: s.a.string,
                        message: s.a.string
                    }),
                    type: s.a.string
                })),
                tasks: s.a.array,
                isMirrored: s.a.bool
            }, Se.defaultProps = {
                appSettings: {},
                sendMessage: function() {},
                sendFormMessage: function() {},
                openLocationPicker: function() {},
                openDebugView: function() {},
                resendMessage: function() {},
                openUpload: function() {},
                openFeedback: function() {},
                openWebview: function() {},
                openImage: function() {},
                hideGDPRView: function() {},
                isTyping: !1,
                shouldShowGDPRView: !1,
                hideBranding: !1,
                shouldShowRedesignUI: !1,
                isTaskboxOpen: !1,
                isMirrored: !1,
                debugIndex: [],
                messages: [],
                quickReplies: [],
                tasks: []
            };
            var je = a(210),
                Ne = a(211);

            function _e(e) {
                var t, a = e.value,
                    n = e.onChange,
                    o = e.onKeyDown,
                    s = e.onFocus,
                    i = e.onBlur,
                    l = e.onRef,
                    u = e.primaryColor,
                    d = e.isTaskboxOpen,
                    p = e.onSend,
                    m = e.style,
                    g = e.onTaskboxClick,
                    f = e.placeholder,
                    h = e.taskboxHidden;
                return r.a.createElement("div", {
                    className: "composer ".concat(""),
                    style: m
                }, h ? null : r.a.createElement("span", {
                    className: "composer-icon left",
                    onClick: g
                }, r.a.createElement(Ne.a, {
                    disabled: d,
                    primaryColor: u
                })), r.a.createElement("textarea", {
                    className: "composer-text-area",
                    id: "composer-text-area",
                    placeholder: f || c.a.get.COMPOSER_PLACEHOLDER,
                    value: a,
                    onChange: n,
                    onKeyDown: o,
                    onFocus: s,
                    onBlur: i,
                    ref: l,
                    rows: "1"
                }), (t = a ? "" : "disabled", r.a.createElement("span", {
                    className: "composer-icon right ".concat(t),
                    onClick: function() {
                        return p()
                    }
                }, r.a.createElement(je.a, {
                    disabled: !a,
                    primaryColor: u
                }))))
            }
            _e.propTypes = {
                value: s.a.string,
                onChange: s.a.func,
                onKeyDown: s.a.func,
                onFocus: s.a.func,
                onBlur: s.a.func,
                onRef: s.a.func,
                onTaskboxClick: s.a.func,
                onSend: s.a.func,
                style: s.a.object,
                primaryColor: s.a.string,
                placeholder: s.a.string,
                isTaskboxOpen: s.a.bool
            }, _e.defaultProps = {};
            var Pe = _e,
                Me = a(212),
                Ie = a(213);

            function Re(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, n)
                }
                return a
            }

            function Fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Re(a, !0).forEach(function(t) {
                        De(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Re(a).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }

            function De(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function Ae(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function He(e) {
                var t = e.value,
                    a = e.onChange,
                    n = e.onKeyDown,
                    o = e.onRef,
                    s = e.primaryColor,
                    i = e.onSend,
                    l = e.style,
                    u = e.placeholder,
                    d = e.hideBranding,
                    p = e.taskboxHidden,
                    m = e.isMirrored,
                    g = r.a.useRef(),
                    f = r.a.useRef(),
                    h = Ae(r.a.useState(d), 2),
                    C = h[0],
                    b = h[1],
                    y = Ae(r.a.useState(s), 2),
                    v = y[0],
                    E = y[1],
                    k = Ae(r.a.useState(l), 2),
                    w = k[0],
                    L = k[1],
                    x = Object(P.a)(.85, s),
                    O = Object(P.a)(.95, s),
                    S = Ae(r.a.useState(O), 2),
                    T = S[0],
                    j = S[1],
                    N = Ae(r.a.useState(x), 2),
                    _ = N[0],
                    M = N[1],
                    I = C ? "13px" : "0px",
                    R = !!(window.screen.width < 600),
                    F = {
                        border: "2px solid ".concat(_),
                        borderRadius: "52px"
                    },
                    D = p ? "taskbox-hidden" : "",
                    A = m ? "mirrored" : "";
                r.a.useEffect(function() {
                    !R && f.current.focus()
                }, []), r.a.useEffect(function() {
                    g.current.style.setProperty("--primary-color", s), g.current.style.setProperty("--placeholder-color", v), g.current.style.setProperty("--background-color", "".concat(T))
                }, [s, v, T]);
                var H = r.a.useCallback(function() {
                        return r.a.createElement("textarea", {
                            className: "composer-text-area v2 ".concat(A),
                            id: "composer-text-area",
                            placeholder: u || c.a.get.COMPOSER_PLACEHOLDER,
                            value: t,
                            onChange: a,
                            onKeyDown: n,
                            onFocus: Z,
                            onBlur: U,
                            ref: f,
                            rows: "1",
                            "data-testid": "composerTextArea"
                        })
                    }, [u, t, a, n, Z, o]),
                    V = r.a.useCallback(function() {
                        var e = t ? "" : "disabled",
                            a = m ? "left" : "right";
                        return r.a.createElement("span", {
                            className: "composer-icon ".concat(a, " ").concat(e, " ").concat(A),
                            onClick: function() {
                                i()
                            },
                            "data-testid": "composerSendButton"
                        }, r.a.createElement(Me.a, {
                            disabled: !t,
                            backgroundColor: s,
                            backgroundColorDisabled: x
                        }))
                    }, [s, i, t]),
                    B = r.a.useCallback(function() {
                        return d || C ? null : r.a.createElement("div", {
                            className: "composer-branding"
                        }, r.a.createElement(Ie.a, null))
                    }, [C, d]),
                    Z = function() {
                        E("#A6A6A6"), M(s), L({}), j("#ffffff"), R && !d && setTimeout(function() {
                            b(!0)
                        }, 0)
                    },
                    U = function() {
                        M(x), j(O), R && !d && setTimeout(function() {
                            b(!1)
                        }, 0), t ? L({
                            backgroundColor: l.backgroundColor
                        }) : (E(s), L(l))
                    };
                return r.a.createElement("div", {
                    className: "composer-wrapper v2 ".concat(D),
                    style: {
                        padding: "0px 10px ".concat(I, " 10px")
                    }
                }, r.a.createElement("div", {
                    className: "composer v2 ".concat(A),
                    style: Fe({}, w, {}, F),
                    ref: g,
                    "data-testid": "composer"
                }, H(), V()), B())
            }
            He.propTypes = {
                value: s.a.string,
                onChange: s.a.func,
                onKeyDown: s.a.func,
                onRef: s.a.func,
                onSend: s.a.func,
                style: s.a.object,
                primaryColor: s.a.string,
                placeholder: s.a.string,
                hideBranding: s.a.bool,
                taskboxHidden: s.a.bool,
                isMirrored: s.a.bool
            }, He.defaultProps = {
                onChange: function() {},
                onKeyDown: function() {},
                onSend: function() {},
                placeholder: "",
                hideBranding: !1,
                taskboxHidden: !1,
                isMirrored: !1
            };
            var Ve = He;
            a(105);

            function Be(e) {
                return (Be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Ze(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Ue(e) {
                return (Ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function Ge(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function We(e, t) {
                return (We = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Ke(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var qe = r.a.lazy(function() {
                    return Promise.all([a.e(0), a.e(167)]).then(a.bind(null, 554))
                }),
                ze = r.a.lazy(function() {
                    return Promise.all([a.e(0), a.e(168)]).then(a.bind(null, 555))
                }),
                Ye = function(e) {
                    function t(e) {
                        var a, n, r;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), n = this, r = Ue(t).call(this, e), a = !r || "object" !== Be(r) && "function" != typeof r ? Ge(n) : r, Ke(Ge(a), "handleChange", function(e) {
                            var t = a.props,
                                n = t.appSettings,
                                r = t.language,
                                o = n["enable-typing-suggestions"],
                                s = e.target.value;
                            a.setState({
                                text: s
                            }), o && "en" === r && (s.length > 0 ? a.searchSuggestions(s) : a.props.resetSuggestions(), a.updateComposerValue(s))
                        }), Ke(Ge(a), "getComposerStyles", function(e) {
                            if (a.props.shouldShowRedesignUI) return {
                                backgroundColor: Object(P.a)(.9, e),
                                color: e
                            }
                        }), Ke(Ge(a), "handleKeyDown", function(e) {
                            var t = e.keyCode;
                            13 !== t && 14 !== t || e.shiftKey || e.metaKey || (a.sendMessage(), e.preventDefault(), e.stopPropagation())
                        }), Ke(Ge(a), "handleTaskboxClick", function() {
                            a.props.isTaskboxOpen && !a.props.isHeaderExpanded ? a.props.closeTaskbox() : a.props.openTaskbox()
                        }), a.state = {
                            text: ""
                        }, a.searchSuggestions = Object(oe.a)(e.searchSuggestions, 300), a.updateComposerValue = Object(oe.a)(e.updateComposerValue, 200), a.sendMessage = a.sendMessage.bind(Ge(a)), a
                    }
                    var a, n, o;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && We(e, t)
                    }(t, r.a.Component), a = t, (n = [{
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function(e) {
                            this.props.composerValue !== e.composerValue && e.composerProps !== this.state.text && this.setState({
                                text: e.composerValue
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.isTaskboxOpen,
                                n = t.appSettings,
                                o = t.isComposerDisabled,
                                s = t.tasks,
                                i = t.shouldShowRedesignUI,
                                l = t.hideBranding,
                                c = t.language,
                                u = t.sendDummySystemMessage,
                                d = t.isTaskboxDisabled,
                                p = t.isMirrored,
                                m = n["primary-color"],
                                g = n["bot-type"],
                                f = n["composer-placeholder"],
                                h = n["language-config"],
                                C = n["bot-type-voice-only"],
                                b = (h[c] || {}).composerPlaceholder || f,
                                y = {
                                    value: this.state.text,
                                    onChange: this.handleChange,
                                    onKeyDown: this.handleKeyDown,
                                    onTaskboxClick: this.handleTaskboxClick,
                                    isMirrored: p,
                                    placeholder: b,
                                    isTaskboxOpen: a,
                                    hideBranding: l,
                                    primaryColor: m,
                                    botOnlyVoice: C,
                                    sendDummySystemMessage: u,
                                    style: this.getComposerStyles(m),
                                    enabled: _.c.includes(this.props.language),
                                    taskboxHidden: !s.length || d,
                                    onSend: this.sendMessage,
                                    onRef: function(t) {
                                        e.textInput = t
                                    }
                                },
                                v = i ? Ve : Pe,
                                E = i ? ze : qe;
                            if (o && !this.props.isChatPinned) return null;
                            var k = ["VOICE", "VOICE_ONLY"].indexOf(g) > -1,
                                w = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                            return k && !w ? r.a.createElement(r.a.Suspense, {
                                fallback: null
                            }, r.a.createElement(E, y)) : r.a.createElement(v, y)
                        }
                    }, {
                        key: "sendMessage",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.text;
                            e.trim() && (this.updateComposerValue.cancel(), this.setState({
                                text: ""
                            }), this.props.sendMessage(Object(oe.m)(e), {
                                freeform: !0
                            }))
                        }
                    }]) && Ze(a.prototype, n), o && Ze(a, o), t
                }();
            Ye.propTypes = {
                appSettings: s.a.shape({
                    "enable-typing-suggestions": s.a.bool,
                    "bot-type-voice-only": s.a.bool,
                    "primary-color": s.a.string,
                    "bot-type": s.a.string,
                    "composer-placeholder": s.a.string,
                    "language-config": s.a.object
                }),
                tasks: s.a.array,
                composerValue: s.a.string,
                business: s.a.object,
                language: s.a.string,
                closeTaskbox: s.a.func,
                isComposerDisabled: s.a.bool,
                isChatPinned: s.a.bool,
                isHeaderExpanded: s.a.bool,
                shouldShowRedesignUI: s.a.bool,
                isTaskboxOpen: s.a.bool,
                hideBranding: s.a.bool,
                openTaskbox: s.a.func,
                resetSuggestions: s.a.func,
                searchSuggestions: s.a.func,
                sendDummySystemMessage: s.a.func,
                sendMessage: s.a.func,
                updateComposerValue: s.a.func,
                composerProps: s.a.object,
                isMirrored: s.a.bool,
                isTaskboxDisabled: s.a.bool
            };
            var Qe = Object(i.b)(function(e) {
                    return {
                        isTaskboxOpen: l.s(e),
                        isComposerDisabled: l.i(e),
                        isChatPinned: b.o(e),
                        isListening: l.q(e),
                        isHeaderExpanded: l.o(e),
                        hideBranding: l.f(e),
                        appSettings: l.b(e),
                        tasks: b.j(e),
                        composerValue: l.c(e),
                        shouldShowRedesignUI: l.G(e),
                        language: b.b(e),
                        isMirrored: b.p(e),
                        isTaskboxDisabled: b.q(e)
                    }
                }, function(e) {
                    return Object(f.b)({
                        sendMessage: C.s,
                        searchSuggestions: C.p,
                        resetSuggestions: C.m,
                        openTaskbox: h.t,
                        closeTaskbox: h.h,
                        updateComposerValue: h.D,
                        sendDummySystemMessage: C.q
                    }, e)
                })(Ye),
                Xe = {
                    ENTER_KEY: 13,
                    DOWN_KEY: 40,
                    UP_KEY: 38,
                    ESC_KEY: 27
                },
                Je = (a(106), function(e) {
                    var t = e.title,
                        a = e.icon,
                        n = e.onClick,
                        o = e.highlighted ? "highlighted" : "";
                    return r.a.createElement("div", {
                        onClick: n,
                        className: "task ".concat(o)
                    }, r.a.createElement("div", {
                        className: "task-icon primary"
                    }, a ? r.a.createElement("img", {
                        role: "presentation",
                        src: a
                    }) : null), r.a.createElement("div", {
                        className: "task-title"
                    }, t), r.a.createElement("div", {
                        className: "task-icon arrow"
                    }))
                });
            Je.propTypes = {
                title: s.a.string,
                icon: s.a.string,
                onClick: s.a.func,
                highlighted: s.a.bool
            };
            var $e = Je;
            a(107);

            function et(e) {
                return (et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function tt(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function at(e) {
                return (at = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function nt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function rt(e, t) {
                return (rt = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ot(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var st = 3,
                it = -2,
                lt = function(e) {
                    function t(e) {
                        var a, n, o;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), n = this, o = at(t).call(this, e), a = !o || "object" !== et(o) && "function" != typeof o ? nt(n) : o, ot(nt(a), "renderTask", function(e, t) {
                            return r.a.createElement($e, {
                                highlighted: t === a.state.highlightIndex,
                                onClick: a._handleTaskClick(e),
                                key: "".concat(t, "-").concat(e.question),
                                title: e.question,
                                icon: e.android_icon_url
                            })
                        }), ot(nt(a), "_toggleShowMore", function() {
                            a.setState(function(e) {
                                return {
                                    showMore: !e.showMore
                                }
                            }, function() {
                                a.state.showMore ? a.props.showMoreTaskbox() : a.props.showLessTaskbox(), a.taskBoxTasksDOM.current.scrollTop = 0
                            })
                        }), ot(nt(a), "_handleTaskClick", function(e) {
                            return function() {
                                a.props.submitTask("".concat(e.message, "{task}"))
                            }
                        }), ot(nt(a), "_handleKeyUp", function(e) {
                            var t = a.props.tasks,
                                n = a.state.showMore ? t.length : st,
                                r = a.state.highlightIndex;
                            if (a.state.active) {
                                switch (r === it && (r = n), e.keyCode) {
                                    case Xe.UP_KEY:
                                        r = r - 1 >= 0 ? r - 1 : n;
                                        break;
                                    case Xe.DOWN_KEY:
                                        r = r + 1 <= n ? r + 1 : 0;
                                        break;
                                    case Xe.ESC_KEY:
                                        a.props.closeTaskbox();
                                        break;
                                    case Xe.ENTER_KEY:
                                        r === n ? a._toggleShowMore() : a.props.onClick(t[r])
                                }
                                r === n && (r = it), a.setState({
                                    highlightIndex: r
                                })
                            }
                        }), a.taskBoxTitleDOM = r.a.createRef(), a.taskBoxTasksDOM = r.a.createRef(), a.hide = a.hide.bind(nt(a)), a.show = a.show.bind(nt(a)), a.state = {
                            active: !1,
                            enabled: !1,
                            showMore: !1,
                            showTransition: !0,
                            highlightIndex: -1
                        }, a
                    }
                    var a, n, o;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && rt(e, t)
                    }(t, r.a.Component), a = t, (n = [{
                        key: "componentDidMount",
                        value: function() {
                            document.addEventListener("keyup", this._handleKeyUp, !1), this.props.isTaskboxOpen && this.show()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document.removeEventListener("keyup", this._handleKeyUp, !1)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            e.isTaskboxOpen && !this.props.isTaskboxOpen && this.hide(), !e.isTaskboxOpen && this.props.isTaskboxOpen && this.show()
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var e = this;
                            this._disableTimeout && clearTimeout(this._disableTimeout), this.setState({
                                enabled: !0
                            }), this._enableTimeout = setTimeout(function() {
                                e.setState({
                                    active: !0
                                })
                            }, 100)
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            var e = this;
                            this._enableTimeout && clearTimeout(this._enableTimeout), this.setState({
                                active: !1,
                                showMore: !1,
                                highlightIndex: -1
                            }), this._disableTimeout = setTimeout(function() {
                                e.setState({
                                    enabled: !1
                                })
                            }, 400)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.showMore,
                                a = e.active,
                                n = e.enabled,
                                o = e.showTransition;
                            if (!n || !this.props.tasks.length) return null;
                            var s = this.props.tasks,
                                i = {
                                    height: 17
                                };
                            this.props.title && (i = this.taskBoxTitleDOM.current ? this.taskBoxTitleDOM.current.getBoundingClientRect() : {
                                height: 17
                            });
                            var l = s.length > st + 1,
                                u = 49 * ((s.length <= st + 1 ? s.length : st) + 1) + 27 + i.height,
                                d = t || !s.length ? 0 : "calc( 100% - ".concat(u, "px )"),
                                p = "translate3d(0, ".concat(d, ", 0)"),
                                m = o ? "0.4s cubic-bezier(0.175, 0.885, 0.32, 1)" : "none",
                                g = a ? "translate3d(0, 0, 0)" : "translate3d(0, ".concat(t ? "100%" : "".concat(u + 4, "px"), ", 0)"),
                                f = a ? "active" : "",
                                h = this.props.appSettings["hide-composer"] ? "no-composer" : "",
                                C = t ? "showing-more" : "",
                                b = this.state.highlightIndex === it ? "highlighted" : "";
                            return r.a.createElement("div", {
                                style: {
                                    zIndex: (this.props.noOverlay, 4)
                                },
                                className: "taskbox ".concat(f, " ").concat(h)
                            }, this.props.noOverlay ? null : r.a.createElement("div", {
                                onClick: this.props.closeTaskbox,
                                className: "taskbox-overlay ".concat(f)
                            }), r.a.createElement("div", {
                                style: {
                                    transform: g
                                },
                                className: "taskbox-body-wrapper"
                            }, r.a.createElement("div", {
                                style: {
                                    transform: p,
                                    transition: m
                                },
                                className: "taskbox-body ".concat(f)
                            }, r.a.createElement("div", {
                                onClick: this._toggleShowMore,
                                className: "taskbox-tab-wrapper"
                            }, r.a.createElement("div", {
                                className: "taskbox-tab"
                            })), r.a.createElement("div", {
                                ref: this.taskBoxTitleDOM,
                                className: "taskbox-title"
                            }, this.props.title), r.a.createElement("div", {
                                ref: this.taskBoxTasksDOM,
                                className: "taskbox-tasks ".concat(C)
                            }, s.map(this.renderTask))), l ? r.a.createElement("div", {
                                onClick: this._toggleShowMore,
                                className: "taskbox-show-more ".concat(b)
                            }, r.a.createElement("div", {
                                className: "taskbox-show-more-count"
                            }, s.length - st), r.a.createElement("div", {
                                className: "taskbox-show-more-title"
                            }, t ? c.a.get.VIEW_LESS : c.a.get.VIEW_MORE), r.a.createElement("div", {
                                className: "taskbox-show-more-icon"
                            })) : null))
                        }
                    }]) && tt(a.prototype, n), o && tt(a, o), t
                }();
            lt.propTypes = {
                appSettings: s.a.shape({
                    "hide-composer": s.a.bool
                }),
                onClick: s.a.func,
                closeTaskbox: s.a.func,
                showMoreTaskbox: s.a.func,
                showLessTaskbox: s.a.func,
                submitTask: s.a.func,
                isTaskboxOpen: s.a.bool,
                noOverlay: s.a.bool,
                title: s.a.string,
                tasks: s.a.arrayOf(s.a.shape({
                    question: s.a.string,
                    android_icon_url: s.a.string,
                    message: s.a.string
                }))
            }, lt.defaultProps = {
                tasks: {
                    objects: [{
                        question: "test",
                        message: "hello, world!"
                    }, {
                        question: "test2",
                        message: "hello, world!"
                    }]
                }
            };
            var ct = Object(i.b)(function(e) {
                    return {
                        isTaskboxOpen: l.s(e),
                        noOverlay: l.o(e),
                        tasks: b.j(e),
                        title: b.k(e),
                        appSettings: l.b(e)
                    }
                }, function(e) {
                    return Object(f.b)({
                        sendMessage: C.s,
                        submitTask: C.w,
                        showMoreTaskbox: h.A,
                        showLessTaskbox: h.z,
                        closeTaskbox: h.h
                    }, e)
                })(lt),
                ut = function(e) {
                    var t = e.primaryColor,
                        a = e.disabled,
                        n = e.strokeClassName;
                    return r.a.createElement("svg", {
                        width: "24px",
                        height: "24px",
                        viewBox: "0 0 32 32",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("g", {
                        id: "Symbols",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, r.a.createElement("g", {
                        id: "Footer/Active-Taskbox",
                        transform: "translate(-16.000000, -12.000000)"
                    }, r.a.createElement("g", {
                        id: "Taskbox",
                        transform: "translate(16.000000, 12.000000)"
                    }, r.a.createElement("g", {
                        id: "Group"
                    }, r.a.createElement("rect", {
                        id: "Rectangle",
                        fill: "white",
                        x: "0",
                        y: "0",
                        width: "32",
                        height: "32",
                        rx: "8"
                    }), r.a.createElement("g", {
                        id: "icon/arrow/up",
                        className: n,
                        stroke: t,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "3",
                        style: {
                            transformOrigin: "50% 50%",
                            transition: "0.2s ease-out",
                            transform: "rotate(".concat(a ? 180 : 0, "deg) translate(4px, 4px)")
                        }
                    }, r.a.createElement("polyline", {
                        id: "Path-2",
                        transform: "translate(12.000000, 12.000000) scale(1, -1) translate(-12.000000, -12.000000) ",
                        points: "6 9 12 15 18 9"
                    })))))))
                };
            ut.propTypes = {
                primaryColor: s.a.string,
                strokeClassName: s.a.string,
                disabled: s.a.bool
            }, ut.defaultProps = {
                primaryColor: "#3498db",
                strokeClassName: "",
                disabled: !1
            };
            var dt = ut,
                pt = function(e) {
                    var t = e.primaryColor,
                        a = e.strokeClassName;
                    return r.a.createElement("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none"
                    }, r.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.75 19.5V16.3889H6.5C5.94772 16.3889 5.5 15.9412 5.5 15.3889V6.5C5.5 5.94772 5.94772 5.5 6.5 5.5H17.5C18.0523 5.5 18.5 5.94772 18.5 6.5V15.3889C18.5 15.9412 18.0523 16.3889 17.5 16.3889H13.1818L8.75 19.5ZM10.25 16.6143L12.7079 14.8889H17V7H7V14.8889H10.25V16.6143Z",
                        fill: t || "#21ABF3",
                        className: a
                    }))
                };
            pt.propTypes = {
                primaryColor: s.a.string,
                strokeClassName: s.a.string
            }, pt.defaultProps = {
                primaryColor: "",
                strokeClassName: ""
            };
            var mt = pt,
                gt = function(e) {
                    var t = e.primaryColor;
                    return r.a.createElement("svg", {
                        width: "6",
                        height: "6",
                        viewBox: "0 0 6 6",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("path", {
                        d: "M0.936188 3.16C0.936188 2.328 1.13352 1.74133 1.52819 1.4C1.92285 1.048 2.41352 0.872 3.00019 0.872C3.56552 0.872 4.05085 1.048 4.45619 1.4C4.86152 1.74133 5.06419 2.328 5.06419 3.16C5.06419 3.98133 4.86152 4.568 4.45619 4.92C4.05085 5.272 3.56552 5.448 3.00019 5.448C2.41352 5.448 1.92285 5.272 1.52819 4.92C1.13352 4.568 0.936188 3.98133 0.936188 3.16Z",
                        fill: t
                    }))
                };
            gt.propTypes = {
                primaryColor: s.a.string
            }, gt.defaultProps = {
                primaryColor: ""
            };
            var ft = gt,
                ht = (a(108), function(e) {
                    var t = e.title,
                        a = e.onClick,
                        n = e.highlighted,
                        o = e.icon,
                        s = e.primaryColor,
                        i = e.index,
                        l = e.isSearchSuggestion,
                        c = r.a.useRef(),
                        u = Object(P.a)(.9, s),
                        d = !!(window.screen.width < 600);
                    r.a.useEffect(function() {
                        c.current.style.setProperty("--primary-color", s), c.current.style.setProperty("--primary-color-overlay", "".concat(u))
                    }, [s]);
                    var p = n ? "highlighted" : "",
                        m = l ? "search-suggestion-".concat(i) : "task-".concat(i),
                        g = l ? "suggestion" : "title";
                    return r.a.createElement("div", {
                        onClick: a,
                        className: "task-new ".concat(p, " ").concat(g),
                        "data-testid": m,
                        ref: c
                    }, l ? null : r.a.createElement("div", {
                        className: "task-new-icon primary default"
                    }, o ? r.a.createElement("img", {
                        role: "presentation",
                        src: o
                    }) : r.a.createElement(ft, {
                        primaryColor: s
                    })), r.a.createElement("div", {
                        className: "task-new-".concat(g)
                    }, t), function() {
                        if (l) return r.a.createElement("div", {
                            className: "task-new-icon primary right"
                        }, r.a.createElement(mt, {
                            primaryColor: d ? s : "#595959",
                            strokeClassName: "task-new-icon-stroke"
                        }))
                    }())
                });
            ht.propTypes = {
                title: s.a.string,
                icon: s.a.string,
                primaryColor: s.a.string,
                onClick: s.a.func,
                highlighted: s.a.bool,
                index: s.a.number,
                isSearchSuggestion: s.a.bool
            }, ht.defaultProps = {
                title: "",
                onClick: function() {},
                index: -1,
                highlighted: !1,
                isSearchSuggestion: !1,
                primaryColor: null
            };
            var Ct = ht;
            a(109);

            function bt(e) {
                return (bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function yt(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, n)
                }
                return a
            }

            function vt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? yt(a, !0).forEach(function(t) {
                        xt(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : yt(a).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }

            function Et(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function kt(e) {
                return (kt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function wt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Lt(e, t) {
                return (Lt = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function xt(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var Ot = function(e) {
                function t(e) {
                    var a, n, o;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), n = this, o = kt(t).call(this, e), a = !o || "object" !== bt(o) && "function" != typeof o ? wt(n) : o, xt(wt(a), "renderTask", function(e, t) {
                        var n = a.props.appSettings["primary-color"],
                            o = e.android_icon_url;
                        return r.a.createElement(Ct, {
                            highlighted: t === a.state.highlightIndex,
                            onClick: a.handleTaskClick(e),
                            key: "".concat(t, "-").concat(e.question),
                            title: e.question,
                            icon: o,
                            primaryColor: n,
                            index: t,
                            isSearchSuggestion: e.isSearchSuggestion
                        })
                    }), xt(wt(a), "getStyles", function(e) {
                        return {
                            activeTransform: "translate3d(0, 0, 0)",
                            transitionDuration: ".4s",
                            activeClassName: e ? "active" : "",
                            noComposerClassName: a.props.appSettings["hide-composer"] ? "no-composer" : ""
                        }
                    }), xt(wt(a), "handleTaskClick", function(e) {
                        return function() {
                            a.props.submitTask("".concat(e.message, "{task}"))
                        }
                    }), xt(wt(a), "handleTaskboxClick", function() {
                        a.props.isTaskboxOpen ? a.props.closeTaskbox() : a.props.openTaskbox()
                    }), xt(wt(a), "handleKeyUp", function(e) {
                        var t = a.props.tasks,
                            n = t.length,
                            r = a.state.highlightIndex;
                        if (a.state.active) {
                            switch (e.keyCode) {
                                case Xe.UP_KEY:
                                    r = r - 1 >= 0 ? r - 1 : n;
                                    break;
                                case Xe.DOWN_KEY:
                                    r = r + 1 <= n ? r + 1 : 0;
                                    break;
                                case Xe.ESC_KEY:
                                    a.props.closeTaskbox();
                                    break;
                                case Xe.ENTER_KEY:
                                    a.props.onClick(t[r])
                            }
                            a.setState({
                                highlightIndex: r
                            })
                        }
                    }), a.taskBoxTasksDOM = r.a.createRef(), a.taskBoxCTARef = r.a.createRef(), a.hide = a.hide.bind(wt(a)), a.show = a.show.bind(wt(a)), a.state = {
                        active: !1,
                        highlightIndex: -1
                    }, a
                }
                var a, n, o;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Lt(e, t)
                }(t, r.a.Component), a = t, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        document.addEventListener("keyup", this.handleKeyUp), this.props.isTaskboxDisabled || (this.props.isTaskboxOpen && this.show(), this.props.tasks.length && this.taskBoxCTARef.current.style.setProperty("--primary-color", this.props.appSettings["primary-color"]))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        document.removeEventListener("keyup", this.handleKeyUp, !1)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        e.isTaskboxOpen && !this.props.isTaskboxOpen && this.hide(), !e.isTaskboxOpen && this.props.isTaskboxOpen && this.show(), this.props.isTaskboxDisabled || this.props.tasks.length && this.taskBoxCTARef.current.style.setProperty("--primary-color", this.props.appSettings["primary-color"])
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.props.isTaskboxDisabled) return null;
                        var e = this.state.active,
                            t = this.props.tasks;
                        if (!t.length) return null;
                        var a = t.map(function(e) {
                                if (e.isSearchSuggestion) return !0
                            }).some(function(e) {
                                return !0 === e
                            }),
                            n = this.props.appSettings["primary-color"],
                            o = {
                                borderTop: "1px solid ".concat("#F2F2F2")
                            },
                            s = this.getStyles(e, a),
                            i = s.activeTransform,
                            l = s.transitionDuration,
                            u = s.activeClassName,
                            d = s.noComposerClassName,
                            p = e ? "#595959" : n,
                            m = a && this.props.isTaskboxOpen ? "none" : "flex",
                            g = a && this.props.isTaskboxOpen ? "13px" : "0px",
                            f = this.props.isMirrored ? "mirrored" : "";
                        return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            onClick: this.props.closeTaskbox,
                            className: "taskbox-new-overlay ".concat(u)
                        }), r.a.createElement("div", {
                            className: "taskbox-new-wrapper",
                            style: vt({}, o)
                        }, r.a.createElement("div", {
                            className: "taskbox-new-CTA ".concat(u, " ").concat(f),
                            ref: this.taskBoxCTARef,
                            onClick: this.handleTaskboxClick,
                            "data-testid": "composerTaskBoxCTA",
                            style: {
                                display: m
                            }
                        }, r.a.createElement("span", {
                            className: "taskbox-new-CTA-text left"
                        }, c.a.get.MENU), r.a.createElement("span", {
                            className: "composer-icon right"
                        }, r.a.createElement(dt, {
                            strokeClassName: "taskbox-new-CTA-icon",
                            disabled: e,
                            primaryColor: p
                        }))), r.a.createElement("div", {
                            style: {
                                transform: i,
                                transitionDuration: l
                            },
                            className: "taskbox-new-body ".concat(u, " ").concat(d, " ").concat(f)
                        }, r.a.createElement("div", {
                            ref: this.taskBoxTasksDOM,
                            className: "taskbox-new-tasks",
                            style: {
                                marginTop: g
                            }
                        }, t.map(this.renderTask)))))
                    }
                }, {
                    key: "show",
                    value: function() {
                        var e = this;
                        this._disableTimeout && clearTimeout(this._disableTimeout), this._enableTimeout = setTimeout(function() {
                            e.setState({
                                active: !0
                            })
                        }, 100)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this._enableTimeout && clearTimeout(this._enableTimeout), this.setState({
                            active: !1,
                            highlightIndex: -1
                        })
                    }
                }]) && Et(a.prototype, n), o && Et(a, o), t
            }();
            Ot.propTypes = {
                onClick: s.a.func,
                closeTaskbox: s.a.func,
                submitTask: s.a.func,
                openTaskbox: s.a.func,
                isTaskboxOpen: s.a.bool,
                isMirrored: s.a.bool,
                isTaskboxDisabled: s.a.bool,
                tasks: s.a.arrayOf(s.a.shape({
                    question: s.a.string,
                    android_icon_url: s.a.string,
                    message: s.a.string
                })),
                appSettings: s.a.shape({
                    "primary-color": s.a.string,
                    "hide-composer": s.a.bool,
                    message: s.a.string
                })
            }, Ot.defaultProps = {
                onClick: function() {},
                closeTaskbox: function() {},
                submitTask: function() {},
                isTaskboxOpen: !1,
                appSettings: {},
                isTaskboxDisabled: !1,
                tasks: {
                    objects: [{
                        question: "test",
                        message: "hello, world!"
                    }, {
                        question: "test2",
                        message: "hello, world!"
                    }]
                }
            };
            var St = Object(i.b)(function(e) {
                    return {
                        isTaskboxOpen: l.s(e),
                        tasks: b.j(e),
                        title: b.k(e),
                        appSettings: l.b(e),
                        isMirrored: b.p(e),
                        isTaskboxDisabled: b.q(e)
                    }
                }, function(e) {
                    return Object(f.b)({
                        sendMessage: C.s,
                        submitTask: C.w,
                        closeTaskbox: h.h,
                        openTaskbox: h.t
                    }, e)
                })(Ot),
                Tt = (a(110), a(190)),
                jt = Object(Tt.withSize)({
                    monitorHeight: !0,
                    monitorWidth: !1,
                    noPlaceholder: !0
                })(function(e) {
                    var t = e.primaryColor;
                    return r.a.createElement("div", {
                        className: "language-switcher-loading"
                    }, r.a.createElement("div", {
                        className: "language-switcher-loading-icon"
                    }, r.a.createElement(d, {
                        primaryColor: t
                    })), r.a.createElement("div", {
                        className: "language-switcher-loading-text"
                    }, r.a.createElement(c.a.component, {
                        id: "CHANGING_LANGUAGE"
                    })))
                }),
                Nt = function() {
                    return r.a.createElement("svg", {
                        width: "46px",
                        height: "46px",
                        viewBox: "0 0 46 46",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("g", {
                        id: "Page-1",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, r.a.createElement("g", {
                        id: "tick-(2)"
                    }, r.a.createElement("circle", {
                        id: "Oval-1-Copy-2",
                        fill: "#62B165",
                        cx: "23",
                        cy: "23",
                        r: "22.5"
                    }), r.a.createElement("polyline", {
                        id: "Oval-1-Copy-3",
                        stroke: "#FFFFFF",
                        points: "33.7166305 15.3549957 18.4788227 31.2736437 11.899054 25.0249213"
                    }))))
                },
                _t = Object(Tt.withSize)({
                    monitorHeight: !0,
                    monitorWidth: !1,
                    noPlaceholder: !0
                })(function(e) {
                    var t = e.primaryColor,
                        a = e.language,
                        n = e.onSubmit;
                    return r.a.createElement("div", {
                        className: "language-switcher-success"
                    }, r.a.createElement("div", {
                        className: "language-switcher-success-icon"
                    }, r.a.createElement(Nt, null)), r.a.createElement("div", {
                        className: "language-switcher-success-text"
                    }, r.a.createElement(c.a.component, {
                        id: "LANGUAGE_SUCCESS",
                        inject: [{
                            key: "language",
                            value: a.languageNativeName
                        }]
                    })), r.a.createElement("div", {
                        onClick: n,
                        className: "language-switcher-success-button",
                        style: {
                            backgroundColor: t
                        }
                    }, r.a.createElement(c.a.component, {
                        id: "GOT_IT"
                    })))
                }),
                Pt = Object(Tt.withSize)({
                    monitorHeight: !0,
                    monitorWidth: !1,
                    noPlaceholder: !0
                })(function(e) {
                    var t = e.primaryColor,
                        a = e.onSubmit;
                    return r.a.createElement("div", {
                        className: "language-switcher-fail"
                    }, r.a.createElement("div", {
                        className: "language-switcher-fail-icon"
                    }, r.a.createElement(q, null)), r.a.createElement("div", {
                        className: "language-switcher-fail-text"
                    }, r.a.createElement(c.a.component, {
                        id: "ERROR_CHANGING_LANGUAGE"
                    })), r.a.createElement("div", {
                        onClick: a,
                        className: "language-switcher-fail-button",
                        style: {
                            backgroundColor: t
                        }
                    }, r.a.createElement(c.a.component, {
                        id: "GOT_IT"
                    })))
                });

            function Mt(e) {
                return (Mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function It(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Rt(e) {
                return (Rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function Ft(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Dt(e, t) {
                return (Dt = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function At(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var Ht = function(e) {
                function t(e) {
                    var a, n, r;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), n = this, r = Rt(t).call(this, e), a = !r || "object" !== Mt(r) && "function" != typeof r ? Ft(n) : r, At(Ft(a), "_handleChange", function(e) {
                        var t = a.props.languages,
                            n = t.map(function(e) {
                                return e.languageNativeName
                            }),
                            r = t[n.indexOf(e)].languageCode;
                        a.props.changeLanguage(r)
                    }), At(Ft(a), "_handleKeyUp", function(e) {
                        switch (e.keyCode) {
                            case Xe.ESC_KEY:
                            case Xe.ENTER_KEY:
                                return a.props.status !== _.b.LOADING && a.props.closeLanguagePicker()
                        }
                    }), At(Ft(a), "_handleOnSize", function(e) {
                        a.setState({
                            height: e.height
                        })
                    }), a.hide = a.hide.bind(Ft(a)), a.show = a.show.bind(Ft(a)), a.state = {
                        active: !1,
                        enabled: !1
                    }, a
                }
                var a, n, o;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Dt(e, t)
                }(t, r.a.Component), a = t, (n = [{
                    key: "UNSAFE_componentWillMount",
                    value: function() {
                        document.addEventListener("keyup", this._handleKeyUp, !1)
                    }
                }, {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function(e) {
                        var t = [_.b.DONE, _.b.PICKER];
                        this.props.status !== e.status && t.includes(e.status) && this.hide(), this.props.status === e.status || t.includes(e.status) || this.show()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        document.removeEventListener("keyup", this._handleKeyUp, !1)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.a.createElement(r.a.Fragment, null, this.renderPicker(), this.renderSwitcher())
                    }
                }, {
                    key: "renderSwitcher",
                    value: function() {
                        if (!this.state.enabled) return null;
                        var e = this.state.active ? "active" : "",
                            t = this.state.height ? this.state.height : "auto";
                        return r.a.createElement("div", {
                            className: "language-switcher ".concat(e, " ").concat("")
                        }, r.a.createElement("div", {
                            className: "language-switcher-overlay ".concat(e, " ").concat("")
                        }), r.a.createElement("div", {
                            style: {
                                height: t
                            },
                            className: "language-switcher-body ".concat(e, " ").concat("")
                        }, this.renderBody()))
                    }
                }, {
                    key: "renderBody",
                    value: function() {
                        var e = this.props,
                            t = e.theme,
                            a = e.closeLanguagePicker,
                            n = e.language,
                            o = e.languagesIndexed,
                            s = e.status,
                            i = t.primaryColor;
                        switch (s) {
                            case _.b.LOADING:
                                return r.a.createElement(jt, {
                                    onSize: this._handleOnSize,
                                    primaryColor: i
                                });
                            case _.b.SUCCESS:
                                return r.a.createElement(_t, {
                                    onSize: this._handleOnSize,
                                    primaryColor: i,
                                    language: o[n],
                                    onSubmit: a
                                });
                            case _.b.FAILED:
                                return r.a.createElement(Pt, {
                                    onSize: this._handleOnSize,
                                    primaryColor: i,
                                    language: o[n],
                                    onSubmit: a
                                });
                            default:
                                return null
                        }
                    }
                }, {
                    key: "renderPicker",
                    value: function() {
                        var e = this.props,
                            t = e.languages,
                            a = e.language,
                            n = e.languagesIndexed[a].languageNativeName,
                            o = t.map(function(e) {
                                return e.languageNativeName
                            });
                        return r.a.createElement(K.a.Dropdown, {
                            active: this.props.status === _.b.PICKER,
                            value: n,
                            onChange: this._handleChange,
                            onClose: this.props.closeLanguagePicker,
                            placeholder: c.a.get.SELECT_LANGUAGE,
                            options: o
                        })
                    }
                }, {
                    key: "show",
                    value: function() {
                        var e = this;
                        this._disableTimeout && clearTimeout(this._disableTimeout), this.setState({
                            enabled: !0
                        }), this._enableTimeout = setTimeout(function() {
                            e.setState({
                                active: !0
                            })
                        }, 0)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var e = this;
                        this._enableTimeout && clearTimeout(this._enableTimeout), this.setState({
                            active: !1
                        }), this._disableTimeout = setTimeout(function() {
                            e.setState({
                                enabled: !1
                            })
                        }, 400)
                    }
                }]) && It(a.prototype, n), o && It(a, o), t
            }();
            Ht.propTypes = {
                changeLanguage: s.a.func,
                closeLanguagePicker: s.a.func,
                language: s.a.string,
                languages: s.a.arrayOf(s.a.object),
                languagesIndexed: s.a.object,
                status: s.a.string,
                theme: s.a.object
            };
            var Vt = Object(i.b)(function(e) {
                    return {
                        status: l.v(e),
                        theme: l.z(e),
                        languages: b.i(e),
                        languagesIndexed: b.n(e),
                        language: b.b(e)
                    }
                }, function(e) {
                    return Object(f.b)({
                        closeLanguagePicker: h.e,
                        changeLanguage: C.a
                    }, e)
                })(Ht),
                Bt = function() {
                    return r.a.createElement("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.3394 5.3125L15.7695 14.3125C15.9203 14.5625 15.7318 14.875 15.4301 14.875H4.56988C4.26821 14.875 4.07966 14.5625 4.2305 14.3125L9.66062 5.3125C9.81145 5.0625 10.1885 5.0625 10.3394 5.3125ZM8.64247 4.75C9.24582 3.75 10.7542 3.75 11.3575 4.75L16.7877 13.75C17.391 14.75 16.6368 16 15.4301 16H4.56988C3.36319 16 2.609 14.75 3.21235 13.75L8.64247 4.75ZM9.37603 7.69901L9.61116 12.118H10.5141L10.7492 7.69901H9.37603ZM9.54533 13.018C9.40738 13.12 9.33841 13.297 9.33841 13.549C9.33841 13.795 9.40738 13.972 9.54533 14.08C9.68954 14.188 9.86197 14.242 10.0626 14.242C10.257 14.242 10.4232 14.188 10.5611 14.08C10.7053 13.972 10.7774 13.795 10.7774 13.549C10.7774 13.297 10.7053 13.12 10.5611 13.018C10.4232 12.91 10.257 12.856 10.0626 12.856C9.86197 12.856 9.68954 12.91 9.54533 13.018Z",
                        fill: "#E53838"
                    }))
                },
                Zt = function(e) {
                    var t = e.primaryColor,
                        a = e.showLoading,
                        n = void 0 !== a && a,
                        o = e.success,
                        s = void 0 !== o && o;
                    return r.a.createElement("svg", {
                        width: "60",
                        height: "60",
                        viewBox: "0 0 60 60",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("circle", {
                        cx: "30",
                        cy: "30",
                        r: "29",
                        fill: "white",
                        stroke: "#F2F2F2",
                        strokeWidth: "2"
                    }), n && r.a.createElement("circle", {
                        cx: "30",
                        strokeLinecap: "round",
                        strokeDasharray: "136 68",
                        cy: "30",
                        r: "29",
                        stroke: t,
                        strokeWidth: "2"
                    }, r.a.createElement("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        repeatCount: "indefinite",
                        dur: "1s",
                        values: "0 30 30;360 30 30"
                    })), s && r.a.createElement("circle", {
                        cx: "30",
                        cy: "30",
                        r: "29",
                        fill: t,
                        stroke: t,
                        strokeWidth: "2"
                    }), r.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M40.892 22.3557C41.3181 22.8133 41.2999 23.5367 40.8514 23.9714L26.7041 37.6857C26.2718 38.1048 25.5936 38.1048 25.1613 37.6857L19.1487 31.8571C18.7002 31.4224 18.682 30.699 19.1081 30.2414C19.5341 29.7838 20.243 29.7653 20.6915 30.2L25.9327 35.2808L39.3086 22.3143C39.7571 21.8796 40.466 21.8981 40.892 22.3557Z",
                        fill: s ? "white" : t
                    }))
                };
            Zt.propTypes = {
                primaryColor: s.a.string,
                showLoading: s.a.bool,
                success: s.a.bool
            };
            var Ut = Zt,
                Gt = (a(111), function(e) {
                    return {
                        status: l.v(e),
                        appSettings: l.b(e),
                        languages: b.i(e),
                        language: b.b(e)
                    }
                }),
                Wt = function(e) {
                    return Object(f.b)({
                        closeMic: h.g,
                        closeLanguagePicker: h.e,
                        changeLanguage: C.a
                    }, e)
                };

            function Kt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var qt = function() {
                    var e = Object(i.d)(Gt),
                        t = e.appSettings,
                        a = e.status,
                        o = e.languages,
                        s = e.language,
                        l = Object(i.d)(fe.b),
                        u = Wt(Object(i.c)()),
                        d = u.changeLanguage,
                        p = u.closeLanguagePicker,
                        m = u.closeMic,
                        g = Kt(Object(n.useState)(s), 2),
                        f = g[0],
                        h = g[1],
                        C = Kt(Object(n.useState)(!1), 2),
                        b = C[0],
                        y = C[1],
                        v = Kt(Object(n.useState)(a === _.b.PICKER), 2),
                        E = v[0],
                        k = v[1],
                        w = Kt(Object(n.useState)(!1), 2),
                        L = w[0],
                        x = w[1],
                        O = Kt(Object(n.useState)(!1), 2),
                        S = O[0],
                        T = O[1],
                        j = a === _.b.LOADING,
                        P = a === _.b.SUCCESS,
                        M = ["VOICE", "VOICE_ONLY"].indexOf(t["bot-type"]) > -1;
                    Object(n.useEffect)(function() {
                        x(a === _.b.FAILED), a === _.b.PICKER && k(!0)
                    }, [a]), Object(n.useEffect)(function() {
                        h(s)
                    }, [s]), a === _.b.SUCCESS && setTimeout(function() {
                        T(!1), k(!1), p()
                    }, 500);
                    var I = function(e) {
                            j || P || (x(!1), y(!1), T(!0), h(e))
                        },
                        R = function() {
                            M && l && l.stopListening && (m(), l.stopListening()), y(!1), x(!1), f === s ? F() : j || P || d(f)
                        },
                        F = function() {
                            b || s === f ? (h(s), T(!1), y(!1), k(!1), p()) : (x(!1), y(!0))
                        },
                        D = t["primary-color"],
                        A = j || P,
                        H = A ? "#F2F2F2" : "#595959",
                        V = A ? "#F2F2F2" : "#A6A6A6",
                        B = r.a.useCallback(function() {
                            return r.a.createElement("div", {
                                className: "language-switcher-v2-header"
                            }, r.a.createElement("div", {
                                className: "language-switcher-v2-header-icon"
                            }, r.a.createElement(N, {
                                color: H
                            })), r.a.createElement("div", {
                                className: "language-switcher-v2-header-text",
                                style: {
                                    color: H
                                }
                            }, c.a.get.SELECT_LANGUAGE), b && r.a.createElement("div", {
                                className: "language-switcher-v2-header-error"
                            }, r.a.createElement("div", {
                                className: "language-switcher-v2-header-error-apply"
                            }, "*", c.a.get.APPLY_LANGUAGE_CHANGES)), L && r.a.createElement("div", {
                                className: "language-switcher-v2-header-error"
                            }, r.a.createElement(Bt, null), r.a.createElement("div", {
                                className: "language-switcher-v2-header-error-api"
                            }, c.a.get.TRY_AGAIN)))
                        }, [H, H, b, L]),
                        Z = r.a.useCallback(function() {
                            return r.a.createElement("div", {
                                className: "language-switcher-v2-options"
                            }, o.map(function(e) {
                                var t = _.a[e];
                                return r.a.createElement("div", {
                                    className: "language-switcher-v2-item",
                                    onClick: function() {
                                        return I(e)
                                    }
                                }, r.a.createElement("div", {
                                    className: "language-switcher-v2-item-native",
                                    style: {
                                        color: e === f ? D : H
                                    }
                                }, t.nativeName), r.a.createElement("div", {
                                    className: "language-switcher-v2-item-translation",
                                    style: {
                                        color: e === f ? D : V
                                    }
                                }, _.a[f].translations[e]))
                            }))
                        }, [o, I, f, H, V]),
                        U = r.a.useCallback(function() {
                            return S ? r.a.createElement("div", {
                                className: "language-switcher-v2-apply",
                                onClick: R
                            }, r.a.createElement(Ut, {
                                primaryColor: D,
                                showLoading: j,
                                success: P
                            })) : null
                        }, [D, j, P, S, R]);
                    return a !== _.b.DONE && E ? r.a.createElement("div", {
                        className: "lanuage-wrapper"
                    }, r.a.createElement("div", {
                        className: "language-switcher-overlay",
                        onClick: F
                    }), r.a.createElement("div", {
                        className: "language-switcher-v2"
                    }, B(), Z()), U()) : null
                },
                zt = a(15),
                Yt = a(42),
                Qt = function(e) {
                    return {
                        isLocationPickerOpen: l.r(e),
                        locationPickerData: l.w(e),
                        isWebviewOpen: l.u(e),
                        isFeedbackOpen: l.l(e),
                        feedbackData: l.e(e),
                        isImageOpen: l.p(e),
                        appSettings: l.b(e),
                        webviewData: l.E(e),
                        imageData: l.g(e),
                        shouldShowRedesignUI: l.y(e)
                    }
                },
                Xt = function(e) {
                    return Object(f.b)({
                        closeLocationPicker: h.f,
                        closeWebview: h.i,
                        closeFeedback: h.b,
                        closeImage: h.d,
                        handleLocation: C.d,
                        handleWebview: C.g,
                        handleConversationFeedback: C.c
                    }, e)
                };
            a(112);

            function Jt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function $t(e) {
                var t = e.onClose,
                    a = e.active,
                    n = e.payload,
                    o = e.primaryColor,
                    s = e.onChange,
                    i = e.shouldShowRedesignUI,
                    l = Jt(r.a.useState(0), 2),
                    u = l[0],
                    d = l[1],
                    p = Jt(r.a.useState(""), 2),
                    m = p[0],
                    g = p[1],
                    f = Jt(r.a.useState(!1), 2),
                    h = f[0],
                    C = f[1],
                    b = Jt(r.a.useState([c.a.get.NOT_SATISFACTORY, c.a.get.ALRIGHT, c.a.get.GOOD, c.a.get.GREAT, c.a.get.AWESOME]), 2),
                    y = b[0],
                    v = b[1],
                    E = r.a.useCallback(function(e) {
                        C(!0), setTimeout(function() {
                            t(e)
                        }, 3e3);
                        var a = n.messageId;
                        s({
                            numStars: u,
                            comment: m,
                            messageId: a
                        }, function() {})
                    }, [u, m, n]);
                r.a.useEffect(function() {
                    v([c.a.get.NOT_SATISFACTORY, c.a.get.ALRIGHT, c.a.get.GOOD, c.a.get.GREAT, c.a.get.AWESOME])
                }, []);
                var k = i ? "v2" : "";
                return r.a.createElement(K.a.Modal, {
                    onClose: t,
                    active: a,
                    noHeader: !0
                }, h ? null : r.a.createElement("div", {
                    className: "conversation-feedback"
                }, r.a.createElement("div", {
                    className: "conversation-feedback-title ".concat(k)
                }, c.a.get.HOW_WAS_YOUR_EXPERIENCE), r.a.createElement("div", {
                    className: "conversation-feedback-stars"
                }, Array(5).fill(0).map(function(e, t) {
                    var a = t < u ? "active" : "";
                    return r.a.createElement("span", {
                        className: "conversation-feedback-star ".concat(a),
                        key: t,
                        onClick: function() {
                            return d(t + 1)
                        }
                    }, "★")
                })), u > 0 ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "conversation-feedback-description \n              ".concat(k)
                }, y[u - 1]), r.a.createElement("div", {
                    className: "conversation-feedback-input"
                }, r.a.createElement("textarea", {
                    style: {
                        borderColor: o
                    },
                    autoFocus: !0,
                    placeholder: c.a.get.COMPOSER_PLACEHOLDER,
                    value: m,
                    onChange: function(e) {
                        return g(e.target.value)
                    },
                    className: "conversation-feedback-input-textarea ".concat(k)
                })), r.a.createElement("button", {
                    type: "button",
                    className: "conversation-feedback-button ".concat(k),
                    onClick: E,
                    style: {
                        backgroundColor: o
                    }
                }, c.a.get.SUBMIT)) : null), h ? r.a.createElement("div", {
                    className: "conversation-feedback"
                }, r.a.createElement("div", {
                    className: "conversation-feedback-title ".concat(k)
                }, c.a.get.THANK_YOU_FOR_FEEDBACK)) : null)
            }
            $t.propTypes = {
                onClose: s.a.func,
                active: s.a.bool,
                primaryColor: s.a.string,
                onChange: s.a.func,
                shouldShowRedesignUI: s.a.bool,
                payload: s.a.shape({
                    messageId: s.a.number
                })
            }, $t.defaultProps = {
                onClose: function() {},
                active: !1,
                primaryColor: void 0,
                onChange: function() {},
                shouldShowRedesignUI: !1
            };
            var ea = $t;
            a(113);

            function ta(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function aa(e) {
                var t = e.onClose,
                    a = e.active,
                    n = e.onChange,
                    o = e.payload,
                    s = r.a.useRef(null),
                    i = ta(r.a.useState(!1), 2),
                    l = i[0],
                    c = i[1],
                    u = o || {},
                    d = u.url,
                    p = u.height,
                    m = void 0 === p ? .7 : p,
                    g = r.a.useCallback(function(e) {
                        if (e.data && "string" == typeof e.data) {
                            var t = function(e) {
                                    if (e.includes("haptik-webview//perform-action")) {
                                        var t = new URL(e);
                                        return {
                                            action: t.searchParams.get("action"),
                                            message: t.searchParams.get("message"),
                                            messageType: t.searchParams.get("message_type") || 0
                                        }
                                    }
                                    return {}
                                }(e.data),
                                a = t.message,
                                r = t.messageType;
                            n({
                                message: a,
                                messageType: r
                            })
                        }
                    });
                return r.a.useEffect(function() {
                    if (s.current && l) return s.current.contentWindow.parent.addEventListener("message", g),
                        function() {
                            return s.current.contentWindow.parent.removeEventListener("message", g)
                        }
                }, [l]), r.a.createElement(K.a.Modal, {
                    onClose: t,
                    active: a,
                    noHeader: !0
                }, r.a.createElement("div", {
                    className: "webview",
                    style: {
                        height: "".concat(100 * m, "vh")
                    }
                }, r.a.createElement("iframe", {
                    title: "haptik-xdk-webview",
                    ref: function(e) {
                        s.current = e, c(!0)
                    },
                    src: d,
                    frameBorder: 0
                })))
            }
            aa.propTypes = {
                active: s.a.bool,
                onClose: s.a.func,
                onChange: s.a.func,
                payload: s.a.object
            };
            var na = aa,
                ra = a(21),
                oa = a.n(ra);
            a(114);

            function sa(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var ia = function(e) {
                var t = e.onClose,
                    a = e.active,
                    n = e.payload,
                    o = sa(Object(Yt.a)(a), 2),
                    s = o[0],
                    i = o[1],
                    l = sa(r.a.useState(!1), 2),
                    c = l[0],
                    u = l[1];
                return i ? oa.a.createPortal(r.a.createElement("div", {
                    style: {
                        position: "fixed",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2147483647,
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        transition: "0.2s ease-out",
                        opacity: s ? 1 : 0
                    },
                    className: "fullscreen-image"
                }, r.a.createElement("div", {
                    onClick: t,
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#000",
                        opacity: .85
                    },
                    className: "fullscreen-image-overlay"
                }), s && c ? null : r.a.createElement("span", {
                    style: {
                        color: "#FFF",
                        zIndex: 1
                    }
                }, " Loading Image ... "), r.a.createElement("img", {
                    onLoad: function() {
                        return u(!0)
                    },
                    src: n,
                    style: {
                        maxWidth: "90%",
                        maxHeight: "80%",
                        transition: "0.2s ease-out",
                        opacity: s && c ? 1 : 0,
                        zIndex: 2
                    },
                    className: "fullscreen-image-img"
                }), r.a.createElement("div", {
                    onClick: t,
                    style: {
                        position: "absolute",
                        top: 24,
                        right: 24,
                        cursor: "pointer"
                    }
                }, r.a.createElement("svg", {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 14 14",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("g", {
                    id: "Page-1",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd"
                }, r.a.createElement("polygon", {
                    fill: "#FFFFFF",
                    id: "path-1",
                    points: "14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7"
                }))))), document.body) : null
            };

            function la(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function ca(e) {
                zt.a(e)
            }
            var ua = function() {
                    var e = Object(i.d)(Qt),
                        t = e.isLocationPickerOpen,
                        a = e.locationPickerData,
                        n = e.isWebviewOpen,
                        o = e.isFeedbackOpen,
                        s = e.feedbackData,
                        l = e.isImageOpen,
                        c = e.imageData,
                        u = e.webviewData,
                        d = e.shouldShowRedesignUI,
                        p = e.appSettings,
                        m = Xt(Object(i.c)()),
                        g = m.closeLocationPicker,
                        f = m.closeWebview,
                        h = m.closeFeedback,
                        C = m.closeImage,
                        b = m.handleLocation,
                        y = m.handleWebview,
                        v = m.handleConversationFeedback,
                        E = p["primary-color"];
                    return [{
                        Component: K.a.LocationPicker,
                        active: t,
                        onClose: g,
                        onChange: b,
                        onError: ca,
                        payload: a
                    }, {
                        Component: ea,
                        active: o,
                        onClose: h,
                        onChange: v,
                        payload: s
                    }, {
                        Component: na,
                        active: n,
                        onClose: f,
                        onChange: y,
                        payload: u
                    }, {
                        Component: ia,
                        active: l,
                        onClose: C,
                        payload: c
                    }].map(function(e) {
                        var t = e.Component,
                            a = e.active,
                            n = e.onClose,
                            o = e.onChange,
                            s = e.payload;
                        return function(e, t) {
                            var a = la(Object(Yt.a)(e), 2),
                                n = a[0];
                            return a[1] ? t(n) : null
                        }(a, function(e) {
                            return r.a.createElement(t, {
                                active: e,
                                shouldShowRedesignUI: d,
                                onClose: n,
                                onChange: o,
                                primaryColor: E,
                                payload: s,
                                onError: ca || null
                            })
                        })
                    })
                },
                da = a(33),
                pa = function(e) {
                    switch (e.value) {
                        case "accept":
                            return r.a.createElement("svg", {
                                width: "46px",
                                height: "45px",
                                viewBox: "0 0 46 45",
                                version: "1.1"
                            }, r.a.createElement("g", {
                                id: "Page-1",
                                stroke: "none",
                                strokeWidth: "1",
                                fill: "none",
                                fillRule: "evenodd",
                                strokeLinejoin: "round"
                            }, r.a.createElement("g", {
                                id: "Terms-&-Conditions",
                                transform: "translate(-157.000000, -319.000000)",
                                stroke: "#333333"
                            }, r.a.createElement("g", {
                                id: "Group-2",
                                transform: "translate(0.000000, 296.000000)"
                            }, r.a.createElement("g", {
                                id: "icon/smiley",
                                transform: "translate(150.000000, 16.000000)"
                            }, r.a.createElement("g", {
                                id: "Group",
                                transform: "translate(7.500000, 7.500000)"
                            }, r.a.createElement("ellipse", {
                                id: "Oval-45",
                                fill: "#FFFFFF",
                                strokeLinecap: "square",
                                cx: "22.5",
                                cy: "21.978022",
                                rx: "22.5",
                                ry: "21.978022"
                            }), r.a.createElement("ellipse", {
                                id: "Oval-45",
                                fill: "#FFFFFF",
                                strokeLinecap: "square",
                                cx: "13.21875",
                                cy: "17.1978022",
                                rx: "2.25",
                                ry: "2.1978022"
                            }), r.a.createElement("ellipse", {
                                id: "Oval-45",
                                fill: "#FFFFFF",
                                strokeLinecap: "square",
                                cx: "31.21875",
                                cy: "17.1978022",
                                rx: "2.25",
                                ry: "2.1978022"
                            }), r.a.createElement("path", {
                                d: "M11.9117647,29.7349709 C11.9117647,29.7349709 14.4566098,36.0187224 22.5,36.199095 C30.5433902,36.3794677 33.0882353,29.7349709 33.0882353,29.7349709",
                                id: "Line",
                                strokeLinecap: "round"
                            })))))));
                        case "reject":
                            return r.a.createElement("svg", {
                                width: "46px",
                                height: "45px",
                                viewBox: "0 0 46 45",
                                version: "1.1"
                            }, r.a.createElement("g", {
                                id: "Page-1",
                                stroke: "none",
                                strokeWidth: "1",
                                fill: "none",
                                fillRule: "evenodd",
                                strokeLinejoin: "round"
                            }, r.a.createElement("g", {
                                id: "Terms-&-Conditions---If-ignored---Accept-Hover",
                                transform: "translate(-157.000000, -319.000000)",
                                stroke: "#333333"
                            }, r.a.createElement("g", {
                                id: "icon/smiley-sad",
                                transform: "translate(150.000000, 312.000000)"
                            }, r.a.createElement("g", {
                                id: "Group",
                                transform: "translate(7.500000, 7.500000)"
                            }, r.a.createElement("ellipse", {
                                id: "Oval-45",
                                fill: "#FFFFFF",
                                strokeLinecap: "square",
                                cx: "22.5",
                                cy: "21.978022",
                                rx: "22.5",
                                ry: "21.978022"
                            }), r.a.createElement("ellipse", {
                                id: "Oval-45",
                                fill: "#FFFFFF",
                                strokeLinecap: "square",
                                cx: "13.21875",
                                cy: "17.1978022",
                                rx: "2.25",
                                ry: "2.1978022"
                            }), r.a.createElement("ellipse", {
                                id: "Oval-45",
                                fill: "#FFFFFF",
                                strokeLinecap: "square",
                                cx: "31.21875",
                                cy: "17.1978022",
                                rx: "2.25",
                                ry: "2.1978022"
                            }), r.a.createElement("path", {
                                d: "M11.9117647,27.2349709 C11.9117647,27.2349709 14.4566098,33.5187224 22.5,33.699095 C30.5433902,33.8794677 33.0882353,27.2349709 33.0882353,27.2349709",
                                id: "Line",
                                strokeLinecap: "round",
                                transform: "translate(22.500000, 30.468836) rotate(-180.000000) translate(-22.500000, -30.468836) "
                            }))))));
                        default:
                            return null
                    }
                };
            pa.propTypes = {
                value: s.a.string
            };
            var ma = pa,
                ga = function(e) {
                    return {
                        isGDPROpen: l.m(e),
                        theme: l.z(e),
                        appSettings: l.b(e)
                    }
                },
                fa = function(e) {
                    return Object(f.b)({
                        closeGDPR: h.c
                    }, e)
                };
            a(115);

            function ha(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var Ca = function() {
                var e = Object(i.d)(ga),
                    t = e.isGDPROpen,
                    a = e.appSettings,
                    n = fa(Object(i.c)()).closeGDPR,
                    o = ha(r.a.useState(!1), 2),
                    s = o[0],
                    l = o[1],
                    u = ha(Object(Yt.a)(t), 2),
                    d = u[0],
                    p = u[1],
                    m = a["primary-color"],
                    g = d ? "active" : null,
                    f = {
                        backgroundColor: m
                    },
                    h = {
                        border: "1px solid ".concat(m),
                        color: m
                    };
                return p ? r.a.createElement("div", {
                    className: "gdpr ".concat(g)
                }, r.a.createElement(ma, {
                    value: s ? "reject" : "accept"
                }), r.a.createElement(c.a.component, {
                    id: s ? "GDPR_HEADING_MANDATORY" : "GDPR_HEADING",
                    customElement: "h4",
                    className: "gdpr-heading"
                }), r.a.createElement(c.a.component, {
                    id: "GDPR_INFO",
                    customElement: "p",
                    className: "gdpr-info"
                }), r.a.createElement("a", {
                    href: "https://haptik.ai/privacy-policy",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "gdpr-link"
                }, r.a.createElement(c.a.component, {
                    id: "GDPR_POLICY"
                })), r.a.createElement("div", {
                    className: "gdpr-button"
                }, s ? null : r.a.createElement("div", {
                    className: "gdpr-button-reject",
                    onClick: function() {
                        return l(!0)
                    },
                    style: h
                }, r.a.createElement(c.a.component, {
                    id: "IGNORE"
                })), r.a.createElement("div", {
                    onClick: n,
                    className: "gdpr-button-accept",
                    style: f
                }, r.a.createElement(c.a.component, {
                    id: "ACCEPT"
                })))) : null
            };
            a(116);

            function ba(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, n)
                }
                return a
            }

            function ya(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function va(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var Ea = function(e) {
                var t = e.active,
                    a = e.onRef,
                    o = e.onClose,
                    s = e.backgroundImage,
                    c = Object(i.d)(l.b),
                    u = c["widget-positioning"],
                    d = c["custom-button"],
                    p = c.mode,
                    m = c["no-chat-bubble"],
                    g = c["chat-icon-config"],
                    f = void 0 === g ? {
                        type: "default"
                    } : g,
                    h = c["wrapper-platform-type"],
                    C = Object(i.d)(l.j) || m,
                    b = Object(i.d)(l.y),
                    y = b ? St : ct,
                    v = b ? B : O,
                    E = va(r.a.useState({
                        width: 398,
                        height: .86 * window.innerHeight
                    }), 2),
                    k = E[0],
                    w = E[1],
                    L = Object(n.useRef)(),
                    x = function(e) {
                        !L.current && e && a(e), L.current = e
                    },
                    S = r.a.useCallback(function() {
                        .86 * window.innerHeight !== k.height && w({
                            width: 398,
                            height: .86 * window.innerHeight
                        })
                    });
                r.a.useEffect(function() {
                        return window.addEventListener("resize", S),
                            function() {
                                return window.removeEventListener("resize", S)
                            }
                    }, []),
                    function(e) {
                        var t = Object(n.useRef)(),
                            a = Object(n.useRef)({
                                width: document.body.style.width,
                                height: document.body.style.height,
                                overflow: document.body.style.overflow,
                                position: document.body.style.position
                            });
                        Object(n.useEffect)(function() {
                            Object(oe.i)() && (e ? (t.current = document.createElement("meta"), t.current.name = "viewport", t.current.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no", document.getElementsByTagName("head")[0].appendChild(t.current), document.body.style.width = "100vw", document.body.style.height = "100vh", document.body.style.overflow = "hidden", document.body.style.position = "relative") : t.current && (t.current.remove(), document.body.style.width = a.current.width, document.body.style.height = a.current.height, document.body.style.overflow = a.current.overflow, document.body.style.position = a.current.position))
                        }, [e])
                    }(t);
                var T = "default" === f.type,
                    j = Object(oe.i)(),
                    N = (j || "center" === u || d) && "fsm" !== p && !C,
                    _ = "bottom-left" === u,
                    P = T ? d || C ? 8 : 54 : 84,
                    M = T ? 8 : _ ? 20 : 24,
                    I = Object(oe.l)(u, M, P),
                    R = j ? "mobile" : "",
                    F = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ba(a, !0).forEach(function(t) {
                                ya(e, t, a[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ba(a).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            })
                        }
                        return e
                    }({
                        zIndex: 100003,
                        position: "fixed",
                        maxWidth: "100%",
                        maxHeight: j ? "" : "708px"
                    }, k, {}, I);
                return j && (F.width = "100%", F.height = "100%", F.transform = "none"), r.a.createElement(da.a, {
                    active: t,
                    style: F,
                    id: "haptik-xdk-main-view",
                    fullscreen: !0,
                    useMaps: !0
                }, function(e) {
                    return r.a.createElement("div", {
                        style: {
                            backgroundImage: s
                        },
                        ref: x,
                        className: "extended-view ".concat(e ? "active" : "", " ").concat(R, " ").concat(_ ? "left" : "")
                    }, r.a.createElement(v, {
                        onClose: o,
                        noCross: !N && !h
                    }), b ? r.a.createElement(W, null) : r.a.createElement(Ca, null), r.a.createElement(Te, null), r.a.createElement(y, null), r.a.createElement(Qe, null), b ? r.a.createElement(qt, null) : r.a.createElement(Vt, null), r.a.createElement(ua, null))
                })
            };
            Ea.propTypes = {
                onRef: s.a.func,
                onClose: s.a.func,
                active: s.a.bool,
                backgroundImage: s.a.string
            }, Ea.defaultProps = {
                onRef: function() {},
                onClose: function() {},
                active: !1,
                backgroundImage: ""
            };
            var ka = Ea;
            a.d(t, "default", function() {
                return ka
            })
        }
    }
]);
//# sourceMappingURL=133.js.map