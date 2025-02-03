"use client";

import { Button } from "@/components/ui/button";
import { LucidePhoneCall, LucideShieldQuestion } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import WaveDivider from "../../../public/WaveDivider.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-full relative">
      <section className="relative w-full min-h-screen flex items-center md:justify-start justify-center bg-[#1e1e1e] bg-[url('/MargateHeroBG.png')] bg-cover bg-center px-6 md:px-24 py-12">
        {/* Background Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F49FB7]/25 to-[#404040]/25"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center md:items-start gap-6 md:gap-8 text-white text-center md:text-left max-w-2xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif leading-tight">
            Mortgage Advice <span className="italic">you</span> can trust
          </h1>
          <p className="text-sm sm:text-base font-sans">
            With years of experience, DSG Home Finance specializes in finding
            the right products to suit your unique needs. No matter your
            circumstances, Dave is committed to pairing you with tailored
            solutions that keep you confident, happy, and protected.
          </p>
          <div className="font-sans flex md:flex-row flex-col items-center gap-3 w-full">
            <Button className="w-full md:w-auto text-black bg-white hover:bg-gray-200 transition text-sm md:text-base">
              How much can I borrow?
              <LucideShieldQuestion />
            </Button>
            <Button className="w-full md:w-auto bg-[#F49FB7] text-black hover:bg-[#f281a4] transition text-sm md:text-base">
              Book a call with David
              <LucidePhoneCall />
            </Button>
          </div>
        </motion.div>
      </section>
      <Image
        src={WaveDivider}
        width="2000"
        alt="Wave Divider"
        className="absolute bottom-0 w-full"
      />
    </div>
  );
};

export default Hero;
