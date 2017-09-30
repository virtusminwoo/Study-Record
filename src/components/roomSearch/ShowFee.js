import React, { Component } from 'react';

class ShowFee extends Component {
    render() {
        return (
            <div className="CommonShow ShowFee">      
                <div className="CommonShowTop">    
                    <h4> 월세 가격 </h4>  
                    <input type="number" min="0" max="999999" value="0" step="1" />
                    ~
                    <input type="number" min="0" max="999999" value="999999" step="1" />
                    <hr />
                </div>
                    <div className="ShowFeeDivLeft">
                        <ul className="ShowFeeUlLeft">
                            <li>0 만원</li>
                            <li>10 만원</li>
                            <li>20 만원</li>
                            <li>30 만원</li>
                            <li>40 만원</li>
                            <li>50 만원</li>
                            <li>60 만원</li>
                            <li>70 만원</li>
                            <li>80 만원</li>
                            <li>90 만원</li>
                            <li>100 만원</li>
                            <li>무제한</li>
                        </ul>
                    </div>
                    <div className="ShowFeeDivRight">
                        <ul className="ShowFeeUlRight">
                            <li>0 만원</li>
                            <li>10 만원</li>
                            <li>20 만원</li>
                            <li>30 만원</li>
                            <li>40 만원</li>
                            <li>50 만원</li>
                            <li>60 만원</li>
                            <li>70 만원</li>
                            <li>80 만원</li>
                            <li>90 만원</li>
                            <li>100 만원</li>
                            <li>무제한</li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default ShowFee;