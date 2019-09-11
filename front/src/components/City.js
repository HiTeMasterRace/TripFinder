import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    getAllCity() {
        //...
    }


    setNameCity() {

    }

    render() {
        return (
            <div className="City">
                {this.props.cityname && <p>{this.props.cityname}</p>}
            </div>
        );
    }
}

export default City;