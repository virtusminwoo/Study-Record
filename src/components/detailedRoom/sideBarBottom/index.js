import React from 'react';
import './index.css';
import messages from './messages'

const SideBarBottom = (props) => {
    
        return (
            <div className="sideBarBottom">
                <div className="sideBarBottomBackground">
                    <div className="sideBarBottomAgent">
                        <h3>{props.room.agentOffice}</h3>
                        <p className="agentOfficeRepresentative">{messages.sideBarBottomAgent.representativeText}{props.room.agentOfficeRepresentative}</p>
                        <p className="realEstateAgent">{messages.sideBarBottomAgent.agentText}{props.room.realEstateAgent}</p>
                        <p className="agentOfficeAddress">{props.room.agentOfficeAddress}</p>
                        <p className="registrationNumber">{messages.sideBarBottomAgent.registrationNumberText}{props.room.registrationNumber}</p>
                        <p className="confirm">{messages.sideBarBottomAgent.confirmText}</p>
                    </div>
                    <div className="sideBarBottomAgentPhone">
                        <p>{messages.sideBarBottomAgent.agentPhoneText}</p>
                    </div> 
                </div>
            </div>
        )
    }


export default SideBarBottom;