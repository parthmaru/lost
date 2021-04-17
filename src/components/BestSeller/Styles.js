import styled from "styled-components";

export const BestSellerContainerStyle = styled.div`
  box-shadow: inset 5px 5px 10px gray;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  background-color: whitesmoke;
  font-family: "Dancing Script", cursive;
  background-color: white;

  @media (max-width: 400px) {
    margin: 0;
  }
`;

export const BestSellerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;

  div {
    background-color: white;

    h1 {
      background-color: white;
    }

    p {
      background-color: white;
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    font-size: 0.7rem;

    div {
      text-align: center;

      h1 {
        margin: 0;
      }
    }
  }
`;

export const BestSellerImgStyle = styled.div`
  height: 30vh;
  width: 35vw;
  background-color: white;

  img {
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 5px 5px 5px gray;
  }

  @media (max-width: 400px) {
    height: fit-content;
    width: 100%;
  }
`;
