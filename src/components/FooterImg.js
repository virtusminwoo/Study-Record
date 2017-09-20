import React, { Component } from 'react';

class FooterImg extends Component{
        render(){
            return(
                <div className="FooterImg">
                    <img src={this.props.img} alt=""></img>
                </div>
                    
            )
        }
    }

export default FooterImg;