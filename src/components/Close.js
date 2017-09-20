import React, { Component } from 'react';
import FooterImg from './FooterImg';


class Close extends Component {
            render() {
                
    return (
        <span className="Close" onClick={this.props}>    
                &times;
            </span>
    );
}
}

export default Close;