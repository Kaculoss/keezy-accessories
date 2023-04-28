import Image from "next/image";
import React from "react";
import tailDark1 from "../assets/tail-dark-back-1.webp";
import tailDark2 from "../assets/tail-dark-back-2.webp";

const Background = () => {
  return (
    <div className="fixed z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <Image
          className="W-[71.75rem] flex-none max-w-none dark:hidden"
          height={668}
          width={2296}
          src={tailDark1}
          alt="back1"
          decoding="async"
        />
        <Image
          className="W-[90rem] flex-none max-w-none hidden dark:block"
          height={616}
          width={1440}
          src={tailDark2}
          alt="back2"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default Background;
