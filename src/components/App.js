import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ChooseDesktopBackground } from "./smallComponents/ChooseDesktopBackground";
import { ChooseBackground } from "./smallComponents/ChooseBackground";
import { ChooseIcon } from "./smallComponents/ChooseIcon";
import { GetDay, GetDate } from "./smallComponents/Date";
import { Animations, NavBarAnimation } from "./smallComponents/Animations";
const base = "https://api.openweathermap.org/data/2.5/";
const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [query, setQuery] = useState("");
  const [place, setPlace] = useState();
  const [date, setDate] = useState();
  const [newBackground, setNewBackground] = useState();
  const [desktopBackground, setDesktopBackground] = useState();

  const [weather, setWeather] = useState({});
  const [days, setDays] = useState({});
  const [temps, setTemps] = useState({});

  const [weatherIcon, setWeatherIcon] = useState();
  const [forecastIcon1, setForecastIcon1] = useState();
  const [forecastIcon2, setForecastIcon2] = useState();
  const [forecastIcon3, setForecastIcon3] = useState();

  // Animations
  const [tl] = useState(gsap.timeline());
  const divRef = useRef();
  useEffect(() => {
    NavBarAnimation();
  }, []);
  useEffect(() => {
    Animations(tl, divRef);
  }, [divRef.current, place]);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${base}weather?q=${query}&units=metric&appid=${apiKey}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          try {
            const timeNow = new Date().getUTCHours() + result.timezone / 3600;
            setNewBackground(ChooseBackground(result.main.temp, timeNow));
            setDesktopBackground(
              ChooseDesktopBackground(result.main.temp, timeNow)
            );

            setDate(GetDate(result.sys.sunset));
            ChooseIcon(result.weather[0].id, setWeatherIcon, timeNow);
            setPlace(result.name);
            setWeather(result);
            fetch(
              `${base}onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&units=metric&appid=${apiKey}`
            )
              .then((res) => res.json())
              .then((result) => {
                ChooseIcon(result.daily[1].weather[0].id, setForecastIcon1);
                ChooseIcon(result.daily[2].weather[0].id, setForecastIcon2);
                ChooseIcon(result.daily[3].weather[0].id, setForecastIcon3);
                setTemps({
                  t1Min: result.daily[1].temp.min,
                  t1Max: result.daily[1].temp.max,
                  t2Min: result.daily[2].temp.min,
                  t2Max: result.daily[2].temp.max,
                  t3Min: result.daily[3].temp.min,
                  t3Max: result.daily[3].temp.max,
                });
                setDays({
                  day1: GetDay(result.daily[1].dt),
                  day2: GetDay(result.daily[2].dt),
                  day3: GetDay(result.daily[3].dt),
                });
              });
          } catch (error) {
            console.error(error);
          }
        });
    }
  };

  return (
    <div
      className={
        typeof desktopBackground != "undefined" ? desktopBackground : "desktop"
      }
    >
      <div
        className={typeof newBackground != "undefined" ? newBackground : "app"}
      >
        <div className="app-filter">
          <div className="main">
            <div className="search-box" id="search-box">
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
            </div>
            {typeof weather.main != "undefined" ? (
              <div>
                <div className="location-box">
                  <div className="location" ref={divRef}>
                    {weather.name}, {weather.sys.country}
                  </div>
                  <div className="date">{date}</div>
                </div>
                <div className="background-auto-size">
                  <div className="weather">
                    <div className="weather-and-svg">
                      <div className="weather-icon">{weatherIcon}</div>
                      <div className="main-forecast-info">
                        <p className="weather-condition">
                          {weather.weather[0].description}
                        </p>
                        <p className="full">Wind {weather.wind.speed}km/h</p>
                        <p className="full">
                          Humidity {weather.main.humidity}%
                        </p>
                      </div>
                    </div>
                    <div className="main-temp">
                      {Math.round(weather.main.temp)}°C
                    </div>
                  </div>
                </div>
                <div className="forecast">
                  <div className="day-forecast">
                    <div className="forecast-date">{days.day1}</div>
                    <div className="forecast-icon">{forecastIcon1}</div>
                    <div className="forecast-temps">
                      {Math.round(temps.t1Max)}
                      <min className="min-temp">
                        {"° "}
                        {Math.round(temps.t1Min)}°
                      </min>
                    </div>
                  </div>
                  <div className="day-forecast">
                    <div className="forecast-date">{days.day2}</div>
                    <div className="forecast-icon">{forecastIcon2}</div>
                    <div className="forecast-temps">
                      {Math.round(temps.t2Max)}
                      <min className="min-temp">
                        {"° "}
                        {Math.round(temps.t2Min)}°
                      </min>
                    </div>
                  </div>
                  <div className="day-forecast">
                    <div className="forecast-date">{days.day3}</div>
                    <div className="forecast-icon">{forecastIcon3}</div>
                    <div className="forecast-temps">
                      {Math.round(temps.t3Max)}
                      <min className="min-temp">
                        {"° "}
                        {Math.round(temps.t3Min)}°
                      </min>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
