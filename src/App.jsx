import styled from "styled-components";
import NormalizeCSS from "./assets/css/NormalizeCSS";
import { Header, MainView } from "./components";

import { theme } from "./assets/theme";

const AppWrapper = styled.div`
  background-color: ${theme.colors.black};
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <NormalizeCSS />
      <AppWrapper>
        <Header></Header>
        <MainView />
      </AppWrapper>
    </>
  );
}

export default App;
