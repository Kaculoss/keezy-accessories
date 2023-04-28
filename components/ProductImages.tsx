"use client";

import React, { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  name: string;
};

const ProductImages = ({ images, name }: Props) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="flex justify-center">
        <Image
          src={images[index]}
          alt={name}
          width={700}
          height={700}
          className="w-[350px] h-[350px] rounded-2xl cursor-pointer bg-slate-400 transition duration-300 ease-in-out md:w-[500px] md:h-[500px] lg:w-[600] lg:h-[600] hover:bg-red-600 block object-contain"
        />
      </div>
      <div className="flex gap-2 mt-5 flex-wrap justify-center">
        {images?.map((item, i) => {
          return (
            <Image
              src={item}
              alt={name}
              width={200}
              height={200}
              className={`w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px] cursor-pointer rounded-lg ${
                i === index ? "bg-red-600" : "bg-slate-400"
              }`}
              key={i}
              onMouseEnter={() => setIndex(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
