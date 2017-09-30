import React, { Component } from 'react';

class ShowOption extends Component {
    render() {
        return (
            <div className="CommonShow ShowOption">         
                <h4> 추가옵션 </h4>  
                <ul>
                    <li> <input type="checkbox" /> 주차가능</li>
                    <li> <input type="checkbox" /> 반려동물</li>
                    <li> <input type="checkbox" /> 단기임대</li>
                    <li> <input type="checkbox" /> 360도매물</li>
                    <hr />
                    <li> <input type="checkbox" /> 5평 이하</li>
                    <li> <input type="checkbox" /> 5평~10평 이하</li>
                    <li> <input type="checkbox" /> 10평 이상</li>
                    <hr />
                    <li> <input type="checkbox" /> 반지하</li>
                    <li> <input type="checkbox" /> 저층 1층~3층</li>
                    <li> <input type="checkbox" /> 중층 4층~6층</li>
                    <li> <input type="checkbox" /> 고층 7층</li>
                    <li> <input type="checkbox" /> 옥탑</li>
                </ul>
            </div>
        );
    }
}

export default ShowOption;