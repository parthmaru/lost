import styled from "styled-components";

export const CatagoryListStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;

  @media (max-width: 400px) {
    width: 100%;
    justify-content: flex-start;
    overflow-x: scroll;
  }
`;
