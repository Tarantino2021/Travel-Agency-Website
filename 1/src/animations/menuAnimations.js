import gsap from "gsap";

let tl = gsap.timeline();

export const openMenu = (width) => {
  tl.to("nav", { duration: 0, css: { display: "block" } })
    .to("body", { duration: 0, css: { overflow: "hidden" } })
    .to(".App", {
      duration: 1,
      y: width <= 654 ? "80vh" : window.innerHeight / 1.5,
      ease: "expo.inOut",
    })
    .to(".hamburger-menu span", {
      delay: -1,
      duration: 0.6,
      scaleX: 0,
      transformOrigin: "50% 0%",
      ease: "expo.inOut",
    })
    .to("#Path_1", {
      delay: -0.6,
      duration: 0.4,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 5,
      },
    })
    .to("#Path_2", {
      delay: -0.6,
      duration: 0.4,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 20,
      },
    })
    .to("#Line_1", {
      delay: -0.6,
      duration: 0.4,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 18,
      },
    })
    .to("#circle", {
      delay: -0.8,
      duration: 0.6,
      css: {
        strokeDashoffset: 0,
      },
      ease: "expo.inOut",
    })
    .to(".hamburger-menu-close", {
      delay: -0.8,
      duration: 0.6,
      css: { display: "block" },
    });
};

export const closeMenu = () => {
  tl.to(".App", {
    y: 0,
    duration: 1,
    ease: "expo.inOut",
  })
    .to("#circle", {
      delay: -0.6,
      duration: 0.6,
      css: {
        strokeDashoffset: -193,
        strokeDasharray: 227,
      },
    })
    .to("#Path_1", {
      delay: -0.6,
      duration: 0.4,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to("#Path_2", {
      delay: -0.6,
      duration: 0.4,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to("#Line_1", {
      delay: -0.6,
      duration: 0.4,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 40,
      },
    })
    .to(".hamburger-menu span", 0.6, {
      delay: -0.6,
      duration: 0.6,
      scaleX: 1,
      transformOrigin: "50% 0%",
      ease: "expo.inOut",
    })
    .to(".hamburger-menu-close", {
      delay: -0.1,
      duration: 0,
      css: { display: "none" },
    })
    .to("body", { duration: 0, css: { overflow: "auto" } })
    .to("nav", { duration: 0, css: { display: "none" } });
};
