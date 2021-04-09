import React, { useEffect } from "react";
import { RecommendedStyle, RecommendedImgStyle } from "./Styles";
import Aos from "aos";
import "aos/dist/aos.css";

const Recommended = ({ r_name, r_img }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="flip-left">
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
    </div>
  );
};

export default Recommended;
