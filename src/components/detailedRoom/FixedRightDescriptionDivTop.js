import React from 'react';
import FixedRightDescriptionDivTopRoom from './FixedRightDescriptionDivTopRoom'

const FixedRightDescriptionDivTop = (props) => {
        return (
            <div className="FixedRightDescriptionDivTop">
                <div className="FixedRightDescriptionDivTopRoom">
                    <h3>{props.room.buildingType}</h3> <h3>{props.room.rentType}</h3> <h3>{props.room.depositFee}만원</h3>
                    <p className="shortDescriptionP">{props.room.shortDescription}</p>
                    <p className="DomicileP">{props.room.domicile}</p>
                    {props.room.hashDescription}
                    <br />
                    <br />
                    <hr />
                    <br />
                </div>

                <FixedRightDescriptionDivTopRoom />
            </div>
        );
    }


export default FixedRightDescriptionDivTop;