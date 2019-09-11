import React, { Component } from 'react';
import './../assets/css/App.css';

// import PaperPlane from './PaperPlane';
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
      budget: [10, 1000],
      temp: [-10, 35],
    };
  }

  handle = (name, value) => {
    this.setState({
      [name]: value
    })

    console.log(name, value)
  }

  handleRange = (value) => {
    console.log(value)
  }

  render() {
    console.log(this.state.criteria)

    return (
      <div className="App">
        <div className="vertical-center">
          <FilterForm criteria={this.state.criteria} budget={this.state.budget} temp={this.state.temp} handle={this.handle} handleRange={this.handleRange} />
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