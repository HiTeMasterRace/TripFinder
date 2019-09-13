import React, { Component } from 'react';
import axios from 'axios'

import Login from './Login'
import Signup from './Signup'

const token = localStorage.getItem("token")

class Modal extends Component {
    state = {
        hasToken: false,
        openModal: false,
        type: "signup"
    };

    renderType = () => {
        const { type } = this.state

        if (type === "signup") return <Signup onTypeChange={this.handleTypeChange} />
        else if (type === "login") return <Login onTypeChange={this.handleTypeChange} />
    }

    handleTypeChange = (type) => {
        this.setState({ type })
    }

    openModalFunc = () => {
        this.setState({ openModal: !this.state.openModal })
        document.querySelector('.active_back') ? document.querySelector('.active_back').classList.remove('active_back') : document.querySelector('.back-modal').classList.add('active_back')

    }

    handleLogout = () => {
        if (window.confirm("Êtes-vous sûr de vous déconnecter ?")) {
            axios({
                method: "POST",
                url: "https://allwebsite.ovh/api/logout",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        localStorage.removeItem("token");
                    }
                })
                .catch(err => {
                    localStorage.removeItem("token");
                })
        }
    }

    render() {
        const { name } = this.props

        if (!token) return (
            <div>
                <p className="log" onClick={() => this.openModalFunc()}>
                    Connexion/Inscription
                </p>

                {this.state.openModal &&
                    <div id="modal">
                        <div className="btn_close" onClick={() => this.openModalFunc()}>&times;</div>
                        {this.renderType()}
                    </div>
                }
            </div>
        )
        else return (
            <p className="log" onClick={this.handleLogout}>Bienvenue, {name} (déconnectez-vous)</p>
        )
    }
}

export default Modal;