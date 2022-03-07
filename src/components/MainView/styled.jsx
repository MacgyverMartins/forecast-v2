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

export const ForecastArea = styled.div`
  height: 40vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0.4rem;
  grid-row-gap: 0.4rem;
  margin-top: auto;
  padding: 0 0.4rem;
  max-height: 50vh;
  overflow: auto;

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;
