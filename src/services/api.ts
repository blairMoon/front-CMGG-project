import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { UseQueryResult } from "react-query";
import { getAccessToken } from "./Token";

interface UserNameLoginParams {
  username: string;
  password: string;
}

interface PostRefreshTokenParams {
  refresh: string;
  access: string;
}

interface LectureAndCategoryAndSearchParams {
  queryKey: string[];
}

interface PostReviewParams {
  lectureNum: string;
  data: any;
}

interface PostReplyParams {
  lectureNum: string;
  reviewNum: string;
  data: any;
}

interface SavePlayedSecondsParams {
  lectureId: string;
  num: string;
  lastPlayed: number;
}

interface WatchedLectures80Params {
  lectureId: string;
  num: string;
  is_completed: boolean;
  lastPlayed: number;
}

interface FetchVideoListParams {
  queryKey: string[];
}

export const instance: AxiosInstance = axios.create({
  baseURL: "https://crazyform.store/api/v1/",
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken"),
    Authorization: "Bearer " + Cookies.get("access"),
  },
  withCredentials: true,
});

// export const instanceNotLogin = axios.create({
//   baseURL: "https://www.crazyform.store/api/v1/",
//   headers: {
//     "X-CSRFToken": Cookies.get("csrftoken"),
//   },

//   withCredentials: true,
// });

export const getAllLectures = () =>
  instance.get("lectures/all/all").then((res) => res.data);
export const getLectureDetail = (page: number) => {
  return instance.get(`lectures/${page}`).then((res) => res.data);
};
