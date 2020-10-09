$(document).ready(function () {



Btn2();

Btn3();










});

function Btn2 () {
    /* Demo purposes only */
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

}


function Btn3 () {
    /* Demo purposes only */
    $("figure").mouseleave(
        function() {
            $(this).removeClass("hover");
        }
    );
}