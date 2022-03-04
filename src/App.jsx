import { Routes, Route } from "react-router-dom";
import {
  AppProvider,
  MainView,
  CurrentWeather,
  DailyWeather,
} from "./components";

function App() {
  return (
    // <AppProvider>
    <Routes>
      <Route path="*" element={<MainView />}>
        <Route index element={<CurrentWeather />} />
        <Route path="7days" element={<CurrentWeather />}></Route>
      </Route>
    </Routes>
    // </AppProvider>
  );
}

export default App;
