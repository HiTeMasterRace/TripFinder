import React from 'react';

const PaperPlane = ({ continent, country, minBudget, maxBudget, minTemp, maxTemp }) => {
    return (
        <div className="PaperPlane">
            <p>{continent}</p>
            <p>{country}</p>
            <p>{minBudget}</p>
            <p>{maxBudget}</p>
            <p>{minTemp}</p>
            <p>{maxTemp}</p>
        </div>
    )
}

export default PaperPlane