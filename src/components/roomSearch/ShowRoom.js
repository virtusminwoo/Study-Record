import React from 'react';
import InputCheckBox from './InputCheckBox'

const ShowRoom = () => {

        return (
            <div className="CommonShow ShowRoom">         
                <h4> 방 종류 </h4>  
                <ul>
                    <li> <input type="checkbox" defaultChecked id="room1"/><label htmlFor="room1"> 전체</label></li>
                    <InputCheckBox id={"room2"} htmlFor={"room2"} text={"원룸"}/>
                    <InputCheckBox id={"room3"} htmlFor={"room3"} text={"1.5룸"}/>
                    <InputCheckBox id={"room4"} htmlFor={"room4"} text={"투룸"}/>
                    <InputCheckBox id={"room5"} htmlFor={"room5"} text={"쓰리룸"}/>
                    <InputCheckBox id={"room6"} htmlFor={"room6"} text={"오피스텔"}/>
                    <InputCheckBox id={"room7"} htmlFor={"room7"} text={"아파트"}/>
                </ul>
            </div>
        )
    }

export default ShowRoom;