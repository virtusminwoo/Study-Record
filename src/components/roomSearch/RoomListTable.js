import React from 'react';

const RoomListTable = (props) => {

    return (
            <div>
                <table className="RoomListTable">
                    <tbody>
                        <tr >
                            {props.RoomListTableTdData}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }


export default RoomListTable;