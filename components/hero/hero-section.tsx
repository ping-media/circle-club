"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import AnimatedHeader from "../layout/animated-header";
import HeroVideo from "./hero-video";
import Container from "../shared/container";
import { Button } from "@/components/ui/button";
import SocialBtn from "./social-button";
import HeroReview from "./hero-review";

const HeroSection = () => {
  const [phase, setPhase] = useState<AnimatedHeaderPhase>("center");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("nav"), 1800);
    const t2 = setTimeout(() => setPhase("reveal"), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {/* Video Background */}
      <HeroVideo src="videos/hero.mp4" />

      {/* Animated Header */}
      <AnimatedHeader phase={phase} />

      {/* Hero Content */}
      <Container className="relative z-10 flex h-full items-end pb-6 px-6 md:px-0">
        <div className="grid w-full gap-8 md:grid-cols-12 md:items-end">
          {/* Left: Headline */}
          <div className="flex flex-col gap-8 md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={phase === "reveal" ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            >
              <HeroReview />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={phase === "reveal" ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] text-white">
                Join The
                <br />
                Experience
              </h1>
            </motion.div>
          </div>

          {/* Right: Description + CTAs */}
          <motion.div
            className="md:col-span-6 md:col-start-9 max-w-sm flex flex-col gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={phase === "reveal" ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm leading-relaxed text-white">
              Private access to Monaco's most prestigious moments, curated
              through trusted connections and discreet hospitality for a
              distinguished few.
            </p>

            <div className="flex items-center gap-3">
              <Button className="text-xs 2xl:text-sm rounded-none font-bold uppercase tracking-[0.1em] transition-colors text-brown-200 bg-gradient-to-r from-gold-medium to-gold-light px-3 py-5">
                Explore the Experience
              </Button>

              <Button
                variant="outline"
                className="text-xs 2xl:text-sm rounded-none font-bold uppercase tracking-[0.1em] px-3 py-5 bg-transparent text-gold-100 border-gold-100 hover:bg-gold-100/40 hover:border-gold-100 hover:text-white transition-colors"
              >
                Request Access
              </Button>

              <SocialBtn />
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
