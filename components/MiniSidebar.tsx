"use client";

import { useWeb } from "@/contexts/WebContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { MouseEvent } from "react";
import SidebarSearch from "./SidebarSearch";
import SidebarMainItem from "./SidebarMainItem";
import SidebarSubItem from "./SidebarSubItem";
import { usePathname } from "next/navigation";
import { BrandList, Category } from "@/types/sanity-types";
import Link from "next/link";

interface iProps {
  categories: Category[];
  brandList: BrandList[];
}

const MiniSidebar = ({ categories, brandList }: iProps) => {
  const { state, closeAllBars } = useWeb();
  const pathname = usePathname();

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("mini-sidebar")) {
      closeAllBars();
    }
  };

  if (!state.miniSidebar) return null;

  return (
    <div className=" fixed z-50 inset-0 overflow-y-auto lg:hidden">
      <div
        className="mini-sidebar fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
        onClick={handleOverlayClick}
      ></div>
      <div className="relative bg-white w-80 max-w-[calc(100%-3rem)] p-6 dark:bg-slate-800">
        <button
          type="button"
          className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          onClick={closeAllBars}
        >
          <span className="sr-only">Close navigation</span>
          <XMarkIcon className="overflow-visible" height={24} width={24} />
        </button>

        <nav className="lg:text-sm lg:leading-6 relative">
          <SidebarSearch />

          <ul>
            <SidebarMainItem
              itemName="Featured Products"
              itemUrl="/"
              selected={pathname === "/"}
            />
            {categories.map((item) => (
              <SidebarMainItem
                key={item._id}
                itemName={item.name}
                itemUrl={`/category/${item.slug}`}
                selected={pathname === `/category/${item.slug}`}
                imageUrl={item.image}
              />
            ))}

            {brandList.map((item) => (
              <li key={item._id} className="mt-12 lg:mt-8">
                <Link href={`/brand/${item.slug}`}>
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    {item.name}
                  </h5>
                </Link>
                <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                  {item.products.map((product) => (
                    <SidebarSubItem
                      key={product._id}
                      itemName={product.name}
                      itemUrl={`/product/${product.slug}`}
                      selected={pathname === `/product/${product.slug}`}
                    />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MiniSidebar;
