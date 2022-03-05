import React from "react";
import PropTypes from "prop-types";
import { Close, InputArea, SearchInput } from "./styled";

function SearchBar(props) {
  return (
    <InputArea>
      <SearchInput
        type="text"
        onChange={(e) => props.onSearch(e.target.value)}
      />
      <Close onClick={props.onClose} />
    </InputArea>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SearchBar;
