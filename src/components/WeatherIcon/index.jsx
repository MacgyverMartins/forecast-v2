import React from "react";
import PropTypes from "prop-types";
import { Description, IconWrapper } from "./styled";
import getWeatherIcon from "./getWeatherIcon";

function WeatherIcon({ weather }) {
  const { main, icon } = weather;

  const Component = getWeatherIcon(icon);

  return (
    <IconWrapper>
      <Component />
      <Description>{main}</Description>
    </IconWrapper>
  );
}

WeatherIcon.propTypes = {
  weather: PropTypes.shape({
    main: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
};
export default WeatherIcon;
