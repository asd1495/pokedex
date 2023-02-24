import React from "react";
import Pokedex from "../Pokedex/Pokedex";
import './App.css';
import { pokemonData } from "../PokeData/pokemonData";
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from "../types/PokemonSchema";

interface AppState {
    searchField: string;
    allPokemon: PokemonSchema[];
    searchedPokemon: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
    state = {
        searchField: '',
        allPokemon: [],
        searchedPokemon: [],
        selectedPokemon: undefined
    }

    patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined
            };
            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch(e) {
                console.log('Exception while parsing', e)
            }
            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites,
            };
            return patchedPokemon;
        });
        return patchedPokemons
    }

    componentDidMount()  {
        //Patch the stringified sprites
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
            pokemonData
        );
        //Update the state with patched pokemon
        this.setState({
            allPokemon: patchedPokemons,
            searchedPokemon: patchedPokemons,
            
        })
    }

    handleInputChange = (inputValue: string) => {
        const searchField = inputValue;
        //Filter searched Pokémon
        const { allPokemon } = this.state;

        const searchedPokemon = allPokemon.filter(
            (pokemon: PokemonSchema) => { 
                return (
                    pokemon.name &&
                    pokemon.name
                        .toLowerCase()
                        .includes(searchField.toLowerCase())

                )
            }
        )
        this.setState({
            searchField,
            searchedPokemon,
        });
    }

    handleClick = (pokemonName: string) => {
        const { allPokemon } = this.state;

        //Find the selected pokemon
        const selectedPokemon = allPokemon.find(
            (pokemon: PokemonSchema) => pokemon.name === pokemonName
        )
        //Update the state
        this.setState({ selectedPokemon })
    }

    render() {
        return <div className="App">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon logo" className="pokelogo"/>
            <Pokedex 
                pokemons={this.state.searchedPokemon} 
                selectedPokemon={this.state.selectedPokemon}
                onPokemonClick={this.handleClick}
                onInputChange={this.handleInputChange}
            />
        </div>
    }
}

export default App;