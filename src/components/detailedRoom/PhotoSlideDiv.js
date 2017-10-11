import React from 'react';

import photoSlideDivParams from '../../lib/photoSlideDivParams';

import Swiper from 'react-id-swiper';
import './slidePhoto.css'


const PhotoSlideDiv = (props) => {

        return (
            <div className="PhotoSlideDiv">
                <Swiper className=".swiper-container" {...photoSlideDivParams}>
                    {props.room.roomPhoto}
                </Swiper>
            </div>
        )
    }


export default PhotoSlideDiv;