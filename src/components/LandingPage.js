import React from "react";
import arrow from "./down-arrow-svgrepo-com.svg";
import house from "./Houses-pana.svg";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <img className="landing-page__image" src={house} alt="House" />
      <div className="landing-page__text">
        <h1 className="landing-page__text--text">Generate the receipts </h1>
        <h1 className="landing-page__text--text">on the go.</h1>
        <button className="landing-page__text--button">
          <p className="landing-page__text--button__text">Generate Now</p>
          {/* <img className="animate-pulse" src={arrow} alt="arrow" /> */}
        </button>
      </div>
    </div>
  );
}
