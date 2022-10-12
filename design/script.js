gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

// Animate [Footer] Title
$(".container.footer").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".footer-title-wrapper");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "-100% top",
      end: "30% top",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    y: "40%",
    duration: 1
  });
});

// [Design] Marquee Text
let object = {
  value: 1
};

let tl = gsap.timeline({
  repeat: -1,
  onReverseComplete: () => {
    tl.progress(1);
  }
});
tl.fromTo(
  ".marquee_track",
  {
    xPercent: 0
  },
  {
    xPercent: -50,
    duration: 40,
    ease: Power0.easeNone
  }
);
// swipe slider
$(document).ready(function () {
  var slider_wrapper = new Swiper(".slider-wrapper", {
    wrapperClass: "slider-list",
    slideClass: "slider-item",
    navigation: {
      nextEl: ".next-slide",
      prevEl: ".prev-slide"
    },
    pagination: {
      type: "bullets",
      el: ".pagination",
      clickable: true
    },
    speed: 700,
    slidesPerView: "auto",
    loop: true,

    on: {
      init: function () {
        var swiper_pagination_bulletwe_style = document.createElement("style");
        swiper_pagination_bulletwe_style.type = "text/css";
        swiper_pagination_bulletwe_style.innerHTML = ` .swiper-pagination-bullet{   background:#333;
margin-right:8px;
transition:.2s;
} `;
        document
          .getElementsByTagName("head")[0]
          .appendChild(swiper_pagination_bulletwe_style);
        var swiper_pagination_bullethoverwe_style = document.createElement(
          "style"
        );
        swiper_pagination_bullethoverwe_style.type = "text/css";
        swiper_pagination_bullethoverwe_style.innerHTML = ` .swiper-pagination-bullet:hover{   opacity:.7;
} `;
        document
          .getElementsByTagName("head")[0]
          .appendChild(swiper_pagination_bullethoverwe_style);
        var swiper_pagination_bullet_activehoverwe_style = document.createElement(
          "style"
        );
        swiper_pagination_bullet_activehoverwe_style.type = "text/css";
        swiper_pagination_bullet_activehoverwe_style.innerHTML = ` .swiper-pagination-bullet-active:hover{   opacity:1;
} `;
        document
          .getElementsByTagName("head")[0]
          .appendChild(swiper_pagination_bullet_activehoverwe_style);
        var swiper_pagination_fractionwe_style = document.createElement(
          "style"
        );
        swiper_pagination_fractionwe_style.type = "text/css";
        swiper_pagination_fractionwe_style.innerHTML = ` .swiper-pagination-fraction{   font-size:16px;
} `;
        document
          .getElementsByTagName("head")[0]
          .appendChild(swiper_pagination_fractionwe_style);
      }
    }
  });
});