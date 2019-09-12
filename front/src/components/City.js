import React from 'react';

const City = ({ city }) => {
    return (
        <div className="City" style={{ backgroundImage: `url(https://allwebsite.ovh/${city.filename})`, width: "100%", height: "auto" }}>
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