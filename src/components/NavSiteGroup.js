import React from 'react';
import NavSiteGroupUl from './NavSiteGroupUl'

const NavSiteGroup = () => {
    
        return(
            <div className="NavSiteDiv">
                <div className="NavSiteUl">
                    <NavSiteGroupUl className="NavSiteUlCommon NavSiteUl1" title="형태별 검색" liData={["원룸","투룸","쓰리룸","오피스텔","아파트"]}/>
                    <NavSiteGroupUl className="NavSiteUlCommon NavSiteUl2" title="테마별 검색" liData={["저보증금","오피스텔","직거래 매물","주차 가능","반려동물 가능","360도 매물"]}/>
                    <NavSiteGroupUl className="NavSiteUlCommon NavSiteUl3" title="공인중개사 회원가입" liData={["다방 이용 설명서","가입신청"]}/>
                    <NavSiteGroupUl className="NavSiteUlCommon NavSiteUl4" title="상품소개" liData={["동 상품","지하철 상품","캠퍼스 상품","일반 상품"]}/>
                    <NavSiteGroupUl className="NavSiteUlCommon NavSiteUl5" title="다방 뉴스" liData={["공지사항","이벤트","기사보기"]}/>
                    <NavSiteGroupUl className="NavSiteUlCommon NavSiteUl6" title="고객지원" liData={["자주 묻는 질문","Android / IOS","웰페이퍼","다방 공식 포스트"]}/>
                    <NavSiteGroupUl className="NavSiteUlCommon NavSiteUl7" title="About 다방" liData={["회사 소개","오시는 길","제휴문의"]}/>
                </div>
            </div>
            )
        }

export default NavSiteGroup;