"use client";

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";
import DummyDiv from "./DummyDiv";
import { useWeb } from "@/contexts/WebContext";

const MiniNavbarBtn = () => {
  const { openMiniNavbar } = useWeb();

  return (
    <div className="ml-2 -my-1 lg:hidden">
      <button
        type="button"
        className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        onClick={openMiniNavbar}
      >
        <span className="sr-only">Navigation</span>
        <EllipsisVerticalIcon width={24} height={24} fill="none" aria-hidden />
      </button>

      <DummyDiv />
    </div>
  );
};

export default MiniNavbarBtn;
