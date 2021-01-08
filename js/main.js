$(document).ready(function(){
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
});
