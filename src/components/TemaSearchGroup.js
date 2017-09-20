import React, { Component } from 'react';
import TemaSearchSentence from './TemaSearchSentence';
import TemaSearchPhotoGroup from './TemaSearchPhotoGroup';

class TemaSearchGroup extends Component {
    render() {
        return (
            <div>
                <TemaSearchSentence />
                <TemaSearchPhotoGroup />
            </div>
        );
    }
}

export default TemaSearchGroup;