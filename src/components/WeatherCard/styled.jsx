import styled from "styled-components";
import { theme } from "../../assets/theme";

export const WeatherCardWrapper = styled.div`
  position: relative;
  overflow: visible;
`;

export const InfosList = styled.ul`
  list-style: none;
  padding: 0;
  position: absolute;
  left: 60%;
  top: 0;
  font-size: 0.8rem;

  li {
    color: ${theme.colors.white};
    margin-bottom: 6px;
  }
`;
