import { atom } from "recoil";

export interface SelectCartItems {
  id: number[];
  total_price: number;
}

export const cartSelectAllState = atom<SelectCartItems>({
  key: "isSelectAll",
  default: { id: [], total_price: 0 },
});
