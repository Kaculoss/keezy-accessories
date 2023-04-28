"use client";

import { useWeb } from "@/contexts/WebContext";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React, { MouseEvent } from "react";
import CartItem from "./CartItem";

const CartBar = () => {
  const { state, closeAllBars } = useWeb();

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("cart-bar")) {
      closeAllBars();
    }
  };

  const mapValue = [
    { id: "wow", name: "Headphone", price: 25, total: 25, num: 1 },
    { id: "hmm", name: "Airpod", price: 20, total: 40, num: 2 },
    { id: "ayoo", name: "iPhone 7 Plus", price: 1200, total: 1200, num: 1 },
  ];

  if (!state.cartBar) return null;

  return (
    <div
      className=" fixed z-50 cart-bar top-0 right-0 w-screen lg:font-medium text-slate-700  dark:text-slate-400  transition-all lg:text-lg  duration-500 bg-black/20 backdrop-blur-sm overflow-y-auto dark:bg-slate-900/80"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-full md:w-[60%] lg:w-[45%]  h-screen relative float-right p-6 dark:bg-slate-800">
        <button
          type="button"
          className="flex items-center cursor-pointer gap-0.5 border-none hover:text-slate-900 bg-transparent sm:mt-4 ml-2 dark:hover:text-slate-300"
          onClick={closeAllBars}
        >
          <span className="sr-only">Close Cart</span>
          <ChevronLeftIcon
            className="overflow-visible"
            height={24}
            width={24}
          />
          <span className="ml-2">Your Cart</span>
          <span className="ml-2 text-red-600">(4 items)</span>
        </button>

        <div className="mt-3 lg:mt-4 overflow-auto max-h-[70vh] py-5 px-2">
          {mapValue.map((value) => (
            <CartItem
              key={value.id}
              itemName={value.name}
              itemPrice={value.price}
              itemQuantity={value.num}
              itemTotalPrice={value.total}
            />
          ))}
        </div>

        <div className="absolute bottom-3 w-[full] left-0 right-0 py-3 px-16 border-t border-slate-200 text-slate-500 dark:border-slate-200/5">
          <div className="flex justify-between text-sky-500 dark:text-sky-400 font-semibold ">
            <h3>SUBTOTAL:</h3>
            <h3>GH&#8373; 1265</h3>
          </div>
          <div className="w-auto m-auto flex justify-center">
            <button
              type="button"
              className="mt-4 w-max-[400px] p-3 rounded-xl border-none text-lg uppercase bg-red-600 text-slate-100 cursor-pointer animate-pulse"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBar;
