import React from "react";
import Pokedex from "../Pokedex/Pokedex";
import PokeSearchResult from "./PokeSearchResult/PokeSearchResult";
import './App.css';


class App extends React.Component {
    render() {
        return <div className="App">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon logo" className="pokelogo"/>
            <Pokedex />
        </div>
    }
}

export default App;