import Cookies from "js-cookie";
import axios from "axios";
// const value: string | undefined = Cookies.get("my-cookie");
const instance = axios.create({
  baseURL: `https://crazyform.store/api/v1/`,
  withCredentials: false,
});

export const getAllCoins = () =>
  instance.get("coins").then((res) => res.data.slice(0, 100));

export const instanceNotLogin = axios.create({
  baseURL: "https://www.crazyform.store/api/v1/",
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken"),
  },

  withCredentials: true,
});

export const getLectureDetail = (page: number) => {
  return instance.get(`lectures/${page}`).then((res) => res.data);
};
