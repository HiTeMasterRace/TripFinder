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
      cities: [],
      criteria: ["budget", "type de voyage: culture, sport, montagne, mer, vie nocture", "continent", "temperature"]
    };
  }

  getCities() {
    
  }

  render() {
    return (
      <div className="App">
        <PaperPlane />

        {this.state.criteria.map((criteria, index) => (
          <div key={index}>
            <Criteria criteria={criteria} />
          </div>
        ))}

        <Form />

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