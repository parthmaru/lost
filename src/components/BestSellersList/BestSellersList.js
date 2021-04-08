import React from "react";
import { bestSeller } from "../../constants/bestSeller";
import BestSeller from "../BestSeller/BestSeller";
import { BestSellersListStyle } from "./Styles";

const BestSellersList = () => {
  return (
    <BestSellersListStyle>
      <h1>BestSellers in Lost</h1>
      <hr />
      {bestSeller.map((item) => (
        <BestSeller
          key={item.id}
          brand_name={item.name}
          subtextOne={item.subtextOne}
          subtextTwo={item.subtextTwo}
          subTextThree={item.subtextThree}
          b_img={item.image}
        />
      ))}
    </BestSellersListStyle>
  );
};

export default BestSellersList;
