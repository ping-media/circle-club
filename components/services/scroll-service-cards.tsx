"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { serviceList, SERVICES_LIST } from "@/constants/service";
import Container from "../shared/container";

function ServiceCard({
  service,
  index,
}: {
  service: serviceList;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="sticky top-20 md:top-24"
    >
      <div
        className="bg-card rounded-sm border border-border shadow-lg overflow-hidden"
        style={{ marginTop: index * 12 }}
      >
        {/* Label */}
        <div className="px-6 pt-5 pb-2 md:px-10 md:pt-8">
          <span className="text-xs tracking-[0.25em] text-muted-foreground font-medium font-[var(--font-body)]">
            <span className="inline-block w-3 h-3 rounded-sm bg-primary mr-2 align-middle" />
            {service.id} &nbsp; SERVICE
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 px-6 pb-8 md:px-10 md:pb-10">
          {/* Left */}
          <div className="flex-1 flex flex-col justify-between min-h-[220px] md:min-h-[280px]">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight mb-5">
                {service.title}
              </h2>
              {service.bullets && (
                <ul className="space-y-2">
                  {service.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-sm md:text-base text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button className="mt-6 self-start flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-xs tracking-[0.15em] font-semibold rounded-sm hover:opacity-90 transition-opacity">
              {service.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right — Image */}
          <div className="flex-1 relative rounded-sm overflow-hidden min-h-[200px] md:min-h-[320px]">
            <Image
              src={service.src}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
              fill
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/30" />
            <p className="absolute bottom-4 left-4 right-4 text-primary-foreground text-lg md:text-xl font-bold font-[var(--font-display)] leading-tight drop-shadow-lg">
              {service.overlay}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const ScrollServiceCards = () => {
  return (
    <>
      <Container className="relative z-50">
        <div className="space-y-8 md:space-y-12">
          {SERVICES_LIST.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
        {/* Extra scroll space so last card can fully pin */}
        <div className="h-[30vh]" />
      </Container>
    </>
  );
};

export default ScrollServiceCards;
