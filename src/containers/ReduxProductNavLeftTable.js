import ProductNavLeftTable from '../components/roomSearch/ProductNavLeftTable';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    showProduct: state.showDownData.showProduct,
    showDeal : state.showDownData.showDeal,
    showRoom : state.showDownData.showRoom,
    showDeposit : state.showDownData.showDeposit,
    showFee : state.showDownData.showFee,
    showOption : state.showDownData.showOption
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