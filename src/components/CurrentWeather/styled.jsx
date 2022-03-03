import styled from "styled-components";

import { theme } from "../../assets/theme";

export const CurrentWeatherWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${theme.colors.white};
  text-align: center;
  margin: 0 0 10px 0;
`;

export const InfosList = styled.ul`
  position: absolute;
  margin-left: 272px;
  list-style: none;
  padding: 0;

  li {
    color: ${theme.colors.white};
    margin-bottom: 6px;
  }
`;
