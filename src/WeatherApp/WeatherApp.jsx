import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
const WeatherApp = () => {
  const [city, setCity] = useState("Dhandhuka");
  const [tempInfo, setTempInfo] = useState({});
  const [isError, setIsError] = useState(false);

  const getWeatherData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c16d5f7b02b4977f3575fac1e30436d&units=metric`;
      const result = await fetch(url);
      const data = await result.json();
      const { main: weatermood } = data.weather[0];
      const { temp, pressure, humidity } = data.main;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const { name, dt } = data;
      const newInfo = {
        dt,
        weatermood,
        temp,
        pressure,
        humidity,
        speed,
        country,
        sunset,
        name,
      };
      setTempInfo(newInfo);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(getWeatherData, []);
  return (
    <>
      <WeatherCard
        city={city}
        setCity={setCity}
        tempInfo={tempInfo}
        getWeatherData={getWeatherData}
        isError={isError}
      />
    </>
  );
};

export default WeatherApp;
