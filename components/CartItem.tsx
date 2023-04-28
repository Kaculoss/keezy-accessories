import Image from "next/image";
import React from "react";
import logo from "../assets/headphones_c_1.webp";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

interface IProps {
  imageUrl?: string;
  itemName: string;
  itemPrice: number;
  itemTotalPrice: number;
  itemQuantity: number;
}

const CartItem = ({
  imageUrl,
  itemName,
  itemPrice,
  itemTotalPrice,
  itemQuantity,
}: IProps) => {
  return (
    <div className="py-5 px-1 border-t-[0.5px] border-y border-slate-200 text-slate-500 dark:border-slate-200/5 mb-1 flex justify-between gap-12 lg:p-5">
      <Image
        className="rounded-md bg-slate-400 w-20 h-20"
        src={imageUrl || logo}
        width={600}
        height={600}
        alt={itemName}
      />
      <div className="flex justify-between flex-col gap-4 w-[75%] max-w-[650px]">
        <div className="flex justify-between gap-8 text-slate-400">
          <div className="flex justify-between gap-2 flex-col lg:flex-row">
            <h5>{itemName}</h5>
            <h4>GH&#8373; {itemPrice}</h4>
          </div>
          <h4 className="text-sky-500 dark:text-sky-400 ">
            GH&#8373; {itemTotalPrice}
          </h4>
        </div>

        <div className="flex justify-between gap-4 text-slate-400 py-1">
          <div>
            <p className="border border-slate-400 flex">
              <span className="text-lg py-1 px-2 cursor-pointer border-r border-slate-400">
                <MinusIcon className="text-red-600" height={24} width={24} />
              </span>
              <span className="text-lg py-1 px-2 cursor-pointer font-bold">
                {itemQuantity}
              </span>
              <span className="text-lg py-1 px-2 cursor-pointer border-l border-slate-400">
                <PlusIcon className="text-green-600 " height={24} width={24} />
              </span>
            </p>
          </div>
          <button
            type="button"
            className="border-none cursor-pointer bg-transparent "
          >
            <TrashIcon className="text-red-600" height={24} width={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
