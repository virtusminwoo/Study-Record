import React from 'react';

const RoomListAd = (props) => {
            return(
                <div className="RoomListAd">
                    <p> {props.p}</p>
                    <a href="#"> {props.ad}</a>
                </div>  
            )
        }
    

export default RoomListAd;