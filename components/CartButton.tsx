"use client";

import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useWeb } from "@/contexts/WebContext";

interface IProps {
  classname?: string;
  iconClassname?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconFill?: string;
}

const CartButton = ({
  classname,
  iconClassname,
  iconWidth,
  iconHeight,
  iconFill,
}: IProps) => {
  const { openCartBar } = useWeb();

  return (
    <button type="button" className={classname} onClick={openCartBar}>
      <span className="flex items-center relative">
        <span className="sr-only">Cart</span>
        <ShoppingBagIcon
          className={iconClassname}
          fill={iconFill || "currentColor"}
          aria-hidden
          width={iconWidth}
          height={iconHeight}
        />
        <span className="absolute top-[-10px] right-[-16px] w-5 h-5 flex justify-center items-center rounded-md text-md p-2 text-red-700 font-bold bg-amber-500  ">
          3
        </span>
      </span>
    </button>
  );
};

export default CartButton;
