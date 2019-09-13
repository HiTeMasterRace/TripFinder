import React, { Component } from 'react';

import axios from 'axios';

import Header from './Header';
import FilterForm from './FilterForm';
import City from './City';

import './../assets/css/App.css';

class App extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    this.getCities()
  }

  getCities() {
    axios({
      method: "GET",
      url: "https://allwebsite.ovh/api/cities",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          const cities = res.data

          this.setState({ cities })
        }
      })
  }

  render() {
    return (
      <div className="App">
        <div className="vertical-center">
          <div className="banner">
            <Header />
            <div className="pos">
              <h1>Trip Finder</h1>
              <FilterForm />
              <div id="container_cities">
                {this.state.cities.map(city => <City key={city.id} city={city} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;