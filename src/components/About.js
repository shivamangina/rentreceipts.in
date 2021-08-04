import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron,  Row, Col, Image} from "react-bootstrap";
// import {  } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";


import "./About.css";

export default class About extends Component {
  render() {
    return (
      // <Grid>
      //   <Row className="show-grid text-center">
      //     <Grid xs={12} sm={3} className="person-wrapper">
      //       <Image src="assets/shiva.jpg" circle className="profile-pic"/>
      //       <h3>Shiva Kumar</h3>
      //       <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
      //     </Grid>
      //     <Grid xs={12} sm={3} className="person-wrapper">
      //       <Image src="assets/lalith.jpeg" circle className="profile-pic"/>
      //       <h3>Satya Sandeep</h3>
      //       <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
      //     </Grid>
      //     <Grid xs={12} sm={3} className="person-wrapper">
      //       <Image src="assets/person-3.jpg" circle className="profile-pic"/>
      //       <h3>Srinivas</h3>
      //       <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
      //     </Grid>
      //   </Row>
      // </Grid>
      <div className="testimonials-section">
      
                  <h1 className="testimonials-section-heading">Meet Our Team</h1>
                  <h4 className="testimonials-section-sub-heading">Choosing the right font has a huge impact on how the readers experience a website.</h4>
                  
              
                            <div className="dis">
                 
                              <div className="testimonials-card">
                                <div>
                                <img src="assets/shiva.jpg" class="testimonials-card-image" alt="..." />
                                  <p className="testimonials-card-description">
                                  Bring your ideas to life by creating an app or website from start.                                    </p>
                                  <p className="testimonials-card-person-name">
                                      - Shiva  Kumar
                                  </p>
                                </div>
                                  
                                  <div><img src="assets/shiva.jpg" class="testimonials-card-image" alt="..." />
                                  <p className="testimonials-card-description">
                                  Bring your ideas to life by creating an app or website from start.                                  </p>
                                  <p className="testimonials-card-person-name">
                                      - Satya Sandeep
                                  </p></div>
                                  <div><img src="assets/shiva.jpg" class="testimonials-card-image" alt="..." />
                                  <p className="testimonials-card-description">
                                       Bring your ideas to life by creating an app or website from start.
                                  </p>
                                  <p className="testimonials-card-person-name">
                                      - Srinivas
                                  </p></div>
                              </div>
                          
                          
                              {/* <div className="testimonials-card text-center">
                                 
                              </div>
                      
                              <div className="testimonials-card text-center">
                                  
                              </div> */}
                              </div>

        </div>
    );
  }
}