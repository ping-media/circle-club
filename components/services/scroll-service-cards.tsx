"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../shared/container";
import { serviceList, SERVICES_LIST } from "@/constants/service";
import Image from "next/image";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";

interface StackingCardProps {
  index: number;
  totalCards: number;
  children: React.ReactNode;
}

const StackingCard = ({ index, children }: StackingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="flex items-center justify-center"
      style={{
        position: "sticky",
        top: "10vh",
        zIndex: index + 1,
      }}
    >
      <motion.div className="w-full px-0 md:px-6 bg-gold-40 h-[75vh] md:h-[85vh] flex flex-col">
        {children}
      </motion.div>
    </div>
  );
};

const StackingCards = () => {
  return (
    <>
      <Container className="relative z-50">
        {SERVICES_LIST.map((service, index) => (
          <StackingCard
            key={service.id}
            index={index}
            totalCards={SERVICES_LIST.length}
          >
            <ServiceCard {...service} />
          </StackingCard>
        ))}
      </Container>
    </>
  );
};

export default StackingCards;

const ServiceCard = ({
  id,
  title,
  bullets,
  cta,
  src,
  overlay,
  description,
}: serviceList) => {
  return (
    <div className="w-full bg-[#FFF9E7] border border-[#E9E4D6] flex-1 h-full">
      <div className="flex flex-col gap-6 md:gap-8 md:flex-row h-full">
        {/* Left content */}
        <div className="order-2 md:order-0 flex-1 h-full p-4 flex flex-col md:justify-between">
          <div>
            <SectionLabel
              number={id}
              label="Service"
              squareClassName="bg-[#0E0E0E29]!"
            />

            <div className="flex flex-col gap-3 mt-3 md:mt-5">
              <SectionTitle
                title={title}
                colorClassName="text-2xl! font-bold! md:text-[56px]! leading-normal! md:leading-19!"
              />

              {bullets && (
                <ul className="flex flex-col gap-3 mb-8">
                  {bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-base font-body text-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {description && <p className="space-y-2 mb-8">{description}</p>}
            </div>
          </div>

          <button className="inline-flex items-center gap-2 bg-brown-100 text-white px-5 py-3 text-xs font-body font-semibold tracking-widest uppercase w-fit hover:opacity-90 transition-opacity">
            {cta}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right image */}
        {/* <div className="flex-1 relative overflow-hidden h-full"> */}
        <div className="order-1 md:order-0 flex-1 flex items-center justify-end mt-3 md:mt-5 p-4 md:p-8">
          <div className="relative w-full md:w-[85%] h-full overflow-hidden">
            <Image src={src} alt={title} fill className="object-cover" />

            {overlay && (
              <div className="absolute inset-x-0 bottom-0 bg-[#FFFFFF1A] backdrop-blur-3xl h-[105px] md:h-[161px] p-5 md:p-8">
                <p className="font-display text-2xl md:text-3xl font-bold text-[#FFFFFF5E]! uppercase leading-tight">
                  {overlay}
                </p>
              </div>
            )}
          </div>
          {/* <Image
            src={src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            fill
          />
          {overlay && (
            <div className="absolute inset-x-0 bottom-0 left-0 bg-[#FFFFFF1A] backdrop-blur-3xl h-[105px] md:h-[161px] p-5 md:p-8">
              <p className="font-display text-2xl md:text-3xl font-bold text-[#FFFFFF5E]! uppercase leading-tight">
                {overlay}
              </p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};
