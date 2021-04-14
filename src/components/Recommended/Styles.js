import styled from "styled-components";

export const RecommendedStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;
  box-shadow: 1px 1px 8px gray;
  border-radius: 0.7rem;
  background-color: white;
`;

export const RecommendedImgStyle = styled.div`
  height: 40vh;
  width: 15vw;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.7rem;
    border-bottom-left-radius: 7rem;
    /* border-bottom-left-radius: 0; */
    border-bottom-right-radius: 0;
  }

  &:hover {
    filter: brightness(50%);
  }
`;
