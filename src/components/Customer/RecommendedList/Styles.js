import styled from "styled-components";

export const RecommendedListContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
  margin-right: 2rem;
`;

export const RecommendedListStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export const RecommendedListTitleStyle = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;

  @media (max-width: 400px) {
    justify-content: center;
    margin: 0;

    h1 {
      font-size: 1.4rem;
    }

    > .viewAllButton {
      display: none;
    }
  }
`;
