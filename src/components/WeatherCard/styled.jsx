import styled from "styled-components";
import { theme } from "../../assets/theme";

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
