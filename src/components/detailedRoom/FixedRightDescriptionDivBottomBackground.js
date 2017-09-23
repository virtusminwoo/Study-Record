import React, { Component } from 'react';
import FixedRightDescriptionDivBottomDealer from './FixedRightDescriptionDivBottomDealer'
import FixedRightDescriptionDivBottomDealerPhone from './FixedRightDescriptionDivBottomDealerPhone'

class FixedRightDescriptionDivBottomBackground extends Component {
    render() {
        return (
            <div className="FixedRightDescriptionDivBottomBackground">
                <FixedRightDescriptionDivBottomDealer />
                <FixedRightDescriptionDivBottomDealerPhone />
            </div>
        );
    }
}

export default FixedRightDescriptionDivBottomBackground;