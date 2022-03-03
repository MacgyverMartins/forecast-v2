import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../assets/theme";

export const TabnavWrapper = styled.div`
  p {
    color: ${theme.colors.white};
    text-align: center;
    font-size: 18px;
    margin-top: 18px;
  }
`;

export const Button = styled(Link).attrs((props) => ({
  className: props.active ? "active" : "",
}))`
  cursor: pointer;
  color: ${theme.colors.white};
  background-color: transparent;
  border: 2px solid ${theme.colors.blue};
  border-radius: 8px;
  padding: 4px 18px;
  text-decoration: none;
  margin: 0 6px;

  &.active {
    background-color: ${theme.colors.white};
    color: ${theme.colors.blue};
    border-color: ${theme.colors.white};
  }
`;
