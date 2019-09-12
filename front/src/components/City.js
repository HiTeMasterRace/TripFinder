import React from 'react';

const City = ({ city }) => {
    return (
        <div className="City">
            <div>
                <p>{city.budget}€</p>
            </div>
            <p>{city.name} - {city.country_name}</p>
            <p>{city.temperature}°C</p>
            <p>{city.description}</p>
        </div>
    )
}

export default City;