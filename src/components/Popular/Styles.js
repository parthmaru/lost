import styled from "styled-components";

export const PopularContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 2rem;
  border-radius: 0.7rem;
  text-align: center;
  font-family: Arial;

  p {
    background-color: white;
  }

  @media (max-width: 400px) {
    height: 15rem;
    width: 6rem;
    padding: 1rem;
    justify-content: flex-end;
  }
`;

export const PopularImgStyle = styled.div`
  height: 17vh;
  width: 8vw;
  background-color: white;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 400px) {
    /* height: 20vh;
    width: 25vw; */
    width: fit-content;
    height: fit-content;
  }
`;

export const PopularButtonStyle = styled.div`
  button {
    background-color: #262626;
    border-radius: 15px;
    outline: none;
    border: none;
    color: white;
    padding: 7px;
    cursor: pointer;
  }
`;

export const PopularDetailStyle = styled.div``;
