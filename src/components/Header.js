import React from "react";
import { Link } from "react-router-dom";
import logo from "./house-outline.png";
import "./Header.scss";
import {
  BrowserRouter as Router,
  
  
} from "react-router-dom";

export default function Header() {
  return (
    <Router>
    <div className="header">
      <p className="header__logo">
      <img src={logo} alt="" />
      </p>
      <ul className="header__elements">
        <li><Link to={"./"}  style={{ textDecoration: "none" }}>
                Home
              </Link></li>
       <li><Link to={"./About"}  style={{ textDecoration: "none" }}>
                About
              </Link></li>

        
      </ul>
    </div>
    </Router>
  );
}
