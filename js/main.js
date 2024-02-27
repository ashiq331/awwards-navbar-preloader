paceOptions = {
  ajax: true,
  document: true,
};

Pace.on("done", () => {
  gsap
    .timeline()
    .add("p")
    .to(
      ".pace",
      {
        transform: "scale(10, 1)",
        duration: 4,
      },
      "+=.2"
    )
    .to(
      ".pace",
      {
        duration: 1,
        height: "100%",
      },
      "-=2.5"
    )
    .to(
      ".loading__text",
      {
        delay: 0.2,
        duration: 3,
        opacity: 0,
        yPercent: -400,
        ease: "BezierEasing(0.19,1,0.22,1)",
      },
      "p"
    )
    .to(
      ".main",
      {
        duration: 2,
        delay: 0.3,
        y: -10,
        opacity: 1,
        ease: Expo.easeInOut,
      },
      "-=2.5"
    );
});

const menuBtn = document.querySelector(".menu");
const layout = document.querySelector(".layout");
const overlay = document.querySelector(".overlay");
const menuSVG = document.querySelector(".menu svg path");
const menuItems = gsap.utils.toArray("ul li a");

let menuOpen = false;

gsap.set(overlay, {
  scaleY: 0,
});

gsap.set(menuItems, {
  yPercent: 100,
});

const navTl = gsap.timeline({
  defaults: {
    ease: "power4.inOut",
    duration: 1,
  },
});

navTl
  .to(layout, {
    scale: 0.95,
  })
  .to(
    overlay,
    {
      scaleY: 1,
    },
    "-=0.5"
  )
  .to(
    menuSVG,
    {
      fill: "white",
    },
    "<"
  )
  .to(
    menuItems,
    {
      yPercent: 0,
      stagger: 0.1,
      duration: 2,
    },
    "-=1.5"
  );
navTl.pause();

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    navTl.play();
    menuOpen = true;
  } else {
    navTl.reverse();
    menuOpen = false;
  }
});
