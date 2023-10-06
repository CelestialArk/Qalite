"use client";

import Image from "next/image";
import logos from "./assets/icons/logos";
import { motion } from "framer-motion";

function LogoCarousel() {
  return (
    <motion.div className="flex justify-center cursor-grab overflow-hidden w-4/5">
      <motion.div
        className="flex gap-11"
        initial={{ x: 1000 }}
        animate={{ x: -1000 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {logos.map((logo) => (
          <motion.div className="h-24 w-24" key={logo.src}>
            <Image src={logo} className="h-full w-full" alt="logo" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default LogoCarousel;
