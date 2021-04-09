import React, { useEffect } from "react";
import {
  PopularContainerStyle,
  PopularImgStyle,
  PopularButtonStyle,
} from "./Styles";
import Aos from "aos";
import "aos/dist/aos.css";

const Popular = ({ p_name, p_img }) => {
  useEffect(() => {
    Aos.init(1000);
  }, []);

  return (
    <div data-aos="zoom-out">
      <PopularContainerStyle>
        <PopularImgStyle>
          <img src={p_img} alt="popuar" />
        </PopularImgStyle>
        <p>{p_name}</p>
        <PopularButtonStyle>
          <button>Buy Now</button>
        </PopularButtonStyle>
      </PopularContainerStyle>
    </div>
  );
};

export default Popular;
