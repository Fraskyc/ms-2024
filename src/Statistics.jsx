import React from 'react';
import './styles.css'; 

const topScorers = [
  { surname: 'Novák', goals: 10 },
  { surname: 'Svoboda', goals: 8 },
  { surname: 'Novotný', goals: 7 }
];

const topAssistants = [
  { surname: 'Procházka', assists: 12 },
  { surname: 'Dvořák', assists: 10 },
  { surname: 'Král', assists: 9 }
];

const topGoalkeepers = [
  { surname: 'Kovář', savePercentage: 93.5 },
  { surname: 'Macháček', savePercentage: 92.1 },
  { surname: 'Černý', savePercentage: 91.8 }
];

function Statistics() {
  return (
    <div className="statistics-container">
      <h1 className='obl'>Statistiky hráčů MS hokeje</h1>
      <div className="statistic-section">
        <h2>Nejlepší střelci</h2>
        <div className="statistic-cards">
          {topScorers.map((player, index) => (
            <div className="statistic-card" key={index}>
              <p>{player.surname}: <strong>{player.goals}</strong> gólů</p>
            </div>
          ))}
        </div>
      </div>
      <div className="statistic-section">
        <h2>Nejlepší nahrávači</h2>
        <div className="statistic-cards">
          {topAssistants.map((player, index) => (
            <div className="statistic-card" key={index}>
              <p>{player.surname}: <strong>{player.assists}</strong> asistencí</p>
            </div>
          ))}
        </div>
      </div>
      <div className="statistic-section">
        <h2 className='tmava'>Nejvíce zákroků</h2>
        <div className="statistic-cards">
          {topGoalkeepers.map((player, index) => (
            <div className="statistic-card" key={index}>
              <p>{player.surname}: <strong>{player.savePercentage}%</strong> úspěšnost</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
