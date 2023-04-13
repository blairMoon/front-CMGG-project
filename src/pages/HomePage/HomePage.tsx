import React from "react";
import { Link } from "react-router-dom";

function HomePage(): React.ReactElement {
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
    </>
  );
}
export default HomePage;
