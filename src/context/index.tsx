import { createContext } from "react";
export const PageState = createContext({
  status: "loading",
  userInfo: {},
});
export const SetPageState = createContext((obj: any) => {});
