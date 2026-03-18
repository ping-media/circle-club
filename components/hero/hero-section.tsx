"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import AnimatedHeader from "../layout/animated-header";
import Container from "../shared/container";
import { Button } from "@/components/ui/button";
import SocialBtn from "./social-button";
import HeroReview from "./hero-review";
import { useAnimationContext } from "@/context/animation-context";
import Image from "next/image";
import { Variants } from "framer-motion";
import Link from "next/link";

const revealUp: Variants = {
  hidden: { opacity: 0, y: 120 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const HeroSection = () => {
  const { hasHeroAnimated, setHasHeroAnimated } = useAnimationContext();
  const [phase, setPhase] = useState<AnimatedHeaderPhase>(
    hasHeroAnimated ? "reveal" : "center",
  );

  useEffect(() => {
    if (hasHeroAnimated) {
      setPhase("reveal");
      return;
    }

    const t1 = setTimeout(() => setPhase("nav"), 2200);
    const t2 = setTimeout(() => {
      setPhase("reveal");
      setHasHeroAnimated(true);
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [hasHeroAnimated, setHasHeroAnimated]);

  return (
    <>
      <div className="absolute inset-0 h-full w-full">
        {/* Desktop image */}
        <Image
          src="/images/hero-desktop.webp"
          alt="circle club hero"
          fill
          priority
          className="hidden md:block object-cover"
        />

        {/* Mobile image */}
        <Image
          src="/images/hero-mobile.webp"
          alt="circle club hero"
          fill
          priority
          className="block md:hidden object-cover"
        />
      </div>

      {/* Animated Header */}
      <AnimatedHeader phase={phase} />

      {/* Hero Content */}
      {phase === "reveal" && (
        <div className="relative z-10 flex h-full items-end">
          {/* rectangle background  */}
          <div className="absolute -z-10 w-full left-0 bottom-0 h-[468px] md:h-[400px] bg-[linear-gradient(0deg,_rgba(255,_255,_255,_0.1)_-5.14%,_rgba(255,_255,_255,_0)_100%)] backdrop-blur-xs md:backdrop-blur-none" />

          <Container className="px-6 lg:px-0">
            <div className="flex flex-col lg:grid w-full gap-6 md:gap-8 lg:grid-cols-12 my-8 lg:items-end">
              {/* Left: Headline */}
              <div className="flex flex-col gap-8 lg:col-span-6">
                <motion.div
                  variants={revealUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.15 }}
                >
                  <HeroReview />
                </motion.div>

                <motion.div
                  variants={revealUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.35 }}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-[98px] font-black uppercase text-white leading-[100%] lg:leading-[116px]">
                    Join The
                    <br />
                    Experience
                  </h1>
                </motion.div>
              </div>

              {/* Right: Description + CTAs */}
              <motion.div
                className="flex flex-col lg:col-span-6 lg:col-start-9 gap-6 lg:gap-8 mb-7.5"
                variants={revealUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.65 }}
              >
                <p className="text-sm lg:text-xl tracking-[-0.05px] leading-[100%] font-normal text-white w-full lg:w-[442px]">
                  Private access to Monaco's most prestigious moments, curated
                  through trusted connections and discreet hospitality for a
                  distinguished few.
                </p>

                <div className="flex items-center lg:gap-6">
                  <div className="w-full flex flex-wrap lg:flex-nowrap items-center gap-3 md:gap-6">
                    {/* bg-gradient-to-r from-gold-medium to-gold-light */}
                    <Button
                      className="w-full lg:w-auto text-xs 2xl:text-sm rounded-none font-bold uppercase tracking-[0.1em] transition-colors text-brown-200 bg-white hover:bg-white px-3 py-5 border-none"
                      asChild
                    >
                      <Link href="/services">Explore the Experience</Link>
                    </Button>

                    {/* text-gold-100 border-gold-100 hover:bg-gold-100/40 hover:border-gold-100 hover:text-white */}
                    <Button
                      variant="outline"
                      className="w-full lg:w-auto text-xs 2xl:text-sm rounded-none font-bold uppercase tracking-[0.1em] px-3 py-5 bg-transparent text-white border-white hover:border-white transition-colors"
                      asChild
                    >
                      <Link href="/request-access">Request Access</Link>
                    </Button>
                  </div>

                  <SocialBtn />
                </div>
              </motion.div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default HeroSection;
