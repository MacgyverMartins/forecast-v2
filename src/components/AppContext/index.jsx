import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { API_URL, API_KEY } from "../../config";

export const UNIT_SETTINGS = ["standard", "metric", "imperial"];
export const TIME_SETTINGS = ["h23", "h11"];

export const AppContext = createContext({
  forecast: {},
  loading: false,
  selectedLocation: null,
  settings: {
    unit: UNIT_SETTINGS[0],
    time: TIME_SETTINGS[0],
  },
  setLocation: () => {
    console.log("You must to override that method");
  },
});

export const AppProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [forecast, setForecast] = useState({});

  const setLocation = (loc) => {
    setSelectedLocation(loc);
  };

  useEffect(() => {
    if (selectedLocation) {
      const { lat, lon } = selectedLocation;
      fetch(
        `${API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => {
          setForecast(res);
        });
    }
  }, [selectedLocation]);

  return (
    <AppContext.Provider
      value={{
        selectedLocation,
        setLocation,
        forecast,
        setForecast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};
