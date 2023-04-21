import React from "react";
import GrassCalendar from "./GrassCalendar/GrassCalendar";

interface Props {}

const MyDashBoard: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <GrassCalendar />
    </div>
  );
};

export default MyDashBoard;
