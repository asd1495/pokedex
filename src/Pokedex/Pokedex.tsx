import React from "react";
import Pokelist from "../components/PokeList/Pokelist";
import PokeSearchResult from "../components/PokeSearchResult/PokeSearchResult";
import SearchBox from "../components/SearchBox/SearchBox";
import { PokemonSchema } from "../types/PokemonSchema";
import './Pokedex.css';

interface PokedexProps {
    pokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokedex = ({ 
    pokemons, 
    selectedPokemon, 
    onInputChange, 
    onPokemonClick 
}: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox onInputChange={onInputChange} />
                <Pokelist 
                    onPokemonClick={onPokemonClick}
                    pokemons={pokemons}
                />
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult selectedPokemon={selectedPokemon} />
            </div>
        </div>
    )
}

export default Pokedex;