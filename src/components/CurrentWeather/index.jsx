import React, { useContext } from "react";
import { AppContext, WeatherIcon, Fallback, Tabnav } from "../index";
import { CurrentWeatherWrapper, InfosList, Title } from "./styled";
import { getFormatedTime } from "../../utils";

function CurrentWeather() {
  const { selectedLocation, forecast } = useContext(AppContext);

  if (!selectedLocation) {
    return <Fallback />;
  }

  if (selectedLocation && !forecast.current) {
    return <p>Loading...</p>;
  }

  const {
    timezone,
    current: { temp, feels_like, humidity, sunrise, sunset },
  } = forecast;

  return (
    <CurrentWeatherWrapper>
      <div>
        <Title>{selectedLocation.name}</Title>
        <WeatherIcon />
        <Tabnav />
      </div>
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
    </CurrentWeatherWrapper>
  );
}

CurrentWeather.propTypes = {};

export default CurrentWeather;
