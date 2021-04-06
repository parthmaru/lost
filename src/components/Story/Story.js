import React from "react";
import { StoryStyle } from "./Styles";

const Story = ({ s_image }) => {
  return (
    <StoryStyle>
      <img src={s_image} alt="stories" />
    </StoryStyle>
  );
};

export default Story;
