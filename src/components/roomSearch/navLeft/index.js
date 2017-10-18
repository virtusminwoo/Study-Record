import React,{Component} from 'react';
import * as actions from '../../../actions/navLeftDropDownActionCreators';
import { connect } from 'react-redux';

import NavLeftDiv from '../navLeftDiv'
import DropDownProduct from '../nav/dropDownProduct'
import DropDownDeal from '../nav/dropDownDeal'
import DropDownRoom from '../nav/dropDownRoom'
import DropDownDeposit from '../nav/dropDownDeposit'
import DropDownRentalFee from '../nav/dropDownRentalFee'
import DropDownOption from '../nav/dropDownOption'
import './index.css';



class NavLeft extends Component {
    
    render() {

    let {dropDownProduct,dropDownDeal,dropDownRoom,dropDownDeposit,dropDownRentalFee,dropDownOption,ClickProduct,ClickDeal,ClickRoom,ClickDeposit,ClickRentalFee,ClickOption,ClickSet} =this.props
        
        let dropDown;
        if(dropDownProduct){
            dropDown=(
                    <DropDownProduct />
            )
        } else if(dropDownDeal){
            dropDown=(
                    <DropDownDeal />
            )
        } else if(dropDownRoom){
            dropDown=(
                    <DropDownRoom />
            )
        } else if(dropDownDeposit){
            dropDown=(
                    <DropDownDeposit />
            )
        } else if(dropDownRentalFee){
            dropDown=(
                    <DropDownRentalFee />
            )
        } else if(dropDownOption){
            dropDown=(
                    <DropDownOption />
            )
        }

        return (
            <div>
                <NavLeftDiv className={dropDownProduct? "navLeftDivCommon navLeftDivCommonOpen" : "navLeftDivCommon"} onClick={dropDownProduct ? ClickSet : ClickProduct} text={"매물종류"}/>
                <NavLeftDiv className={dropDownDeal? "navLeftDivCommon navLeftDivCommonOpen" : "navLeftDivCommon"} onClick={dropDownDeal ? ClickSet : ClickDeal} text={"거래종류"}/>
                <NavLeftDiv className={dropDownRoom? "navLeftDivCommon navLeftDivCommonOpen" : "navLeftDivCommon"} onClick={dropDownRoom ? ClickSet : ClickRoom} text={"방 종류"}/>
                <NavLeftDiv className={dropDownDeposit? "navLeftDivCommon navLeftDivDeposit navLeftDivCommonOpen" : "navLeftDivCommon navLeftDivDeposit"} onClick={dropDownDeposit ? ClickSet : ClickDeposit} text={"0만원 ~ 무제한"}/>
                <NavLeftDiv className={dropDownRentalFee? "navLeftDivCommon navLeftDivRentalFee navLeftDivCommonOpen" : "navLeftDivCommon navLeftDivRentalFee"} onClick={dropDownRentalFee ? ClickSet : ClickRentalFee} text={"0만원 ~ 무제한"}/>
                <NavLeftDiv className={dropDownOption? "navLeftDivCommon navLeftDivCommonOpen" : "navLeftDivCommon"} onClick={dropDownOption ? ClickSet : ClickOption} text={"추가옵션"}/>
                {dropDown}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    dropDownProduct: state.navLeftDropDownData.dropDownProduct,
    dropDownDeal : state.navLeftDropDownData.dropDownDeal,
    dropDownRoom : state.navLeftDropDownData.dropDownRoom,
    dropDownDeposit : state.navLeftDropDownData.dropDownDeposit,
    dropDownRentalFee : state.navLeftDropDownData.dropDownRentalFee,
    dropDownOption : state.navLeftDropDownData.dropDownOption
});


const mapDispatchToProps = (dispatch) => ({
    ClickProduct: () => dispatch(actions.ClickProduct()),
    ClickDeal: () => dispatch(actions.ClickDeal()),
    ClickRoom: () => dispatch(actions.ClickRoom()),
    ClickDeposit: () => dispatch(actions.ClickDeposit()),
    ClickRentalFee: () => dispatch(actions.ClickRentalFee()),
    ClickOption: () => dispatch(actions.ClickOption()),
    ClickSet: () => dispatch(actions.ClickSet()),
});

NavLeft = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavLeft);

export default NavLeft;