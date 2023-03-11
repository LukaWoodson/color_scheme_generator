import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80vw;
  align-items: center;
  margin: 2rem;
`;

export const TextBox = styled.div`
  margin: 1rem;
`;

export const ShadesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60vw;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  aspect-ratio: 1;

  span {
    margin-top: 1vh;
    font-weight: bold;
  }
`;

export const ColorCard = styled.div`
  outline: 1px solid red;
  width: 10vw;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
