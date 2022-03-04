import styled from "styled-components";
import { theme } from "../../assets/theme";

export const WeatherInfos = styled.div`
  color: ${theme.colors.white};
  margin: 8px 0 0;
  width: 200px;
  text-align: center;
`;

export const DailyWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
