import styled from "styled-components";

export const StoryStyle = styled.div`
  height: 50vh;
  width: 20vw;
  margin-right: 3rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    object-fit: cover;
  }

  @media (max-width: 400px) {
    width: 90vw;
    margin: 0 1rem;
  }
`;
