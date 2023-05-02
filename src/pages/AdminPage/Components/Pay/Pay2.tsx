import React from "react";
import PayChart2 from "./PayChart2";
import { dataPay2 } from "./PayChart2";

import { GiPrayerBeads } from "react-icons/gi";
import PayDescription from "./PayDescription/PayDescription";
interface Props {}

const Pay: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <PayDescription />
      <div style={{ width: "100%", height: "500px" }}>
        <PayChart2 data={dataPay2} />
      </div>
    </div>
  );
};

export default Pay;
