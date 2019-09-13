import React from 'react';

const City = ({ city }) => {
    return (
        <div className="City">
            <img src={`https://allwebsite.ovh/${city.filename}`} width alt ="Photo de la ville"/>
            <div>
                <p>{city.budget}€</p>
            </div>
            <div className="info">
                <p>{city.name} - {city.country_name}</p>
                <p>{city.temperature}°C</p>
                <p>{city.description}</p>
            </div>
        </div>
    )
}

export default City;