import React from 'react';

const Favorites = ({ favorites, onRemove }) => {
  return (
    <div className="content-container">
      <h1 className='obl'>Oblíbené zápasy</h1>
      <div className="card-container">
        {favorites.map((match, index) => (
          <div className="card" key={index}>
            <h2>{match.team1} vs {match.team2}</h2>
            <p>Skóre: {match.score}</p>
            <button onClick={() => onRemove(index)}>Smazat</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
