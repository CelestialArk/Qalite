"use client";
import Image from "next/image";
import Devices from "./assets/icons/Devices.webp";
import { motion } from "framer-motion";
import FadeOut from "./FadeOut";
function About() {
  return (
    <FadeOut scroll={800}>
      <div className="h-screen flex flex-col lg:flex-row justify-center items-center">
        <motion.div
          className="flex justify-center items-center w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image src={Devices} alt="Phone" />
        </motion.div>
        <div className="flex flex-col justify-center items-center w-1/2">
          <div className="font-semibold text-lg text-gray-400">
            What we are about
          </div>
          <div className="text-black font-bold text-5xl mb-4">
            The Qalite App
          </div>
          <div className=" font-semibold text-lg">
            Our website provides a user-friendly interface to contact your local
            car rental service. We provide an easy to use application to rent
            your favourite premium car in casablanca. Whther you're using a
            laptop or a phone, our application is there with you the whole way.
          </div>
        </div>
      </div>
    </FadeOut>
  );
}

export default About;
