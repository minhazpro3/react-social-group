/* eslint-disable no-undef */
import React from "react";
import background from "../utils/images/codding.jpg";
const Banner = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "440px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container ">
        <div className="position-absolute top-50 translate-middle-y ">
          <h4 className="text-white fs-1">Computer Engineering</h4>
          <h4 className="text-white fs-5">
            142,765 Computer Engineers follow this
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
