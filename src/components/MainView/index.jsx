import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import cities from "../../assets/cities";
import forecastAPI from "../../services/forecastAPI";
import { LocButton, Header } from "../index";
import NormalizeCSS from "../../assets/css/NormalizeCSS";
import {
  AppWrapper,
  MainViewWrapper,
  LocationsGrid,
  ForeCastView,
} from "./styled";

const locations = cities.map((loc) => {
  const key = `${loc.name}_${Math.random()}`;
  return { ...loc, key };
});

function MainView() {
  const [selectedLocation, setLocation] = useState(null);
  const [forecast, setForecast] = useState(null);

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

  return (
    <>
      <NormalizeCSS />
      <AppWrapper>
        <Header />
        <MainViewWrapper>
          <ForeCastView>
            {!selectedLocation && <p style={{ color: "white" }}>nada</p>}
            {selectedLocation && (
              <Outlet context={[selectedLocation, forecast]} />
            )}
          </ForeCastView>

          <LocationsGrid>
            {locations.map((loc) => (
              <LocButton
                key={loc.key}
                active={selectedLocation?.key === loc.key}
                onClick={() => setLocation(loc)}
              >
                {loc.name}, {loc.country}
              </LocButton>
            ))}
          </LocationsGrid>
        </MainViewWrapper>
      </AppWrapper>
    </>
  );
}

export default MainView;
