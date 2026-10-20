import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";
import { lenis } from "../Navbar";

let hasRunInitialFX = false;

export function initialFX() {
  if (hasRunInitialFX) return;
  hasRunInitialFX = true;

  document.body.style.overflowY = "auto";
  document.documentElement.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }
  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) mainEl.classList.add("main-active");

  const isSmallOrTouch =
    window.innerWidth <= 1024 ||
    "ontouchstart" in window ||
    (navigator && navigator.maxTouchPoints > 0);

  if (isSmallOrTouch) {
    // Instant visibility without delay or heavy blur calculations on mobile
    document.body.style.backgroundColor = "#0b080c";
    return;
  }

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 0,
  });

  const selectors = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"];
  const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
  var landingText = new TextSplitter(elements, {
    type: "chars,lines",
    linesClass: "split-line",
  });
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      y: 0,
      stagger: 0.02,
      delay: 0,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new TextSplitter(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      y: 0,
      stagger: 0.02,
      delay: 0.05,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      y: 0,
      delay: 0.1,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      ease: "power1.out",
      delay: 0.05,
    }
  );

  var landingText3 = new TextSplitter(".landing-h2-info-1", TextProps);
  var landingText4 = new TextSplitter(".landing-h2-1", TextProps);
  var landingText5 = new TextSplitter(".landing-h2-2", TextProps);

  if (landingText2.chars.length > 0 && landingText3.chars.length > 0) {
    LoopText(landingText2, landingText3);
  }
  if (landingText4.chars.length > 0 && landingText5.chars.length > 0) {
    LoopText(landingText4, landingText5);
  }
}

function LoopText(Text1: TextSplitter, Text2: TextSplitter) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
