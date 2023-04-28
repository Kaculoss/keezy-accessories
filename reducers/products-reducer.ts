import { REDUCER_ACTION_TYPE } from "../utilities/action";
import { ProductsType } from "../types/site-types";

type ReducerAction = { type: REDUCER_ACTION_TYPE; payload?: any };

export const products_reducer = (
  state: ProductsType,
  action: ReducerAction
): ProductsType => {
  if (action.type === REDUCER_ACTION_TYPE.GET_PRODUCTS_SUCCESS) {
    console.log("reducer all products =>", action.payload);
    return {
      ...state,
      products: action.payload,
      products_error: false,
      products_loading: false,
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.GET_PRODUCTS_BEGINS) {
    console.log("reducer all products Begins");
    return { ...state, products_loading: true };
  }

  if (action.type === REDUCER_ACTION_TYPE.GET_PRODUCTS_ERROR) {
    console.log("reducer all products Error");
    return { ...state, products_loading: false, products_error: true };
  }

  if (action.type === REDUCER_ACTION_TYPE.GET_FEATURED_PRODUCTS_SUCCESS) {
    console.log("reducer all featured products =>", action.payload);
    return {
      ...state,
      featured_products: action.payload,
      featured_products_error: false,
      featured_products_loading: false,
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.GET_FEATURED_PRODUCTS_BEGINS) {
    console.log("reducer all featured products Begins");
    return { ...state, featured_products_loading: true };
  }

  if (action.type === REDUCER_ACTION_TYPE.GET_FEATURED_PRODUCTS_ERROR) {
    console.log("reducer all featured products Error");
    return {
      ...state,
      featured_products_error: true,
      featured_products_loading: false,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
