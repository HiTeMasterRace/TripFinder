import React, { Component } from 'react';

import budget from '../assets/images/budget.png'

class Criteria extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderIcon(criteria) {
        switch (criteria) {
            case "budget": return <img src={budget} alt={criteria} />
            // case "continent": return <img src={budget} alt={criteria} />
            default: return null
        }
    }

    render() {
        const { criteria } = this.props

        return (
            <div className="Criteria">
                {this.renderIcon(criteria)}
                <p>{criteria}</p>
            </div>
        );
    }
}

export default Criteria;