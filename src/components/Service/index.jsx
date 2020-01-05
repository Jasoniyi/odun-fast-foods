import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
// import "./Lightbox.css";

import Slide from "react-reveal/Slide";

import Cuisine1 from "../../resources/images/g1.jpg";
import Cuisine2 from "../../resources/images/g2.jpg";
import Cuisine3 from "../../resources/images/g3.jpg";
import Cuisine4 from "../../resources/images/g4.jpg";
import Cuisine5 from "../../resources/images/g5.jpg";
import Cuisine6 from "../../resources/images/g6.jpg";
import Cuisine7 from "../../resources/images/g7.jpg";

class index extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      `${Cuisine1}`,
      `${Cuisine2}`,
      `${Cuisine3}`,
      `${Cuisine4}`,
      `${Cuisine5}`,
      `${Cuisine6}`,
      `${Cuisine7}`,
      `${Cuisine1}`,
      `${Cuisine2}`
    ]
  };

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map((imageSrc, i) => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="4" key={photoIndex} className="lightbox-img">
          <Slide right key={i}>
            <figure>
              <img
                src={imageSrc}
                alt="Gallery"
                className="img-fluid test"
                onClick={() =>
                  this.setState({ photoIndex: privateKey, isOpen: true })
                }
              />
            </figure>
          </Slide>
        </MDBCol>
      );
    });
  };

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <MDBContainer className="mt-5">
        <div className="about-title my-3">Our Specials</div>
        <div className="mdb-lightbox">
          <MDBRow>{this.renderImages()}</MDBRow>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default index;
