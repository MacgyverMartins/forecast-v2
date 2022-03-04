import React from "react";
import PropTypes from "prop-types";
import { WeatherIcon } from "../index";
import { WeatherInfos, DailyWeatherWrapper } from "./styled";

function DailyWeatherCard({ min, max, weather }) {
  return (
    <DailyWeatherWrapper>
      <WeatherIcon weather={weather} />
      <WeatherInfos>
        H: {max} <code>&deg;</code> / L: {min} <code>&deg;</code>
      </WeatherInfos>
    </DailyWeatherWrapper>
  );
}

DailyWeatherCard.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  weather: PropTypes.shape({
    main: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
};

export default DailyWeatherCard;
