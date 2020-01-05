import React from "react";
import Home from "./Header";
import About from "./About";
import Services from "./Service";
import Testimonals from "./Testimonals";
import Contact from "./Contact";
import { Element } from "react-scroll";

const index = () => {
  return (
    <div>
      <Element name="Home">
        <Home />
      </Element>

      <Element name="About">
        <About />
      </Element>

      <Element name="Service">
        <Services />
      </Element>

      <Element name="Testimonals">
        <Testimonals />
      </Element>

      <Element name="Contact">
        <Contact />
      </Element>
    </div>
  );
};

export default index;
