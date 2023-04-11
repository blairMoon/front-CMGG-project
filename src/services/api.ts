import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { UseQueryResult } from "react-query";
import { getAccessToken } from "./Token";

export interface UserNameLoginParams {
  username: string;
  password: string;
  headers?: {
    Authorization: string;
    "X-Refresh-Token": string;
  };
}

interface PostRefreshTokenParams {
  refresh: string;
  access: string;
}

interface LectureAndCategoryAndSearchParams {
  queryKey: string[];
}

export interface PostReviewParams {
  lectureNum: number;
  data: FormData;
}

export interface PostReplyParams {
  lectureNum: number;
  reviewNum: number;
  data: {
    content: string;
  };
}

interface SavePlayedSecondsParams {
  lectureId: number;
  num: number;
  lastPlayed: number;
}

interface WatchedLectures80Params {
  lectureId: number;
  num: number;
  is_completed: boolean;
  lastPlayed: number;
}

interface FetchVideoListParams {
  queryKey: [number, number];
}
type AccessToken = string;
type RefreshToken = string;

export const instance: AxiosInstance = axios.create({
  baseURL: "https://crazyform.store/api/v1/",
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken"),
    Authorization: "Bearer " + Cookies.get("access"),
  },
  withCredentials: true,
});

export const instanceNotLogin = axios.create({
  baseURL: "https://crazyform.store/api/v1/",
  // baseURL: 'http://115.85.182.132:8000/api/v1/',

  headers: {
    "X-CSRFToken": Cookies.get("csrftoken"),
  },
  withCredentials: true,
});
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get("refresh") || "";
      const accessToken = Cookies.get("access") || "";

      if (refreshToken && accessToken) {
        const newAccessToken = await postRefreshToken(
          refreshToken,
          accessToken
        );

        if (newAccessToken) {
          Cookies.set("access", newAccessToken);

          // Update the Authorization header with the new access token
          instance.defaults.headers["Authorization"] =
            "Bearer " + newAccessToken;
          originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;

          return instance(originalRequest);
        } else {
          window.location.href =
            "https://crazyform.store/api/v1/users/jwt-token-auth/";
          return Promise.reject(error);
        }
      } else {
        window.location.href =
          "https://crazyform.store/api/v1/users/jwt-token-auth/";
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export async function userNameLogin(
  { username, password }: UserNameLoginParams,
  headers?: {
    Authorization: string;
    "X-Refresh-Token": string;
  }
): Promise<boolean> {
  const response = await fetch(
    "https://crazyform.store/api/v1/users/jwt-token-auth/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers, // Spread the headers object if it's not undefined
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    }
  );

  if (response.ok) {
    const data = await response.json();
    const refresh = data.refresh;
    const access = data.access;

    Cookies.set("access", access);
    Cookies.set("refresh", refresh);

    return true;
  } else {
    const { message } = await response.json();
    throw new Error(message);
  }
}
export async function postRefreshToken(
  refresh: RefreshToken,
  access: AccessToken
): Promise<string | null> {
  try {
    const response = await axios.post(
      "https://crazyform.store/api/v1/users/jwt-token-auth/refresh/",
      {
        refresh,
        access,
      }
    );
    return response.data.access;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}

export const getAllLectures = () =>
  instance.get("lectures/all/all").then((res) => res.data);

export const getLectureDetail = (page: number) => {
  return instance.get(`lectures/${page}`).then((res) => res.data);
};
export const postReview = ({ lectureNum, data }: PostReviewParams) => {
  return instance.post(`reviews/${lectureNum}`, data).then((res) => res.data);
};
export const postReply = ({ lectureNum, reviewNum, data }: PostReplyParams) => {
  return instance
    .post(`reviews/${lectureNum}/${reviewNum}`, data)
    .then((res) => res.data);
};

// export const fetchVideoList = async ({
//   queryKey,
// }: FetchVideoListParams): Promise<VideoData> => {
//   const [lectureId, num] = queryKey;
//   const response = await instance.get(`/videos/lectures/${lectureId}/${num}`);
//   return response.data;
// };

export const savePlayedSeconds = async ({
  lectureId,
  num,
  lastPlayed,
}: SavePlayedSecondsParams): Promise<void> => {
  await instance.put(`/watchedlectures/${lectureId}/${num}`, { lastPlayed });
};

export const watchedLectures80 = async ({
  lectureId,
  num,
  is_completed,
  lastPlayed,
}: WatchedLectures80Params): Promise<void> => {
  await instance.put(`/watchedlectures/${lectureId}/${num}`, {
    is_completed,
    lastPlayed,
  });
};
