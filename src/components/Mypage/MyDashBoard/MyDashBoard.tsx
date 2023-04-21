import React from "react";
import LangChart, { data as langChartData } from "../../LangChart/LangChart";
import DayChart, { data as DayChartData } from "../../DayChart/DayChart";
const MyDashBoard: React.FC = () => {
  return (
    <div>
      <LangChart data={langChartData} />
      <DayChart data={DayChartData} />
    </div>
  );
};

export default MyDashBoard;
