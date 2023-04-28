"use client";

import { web_reducer } from "@/reducers/site-reducer";
import { WebStateType } from "@/types/site-types";
import { REDUCER_ACTION_TYPE } from "@/utilities/action";
import { createContext, useCallback, useContext, useReducer } from "react";

export const initialState: WebStateType = {
  miniSidebar: false,
  cartBar: false,
  miniNavbar: false,
};

const useWebContext = (initialState: WebStateType) => {
  const [state, dispatch] = useReducer(web_reducer, initialState);

  const openMiniSidebar = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.OPEN_MINI_SIDEBAR });
  }, []);

  const openCartBar = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.OPEN_CARTBAR });
  }, []);

  const openMiniNavbar = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.OPEN_MINI_NAVBAR });
  }, []);

  const closeAllBars = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.CLOSE_ALL_BARS });
  }, []);

  return {
    state,
    openMiniSidebar,
    openCartBar,
    openMiniNavbar,
    closeAllBars,
  };
};

type UseWebContextType = ReturnType<typeof useWebContext>;

const initialContextState: UseWebContextType = {
  state: initialState,
  openMiniSidebar: () => {},
  openCartBar: () => {},
  openMiniNavbar: () => {},
  closeAllBars: () => {},
};

export const WebContext = createContext<UseWebContextType>(initialContextState);

type ChildrenType = {
  children?: React.ReactElement | React.ReactElement[] | undefined;
};

export const WebProvider = ({ children }: ChildrenType): React.ReactElement => {
  return (
    <WebContext.Provider value={useWebContext(initialState)}>
      {children}
    </WebContext.Provider>
  );
};

export const useWeb = (): typeof initialContextState => {
  return useContext(WebContext);
};
