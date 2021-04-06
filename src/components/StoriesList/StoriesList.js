import React from "react";
import { stories } from "../../constants/stories";
import Story from "../Story/Story";
import { StoriesListContainerStyle, StoriesListStyle } from "./Styles";

const StoriesList = () => {
  return (
    <StoriesListContainerStyle>
      <h1>
        Discover
        <br />
        Our <br /> Beautiful Stories
      </h1>
      <StoriesListStyle>
        {stories.map((item) => (
          <Story key={item.id} s_image={item.image} />
        ))}
        <i
          className="fas fa-arrow-circle-right fa-lg"
          style={{ color: "gray" }}
        ></i>
      </StoriesListStyle>
    </StoriesListContainerStyle>
  );
};

export default StoriesList;
