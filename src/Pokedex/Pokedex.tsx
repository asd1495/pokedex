import React from "react";
import Pokelist from "../components/PokeList/Pokelist";
import PokeSearchResult from "../components/PokeSearchResult/PokeSearchResult";
import SearchBox from "../components/SearchBox/SearchBox";
import { PokemonSchema } from "../types/PokemonSchema";
import './Pokedex.css';

interface PokedexProps {
    searchedPokemon: PokemonSchema[];
}

const Pokedex = ({ searchedPokemon }: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox />
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