import React from "react";
import Menus from "./menus";
import Slide from "react-reveal/Slide";

const index = () => {
  return (
    <div className="header-wrapper">
      <div className="header-cover">
        <Menus />
        <Slide right duration={5000}>
          <div className="header-text">
            <h1 className="h-text">
              the right ingredients to the right food!!!
            </h1>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default index;
