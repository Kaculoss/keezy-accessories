"use client";

import { useWeb } from "@/contexts/WebContext";
import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const HeaderBottom = () => {
  const { openMiniSidebar } = useWeb();

  return (
    <div className="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate50/[0.06]">
      <button
        type="button"
        className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        onClick={openMiniSidebar}
      >
        <span className="sr-only">Navigation</span>
        <Bars3Icon height={24} width={24} />
      </button>

      <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
        <li className="flex items-center">
          Home
          <ChevronRightIcon
            width={12}
            height={12}
            aria-hidden
            className="mx-3 overflow-visible text-slate-400"
          />
        </li>
        <li className="flex items-center">
          Featured Products
          <ChevronRightIcon
            width={12}
            height={12}
            aria-hidden
            className="mx-3 overflow-visible text-slate-400"
          />
        </li>
        <li className="font-semibold text-slate-900 truncate dark:text-slate-200">
          Best Selling Products
        </li>
      </ol>
    </div>
  );
};

export default HeaderBottom;
