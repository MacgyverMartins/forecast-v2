import { memo } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Fallback, Tabnav, WeatherCard } from "../index";
import { CurrentWeatherWrapper, Title } from "./styled";

function CurrentWeather() {
  const [selectedLocation, forecast] = useOutletContext();
  // const pathURL = useParams();

  if (!selectedLocation) {
    return <Fallback />;
  }

  if (selectedLocation && !forecast) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  const {
    timezone,
    current: { temp, feels_like, humidity, sunrise, sunset },
  } = forecast;

  console.log("rerender aqui");

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

export default memo(CurrentWeather);
