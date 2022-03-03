import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext({
  selectedLocation: null,
  setLocation: () => {
    console.log("You must to override that method");
  },
});

export const AppProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const setLocation = (loc) => {
    setSelectedLocation(loc);
  };

  return (
    <AppContext.Provider
      value={{
        selectedLocation,
        setLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};
