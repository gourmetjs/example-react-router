import "bootstrap/bootstrap.css";
import "./AppRoot.less";
import React from "react";

export default class AppRoot extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
        <div className="main-footer">
          Wine information from <a href="http://www.wine.com">Wine.com</a>
        </div>
      </div>
    );
  }
}
