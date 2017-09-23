import React, { Component } from 'react';
import Modal from './Modal';
import App from './App';

        class NavLogin extends Component {
            constructor(){
                super(...arguments);
                this.state = {
                    showModal : 2
                }
            }

            LoginModal(){
                this.setState({showModal: true})
            }

            close(){
                this.setState({showModal: false})
            }

            render() {
                let loginModal;
                    if(this.state.showModal==true){
                        loginModal = (
                            <Modal onClick={this.close.bind(this)}>
                                <button  onClick={this.hideModal}>Closeasdasdsadda</button>
                                <h1>safdasfsafasdfsfasfasf</h1>
                            </Modal>
                        )
                    } else if (this.state.showModal == false){
                        loginModal = null
                    }
                return(
                    <ul>
                        <li onClick={this.LoginModal.bind(this)}>
                            <a href = "#">
                                {this.props.NavLoginData.title}
                            </a>
                        </li>
                        {loginModal}
                    </ul>
                );
            }
        }
        
        export default NavLogin;