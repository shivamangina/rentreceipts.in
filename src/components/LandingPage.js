import React from "react";

import house from "./Houses-pana.svg";
import "./LandingPage.scss";
import { Link } from "react-router-dom";



export default function LandingPage() {
  return (
    
    <div className="landing-page">
      <img className="landing-page__image" src={house} alt="House" />
      <div className="landing-page__text">
        <h1 className="landing-page__text--text">Generate the receipts </h1>
        <h1 className="landing-page__text--text">on the go.</h1>
      
               
       
        <Link to={"./Form"} style={{ textDecoration: "none" }}>
        <button className="landing-page__text--button" >
        
        <p className="landing-page__text--button__text">Generate Now</p>
        </button>
       
              </Link>
        
      </div>
    </div>
    
  );
}
