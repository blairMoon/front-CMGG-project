import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";

// const value: string | undefined = Cookies.get("my-cookie");
const instance = axios.create({
  baseURL: `https://crazyform.store/api/v1/`,
  withCredentials: false,
});

// export const instanceNotLogin = axios.create({
//   baseURL: "https://crazyform.store/api/v1/",
//   // baseURL: 'http://115.85.182.132:8000/api/v1/',

//   headers: {
//     "X-CSRFToken": Cookies.get("csrftoken"),
//   },
//   withCredentials: true,
// });
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = Cookies.get("refresh");
//         const accessToken = Cookies.get("access");

//         const newAccessToken = await postRefreshToken(
//           refreshToken,
//           accessToken
//         );

//         if (newAccessToken) {
//           Cookies.set("access", newAccessToken);

//           // Update the Authorization header with the new access token
//           instance.defaults.headers["Authorization"] =
//             "Bearer " + newAccessToken;
//           originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;

//           return instance(originalRequest);
//         } else {
//           // useNavigate("https://crazyform.store/api/v1/users/jwt-token-auth/");
//           return Promise.reject(error);
//         }
//       } catch (refreshError) {
//         // useNavigate("https://crazyform.store/api/v1/users/jwt-token-auth/");
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export async function userNameLogin({ username, password }) {
//   const response = await fetch(
//     "https://crazyform.store/api/v1/users/jwt-token-auth/  ",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//       credentials: "include",
//     }
//   );

//   if (response.ok) {
//     const data = await response.json();
//     const refresh = data.refresh;
//     const access = data.access;

//     Cookies.set("access", access);
//     Cookies.set("refresh", refresh);

//     return true;
//   } else {
//     const { message } = await response.json();
//     throw new Error(message);
//   }
// }
// export async function postRefreshToken(refresh, access) {
//   try {
//     const response = await axios.post(
//       "https://crazyform.store/api/v1/users/jwt-token-auth/refresh/",
//       {
//         refresh,
//         access,
//       }
//     );
//     return response.data.access;
//   } catch (error) {
//     console.error("Error refreshing token:", error);
//     return null;
//   }
// }

// export const signUpUser = (data) => {
//   return instanceNotLogin.post("users/", data).then((res) => res.data);
// };

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
