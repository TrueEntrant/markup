$('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000
});
$('.stylist').slick({
    autoplay: true,
    autoplaySpeed: 20000
});
// $(".hiden_menu, .nav").hover(function(){
//     $(".menu").toggleClass("active");
// });
$(".hiden_menu").click(function(){
    $(".menu").toggleClass("active");
});
$(".nav").click(function(){
    $(".menu").toggleClass("active");
});


function catet(gip) {
    return Math.round(Math.sqrt((Math.pow(gip, 2)) / 2));
};