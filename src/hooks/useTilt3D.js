import { useEffect } from "react";

function useTilt3D() {
  useEffect(() => {
    /*
      Desktop / laptop mouse devices වලට විතරක්
      3D tilt effect එක activate කරනවා.
    */

    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!canHover || reducedMotion) {
      return;
    }

    /*
      3D effect එක apply කරන්න ඕන
      main cards ටික.
    */

    const selectors = [
      ".profile-frame",
      ".about-card",
      ".current-focus",
      ".skill-category",
      ".service-card",
      ".project-card",
      ".education-card",
      ".education-side-card",
      ".contact-form-wrapper",
    ];

    const cards = document.querySelectorAll(selectors.join(","));

    const cleanups = [];

    cards.forEach((card) => {
      let animationFrame = null;

      /*
        Card type එක අනුව tilt strength එක
        පොඩ්ඩක් වෙනස් කරනවා.
      */

      const getTiltStrength = () => {
        if (card.classList.contains("profile-frame")) {
          return 9;
        }

        if (card.classList.contains("project-card")) {
          return 5;
        }

        return 4;
      };

      const handleMouseMove = (event) => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }

        animationFrame = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();

          const mouseX = event.clientX - rect.left;

          const mouseY = event.clientY - rect.top;

          const centerX = rect.width / 2;

          const centerY = rect.height / 2;

          /*
              -1 → 1 range එකකට
              mouse position normalize කරනවා.
            */

          const normalizedX = (mouseX - centerX) / centerX;

          const normalizedY = (mouseY - centerY) / centerY;

          const strength = getTiltStrength();

          /*
              Mouse right side →
              rotateY positive

              Mouse top side →
              rotateX positive
            */

          const rotateY = normalizedX * strength;

          const rotateX = normalizedY * -strength;

          card.style.transition =
            "transform 0.12s ease-out, box-shadow 0.3s ease";

          card.style.transform = `
              perspective(1100px)
              rotateX(${rotateX}deg)
              rotateY(${rotateY}deg)
              translateY(-8px)
              scale(1.015)
            `;

          /*
              Mouse position CSS variables වලට
              save කරනවා.

              Later spotlight effect එකකටත්
              මේ values use කරන්න පුළුවන්.
            */

          card.style.setProperty("--mouse-x", `${mouseX}px`);

          card.style.setProperty("--mouse-y", `${mouseY}px`);

          card.classList.add("tilt-active");
        });
      };

      const handleMouseEnter = () => {
        card.classList.add("tilt-card");
      };

      const handleMouseLeave = () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }

        /*
          Smooth reset
        */

        card.style.transition =
          "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease";

        card.style.transform = "";

        card.classList.remove("tilt-active");

        /*
          Original component CSS hover styles
          ආයෙ control ගන්න allow කරනවා.
        */

        setTimeout(() => {
          card.style.transition = "";
        }, 550);
      };

      card.addEventListener("mouseenter", handleMouseEnter);

      card.addEventListener("mousemove", handleMouseMove);

      card.addEventListener("mouseleave", handleMouseLeave);

      cleanups.push(() => {
        card.removeEventListener("mouseenter", handleMouseEnter);

        card.removeEventListener("mousemove", handleMouseMove);

        card.removeEventListener("mouseleave", handleMouseLeave);

        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}

export default useTilt3D;
