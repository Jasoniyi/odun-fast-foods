import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { scroller } from "react-scroll";

class menus extends Component {
  state = {
    isOpen: false
  };

  scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 10,
      smooth: true
    });
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="indigo" dark expand="md" className="nav-wrapper">
          <MDBNavbarBrand>
            <strong className="white-text brand">
              <i>
                <MDBIcon
                  icon="utensils"
                  className="amber-text pr-3"
                  size="lg"
                />
              </i>
              Odun foods
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right className="links">
              <MDBNavItem className="mr-4">
                <MDBNavLink
                  to="home"
                  onClick={() => this.scrollToElement("Home")}
                >
                  Home
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-4">
                <MDBNavLink
                  to="about"
                  onClick={() => this.scrollToElement("About")}
                >
                  About
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-4">
                <MDBNavLink
                  to="services"
                  onClick={() => this.scrollToElement("Service")}
                >
                  Services
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-4">
                <MDBNavLink
                  to="testimonals"
                  onClick={() => this.scrollToElement("Testimonals")}
                >
                  Testimonials
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-5">
                <MDBNavLink
                  to="contact"
                  onClick={() => this.scrollToElement("Contact")}
                >
                  Contact
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default menus;
