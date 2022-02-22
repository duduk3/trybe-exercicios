import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        return (
            <section className='content-card'>
                <div className='data'>
                    <p>{this.props.name}</p>
                    <p>{this.props.type}</p>
                    <p>AverageWeight: {this.props.weight}{this.props.mesure}</p>
                </div>
                <img className='img' src={this.props.src} alt={this.props.alt}></img>
            </section>
        )
    }
}

Pokemon.protoTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape ({
        value: PropTypes.number,
        measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
}

export default Pokemon