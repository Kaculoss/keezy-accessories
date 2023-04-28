import { WebStateType } from "@/types/site-types";
import { REDUCER_ACTION_TYPE } from "@/utilities/action";

type ReducerAction = { type: REDUCER_ACTION_TYPE };

export const web_reducer = (
  state: WebStateType,
  action: ReducerAction
): WebStateType => {
  if (action.type === REDUCER_ACTION_TYPE.OPEN_MINI_SIDEBAR) {
    return { ...state, cartBar: false, miniSidebar: true, miniNavbar: false };
  }

  if (action.type === REDUCER_ACTION_TYPE.OPEN_CARTBAR) {
    return { ...state, cartBar: true, miniSidebar: false, miniNavbar: false };
  }

  if (action.type === REDUCER_ACTION_TYPE.OPEN_MINI_NAVBAR) {
    return { ...state, cartBar: false, miniSidebar: false, miniNavbar: true };
  }

  if (action.type === REDUCER_ACTION_TYPE.CLOSE_ALL_BARS) {
    return { ...state, cartBar: false, miniSidebar: false, miniNavbar: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
