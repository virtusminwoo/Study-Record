import React, { Component } from 'react';
import FixedRightDescriptionDivTopRoom from './FixedRightDescriptionDivTopRoom'
import FixedRightDescriptionDivTopButtonDiv from './FixedRightDescriptionDivTopButtonDiv'

class FixedRightDescriptionDivTop extends Component {
    render() {
        return (
            <div className="FixedRightDescriptionDivTop">
                <FixedRightDescriptionDivTopRoom />
                <FixedRightDescriptionDivTopButtonDiv />
            </div>
        );
    }
}

export default FixedRightDescriptionDivTop;