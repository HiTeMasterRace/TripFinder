import React from 'react';

import './../assets/css/City.css';

import edit from '../assets/images/iconedit.png';
import remove from '../assets/images/icondelete.png';

const City = ({ city, is_admin, handleEdit, handleDelete }) => {
    return (
        <div className="City">
            <div className="img_city">
                <img src={`https://allwebsite.ovh/${city.filename}`} width="true" alt={`Ville de ${city.name}`} />
            </div>
            <div className="info">
                <div className="content">
                    {is_admin === 1 &&
                        <div className="panel_action">
                            <img className="edit_city" src={edit} alt="Modifier la ville" onClick={() => handleEdit(city.id)} title="Modifier cette ville" />
                            <img className="remove_city" src={remove} alt="Modifier la ville" onClick={() => handleDelete(city.id)} title="Supprimer cette ville" />
                        </div>
                    }
                    <div className="flex flex-space-between">
                        <p>{city.budget}€</p>
                        <p>{city.temperature}°C</p>
                    </div>
                    <p className="name">{city.name} - {city.country_name}</p>

                    <p>{city.description}</p>
                </div>
            </div>
        </div>
    )
}

export default City;