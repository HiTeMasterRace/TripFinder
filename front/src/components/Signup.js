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
        e.preventDefault()

        axios({
            method: "POST",
            url: "https://e7fda28f.ngrok.io/api/users",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json"
            },
            data: {
                email: this.state.email,
                name: this.state.name,
                password: this.state.password,
            }
        })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                }
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="mail" required name="email" value={this.state.email} onChange={this.handleChange} />
                <br />
                <input type="text" required name="name" value={this.state.name} onChange={this.handleChange} />
                <br />
                <input type="password" required name="password" value={this.state.password} onChange={this.handleChange} />
                <br />
                <input type="submit" value="S'inscrire" />
            </form>
        );
    }
}

export default Signup;