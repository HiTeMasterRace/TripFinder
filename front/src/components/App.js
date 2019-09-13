import React, { Component } from 'react';

import axios from 'axios';

import Video from './Video';
import Modal from './Modal';
import FilterForm from './FilterForm';
import City from './City';
import ModalAdmin from './ModalAdmin'

import './../assets/css/App.css';

const token = localStorage.getItem("token")

class App extends Component {
  state = {
    cities: [],
    continents: [],
    countries: [],
    is_admin: 0
  };

  componentDidMount() {
    this.getUser()
    this.getCities()
    this.getCountries()
    this.getContinents()
  }

  getUser = () => {
    axios({
      method: "GET",
      url: "https://31579322.ngrok.io/api/me",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data)
          const name = res.data.name
          const is_admin = res.data.is_admin

          localStorage.setItem("name", name)
          this.setState({ is_admin })
        }
      })
  }

  getCities = () => {
    axios({
      method: "GET",
      url: "https://31579322.ngrok.io/api/cities",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          const cities = res.data

          this.setState({ cities })
        }
      })
  }

  getCountries() {
    axios({
      method: "GET",
      url: "https://31579322.ngrok.io/api/countries",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.status === 200) {
          const countries = res.data

          console.log(countries)

          this.sortElements(countries)

          this.setState({ countries })
        }
      })
  }

  getContinents() {
    axios({
      method: "GET",
      url: "https://31579322.ngrok.io/api/continents",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.status === 200) {
          let continents = res.data

          this.sortElements(continents)

          this.setState({ continents })
        }
      })
  }

  sortElements = (array) => {
    array.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })

    return array
  }

  handleSearch = (cities) => {
    this.setState({ cities })
  }

  render() {
    return (
      <div className="App">
        <div className="back-modal"></div>
        <div className="vertical-center">
          <div className="banner">
            <Video />
            <div className="pos">
              <Modal />
              <h1>Trip Finder</h1>
              <FilterForm handleSearch={this.handleSearch} countries={this.state.countries} continents={this.state.continents} />
              <div id="container_cities">
                {this.state.cities.map(city => <City key={city.id} city={city} />)}
              </div>
              {this.state.is_admin === 1 && <ModalAdmin is_admin={this.state.is_admin} countries={this.state.countries} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;