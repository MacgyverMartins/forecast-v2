import styled from "styled-components";

import { theme } from "../../assets/theme";

export const ForecastWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  main {
    margin: auto 0;
    max-width: 100%;
    overflow: auto;
  }
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  color: ${theme.colors.white};
  text-align: center;
  margin: 0 0 10px 0;
`;

export const WeatherList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
