import React from "react";
import Sidebar from "./../SideBar/SideBar";
interface Props {}

const Admin: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Sidebar children={<div>Child Component</div>} />
    </div>
  );
};

export default Admin;
