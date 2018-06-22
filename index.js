$(".searchb").click(function(){
    if($(".search")[0].style.display == "none") {
        $(".chat_win").fadeOut(500);
        $(".active").fadeOut(500);
        $(".search").fadeIn(500);
    } else {
        $(".search").fadeOut(500);
        if($(document).width() > 900) {
            $(".active").fadeIn(500);
        };
    }
});
$(".hiden_menu").click(function(){
    if(!$(".menu").hasClass("active")) {
        $(".menu").addClass("active");
        $(".active").fadeIn(500);
        $(".active")[0].style.display = "flex";
    } else if($(".active")[0].style.display == "") {
        $(".chat_win").fadeOut(500);
        $(".search").fadeOut(500);
        $(".active").fadeIn(500);
    } else if($(".active")[0].style.display == "none") {
        $(".chat_win").fadeOut(500);
        $(".search").fadeOut(500);
        $(".active").fadeIn(500);
    } else if($(document).width() < 900)
    $(".active").fadeOut(500);
});
$(".chat").click(function(){
    if($(".chat_win")[0].style.display == "none") {
        $(".search").fadeOut(500);
        if($(document).width() < 900) {
            $(".active").fadeOut(400);
        } else if($(document).width() > 900) {
            $(".active").fadeIn(400);
        }
        $(".chat_win").fadeIn(500);
    } else
    $(".chat_win").fadeOut(500);
});
$(".nav").click(function(){
    if($(document).width() < 900) {
        $(".active").fadeOut(500);
    }
});
$(".send").click(function(){
    $(".warning")[0].style.display = "inline-block";
});
$(".srch").click(function(){
    $(".attention")[0].style.display = "inline-block";
});
$(document).ready(function() {
    $("a.anchor").click(function() {
        if($(document).width() < 900)
            $(".active").fadeOut(500);
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
});
$(".shop").hover(function(ev){
    
    if( ev.currentTarget.querySelector(".name").getAttribute("class") == "name visible")
        ev.currentTarget.querySelector(".name").setAttribute("class", "name");
    else
        ev.currentTarget.querySelector(".name").setAttribute("class", "name visible");
    if ( $(".action").hasClass("visible"))
        ev.currentTarget.querySelector(".action").setAttribute("class", "action");
    else 
        ev.currentTarget.querySelector(".action").setAttribute("class", "action visible");


});

var item = document.querySelector(".shirt");

function isOnTarget (evn, target) {
    return document.elementFromPoint(evn.clientX, evn.clientY) == target;
};

item.onclick = function (evn) {
    let box = item.querySelector(".boxes");
    for(let i = 0; i < box.children.length; i++) {
        let target = box.children[i];

        if(isOnTarget(evn, target)) item.querySelector(".large").setAttribute("src", target.getAttribute("id"));
    }
}

function catet(gip) {
    return Math.round(Math.sqrt((Math.pow(gip, 2)) / 2));
};