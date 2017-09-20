import React, { Component } from 'react';


        class MainDabangPro extends Component {
            render() {
                return(
                    <div className="MainDabangProDiv">
                        <img src = {this.props.img} alt="" />
                    </div>
                );
            }
        }
        
        export default MainDabangPro;