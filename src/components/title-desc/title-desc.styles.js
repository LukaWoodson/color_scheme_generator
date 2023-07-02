import styled from "styled-components";

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 606px;
  gap: 4px;
  margin-top: 33px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
`;

export const TextBox = styled.div`
  font-size: 24px;
  padding: 30px;
  height: 520px;
  border-radius: 10px;
  background-color: #4a4a4a;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const ColorGuide = styled.p`
  color: #d3d3d3;
  margin-top: 20px;
`;

export const Desc = styled.p`
  color: #d3d3d3;
  margin-top: 80px;
`;
