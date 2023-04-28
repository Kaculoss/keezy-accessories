"use client";

import { Product } from "@/types/sanity-types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import QuantityButtons from "./QuantityButtons";

type Props = {
  product: Product;
};

const AddToCart = ({ product }: Props) => {
  // const { addToCart } = useCartContext();
  const { _id, stock, colours } = product;
  const [colors, setColors] = useState<string[]>([]);
  const [mainColor, setMainColor] = useState<string>(colors[0]);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (colours) {
      setColors(colours.map((colour) => colour.hash));
    } else {
      setColors(["not specified"]);
    }
  }, [colours]);

  const increase = () => {
    if (stock) {
      setQuantity((prevAmount) => {
        let tempAmount = prevAmount + 1;
        if (tempAmount > stock) {
          tempAmount = stock;
        }
        return tempAmount;
      });
    }
  };

  const decrease = () => {
    setQuantity((prevAmount) => {
      let tempAmount = prevAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-[125px,1fr] items-center mb-4">
        <span className="capitalize font-bold">colors :</span>
        <div className="flex">
          {colors.map((color, index) => {
            if (color[0] === "#")
              return (
                <button
                  key={index}
                  style={{ background: color }}
                  className={`w-6 h-6 rounded-full bg-gray-900 mr-2 border-none cursor-pointer flex items-center justify-center ${
                    mainColor === color ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setMainColor(color)}
                >
                  {mainColor === color ? (
                    <FaCheck className="text-xs text-slate-900 dark:text-slate-200" />
                  ) : null}
                </button>
              );

            return (
              <button
                key={index}
                className={`py-1 px-2 rounded-lg border border-slate-900 dark:border-slate-200 text-xs text-slate-900 dark:text-slate-200 bg-transparent cursor-pointer flex items-center justify-between gap-3 ${
                  mainColor === color ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setMainColor(color)}
              >
                {color}
                {mainColor === color ? (
                  <FaCheck className="text-xs text-slate-900 dark:text-slate-200" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <QuantityButtons
          increase={increase}
          decrease={decrease}
          quantity={quantity}
        />

        <div className="mt-4 flex gap-8 mx-4">
          <button
            type="button"
            className="w-150px py-2 px-4 border border-red-600 text-lg font-medium bg-slate-300 text-red-600 cursor-pointer scale-100 transition duration-500 ease-in-out hover:scale-110"
          >
            Add to Cart
          </button>

          <button
            type="button"
            className="w-[150px] py-2 px-4 border-none bg-red-600 text-slate-300 text-lg font-medium cursor-pointer scale-100 transition duration-500 ease-in-out hover:scale-110"
            // onClick={() => addToCart(id, mainColor, amount, product)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
