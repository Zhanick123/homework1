import React from 'react';
import './SearchBar.css';

export default function SearchBar({ query, onSearch, onQueryChange }) {
    return (
        <div className="search-box">
            <input
                type="text"
                className='search-bar'
                placeholder="Search..."
                onChange={e => onQueryChange(e.target.value)}
                value={query}
                onKeyPress={onSearch}
            />
        </div>
    );
}