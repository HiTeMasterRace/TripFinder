import React, { Component } from 'react';

import axios from 'axios';

import Video from './Video';
import Modal from './Modal';
import FilterForm from './FilterForm';
import City from './City';
import ModalAdmin from './ModalAdmin'

import URL_API from '../constant/url'

import './../assets/css/App.css';

const token = localStorage.getItem("token")

class App extends Component {
  state = {
    cities: [],
    city: {},
    continents: [],
    countries: [],
    is_admin: 0,
    name: "",
    openModal: ""
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
      url: `${URL_API}/me`,
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

          this.setState({ name, is_admin })
        }
      })
      .catch(err => console.log(err))
  }

  getCities = () => {
    axios({
      method: "GET",
      url: `${URL_API}/cities`,
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
      url: `${URL_API}/countries`,
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

          this.sortElements(countries)

          this.setState({ countries })
        }
      })
  }

  getContinents() {
    axios({
      method: "GET",
      url: `${URL_API}/continents`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.status === 200) {
          const continents = res.data

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

  openModalFunc = (action) => {
    if (!action) {
      this.setState({
        city: {}
      })
    }

    document.querySelector('.active_back')
        ? document.querySelector('.active_back').classList.remove('active_back')
        : document.querySelector('.back-modal').classList.add('active_back')

    this.setState({ openModal: action })
  }

  handleEdit = (city_id) => {
    const city = this.state.cities.find(city => city.id === city_id)

    this.setState({ city })

    this.openModalFunc("edit")
  }

  handleDelete = (city_id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette ville ?")) {
      axios({
        method: "DELETE",
        url: `${URL_API}/cities/${city_id}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
        .then(res => {
          alert("La ville a été supprimée")

          return window.location.reload()
        })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="back-modal"></div>
        <div className="vertical-center">
          <div className="banner">
            {/* <Video /> */}
            <div className="pos">
              <div className="flex flex-space-between">
                <Modal name={this.state.name} />
                {this.state.is_admin === 1 && <ModalAdmin is_admin={this.state.is_admin} openModal={this.state.openModal} openModalFunc={this.openModalFunc} countries={this.state.countries} city={this.state.city} />}
              </div>
              <h1>Trip Finder</h1>
              <FilterForm handleSearch={this.handleSearch} countries={this.state.countries} continents={this.state.continents} />
              <div id="container_cities">
                {this.state.cities.map(city => <City key={city.id} city={city} is_admin={this.state.is_admin} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;