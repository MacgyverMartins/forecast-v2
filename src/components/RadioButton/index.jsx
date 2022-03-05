import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../assets/theme";

export const RadioLabel = styled.label`
  display: block;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  border: 1px solid ${theme.colors.blue};
  border-radius: 6px;
  padding: 4px 0;
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

export const Radio = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    background-color: ${theme.colors.white};
    color: ${theme.colors.blue};
    border-color: ${theme.colors.white};
  }
`;

function RadioButton({ value, name, label }) {
  return (
    <>
      <Radio type="radio" id={value} value={value} name={name} />
      <RadioLabel for={value}>{label}</RadioLabel>
    </>
  );
}

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default RadioButton;
