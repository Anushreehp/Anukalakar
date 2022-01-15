(function(document, window, serverConfig) {
    // tmp place for logic
    var microcoursesSliderInitDone = false,
        masterclassSliderInitDone = false,
        waveSliderInitDone = false,
        discoverSliderInitDone = false,
        superkidsSliderInitDone = false;
    var newHomePagecarouselSliders = ['.microcourses-slider', '.masterclass-slider', '.wave-slider', '.discover-slider', '.vsk-superkids-slider'];
    var timeout, interval;

    function homeSlider(_sliderContainer, _slider, autoPlay, indicator, responsiveIndicator, hoverable, sliderAnimationTime, sliderButtons, _nextButton, _previousButton, maxSlidesAtATime) {

        this.sliderContainer = _sliderContainer,
            this.slider = _slider,
            this.autoPlay = autoPlay,
            this.indicator = indicator,
            this.responsiveIndicator = responsiveIndicator,
            this.hoverable = hoverable,
            this.slideLoop = true,
            this.sliderAnimationTime = sliderAnimationTime,
            this.sliderButtons = sliderButtons,
            this.nextButton = _nextButton,
            this.previousButton = _previousButton,
            this.maxSlidesAtATime = maxSlidesAtATime,
            this.counterForSlideMove = 0;


        var THIS = this;
        var multiple = false;
        var reverse = false;
        var activeSlideNumber = 0;


        var listenerTypes = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];

        window.addEventListener('homepage-grade-change', function() {
            THIS.counterForSlideMove = 0;
            var leftArrow;
            THIS.previousButton && (leftArrow = document.querySelector(THIS.previousButton));

            sliderContainer = document.querySelector(THIS.sliderContainer);
            slider = document.querySelector(THIS.slider);

            if (!!leftArrow && !leftArrow.classList.contains('end') && newHomePagecarouselSliders.indexOf(THIS.slider) >= 0) {
                leftArrow.classList.add('end');
            }
        })

        function animationListener() {
            listenerTypes.forEach(function(eventType) {
                slider.removeEventListener(eventType, animationEnd);
                slider.addEventListener(eventType, animationEnd);
            });
        }

        function removeAnimationListener() {
            listenerTypes.forEach(function(eventType) {
                slider.removeEventListener(eventType, animationEnd);
            });
        }

        var JumpNumber = null;

        function animationEnd() {
            if (typeof(JumpNumber) === "number" && multiple === true) {
                var count = JumpNumber || 1;
                for (var j = 0; j < count; j++) {
                    appender();
                }
                multiple = !multiple;

            } else if (reverse === false) {
                appender();
            }
            addListenerToCard();
        }

        var slider = null;
        var indicator = null;

        function addListener(element) {
            element.addEventListener('click', function() {
                clearSetInterval();
                var currentSlide = indicator.querySelector('.indicator.active');
                var currentSlideOffset = currentSlide.offsetLeft;
                var clickedSlide = element.offsetLeft;
                var elementWidth = element.offsetWidth
                var clickDifference = clickedSlide - currentSlideOffset;
                var jump = clickDifference / elementWidth;
                var firstSlider = slider.querySelector('li');
                var slideWidth = firstSlider.offsetWidth;

                if (jump > 0) {
                    multiple = !multiple;

                    JumpNumber = jump;
                    slider.classList.add('slide-animate');
                    slider.style.left = "-" + slideWidth * jump + "px";
                }
                if (jump < 0) {
                    reverse = true;
                    removeAnimationListener();
                    slider.classList.remove('slide-animate');
                    slider.style.left = "-" + slideWidth * (-jump) + "px";
                    for (var i = 0; i > jump; i--) {
                        prependChild();
                    }
                    var temp = null;
                    clearTimeout(temp);
                    temp = setTimeout(function() {
                        slider.classList.add('slide-animate');
                        slider.style.left = "0px";
                        indiIdentifier();
                        animationListener();
                        addListenerToCard();
                    }, 0);
                }
                if (THIS.autoPlay === true) {
                    setSliderInterval();
                }
            });
        }

        function slideWidthCalculate() {
            var firstSlider = slider.querySelector('li');
            var slideWidth = firstSlider.offsetWidth;
            return slideWidth;
        }

        function nextSlideFunction() {
            slider.classList.add('slide-animate');
            if (newHomePagecarouselSliders.indexOf(THIS.slider) >= 0) {
                slider.style.left = "-" + slideWidthCalculate() * THIS.counterForSlideMove + "px";
            } else {
                slider.style.left = "-" + slideWidthCalculate() + "px";
            }
        }

        function nextSlide() {

            if (THIS && THIS.slider && newHomePagecarouselSliders.indexOf(THIS.slider) >= 0) {
                var rightArrow = document.querySelector(THIS.nextButton);
                var leftArrow = document.querySelector(THIS.previousButton);

                if (!!rightArrow && (((THIS.counterForSlideMove + THIS.maxSlidesAtATime + 1) >= slider.querySelectorAll('li.slider-li').length) || (slider.querySelectorAll('li').length <= THIS.maxSlidesAtATime))) {
                    rightArrow.classList.add('end');
                }

                if (((THIS.counterForSlideMove + THIS.maxSlidesAtATime + 1) <= slider.querySelectorAll('li.slider-li').length)) {
                    THIS.counterForSlideMove = THIS.counterForSlideMove + 1;
                    nextSlideFunction();
                }

                if (!!leftArrow && leftArrow.classList.contains('end') && THIS.maxSlidesAtATime < slider.querySelectorAll('li.slider-li').length) {
                    leftArrow.classList.remove('end');
                }
            } else {
                nextSlideFunction();
            }
        }

        function appender() {
            if (newHomePagecarouselSliders.indexOf(THIS.slider) < 0) {
                slider.classList.remove('slide-animate');
                var firstChild = slider.querySelector('li');
                var newItem = firstChild.cloneNode(true);
                slider.append(newItem);
                activeSlideNumber = firstChild.nextElementSibling.getAttribute('listnum');
                firstChild.remove();
                if (!!THIS.indicator) {
                    indiIdentifier();
                }
                slider.style.left = "0px";
            }
        }

        function prevSlideFunction() {
            if (newHomePagecarouselSliders.indexOf(THIS.slider) >= 0) {
                var firstSlider = slider.querySelector('li');
                var slideWidth = firstSlider.offsetWidth;
                slider.style.left = "-" + slideWidth * THIS.counterForSlideMove + "px";
            } else {
                var lastSlide = slider.lastElementChild;
                slider.classList.remove('slide-animate');
                slider.style.left = "-" + lastSlide.offsetWidth + "px";
                prependChild();
                if (!!THIS.indicator) {
                    indiIdentifier();
                }
                addListenerToCard();
            }
        }

        function prevSlide() {

            if (THIS && THIS.slider && newHomePagecarouselSliders.indexOf(THIS.slider) >= 0) {
                var rightArrow = document.querySelector(THIS.nextButton);
                var leftArrow = document.querySelector(THIS.previousButton);
                if (THIS.counterForSlideMove - 1 == 0 && !!leftArrow) {
                    leftArrow.classList.add('end');
                }

                if (THIS.counterForSlideMove - 1 >= 0) {
                    THIS.counterForSlideMove = THIS.counterForSlideMove - 1;
                    prevSlideFunction();
                }

                if (!!rightArrow && rightArrow.classList.contains('end') && maxSlidesAtATime < slider.querySelectorAll('li.slider-li').length) {
                    rightArrow.classList.remove('end');
                }
            } else {
                prevSlideFunction();
            }
        }

        function prependChild() {
            clearSetInterval();
            var lastChild = slider.lastElementChild;
            var newItem = lastChild.cloneNode(true);
            slider.prepend(newItem);
            activeSlideNumber = newItem.getAttribute('listnum');
            lastChild.remove();
        }

        var nextSlideInterval = null;

        function clearSetInterval() {
            if (!!nextSlideInterval) {
                clearInterval(nextSlideInterval);
            }
        }

        function setSliderInterval() {
            nextSlideInterval = window.setInterval(function() {
                reverse = false;
                // animationListener();
                nextSlide();
            }, THIS.sliderAnimationTime);
        }

        function indiIdentifier() {
            var indicatorContainer = indicator.querySelectorAll('.indicator');
            for (var activelist = 0; activelist < indicatorContainer.length; activelist++) {
                indicatorContainer[activelist].classList.remove('active');
            }
            indicatorContainer[activeSlideNumber].classList.add('active');
        }

        function carIndiCreator() {
            var elementCount = slider.childElementCount;
            if (slider.childElementCount > 1) {
                for (var x = 0; x < elementCount; x++) {
                    var creator = document.createElement("div");
                    creator.classList.add('indicator');
                    addListener(creator);
                    indicator.append(creator);
                }
                attributeSetter();
                indiIdentifier();
            } else {
                return;
            }
        }

        function attributeSetter() {
            var listCollector = slider.querySelectorAll("li");
            for (var x = 0; x < listCollector.length; x++) {
                listCollector[x].setAttribute("listNum", x);
            }
        }

        function sliderButtonListener() {
            var nextButton = document.querySelector(THIS.nextButton);
            var previousButton = document.querySelector(THIS.previousButton);
            nextButton.addEventListener("click", function() {
                reverse = false;
                nextSlide();
                addListenerToCard();
            });
            previousButton.addEventListener("click", function() {
                reverse = true;
                prevSlide();
                removeAnimationListener();
                var temp = null;
                clearTimeout(temp);
                temp = setTimeout(function() {
                    slider.classList.add('slide-animate');
                    if (newHomePagecarouselSliders.indexOf(THIS.slider) < 0) {
                        slider.style.left = "0px";
                    }

                    if (!!THIS.indicator) {
                        indiIdentifier();
                    }
                }, 0);
                animationListener();
                addListenerToCard();
                if (THIS.autoPlay === true) {
                    setSliderInterval();
                }
            });
        }

        function sliderListener() {
            slider.addEventListener("mouseenter", function() {
                clearSetInterval();
                removeAnimationListener();
            });
            slider.addEventListener("mouseleave", function() {
                if (THIS.autoPlay) {
                    setSliderInterval();
                }
                if (newHomePagecarouselSliders.indexOf(THIS.slider) < 0) {
                    animationListener();
                }
            });
        }

        function initialiser() {
            sliderContainer = document.querySelector(THIS.sliderContainer);
            slider = document.querySelector(THIS.slider);
            // setTimeout(function(){
            //     if(!slider.getBoundingClientRect().height){
            //         return;
            //     }
            //     sliderContainer.style.height = slider.getBoundingClientRect().height+ 'px';
            // },600);

            indicator = document.querySelector(THIS.indicator);
            if (THIS.autoPlay) {
                setSliderInterval();
            }
            if (!!THIS.indicator) {
                carIndiCreator();
            }
            if (THIS.hoverable) {
                sliderListener();
            }
            if (THIS.sliderButtons && THIS.nextButton && THIS.previousButton) {
                sliderButtonListener();
            }
        }

        this.init = function() {
            initialiser();
            animationListener();
        }
    }

    if (window.matchMedia("(max-width: 639px)").matches) {
        var slider1 = new homeSlider("#learn-slider-container", ".learn-slider", true, "#learn-indicator", false, "hoverable", 3000);
        slider1.init();
    }

    var slider2 = new homeSlider("#testimony", ".testimony-slider", true, ".testimony-indicator", false, "hoverable", 3000);
    slider2.init();
    var homeSliderSelector = document.querySelectorAll('#learning-pedagogy-slider');
    var homeSliderSelectorId = document.getElementById("learning-pedagogy-container");
    if (window.matchMedia("(max-width: 767px)").matches) {
        var currentHomeSlider = homeSliderSelector[1];
    } else {
        var currentHomeSlider = homeSliderSelector[0];
    }
    if (currentHomeSlider && homeSliderSelector.length > 0 && homeSliderSelectorId) {
        homeSliderSelectorId.style.height = currentHomeSlider.scrollHeight + "px";
        window.addEventListener("resize", function() {
            if (window.matchMedia("(max-width: 767px)").matches) {
                var currentHomeSlider = homeSliderSelector[1];
            } else {
                var currentHomeSlider = homeSliderSelector[0];
            }
            homeSliderSelectorId.style.height = currentHomeSlider.scrollHeight + "px";
        })
    }
    if (window.matchMedia("(max-width: 767px)").matches) {
        var learningPSlider = new homeSlider("#learning-pedagogy-container", ".learning-pedagogy-slider.mweb-list", true, ".learning-pedagogy-indicator-container", false, null, 3000, "microcourses-sliderButtons", ".homepage-resullts-slider-button-right .vicon-arrowbold-right-circle", ".homepage-resullts-slider-button-left .vicon-arrowbold-left-circle", 3);
        learningPSlider.init();

    } else {
        var learningPSlider = new homeSlider("#learning-pedagogy-container", ".learning-pedagogy-slider.dweb-list", true, ".learning-pedagogy-indicator-container", false, null, 3000, "microcourses-sliderButtons", ".homepage-resullts-slider-button-right .vicon-arrowbold-right-circle", ".homepage-resullts-slider-button-left .vicon-arrowbold-left-circle", 3);
        learningPSlider.init();
    }
    resultSliderEvents();

    var noOfStudents = 21706208;
    var liveHours = 9933249;

    function updateData() {
        var currentTime = new Date().getTime();
        var baseDate = new Date('October 28, 2020 12:00:00').getTime();
        var differTime = Math.round((currentTime - baseDate) / 86400000);
        noOfStudents = noOfStudents + (differTime * 69811);
        liveHours = liveHours + (differTime * 41663);
    }
    updateData();

    function resultSliderEvents() {
        var resultSlider = document.querySelectorAll('#learning-pedagogy-slider');
        if (!!resultSlider) {
            resultSlider.forEach(function(resultSliderSections) {
                resultSliderSections.onclick = function(target) {
                    var targetImg = (!!target.path[1] ? target.path[1].getAttribute('id') : undefined);
                    var imageNumber = 0;
                    if (!!targetImg) {
                        imageNumber = targetImg.substr(2);
                    }
                    var clickLabelSlider = "HOME_RESULTS_" + imageNumber;

                    try {
                        clickStream && clickStream.pushEvent("HOME_RESULTS_SLIDER", "Click", clickLabelSlider);
                    } catch (error) {
                        console.warn("Error While sending click stream data: ", error);
                    }
                    window.open("https://courses.vedantu.com/Vedanturesults/?utm_source=seo&utm_medium=seo_homepage&utm_campaign=seo_homepage_banner&utm_content=seo_homepage_banner-results_page-14Sep20&utm_term=seo_homepage_banner-results_page");
                }
            });
        }
    }
    // if (window.matchMedia("(min-width: 1024px)").matches) {
    //     var slider3 = new homeSlider(".courses-slider-container", ".courses-slider", autoPlay = false, ".courses-indicator-container", responsiveIndicator = false, "hoverable", 3000, "sliderButtons", ".button.right", ".button.left");
    //     slider3.init();
    // }
    // var slider4 = new homeSlider(".rank-slider-container", ".rank-slider", autoPlay = true, ".rank-indicator-container", responsiveIndicator = false, false, 4000, "sliderButtons", ".rank-button.right", ".rank-button.left");
    // slider4.init();

    function addHomeSliderForNewHomePageComponents() {
        if (!!document.querySelector(".microcourses-slider") && !microcoursesSliderInitDone) {
            var homePageMicrocoursesSlider = new homeSlider(".microcourses-slider-container", ".microcourses-slider", autoPlay = false, null, responsiveIndicator = true, "hoverable", 3000, "microcourses-sliderButtons", ".homepage-microcourses-slider-button-right .vicon-arrowbold-right-circle", ".homepage-microcourses-slider-button-left .vicon-arrowbold-left-circle", 3);
            homePageMicrocoursesSlider.init();
            microcoursesSliderInitDone = true;
        }

        if (!!document.querySelector(".masterclass-slider") && !masterclassSliderInitDone) {
            var homePageMasterclassSlider = new homeSlider(".masterclass-slider-container", ".masterclass-slider", autoPlay = false, null, responsiveIndicator = true, "hoverable", 3000, "masterclass-sliderButtons", ".homepage-masterclass-slider-button-right .vicon-arrowbold-right-circle", ".homepage-masterclass-slider-button-left .vicon-arrowbold-left-circle", 3);
            homePageMasterclassSlider.init();
            // document.querySelector('.masterclass-slider-container').addEventListener("scroll", masterclassShowHighlights);
            masterclassSliderInitDone = true;
        }

        if (!!document.querySelector(".wave-slider") && !waveSliderInitDone) {
            var homePageWaveSlider = new homeSlider(".wave-slider-container", ".wave-slider", autoPlay = false, null, responsiveIndicator = true, "hoverable", 3000, "wave-sliderButtons", ".homepage-wave-slider-button-right .vicon-arrowbold-right-circle", ".homepage-wave-slider-button-left .vicon-arrowbold-left-circle", 2);
            homePageWaveSlider.init();
            waveSliderInitDone = true;
        }

        if (!!document.querySelector(".discover-slider") && !discoverSliderInitDone) {
            var DiscoverPageWaveSlider = new homeSlider(".discover-slider-container", ".discover-slider", autoPlay = false, null, responsiveIndicator = true, "hoverable", 3000, "discover-sliderButtons", ".homepage-discover-slider-button-right .vicon-arrowbold-right-circle", ".homepage-discover-slider-button-left .vicon-arrowbold-left-circle", 3);
            DiscoverPageWaveSlider.init();
            discoverSliderInitDone = true;
        }
        if (!!document.querySelector(".vsk-superkids-slider") && !superkidsSliderInitDone) {
            var homePageSuperkidsSlider = new homeSlider(".vsk-superkids-main-section", ".vsk-superkids-slider", autoplay = false, '.vsk-superkids-indicator-container', responsiveIndicator = false, null, 3000, "", "", "");
            homePageSuperkidsSlider.init();
            superkidsSliderInitDone = true;
        }
    }

    function checkRightArrow(slider, rightArrow, maxSlidesAtATime) {
        if (!!document.querySelector(slider) && document.querySelector(slider).querySelectorAll('li.slider-li').length <= maxSlidesAtATime) {
            document.querySelector(rightArrow).classList.add('end');
        } else if (!!document.querySelector(slider)) {
            document.querySelector(rightArrow).classList.remove('end');
        }
    }

    function elementLoad(element, type) {
        var windowBottom = window.innerHeight;
        var elementBottom = element.parentElement.getBoundingClientRect().top;
        if (elementBottom < windowBottom) {
            if (!!config) {
                var imageSource = element.dataset.src || element.dataset.bgsrc;
                if (type == "img") {
                    element.src = imageSource + "?ver=" + config.static.version;
                } else {
                    element.style.backgroundImage = "url('" + imageSource + '?ver=' + config.static.version + "')";
                    element.removeAttribute('data-bgsrc');
                }
            }
        }
    }

    var lazyLoadScrollFun = function() {
        var pageImageList = document.querySelectorAll('img[data-src]');
        var backgroundImageList = document.querySelectorAll('div[data-bgsrc]');
        !!pageImageList && pageImageList.length > 0 && [].forEach.call(pageImageList, function(element) {
            elementLoad(element, "img");
            element.onload = function() {
                element.removeAttribute('data-src');
            }
        });
        !!backgroundImageList && backgroundImageList.length > 0 && [].forEach.call(backgroundImageList, function(element) {
            elementLoad(element, "bg-img");
        });
    }

    function lazyload() {
        lazyLoadScrollFun();
        window.removeEventListener('scroll', lazyLoadScrollFun);
        window.addEventListener('scroll', lazyLoadScrollFun);
    };

    function elementInView(_currentElement) {
        if (_currentElement.getBoundingClientRect().top < window.innerHeight) {
            return true;
        }
    }

    var memberCounter = null;
    var hoursCount = null;

    function countResponseHandler() {
        // var platformUrl = utilsController.formPlatformUrl(utilsController.apiURL['COUNTER']);
        // utilsController.ajax(platformUrl, "GET", {}, function(response) {
        //     response = JSON.parse(response);
        //     memberCounter = new numberIncrease(response.memberCount, "#student-number", 300);
        //     hoursCount = new numberIncrease(Math.round(((response.sessionDurationCount / 1000) / 60) / 60), "#hours-learning", 300);
        // });
        memberCounter = new numberIncrease(noOfStudents, "#student-number", 300);
        hoursCount = new numberIncrease(liveHours, "#hours-learning", 300);
    }

    function numberIncrease(number, _element, time) {
        this.number = number;
        this._element = _element;
        this.time = time;
        this.runOnce = false;
        var self = this;
        self.numberCounter = null;
        this.startNumberCount = function() {
            if (!this.runOnce) {
                var currentElement = document.querySelector(this._element);
                var newNumber = null;
                if ((elementInView(currentElement))) {
                    this.runOnce = true;
                    var initialNumber = 0;
                    time = typeof(this.time) ? this.time : 300;
                    var finalNumber = typeof(this.number) ? this.number : 300000;
                    var jumpInNumber = (finalNumber - initialNumber) / this.time;
                    jumpInNumber = Math.floor(jumpInNumber);
                    if (jumpInNumber === 0) {
                        jumpInNumber = 1;
                    }
                    self.numberCounter = setInterval(function() {
                        if (newNumber >= finalNumber) {
                            clearInterval(self.numberCounter);
                            return;
                        } else {
                            newNumber += jumpInNumber;
                            newNumber = (newNumber >= finalNumber) ? finalNumber : newNumber;
                            currentElement.textContent = newNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "+";
                        }
                    }, 1);
                }
            }
        }
    }

    window.addEventListener('scroll', function() {
        var imageLoadTime = null;
        clearTimeout(imageLoadTime);
        imageLoadTime = setTimeout(function() {
            if (!!memberCounter) {
                memberCounter.startNumberCount();
            }
            if (!!hoursCount) {
                hoursCount.startNumberCount();
            }
        }, 100);
    });

    function youTubeNew() {

        var videoContainer = document.querySelector('.video-container');
        if (!!videoContainer) {
            videoContainer.innerHTML = '<iframe  src="https://www.youtube.com/embed/oaJgjW0PFcs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }

        try {
            let customObj = {};
            !!clickStream && clickStream.pushEvent("home_page", "Click", "video_click", null, customObj);
        } catch (error) {
            console.warn("Error While sending click stream data: ", error);
        }
    }
    // youTubeNew();

    function youtubeVideo() {
        //var topVideoSection = document.querySelector('#home-intro-video');
        var teacherVideo = document.querySelector('#teacher-video');
        var parentVideo = document.querySelector('#parent-video');
        var waveFirstVideo = document.querySelector('#first-video-play-button');
        var waveSecondVideo = document.querySelector('#second-video-play-button');
        var waveThirdVideo = document.querySelector('#third-video-play-button');
        var videoPopupHolder = document.querySelector('#video-popup');
        var videoContainer = [
            //topVideoSection,
            teacherVideo,
            parentVideo,
            waveFirstVideo,
            waveSecondVideo,
            waveThirdVideo
        ];
        var waveFirstVideoId = 'pvCtApaVJCY?rel=0&showinfo=0&autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer"';
        var waveSecondVideoId = '65ppOhJm2GQ?rel=0&showinfo=0&autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer"';
        var waveThirdVideoId = 'sqme32pUSos?rel=0&showinfo=0&autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer"';
        // var videoContainer = [];
        var popupBody = videoPopupHolder.querySelector('.video-popup-container');

        function playVideo(element) {
            videoPopupHolder.classList.add('show');
            var body = document.querySelector('body');
            body.classList.add('stop-scroll');
            var topSectionVideoId = "oaJgjW0PFcs?rel=0&showinfo=0&autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer";
            // var introVideoId = 'wC0ZxwEmpPQ?rel=0&showinfo=0&autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer';
            var teacherVideoId = 'HVzleXYti3I?rel=0&showinfo=0&autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer';
            var parentVideoId = '-O1cemncQuY?rel=0&showinfo=0&autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer';
            var finalPassedVideo = null;
            switch (!!element) {
                // case (element === topVideoSection):
                //     // finalPassedVideo = introVideoId;
                //     finalPassedVideo = topSectionVideoId;
                //     break;
                case (element === teacherVideo):
                    finalPassedVideo = teacherVideoId;
                    break;
                case (element === parentVideo):
                    finalPassedVideo = parentVideoId;
                    break;
                case (element === waveFirstVideo):
                    finalPassedVideo = waveFirstVideoId;
                    break;
                case (element === waveSecondVideo):
                    finalPassedVideo = waveSecondVideoId;
                    break;
                case (element === waveThirdVideo):
                    finalPassedVideo = waveThirdVideoId;
                    break;
                default:
                    break;
            }
            var innerVideoChild = document.createElement('div');
            var iframeHtml = '<iframe class=\"youtube-video\" src=\"https://www.youtube.com/embed/' + finalPassedVideo + '\"' + 'frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>';
            innerVideoChild.innerHTML += iframeHtml;
            popupBody.innerHTML = '';
            popupBody.appendChild(innerVideoChild);
        }

        function closeVideo() {
            var body = document.querySelector('body');
            videoPopupHolder.classList.remove('show');
            body.classList.remove('stop-scroll');
            var playerList = document.querySelectorAll('.youtube-video');
            playerList[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        }

        function videoCloseLIstener() {
            var videoCloseButton = document.querySelector('#video-close');
            videoCloseButton.onclick = function() {
                closeVideo();
            }
            videoPopupHolder.onclick = function() {
                closeVideo();
            }
            window.onkeydown = function(event) {
                evt = event || window.event;
                if (evt.which == 27) {
                    closeVideo();
                }
            };
        }
        videoContainer.forEach(function(video) {
            video.addEventListener('click', function(event) {
                playVideo(event.currentTarget);
            });
        });
        videoCloseLIstener();
    }
    youtubeVideo();

    function newsChangerLogic(_listContainer, _dataContainer, _activeSlideNumber) {
        var dataContainer = document.querySelector(_dataContainer);
        var thumbnailContainer = document.querySelector(_listContainer);
        var dataList = dataContainer.querySelectorAll('.data-card');
        var thumbnailList = thumbnailContainer.querySelectorAll('li');
        var listenerTypes = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];
        var multiple = false;
        var reverse = false;
        var activeSlideNumber = _activeSlideNumber;

        function addClickToList() {
            for (var list = 0; list < thumbnailList.length; list++) {
                addListener(thumbnailList[list]);
            }
        }

        function listAttributeSelector() {
            var thumbnailList = thumbnailContainer.querySelectorAll('li');

            for (var activelist = 0; activelist < thumbnailList.length; activelist++) {
                thumbnailList[activelist].classList.remove('active');
                dataList[activelist].classList.remove('active');
            }
            var listNumber = thumbnailList[activeSlideNumber].getAttribute('listnum');
            thumbnailList[activeSlideNumber].classList.add('active');
            dataList[listNumber].classList.add('active');
        }

        function animationListener() {
            listenerTypes.forEach(function(eventType) {
                thumbnailContainer.removeEventListener(eventType, animationEnd);
                thumbnailContainer.addEventListener(eventType, animationEnd);
            });
        }

        function removeAnimationListener() {
            listenerTypes.forEach(function(eventType) {
                thumbnailContainer.removeEventListener(eventType, animationEnd);
            });
        }

        var JumpNumber = null;

        function animationEnd() {
            if (typeof(JumpNumber) === "number" && multiple === true) {
                var count = JumpNumber || 1;
                for (var j = 0; j < count; j++) {
                    appender();
                }
                multiple = !multiple;

            } else if (reverse === false) {
                appender();
            }
        }

        function appender() {
            thumbnailContainer.classList.remove('animate');
            var firstChild = thumbnailContainer.querySelector('li');
            var newItem = firstChild.cloneNode(true);
            thumbnailContainer.append(newItem);
            addListener(newItem);
            firstChild.remove();
            listAttributeSelector();
            thumbnailContainer.style.left = "0px";
        }

        function addListener(element) {
            element.addEventListener('click', function() {
                clearSetInterval();
                var currentSlide = thumbnailContainer.querySelector('li');
                for (var slideCount = 0; slideCount < activeSlideNumber; slideCount++) {
                    currentSlide = currentSlide.nextElementSibling
                }
                var currentSlideOffset = currentSlide.offsetLeft;
                var clickedSlide = element.offsetLeft;
                var elementWidth = element.offsetWidth
                var clickDifference = clickedSlide - currentSlideOffset;
                var jump = clickDifference / elementWidth;
                var firstSlider = thumbnailContainer.querySelector('li');
                var slideWidth = firstSlider.offsetWidth;

                if (jump > 0) {
                    multiple = !multiple;

                    JumpNumber = jump;
                    thumbnailContainer.classList.add('animate');
                    thumbnailContainer.style.left = "-" + slideWidth * jump + "px";
                }
                if (jump < 0) {
                    reverse = true;
                    removeAnimationListener();
                    thumbnailContainer.classList.remove('animate');
                    thumbnailContainer.style.left = "-" + slideWidth * (-jump) + "px";
                    for (var i = 0; i > jump; i--) {
                        prependChild();
                    }
                    var temp = null;
                    clearTimeout(temp);
                    temp = setTimeout(function() {
                        thumbnailContainer.classList.add('animate');
                        thumbnailContainer.style.left = "0px";
                        listAttributeSelector();
                        animationListener();
                    }, 0);
                }
                setSliderInterval();
            });
        }

        function slideWidthCalculate() {
            var firstSlider = thumbnailContainer.querySelector('li');
            var slideWidth = firstSlider.offsetWidth;
            return slideWidth;
        }

        function prependChild() {
            clearSetInterval();
            var lastChild = thumbnailContainer.lastElementChild;
            var newItem = lastChild.cloneNode(true);
            thumbnailContainer.prepend(newItem);
            lastChild.remove();
            addListener(newItem);
        }

        function nextSlide() {
            thumbnailContainer.classList.add('animate');
            thumbnailContainer.style.left = "-" + slideWidthCalculate() + "px";
        }

        var nextSlideInterval = null;

        function clearSetInterval() {
            if (!!nextSlideInterval) {
                clearInterval(nextSlideInterval);
            }
        }

        function setSliderInterval() {
            nextSlideInterval = window.setInterval(function() {
                reverse = false;
                animationListener();
                nextSlide();
            }, 5000);
        }

        var activeDesktopSlide = thumbnailList[0];

        function desktopSlider() {
            for (var list = 0; list < thumbnailList.length; list++) {
                thumbnailList[list].classList.remove('active');
                dataList[list].classList.remove('active');
            }

            if (activeDesktopSlide.getAttribute('listnum') < (thumbnailList.length - 1).toString()) {
                activeDesktopSlide.nextElementSibling.classList.add('active');
                activeDesktopSlide = activeDesktopSlide.nextElementSibling;
                var currentSlideIndex = activeDesktopSlide.getAttribute('listnum');
                dataList[currentSlideIndex].classList.add('active');
            } else {
                activeDesktopSlide = thumbnailList[0];
                dataList[activeDesktopSlide.getAttribute('listnum')].classList.add('active');
                thumbnailList[0].classList.add('active');
            }
        }

        function desktopListListener() {
            thumbnailList.forEach(function(_element) {
                _element.addEventListener('click', function(event) {
                    var clickedElement = event.currentTarget;
                    if (!!clickedElement.previousElementSibling) {
                        activeDesktopSlide = clickedElement.previousElementSibling;
                    } else {
                        activeDesktopSlide = thumbnailList[thumbnailList.length - 1];
                    }
                    clearDesktopSetInterval();
                    desktopSlider();
                    desktopSetInterval();
                });
            });
        }
        var newsSliderInterval = null;

        function clearDesktopSetInterval() {
            clearInterval(newsSliderInterval);
        }

        function desktopSetInterval() {
            clearDesktopSetInterval();
            newsSliderInterval = setInterval(function() {
                desktopSlider();
            }, 5000)
        }

        function desktopListSliderStarter() {
            desktopListListener();
            desktopSlider();
            desktopSetInterval();
        }

        function startForMobileSlider() {
            addClickToList();
            animationListener();
            listAttributeSelector();
            setSliderInterval();
        }

        if (window.matchMedia("(max-width: 1023px)").matches) {
            startForMobileSlider();
        } else {
            desktopListSliderStarter();
        }
    }

    if (window.matchMedia("(min-width: 1024px)").matches) {
        newsChangerLogic(".news-thumbnail-slider", ".news-data", null);
    } else {
        if (window.matchMedia("(max-width: 639px)").matches) {
            newsChangerLogic(".news-thumbnail-slider", ".news-data", 1); // note the active slider here is 2, the count starts from 0.
        } else {
            newsChangerLogic(".news-thumbnail-slider", ".news-data", 2); // note the active slider here is 3, the count starts from 0.
        }
    }

    function waveVideoSlider() {
        var slidesContainer = document.querySelector('.slider');
        var nodeList = slidesContainer.querySelectorAll('li');
        var textContainer = document.querySelectorAll('.respected-text');
        var slidesList = nodeListToArray(nodeList);

        function nodeListToArray(nodelist) {
            var results = [];
            var i, element;
            for (i = 0; i < nodelist.length; i++) {
                element = nodelist[i];
                results.push(element);
            }
            return results;
        }
        for (i = 0; i < nodeList.length; i++) {
            addListener(nodeList[i]);
        }
        if (window.matchMedia("(min-width: 1024px)").matches) {
            var activeTransform = "translate(" + 0 + "%, 0%)  scale(1.73)";
        } else {
            activeTransform = "translate(" + 0 + "%, 0%)  scale(1.239)";
        }

        function prependChild() {
            var lastChild = slidesContainer.lastElementChild;
            lastChild.remove();
            var newItem = lastChild.cloneNode(true);
            slidesContainer.prepend(newItem);
            addListener(newItem);
        }

        function appender() {
            var firstChild = slidesContainer.querySelector('li');
            var newItem = firstChild.cloneNode(true);
            slidesContainer.append(newItem);
            firstChild.remove();
            addListener(newItem);
        }

        function setTransform(prevCnt, nextCnt) {
            for (var i = 0; i < prevCnt - 1; i++) {
                slidesList[i + 1].style.transform = 'translate(7%, 0%) scale(1)';
                slidesList[i + 1].style.zIndex = 8;
            }
            for (var i = prevCnt + 1; i < nextCnt + prevCnt; i++) {
                slidesList[i].style.transform = 'translate(-7%, 0%) scale(1)';
                slidesList[i].style.zIndex = 8;
            }




            if (prevCnt == 0) {
                prependChild();
            }
            if (nextCnt == 0) {
                appender();
            }
        }

        function addListener(el) {

            el.addEventListener("click", function() {
                var slideList = slidesContainer.querySelectorAll('li');
                var clickedEl = el;
                var nextCnt = 0;
                var prevCnt = 0;
                do {
                    nextCnt = nextCnt + 1;
                } while (clickedEl = clickedEl.nextElementSibling);
                clickedEl = el;
                do {
                    prevCnt = prevCnt + 1;
                } while (clickedEl = clickedEl.previousElementSibling);
                setTransform(prevCnt - 1, nextCnt - 1);
                el.previousElementSibling.classList.remove("active");
                el.nextElementSibling.classList.remove("active");
                youtubeVideo();
                for (i = 0; i < slideList.length; i++) {
                    slideList[i].querySelector('.play-button').classList.add('wave-play-button');
                }



                var slideHeading = "";
                var slideText = "";
                if (el.dataset.num == '0') {
                    slideHeading = "LIVE In-class Doubt Solving";
                    slideText = "Vedantu’s unique platform enables multiple Academic Mentors to be LIVE in the class, in order to support the Teacher in answering all the doubts of students. This Real-Time interaction makes the classes more dynamic, ensuring effective Concept Learning for all students.";
                } else if (el.dataset.num == '1') {
                    slideHeading = "Live Quizzing & Student Interactions";
                    slideText = "Vedantu’s innovative LIVE platform is designed to create a healthy peer learning environment and promote student interaction. LIVE In-Class Quizzes in a gamified manner make learning fun and the Real-Time Leaderboard pushes children to outdo themselves and perform better.";
                } else {
                    slideHeading = "Give Real-Time Feedback to Teachers";
                    slideText = "Vedantu is extremely student-centric and values their feedback. Our Hotspot feature captures student responses during the teaching process itself. This ensures the teacher about the student’s understanding, and hence, making the class more effective.";
                }


                document.querySelector('.live-quiz-heading').innerText = slideHeading;
                document.querySelector('.students-learn-best-copy').innerText = slideText;

                el.classList.add("active");
                if (el.classList.contains('active')) {
                    el.querySelector('.play-button').classList.remove('wave-play-button');
                }
                el.style.zIndex = nodeList.length * 5;
                el.style.transform = activeTransform;
                el.previousElementSibling.style = "translate(7%, 0%) scale(1)";
                el.nextElementSibling.style = "translate(7%, 0%) scale(1)";
            })

        }

        var firstActiveSlideIndex = slidesList.length % 2 == 0 ? -2 : -1;
        if (slidesList[(slidesList.length + firstActiveSlideIndex) / 2]) {
            slidesList[(slidesList.length + firstActiveSlideIndex) / 2].click();
        }

    }
    waveVideoSlider();



    // tmp place for logic



    var utilsController = (new function() {
        /**
         * @description - This function makes ajax call to the server and returns the data
         * coming from the server.
         * @param  {string} url - url for the ajax call.
         * @param  {string} type - ajax request type(GET/POST)
         * @param  {string} param - ajax parameter.
         * @param  {function} successCallback - This will be called after getting
         *  success response from server.
         * @param  {function} errorCallBack - his will be called after getting
         *  error response from server.
         */
        this.ajax = function(url, type, params, successCallback, errorCallBack) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4) {
                    if (typeof(successCallback) == "function" && xmlhttp.status == 200) {
                        successCallback(xmlhttp.responseText);
                    } else if (typeof(errorCallBack) == "function") {
                        errorCallBack(xmlhttp.responseText);
                    }
                }
            };
            params = params || {};
            params.ver = serverConfig['static'].version;
            if (type === "GET") {
                xmlhttp.open(type, url + "?" + serialize(params), true);
                xmlhttp.send();
            } else {
                xmlhttp.open(type, url, true);
                xmlhttp.withCredentials = true;
                xmlhttp.setRequestHeader('content-type', 'application/json');
                xmlhttp.send(params);
            }
        };

        var serialize = function(obj) {
            var str = [];
            for (var p in obj)
                if (obj.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            return str.join("&");
        };

        this.getUTMObjectFromURL = function() {
            var url = decodeURIComponent(document.URL);
            var params = url.split("?")[1];
            if (!params)
                return;
            params = params.split("&");
            var utmObject = {};
            for (var i in params) {
                var values = params[i].split("=");
                utmObject[values[0]] = values[1];
            }!!utmObject && overrideUTMParams(utmObject);
        };

        var overrideUTMParams = function(utmObject) {
            var deviceType = (detectMobileDevice()) ? "MOBILE_WEB" : "DESKTOP_WEB";
            window.utm_term = (!!utmObject._term) ? utmObject._term : window.utm_term;
            window.utm_source = (!!utmObject.courseType) ? utmObject.courseType : window.utm_source; //course Type
            window.utm_content = (!!utmObject.utm_content) ? utmObject.utm_content : window.utm_content;
            window.utm_campaign = (!!utmObject.utm_campaign) ? utmObject.utm_campaign : "NEWACADFLOW_MAR2017";
            window.utm_medium = deviceType; // "DESKTOP/MOBILE";
        };

        this.getUTMString = function() {
            var utmStringList = [];
            var utmString = "";
            utmString = (!!window.utm_term) ? "utm_term=" + encodeURIComponent(window.utm_term) : "";
            !!utmString && utmStringList.push(utmString);

            utmString = (!!window.utm_source) ? "utm_source=" + encodeURIComponent(window.utm_source) : "";
            !!utmString && utmStringList.push(utmString);

            utmString = (!!window.utm_content) ? "utm_content=" + encodeURIComponent(window.utm_content) : "";
            !!utmString && utmStringList.push(utmString);

            utmString = (!!window.utm_campaign) ? "utm_campaign=" + encodeURIComponent(window.utm_campaign) : "";
            !!utmString && utmStringList.push(utmString);

            utmString = (!!window.utm_medium) ? "utm_medium=" + encodeURIComponent(window.utm_medium) : "";
            !!utmString && utmStringList.push(utmString);

            utmString = utmStringList.join("&");
            return utmString;
        };

        var detectMobileDevice = function() {
            var check = false;
            (function(a, b) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                    check = true
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };
        this.formPlatformUrl = function(path) {
            if (typeof serverConfig === "undefined") {
                return "";
            }
            var pConf = serverConfig.platform.notification;
            var url = window.location.protocol + "//" + pConf.domain;
            if (!!pConf.port) {
                url = url + ":" + pConf.port;
            }
            url = url + "/platform" + path;
            return url;
        };

        this.formSubSystemPath = function(subsystem, path) {
            if (typeof serverConfig === "undefined") {
                return "";
            }
            var pConf = serverConfig.platformNew[subsystem];
            if (!!pConf) {
                var url = window.location.protocol + "//" + pConf.domain;
                if (!!pConf.port) {
                    url = url + ":" + pConf.port;
                }
                url = url + pConf.folder + path;
                return url;
            }
        };
        this.apiURL = {
            'LOGIN': '/v/login',
            'FMAT': '/v/find-me-a-teacher/introduction?trk_source=' + trkSource,
            'COUNTER': '/user/getCounter',
            'SIGNUP': '/v/register'
        };
        this.isDeviceMobile = function() {
            return detectMobileDevice();
        };
    });

    var renderController = (new function() {
        this.boardGradMappingJSON = null;
        var gradeContainerId = "";
        var boardContainerId = "";
        var titleDomId = ""
        var titleContrinerDomId = "";
        var subTitleContrinerDomId = "";
        var CBSEMap = {};
        var ICSEMap = {};
        this.selectedGrade = "";
        this.selectedBoard = "";
        this.prefillGrade = "";
        var courseType = "";
        var defaultBoardGradeMap;
        this.courseType = courseType;
        this.extractGradeBoardMap = function(type, renderInPopup) {
            courseType = type;
            this.courseType = courseType;
            var data = this.boardGradMappingJSON[type];
            var title = "";
            var subTitle = "";
            if (!data)
                return;
            title = data.title;
            subTitle = data.subTile;
            data = data.data[0];
            CBSEMap = data.CBSE;
            ICSEMap = data.ICSE;
            defaultBoardGradeMap = CBSEMap;
            if ((!!CBSEMap && CBSEMap.length) && (!!ICSEMap && ICSEMap.length)) {
                defaultBoardGradeMap = (CBSEMap.length > ICSEMap.length) ? CBSEMap : ICSEMap;
            }
            defaultBoardGradeMap = (!defaultBoardGradeMap) ? data : defaultBoardGradeMap; // defaultBoardGradeMap will undefined in jee case.
            if (!renderInPopup) {
                if (!!titleContrinerDomId) {
                    var titleContriner = document.getElementById(titleContrinerDomId);
                    titleContriner.textContent = title;
                }
                if (!!subTitleContrinerDomId) {
                    var subTitleContriner = document.getElementById(subTitleContrinerDomId);
                    subTitleContriner.textContent = subTitle;
                }
                //$("#"+titleContrinerDomId).text("").text(title);
                //$("#"+subTitleContrinerDomId).text("").text(subTitle);
                loadGrade(defaultBoardGradeMap);
                loadboard();
            } else {
                loadGradeBoardSelectPopup(type, title, subTitle);
                loadBoardInPopup();
            }
        };
        var loadGrade = function(boardGradeMap) {
            var gradeContainer = document.getElementById(gradeContainerId);
            var grade = "";
            var url = "";
            var needToReditect = false;
            if (!boardGradeMap) {
                return;
            }
            gradeContainer.innerHTML = "";
            for (var i in boardGradeMap) {
                grade = Object.keys(boardGradeMap[i])[0];
                url = boardGradeMap[i][grade];
                if (!url) {
                    continue;
                }
                if (!!renderController.prefillGrade && renderController.prefillGrade === grade) {
                    gradeContainer.innerHTML = '<div class="grade selected" data-type="embed" data-courseType="' + courseType + '"><span>' +
                        grade + '<span>th</span></span></div>';
                    renderController.selectedGrade = grade;
                    if (courseType == "JEE")
                        renderController.redirectToCoursePage(courseType);
                } else {
                    gradeContainer.innerHTML = '<div class="grade" data-type="embed" data-courseType="' + courseType + '"><span>' +
                        grade + '<span>th</span></span></div>';
                }

            }
            renderController.prefillGrade = "";
        };

        this.getUrl = function(Selectedgrade, Selectedboard, courseType) {
            var boardGradeMap = {};
            var grade = "";
            var url = "";
            if (Selectedboard === "CBSE")
                boardGradeMap = CBSEMap;
            else if (Selectedboard === "ICSE")
                boardGradeMap = ICSEMap;
            else if (courseType == "JEE") {
                boardGradeMap = this.boardGradMappingJSON["JEE"].data[0];
            } else if (courseType == "JEECRASH") {
                boardGradeMap = this.boardGradMappingJSON["JEECRASH"].data[0];
            } else if (courseType == "NEET") {
                boardGradeMap = this.boardGradMappingJSON["NEET"].data[0];
            } else if (courseType == "JEERankBooster") {
                boardGradeMap = this.boardGradMappingJSON["JEERankBooster"].data[0];
            } else if (courseType == "NEETRankBooster") {
                boardGradeMap = this.boardGradMappingJSON["NEETRankBooster"].data[0];
            }


            for (var i in boardGradeMap) {
                grade = Object.keys(boardGradeMap[i])[0];
                if (Selectedgrade == grade) {
                    url = boardGradeMap[i][grade];
                    break;
                }
            }
            return url;
        };

        var loadboard = function() {
            var newBoardContainer = document.getElementById(boardContainerId);
            newBoardContainer.innerHTML = "";
            if (!!CBSEMap) {
                newBoardContainer.innerHTML = '<div class="board" data-type="embed" data-courseType="' + courseType + '">CBSE</div>';
            }
            if (!!ICSEMap) {
                newBoardContainer.innerHTML = '<div class="board" data-type="embed" data-courseType="' + courseType + '">ICSE</div>';
            }

            if (!CBSEMap && !ICSEMap) {
                newBoardContainer.parentElement.style.display = "none";
                newBoardContainer.parentElement.nextElementSibling.style.width = "100%";
            }
        };

        var loadGradeBoardSelectPopup = function(courseType, title, subTitle) {
            var gradeBoardSelector = document.querySelector('.grade-selector-overlay');
            gradeBoardSelector.classList.add('show');
            gradeBoardSelector.querySelector('.course-title').textContent = title;
            gradeBoardSelector.querySelector('.grade-text').textContent = subTitle;
            document.querySelector('body').classList.add('stop-scroll');
            if (courseType !== "JEE" || courseType !== "NEET" || courseType !== "JEERankBooster" || courseType !== "NEETRankBooster" || courseType !== "JEECRASH") {
                var gradeHolder = gradeBoardSelector.querySelector('#grade-list');
                gradeHolder.style.display = "block";
            }
            var boardHolder = gradeBoardSelector.querySelector('#board-list');
            boardHolder.style.display = "block";
        };
        var loadGradeInPopup = function(boardGradeMap) {
            var grade = "";
            var url = "";
            if (!boardGradeMap) {
                return;
            }
            var newGradeContainer = document.getElementById(gradeContainerId);
            newGradeContainer.innerHTML = "";
            for (var i in boardGradeMap) {
                grade = Object.keys(boardGradeMap[i])[0];
                url = boardGradeMap[i][grade];
                if (!url) {
                    continue;
                }
                newGradeContainer.innerHTML += '<label class="input-container"><input type="radio" name="grade"/><div class="text grade" data-type="popup" data-courseType="' + courseType + '">' +
                    grade + '<span>th</span></div></label>';
            }
            gradeListener();
        };
        var loadBoardInPopup = function() {
            var newBoardContainer = document.getElementById(boardContainerId);
            newBoardContainer.innerHTML = "";
            newBoardContainer.parentElement.style.display = "inline-block"
            if (newBoardContainer && !!CBSEMap) {
                newBoardContainer.innerHTML += '<label class="input-container"><input type="radio" name="grade"/><div class="text board" data-type="popup" data-courseType="' + courseType + '">CBSE' +
                    '</div></label>';
                newBoardContainer.innerHTML += '<label class="input-container"><input type="radio" name="grade"/><div class="text board" data-type="popup" data-courseType="' + courseType + '">ICSE' +
                    '</div></label>';
            }
            if (!CBSEMap && !ICSEMap) {
                newBoardContainer.parentElement.style.display = "none";
            }
            boardListener();
            loadGradeInPopup(defaultBoardGradeMap);
        };
        this.setGradeBoardDomId = function(gradeDomId, boardDomID, titleDomId, subTitleDomId) {
            gradeContainerId = gradeDomId;
            boardContainerId = boardDomID;
            titleContrinerDomId = titleDomId;
            subTitleContrinerDomId = subTitleDomId;
        }
        this.reloadGradList = function(type, board) {
            if (type == "embed") {
                if (board === "CBSE")
                    loadGrade(CBSEMap);
                if (board === "ICSE")
                    loadGrade(ICSEMap);
            } else if (type == "popup") {
                if (board === "CBSE")
                    loadGradeInPopup(CBSEMap);
                if (board === "ICSE")
                    loadGradeInPopup(ICSEMap);
            }
        };
        this.redirectToCoursePage = function(courseType) {
            // var utmString = utilsController.getUTMString();
            // utmString = utmString || "";
            try {
                var customObj = {};
                customObj["key1"] = "card_title";
                customObj["key2"] = "grade";
                customObj["key3"] = "target";
                customObj["value1"] = document.querySelector('.course-title').textContent;
                customObj["value2"] = this.selectedGrade || null;
                customObj["value3"] = this.selectedBoard || null;
                !!clickStream && clickStream.pushEvent("homepage", "click", "hp_offerings_subcard_clicked", null, customObj);
            } catch (error) {
                console.warn("Error While sending click stream data: ", error);
            }
            var url = this.getUrl(this.selectedGrade, this.selectedBoard, courseType)
            // if (!!utmString && !!url) {
            //     url += (url.indexOf("?") >= 0) ? ("&" + utmString) : ("?" + utmString);
            // }
            if (!!url) {
                window.location.href = url;
            } else {
                renderController.reloadGradList("popup", this.selectedBoard);
                renderController.selectedGrade = "";
            }
        };
    });
    var sendGAEvent = function(action, label, category, value, obj) {
        category = (!!category) ? category : "SELECT_GRADE_BOARD";
        ga('send', 'event', category, action, label, value, obj);
        console.log("SENDING GA Event: ", arguments);
    };

    (function() {
        utilsController.getUTMObjectFromURL();
        renderController.setGradeBoardDomId("grade-list", "board-list", "grade-board-title", "grade-board-subtitle");
        var url = "/cdn/metadata/grade-board-course.json";
        utilsController.ajax(url, "GET", {}, function(response) {
            renderController.boardGradMappingJSON = JSON.parse(response);
            renderController.prefillGrade = (!!window._preFillGrade) ? window._preFillGrade : "";
            (!!window._courseType) && renderController.extractGradeBoardMap(window._courseType);
        });
    })();

    function gradeListener() {
        var selectBoardGradeContainer = document.querySelector('.select-board-grade-container');
        var gradeElements = selectBoardGradeContainer.querySelectorAll('.grade');

        gradeElements.forEach(function(element) {
            element.addEventListener('click', function(event) {
                gradeBoardListener(event);
            });
        });
    }

    function boardListener() {
        var selectBoardGradeContainer = document.querySelector('.select-board-grade-container');
        var boardElements = selectBoardGradeContainer.querySelectorAll('.board');
        boardElements.forEach(function(element) {
            element.addEventListener('click', function(event) {
                gradeBoardListener(event);
            });
        });
    }

    function gradeBoardListener(event) {
        event.preventDefault();
        event.stopPropagation();
        var label = "";
        //        $(event.currentTarget).siblings().removeClass("selected");
        var data = event.currentTarget.dataset;
        var value = event.currentTarget.textContent;
        value = !!value ? value.split("th")[0] : "";
        if (event.currentTarget.classList.contains("grade")) {
            var selectedgrade = document.querySelectorAll('.text.grade.selected');
            if (!!selectedgrade.length > 0) {
                for (var gradeNumber = 0; gradeNumber < selectedgrade.length; gradeNumber++) {
                    selectedgrade[gradeNumber].classList.remove("selected");
                }
            }
            event.currentTarget.classList.add("selected");
            renderController.selectedGrade = value;
            label = "GRADE_" + value
            sendGAEvent("CLICK", label);
        }
        if (event.currentTarget.classList.contains("board")) {
            var selectedBoard = document.querySelectorAll('.text.board.selected');
            if (!!selectedBoard.length > 0) {
                for (var boardNumber = 0; boardNumber < selectedBoard.length; boardNumber++) {
                    selectedBoard[boardNumber].classList.remove("selected");
                }
            }
            event.currentTarget.classList.add("selected");
            label = "BOARD_" + value;
            sendGAEvent("CLICK", label);
            if (!renderController.selectedGrade && renderController.selectedBoard !== value) {
                renderController.selectedBoard = value;
                renderController.reloadGradList(data.type, value);
                return;
            }
            renderController.selectedBoard = value;
        }
        var courseType = data.coursetype;
        if ((!!renderController.selectedGrade && !!renderController.selectedBoard) || (courseType === "JEE") || (courseType === "NEET") || (courseType === "JEERankBooster") || (courseType === "NEETRankBooster") || (courseType === "JEECRASH")) {
            renderController.redirectToCoursePage(courseType);
        }
    }

    function sendBoxGa(event) {
        var data = event.currentTarget.parentElement.dataset;
        var label = data.type.toUpperCase();
        var category = "DESKTOP_HOMEPAGE";
        sendGAEvent("CLICK", label, category);

        if (event.target.hasAttribute('href')) {
            var redirectLink = event.target.getAttribute('href');
            if (!!redirectLink) {
                return;
            }
        }
        event.preventDefault();
        renderController.extractGradeBoardMap(data.coursetype, true);
    }

    function addListenerToCard() {
        var coursebox = document.querySelectorAll('.explore-button');
        for (var list = 0; list < coursebox.length; list++) {
            coursebox[list].addEventListener('click', sendBoxGa)
        }
    }

    function closeGradePopup() {
        var overLayClose = document.querySelector('.grade-selector-overlay');
        var closeMark = overLayClose.querySelector('.cross-holder');
        closeMark.addEventListener('click', function(event) {
            runClose();
        });
        overLayClose.addEventListener('click', function(event) {
            runClose();
        });
        document.onkeydown = function(event) {
            evt = event || window.event;
            if (evt.keyCode == 27) {
                runClose();
            }
        };

        function runClose() {
            overLayClose.classList.remove('show');
            document.querySelector('body').classList.remove('stop-scroll');
            renderController.selectedBoard = "";
            renderController.selectedGrade = "";
        }
    }
    closeGradePopup();

    function elementScroller(this_element, to_element) {
        // function scroller(distance) {
        //     window.scroll({
        //         top: distance,
        //         behavior: "smooth"
        //     });
        // }
        function elementHeightFinder() {
            var thisElement = document.querySelectorAll(this_element);
            var toElement = document.querySelector(to_element);
            // var scrollToElementPosition = toElement.offsetTop;
            thisElement.forEach(function(element) {
                element.addEventListener('click', function() {
                    // scroller(scrollToElementPosition);
                    toElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest"
                    })
                });
            });
        }
        elementHeightFinder();
    }
    elementScroller('.our-courses', '.our-offering-section');

    function sendLinkToPhone(folder, path) {
        var sendLinkButton = document.querySelector('#link-form');
        var inputFields = sendLinkButton.querySelectorAll('input');
        if (utilsController.isDeviceMobile()) {
            sendLinkButton.remove();
            return;
        }
        sendLinkButton.onsubmit = function(event) {
            event.preventDefault();
            var obj = {};
            obj.to = parseInt(inputFields[1].value);
            obj.to = isNaN(obj.to) ? null : obj.to;
            obj.phoneCode = inputFields[0].value;
            var linktext = document.querySelector('.link-confirmation-text');

            if (obj.to.toString().length > 5 && obj.to.toString().length < 15) {
                if (typeof(obj.to) === "number" && obj.to !== null && !isNaN(obj.to)) {
                    //
                    var platformUrl = utilsController.formSubSystemPath(folder, path);
                    var finalObject = JSON.stringify(obj);
                    utilsController.ajax(platformUrl, "POST", finalObject, function(response) {
                        // response = JSON.parse(response);
                        if (!!response) {
                            linktext.textContent = "SMS has been sent to +" + obj.phoneCode + " " + obj.to;
                            linktext.classList.add('show');

                            try {
                                var customObj = {};
                                customObj["key1"] = "phone_number";
                                customObj["value1"] = "+" + obj.phoneCode + " " + obj.to;
                                !!clickStream && clickStream.pushEvent("homepage", "click", "hp_app_sms_sent", null, customObj);
                            } catch (error) {}
                        }
                    });
                    //
                }
            } else {
                linktext.textContent = "Enter a valid phone number";
                linktext.classList.add('wrong');
            }
        }
    }

    function sendLinkToPhoneFromFooter(folder, path) {
        var sendLinkButton = document.querySelector('#footer-link-form');
        var inputFields = sendLinkButton.querySelectorAll('input');
        // if (utilsController.isDeviceMobile()) {
        //     sendLinkButton.remove();
        //     return;
        // }
        sendLinkButton.onsubmit = function(event) {
            event.preventDefault();
            var obj = {};
            obj.to = parseInt(inputFields[1].value);
            obj.to = isNaN(obj.to) ? null : obj.to;
            obj.phoneCode = inputFields[0].value.replace("+", "");
            var linktext = document.querySelector('#footer-link-form .link-confirmation-text');

            if (obj.to.toString().length > 5 && obj.to.toString().length < 15) {
                if (typeof(obj.to) === "number" && obj.to !== null && !isNaN(obj.to)) {
                    //
                    var platformUrl = utilsController.formSubSystemPath(folder, path);
                    var finalObject = JSON.stringify(obj);
                    utilsController.ajax(platformUrl, "POST", finalObject, function(response) {
                        // response = JSON.parse(response);
                        if (!!response) {
                            linktext.textContent = "SMS has been sent to " + obj.phoneCode + " " + obj.to;
                            linktext.classList.add('show');

                            try {
                                var customObj = {};
                                customObj["key1"] = "phone_number";
                                customObj["value1"] = obj.phoneCode + " " + obj.to;
                                !!clickStream && clickStream.pushEvent("homepage", "click", "hp_app_sms_sent", null, customObj);
                            } catch (error) {}
                        }
                    });
                    //
                }
            } else {
                linktext.textContent = "Enter a valid phone number";
                linktext.classList.add('wrong');
            }
        }
    }

    function phoneCodeListCreator(url) {
        if (utilsController.isDeviceMobile()) {
            return;
        }
        utilsController.ajax(url, "GET", {}, function(response) {
            response = JSON.parse(response);
            var listCreator = document.querySelector('#phoneCodesList');
            listCreator.innerHTML = "";
            var listHtml = "";
            for (list in response) {
                listHtml += "<li data-value=" + response[list].value + ">" + response[list].country + "(+" + response[list].value + ")</li>";
            }
            listCreator.innerHTML = listHtml;
        });
    }

    function phoneCodeListCreatorFromFooter(url) {
        // if (utilsController.isDeviceMobile()) {
        //     return;
        // }
        utilsController.ajax(url, "GET", {}, function(response) {
            response = JSON.parse(response);
            var listCreator = document.querySelector('#phoneCodesListFromFooter');
            listCreator.innerHTML = "";
            var listHtml = "";
            for (list in response) {
                listHtml += "<li data-value=" + response[list].value + ">" + response[list].country + "(+" + response[list].value + ")</li>";
            }
            listCreator.innerHTML = listHtml;
        });
    }

    function invalidTextRemover() {
        if (utilsController.isDeviceMobile()) {
            return;
        }
        var inputHolder = document.querySelector('.contact-box').firstElementChild;
        inputHolder.onclick = function() {
            var linktext = document.querySelector('.link-confirmation-text');
            linktext.classList.remove('show');
            linktext.classList.remove('wrong');
        }

    }
    var codeDropdown = function(container, list) {
        if (utilsController.isDeviceMobile()) {
            return;
        }
        var dropDownContainer, dropDownList;
        dropDownContainer = document.querySelector(container);
        var cardholderChild = dropDownContainer.querySelector('input');
        dropDownList = dropDownContainer && dropDownContainer.querySelector(list);
        document.onclick = function() {
            classAdder(event)
        };

        function classAdder(event) {
            if (event.target.parentElement !== dropDownContainer) {
                dropDownList.classList.remove('show');
            } else {
                classRemover();
            }
        }

        function classRemover() {
            if (!dropDownList.classList.contains('show')) {
                dropDownList.classList.add('show');
            } else {
                dropDownList.classList.remove('show');
            }
        }

        function textExtractor(event) {
            var TextExt = event.target.dataset;
            cardholderChild.value = TextExt['value'];
            classAdder(event);
        }

        function listListener() {
            dropDownList.addEventListener('click', textExtractor);
        }
        listListener();
    }

    var codeDropdownFromFooter = function(container, list) {
        // if (utilsController.isDeviceMobile()) {
        //     return;
        // }
        var dropDownContainer, dropDownList;
        dropDownContainer = document.querySelector(container);
        var cardholderChild = dropDownContainer.querySelector('input');
        dropDownList = dropDownContainer && dropDownContainer.querySelector(list);
        document.onclick = function() {
            classAdder(event)
        };

        function classAdder(event) {
            if (event.target.parentElement !== dropDownContainer) {
                dropDownList.classList.remove('show');
            } else {
                classRemover();
            }
        }

        function classRemover() {
            if (!dropDownList.classList.contains('show')) {
                dropDownList.classList.add('show');
            } else {
                dropDownList.classList.remove('show');
            }
        }

        function textExtractor(event) {
            var TextExt = event.target.dataset;
            cardholderChild.value = '+' + TextExt['value'];
            classAdder(event);
        }

        function listListener() {
            dropDownList.addEventListener('click', textExtractor);
        }
        listListener();
    }

    'use-strict';
    // forEach PloyFill for older browsers
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function(callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    };


    var isFired = false
    window.onscroll = function() {
        var scroll = document.querySelector('#scrollTo15')
        var sendGA = function(action, label, category, value, obj) {
            if (!category) {
                var category = "NEW_HOME_PAGE";
                category = !!window.page_type ? category + "_" + window.page_type : category;
            }
            ga('send', 'event', category, action, label, value, obj);
            console.log("SENDING GA Event: ", arguments);
        };
        // console.log(scroll.getBoundingClientRect().top )
        if (!isFired && scroll.getBoundingClientRect().top < 560) {
            try {
                !!clickStream && clickStream.pushEvent("vsc-main-website", "Scroll", "v_home_gradesfold");
                sendGA("SCROLL", "v_home_gradesfold", "vsc-main-website");
                !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_gradesfold')
                window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                    'eventName': 'v_home_gradesfold',
                    'category': 'vsc-main-website'
                })
            } catch (err) {
                console.log("could not send events " + err);
            }
            isFired = true
        }
    }

    function checkPopUpBlocked(url, isFullURL = false) {
        const fullURL = (isFullURL ? '' : window.location.origin) + url;
        var newWin = window.open(fullURL);

        if (!newWin || newWin.closed || typeof newWin.closed == 'undefined') {
            window.open(window.location.origin + url, '_self');
        }
    }

    var analyticsModule1 = (new function() {
        var sendGA = function(action, label, category, value, obj) {
            if (!category) {
                var category = "NEW_HOME_PAGE";
                category = !!window.page_type ? category + "_" + window.page_type : category;
            }
            ga('send', 'event', category, action, label, value, obj);
            console.log("SENDING GA Event: ", arguments);
        };
        var addEventInLinks = function() {

            document.querySelector('#home-intro-video').onclick = function() {
                !!clickStream && clickStream.pushEvent("home_page", "Click", "video_click");
                sendGA("CLICK", "homepage_introvideo_click");
            }
            document.querySelector('#teacher-video').onclick = function() {
                sendGA("CLICK", "homepage_teachervideo_click");
            }
            document.querySelector('#parent-video').onclick = function() {
                sendGA("CLICK", "homepage_testimonialvideo_click");
            }


            let vskCourseDropdown = document.querySelector('#vsk-course-dropdown');
            if (!!vskCourseDropdown) {
                vskCourseDropdown.onclick = function() {
                    try {
                        !!clickStream && clickStream.pushEvent("vsc-main-website", "Click", "v_home_courses");
                        sendGA("CLICK", "v_home_courses", "vsc-main-website");
                        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_courses')
                        window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                            'eventName': 'v_home_courses',
                            'category': 'vsc-main-website'
                        })
                    } catch (err) {
                        console.log("could not send events " + err);
                    }
                }
            }

            let vscMenuBarWrapper = document.querySelector('#vsc-menu-wrapper');
            let vskMenuBar = document.querySelector('#vsk-menu-bar');
            const vscMenuClickHandler = function(event) {
                event.stopPropagation();
                try {
                    var urlToOpen = '/supercoders?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=v_home_menu';
                    checkPopUpBlocked(urlToOpen);

                    !!clickStream && clickStream.pushEvent("vsc-main-website", "Click", "v_home_menu");
                    sendGA("CLICK", "v_home_menu", "vsc-main-website");
                    !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_menu"');
                    window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                        'eventName': 'v_home_menu',
                        'category': 'vsc-main-website'
                    })
                } catch (err) {
                    console.log("could not send events " + err);
                }
            }
            if (vskMenuBar) {
                vskMenuBar.onclick = vscMenuClickHandler;
            }
            if (vscMenuBarWrapper) {
                vscMenuBarWrapper.onclick = vscMenuClickHandler;
            }

            let vsrMenuBar = document.querySelector('#vsr-menu-bar');
            if (!!vsrMenuBar) {
                vsrMenuBar.onclick = function() {
                    try {
                        var urlToOpen = '/superreaders?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=v_home_menu';
                        checkPopUpBlocked(urlToOpen);

                        !!clickStream && clickStream.pushEvent("vsr-main-website", "Click", "v_home_menu");
                        sendGA("CLICK", "v_home_menu", "vsr-main-website");
                        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_menu"');
                        window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                            'eventName': 'v_home_menu',
                            'category': 'vsr-main-website',
                            'course': 'SUPER_READER'
                        })

                    } catch (err) {
                        console.log("could not send events " + err);
                    }
                }
            }

            let vssMenuBar = document.querySelector('#vss-menu-bar');
            if (!!vssMenuBar) {
                vssMenuBar.onclick = function() {
                    try {
                        var urlToOpen = '/superspeakers?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=v_home_menu';
                        checkPopUpBlocked(urlToOpen);

                        !!clickStream && clickStream.pushEvent("vss-main-website", "Click", "v_home_menu");
                        sendGA("CLICK", "v_home_menu", "vss-main-website");
                        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_menu"');
                        window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                            'eventName': 'v_home_menu',
                            'category': 'vss-main-website',
                            'course': 'SUPER_SPEAKER'
                        })

                    } catch (err) {
                        console.log("could not send events " + err);
                    }
                }
            }

            let vsmMenuBar = document.querySelector('#vsm-menu-bar');
            if (vsmMenuBar) {
                vsmMenuBar.onclick = function() {
                    try {
                        var urlToOpen = '/supermaths?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=v_home_menu';
                        checkPopUpBlocked(urlToOpen);

                        !!clickStream && clickStream.pushEvent("vsm-main-website", "Click", "v_home_menu");
                        sendGA("CLICK", "v_home_menu", "vsm-main-website");
                        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_menu"');
                        window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                            'eventName': 'v_home_menu',
                            'category': 'vsm-main-website',
                            'course': 'SUPER_MATH'
                        })

                    } catch (err) {
                        console.log("could not send events " + err);
                    }
                }
            }

            let newGrade15 = document.querySelector('#new-grade-1to5');
            if (!!newGrade15) {
                newGrade15.onclick = function() {
                    try {
                        !!clickStream && clickStream.pushEvent("vsc-main-website", "Click", "v_home_gradesvsc");
                        sendGA("CLICK", "v_home_gradesvsc", "vsc-main-website");
                        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_gradesvsc');
                        window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                            'eventName': 'v_home_gradesvsc',
                            'category': 'vsc-main-website'
                        })
                    } catch (err) {
                        console.log("could not send events " + err);
                    }
                }
            }

            let newGradeLkgUkg = document.querySelector('#new-grade-lkg-ukg');
            if (!!newGradeLkgUkg) {
                newGradeLkgUkg.onclick = function() {
                    try {
                        !!clickStream && clickStream.pushEvent("vsr-main-website", "Click", "v_home_gradesvsr");
                        sendGA("CLICK", "v_home_gradesvsr", "vsr-main-website");
                        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_gradesvsr');
                        window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                            'eventName': 'v_home_gradesvsr',
                            'category': 'vsr-main-website'
                        })
                    } catch (err) {
                        console.log("could not send events " + err);
                    }
                }
            }

            let vsk15banner = document.querySelector('#vsk-15-banner');
            if (!!vsk15banner) {
                vsk15banner.onclick = function() {
                    try {
                        !!clickStream && clickStream.pushEvent("vsc-main-website", "Click", "v_home_gradesbanner");
                        sendGA("CLICK", "v_home_gradesbanner", "vsc-main-website");
                        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_gradesbanner');
                        window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                            'eventName': 'v_home_gradesbanner',
                            'category': 'vsc-main-website'
                        })
                    } catch (err) {
                        console.log("could not send events " + err);
                    }
                }
            }

            // document.querySelector('.our-courses').onclick = function () {
            //     sendGA("CLICK", "homepage_viewcourses_click");
            // }
            // document.querySelector('.demo-class-button').onclick = function (event) {
            //     event.preventDefault;
            //     window.open('/v/find-me-a-teacher/introduction?trk_source=MOBILE_HOMEPAGE');
            //     sendGA("CLICK", "homepage_bookdemo_click");
            // }
            // document.querySelector('.talk-image').onclick = function () {
            //     sendGA("CLICK", "homepage_talktous_click");
            // }
            // document.querySelector('.talk').onclick = function () {
            //     sendGA("CLICK", "homepage_talktous_click");
            // }
            // document.querySelector('.vedantu-app-link').onclick = function () {
            //     sendGA("CLICK", "homepage_playstore_app_click");
            // }
            if (!utilsController.isDeviceMobile()) {
                document.querySelector('.get-link-box').onclick = function(event) {
                    if (event.target == event.currentTarget.querySelector('.get-link-button')) {
                        var clickedLinkbutton = event.currentTarget.querySelectorAll('input');
                        var firstValue = clickedLinkbutton[0].value;
                        var secondValue = clickedLinkbutton[1].value;
                        var finalValue = firstValue + secondValue;
                        finalValue = parseInt(finalValue);
                        if (secondValue.length > 8 && secondValue.length < 16) {
                            sendGA("CLICK", "homepage_sms_app_click", "", finalValue);
                        } else {
                            sendGA("CLICK", "homepage_sms_app_click", "", 0);
                        }
                    }
                }
                document.querySelector('#footer-link-form .get-link-box').onclick = function(event) {
                    if (event.target == event.currentTarget.querySelector('#footer-link-form .get-link-button')) {
                        var clickedLinkbutton = event.currentTarget.querySelectorAll('input');
                        var firstValue = clickedLinkbutton[0].value;
                        var secondValue = clickedLinkbutton[1].value;
                        var finalValue = firstValue + secondValue;
                        finalValue = parseInt(finalValue);
                        if (secondValue.length > 8 && secondValue.length < 16) {
                            sendGA("CLICK", "homepage_sms_app_click", "", finalValue);
                        } else {
                            sendGA("CLICK", "homepage_sms_app_click", "", 0);
                        }
                    }
                }
            }
        };

        return {
            sendGA: sendGA,
            addEventInLinks: addEventInLinks
        }
    });

    setTimeout(function() {
        analyticsModule1.addEventInLinks();
        try {
            !!clickStream && clickStream.pushEvent("homepage", "pageopen", "hp_opened");
        } catch (error) {
            console.warn("Error While sending click stream data: ", error);
        }
    });

    var mobileGradeSlider = function() {
        var left = document.querySelector('.each-grade.active').offsetLeft - window.innerWidth / 2.5;

        var gradeHolder = document.querySelector('.grade-section-container');

        if (!!gradeHolder && window.innerWidth <= 1024 && left != 0) {
            gradeHolder.scrollTo({
                top: 0,
                left: left,
                behavior: 'smooth'
            });
        }
    }

    var getMonth = function(date) {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var month = months[date.getMonth()];
        return month;
    }

    var getDiscoverHTML = function(discover, grade) {
        let getDiscHTML = '<li class="slider-li"><div class="each-img" data-bgsrc=' + discover.thumbnail + '><a href="/microcourses-list?selectedGrade=' + grade + '&Collections=' + discover.displayTag + '" target="_blank"><div class="collection-title">' + discover.displayTag + '</div></a></div></li>';
        // let getDiscHTML = '<li class="slider-li"><div class="each-img" style="background-image: url(' + discover.thumbnail + ')"><a href="/microcourses-list?selectedGrade=' + grade + '&Collections=' + discover.displayTag + '" target="_blank"><div class="collection-title">' + discover.displayTag + '</div><div class="collection-count">' + discover.size + ' courses</div></a></div></li>';
        return getDiscHTML;
    }

    var getWaveHTML = function(wave) {
        let getWaveHTML = '<li class="slider-li"><div class="each-img" class="thumbnail-image" ><a href="' + wave.redirectionDeeplink + '" target="_blank"><img data-src="' + wave.contextUrl + '"/></a></div></li>';
        return getWaveHTML;
    }

    var getMicrocourseHTML = function(microcourse) {

        let microcourseLi = document.createElement("li");
        microcourseLi.setAttribute("class", "slider-li");

        let microcourseContainerDiv = document.createElement("div");
        microcourseContainerDiv.setAttribute("class", "microcourse-container");

        microcourseContainerDiv.onclick = function() {
            microcourseClicked(this, microcourse);
        };

        let microcoursesTemplate = '<div class="microcourse-thumbnail-image"><img data-src=' +
            microcourse.bundleImageUrl + ' alt="" class="thumbnail-image" /></div>' +
            '<div class="microcourse-content"><div class="microcourse-title">' + microcourse.title + '</div>';

        if (microcourse.packages[0].batchDetails.courseType == 'LIVE') {
            microcoursesTemplate = microcoursesTemplate +
                '<div class="microcourse-course-type"><span class="live-classes"><span class="icon-stream"></span>&nbsp;LIVE classes</span>' +
                '<span class="starts-from">&nbsp;starts on ' + new Date(microcourse.packages[0].batchDetails.courseStartTime).getDate() + '&nbsp;' + getMonth(new Date(microcourse.packages[0].batchDetails.courseStartTime)) + '</span ></div > ';
        } else {
            microcoursesTemplate = microcoursesTemplate +
                '<div class="microcourse-course-type"><span class="vicon-play-button-line1"></span><span class="recorded-classes">&nbsp;&nbsp;Recorded classes</span></div>';
        }

        microcoursesTemplate = microcoursesTemplate +
            '<div class="teacher-and-price"><div class="teacher">' + microcourse.packages[0].batchDetails.teacherInfo.teacherName + '</div>' +
            '<div class="price"><div class="cut-price">&#8377;' + Math.floor(microcourse.cutPrice / 100) + '</div><div class="selling-price">&#8377;' + Math.floor(microcourse.price / 100) + '</div></div></div></div ></div >';

        microcourseContainerDiv.innerHTML = microcoursesTemplate;
        microcourseLi.appendChild(microcourseContainerDiv);

        return microcourseLi;
    }

    var getMasterclassHTML = function(webinar, currentTime) {
        const joinTime = 960000;
        let masterclassTemplate = '<li class="slider-li"><div class="webinar-class-cards-parent" data-creation="' + webinar.creationTime +
            'data-current="' + currentTime + '" data-webinarId="' + webinar.id + '"' +
            'data-startTime="' + webinar.startTime + '" data-endTime="' + webinar.endTime + '"' +
            'data-url="' + webinar.webinarCode + '"' +
            'data-teacher="' + webinar.teacherInfo.name + '">' +
            '<div class="webinar-class-cards" data-webinarid="' + webinar.id + '"' +
            'data-subjects="getSubjectsCommaSeparated(' + webinar + ')">';
        if ((currentTime + joinTime) > webinar.startTime && currentTime < webinar.endTime) {
            masterclassTemplate = masterclassTemplate + '<div class="webinar-live-label"></div>';
        }
        masterclassTemplate = masterclassTemplate +
            '<div class="topic-part">' +
            '<div class="topic-title" data-title="' + webinar.title + '">' +
            '<a class="inner-topic-title" id="inner-topic-title"' +
            'href="https://www.vedantu.com/masterclass/' + webinar.webinarCode + '?utm_source=seo&utm_medium=seo_hp&utm_campaign=seo_hp-masterclass&utm_content=homepage_tiles&utm_term=seo_hp_list_masterclass"' +
            'target="_blank">' +
            webinar.title +
            '</a>' +
            '</div>' +
            '</div>' +
            '<div class="topic-description-section">' +
            '<div class="topic-for-grade">' +
            '<span>Grades&nbsp;'

        webinar.grades && webinar.grades.map(function(grade, index) {
            if (index == 0) {
                masterclassTemplate = gradesTextMC(grade, masterclassTemplate)
            }
            if (index > 0 && (index + 1) == webinar.grades.length) {
                masterclassTemplate = masterclassTemplate + '- '
                masterclassTemplate = gradesTextMC(grade, masterclassTemplate)
            }
        });

        masterclassTemplate = masterclassTemplate +
            '</span></div><div class="topic-starting-time">' +
            '<span id="time">' +
            window.dateFormatter.formatDate(webinar.startTime, 'hrh:min mdn, dayShort dd mmm') +
            '</span></div></div>' +
            '<div class="class-pointers"><div class="heading-pointers">HIGHLIGHTS OF THIS MASTERCLASS</div>' +
            '<ul class="content-section-part">' +
            '<li class="content-section-text violet-color"><span>';
        if (webinar.webinarInfo && webinar.webinarInfo.workshopContains1) {
            masterclassTemplate = masterclassTemplate + webinar.webinarInfo.workshopContains1;
        }
        masterclassTemplate = masterclassTemplate + '<span></li><li class="content-section-text purple-color"><span>';
        if (webinar.webinarInfo && webinar.webinarInfo.workshopContains2) {
            masterclassTemplate = masterclassTemplate + webinar.webinarInfo.workshopContains2;
        }
        masterclassTemplate = masterclassTemplate +
            '<span></li><li class="content-section-text magenta-color"><span>';
        if (webinar.webinarInfo && webinar.webinarInfo.workshopContains3) {
            masterclassTemplate = masterclassTemplate + webinar.webinarInfo.workshopContains3;
        }
        masterclassTemplate = masterclassTemplate + '<span></li><li class="content-section-text orange-color"><span>';
        if (webinar.webinarInfo && webinar.webinarInfo.workshopContains4) {
            masterclassTemplate = masterclassTemplate + webinar.webinarInfo.workshopContains4;
        }
        masterclassTemplate = masterclassTemplate +
            '<span></li></ul></div>' +
            '<div class="teacher-credentials-part">' +
            '<div class="teacher-info-section">' +
            '<div class="taken-text">' +
            'TAKEN BY</div>' +
            '<div class="teacher-name">' +
            '<div id="teacher-first-name">';
        if (webinar.teacherInfo && webinar.teacherInfo.name) {
            masterclassTemplate = masterclassTemplate + webinar.teacherInfo.name;
        }
        masterclassTemplate = masterclassTemplate +
            '</div></div>' +
            '<div class="teacher-credibility">';

        if (webinar.teacherInfo && webinar.teacherInfo.infoLine1) {
            masterclassTemplate = masterclassTemplate + webinar.teacherInfo.infoLine1;
        }
        masterclassTemplate = masterclassTemplate +
            '</div><div class="teacher-experience-time"><span>';
        if (webinar.teacherInfo && webinar.teacherInfo.infoLine2) {
            masterclassTemplate = masterclassTemplate + webinar.teacherInfo.infoLine2;
        }
        masterclassTemplate = masterclassTemplate +
            '</span></div></div><div class="teacher-image-section" data-bgsrc=' + webinar.teacherInfo.imageUrlHigh + '>' +
            '</div></div><div class="register-part"><div class="register-button">';

        if ((currentTime + joinTime) > webinar.startTime && currentTime < webinar.endTime) {
            masterclassTemplate = masterclassTemplate + '<div class="register-btn-background join-the-class"></div>';
        } else {
            masterclassTemplate = masterclassTemplate + '<div class="register-btn-background"></div>';
        }
        if ((currentTime + joinTime) > webinar.startTime && currentTime < webinar.endTime) {
            masterclassTemplate = masterclassTemplate + '<a href="https://www.vedantu.com/masterclass/' + webinar.webinarCode + '"' +
                'target="_blank" data-type="join"' +
                'data-grades="' + webinar.grades + '"' +
                'data-webinarid="' + webinar.id + '"' +
                'onclick="webinarRegisterJoinCLicked(event, \'' + webinar.id + '\', ' + webinar.startTime + ', \'' + webinar.teacherInfo.name + '\', \'' + webinar.webinarCode + '\')">' +
                'Join the Class' +
                '</a>';
        } else {
            masterclassTemplate = masterclassTemplate +
                '<a data-type="register" id="registerFree"' +
                'data-grades="' + webinar.grades + '"' +
                'data-webinarid="' + webinar.id + '"' +
                'onclick="webinarRegisterJoinCLicked(event, \'' + webinar.id + '\', ' + webinar.startTime + ', \'' + webinar.teacherInfo.name + '\', \'' + webinar.webinarCode + '\')">' +
                'Register for FREE' +
                '</a>';
        }
        masterclassTemplate = masterclassTemplate + '</div></div></div>';

        if ((currentTime + joinTime) > webinar.startTime && currentTime < webinar.endTime) {
            masterclassTemplate = masterclassTemplate + '<div class="registration-number-section" data-type="join"' +
                'data-webinarid="' + webinar.id + '" data-creation="' + webinar.creationTime + '"' +
                'data-current="' + currentTime + '">' +
                '<span class="registration-text-bold">' +
                '</span><span class="registration-text"></span></div>';
        } else {
            masterclassTemplate = masterclassTemplate +
                '<div class="registration-number-section" data-webinarid="' + webinar.id + '"' +
                'data-creation="' + webinar.creationTime + '" data-current="' + currentTime + '">' +
                '<span class="registration-text-bold"></span><span class="registration-text"></span></div>';
        }
        masterclassTemplate = masterclassTemplate + '</div></li>';

        return masterclassTemplate;
    }

    var gradesTextMC = function(grade, masterclassTemplate) {
        switch (grade) {
            case '-1' || -1:
                return masterclassTemplate + 'UKG ';
            case '-2' || -2:
                return masterclassTemplate + 'LKG ';
            case '1' || 1:
                return masterclassTemplate + grade + 'st ';
            case '2' || 2:
                return masterclassTemplate + grade + 'nd ';
            case '3' || 3:
                return masterclassTemplate + grade + 'rd ';
            default:
                return masterclassTemplate + grade + 'th ';
        }
    }

    var getTeachers = function(webinarList) {
        let teachers = [];
        webinarList && webinarList.map(function(webinar) {
            if (webinar.teacherInfo && webinar.teacherInfo.name && teachers.indexOf(webinar.teacherInfo.name) === -1) {
                teachers.push(webinar.teacherInfo.name);
            }
        });
        return teachers;
    }

    var sliderScroll = function(slider) {
        slider.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    var resetSliderLeftToStartInMobileTablet = function() {
        if (window.innerWidth <= 1024) {
            var waveSliderContainer = document.querySelector('.wave-slider-container');
            var microcoursesSliderContainer = document.querySelector('.microcourses-slider-container');
            var masterclassSliderContainer = document.querySelector('.masterclass-slider-container');
            var discoverSliderContainer = document.querySelector('.discover-slider-container');

            if (!!waveSliderContainer) {
                sliderScroll(waveSliderContainer);
            }
            if (!!microcoursesSliderContainer) {
                sliderScroll(microcoursesSliderContainer);
            }
            if (!!masterclassSliderContainer) {
                sliderScroll(masterclassSliderContainer);
            }
            if (!!discoverSliderContainer) {
                sliderScroll(discoverSliderContainer);
            }
        }
    }

    var waveClickstream = function() {
        var allWaves = document.querySelectorAll('.wave-slider-container .each-img');
        allWaves.forEach(function(eachWave) {
            eachWave.onclick = function() {
                try {
                    let customObj = {};

                    var redirectionLink = eachWave.querySelector('a').getAttribute("href");

                    var paramString = redirectionLink.split('?')[1];
                    var params;
                    var utm_campaign = "";
                    var utm_medium = "";
                    var utm_term = "";
                    var utm_source = "";

                    if (!!paramString) {
                        params = paramString.split('&');
                        params.forEach(function(eachParam) {
                            var key = eachParam.split('=');
                            if (key[0] == "utm_campaign") {
                                utm_campaign = key[1];
                            } else if (key[0] == "utm_medium") {
                                utm_medium = key[1];
                            } else if (key[0] == "utm_term") {
                                utm_term = key[1];
                            } else if (key[0] == "utm_source") {
                                utm_term = key[1];
                            }
                        });
                    }
                    customObj["key1"] = "utm_campaign";
                    customObj["value1"] = utm_campaign;
                    customObj["key2"] = "utm_medium";
                    customObj["value2"] = utm_medium;
                    customObj["key3"] = "utm_term";
                    customObj["value3"] = utm_term;

                    !!clickStream && clickStream.pushEvent("home_page", "Click", "carousel_click", null, customObj);
                } catch (error) {
                    console.warn("Error While sending click stream data: ", error);
                }
            }
        });
    }

    var masterclassesClickstream = function() {
        var allMasterclasses = document.querySelectorAll('.masterclass-slider-container .webinar-class-cards');
        allMasterclasses.forEach(function(eachMasterclass) {
            eachMasterclass.onclick = function() {
                try {
                    let customObj = {};
                    var webinarStartTime = eachMasterclass.parentElement.dataset.starttime;
                    var webinarEndTime = eachMasterclass.parentElement.dataset.endtime;
                    var currentTime = new Date().getTime();
                    var webinarStatus;
                    if (webinarStartTime - 960000 <= currentTime && currentTime < webinarEndTime) {
                        webinarStatus = "live";
                    } else if (webinarStartTime - 960000 > currentTime) {
                        webinarStatus = "upcoming";
                    }
                    customObj["key1"] = "class_state";
                    customObj["value1"] = webinarStatus;
                    customObj["key2"] = "webinar_id";
                    customObj["value2"] = eachMasterclass.dataset.webinarid;

                    !!clickStream && clickStream.pushEvent("home_page", "Click", "courses_collection_click", null, customObj);
                } catch (error) {
                    console.warn("Error While sending click stream data: ", error);
                }
            }
        });
    }

    var discoverCollectionClickstream = function() {
        var allCollections = document.querySelectorAll('.discover-slider-container .each-img');
        allCollections.forEach(function(eachCollection) {
            eachCollection.onclick = function() {
                try {
                    let customObj = {};
                    customObj["key1"] = "collection_name";
                    customObj["value1"] = eachCollection.querySelector('.collection-title').innerText;
                    !!clickStream && clickStream.pushEvent("home_page", "Click", "courses_collection_click", null, customObj);
                } catch (error) {
                    console.warn("Error While sending click stream data: ", error);
                }
            }
        });
    }

    var gradeChange = function(grade) {

        var microcoursesList = [],
            waveList = [],
            discoverList = [],
            webinarList = [],
            microcoursesHeading, masterclassHeading, discoverHeading, waveHeading;
        var showMicrocourses = false;
        var showWave = false;
        var showMasterclass = false;
        var showDiscover = false;

        try {
            let customObj = {};
            customObj["key1"] = "grade";
            customObj["value1"] = grade;
            !!clickStream && clickStream.pushEvent("home_page", "Click", "grade_select", null, customObj);
        } catch (error) {
            console.warn("Error While sending click stream data: ", error);
        }

        var params = null
        if (grade == '1-5') {
            params = {
                grades: "1,2,3,4,5"
            }
            var url = '/homefeed/getHomeFeedForWeb';
        } else if (grade == 'lkg-ukg') {
            params = {
                grades: "-1,-2"
            }
            var url = '/homefeed/getHomeFeedForWeb';
        } else {
            var url = '/homefeed/getHomeFeedForWeb/' + grade;
        }

        url = utilsController.formSubSystemPath("lms", url);
        utilsController.ajax(url, 'GET', params, function(resp) {
            var response = JSON.parse(resp);
            var gradeChangeCustomEvent = new CustomEvent('homepage-grade-change');
            window.dispatchEvent(gradeChangeCustomEvent);

            response.forEach(function(specificData) {
                if (specificData.cardType == "MICROCOURSE_COLLECTION") {
                    discoverList = specificData["homeFeedCardDataList"] || [];
                    showDiscover = specificData["homeFeedCardDataList"].length > 0;
                    discoverHeading = specificData.sectionTitle;
                } else if (specificData.cardType == "BANNER_LIST") {
                    waveList = specificData["homeFeedCardDataList"] || [];
                    showWave = specificData["homeFeedCardDataList"].length > 0;
                    waveHeading = specificData.sectionTitle;
                } else if (specificData.cardType == "MICROCOURSES") {
                    microcoursesList = specificData["homeFeedCardDataList"] || [];
                    showMicrocourses = specificData["homeFeedCardDataList"].length > 0;
                    microcoursesHeading = specificData.sectionTitle;
                } else if (specificData.cardType == "UPCOMING_WEBINARS") {
                    webinarList = specificData["homeFeedCardDataList"] || [];
                    teachers = getTeachers(webinarList);
                    webinarList = webinarList || [];
                    webinarDataList = JSON.stringify(webinarList || []);
                    webinarListSize = webinarList.length;
                    showMasterclass = specificData["homeFeedCardDataList"].length > 0;
                    masterclassHeading = specificData.sectionTitle;
                }
            });

            if (showDiscover && grade !== '1-5' && grade !== 'lkg-ukg') {
                document.querySelector('.home-page-discover-main-container').classList.remove('hidden');
                var completeDiscover = "";
                discoverList.forEach(function(dicovercourse) {
                    completeDiscover = completeDiscover + getDiscoverHTML(dicovercourse, grade);
                });
                document.querySelector('.discover-slider').innerHTML = completeDiscover;
                var discoverHeadingEle = document.querySelector('.home-page-discover-main-container .discover-heading');
                if (!!discoverHeadingEle) {
                    discoverHeadingEle.innerHTML = discoverHeading;
                }
                document.querySelector('.discover-slider').style.left = "0px";
                checkRightArrow('.discover-slider', '.homepage-discover-slider-button-right .vicon-arrowbold-right-circle', 3);
                setTimeout(function() {
                    discoverCollectionClickstream();
                })
            } else {
                document.querySelector('.home-page-discover-main-container').classList.add('hidden');
            }

            if (showWave && grade !== '1-5' && grade !== 'lkg-ukg') {
                document.querySelector('.home-page-wave-main-container').classList.remove('hidden');
                var completeWave = "";
                waveList.forEach(function(wavecourse) {
                    completeWave = completeWave + getWaveHTML(wavecourse);
                });
                document.querySelector('.wave-slider').innerHTML = completeWave;
                var waveHeadingEle = document.querySelector('.home-page-wave-main-container .wave-heading');
                if (!!waveHeadingEle) {
                    waveHeadingEle.innerHTML = waveHeading;
                }
                document.querySelector('.wave-slider').style.left = "0px";
                checkRightArrow('.wave-slider', '.homepage-wave-slider-button-right .vicon-arrowbold-right-circle', 2);
                setTimeout(function() {
                    waveClickstream();
                })
            } else {
                document.querySelector('.home-page-wave-main-container').classList.add('hidden');
            }

            if (showMicrocourses && grade !== '1-5' && grade !== 'lkg-ukg') {
                document.querySelector('.home-page-microcourses-main-container').classList.remove('hidden');
                var microcoursesSliderDiv = document.querySelector('.microcourses-slider');

                microcoursesSliderDiv.innerHTML = "";
                microcoursesList.forEach(function(microcourse) {
                    microcoursesSliderDiv.appendChild(getMicrocourseHTML(microcourse));
                });
                document.querySelector('.view-all-a-tag').setAttribute("href", "/microcourses?grade=" + grade);
                var microcoursesHeadingEle = document.querySelector('.home-page-microcourses-main-container .microcourses-heading');
                if (!!microcoursesHeadingEle) {
                    microcoursesHeadingEle.innerHTML = microcoursesHeading;
                }
                document.querySelector('.microcourses-slider').style.left = "0px";
                checkRightArrow('.microcourses-slider', '.homepage-microcourses-slider-button-right .vicon-arrowbold-right-circle', 3);
            } else {
                document.querySelector('.home-page-microcourses-main-container').classList.add('hidden');
            }

            if (showMasterclass) {
                document.querySelector('.home-page-masterclass-main-container').classList.remove('hidden');
                var completeMasterclasses = "";
                var currentTime = new Date().getTime();
                webinarList.forEach(function(masterclass) {
                    completeMasterclasses = completeMasterclasses + getMasterclassHTML(masterclass, currentTime);
                });
                if (grade === '1-5' || grade === 'lkg-ukg') {
                    completeMasterclasses = `<li class="slider-li"></li>` + completeMasterclasses
                }
                document.querySelector('.masterclass-slider').innerHTML = completeMasterclasses;
                var masterclassHeadingEle = document.querySelector('.home-page-masterclass-main-container .masterclass-heading');
                if (!!masterclassHeadingEle) {
                    masterclassHeadingEle.innerHTML = masterclassHeading;
                }

                document.querySelector('.masterclass-slider').style.left = "0px";
                checkRightArrow('.masterclass-slider', '.homepage-masterclass-slider-button-right .vicon-arrowbold-right-circle', 3);
                // masterclassShowHighlights();
                setTimeout(function() {
                    masterclassesClickstream();
                })
                if (grade === '1-5') {
                    var event = new CustomEvent('grade-15');
                    window.dispatchEvent(event);
                } else if (grade === 'lkg-ukg') {
                    var event = new CustomEvent('grade-lkg-ukg');
                    window.dispatchEvent(event);
                }
            } else {
                document.querySelector('.home-page-masterclass-main-container').classList.add('hidden');
            }

            addHomeSliderForNewHomePageComponents();
            lazyload();
        }, function(error) {
            document.querySelector('.home-page-microcourses-main-container').classList.add('hidden');
            document.querySelector('.home-page-masterclass-main-container').classList.add('hidden');
            document.querySelector('.home-page-wave-main-container').classList.add('hidden');
            document.querySelector('.home-page-discover-main-container').classList.add('hidden');
        });

        mobileGradeSlider();
        resetSliderLeftToStartInMobileTablet();
    }

    var titleCase = function(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    var postRegistrationFlow = function(resp, params, webinarId, startTime, teacherName, webinarUrl) {
        console.log('start time ' + startTime);
        var timeShowElem = document.querySelector('#webinar-post-reg-time');
        var timeShowElem2 = document.querySelector('#webinar-post-reg-time-2');
        if (timeShowElem) timeShowElem.innerText = window.dateFormatter.formatDate(startTime, 'dayShort, dd mmm, hrh:min mdn');
        if (timeShowElem2) timeShowElem2.innerText = window.dateFormatter.formatDate(startTime, 'dayShort, dd mmm, hrh:min mdn');
        var teacherNameElem = document.querySelector('#registration-modal-interaction .student-input-field');
        console.log(teacherNameElem);
        if (teacherNameElem) teacherNameElem.placeholder = 'Ask a question which you would like ' + titleCase(teacherName) + ' to cover in the class';
        var teacherNameElem2 = document.querySelector('#registration-modal-thanking .joininh-link-text');
        if (teacherNameElem2) teacherNameElem2.innerText = 'Get your question answered by ' + titleCase(teacherName) + ' on';
        // webinarCommon.storeRegisteredWebinarData(resp.webinarId);


        //commenting
        // webinarCommon.clevertapObj.trackEvent("webinar_listing_registration", {
        //     'button': 'Register_Free',
        //     'name': params.firstName,
        //     'webinar_id': webinarId,
        //     'grade': params.grade,
        //     'start_time': startTime
        // });
        // webinarCommon.storeLeadData(params);
        // webinarCommon.clevertapObj.setIdentity(params);
        // if (webinarCommon.vCookies.getItem('studentPhone')) {
        //     webinarCommon.vCookies.removeItem('studentPhone', '/masterclass');
        //     webinarCommon.setWebinarCookie(resp);
        // } else {
        //     webinarCommon.setWebinarCookie(resp);
        // }
        // if (webinarCommon.vCookies.getItem('openWebinarClicked') == 'true') {
        //     // Show popup and give button
        //     document.getElementById('modal-inside-html-content').innerHTML = '';
        //     document.getElementById('modal-inside-html-content').innerHTML = '<h3 style="margin:  0px;margin-bottom: -6px;">Great! You are registered for the Master Class.</h3><p style="margin-bottom: 35px;">Click on the button below to join.</p><a href="" id="modal-webinar-open" >Join the Master Class</a>';
        //     var link = document.getElementById('modal-webinar-open');
        //     window.exposedMdules.minimalModal.openModal();
        //     link.href = resp.registerJoinUrl;
        //     link.setAttribute("target", "_blank");
        //     webinarCommon.vCookies.removeItem('openWebinarClicked', '/masterclass');
        // } else {
        webinarCommon.showPostRegistrationDialog(resp.phone, resp.webinarId, true, webinarUrl);
        // }
        var modalWebinarOpen = document.getElementById('modal-webinar-open');
        modalWebinarOpen && modalWebinarOpen.addEventListener('click', function(evt) {
            window.exposedMdules.minimalModal.closeModal();
            document.location.reload();
        });
    }

    var showRegistrationModal = function(type, webinarId, startTime, teacherName, grades, webinarUrl, gradeExists, userData, clickedWebinarTitle, clickedWebinarSubjects) {
        var webinarCommon = window.webinarCommon;

        var formModal = document.getElementById('gradeForm');
        var gradeExists = gradeExists || window.exposedVariables.grade;
        setTimeout(function() {
            function handler(e) {
                webinarCommon.checkOtpCondition(e, true, postRegistrationFlow, false, userData, null, webinarId, startTime, teacherName, webinarUrl, true, clickedWebinarTitle, clickedWebinarSubjects);
            }
            if (gradeExists) {
                webinarCommon.checkOtpCondition(null, true, postRegistrationFlow, gradeExists, userData, null, webinarId, startTime, teacherName, webinarUrl, true, clickedWebinarTitle, clickedWebinarSubjects);
            } else {
                document.getElementById('popup-grade-overlay').classList.remove('is-hidden');
                document.querySelector('body').classList.add('body-no-scroll');
                formModal && formModal.addEventListener('submit', handler, true);
                document.querySelector('body').classList.add('body-no-scroll');
            }
            if (type === 'join') {
                webinarCommon.vCookies.setItem('openWebinarClicked', true, null, '/masterclass');
            }
        }, 200);
    }

    var checkMasterclassInViewPort = function(masterclass) {
        if (masterclass.getBoundingClientRect().left >= -42 && masterclass.getBoundingClientRect().right <= window.innerWidth) {
            return true;
        }
        return false;
    }

    var masterclassShowHighlights = function() {
        if (!!timeout) {
            clearInterval(timeout);
        }
        if (!!interval) {
            clearInterval(interval);
        }
        var masterclassContainer = document.querySelector('.home-page-masterclass-main-container');
        if (window.innerWidth <= 1024 && !!masterclassContainer) {
            var allMasterclasses = document.querySelectorAll('.webinar-class-cards');
            timeout = setTimeout(function() {
                var masterclassSliderContainer = document.querySelector('.masterclass-slider-container');
                if (masterclassSliderContainer.getBoundingClientRect().top >= 100 && masterclassSliderContainer.getBoundingClientRect().bottom <= window.innerHeight) {
                    allMasterclasses.forEach(function(masterclass, index) {
                        var present = checkMasterclassInViewPort(masterclass);
                        if (present) {
                            interval = setInterval(function() {
                                if (masterclass.classList.contains('show-secondary')) {
                                    masterclass.classList.remove("show-secondary");
                                } else {
                                    masterclass.classList.add("visible-in-view");
                                    masterclass.classList.add("show-secondary");
                                }
                            }, 4000);
                        } else {
                            masterclass.classList.remove("visible-in-view");
                            masterclass.classList.remove("show-secondary");
                        }
                    });
                }
            }, 200);
        }
    }

    var microcourseClicked = function(element, microcourse) {
        if (!!element) {

            try {
                let customObj = {};
                customObj["key1"] = "id";
                customObj["value1"] = microcourse.id;
                !!clickStream && clickStream.pushEvent("home_page", "Click", "courses_click", null, customObj);
            } catch (error) {
                console.warn("Error While sending click stream data: ", error);
            }

            var microcoursePopupHeaderTitle = document.querySelector('.homepage-microcourses-popup .header-title');
            if (!!microcoursePopupHeaderTitle) {
                microcoursePopupHeaderTitle.innerHTML = microcourse.title;
            }

            var microcoursePopupCourseSyllabusEle = document.querySelector('.homepage-microcourses-popup-body .course-syllabus');
            var microcoursePopupCourseSyllabus = '<span class="course-syllabus-title">Course syllabus</span>';

            if (!!microcoursePopupCourseSyllabusEle && !!microcourse.packages && !!microcourse.packages[0].batchDetails && !!microcourse.packages[0].batchDetails.courseSyllabus) {
                !!microcourse.packages[0].batchDetails.courseSyllabus.map(function(syllabus, coursesIndex) {
                    microcoursePopupCourseSyllabus = microcoursePopupCourseSyllabus +
                        '<div class="topic-container"><div class="class">Class&nbsp;' + (coursesIndex + 1) + '</div>' +
                        '<div class="topicName">' + syllabus.title + '</div></div>';
                });

                microcoursePopupCourseSyllabusEle.innerHTML = microcoursePopupCourseSyllabus;
            } else if (!!microcoursePopupCourseSyllabusEle) {
                microcoursePopupCourseSyllabusEle.innerHTML = microcoursePopupCourseSyllabus;
            }

            var microcoursePopupPrice = document.querySelector('.homepage-microcourses-popup .priceTag-container');

            if (!!microcoursePopupPrice) {
                microcoursePopupPrice.innerHTML = '<span class="vicon-rupee-icon-new big"></span>' + Math.floor(microcourse.price / 100);
            }

            var microcoursePopupCutPrice = document.querySelector('.homepage-microcourses-popup .cutPrice');

            if (!!microcoursePopupCutPrice) {
                microcoursePopupCutPrice.innerHTML = '<span class="vicon-rupee-icon-new"></span>' + Math.floor(microcourse.cutPrice / 100);
            }

            var microcoursePopupDiscountPer = document.querySelector('.homepage-microcourses-popup .percentage-off-container');

            if (!!microcoursePopupDiscountPer) {
                microcoursePopupDiscountPer.innerHTML = Math.floor((microcourse.cutPrice / 100 - microcourse.price / 100) / (microcourse.cutPrice / 100) * 100) + '% off';
            }

            var microcoursePopupBuyNow = document.querySelector('.homepage-microcourses-popup .buyNow-btn');


            if (!!microcoursePopupBuyNow) {
                microcoursePopupBuyNow.setAttribute("data-id", microcourse.id);
            }

            var microcoursePopupTeacherImg = document.querySelector('.homepage-microcourses-popup .teacher-img');


            if (!!microcoursePopupTeacherImg && !!microcourse.packages && !!microcourse.packages[0].batchDetails && !!microcourse.packages[0].batchDetails.teacherInfo &&
                !!microcourse.packages[0].batchDetails.teacherInfo.teacherImageUrlLow) {
                microcoursePopupTeacherImg.innerHTML = '<img src="' + microcourse.packages[0].batchDetails.teacherInfo.teacherImageUrlLow + '" height="64px" width="64px">';
            } else if (!!microcoursePopupTeacherImg) {
                microcoursePopupTeacherImg.innerHTML = '<img src="static/images/default-user.png" height="64px" width="64px">';
            }

            var microcoursePopupTeacherName = document.querySelector('.homepage-microcourses-popup .teacher-name');


            if (!!microcoursePopupTeacherName && !!microcourse.packages && !!microcourse.packages[0].batchDetails && !!microcourse.packages[0].batchDetails.teacherInfo &&
                !!microcourse.packages[0].batchDetails.teacherInfo.teacherName) {
                microcoursePopupTeacherName.innerHTML = microcourse.packages[0].batchDetails.teacherInfo.teacherName;
            } else if (!!microcoursePopupTeacherName) {
                microcoursePopupTeacherName.innerHTML = "";
            }

            var microcoursePopupTeacherInfo = document.querySelector('.homepage-microcourses-popup .teacher-info-lines');

            if (!!microcoursePopupTeacherInfo) {
                var line1 = "",
                    line2 = "",
                    finalInfo = "";
                if (!!microcourse.packages && !!microcourse.packages[0].batchDetails && !!microcourse.packages[0].batchDetails.teacherInfo &&
                    !!microcourse.packages[0].batchDetails.teacherInfo.teacherInfoLine1) {
                    line1 = microcourse.packages[0].batchDetails.teacherInfo.teacherInfoLine1;
                }

                if (!!microcourse.packages && !!microcourse.packages[0].batchDetails && !!microcourse.packages[0].batchDetails.teacherInfo &&
                    !!microcourse.packages[0].batchDetails.teacherInfo.teacherInfoLine2) {
                    line2 = microcourse.packages[0].batchDetails.teacherInfo.teacherInfoLine2;
                }

                if (!!line2) {
                    finalInfo = "<div>" + line1 + "</div><div>," + line2 + "</div>";
                } else {
                    finalInfo = line1;
                }

                microcoursePopupTeacherInfo.innerHTML = finalInfo;
            }

            document.querySelector('.homepage-microcourses-popup').classList.remove('hidden');
            document.querySelector('body').classList.add('stop-scroll');
        }
    }

    var closeMicrocoursePopup = function(element) {
        if (!!element) {
            element.closest('.homepage-microcourses-popup').classList.add('hidden');
            document.querySelector('body').classList.remove('stop-scroll');
        }
    }

    var microcourseBuyNowClicked = function(element) {
        if (!!element) {
            element.closest('.homepage-microcourses-popup').classList.add('hidden');
            document.querySelector('body').classList.remove('stop-scroll');
        }

        var microcoursesLoginSignupCallBack = function() {
            if (!!element) {
                window.location.href = "/payment/BUNDLE/" + element.dataset.id;
                // window.location.href = "/v/payment-details/BUNDLE/" + element.dataset.id + "/";
            }
        }
        loginSignupModule.init(null, microcoursesLoginSignupCallBack, false, {
            textData: {
                sideBarText: 'Welcome to Vedantu'
            }
        })
    }

    var webinarRegisterJoinCLicked = function(e, id, startTime, teacherName, webinarUrl) {
        var popupOptions = {
            textData: {
                sideBarText: "Learn Live Online From India's Best Teachers",
                rightDivText: "Register Now to attend the Free Live Master Classes!"
            },
            closeAction: function() {
                window.location.reload();
            },
            showEmailInProfileBuilder: true,
            phoneData: {
                phone: '',
                countryCode: ''
            }
        };
        e.preventDefault();
        var type = e.target.dataset.type;
        var grades = e.target.dataset.grades;
        if (grades.indexOf('DROPPER') > -1) {
            grades = grades.replace('DROPPER', '"DROPPER"');
        }


        clickedWebinarTitle = e.target.closest('.webinar-class-cards').querySelector('.topic-title').innerText;
        clickedWebinarSubjects = e.target.closest('.webinar-class-cards').dataset.subjects;

        var webinarRegisterLoginSignupCallBack = function(data) {
            var gradeExists = false;
            if (data && data.grade) {
                gradeExists = true;
            } else if (data && data.studentInfo && data.studentInfo.grade) {
                gradeExists = true;
            } else if (data && data.user && data.user.grade) {
                gradeExists = true;
            } else if (data && data.user && data.user.studentInfo && data.user.studentInfo.grade) {
                gradeExists = true;
            }
            showRegistrationModal(type, id, startTime, teacherName, grades, webinarUrl, gradeExists, data, clickedWebinarTitle, clickedWebinarSubjects);
        }

        loginSignupModule.init(null, webinarRegisterLoginSignupCallBack, true, popupOptions);
    }

    var handleGradeClose = function(e) {
        var gradePopup = document.getElementById('popup-grade-overlay');
        if (gradePopup && !gradePopup.classList.contains('is-hidden')) {
            if (window.exposedVariables && window.exposedVariables.isPhoneVerified) {
                if (gradePopup) {
                    gradePopup.classList.add('is-hidden');
                    document.querySelector('body').classList.remove('body-no-scroll');
                }
            } else {
                window.location.reload();
            }
        }
    }

    var initDropDown2 = function(container) {
        var dropDownContainer, dropDownList;
        dropDownContainer = document.querySelector(container);
        dropDownList = dropDownContainer && dropDownContainer.querySelector('.grade-dropdown-list');
        document.addEventListener('click', classAdder);

        function classAdder(event) {
            if (event.target.parentElement !== dropDownContainer) {
                dropDownList.classList.add('hide');
            } else {
                classRemover();
            }
        }

        function classRemover() {
            if (dropDownList.classList.contains('hide')) {
                dropDownList.classList.remove('hide');
            } else {
                dropDownList.classList.add('hide');
            }
        }

        function textExtractor(event) {
            var TextExt = event.target.innerText;
            dropDownContainer.firstElementChild.innerText = TextExt;
            dropDownContainer.firstElementChild.style.color = "#333";
            classAdder(event);
        }

        function listListener() {
            dropDownList.addEventListener('click', textExtractor);
        }
        listListener();
    }

    function getSubjectsCommaSeparated(webinar) {
        var subjectsCommaSeparated = 'null';
        if (webinar.subjects) {
            subjectsCommaSeparated = '';
            webinar.subjects.map(function(subject, index) {
                if (index == (webinar.subjects.length - 1)) {
                    subjectsCommaSeparated = subjectsCommaSeparated + subject;
                } else {
                    subjectsCommaSeparated = subjectsCommaSeparated + subject + ',';
                }
            })
        }
        return subjectsCommaSeparated;
    }

    var downloadAppLinkImages = function() {
        var appLinkImages = document.querySelectorAll('img[data-desktopsrc]');
        if (window.innerWidth >= 768) {
            appLinkImages.forEach(function(applink) {
                applink.src = applink.dataset.desktopsrc;
                applink.removeAttribute('data-desktopsrc');
            });
        }
    }

    var closeGrade = document.getElementById('close-grade-modal');
    closeGrade && closeGrade.addEventListener('click', handleGradeClose);

    window.gradeChange = gradeChange;
    window.microcourseClicked = microcourseClicked
    window.closeMicrocoursePopup = closeMicrocoursePopup;
    window.microcourseBuyNowClicked = microcourseBuyNowClicked;
    window.webinarRegisterJoinCLicked = webinarRegisterJoinCLicked;
    window.getSubjectsCommaSeparated = getSubjectsCommaSeparated;


    downloadAppLinkImages();
    mobileGradeSlider();

    checkRightArrow('.microcourses-slider', '.homepage-microcourses-slider-button-right .vicon-arrowbold-right-circle', 3);
    checkRightArrow('.masterclass-slider', '.homepage-masterclass-slider-button-right .vicon-arrowbold-right-circle', 3);
    checkRightArrow('.wave-slider', '.homepage-wave-slider-button-right .vicon-arrowbold-right-circle', 2);
    checkRightArrow('.discover-slider', '.homepage-discover-slider-button-right .vicon-arrowbold-right-circle', 3);

    addHomeSliderForNewHomePageComponents();
    // masterclassShowHighlights();

    initDropDown2("#drop-1");

    sendLinkToPhone("notification", "/SMS/ncert/sendapplink");
    sendLinkToPhoneFromFooter("notification", "/SMS/ncert/sendapplink");
    addListenerToCard();
    countResponseHandler();
    invalidTextRemover();
    phoneCodeListCreator("/cdn/metadata/country-phone-codes.json");
    phoneCodeListCreatorFromFooter("/cdn/metadata/country-phone-codes.json");
    codeDropdown('#link-form .country-code', '#phoneCodesList');
    codeDropdownFromFooter('#footer-link-form .country-code', '#phoneCodesListFromFooter');

    var eventListeners = ["click", "scroll", "keypress", "touchstart"];
    // var grade10 = function () {

    //     window.removeEventListener("scroll", grade10);
    // }

    var initDownloads = function() {
        var webinarScript = "/static/js/webinar-otm-script/webinar-common.js";
        var scriptTag = document.createElement("script");
        scriptTag.src = webinarScript;
        document.body.appendChild(scriptTag);
        scriptTag.onload = function() {
            gradeChange(10);
        }
    }

    var lazyDownloads = function() {
        eventListeners.forEach(function(listener) {
            window.removeEventListener(listener, lazyDownloads);
        });
        initDownloads();
    }

    setTimeout(function() {
        var gradesHolder = document.querySelector('.grade-section-container');

        if (!!gradesHolder) {
            if (gradesHolder.getBoundingClientRect().top > window.innerHeight) {
                eventListeners.forEach(function(listener) {
                    window.addEventListener(listener, lazyDownloads);
                });
            } else {
                initDownloads();
            }
        } else {
            initDownloads();
        }
        lazyload();
    });
    !!document.getElementById("vskg-entry-homepage") && document.getElementById("vskg-entry-homepage").addEventListener("click", function() {
        sendGAEvent('click', "v_home_1stfold", 'vsc_web');
        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_1stfold')
        try {
            let customObj = {};
            !!clickStream && clickStream.pushEvent("vsc_web", "click", "v_home_1stfold", null, customObj);
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': 'v_home_1stfold',
                'category': 'vsc_web'
            });
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    });
    const vskBannerHomepage = document.getElementById("vsk-banner-entry-homepage");
    !!vskBannerHomepage && vskBannerHomepage.addEventListener("click", function() {
        sendGAEvent('click', "v_home_coders1stfold", 'vsc_web');
        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_coders1stfold')
        try {
            const urlSuperCoders = "/supercoders?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=vsc-main-website"
            checkPopUpBlocked(urlSuperCoders);
            let customObj = {};
            !!clickStream && clickStream.pushEvent("vsc_web", "click", "v_home_coders1stfold", null, customObj);
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': 'v_home_coders1stfold',
                'category': 'vsc_web'
            });
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    });

    var vsrBannerHomepage = document.getElementById("vsr-banner-Btn-dweb");
    var vsrBannerHomepageMob = document.getElementById("vsr-banner-entry-homepage-mob");
    if (vsrBannerHomepage && vsrBannerHomepageMob) {
        var vsrElements = [vsrBannerHomepage, vsrBannerHomepageMob];
        for (var i = 0; i < 2; i++) {
            vsrElements[i].addEventListener("click", function() {
                sendGAEvent('click', "v_home_readers1stfold", 'vsr_web');
                !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_readers1stfold')
                try {
                    var urlToOpen = "/superreaders/?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=vsr-main-website";
                    checkPopUpBlocked(urlToOpen);
                    let customObj = {};
                    !!clickStream && clickStream.pushEvent("vsr_web", "click", "v_home_readers1stfold", null, customObj);
                    window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                        'eventName': 'v_home_readers1stfold',
                        'category': 'vsr_web',
                        'course': 'SUPER_READER'
                    });
                } catch (error) {
                    console.warn("Error while sending event to click stream ", error);
                }
            });
        }
    }

    (() => {
        const grade11Button = document.getElementById("vsr-grade-11-12-Btn-dweb");
        const vsrBannerHomepageMob = document.getElementById("vsr-grade-11-12-Btn-mob");
        const vsrElements = [
            ...(!!grade11Button ? [grade11Button] : []),
            ...(!!vsrBannerHomepageMob ? [vsrBannerHomepageMob] : [])
        ];
        vsrElements.forEach((element) => {
            element.addEventListener("click", function() {
                // sendGAEvent('click', "v_home_readers1stfold",'vsr_web');
                // !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_readers1stfold')
                try {
                    const urlToOpen = window.CODERS_GRADES_11_12_URL;
                    checkPopUpBlocked(urlToOpen, true);
                    // const customObj={};
                    // !!clickStream && clickStream.pushEvent("vsr_web", "click", "v_home_readers1stfold",null,customObj);
                    // window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                    //     'eventName': 'v_home_readers1stfold',
                    //     'category': 'vsr_web'
                    // });
                } catch (error) {
                    console.warn("Error while sending event to click stream ", error);
                }
            });
        })
    })();

    var vssBannerHomepageMob = document.getElementById("vss-banner-entry-homepage-mob");
    var vssBannerHomepageWeb = document.getElementById("vss-banner-Btn-dweb");
    if (vssBannerHomepageWeb && vssBannerHomepageMob) {
        var vssElements = [vssBannerHomepageWeb, vssBannerHomepageMob];
        for (var i = 0; i < 2; i++) {
            vssElements[i].addEventListener("click", function() {
                sendGAEvent('click', "v_home_speakers1stfold", 'vss_web');
                !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_speakers1stfold')
                try {
                    var urlToOpen = "/superspeakers/?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=vss-main-website";
                    checkPopUpBlocked(urlToOpen);
                    let customObj = {};
                    !!clickStream && clickStream.pushEvent("vss_web", "click", "v_home_speakers1stfold", null, customObj);
                    window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                        'eventName': 'v_home_speakers1stfold',
                        'category': 'vss_web',
                        'course': 'SUPER_SPEAKER'
                    });
                } catch (error) {
                    console.warn("Error while sending event to click stream ", error);
                }
            });
        }
    }

    const vskMathsBannerHomepage = document.getElementById("vsk-maths-entry-dweb");
    const vskMathsBannerHomepageMob = document.getElementById("vsk-maths-entry-mob");
    if (vskMathsBannerHomepage && vskMathsBannerHomepageMob) {
        var elements = [vskMathsBannerHomepage, vskMathsBannerHomepageMob];
        for (var i = 0; i < 2; i++) {
            elements[i].addEventListener("click", function() {
                sendGAEvent('click', "v_home_math1stfold", 'vsm_web');
                !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_math1stfold')
                try {
                    const urlSuperCoders = "/supermaths?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=vsm-main-website"
                    checkPopUpBlocked(urlSuperCoders);
                    let customObj = {};
                    !!clickStream && clickStream.pushEvent("vsm_web", "click", "v_home_math1stfold", null, customObj);
                    window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                        'eventName': 'v_home_math1stfold',
                        'category': 'vsm_web',
                        'course': 'SUPER_MATH'
                    });
                } catch (error) {
                    console.warn("Error while sending event to click stream ", error);
                }
            });
        }
    }

    var crashCourseHomepageNTSE = document.querySelectorAll(".crash-courses-entry-homepage-ntse");
    var crashCourseHomepageNEET = document.querySelectorAll(".crash-courses-entry-homepage-neet");
    var crashCourseHomepageGrade9 = document.querySelectorAll(".crash-courses-entry-homepage-grade9");
    var crashCourseHomepageJEE = document.querySelectorAll(".crash-courses-entry-homepage-jee");
    var crashCourseEventNTSE = function() {
        try {
            let customObj = {};
            !!clickStream && clickStream.pushEvent("homepage", "click", "cbse_tile_firstfold_grade10", null, customObj);
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': 'cbse_tile_firstfold_grade10',
                'category': 'homepage'
            });
            sendGAEvent('click', "cbse_tile_firstfold_grade10", 'homepage');
            !!MoEngageVedantu && MoEngageVedantu.track_event('cbse_tile_firstfold_grade10')
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    }
    var crashCourseEventNEET = function() {
        try {
            let customObj = {};
            !!clickStream && clickStream.pushEvent("homepage", "click", "crash_tile_firstfold_neet22", null, customObj);
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': 'crash_tile_firstfold_neet22',
                'category': 'homepage'
            });
            sendGAEvent('click', "crash_tile_firstfold_neet22", 'homepage');
            !!MoEngageVedantu && MoEngageVedantu.track_event('crash_tile_firstfold_neet22')
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    }

    var crashCourseEventGrade9 = function() {
        try {
            let customObj = {};
            !!clickStream && clickStream.pushEvent("homepage", "click", "cbse_tile_firstfold_grade9", null, customObj);
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': 'cbse_tile_firstfold_grade9',
                'category': 'homepage'
            });
            sendGAEvent('click', "cbse_tile_firstfold_grade9", 'homepage');
            !!MoEngageVedantu && MoEngageVedantu.track_event('cbse_tile_firstfold_grade9')
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    }
    var crashCourseEventJEE = function() {
        try {
            let customObj = {};
            !!clickStream && clickStream.pushEvent("homepage", "click", "crash_tile_firstfold_jee22", null, customObj);
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': 'crash_tile_firstfold_jee22',
                'category': 'homepage'
            });
            sendGAEvent('click', "crash_tile_firstfold_jee22", 'homepage');
            !!MoEngageVedantu && MoEngageVedantu.track_event('crash_tile_firstfold_jee22')
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    }

    if (!!crashCourseHomepageNTSE && crashCourseHomepageNTSE.length > 0) {
        for (var index = 0; index < crashCourseHomepageNTSE.length; index++) {
            crashCourseHomepageNTSE[index].addEventListener('click', crashCourseEventNTSE);
        }
    }
    if (!!crashCourseHomepageNEET && crashCourseHomepageNEET.length > 0) {
        for (var index = 0; index < crashCourseHomepageNEET.length; index++) {
            crashCourseHomepageNEET[index].removeEventListener('click', crashCourseEventNEET);
            crashCourseHomepageNEET[index].addEventListener('click', crashCourseEventNEET);
        }
    }
    if (!!crashCourseHomepageGrade9 && crashCourseHomepageGrade9.length > 0) {
        for (var index = 0; index < crashCourseHomepageGrade9.length; index++) {
            crashCourseHomepageGrade9[index].removeEventListener('click', crashCourseEventGrade9);
            crashCourseHomepageGrade9[index].addEventListener('click', crashCourseEventGrade9);
        }
    }
    if (!!crashCourseHomepageJEE && crashCourseHomepageJEE.length > 0) {
        for (var index = 0; index < crashCourseHomepageJEE.length; index++) {
            crashCourseHomepageJEE[index].removeEventListener('click', crashCourseEventJEE);
            crashCourseHomepageJEE[index].addEventListener('click', crashCourseEventJEE);
        }
    }

    const vskReadersHomepageMweb = document.getElementById("vsk-superkids-readers-cta");
    const vskReadersHomepageDweb = document.getElementById("vsk-superkids-readers-section");
    let eventHandlingReaders = vskReadersHomepageDweb;
    if (window.innerWidth < 768) {
        eventHandlingReaders = vskReadersHomepageMweb;
    }!!eventHandlingReaders && eventHandlingReaders.addEventListener("click", function() {
        sendGAEvent('click', "v_home_vsrvsksection", 'vsr_web');
        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_vsrvsksection')
        try {
            var urlToOpen = "/superreaders/freetrial?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=v_home_vsrvsksection";
            checkPopUpBlocked(urlToOpen);
            let customObj = {};
            !!clickStream && clickStream.pushEvent("vsr_web", "click", "v_home_vsrvsksection", null, customObj);
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': 'v_home_vsrvsksection',
                'category': 'vsr_web',
                'course': 'SUPER_READER'
            });
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    });

    const vskSpeakersHomepageMweb = document.getElementById("vsk-superkids-speakers-cta");
    const vskSpeakersHomepageDweb = document.getElementById("vsk-superkids-speakers-section");
    let eventHandlingSpeakers = vskSpeakersHomepageDweb;
    if (window.innerWidth < 768) {
        eventHandlingSpeakers = vskSpeakersHomepageMweb;
    }!!eventHandlingSpeakers && eventHandlingSpeakers.addEventListener("click", function() {
        sendGAEvent('click', "v_home_vssvsksection", 'vss_web');
        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_vssvsksection')
        try {
            var urlToOpen = "/superspeakers/freetrial?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=v_home_vssvsksection";
            checkPopUpBlocked(urlToOpen);
            let customObj = {};
            !!clickStream && clickStream.pushEvent("vss_web", "click", "v_home_vssvsksection", null, customObj);
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': 'v_home_vssvsksection',
                'category': 'vss_web',
                'course': 'SUPER_SPEAKER'
            });
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    });

    const vskCoderssHomepageMweb = document.getElementById("vsk-superkids-coders-cta");
    const vskCoderssHomepageDweb = document.getElementById("vsk-superkids-coders-section");
    let eventHandlingCoders = vskCoderssHomepageDweb;
    if (window.innerWidth < 768) {
        eventHandlingCoders = vskCoderssHomepageMweb;
    }!!eventHandlingCoders && eventHandlingCoders.addEventListener("click", function() {
        sendGAEvent('click', "v_home_vscvsksection", 'vsc_web');
        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_vscvsksection')
        try {
            var urlToOpen = "/supercoders/freetrial?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=v_home_vscvsksection";
            checkPopUpBlocked(urlToOpen);
            let customObj = {};
            !!clickStream && clickStream.pushEvent("vsc_web", "click", "v_home_vscvsksection", null, customObj);
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': 'v_home_vscvsksection',
                'category': 'vsc_web',
                'course': 'SUPER_CODER'
            });
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    });

    const vskMathsHomepageMweb = document.getElementById("vsk-superkids-maths-cta");
    const vskMathsHomepageDweb = document.getElementById("vsk-superkids-maths-section");
    let eventHandlingMaths = vskMathsHomepageDweb;
    if (window.innerWidth < 768) {
        eventHandlingMaths = vskMathsHomepageMweb;
    }!!eventHandlingMaths && eventHandlingMaths.addEventListener("click", function() {
        sendGAEvent('click', "v_home_vsmvsksection", 'vsm_web');
        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_vsmvsksection')
        try {
            var urlToOpen = "/supermaths?utm_source=vedantu-homepage&utm_medium=section&utm_campaign=v_home_vsmvsksection";
            checkPopUpBlocked(urlToOpen);
            let customObj = {};
            !!clickStream && clickStream.pushEvent("vsm_web", "click", "v_home_vsmvsksection", null, customObj);
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': 'v_home_vsmvsksection',
                'category': 'vsm_web',
                'course': 'SUPER_MATH'
            });
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    });

    function vskSectionScrollEvent(activeElementNumber) {
        const moeObj = {
            "Total number of cards scrolled": activeElementNumber + 1,
        }
        sendGAEvent('scroll', "v_home_vsksectionscroll", 'vsr_web', null, moeObj);
        !!MoEngageVedantu && MoEngageVedantu.track_event('v_home_vsksectionscroll', moeObj)
        try {
            const customObj = {
                key1: "Total number of cards scrolled",
                value1: activeElementNumber + 1
            };
            !!clickStream && clickStream.pushEvent("vsr_web", "scroll", "v_home_vsksectionscroll", null, customObj);
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': 'v_home_vsksectionscroll',
                'category': 'vsr_web'
            });
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    }

    const vskSliderHomepage = document.querySelector(".vsk-superkids-slider");
    let scrollEventValue = 0;
    !!vskSliderHomepage && vskSliderHomepage.addEventListener("scroll", function() {
        var winScroll = vskSliderHomepage.scrollLeft;
        var indicator = document.getElementById("vsk-superkids-indicator-container").querySelectorAll('.indicator');
        var activeElementNumber = Math.floor(winScroll / 180);
        for (var activelist = 0; activelist < indicator.length; activelist++) {
            indicator[activelist].classList.remove('active');
        }

        indicator[activeElementNumber].classList.add('active');
        if ((scrollEventValue != activeElementNumber)) {
            vskSectionScrollEvent(activeElementNumber);
            scrollEventValue = activeElementNumber;
        }
    })

    const vskLeftArrow = document.querySelector(".vsk-left-arrow-container");
    const vskRightArrow = document.querySelector(".vsk-right-arrow-container");
    const leftArrowContainer = document.querySelector(".vsk-slider-button-left .vicon-arrowbold-left-circle");
    const rightArrowContainer = document.querySelector(".vsk-slider-button-right .vicon-arrowbold-right-circle");

    !!vskRightArrow && vskRightArrow.addEventListener("click", function() {
            vskSliderHomepage.scrollTo({
                top: 0,
                left: 280,
                behavior: "smooth"
            });
            rightArrowContainer.classList.add('end');
            leftArrowContainer.classList.remove('end');
        })

        !!vskLeftArrow && vskLeftArrow.addEventListener("click", function() {
            vskSliderHomepage.scrollTo({
                top: 0,
                left: -280,
                behavior: "smooth"
            });
            leftArrowContainer.classList.add('end');
            rightArrowContainer.classList.remove('end');
        })

    //call-us events
    const callUsEvent = function(lable) {
        try {
            !!sendGAEvent && sendGAEvent('Button_Click', lable, 'Header', null, {});
            !!MoEngageVedantu && MoEngageVedantu.track_event(lable, {}) !!clickStream && clickStream.pushEvent("Header", "Button_Click", lable, null, {});
            window.newPushDataLayerEvent && window.newPushDataLayerEvent({
                'eventName': lable,
                'category': 'Header'
            });
        } catch (error) {
            console.warn("Error while sending event to click stream ", error);
        }
    }
    const callUsIconWeb = document.querySelector(".call-icon-web");
    const callUsIconMobile = document.querySelector(".call-icon-mobile");
    !!callUsIconWeb && callUsIconWeb.addEventListener("mouseenter", function() {
        callUsEvent("Hover_Call_Us_Clicked")
    }) !!callUsIconMobile && callUsIconMobile.addEventListener("click", function() {
        callUsEvent("Call_Us_Clicked_Mob")
    })

    //Christmas snow Effects

    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function() {
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 2000
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.querySelector('.snow') && document.head.append(script);

})(document, window, config);

var homePageActions = {
    selector: {
        learnLiveForFree: 'learnLiveForFreeCTA',
        learnLiveBeforeResultSection: 'learnLiveBeforeResultSection',
        learnLiveBeforeStaticSection: 'learnLiveBeforeStaticSection'
    },
    url: {
        learnLiveForFree: 'https://www.vedantu.com/masterclass?utm_source=homepage&utm_medium=home_firstfold&utm_campaign=home_liveclasses_cta&utm_content=home_firstfold_liveclasses_cta_1',
        learnLiveBeforeResultSection: 'https://www.vedantu.com/masterclass?utm_source=homepage&utm_medium=home_results&utm_campaign=home_liveclasses_cta&utm_content=home_results_liveclasses_cta_1',
        learnLiveBeforeStaticSection: 'https://www.vedantu.com/masterclass?utm_source=homepage&utm_medium=home_stats&utm_campaign=home_liveclasses_cta&utm_content=home_stats_liveclasses_cta_2'
    },
    event: {
        category: 'home_page',
        action: 'Click',
        label: {
            learnLiveForFree: 'live_class_cta_firstfold',
            learnLiveBeforeResultSection: 'live_class_cta_result_section',
            learnLiveBeforeStaticSection: 'live_class_cta_stats_section'
        }
    },
    learnLiveForFree: function() {
        let learnLive = document.getElementById(this.selector.learnLiveForFree);

        !!learnLive &&
            learnLive.addEventListener('click', function(e) {
                e.preventDefault();
                !!clickStream &&
                    clickStream.pushEvent(
                        homePageActions.event.category,
                        homePageActions.event.action,
                        homePageActions.event.label.learnLiveForFree
                    );

                !!ga &&
                    ga(
                        homePageActions.event.category,
                        homePageActions.event.action,
                        homePageActions.event.label.learnLiveForFree,
                        null, {}
                    );
                window.open(homePageActions.url.learnLiveForFree, '_blank');
            });
    },
    learnLiveBeforeResultSection: function() {
        let learnLive = document.getElementById(
            this.selector.learnLiveBeforeResultSection
        );

        !!learnLive &&
            learnLive.addEventListener('click', function(e) {
                e.preventDefault();
                !!clickStream &&
                    clickStream.pushEvent(
                        homePageActions.event.category,
                        homePageActions.event.action,
                        homePageActions.event.label.learnLiveBeforeResultSection
                    );
                !!ga &&
                    ga(
                        homePageActions.event.category,
                        homePageActions.event.action,
                        homePageActions.event.label.learnLiveBeforeResultSection,
                        null, {}
                    );
                window.open(homePageActions.url.learnLiveBeforeResultSection, '_blank');
            });
    },
    learnLiveBeforeStaticSection: function() {
        let learnLive = document.getElementById(
            this.selector.learnLiveBeforeStaticSection
        );

        !!learnLive &&
            learnLive.addEventListener('click', function(e) {
                e.preventDefault();
                !!clickStream &&
                    clickStream.pushEvent(
                        homePageActions.event.category,
                        homePageActions.event.action,
                        homePageActions.event.label.learnLiveBeforeStaticSection
                    );
                !!ga &&
                    ga(
                        homePageActions.event.category,
                        homePageActions.event.action,
                        homePageActions.event.label.learnLiveBeforeStaticSection,
                        null, {}
                    );
                window.open(homePageActions.url.learnLiveBeforeStaticSection, '_blank');
            });
    },
    load: function() {
        this.learnLiveForFree();
        this.learnLiveBeforeResultSection();
        this.learnLiveBeforeStaticSection();
    }
};
try {
    setTimeout(function() {
        homePageActions.load();
    })
} catch (err) {
    console.warn('Home Page Actions: Error', err);
}