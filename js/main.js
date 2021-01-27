$(document).ready(function () {
    // Checking which image will be added to src attribute ↓
    function logoReplace() {
        if ($(window).innerWidth() < 450) {
            $('#main-logo').attr('src', 'imgs/logo.png')
        } else {
            $('#main-logo').attr('src', 'imgs/logoex1.png')
        }
    }
    logoReplace();
    // Checking which class will be added to linkedin social icon
    function linkedinTooltip() {
        if ($(window).innerWidth() < 1169) {
            $('#link-text').addClass('left-tooltip').removeClass('bottom-tooltip');
        } else {
            $('#link-text').addClass('bottom-tooltip').removeClass('left-tooltip');
        }
    }
    linkedinTooltip();
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
    function rocketIcon() {
        if ($(window).innerWidth() > 1215) {
            $('#jump-to-top').css({
                'visibility': 'visible'
            })
        } else {
            $('#jump-to-top').css({
                'visibility': 'hidden'
            })
        }
    }
    rocketIcon();
    // 'click on are to add particles!' message popup ↓
    $(this).on('mousemove', function () {
        if ($('#particles-js:hover').length != 0) {
            $('#particles-info').css({
                'visibility': 'visible'
            })
            $('#particles-info').on('click', function () {
                $(this).remove();
            })
        } else {
            $('#particles-info').css({
                'visibility': 'hidden'
            })
        }
    });
    // All functions on resize ↓
    $(window).on('resize', function () {
        logoReplace();
        linkedinTooltip();
        aboutMeSectionWidth();
        rocketIcon();
    });
    // Burger menu animation ↓
    $('.menu-btn').on('click', function () {
        $(this).toggleClass('open');
        $('.side-menu').toggleClass('side-menu-open');
        $('.side-menu li').toggleClass('side-menu-li-background');
    })
    // Close menu button burger and fade out side menu on nav item click ↓
    $('aside a').on('click', function () {
        $('.menu-btn').removeClass('open');
        $('.side-menu').removeClass('side-menu-open');
        $('.side-menu li').removeClass('side-menu-li-background');
    })
    // fade in fixed small header ↓
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        if ($(this).scrollTop() > 200) {
            $('.small-header').addClass('fixed');
            $('#jump-to-top').css({
                'transform': 'translateY(0)'
            });
        } else {
            $('.small-header').removeClass('fixed');
            $('#jump-to-top').css({
                'transform': 'translateY(100px)'
            });
        }
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
    })
    // Getting current age for info section ↓
    var birth = new Date(1997, 6, 25, 12, 20);
    var age = (new Date() - birth) / 3.154e+10;
    $('#age').html(Math.floor(age));
    // Implementing scroll animation for browsers that don't support CSS's scroll behaviour property
    $("a").on('click', function () {
        var hash = this.hash;
        $('html').animate({
            scrollTop: $(hash).offset().top
        }, 800, 'swing');
    });
});
