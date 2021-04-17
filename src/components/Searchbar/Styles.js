import styled from "styled-components";

export const SearchInputStyle = styled.div`
  padding: 0.4rem 1.2rem;
  margin: 0 0.3rem;
  border-radius: 15px;
  box-shadow: 3px 3px 3px 1px lightgray;
  cursor: pointer;

  @media (max-width: 400px) {
    display: none;
  }
`;
