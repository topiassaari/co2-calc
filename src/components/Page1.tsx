import React from "react";
import "../styles/App.scss";

class Page1 extends React.Component {
  render() {
    return (
      <article>
        <div id="CO2container">
          <div>
            <div className="box" id="today">
              <div>
                <h2>TODAY</h2>
                <h3>3.12.2020</h3>
              </div>
              <div>
                <span>20 c02KG</span>
              </div>
            </div>
            <div className="box" id="week">
              <h2>WEEK</h2>
            </div>
          </div>
          <div>
            <div className="box" id="month">
              <h2>MONTH</h2>
            </div>
            <div className="box" id="year">
              <h2>YEAR</h2>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Page1;
