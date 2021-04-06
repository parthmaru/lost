import styled from "styled-components";

export const BestSellerContainerStyle = styled.div`
  box-shadow: inset 5px 5px 10px gray;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  background-color: whitesmoke;
  font-family: "Dancing Script", cursive;
`;

export const BestSellerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BestSellerImgStyle = styled.div`
  height: 30vh;
  width: 35vw;

  img {
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 5px 5px 5px gray;
  }
`;
