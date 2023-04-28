import { BrandList, BrandProduct } from "@/types/sanity-types";
import React from "react";
import Product from "./Product";
import Image from "next/image";

type Props = {
  products?: BrandProduct[];
  brands?: BrandList[];
};

const Marquee = ({ products, brands }: Props) => {
  return (
    <>
      {products && (
        <div className="flex items-center flex-col mx-auto w-full my-20">
          <h2 className="text-xl font-bold underline text-center">
            You May Also like
          </h2>
          <div className="mx-auto max-w-full overflow-hidden mt-6 mb-">
            <div className="flex gap-6">
              <div className="flex-shrink-0 flex items-center justify-around gap-6 min-w-full animate-scroll-left hover:pause">
                {products.map((item) => {
                  return (
                    <Product
                      key={item._id}
                      itemName={item.name}
                      itemPrice={item.price}
                      itemUrl={item.slug}
                      imageUrl={item.image}
                      itemDesc={item.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {brands && (
        <div className="mx-auto max-w-full overflow-hidden my-20">
          <div className="flex gap-6">
            <div className="flex items-center justify-around gap-6 min-w-full animate-scroll-left py-4 px-2 bg-slate-200">
              {brands.map((item) => {
                return (
                  <Image
                    key={item._id}
                    src={item.image}
                    alt={item.name}
                    height={200}
                    width={200}
                    className="object-contain w-[120px] md:w-[150px]"
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Marquee;
