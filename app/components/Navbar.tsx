"use client";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`p-4 z-20 flex items-center gap-2 fixed ${
        scroll ? "bg-white dark:bg-black" : "bg-transparent"
      }  w-full`}
    >
      <motion.svg
        transition={{ duration: 1, delay: 0.4 }}
        width="25"
        height="25"
        viewBox="0 0 94 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          className="dark:stroke-white"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, strokeWidth: 6.43629 }}
          transition={{ duration: 1, delay: 0.4 }}
          d="M82.0132 19.8976C88.7069 15.0919 91.9251 17.5377 89.1789 25.3041L71.8438 73.8337C71.2431 75.5501 69.2264 76.9661 67.4242 76.9661H27.0902C25.2881 76.9661 23.2713 75.5501 22.6706 73.8337L4.90646 24.1027C2.37485 16.9799 5.33555 14.7915 11.4286 19.1682L28.1629 31.1397C30.952 33.0706 34.1272 32.0837 35.3287 28.9514L42.8805 8.82722C45.2834 2.39093 49.2739 2.39093 51.6768 8.82722L59.2287 28.9514C60.4301 32.0837 63.6054 33.0706 66.3515 31.1397L69.0548 29.2088"
          stroke="black"
          stroke-width="6.43629"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, strokeWidth: 6.43629 }}
          transition={{ duration: 1, delay: 0.4 }}
          d="M23.6609 89.8811H70.8603"
          stroke="yellow"
          stroke-width="6.43629"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          className="dark:stroke-white"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, strokeWidth: 6.43629 }}
          transition={{ duration: 1, delay: 0.4 }}
          d="M36.5335 55.5542H57.9878"
          stroke="black"
          stroke-width="6.43629"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </motion.svg>

      <div className="text-xl font-bold ">Qalite</div>
      <div className="flex-1">
        <ul className="flex justify-end items-center gap-8 font-semibold text-lg dark:text-white">
          <Link href="/">About</Link>
          <Link href="/">Cars</Link>
          <Link href="/">Help</Link>

          <Link
            href="/signup"
            className="py-2 px-4 flex justify-center items-center gap-4 dark:bg-white bg-black hover:bg-gray-700 dark:text-black text-white rounded-full"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 94 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                className="dark:stroke-black"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, strokeWidth: 6.43629 }}
                transition={{ duration: 1, delay: 0.4 }}
                d="M90.16 35.2018V67.6362C90.16 72.9471 87.3149 77.8787 82.7152 80.5815L54.5484 96.8462C49.9488 99.5017 44.2585 99.5017 39.6115 96.8462L11.4448 80.5815C6.84513 77.9261 4 72.9945 4 67.6362V35.2018C4 29.8909 6.84513 24.9591 11.4448 22.2562L39.6115 5.99159C44.2111 3.33614 49.9014 3.33614 54.5484 5.99159L82.7152 22.2562C87.3149 24.9591 90.16 29.8434 90.16 35.2018Z"
                stroke="white"
                stroke-width="7.11284"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <motion.path
                className="dark:stroke-black"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, strokeWidth: 6.43629 }}
                transition={{ duration: 1, delay: 0.4 }}
                d="M47.1036 46.6775C53.2059 46.6775 58.1522 41.7306 58.1522 35.6286C58.1522 29.5266 53.2059 24.5802 47.1036 24.5802C41.0017 24.5802 36.0552 29.5266 36.0552 35.6286C36.0552 41.7306 41.0017 46.6775 47.1036 46.6775Z"
                stroke="white"
                stroke-width="7.11284"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <motion.path
                className="dark:stroke-black"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, strokeWidth: 6.43629 }}
                transition={{ duration: 1, delay: 0.4 }}
                d="M66.0712 73.5166C66.0712 64.9812 57.5832 58.058 47.1037 58.058C36.6241 58.058 28.1361 64.9812 28.1361 73.5166"
                stroke="white"
                stroke-width="7.11284"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Get Started
          </Link>
          <ModeToggle />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
