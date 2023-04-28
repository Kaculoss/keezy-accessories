"use client";

import { products_reducer } from "@/reducers/products-reducer";
import { getAllFeatured, getProducts } from "@/sanity/utils";
import { ProductsType } from "@/types/site-types";
import { REDUCER_ACTION_TYPE } from "@/utilities/action";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

export const initialState: ProductsType = {
  products: [],
  featured_products: [],
  products_loading: false,
  products_error: false,
  featured_products_loading: false,
  featured_products_error: false,
};

const useProductsContext = (initialState: ProductsType) => {
  const [state, dispatch] = useReducer(products_reducer, initialState);

  const fetchAllProducts = async () => {
    dispatch({ type: REDUCER_ACTION_TYPE.GET_PRODUCTS_BEGINS });
    try {
      const allProducts = await getProducts();
      dispatch({
        type: REDUCER_ACTION_TYPE.GET_PRODUCTS_SUCCESS,
        payload: allProducts,
      });
    } catch (error) {
      dispatch({ type: REDUCER_ACTION_TYPE.GET_PRODUCTS_ERROR });
    }
  };

  const fetchAllFeaturedProducts = async () => {
    dispatch({ type: REDUCER_ACTION_TYPE.GET_FEATURED_PRODUCTS_BEGINS });
    try {
      const allProducts = await getAllFeatured();
      dispatch({
        type: REDUCER_ACTION_TYPE.GET_FEATURED_PRODUCTS_SUCCESS,
        payload: allProducts,
      });
    } catch (error) {
      dispatch({ type: REDUCER_ACTION_TYPE.GET_FEATURED_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    fetchAllFeaturedProducts();
  }, []);

  // const openMiniSidebar = useCallback(() => {
  //   dispatch({ type: REDUCER_ACTION_TYPE.OPEN_MINI_SIDEBAR });
  // }, []);

  // const openCartBar = useCallback(() => {
  //   dispatch({ type: REDUCER_ACTION_TYPE.OPEN_CARTBAR });
  // }, []);

  // const openMiniNavbar = useCallback(() => {
  //   dispatch({ type: REDUCER_ACTION_TYPE.OPEN_MINI_NAVBAR });
  // }, []);

  // const closeAllBars = useCallback(() => {
  //   dispatch({ type: REDUCER_ACTION_TYPE.CLOSE_ALL_BARS });
  // }, []);

  return {
    ...state,
    // openMiniSidebar,
    // openCartBar,
    // openMiniNavbar,
    // closeAllBars,
  };
};

type UseProductsContextType = ReturnType<typeof useProductsContext>;

const initialContextState: UseProductsContextType = {
  ...initialState,
  // openMiniSidebar: () => {},
  // openCartBar: () => {},
  // openMiniNavbar: () => {},
  // closeAllBars: () => {},
};

export const ProductsContext =
  createContext<UseProductsContextType>(initialContextState);

type ChildrenType = {
  children?: React.ReactElement | React.ReactElement[] | undefined;
};

export const ProductsProvider = ({
  children,
}: ChildrenType): React.ReactElement => {
  return (
    <ProductsContext.Provider value={useProductsContext(initialState)}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): typeof initialContextState => {
  return useContext(ProductsContext);
};
