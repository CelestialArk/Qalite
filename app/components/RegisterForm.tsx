"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import axios, { isAxiosError } from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { loggedContext } from "../context/LoggedContext";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verify, setVerify] = useState<string>("");
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
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    try {
      if (password !== verify) {
        setLoading(false);

        return toast({
          variant: "destructive",
          title: "Oops! Something went wrong.",
          description: "passwords do not match.",
        });
      }
      const response = await axios({
        method: "post",
        url: "/api/auth/signup",
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        },
      });
      setLoading(false);
      logged?.refetchToken();

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
          title: "Oops! Something went wrong.",
          description: err.response?.data,
        });
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col gap-2 rounded-xl w-full shadow-xl dark:shadow-white dark:shadow-md dark:border-2 dark:border-white p-11"
      initial={{ opacity: 0, scale: 0 }}
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

      <div className="text-center text-5xl font-bold mb-4">
        SignUp <span className="text-tertiary">Now</span>!
      </div>
      <div className="flex items-center gap-4">
        <div className="my-2">
          <Label htmlFor="Firstname">Firstname</Label>
          <Input
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            type="text"
            id="Firstname"
            placeholder="Firstname"
          />
        </div>
        <div className="my-2">
          <Label htmlFor="Lastname">Lastname</Label>
          <Input
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            type="text"
            id="Lastname"
            placeholder="Lastname"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="Email">Email</Label>
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          id="Email"
          placeholder="Email"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="my-2">
          <Label htmlFor="Password">Password</Label>
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="Password"
            placeholder="Password"
          />
        </div>
        <div className="my-2">
          <Label htmlFor="VerifyPassword">Verify</Label>
          <Input
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
            value={verify}
            onChange={(e) => {
              setVerify(e.target.value);
            }}
            type="password"
            id="VerifyPassword"
            placeholder="Verify Password"
          />
        </div>
      </div>
      <Button
        className="mt-4 flex justify-center gap-3"
        onClick={() => {
          setLoading(true);
          handleSignUp();
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
        Register
      </Button>
      <div>
        Already have an account ?{" "}
        <Link
          href="/signin"
          className="font-semibold hover:text-tertiary hover:underline"
        >
          Sign In
        </Link>
      </div>
    </motion.div>
  );
}

export default RegisterForm;
