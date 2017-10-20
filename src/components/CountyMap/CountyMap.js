// src/components/CountyMap/CountyMap.js
import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import _ from 'lodash';

class CountyMap extends Component {
  constructor(props) {
      super(props);
      this.projection = d3.geoAlbersUsa().scale(1280);
      this.geoPath = d3.geoPath().projection(this.projection);
      this.quantize = d3.scaleQuantize().range(d3.range(9));
      this.updateD3(props);
  }

  componentWillReceiveProps(newProps) {
      this.updateD3(newProps);
  }

  updateD3(props) {

  }

  render() {
    if(!this.props.usTopoJson) {
      return null;
    } else {
      return (

      );
    }
  }
}

export default CountyMap;
