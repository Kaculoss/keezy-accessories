"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import CartButton from "./CartButton";
import Link from "next/link";

const HeaderButtons = () => {
  const { theme, setTheme } = useTheme();
  const [showThemeOptions, setShowThemeOptions] = useState<boolean>(false);

  const toggleTheme = (theme: string) => {
    setTheme(theme);
    setShowThemeOptions(false);
  };

  return (
    <div className="flex items-center border-l border-slate-200 ml-10 pl-6 dark:border-slate-800">
      <label className="sr-only" htmlFor="theme">
        Theme
      </label>

      <button
        type="button"
        name="theme"
        className=""
        onClick={() => setShowThemeOptions(!showThemeOptions)}
      >
        <span className="dark:hidden">
          <SunIcon
            className="w-6 h-6"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </span>
        <span className="hidden dark:inline">
          <MoonIcon className="w-6 h-6" fill="none" />
        </span>
      </button>

      {showThemeOptions && (
        <ul
          className="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-8"
          aria-orientation="vertical"
          role="listbox"
          tabIndex={0}
        >
          <li
            className={`${
              theme === "light" && "text-sky-500"
            } py-1 px-2 flex items-center cursor-pointer`}
            role="option"
            aria-selected={theme === "light"}
            tabIndex={-1}
            onClick={() => toggleTheme("light")}
          >
            <SunIcon
              className="w-6 h-6 mr-2"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            Light
          </li>
          <li
            className={`${
              theme === "dark" && "text-sky-500"
            } py-1 px-2 flex items-center cursor-pointer`}
            role="option"
            aria-selected={theme === "dark"}
            tabIndex={-1}
            onClick={() => toggleTheme("dark")}
          >
            <MoonIcon className="w-6 h-6 mr-2" fill="none" />
            Dark
          </li>
          <li
            className={`${
              theme === "system" && "text-sky-500"
            } py-1 px-2 flex items-center cursor-pointer`}
            role="option"
            aria-selected={theme === "system"}
            tabIndex={-1}
            onClick={() => toggleTheme("system")}
          >
            <ComputerDesktopIcon className="w-6 h-6 mr-2" fill="none" />
            System
          </li>
        </ul>
      )}

      <CartButton
        classname="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
        iconClassname="w-5 h-5"
      />

      <Link
        href="/"
        className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
      >
        <UserPlusIcon className="w-5 h-5" fill="currentColor" aria-hidden />
      </Link>
    </div>
  );
};

export default HeaderButtons;
