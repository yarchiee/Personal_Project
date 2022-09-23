import { createContext, Dispatch, SetStateAction } from "react";
import { repoLabelArr } from "../type";

type ContextState = {
  repoLabelArr: [repoLabelArr, Dispatch<SetStateAction<repoLabelArr>>];
  selectedEdit: [Number, Dispatch<SetStateAction<Number>>];
};
export const SelectContext = createContext({} as ContextState);
