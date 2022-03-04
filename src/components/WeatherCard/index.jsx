import React from "react";
import PropTypes from "prop-types";
import { WeatherIcon } from "../index";
import { getFormatedTime } from "../../utils";
import { InfosList, WeatherCardWrapper } from "./styled";

function WeatherCard({ weather, timezone }) {
  console.log({ weather, timezone });
  const { temp, feels_like, humidity, sunrise, sunset } = weather;

  return (
    <WeatherCardWrapper>
      <WeatherIcon />
      <InfosList>
        <li>
          Temp: {temp}
          <code>&deg;</code>F
        </li>
        <li>
          Feels Like: {feels_like}
          <code>&deg;</code>F
        </li>
        <li>Humidity: {humidity}%</li>
        <li>Sunrise: {getFormatedTime(sunrise, timezone)}</li>
        <li>Sunset: {getFormatedTime(sunset, timezone)}</li>
      </InfosList>
    </WeatherCardWrapper>
  );
}

WeatherCard.propTypes = {
  detailed: PropTypes.bool,
  details: PropTypes.shape({
    temp: PropTypes.number,
    feels_like: PropTypes.number,
    humidity: PropTypes.number,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
    timezone: PropTypes.string,
  }),
};

export default WeatherCard;
