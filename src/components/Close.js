// 쓸지말지 고민해보기 close가 이벤트를 받도록 하기위함

import React, { Component } from 'react';
import FooterImg from './FooterImg';


class Close extends Component {
        render() {   
            return (
                <span className="Close" onClick={this.props}>    
                        &times; asdasd{this.props.confirm}
                    </span>
            );
        }
        }

export default Close;