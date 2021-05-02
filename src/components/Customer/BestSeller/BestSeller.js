import React, { useEffect } from "react";
import {
  BestSellerContainerStyle,
  BestSellerImgStyle,
  BestSellerStyle,
} from "./Styles";
import Aos from "aos";

const BestSeller = ({
  brand_name,
  subtextOne,
  subtextTwo,
  subTextThree,
  b_img,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-in">
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
    </div>
  );
};

export default BestSeller;
