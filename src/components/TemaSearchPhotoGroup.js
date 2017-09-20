import React, { Component } from 'react';
import TemaSearchPhotoFirstLine from './TemaSearchPhotoFirstLine';
import TemaSearchPhotoSecondLine from './TemaSearchPhotoSecondLine';

    class TemaSearchPhotoGroup extends Component{
        constructor(){
            super();

            this.state={
                TemaPhotoFirstLineData:
                [
                    {
                        "id":1,
                        "title":"반려동물",
                        "description":"반려동물과 함께 살 수 있는 방 찾아보기",
                        "photo": require("../images/animalProduct.png"),    
                        "link":"https://www.dabangapp.com/search#/map?id=&type=search&filters=%7B%22deposit-range%22%3A%5B0%2C999999%5D%2C%22price-range%22%3A%5B0%2C999999%5D%2C%22room-type%22%3A%5B0%2C1%2C2%2C3%2C4%2C5%5D%2C%22deal-type%22%3A%5B0%2C1%5D%2C%22parking%22%3Afalse%2C%22animal%22%3Atrue%2C%22pano%22%3Afalse%2C%22location%22%3A%5B%5B126.4889854248047%2C37.327144433539374%5D%2C%5B127.49011457519532%2C37.802297887362485%5D%5D%7D&position=%7B%22center%22%3A%5B126.98955000000001%2C37.5651%5D%2C%22zoom%22%3A11%7D&cluster=%7B%7D"
                    },
                    
                    {
                        "id":2,
                        "title":"저보증금",
                        "description":"보증금 300만원 이하인 방 찾아보기",
                        "photo": require("../images/lowDepositProduct.jpg"),
                        "link":"https://www.dabangapp.com/search#/map?id=&type=search&filters=%7B%22deposit-range%22%3A%5B0%2C300%5D%2C%22price-range%22%3A%5B0%2C999999%5D%2C%22room-type%22%3A%5B0%2C1%2C2%2C3%2C4%2C5%5D%2C%22deal-type%22%3A%5B0%2C1%5D%2C%22parking%22%3Afalse%2C%22animal%22%3Afalse%2C%22pano%22%3Afalse%2C%22location%22%3A%5B%5B126.4889854248047%2C37.327144433539374%5D%2C%5B127.49011457519532%2C37.802297887362485%5D%5D%7D&position=%7B%22center%22%3A%5B126.98955000000001%2C37.5651%5D%2C%22zoom%22%3A11%7D&cluster=%7B%7D"
                    },
                    
                    {
                        "id":3,
                        "title":"360도 매물",
                        "description":"3D 이미지로 더 자세히 볼 수 있는 방 찾아보기",
                        "photo": require("../images/roundProduct.jpg"),
                        "link":"https://www.dabangapp.com/search#/map?id=&type=search&filters=%7B%22deposit-range%22%3A%5B0%2C999999%5D%2C%22price-range%22%3A%5B0%2C999999%5D%2C%22room-type%22%3A%5B0%2C1%2C2%2C3%2C4%2C5%5D%2C%22deal-type%22%3A%5B0%2C1%5D%2C%22parking%22%3Afalse%2C%22animal%22%3Afalse%2C%22pano%22%3Atrue%2C%22location%22%3A%5B%5B126.4889854248047%2C37.327144433539374%5D%2C%5B127.49011457519532%2C37.802297887362485%5D%5D%7D&position=%7B%22center%22%3A%5B126.98955000000001%2C37.5651%5D%2C%22zoom%22%3A11%7D&cluster=%7B%7D"
                    }
                ],
                
                TemaPhotoSecondLineData:
                [
                    {
                        "id":1,
                        "title":"주차가능",
                        "description":"주차공간이 확보된 방 찾아보기",
                        "photo": require("../images/parkingProduct.jpg"),
                        "link":"https://www.dabangapp.com/search#/map?id=&type=search&filters=%7B%22deposit-range%22%3A%5B0%2C999999%5D%2C%22price-range%22%3A%5B0%2C999999%5D%2C%22room-type%22%3A%5B0%2C1%2C2%2C3%2C4%2C5%5D%2C%22deal-type%22%3A%5B0%2C1%5D%2C%22parking%22%3Atrue%2C%22animal%22%3Afalse%2C%22pano%22%3Afalse%2C%22location%22%3A%5B%5B126.4889854248047%2C37.327144433539374%5D%2C%5B127.49011457519532%2C37.802297887362485%5D%5D%7D&position=%7B%22center%22%3A%5B126.98955000000001%2C37.5651%5D%2C%22zoom%22%3A11%7D&cluster=%7B%7D"
                    },
                    
                    {
                        "id":2,
                        "title":"직거래매물",
                        "description":"중개수수료 없는 직거래 매물 찾아보기",
                        "photo": require("../images/directDealProduct.PNG"),
                        "link":"https://www.dabangapp.com/search#/map?id=&type=search&filters=%7B%22deposit-range%22%3A%5B0%2C999999%5D%2C%22price-range%22%3A%5B0%2C999999%5D%2C%22room-type%22%3A%5B0%2C1%2C2%2C3%2C4%2C5%5D%2C%22deal-type%22%3A%5B0%5D%2C%22parking%22%3Afalse%2C%22animal%22%3Afalse%2C%22pano%22%3Afalse%2C%22location%22%3A%5B%5B126.4889854248047%2C37.327144433539374%5D%2C%5B127.49011457519532%2C37.802297887362485%5D%5D%7D&position=%7B%22center%22%3A%5B126.98955000000001%2C37.5651%5D%2C%22zoom%22%3A11%7D&cluster=%7B%7D"
                    },
                    
                    {
                        "id":3,
                        "title":"오피스텔",
                        "description":"깨끗하고 편리한 주거용 오피스텔 찾아보기",
                        "photo": require("../images/officeTelProduct.jpg"),
                        "link":"https://www.dabangapp.com/search#/map?id=&type=search&filters=%7B%22deposit-range%22%3A%5B0%2C999999%5D%2C%22price-range%22%3A%5B0%2C999999%5D%2C%22room-type%22%3A%5B3%5D%2C%22deal-type%22%3A%5B0%2C1%5D%2C%22parking%22%3Afalse%2C%22animal%22%3Afalse%2C%22pano%22%3Afalse%2C%22location%22%3A%5B%5B126.4889854248047%2C37.327144433539374%5D%2C%5B127.49011457519532%2C37.802297887362485%5D%5D%7D&position=%7B%22center%22%3A%5B126.98955000000001%2C37.5651%5D%2C%22zoom%22%3A11%7D&cluster=%7B%7D"
                    }
                ]
            }
        }
                
                
        render(){
            return(
                <div className="TemaSearchPhotoGroup">
                    <table className="TemaSearchTable">
                        <tbody>
                            <tr>
                            {this.state.TemaPhotoFirstLineData.map((navData, i) => <TemaSearchPhotoFirstLine key = {i} TemaPhotoFirstLineData = {navData} />)} 
                            </tr>
                        </tbody>
                    </table>
                    <table className="TemaSearchTable">
                        <tbody>
                            <tr>
                            {this.state.TemaPhotoSecondLineData.map((navData, i) => <TemaSearchPhotoSecondLine key = {i} TemaPhotoSecondLineData = {navData} />)} 
                            </tr>
                        </tbody>    
                    </table>
                </div> 
            )
        }
    }
    
export default TemaSearchPhotoGroup;