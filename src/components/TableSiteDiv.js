import React, { Component } from 'react';

class TableSiteDiv extends Component {
    render() {
        return (
            <div className="TableSiteDiv">
                <hr className="TableSiteDivHr" />
                <table className="TableSite">
                    <tr>
                        <td>회사소개</td>
                        <td>공인중개사 회원가입</td>
                        <td>이용약관</td>
                        <td>개인정보취급방침</td>
                        <td>위치기반약관</td>
                        <td>매물관리규정</td>
                        <td>자동저장 서비스</td>        
                    </tr>
                </table>
            </div>
        );
    }
}

export default TableSiteDiv;