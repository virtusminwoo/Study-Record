import React from 'react';
import ShowUl from './ShowUl';

const ShowDeposit = () => {
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
                    <ShowUl divClassName="ShowDepositDivLeft" ulClassName="ShowDepositUlLeft" liData={["0 만원","100 만원","500 만원","1,000 만원","2,000 만원","3,000 만원","4,000 만원","5,000 만원","6,000 만원","7,000 만원","8,000 만원","9,000 만원","10,000 만원","무제한"]} />
                    <ShowUl divClassName="ShowDepositDivRight" ulClassName="ShowDepositUlRight" liData={["0 만원","100 만원","500 만원","1,000 만원","2,000 만원","3,000 만원","4,000 만원","5,000 만원","6,000 만원","7,000 만원","8,000 만원","9,000 만원","10,000 만원","무제한"]} />
            </div>
        )
    }


export default ShowDeposit;