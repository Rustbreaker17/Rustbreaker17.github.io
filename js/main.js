$(window).load(function() {
    "use strict";
    setTimeout(function() {
        $('#preloader').velocity({
            opacity: "0",
            complete: function() {
                $("#loading").velocity("transition.shrinkOut", {
                    duration: 1000,
                    easing: [0.7, 0, 0.3, 1],
                });
            }
        });
    }, 1000);
    setTimeout(function() {
        $('#home-wrap').velocity("transition.fadeIn", {
            opacity: "1",
            complete: function() {
                setTimeout(function() {
                    $('.text-intro').each(function(i) {
                        (function(self) {}
                        )(this);
                    });
                }, );
            }
        }, {
            duration: 1000,
            easing: [0.7, 0, 0.3, 1],
        });
    }, 0);
});
$(document).ready(function() {
    "use strict";
    $('#open-more-info').on("click", function() {
        $("#info-wrap").toggleClass("show-info");
        $("#home-wrap").toggleClass("hide-left");
        $(".global-overlay").toggleClass("hide-overlay");
        $("#first-inside").toggleClass("hide-top");
        $("#second-inside").toggleClass("hide-bottom");
        $("#back-side").toggleClass("show-side");
        $(".hide-content").toggleClass("open-hide");
        $("#close-more-info").toggleClass("hide-close");
        $('.command-info-wrap').toggleClass('show-command');
        $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');
        setTimeout(function() {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#info-wrap", {
                scrollInertia: 500,
                callbacks: false
            });
        }, 350);
    });
    $('.to-close').on("click", function() {
        $("#info-wrap").removeClass("show-info");
        $("#home-wrap").removeClass("hide-left");
        $(".global-overlay").removeClass("hide-overlay");
        $("#first-inside").toggleClass("hide-top");
        $("#second-inside").toggleClass("hide-bottom");
        $("#back-side").toggleClass("show-side");
        $(".hide-content").toggleClass("open-hide");
        $("#close-more-info").toggleClass("hide-close");
        $('.command-info-wrap').toggleClass('show-command');
        $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');
        setTimeout(function() {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#info-wrap", {
                scrollInertia: 500,
                callbacks: false
            });
        }, 350);
    });
    $('.expand-player').on("click", function() {
        $('#home-wrap').velocity({
            opacity: "0",
        }, {
            duration: 0,
            easing: [0.7, 0, 0.3, 1],
            delay: 0,
            complete: function() {
                $('.global-overlay').velocity({
                    opacity: "0",
                }, {
                    duration: 0,
                    easing: [0.7, 0, 0.3, 1],
                    delay: 0,
                });
            }
        });
    });
    $('.compress-player').on("click", function() {
        $('#home-wrap').velocity({
            opacity: "1",
        }, {
            duration: 0,
            easing: [0.7, 0, 0.3, 1],
            delay: 0,
            complete: function() {
                $('.global-overlay').velocity({
                    opacity: "1",
                }, {
                    duration: 0,
                    easing: [0.7, 0, 0.3, 1],
                    delay: 0,
                });
            }
        });
    });
    $(function() {
        $('body').bind('mousewheel', function(event) {
            event.preventDefault();
            var scrollTop = this.scrollTop;
            this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
        });
    });
    var ifTouchDevices = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);
    function scrollbar() {
        if (ifTouchDevices) {
            $('body').addClass('scroll-touch');
            $('a#open-more-info').on("click", function() {
                event.preventDefault();
                var target = "#" + this.getAttribute('data-target');
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 500);
            });
        } else {
            $('body').mCustomScrollbar({
                scrollInertia: 150,
                axis: "y",
                callbacks: {
                    whileScrolling: function() {
                        var pos = this.mcs.top;
                        if (pos <= -200) {
                            $('.to-scroll').addClass('hide-scroll');
                        } else {
                            $('.to-scroll').removeClass('hide-scroll');
                        }
                    }
                }
            });
        }
    }
    scrollbar();
    if (window.matchMedia("(min-width: 1025px)").matches) {
        $(function() {
            $("[data-toggle='tooltip']").tooltip();
        });
    }
    $("#notifyMe").notifyMe();
    (function() {
        var dlgtrigger = document.querySelector('[data-dialog]')
          , somedialog = document.getElementById(dlgtrigger.getAttribute('data-dialog'))
          , dlg = new DialogFx(somedialog);
        dlgtrigger.addEventListener('click', dlg.toggle.bind(dlg));
    }
    )();
    var initPhotoSwipeFromDOM = function(gallerySelector) {
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes, numNodes = thumbElements.length, items = [], figureEl, linkEl, size, item;
            for (var i = 0; i < numNodes; i++) {
                figureEl = thumbElements[i];
                if (figureEl.nodeType !== 1) {
                    continue;
                }
                linkEl = figureEl.children[0];
                size = linkEl.getAttribute('data-size').split('x');
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
                if (figureEl.children.length > 1) {
                    item.title = figureEl.children[1].innerHTML;
                }
                if (linkEl.children.length > 0) {
                    item.msrc = linkEl.children[0].getAttribute('src');
                }
                item.el = figureEl;
                items.push(item);
            }
            return items;
        };
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var eTarget = e.target || e.srcElement;
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
            if (!clickedListItem) {
                return;
            }
            var clickedGallery = clickedListItem.parentNode, childNodes = clickedListItem.parentNode.childNodes, numChildNodes = childNodes.length, nodeIndex = 0, index;
            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }
                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            if (index >= 0) {
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1)
              , params = {};
            if (hash.length < 5) {
                return params;
            }
            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }
            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }
            return params;
        };
        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0], gallery, options, items;
            items = parseThumbnailElements(galleryElement);
            options = {
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                getThumbBoundsFn: function(index) {
                    var thumbnail = items[index].el.getElementsByTagName('img')[0]
                      , pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                      , rect = thumbnail.getBoundingClientRect();
                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width
                    };
                }
            };
            if (fromURL) {
                if (options.galleryPIDs) {
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid === index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
            if (isNaN(options.index)) {
                return;
            }
            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }
            gallery = new PhotoSwipe(pswpElement,PhotoSwipeUI_Default,items,options);
            gallery.init();
        };
        var galleryElements = document.querySelectorAll(gallerySelector);
        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };
    initPhotoSwipeFromDOM('.my-gallery');
});
