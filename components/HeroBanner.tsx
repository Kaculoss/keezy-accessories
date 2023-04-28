import Image from "next/image";
import React from "react";
import myImage from "../assets/headphones_c_1.webp";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="py-24 px-10 font-medium mb-10 text-slate-500 bg-slate-400 rounded-2xl relative h-[450px] leading-[.9] md:h-[500px] md:leading-[1.3] w-full">
      <div>
        <p className="text-[20px] text-slate-900">Beats Solo Air</p>
        <h3 className=" mt-1 text-[2.5rem] md:text-[3.5rem] text-slate-900 font-bold">
          Summer Sale
        </h3>
        <h1 className="text-[3rem] -ml-[20px] uppercase md:text-[8em] text-slate-50 font-extrabold">
          Fine
        </h1>
        <Image
          className="w-[77%] h-[62%] absolute -top-[2%] -right-[3%] md:top-0 md:right-[20%] md:w-[450px] md:h-240px]"
          height={500}
          width={500}
          src={myImage}
          alt="banner"
        />
        <div>
          <Link href="/">
            <button
              type="button"
              className="rounded-xl py-2 px-4 bg-red-600 text-white border-none mt-10 text-[18px] font-semibold cursor-pointer z-50 md:mt-15"
            >
              Shop Now
            </button>
          </Link>
          <div className="absolute right-[10%] bottom-[40px] w-[300px] leading-[1.3] flex flex-col md:bottom-[5%] ">
            <h5 className="mt-3 text-[16px] font-bold self-end text-slate-700">
              Description
            </h5>
            <p className="font-[100] text-end text-slate-900">
              This is the banner description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
