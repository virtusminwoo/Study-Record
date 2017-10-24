import React from 'react';

import messages from './messages';
import './index.css';

const RoomList = (props) => {

        return(
            <div className="roomList" >
                <div className="roomListResult">
                    <p>{messages.roomListResult.text}</p>
                </div>
                <div className="roomListOverFlow">
                <div className="roomListAd">
                    <p>{messages.roomListAd.text}</p>
                    <span>{messages.roomListAd.span} </span>
                </div>  
                <div>
                    <table className="roomListTable">
                        <tbody>
                            {props.RoomListTableTdData}
                        </tbody>
                    </table>
                </div>
                </div>
            </div> 
        )
    }
    

export default RoomList;