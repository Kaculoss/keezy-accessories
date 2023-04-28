import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="hover:text-sky-500 dark:hover:text-sky-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-sky-500 dark:hover:text-sky-400">
            Products
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-sky-500 dark:hover:text-sky-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
