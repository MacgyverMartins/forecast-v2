import styled from "styled-components";
import { theme } from "../../assets/theme";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  color: ${theme.colors.white};
`;

export const Clock = styled.div``;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Action = styled.span`
  color: ${theme.colors.white};
  cursor: pointer;
  margin-left: 8px;
`;
