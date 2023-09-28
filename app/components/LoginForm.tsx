"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios, { isAxiosError } from "axios";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { loggedContext } from "../context/LoggedContext";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const logged = useContext(loggedContext);

  useEffect(() => {
    if (logged?.user) {
      router.push("/dashboard");

      toast({
        variant: "default",
        title: "Logged in!",
        description: "redirecting",
      });
    }
  }, [logged]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setLoading(true);
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "/api/auth/signin",
        data: {
          email: email,
          password: password,
        },
      });

      setLoading(false);
      toast({
        variant: "default",
        title: "Success!",
        description: response.data,
      });
      router.push("/loading");
    } catch (err) {
      if (isAxiosError(err)) {
        setLoading(false);
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong",
          description: err.response?.data,
        });
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col gap-2 rounded-xl p-11 shadow-xl lg:w-1/3 dark:border-2 dark:border-white"
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      }}
    >
      <motion.svg
        className="place-self-center mb-2 shadow-lg dark:shadow-white dark:border-2 dark:border-white p-4 rounded-xl"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        width="94"
        height="94"
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

      <div className="text-5xl font-bold text-center">
        SignIn <span className="text-tertiary">Now</span>!
      </div>
      <div className="mt-2">
        <Label htmlFor="Email">Email</Label>
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          id="Email"
          type="email"
        />
      </div>
      <div className="mt-2">
        <Label htmlFor="Password">Password</Label>
        <Input
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="Password"
          placeholder="Password"
          type="password"
        />
      </div>
      <Button
        className="mt-2 flex justify-center gap-2"
        onClick={() => {
          setLoading(true);
          handleLogin();
        }}
      >
        <svg
          className={`animate-spin ${loading ? null : "hidden"}`}
          width="15"
          height="15"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.01 18.99C15.34 20.25 13.25 21 11 21C5.48 21 2.11 15.44 2.11 15.44M2.11 15.44H6.63M2.11 15.44V20.44M21 11C21 12.82 20.51 14.53 19.66 16M5.03 2.97C6.69 1.73 8.75 1 11 1C17.67 1 21 6.56 21 6.56M21 6.56V1.56M21 6.56H16.56M1 11C1 9.18 1.48 7.47 2.33 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Login
      </Button>
      <div>
        Don&apos;t have an account yet ?{" "}
        <Link
          href="/signup"
          className="font-semibold hover:text-tertiary hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </motion.div>
  );
}

export default LoginForm;
