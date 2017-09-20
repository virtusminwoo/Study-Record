import React, { Component } from 'react';
import CarePhoto from './CarePhoto';
import CareDot from './CareDot';

class CareGroup extends Component {
    render() {
        return (
            <div className="CarePhotoDiv">
                <CarePhoto img={require("../images/CarePhoto.png")} />
                <CareDot/>
            </div>
        );
    }
}

export default CareGroup;