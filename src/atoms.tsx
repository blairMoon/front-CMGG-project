import { atom } from "recoil";
import { Cart } from "./services/mocks/mock";
import { default_cart } from "./services/mocks/mock_data";

export const cartState = atom<Cart>({
  key: "cart",
  default: default_cart,
});
