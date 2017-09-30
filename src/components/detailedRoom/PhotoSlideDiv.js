import React from 'react';

import Swiper from 'react-id-swiper';
import './slidePhoto.css'


const PhotoSlideDiv = (props) => {

    const params = {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: false,
        spaceBetween: 0,
        loop: true
    };
    
        return (
            <div className="PhotoSlideDiv">
                <Swiper className=".swiper-container" {...params}>
                    {props.room.roomPhoto}
                </Swiper>
            </div>
        );
    }


export default PhotoSlideDiv;