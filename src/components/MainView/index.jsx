import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Forecast, LocButton, Header } from "../index";
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

const dummy = [];

while (dummy.length < 18) {
  dummy.push({
    id: Math.random(),
    country: "ES",
    lat: 41.3828939,
    lon: 2.1774322,
    name: "Barcelona",
    state: "Catalonia",
  });
}

function MainView() {
  const [locations, setLocations] = useState(dummy);
  const [selectedLoc, setSelectedLoc] = useState(null);

  console.log("render");

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
                active={selectedLoc?.id === loc.id}
                onClick={() => setSelectedLoc(loc)}
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
