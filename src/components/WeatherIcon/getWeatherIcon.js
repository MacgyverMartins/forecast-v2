import ClearSky from "./Icons/ClearSky";
import Night from "./Icons/Night";
import FewClouds from "./Icons/FewClouds";
import Clouds from "./Icons/Clouds";
import BrokenClouds from "./Icons/BrokenClouds";
import Rain from "./Icons/Rain";
import Thunderstorm from "./Icons/Thunderstorm";
import Snow from "./Icons/Snow";
import Mist from "./Icons/Mist";

function getWeatherIcon(icon) {
  switch (icon) {
    case "01d":
      return ClearSky;
    case "01n":
      return Night;
    case "02d":
    case "02n":
      return FewClouds;
    case "03d":
      return Clouds;
    case "03n":
      return Clouds;
    case "04d":
    case "04n":
      return BrokenClouds;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      return Rain;
    case "11d":
    case "11n":
      return Thunderstorm;
    case "13d":
    case "13n":
      return Snow;
    case "50d":
    case "50n":
      return Mist;
    default:
      break;
  }
}

export default getWeatherIcon;
