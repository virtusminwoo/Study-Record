import React from 'react';
import FixedRightDescriptionDivTopRoom from './FixedRightDescriptionDivTopRoom'


const FixedRightDescriptionDivTop = (props) => {
    
    const hashDatas= props.room.hashDescription.map((hashData,i) =>
            <div className="HashDescriptionDiv" key ={i} >{hashData}</div>
        )

    function rentTypeFunc(){
        if(props.room.rentType === "월세"){
            return true
        }
        return false
    }

    function rentalFee(){
        if(props.room.rentType === "월세")
            return '/' + props.room.rentalFee
    }
        return (
            <div className="FixedRightDescriptionDivTop">
                <div className="FixedRightDescriptionDivTopRoom">
                    <h3>{props.room.buildingType}</h3> <h3 >{props.room.rentType}</h3> <h3 className={rentTypeFunc()? "depositFeeBlue" : "depositFeeOrange"}>{props.room.deposit}{rentalFee()} 만원</h3>
                    <p className="shortDescriptionP">{props.room.shortDescription}</p>
                    <p className="DomicileP">{props.room.domicile}</p>
                    {hashDatas}
                    <br />
                    <br />
                    <hr />
                    <br />
                </div>

                <FixedRightDescriptionDivTopRoom />
            </div>
        )
    }


export default FixedRightDescriptionDivTop;