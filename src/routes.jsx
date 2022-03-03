import { Routes, Route } from "react-router-dom";
import App from "./App";
import { CurrentWeather, DailyWeather } from "./components";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<CurrentWeather />} />
        <Route path="7days" element={<DailyWeather />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
