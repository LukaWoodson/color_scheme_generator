import styled from "styled-components";

export const MiniSiteWrapper = styled.div`
  display: flex;
  background-color: #121212;
  width: 700px;
  height: 425px;
  border-radius: 10px;
  color: #d3d3d3;
`;

export const Drawer = styled.div`
  width: 122px;
  background-color: #3f3f3f;
  font-weight: 400;
  border-radius: 10px;
`;

export const DrawerTitle = styled.h2`
  font-size: 16px;
  margin-top: 10px;
`;

export const DrawerDivider = styled.div`
  margin-bottom: 10px;
  opacity: 0.5;
`;

export const DrawerItem = styled.p`
  margin-top: 10px;
`;

export const MiniSiteContent = styled.div`
  width: 578px;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  padding: 20px;
`;

export const MiniSitePreview = styled.div`
  color: #9bd5e5;
`;

export const MiniSiteTitle = styled.h1`
  font-size: 24px;
`;

export const Search = styled.div`
  background-color: #282828;
  width: 515px;
  color: rgba(211, 211, 211, 0.25);
  min-height: 30px;
  line-height: 30px;
  border-radius: 10px;
`;

export const SelectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 515px;
  height: 60px;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 10px 0;

  /* width */

  ::-webkit-scrollbar {
    height: 13px;
    width: 515px;
    border-radius: 10px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    background: #282828;
    border-radius: 10px;
  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #85cce0;
    border-radius: 10px;
  }

  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {
    background: #50bbd6;
  }
`;

export const Selection = styled.button`
  min-width: 135px;
  height: 45px;
  background-color: #3f3f3f;
  border-radius: 10px;
  line-height: 45px;
  cursor: pointer;
  color: #d3d3d3;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 515px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  width: 127px;
  height: 173px;
  background-color: #282828;
  border-radius: 10px;
  text-align: start;
  padding: 10px;
`;

export const CardTitle = styled.div`
  font-size: 16px;
  width: 121px;
`;

export const CardDescription = styled.p`
  font-size: 12px;
`;

export const CardButton = styled.button`
  background-color: #9bd5e5;
  width: 90px;
  height: 34px;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  align-self: center;
  cursor: pointer;
`;
