import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
          Go To Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7Ab0A]">
          <h1 className="font-bold text-white">
            Contact Keezy at
            <Link
              href="mailto:sanialhassan853@gmail.com"
              className="font-bold ml-2 text-[#F7AB0A]"
            >
              sanialhassan853@gmail.com
            </Link>{" "}
            for more Beautiful🥀 Web and Mobile Applications like this.
          </h1>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
