import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './slidePhoto.css'


class PhotoSlide extends Component {
  render() {
    const params = {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
        };
    return(
    <Swiper className=".swiper-container" {...params}>
      <div>Slide 1ssssssssssssssssssssssssssssssssssss</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
    </Swiper>
    )
  }
}

export default PhotoSlide;


