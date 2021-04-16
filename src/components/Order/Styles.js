import styled from "styled-components";

export const OrderMainSectionStyle = styled.div`
  margin-top: 15vh;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: 0.3fr 1.7fr 1fr; */
    /* column-gap: 1rem; */
    padding: 1rem 3rem;
    grid-template-areas: "productImg productName productPrice productDate";
    font-family: Arial;
    text-align: center;
    align-items: center;
    background-color: white;
    margin: 1rem 1rem;
    margin-top: 0;
    margin-bottom: 0;
    border: 1px solid lightgray;
  }

  .productImg {
    grid-area: productImg;
    height: 10vh;
    width: 10vh;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .productName {
    grid-area: productName;
    font-family: Open sans;
  }

  .productPrice {
    grid-area: productPrice;
    color: green;
    font-weight: 500;
  }

  .productDate {
    grid-area: productDate;
  }
`;

export const OrderTrackStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  border-top: 1px solid lightgray;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  padding: 1rem 0;
  /* background-color: white; */

  p {
    margin: 0 1rem;
    background-color: rgb(63, 81, 181);
    color: white;
    padding: 0.5rem;
    border-radius: 6px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
  }
`;

export const OrderDateStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  border-bottom: 1px solid lightgray;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  background-color: white;

  p {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 1rem;
    padding: 0.4rem;
  }
`;

export const OrderBoxStyle = styled.div`
  margin-bottom: 2rem;
`;
