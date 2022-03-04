import { Routes, Route } from "react-router-dom";
import { MainView, ForecastView } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainView />}>
        <Route index element={<ForecastView />} />
        <Route path="/7days" element={<ForecastView />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
