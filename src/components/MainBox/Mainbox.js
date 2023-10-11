import React, { useState, useEffect } from 'react';
import './Mainbox.css'
import SearchBar from '../SearchBar/SearchBar';
import WeatherCard from '../WeatherCard/WeatherCard';

const API = { key: '7f7a019a2371f95afe97771c376705b7', base: 'https://api.openweathermap.org/data/2.5/' };

function MainBox() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);

    const handleSearch = (evt) => {
        if (evt.key === "Enter") {
            setQuery('');
        }
    };

    useEffect(() => {
        if (query) {
            fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                });
        }
    }, [query]);

    return (
        <div className={`main-weather ${weather && weather.main && weather.main.temp > 16 ? 'warm' : ''}`}>
            <main>
                <SearchBar query={query} onSearch={handleSearch} onQueryChange={setQuery} />
                {weather && weather.main ? <WeatherCard weather={weather} /> : null}
            </main>
        </div>
    );
}

export default MainBox;