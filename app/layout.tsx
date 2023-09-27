import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/Providers/ThemeProvider";
import { Suspense } from "react";
import Loading from "./Loading";
import { Toaster } from "@/components/ui/toaster";
import LoggedContextProvider from "./context/LoggedContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qalite",
  description: "A website for renting cars with NextJS and Prisma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Suspense fallback={<Loading />}>
            <Toaster />
            <LoggedContextProvider>{children}</LoggedContextProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
