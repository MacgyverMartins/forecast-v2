import React from "react";
import PropTypes from "prop-types";
import { Close, InputArea, SearchAction, SearchInput } from "./styled";
import { useState } from "react";

function SearchBar(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open && (
        <SearchAction onClick={() => setOpen(true)}>Search</SearchAction>
      )}
      {open && (
        <InputArea>
          <SearchInput
            type="text"
            onChange={(e) => props.onSearch(e.target.value)}
          />
          <Close onClick={() => setOpen(false)} />
        </InputArea>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
