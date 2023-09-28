"use client";
import { toast } from "@/components/ui/use-toast";
import axios, { isAxiosError } from "axios";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  hashedPassword: string;
  admin: boolean;
  iat: number;
};

export const loggedContext = createContext<User | null>(null);

export default function LoggedContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const handleCheck = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "/api/auth/check",
          withCredentials: true,
        });

        setUser(response.data);
      } catch (err) {
        if (isAxiosError(err)) {
          toast({
            variant: "default",
            description: err.response?.data,
          });
        }
      }
    };

    handleCheck();
  }, []);
  return (
    <loggedContext.Provider value={user}>{children}</loggedContext.Provider>
  );
}
