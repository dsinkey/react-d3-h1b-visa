import React, { Component } from 'react';

class County extends Component {

    render() {
        const { geoPath, feature } = this.props;

        return (
            <path d={geoPath(feature)} title={feature.id} />
        )
    }
}

export default County;
