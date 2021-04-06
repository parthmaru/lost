import React from "react";
import { recommended } from "../../constants/recommended";
import Recommended from "../Recommended/Recommended";
import { RecommendedListContainerStyle, RecommendedListStyle } from "./Styles";

const RecommendedList = () => {
  return (
    <>
      <h1>Most Recommended product from lost</h1>
      <hr />
      <RecommendedListContainerStyle>
        <RecommendedListStyle>
          {recommended.map((item) => (
            <Recommended key={item.id} r_name={item.name} r_img={item.image} />
          ))}
        </RecommendedListStyle>
        <i
          className="fas fa-arrow-circle-right fa-lg"
          style={{ color: "gray" }}
        ></i>
      </RecommendedListContainerStyle>
    </>
  );
};

export default RecommendedList;
