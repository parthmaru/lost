import styled from "styled-components";

export const RecommendedStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1.2rem;
  cursor: pointer;
  box-shadow: 1px 1px 8px gray;
  border-radius: 0.7rem;
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

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    opacity: 0;
    transition: all 0.5s ease;
  }

  &:hover h3 {
    opacity: 1;
  }
`;
