import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80vw;
  align-items: center;
  margin: 2rem;
`;

export const Title = styled.h1`
  font-size: 44px;
  font-weight: 600;
  position: absolute;
  top: 2rem;
`;

export const TextBox = styled.div`
  margin: 1rem;
  position: absolute;
  top: 5rem;
`;

export const ColorInput = styled.input`
  font-size: medium;
  padding: 0.5rem;
`;

export const GetValuesButton = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  font-size: medium;
`;

export const Content = styled.div`
  position: absolute;
  top: 12rem;
  background: lightgray;
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: 0px 0px 6px 0px rgb(0 0 0);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "default" : "none")};
`;

export const SectionTitle = styled.h2`
  padding: 1rem;
  background: cadetblue;
  border-radius: 1rem 1rem 0rem 0rem;
  box-shadow: 0px 1px 2px 0 rgb(0 0 0);
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60rem;
  padding: 1rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 9rem;
  aspect-ratio: 1;

  span {
    margin-top: 1vh;
    font-weight: bold;
  }
`;

export const ColorCard = styled.div`
  width: 10vw;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0px 2px 4px 0 rgb(0 0 0);
  cursor: pointer;
`;

export const Notification = styled.div`
  position: fixed;
  top: 25rem;
  padding: 10px;
  border-radius: 5px;
  display: ${({ show }) => show ? "block" : "none"};
  cursor: context-menu;
  opacity: 0.9;
  width: 15rem;
  height: 2rem;
  line-height: 2;
  background: ${({ notifColor }) => notifColor};
  font-weight: 600;
`;