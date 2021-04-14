import styled from "styled-components";

export const ProductImageStyle = styled.div`
  height: 25vh;
  width: 25vh;

  img {
    height: 100%;
    width: 100%;
    border-radius: 15px;
  }
`;

export const ProductContainerStyle = styled.div`
  margin-top: 3rem;
  padding: 0.6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 20vw;
  height: auto;
  background-color: white;

  /* h4 {
    margin: 0;
  } */
`;

export const ProductPriceStyle = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */

  button {
    flex: 1;
    padding: 0.1rem;
    margin-left: 1rem;
    cursor: pointer;
    background-color: #262626;
    color: white;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;

    &:hover {
      background-color: #505050;
    }
  }
`;
