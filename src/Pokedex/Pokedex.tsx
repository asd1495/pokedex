import React from "react";
import Pokelist from "../components/PokeList/Pokelist";
import PokeSearchResult from "../components/PokeSearchResult/PokeSearchResult";
import SearchBox from "../components/SearchBox/SearchBox";
import { PokemonSchema } from "../types/PokemonSchema";
import './Pokedex.css';

interface PokedexProps {
    searchedPokemon: PokemonSchema[];
    onInputChange: (inputValue: string) => void;
}

const Pokedex = ({ searchedPokemon, onInputChange }: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox onInputChange={onInputChange} />
                <Pokelist 
                    searchedPokemon={searchedPokemon}
                />
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult />
            </div>
        </div>
    )
}

export default Pokedex;