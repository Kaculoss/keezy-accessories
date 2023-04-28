import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/headphones_c_1.webp";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import HeaderButtons from "./HeaderButtons";
import CartButton from "./CartButton";
import MiniNavbarBtn from "./MiniNavbarBtn";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <Link
              href="/"
              className="mr-3 flex-none w-auto overflow-hidden md:w-auto"
            >
              <span className="sr-only">Keezy Accessories home page</span>
              <div className="text-slate-900 dark:text-white w-auto h-auto flex items-center">
                <Image
                  className="rounded-md mr-2 dark:bg-slate-100"
                  src={logo}
                  width={20}
                  height={20}
                  alt="logo"
                />
                <h1 className="text-xl tracking-wider font-bold">
                  Keezy Accessories
                </h1>
              </div>
            </Link>

            <div className="relative hidden lg:flex items-center ml-auto">
              <Navbar />
              <HeaderButtons />
            </div>

            <button
              type="button"
              className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              />
            </button>

            <CartButton
              iconWidth={24}
              iconHeight={24}
              iconFill="none"
              classname="ml-2 -my-1 lg:hidden text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            />

            <MiniNavbarBtn />
          </div>
        </div>

        <HeaderBottom />
      </div>
    </div>
  );
};

export default Header;
