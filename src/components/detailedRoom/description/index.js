import React from 'react';
import './index.css';

const Description = (props) => {

        return (
            <div className="description">
                <div className="descriptionGroup">
                    <hr />
                    <br />
                    <br />
                    <h3>상세설명</h3>
                    {props.roomDesc}
                    
                    <br />
                    <hr className="RoomCenterDetailedDescriptionDivHr"/>
                </div>
            </div>
        )
    }

export default Description;