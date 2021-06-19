import React from "react";
import logo from "./house-outline.png";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <p className="header__logo">
      <img src={logo} alt="" />
      </p>
      <ul className="header__elements">
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  );
}
