import React from "react";
import './PokeSearchResult.css';

const PokeSearchResult = () => {
    const selectedPokemon = false;
    return (
        <div className="pokeresult-card">
            {
                selectedPokemon 
                    ? (
                        <div>
                            {/* Add img here */}
                            <p>Name: Pikachu</p>
                            <p>Id: 4</p>
                            <p>Height: 20</p>
                            <p>Weight: 10</p>
                            <p>Base exp: 100</p>
                        </div>
                    )
                    : (
                        <h2>Welcome to the Pokédex</h2>
                    )
            }
        </div>
    )
}

export default PokeSearchResult;