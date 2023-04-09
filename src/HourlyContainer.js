import React from "react";
import moment from "moment";
import { useHistory, useLocation } from "react-router";

const HourlyContainer = (props) => {
  const history = useHistory();
  const location = useLocation();
  const { data, newDate } = location.state;
  const selectedDate = moment(newDate).format("YYYY-MM-DD");
  const selectedDateData = data.filter((i) => i.dt_txt.includes(selectedDate));

  return (
    <>
      <p
        style={{ fontSize: "30px", cursor: "pointer" }}
        className="ml-2"
        onClick={() => history.goBack()}
      >
        &#8592;
      </p>
      <h1 className="head"> By Hour</h1>
      {selectedDateData &&
        selectedDateData.map((data, index) => (
          <div className="col mb-4" key={index}>
            <div className="card">
              
              <h5>{moment(data.dt_txt).format("hh:00")}</h5>
              <h3>{moment(newDate).format("dddd")}</h3>
              <h2>{Math.round(data.main.temp)} °C</h2>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="weather-icon"
                className="weather-icon"
              />
              <div>
                <p>{data.weather[0].description}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default HourlyContainer;
