import { API_KEY, API_URL } from "../constants";

const fetchOneCall = (lat, lon) => {
  return fetch(
    `${API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${API_KEY}`
  ).then((res) => res.json());
};

export default {
  fetchOneCall,
};
