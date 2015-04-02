/**
* Author: David Lee
* 
* Create Date: 03.30.2015
* Description: Main Page Javascript for UBI Web
*
**/

$(function () {
    $(document).ready(function () {
        initApp();
        mainResize();
        mainBnr();
        loginStart();
        topMenu();
    });
});

function initApp() {
    $('.ly_navi').css('visibility', 'visible').slideToggle(0);
    $('.ly_snavi').css('visibility', 'visible').slideToggle(0);
}

function mainResize() {
   $(window).resize(function(){
            var maxWidth = 2560;
            var maxHeight = 498;
            var ratio = 0;
            var width = $(window).width();

            if (width > maxWidth) {
                ratio = maxWidth / width;
                $('#bg').css("width", width);
            }
        }); 
}

/***** Main Banner Start *****/

function mainBnr() {
    $(function () {
        var time = 500;
        var idx = idx2 = 0;
        var slide_width = $(".slider_bnr").width();
        var slide_count = $(".slider_bnr li").size();
        var secs = new Date().getSeconds();
        var idx = secs % slide_count;
        slide();

        /* Main Banner Slider */
        var slider = setInterval(slide, 5000);

        function slide() {
            if (idx == (slide_count - 1)) {
                idx2 = idx;
                idx = 0;
                $(".slider_bnr .selected .pic").fadeOut('3000');
                $(".slider_bnr li:eq(" + idx2 + ")").removeClass('selected').fadeOut('3000');
                $(".slider_bnr li:eq(" + idx + ")").addClass('selected').fadeIn('4000');
                $(".slider_bnr .selected .pic").fadeIn('4000');

            } else {
                idx2 = idx;
                idx = idx + 1;
                $(".slider_bnr .selected .pic").fadeOut('3000');
                $(".slider_bnr li:eq(" + idx2 + ")").removeClass('selected').fadeOut('3000');
                $(".slider_bnr li:eq(" + idx + ")").addClass('selected').fadeIn('4000');
                $(".slider_bnr .selected .pic").fadeIn('4000');
            }
        }
        function abortTimer() {
            clearInterval(slider);
        }

    });
}

function loginStart() {
    /***** Login Window Popup *****/
    $('#loginBtn').click(function () {
        $('.dimmed').css('display', 'block');
        $('.ly_sign').css('display', 'block');
    });


    /***** Login Window close *****/
    $('.ly_sign .btn_close').click(function () {
        $('.dimmed').css('display', 'none');
        $('.ly_sign').css('display', 'none');
    });
}

function topMenu() {
    
    $('.h_top .menu').click(function () {
        $('.ly_snavi').slideUp(10);
        $(".ly_navi").slideToggle("slow");        
    });

    $('.ly_navi .btn_close').click(function () {
        $('.ly_navi').slideUp('slow');
    });

    /* Quote */
    $('.h_top .quote').click(function () {
        $('#track_small').slideUp(10);
        $('.ly_navi').slideUp(10);
        $("#quote_small").slideToggle("slow");
    });

    $('.ly_snavi .btn_close').click(function () {
        $('#quote_small').slideUp('slow');
    });

    /* track */
    $('.h_top .track').click(function () {
        $('#quote_small').slideUp(10);
        $('.ly_navi').slideUp(10);
        $("#track_small").slideToggle("slow");
    });

    $('.ly_snavi .btn_close').click(function () {
        $('#track_small').slideUp('slow');
    });
    
}
