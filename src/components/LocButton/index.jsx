import styled from "styled-components";
import { theme } from "../../assets/theme";

const LocButton = styled.button.attrs((props) => ({
  className: props.active ? "active" : "",
}))`
  cursor: pointer;
  color: ${theme.colors.white};
  background-color: transparent;
  border: 2px solid ${theme.colors.blue};
  border-radius: 8px;
  padding: 12px;

  &.active {
    background-color: ${theme.colors.white};
    color: ${theme.colors.blue};
    border-color: ${theme.colors.white};
  }
`;

export default LocButton;
