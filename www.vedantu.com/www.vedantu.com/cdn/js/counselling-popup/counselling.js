(function(e, t) {
    var n = {
        DOM: {
            body: t.querySelector("body"),
            modal: t.getElementById("counselling-register"),
            button: t.getElementById("book-now-button"),
            close: t.getElementById("counsel-close"),
            backButton: t.getElementById("counselBack"),
            nextButton: t.getElementById("counselRegisterNext"),
            doneButton: t.getElementById("counselSuccessDone"),
            SuccessMsg: t.getElementById("counselSuccess"),
            errorOkButton: t.getElementById("counselErrorOk"),
            fullName: t.getElementById("counsel-name"),
            contactNumber: t.getElementById("counsel-number"),
            grade: t.getElementById("counsel-grade"),
            date: t.getElementById("counsel-date"),
            time: t.getElementById("counsel-time"),
            fullAddress: t.getElementById("counsel-address"),
            registeredDate: t.getElementById("counselRegisterDate"),
            registeredTime: t.getElementById("counselRegisterTime"),
            loader: t.getElementById("counselLoader"),
            hamburgerButton: t.getElementById("home-demo-hamburger-btn-a"),
            homeDemoNumberSecBtn: t.getElementById("home-demo-btn-number-section"),
            resultsSecCTA: t.getElementById("result-sec-cta-home-demo-btn"),
            ctaFooterBtn: t.getElementById("home-demo-btn-footer"),
            seoBannerButton: t.getElementById("book_online_demo_banner"),
            mobileNumberError: t.getElementById("counsel-number-error")
        },
        values: {
            city: ""
        },
        _Load: function() {
            n.actions.onInputChange(), n.actions.popUpOpen(), n.actions.popUpClose(), n.actions.popUpOverlayClose(), n.actions.onBackClick(), n.actions.onNextClick(), n.actions.onSubmitClick(), n.actions.onDoneClick(), n.actions.onErrorOkClick(), n.actions.textAreaScrollRemove()
        },
        actions: {
            loadFlatPicker: function() {
                var e = t.querySelector("head"),
                    r = t.createElement("script");
                r.src = "https://cdn.jsdelivr.net/npm/flatpickr", r.defer = !0, e.appendChild(r), r.onload = function() {
                    n.actions.customDateTimePickerConfig()
                }
            },
            customDateTimePickerConfig: function() {
                var e = new Date,
                    t = e.getHours() + 2 >= 21 ? "today" : null;
                flatpickr("#basicDate", {
                    minDate: "today",
                    dateFormat: "m/d/Y",
                    disable: [t]
                })
            },
            formatDate: function(e) {
                var t = e.getMonth() + 1,
                    n = e.getDate();
                return n = n < 10 ? "0" + n : n, t < 10 && (t = "0" + t), t + "/" + n + "/" + e.getFullYear()
            },
            formatMonth: function(e, t) {
                var n = e > 12 ? e - 12 : e;
                n = n < 10 ? "0" + n : n;
                var r = t === 0 ? "00" : "30";
                return n + ":" + r
            },
            clearDateTime: function() {
                n.DOM.selectTime.value = "", n.DOM.datePicker.value = "", n.DOM.selectTimeText.classList.remove("adjust-top"), n.DOM.selectDateText.classList.remove("adjust-top")
            },
            convertDateToTwentyFour: function() {
                var e = n.DOM.selectTime.value.slice(0, 5),
                    t = e.split(":");
                return Number(t[0]) < 10 && (t[0] = Number(t[0]) + 12), t[0] + ":" + t[1]
            },
            updateTimeList: function(e) {
                e.forEach(function(e) {
                    var r = t.createElement("li");
                    r.addEventListener("click", function() {
                        n.DOM.listItem.classList.add("hide-list"), n.DOM.selectTime.value = r.innerText, n.DOM.selectTimeText.classList.add("adjust-top");
                        var e = t.querySelector(".time-error");
                        !!e && e.classList.remove("error-container")
                    });
                    var e = e.startsWith("11") ? e + " AM" : e + " PM",
                        i = t.createTextNode(e);
                    r.appendChild(i), n.DOM.timeList && n.DOM.timeList.appendChild(r)
                });
                return
            },
            selectedTimeChange: function() {
                n.DOM.selectTime && n.DOM.selectTime.addEventListener("click", function() {
                    n.DOM.listItem.classList.remove("hide-list")
                })
            },
            basicDateChange: function() {
                !!n.DOM.datePicker && n.DOM.datePicker.addEventListener("change", function() {
                    var e = n.DOM.datePicker.value,
                        r = new Date(n.DOM.datePicker.value);
                    n.DOM.selectDateText.classList.add("adjust-top");
                    var i = t.querySelector(".date-error");
                    !!i && i.classList.remove("error-container");
                    var s = new Date,
                        o = r && (new Date).getTime() > r.getTime() ? new Date((new Date).getMinutes() > 30 ? (new Date).setMinutes(60, 0, 0) : (new Date).setMinutes(60, 0, 0)) : "11";
                    n.DOM.timeList.innerHTML = "";
                    if (n.actions.formatDate(s) == e) {
                        var u = o.getHours() + 2,
                            a = n.avilableTimes.slice(n.avilableTimes.indexOf(n.actions.formatMonth(u, o.getMinutes())), n.avilableTimes.length);
                        a.includes(n.DOM.selectTime.value) || (n.DOM.selectTime.value = ""), u < 11 ? n.actions.updateTimeList(n.avilableTimes) : u > 21 ? n.actions.updateTimeList([]) : n.actions.updateTimeList(a)
                    } else n.actions.updateTimeList(n.avilableTimes)
                })
            },
            clickStream: function(e, t, n, r, i) {
                !!clickStream && clickStream.pushEvent(e, t, n, r, i)
            },
            counsellingPopUpReset: function() {
                var e = [n.DOM.fullName, n.DOM.contactNumber, n.DOM.grade, n.DOM.date, n.DOM.time, n.DOM.fullAddress];
                n.DOM.fullAddress.style.height = "34px", e.forEach(function(e) {
                    e.name == "time" && (e.value = "Select a time") || (e.value = ""), !!e.parentNode && e.parentNode.classList.contains("error") && e.parentNode.classList.remove("error")
                }), !!n.DOM.modal && n.DOM.modal.classList.contains("is-registerSuccess") && (n.DOM.modal.classList.remove("is-registerSuccess"), n.DOM.modal.classList.add("is-register")), !!n.DOM.modal && n.DOM.modal.classList.contains("is-registerError") && (n.DOM.modal.classList.remove("is-registerError"), n.DOM.modal.classList.add("is-register")), !!n.DOM.nextButton && (n.DOM.nextButton.innerText = "Submit")
            },
            popUpOpen: function() {
                var t = {
                        key1: "Page URL",
                        value1: e.location.href
                    },
                    r = [{
                        btn: n.DOM.button,
                        clickStrm: ["BOOK_DEMO_STRIP", "CLICK", "DEMO_BOOK_NOW", null, t]
                    }, {
                        btn: n.DOM.hamburgerButton,
                        clickStrm: ["BOOK_DEMO_CTA", "CLICK", "DEMO_BOOK_HAMBURGER", null, t]
                    }, {
                        btn: n.DOM.homeDemoNumberSecBtn,
                        clickStrm: ["BOOK_DEMO_CTA", "CLICK", "DEMO_BOOK_STATS", null, t]
                    }, {
                        btn: n.DOM.resultsSecCTA,
                        clickStrm: ["BOOK_DEMO_STRIP", "CLICK", "DEMO_BOOK_RESULTS", null, t]
                    }, {
                        btn: n.DOM.ctaFooterBtn,
                        clickStrm: ["BOOK_DEMO_STRIP", "CLICK", "DEMO_BOOK_FOLD", null, t]
                    }, {
                        btn: n.DOM.seoBannerButton,
                        clickStrm: ["BOOK_DEMO_STRIP", "CLICK", "DEMO_BOOK_FOLD", null, t]
                    }];
                r.forEach(function(r, i) {
                    !!r.btn && r.btn.addEventListener("click", function() {
                        r.btn.href == "" && (n.actions.counsellingPopUpReset(), !n.DOM.body.classList.contains("is-modalOpen") && n.DOM.body.classList.add("is-modalOpen"), e.obj.dimension1 && (t.key2 = "Student id", t.value2 = e.obj.dimension1), n.actions.clickStream(r.clickStrm[0], r.clickStrm[1], r.clickStrm[2], r.clickStrm[3], r.clickStrm[4]))
                    })
                })
            },
            popUpClose: function() {
                try {
                    !!n.DOM.close && n.DOM.close.addEventListener("click", function() {
                        n.DOM.body.classList.contains("is-modalOpen") && n.DOM.body.classList.remove("is-modalOpen"), !!n.DOM.modal && n.DOM.modal.classList.contains("is-register") && n.actions.clickStream("BOOK_DEMO_POPUP_1", "CLICK", "CONTACT_INFO_POPUP_CLOSE", null, {})
                    })
                } catch (e) {
                    console.log(e)
                }
            },
            popUpOverlayClose: function() {
                e.addEventListener("click", function(e) {
                    e.target == (!!n.DOM.modal && n.DOM.modal) && n.DOM.body.classList.contains("is-modalOpen") && n.DOM.body.classList.remove("is-modalOpen")
                })
            },
            onInputChange: function() {
                !!n.DOM.contactNumber && n.DOM.contactNumber.addEventListener("input", function(e) {
                    var t = /[^0-9]/gi;
                    e.target.value = e.target.value.replace(t, "")
                })
            },
            onInputValidate: function(e, t) {
                return e.name == "grade" && e.value == "" || e.name == "contactNumber" && e.value && (e.value.length !== 10 || e.value.startsWith("0")) || e.name == "time" && e.value == "Select a time" || e.value.length == 0 ? (t = t && !1, !!e.parentNode && !e.parentNode.classList.contains("error") && e.parentNode.classList.add("error"), e.name == "contactNumber" && n.DOM.mobileNumberError && e.value.length !== 10 ? n.DOM.mobileNumberError.innerText = "Phone Number must have 10 digits" : e.name == "contactNumber" && e.value && e.value.startsWith("0") && n.DOM.mobileNumberError && (n.DOM.mobileNumberError.innerText = "Mobile Number should not start with 0")) : (t = t && !0, !!e.parentNode && e.parentNode.classList.contains("error") && e.parentNode.classList.remove("error")), t
            },
            onInputsValidate: function(e) {
                var t = !0;
                switch (e) {
                    case "REGISTER":
                        var r = [n.DOM.fullName, n.DOM.contactNumber, n.DOM.grade];
                        r.forEach(function(e) {
                            t = n.actions.onInputValidate(e, t)
                        });
                        break;
                    case "CITY":
                        var i = [n.DOM.date, n.DOM.time];
                        i.forEach(function(e) {
                            t = n.actions.onInputValidate(e, t)
                        });
                        break;
                    default:
                        return t
                }
                return t
            },
            onBackClick: function() {
                !!n.DOM.backButton && n.DOM.backButton.addEventListener("click", function() {
                    var e = [n.DOM.date, n.DOM.time, n.DOM.fullAddress];
                    e.forEach(function(e) {
                        e.name == "time" && (e.value = "Select a time") || (e.value = ""), !!e.parentNode && e.parentNode.classList.contains("error") && e.parentNode.classList.remove("error")
                    })
                })
            },
            onNextClick: function() {},
            onSubmitClick: function() {
                !!n.DOM.nextButton && n.DOM.nextButton.addEventListener("click", function() {
                    if (n.actions.onInputsValidate("REGISTER")) {
                        n.DOM.modal.classList.add("is-loader");
                        var t = {
                            action: "POST_LEAD_DATA",
                            dataType: "LEAD_ACTIVITY_HOME_DEMO",
                            params: {
                                contactNumber: n.DOM.contactNumber.value,
                                fullName: n.DOM.fullName.value,
                                grade: n.DOM.grade.value,
                                pageURL: e.location.href
                            }
                        };
                        fetch("https://" + e.config.platformNew.vedantudata.domain + "/vedantudata/homedemo/requestHomeDemo", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(t)
                        }).then(function(e) {
                            console.log(e), e.ok ? (n.DOM.modal.classList.remove("is-loader"), n.DOM.SuccessMsg.classList.add("show"), n.DOM.modal.classList.add("is-registerSuccess")) : (n.DOM.modal.classList.remove("is-loader"), n.DOM.modal.classList.add("is-registerError"))
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                })
            },
            onDoneClick: function() {
                !!n.DOM.doneButton && n.DOM.doneButton.addEventListener("click", function() {
                    n.DOM.body.classList.contains("is-modalOpen") && n.DOM.body.classList.remove("is-modalOpen"), !!n.DOM.SuccessMsg && n.DOM.SuccessMsg.classList.contains("show") && n.DOM.SuccessMsg.classList.remove("show"), !!n.DOM.modal && n.DOM.modal.classList.contains("is-registerSuccess") && (n.DOM.modal.classList.remove("is-registerSuccess"), n.DOM.modal.classList.add("is-register")), n.actions.clickStream("BOOK_DEMO_POPUP_3", "CLICK", "CONFIRMATION_INFO_POPUP_CLOSE", null, {})
                })
            },
            onErrorOkClick: function() {
                !!n.DOM.errorOkButton && n.DOM.errorOkButton.addEventListener("click", function() {
                    n.DOM.body.classList.contains("is-modalOpen") && n.DOM.body.classList.remove("is-modalOpen")
                })
            },
            textAreaScrollRemove: function() {
                function i() {
                    r.value === "" ? r.style.height = "34px" : (r.style.height = "auto", r.style.height = r.scrollHeight + "px")
                }

                function s() {
                    e.setTimeout(i, 0)
                }
                var t;
                e.attachEvent ? t = function(e, t, n) {
                    e.attachEvent("on" + t, n)
                } : t = function(e, t, n) {
                    e.addEventListener(t, n, !1)
                };
                var r = n.DOM.fullAddress;
                t(r, "change", i), t(r, "cut", s), t(r, "paste", s), t(r, "drop", s), t(r, "keydown", s), r.focus(), r.select(), i()
            }
        }
    };
    t.addEventListener("DOMContentLoaded", function() {
        n._Load()
    })
})(window, document);