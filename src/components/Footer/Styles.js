import styled from "styled-components";

export const Box = styled.div`
  border-top: 1px solid black;
  margin-top: 1rem;
  background-color: black;
  color: white;
  /* width: 100%; */
  /* height: 100%; */
  /* padding: 10px 0 10px 0; */
  /* background: black; */
  /* position: absolute; */
  /* bottom: 0; */
  /* width: 100%; */

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  /* margin-left: 60px; */
`;

export const Row = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px; */
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
    flex-direction: column;
  }
`;

export const FooterLink = styled.a`
  color: white;
  font-size: 18px;
  text-decoration: none;
  margin: auto;
  margin-bottom: 30px;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.5rem;
    width: 0.5rem;
    border: 1px solid lightgray;
    padding: 1rem;
    border-radius: 50%;
  }

  &:hover {
    color: gray;
    transition: 200ms ease-in;

    i {
      background-color: white;
      color: black;
    }
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: gray;
  border-bottom: 1px solid white;
  margin-bottom: 40px;
  font-weight: bold;
`;
