import React, { Component } from 'react';

class ShowOption extends Component {
    render() {
        return (
            <div className="CommonShow ShowOption">         
                <h4> 추가옵션 </h4>  
                <ul>
                    <li> <input type="checkbox" id="option1"/><label htmlFor="option1"> 주차가능</label></li>
                    <li> <input type="checkbox" id="option2"/><label htmlFor="option2"> 반려동물</label></li>
                    <li> <input type="checkbox" id="option3"/><label htmlFor="option3"> 단기임대</label></li>
                    <li> <input type="checkbox" id="option4"/><label htmlFor="option4"> 360도매물</label></li>
                    <hr />
                    <li> <input type="checkbox" id="option5"/><label htmlFor="option5"> 5평 이하</label></li>
                    <li> <input type="checkbox" id="option6"/><label htmlFor="option6"> 5평~10평 이하</label></li>
                    <li> <input type="checkbox" id="option7"/><label htmlFor="option7"> 10평 이상</label></li>
                    <hr />
                    <li> <input type="checkbox" id="option8"/><label htmlFor="option8"> 반지하</label></li>
                    <li> <input type="checkbox" id="option9"/><label htmlFor="option9"> 저층 1층~3층</label></li>
                    <li> <input type="checkbox" id="option10"/><label htmlFor="option10"> 중층 4층~6층</label></li>
                    <li> <input type="checkbox" id="option11"/><label htmlFor="option11"> 고층 7층</label></li>
                    <li> <input type="checkbox" id="option12"/><label htmlFor="option12"> 옥탑</label></li>
                </ul>
            </div>
        );
    }
}

export default ShowOption;