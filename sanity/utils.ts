import {
  Brand,
  BrandList,
  BrandProduct,
  Category,
  Featured,
  Product,
} from "@/types/sanity-types";
import clientConfig from "./config/client-config";
import { createClient, groq } from "next-sanity";

export const getProducts = async (): Promise<Product[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      "images": image[].asset->url,
      price,
      details,
      priority,
      description,
      stock,
      rating,
      reviews,
      "brand": brand->{_id, name, "slug": slug.current, "image": image.asset->url},
      "category": category->{_id, name, "slug": slug.current, "image": image.asset->url},
      "colours": colours[]->{_id, name, hash},
   }`
  );
};

export const getProduct = async (slug: string): Promise<Product> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      "images": image[].asset->url,
      price,
      details,
      priority,
      description,
      stock,
      rating,
      reviews,
      "brand": brand->{_id, name, "slug": slug.current, "image": image.asset->url},
      "category": category->{_id, name, "slug": slug.current, "image": image.asset->url},
      "colours": colours[]->{_id, name, hash},
   }`,
    { slug }
  );
};

export const getBrandList = async (): Promise<BrandList[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "brands"] | order(priority asc, _updatedAt desc) {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,
	    "products": *[_type == "product" && references(^._id)] | order(priority asc, _updatedAt desc) {
        name, "slug": slug.current, "image": image[0].asset->url, price, _id, description
      }
   }`
  );
};

export const getSingleBrand = async (slug: string): Promise<BrandList> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "brands" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,
	    "products": *[_type == "product" && references(^._id)] | order(priority asc, _updatedAt desc) {
        name, "slug": slug.current, "image": image[0].asset->url, price, _id, description
      }
   }`,
    { slug }
  );
};

export const getSingleCategory = async (
  _id: string
): Promise<BrandProduct[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && category->_id == $_id]{
      _id,
      name,
      "slug": slug.current,
      "image": image[0].asset->url,
      price,
      description,
   }`,
    { _id }
  );
};

export const getCategoryList = async (slug: string): Promise<BrandList> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "categories" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,
	    "products": *[_type == "product" && references(^._id)] | order(priority asc, _updatedAt desc) {
        name, "slug": slug.current, "image": image[0].asset->url, price, _id, description
      }
   }`,
    { slug }
  );
};

export const getCategories = async (): Promise<Category[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "categories"] | order(priority asc, _updatedAt desc) {
      _id,
      _createdAt,
      _updatedAt,
      name,
      "image": image.asset->url,
      "slug": slug.current,
      priority,
      description,
   }`
  );
};

export const getAllFeatured = async (): Promise<Featured[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "featured"] | order(priority asc) {
      _id,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      priority,
      description,
      "products": products[]->{name, "slug": slug.current, "image": image[0].asset->url, price, _id, description},
   }`
  );
};
