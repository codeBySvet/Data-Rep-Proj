import React from "react";
import { Carousel } from "react-bootstrap";


export class Content extends React.Component {

    render() {
        return (
            

<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="spotify.gif"
      alt="First slide"
      width="300"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Text</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="yt1.gif"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="tidal.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




        );
    }
}
