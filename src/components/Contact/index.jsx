import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput
} from "mdbreact";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const index = () => {
  return (
    <div>
      <MDBContainer>
        <MDBRow className="contact">
          <MDBCol md="5" className="contact-details">
            <Slide left duration={1000}>
              <div className="contact-address">
                <h3>Our Address</h3>
                <ul>
                  <li>
                    <i>
                      <MDBIcon
                        icon="map-marker-alt"
                        size="lg"
                        className="amber-text pr-3"
                      />
                    </i>
                    1234k Avenue, 4th block, Victoria City, Lagos.
                  </li>
                  <li>
                    <i>
                      <MDBIcon
                        icon="envelope"
                        size="lg"
                        className="amber-text pr-3"
                      />
                    </i>
                    info@example.com
                  </li>
                  <li>
                    <i>
                      <MDBIcon
                        icon="mobile-alt"
                        size="lg"
                        className="amber-text pr-3"
                      />
                    </i>
                    +1234 567 567
                  </li>
                </ul>
              </div>
            </Slide>
            <div className="contact-form mt-3">
              <Slide bottom duration={5000}>
                <h3>Contact Form</h3>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Subject"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput type="textarea" rows="2" label="Your message" />
                  </div>
                  <div className="text-center">
                    <MDBBtn outline color="amber" className="btn-send">
                      Send <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </Slide>
            </div>
          </MDBCol>
          <MDBCol className="location">
            <Slide right duration={1000}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.993835275733!2d3.4308128!3d6.4263549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e34fe6a84cddd53!2sEko%20Hotels%20%26%20Suites!5e0!3m2!1sen!2sng!4v1578045352994!5m2!1sen!2sng"
                allowfullscreen=""
              ></iframe>
            </Slide>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Fade>
        <div className="footer">
          <p>
            © 2020 Odun Foods . All Rights Reserved | Design by Joseph Omoniyi
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default index;
