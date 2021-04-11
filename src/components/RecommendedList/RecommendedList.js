import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { recommended } from "../../constants/recommended";
import Recommended from "../Recommended/Recommended";
import { RecommendedListTitleStyle } from "./Styles";

const MenuItem = ({ name, image }) => {
  return (
    <div style={{ padding: "1rem 0" }}>
      <Recommended r_name={name} r_img={image} />
    </div>
  );
};

export const Menu = (list) =>
  list.map((el) => {
    const { id, name, image } = el;
    return <MenuItem name={name} image={image} key={id} />;
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

class RecommendedList extends Component {
  state = {
    selected: 0,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    const menu = Menu(recommended, selected);

    return (
      <>
        <RecommendedListTitleStyle>
          <h1>Most Recommended product from lost</h1>
          <hr />
        </RecommendedListTitleStyle>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </>
    );
  }
}

export default RecommendedList;
