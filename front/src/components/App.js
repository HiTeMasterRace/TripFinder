import React, { Component } from 'react';
import './../assets/css/App.css';

//import PaperPlane from './PaperPlane';
// import Criteria from './Criteria';
// import Form from './Form';
// import City from './City';
import FilterForm from './FilterForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        // {
        //   "id": 1,
        //   "name": "Athenes",
        //   "description": "no description yet",
        //   "location": "unknown yet",
        //   "budget": 140,
        //   "filename": null,
        //   "temperature": 22,
        //   "created_at": "2019-09-10 14:03:29",
        //   "updated_at": "2019-09-10 14:03:29"
        // }
      ],
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

        <Form criteria={this.state.criteria} budget={this.state.budget} temp={this.state.temp} handle={this.handle} handleRange={this.handleRange} />

        {this.state.cities.map(city => (
          <div key={city.id}>
            <City cityname={city.name} />
          </div>
        ))} */}
      </div>
    );
  }
}

export default App;