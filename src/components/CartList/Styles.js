import styled from "styled-components";

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;

  @media (max-width: 400px) {
    width: 100%;
    padding-left: 0.4rem;
  }
`;

export const CartTotalOrderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;
