import { API_KEY, API_URL } from "../constants";
import { UNIT_SETTINGS } from "../constants";

const [standard] = UNIT_SETTINGS;

const fetchOneCall = (lat, lon, units = standard) => {
  return fetch(
    `${API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${API_KEY}&units=${units}`
  ).then((res) => res.json());
};

export default {
  fetchOneCall,
};
