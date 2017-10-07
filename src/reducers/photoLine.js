import React from 'react';
import themaSearchApi from '../data/themaSearchApi';
import ThemaSearchPhotoFirstLine from '../components/ThemaSearchPhotoFirstLine';
import ThemaSearchPhotoSecondLine from '../components/ThemaSearchPhotoSecondLine';


const initialState = {
    photoFirstLine : themaSearchApi.ThemaPhotoFirstLineData.map((navData, i) => 
                <ThemaSearchPhotoFirstLine key = {i} ThemaPhotoFirstLineData = {navData} />
            ),
    photoSecondLine : themaSearchApi.ThemaPhotoSecondLineData.map((navData, i) => 
                <ThemaSearchPhotoSecondLine key = {i} ThemaPhotoSecondLineData = {navData} />
            )
};

function photoLine(state = initialState) {
            return state;
    }

export default photoLine;