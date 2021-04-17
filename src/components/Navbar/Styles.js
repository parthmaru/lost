import styled from "styled-components";

export const NavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
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

  > .navIcon {
    background-color: white;
    padding: 0 2rem;
    border-right: 1px solid black;
  }

  > .navIconBadge {
    cursor: pointer;
    background-color: white;
    margin: 0 2rem;
  }

  > .navIconPerson {
    background-color: white;
    padding: 0 2rem;
    border-left: 1px solid black;
  }

  @media (max-width: 400px) {
    > .navIcon {
      display: none;
    }
  }
`;
