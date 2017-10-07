import React,{Component} from 'react';
import FixedRightDescriptionDivTop from '../components/detailedRoom/FixedRightDescriptionDivTop'
import FixedRightDescriptionDivBottom from '../components/detailedRoom/FixedRightDescriptionDivBottom'


class ContainerFixedRightDescriptionDiv extends Component {

    render() {
        return(
            <div className={this.props.isabsoluteDiv? "FixedRightDescriptionDivAbsolute" : "FixedRightDescriptionWrapper"}>
                <div className="FixedRightDescriptionDiv">
                    <FixedRightDescriptionDivTop room={this.props.room} />
                    <FixedRightDescriptionDivBottom room={this.props.room} />
                </div>
            </div>
            )
        }
    }

export default ContainerFixedRightDescriptionDiv