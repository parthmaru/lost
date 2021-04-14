import styled from "styled-components";

export const CatagoryImgStyle = styled.div`
  width: 4rem;
  height: 4rem;
  /* padding: 1rem; */
  /* border-radius: 50%; */
  /* background-image: linear-gradient(white, whitesmoke); */
  /* box-shadow: 0px 0px 1px black; */
  cursor: pointer;
  background-color: white;

  .link {
    background-color: white;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 3rem;
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
  }

  /* margin-left: -5rem;
  margin-right: -5rem; */
`;
