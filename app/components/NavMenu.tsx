"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { loggedContext } from "../context/LoggedContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { isAxiosError } from "axios";
import { toast } from "@/components/ui/use-toast";
import Logout from "./assets/svg/Logout.svg";
import { ModeToggle } from "./ModeToggle";

function NavMenu() {
  const router = useRouter();
  const logged = useContext(loggedContext);
  useEffect(() => {
    if (!logged?.user) {
      router.push("/loading");
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axios({
        method: "delete",
        url: "/api/auth/signout",
      });

      logged?.userLogout();

      router.push("/signin");
    } catch (err) {
      if (isAxiosError(err)) {
        toast({
          title: "Oops! Something went wrong",
          variant: "destructive",
          description: err.response?.data,
        });
      }
    }
  };

  return (
    <div className="top-0 fixed w-full p-4 shdaow-lg flex justify-start items-center gap-4">
      <motion.svg
        className="cursor-pointer "
        onClick={() => {
          router.push("/dashboard");
        }}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        width="50"
        height="50"
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
          strokeWidth="6.43629"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, strokeWidth: 6.43629 }}
          transition={{ duration: 1, delay: 0.4 }}
          d="M23.6609 89.8811H70.8603"
          stroke="yellow"
          strokeWidth="6.43629"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          className="dark:stroke-white"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, strokeWidth: 6.43629 }}
          transition={{ duration: 1, delay: 0.4 }}
          d="M36.5335 55.5542H57.9878"
          stroke="black"
          strokeWidth="6.43629"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      <motion.div
        className="text-xl font-semibold w-full"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, delayChildren: 0.5 }}
      >
        Welcome, {logged?.user?.data.firstname}
      </motion.div>
      <motion.div
        className="w-full flex justify-end gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ModeToggle />

        <Button
          variant={"destructive"}
          onClick={() => {
            handleLogout();
          }}
          className="flex gap-2 rounded-full hover:animate-pulse"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 97 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.6803 55.7329C25.6803 53.4638 27.5621 51.582 29.8312 51.582H60.1607V4.75971C60.1053 2.10313 58.0022 0 55.3456 0C22.747 0 0 22.747 0 55.3455C0 87.944 22.747 110.691 55.3456 110.691C57.9469 110.691 60.1053 108.588 60.1053 105.931V59.8285H29.8312C27.5067 59.8838 25.6803 58.0021 25.6803 55.7329Z"
              fill="white"
            />
            <path
              d="M95.7661 52.8007L80.0479 37.027C78.4429 35.422 75.7863 35.422 74.1813 37.027C72.5763 38.632 72.5763 41.2886 74.1813 42.8936L82.8152 51.5278H60.1236V59.8296H82.7599L74.126 68.4635C72.5209 70.0685 72.5209 72.7251 74.126 74.3301C74.9561 75.1603 76.0077 75.5477 77.0593 75.5477C78.1108 75.5477 79.1624 75.1603 79.9926 74.3301L95.7107 58.5566C97.3711 57.007 97.3711 54.4057 95.7661 52.8007Z"
              fill="white"
            />
          </svg>
          Logout
        </Button>
      </motion.div>
    </div>
  );
}

export default NavMenu;
