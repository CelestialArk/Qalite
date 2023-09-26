"use client";
import { useAnimate } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

function FadeOut({
  children,
  scroll,
}: {
  children: ReactNode;
  scroll: number;
}) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scroll) {
        animate(scope.current, { opacity: 0, y: -100 }, { duration: 0.7 });
      } else {
        animate(scope.current, { opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return <div ref={scope}>{children}</div>;
}

export default FadeOut;
