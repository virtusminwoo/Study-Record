import React, { Component } from 'react';

class ShowDeposit extends Component {
    render() {
        return (
            <div className="CommonShow ShowDeposit">      
                <div className="CommonShowTop">   
                    <h4>보증금 가격 </h4>  
                    <p className="ShowDepositP">보증금 (ex. 10.000만원 = 1억원)</p>
                    <input type="number" min="0" max="999999" value="0" step="1" />
                    ~
                    <input type="number" min="0" max="999999" value="999999" step="1" />
                    <hr />
                </div>
                    <div className="ShowDepositDivLeft">
                        <ul className="ShowDepositUlLeft">
                            <li>0 만원</li>
                            <li>100 만원</li>
                            <li>500 만원</li>
                            <li>1,000 만원</li>
                            <li>2,000 만원</li>
                            <li>3,000 만원</li>
                            <li>4,000 만원</li>
                            <li>5,000 만원</li>
                            <li>6,000 만원</li>
                            <li>7,000 만원</li>
                            <li>8,000 만원</li>
                            <li>9,000 만원</li>
                            <li>10,000 만원</li>
                            <li>무제한</li>
                        </ul>
                    </div>
                    <div className="ShowDepositDivRight">
                        <ul className="ShowDepositUlRight">
                            <li>0 만원</li>
                            <li>100 만원</li>
                            <li>500 만원</li>
                            <li>1,000 만원</li>
                            <li>2,000 만원</li>
                            <li>3,000 만원</li>
                            <li>4,000 만원</li>
                            <li>5,000 만원</li>
                            <li>6,000 만원</li>
                            <li>7,000 만원</li>
                            <li>8,000 만원</li>
                            <li>9,000 만원</li>
                            <li>10,000 만원</li>
                            <li>무제한</li>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default ShowDeposit;