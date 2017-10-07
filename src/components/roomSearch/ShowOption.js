import React from 'react';
import InputCheckBox from './InputCheckBox'

const ShowOption = () => {

        return (
            <div className="CommonShow ShowOption">         
                <h4> 추가옵션 </h4>  
                <ul>
                    <InputCheckBox id={"option1"} htmlFor={"option1"} text={"주차가능"}/>
                    <InputCheckBox id={"option2"} htmlFor={"option2"} text={"반려동물"}/>
                    <InputCheckBox id={"option3"} htmlFor={"option3"} text={"단기임대"}/>
                    <InputCheckBox id={"option4"} htmlFor={"option4"} text={"360도매물"}/>
                    <hr />
                    <InputCheckBox id={"option5"} htmlFor={"option5"} text={"5평 이하"}/>
                    <InputCheckBox id={"option6"} htmlFor={"option6"} text={"5평~10평 이하"}/>
                    <InputCheckBox id={"option7"} htmlFor={"option7"} text={"10평 이상"}/>
                    <hr />
                    <InputCheckBox id={"option8"} htmlFor={"option8"} text={"반지하"}/>
                    <InputCheckBox id={"option9"} htmlFor={"option9"} text={"저층 1층~3층"}/>
                    <InputCheckBox id={"option10"} htmlFor={"option10"} text={"중층 4층~6층"}/>
                    <InputCheckBox id={"option11"} htmlFor={"option11"} text={"고층 7층"}/>
                    <InputCheckBox id={"option12"} htmlFor={"option12"} text={"옥탑"}/>
                </ul>
            </div>
        )
    }

export default ShowOption;