import React, { Component } from 'react';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

const Range = Slider.Range

class FilterForm extends Component {
    state = {
        continents: [],
        countries: []
    }

    switchForm = (critere) => {
        console.log(critere);
        const elemUL = document.querySelector('.ul_carousel');
        const elemLI = document.querySelector('.li_' + critere);
        const pos = parseInt(elemLI.getAttribute('data-position'));
        document.querySelector('.active').classList.remove('active');

        elemLI.classList.add('active');
        elemUL.style.transform = "translateX(-" + pos * 300 + "px)";


    }
    render() {
        return (
            <div className="containerCarousel">
                <h1>Trip Finder</h1>
                <div className="container_item">
                    <div onClick={() => this.switchForm("price")}>Prix</div>
                    <div onClick={() => this.switchForm("place")}>Lieux</div>
                    <div onClick={() => this.switchForm("temp")}>Température</div>
                    <div onClick={() => this.switchForm("type")}>Type de voyage</div>
                </div>
                <div className="carousel_wrapper">
                    <ul className="ul_carousel">
                        <li className="li_price active" data-position="0">
                            <Range min={this.props.budget[0]} max={this.props.budget[1]} onChange={this.props.handleRange} />
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
                            <Range min={this.props.temp[0]} max={this.props.temp[1]} onChange={this.props.handleRange} />
                        </li>
                        <li className="li_type" data-position="3"></li>
                    </ul>
                </div>
                <button className="btn_find">Rechercher</button>
            </div>
        );
    }
}

export default FilterForm;