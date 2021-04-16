import styled from "styled-components";

export const NavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-bottom: 1rem; */
  background-color: white;
  /* box-shadow: 1px 15px 25px whitesmoke; */
  /* margin-bottom: 0.5rem; */
  position: fixed;
  top: 0;
  z-index: 1000 !important;
  width: 100%;

  h1 {
    font-family: "Train One", cursive;
    background-color: white;
  }
`;

export const NavIconStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
`;
