import React from "react";
import { Link } from "react-router-dom";
import { CatagoryStyle, CatagoryImgStyle } from "./Styles";

const Catagory = ({ catagory_name, catagory_img }) => {
  return (
    <CatagoryStyle>
      <CatagoryImgStyle>
        <Link to="/products" className="link">
          <img src={catagory_img} alt="cat_cover" />
        </Link>
      </CatagoryImgStyle>
      <p>{catagory_name}</p>
    </CatagoryStyle>
  );
};

export default Catagory;
