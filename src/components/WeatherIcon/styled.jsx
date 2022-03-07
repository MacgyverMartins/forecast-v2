import styled from "styled-components";
import { theme } from "../../assets/theme";
import Svg from "../Svg";

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.span`
  color: ${theme.colors.white};
  margin-top: 10px;
  font-size: 1.2rem;
`;

export const StyledSVG = styled(Svg)`
  filter: drop-shadow(0 0 13px ${(p) => p.fill});
  width: 4rem;
  height: 4rem;
`;
