import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-sm leading-6 mt-12">
      <div className="mb-10 text-slate-700 font-semibold flex items-center dark:text-slate-200">
        <Link
          href="/"
          className="group flex items-center hover:text-slate-900 dark:hover:text-white "
        >
          <ChevronLeftIcon className="mr-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300" />
          MacBook
        </Link>
        <Link
          href="/"
          className="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
        >
          Samsung Galaxy
          <ChevronRightIcon className="ml-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300" />
        </Link>
      </div>

      <div className="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
        <div className="mb-6 sm:mb-0 sm:flex ">
          <p>2023 Keezy Store</p>
          <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5">
            <Link
              href="/"
              className="hover:text-slate-900 dark:hover:text-slate-400"
            >
              All rights reserved
            </Link>
          </p>
        </div>
        <div className="flex">
          <Link
            href="/"
            className="ml-auto block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <AiFillInstagram className="w-5 h-5 text-current" />
          </Link>
          <Link
            href="/"
            className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <AiOutlineTwitter className="w-5 h-5 text-current" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
