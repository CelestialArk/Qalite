"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

function Logo({ image, delay }: { image: StaticImageData; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 1 }}
    >
      <Image src={image} className="w-24 h-24" alt="car logo" />
    </motion.div>
  );
}

export default Logo;
