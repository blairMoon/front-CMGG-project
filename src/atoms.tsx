import { atom } from "recoil";

export interface SelectCartItems {
  id: number[];
  name: string[];
  total_price: number;
}

export const cartSelectAllState = atom<SelectCartItems>({
  key: "isSelectAll",
  default: { id: [], name: [], total_price: 0 },
});
