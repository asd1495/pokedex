import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <input 
            className='search'
            type='search'
            placeholder='Search Pokémon'
        />
    )
}

export default SearchBox;