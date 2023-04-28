import { Product, FootBanner, HeroBanner } from "@/components";
import { getAllFeatured } from "@/sanity/utils";
import React from "react";

const FeaturedProducts = async () => {
  const featured = await getAllFeatured();

  return (
    <>
      <HeroBanner />
      <div>
        <p className="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
          Featured Products
        </p>
        {featured &&
          featured.map((feature) => (
            <div key={feature._id} className="mb-16">
              <div>
                <div className="flex items-center">
                  <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tighter dark:text-slate-200">
                    {feature.name}
                  </h1>
                </div>
                <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap justify-center gap-4 mt-5 w-full">
                  {feature.products.map((product) => (
                    <Product
                      itemName={product.name}
                      itemPrice={product.price}
                      itemUrl={product.slug}
                      key={product._id}
                      itemDesc={product.description}
                      imageUrl={product.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      <FootBanner />
    </>
  );
};

export default FeaturedProducts;
