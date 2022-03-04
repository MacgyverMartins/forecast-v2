import { useEffect, useState } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import forecastAPI from "../../services/forecastAPI";
import DailyWeatherCard from "../DailyWeatherCard";
import { Fallback, Tabnav, WeatherCard } from "../index";
import { ForecastWrapper, Title, WeatherList } from "./styled";

function ForecastView() {
  const [selectedLocation] = useOutletContext();
  const [forecast, setForecast] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (selectedLocation) {
      const { lat, lon } = selectedLocation;

      async function fetchForecast() {
        const data = await forecastAPI.fetchOneCall(lat, lon);
        setForecast(data);
      }

      fetchForecast();
    }
  }, [selectedLocation]);

  if (!selectedLocation) {
    return <Fallback />;
  }

  if (selectedLocation && !forecast) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  const { timezone, current, daily } = forecast;

  const WeatherComp = () => {
    if (pathname === "/7days") {
      return (
        <WeatherList>
          {daily.map(({ dt, weather, temp: { max, min } }) => {
            return (
              <DailyWeatherCard
                key={dt}
                max={max}
                min={min}
                weather={weather[0]}
              />
            );
          })}
        </WeatherList>
      );
    }

    const [weather] = current.weather;
    return (
      <WeatherCard weather={weather} details={current} timezone={timezone} />
    );
  };

  return (
    <ForecastWrapper>
      <Title>{selectedLocation.name}</Title>
      <main>
        <WeatherComp />
      </main>
      <Tabnav />
    </ForecastWrapper>
  );
}

ForecastView.propTypes = {};

export default ForecastView;
