import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Logout from "./components/Logout";
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
          </span>
          <div className="navigation">
            <span className="naviItem" onClick={this.naviClick} data-id="settings">
              Settings
            </span>
            <span className="naviItem" onClick={this.naviClick} data-id="logout">
              Logout
            </span>
          </div>
        </div>
        <Redirect path="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/logout" component={Logout} />
      </div>
    );
  }

  private naviClick(e: any) {
    console.log(e.target);
    this.navigateTo(e.target.getAttribute("data-id"));
  }
}

export default withRouter(App as any);
