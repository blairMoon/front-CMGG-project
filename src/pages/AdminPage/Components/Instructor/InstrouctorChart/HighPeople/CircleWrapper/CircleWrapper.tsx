import React from "react";
import css from "../HighPeople.module.scss";
interface Props {}
interface CircleProps {
  top?: string;
  left?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
const CircleWrapper: React.FC<CircleProps> = ({ children, top, left }) => {
  return (
    <div
      className={css.circle}
      // style={{ top: top || "40%", left: left || "50%" }}
    >
      {children}
    </div>
  );
};
export default CircleWrapper;
