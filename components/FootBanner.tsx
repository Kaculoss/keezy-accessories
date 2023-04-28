import Image from "next/image";
import Link from "next/link";
import React from "react";
import myImage from "../assets/headphones_c_1.webp";

const FootBanner = () => {
  return (
    <div className="py-24 px-10 font-normal mt-20 text-slate-50 bg-red-600 rounded-2xl relative h-auto leading-none md:h-[550px] md:mt-28 w-full">
      <div className="flex justify-between flex-wrap sm:gap-5">
        <div>
          <p className="m-[18px]">20% OFF</p>
          <h3 className="font-black text-[50px] ml-1 md:text-[80px] md:ml-6">
            FINE
          </h3>
          <h3 className="font-black text-[50px] ml-1 md:text-[80px] md:ml-6">
            SMILE
          </h3>
          <p className="m-[18px]">15 Nov to 7 Dec</p>
        </div>
        <div className="leading-[1.4]">
          <p className="text-[18px]">Beats Solo Air</p>
          <h3 className="text-[45px] font-extrabold md:text-[60px]">
            Summer Sale
          </h3>
          <p className="text-[18px]">Best headphones on the market</p>
          <Link href="/">
            <button
              type="button"
              className="rounded-2xl py-2 px-4 bg-slate-100 text-red-600 border-none mt-10 text-[18px] font-medium cursor-pointer"
            >
              Shop Now
            </button>
          </Link>
        </div>
        <Image
          className="w-[77%] h-[56%] absolute top-[6%] left-[25%] md:top-[25%] text-transparent"
          height={555}
          width={555}
          src={myImage}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default FootBanner;
