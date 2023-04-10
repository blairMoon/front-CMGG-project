import axios from "axios";

const instance = axios.create({
  baseURL: `https://crazyform.store/api/v1/`,
  withCredentials: false,
});

export const getAllCoins = () =>
  instance.get("coins").then((res) => res.data.slice(0, 100));

export const getLectureDetail = (page: number) => {
  return instance.get(`lectures/${page}`).then((res) => res.data);
};
