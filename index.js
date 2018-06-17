
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
$(".searchb").click(function(){
    $(".search").toggleClass("pop");
    $(".menu").removeClass("active");
});
$(".hiden_menu").click(function(){
    $(".menu").toggleClass("active");
    $(".search").removeClass("pop");
});
$(".nav").click(function(){
    $(".menu").removeClass("active");
});

var item = document.querySelector(".shirt");

function isOnTarget (evn, target) {
    return document.elementFromPoint(evn.clientX, evn.clientY) == target;
};

item.onclick = function (evn) {
    let box = item.querySelector(".boxes");
    for(let i = 0; i < box.children.length; i++) {
        let target = box.children[i];

        if(isOnTarget(evn, target)) item.querySelector(".large").setAttribute("src", target.getAttribute("href"));
    }
}

function catet(gip) {
    return Math.round(Math.sqrt((Math.pow(gip, 2)) / 2));
};