import React from 'react';
import ShowUl from './ShowUl'

const ShowFee = () => {
        return (
            <div className="CommonShow ShowFee">      
                <div className="CommonShowTop">    
                    <h4> 월세 가격 </h4>  
                    <input type="number" min="0" max="999999" value="0" step="1" />
                    ~
                    <input type="number" min="0" max="999999" value="999999" step="1" />
                    <hr />
                </div>
                    <ShowUl divClassName="ShowFeeDivLeft" ulClassName="ShowFeeUlLeft" liData={["0 만원","10 만원","20 만원","30 만원","40 만원","50 만원","60 만원","70 만원","80 만원","90 만원","100 만원","무제한"]} />
                    <ShowUl divClassName="ShowFeeDivRight" ulClassName="ShowFeeUlRight" liData={["0 만원","10 만원","20 만원","30 만원","40 만원","50 만원","60 만원","70 만원","80 만원","90 만원","100 만원","무제한"]} />
            </div>
        )
    }


export default ShowFee;