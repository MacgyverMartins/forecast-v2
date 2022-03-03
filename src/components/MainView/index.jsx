import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext, LocButton, Header } from "../index";
import NormalizeCSS from "../../assets/css/NormalizeCSS";
import {
  AppWrapper,
  MainViewWrapper,
  LocationsGrid,
  ForeCastView,
} from "./styled";

const dummyLocs = [
  {
    country: "GB",
    lat: 51.5073219,
    lon: -0.1276474,
    name: "London",
    state: "England",
  },
  {
    name: "Orlando",
    state: "Florida",
    country: "US",
    lat: 28.5421109,
    lon: -81.3790304,
  },
  {
    country: "ES",
    lat: 41.3828939,
    lon: 2.1774322,
    name: "Barcelona",
    state: "Catalonia",
  },
];

const locations = [];

while (locations.length < 18) {
  locations.push({
    id: Math.random(),
    name: "Orlando",
    state: "Florida",
    country: "US",
    lat: 28.5421109,
    lon: -81.3790304,
  });
}

function MainView() {
  const { selectedLocation, setLocation } = useContext(AppContext);

  return (
    <>
      <NormalizeCSS />
      <AppWrapper>
        <Header />
        <MainViewWrapper>
          <ForeCastView>
            <Outlet />
            {/* <Forecast /> */}
          </ForeCastView>
          <LocationsGrid>
            {locations.map((loc) => (
              <LocButton
                key={loc.id}
                active={selectedLocation?.id === loc.id}
                onClick={() => setLocation(loc)}
              >
                {loc.name}
              </LocButton>
            ))}
          </LocationsGrid>
        </MainViewWrapper>
      </AppWrapper>
    </>
  );
}

export default MainView;
