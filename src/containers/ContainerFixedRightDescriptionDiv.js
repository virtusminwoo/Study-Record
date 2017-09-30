import React from 'react';
import FixedRightDescriptionDivTop from '../components/detailedRoom/FixedRightDescriptionDivTop'
import FixedRightDescriptionDivBottom from '../components/detailedRoom/FixedRightDescriptionDivBottom'

const ContainerFixedRightDescriptionDiv = (props) => {
        return(
            <div className="FixedRightDescriptionWrapper">
                <div className="FixedRightDescriptionDiv">
                    <FixedRightDescriptionDivTop room={props.room} />
                    <FixedRightDescriptionDivBottom room={props.room} />
                </div>
            </div>
            )
        }
    

export default ContainerFixedRightDescriptionDiv