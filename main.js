$(document).ready(function () {
    $("span").click(function () { 
        $(".navbar").toggleClass("navbar-active");
    });
    $(".btn").click(function (e) { 
        $(".text").toggleClass('active')
    });
});