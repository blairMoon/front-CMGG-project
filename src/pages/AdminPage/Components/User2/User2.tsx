import React from "react";
import NewMemberChart from "../Charts/UserCharts/NewMemberChart";
import { dataNewMember } from "../Charts/UserCharts/NewMemberChart";
import { dataGhost } from "../Charts/UserCharts/GhostPieChart";
import { dataGhostGraph } from "../Charts/UserCharts/GhostGraph";
import GhostChart from "../Charts/UserCharts/GhostPieChart";
import GhostGraph from "../Charts/UserCharts/GhostGraph";
import css from "../User/User.module.scss";
// import GhostGraph from "../Charts/GhostGraph";

interface Props {}

const User2: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div style={{ height: "290px", width: "100%" }}>
        <span className={css.h1}>New user count in the last 6 months</span>
        <NewMemberChart data={dataNewMember} />
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ marginTop: "15px", height: "300px", width: "800px" }}>
          <span className={css.h1}>Ghost member Chart</span>
          <span
            style={{ display: "block", marginTop: "10px", paddingLeft: "10px" }}
          >
            현재 유령 회원 비율
          </span>
          <GhostChart data={dataGhost} colors={["pink", "blue"]} />
        </div>
        <div style={{ marginTop: "40px", height: "290px", width: "1500px" }}>
          <span
            style={{
              display: "block",
              paddingTop: "20px",
              paddingRight: "10px",
            }}
          >
            연간 유령 회원 비율 추이
          </span>
          <GhostGraph data={dataGhostGraph} />
        </div>
      </div>
    </div>
  );
};

export default User2;
