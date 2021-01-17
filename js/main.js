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
    function linkedinTooltip(){
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
    })
});
