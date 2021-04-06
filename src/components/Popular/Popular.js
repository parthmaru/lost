import React from "react";
import {
  PopularContainerStyle,
  PopularImgStyle,
  PopularButtonStyle,
} from "./Styles";

const Popular = ({ p_name, p_img }) => {
  return (
    <PopularContainerStyle>
      <PopularImgStyle>
        <img src={p_img} alt="popuar" />
      </PopularImgStyle>
      <p>{p_name}</p>
      <PopularButtonStyle>
        <button>Buy Now</button>
      </PopularButtonStyle>
    </PopularContainerStyle>
  );
};

export default Popular;
