import React, { Component } from 'react';
import MainPhotoBottomSearch from './MainPhotoBottomSearch';
import MainPhotoBottomButton from './MainPhotoBottomButton';

class MainPhotoBottomDiv extends Component {
    render() {
        return (
            <div className="MainPhotoBottomDiv">   
                <MainPhotoBottomSearch />
                <MainPhotoBottomButton />
            </div>
        );
    }
}

export default MainPhotoBottomDiv;