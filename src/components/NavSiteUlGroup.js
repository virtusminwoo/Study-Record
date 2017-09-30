import React from 'react';
import navSiteUiGroupAPI from '../data/navSiteUiGroupAPI'
import NavSiteUl1 from './NavSiteUl1';
import NavSiteUl2 from './NavSiteUl2';
import NavSiteUl3 from './NavSiteUl3';
import NavSiteUl4 from './NavSiteUl4';
import NavSiteUl5 from './NavSiteUl5';
import NavSiteUl6 from './NavSiteUl6';
import NavSiteUl7 from './NavSiteUl7';

const NavSiteUlGroup = () => {
            return(
                <div className="NavSiteUl">
                    <div className="NavSiteUlCommon NavSiteUl1">
                        <h4>형태별 검색</h4>
                        {navSiteUiGroupAPI.NavSiteUl1Data.map((navData1, i) => <NavSiteUl1 key = {i} NavSiteUl1Data = {navData1} />)} 
                    </div>
                    <div className="NavSiteUlCommon NavSiteUl2">
                        <h4>테마별 검색</h4>
                        {navSiteUiGroupAPI.NavSiteUl2Data.map((navData2, i) => <NavSiteUl2 key = {i} NavSiteUl2Data = {navData2} />)} 
                    </div>
                    <div className="NavSiteUl3With4">
                        <div className="NavSiteUlCommon NavSiteUl3">
                            <h4>공인중개사 회원가입</h4>
                            {navSiteUiGroupAPI.NavSiteUl3Data.map((navData3, i) => <NavSiteUl3 key = {i} NavSiteUl3Data = {navData3} />)} 
                        </div>
                        <div className="NavSiteUlCommon NavSiteUl4">
                            <h4>상품소개</h4>
                            {navSiteUiGroupAPI.NavSiteUl4Data.map((navData4, i) => <NavSiteUl4 key = {i} NavSiteUl4Data = {navData4} />)} 
                        </div>
                    </div>
                    <div className="NavSiteUl5With6">
                        <div className="NavSiteUlCommon NavSiteUl5">
                            <h4>다방 뉴스</h4>
                            {navSiteUiGroupAPI.NavSiteUl5Data.map((navData5, i) => <NavSiteUl5 key = {i} NavSiteUl5Data = {navData5} />)} 
                        </div>
                        <div className="NavSiteUlCommon NavSiteUl6">
                            <h4>고객지원</h4>
                            {navSiteUiGroupAPI.NavSiteUl6Data.map((navData6, i) => <NavSiteUl6 key = {i} NavSiteUl6Data = {navData6} />)} 
                        </div>
                    </div>
                    <div className="NavSiteUlCommon NavSiteUl7">
                        <h4>About 다방</h4>
                        {navSiteUiGroupAPI.NavSiteUl7Data.map((navData7, i) => <NavSiteUl7 key = {i} NavSiteUl7Data = {navData7} />)} 
                    </div>
                </div>
            )
        }
        
    
export default NavSiteUlGroup;