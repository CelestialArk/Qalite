"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { loggedContext } from "../context/LoggedContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { isAxiosError } from "axios";
import { toast } from "@/components/ui/use-toast";

function NavMenu() {
  const router = useRouter();
  const logged = useContext(loggedContext);
  useEffect(() => {
    if (logged?.user?.data.admin) {
      router.push("/");
    }
    if (!logged?.user) {
      router.push("/");
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "User Logged out.",
      });
    }
  }, [logged]);

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
        className="cursor-pointer rounded-sm shadow-xl"
        onClick={() => {
          router.push("/dashboard");
        }}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
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
        className="text-xl font-semibold"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, delayChildren: 0.5 }}
      >
        Welcome, {logged?.user?.data.firstname}
      </motion.div>
      <div className="">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Button
            variant={"destructive"}
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default NavMenu;
