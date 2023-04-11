import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";

interface delProps {
  LectureId: number;
}
export const instance: AxiosInstance = axios.create({
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken"),
  },
  withCredentials: true,
});

export const getMockCarts = () =>
  instance.get("/carts").then((res) => res.data);

export const delMockCarts = ({ LectureId }: delProps) => {
  instance.delete(`/carts/${LectureId}`);
};
