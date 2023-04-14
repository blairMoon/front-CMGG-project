import { atom } from "recoil";

export interface SelectCartItems {
  id: number[];
  name: string[];
  thumbnail: string[];
  instructor: string[];
  total_price: number;
}

export const cartSelectAllState = atom<SelectCartItems>({
  key: "isSelectAll",
  default: { id: [], name: [], thumbnail: [], instructor: [], total_price: 0 },
});

export const BuyState = atom<boolean>({
  key: "wasBuyed",
  default: false,
});
