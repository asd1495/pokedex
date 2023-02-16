import React from "react";
import { PokemonSchema } from "../../types/PokemonSchema";
import Pokecard from "../Pokecard/Pokecard";

import './Pokelist.css'

interface PokelistProps {
  searchedPokemon: PokemonSchema[];
}

const Pokelist = ({ searchedPokemon }: PokelistProps) => {
  return (
    <div className="pokelist">
        {searchedPokemon.map((pokemon) => {
          return (

            pokemon.name && (
              <Pokecard 
              key={pokemon.id}
              name={pokemon.name}
              spriteUrl={pokemon.sprites.normal} />
            )
            
            )
          })}
    </div>
  )
}

export default Pokelist;