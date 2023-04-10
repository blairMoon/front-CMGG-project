import React from "react";
import LectureCard from "./LectureCard.tsx/LectureCard";

interface Props {}

const WholeLecturePage: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div>WholeLecturePage</div>
      <LectureCard />
    </>
  );
};

export default WholeLecturePage;
