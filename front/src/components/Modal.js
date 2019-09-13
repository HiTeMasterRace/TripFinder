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
                        localStorage.removeItem("name");
                    }
                })
        }
    }

    render() {
        const name = localStorage.getItem("name")

        if (!token) return (
            <div>
                <p onClick={() => this.setState({ openModal: !this.state.openModal })} style={{ cursor: "pointer", userSelect: "none", color: "white" }}>
                    Connexion/Inscription
                </p>

                {this.state.openModal &&
                    <div style={{ backgroundColor: "white", width: "200px", padding: "15px", position: "absolute" }}>
                        {this.renderType()}
                    </div>
                }
            </div>
        )
        else return (
            <p onClick={this.handleLogout} style={{ cursor: "pointer", userSelect: "none", color: "white" }}>Bienvenue, {name}</p>
        )
    }
}

export default Modal;