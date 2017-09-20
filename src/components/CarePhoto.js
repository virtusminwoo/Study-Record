import React, { Component } from 'react';


class CarePhoto extends Component {
    render() {
        return (
            <div>
                <img src={this.props.img} alt=""></img>
            </div>
        );
    }
}

export default CarePhoto;