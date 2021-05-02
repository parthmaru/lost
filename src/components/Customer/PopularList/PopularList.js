import { Button } from "@material-ui/core";
import React from "react";
import { popular } from "../../../constants/popular";
import Popular from "../Popular/Popular";
import {
  PopularListContainerStyle,
  PopularListStyle,
  PopularTopStyle,
} from "./Styles";

const PopularList = () => {
  return (
    <PopularListContainerStyle>
      <PopularTopStyle>
        <h1>Popular List</h1>
        <Button
          size="large"
          color="primary"
          variant="contained"
          className="viewAllButton"
        >
          View All
        </Button>
      </PopularTopStyle>
      <PopularListStyle>
        {popular.map((item) => (
          <Popular
            key={item.id}
            p_id={item.id}
            p_name={item.name}
            p_img={item.image}
            p_price={item.price}
            p_discount={item.discount}
            p_category={item.category}
          />
        ))}
      </PopularListStyle>
    </PopularListContainerStyle>
  );
};

export default PopularList;
