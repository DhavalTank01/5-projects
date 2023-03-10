import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import OpacityIcon from "@mui/icons-material/Opacity";

const WeatherCard = ({ isError, city, setCity, tempInfo, getWeatherData }) => {
  const [wIcon, setWicon] = useState("");
  const {
    dt,
    weatermood,
    sunset,
    temp,
    pressure,
    humidity,
    speed,
    country,
    name,
  } = tempInfo;
  const udate = new Date(dt * 1000);
  const utime = `${udate.getHours()}:${udate.getMinutes()}`;
  const uDate = `${udate.getDate()}/${
    udate.getMonth() + 1
  }/${udate.getFullYear()}`;
  let sec = sunset;
  const date = new Date(sec * 1000);
  const timestr = `${date.getHours()}:${date.getMinutes()}`;
  useEffect(() => {
    if (weatermood) {
      switch (weatermood) {
        case "Clouds":
          setWicon("wi-day-cloudy");
          break;
        case "Haze":
          setWicon("wi-day-haze");
          break;
        case "Rain":
          setWicon("wi-day-rain");
          break;
        case "Lightning":
          setWicon("wi-day-lightning");
          break;
        case "Smoke":
          setWicon("wi-smoke");
          break;
        case "Clear":
          setWicon("wi-day-sunny");
          break;
        case "Mist":
          setWicon("wi-dust");
          break;

        default:
          setWicon("wi-day-sunny");
          break;
      }
    }
  }, [weatermood]);
  return (
    <>
      <div className="container-lg">
        <div className="container-fluid">
          <div className="main-container">
            <Card className="card-box">
              <CardContent>
                <div className="input-controls">
                  <input
                    type="text"
                    placeholder="Type City Name."
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                  />
                  <Button
                    variant="outlined"
                    className="myfont"
                    onClick={getWeatherData}
                  >
                    <i class="fas fa-search"></i> Search
                  </Button>
                </div>
                <div className="show-result">
                  {isError ? (
                    <h1 className="text-capitalize text-center">No Data Found</h1>
                  ) : (
                    <>
                      <div className="icon-box">
                        <i className={"icon1 wi " + wIcon}></i>
                      </div>
                      <div className="info">
                        <div className="temp">
                          <div className="tem">
                            {temp} <i class="far fa-circle icon-dot"></i>{" "}
                          </div>
                          <div className="details">
                            <span className="condition">{weatermood}</span>
                            <br />
                            <span className="city-name">
                              {name},{country}
                            </span>
                          </div>
                        </div>
                        <div className="datetime">
                          <span className="date">{uDate},</span>
                          <br />
                          <span className="time">{utime}</span>
                        </div>
                      </div>
                      <div className="info2">
                        <ul>
                          <li>
                            <WbSunnyIcon className="info-icon" />
                          </li>
                          <li>
                            <div className="box1">sunset</div>
                            <div className="box2">{timestr}</div>
                          </li>
                          <OpacityIcon className="info-icon" />
                          <li>
                            <div className="box1">humidity</div>
                            <div className="box2">{humidity}%</div>
                          </li>
                          <i class="fas fa-cloud-moon-rain info-icon"></i>
                          <li>
                            <div className="box1">pressure</div>
                            <div className="box2">{pressure}MM</div>
                          </li>
                          <i class="fas fa-wind info-icon"></i>
                          <li>
                            <div className="box1">wind</div>
                            <div className="box2">{speed}</div>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
