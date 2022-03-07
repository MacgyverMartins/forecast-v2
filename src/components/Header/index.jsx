import { useState } from "react";
import PropTypes from "prop-types";
import { SearchBar, SettingsModal, Clock } from "..";
import { HeaderWrapper, Actions, Action } from "./styled";

function Header(props) {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <HeaderWrapper>
      <Clock />
      <Actions>
        {!open && <Action onClick={() => setOpen(true)}>Search</Action>}
        {open && (
          <SearchBar onSearch={props.onSearch} onClose={() => setOpen(false)} />
        )}
        <Action onClick={() => setShowModal(true)}>Settings</Action>
      </Actions>
      {showModal && <SettingsModal onClose={() => setShowModal(false)} />}
    </HeaderWrapper>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
