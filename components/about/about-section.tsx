"use client";

import { motion } from "framer-motion";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";

const LIST = [
  "Based in Monaco.",
  "Operating globally.",
  "Selective by nature.",
];

const AboutSection = () => {
  return (
    <Container>
      <div className="grid gap-8 md:grid-cols-12 md:items-start">
        {/* Left Column */}
        <motion.div
          className="md:col-span-5 flex flex-col h-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionLabel number="005" label="About" />

          <div className="mt-36 w-full">
            <video
              className="w-full aspect-square object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/about.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* right Column  */}
        <motion.div
          className="space-y-6 md:col-span-7 flex flex-col gap-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <SectionTitle
            title={
              <>
                This Is Not A Service.
                <br />
                This Is A Circle.
              </>
            }
            colorClassName="text-xl md:text-3xl lg:text-5xl"
          />

          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-2xl md:text-4xl ">
              You don't hire us. <br /> You enter the Circle.
            </h2>

            <p className="w-full md:max-w-md 2xl:max-w-lg">
              A curated private ecosystem built for individuals who expect more
              than access — they expect position.
            </p>

            <ul className="list-disc leading-8 ml-4">
              {LIST.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default AboutSection;
