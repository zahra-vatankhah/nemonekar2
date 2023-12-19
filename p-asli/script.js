var countdown = new Date("jan 5,2019 15:37:25").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdown - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((distance % (1000 * 60)) / (1000));


  document.getElementById("demo").innerHTML = '<span id="day">' + days + '</span>' + '<span id="hour">' + hour + '</span>' + '<span id="minute">' + minute + '</span>' + '<span id="second">' + second + '</span>';
  var z = document.getElementsByClassName("demos");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML = '<span id="day">' + day + "</span>" + '<span id="hour">' + hour + "</span>" + '<span id="minute">' + minute + "</span>" + '<span id="second">' + second + "</span>";

  }

  if (distance < 0) {
    clearInterval(x);
    var y = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
      y[i].innerHTML = "";
    }


    //document.getElementById("offer-expier").setAttribute("id", "offer-expier-text");
    var g = document.getElementsByClassName("offer-expier");
    for (var i = 0; i < z.length; i++) {
      g[i].classList.add("offer-expier-text")
    }


    var d = document.getElementsByClassName("offer-expire-text-inner");
    for (var i = 0; i < z.length; i++) {
      d[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده"
    }

    document.getElementById("offer-blur").style.filter = "blur(2px)";
    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < z.length; i++) {
      t[i].style.filter = "blur(2px)";
    }
  }
}, 1000);




$(document).ready(function () {
$(".owl-carousel").owlCarousel({
  rtl:true,
  items:4,
  loop:true,
  margin:0,
  nav:true,
  dots:false,
  center:true,
  autoplay:true,
  slisBy:4,
  autoplayTimeout:3000,
  autoplayHoverpause:true,
  responsiveClass:true,
  responsive : {

    0 : {
        item : 1,
        nav : true,
      
    },
  
    600 : {
      item : 2,
      nav : false,
      
    },

    1000 : {
        item : 3,
        nav : true,
        center:false
    },

    1200:{
      item:4,
      nav:true,

    }
}

});
});





$('.popovers').popover({
  trigger: 'hover'
})

$(".popovers").popover("show");
















$('.carousel').carousel({
  interval: 2000

})