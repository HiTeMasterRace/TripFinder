import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
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
        e.preventDefault()

        axios({
            method: "POST",
            url: "https://31579322.ngrok.io/api/login",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data: {
                "email": this.state.email,
                "password": this.state.password
            }
        })
            .then(res => {
                if (res.status === 200) {
                    console.log(res)

                    const token = res.data.access_token

                    localStorage.setItem("token", token)

                    this.setState({ email: "", password: "" })
                }
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" required name="email" placeholder="Votre email" value={this.state.email} onChange={this.handleChange} />
                    <br />
                    <input type="password" required name="password" placeholder="Votre mot de passe" value={this.state.password} onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Connexion" />
                </form>
                <p onClick={() => this.props.onTypeChange("signup")} style={{ cursor: "pointer", userSelect: "none" }}>Pas encore inscrit ? S'inscrire</p>
            </div>
        );
    }
}

export default Login;