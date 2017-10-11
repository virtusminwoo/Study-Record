import React from 'react';
import ThemaSearchPhotoTable from './ThemaSearchPhotoTable';


const ThemaSearchGroup = () => {

        return (
            <div className="ThemaSearchGroup">
                <div className="ThemaSearchSentence">
                    <h1>테마 검색</h1>
                    <p>다방의 다양한 검색 조건으로 방을 찾아보세요.</p>
                </div>
                <ThemaSearchPhotoTable />
            </div>
        )
    }

export default ThemaSearchGroup;