import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";
import { config } from "../config";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  useEffect(() => {
    const isTouchOrSmall =
      window.innerWidth <= 1024 ||
      "ontouchstart" in window ||
      (navigator && navigator.maxTouchPoints > 0);

    let rafId: number;

    if (!isTouchOrSmall) {
      // Initialize Lenis smooth scroll ONLY for desktop mouse users
      lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.2,
        touchMultiplier: 0,
        infinite: false,
      });

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    } else {
      lenis = null;
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    }

    // Handle navigation links for both desktop and mobile
    const links = document.querySelectorAll(".header ul a");
    const handleLinkClick = (e: Event) => {
      e.preventDefault();
      const elem = e.currentTarget as HTMLAnchorElement;
      const section = elem.getAttribute("data-href");
      if (section) {
        const target = document.querySelector(section) as HTMLElement;
        if (target) {
          if (lenis) {
            lenis.scrollTo(target, { offset: 0, duration: 1.3 });
          } else {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    links.forEach((elem) => elem.addEventListener("click", handleLinkClick));

    const handleResize = () => {
      lenis?.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      links.forEach((elem) => elem.removeEventListener("click", handleLinkClick));
      window.removeEventListener("resize", handleResize);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable" aria-label="Aryan Mandal">
          <img
            src="/images/aryan-profile.png"
            alt="Aryan Mandal"
            className="navbar-avatar-img"
          />
        </a>
        <a
          href={`mailto:${config.contact.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {config.contact.email}
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
