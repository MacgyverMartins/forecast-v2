import React, { useContext } from "react";
import { AppContext, Fallback, Tabnav, WeatherCard } from "../index";
import { CurrentWeatherWrapper, Title } from "./styled";

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
        <WeatherCard
          weather={{ temp, feels_like, humidity, sunrise, sunset, timezone }}
        />
        <Tabnav />
      </div>
    </CurrentWeatherWrapper>
  );
}

CurrentWeather.propTypes = {};

export default CurrentWeather;
