import React from "react";
import LecturePlayer from "../../components/LecturePlayer/LecturePlayer";

interface Props {}

const LecturePlayerPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <LecturePlayer />
    </div>
  );
};
export default LecturePlayerPage;
