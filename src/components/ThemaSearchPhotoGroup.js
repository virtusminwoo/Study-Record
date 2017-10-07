import React,{Component} from 'react';
import { connect } from 'react-redux';
import ThemaSearchTable from './ThemaSearchTable';

class ThemaSearchPhotoGroup extends Component {

    render() {
        return(
            <div className="ThemaSearchPhotoGroup">
                <ThemaSearchTable photoLine={this.props.photoFirstLine}/>
                <ThemaSearchTable photoLine={this.props.photoSecondLine}/>
            </div> 
        )
    }
}

let mapStateToProps = (state) => {
    return {
        photoFirstLine: state.photoLineData.photoFirstLine,
        photoSecondLine: state.photoLineData.photoSecondLine
    };
}

ThemaSearchPhotoGroup = connect(mapStateToProps)(ThemaSearchPhotoGroup);

    
export default ThemaSearchPhotoGroup;