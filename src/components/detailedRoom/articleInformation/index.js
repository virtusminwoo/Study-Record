import React from 'react';
import ArticleInformationTr from '../articleInformationTr'
import managementTypeObject from '../../../lib/managementTypeObject'
import messages from './messages'
import './index.css';

const ArticleInformation = (props) => {

    function managementTypeFunc(){
        const propsmanagementType = props.room.managementType   
        let items = []
            for(let i in propsmanagementType){
                items.push(managementTypeObject[propsmanagementType[i]])
                items.push(",")
            }
            return items.slice(0,-1)
        }

    function rentalFee(){
        if(props.room.contractType === "월세")
            return '/' + props.room.rentalFee
    }

    function houseValueFunc(){
        if(props.room.contractType === "매매"){
            return props.room.price
        } else {
            return props.room.deposit
        }
    }

    const toString = String(houseValueFunc())
    function depositToString(toString){
        if(toString.length >= 5){
            return toString.replace(/\B(?=(\d{4})+(?!\d))/g, "억");
        } else {
            return toString
        }
    }

        return (
            <div className="articleInformation">
                <table>
                    <caption>{messages.caption.text}</caption>
                    <tbody>
                        <ArticleInformationTr frontTdText={messages.tr1.frontTdText} frontThFirstData={depositToString(toString)} frontThSecondData={rentalFee()} secondTdText={messages.tr1.secondTdText} endThFirstData={props.room.houseType}/>
                        <ArticleInformationTr frontTdText={messages.tr2.frontTdText} frontThFirstData={props.room.thisFloor} frontThFirstText={messages.tr2.frontThFirstText} frontThSecondData={props.room.totalFloors} frontThSecondText={messages.tr2.frontThSecondText} secondTdText={messages.tr2.secondTdText} endThFirstData={props.room.exclusiveArea} endThFirstText={messages.tr2.endThFirstText} endThSecondData={props.room.suppliedArea} endThSecondText={messages.tr2.endThSecondText}/>
                        <ArticleInformationTr frontTdText={messages.tr3.frontTdText} frontThFirstData={props.room.managementExpenses} frontThFirstText={messages.tr3.frontThFirstText} secondTdText={messages.tr3.secondTdText} endThFirstData={managementTypeFunc()} />
                        <ArticleInformationTr frontTdText={messages.tr4.frontTdText} frontThFirstData={props.room.heatingSystem} secondTdText={messages.tr4.secondTdText} endThFirstData={props.room.pet? "가능" : "불가능"} />
                        <ArticleInformationTr frontTdText={messages.tr5.frontTdText} frontThFirstData={props.room.park? "가능" : "불가능"} frontThSecondData={props.room.parkingFee} secondTdText={messages.tr5.secondTdText} endThFirstData={props.room.elevator? "있음" : "없음"}/>
                        <ArticleInformationTr frontTdText={messages.tr6.frontTdText} frontThFirstData={props.room.moveInDate} />
                    </tbody>
                </table>
            </div>
        )
    }

export default ArticleInformation;