"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
function Card({
  icon,
  text,
  delay,
  title,
}: {
  icon: StaticImageData;
  text: string;
  delay: number;
  title: string;
}) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 1 }}
      className="w-1/3"
    >
      <div className="border-2 border-gray-400 shadow-xl rounded-xl p-8 ">
        <Image className="w-12 h-12 text-black" src={icon} alt="icon" />
        <div className="mt-4 text-black font-semibold flex justify-start">
          {title}
        </div>
        <div className="">{text}</div>
      </div>
    </motion.div>
  );
}
export default Card;
