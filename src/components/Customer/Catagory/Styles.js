import styled from "styled-components";

export const CatagoryImgStyle = styled.div`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  background-color: white;
  margin-top: 11vh;

  .link {
    background-color: white;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 400px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const CatagoryStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.9rem;
  background-color: white;

  p {
    background-color: white;
    padding-right: 0.3rem;
  }

  @media (max-width: 400px) {
    p {
      padding: 0 0.8rem;
      font-size: 0.8rem;
      color: gray;
    }
  }
`;
