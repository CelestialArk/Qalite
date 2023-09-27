"use client";
import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="h-screen bg-white flex justify-center items-center dark:bg-white">
      <div className="flex justify-center items-center bg-white rounded-xl animate-pulse shadow-xl p-10">
        <motion.svg
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          width="94"
          height="94"
          viewBox="0 0 94 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="dark:stroke-black"
            d="M82.0132 19.8976C88.7069 15.0919 91.9251 17.5377 89.1789 25.3041L71.8438 73.8337C71.2431 75.5501 69.2264 76.9661 67.4242 76.9661H27.0902C25.2881 76.9661 23.2713 75.5501 22.6706 73.8337L4.90646 24.1027C2.37485 16.9799 5.33555 14.7915 11.4286 19.1682L28.1629 31.1397C30.952 33.0706 34.1272 32.0837 35.3287 28.9514L42.8805 8.82722C45.2834 2.39093 49.2739 2.39093 51.6768 8.82722L59.2287 28.9514C60.4301 32.0837 63.6054 33.0706 66.3515 31.1397L69.0548 29.2088"
            stroke="black"
            strokeWidth="6.43629"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.6609 89.8811H70.8603"
            stroke="yellow"
            strokeWidth="6.43629"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="dark:stroke-black"
            d="M36.5335 55.5542H57.9878"
            stroke="black"
            strokeWidth="6.43629"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>
    </div>
  );
}

export default Loading;
