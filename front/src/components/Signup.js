import React, { Component } from 'react';

import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            password: ""
        };
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: "POST",
            url: "http://localhost:8000/api/users",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json"
            },
            data: {
                "email": this.state.email,
                "name": this.state.name,
                "password": this.state.password,
            }
        })
            .then(res => {
                if (res.status === 201) return window.location.reload()
            })
            .catch(err => console.log(err.response))
    }

    render() {
        return (
            <div className="vertical-center">
                <form onSubmit={this.handleSubmit}>
                    <input type="mail" required name="email" placeholder="Votre email" value={this.state.email} onChange={this.handleChange} />
                    <br />
                    <input type="text" required name="name" placeholder="Votre nom" value={this.state.name} onChange={this.handleChange} />
                    <br />
                    <input type="password" required name="password" placeholder="Votre mot de passe" value={this.state.password} onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Inscription" />
                </form>
                <p className="link" onClick={() => this.props.onTypeChange("login")} style={{ cursor: "pointer", userSelect: "none" }}>Déjà un compte ? <u>Se connecter</u></p>
            </div>
        );
    }
}

export default Signup;