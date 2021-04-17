import { Button } from "@material-ui/core";
import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { recommended } from "../../constants/recommended";
import Recommended from "../Recommended/Recommended";
import { RecommendedListTitleStyle } from "./Styles";

const MenuItem = ({ name, image, price }) => {
  return (
    <div style={{ padding: "1rem 0" }}>
      <Recommended r_name={name} r_img={image} r_price={price} />
    </div>
  );
};

export const Menu = (list) =>
  list.map((el) => {
    const { id, name, image, price } = el;
    return <MenuItem name={name} image={image} price={price} key={id} />;
  });
const Arrow = (text) => {
  return (
    <div
      style={{
        cursor: "pointer",
        fontSize: "2rem",
      }}
    >
      {text}
    </div>
  );
};

const ArrowLeft = Arrow("<");
const ArrowRight = Arrow(">");

const RecommendedList = () => {
  const [selected, setSelected] = useState(0);
  const onSelect = (key) => {
    setSelected(key);
  };

  const menu = Menu(recommended, selected);

  return (
    <>
      <RecommendedListTitleStyle>
        <h1>Most Recommended</h1>
        <Button
          size="large"
          color="primary"
          variant="contained"
          className="viewAllButton"
        >
          View All
        </Button>
      </RecommendedListTitleStyle>
      <ScrollMenu
        data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
      />
    </>
  );
};

export default RecommendedList;
