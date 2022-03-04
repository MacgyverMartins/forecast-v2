import PropTypes from "prop-types";
import { WeatherIcon } from "../index";
import { getFormatedTime } from "../../utils";
import { InfosList, WeatherCardWrapper } from "./styled";

function WeatherCard({ details, weather, timezone }) {
  const { temp, feels_like, humidity, sunrise, sunset } = details;

  return (
    <WeatherCardWrapper>
      <WeatherIcon weather={weather} />
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
