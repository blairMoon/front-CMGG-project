import React from "react";
import css from "./NotFound.module.scss";
const NotFound = () => {
  return (
    <>
      <div className={css.imgDiv}>
        <div className={css.imgWrapper}>
          <img
            className={css.img}
            src="/images/CGLOGO.png"
            alt="logo"
            width="300"
          />
          <p className={css.p}>읍는 페이지인데용</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
