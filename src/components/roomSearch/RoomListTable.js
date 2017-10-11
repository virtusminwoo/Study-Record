import React from 'react';

const RoomListTable = (props) => {

    return (
            <div>
                <table className="RoomListTable">
                    <tbody>
                            {props.RoomListTableTdData}
                    </tbody>
                </table>
            </div>
        )
    }


export default RoomListTable;