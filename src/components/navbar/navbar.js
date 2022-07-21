import React, { Component } from "react";
import { MenuItems } from "../../utils/menuItems/menuItems.js";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../button/button.js";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <div className="navbarLogo">
          <img src="./images/esrlogo.png" alt="logo"></img>
        </div>
        <div className="menuIcon" onClick={this.handleClick}>
          {this.state.clicked ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <li>
            <Button className="nav-btn">Let's Talk</Button>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
