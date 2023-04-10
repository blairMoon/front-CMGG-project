import React from "react";
import { Outlet } from "react-router-dom";

interface Props {}

const MyInfoPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      MyInfoPage
      <Outlet />
    </div>
  );
};

export default MyInfoPage;
