import React from "react";
import { bestSeller } from "../../constants/bestSeller";
import BestSeller from "../BestSeller/BestSeller";

const BestSellersList = () => {
  return (
    <>
      <h1>BestSellers in Lost</h1>
      <hr />
      {bestSeller.map((item) => (
        <BestSeller
          brand_name={item.name}
          subtextOne={item.subtextOne}
          subtextTwo={item.subtextTwo }
          subTextThree={item.subtextThree}
          b_img={item.image}
        />
      ))}
    </>
  );
};

export default BestSellersList;
