import NavLogin from '../components/NavLogin';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    showModal: state.modalData.showModal
});


const mapDispatchToProps = (dispatch) => ({
    OpenModal: () => dispatch(actions.OpenModal()),
    CloseModal: () => dispatch(actions.CloseModal())
});

const ReduxNavLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavLogin);


export default ReduxNavLogin;