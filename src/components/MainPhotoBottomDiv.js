import React from 'react';

const MainPhotoBottomDiv = () => {

    return (
        <div className="MainPhotoDiv">
             <div className="MainPhotoBottomDiv">   
                <input  type="text" className="MainPhotoBottomSearch" placeholder="관심지역 또는 매물번호를 검색해보세요" />
                <button type="submit" className="MainPhotoBottomButton">방 검색</button>
            </div>
        </div>
    )
}

export default MainPhotoBottomDiv;