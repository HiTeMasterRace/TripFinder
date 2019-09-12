import React, { Component } from 'react';

import axios from 'axios';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

import City from './City';

import mountain from '../assets/images/mountain.png'
import sea from '../assets/images/sea.png'
import culture from '../assets/images/culture.png'
import party from '../assets/images/party.png'
import sport from '../assets/images/sport.png'

const Range = Slider.Range

class FilterForm extends Component {
    state = {
        cities: [],
        continents: [],
        continent: "",
        countries: [],
        country: "",
        minBudget: 10,
        maxBudget: 1000,
        minTemp: -10,
        maxTemp: 35,
    }

    componentDidMount() {
        this.getCities()
        this.getCountries()
        this.getContinents()
    }

    getCities() {
        axios({
            method: "GET",
            url: "https://allwebsite.ovh/api/cities",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json"
            }
        })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)

                    const cities = res.data

                    this.setState({ cities })
                }
            })
    }

    getCountries() {
        axios({
            method: "GET",
            url: "https://allwebsite.ovh/api/countries",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.status === 200) {
                    const countries = res.data

                    countries.sort()

                    this.setState({ countries })
                }
            })
    }

    getContinents() {
        axios({
            method: "GET",
            url: "https://allwebsite.ovh/api/continents",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.status === 200) {
                    let continents = res.data

                    continents.sort()

                    this.setState({ continents })
                }
            })
    }

    switchForm = (critere) => {
        console.log(critere);
        const elemUL = document.querySelector('.ul_carousel');
        const elemLI = document.querySelector('.li_' + critere);
        const pos = parseInt(elemLI.getAttribute('data-position'));
        document.querySelector('.active').classList.remove('active');

        elemLI.classList.add('active');
        elemUL.style.transform = "translateX(-" + pos * elemLI.offsetWidth + "px)";
    }

    handle = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    send = () => {
        document.querySelector('.btn_find').classList.add('clicked');

        const { minBudget, maxBudget, minTemp, maxTemp, country, continent } = this.state

        let URL_API = `https://allwebsite.ovh/api/search?minTmp=${minTemp}&maxTmp=${maxTemp}&minBudget=${minBudget}&maxBudget=${maxBudget}`

        if (country) URL_API += `&country=${country}`

        if (continent) URL_API += `&continent=${continent}`

        axios({
            method: "GET",
            url: URL_API,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                }
            })
    }

    handleBudget = (value) => {
        this.setState({
            minBudget: value[0],
            maxBudget: value[1],
        })
    }

    handleTemp = (value) => {
        this.setState({
            minTemp: value[0],
            maxTemp: value[1],
        })
    }

    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container_video">
                        <video width="" height="" autoPlay muted loop id="bgvid">
                            <source src="https://allwebsite.ovh/video-back.mp4" type="video/webm" />
                        </video>
                    </div>
                    <div className="pos">
                        <h1>Trip Finder</h1>
                        <div className="containerCarousel">
                            <div className="container_item">
                                <div onClick={() => this.switchForm("price")}>Prix</div>
                                <div onClick={() => this.switchForm("place")}>Lieux</div>
                                <div onClick={() => this.switchForm("temp")}>Température</div>
                                <div onClick={() => this.switchForm("type")}>Type de voyage</div>
                            </div>
                            <div className="carousel_wrapper">
                                <ul className="ul_carousel">
                                    <li className="li_price active" data-position="0">
                                        <Range defaultValue={[10, 1000]} min={10} max={1000} onChange={this.handleBudget} />
                                        <p>{this.state.minBudget}€ -> {this.state.maxBudget}€</p>
                                    </li>
                                    <li className="li_place" data-position="1">
                                        <select name="continent" onChange={this.handle}>
                                            <option value="">Sélectionner un continent</option>
                                            {this.state.continents.map(continent => (
                                                <option key={continent.id} value={continent.name}>
                                                    {continent.name}
                                                </option>
                                            ))}
                                        </select>
                                        <select name="country" onChange={this.handle}>
                                            <option value="">Sélectionner un pays</option>
                                            {this.state.countries.map(country => (
                                                <option key={country.id} value={country.name}>
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    </li>
                                    <li className="li_temp" data-position="2">
                                        <Range defaultValue={[-10, 35]} min={-10} max={35} onChange={this.handleTemp} />
                                        <p>{this.state.minTemp}°C -> {this.state.maxTemp}°C</p>
                                    </li>
                                    <li className="li_type" data-position="3">
                                        <img className="img_type" src={mountain} alt="Montagne" onClick={this.handleSelect} />
                                        <img className="img_type" src={sea} alt="Mer" onClick={this.handleSelect} />
                                        <img className="img_type" src={culture} alt="Culture" onClick={this.handleSelect} />
                                        <img className="img_type" src={party} alt="Vie nocturne" onClick={this.handleSelect} />
                                        <img className="img_type" src={sport} alt="Sport" onClick={this.handleSelect} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn_find" onClick={this.send}>
                    <p>Rechercher</p>
                    <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                        <path id="paper-plane-icon" d="M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z M202.992,332.528v124.517l58.738-67.927L202.992,332.528z"></path>
                    </svg>
                </button>
                <div id="container_cities">
                    {this.state.cities.map(city => <City key={city.id} city={city} />)}
                </div>
            </div>
        );
    }
}

export default FilterForm;