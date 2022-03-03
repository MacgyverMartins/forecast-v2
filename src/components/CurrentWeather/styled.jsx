import styled from "styled-components";

import { theme } from "../../assets/theme";

export const CurrentWeatherWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
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
  list-style: none;
  padding: 0;
  position: absolute;
  left: 60%;
  top: 35px;

  li {
    color: ${theme.colors.white};
    margin-bottom: 6px;
  }
`;
