import React from "react";
import { stories } from "../../../constants/stories";
import Story from "../Story/Story";
import { StoriesListContainerStyle, StoriesListStyle } from "./Styles";

const StoriesList = () => {
  return (
    <StoriesListContainerStyle>
      <h1 className="headingOne">
        Discover
        <br />
        Our <br /> Beautiful Stories
      </h1>
      <h1 className="headingTwo">Discover Our Beautiful Stories</h1>

      <StoriesListStyle>
        {stories.map((item) => (
          <Story key={item.id} s_image={item.image} />
        ))}
      </StoriesListStyle>
    </StoriesListContainerStyle>
  );
};

export default StoriesList;
