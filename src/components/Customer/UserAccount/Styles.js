import styled from "styled-components";

export const UserAccountStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: #141e30;
  background: -webkit-linear-gradient(to right, #243b55, #141e30);
  background: linear-gradient(to right, #243b55, #141e30);
  color: white;
  margin-top: 8vh;
  padding: 9.2rem;
  margin-bottom: 0rem;

  > .userLink {
    text-decoration: none;
  }

  Button {
    width: 100%;
    margin: 1rem 0;
    font-family: Arial;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem;
    text-transform: capitalize;
  }
`;
