import styled from "styled-components";
import { theme } from "../../assets/theme";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  color: ${theme.colors.white};
`;

const Clock = styled.div``;

const Actions = styled.div`
  > * {
    margin-right: 12px;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Clock>3:25 PM</Clock>
      <Actions>
        <span>Search</span>
        <span>Settings</span>
      </Actions>
    </HeaderWrapper>
  );
}

export default Header;
