import {
  AddToCart,
  Marquee,
  Product,
  ProductImages,
  Stars,
} from "@/components";
import { getBrandList, getProduct, getSingleCategory } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import React from "react";

type Props = {
  params: { product: string };
};

const ProductPage = async ({ params }: Props) => {
  const slug = params.product;
  const product = await getProduct(slug);

  const categoryProducts =
    product.category && (await getSingleCategory(product.category._id));

  return (
    <>
      <div>
        <p className="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
          Product
        </p>
        <div className="mb-16">
          <div>
            <div className="flex items-center">
              <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tighter dark:text-slate-200">
                {product.name}
              </h1>
            </div>
            <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
              {product.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 lg:items-center gap-16">
            <ProductImages images={product.images} name={product.name} />
            <section className="content">
              <h2 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tighter dark:text-slate-200">
                {product.name}
              </h2>
              {product.rating && product.reviews && (
                <Stars rating={product.rating} reviews={product.reviews} />
              )}
              <h5 className="text-lg md:text-2xl leading-6 font-semibold text-sky-500 dark:text-sky-400">
                GH&#8373; {product.price}
              </h5>
              <div className="leading-loose max-w-[45em]">
                <PortableText value={product.details} />
              </div>
              <p className="capitalize w-[300px] grid grid-cols-[125px,1fr] my-1 mt-2">
                <span className="font-bold">Available : </span>
                {product.stock && product.stock > 0
                  ? "In stock"
                  : "out of stock"}
              </p>
              {product.brand && (
                <p className="capitalize w-[300px] grid grid-cols-[125px,1fr] my-1">
                  <span className="font-bold">Brand : </span>
                  {product.brand.name}
                </p>
              )}
              {product.category && (
                <p className="capitalize w-[300px] grid grid-cols-[125px,1fr] my-1 mb-2">
                  <span className="font-bold">Category : </span>
                  {product.category.name}
                </p>
              )}
              <hr />
              {product.stock && product.stock > 0 && (
                <AddToCart product={product} />
              )}
            </section>
          </div>
        </div>
      </div>
      {categoryProducts && <Marquee products={categoryProducts} />}
    </>
  );
};

export default ProductPage;
