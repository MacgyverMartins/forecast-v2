import { useContext } from "react";
import { Outlet } from "react-router-dom";
import cities from "../../assets/cities";
import { AppContext, LocButton, Header } from "../index";
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
  const { selectedLocation, setLocation } = useContext(AppContext);

  return (
    <>
      <NormalizeCSS />
      <AppWrapper>
        <Header />
        <MainViewWrapper>
          <ForeCastView>
            <Outlet />
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
