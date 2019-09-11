import React, { Component } from 'react';

class FilterForm extends Component {
    switchForm = (critere) => {
        console.log(critere);
        const elemUL = document.querySelector('.ul_carousel');
        const elemLI = document.querySelector('.li_' + critere);
        const pos = parseInt(elemLI.getAttribute('data-position'));
        document.querySelector('.active').classList.remove('active');

        elemLI.classList.add('active');
        elemUL.style.transform = "translateX(-" + pos * 100 + "px)";


    }
    render() {
        return (
            <div className="containerCarousel">
                <h1>Trip Finder</h1>
                <div className="container_item">
                    <div onClick={() => this.switchForm("price")}>Prix</div>
                    <div onClick={() => this.switchForm("place")}>Lieux</div>
                    <div onClick={() => this.switchForm("temp")}>Température</div>
                    <div onClick={() => this.switchForm("type")}>Type de voyage</div>
                </div>
                <div className="carousel_wrapper">
                    <ul className="ul_carousel">
                        <li className="li_price active" data-position="0"></li>
                        <li className="li_place" data-position="1"></li>
                        <li className="li_temp" data-position="2"></li>
                        <li className="li_type" data-position="3"></li>
                    </ul>
                </div>
                <button className="btn_find">Rechercher</button>
            </div>
        );
    }
}

export default FilterForm;