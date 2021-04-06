import React from "react";
import localshop from "../../images/local-shop.svg";
import { CarousalStyle } from "./Styles";

const Carousal = () => {
  return (
    <CarousalStyle>
      <h1>LOST</h1>
      <img
        src={localshop}
        style={{ width: "50vw", height: "50vh" }}
        alt="localshop"
      />
    </CarousalStyle>
  );
};

export default Carousal;
