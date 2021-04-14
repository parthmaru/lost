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
    /* background-color: #262626; */
    /* color: white; */
    border-radius: 5px;
  }

  img {
    max-width: 80px;
    object-fit: contain;
    margin-left: 80px;
    margin-right: 40px;
  }
`;
