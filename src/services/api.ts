import Cookies from "js-cookie";
import axios from "axios";

// const value: string | undefined = Cookies.get("my-cookie");
const instance = axios.create({
  baseURL: `..`,
  withCredentials: false,
});

export type QueryKey = [string, string, string, number?, string?];
export const getAllCoins = () =>
  instance.get("coins").then((res) => res.data.slice(0, 100));

export const instanceNotLogin = axios.create({
  baseURL: "https://www.crazyform.store/api/v1/",
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken"),
  },

  withCredentials: true,
});

export const getLectureAndCategoryAndSearch = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}) => {
  const [, bigCategory, smallCategory, page = 1, searchName] = queryKey;

  if (searchName) {
    return await instanceNotLogin
      .get(
        `lectures/${bigCategory}/${smallCategory}/?page=${page}&search=${searchName}`
      )
      .then((res) => res.data);
  } else {
    return await instanceNotLogin
      .get(`lectures/${bigCategory}/${smallCategory}/?page=${page}`)
      .then((res) => res.data);
  }
};
