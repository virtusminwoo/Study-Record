import React from 'react';

const RoomCenterDetailedDescription = (props) => {
        return (
            <div className="RoomCenterDetailedDescription">
                <div className="RoomCenterDetailedDescriptionDiv">
                    <hr />
                    <br />
                    <br />
                    <h3>상세설명</h3>
                    {props.roomDesc}
                    
                    <br />
                    <hr className="RoomCenterDetailedDescriptionDivHr"/>
                </div>
            </div>
        );
    }


export default RoomCenterDetailedDescription;