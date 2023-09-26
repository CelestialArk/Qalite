"use client";
import { motion } from "framer-motion";
import Link from "next/link";
function Contact() {
  return (
    <motion.div className="h-screen flex gap-10 flex-col justify-center p-10">
      <div>
        <div className="font-semibold text-lg text-gray-400">
          Start Now with Qalite
        </div>
        <div className="text-black font-bold text-5xl mb-4">Register</div>
      </div>
      <div className="w-full h-[0.5px] bg-gray-400" />
      <main className="w-full h-full flex flex-col gap-6 items-center justify-center rounded-3xl">
        <div className="text-5xl text-white font-bold">Join Now!</div>
        <div className="text-xl text-gray-400 font-semibold text-center">
          Create an account and start renting our Premium Cars
        </div>
        <Link
          href="/"
          className="bg-white text-black p-4 rounded-full flex items-center gap-3 hover:bg-gray-300 font-semibold "
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 94 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M90.16 35.2018V67.6362C90.16 72.9471 87.3149 77.8787 82.7152 80.5815L54.5484 96.8462C49.9488 99.5017 44.2585 99.5017 39.6115 96.8462L11.4448 80.5815C6.84513 77.9261 4 72.9945 4 67.6362V35.2018C4 29.8909 6.84513 24.9591 11.4448 22.2562L39.6115 5.99159C44.2111 3.33614 49.9014 3.33614 54.5484 5.99159L82.7152 22.2562C87.3149 24.9591 90.16 29.8434 90.16 35.2018Z"
              stroke="black"
              strokeWidth="7.11284"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M47.1036 46.6775C53.2059 46.6775 58.1522 41.7306 58.1522 35.6286C58.1522 29.5266 53.2059 24.5802 47.1036 24.5802C41.0017 24.5802 36.0552 29.5266 36.0552 35.6286C36.0552 41.7306 41.0017 46.6775 47.1036 46.6775Z"
              stroke="black"
              strokeWidth="7.11284"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M66.0712 73.5166C66.0712 64.9812 57.5832 58.058 47.1037 58.058C36.6241 58.058 28.1361 64.9812 28.1361 73.5166"
              stroke="black"
              strokeWidth="7.11284"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Get Started
        </Link>
      </main>

      <div className="w-full h-[0.5px] bg-gray-400" />
    </motion.div>
  );
}

export default Contact;
