import NavLogin from '../components/NavLogin';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    showModal: state.showModal
});


const mapDispatchToProps = (dispatch) => ({
    OpenModal: () => dispatch(actions.OpenModal()),
    CloseModal: () => dispatch(actions.CloseModal())
});

const ContainerNavLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavLogin);


export default ContainerNavLogin;