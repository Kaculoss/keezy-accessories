import Link from "next/link";
import React from "react";

interface IProps {
  itemName: string;
  itemUrl: string;
  selected: boolean;
}

const SidebarSubItem = ({ itemName, itemUrl, selected }: IProps) => {
  return (
    <li>
      <Link
        href={itemUrl}
        className={
          selected
            ? "block border-l pl-4 -ml-px border-current text-sky-500 font-semibold dark:text-sky-400"
            : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
        }
      >
        {itemName}
      </Link>
    </li>
  );
};

export default SidebarSubItem;
