import React, { Component } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

const Range = Slider.Range

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            continents: [],
            countries: []
        };
    }

    render() {
        switch (this.props.criteria) {
            case "Budget":
                return <Range defaultValue={this.props.budget} value={this.props.budget} onChange={this.props.handleRange} />
            case "Lieu":
                return (
                    <div>
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
                    </div>
                );
            case "Température":
                return <Range temp={this.props.temp} onChange={this.props.handleRange} />
            case "Type":
                return (
                    <form>

                    </form>
                );
            default: return null
        }
    }
}

export default Form;