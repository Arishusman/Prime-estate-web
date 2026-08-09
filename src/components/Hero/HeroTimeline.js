import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useHeroTimeline(
  sectionRef,
  imageRefs,
  titleRef,
  textRef,
  buttonRef
) {

  useEffect(() => {

    const section = sectionRef.current;

    const house = imageRefs.current[0];
    const interior = imageRefs.current[1];

    if (!section || !house || !interior) return;

    const light = document.querySelector(".hero-light");

    // ==========================
    // Initial State
    // ==========================

    gsap.set(house, {
      opacity: 1,
      scale: 1,
      filter: "brightness(1)"
    });

    gsap.set(interior, {
      opacity: 0,
      scale: 1.35,
      filter: "brightness(.75)"
    });

    if (light) {
      gsap.set(light, {
        opacity: 0,
        scale: .8
      });
    }

    gsap.set(
      [
        titleRef.current,
        textRef.current,
        buttonRef.current
      ],
      {
        opacity: 1,
        y: 0
      }
    );

    // ==========================
    // Timeline
    // ==========================

    const tl = gsap.timeline({

      defaults: {
        ease: "none"
      },

      scrollTrigger: {

        trigger: section,

        start: "top top",

        end: "+=2200",

        scrub: 1.2,

        pin: true,

        anticipatePin: 1

      }

    });

    // =====================================
    // STAGE 1
    // Camera moves toward entrance
    // =====================================

    tl.to(house, {

      scale: 1.12,

      duration: 1.4

    });

    tl.to(house, {

      scale: 1.22,

      filter: "brightness(1.08)",

      duration: 1.3

    });

    // =====================================
    // STAGE 2
    // Luxury light bloom
    // =====================================

    if (light) {

      tl.to(light, {

        opacity: .55,

        scale: 1.25,

        duration: .8

      }, "<");

    }

    tl.to(house, {

      filter: "brightness(1.18)",

      duration: .8

    }, "<");

    // =====================================
    // STAGE 3
    // Interior starts appearing
    // =====================================

    tl.to(interior, {

      opacity: .25,

      scale: 1.22,

      duration: 1.1,

      ease: "power2.out"

    });

    tl.to(house, {

      opacity: .82,

      duration: 1.1,

      ease: "power2.out"

    }, "<");

    // =====================================
    // STAGE 4
    // Cross dissolve starts
    // =====================================

    tl.to(interior, {

      opacity: .65,

      scale: 1.12,

      duration: 1.2,

      ease: "power2.out"

    });

    tl.to(house, {

      opacity: .45,

      scale: 1.28,

      duration: 1.2,

      ease: "power2.out"

    }, "<");

        // =====================================
    // STAGE 5
    // Interior takes over completely
    // =====================================

    tl.to(interior, {

      opacity: 1,

      scale: 1.05,

      filter: "brightness(1)",

      duration: 1.6,

      ease: "power2.out"

    });

    tl.to(house, {

      opacity: 0,

      scale: 1.35,

      duration: 1.6,

      ease: "power2.out"

    }, "<");


    // =====================================
    // STAGE 6
    // Camera enters the hall
    // =====================================

    tl.to(interior, {

      scale: 1,

      duration: 2,

      ease: "none"

    });


    // =====================================
    // STAGE 7
    // Hero Content Fade
    // =====================================

    tl.to(
      [
        titleRef.current,
        textRef.current,
        buttonRef.current
      ],
      {

        opacity: 0,

        y: -80,

        duration: 1,

        ease: "power2.out"

      },
      "-=1.2"
    );


    // =====================================
    // STAGE 8
    // Light fades
    // =====================================

    if (light) {

      tl.to(light, {

        opacity: 0,

        duration: 1,

        ease: "power1.out"

      }, "<");

    }


    // =====================================
    // Cleanup
    // =====================================

    return () => {

      tl.kill();

      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    };

  }, []);

}