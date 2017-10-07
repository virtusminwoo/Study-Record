import React from 'react';
import RoomCenterDescriptionTableDivTr from './RoomCenterDescriptionTableDivTr'

const RoomCenterDescriptionTableDiv = (props) => {

        return (
            <div className="RoomCenterDescriptionTableDiv">
                <table>
                    <caption>매물정보</caption>
                    <tbody>
                        <RoomCenterDescriptionTableDivTr frontTdText={"보증금/월세"} frontThFirstData={props.room.depositFee} secondTdText={"방종류"} endThFirstData={props.room.buildingType}/>
                        <RoomCenterDescriptionTableDivTr frontTdText={"해당 층/건물 층"} frontThFirstData={props.room.theFloor} frontThFirstText={"층 / "} frontThSecondData={props.room.entireFloor} frontThSecondText={"층"} secondTdText={"전용/공급면적"} endThFirstData={props.room.theArea} endThFirstText={"㎡ / "} endThSecondData={props.room.entireArea} endThSecondText={"㎡"}/>
                        <RoomCenterDescriptionTableDivTr frontTdText={"관리비"} frontThFirstData={props.room.administrativeFee} frontThFirstText={"만원"} secondTdText={"관리비포함항목"} endThFirstData={props.room.administrativeType} />
                        <RoomCenterDescriptionTableDivTr frontTdText={"난방종류"} frontThFirstData={props.room.heatingType} secondTdText={"반려동물"} endThFirstData={props.room.pet? "가능" : "불가능"} />
                        <RoomCenterDescriptionTableDivTr frontTdText={"주차"} frontThFirstData={props.room.park? "가능" : "불가능"} frontThSecondData={props.room.parkFee} secondTdText={"엘리베이터"} endThFirstData={props.room.elevator? "있음" : "없음"}/>
                        <RoomCenterDescriptionTableDivTr frontTdText={"입주가능일"} frontThFirstData={props.room.inToDay} />
                    </tbody>
                </table>
            </div>
        )
    }

export default RoomCenterDescriptionTableDiv;