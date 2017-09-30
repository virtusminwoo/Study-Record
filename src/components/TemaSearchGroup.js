import React from 'react';
import TemaSearchPhotoGroup from './TemaSearchPhotoGroup';


const TemaSearchGroup = () => {
        return (
            <div className="TemaSearchGroup">
                <div className="TemaSearchSentence">
                    <h1>테마 검색</h1>
                    <p>다방의 다양한 검색 조건으로 방을 찾아보세요.</p>
                </div>
                <TemaSearchPhotoGroup />
            </div>
        );
    }

export default TemaSearchGroup;