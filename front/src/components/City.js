import React from 'react';


const City = ({ city }) => {
    return (
        <div className="City">
            <div className="img_city">
                <img src={`https://allwebsite.ovh/${city.filename}`} width="true" alt={`Ville de ${city.name}`} />
            </div>
            <div className="info">
                <div>
                    <div className="flex flex-space-between">
                        <p>{city.budget}€</p>
                        <p>{city.temperature}°C</p>
                    </div>
                    <p className="name">{city.name} - {city.country_name}</p>

                    <p className="description">{city.description}</p>
                </div>
            </div>
        </div>
    )
}

export default City;