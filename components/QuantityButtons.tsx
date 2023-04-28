import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {
  increase: () => void;
  decrease: () => void;
  quantity: number;
};

const QuantityButtons = ({ increase, decrease, quantity }: Props) => {
  return (
    <div className="grid w-[140px] justify-center items-center grid-cols-3">
      <button
        className="bg-transparent border-none cursor-pointer py-4 px-0 w-8 h-4 flex items-center justify-center "
        type="button"
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h2 className="mb-0 text-[2rem] md:text-[2.5rem]">{quantity}</h2>
      <button
        className="bg-transparent border-none cursor-pointer py-4 px-0 w-8 h-4 flex items-center justify-center "
        type="button"
        onClick={increase}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityButtons;
