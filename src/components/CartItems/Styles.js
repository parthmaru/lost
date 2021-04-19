import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  .buttons {
    border-radius: 5px;
  }

  img {
    max-width: 80px;
    object-fit: contain;
    margin-left: 80px;
    margin-right: 40px;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;

    padding-left: 1rem;
    img {
      margin: 1rem;
      padding: 0.5rem;
    }
  }
`;
