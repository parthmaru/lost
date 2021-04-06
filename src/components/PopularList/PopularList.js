import React from "react";
import { popular } from "../../constants/popular";
import Popular from "../Popular/Popular";
import { PopularListContainerStyle, PopularListStyle } from "./Styles";

const PopularList = () => {
  return (
    <PopularListContainerStyle>
      <h1>Popular List</h1>
      <hr />
      <PopularListStyle>
        {popular.map((item) => (
          <Popular key={item.id} p_name={item.name} p_img={item.image} />
        ))}
      </PopularListStyle>
    </PopularListContainerStyle>
  );
};

export default PopularList;
