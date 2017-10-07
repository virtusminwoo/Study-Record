import ProductNavLeftTable from '../components/roomSearch/ProductNavLeftTable';
import * as actions from '../actions/dropDownActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    showProduct: state.dropDownData.showProduct,
    showDeal : state.dropDownData.showDeal,
    showRoom : state.dropDownData.showRoom,
    showDeposit : state.dropDownData.showDeposit,
    showFee : state.dropDownData.showFee,
    showOption : state.dropDownData.showOption
});


const mapDispatchToProps = (dispatch) => ({
    ClickProduct: () => dispatch(actions.ClickProduct()),
    ClickDeal: () => dispatch(actions.ClickDeal()),
    ClickRoom: () => dispatch(actions.ClickRoom()),
    ClickDeposit: () => dispatch(actions.ClickDeposit()),
    ClickFee: () => dispatch(actions.ClickFee()),
    ClickOption: () => dispatch(actions.ClickOption()),
    ClickSet: () => dispatch(actions.ClickSet()),
});

const ReduxProductNavLeftTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductNavLeftTable);


export default ReduxProductNavLeftTable;