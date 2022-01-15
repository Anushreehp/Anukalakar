if (typeof mouseflow === 'undefined' && typeof mouseflowPlayback === 'undefined') {
    (function() {
        var _150 = false;
        var _151 = false;
        var _168 = [];
        var _173 = [];
        var _68 = 'https://app.mouseflow.com';
        var _9 = new _296(window, _150, _151);
        _9._143 = [];
        _9._156 = [];
        _9._165 = [];
        _9._55 = '10fbad46-455a-4c58-9b92-088dc4bff44a';

        function _280(_0, _9, _56, _4, _12, _101) {
            var _68, _55, _14, _63;
            var _157 = 'mf_liveHeatmaps';
            var _11;
            var _94 = [];
            var _158;
            var _108 = false;

            function _65(_161, _160) {
                _55 = _161;
                _14 = _160;
                _108 = window.location.search.indexOf('mf_legacy=1') !== -1 ? true : false;
                _14('Live heatmaps starting');
                _63 = _56._111();
                if (!_63) {
                    _14('Live heatmaps not initiated - could not create root HTML element');
                    return
                }
                if (!_0.opener) {
                    _14('Live heatmaps not initiated - window.opener is missing');
                    return
                }
                _314()
            }

            function _61() {
                _115()
            }

            function _314() {
                _12._16(_0, 'message', function(_32) {
                    _250(_32.data);
                    switch (_32.data.message) {
                        case 'MouseflowLiveHeatmaps_Init_Received':
                            _0.clearInterval(_158);
                            break;
                        case 'MouseflowLiveHeatmaps_Init_Success':
                        case 'MouseflowLiveHeatmaps_Hello':
                            _68 = _32.origin;
                            _230(_32.data.minDate, _32.data.filters, _32.data.filteredViews);
                            _257(_32.data.scripts, function() {
                                var message;
                                if (_108) {
                                    message = {
                                        mfCommand: 'settings',
                                        value: {
                                            websiteSettings: _32.data.websiteSettings
                                        }
                                    }
                                } else {
                                    _211();
                                    _11.cssSelectorTracked = _32.data.websiteSettings.cssSelectorTracked;
                                    message = {
                                        mfCommand: 'settings_liveheatmap',
                                        value: _11
                                    }
                                }
                                _0.postMessage(JSON.stringify(message), '*')
                            });
                            break;
                        case 'MouseflowLiveHeatmaps_StreamData_Chunk':
                            _104(_32.data.requestUrl, true)._152(_32.data.dataChunk);
                            break;
                        case 'MouseflowLiveHeatmaps_StreamData_Success':
                            _104(_32.data.requestUrl)._51();
                            break;
                        case 'MouseflowLiveHeatmaps_StreamData_Error':
                            _104(_32.data.requestUrl)._71();
                            break;
                        case 'MouseflowLiveHeatmaps_RequestData_Success':
                            _104(_32.data.requestUrl)._51(_32.data.responseText);
                            break;
                        case 'MouseflowLiveHeatmaps_RequestData_Error':
                            _104(_32.data.requestUrl)._71();
                            break
                    }
                });
                _158 = _0.setInterval(_180, 500);
                _0.setTimeout(function() {
                    _0.clearInterval(_158)
                }, 10000);
                _180()
            }

            function _180() {
                _154({
                    message: 'MouseflowLiveHeatmaps_Init',
                    websiteId: _55,
                    legacy: _108
                })
            }

            function _230(_258, _72, _236) {
                _11 = _195();
                var _96 = _210();
                var _107 = _9.location.search.match(/mf_liveHeatmaps=([^&]+)/);
                var _162 = typeof _0.name === 'string' && _0.name.indexOf('mf_liveHeatmaps') === 0 ? _0.name.slice(15).split('_') : [];
                var _231 = _107 || _162[1] === 'init';
                if (_11 && !_231) {
                    _11.filters.url = _96.url;
                    _34(_11);
                    return
                }
                _11 = {
                    isMinimized: false,
                    appUrlBase: _68,
                    websiteId: _55,
                    filters: _96,
                    minDate: _258,
                    filteredViews: _236
                };
                if (_72 && _72.view) {
                    _11.selectedFilteredView = _72.view;
                    delete _72.view
                }
                if (_72) {
                    Object.keys(_72).forEach(function(_30) {
                        var _10 = _72[_30];
                        if (_10 instanceof Date) _10 = _110(_10);
                        _11.filters[_30] = _10
                    })
                }
                if (_107 && _107[1] !== '1') _11.filters.maptype = _107[1];
                else if (_162[2]) _11.filters.maptype = _162[2];
                _34(_11);
                _0.name = 'mf_liveHeatmaps'
            }

            function _211() {
                _11.devices = [_11.filters.device];
                _11.mapType = _11.filters.maptype;
                _11.url = _101._109()
            }

            function _257(_163, _93) {
                if (!_163) return;
                var _170 = 0;

                function _191() {
                    if (_170 >= _163.length) {
                        _93();
                        return
                    }
                    var _122 = _163[_170];
                    _249(_122);
                    _170++;
                    var _171 = document.createElement('script');
                    _171.src = _68 + _122;
                    _171.onload = _191;
                    _63.appendChild(_171)
                }
                _191()
            }

            function _195() {
                return _4._124(_0.localStorage.getItem(_157))
            }

            function _34(_11) {
                if (_14) _14('Live heatmaps saving settings');
                _11 = _11 ? _4._126(_11) : '';
                _0.localStorage.setItem(_157, _11)
            }

            function _115() {
                if (_14) _14('Live heatmaps removing settings');
                _0.localStorage.removeItem(_157)
            }

            function _104(_28, _235) {
                var _169 = _94.filter(function(_252) {
                    return _252._28 === _28
                })[0];
                if (!_235 && _169) _94.splice(_94.indexOf(_169), 1);
                return _169
            }

            function _245(_29) {
                if (typeof _29 !== 'object') return;
                _11 = _195();
                var _96 = _210();
                Object.keys(_29).forEach(function(_30) {
                    var _10 = _29[_30];
                    if (_10 instanceof Date) _10 = _110(_10);
                    _11.filters[_30] = _10 || undefined
                });
                Object.keys(_96).forEach(function(_30) {
                    if (!_11.filters[_30]) _11.filters[_30] = _96[_30]
                });
                if (_11.filters.view) {
                    _11.selectedFilteredView = _11.filters.view;
                    delete _11.filters.view
                }
                _34(_11)
            }

            function _210() {
                var _80 = new Date();
                _80 = new Date(_80.getFullYear(), _80.getMonth(), _80.getDate());
                var _172 = new Date(_80);
                _172.setDate(_172.getDate() - 29);
                return {
                    maptype: 'click',
                    device: 'desktop',
                    url: _101._109(),
                    fromdate: _110(_172),
                    todate: _110(_80)
                }
            }

            function _154(_52) {
                _0.opener.postMessage(_52, '*');
                _14('Sent ' + _52.message + (_52.requestUrl ? ', request URL: ' + _52.requestUrl : ''))
            }

            function _250(_52) {
                if (_52.message && _52.message.indexOf('MouseflowLiveHeatmaps_') === 0) _14('Received ' + _52.message + (_52.requestUrl ? ', request URL: ' + _52.requestUrl : ''))
            }

            function _249(_122) {
                _14('Live heatmaps loading script: ' + _122)
            }

            function _110(_167) {
                return _167.getFullYear() + '-' + _224(_167.getMonth() + 1, '00') + '-' + _224(_167.getDate(), '00')
            }

            function _224(_246, _226) {
                return (_226 + _246).slice(-_226.length)
            }
            this._65 = _65;
            this._61 = _61;
            this._190 = function(_29) {
                _245(_29);
                if (_108) {
                    _0.postMessage('{"mfCommand":"MouseflowHeatmap_UpdateHeatmap"}', '*')
                } else {
                    _211();
                    var message = {
                        mfCommand: 'settings_change',
                        value: {
                            settings: _11,
                            reloadData: _29.maptype ? false : true
                        }
                    };
                    _0.postMessage(JSON.stringify(message), '*')
                }
                _14('Sent postmessage updateheatmap')
            };
            _0.mouseflowHeatmap = {
                streamData: function(_28, _152, _51, _71) {
                    _94.push({
                        _28: _28,
                        _152: _152 || function() {},
                        _51: _51 || function() {},
                        _71: _71 || function() {}
                    });
                    _154({
                        message: 'MouseflowLiveHeatmaps_StreamData',
                        requestUrl: _28
                    })
                },
                getData: function(_28, _51, _71) {
                    _94.push({
                        _28: _28,
                        _51: _51 || function() {},
                        _71: _71 || function() {}
                    });
                    _154({
                        message: 'MouseflowLiveHeatmaps_RequestData',
                        requestUrl: _28
                    })
                }
            }
        }

        function _281(_0, _56, _36, _4, _12, _9) {
            var _8 = _0.document,
                _68, _55, _14, _2, _63, _7, _197, _215, _216, _59, _43, _118, _60, _201, _76, _92, _91, _57, _49, _129;

            function _65(_239, _161, _143, _156, _165, _160) {
                _68 = _239;
                _55 = _161;
                _14 = _160;
                _2 = _312() || {
                    _53: false,
                    _37: 'exclude',
                    _23: _143 || [],
                    _25: _156 || [],
                    _38: _165 || []
                };
                _14('Starting privacy tool');
                _63 = _56._111();
                if (!_63) {
                    _14('Privacy tool not initiated - could not create root HTML element');
                    return
                }
                _259();
                _36._62(function() {
                    _237();
                    _34(_2)
                }, 1000);
            }

            function _61() {
                _247();
                _56._155()
            }

            function _259() {
                _12._16(_0, 'message', function(event) {
                    switch (event.data.message) {
                        case 'MouseflowPrivacyTool_Hello':
                            _14('Privacy tool API ready');
                            _91 = event.source;
                            if (event.data.cssSelectorBlacklist) {
                                _2._23 = event.data.cssSelectorBlacklist;
                                _2._25 = event.data.cssSelectorWhitelist;
                                _2._38 = event.data.cssSelectorTracked
                            }
                            _204();
                            break;
                        case 'MouseflowPrivacyTool_Save_Success':
                            _14('Successfully saved CSS lists');
                            if (_57) _57();
                            _57 = undefined;
                            _49 = undefined;
                            break;
                        case 'MouseflowPrivacyTool_Save_Failed':
                            _14('Failed saving CSS lists');
                            if (_49) _49();
                            _57 = undefined;
                            _49 = undefined;
                            _136('Uh oh! We couldn\'t save your changes.<br><br>' + 'Please refresh the page and try again.');
                            break;
                        case 'MouseflowPrivacyTool_Unauthorized':
                            _14('Privacy tool API logged out - cannot save');
                            if (_49) _49();
                            _57 = undefined;
                            _49 = undefined;
                            _136('Uh oh! We couldn\'t save your changes.<br><br>' + 'Please log into Mouseflow and try again.');
                            break
                    }
                });
                if (_0.opener) {
                    _14('Loading privacy tool API using window.opener');
                    _0.opener.postMessage({
                        message: 'MouseflowPrivacyTool_Hello'
                    }, '*')
                }
                _36._62(function() {
                    if (!_91) {
                        _14('Loading privacy tool API using iframe');
                        var _102 = _8.createElement('iframe');
                        _102.style.width = '0px';
                        _102.style.height = '0px';
                        _102.style.display = 'none';
                        _102.src = _68 + '/websites/' + _55 + '/privacytool';
                        _63.appendChild(_102);
                        _36._62(function() {
                            if (!_91) {
                                _14('Loading privacy tool API timed out');
                                _303('We\'re having trouble loading the Privacy Tool on this page. Please try ' + 'refreshing the page or logging in to Mouseflow and reloading the Privacy Tool from there.<br><br>' + 'If you need help, please don\'t hesitate to reach out to us at:  <a class="green" href="mailto:support@mouseflow.com">support@mouseflow.com</a>')
                            }
                        }, 5000)
                    }
                }, 2000)
            }

            function _237() {
                _7 = _301(_2);
                _197 = _7.querySelector('.tool-exclude output');
                _215 = _7.querySelector('.tool-whitelist output');
                _216 = _7.querySelector('.tool-track output');
                _59 = _7.querySelector('.tool-status-text');
                _43 = _7.querySelector('.btn-widget');
                _118 = _7.querySelector('.tool-loading h2');
                _2._23.forEach(_212);
                _2._25.forEach(_214);
                _2._38.forEach(_209);
                _63.appendChild(_7);
                _60 = _300();
                _7.appendChild(_60);
                _4._99(_8.body, 'mf-privacy-tool-opened', !_2._53);
                _238();
                _204()
            }

            function _204() {
                if (_7 && _91) {
                    _4._15(_7, 'is-loading');
                    _46();
                    _240();
                    _128()
                }
            }

            function _142() {
                _115();
                _61();
                _0.close()
            }

            function _238() {
                _12._16(_7, 'click', '.mf-tool-close', _142, {
                    _40: true
                })
            }

            function _240() {
                _12._16(_7, 'click', '.mf-tool-toggle', _248, {
                    _40: true
                });
                _12._16(_7, 'click', '.mf-tool-close', _142, {
                    _40: true
                });
                _12._16(_7, 'click', '.mf-tool-exclude', _251, {
                    _40: true
                });
                _12._16(_7, 'click', '.mf-tool-whitelist', _253, {
                    _40: true
                });
                _12._16(_7, 'click', '.mf-tool-track', _254, {
                    _40: true
                });
                _12._16(_7, 'click', '.highlight-excluded', _255, {
                    _40: true
                });
                _12._16(_7, 'click', '.highlight-whitelisted', _256, {
                    _40: true
                });
                _12._16(_7, 'click', '.highlight-tracked', _234, {
                    _40: true
                });
                _12._16(_7, 'click', '.mf-remove-excluded', _229, {
                    _40: true
                });
                _12._16(_7, 'click', '.mf-remove-whitelisted', _232, {
                    _40: true
                });
                _12._16(_7, 'click', '.mf-remove-tracked', _228, {
                    _40: true
                });
                _12._16(_7, 'submit', _233, {
                    _40: true
                });
                _12._16(_8, 'mouseover', _273, {
                    _35: true
                });
                _12._16(_8, 'mouseleave', _261, {
                    _35: true
                });
                _12._16(_8, 'mouseup', _311, {
                    _35: true
                });
                _12._16(_8, 'mouseenter', _67, {
                    _35: true
                });
                _12._16(_8, 'mousemove', _67, {
                    _35: true
                });
                _12._16(_8, 'mousedown', _67, {
                    _35: true
                });
                _12._16(_8, 'click', _67, {
                    _35: true
                });
                _12._16(_8, 'mouseout', _67, {
                    _35: true
                });
                _12._16(_8, 'scroll', _46, {
                    _35: true,
                    _140: true
                });
                _12._16(_0, 'resize', _46, {
                    _35: true,
                    _140: true
                });
                var MutationObserver = _0.MutationObserver || _0.WebKitMutationObserver || _0.MozMutationObserver;
                if (MutationObserver) {
                    _92 = new MutationObserver(function(_219) {
                        var _244 = _219.some(function(_54) {
                            if (_54.target.nodeType !== 1 || _4._27(_54.target, '#mouseflow *')) return false;
                            var _241 = _54.oldValue && _54.oldValue.indexOf('mf-highlight') !== -1;
                            var _242 = _54.target.className && _54.target.className.indexOf('mf-highlight') !== -1;
                            var _243 = _241 || _242;
                            if (_54.type === 'attributes' && _54.attributeName === 'class' && _243) return false;
                            return true
                        });
                        if (_244) _46();
                        _219.forEach(function(_54) {
                            _54.addedNodes.forEach(function(_138) {
                                if (!_138.shadowRoot) return;
                                _92.observe(_138.shadowRoot, {
                                    childList: true,
                                    subtree: true
                                });
                                _128(_138)
                            })
                        })
                    });
                    _92.observe(_8, {
                        attributes: true,
                        childList: true,
                        characterData: true,
                        subtree: true,
                        attributeOldValue: true
                    })
                }
            }

            function _247() {
                _12._275();
                if (_92) _92.disconnect()
            }

            function _128(_73) {
                if (!_129) _129 = _323();
                if (!_73) _73 = _8;
                for (var _89 = _73.firstChild; _89; _89 = _89.nextSibling) {
                    _128(_89);
                    var _64 = _89.shadowRoot;
                    if (!_64) continue;
                    _128(_64);
                    if (_64.adoptedStyleSheets) {
                        if (_64.adoptedStyleSheets.indexOf(_129) > -1) continue;
                        var _220 = Array.prototype.slice.call(_64.adoptedStyleSheets);
                        _220.push(_129);
                        _64.adoptedStyleSheets = _220
                    } else {
                        if (_64.querySelector('.mf-privacy-tool-style')) continue;
                        var _42 = _8.createElement('style');
                        _42.type = 'text/css';
                        _42.innerHTML = _141();
                        _42.className = 'mf-privacy-tool-style';
                        _64.appendChild(_42)
                    }
                }
            }

            function _248() {
                _2._53 = !_2._53;
                _34(_2);
                _4._99(_7, 'tool-closed', _2._53);
                _4._99(_8.body, 'mf-privacy-tool-opened', !_2._53);
                var _123 = _7.getElementsByClassName('step')[0];
                var _116 = _7.getElementsByClassName('tool-container')[0];
                if (_2._53) {
                    _4._15(_123, 'fade-out');
                    _4._20(_123, 'fade-in');
                    _4._15(_116, 'fade-in');
                    _4._20(_116, 'fade-out')
                } else {
                    _4._15(_123, 'fade-in');
                    _4._20(_123, 'fade-out');
                    _4._15(_116, 'fade-out');
                    _4._20(_116, 'fade-in')
                }
            }

            function _251() {
                _2._37 = 'exclude';
                _34(_2);
                _4._15(_7.getElementsByClassName('mf-tool-whitelist')[0], 'active');
                _4._15(_7.getElementsByClassName('tool-whitelist')[0], 'active');
                _4._15(_7.getElementsByClassName('mf-tool-track')[0], 'active');
                _4._15(_7.getElementsByClassName('tool-track')[0], 'active');
                _4._20(_7.getElementsByClassName('mf-tool-exclude')[0], 'active');
                _4._20(_7.getElementsByClassName('tool-exclude')[0], 'active')
            }

            function _253() {
                _2._37 = 'whitelist';
                _34(_2);
                _4._15(_7.getElementsByClassName('mf-tool-exclude')[0], 'active');
                _4._15(_7.getElementsByClassName('tool-exclude')[0], 'active');
                _4._15(_7.getElementsByClassName('mf-tool-track')[0], 'active');
                _4._15(_7.getElementsByClassName('tool-track')[0], 'active');
                _4._20(_7.getElementsByClassName('mf-tool-whitelist')[0], 'active');
                _4._20(_7.getElementsByClassName('tool-whitelist')[0], 'active')
            }

            function _254() {
                _2._37 = 'track';
                _34(_2);
                _4._15(_7.getElementsByClassName('mf-tool-exclude')[0], 'active');
                _4._15(_7.getElementsByClassName('tool-exclude')[0], 'active');
                _4._15(_7.getElementsByClassName('mf-tool-whitelist')[0], 'active');
                _4._15(_7.getElementsByClassName('tool-whitelist')[0], 'active');
                _4._20(_7.getElementsByClassName('mf-tool-track')[0], 'active');
                _4._20(_7.getElementsByClassName('tool-track')[0], 'active')
            }

            function _255(_6) {
                if (_2._37 === 'exclude') {
                    _225(_6.target.getAttribute('data-target'));
                    _46()
                }
            }

            function _256(_6) {
                if (_2._37 === 'whitelist') {
                    _223(_6.target.getAttribute('data-target'));
                    _46()
                }
            }

            function _234(_6) {
                if (_2._37 === 'track') {
                    _217(_6.target.getAttribute('data-target'));
                    _46()
                }
            }

            function _229(_6) {
                _225(_6.target.parentNode.getAttribute('data-target'));
                _46()
            }

            function _232(_6) {
                _223(_6.target.parentNode.getAttribute('data-target'));
                _46()
            }

            function _228(_6) {
                _217(_6.target.parentNode.getAttribute('data-target'));
                _46()
            }

            function _233() {
                _305();
                _310(_2._23, _2._25, _2._38, function() {
                    _186();
                    _43.innerHTML = 'Saved';
                    _115();
                    _36._62(_142, 500)
                }, function() {
                    _186()
                })
            }

            function _273(_6) {
                _36._145(_201);
                var _198 = _8.getElementsByClassName('mf-highlight');
                for (var _3 = 0; _3 < _198.length; _3++) {
                    _4._15(_198[_3], 'mf-highlight')
                }
                _4._20(_60, 'hidden');
                if (_67(_6) || _207(_6.target)) return;
                _4._20(_6.target, 'mf-highlight');
                _201 = _36._62(function() {
                    var _21 = _6.target.getBoundingClientRect();
                    _60.style.left = _21.left + _0.pageXOffset + 'px';
                    _60.style.top = _21.top + _0.pageYOffset + 'px';
                    _60.style.width = _21.width + 'px';
                    _60.style.height = _21.height + 'px';
                    _4._15(_60, 'hidden')
                }, 75)
            }

            function _261(_6) {
                if (_67(_6)) return;
                if (_6.target === _8) {
                    _4._20(_60, 'hidden')
                }
            }

            function _311(_6) {
                if (_67(_6)) return;
                if (_6.button !== 0 || _207(_6.target)) return;
                _4._15(_6.target, 'mf-highlight');
                var _1 = _308(_6.target);
                if (_2._37 === 'exclude') {
                    _212(_1)
                } else if (_2._37 === 'whitelist') {
                    _214(_1)
                } else {
                    _209(_1)
                }
                _46()
            }

            function _67(_6) {
                if (_2._53 || _6.target.nodeType !== 1 || _4._27(_6.target, '#mouseflow *')) return true;
                _6.preventDefault();
                _6.stopPropagation();
                return false
            }

            function _207(_5) {
                return _5 === _8.body || _4._27(_5, 'html') || (_2._37 === 'whitelist' && (!/INPUT|TEXTAREA/.test(_5.tagName) || /checkbox|radio|button|submit/.test(_5.type)))
            }

            function _209(_1) {
                if (_1 && _2._38.indexOf(_1) === -1) {
                    _2._38.unshift(_1);
                    _34(_2)
                }
                _81()
            }

            function _212(_1) {
                if (_1 && _2._23.indexOf(_1) === -1) {
                    _2._23.unshift(_1);
                    _34(_2)
                }
                _81()
            }

            function _214(_1) {
                if (_1 && _2._25.indexOf(_1) === -1) {
                    _2._25.unshift(_1);
                    _34(_2)
                }
                _81()
            }

            function _225(_1) {
                if (_1 && _2._23.indexOf(_1) !== -1) {
                    _2._23 = _2._23.filter(function(_98) {
                        return _98 !== _1
                    });
                    _34(_2)
                }
                _81()
            }

            function _223(_1) {
                if (_1 && _2._25.indexOf(_1) !== -1) {
                    _2._25 = _2._25.filter(function(_98) {
                        return _98 !== _1
                    });
                    _34(_2)
                }
                _81()
            }

            function _217(_1) {
                if (_1 && _2._38.indexOf(_1) !== -1) {
                    _2._38 = _2._38.filter(function(_98) {
                        return _98 !== _1
                    });
                    _34(_2)
                }
                _81()
            }

            function _46() {
                _36._145(_76);
                if (!_76) {
                    _36._62(function() {
                        if (_76) {
                            _36._145(_76);
                            _176();
                            _76 = undefined
                        }
                    }, 200)
                }
                _76 = _36._62(function() {
                    _176();
                    _76 = undefined
                }, 100)
            }

            function _176() {
                var _187 = _7.querySelectorAll('.highlight-excluded,.highlight-whitelisted,.highlight-tracked'),
                    _3;
                for (_3 = 0; _3 < _187.length; _3++) {
                    _7.removeChild(_187[_3])
                }
                _2._23.forEach(function(_1) {
                    var _44 = _106(_1, _8);
                    for (_3 = 0; _3 < _44.length; _3++) {
                        _7.appendChild(_297(_1, _44[_3].getBoundingClientRect()))
                    }
                });
                _2._25.forEach(function(_1) {
                    var _44 = _106(_1, _8);
                    for (_3 = 0; _3 < _44.length; _3++) {
                        _7.appendChild(_298(_1, _44[_3].getBoundingClientRect()))
                    }
                });
                _2._38.forEach(function(_1) {
                    var _44 = _106(_1, _8);
                    for (_3 = 0; _3 < _44.length; _3++) {
                        _7.appendChild(_304(_1, _44[_3].getBoundingClientRect()))
                    }
                })
            }

            function _106(_1, _18) {
                try {
                    var _44 = [];
                    _1.split(',').forEach(function(_1) {
                        var _19 = _1.split(' > :document-fragment: > ', 1);
                        _18.querySelectorAll(_19[0]).forEach(function(_5) {
                            if (_19[1] && _5.shadowRoot) {
                                _106(_19[1], _5.shadowRoot).forEach(function(_5) {
                                    _44.push(_5)
                                })
                            } else {
                                _44.push(_5)
                            }
                        })
                    });
                    return _44
                } catch (_328) {
                    _14('Could not get element from selector: ' + ex.message)
                }
            }

            function _310(_23, _25, _38, _51, _309) {
                if (_57) {
                    _14('Attempted to save CSS lists while previous save was in progress');
                    return
                }
                _57 = _51;
                _49 = _309;
                _302();
                _91.postMessage({
                    message: 'MouseflowPrivacyTool_Save',
                    blacklist: _23,
                    whitelist: _25,
                    tracked: _38
                }, '*');
                _36._62(function() {
                    if (_57 === _51) {
                        _14('Saving CSS lists timed out');
                        if (_49) _49();
                        _57 = undefined;
                        _49 = undefined;
                        _136('Uh oh! We couldn\'t save your changes.<br><br>' + 'Please log into Mouseflow and try again.')
                    }
                }, 7500)
            }

            function _308(_5) {
                if (_5 == null) return null;
                try {
                    var _90 = [];
                    while (_5) {
                        var _18 = _5.getRootNode ? _5.getRootNode() : _8;
                        var _1 = _193(_5, _18);
                        _90.unshift(_1);
                        _5 = _18.host
                    }
                    return _90.join(' > :document-fragment: > ')
                } catch (ex) {
                    _14('Could not get element selector: ' + ex.message);
                    return null
                }
            }

            function _332(_5, _18) {
                var _88 = _307(_5, _18);
                if (!_88) return null;
                if (_4._27(_5, _88)) return _88;
                var _56 = _18.querySelector(_88);
                var _48 = _5;
                var _19 = [];
                while (_48 && _48 !== _56) {
                    var _17 = _131(_48, _18);
                    if (_17.length === 0) _17.push(_189(_48));
                    _19.unshift(_17);
                    _48 = _48.parentNode
                }
                _19.unshift(_88);
                return _134(_19, _18)
            }

            function _193(_5, _18, _19) {
                if (!_19) _19 = [];
                var _17 = _131(_5, _18);
                _19.unshift(_17);
                var _1 = _134(_19, _18);
                if (_1) return _1;
                if (_17.length === 0) {
                    _17.push(_189(_5));
                    _1 = _134(_19, _18);
                    if (_1) return _1
                }
                return _193(_5.parentNode, _18, _19)
            }

            function _134(_19, _18) {
                var _133 = _19.length > 1 ? _306.apply(this, _19) : _19[0];
                for (var _3 = 0; _3 < _133.length; _3++) {
                    if (_18.querySelectorAll(_133[_3]).length === 1) return _133[_3]
                }
                return null
            }

            function _307(_5, _18) {
                var _48 = _5;
                while (_48) {
                    var _17 = _131(_48, _18);
                    for (var _3 = 0; _3 < _17.length; _3++) {
                        if (_18.querySelectorAll(_17[_3]).length === 1) return _17[_3]
                    }
                    _48 = _48.parentNode
                }
                return null
            }

            function _131(_5, _18) {
                if (_5 === _8.body) return ['body'];
                var _17 = [];
                var _73 = _5.parentNode;
                var _3;
                var _90 = _5.getAttribute('id');
                var _1 = '#' + _4._69(_90);
                if (_90 && _18.querySelectorAll(_1).length === 1 && !_4._153(_5, 'data-mf-ignore-child-ids') && _9.useIdSelectors) return [_1];
                var _87 = _5.getAttribute('name');
                _1 = '[name="' + _4._69(_87) + '"]';
                if (_87) {
                    if (_18.querySelectorAll(_1).length === 1) return [_1];
                    if (_73.querySelectorAll(_1).length === 1) _17.push(_1)
                }
                var _47 = _4._83(_5);
                for (_3 = 0; _3 < _47.length; _3++) {
                    _1 = '.' + _4._69(_47[_3]);
                    if (_18.querySelectorAll(_1).length === 1) return [_1];
                    if (_73.querySelectorAll(_1).length === 1) _17.push(_1)
                }
                for (_3 = 0; _3 < _47.length; _3++) {
                    _1 = _4._69(_5.tagName.toLowerCase()) + '.' + _4._69(_47[_3]);
                    if (_18.querySelectorAll(_1).length === 1) return [_1];
                    if (_73.querySelectorAll(_1).length === 1) _17.push(_1)
                }
                return _17
            }

            function _189(_5) {
                var _1 = _4._69(_5.tagName.toLowerCase());
                if (_5.parentNode.querySelectorAll(_1).length === 1) return _1;
                var _188 = 0;
                var _125 = _5;
                while (_125) {
                    if (_125.tagName === _5.tagName) _188++;
                    _125 = _125.previousElementSibling
                }
                _1 += ':nth-of-type(' + _188 + ')';
                return _1
            }

            function _306() {
                var _17, _84, _85, _3;
                var _103 = 0;
                var _70 = arguments.length - 1;
                var _119 = false;
                var _97 = true;
                while (_103 < _70) {
                    _84 = undefined;
                    for (_3 = 0; _3 <= _103; _3++) {
                        _84 = _84 ? _114(_84, arguments[_3], ' > ') : arguments[_3]
                    }
                    _85 = undefined;
                    for (_3 = arguments.length - 1; _3 >= _70; _3--) {
                        _85 = _85 ? _114(arguments[_3], _85, ' > ') : arguments[_3]
                    }
                    var _113 = (_103 + 1) == _70 ? ' > ' : ' ';
                    _17 = _17 ? _17.concat(_114(_84, _85, _113)) : _114(_84, _85, _113);
                    if (_97 && _119) {
                        _70--;
                        _119 = false;
                        _97 = true
                    } else if (_97) {
                        _70--;
                        _119 = true;
                        _97 = false
                    } else {
                        _103++;
                        if (_103 != _70) _70++;
                        _119 = true;
                        _97 = true
                    }
                }
                return _17
            }

            function _114(_194, _179, _113) {
                var _17 = [];
                for (var _3 = 0; _3 < _194.length; _3++) {
                    for (var _132 = 0; _132 < _179.length; _132++) {
                        _17.push(_194[_3] + _113 + _179[_132])
                    }
                }
                return _17
            }

            function _312() {
                var _10 = _0.localStorage.getItem('mf_privacyTool');
                return _10 ? _4._124(_10) : null
            }

            function _34(_11) {
                _11 = _11 ? _4._126(_11) : '';
                _0.localStorage.setItem('mf_privacyTool', _11)
            }

            function _115() {
                _0.localStorage.removeItem('mf_privacyTool')
            }

            function _305() {
                _43.setAttribute('disabled', '');
                _43.setAttribute('original-html', _43.innerHTML);
                _43.innerHTML = '<i>&bull;</i> <i>&bull;</i> <i>&bull;</i> <i>&bull;</i>';
                _4._20(_43, 'loading')
            }

            function _186() {
                _4._15(_43, 'loading');
                _43.innerHTML = _43.getAttribute('original-html');
                _43.removeAttribute('original-html');
                _43.removeAttribute('disabled')
            }

            function _81() {
                _197.innerHTML = _326(_2._23);
                _215.innerHTML = _325(_2._25);
                _216.innerHTML = _324(_2._38);
                _59.innerHTML = _139(_2._23, _2._25, _2._38);
                _4._15(_59, 'red')
            }

            function _303(_137) {
                if (!_118) return;
                _118.innerHTML = _137;
                _4._20(_118, 'red')
            }

            function _136(_137) {
                if (!_59) return;
                _59.innerHTML = _137;
                _4._20(_59, 'red')
            }

            function _302() {
                if (!_59) return;
                _59.innerHTML = _139(_2._23, _2._25, _2._38);
                _4._15(_59, 'red')
            }

            function _301(_2) {
                var _13 = _8.createElement('div');
                _13.className = 'privacy-tool is-loading';
                _13.innerHTML = _260(_2);
                if (_2._53) _13.className += ' tool-closed';
                var _42 = _8.createElement('style');
                _42.type = 'text/css';
                _42.innerHTML = _141();
                _13.appendChild(_42);
                return _13
            }

            function _300() {
                var _13 = _8.createElement('div');
                _13.className = 'highlight-box';
                return _13
            }

            function _297(_1, _21) {
                var _13 = _8.createElement('div');
                _13.className = 'highlight-box highlight-excluded';
                _13.setAttribute('data-target', _1);
                _13.style.left = _21.left + _0.pageXOffset + 'px';
                _13.style.top = _21.top + _0.pageYOffset + 'px';
                _13.style.width = _21.width + 'px';
                _13.style.height = _21.height + 'px';
                return _13
            }

            function _298(_1, _21) {
                var _13 = _8.createElement('div');
                _13.className = 'highlight-box highlight-whitelisted';
                _13.setAttribute('data-target', _1);
                _13.style.left = _21.left + _0.pageXOffset + 'px';
                _13.style.top = _21.top + _0.pageYOffset + 'px';
                _13.style.width = _21.width + 'px';
                _13.style.height = _21.height + 'px';
                return _13
            }

            function _304(_1, _21) {
                var _13 = _8.createElement('div');
                _13.className = 'highlight-box highlight-tracked';
                _13.setAttribute('data-target', _1);
                _13.style.left = _21.left + _0.pageXOffset + 'px';
                _13.style.top = _21.top + _0.pageYOffset + 'px';
                _13.style.width = _21.width + 'px';
                _13.style.height = _21.height + 'px';
                return _13
            }

            function _260(_2) {
                return ('<form action="#" id="mf_privacy_tool">' + _317(_2) + _315(_2) + '</form>')
            }

            function _317(_2) {
                return ('<div class="step step-block' + (_2._53 ? ' fade-in' : '') + '">' + '<div class="widget-header">' + '<div class="widget-text">Open Privacy Tool</div>' + '<div class="widget-toggle">' + '<a href="#" class="btn-arrow btn-arrow--up mf-tool-toggle"></a>' + '</div>' + '</div>' + '</div>')
            }

            function _315() {
                return ('<div class="tool-container' + (_2._53 ? '' : ' fade-in') + '">' + '<div class="tool-header">' + '<img class="logo" alt="Mouseflow" src="https://mouseflow.com/static/img/logo-light.png">' + '<div class="tool-toggle">' + '<div class="tool-toggle-text">' + 'Hide to navigate' + '</div>' + '<div class="tool-toggle-icon">' + '<a href="#" class="btn-arrow btn-arrow--down mf-tool-toggle"></a>' + '</div>' + '</div>' + '<div class="tool-close">' + '<div class="tool-toggle-text">' + 'Close' + '</div>' + '<div class="tool-toggle-icon">' + '<a href="#" class="btn-cross mf-tool-close"></a>' + '</div>' + '</div>' + '</div>' + '<div class="tool-content">' + '<ul class="tool-menu">' + '<li class="tool-menu-item mf-tool-exclude' + (_2._37 === 'exclude' ? ' active' : '') + '">' + 'Excluded content' + '</li>' + '<li class="tool-menu-item mf-tool-whitelist' + (_2._37 === 'whitelist' ? ' active' : '') + '">' + 'Whitelisted fields' + '</li>' + '<li class="tool-menu-item mf-tool-track' + (_2._37 === 'track' ? ' active' : '') + '">' + 'Tracked elements' + '</li>' + '</ul>' + '<div class="tool-exclude' + (_2._37 === 'exclude' ? ' active' : '') + '">' + '<h2>Exclude content from appearing in Mouseflow</h2>' + '<p>' + 'To get started, just click the element(s) or content you wish to exclude. ' + 'This will add the necessary CSS selectors to be blocked in the list below.' + '</p>' + '<p>' + 'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' + '</p>' + '<p>' + 'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' + '</p>' + '<h3>Excluded content:</h3>' + '<div>' + '<output></output>' + '</div>' + '</div>' + '<div class="tool-whitelist' + (_2._37 === 'whitelist' ? ' active' : '') + '">' + '<h2>Whitelist input fields</h2>' + '<p>' + 'You can whitelist any input field or text area, simply by clicking the field(s) on the page. ' + 'This will let Mouseflow record input in that field.' + '</p>' + '<p>' + 'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' + '</p>' + '<p>' + 'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' + '</p>' + '<h3>Whitelisted fields:</h3>' + '<div>' + '<output></output>' + '</div>' + '</div>' + '<div class="tool-track' + (_2._37 === 'track' ? ' active' : '') + '">' + '<h2>Tracked elements</h2>' + '<p>' + 'When viewing a heatmap, most of your links will include a box that shows additional metrics(clicks, hovers, etc.).In some cases, these boxes will not appear.' + '</p>' + '<p>' + 'If you\'ve found such an element, you can select it here. That will ensure the additional metrics are shown in your heatmaps.' + '</p>' + '<p>' + 'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' + '</p>' + '<p>' + 'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' + '</p>' + '<h3>Tracked elements:</h3>' + '<div>' + '<output></output>' + '</div>' + '</div>' + '<div class="tool-status">' + '<div class="tool-status-text">' + _139(_2._23, _2._25, _2._38) + '</div>' + '<div class="tool-status-buttons">' + '<button type="submit" class="btn-widget">Save and close</button>' + '<a href="#" class="green bold mf-tool-close">Close Privacy Tool</a>' + '</div>' + '</div>' + '<div class="tool-loading">' + '<h2 class="loading">Loading the Privacy Tool<i>.</i><i>.</i><i>.</i></h2>' + '</div>' + '<div class="tool-message">' + '<h3>Browser window is to small to load the Privacy Tool</h3>' + '<p>To use Mouseflow\'s Privacy Tool, you need to view the page in a larger browser window.</p>' + '</div>' + '</div>' + '</div>')
            }

            function _326(_19) {
                return _19.map(function(_1) {
                    return ('<div class="tm-tag" data-target="' + _4._66(_1) + '">' + _4._66(_1) + '<a href="#" class="btn-cross mf-remove-excluded"></a>' + '</div>')
                }).join('')
            }

            function _325(_19) {
                return _19.map(function(_1) {
                    return ('<div class="tm-tag" data-target="' + _4._66(_1) + '">' + _4._66(_1) + '<a href="#" class="btn-cross mf-remove-whitelisted"></a>' + '</div>')
                }).join('')
            }

            function _324(_19) {
                return _19.map(function(_1) {
                    return ('<div class="tm-tag" data-target="' + _4._66(_1) + '">' + _4._66(_1) + '<a href="#" class="btn-cross mf-remove-tracked"></a>' + '</div>')
                }).join('')
            }

            function _139(_23, _25, _213) {
                return '<p>You have:</p>' + '<p>' + '&nbsp;&bull; excluded <i class="green"> ' + _23.length + '</i> ' + (_23.length === 1 ? 'element' : 'elements') + '<br>' + '&nbsp;&bull; whitelisted <i class="green">' + _25.length + '</i> input ' + (_25.length === 1 ? 'field' : 'fields') + '<br>' + '&nbsp;&bull; tracked <i class="green">' + _213.length + '</i> input ' + (_213.length === 1 ? 'element' : 'elements') + '</p>'
            }

            function _323() {
                var _208 = new CSSStyleSheet();
                _208.replace(_141());
                return _208
            }

            function _141() {
                return ('.mf-highlight {' + 'cursor: pointer !important;' + '}' + '.mf-privacy-tool-opened iframe {' + 'pointer-events: none;' + '}' + '#mouseflow .highlight-box {' + 'background-color: #add8e6;' + 'border: 2px dotted #808080;' + 'position: absolute;' + 'border-radius: 2px;' + 'z-index: 2147483646;' + 'cursor: pointer;' + 'pointer-events: none;' + 'opacity: 0.5;' + '-webkit-transition: opacity .075s linear;' + 'transition: opacity .075s linear;' + '}' + '#mouseflow .highlight-box.hidden,' + '#mouseflow .tool-closed .highlight-box {' + 'opacity: 0;' + '}' + '#mouseflow .highlight-box.highlight-excluded {' + 'background-color: #ffb6c1;' + 'pointer-events: initial;' + '}' + '#mouseflow .highlight-box.highlight-whitelisted {' + 'background-color: #90ee90;' + 'pointer-events: initial;' + '}' + '#mouseflow .highlight-box.highlight-tracked {' + 'background-color: orange;' + 'pointer-events: initial;' + '}' + '#mouseflow .tool-closed .highlight-box.highlight-excluded,' + '#mouseflow .tool-closed .highlight-box.highlight-whitelisted,' + '#mouseflow .tool-closed .highlight-box.highlight-tracked {' + 'pointer-events: none;' + '}' + '#mouseflow .widget-header,' + '#mouseflow .btn-widget {' + 'background: #4cb377;' + '}' + '#mouseflow .widget-text,' + '#mouseflow .btn-widget,' + '#mouseflow .btn-arrow,' + '#mouseflow .btn-cross {' + 'color: #fff;' + '}' + '#mouseflow .tm-tag {' + 'margin: 7px 7px 0 0;' + 'padding: 7px;' + 'display: inline-block;' + 'border-radius: 3px;' + 'background-color: #a7a7a7;' + 'color: white;' + 'font-size: 13px;' + '}' + '#mouseflow .step {' + 'visibility: hidden;' + 'opacity: 0;' + 'position: fixed;' + 'bottom: 30px;' + 'right: 30px;' + 'z-index: 2147483647;' + 'width: 300px;' + 'border-radius: 10px;' + 'box-shadow: 0 0 15px rgba(0, 0, 0, .35);' + 'overflow: hidden;' + '}' + '#mouseflow a:hover {' + 'text-decoration: underline;' + '}' + '#mouseflow h2 {' + 'font-size: 21px;' + 'font-weight: 700;' + 'line-height: 1.4em;' + 'margin-bottom: 6px;' + '}' + '#mouseflow h3 {' + 'font-size: 16px;' + 'font-weight: 700;' + 'line-height: 1.4em;' + '}' + '#mouseflow p {' + 'margin-bottom: 8px;' + 'line-height: 1.4em;' + '}' + '#mouseflow .green {' + 'color: #47b475;' + '}' + '#mouseflow .red {' + 'color: #ea1e1e;' + '}' + '#mouseflow .bold {' + 'font-weight: 700;' + '}' + '#mouseflow .tool-container {' + 'visibility: visible;' + 'opacity: 0;' + 'position: fixed;' + 'bottom: 0;' + 'left: 0;' + 'width: 100%;' + 'height: 350px;' + 'max-height: 40%;' + 'overflow: hidden;' + 'background-color: white;' + 'border-top: 2px solid #37312f;' + 'z-index: 2147483647;' + '}' + '#mouseflow .tool-header {' + 'background-color: #47403e;' + 'height: 58px;' + '}' + '#mouseflow .logo {' + 'display: inline;' + 'height: 40px;' + 'margin: 9px 10px;' + '}' + '#mouseflow .tool-toggle,' + '#mouseflow .tool-close {' + 'float: right;' + 'padding: 18px 24px;' + '}' + '#mouseflow .is-loading .tool-close {' + 'display: block;' + '}' + '#mouseflow .is-loading .tool-toggle,' + '#mouseflow .tool-close {' + 'display: none;' + '}' + '#mouseflow .tool-toggle-text {' + 'display: inline-block;' + 'color: white;' + 'font-size: 18px;' + '}' + '#mouseflow .tool-toggle-icon {' + 'width: 30px;' + 'display: inline-block;' + 'position: relative;' + 'top: 2px;' + '}' + '#mouseflow .tool-close .tool-toggle-icon {' + 'top: 4px;' + '}' + '#mouseflow .tool-content {' + 'height: calc(100% - 58px);' + '}' + '#mouseflow .tool-menu {' + 'width: 15%;' + 'height: 100%;' + 'float: left;' + '}' + '#mouseflow .tool-menu-item {' + 'background-color: #f8f8f8;' + 'color: black;' + 'cursor: pointer;' + 'height: 40px;' + 'padding: 12px;' + '}' + '#mouseflow .tool-menu-item.active {' + 'position: relative;' + 'background-color: #4db378;' + 'color: white;' + 'cursor: default;' + '}' + '#mouseflow .tool-menu-item.active:after {' + 'display: block;' + 'border: solid transparent;' + 'content: " ";' + 'position: absolute;' + 'pointer-events: none;' + 'border-left-color: #4db378;' + 'border-width: 20px;' + 'top: 0;' + 'right: -40px;' + '}' + '#mouseflow .tool-menu-item:not(.active):hover {' + 'background-color: #e4e4e4' + '}' + '#mouseflow .tool-exclude,' + '#mouseflow .tool-whitelist,' + '#mouseflow .tool-track {' + 'display: none;' + 'width: 70%;' + 'height: 100%;' + 'float: left;' + 'color: rgb(71, 64, 62);' + 'overflow-y: auto;' + 'overflow-x: hidden;' + 'padding: 10px 40px;' + '}' + '#mouseflow .tool-exclude.active,' + '#mouseflow .tool-whitelist.active,' + '#mouseflow .tool-track.active {' + 'display: block;' + '}' + '#mouseflow .tool-exclude::-webkit-scrollbar,' + '#mouseflow .tool-whitelist::-webkit-scrollbar,' + '#mouseflow .tool-track::-webkit-scrollbar {' + 'width: 8px;' + '}' + '#mouseflow .tool-exclude::-webkit-scrollbar-track,' + '#mouseflow .tool-whitelist::-webkit-scrollbar-track,' + '#mouseflow .tool-track::-webkit-scrollbar-track {' + 'border-radius: 10px;' + 'background-color: #F5F5F5;' + '-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);' + '}' + '#mouseflow .tool-exclude::-webkit-scrollbar-thumb,' + '#mouseflow .tool-whitelist::-webkit-scrollbar-thumb,' + '#mouseflow .tool-track::-webkit-scrollbar-thumb {' + 'border-radius: 10px;' + 'background-color: #a7a7a7;' + '-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);' + '}' + '#mouseflow .tool-status {' + 'width: 15%;' + 'background-color: #f8f8f8;' + 'height: 100%;' + 'float: left;' + 'position: relative;' + '}' + '#mouseflow .tool-status-text {' + 'font-size: 16px;' + 'font-weight: 700;' + 'text-align: left;' + 'padding: 0 15px;' + 'position: absolute;' + 'top: 40px;' + '}' + '#mouseflow .tool-status-buttons {' + 'width: 100%;' + 'text-align: center;' + 'position: absolute;' + 'padding: 0 30px;' + 'bottom: 40px;' + '}' + '#mouseflow .tool-loading {' + 'width: 100%;' + 'height: calc(100% - 58px);' + 'background-color: white;' + 'color: rgb(71, 64, 62);' + 'position: absolute;' + 'top: 58px;' + 'z-index: 2;' + 'visibility: hidden;' + 'opacity: 0;' + '-webkit-animation: fadeOut .3s linear;' + 'animation: fadeOut .3s linear;' + '}' + '#mouseflow .is-loading .tool-loading {' + 'visibility: visible;' + 'opacity: 1;' + '-webkit-animation: fadeIn .3s linear;' + 'animation: fadeIn .3s linear;' + '}' + '#mouseflow .tool-loading h2 {' + 'position: absolute;' + 'left: 50%;' + 'top: 50%;' + '-webkit-transform: translate(-50%, -50%);' + '-ms-transform: translate(-50%, -50%);' + 'transform: translate(-50%, -50%);' + '}' + '#mouseflow .widget-header {' + 'color: #fff;' + 'padding: 12px 15px;' + 'vertical-align: middle;' + 'overflow: hidden;' + 'position: relative;' + 'z-index: 1;' + '}' + '#mouseflow .widget-header:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: 0;' + 'left: 0;' + 'right: 0;' + 'bottom: 0;' + 'background: rgba(0, 0, 0, .3);' + 'opacity: 0;' + 'z-index: -1;' + '-webkit-transition: opacity .3s linear;' + 'transition: opacity .3s linear;' + '}' + '#mouseflow .widget-header:hover:before {' + 'opacity: 1;' + '}' + '#mouseflow .widget-text {' + 'font-size: 16px;' + 'line-height: 20px;' + 'width: 245px;' + 'display: inline-block;' + 'vertical-align: middle;' + '}' + '#mouseflow .widget-toggle {' + 'width: 20px;' + 'display: inline-block;' + 'vertical-align: middle;' + 'margin: 0;' + '}' + '#mouseflow .btn-arrow,' + '#mouseflow .btn-cross {' + 'float: right;' + 'z-index: 10;' + 'line-height: .5;' + '}' + '#mouseflow .tool-toggle-icon .btn-arrow,' + '#mouseflow .tool-toggle-icon .btn-cross {' + 'font-size: 34px;' + '}' + '#mouseflow .widget-toggle .btn-arrow {' + 'font-size: 25px;' + '}' + '#mouseflow .tm-tag .btn-cross {' + 'margin: 3px 0 0 7px;' + 'font-weight: 700;' + 'color: #4e4e4e;' + 'font-size: 18px;' + '}' + '#mouseflow .widget-toggle .btn-arrow:hover {' + 'text-shadow: -3px 0 2px rgba(0, 0, 0, .5);' + '}' + '#mouseflow .tm-tag .btn-cross:hover {' + 'color: #c66;' + '}' + '#mouseflow .btn-arrow--up {' + '-webkit-transform: rotate(-90deg) scale(1.5, 1.5);' + '-ms-transform: rotate(-90deg) scale(1.5, 1.5);' + 'transform: rotate(-90deg) scale(1.5, 1.5);' + '}' + '#mouseflow .btn-arrow--down {' + '-webkit-transform: rotate(+90deg) scale(1.5, 1.5);' + '-ms-transform: rotate(+90deg) scale(1.5, 1.5);' + 'transform: rotate(+90deg) scale(1.5, 1.5);' + '}' + '#mouseflow .widget-toggle .btn-arrow:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: -185px;' + 'left: -15px;' + 'right: -15px;' + 'bottom: -15px;' + 'display: block;' + '}' + '#mouseflow .tool-toggle-icon .btn-arrow:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: -10px;' + 'left: -15px;' + 'right: -15px;' + 'bottom: -100px;' + 'display: block;' + '}' + '#mouseflow .tool-toggle-icon .btn-cross:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: -25px;' + 'left: -150px;' + 'right: -20px;' + 'bottom: -20px;' + 'display: block;' + '}' + '#mouseflow .btn-arrow:after {' + 'content: "\\203a";' + 'display: inline;' + '}' + '#mouseflow .btn-cross:after {' + 'content: "\\00d7";' + 'display: inline;' + '}' + '#mouseflow .btn-arrow:hover,' + '#mouseflow .btn-cross:hover {' + 'text-decoration: none;' + '}' + '#mouseflow .btn-widget {' + 'width: 100%;' + 'height: 38px;' + 'border: none;' + 'border-radius: 6px;' + 'overflow: hidden;' + 'position: relative;' + 'z-index: 1;' + 'cursor: pointer;' + 'display: block;' + 'padding: 10px;' + 'font-size: 16px;' + 'font-family: inherit;' + 'font-weight: bold;' + 'text-align: center;' + 'outline: none;' + 'margin-bottom: 10px;' + '}' + '#mouseflow .btn-widget:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: 0;' + 'left: 0;' + 'right: 0;' + 'bottom: 0;' + 'background: rgba(0, 0, 0, .3);' + 'opacity: 0;' + 'z-index: -1;' + '-webkit-transition: opacity .3s linear;' + 'transition: opacity .3s linear;' + '}' + '#mouseflow .btn-widget:hover {' + 'text-decoration: none;' + '}' + '#mouseflow .btn-widget:hover:before {' + 'opacity: 1;' + '}' + '#mouseflow .privacy-tool {' + 'height: 350px;' + 'max-height: 40%;' + '-webkit-transition: height .5s ease-out;' + 'transition: height .5s ease-out;' + '}' + '#mouseflow .privacy-tool.tool-closed {' + 'height: 0;' + '}' + '#mouseflow .tool-closed .step {' + 'visibility: visible;' + '}' + '#mouseflow .tool-closed .tool-container {' + 'visibility: hidden;' + '}' + '#mouseflow .step.fade-in,' + '#mouseflow .tool-container.fade-in {' + '-webkit-animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;' + 'animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;' + '}' + '#mouseflow .step.fade-out,' + '#mouseflow .tool-container.fade-out {' + '-webkit-animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);' + 'animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);' + '}' + '#mouseflow .btn-widget.loading {' + 'cursor: default;' + '}' + '#mouseflow .btn-widget.loading:before {' + 'display: none;' + '}' + '#mouseflow .loading i {' + 'animation-name: blink;' + 'animation-duration: 1.4s;' + 'animation-iteration-count: infinite;' + 'animation-fill-mode: both;' + '}' + '#mouseflow .loading i:nth-child(2) {' + 'animation-delay: .2s;' + '}' + '#mouseflow .loading i:nth-child(3) {' + 'animation-delay: .4s;' + '}' + '#mouseflow .loading i:nth-child(4) {' + 'animation-delay: .6s;' + '}' + '#mouseflow .tool-message {' + 'width: 100%;' + 'height: calc(100% - 58px);' + 'background-color: white;' + 'color: rgb(71, 64, 62);' + 'position: absolute;' + 'top: 58px;' + 'z-index: 3;' + 'padding: 20px;' + 'overflow-y: auto;' + 'overflow-x: hidden;' + 'visibility: hidden;' + 'opacity: 0;' + '-webkit-animation: fadeOut .3s linear;' + 'animation: fadeOut .3s linear;' + '}' + '#mouseflow .tool-message h3 {' + 'margin-bottom: 20px;' + '}' + '@media (max-width: 1300px) {' + '#mouseflow .tool-exclude,' + '#mouseflow .tool-whitelist,' + '#mouseflow .tool-track {' + 'width: 60%;' + '}' + '#mouseflow .tool-status {' + 'width: 25%;' + '}' + '#mouseflow .tool-status-buttons {' + 'bottom: 10px;' + '}' + '}' + '@media (max-width: 850px) {' + '#mouseflow .tool-menu-item {' + 'height: 56px;' + '}' + '#mouseflow .tool-menu-item.active:after {' + 'border-width: 28px;' + 'top: 0px;' + 'right: -56px;' + '}' + '#mouseflow .tool-status-text {' + 'font-size: 14px;' + '}' + '#mouseflow .btn-widget {' + 'font-size: 12px;' + '}' + '#mouseflow a.mf-tool-close {' + 'font-size: 12px;' + '}' + '}' + '@media (max-height: 800px) {' + '#mouseflow .tool-status-text {' + 'top: 20px;' + '}' + '#mouseflow .tool-status-buttons {' + 'bottom: 20px;' + '}' + '}' + '@media (max-height: 650px) {' + '#mouseflow .tool-status-text {' + 'font-size: 14px;' + '}' + '}' + '@media (max-width: 650px), (max-height: 600px) {' + '#mouseflow .tool-message {' + 'visibility: visible;' + 'opacity: 1;' + '-webkit-animation: fadeIn .3s linear;' + 'animation: fadeIn .3s linear;' + '}' + '}' + '@-webkit-keyframes fadeUpIn {' + '0% {' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '100% {' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '}' + '@keyframes fadeUpIn {' + '0% {' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '100% {' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '}' + '@-webkit-keyframes fadeDownOut {' + '0% {' + 'visibility: visible;' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '}' + '@keyframes fadeDownOut {' + '0% {' + 'visibility: visible;' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '}' + '@-webkit-keyframes fadeIn {' + '0% {' + 'visibility: visible;' + 'opacity: 0;' + '}' + '100% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '}' + '@keyframes fadeIn {' + '0% {' + 'visibility: visible;' + 'opacity: 0;' + '}' + '100% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '}' + '@-webkit-keyframes fadeOut {' + '0% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + 'opacity: 0;' + '}' + '}' + '@keyframes fadeOut {' + '0% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + 'opacity: 0;' + '}' + '}' + '@keyframes blink {' + '0% {' + 'opacity: .2;' + '}' + '20% {' + 'opacity: 1;' + '}' + '100% {' + 'opacity: .2;' + '}' + '}')
            }
            this._65 = _65;
            this._61 = _61
        }

        function _287(_9, _168, _173) {
            function _109() {
                var _26 = (_9.path || _9.location.pathname + (_9.includeHashInPath ? _9.location.hash : '')).toLowerCase();
                var _79 = _9.location.search.toLowerCase();
                if (_26 !== '/' && _26.slice(-1) === '/') _26 = _26.slice(0, -1);
                return _327(_26) || _26 + _322(_79)
            }

            function _327(_26) {
                return _168.filter(function(_22) {
                    return _318(_26, _22)
                }).map(function(_22) {
                    return _316(_26, _22)
                })[0]
            }

            function _322(_79) {
                if (_79[0] === '?') _79 = _79.slice(1);
                var _78;
                var _135 = [];
                var _319 = /([^&=]+)=?([^&]*)/g;
                while (_78 = _319.exec(_79)) {
                    var _50 = _173.indexOf(_78[1]);
                    if (_78[2] && _50 > -1) _135[_50] = _78[0]
                }
                return _135.length ? '?' + _135.filter(hasValue).join('&') : ''
            }

            function _318(_26, _22) {
                var _205 = _26.indexOf('?');
                if (_205 > -1) _26 = _26.slice(0, _205);
                switch (_22._320) {
                    case 'equals':
                        return _26 === _22._10.toLowerCase();
                    case 'startsWith':
                        return _26.substr(0, _22._10.length) === _22._10;
                    case 'endsWith':
                        return _26.substr(-_22._10.length) === _22._10;
                    case 'regex':
                        return new RegExp(_22._10).test(_26);
                    default:
                        return false
                }
            }

            function _316(_26, _22) {
                if (_22._321) return _22._321;
                switch (_22._320) {
                    case 'startsWith':
                        return _22._10 + '*';
                    case 'endsWith':
                        return '*' + _22._10;
                    default:
                        return _22._10
                }
            }

            function hasValue(value) {
                return value
            }
            this._109 = _109
        }

        function _294(_4) {
            var _166 = [];
            var _295 = ['target', 'originalEvent', 'button', 'pageX', 'pageY', 'which', 'data', 'origin', 'source'];

            function _277(_39, _77, _33, _164, _29) {
                var _35 = !!_29._35;
                var _174 = function(_6) {
                    var _100 = [];
                    if (_6.composedPath && (_6.target.shadowRoot || _33)) _100 = _6.composedPath();
                    var _200 = _6;
                    _6 = _299(_6);
                    _6.preventDefault = function() {
                        _200.preventDefault()
                    };
                    _6.stopPropagation = function() {
                        _200.stopPropagation()
                    };
                    if (_6.target.shadowRoot && _100.length) _6.target = _100[0];
                    if (_33) {
                        _6.delegatedTarget = _202(function(_86, _3) {
                            return _100.length ? _100[_3] : (_86 ? _86.parentNode : _6.target)
                        }, _33);
                        if (!_6.delegatedTarget && !_29._329) return;
                        if (_29._140 && _6.target !== _6.delegatedTarget) return
                    } else if (_29._140 && _6.target !== _39) {
                        return
                    }
                    if (_29._40) _6.preventDefault();
                    if (_29._339) _6.stopPropagation();
                    _164.apply(this, arguments)
                };
                _39.addEventListener(_77, _174, {
                    capture: _35
                });
                _166.push({
                    _39: _39,
                    _77: _77,
                    _164: _174,
                    _35: _35
                })
            }

            function _299(_6) {
                var _199 = {};
                _295.forEach(function(_30) {
                    if (_6[_30] != undefined) _199[_30] = _6[_30]
                });
                return _199
            }

            function _274() {
                _166.forEach(function(_12) {
                    _12._39.removeEventListener(_12._77, _12._164, {
                        capture: _12._35
                    })
                });
                _166 = []
            }

            function _202(_203, _33, _39, _50) {
                if (!_50) _50 = 0;
                _39 = _203(_39, _50);
                if (!_39 || !_33) return null;
                if (_4._27(_39, _33)) return _39;
                return _202(_203, _33, _39, ++_50)
            }
            this._16 = function(_39, _77, _33, _93, _29) {
                if (typeof _33 === 'function') {
                    _29 = _93;
                    _93 = _33;
                    _33 = null
                }
                _277(_39, _77, _33, _93, _29 || {})
            };
            this._275 = _274
        }

        function _296(_0, _150, _151) {
            var _75 = _0.location;

            function _227(_28) {
                var _27 = (_28 || '').match(/^(([^:]+:)?\/?\/?(([^:\/\?#]+)?:?(\d+)?))(\/.*?)?(\?.*?)?(#.*)?$/);
                return {
                    href: _27[0] || '',
                    origin: _27[1] || '',
                    protocol: _27[2] || '',
                    host: _27[3] || '',
                    hostname: _27[4] || '',
                    port: _27[5] || '',
                    pathname: _27[6] || '',
                    search: _27[7] || '',
                    hash: _27[8] || ''
                }
            }

            function _271() {
                try {
                    _0.localStorage.setItem('mf_supportsLocalStorage', '1');
                    var _272 = _0.localStorage.getItem('mf_supportsLocalStorage') === '1';
                    _0.localStorage.removeItem('mf_supportsLocalStorage');
                    return _272
                } catch (e) {
                    return false
                }
            }
            this.debug = _0.mouseflowDebug || _75.search.indexOf('mf_debug=1') !== -1;
            this.includeDebugTime = false;
            this.forceStart = _75.search.indexOf('mf_force=1') !== -1;
            this.autoStart = _0.mouseflowAutoStart !== false && _75.search.indexOf('mf_autostart=0') === -1;
            this.enableBots = false;
            this.touchEvents = !_0.mouseflowDisableTouch;
            this.htmlDelay = _0.mouseflowHtmlDelay || 1000;
            this.newPageViewHtmlDelay = _0.mouseflowNewPageViewHtmlDelay || 500;
            this.compress = _0.mouseflowCompress !== false && _75.search.indexOf('mf_compress=0') === -1;
            this.autoTagging = _0.mouseflowAutoTagging !== false;
            this.path = _0.mouseflowPath;
            this.crossDomainSupport = !!_0.mouseflowCrossDomainSupport;
            this.location = _227(_0.mouseflowHref || _75.href);
            this.htmlFetchMode = _0.mouseflowHtmlFetchMode || 'post';
            this.sessionId = _0.mouseflowSessionId;
            this.honorDoNotTrack = _0.mouseflowHonorDoNotTrack || _151;
            this.gdprEnabled = _0.mouseflowForceGdpr || _150;
            this.keyLogging = !_0.mouseflowDisableKeyLogging && !this.gdprEnabled;
            this.domReuse = !_0.mouseflowDisableDomReuse;
            this.domDeduplicator = !_0.mouseflowDisableDomDeduplicator;
            this.includeSubDomains = !_0.mouseflowExcludeSubDomains;
            this.registerSubmitTimeout = _0.mouseflowRegisterSubmitTimeout || 2000;
            this.useUnload = !!_0.mouseflowUseUnload;
            this.replaceLastFormValues = _0.mouseflowReplaceLastFormValues || !this.keyLogging || this.gdprEnabled;
            this.useAllHoverSelectors = !!_0.mouseflowUseAllHoverSelectors;
            this.enableCssRecording = !!_0.mouseflowEnableCssRecording;
            this.secureCookie = !!_0.mouseflowSecureCookie;
            this.enableSpa = true;
            this.includeHashInPath = false;
            this.autoTagPayments = true;
            this.preferStorageApi = !!_0.mouseflowPreferStorageApi;
            this.domMutationDetectorEnable = _0.domMutationDetectorEnable !== undefined ? _0.domMutationDetectorEnable : false;
            this.domMutationUseParentNode = _0.domMutationUseParentNode !== undefined ? _0.domMutationUseParentNode : true;
            this.domMutationUsePreviousSibling = _0.domMutationUsePreviousSibling !== undefined ? _0.domMutationUsePreviousSibling : false;
            this.domMutationCountThreshold = _0.domMutationCountThreshold !== undefined ? _0.domMutationCountThreshold : 20;
            this.domMutationTimeThresholdInSeconds = _0.domMutationTimeThresholdInSeconds !== undefined ? _0.domMutationTimeThresholdInSeconds : 10;
            this.liveHeatmapsEnabled = false;
            this.privacyToolEnabled = false;
            this.useIdSelectors = _0.mouseflowUseIdSelectors !== undefined ? _0.mouseflowUseIdSelectors : true;
            this.proxyAttachShadow = true;
            this._270 = function() {
                if (!!_0.opener && _75.search.indexOf('mf_liveHeatmaps') !== -1) {
                    this.liveHeatmapsEnabled = true;
                    return
                }
                if (_75.search.indexOf('mf_inspect') !== -1) {
                    this.privacyToolEnabled = true;
                    return
                }
                if (!!_0.opener && (typeof _0.name === 'string' && _0.name.indexOf('mf_liveHeatmaps') === 0)) {
                    this.liveHeatmapsEnabled = true;
                    return
                }
                if (_0.name === 'mf_privacyTool') {
                    this.privacyToolEnabled = true;
                    return
                }
                if (!_271()) return;
                if (_0.opener) {
                    if (_0.localStorage.getItem('mf_privacyTool')) this.privacyToolEnabled = true;
                    else if (_0.localStorage.getItem('mf_liveHeatmaps')) this.liveHeatmapsEnabled = true
                }
            };
            this._270();
            this._335 = function() {
                this._192('href', window.location.href);
                this.path = undefined
            };
            this._192 = function(_30, _10) {
                switch (_30) {
                    case 'href':
                        this.location = _227(_10);
                        break;
                    case 'keyLogging':
                        this.keyLogging = this.keyLogging && _10;
                        break;
                    case 'gdprEnabled':
                        this.gdprEnabled = this.gdprEnabled || _10;
                        break;
                    case '_cssSelectorBlackList':
                        break;
                    case '_cssSelectorWhiteList':
                        break;
                    case '_cssSelectorTracked':
                        break;
                    case '_websiteId':
                        break;
                    default:
                        this[_30] = _10;
                        break
                }
            }
        }

        function _290(_0) {
            var _8 = _0.document,
                _74;

            function _111() {
                if (_8.body && !_74) {
                    _74 = _276();
                    _8.body.appendChild(_74)
                }
                return _74
            }

            function _155() {
                if (_74) {
                    _8.body.removeChild(_74);
                    _74 = undefined
                }
            }

            function _276() {
                var _13 = _8.createElement('div');
                _13.id = 'mouseflow';
                var _42 = _8.createElement('style');
                _42.type = 'text/css';
                _42.innerHTML = _267();
                var _146 = _8.createElement('div');
                _146.className = 'load-font';
                _146.innerHTML = 'load font';
                _13.appendChild(_42);
                _13.appendChild(_146);
                return _13
            }

            function _267() {
                return ('@font-face {' + 'font-family: "Droid Sans";' + 'font-style: normal;' + 'font-weight: 400;' + 'src: local("Droid Sans Regular"), local("DroidSans-Regular"), url(https://fonts.gstatic.com/s/droidsans/v8/s-BiyweUPV0v-yRb-cjciPk_vArhqVIZ0nv9q090hN8.woff2) format("woff2");' + 'unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;' + '}' + '#mouseflow :before, #mouseflow :after {' + 'display: none;' + '}' + '#mouseflow,' + '#mouseflow * {' + 'background: transparent;' + 'border: 0;' + 'border-image-outset: 0s;' + 'border-image-repeat: stretch;' + 'border-image-slice: 100%;' + 'border-image-source: none;' + 'border-image-width: 1;' + 'border-color: #000;' + 'border-radius: 0;' + 'border-width: 0;' + 'border-style: none;' + 'box-sizing: border-box;' + 'clip: auto;' + 'float: none;' + 'color: inherit;' + 'font-family: inherit;' + 'font-size: inherit;' + 'font-style: inherit;' + 'font-weight: inherit;' + 'width: auto;' + 'height: auto;' + 'min-width: auto;' + 'min-height: auto;' + 'max-width: auto;' + 'max-height: auto;' + 'letter-spacing: normal;' + 'line-height: normal;' + 'margin: 0;' + 'padding: 0;' + 'text-decoration: none;' + 'text-indent: 0;' + 'text-transform: none;' + 'vertical-align: baseline;' + 'text-align: left;' + 'overflow: visible;' + 'top: auto;' + 'right: auto;' + 'bottom: auto;' + 'left: auto;' + '-webkit-transition: none;' + 'transition: none;' + '}' + '#mouseflow {' + 'font: 400 14px/1.4 "Droid Sans", Helvetica, Arial, sans-serif;' + 'color: #666;' + '}' + '#mouseflow .load-font {' + 'position: absolute;' + 'visibility: hidden;' + 'width: 0px;' + 'height: 0px;' + 'overflow: hidden;' + '}')
            }
            this._111 = _111;
            this._155 = _155
        }

        function _289(_0) {
            this._62 = function() {
                return _130('setTimeout').apply(_0, arguments)
            };
            this._336 = function() {
                return _130('setInterval').apply(_0, arguments)
            };
            this._145 = function() {
                _130('clearTimeout').apply(_0, arguments)
            };
            this._337 = function() {
                _130('clearInterval').apply(_0, arguments)
            };

            function _130(_87) {
                var _221;
                if (_0.Zone && _0.Zone.__symbol__) _221 = _0[_0.Zone.__symbol__(_87)];
                return _221 || _0[_87]
            }
        }

        function _288(_0, _117, _159) {
            var _8 = _0.document;

            function _144(_5, _31) {
                var _47 = _5.classList;
                if (_47 && _31) return _47.contains(_31);
                var _58 = _83(_5);
                return _58.indexOf(_31) !== -1
            }

            function _20(_5, _31) {
                var _47 = _5.classList;
                if (_47 && _31) {
                    _5.classList.add(_31);
                    return
                }
                var _58 = _83(_5);
                if (_58.indexOf(_31) === -1) _58.push(_31);
                _5.className = _58.join(' ')
            }

            function _15(_5, _31) {
                var _47 = _5.classList;
                if (_47 && _31) {
                    _5.classList.remove(_31);
                    return
                }
                var _58 = _83(_5);
                var _50 = _58.indexOf(_31);
                if (_50 !== -1) _58.splice(_50, 1);
                _5.className = _58.join(' ')
            }

            function _99(_5, _31, _147) {
                if (_147 === undefined) _147 = !_144(_5, _31);
                if (_147) {
                    _20(_5, _31)
                } else {
                    _15(_5, _31)
                }
            }

            function _83(_5) {
                var _222 = typeof _5.className === 'string' ? _5.className.replace(/\s+/g, ' ').trim() : '';
                return _222 !== '' ? _222.split(' ') : []
            }

            function _182() {
                return _117.max((_8.body || {}).scrollHeight || 0, (_8.body || {}).offsetHeight || 0, _8.documentElement.scrollHeight || 0, _8.documentElement.offsetHeight || 0, _8.documentElement.clientHeight || 0)
            }

            function _33(_121, _266) {
                var _41 = [];
                if (!_121) return _41;
                for (var _3 = 0; _3 < _121.length; _3++) {
                    if (_266(_121[_3], _3)) _41.push(_121[_3])
                }
                return _41
            }

            function _183(_95) {
                var _120 = _95.length;
                while (_120) {
                    var _3 = _117.floor(_117.random() * _120--);
                    var _265 = _95[_120];
                    _95[_120] = _95[_3];
                    _95[_3] = _265
                }
            }

            function _66(_24) {
                if (!_24) return _24;
                return _24.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            }

            function _148(_24) {
                if (!_24) return _24;
                return _24.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            }

            function _149(url) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(url.trim())
            }

            function _184(_24) {
                return _24.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, function(_78, _264, _28) {
                    _28 = _148(_28);
                    return _149(_28) ? '<a href="' + _28 + '" target="_blank">' + _264 + '</a>' : _78
                })
            }

            function _69(_10) {
                if (!_10) return _10;
                return _10.replace(/([^a-zA-Z\d-_])/g, '\\$1').replace(/^(-)?(\d)/, '$1\\3$2 ')
            }

            function _124(_10) {
                return _10 ? _159.parse(_10) : undefined
            }

            function _126(_10) {
                var _41;
                if (Array.prototype.toJSON) {
                    var _263 = Array.prototype.toJSON;
                    delete Array.prototype.toJSON;
                    _41 = _159.stringify(_10);
                    Array.prototype.toJSON = _263
                } else if (_10) {
                    _41 = _159.stringify(_10)
                }
                return _41
            }

            function _185(_268, _278) {
                var _82 = _127(_268);
                var _24 = _127(_278);
                var _286 = _117.max(_82.length, _24.length);
                if (_24 == 'NaN' || _82 == 'NaN') {
                    return false
                }
                for (var _3 = 0; _3 < _286; _3++) {
                    _82[_3] = _82[_3] || 0;
                    _24[_3] = _24[_3] || 0;
                    if (_82[_3] == _24[_3]) {
                        continue
                    }
                    return _82[_3] > _24[_3]
                }
                return true
            }

            function _127(_279) {
                var _178 = _279.split('.');
                var _177 = [];
                for (var _3 = 0; _3 < _178.length; _3++) {
                    _177.push(parseInt(_178[_3]))
                }
                return _177
            }

            function _181(_24, _292) {
                var _41 = _24;
                while (_41[_41.length - 1] === (_292 || ' ')) _41 = _41.slice(0, -1);
                return _41
            }

            function _27(_5, _1) {
                if (_5.nodeType !== 1) return false;
                if (_5.msMatchesSelector) return _5.msMatchesSelector(_1);
                if (_5.matches) return _5.matches(_1);
                return false
            }

            function _153(_86, _291) {
                return _86.parentNode && _86.parentNode.hasAttribute && _86.parentNode.hasAttribute(_291)
            }
            this._144 = _144;
            this._20 = _20;
            this._15 = _15;
            this._99 = _99;
            this._83 = _83;
            this._182 = _182;
            this._33 = _33;
            this._183 = _183;
            this._66 = _66;
            this._148 = _148;
            this._149 = _149;
            this._184 = _184;
            this._69 = _69;
            this._124 = _124;
            this._126 = _126;
            this._185 = _185;
            this._127 = _127;
            this._181 = _181;
            this._27 = _27;
            this._153 = _153
        }
        var _56 = new _290(window);
        var _36 = new _289(window);
        var _4 = new _288(window, Math, JSON);
        var _12 = new _294(_4);
        var _101 = new _287(_9, _168, _173);
        var _175 = (typeof _285 === 'function') ? new _285(_9, _4) : {
            _334: function() {}
        };
        var _293 = (typeof _284 === 'function') ? new _284(window, _9, _56, _36, _4, _175, _12) : {
            _65: function() {},
            _61: function() {},
            _333: function() {},
            _338: function() {},
            _331: function() {}
        };
        var _262 = (typeof _283 === 'function') ? new _283(_9) : {
            _330: function() {}
        };

        function _14(_282, _105) {
            _105 = (typeof _105 !== 'undefined' ? _105 : '');
            if (_9.debug) console.log('MF' + (_9.includeDebugTime ? ' - ' + _105 : '') + ': ' + _282)
        }
        var _218 = new _281(window, _56, _36, _4, _12, _9);
        var _112 = new _280(window, _9, _56, _4, _12, _101);

        function _45() {
            return undefined
        }

        function _206() {
            return null
        }

        function _196() {
            return false
        }
        var shouldRecord = false;
        if (_9.privacyToolEnabled) {
            _218._65(_68, _9._55, _9._143, _9._156, _9._165, _14)
        } else if (_9.liveHeatmapsEnabled) {
            _112._65(_9._55, _14)
        } else if (typeof _313 === 'function') {
            window.mouseflow = new _313(window, Math, _9, _36, _4, _175, _12, _101, _293, _262, _14);
            shouldRecord = true
        }
        if (!shouldRecord) {
            window.mouseflow = {
                start: _45,
                stop: function() {
                    if (_9.privacyToolEnabled) _218._61();
                    else if (_9.liveHeatmapsEnabled) _112._61()
                },
                newPageView: function(_269) {
                    if (_9.liveHeatmapsEnabled) _112._190({
                        url: _269
                    })
                },
                stopSession: _45,
                getSessionId: _206,
                getPageViewId: _206,
                tag: _45,
                star: _45,
                setVariable: _45,
                identify: _45,
                formSubmitAttempt: _45,
                formSubmitSuccess: _45,
                formSubmitFailure: _45,
                addFriction: _45,
                isRecording: _196,
                isReturningUser: _196,
                activateFeedback: _45,
                proxyAttachShadow: _45,
                recordingRate: null,
                version: null
            }
        }
        window.mouseflow.websiteId = _9._55;
        window.mouseflow.gdprEnabled = _9.gdprEnabled;
        window.mouseflow.updateHeatmap = _112._190;
        window.mouseflow.config = function() {
            _9._192.apply(_9, arguments)
        };
        window.mouseflow.debug = function() {
            _9.debug = !_9.debug;
            console.log('MF: Debugging ' + (_9.debug ? 'enabled' : 'disabled'))
        }
    })()
}