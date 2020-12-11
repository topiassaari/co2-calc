import React from "react";
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "../styles/App.scss";
import { red } from "@material-ui/core/colors";

class Home extends React.Component {
  state = {
    date: new Date().toLocaleDateString(),
    currentDate: new Date().toLocaleDateString(),
    week: 52,
    currentWeek: 52,
    month: 12,
    currentMonth: 12,
    weekYear: new Date().getFullYear(),
    monthYear: new Date().getFullYear(),
    year: new Date().getFullYear(),
    currentYear: new Date().getFullYear(),
    dayCO: 0,
    weekCO: 0,
    monthCO: 0,
    yearCO: 0,
    dayAvg: 5,
    weekAvg: 35,
    monthAvg: 140,
    yearAvg: 1580
  };

  componentDidMount() {
    this.setState({ dayCO: Math.round(Math.random() * 10) });
    this.setState({ weekCO: Math.round(Math.random() * 70) });
    this.setState({
      monthCO: Math.round(Math.random() * 70 * 4),
    });
    this.setState({ yearCO: Math.round(Math.random() * 70 * 4 * 12) });
  }

  resetDate() {

  }

  handleDay(e: string) {
    if (e === "back") {
      this.setState({
        dayCO: Math.round(
          Math.random() * 10
        ),
      })
    }
    else {
      this.setState({
        dayCO: Math.round(
          Math.random() * 10
        ),
      })
    }

  }

  handleWeek(e: string) {
    if (e === "back") {
      if (this.state.week <= 1) {
        this.setState({
          weekYear: this.state.weekYear - 1,
          week: this.state.week = 52
        })
      }
      else {
        this.setState({
          week: this.state.week - 1
        })
      }
    }
    else {
      if (this.state.week === 52) {
        if (this.state.weekYear === 2020) {
          return
        }
        this.setState({
          weekYear: this.state.weekYear + 1,
          week: this.state.week = 1
        })
      }
      else {
        this.setState({
          week: this.state.week + 1
        })

      }
    }
    this.setState({ weekCO: Math.round(Math.random() * 70) });
  }

  handleMonth(e: string) {
    if (e === "back") {
      if (this.state.month <= 1) {
        this.setState({
          monthYear: this.state.monthYear - 1,
          month: this.state.month = 12
        })
      }
      else {
        this.setState({
          month: this.state.month - 1
        })
      }
    }
    else {
      if (this.state.month === 12) {
        if (this.state.monthYear === 2020) {
          return
        }
        this.setState({
          monthYear: this.state.monthYear + 1,
          month: this.state.month = 1
        })
      }
      else {
        this.setState({
          month: this.state.month + 1
        })

      }
    }
    this.setState({ monthCO: Math.round(Math.random() * 70 * 4) });
  }

  handleYear(e: string) {
    if (e === "back") {
      this.setState({
        year: this.state.year - 1
      })
    }
    else {
      if (this.state.year === 2020) {
        return
      }
      this.setState({
        year: this.state.year + 1
      })
    }
    this.setState({ yearCO: Math.round(Math.random() * 70 * 4 * 12) });
  }

  render() {
    return (
      <article>
        <div id="CO2container">
          <div>
            <div className="box" id="today">
              <div className="centered">
                <h2>{this.state.date}</h2>
              </div>
              <div className="centered">
                <IconButton
                  aria-label="Back"
                  onClick={() => this.handleDay("back")}
                >
                  <ArrowBackIcon fontSize='large' />
                </IconButton>
                <IconButton
                  aria-label="Forward"
                  disabled={this.state.date == this.state.currentDate}
                  onClick={() => this.handleDay("forward")}
                >
                  <ArrowForwardIcon fontSize='large' />
                </IconButton>
              </div>
              <div className={this.state.dayCO <= this.state.dayAvg ? "green" : "red"}>
                <span className="centered">{this.state.dayCO} CO2/KG</span>
              </div>
              <div>
                <span className="centered">Average: {this.state.dayAvg} CO2/KG</span>
              </div>
            </div>
            <div className="box" id="week">
              <div className="centered">
                <h2>WEEK {this.state.week} / {this.state.weekYear}</h2>
              </div>
              <div className="centered">
                <IconButton
                  aria-label="Back"
                  id="prev"
                  onClick={() => this.handleWeek("back")}
                >
                  <ArrowBackIcon fontSize='large' />
                </IconButton>
                <IconButton
                  id="next"
                  disabled={this.state.week == this.state.currentWeek}
                  onClick={() => this.handleWeek("forward")}
                >
                  <ArrowForwardIcon fontSize='large' />
                </IconButton>
              </div>

              <div className={this.state.weekCO <= this.state.weekAvg ? "green" : "red"}>
                <span className="centered">{this.state.weekCO} CO2/KG</span>
              </div>
              <div>
                <span className="centered">Average: {this.state.weekAvg} CO2/KG</span>
              </div>
            </div>
          </div>
          <div>
            <div className="box" id="month">
              <div className="centered">
                <h2>MONTH {this.state.month} / {this.state.monthYear}</h2>
              </div>
              <div className="centered">
                <IconButton
                  aria-label="Back"
                  id="prev"
                  onClick={() => this.handleMonth("back")}
                >
                  <ArrowBackIcon fontSize='large' />
                </IconButton>
                <IconButton
                  id="next"
                  disabled={this.state.month == this.state.currentMonth}
                  onClick={() => this.handleMonth("forward")}
                >
                  <ArrowForwardIcon fontSize='large' />
                </IconButton>
              </div>
              <div className={this.state.monthCO <= this.state.monthAvg ? "green" : "red"}>
                <span className="centered">{this.state.monthCO} CO2/KG</span>
              </div>
              <div>
                <span className="centered">Average: {this.state.monthAvg} CO2/KG</span>
              </div>
            </div>
            <div className="box" id="year">
              <div className="centered">
                <h2>YEAR {this.state.year}</h2>
              </div>
              <div className="centered">
              <IconButton
                  aria-label="Back"
                  id="prev"
                  onClick={() => this.handleYear("back")}
                >
                  <ArrowBackIcon fontSize='large' />
                </IconButton>
                <IconButton
                  id="next"
                  disabled={this.state.year == this.state.currentYear}
                  onClick={() => this.handleYear("forward")}
                >
                  <ArrowForwardIcon fontSize='large' />
                </IconButton>
              </div>
              <div className={this.state.yearCO <= this.state.yearAvg ? "green" : "red"}>
                <span className="centered">{this.state.yearCO} CO2/KG</span>
              </div>
              <div>
                <span className="centered">Average: {this.state.yearAvg} CO2/KG</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Home;
