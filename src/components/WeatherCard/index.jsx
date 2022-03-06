import { useContext } from "react";
import PropTypes from "prop-types";
import { WeatherIcon, SettingsContext } from "../index";
import { getFormatedTime } from "../../utils";
import { InfosList, WeatherCardWrapper } from "./styled";

function WeatherCard({ details, weather, timezone }) {
  const {
    settings: { hourcycle },
  } = useContext(SettingsContext);
  const { temp, feels_like, humidity, sunrise, sunset } = details;

  return (
    <WeatherCardWrapper>
      <WeatherIcon weather={weather} />
      <InfosList>
        <li>
          Temp: {temp}
          <code>&deg;</code>
        </li>
        <li>
          Feels Like: {feels_like}
          <code>&deg;</code>
        </li>
        <li>Humidity: {humidity}%</li>
        <li>Sunrise: {getFormatedTime(sunrise, timezone, hourcycle)}</li>
        <li>Sunset: {getFormatedTime(sunset, timezone, hourcycle)}</li>
      </InfosList>
    </WeatherCardWrapper>
  );
}

WeatherCard.propTypes = {
  timezone: PropTypes.string.isRequired,
  details: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    feels_like: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    sunrise: PropTypes.number.isRequired,
    sunset: PropTypes.number.isRequired,
  }),
  weather: PropTypes.shape({
    main: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
};

export default WeatherCard;
