import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderBtn() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="widget-footer-slider">
      <Slider {...settings} style={{ color: 'black' }}>
      <span>
      <button className="widget-footer-slider__item">Book an appointment</button>
      </span>
      <span>
      <button className="widget-footer-slider__item">View gallery</button>
      </span>
      <span>
      <button className="widget-footer-slider__item">View gallery</button>
      </span>
      <span>
      <button className="widget-footer-slider__item">View hairstylists</button>
      </span>
      <span>
      <button className="widget-footer-slider__item">View gallery</button>
      </span>
      <span>
      <button className="widget-footer-slider__item">Book an appointment</button>
      </span>
      </Slider>
    </div>
    // <div className="widget-footer-slider">
    //   <button className="widget-footer-slider__item">Book an appointment</button>
    //   <button className="widget-footer-slider__item">View hairstylists</button>
    //   <button className="widget-footer-slider__item">View gallery</button>
    //   <button className="widget-footer-slider__item">Book an appointment</button>
    //   <button className="widget-footer-slider__item">View hairstylists</button>
    //   <button className="widget-footer-slider__item">View gallery</button>
    // </div>
  );
}

export default SliderBtn;
