import React from "react";
import { PokemonSchema } from "../../types/PokemonSchema";
import './PokeSearchResult.css';

interface PokeSearchResultProps {
    selectedPokemon: PokemonSchema | undefined;
}

const PokeSearchResult = ({ selectedPokemon }: PokeSearchResultProps) => {
    const { name, height, weight, sprites } =
        selectedPokemon || {};

    return (
        <div className="poke-result-card">
            {selectedPokemon ? (
                <div>
                    <img
                        className="pokemon-animated-sprite"
                        alt="pokemon"
                        src={sprites?.animated || sprites?.normal}
                    />
                    <p className="poke-name">{name?.toUpperCase()}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                </div>
            ) : (
                <h2> Welcome to the pokedex</h2>
            )}
        </div>
    );
};

export default PokeSearchResult;