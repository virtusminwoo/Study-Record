import React, { Component } from 'react';
import Close from './Close';
import LoginBox from './LoginBox';

class AllBorder extends Component {
    render() {
        return (
            <div className="AllBorder">    
                <Close />
                <LoginBox />
            </div>
        );
    }
}

export default AllBorder;