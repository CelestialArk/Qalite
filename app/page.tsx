"use client";
import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToAbout = () => {
    if (!aboutRef.current) return;
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFeatures = () => {
    if (!featuresRef.current) return;
    featuresRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    if (!contactRef.current) return;
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHero = () => {
    if (!heroRef.current) return;
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="">
      <div>
        <Navbar
          scrollToHero={scrollToHero}
          scrollToAbout={scrollToAbout}
          scrollToContact={scrollToContact}
          scrollToFeatures={scrollToFeatures}
        />
      </div>
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
