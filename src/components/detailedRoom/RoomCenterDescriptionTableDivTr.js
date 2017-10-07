import React from 'react';

const RoomCenterDescriptionTableDivTr = (props) => {

        return (
                <tr>
                    <td>{props.frontTdText}</td>
                    <th>{props.frontThFirstData}{props.frontThFirstText}{props.frontThSecondData}{props.frontThSecondText}</th>
                    <td className="RoomCenterDescriptionTableRight">{props.secondTdText}</td>
                    <th>{props.endThFirstData}{props.endThFirstText}{props.endThSecondData}{props.endThSecondText}</th>
                </tr>           
        )
    }

export default RoomCenterDescriptionTableDivTr;