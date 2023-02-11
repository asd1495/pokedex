import React from "react";
import Pokecard from "../Pokecard/Pokecard";
import './Pokelist.css'

const Pokelist = () => {
  return (
    <div className="pokelist">
        <Pokecard name='Pikachu'/>
        <Pokecard name='Pikachu'/>
        <Pokecard name='Pikachu'/>
        <Pokecard name='Pikachu'/>
        <Pokecard name='Pikachu'/>
        <Pokecard name='Pikachu'/>
        <Pokecard name='Pikachu'/>
    </div>
  )
}

export default Pokelist;