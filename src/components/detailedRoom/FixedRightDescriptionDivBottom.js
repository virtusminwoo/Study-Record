import React from 'react';
import FixedRightDescriptionDivBottomDealerPhone from './FixedRightDescriptionDivBottomDealerPhone'

const FixedRightDescriptionDivBottom = (props) => {
        return (
            <div className="FixedRightDescriptionDivBottom">
                <div className="FixedRightDescriptionDivBottomBackground">
                    <div className="FixedRightDescriptionDivBottomDealer">
                        <h3>{props.room.dealerInc}</h3>
                        <p className="dealerIncCEOP">대표 : {props.room.dealerIncCEO}</p>
                        <p className="dealerP">[담당자] {props.room.dealer}</p>
                        <p className="dealerIncDomicileP">{props.room.dealerIncDomicile}</p>
                        <p className="registrationNumberP">중개등록번호 {props.room.registrationNumber}</p>
                        <p className="confirmP">중개사와의 거래 시 수수료가 발생하니 참고하세요</p>
                    </div>
                    
                    <FixedRightDescriptionDivBottomDealerPhone />
                </div>
            </div>
        );
    }


export default FixedRightDescriptionDivBottom;