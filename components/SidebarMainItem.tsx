import Image from "next/image";
import Link from "next/link";
import logo from "../assets/headphones_c_1.webp";
import React from "react";

interface IProps {
  imageUrl?: string;
  itemName: string;
  itemUrl: string;
  selected: boolean;
}

const SidebarMainItem = ({ imageUrl, itemName, itemUrl, selected }: IProps) => {
  return (
    <li>
      <Link
        href={itemUrl}
        className={
          selected
            ? "group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400"
            : "group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
        }
      >
        <div
          className={
            selected
              ? "mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10"
              : "mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-500 dark:highlight-white/5"
          }
        >
          <Image
            className="rounded-md w-6 h-6"
            src={imageUrl || logo}
            width={100}
            height={100}
            alt={itemName}
          />
        </div>
        {itemName}
      </Link>
    </li>
  );
};

export default SidebarMainItem;
