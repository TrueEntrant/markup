$('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [{
        breakpoint: 500,
        settings: "unslick"
      }]
});
$('.stylist').slick({
    autoplay: true,
    autoplaySpeed: 20000,
    responsive: [{
        breakpoint: 500,
        settings: "unslick"
      }]
});
$('.best_slider').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [{
        breakpoint: 500,
        settings: "unslick"
      }]
});
$('.late_slider').slick({
    autoplay: true,
    autoplaySpeed: 9000,
    responsive: [{
        breakpoint: 500,
        settings: "unslick"
      }]
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