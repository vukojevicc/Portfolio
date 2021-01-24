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
    });
    // Burger menu animation ↓
    $('.menu-btn').on('click', function () {
        $(this).toggleClass('open');
        $('.side-menu').toggleClass('side-menu-open');
        $('.side-menu li').toggleClass('side-menu-li-background');
    })
    // fade in heading for about me section ↓
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        // fade in fixed small header ↓
        if($(this).scrollTop() > 200){
            $('.small-header').addClass('fixed');
        }else{
            $('.small-header').removeClass('fixed');
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
    var today = new Date();
    var age = (today - birth)/3.154e+10;
    $('#age').html(Math.floor(age));
});
