"use client";
import axios, { isAxiosError } from "axios";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

type User = {
  data: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    hashedPassword: string;
    admin: boolean;
    iat: number;
  };
};

type UserContext = {
  user: User | null;
  userLogout: () => void;
  refetchToken: () => void;
};

export const loggedContext = createContext<UserContext | null>(null);

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
          console.clear();
        }
      }
    };
    handleCheck();
  }, []);

  const userLogout = () => {
    setUser(null);
  };

  const refetchToken = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/api/auth/check",
        withCredentials: true,
      });

      setUser(response.data);
    } catch (err) {
      if (isAxiosError(err)) {
        console.clear();
      }
    }
  };

  return (
    <loggedContext.Provider value={{ user, userLogout, refetchToken }}>
      {children}
    </loggedContext.Provider>
  );
}
