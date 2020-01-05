import React from "react";
import Fade from "react-reveal/Fade";

const index = () => {
  return (
    <div className="testimonals-wrapper mt-5">
      <div className="testimonals-cover">
        {/* <Carousel /> */}
        <Fade duration={5000}>
          <h3>
            "If you’ve been to one of our restaurants, you’ve seen – and tasted
            – what keeps our customers coming back for more. Perfect materials
            and freshly baked food, delicious Lambda cakes, muffins, and gourmet
            coffees make us hard to resist! Stop in today and check us out!"
          </h3>
        </Fade>
      </div>
    </div>
  );
};

export default index;
