import { PortableTextBlock } from "sanity";

export type Product = {
  _createdAt: Date;
  _id: string;
  _updatedAt: Date;
  name: string;
  slug: string;
  images: string[];
  price: number;
  details: PortableTextBlock[];
  priority: number;
  description?: string;
  stock?: number;
  rating?: number;
  reviews?: number;
  brand?: Brand;
  category?: Category;
  colours?: Colour[];
};

export type Colour = {
  _createdAt: Date;
  _id: string;
  _updatedAt: Date;
  name: string;
  hash: string;
};

export type Brand = {
  _createdAt: Date;
  _id: string;
  _updatedAt: Date;
  name: string;
  slug: string;
  image: string;
  priority?: number;
  description?: string;
};

export type BrandList = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
  products: BrandProduct[];
};

export type BrandProduct = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
  price: number;
};

export type Category = {
  _createdAt: Date;
  _id: string;
  _updatedAt: Date;
  name: string;
  slug: string;
  image: string;
  priority?: number;
  description?: string;
};

export type Featured = {
  _createdAt: Date;
  _id: string;
  _updatedAt: Date;
  name: string;
  slug: string;
  priority: number;
  products: FeaturedProduct[];
  description?: string;
};

export type FeaturedProduct = {
  name: string;
  slug: string;
  image: string;
  price: number;
  _id: string;
  description?: string;
};
