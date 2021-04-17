import styled from "styled-components";

export const CarousalContainerStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;

  .next,
  .prev {
    top: calc(50% - 20px);
    position: absolute;
    background: white;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
  }

  .next {
    right: 10px;
  }

  .prev {
    left: 10px;
    transform: scale(-1);
  }

  .image-part {
    position: absolute;
    max-width: 100vw;
  }

  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const CarousalStyle = styled.div`
  height: 62vh;
  width: 100vw;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
