import Cookies from "js-cookie";

export function getAccessToken() {
  const access = Cookies.get("access");
  // console.log("Token before removal:", access);
  return access || undefined;
}
// console.log(getAccessToken());
export function getRefreshToken() {
  const refresh = Cookies.get("refresh");
  if (!refresh) return undefined;
  return refresh;
}
export const removeAccessToken = () => {
  Cookies.remove("access");
  Cookies.remove("refresh");
};
