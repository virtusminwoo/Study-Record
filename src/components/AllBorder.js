// 쓸지 말지 고민해보기 => Modal의 close가 부모의 이벤트를 받도록 하기 위함


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