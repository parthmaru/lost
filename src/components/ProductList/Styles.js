import styled from "styled-components";

export const ProductListStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16vh 3rem -1rem 3rem;
  /* margin-top: 15vh; */
  /* border: 1px solid red; */

  select {
    padding: 0.3rem 1rem;
    font-weight: bold;
    cursor: pointer;
  }

  button {
    padding: 0.3rem 1rem;
    margin: 0 1rem;
    background-color: white;
    border: none;
    /* box-shadow: 0px 1px 15px gray; */
    border-radius: 5px;
    border: 1px solid black;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    margin: 16vh 0 0 0.7rem;
    /* align-items: flex-start; */
    > .btnFilters {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      button {
        display: flex;
        padding: 0.3rem 0;
      }
    }
  }
`;

export const ProductCatagoryStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductListButtonStyle = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: #262626;
    color: white;
    padding: 0.7rem 3rem;
    outline: none;
    border: none;
    margin: -2rem 1rem 1rem 1rem;
    font-size: 1rem;
  }
`;
