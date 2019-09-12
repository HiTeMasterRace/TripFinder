import React, { Component } from 'react';

import './../assets/css/App.css';

//import PaperPlane from './PaperPlane';
// import Criteria from './Criteria';
// import Form from './Form';

import FilterForm from './FilterForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      criteria: "",
      continent: "",
      country: "",
      minBudget: 0,
      maxBudget: 0,
      minTemp: 0,
      maxTemp: 0,
    };
  }

  handle = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        {/* <PaperPlane continent={this.state.continent} country={this.state.country} minBudget={this.state.minBudget} maxBudget={this.state.maxBudget} minTemp={this.state.minTemp} maxTemp={this.state.maxTemp} /> */}

        <div className="vertical-center">
          <FilterForm criteria={this.state.criteria} budget={this.state.budget} temp={this.state.temp} handle={this.handle} handleBudget={this.handleBudget} handleTemp={this.handleTemp} />
        </div>

        {/* <Criteria handle={this.handle} />

        <Form criteria={this.state.criteria} budget={this.state.budget} temp={this.state.temp} handle={this.handle} handleRange={this.handleRange} /> */}

        {/* {this.state.cities.map(city => <City key={city.id} city={city} />)} */}
      </div>
    );
  }
}

export default App;