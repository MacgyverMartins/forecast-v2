import { Routes, Route } from "react-router-dom";
import { MainView, CurrentWeather, DailyWeather } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainView />}>
        <Route index element={<CurrentWeather />} />
        <Route path="7days" element={<DailyWeather />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
