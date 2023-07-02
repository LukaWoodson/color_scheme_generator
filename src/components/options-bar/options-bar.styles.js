// import styled from "styled-components";
//
// export const OptionsBarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 10px;
// `;
//
// export const ButtonGroup = styled.div`
//   width: 330px;
//   height: 50px;
//   margin: 0 auto;
// `;
//
// export const GroupButton = styled.button`
//   width: 115px;
//   height: 50px;
//   margin-left: -15px;
//   border-radius: 10px;
//   border: none;
//   box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
//   background-color: #404040;
//
//   &:hover {
//     cursor: pointer;
//     background-color: #808080;
//   }
// `;

import styled from "styled-components";

export const OptionsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const ButtonGroup = styled.div`
  width: 330px;
  height: 50px;
  margin: 0 auto;
  display: flex;
`;

export const GroupButton = styled.button`
  width: 115px;
  height: 50px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: ${({ active }) => (active ? "#808080" : "#404040")};
  color: #d3d3d3;

  &:hover {
    cursor: pointer;
    background-color: #808080;
  }
`;
