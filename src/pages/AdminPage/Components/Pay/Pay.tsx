import React from "react";
import PayChart from "./../Charts/PayCharts/PayChart";
import { dataPay } from "./../Charts/PayCharts/PayChart";

import { GiPrayerBeads } from "react-icons/gi";
import PayDescription from "./PayDescription/PayDescription";
interface Props {}

const Pay: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <PayDescription />
      <div style={{ width: "100%", height: "500px" }}>
        <PayChart data={dataPay} />
      </div>
    </div>
  );
};

export default Pay;
