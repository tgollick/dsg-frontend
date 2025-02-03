import { Button } from "@/components/ui/button";
import React from "react";
import ProductImages from "./ProductImages";
import { LucideShieldQuestion } from "lucide-react";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center bg-[#1e1e1e] border-none">
      <section className="w-full max-w-[1200px] md:py-12 md:px-0 px-6 pt-14 p-20 flex flex-col items-center text-center md:gap-10 gap-8">
        <div className="w-full max-w-[800px] text-white">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            With over 10,000+ Products Available
          </h2>
          <p className="text-sm sm:text-base font-sans">
            Here at DSG Home Finance, we are whole-of-market Mortgage Advisors.
            We do the mortgage comparisons and find a good deal for you. With
            access to over 50 lenders and thousands of products, you can be
            confident you are getting the right deal for you.
          </p>
        </div>
        <ProductImages />
        <Button className="w-full md:w-auto text-black bg-white hover:bg-gray-200 transition text-sm md:text-base font-sans">
          How much can I borrow?
          <LucideShieldQuestion />
        </Button>{" "}
      </section>
    </div>
  );
};

export default Products;
