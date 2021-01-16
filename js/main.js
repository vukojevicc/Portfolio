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
    // Checking which image will be added to src attribute on resize event ↓
    $(window).on('resize', function () {
        logoReplace();
    });
    // Burger menu animation ↓
    $('.menu-btn').on('click', function () {
        $(this).toggleClass('open');
    })
});
