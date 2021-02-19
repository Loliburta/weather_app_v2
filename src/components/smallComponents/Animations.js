import { gsap, Power3 } from "gsap";

export const Animations = (tl, divRef) => {
  gsap.config({ nullTargetWarn: false });
  if (divRef.current !== undefined && !tl.isActive()) {
    tl.from(".location", {
      duration: 1.5,
      x: 200,
      autoAlpha: 0,
      ease: Power3.easeOut,
    })
      .from(
        ".date",
        {
          duration: 1.5,
          x: -200,
          autoAlpha: 0,
          ease: Power3.easeOut,
        },
        "-=1.5"
      )
      .from(
        ".weather-icon",
        {
          duration: 1.5,
          x: -140,
          autoAlpha: 0,
          ease: Power3.easeOut,
          scale: 0.1,
        },
        "-=1.25"
      )
      .from(
        ".main-forecast-info",
        {
          duration: 1.5,
          x: 140,
          autoAlpha: 0,
          ease: Power3.easeOut,
          scale: 0.1,
        },
        "-=1.5"
      )
      .from(
        ".main-temp",
        {
          duration: 1.5,
          x: 0,
          autoAlpha: 0,
          ease: Power3.easeOut,
        },
        "-=0.8"
      )
      .from(
        ".day-forecast",
        {
          duration: 1.5,
          y: 30,
          autoAlpha: 0,
          ease: Power3.easeOut,
        },
        "-=1.4"
      );
  }
};
export const NavBarAnimation = () => {
  gsap.from(".search-box", {
    y: 30,
    opacity: 0,
    ease: Power3.easeOut,
    delay: 0.3,
  });
};
