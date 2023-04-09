import React, { Component } from "react";
import DayCard from "./DayCard";

const Loading = () => {
  return <div className="spinner-border"></div>;
};

class WeekContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullData: [],
      dailyData: [],
      query: "",
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }
  handleSubmit(e) {
    this.setState({ loading: true });
    e.preventDefault();
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.query}&units=metric&appid=41fb540b523ea1bb19a5287fb0b3d082
      `;

    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes("18:00:00")
        );

        this.setState({
          fullData: data.list,
          dailyData: dailyData,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
        alert("Cannot find place, Please try different place");
      });
  }

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => (
      <DayCard
        reading={reading}
        key={index}
        placeName={this.state.query}
        fullData={this.state.fullData}
      />
    ));
  };
  render() {
    return (
      <div>
        <h1 className="head">Weather Forecast</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              value={this.state.query}
              onChange={this.handleChange}
              placeholder="Enter City"
              className="input-box"
            />
            <span>
              <button className="btn btn-light " type="submit">
                {this.state.loading ? <Loading /> : " Search"}
              </button>
            </span>
          </div>
        </form>
        {this.formatDayCards()}
      </div>
    );
  }
}

export default WeekContainer;
