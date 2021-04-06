import styled from "styled-components";

export const CatagoryImgStyle = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  border-radius: 50%;
  background-image: linear-gradient(white, whitesmoke);
  box-shadow: 1px 1px 3px lightgray;
  cursor: pointer;

  &:hover img {
    scale: 1.15;
  }
`;

export const CatagoryStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.9rem;
`;
