import React from "react";
import Pokelist from "../components/PokeList/Pokelist";
import PokeSearchResult from "../components/PokeSearchResult/PokeSearchResult";
import SearchBox from "../components/SearchBox/SearchBox";
import './Pokedex.css';

const Pokedex = () => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox />
                <Pokelist />
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult />
            </div>
        </div>
    )
}

export default Pokedex;