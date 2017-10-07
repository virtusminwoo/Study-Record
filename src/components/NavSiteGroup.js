import React, {Component} from 'react';
import { connect } from 'react-redux';

class NavSiteGroup extends Component {

    render() {
        return(
            <div className="NavSiteDiv">
                <div className="NavSiteUl">
                    {this.props.navSiteGroupDatas} 
                </div>
            </div>
            )
        }
    }

let mapStateToProps = (state) => {
    return {
        navSiteGroupDatas: state.navSiteGroupData.navSiteGroupDatas
    };
}

NavSiteGroup = connect(mapStateToProps)(NavSiteGroup);

export default NavSiteGroup;