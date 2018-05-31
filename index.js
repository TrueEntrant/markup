$('.slider').slick({
    dots: true
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