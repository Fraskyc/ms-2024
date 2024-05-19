import React from 'react';

const Statistics = () => {
  return (
    <div className="content-container">
      <h1>Statistiky hráčů MS hokeje 2024</h1>
      <div className="statistic-section">
        <h2>Nejlepší střelci</h2>
        <div className="statistic-list">
          <p>1. Novák: 10 gólů</p>
          <p>2. Svoboda: 8 gólů</p>
          {/* Další hráči */}
        </div>
      </div>
      <div className="statistic-section">
        <h2>Nejlepší nahrávači</h2>
        <div className="statistic-list">
          <p>1. Procházka: 12 asistencí</p>
          <p>2. Dvořák: 10 asistencí</p>
          {/* Další hráči */}
        </div>
      </div>
      <div className="statistic-section">
        <h2>Nejlepší brankáři</h2>
        <div className="statistic-list">
          <p>1. Kovář: 93.5% úspěšnost</p>
          <p>2. Macháček: 92.1% úspěšnost</p>
          {/* Další hráči */}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
