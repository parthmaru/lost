import React from "react";
import {
  BestSellerContainerStyle,
  BestSellerImgStyle,
  BestSellerStyle,
} from "./Styles";

const BestSeller = ({
  brand_name,
  subtextOne,
  subtextTwo,
  subTextThree,
  b_img,
}) => {
  return (
    <BestSellerContainerStyle>
      <BestSellerStyle>
        <div>
          <h1 style={{ fontSize: "3rem" }}>{brand_name}</h1>
          <p>{subtextOne}</p>
          <p>{subtextTwo}</p>
          <p>{subTextThree}</p>
        </div>
        <BestSellerImgStyle>
          <img src={b_img} alt="bestSeller" />
        </BestSellerImgStyle>
      </BestSellerStyle>
    </BestSellerContainerStyle>
  );
};

export default BestSeller;
