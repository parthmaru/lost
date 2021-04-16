import styled from "styled-components";

export const PopularListContainerStyle = styled.div`
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin: 1rem;
  background-color: white;
  box-shadow: 1px 5px 7px 0px rgba(194, 194, 194, 0.73);
  -webkit-box-shadow: 1px 5px 7px 0px rgba(194, 194, 194, 0.73);
  -moz-box-shadow: 1px 5px 7px 0px rgba(194, 194, 194, 0.73);
  padding: 0 1rem;
`;

export const PopularListStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const PopularTopStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  border-bottom: 1px solid lightgray;

  h1 {
    margin: 0;
    padding-top: 1rem;
  }
`;
