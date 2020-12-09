import React from "react";
import "../styles/App.scss";

class Home extends React.Component {
  state = {
    date: new Date().toLocaleDateString(),
    week: 52,
    month: 12,
    year: new Date().getFullYear(),
    dayCO: 0,
    weekCO: 0,
    monthCO: 0,
    yearCO: 0,
  };

  componentDidMount() {
    this.setState({ dayCO: Math.round(Math.random() + this.state.week / 7) });
    this.setState({ weekCO: Math.round(Math.random() + this.state.week) });
    this.setState({
      monthCO: Math.round(Math.random() + this.state.month * 2),
    });
    this.setState({ yearCO: Math.round(Math.random() + this.state.year * 3) });
  }
  render() {
    return (
      <article>
        <div id="CO2container">
          <div>
            <div className="box" id="today">
              <div>
                <h2>{this.state.date}</h2>
                <button
                  id="prev"
                  onClick={() =>
                    this.setState({
                      dayCO: Math.round(
                        Math.random() * 10 + this.state.week / 7
                      ),
                    }) as any
                  }
                >
                  PREV
                </button>
                <button
                  id="next"
                  onClick={() =>
                    this.setState({
                      dayCO: Math.round(
                        Math.random() * 10 + this.state.week / 7
                      ),
                    }) as any
                  }
                >
                  NEXT
                </button>
              </div>
              <div>
                <span>{this.state.dayCO} CO2/KG</span>
              </div>
            </div>
            <div className="box" id="week">
              <div>
                <h2>WEEK {this.state.week}</h2>
                <button
                  id="prev"
                  onClick={() =>
                    this.setState({
                      week: this.state.week - 1,
                      weekCO: Math.round(Math.random() * 3 + this.state.week),
                    }) as any
                  }
                >
                  PREV
                </button>
                <button
                  id="next"
                  onClick={() =>
                    this.setState({
                      week: this.state.week + 1,
                      weekCO: Math.round(Math.random() * 3 + this.state.week),
                    }) as any
                  }
                >
                  NEXT
                </button>
              </div>
              <div>
                <span>{this.state.weekCO} CO2/KG</span>
              </div>
            </div>
          </div>
          <div>
            <div className="box" id="month">
              <div>
                <h2>MONTH {this.state.month}</h2>
                <button
                  id="prev"
                  onClick={() =>
                    this.setState({
                      month: this.state.month - 1,
                      monthCO: Math.round(Math.random() + this.state.week * 3),
                    }) as any
                  }
                >
                  PREV
                </button>
                <button
                  id="next"
                  onClick={() =>
                    this.setState({
                      month: this.state.month + 1,
                      monthCO: Math.round(Math.random() + this.state.week * 3),
                    }) as any
                  }
                >
                  NEXT
                </button>
              </div>
              <div>
                <span>{this.state.monthCO} CO2/KG</span>
              </div>
            </div>
            <div className="box" id="year">
              <div>
                <h2>YEAR {this.state.year}</h2>
                <button
                  id="prev"
                  onClick={() =>
                    this.setState({
                      year: this.state.year - 1,
                      yearCO: Math.round(Math.random() + this.state.year * 3),
                    }) as any
                  }
                >
                  PREV
                </button>
                <button
                  id="next"
                  onClick={() =>
                    this.setState({
                      year: this.state.year + 1,
                      yearCO: Math.round(Math.random() + this.state.year * 3),
                    }) as any
                  }
                >
                  NEXT
                </button>
              </div>
              <div>
                <span>{this.state.yearCO} CO2/KG</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Home;
