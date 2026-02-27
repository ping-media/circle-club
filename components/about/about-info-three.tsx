"use client";

import { motion } from "framer-motion";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { Button } from "../ui/button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutInfoThree = () => {
  return (
    <Container className="flex flex-col bg-white/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="flex flex-col items-center justify-center p-14 gap-14"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-center gap-4"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel
              number="004"
              label="Global Reach"
              colorClassName="text-white"
              descriptionClassName="text-white/64!"
              squareClassName="text-white/10!"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle
              title={
                <>
                  Based in monaco. Operating without <br /> borders
                </>
              }
              colorClassName="lg:text-[40px]! text-white text-center"
            />
          </motion.div>
          <motion.p
            className="text-white md:max-w-lg text-center"
            variants={itemVariants}
          >
            While rooted in Monaco, our services extend internationally and We
            respond to requests wherever our clients operate.
          </motion.p>
        </motion.div>

        {/* <motion.div variants={itemVariants}> */}
        <Button
          variant="outline"
          className="md:w-1/3 text-sm rounded-none font-semibold uppercase tracking-[0.1em] px-3 py-5 bg-gold-200 text-brown-100 hover:bg-gold-200/95 hover:text-brown-100 transition-colors"
        >
          Request Access
        </Button>
        {/* </motion.div> */}
      </motion.div>
    </Container>
  );
};

export default AboutInfoThree;
