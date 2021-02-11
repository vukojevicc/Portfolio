$(document).ready(function () {
    // sending message via AJAX ↓
    $('form').on('submit', function (event) {
        event.preventDefault();
        var url = $(this).attr('action');
        var method = $(this).attr('method');
        var ime = $(this).find('input[name="ime"]').val();
        var email = $(this).find('input[name="email"]').val();
        var poruka = $(this).find('textarea[name="poruka"]').val();
        var submit = $(this).find('input[name="submit"]').val();
        var wrapper = $(this).find('#error-wrapper');
        wrapper.empty();
        $.ajax({
            "url": url,
            "method": method,
            "dataType": "json",
            "data": {
                "ime": ime,
                "email": email,
                "poruka": poruka,
                "submit": submit
            },
            "success": function (response) {
                wrapper.css({
                    'padding':'10px'
                });
                if(response.success){
                    wrapper.css({
                        'border':'1px solid green',
                        'background-color':'rgba(0, 255, 0, 0.3)'
                    })
                }else{
                    wrapper.css({
                        'border':'1px solid red',
                        'background-color':'rgba(255, 0, 0, 0.3)'
                    })
                }
                for(message in response){
                    wrapper.append(response[message] + '<br>');
                }
            },
            "error": function () {
                alert('error');
            }
        });
    });
    // Setting cookie via AJAX ↓
    
    // Checking which image will be added to src attribute ↓
    function logoReplace() {
        if ($(window).innerWidth() < 450) {
            $('#main-logo').attr('src', 'imgs/logo.png');
        } else {
            $('#main-logo').attr('src', 'imgs/logoex.png');
        }
    }
    logoReplace();
    // Checking which class will be added to lastItem social icon
    function lastItemTooltip() {
        if ($(window).innerWidth() < 1169) {
            $('.small-header a:last-of-type span').addClass('left-tooltip').removeClass('bottom-tooltip');
        } else {
            $('.small-header a:last-of-type span').addClass('bottom-tooltip').removeClass('left-tooltip');
        }
    }
    lastItemTooltip();
    // Checking which width property to asign to about me sections ↓
    function aboutMeSectionWidth() {
        if ($(window).innerWidth() > 900) {
            $('.about-me-section').css({
                'width': 'calc(var(--document-width)/3)',
                'max-width': ''
            });
        } else {
            $('.about-me-section').css({
                'max-width': 'calc(var(--document-width)/3)',
                'width': ''
            })
        }
    }
    aboutMeSectionWidth();
    function fadeInelements() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(700, 1);
                }
            }
        });
    }
    fadeInelements();
    function rocketIconScroll() {
        if ($(window).scrollTop() > 200) {
            $('.small-header').css({
                'display': 'block'
            });
            if ($(window).innerWidth() > 1215) {
                $('.menu-btn').css({
                    'display': 'flex',
                    'position': 'fixed',
                    'top': '70px',
                    'right': '0'
                })
                $('.side-menu').css({
                    'position': 'fixed',
                    'top': '150px'
                })
            }
            $('#jump-to-top').css({
                'transform': 'translateY(0)'
            });
        } else {
            $('.small-header').css({
                'display': 'none'
            });
            $('#jump-to-top').css({
                'transform': 'translateY(100px)'
            });
            $('.menu-btn').removeAttr('style').css({
                'position': 'relative'
            })
            $('.side-menu').css({
                'position': 'absolute',
                'top': '100px'
            });
            $('.menu-btn').removeClass('open');
            $('.side-menu').removeClass('side-menu-open');
        }
    }
    rocketIconScroll();
    function burgerBtnResize() {
        if ($(window).innerWidth() > 1215) {
            if ($(window).scrollTop() > 200) {
                $('.menu-btn').css({
                    'position': 'fixed',
                    'top': '70px',
                    'right': '0'
                });
                $('.side-menu').css({
                    'position': 'fixed',
                    'top': '150px'
                })
            } else {
                $('.menu-btn').css({
                    'position': 'relative'
                });
            }
        } else {
            if ($(window).scrollTop() > 200) {
                $('.menu-btn').css({
                    'position': 'relative'
                });
                $('.side-menu').css({
                    'position': 'absolute'
                });
            }
        }
    }
    burgerBtnResize();
    // All functions on resize ↓
    $(window).on('resize', function () {
        logoReplace();
        lastItemTooltip();
        aboutMeSectionWidth();
        burgerBtnResize();
        rocketIconScroll();
        fadeInelements();
    });
    $(window).scroll(function () {
        rocketIconScroll();
        fadeInelements();
    })
    // Burger menu animation ↓
    $('.menu-btn').on('click', function () {
        $(this).toggleClass('open');
        $('.side-menu').toggleClass('side-menu-open');
    })
    $('html').on('click', function (event) {
        if (!($(event.target).is('.menu-btn, .menu-btn-burger'))) {
            $('.menu-btn').removeClass('open');
            $('.side-menu').removeClass('side-menu-open');
        }
    })
    // Getting current age for info section ↓
    var birth = new Date(1997, 6, 25, 12, 20);
    var age = (new Date() - birth) / 3.154e+10;
    $('#age').html(Math.floor(age));

    // Implementing scroll animation for browsers that don't support CSS's scroll behaviour property with jQuery plugin ↓
    $('.anchor-scroll').anchorScroll({
        scrollSpeed: 800, // scroll speed
        offsetTop: 40, // offset for fixed top bars (defaults to 0)
        onScroll: function () {
            // callback on scroll start
        },
        scrollEnd: function () {
            // callback on scroll end
        }
    });

    // enabling hover effect for cards on mobile devices
    let touch_div = document.getElementsByClassName('card');
    let is_touch_device = false;

    if ("ontouchstart" in document.documentElement) {
        is_touch_device = true;
    }
    for (let i = 0; i < touch_div.length; i++) {
        if (is_touch_device) {
            touch_div[i].addEventListener('touchstart', function () {
                $(this).toggleClass('touch-device-hovered-card');
            });
        } else {
            touch_div[i].addEventListener('mouseenter', function () {
                $(this).addClass('touch-device-hovered-card');
            });
            touch_div[i].addEventListener('mouseleave', function () {
                $(this).removeClass('touch-device-hovered-card');
            });
        }
    }
});
