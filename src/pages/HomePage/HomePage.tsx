import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { isLoggedInVar } from "../../services/apollo";
import { removeAccessToken } from "../../services/Token";

function HomePage(): React.ReactElement {
  const handleLogout = () => {
    removeAccessToken();
    isLoggedInVar(false);
  };
  return (
    <>
      <div>home</div>
      <Link to="lectures/all/all/?page=1">전체강의</Link>
      <div>
        <Link to="/login">로그인</Link>
      </div>
      <div>
        <Link to="/mypage">마이페이지</Link>
      </div>
      <div>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </>
  );
}
export default HomePage;
