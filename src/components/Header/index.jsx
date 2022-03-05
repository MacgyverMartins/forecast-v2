import { useState } from "react";
import PropTypes from "prop-types";
import { SearchBar, SettingsModal } from "..";
import { HeaderWrapper, Actions, Action, Clock } from "./styled";

function Header(props) {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);

  return (
    <HeaderWrapper>
      <Clock>3:25 PM</Clock>
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
