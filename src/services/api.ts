import axios from "axios";

const instance = axios.create({
  baseURL: `..`,
  withCredentials: false,
});

export const getAllCoins = () =>
  instance.get("coins").then((res) => res.data.slice(0, 100));
