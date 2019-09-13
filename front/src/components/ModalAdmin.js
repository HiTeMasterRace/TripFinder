import React, { Component } from 'react';

import axios from 'axios';

class ModalAdmin extends Component {
    state = {
        openModal: "",
        country_id: 0,
        city_id: 0,
        name: "",
        budget: 0,
        temp: 0,
        description: "",
        location: "",
        filename: ""
    };

    componentDidUpdate(prevProps, prevState) {
        if (Object.keys(this.props.city).length > 0 && this.props.city.name !== prevState.name) this.editPlaceholder(this.props.city)
    }

    editPlaceholder = (city) => {
        const country_id = this.props.countries.find(country => country.name === city.country_name).id

        this.setState({
            country_id,
            city_id: city.id,
            name: city.name,
            budget: city.budget,
            temp: city.temperature,
            description: city.description,
            location: city.location
        })
    }

    openModalFunc = () => {
        this.setState({
            country: "",
            name: "",
            budget: 0,
            temp: 0,
            description: "",
            location: "",
            filename: ""
        })

        this.props.openModalFunc("")
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        console.log(name, value)

        this.setState({
            [name]: value
        })
    };

    handleSubmit = (e) => {
        const token = localStorage.getItem("token")

        let data = {
            country_id: this.state.country_id,
            name: this.state.name,
            budget: this.state.budget,
            temperature: this.state.temp,
        }

        if (this.state.description) data = { ...data, description: this.state.description }

        if (this.state.location) data = { ...data, location: this.state.location }

        if (this.state.filename) data = { ...data, description: this.state.filename }

        if (this.props.openModal === "create") {
            axios({
                method: "POST",
                url: "https://allwebsite.ovh/api/cities",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data
            })
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data)
                    }
                })
        } else if (this.props.openModal === "edit") {
            axios({
                method: "PATCH",
                url: `https://allwebsite.ovh/api/cities/${this.state.city_id}`,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data
            })
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data)
                    }
                })
        }
    }

    renderSubmitButton = () => {
        if (this.props.openModal === "create") return <input type="submit" value="Ajouter la ville" />
        else if (this.props.openModal === "edit") return <input type="submit" value="Modifier la ville" />
    }

    render() {
        return (
            <div>
                <p className="log" onClick={() => this.props.openModalFunc("create")} >
                    Ajout d'une ville
                </p>

                {this.props.openModal &&
                    <div id="modal">
                        <div className="btn_close" onClick={() => this.openModalFunc()}>&times;</div>
                        <form onSubmit={this.handleSubmit}>
                            <select name="country_id" value={this.state.country_id} onChange={this.handleChange}>
                                <option value="">Sélectionner un pays</option>
                                {this.props.countries.map(country => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                            <br />
                            <input type="text" required name="name" placeholder="Le nom de la ville" value={this.state.name} onChange={this.handleChange} />
                            <br />
                            <input type="number" required name="budget" placeholder="Le budget moyen" min={0} value={this.state.budget} onChange={this.handleChange} />
                            <br />
                            <input type="number" required name="temp" placeholder="La température moyenne" value={this.state.temp} onChange={this.handleChange} />
                            <br />
                            <input type="textarea" name="description" placeholder="La description" value={this.state.description} onChange={this.handleChange} />
                            <br />
                            <input type="text" name="location" placeholder="Les coordonnées GPS" value={this.state.location} onChange={this.handleChange} />
                            <br />
                            <input type="file" name="filename" value={this.state.filename} onChange={this.handleChange} />
                            <br />
                            {this.renderSubmitButton()}
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default ModalAdmin;