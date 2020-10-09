

function frameAni(d) {
    var a = 0;
    var e = $(d).children().length - 1;
    var b = 0;

    function c() {
        if (a < e && b == 0) {
            a++;
            if (a == e) {
                b = 1
            }
        } else {
            a--;
            if (a == 0) {
                b = 0
            }
        }
        $(d).children().hide().eq(a).show();
        setTimeout(c, 30)
    }

    c()
}

function frameAni2(d) {
    var a = 0;
    var e = $(d).children().length - 1;
    var b = 0;

    function c() {
        if (a < e && b == 0) {
            a++;
            if (a == e) {
                b = 1
            }
        } else {
            a--;
            if (a == 0) {
                b = 0
            }
        }
        $(d).children().hide().eq(a).show();
        setTimeout(c, 30)
    }

    c()
}
//
// function frameAni3(d) {
//     var a = 0;
//     var e = $(d).children().length - 1;
//     var b = 0;
//
//     function c() {
//         if (a < e && b == 0) {
//             a++;
//             if (a == e) {
//                 b = 1
//             }
//         } else {
//             a--;
//             if (a == 0) {
//                 b = 0
//             }
//         }
//         $(d).children().hide().eq(a).show();
//         setTimeout(c, 80)
//     }
//
//     c()
// }
//
// function frameAni4(d) {
//     var a = 0;
//     var e = $(d).children().length - 1;
//     var b = 0;
//
//     function c() {
//         if (a < e && b == 0) {
//             a++;
//             if (a == e) {
//                 b = 1
//             }
//         } else {
//             a--;
//             if (a == 0) {
//                 b = 0
//             }
//         }
//         $(d).children().hide().eq(a).show();
//         setTimeout(c, 90)
//     }
//
//     c()
// }
//
// function frameAni5(d) {
//     var a = 0;
//     var e = $(d).children().length - 1;
//     var b = 0;
//
//     function c() {
//         if (a < e && b == 0) {
//             a++;
//             if (a == e) {
//                 b = 1
//             }
//         } else {
//             a--;
//             if (a == 0) {
//                 b = 0
//             }
//         }
//         $(d).children().hide().eq(a).show();
//         setTimeout(c, 80)
//     }
//
//     c()
// }
//
// function frameAni6(d) {
//     var a = 0;
//     var e = $(d).children().length - 1;
//     var b = 0;
//
//     function c() {
//         if (a < e && b == 0) {
//             a++;
//             if (a == e) {
//                 b = 1
//             }
//         } else {
//             a--;
//             if (a == 0) {
//                 b = 0
//             }
//         }
//         $(d).children().hide().eq(a).show();
//         setTimeout(c, 80)
//     }
//
//     c()
// }
//
// function frameAni7(d) {
//     var a = 0;
//     var e = $(d).children().length - 1;
//     var b = 0;
//
//     function c() {
//         if (a < e && b == 0) {
//             a++;
//             if (a == e) {
//                 b = 1
//             }
//         } else {
//             a--;
//             if (a == 0) {
//                 b = 0
//             }
//         }
//         $(d).children().hide().eq(a).show();
//         setTimeout(c, 90)
//     }
//
//     c()
// }
//
// function frameAni13(d) {
//     var a = 0;
//     var e = $(d).children().length - 1;
//     var b = 0;
//
//     function c() {
//         if (a < e && b == 0) {
//             a++;
//             if (a == e) {
//                 b = 1
//             }
//         } else {
//             a--;
//             if (a == 0) {
//                 b = 0
//             }
//         }
//         $(d).children().hide().eq(a).show();
//         setTimeout(c, 1000)
//     }
//
//     c()
// }

$(function () {
    frameAni("#scene08 .zflip_img");
    frameAni2("#scene06 .zflip_img");
    // frameAni3("#scene1 .s1_bird");
    // frameAni4("#scene1 .s1_road");
    // frameAni5("#scene2 .s2_tree2");
    // frameAni6("#scene2 .s2_tree1");
    // frameAni7("#scene2 .s2_road");
    // frameAni3("#scene01 .cowman_arm");
    // frameAni9("#scene02 .woman_arm");
    // frameAni3("#scene03 .chef1_hand");
    // frameAni3("#scene03 .chef2_hand");
    // frameAni2("#scene03 .chef3");
    // frameAni2("#scene04 .eatingwoman");
    // frameAni2("#scene05 .manarm");
    // frameAni2("#scene06 .s6_womanarm");
    // frameAni2("#scene06 .s6_manarm");


    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");
        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);
        $(".wrap > div").each(function (c) {
            var d = 100;
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