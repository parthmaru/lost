import styled from "styled-components";

export const PopularContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 2rem;
  border-radius: 0.7rem;

  p {
    background-color: white;
  }
`;

export const PopularImgStyle = styled.div`
  height: 15vh;
  width: 7vw;
  background-color: white;

  img {
    width: 100%;
    height: 100%;
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
  }
`;
