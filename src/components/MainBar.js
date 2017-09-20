import React, { Component } from 'react';


        class MainBar extends Component {
            render() {
                return(
                    <div className="MainBarDiv">
                        <img src = {this.props.img} alt="" />
                    </div>
                );
            }
        }
        
        export default MainBar;