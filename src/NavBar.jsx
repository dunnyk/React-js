import React, { Component } from "react";
import "./index.css";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar-wrapper">
          <div className="container-fluid">
            <nav className="navbar navbar-inverse navbar-static-top">
              <div className="container">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand m-2" href="#">
                    React Course
                  </a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li>
                      <a href="">Page 1</a>
                    </li>
                    <li>
                      <a href="">Page 2</a>
                    </li>
                    <li>
                      <a href="">Page 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
