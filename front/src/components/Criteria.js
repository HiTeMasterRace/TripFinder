import React, { Component } from 'react';

import budget from '../assets/images/budget.png'

class Criteria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            criteria: ["Budget", "Type", "Lieu", "Température"]
        };
    }

    handleSelect(criteria) {
        console.log(criteria)
    }

    renderIcon(criteria) {
        switch (criteria) {
            case "Budget": return <img src={budget} alt={criteria} />
            case "Type": return <img src={budget} alt={criteria} />
            case "Lieu": return <img src={budget} alt={criteria} />
            case "Température": return <img src={budget} alt={criteria} />
            default: return null
        }
    }

    //: culture, sport, montagne, mer, vie nocture

    render() {
        const { criteria } = this.state

        return (
            <div className="Criteria">
                {criteria.map((value, index) => (
                    <div key={index} className="OneCriteria" onClick={() => this.props.handle("criteria", value)}>
                        {this.renderIcon(value)}
                        <p>{value}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Criteria;