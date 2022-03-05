import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import cities from "../../assets/cities";
import { LocButton, Header } from "../index";
import NormalizeCSS from "../../assets/css/NormalizeCSS";
import {
  AppWrapper,
  MainViewWrapper,
  LocationsGrid,
  ForecasArea,
} from "./styled";

const locations = cities.map((loc) => {
  const key = `${loc.name}_${Math.random()}`;
  return { ...loc, key };
});

function MainView() {
  const [selectedLocation, setLocation] = useState(locations[0]);

  const filterByLocationName = (term) => {
    if (term) {
      const regex = new RegExp(`^${term}`, "i");
      const location = locations.find((loc) => loc.name.match(regex));
      if (location) {
        setLocation(location);
      }
    }
  };

  console.log("render Main");

  return (
    <>
      <NormalizeCSS />
      <AppWrapper>
        <Header onSearch={filterByLocationName} />
        <MainViewWrapper>
          <ForecasArea>
            <Outlet context={[selectedLocation]} />
          </ForecasArea>

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
