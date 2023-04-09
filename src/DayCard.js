import React from "react";
import moment from "moment";
import { useHistory } from "react-router";

const DayCard = ({ reading, placeName, fullData }) => {
  const history = useHistory();
  const newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  return (
    <div
      className="col"
      onClick={() =>
        history.push({
          pathname: `/${placeName}/${moment(newDate).format("dddd")}`,
          state: { data: fullData, newDate },
        })
      }
    >
      <div className="card">
        <h3>{moment(newDate).format("dddd")}</h3>
        <h2>{Math.round(reading.main.temp)} °C</h2>
        <div>
          <p>Max: {reading.main.temp_max}°C </p>
          <p>Min: {reading.main.temp_min}°C </p>
          <img
          src={`http://openweathermap.org/img/w/${reading.weather[0].icon}.png`}
          alt="weather-icon"
          className="weather-icon"
        />
          <p>{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
