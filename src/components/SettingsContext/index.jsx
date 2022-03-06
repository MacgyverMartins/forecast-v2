import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { UNIT_SETTINGS, HOUR_SETTINGS } from "../../constants";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    units: UNIT_SETTINGS[0],
    hourcycle: HOUR_SETTINGS[0],
  });

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

SettingsContext.propTypes = {
  children: PropTypes.node.isRequired,
};
