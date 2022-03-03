import { MainViewWrapper, LocationsGrid, ForeCastView } from "./styled";

function MainView() {
  return (
    <MainViewWrapper>
      <ForeCastView />
      <LocationsGrid></LocationsGrid>
    </MainViewWrapper>
  );
}

export default MainView;
