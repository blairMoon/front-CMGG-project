import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { getAccessToken } from "./Token";
import { FieldValues } from "react-hook-form";
import { QueryFunctionContext } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
export interface UserNameLoginParams {
  username: string;
  password: string;
  headers?: {
    Authorization: string;
    "X-Refresh-Token": string;
  };
}
export interface RegisterData {
  id: number;
  title: string;
  author: string;
  date: string;
  introduction: string;
  isDone: null | boolean;
}
export interface FormIdData {
  name: string;
  email: string;
  phone_number: string;
}

interface LectureAndCategoryAndSearchParams {
  queryKey: string[];
}

export interface PostReviewParams {
  lectureNum: number;
  data: FormData;
}
export interface UpdateReviewParams {
  lectureNum: number;
  reviewNum: number;
  data: {
    content: string;
  };
}
export interface DeleteReviewParams {
  lectureNum: number;
  reviewNum: number;
}

export interface PostReplyParams {
  lectureNum: number;
  reviewNum: number;
  data: {
    content: string;
  };
}

export interface UpdateReplyParams {
  lectureNum: number;
  reviewNum: number;
  replyNum: number;
  data: {
    content: string;
  };
}
export interface DeleteReplyParams {
  lectureNum: number;
  reviewNum: number;
  replyNum: number;
}

export interface FetchVideoListParams {
  lectureId: string;
  num: string;
}

export interface SavePlayedSecondsParams {
  lectureId: string;
  num: string;
  lastPlayed: number;
}

export interface DataAcceptInstructor {
  id: number;
  title: string;
  author: string;
  date: string;
  introduction: string;
  isDone: null | boolean;
}
export interface DataAcceptInstructorCut {
  id: number;

  isDone: null | boolean;
}
export interface WatchedLectures80Params {
  lectureId: string;
  num: string;
  is_completed: boolean;
  lastPlayed?: number;
}
export interface CartData {
  id: string;
}

type accessToken = string;
type refreshToken = string;

interface UserData {
  username: string;
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  dateBirth: string;
  gender: string;
  phoneNumber: string;
  position: string;
  skill: string;
  termsOfUse: string;
  image: File | null;
}
interface InstructorData {
  introduce: string;
  applicationField: string;
  image: File | null;
}
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

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (!originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // const refreshToken = Cookies.get("refresh");

        // if (refreshToken) {
        const newAccessToken = await postRefreshToken();
        // console.log(newAccessToken);
        if (newAccessToken) {
          Cookies.set("access", newAccessToken);

          instance.defaults.headers["Authorization"] =
            "Bearer " + newAccessToken;
          originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;

          return instance(originalRequest);
        } else {
          const navigate = useNavigate();
          navigate("/login");
          return Promise.reject(error);
        }
        // } else {
        //   const navigate = useNavigate();
        //   navigate("/login");
        //   return Promise.reject(error);
        // }
      } catch (refreshError) {
        const navigate = useNavigate();
        navigate("/login");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const kakaoLogin = async ({ code }: { code: string }) => {
  try {
    const headers: HeadersInit = new Headers({
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken") || "",
    });

    const response = await fetch(
      "https://www.crazyform.store/api/v1/users/login/kakao",
      {
        method: "POST",
        headers,
        body: JSON.stringify({ code }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      // const refresh = data.token.refresh;
      const access = data.token.access;

      Cookies.set("access", access);
      // Cookies.set("refresh", refresh);

      return true;
    } else {
      const { message } = await response.json();
      throw new Error(message);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const naverLogin = async ({
  code,
  state,
}: {
  code: string;
  state: string;
}) => {
  try {
    const headers: HeadersInit = new Headers({
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken") || "",
    });

    const response = await fetch(
      "https://www.crazyform.store/api/v1/users/login/naver",
      {
        method: "POST",
        headers,
        body: JSON.stringify({ code, state }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      const refresh = data.token.refresh;
      const access = data.token.access;

      Cookies.set("access", access);
      // Cookies.set("refresh", refresh);

      return true;
    } else {
      const { message } = await response.json();
      throw new Error(message);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export async function userNameLogin(
  { username, password }: UserNameLoginParams,
  headers?: {
    Authorization: string;
    "X-Refresh-Token": string;
  }
): Promise<boolean> {
  const response = await fetch(
    "https://crazyform.store/api/v1/users/jwttoken",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
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
    // Cookies.set("refresh", refresh);

    return true;
  } else {
    const { message } = await response.json();
    throw new Error(message);
  }
}

export async function postRefreshToken(): Promise<string | null> {
  // refresh: string
  try {
    const response = await axios.post(
      "https://crazyform.store/api/v1/users/jwt-token-auth/refresh/",
      {},
      { withCredentials: true }
    );
    return response.data.access;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}

export const findId = (data: FormIdData) =>
  instance
    .post("users/find/id", data, {
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    })
    .then((response) => response.data);

export const findPassword = (data: string) =>
  instance
    .post("users/find/password", data, {
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    })
    .then((response) => response.data);

export const newPassword = (data: string) =>
  instance
    .put("users/new-password", data, {
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    })
    .then((response) => response.data);

export const changePassword = (data: string) =>
  instance
    .put("users/changepassword/", data, {
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    })
    .then((res) => res.status);

export const signUpUser = (data: UserData) => {
  return instanceNotLogin.post("users/", data).then((res) => res.data);
};

export const getMyProfile = () => {
  return instance.get("users/myprofile").then((res) => res.data);
};

// export const saveavartar = (data: UserData) =>
//   instance
//     .post("users/saveavartar", data, {
//       headers: {
//         "X-CSRFToken": Cookies.get("csrftoken"),
//       },
//     })
//     .then((response) => response.data);

// export const getavartar = () => {
//   return instance.get(`users/getavartar`).then((res) => res.data);
// };

export const changeProfileUser = async (data: UserData) => {
  const formData = new FormData();

  formData.append("password", data.password);

  if (data.image) {
    formData.append("image", data.image, data.image.name);
  }

  try {
    const response = await instance.put("users/myprofile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    // Handle errors
    throw error;
  }
};

export const getLectureInfo = () => {
  return instance.get(`users/myprofile`).then((res) => res.data);
};

export const getAllLectures = () =>
  instanceNotLogin.get("lectures/all/all").then((res) => res.data);

// export const getLectureDetail = (page: number) => {
//   return instanceNotLogin.get(`lectures/${page}`).then((res) => res.data);
// };

export const getLectureDetail = async (page: number) => {
  const access = getAccessToken();
  try {
    if (access) {
      const res = await instance.get(`lectures/${page}`);
      return res.data;
    } else {
      const res = await instanceNotLogin.get(`lectures/${page}`);
      return res.data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postReview = ({ lectureNum, data }: PostReviewParams) => {
  return instance.post(`reviews/${lectureNum}`, data).then((res) => res.data);
};

export const postReply = ({ lectureNum, reviewNum, data }: PostReplyParams) => {
  return instance
    .post(`reviews/${lectureNum}/${reviewNum}`, data)
    .then((res) => res.data);
};

export const updateReview = ({
  lectureNum,
  reviewNum,
  data,
}: UpdateReviewParams) => {
  return instance
    .put(`reviews/detail/${lectureNum}/${reviewNum}`, data)
    .then((res) => res.data);
};

export const deleteReview = async ({
  lectureNum,
  reviewNum,
}: DeleteReviewParams): Promise<void> => {
  await instance.delete(`reviews/detail/${lectureNum}/${reviewNum}`);
};

export const updateReply = ({
  lectureNum,
  reviewNum,
  replyNum,
  data,
}: UpdateReplyParams) => {
  return instance
    .put(`reviews/detail/${lectureNum}/${reviewNum}/${replyNum}`, data)
    .then((res) => res.data);
};

export const deleteReply = async ({
  lectureNum,
  reviewNum,
  replyNum,
}: DeleteReplyParams): Promise<void> => {
  await instance.delete(
    `reviews/detail/${lectureNum}/${reviewNum}/${replyNum}`
  );
};

export const registerCart = (data: CartData) => {
  return instance.put("cart/", data).then((res) => res.data);
};

export const fetchVideoList = async ({
  lectureId,
  num,
}: FetchVideoListParams) => {
  return await instance
    .get(`videos/lectures/${lectureId}/${num}`)
    .then((res) => res.data);
};

export const savePlayedSeconds = ({
  lectureId,
  num,
  lastPlayed,
}: SavePlayedSecondsParams) => {
  // console.log("saveVideo", lectureId, num, lastPlayed);
  return instance
    .put(`watchedlectures/${lectureId}/${num}`, { lastPlayed })
    .then((res) => res.data);
};

export const watchedlectures80 = ({
  lectureId,
  num,
  is_completed,
  lastPlayed,
}: WatchedLectures80Params) => {
  // console.log("watchVideo", lectureId, num, is_completed, lastPlayed);

  return instance
    .put(`watchedlectures/${lectureId}/${num}`, { is_completed, lastPlayed })
    .then((res) => res.data);
};

export const postVideoTest = ({ thumbnail }: FieldValues) => {
  console.log("thumbnail", thumbnail);
  return instance.post("images/test", {
    file: thumbnail,
  });
};
export const postApplication = (data: InstructorData) => {
  const formData = new FormData();
  formData.append("introduce", data.introduce);
  formData.append("applicationField", data.applicationField);
  if (data.image) {
    formData.append("image", data.image, data.image.name);
  }
  return instance.post("admins/application/", formData).then((res) => res.data);
};
export const RegisterInstrutor = (
  data: { id: number; isDone: boolean | null }[]
) => {
  return instance
    .post("admins/application/approval/", data)
    .then((res) => res.data);
};
export const ApplyInstrutor = () => {
  return instance.get("admins/application/list/").then((res) => res.data);
};
export const SearchInstrutor = (name: string) => {
  // console.log(name);
  if (name) {
    return instance.get(`users/teachers/${name}`).then((res) => res.data);
  }
};
