"use client";

import React from "react";
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

const Sidebar = ({ categories, brandList }: iProps) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px, calc(50%-45rem))] right-auto w-[20rem] pb-10 px-8 overflow-y-auto">
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
  );
};

export default Sidebar;
