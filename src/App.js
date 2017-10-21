// src/App.js
import React, { Component } from 'react';
//import * as d3 from 'd3';
//import _ from 'lodash';
import Preloader from './components/Preloader';
import { loadAllData } from './DataHandling';
import CountyMap from './components/CountyMap';

class App extends Component {
  state = {
    techSalaries: [],
    countyNames: [],
    medianIncomes: []
  }

  componentWillMount() {
    loadAllData(data => this.setState(data));
  }

  render() {
    if (this.state.techSalaries.length < 1) {
       return (
         <Preloader/>
       );
    }
    return (
      <div className="App container">
          <svg width="1100" height="500">
              <CountyMap usTopoJson={this.state.usTopoJson}
              width={500}
              height={500}
              />
          </svg>
      </div>
    );
  }
}

export default App;
