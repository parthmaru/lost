import React from "react";
import { RecommendedStyle, RecommendedImgStyle } from "./Styles";

const Recommended = ({ r_name, r_img }) => {
  return (
    <RecommendedStyle>
      <RecommendedImgStyle>
        <img src={r_img} alt="recommended" />
        <h3>Image One</h3>
      </RecommendedImgStyle>
      <div className="__recommendedText">
        <p>{r_name}</p>
        <p>₹10</p>
      </div>
    </RecommendedStyle>
  );
};

export default Recommended;
