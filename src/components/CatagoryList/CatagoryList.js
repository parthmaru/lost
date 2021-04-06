import React from "react";
import Catagory from "../Catagory/Catagory";
import { CatagoryListStyle } from "./Styles";
import { catagories } from "../../constants/catagories";

const CatagoryList = () => {
  return (
    <CatagoryListStyle>
      {catagories.map((item) => (
        <Catagory
          catagory_name={item.name}
          catagory_img={item.image}
          key={item.id}
        />
      ))}
    </CatagoryListStyle>
  );
};

export default CatagoryList;
