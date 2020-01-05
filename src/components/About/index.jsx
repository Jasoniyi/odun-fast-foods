import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Food from "../../resources/images/fried-meat.jpg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const index = () => {
  return (
    <div>
      <MDBContainer>
        <div className="about-title my-3">About Us</div>
        <MDBRow className="my-4">
          <MDBCol md="5" className="about-left">
            <Zoom>
              <div className="food-left mb-2">
                <h2>Just the right food</h2>
              </div>
              <div className="food-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur molestias maiores error ex natus ipsa accusamus,
                tempora, minus tenetur ipsam cupiditate saepe nam ducimus
                consequuntur iusto quos voluptates ea aliquam!
                <br />
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit. Ut enim
                ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </div>
            </Zoom>
          </MDBCol>

          <MDBCol>
            <Fade duration={5000}>
              <div className="about-img">
                <img
                  src={Food}
                  className="img-responsive about-img-food ml-md-5"
                  alt="foods"
                />
              </div>
            </Fade>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default index;
