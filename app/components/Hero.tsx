"use client";
import Image from "next/image";
import Car from "./assets/icons/car.webp";
import { motion } from "framer-motion";
import FadeOut from "./FadeOut";
import Tesla from "./assets/icons/Tesla.png";
import Mercedes from "./assets/icons/Mercedes.png";
import Ferrari from "./assets/icons/Ferrari.png";
import Chavrolet from "./assets/icons/Chevrolet.png";
import BMW from "./assets/icons/BMW.png";
import Lamborghini from "./assets/icons/Lamborghini.png";
import Logo from "./Logo";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <FadeOut scroll={200}>
      <div className="flex pt-10 flex-col lg:flex-row justify-start items-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="p-6 w-1/2 text-black font-bold text-6xl flex-col justify-center items-start"
        >
          Premium Car Rentals In{" "}
          <Typewriter
            options={{
              strings: [
                "casablanca",
                "Rabat",
                "Tanger",
                "Tetouan",
                "Oujda",
                "Marrakech",
                "Agadir",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-black text-xl font-regular">
            Don't deny yourself
            <br /> the pleasure of driving
            <br /> the best cars now!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.7,
            ease: "linear",
          }}
        >
          <Image src={Car} alt="Car" />
        </motion.div>
      </div>
      <div className="flex flex-wrap gap-20 justify-center ">
        <Logo image={Chavrolet} delay={0} />
        <Logo image={Mercedes} delay={0.2} />
        <Logo image={BMW} delay={0.4} />
        <Logo image={Tesla} delay={0.6} />
        <Logo image={Ferrari} delay={0.8} />
        <Logo image={Lamborghini} delay={1} />
      </div>
    </FadeOut>
  );
}

export default Hero;
