import React, { Component } from 'react';

import Login from './Login'
import Signup from './Signup'

class Modal extends Component {
    state = {
        hasToken: false,
        openModal: false
    };

    render() {
        if (!this.state.hasToken) return (
            <div>
                <p onClick={() => this.setState({ openModal: !this.state.openModal })} style={{ cursor: "pointer", userSelect: "none", color: "white" }}>
                    Connexion/Inscription
                </p>

                {this.state.openModal &&
                    <div style={{ backgroundColor: "white", width: "200px", padding: "15px", position: "absolute" }}>
                        <Signup />
                    </div>
                }
            </div>
        )
        else return (
            <p>Bienvenue, ?</p>
        )
    }
}

export default Modal;