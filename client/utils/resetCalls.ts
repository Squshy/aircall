import { RESET_CALLS_ROUTE } from "../contants";

export const resetCalls = () => {
  fetch(RESET_CALLS_ROUTE);
};
