import { memo } from "react";
import PropTypes from "prop-types";
import { SearchBar } from "..";
import { HeaderWrapper, Actions, Clock } from "./styled";

function Header(props) {
  console.log("render Header");
  return (
    <HeaderWrapper>
      <Clock>3:25 PM</Clock>
      <Actions>
        <SearchBar onSearch={props.onSearch} />
        <div>Settings</div>
      </Actions>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func,
};

// export default Header;
export default memo(Header);
