import { useState } from "react";
import { Forecast, LocButton } from "..";
import { MainViewWrapper, LocationsGrid, ForeCastView } from "./styled";

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

  return (
    <MainViewWrapper>
      <ForeCastView>
        <Forecast />
      </ForeCastView>
      <LocationsGrid>
        {locations.map((loc) => (
          <LocButton
            active={selectedLoc?.id === loc.id}
            onClick={() => setSelectedLoc(loc)}
          >
            {loc.name}
          </LocButton>
        ))}
      </LocationsGrid>
    </MainViewWrapper>
  );
}

export default MainView;
