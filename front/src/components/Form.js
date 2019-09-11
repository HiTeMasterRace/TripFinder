import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: { min: 10, max: 1000 },
            continents: [],
            countries: []
        };
    }

    render() {
        switch (this.props.criteria) {
            case "Budget":
                return (
                    <form>
                        {/* <InputRange
                            minValue={10}
                            maxValue={1000}
                            value={this.state.budget}
                            formatLabel={budget => `${budget}€`}
                            onChange={budget => this.setState({ budget })}
                            onChangeComplete={budget => console.log(budget)}
                        /> */}
                    </form>
                );
            case "Lieu":
                return (
                    <form>
                        <select name="continents" onChange={this.handleChange}>
                            <option value="">Sélectionner un continent</option>
                            {this.state.continents.map((continent, index) => (
                                <option key={index} value={continent}>
                                    {continent}
                                </option>
                            ))}
                        </select>
                        <select name="country" onChange={this.handleChange}>
                            <option value="">Sélectionner un pays</option>
                            {this.state.countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </form>
                );
            case "Température":
                return (
                    <form>
                        <input type="range" name="tempMin" min="-10" />
                        <input type="range" name="tempMax" max="35" />
                    </form>
                );
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