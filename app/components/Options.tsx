"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Rented from "./assets/icons/Rented.png";
import Rent from "./assets/icons/Rent.png";
import Link from "next/link";

function Options() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-6 ">
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ y: 10 }}
        className="w-1/2 h-2/3 hover:animate-pulse dark:border-2 dark:border-white rounded-xl shadow-xl flex flex-col justify-center items-center"
      >
        <Link
          href=""
          className="text-2xl flex flex-col items-center justify-center w-full font-semibold"
        >
          Rent a Car
          <motion.div>
            <Image src={Rent} alt="rent icon" />
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ y: 10 }}
        className="w-1/2 h-2/3 hover:animate-pulse  dark:border-2 dark:border-white rounded-xl shadow-xl flex flex-col justify-center items-center"
      >
        <Link
          href=""
          className="text-2xl flex flex-col items-center justify-center w-full font-semibold"
        >
          Rented Cars
          <motion.div>
            <Image src={Rented} alt="rented icon" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}

export default Options;
