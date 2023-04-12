import { atom } from "recoil";

interface SelectCartItem {
  id: number;
  price: number;
  isCheck: boolean;
}

export const cartSelectAllState = atom<number[]>({
  key: "isSelectAll",
  default: [],
});
