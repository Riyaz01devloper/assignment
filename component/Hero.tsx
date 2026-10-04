"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // -------------------------
      // HEADLINE INTRO
      // -------------------------
      gsap.from(".hero-title", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      // -------------------------
      // STATISTICS INTRO
      // -------------------------
      gsap.from(".stat", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.4,
        ease: "power3.out",
      });

      // -------------------------
      // RESPONSIVE CAR ANIMATION
      // -------------------------

      const isMobile = window.innerWidth < 768;

      gsap.to(".hero-object", {
        x: isMobile ? 100 : 300,
        y: isMobile ? -70 : -100,
        scale: isMobile ? 1.15 : 1.35,
        rotate: isMobile ? 8 : 12,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: isMobile ? "+=900" : "+=1400",
          scrub: 1,
          pin: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* =========================
          HEADLINE
      ========================== */}

      <div className="absolute left-1/2 top-8 w-full -translate-x-1/2 px-4 text-center sm:top-10 md:top-12">
        <h1
          className="
            hero-title
            whitespace-nowrap
            text-[15px]
            font-light
            tracking-[0.12em]
            sm:text-2xl
            sm:tracking-[0.18em]
            md:text-4xl
            lg:text-5xl
            xl:text-6xl
          "
        >
          W E L C O M E I T Z F I Z Z
        </h1>
      </div>

      {/* =========================
          CAR
      ========================== */}

      <div
        className="
          hero-object
          absolute
          left-1/2
          top-[45%]
          -translate-x-1/2
          -translate-y-1/2
          sm:top-[46%]
          md:top-[48%]
        "
      >
        <Image
          src="/images/image.png"
          alt="Car"
          width={500}
          height={300}
          priority
          className="
            w-[240px]
            object-contain
            sm:w-[320px]
            md:w-[420px]
            lg:w-[500px]
          "
        />
      </div>

      {/* =========================
          STATISTICS
      ========================== */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          grid
          w-[92%]
          max-w-6xl
          -translate-x-1/2
          grid-cols-2
          gap-x-5
          gap-y-6
          sm:bottom-8
          sm:gap-x-8
          sm:gap-y-8
          md:bottom-12
          md:grid-cols-4
          md:gap-10
        "
      >
        {/* STAT 1 */}

        <div className="stat text-center">
          <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
            58%
          </p>

          <p className="mx-auto mt-1 max-w-[150px] text-[10px] leading-relaxed text-gray-400 sm:text-xs md:text-sm">
            Increase in pick up point use
          </p>
        </div>

        {/* STAT 2 */}

        <div className="stat text-center">
          <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
            23%
          </p>

          <p className="mx-auto mt-1 max-w-[150px] text-[10px] leading-relaxed text-gray-400 sm:text-xs md:text-sm">
            Decreased in customer phone calls
          </p>
        </div>

        {/* STAT 3 */}

        <div className="stat text-center">
          <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
            27%
          </p>

          <p className="mx-auto mt-1 max-w-[150px] text-[10px] leading-relaxed text-gray-400 sm:text-xs md:text-sm">
            Increase in pick up point use
          </p>
        </div>

        {/* STAT 4 */}

        <div className="stat text-center">
          <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
            40%
          </p>

          <p className="mx-auto mt-1 max-w-[150px] text-[10px] leading-relaxed text-gray-400 sm:text-xs md:text-sm">
            Decreased in customer phone calls
          </p>
        </div>
      </div>
    </section>
  );
}