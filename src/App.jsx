import { Routes, Route } from "react-router-dom";
import { SettingsProvider, MainView, ForecastView } from "./components";

function App() {
  return (
    <SettingsProvider>
      <Routes>
        <Route path="/" element={<MainView />}>
          <Route index element={<ForecastView />} />
          <Route path="/7days" element={<ForecastView />}></Route>
        </Route>
      </Routes>
    </SettingsProvider>
  );
}

export default App;
