import React from "react";

import Sidebar from "./../SideBar/SideBar";
import { Outlet } from "react-router-dom";
interface Props {}

const Admin: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Sidebar children={<Outlet />} />
    </div>
  );
};

export default Admin;
