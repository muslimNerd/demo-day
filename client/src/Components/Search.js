import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ city, setCity, handleSubmit }) => {
  return (
    <div className='weather'>
      <h2>Search Weather</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
