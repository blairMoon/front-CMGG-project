import Cookies from "js-cookie";
import axios from "axios";
// const value: string | undefined = Cookies.get("my-cookie");
const instance = axios.create({
  baseURL: `https://crazyform.store/api/v1/`,
  withCredentials: false,
});

export const instanceNotLogin = axios.create({
  baseURL: "https://www.crazyform.store/api/v1/",
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken"),
  },

  withCredentials: true,
});

export const getAllLectures = () =>
  instance.get("lectures/all/all").then((res) => res.data);
export const getLectureDetail = (page: number) => {
  return instance.get(`lectures/${page}`).then((res) => res.data);
};
