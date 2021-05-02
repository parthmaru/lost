import styled from "styled-components";

export const StoriesListContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Dancing Script", cursive;
  padding: 1rem;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;

  > .headingTwo {
    display: none;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    margin: 0;
    padding: 0;

    > .headingOne {
      display: none;
    }

    > .headingTwo {
      display: block;
      font-size: 1.4rem;
    }

    overflow-x: scroll;
  }
`;

export const StoriesListStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 400px) {
    align-self: baseline;
  }
`;
