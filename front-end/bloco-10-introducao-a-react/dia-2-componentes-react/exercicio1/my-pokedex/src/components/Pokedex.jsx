import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return (
            pokemons.map((pokemon, index) => {
                return (
                    <div key={index}>
                        <Pokemon 
                            name={pokemon.name}
                            type={pokemon.type}
                            weight={pokemon.averageWeight.value}
                            mesure ={pokemon.averageWeight.measurementUnit}
                            src={pokemon.image}
                            alt={pokemon.name}
                        />
                    </div>
                )
            })
        )
    }
}

export default Pokedex