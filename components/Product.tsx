import Link from "next/link";
import React from "react";
import myImage from "../assets/headphones_c_1.webp";
import Image from "next/image";

interface IProps {
  imageUrl?: string;
  itemName: string;
  itemPrice: number;
  itemUrl: string;
  itemDesc?: string;
}

const Product = ({
  imageUrl,
  itemName,
  itemPrice,
  itemUrl,
  itemDesc,
}: IProps) => {
  return (
    <Link
      href={`/product/${itemUrl}`}
      className="cursor-pointer scale-100 transition-transform duration-500 mx-2 p-2 flex justify-center items-center flex-col w-40 h-72 md:w-52 md:h-80 shadow-xl hover:scale-105"
    >
      <Image
        className="rounded-2xl bg-slate-400 scale-100 transition-transform duration-500 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
        height={500}
        width={500}
        src={imageUrl || myImage}
        alt={itemName}
      />
      <div className="w-full mt-2">
        <p className="font-bold text-slate-900 dark:text-slate-200">
          {itemName}
        </p>
        <p className="font-normal text-slate-700 dark:text-slate-400">
          {itemDesc}
        </p>
        <p className="font-bold mt-[6px] text-sky-500 dark:text-sky-400 w-full text-right">
          GH&#8373; {itemPrice}
        </p>
      </div>
    </Link>
  );
};

export default Product;
