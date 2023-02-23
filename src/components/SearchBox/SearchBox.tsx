import React from 'react';
import './SearchBox.css';

interface SearchBoxProps {
    onInputChange: (inputValue: string) => void;
}

const SearchBox = ({ onInputChange }: SearchBoxProps) => {
    return (
        <input 
            onChange={(e) => {
                console.log(e.target.value)
                onInputChange(e.target.value)
            }}
            className='search'
            type='search'
            placeholder='Search Pokémon'
        />
    )
}

export default SearchBox;