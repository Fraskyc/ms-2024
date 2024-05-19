import React from 'react';
import { Link } from 'react-router-dom';

const countries = ['Švýcarsko', 'Finsko', 'Kanada', 'Česko', 'Dánsko', 'Rakousko', 'Norsko', 'Velká Británie', 'Švédsko', 'Slovensko', 'Lotyšsko', 'USA', 'Kazachstán', 'Německo', 'Francie', 'Polsko'];

const CountryList = () => {
  return (
    <div className="content-container">
      <h1>Seznam států</h1>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <Link to={`/countries/${country}`}>{country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
