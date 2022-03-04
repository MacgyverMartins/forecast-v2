import styled from "styled-components";
import { theme } from "../../assets/theme";

export const AppWrapper = styled.div`
  background-color: ${theme.colors.black};
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const MainViewWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ForecasArea = styled.div`
  height: 50%;
`;

export const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  margin-top: auto;
`;
