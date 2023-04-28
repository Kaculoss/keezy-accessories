"use client";

import { useWeb } from "@/contexts/WebContext";
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { ChangeEvent, MouseEvent } from "react";

const MiniNavbar = () => {
  const { state, closeAllBars } = useWeb();
  const { theme, setTheme } = useTheme();

  const toggleTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("mini-navbar")) {
      closeAllBars();
    }
  };

  const navPages = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/" },
    { name: "Contact", url: "/" },
    { name: "Log In", url: "/" },
  ];

  if (!state.miniNavbar) return null;

  return (
    <div>
      <div className="fixed z-50 inset-0 lg:hidden " role="dialog" aria-modal>
        <div
          className="mini-navbar fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
          aria-hidden
          onClick={handleOverlayClick}
        ></div>
        <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
          <button
            type="button"
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            onClick={closeAllBars}
          >
            <span className="sr-only">Close navigation</span>
            <XMarkIcon className="overflow-visible" height={24} width={24} />
          </button>

          <ul className="space-y-6">
            {navPages.map((page) => (
              <li key={page.name}>
                <Link
                  href={page.url}
                  className="hover:text-sky-500 dark:hover:text-sky-400"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
            <div className="flex items-center justify-between">
              <label
                htmlFor="theme"
                className="text-slate-700 font-normal dark:text-slate-400"
              >
                Switch theme
              </label>
              <div className="relative flex items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200">
                <SunIcon
                  className="w-6 h-6 mr-2 dark:hidden"
                  fill="none"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <MoonIcon
                  className="w-6 h-6 mr-2 hidden dark:inline"
                  fill="none"
                />
                {theme === "light"
                  ? "Light"
                  : theme === "dark"
                  ? "Dark"
                  : "System"}
                <ChevronDownIcon
                  className="w-6 h-6 ml-2 text-slate-400"
                  fill="none"
                />
                <select
                  name="theme"
                  id="theme"
                  value={theme}
                  onChange={toggleTheme}
                  className="absolute appearance-none inset-0 w-full h-full opacity-0"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
