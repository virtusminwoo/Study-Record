import React, { Component } from 'react';
import FixedRightDescriptionDivTop from './FixedRightDescriptionDivTop'
import FixedRightDescriptionDivBottom from './FixedRightDescriptionDivBottom'

class FixedRightDescriptionDiv extends Component {
    render() {
        return (
            <div className="FixedRightDescriptionDiv">
                <FixedRightDescriptionDivTop />
                <FixedRightDescriptionDivBottom />
            </div>
        );
    }
}

export default FixedRightDescriptionDiv;