import React from 'react';
import './index.css';
import SideBarTop from '../sideBarTop'
import SideBarBottom from '../sideBarBottom'

const SideBar = (props) => {
    

        return (
            <div className={props.isabsoluteDiv? "sideBarAbsolute" : "sideBarBasic"}>
                <div className="sideBar">
                    <SideBarTop room={props.room}/>
                    <SideBarBottom room={props.room}/>
                </div>
            </div>
        )
    }


export default SideBar;