import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SidebarSearch = () => {
  return (
    <div className="sticky top-0 -ml-0.5 pointer-events-none">
      <div className="hidden lg:block h-10 bg-white dark:bg-slate-900"></div>
      <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
        <button
          type="button"
          className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
        >
          <MagnifyingGlassIcon
            width={24}
            height={24}
            fill="none"
            aria-hidden
            className="mr-3 flex-none"
          />
          Quick search...
          <span className="ml-auto pl-3 flex-none text-xs font-semibold"></span>
        </button>
      </div>
      <div className="hidden lg:block h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
    </div>
  );
};

export default SidebarSearch;
