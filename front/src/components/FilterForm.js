import React, { Component } from 'react';

import axios from 'axios';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

import mountain from '../assets/images/mountain.png'
import sea from '../assets/images/sea.png'
import culture from '../assets/images/culture.png'
import party from '../assets/images/party.png'
import sport from '../assets/images/sport.png'
import iconhot from '../assets/images/iconhot.png'
import iconcold from '../assets/images/iconcold.png'
import bourse from '../assets/images/iconbourse.png'
import temp from '../assets/images/icontemp.png'

const Range = Slider.Range

class FilterForm extends Component {
    state = {
        continent: "",
        country: "",
        type: "",
        minBudget: 10,
        maxBudget: 1000,
        minTemp: -10,
        maxTemp: 35,
    }

    switchForm = (critere) => {
        const elemUL = document.querySelector('.ul_carousel');
        const elemLI = document.querySelector('.li_' + critere);
        const pos = parseInt(elemLI.getAttribute('data-position'));
        document.querySelector('.item_focus').classList.remove('item_focus')
        document.querySelector('.item_' + critere).classList.add('item_focus')
        elemUL.style.transform = "translateX(-" + pos * elemLI.offsetWidth + "px)";
    }

    reverse = () => {
        document.querySelector('.btn_find').classList.remove('clicked');
    }

    send = () => {
        const { minBudget, maxBudget, minTemp, maxTemp, country, continent, type } = this.state

        const token = localStorage.getItem("token")

        let URL_API = `https://allwebsite.ovh/api/search?minTmp=${minTemp}&maxTmp=${maxTemp}&minBudget=${minBudget}&maxBudget=${maxBudget}`

        if (country) URL_API += `&country=${country}`

        if (continent) URL_API += `&continent=${continent}`

        if (type) URL_API += `&type=${type}`

        axios({
            method: "GET",
            url: URL_API,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    const cities = res.data
                    document.querySelector('.btn_find').classList.add('clicked');
                    setTimeout(() => this.reverse(), 5000);
                    this.props.handleSearch(cities)
                }
            })
            .catch(err => {
                alert("Vous devez être connecté pour pouvoir faire une recherche")
            })
    }

    handle = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    handleType = (e) => {
        const value = e.target.name
        var img = document.querySelector('.img_focus');

        if (img) img.classList.remove('img_focus')

        e.target.classList.add('img_focus')

        this.setState({
            type: value
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
            <div id="container_filter_form">
                <div className="containerCarousel">
                    <div className="container_item">
                        <div onClick={() => this.switchForm("price")} className="item_price item_focus">Prix</div>
                        <div onClick={() => this.switchForm("place")} className="item_place">Lieux</div>
                        <div onClick={() => this.switchForm("temp")} className="item_temp">Température</div>
                        <div onClick={() => this.switchForm("type")} className="item_type">Type de voyage</div>
                    </div>
                    <div className="carousel_wrapper">
                        <ul className="ul_carousel">
                            <li className="li_price active" data-position="0">
                                <p>Quel est votre budget ?</p>
                                <div className="slider_budget">
                                    <Range defaultValue={[10, 1000]} min={10} max={1000} onChange={this.handleBudget} />
                                </div>
                                <p><img src={bourse} alt="Bourse" width="35" height="auto" /> {this.state.minBudget}€ et {this.state.maxBudget}€</p>
                            </li>
                            <li className="li_place" data-position="1">
                                <p>Ou souhaitez-vous aller ?</p>
                                <select name="continent" onChange={this.handle}>
                                    <option value="">Sélectionner un continent</option>
                                    {this.props.continents.map(continent => (
                                        <option key={continent.id} value={continent.name}>
                                            {continent.name}
                                        </option>
                                    ))}
                                </select>
                                <select name="country" onChange={this.handle}>
                                    <option value="">Sélectionner un pays</option>
                                    {this.props.countries.map(country => (
                                        <option key={country.id} value={country.name}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </li>
                            <li className="li_temp" data-position="2">
                                <p>Quelle serait la température idéale ?</p>
                                <div className="slider_temp">
                                    <img src={iconcold} alt="Fraicheur" />
                                    <Range defaultValue={[-10, 35]} min={-10} max={35} onChange={this.handleTemp} />
                                    <img src={iconhot} alt="Chaleur" />
                                </div>
                                <p><img src={temp} alt="Température" width="35" height="auto" />{this.state.minTemp}°C et {this.state.maxTemp}°C</p>
                            </li>
                            <li className="li_type" data-position="3">
                                <p>Quel type de voyage recherchez-vous ?</p>
                                <div className="container">
                                    <img className="img_type" src={mountain} name="montagne" alt="Montagne" onClick={this.handleType} />
                                    <img className="img_type" src={sea} name="plage" alt="plage" onClick={this.handleType} />
                                    <img className="img_type" src={culture} name="culture" alt="Culture" onClick={this.handleType} />
                                    <img className="img_type" src={party} name="vie nocturne" alt="Vie nocturne" onClick={this.handleType} />
                                    <img className="img_type" src={sport} name="sport" alt="Sport" onClick={this.handleType} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="btn_find" onClick={this.send}>
                    <p>Rechercher</p>
                    <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                        <path id="paper-plane-icon" d="M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z M202.992,332.528v124.517l58.738-67.927L202.992,332.528z"></path>
                    </svg>
                </button>
            </div>
        );
    }
}

export default FilterForm;