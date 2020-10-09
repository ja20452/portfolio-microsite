$(document).ready(function () {





    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });



        $('#scene01 .main_title').addClass('on');
        $('#scene01 .sub_title').addClass('on');
        $('#scene01 .btn').addClass('active');
        $('#scene01 .button_typo').addClass('on');


    $('#note .button_01').click(function (){
        $('#note').toggleClass('on');
        $('#note .button_01').toggleClass('on');
    });

    // $('#header .menu').click(function () {
    //     $('.gnb').toggleClass('active');
    // });


    $('.gnb .circle').hover(function () {
        $('.gnb .home').toggleClass('active');
        $('.gnb .circle').toggleClass('active');
    });


    $('.gnb .circle2').hover(function () {
        $('.gnb .design').toggleClass('active');
        $('.gnb .circle2').toggleClass('active');
    });

    $('.gnb .circle3').hover(function () {
        $('.gnb .benefit').toggleClass('active');
        $('.gnb .circle3').toggleClass('active');
    });

    $('.gnb .circle4').hover(function () {
        $('.gnb .collection').toggleClass('active');
        $('.gnb .circle4').toggleClass('active');
    });




    $("#scene10 .background").slick({
        dots: false, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#scene10 .button_01'), //이전 화살표
        nextArrow: $('#scene10 .button_02'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '#scene10 .sc', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:1,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition

    });

    $("#scene10 .sc").slick({
        dots: false, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#scene10 .button_01'), //이전 화살표
        nextArrow: $('#scene10 .button_02'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '#scene10 .background', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:1,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition

    });





});




$(function () {

    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");
        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);



        if (a >= 17642) {
            $('#scene01 .scroll_line').toggleClass('on');
        } else {
            $('#scene01 .scroll_line').removeClass("on");
        }

        if (a >= 17642) {
            $('#scene01 .scroll').toggleClass('on');
        } else {
            $('#scene01 .scroll').removeClass("on");
        }


        if (a >= 800) {
            $("#scene02").addClass("on");
            $("#scene02 .zflip_black").addClass("on");
            $("#scene02 .zflip_purple").addClass('on');
        } else {
            // $("#scene02").removeClass("on");
        }


        if (a >= 800) {
            $("#scene02 .bg").addClass("on");
        } else {
            // $("#scene02 .bg").removeClass("on");
        }


        if (a >= 1700) {
            $('#scene03 .sub_title_15').addClass('on');
        } else {
            // $("#scene03").removeClass("on");
        }

        if (a >= 1700) {
            $('#scene03 .main_title_11').addClass('on');
        } else {
            // $("#scene03").removeClass("on");
        }

        if (a >= 1700) {
            $('#scene03 .women_image').addClass('on');
        } else {
            // $("#scene03").removeClass("on");
        }




        if (a >= 3000) {
            $("#scene04 .box").addClass("active")
        } else {
            // $("#scene04 .box").removeClass("on");
        }

        if (a >= 3000) {
            $("#scene04 .mirror_purple").addClass("active");
        } else {

            // $("#scene04 .mirror_purple").removeClass("on");
        }

        if (a >= 3000) {
            $("#scene04 .title_purpleshadow").addClass("active");
        } else {

            // $("#scene04 .title_purpleshadow").removeClass("on");
        }

        if (a >= 3000) {
            $("#scene04 .title_purple_01").addClass("on");
        } else {

            // $("#scene04 .title_purple_01").removeClass("on");
        }

        if (a >= 3000) {
            $("#scene04 .purple_img").addClass("on");
        } else {

            // $("#scene04 .purple_img").removeClass("on");
        }



        if (a >= 4100) {
            $('#scene05 .img_01').addClass("on")
        } else {
            // $('#scene04 .box').removeClass("on");
        }

        if (a >= 4100) {
            $('#scene05 .img_02').addClass("on")
        } else {
            // $('#scene04 .box').removeClass("on");
        }

        if (a >= 4100) {
            $('#scene05 .img_03').addClass("on")
        } else {
            // $('#scene04 .box').removeClass("on");
        }

        if (a >= 4100) {
            $('#scene05 .img_04').addClass("on")
        } else {
            // $('#scene04 .box').removeClass("on");
        }

        if (a >= 4100) {
            $('#scene05 .img_05').addClass("on")
        } else {
            // $('#scene04 .box').removeClass("on");
        }

        if (a >= 4100) {
            $('#scene05 .img_06').addClass("on")
        } else {
            // $('#scene04 .box').removeClass("on");
        }


        if (a >= 3900) {
            $('#scene05 .title').addClass('on');
        } else {
            // $("#scene05").removeClass("on");
        }

        if (a >= 3900) {
            $('#scene05 .contents_02').addClass('on');
        } else {
            // $("#scene05").removeClass("on");
        }

        if (a >= 3900) {
            $('#scene05 .contents_05').addClass('on');
        } else {
            // $("#scene05").removeClass("on");
        }

        if (a >= 3900) {
            $('#scene05 .contents_08').addClass('on');
        } else {
            // $("#scene05").removeClass("on");
        }



        if (a >= 5600) {
            $('#scene06 .title_48').addClass('on');
        } else {
            // $("#scene06").removeClass("on");
        }

        if (a >= 5600) {
            $('#scene06 .title_52').addClass('on');
        } else {
            // $("#scene06").removeClass("on");
        }

        if (a >= 5600) {
            $('#scene06 .title_56').addClass('on');
        } else {
            // $("#scene06").removeClass("on");
        }

        if (a >= 5600) {
            $('#scene06 .title_60').addClass('on');
        } else {
            // $("#scene06").removeClass("on");
        }

        if (a >= 6500) {
            $('#scene07 .title_68').addClass('on');
        } else {
            // $("#scene07").removeClass("on");
        }

        if (a >= 6500) {
            $('#scene07 .title_72').addClass('on');
        } else {
            // $("#scene07").removeClass("on");
        }

        if (a >= 6500) {
            $('#scene07 .title_76').addClass('on');
        } else {
            // $("#scene07").removeClass("on");
        }

        if (a >= 6500) {
            $('#scene07 .title_80').addClass('on');
        } else {
            // $("#scene07").removeClass("on");
        }

        if (a >= 7000) {
            $('#scene07 .line_01').addClass('on');
        } else {
            // $("#scene07").removeClass("on");
        }


        if (a >= 7000) {
            $('#scene07 .contents_img_02').addClass('on');
        } else {
            // $("#scene07").removeClass("on");
        }

        if (a >= 7000) {
            $('#scene07 .title_84').addClass('on');
        } else {
            // $("#scene07").removeClass("on");
        }


        if (a >= 7300) {
            $('#scene07 .line_02').addClass('on');
        } else {
            // $("#scene07").removeClass("on");
        }

        if (a >= 7300) {
            $('#scene07 .contents_img_01').addClass('on');
        } else {
            // $("#scene07").removeClass("on");
        }

        if (a >= 7300) {
            $('#scene07 .title_88').addClass('on');
        } else {
            // $("#scene07").removeClass("on");
        }


        if (a >= 8500) {
            $('#scene08 .title').addClass('on');
        } else {
            // $("#scene08").removeClass("on");
        }

        if (a >= 8500) {
            $('#scene08 .title_92').addClass('on');
        } else {
            // $("#scene08").removeClass("on");
        }


        if (a >= 9500) {
            $('#scene09 .background').addClass('on');
        } else {
            // $("#scene09 .background").removeClass("on");
        }


        if (a >= 9500) {
            $('#scene09 .title_100').addClass('on');
        } else {
            // $("#scene09").removeClass("on");
        }

        if (a >= 9500) {
            $('#scene09 .title_104').addClass('on');
        } else {
            // $("#scene09").removeClass("on");
        }

        if (a >= 9500) {
            $('#scene09 .title_108').addClass('on');
        } else {
            // $("#scene09").removeClass("on");
        }

        if (a >= 9500) {
            $('#scene09 .title_112').addClass('on');
        } else {
            // $("#scene09").removeClass("on");
        }

        if (a >= 10500) {
            $('#scene10 .title_121').addClass('on');
        } else {
            // $("#scene10").removeClass("on");
        }

        if (a >= 10500) {
            $('#scene10 .title_124').addClass('on');
        } else {
            // $("#scene10").removeClass("on");
        }

        if (a >= 10500) {
            $('#scene10 .title_128').addClass('on');
        } else {
            // $("#scene10").removeClass("on");
        }

        if (a >= 10500) {
            $('#scene10 .title_132').addClass('on');
        } else {
            // $("#scene10").removeClass("on");
        }

        if (a >= 11700) {
            $('#scene11 .zflip_front').addClass('on');
        } else {
            // $("#scene10").removeClass("on");
        }

        if (a >= 11700) {
            $('#scene11 .zflip_back').addClass('on');
        } else {
            // $("#scene10").removeClass("on");
        }

        if (a >= 11700) {
            $('#scene11 .title_137').addClass('on');
        } else {
            // $("#scene10").removeClass("on");
        }

        if (a >= 11700) {
            $('#scene11 .title_141').addClass('on');
        } else {
            // $("#scene10").removeClass("on");
        }

        if (a >= 11700) {
            $('#scene11 .title_145').addClass('on');
        } else {
            // $("#scene10").removeClass("on");
        }


        if (a >= 15000) {
            $('#scene13 .zflip_img').addClass('on');
        } else {
            // $("#scene13").removeClass("on");
        }

        if (a >= 15000) {
            $('#scene13 .purple_box').addClass('on');
        } else {
            // $("#scene13").removeClass("on");
        }

        if (a >= 15000) {
            $('#scene13 .shadow').addClass('on');
        } else {
            // $("#scene13").removeClass("on");
        }


        if (a >= 15000) {
            $('#scene13 .title').addClass('on');
        } else {
            // $("#scene13").removeClass("on");
        }

        if (a >= 15000) {
            $('#scene13 .contents').addClass('on');
        } else {
            // $("#scene13").removeClass("on");
        }

        if (a >= 15000) {
            $('#scene13 .contents2').addClass('on');
        } else {
            // $("#scene13").removeClass("on");
        }

        if (a >= 15000) {
            $('#scene13 .accesory').addClass('on');
        } else {
            // $("#scene13").removeClass("on");
        }

        if (a >= 15000) {
            $('#scene13 .btn_').addClass('on');
        } else {
            // $("#scene13").removeClass("on");
        }

        if (a >= 15000) {
            $('#scene13 .more').addClass('on');
        } else {
            // $("#scene13").removeClass("on");
        }

        if (a >= 16100) {
            $('#scene14 .title').addClass('on');
        } else {
            // $("#scene14").removeClass("on");
        }

        if (a >= 16100) {
            $('#scene14 .sub_title').addClass('on');
        } else {
            // $("#scene14").removeClass("on");
        }

        if (a >= 16100) {
            $('#scene14 .btn3').addClass('on');
        } else {
            // $("#scene14").removeClass("on");
        }

        if (a >= 16100) {
            $('#scene14 .more').addClass('on');
        } else {
            // $("#scene14").removeClass("on");
        }



        $(".wrap > div").each(function (c) {
            var d = 0;
            var b = $(".wrap > div:first").position().top;
            var e = $(this).position().top;
            if (a <= b - d) {
                $(".naviJs").each(function () {
                    $("li", this).removeClass("on").eq(0).addClass("on")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        $("li", this).removeClass("on").eq(c).addClass("on")
                    })
                }
            }
        })
    })











});


