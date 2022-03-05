import React from "react";
import PropTypes from "prop-types";
import { RadioButton } from "..";
import {
  Modal,
  ModalOverlay,
  Title,
  SubTitle,
  RadioGroup,
  Button,
} from "./styled";

function SettingsModal(props) {
  const onChangeUnits = (event) => {
    console.log(event.target.value);
  };

  const onChangeTime = (event) => {
    console.log(event.target.value);
  };

  const handleSave = () => {
    props.onClose();
  };

  return (
    <ModalOverlay>
      <Modal>
        <Title>Settings</Title>
        <SubTitle>Units</SubTitle>
        <RadioGroup onChange={onChangeUnits}>
          <RadioButton label="Imperial" value="imperial" name="units" />
          <RadioButton label="Metric" value="metric" name="units" />
          <RadioButton label="Standard" value="standard" name="units" />
        </RadioGroup>
        <SubTitle>Time</SubTitle>
        <RadioGroup onChange={onChangeTime}>
          <RadioButton label="AM/PM" value="h11" name="time" />
          <RadioButton label="24h" value="h23" name="time" />
        </RadioGroup>
        <RadioGroup onChange={onChangeTime} style={{ marginTop: "3rem" }}>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </RadioGroup>
      </Modal>
    </ModalOverlay>
  );
}

SettingsModal.propTypes = {
  onClose: PropTypes.func,
};

export default SettingsModal;
