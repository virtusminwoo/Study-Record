import React, { Component } from 'react';
import NavSiteUl1 from './NavSiteUl1';
import NavSiteUl2 from './NavSiteUl2';
import NavSiteUl3 from './NavSiteUl3';
import NavSiteUl4 from './NavSiteUl4';
import NavSiteUl5 from './NavSiteUl5';
import NavSiteUl6 from './NavSiteUl6';
import NavSiteUl7 from './NavSiteUl7';


    class NavSiteUlGroup extends Component{
        constructor(){
            super();
            
            this.state={
                NavSiteUl1Data:
                [
                    {
                        "id":1,
                        "title":"원룸"
                    },
                    
                    {
                        "id":2,
                        "title":"투룸"
                    },
                    
                    {
                        "id":3,
                        "title":"쓰리룸"
                    },
                    
                    {
                        "id":4,
                        "title":"오피스텔"
                    },
                    
                    {
                        "id":5,
                        "title":"아파트"
                    }
                ],
                
                NavSiteUl2Data:
                [
                    {
                        "id":1,
                        "title":"저보증금"
                    },
                    
                    {
                        "id":2,
                        "title":"오피스텔"
                    },
                    
                    {
                        "id":3,
                        "title":"직거래 매물"
                    },
                    
                    {
                        "id":4,
                        "title":"주차 가능"
                    },
                    
                    {
                        "id":5,
                        "title":"반려동물 가능"
                    },
                    
                    {
                        "id":6,
                        "title":"360도 매물"
                    }
                ],
                
                NavSiteUl3Data:
                [
                    {
                        "id":1,
                        "title":"다방 이용 설명서"
                    },
                    
                    {
                        "id":2,
                        "title":"가입신청"
                    }
                ],
                
                NavSiteUl4Data:
                [
                    {
                        "id":1,
                        "title":"동 상품"
                    },
                    
                    {
                        "id":2,
                        "title":"지하철 상품"
                    },
                    
                    {
                        "id":3,
                        "title":"캠퍼스 상품"
                    },
                    
                    {
                        "id":4,
                        "title":"일반 상품"
                    }
                ],
                
                NavSiteUl5Data:
                [
                    {
                        "id":1,
                        "title":"공지사항"
                    },
                    
                    {
                        "id":2,
                        "title":"이벤트"
                    },
                    
                    {
                        "id":3,
                        "title":"기사보기"
                    }
                ],
                
                NavSiteUl6Data:
                [
                    {
                        "id":1,
                        "title":"자주 묻는 질문"
                    },
                    
                    {
                        "id":2,
                        "title":"Android / IOS"
                    },
                    
                    {
                        "id":3,
                        "title":"웰페이퍼"
                    },
                    
                    {
                        "id":4,
                        "title":"다방 공식 포스트"
                    }
                ],
                
                NavSiteUl7Data:
                [
                    {
                        "id":1,
                        "title":"회사 소개"
                    },
                    
                    {
                        "id":2,
                        "title":"오시는 길"
                    },
                    
                    {
                        "id":3,
                        "title":"제휴문의"
                    }
                ]
            }
            
        }
            render(){
                return(
                    <div className="NavSiteUl">
                        <div className="NavSiteUlCommon NavSiteUl1">
                            <h4>형태별 검색</h4>
                            {this.state.NavSiteUl1Data.map((navData1, i) => <NavSiteUl1 key = {i} NavSiteUl1Data = {navData1} />)} 
                        </div>
                        <div className="NavSiteUlCommon NavSiteUl2">
                            <h4>테마별 검색</h4>
                            {this.state.NavSiteUl2Data.map((navData2, i) => <NavSiteUl2 key = {i} NavSiteUl2Data = {navData2} />)} 
                        </div>
                        <div className="NavSiteUl3With4">
                            <div className="NavSiteUlCommon NavSiteUl3">
                                <h4>공인중개사 회원가입</h4>
                                {this.state.NavSiteUl3Data.map((navData3, i) => <NavSiteUl3 key = {i} NavSiteUl3Data = {navData3} />)} 
                            </div>
                            <div className="NavSiteUlCommon NavSiteUl4">
                                <h4>상품소개</h4>
                                {this.state.NavSiteUl4Data.map((navData4, i) => <NavSiteUl4 key = {i} NavSiteUl4Data = {navData4} />)} 
                            </div>
                        </div>
                        <div className="NavSiteUl5With6">
                            <div className="NavSiteUlCommon NavSiteUl5">
                                <h4>다방 뉴스</h4>
                                {this.state.NavSiteUl5Data.map((navData5, i) => <NavSiteUl5 key = {i} NavSiteUl5Data = {navData5} />)} 
                            </div>
                            <div className="NavSiteUlCommon NavSiteUl6">
                                <h4>고객지원</h4>
                                {this.state.NavSiteUl6Data.map((navData6, i) => <NavSiteUl6 key = {i} NavSiteUl6Data = {navData6} />)} 
                            </div>
                        </div>
                        <div className="NavSiteUlCommon NavSiteUl7">
                            <h4>About 다방</h4>
                            {this.state.NavSiteUl7Data.map((navData7, i) => <NavSiteUl7 key = {i} NavSiteUl7Data = {navData7} />)} 
                        </div>
                    </div>
                )
            }
        }
    
export default NavSiteUlGroup;