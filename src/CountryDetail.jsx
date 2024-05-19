import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { countryName } = useParams();

  // Zde byste provedli načtení výsledků zápasů a tabulky pro daný stát

  return (
    <div className="content-container">
      <h1>Výsledky a tabulka pro {countryName}</h1>
      {/* Zde byste zobrazili výsledky zápasů a tabulku pro daný stát */}
    </div>
  );
}

export default CountryDetail;
