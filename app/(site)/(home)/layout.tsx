import {
  CartBar,
  Footer,
  MiniNavbar,
  MiniSidebar,
  Sidebar,
} from "@/components";
import { getBrandList, getCategories } from "@/sanity/utils";
import React from "react";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [categories, brandList] = await Promise.all([
    getCategories(),
    getBrandList(),
  ]);

  return (
    <div>
      <MiniSidebar categories={categories} brandList={brandList} />
      <CartBar />
      <MiniNavbar />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <Sidebar categories={categories} brandList={brandList} />

        <div className="lg:pl-[20rem]">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
