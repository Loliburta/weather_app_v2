import { ReactComponent as Clouds } from "../../assets/clouds.svg";
import { ReactComponent as ClearSky } from "../../assets/clear-sky.svg";
import { ReactComponent as FewClouds } from "../../assets/few-clouds.svg";
import { ReactComponent as FewCloudsNight } from "../../assets/few-clouds-night.svg";
import { ReactComponent as Atmosphere } from "../../assets/atmosphere.svg";
import { ReactComponent as Snow } from "../../assets/snow.svg";
import { ReactComponent as Rain } from "../../assets/rain.svg";
import { ReactComponent as Drizzle } from "../../assets/drizzle.svg";
import { ReactComponent as Thunderstorm } from "../../assets/thunderstorm.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";
export const ChooseIcon = (_id, setIcon, time) => {
  if (_id < 299) {
    setIcon(<Thunderstorm />);
  } else if (_id < 499) {
    setIcon(<Drizzle />);
  } else if (_id < 599) {
    setIcon(<Rain />);
  } else if (_id < 699) {
    setIcon(<Snow />);
  } else if (_id < 799) {
    setIcon(<Atmosphere />);
  } else if (_id === 800) {
    if (time > 20 || time < 5) {
      setIcon(<Moon />);
    } else {
      setIcon(<ClearSky />);
    }
  } else if (_id === 801) {
    if (time > 20 || time < 5) {
      setIcon(<FewCloudsNight />);
    } else {
      setIcon(<FewClouds />);
    }
  } else {
    setIcon(<Clouds />);
  }
};
