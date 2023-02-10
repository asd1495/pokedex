import React from "react";
import PokeSearchResult from "../components/PokeSearchResult/PokeSearchResult";
import SearchBox from "../components/SearchBox/SearchBox";
import './Pokedex.css'

const Pokedex = () => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox />
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult />
            </div>
        </div>
    )
}

export default Pokedex;