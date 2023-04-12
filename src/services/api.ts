import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { UseQueryResult } from "react-query";
import { getAccessToken } from "./Token";
import { QueryFunctionContext } from "@tanstack/react-query";
// const value: string | undefined = Cookies.get("my-cookie");
// export type QueryKey = [string, string, string, number?, string?];

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

interface LectureData {
  LectureId: number;
  lectureTitle: string;
  lectureDifficulty: string;
  lectureDescription: string;
  targetAudience: string;
  lectureFee: number;
  thumbnail: string;
  isOpened: boolean;
  grade: null | string;
  instructor: {
    username: string;
    instructorField: null | string;
    instructorAbout: string;
    instructorCareer: string;
  };
  categories: {
    parent: null | {
      name: string;
      classification: string;
      parent: null;
    };
    name: string;
    classification: string;
  };
  reviews_num: number;
  rating: number;
}

export interface Params {
  bigCategory?: string;
  smallCategory?: string;
  pageNum: number;
  searchName?: string;
}
export const instanceNotLogin = axios.create({
  // baseURL: 'http://127.0.0.1:8000/api/v1/',
  baseURL: "https://crazyform.store/api/v1/",

  headers: {
    "X-CSRFToken": Cookies.get("csrftoken"),
  },
  withCredentials: true,
});

export const getLectureAndCategoryAndSearch = ({
  queryKey,
}: QueryFunctionContext) => {
  const [, bigCategory, smallCategory, pageNum, searchName] = queryKey;

  if (searchName) {
    return instanceNotLogin
      .get(
        `lectures/${bigCategory}/${smallCategory}/?page=${pageNum}&search=${searchName}`
      )
      .then((res) => res.data);
  } else {
    return instanceNotLogin
      .get(`lectures/${bigCategory}/${smallCategory}/?page=${pageNum}`)
      .then((res) => res.data);
  }
};
export const getAllLectures = () =>
  instance.get("lectures/all/all").then((res) => res.data);
export const getLectureDetail = (page: number) => {
  return instance.get(`lectures/${page}`).then((res) => res.data);
};
