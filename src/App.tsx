import React, { Component } from "react";
import { IconButton } from '@material-ui/core';
import HouseIcon from '@material-ui/icons/House';
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import "./styles/App.scss";

type props = {
  history: any;
};

class App extends Component<props> {
  constructor(props: any) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
    this.naviClick = this.naviClick.bind(this);
  }
  public state = {
    activeItem: "main",
  };

  navigateTo(target: any) {
    this.props.history.push(target);
  }

  public render() {
    return (
      <div>
        <div className="headerContainer">
          <span className="headerLogo" onClick={this.naviClick} data-id="home">
            <div>
              <HouseIcon fontSize="inherit" />
               Puumiehenkuja 12
              </div>
          </span>
          <div className="navigation">
            <span className="naviItem" onClick={this.naviClick} data-id="page1">
              Page1
            </span>
            <span className="naviItem" onClick={this.naviClick} data-id="page2">
              Page2
            </span>
          </div>
        </div>
        <Redirect path="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </div>
    );
  }

  private naviClick(e: any) {
    console.log(e.target);
    this.navigateTo(e.target.getAttribute("data-id"));
  }
}

export default withRouter(App as any);
