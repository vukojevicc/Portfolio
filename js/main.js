$(document).ready(function(){
    function zamenaLogoa(){
        if($(window).innerWidth() < 815){
            $('#main-logo').attr('src', 'imgs/logo.png')
        }else{
            $('#main-logo').attr('src', 'imgs/logoex1.png')
        }
    }
    zamenaLogoa();
    $(this).on('mousemove', function(){
        if($('#particles-js:hover').length != 0){
            $('#particles-info').css({
                'visibility': 'visible'
            })
            $('#particles-info').on('click', function(){
                $(this).remove();
            })
        }else{
            $('#particles-info').css({
                'visibility': 'hidden'
            })
        }
});
$(window).on('resize', function(){
    zamenaLogoa();
});
});
