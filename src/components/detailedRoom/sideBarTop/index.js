import React from 'react';
import './index.css';


const SideBarTop = (props) => {
    
    const hashDatas= props.room.hashDescription.map((hashData,i) =>
            <div className="commonHashDescription" key ={i} >{hashData}</div>
        )

    function contractTypeFunc(){
        if(props.room.contractType === "월세"){
            return true
        }
        return false
    }

    function rentalFee(){
        if(props.room.contractType === "월세")
            return '/' + props.room.rentalFee
    }

    function houseValueFunc(){
        if(props.room.contractType === "매매"){
            return props.room.price
        } else {
            return props.room.deposit
        }
    }

    const toString = String(houseValueFunc())
    function depositToString(toString){
        if(toString.length >= 5){
            return toString.replace(/\B(?=(\d{4})+(?!\d))/g, "억");
        } else {
            return toString
        }
    }

        return (
            <div className="sideBarTop">
                <h3>{props.room.houseType}</h3> <h3 >{props.room.contractType}</h3> <h3 className={contractTypeFunc()? "commonPriceColorBlue" : "commonPriceColorOrange"}>{depositToString(toString)}{rentalFee()} 만원</h3>
                <p className="simpleDescription">{props.room.shortDescription}</p>
                <p className="address">{props.room.address}</p>
                {hashDatas}
                <br /><br /><hr /><br />

                <div className="sideBarTopButtonGroup">
                    <div className="sideBarTopButton">
                        <p className="heartIcon"> 찜 </p>
                    </div>
                    
                    <div className="sideBarTopButton">
                        <p className="sirenIcon"> 신고 </p>
                    </div>
                </div>
            </div>
        )
    }


export default SideBarTop;