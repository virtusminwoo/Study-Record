import React,{Component} from 'react';
import FixedRightDescriptionDivTop from '../components/detailedRoom/FixedRightDescriptionDivTop'
import FixedRightDescriptionDivBottom from '../components/detailedRoom/FixedRightDescriptionDivBottom'

import ContainerDetailedRoom from './ContainerDetailedRoom'

class ContainerFixedRightDescriptionDiv extends Component {

    render() {
        return(
            <div className="FixedRightDescriptionWrapper">
                <div className="FixedRightDescriptionDiv">
                    <FixedRightDescriptionDivTop room={this.props.room} />
                    <FixedRightDescriptionDivBottom room={this.props.room} />
                </div>
            </div>
            )
        }
}

export default ContainerFixedRightDescriptionDiv