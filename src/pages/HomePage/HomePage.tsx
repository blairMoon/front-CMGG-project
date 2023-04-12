import React from "react";
import { Link } from "react-router-dom";

function HomePage(): React.ReactElement {
  return (
    <>
      <div>home</div>
      <Link to="wholeLectures/all/all">전체강의</Link>
    </>
  );
}
export default HomePage;
