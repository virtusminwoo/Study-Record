import React from 'react';
import './index.css';

const NavLeftDiv = (props) => {

        return (
            <div className="navLeftDiv">
                <div className={props.className} onClick={props.onClick}>
                    {props.text}
                </div>
            </div>
        )
    }


export default NavLeftDiv;