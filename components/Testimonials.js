import React, { Component } from "react";
import Slider from "react-slick";
import * as styles from "../styles/testimonials.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settingsNoModules = {
      dots: true,
      infinite: true,
      speed: 3000,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      dotsClass: "button__bar",
      arrows: false,
    };

    const settingsWithModules = {
      ...settingsNoModules,
      dotsClass: styles.dots,
    };
    return (
      <Slider className={styles.testimonial} {...settingsWithModules}>
        <div>
          <p>
          "Albe Engineering's software engineers created a custom solution for our company that improved our operations with exceptional usability, functionality, and security. Highly recommend their expertise in software engineering."
          </p>
          <h2>Ben Mills</h2>
          <h3>Cyber Security Manager</h3>
        </div>
        <div>
          <p>"Working with Albe Engineering's project manager was a game-changer for our project. Their competence in managing all aspects, from scope to resources, ensured smooth coordination and timely delivery. Impressed with their professionalism and communication." </p>
          <h2>Michael Philips</h2>
          <h3>IT Manager</h3>
        </div>
        <div>
          <p>"Albe Engineering's electrical assembly services helped us achieve high-quality technical improvements in our production process. Their specialized knowledge and attention to detail were impressive. Highly recommend their services for reliable and efficient solutions." </p>
            <h2>Andrew Kwan</h2>
          <h3>Chief Technology Officer</h3>
        </div>
        <div>
        <p>"Albe Engineering's home automation services transformed our living experience with unparalleled comfort and convenience. Their innovative designs and personalized solutions have elevated our lifestyle. Thrilled with the efficiency and simplicity of their home automation control."</p>
            <h2>Sarah</h2>
          <h3>Real Estate Manager</h3>
        </div>
        <div>
        <p>"Albe Engineering's automation software helped us achieve seamless integration between software and hardware components in our production process. Their team of skilled developers created a custom solution that enhanced our efficiency and productivity. Impressed with their technical competence and exceptional service."</p>
            <h2>Sophia Nguyen </h2>
          <h3>Production Manager</h3>
        </div>
        <div>
        <p>"Albe Engineering's mechanical assembly services were instrumental in optimizing our production lines. Their expertise in assembling industrial machines and their commitment to delivering high-quality technical improvements exceeded our expectations. Highly satisfied with their professionalism and results." </p>
            <h2>Noah Hayes</h2>
          <h3>Logistic Manager</h3>
        </div>
      </Slider>
    );
  }
}
