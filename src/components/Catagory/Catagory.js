import React from "react";
import { CatagoryStyle, CatagoryImgStyle } from "./Styles";

const Catagory = ({ catagory_name, catagory_img }) => {
  return (
    <CatagoryStyle>
      <CatagoryImgStyle>
        <img
          src={catagory_img}
          style={{
            width: "3rem",
            height: "3rem",
            position: "absolute",
          }}
          alt="cat_cover"
        />
      </CatagoryImgStyle>
      <p>{catagory_name}</p>
    </CatagoryStyle>
  );
};

export default Catagory;
