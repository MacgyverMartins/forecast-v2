import styled from "styled-components";
import { theme } from "../../assets/theme";

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.span`
  color: ${theme.colors.white};
  margin-top: 10px;
  font-size: 20px;
`;
