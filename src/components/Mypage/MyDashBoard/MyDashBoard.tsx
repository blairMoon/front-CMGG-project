import React from "react";
import LangChart, { data } from "../../LangChart/LangChart";

const MyDashBoard: React.FC = () => {
  return (
    <div>
      <LangChart data={data} />
    </div>
  );
};

export default MyDashBoard;
