import { Featured, Product } from "./sanity-types";

export type WebStateType = {
  miniSidebar: boolean;
  cartBar: boolean;
  miniNavbar: boolean;
};

export type ProductsType = {
  products: Product[];
  featured_products: Featured[];
  products_loading: boolean;
  products_error: boolean;
  featured_products_loading: boolean;
  featured_products_error: boolean;
};
