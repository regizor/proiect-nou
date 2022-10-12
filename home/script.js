gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  markers: false
});

// [Home] Marquee Text
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

//Split Text Home
