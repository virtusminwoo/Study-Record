import React from 'react';
import ThemaSearchPhotoTd from './ThemaSearchPhotoTd'

const ThemaSearchPhotoTable = (props) => {
    
        return(
            <div className="ThemaSearchPhotoTable">
                <table className="ThemaSearchTable">
                    <tbody>
                        <tr>
                            <ThemaSearchPhotoTd photo={require("../images/ThemaPhoto/animalProduct.png")} title="반려동물" description="반려동물과 함께 살 수 있는 방 찾아보기" />
                            <ThemaSearchPhotoTd photo={require("../images/ThemaPhoto/lowDepositProduct.jpg")} title="저보증금" description="보증금 300만원 이하인 방 찾아보기" />
                            <ThemaSearchPhotoTd photo={require("../images/ThemaPhoto/roundProduct.jpg")} title="360도 매물" description="3D 이미지로 더 자세히 볼 수 있는 방 찾아보기" />
                        </tr>
                        <tr>
                            <ThemaSearchPhotoTd photo={require("../images/ThemaPhoto/parkingProduct.jpg")} title="주차가능" description="주차공간이 확보된 방 찾아보기" />
                            <ThemaSearchPhotoTd photo={require("../images/ThemaPhoto/directDealProduct.PNG")} title="직거래매물" description="중개수수료 없는 직거래 매물 찾아보기" />
                            <ThemaSearchPhotoTd photo={require("../images/ThemaPhoto/officeTelProduct.jpg")} title="오피스텔" description="깨끗하고 편리한 주거용 오피스텔 찾아보기" />
                        </tr>
                    </tbody>
                </table>
            </div> 
        )
    }


export default ThemaSearchPhotoTable;