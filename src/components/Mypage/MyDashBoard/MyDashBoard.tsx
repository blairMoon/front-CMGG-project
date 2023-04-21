import React from "react";
import LangChart from "../../LangChart/LangChart";
import DayChart from "../../WeekChart/WeekChart";
import GrassCalendar from "./GrassCalendar/GrassCalendar";
const MyDashBoard: React.FC = () => {
  return (
    <div>
      <LangChart />
      <DayChart />
      <GrassCalendar />
    </div>
  );
};

export default MyDashBoard;
