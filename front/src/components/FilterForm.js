import React, { Component } from 'react';

import Slider from 'rc-slider';

import budget from '../assets/images/budget.png'
import temperature from '../assets/images/temperature.png'
import place from '../assets/images/place.png'
import type from '../assets/images/type.png'

import 'rc-slider/assets/index.css';

const Range = Slider.Range

class FilterForm extends Component {
    state = {
        continents: [],
        countries: [],
        minBudget: 10,
        maxBudget: 1000,
        minTemp: -10,
        maxTemp: 35,
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

    send(){
       
            document.querySelector('.btn_find').classList.add('clicked');
            
          
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

    //: culture, sport, montagne, mer, vie nocture

    render() {
        return (
            <div>
            <div className="containerCarousel">
                <header>
                    <div className="arrw"></div>
                    <div className="search_bar"></div>
                </header>
                <h1>Trip Browser</h1>
                <div className="container_item">
                    <div onClick={() => this.switchForm("price")}>Budget</div>
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
                            <select name="continents" onChange={this.props.handle}>
                                <option value="">Sélectionner un continent</option>
                                {this.state.continents.map((continent, index) => (
                                    <option key={index} value={continent}>
                                        {continent}
                                    </option>
                                ))}
                            </select>
                            <select name="country" onChange={this.props.handle}>
                                <option value="">Sélectionner un pays</option>
                                {this.state.countries.map((country, index) => (
                                    <option key={index} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </li>
                        <li className="li_temp" data-position="2">
                            <Range defaultValue={[-10, 35]} min={-10} max={35} onChange={this.handleTemp} />
                            <p>{this.state.minTemp}°C -> {this.state.maxTemp}°C</p>
                        </li>
                        <li className="li_type" data-position="3">
                            culture, sport, montagne, mer, vie nocture
                        </li>
                    </ul>
                </div>
            </div>
            <button className="btn_find" onClick={this.send}>
                <p>Rechercher</p>
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512"><path id="paper-plane-icon" d="M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z
M202.992,332.528v124.517l58.738-67.927L202.992,332.528z"></path> </svg>
            </button>
        </div>
        );
    }
}

export default FilterForm;