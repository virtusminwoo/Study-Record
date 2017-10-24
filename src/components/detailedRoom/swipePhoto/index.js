import React from 'react';

import photoSlideDivParams from '../../../lib/photoSlideDivParams';

import Swiper from 'react-id-swiper';
import './slidePhoto.css'
import './index.css';


const SwipePhoto = (props) => {

const content = props.room.roomPhoto.map((item,i) => 
      <img src={item} key ={i} alt=""/> 
    );

        return (
            <div className="swipePhoto">
                <Swiper className=".swiper-container" {...photoSlideDivParams}>
                    {content}
                </Swiper>
            </div>
        )
    }


export default SwipePhoto;