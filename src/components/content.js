import React from "react";
import { Carousel } from "react-bootstrap";

export class Content extends React.Component {
  render() {
    return (
      <div >

        {/* Adding carousel to generate a slideshow on the front page */}
        {/* Also including Images and corresponding links to each image */}
        <Carousel variant="dark">

          {/* First image slide with link*/}
          <Carousel.Item>
            <a href="https://accounts.spotify.com/en/login/?continue=https:%2F%2Fopen.spotify.com%2F__noul__%3Fl2l%3D1%26nd%3D1&_locale=en-IE">
              <img
                className="d-block w-100"
                src="spotify.gif"
                alt="First slide"
                width="300"
              /></a>
            <Carousel.Caption>
            </Carousel.Caption>

          {/* Second image slide with link*/}
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://www.youtube.com/">
              <img
                className="d-block w-100"
                src="yt1.gif"
                alt="Second slide"
              /></a>
            <Carousel.Caption>
            </Carousel.Caption>

          {/* Third image slide with link*/}
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://tidal.com/">
              <img
                className="d-block w-100"
                src="tidal.jpeg"
                alt="Third slide"
              /></a>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Homepage text */}
        <h1><i><strong>Find the music you love. <br></br>Save it forever with us, and never again forget a song.</strong></i></h1>
      </div>
    );
  }
}
