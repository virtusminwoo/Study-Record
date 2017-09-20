import React, { Component } from 'react';

class FooterUl3 extends Component{
        render(){
            return(
                <ul className="FooterUl3">
                    <li className="FooterUlImg1"><img src={this.props.img1} alt=""/></li>
                    <li className="FooterUlImg2"><img src={this.props.img2} alt="" /></li>
                    <li>Station3, Inc. All rights reserved.</li>
                </ul>
                    
            )
        }
    }

export default FooterUl3;