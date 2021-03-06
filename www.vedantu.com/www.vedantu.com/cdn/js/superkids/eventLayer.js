(function(document, window) {
    window.cookieModule = {}
    window.cookieModule.getCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    window.cookieModule.setCookie = function(name, value, time) {
        var expires = "";
        if (time) {
            var date = new Date();
            date.setTime(date.getTime() + time);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    var getCookie = window.cookieModule.getCookie,
        setCookie = window.cookieModule.setCookie;
    var setCourseValueAsPerUrl = '';
    var findProgram = function(program) {
        if (location.href.includes(program)) {
            return location.href;
        }
    }

    switch (location.href) {
        case findProgram('supercoders'):
            setCourseValueAsPerUrl = 'SUPER_CODER';
            break;
        case findProgram('superreaders'):
            setCourseValueAsPerUrl = 'SUPER_READER';
            break;
        case findProgram('supermaths'):
            setCourseValueAsPerUrl = 'SUPER_MATH';
            break;
        case findProgram('superspeakers'):
            setCourseValueAsPerUrl = 'SUPER_SPEAKER';
            break;
        default:
            setCourseValueAsPerUrl = '';
            break;
    }

    var checkSuperKids = true
    if (location.href.includes('superreaders') || location.href.includes('superkids') || location.href.includes('SUPER_READER')) {
        checkSuperKids = false
    }
    var Vsr_vsk_eventonly = !!(window.location.href.includes('supercoders') || (window.location.href.includes('superreaders') || location.href.includes('SUPER_READER')))
    var getAllUrlParams = function(url) {
        var b = url;
        var a = {};
        if (b) {
            try {
                b = b.split("?")[1];
                if (!b) {
                    return a;
                }
                b = b.split("&");
                for (var u in b) {
                    var c = b[u].split("=");
                    a[c[0]] = c[1];
                }
            } catch (e) {
                console.error(e);
            }
        }
        if (JSON.stringify(a).length > 3) {
            setCookie('getAllUrlParams', JSON.stringify(a), 1000000)
        }
        return a;
    };
    var getUTMParams = function(url) {
        var urlParams = getAllUrlParams(url);
        var cookieParams = getCookie('getAllUrlParams') ? JSON.parse(getCookie('getAllUrlParams')) : {}
        var utmObj = {};
        utmObj.utm_source = urlParams.utm_source || cookieParams.utm_source || null,
            utmObj.utm_medium = urlParams.utm_medium || cookieParams.utm_medium || null,
            utmObj.utm_campaign = urlParams.utm_campaign || cookieParams.utm_campaign || null,
            utmObj.utm_term = urlParams.utm_term || cookieParams.utm_term || null,
            utmObj.utm_content = urlParams.utm_content || cookieParams.utm_content || null,
            utmObj.channel = urlParams.channel || cookieParams.channel || null;
        return utmObj;
    };
    try {
        window.addEventListener('loginPopupOpen', function() {
            try {
                var utmObj = getUTMParams(window.location.href)
                var userData = {}
                setTimeout(function() {
                    window.addEventListener('loginNextButtonclicked', function() {
                            var phoneOrEmail = document.getElementById('login-phone-number').value || document.getElementById('login-email-phone').getElementsByTagName('input')[0].value
                            var validQuery = /\S+@\S+\.\S+/;
                            dataLayer.push({
                                'event': checkSuperKids ? 'VSK_SignIn_PopUp_NextButton_Click' : 'VSK_SuperReaders_SignIn_PopUp_NextButton_Click',
                                'source': utmObj.utm_source,
                                'medium': utmObj.utm_medium,
                                'campaign': utmObj.utm_campaign,
                                'name': userData ? userData.fullName : null,
                                'email_ID': validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                                //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                                'phone_number': !validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                                'user_ID': userData ? userData.userId : null,
                                'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                            })
                        })

                        !!document.getElementById('signInWithGoogle') && document.getElementById('signInWithGoogle').addEventListener('click', function() {
                            dataLayer.push({
                                'event': checkSuperKids ? 'VSK_SignIn_PopUp_SignInWithGoogle_Click' : 'VSK_SuperReaders_SignIn_PopUp_SignInWithGoogle_Click',
                                'source': utmObj.utm_source,
                                'medium': utmObj.utm_medium,
                                'campaign': utmObj.utm_campaign,
                                'name': userData ? userData.fullName : null,
                                'email_ID': userData ? userData.email : null,
                                //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                                'phone_number': userData && userData.phones ? userData.phones[0].number : null,
                                'user_ID': userData ? userData.userId : null,
                                'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                            })
                        })
                    Vsr_vsk_eventonly && window.addEventListener('userProfileOTPEarlyLearnings', function() {
                        var phoneOrEmail = document.getElementById('login-phone-number').value || document.getElementById('login-email-phone').getElementsByTagName('input')[0].value
                        var validQuery = /\S+@\S+\.\S+/;
                        dataLayer.push({
                            'event': checkSuperKids ? 'VSK_SignIn_PopUp_VerifyAndProceed_OTP_Click' : 'VSK_SuperReaders_SignIn_PopUp_VerifyAndProceed_OTP_Click',
                            'source': utmObj.utm_source,
                            'medium': utmObj.utm_medium,
                            'campaign': utmObj.utm_campaign,
                            // 'vedantu_userid': null,
                            'name': userData ? userData.fullName : null,
                            'email_ID': validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                            //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                            'phone_number': !validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                            'user_ID': userData ? userData.userId : null,
                            'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                        })
                        var otpEventName = checkSuperKids ? 'VSK_SignIn_PopUp_VerifyAndProceed_OTP_Click' : 'VSK_SuperReaders_SignIn_PopUp_VerifyAndProceed_OTP_Click'!!clickStream && clickStream.pushEvent("VSK_signin", "click", otpEventName, null, {
                            'key1': 'email_ID',
                            'value1': validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                            'key2': 'phone_number',
                            'value2': !validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                        });
                    })
                    for (var otp = 1; otp < 3; otp++) {
                        !!document.getElementById('resendOTP' + otp) && document.getElementById('resendOTP' + otp).addEventListener('click', function() {
                            var phoneOrEmail = document.getElementById('login-phone-number').value || document.getElementById('login-email-phone').getElementsByTagName('input')[0].value
                            var validQuery = /\S+@\S+\.\S+/;
                            dataLayer.push({
                                'event': checkSuperKids ? 'VSK_Resend_OTP_Click' : 'VSK_SuperReaders_Resend_OTP_Click',
                                'source': utmObj.utm_source,
                                'medium': utmObj.utm_medium,
                                'campaign': utmObj.utm_campaign,
                                // 'vedantu_userid': null,
                                'name': userData ? userData.fullName : null,
                                'email_ID': validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                                //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                                'phone_number': !validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                                'user_ID': userData ? userData.userId : null,
                                'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                            })
                        })
                    }!!document.getElementById('loginWithAnotherNumber') && document.getElementById('loginWithAnotherNumber').addEventListener('click', function() {
                        var phoneOrEmail = document.getElementById('login-phone-number').value || document.getElementById('login-email-phone').getElementsByTagName('input')[0].value
                        var validQuery = /\S+@\S+\.\S+/;
                        dataLayer.push({
                            'event': checkSuperKids ? 'VSK_SignIn_PopUp_ENTER-ANOTHER-MOBILE-NUMBER' : 'VSK_SuperReaders_SignIn_PopUp_ENTER-ANOTHER-MOBILE-NUMBER',
                            'source': utmObj.utm_source,
                            'medium': utmObj.utm_medium,
                            'campaign': utmObj.utm_campaign,
                            // 'vedantu_userid': null,
                            'name': userData ? userData.fullName : null,
                            'email_ID': validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                            //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                            'phone_number': !validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                            'user_ID': userData ? userData.userId : null,
                            'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                        })
                    }) !!document.getElementById('contact-existing-number-login') && document.getElementById('contact-existing-number-login').addEventListener('click', function() {
                        var phoneOrEmail = document.getElementById('login-phone-number').value || document.getElementById('login-email-phone').getElementsByTagName('input')[0].value
                        var validQuery = /\S+@\S+\.\S+/;
                        dataLayer.push({
                            'event': checkSuperKids ? 'VSK_SignIn_PopUp_Verify_LOGIN-WITH_Number_Click' : 'VSK_SuperReaders_SignIn_PopUp_Verify_LOGIN-WITH_Number_Click',
                            'source': utmObj.utm_source,
                            'medium': utmObj.utm_medium,
                            'campaign': utmObj.utm_campaign,
                            // 'vedantu_userid': null,
                            'name': userData ? userData.fullName : null,
                            'email_ID': validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                            //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                            'phone_number': !validQuery.test(phoneOrEmail) ? phoneOrEmail : null,
                            'user_ID': userData ? userData.userId : null,
                            'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                        })
                    })
                }, 1000)
            } catch (e) {
                console.log(e)
            }
        })

        var userData = null
        window.addEventListener('dataLayerLoaded', function(e) {
            console.log('dataLayerLoaded')
            try {
                userData = !!e ? e.detail : null;
                console.log("userData - ", userData)
                if (
                    (userData && window.location.pathname.includes('superkids') || userData && window.location.pathname.includes('superreaders')) &&
                    !window.location.pathname.includes('superteacher') &&
                    !window.location.pathname.includes('freetrial')
                ) {
                    //check this???
                    let url = checkSuperKids ? '/earlyLearning/hasEarlyLearningSessions' : '/earlylearning/v2/has-demo';
                    url = window.exposedMdules.ajaxModule.formSubSystemPath("scheduling", url);
                    let params = {
                        studentId: userData.userId,
                        earlyLearningCourse: checkSuperKids ? 'SUPER_CODER' : 'SUPER_READER',
                    }
                    window.exposedMdules.ajaxModule.ajax(url, 'GET', params, true, function(resp) {
                        if (resp && resp.length > 3) {
                            resp = JSON.parse(resp)
                            let childUrl = checkSuperKids ? '/earlyLearning/getSessionJoiningDetailsBySessionId' : '/earlyLearning/getEarlyLearningBookingByStudentId'
                            childUrl = window.exposedMdules.ajaxModule.formSubSystemPath("scheduling", childUrl);
                            let childParams = {
                                studentId: userData.userId,
                                sessionId: resp[0].id,
                                callingUserId: userData.userId,
                                earlyLearningCourse: checkSuperKids ? 'SUPER_CODER' : 'SUPER_READER',
                            }
                            window.exposedMdules.ajaxModule.ajax(childUrl, 'GET', childParams, true, function(childResp) {
                                if (childResp) {
                                    setCookie('checkDemoBookingInfo', childResp, 100000000)
                                }
                            }, function(error) {});
                        }
                    }, function(error) {});
                }
                var utmObj = getUTMParams(window.location.href)
                if (
                    (window.location.pathname.includes('superkids') || window.location.pathname.includes('superreaders')) &&
                    !window.location.pathname.includes('superteacher')
                ) {
                    try {
                        if (window.location.pathname.includes('freetrial')) {
                            // dataLayer.push({
                            //   'event': 'VSK_New-SignUp-Page-Landing',
                            //   'name': userData ? userData.fullName : null,
                            //   'email_ID': userData ? userData.email : null,
                            //   //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                            //   'phone_number': userData && userData.phones? userData.phones[0].number : null,
                            //   'user_ID': userData ? userData.userId : null,
                            //   'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null,
                            //   'source': utmObj.utm_source,
                            //   'medium': utmObj.utm_medium,
                            //   'campaign': utmObj.utm_campaign
                            // })
                        } else if (!checkSuperKids) {
                            dataLayer.push({
                                'event': checkSuperKids ? 'vsc_hp_landing ' : 'VSK_SuperReaders_Landing_Page_View',
                                'name': userData ? userData.fullName : null,
                                'email_ID': userData ? userData.email : null,
                                //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                                'phone_number': userData && userData.phones ? userData.phones[0].number : null,
                                'user_ID': userData ? userData.userId : null,
                                'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null,
                                'source': utmObj.utm_source,
                                'medium': utmObj.utm_medium,
                                'campaign': utmObj.utm_campaign
                            })
                            var landing_eventName = checkSuperKids ? 'vsc_hp_landing' : 'VSK_SuperReaders_Landing_Page_View'!!clickStream && clickStream.pushEvent("vsc_homepage", "open", landing_eventName, null, {
                                'key1': 'Variation',
                                'value1': 'v1',
                                'key2': 'user_signedin',
                                'value2': userData && userData.userId ? 'Yes' : 'No',
                                'key3': 'course',
                                'value3': checkSuperKids ? 'SUPER_CODER' : 'SUPER_READER',
                                // 'key2': 'email_ID',
                                // 'value2': userData ? userData.email : null,
                                // 'key3': 'phone_number',
                                // 'value3': userData && userData.phones? userData.phones[0].number : null,
                            });
                        }
                    } catch (e) {

                    }
                }!!document.getElementById('login-link') && document.getElementById('login-link').addEventListener('click', function() {
                    try {
                        dataLayer.push({
                            'event': checkSuperKids ? 'VSK_SignIn_Click' : 'VSK_SuperReaders_SignIn_Click',
                            'source': utmObj.utm_source,
                            'medium': utmObj.utm_medium,
                            'campaign': utmObj.utm_campaign,
                            'name': userData ? userData.fullName : null,
                            'email_ID': userData ? userData.email : null,
                            //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                            'phone_number': userData && userData.phones ? userData.phones[0].number : null,
                            'user_ID': userData ? userData.userId : null,
                            'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                        })
                    } catch (e) {
                        console.log(e);
                    }
                }) !!document.getElementById('VSKFreetraillogin') && document.getElementById('VSKFreetraillogin').addEventListener('click', function() {
                    try {
                        dataLayer.push({
                            'event': 'VSK_New-Flow_SignIn_Click',
                            'source': utmObj.utm_source,
                            'medium': utmObj.utm_medium,
                            'campaign': utmObj.utm_campaign,
                            'name': userData ? userData.fullName : null,
                            'email_ID': userData ? userData.email : null,
                            //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                            'phone_number': userData && userData.phones ? userData.phones[0].number : null,
                            'user_ID': userData ? userData.userId : null,
                            'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                        })
                    } catch (e) {
                        console.log(e);
                    }
                })
                for (var indexs = 1; indexs < 5; indexs++) {
                    !!document.getElementById('book-a-free-trail-' + indexs) && document.getElementById('book-a-free-trail-' + indexs).addEventListener('click', function() {
                        try {
                            var tempObj = {
                                'event': checkSuperKids ? 'vsc_hp_bookfreetrail' : 'VSK_SuperReaders_BookAFreeTrialButton_Click',
                                'source': utmObj.utm_source,
                                'medium': utmObj.utm_medium,
                                'campaign': utmObj.utm_campaign,
                                'name': userData ? userData.fullName : null,
                                'email_ID': userData ? userData.email : null,
                                //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                                'phone_number': userData && userData.phones ? userData.phones[0].number : null,
                                'user_ID': userData ? userData.userId : null,
                                'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                            }
                            if (userData) {
                                tempObj.event = checkSuperKids ? 'VSK_BookAFreeTrialButton_AfterLogin_Click' : 'VSK_SuperReaders_BookAFreeTrialButton_AfterLogin_Click',
                                    tempObj.grade = userData.info ? userData.info.grade : null,
                                    tempObj.course = checkSuperKids ? 'SUPER_CODER' : 'SUPER_READER',
                                    tempObj.board = userData.info ? userData.info.board : null
                            }
                            dataLayer.push(tempObj)
                            var trailButton_name = checkSuperKids ? 'vsc_hp_bookfreetrail' : 'VSK_SuperReaders_BookAFreeTrialButton_Click'!!clickStream && clickStream.pushEvent('vsc_demobooking', "click", trailButton_name, null, {
                                'key1': 'Variation',
                                'value1': 'v1',
                                'key2': 'course',
                                'value2': checkSuperKids ? 'SUPER_CODER' : 'SUPER_READER',
                                // 'key2': 'email_ID',
                                // 'value2': userData ? userData.email : null,
                                // 'key3': 'phone_number',
                                // 'value3': userData && userData.phones? userData.phones[0].number : null,
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    })
                };

                if (window.location.pathname.includes('earlylearning') && userData) {
                    dataLayer.push({
                        'event': checkSuperKids ? 'VSK_Demo_Landing_Page_View' : 'VSK_SuperReaders_Demo_Landing_Page_View',
                        'source': utmObj.utm_source,
                        'medium': utmObj.utm_medium,
                        'campaign': utmObj.utm_campaign,
                        // 'vedantu_userid': userData.userId,
                        'grade': userData.info ? userData.info.grade : null,
                        'course': setCourseValueAsPerUrl,
                        'board': userData.info ? userData.info.board : null,
                        'name': userData ? userData.fullName : null,
                        'email_ID': userData ? userData.email : null,
                        //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                        'phone_number': userData && userData.phones ? userData.phones[0].number : null,
                        'user_ID': userData ? userData.userId : null,
                        'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                    }) !!document.getElementById('early-super-kids-banner-web') && document.getElementById('early-super-kids-banner-web').addEventListener('click', function() {
                        try {
                            dataLayer.push({
                                'event': checkSuperKids ? 'VSK_DemoBookingPage_Bottom_Banner_Click' : 'VSK_SuperReaders_DemoBookingPage_Bottom_Banner_Click',
                                'source': utmObj.utm_source,
                                'medium': utmObj.utm_medium,
                                'campaign': utmObj.utm_campaign,
                                // 'vedantu_userid': userData.userId,
                                'grade': userData && userData.info ? userData.info.grade : null,
                                'course': setCourseValueAsPerUrl,
                                'board': userData && userData.info ? userData.info.board : null,
                                'name': userData ? userData.fullName : null,
                                'email_ID': userData ? userData.email : null,
                                //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                                'phone_number': userData && userData.phones ? userData.phones[0].number : null,
                                'user_ID': userData ? userData.userId : null,
                                'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                            })
                        } catch (e) {
                            console.log(e);
                        }
                    })
                }
                window.pushDataLayerEvent = function(obj) {
                    var prevObj = {
                        'source': utmObj.utm_source,
                        'medium': utmObj.utm_medium,
                        'campaign': utmObj.utm_campaign,
                        // 'vedantu_userid': userData.userId,
                        'grade': userData && userData.info ? userData.info.grade : null,
                        'course': setCourseValueAsPerUrl,
                        'board': userData && userData.info ? userData.info.board : null,
                        'name': userData ? userData.fullName : null,
                        'email_ID': userData ? userData.email : null,
                        //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                        'phone_number': userData && userData.phones ? userData.phones[0].number : null,
                        'user_ID': userData ? userData.userId : null,
                        'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null,
                        'Laptop Available': userData && userData.deviceType ? 'Yes' : 'No'
                    }
                    var finalObj = Object.assign(prevObj, obj)
                    dataLayer.push(finalObj)
                    if (obj.event === 'VSK_Demo_Booking_TimeSlot_Confirm_Click' || obj.event === 'VSK_SuperReaders_Demo_Booking_TimeSlot_Confirm_Click') {
                        !!clickStream && clickStream.pushEvent("VSK_demo_booking", "click", obj.event, null, {
                            'key1': 'course',
                            'value1': checkSuperKids ? 'SUPER_CODER' : 'SUPER_READER',
                            'key2': 'date_and_time_of_demo',
                            'value2': obj.date_and_time_of_demo || null,
                            'key3': 'date_of_demo_booking',
                            'value3': obj.date_of_demo_booking || null,
                        });

                    }
                    if (obj.event === 'VSK_Join_Demo_Session_Click' || obj.event === 'VSK_SuperReaders_Join_Demo_Session_Click') {
                        !!clickStream && clickStream.pushEvent("VSK_Session_Click", "click", obj.event, null, {
                            'key1': 'joining_time',
                            'value1': obj.joining_time || null,
                            'key2': 'date_and_time_of_demo',
                            'value2': obj.date_and_time_of_demo || null,
                            'key3': 'date_of_demo_booking',
                            'value3': obj.date_of_demo_booking || null,
                        });
                    }
                }

                //new Events
                window.newPushDataLayerEvent = function(obj) {
                    var prevObj = {
                        'source': utmObj.utm_source,
                        'medium': utmObj.utm_medium,
                        'campaign': utmObj.utm_campaign,
                        // 'vedantu_userid': userData.userId,
                        'grade': userData && userData.info ? userData.info.grade : null,
                        'course': setCourseValueAsPerUrl,
                        'board': userData && userData.info ? userData.info.board : null,
                        'name': userData ? userData.fullName : null,
                        'email_ID': userData ? userData.email : null,
                        //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                        'phone_number': userData && userData.phones ? userData.phones[0].number : null,
                        'user_ID': userData ? userData.userId : null,
                        'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null,
                        'Laptop Available': userData && userData.deviceType ? 'Yes' : 'No'

                    }
                    var finalObj = Object.assign(prevObj, obj);
                    dataLayer.push(finalObj);
                }

                window.pushDataLayerEventWidthDemoBooking = function(obj, ammount) {
                    if (!getCookie('superkid') && !getCookie('superreader')) {
                        return
                    }
                    var prevObj = {
                        'source': utmObj.utm_source,
                        'medium': utmObj.utm_medium,
                        'campaign': utmObj.utm_campaign,
                        // 'vedantu_userid': userData.userId,
                        'grade': userData && userData.info && userData.info.grade,
                        'course': setCourseValueAsPerUrl,
                        'board': userData && userData.info ? userData.info.board : null,
                        'name': userData ? userData.fullName : null,
                        'email_ID': userData ? userData.email : null,
                        //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                        'phone_number': userData && userData.phones ? userData.phones[0].number : null,
                        'user_ID': userData ? userData.userId : null,
                        'parent_name': userData && userData.studentInfo ? userData.studentInfo.parentFirstName : null
                    }
                    var demoInfo = getCookie('checkDemoBookingInfo') || '[{}]'
                    var vsk_ammount = getCookie('vsk_ammount') || null
                    if (demoInfo) {
                        demoInfo = JSON.parse(demoInfo)
                        prevObj['date_of_demo_booking'] = demoInfo[0].creationTime ? new Date(demoInfo[0].creationTime) : null,
                            prevObj['date_and_time_of_demo'] = demoInfo[0].sessionStartTime ? new Date(demoInfo[0].sessionStartTime) : null,
                            prevObj['session_id'] = demoInfo[0].sessionId || null
                        prevObj['demo_end_time'] = demoInfo[0].sessionEndTime ? new Date(demoInfo[0].sessionEndTime) : null,
                            prevObj.amount = vsk_ammount
                    }
                    if (getCookie('superreader') && obj.event && !obj.event.includes('SuperReaders')) {
                        obj.event = obj.event.replace('VSK_', 'VSK_SuperReaders_')
                    }
                    var finalObj = Object.assign(prevObj, obj)
                    dataLayer.push(finalObj)
                    // setCookie('vsk_ammount', null, 0)
                    // setCookie('superreader', true, 0)
                }
            } catch (e) {
                console.log(e)
            }
        })
        Vsr_vsk_eventonly && window.addEventListener('userProfileLetMeInEarlyLearnings', function(e) {
            try {
                // console.log(e.detail)
                var detail = e.detail || {}
                var utmObj = getUTMParams(window.location.href)
                dataLayer.push({
                    'event': checkSuperKids ? 'VSK_Signup_PopUp_LetMeIn_Click' : 'VSK_SuperReaders_Signup_PopUp_LetMeIn_Click',
                    'source': utmObj.utm_source || null,
                    'medium': utmObj.utm_medium || null,
                    'campaign': utmObj.utm_campaign || null,
                    'name': detail.fullName || null,
                    'email_ID': detail.email || null,
                    //'phone': userData && userData.phones? userData.phones[0].phoneCode : null,
                    'phone_number': detail.phoneNumber || null,
                    'user_ID': null,
                    'parent_name': detail.studentInfo && detail.studentInfo.parentInfos && detail.studentInfo.parentInfos[0] ? detail.studentInfo.parentInfos[0].firstName : null,
                    'laptop_available': 'YES',
                })
                var customName = checkSuperKids ? 'VSK_Signup_PopUp_LetMeIn_Click' : 'VSK_SuperReaders_Signup_PopUp_LetMeIn_Click'!!clickStream && clickStream.pushEvent("VSK_signin", "click", customName, null, {
                    'key1': 'phone_number',
                    'value1': detail.phoneNumber || null,
                    'key2': 'email_ID',
                    'value2': detail.email || null,
                    'key3': 'course',
                    'value3': checkSuperKids ? 'SUPER_CODER' : 'SUPER_READER'
                });
            } catch (e) {
                console.log(e);
            }
        })

        //super teachers
        if (window.location.href.includes('superteacher')) {
            var utmObj = getUTMParams(window.location.href)
            dataLayer.push({
                'event': 'VSK_SuperTeacher_Landing_Page_View',
                'source': utmObj.utm_source || null,
                'medium': utmObj.utm_medium || null,
                'campaign': utmObj.utm_campaign || null,
                'user_ID': null
            })
            for (var i = 1; i <= 3; i++) {
                !!document.getElementById('form-link-btn' + i) && document.getElementById('form-link-btn' + i).addEventListener('click', function() {
                    try {
                        dataLayer.push({
                            'event': 'VSK_SuperTeacher_Apply_Now_Click',
                            'source': utmObj.utm_source || null,
                            'medium': utmObj.utm_medium || null,
                            'campaign': utmObj.utm_campaign || null,
                            'user_ID': null
                        })
                    } catch (e) {
                        console.log(e);
                    }
                })
            }
        }
    } catch (e) {
        console.log(e)
    }


})(document, window)