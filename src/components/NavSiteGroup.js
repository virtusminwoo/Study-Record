import React from 'react';
import navSiteUiGroupAPI from '../data/navSiteUiGroupAPI'

const NavSiteGroup = () => {
        return(
            <div className="NavSiteDiv">
                <div className="NavSiteUl">
                    <div className="NavSiteUlCommon NavSiteUl1">
                        <h4>형태별 검색</h4>
                        <ul>
                            {navSiteUiGroupAPI.NavSiteUl1Data.map((navData1, i) => <li key = {i} NavSiteUl1Data = {navData1} >{navData1.title}</li>)} 
                        </ul>
                    </div>
                    <div className="NavSiteUlCommon NavSiteUl2">
                        <h4>테마별 검색</h4>
                        <ul>
                            {navSiteUiGroupAPI.NavSiteUl2Data.map((navData2, i) => <li key = {i} NavSiteUl2Data = {navData2} >{navData2.title}</li>)} 
                        </ul>
                    </div>
                    <div className="NavSiteUl3With4">
                        <div className="NavSiteUlCommon NavSiteUl3">
                            <h4>공인중개사 회원가입</h4>
                            <ul>
                                {navSiteUiGroupAPI.NavSiteUl3Data.map((navData3, i) => <li key = {i} NavSiteUl3Data = {navData3} >{navData3.title}</li>)} 
                            </ul>
                        </div>
                        <div className="NavSiteUlCommon NavSiteUl4">
                            <h4>상품소개</h4>
                            <ul>
                                {navSiteUiGroupAPI.NavSiteUl4Data.map((navData4, i) => <li key = {i} NavSiteUl4Data = {navData4} >{navData4.title}</li>)} 
                            </ul>
                        </div>
                    </div>
                    <div className="NavSiteUl5With6">
                        <div className="NavSiteUlCommon NavSiteUl5">
                            <h4>다방 뉴스</h4>
                            <ul>
                                {navSiteUiGroupAPI.NavSiteUl5Data.map((navData5, i) => <li key = {i} NavSiteUl5Data = {navData5} >{navData5.title}</li>)} 
                            </ul>
                        </div>
                        <div className="NavSiteUlCommon NavSiteUl6">
                            <h4>고객지원</h4>
                            <ul>
                                {navSiteUiGroupAPI.NavSiteUl6Data.map((navData6, i) => <li key = {i} NavSiteUl6Data = {navData6} >{navData6.title}</li>)} 
                            </ul>
                        </div>
                    </div>
                    <div className="NavSiteUlCommon NavSiteUl7">
                        <h4>About 다방</h4>
                        <ul>
                            {navSiteUiGroupAPI.NavSiteUl7Data.map((navData7, i) => <li key = {i} NavSiteUl7Data = {navData7} >{navData7.title}</li>)} 
                        </ul>
                    </div>
                </div>
            </div>
        )
    }


export default NavSiteGroup;