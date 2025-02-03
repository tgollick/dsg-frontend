"use client";

import axios from "axios";
import { p } from "motion/react-client";
import React, { useEffect, useState } from "react";

type Props = {};

type Review = {
  author_name: String;
  author_url: String;
  language: String;
  original_language: String;
  profile_photo_url: String;
  rating: number;
  relative_time_description: String;
  text: String;
  time: number;
  translated: boolean;
};

const Testimonials = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center bg-white">
      <section className="w-full max-w-[1200px] md:px-0 py-20 px-6 flex flex-col items-center">
        <div className="w-full max-w-[700px] text-black text-center">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            Testimonals
          </h2>
          <p className="text-sm sm:text-base font-sans">
            We believe our results should speak for themselves. Checkout hundred
            of reviews from happy customers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
