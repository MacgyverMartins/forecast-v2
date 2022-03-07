import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Clock, RadioButton, SettingsContext } from "..";
import {
  Modal,
  ModalOverlay,
  Title,
  SubTitle,
  RadioGroup,
  ActionsGroup,
  Button,
  ClockArea,
} from "./styled";

function SettingsModal(props) {
  const { settings, setSettings } = useContext(SettingsContext);
  const [units, setUnits] = useState(settings.units);
  const [hourcycle, setHourcycle] = useState(settings.hourcycle);

  const onChangeUnits = (event) => {
    setUnits(event.target.value);
  };

  const onChangeHourcycle = (event) => {
    setHourcycle(event.target.value);
  };

  const handleSave = () => {
    setSettings({
      units,
      hourcycle,
    });
    props.onClose();
  };

  return (
    <ModalOverlay>
      <Modal>
        <Title>Settings</Title>
        <SubTitle>Units</SubTitle>
        <RadioGroup>
          <RadioButton
            label="Imperial"
            value="imperial"
            name="units"
            checked={units === "imperial"}
            onChange={onChangeUnits}
          />
          <RadioButton
            label="Metric"
            value="metric"
            name="units"
            checked={units === "metric"}
            onChange={onChangeUnits}
          />
          <RadioButton
            label="Standard"
            value="standard"
            name="units"
            checked={units === "standard"}
            onChange={onChangeUnits}
          />
        </RadioGroup>
        <SubTitle>Time</SubTitle>
        <RadioGroup>
          <RadioButton
            label="AM/PM"
            value="h11"
            name="time"
            checked={hourcycle === "h11"}
            onChange={onChangeHourcycle}
          />
          <RadioButton
            label="24h"
            value="h23"
            name="time"
            checked={hourcycle === "h23"}
            onChange={onChangeHourcycle}
          />
        </RadioGroup>
        <ActionsGroup>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </ActionsGroup>
        <ClockArea>
          <Clock />
        </ClockArea>
      </Modal>
    </ModalOverlay>
  );
}

SettingsModal.propTypes = {
  onClose: PropTypes.func,
};

export default SettingsModal;
