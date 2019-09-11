import React, { Component } from 'react';
import './../assets/css/App.css';

import PaperPlane from './PaperPlane';
import Criteria from './Criteria';
import Form from './Form';
import City from './City';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        {
          "id": 1,
          "name": "Athenes",
          "description": "no description yet",
          "location": "unknown yet",
          "budget": 140,
          "filename": null,
          "temperature": 22,
          "created_at": "2019-09-10 14:03:29",
          "updated_at": "2019-09-10 14:03:29"
        }
      ],
      criteria: ""
    };

    this.handle = this.handle.bind(this)
  }

  getCities() {

  }

  handle(name, value) {
    this.setState({
      [name]: value
    })
  }

  render() {
    console.log(this.state.criteria)

    return (
      <div className="App">
        <PaperPlane />

        <Criteria handle={this.handle} />

        <Form criteria={this.state.criteria}/>

        {this.state.cities.map(city => (
          <div key={city.id}>
            <City cityname={city.name} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;