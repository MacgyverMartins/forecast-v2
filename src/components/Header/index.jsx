import { useState } from "react";
import PropTypes from "prop-types";
import { SearchBar } from "..";
import { HeaderWrapper, Actions, Action, Clock } from "./styled";

function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Clock>3:25 PM</Clock>
      <Actions>
        {!open && <Action onClick={() => setOpen(true)}>Search</Action>}
        {open && (
          <SearchBar onSearch={props.onSearch} onClose={() => setOpen(false)} />
        )}
        <Action>Settings</Action>
      </Actions>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
