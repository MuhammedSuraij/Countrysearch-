
jsx
import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import countriesData from './index.json';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredCountries = countriesData.filter((country) => {
      return country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) || country.capital.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(filteredCountries);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for countries by name or capital"
      />
      {searchTerm && (
        <ul className="search-suggestions">
          {searchResults.slice(0, 5).map((country) => (
            <li key={country.cca2}>
              {country.name.common} ({country.capital})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;