import { createContext, Dispatch, SetStateAction } from "react";
import { RepoLabelArr } from "../type";

type ContextState = {
  RepoLabelArr: [RepoLabelArr, Dispatch<SetStateAction<RepoLabelArr>>];
  selectedEdit: [Number, Dispatch<SetStateAction<Number>>];
};
export const SelectContext = createContext({} as ContextState);
