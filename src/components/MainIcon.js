import React, { Component } from 'react';


        class MainIcon extends Component {
            render() {
                return(
                    <div className="MainIconDiv">
                        <img src = {this.props.img} alt="" />
                    </div>
                );
            }
        }
        
        export default MainIcon;