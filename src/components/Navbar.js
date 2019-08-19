import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/pro-light-svg-icons";

import { navLaStr } from "../constants/meta";
import "../styles/Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRwdModeMenu: false
    };
  }

  handleClick = target => {
    const targetY = document.querySelector(`#${target}`).offsetTop;
    // window.history.pushState({}, 'title', `/#${target}`);
    window.scrollTo({
      top: targetY,
      left: 0,
      behavior: "smooth"
    });
    if (this.state.showRwdModeMenu) this.handleClickRwdModeMenuBtn();
  };
  renderLaList = () => {
    let laList = [];
    for (const key in navLaStr) {
      if (navLaStr.hasOwnProperty(key)) {
        const la = navLaStr[key];
        laList.push({ key, string: la });
      }
    }
    const node = laList.map((la, i) => (
      <button
        key={`opt-la-${i}`}
        className={this.props.la === la.key ? "curr" : ""}
        onClick={() => {
          this.props.changeLa(la.key)
          if (this.state.showRwdModeMenu) this.handleClickRwdModeMenuBtn();
        }}
      >
        {la.string}
      </button>
    ));
    return node;
  };
  handleClickRwdModeMenuBtn = () => {
    this.setState(prevState => ({
      showRwdModeMenu: !prevState.showRwdModeMenu
    }));
  };

  render() {
    return (
      <nav className="navbar">
        <div className="content-container">
          <a href="/" className="title">
            Asuka 'asukachikaru' Wang
          </a>
          <button
            className="phone-rwd-mode-menu-btn"
            onClick={() => this.handleClickRwdModeMenuBtn()}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={
            this.state.showRwdModeMenu
              ? "phone-rwd-mode-menu-wrapper show"
              : "phone-rwd-mode-menu-wrapper"
          }>
            <div
              className={
                this.state.showRwdModeMenu
                  ? "phone-rwd-mode-menu-container show"
                  : "phone-rwd-mode-menu-container"
              }
            >
              <div className="para nav-btn-container">
                <button
                  className={this.props.currSec === "portfolio" ? "curr" : ""}
                  onClick={() => this.handleClick("portfolio")}
                >
                  portfolio
                </button>
                <button
                  className={this.props.currSec === "about" ? "curr" : ""}
                  onClick={() => this.handleClick("about")}
                >
                  about
                </button>
                <button
                  className={this.props.currSec === "contact" ? "curr" : ""}
                  onClick={() => this.handleClick("contact")}
                >
                  contact
                </button>
                <a
                  className='resume'
                  href="https://drive.google.com/file/d/16fU5vRsJIjSC2Rj6DmrsdPbJ8NtizD_x/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resume
                </a>
              </div>
              <div className="lan nav-btn-container">
                {this.renderLaList()}
                <div className="dark-mode-btn-wrapper">
                  <button
                    className="dark-mode"
                    onClick={() => {
                      this.props.changeDarkMode();
                      if (this.state.showRwdModeMenu) this.handleClickRwdModeMenuBtn();
                    }}
                  >
                    <FontAwesomeIcon icon={this.props.dark ? faSun : faMoon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-btn">
            <button
              className={this.props.currSec === "portfolio" ? "curr" : ""}
              onClick={() => this.handleClick("portfolio")}
            >
              portfolio
            </button>
            <button
              className={this.props.currSec === "about" ? "curr" : ""}
              onClick={() => this.handleClick("about")}
            >
              about
            </button>
            <button
              className={this.props.currSec === "contact" ? "curr" : ""}
              onClick={() => this.handleClick("contact")}
            >
              contact
            </button>
            <span className="nav-separator">|</span>
          </div>
          <div className="resume">
            <a
              href="https://drive.google.com/file/d/16fU5vRsJIjSC2Rj6DmrsdPbJ8NtizD_x/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
            <span className="nav-separator">|</span>
          </div>
          <div className="opt">
            <div className="la">{this.renderLaList()}</div>
            <button
              className="darkMode"
              onClick={() => this.props.changeDarkMode()}
            >
              <FontAwesomeIcon icon={this.props.dark ? faSun : faMoon} />
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.defaultProps = {
  la: "en"
};
