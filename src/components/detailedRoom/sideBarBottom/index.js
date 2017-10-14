import React from 'react';
import './index.css';

const SideBarBottom = (props) => {
    
        return (
            <div className="sideBarBottom">
                <div className="sideBarBottomBackground">
                    <div className="sideBarBottomAgent">
                        <h3>{props.room.agentOffice}</h3>
                        <p className="agentOfficeRepresentative">대표 : {props.room.agentOfficeRepresentative}</p>
                        <p className="realEstateAgent">[담당자] {props.room.realEstateAgent}</p>
                        <p className="agentOfficeAddress">{props.room.agentOfficeAddress}</p>
                        <p className="registrationNumber">중개등록번호 {props.room.registrationNumber}</p>
                        <p className="confirm">중개사와의 거래 시 수수료가 발생하니 참고하세요</p>
                    </div>
                    <div className="sideBarBottomAgentPhone">
                        <p> ☎ 연락처보기 </p>
                    </div> 
                </div>
            </div>
        )
    }


export default SideBarBottom;