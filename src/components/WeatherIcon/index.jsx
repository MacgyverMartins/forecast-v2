import React from "react";
import styled from "styled-components";
import ClearSky from "./Icons/ClearSky";

import { theme } from "../../assets/theme";
import { Description, IconWrapper } from "./styled";

export default function WeatherIcon({ weather }) {
  return (
    <IconWrapper>
      <ClearSky />
      <Description>Sunny</Description>
    </IconWrapper>
  );
}
