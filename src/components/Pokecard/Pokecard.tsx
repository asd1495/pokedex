import React from "react";
import './Pokecard.css';

interface PokecardProps {
  spriteUrl?: string;
  name: string;
}

const Pokecard = ({spriteUrl, name}: PokecardProps) => {
  return (
    <div className="pokecard">
        {/*Add img*/}
        <img className="pokesprite" alt="pokemon" src={spriteUrl} />
        <p>{name}</p>
    </div>
  )
}

export default Pokecard