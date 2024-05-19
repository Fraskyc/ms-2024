
  import React, { useState } from 'react';
  import './styles.css';  
  
  const groupAResults = [
    { date: 'Včera', team1: 'Česko', team2: 'Velká Británie', score: '4 : 1' },
    { date: 'Včera', team1: 'Kanada', team2: 'Finsko', score: '5 : 3' },
    { date: 'Včera', team1: 'Dánsko', team2: 'Švýcarsko', score: '0 : 8' },
    { date: '17.5.2024', team1: 'Česko', team2: 'Rakousko', score: '4 : 0' },
    { date: '17.5.2024', team1: 'Velká Británie', team2: 'Dánsko', score: '3 : 4' },
    { date: '16.5.2024', team1: 'Kanada', team2: 'Norsko', score: '4 : 1' },
    { date: '16.5.2024', team1: 'Finsko', team2: 'Rakousko', score: '2 : 3' },
    { date: '15.5.2024', team1: 'Švýcarsko', team2: 'Velká Británie', score: '3 : 0' },
    { date: '15.5.2024', team1: 'Česko', team2: 'Dánsko', score: '7 : 4' },
    { date: '14.5.2024', team1: 'Kanada', team2: 'Rakousko', score: '7 : 6 pp' },
    { date: '14.5.2024', team1: 'Dánsko', team2: 'Norsko', score: '0 : 2' },
    { date: '13.5.2024', team1: 'Švýcarsko', team2: 'Česko', score: '2 : 1 sn' },
    { date: '13.5.2024', team1: 'Norsko', team2: 'Finsko', score: '1 : 4' },
    { date: '12.5.2024', team1: 'Rakousko', team2: 'Švýcarsko', score: '5 : 6' },
    { date: '12.5.2024', team1: 'Dánsko', team2: 'Kanada', score: '1 : 5' },
    { date: '12.5.2024', team1: 'Finsko', team2: 'Velká Británie', score: '8 : 0' },
    { date: '11.5.2024', team1: 'Norsko', team2: 'Česko', score: '3 : 6' },
    { date: '11.5.2024', team1: 'Rakousko', team2: 'Dánsko', score: '1 : 5' },
    { date: '11.5.2024', team1: 'Velká Británie', team2: 'Kanada', score: '2 : 4' },
    { date: '10.5.2024', team1: 'Česko', team2: 'Finsko', score: '1 : 0 sn' },
    { date: '10.5.2024', team1: 'Švýcarsko', team2: 'Norsko', score: '5 : 2' }
  ];
  
  const groupBResults = [
    { date: 'Včera', team1: 'Francie', team2: 'Slovensko', score: '2 : 4' },
    { date: 'Včera', team1: 'Německo', team2: 'Polsko', score: '4 : 2' },
    { date: 'Včera', team1: 'Lotyšsko', team2: 'Švédsko', score: '2 : 7' },
    { date: '17.5.2024', team1: 'Polsko', team2: 'USA', score: '1 : 4' },
    { date: '17.5.2024', team1: 'Německo', team2: 'Kazachstán', score: '8 : 2' },
    { date: '16.5.2024', team1: 'USA', team2: 'Francie', score: '5 : 0' },
    { date: '16.5.2024', team1: 'Kazachstán', team2: 'Švédsko', score: '1 : 3' },
    { date: '15.5.2024', team1: 'Slovensko', team2: 'Polsko', score: '4 : 0' },
    { date: '15.5.2024', team1: 'Německo', team2: 'Lotyšsko', score: '8 : 1' },
    { date: '14.5.2024', team1: 'Polsko', team2: 'Francie', score: '2 : 4' },
    { date: '14.5.2024', team1: 'Kazachstán', team2: 'Lotyšsko', score: '0 : 2' },
    { date: '13.5.2024', team1: 'Německo', team2: 'Švédsko', score: '1 : 6' },
    { date: '13.5.2024', team1: 'USA', team2: 'Slovensko', score: '4 : 5 pp' },
    { date: '12.5.2024', team1: 'Švédsko', team2: 'Polsko', score: '5 : 1' },
    { date: '12.5.2024', team1: 'Lotyšsko', team2: 'Francie', score: '3 : 2 pp' },
    { date: '12.5.2024', team1: 'Slovensko', team2: 'Kazachstán', score: '6 : 2' },
    { date: '11.5.2024', team1: 'USA', team2: 'Německo', score: '6 : 1' },
    { date: '11.5.2024', team1: 'Polsko', team2: 'Lotyšsko', score: '4 : 5 pp' },
    { date: '11.5.2024', team1: 'Francie', team2: 'Kazachstán', score: '1 : 3' },
    { date: '10.5.2024', team1: 'Švédsko', team2: 'USA', score: '5 : 2' },
    { date: '10.5.2024', team1: 'Slovensko', team2: 'Německo', score: '4 : 6' }
  ];

  function Results({ addFavorite }) {
    const [showGroupA, setShowGroupA] = useState(true);
  
    const toggleGroup = () => {
      setShowGroupA(!showGroupA);
    };
  
    return (
      <div className="results-container">
        <h1>Výsledky zápasů</h1>
        <button onClick={toggleGroup} className="toggle-btn">
          {showGroupA ? 'Zobrazit skupinu B' : 'Zobrazit skupinu A'}
        </button>
        <div className="results-section">
          <h2>{showGroupA ? 'Skupina A' : 'Skupina B'}</h2>
          {showGroupA ? (
            groupAResults.map((match, index) => (
              <div className="result-card" key={index}>
                <p className="match-date">{match.date}</p>
                <p className="match-teams">{match.team1} vs {match.team2}</p>
                <p className="match-score">{match.score}</p>
                <button onClick={() => addFavorite(match)} className="save-btn">Uložit</button>
              </div>
            ))
          ) : (
            groupBResults.map((match, index) => (
              <div className="result-card" key={index}>
                <p className="match-date">{match.date}</p>
                <p className="match-teams">{match.team1} vs {match.team2}</p>
                <p className="match-score">{match.score}</p>
                <button onClick={() => addFavorite(match)} className="save-btn">Uložit</button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
  
  export default Results;