import styled from "styled-components";
import { theme } from "../../assets/theme";
import CloseIcon from "./CloseIcon";

export const InputArea = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  color: ${theme.colors.white};
  background-color: transparent;
  border: 2px solid ${theme.colors.blue};
  border-radius: 6px;
  width: 180px;
  padding: 4px 23px 4px 6px;
`;

export const Close = styled(CloseIcon)`
  width: 18px;
  height: 18px;
  fill: ${theme.colors.white};
  position: absolute;
  right: 4px;
  top: 5px;
  cursor: pointer;
`;
