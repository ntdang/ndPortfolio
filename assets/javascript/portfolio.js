/* Parallax Code - https://github.com/marrio-h/universal-parallax */

"use strict";
var windowHeight = window.innerHeight;

function calculateHeight(e, t) {
    for (var a = 0; e.length > a; a++) {
        var n = e[a].parentElement.scrollHeight,
            i = (windowHeight - n) / 2,
            l = n + 2 * (i - i / t);
        e[a].style.height = l + "px"
    }
}

function animateParallax(e, t) {
    for (var a = 0; e.length > a; a++) {
        var n = e[a].parentElement.getBoundingClientRect().top / t;
        e[a].style.top = n + "px"
    }
}
/Mobi/.test(navigator.userAgent) && (windowHeight = screen.height);
var universalParallax = function () {
    this.init = function (e) {
        void 0 === e && (e = {}), e = {
            speed: void 0 !== e.speed ? e.speed : 4,
            className: void 0 !== e.className ? e.className : "parallax"
        };
        for (var t, a, n = document.getElementsByClassName(e.className), i = 0; n.length > i; i++) {
            var l = document.createElement("div");
            n[i].parentNode.insertBefore(l, n[i]), l.appendChild(n[i]);
            var r = n[i].parentElement;
            r.className += "parallax__container", "relative" !== window.getComputedStyle(r.parentElement, null).getPropertyValue("position") && (r.parentElement.style.position = "relative");
            var s = n[i].dataset.parallaxImage;
            void 0 !== s && (n[i].style.backgroundImage = "url(" + s + ")", 1 === n[i].classList.length && "parallax" === n[i].classList[0] && Object.assign(n[i].style, {
                "background-repeat": "no-repeat",
                "background-position": "center",
                "background-size": "cover"
            }))
        }
        t = n, (a = e.speed) < 1.2 && (a = 0), calculateHeight(t, a), window.addEventListener("resize", function () {
            calculateHeight(t, a)
        }), window.addEventListener("scroll", function () {
            animateParallax(t, a)
        })
    }
};

new universalParallax().init();

//arrow

//this is where we apply opacity to the arrow
$(window).scroll( function(){

    //get scroll position
    var topWindow = $(window).scrollTop();
    //multipl by 1.5 so the arrow will become transparent half-way up the page
    var topWindow = topWindow * 1.5;
    
    //get height of window
    var windowHeight = $(window).height();
        
    //set position as percentage of how far the user has scrolled 
    var position = topWindow / windowHeight;
    //invert the percentage
    position = 1 - position;
  
    //define arrow opacity as based on how far up the page the user has scrolled
    //no scrolling = 1, half-way up the page = 0
    $('.arrow-wrap').css('opacity', position);
  
  });

  //Code stolen from css-tricks for smooth scrolling:
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });