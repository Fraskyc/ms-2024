import React from 'react';

const teamsGroupA = [
  { name: 'Švýcarsko', matchesPlayed: 3, points: 6, position: 1 },
  { name: 'Finsko', matchesPlayed: 3, points: 5, position: 2 },
  { name: 'Kanada', matchesPlayed: 3, points: 4, position: 3 },
  { name: 'Česko', matchesPlayed: 3, points: 3, position: 4 },
  { name: 'Dánsko', matchesPlayed: 3, points: 2, position: 5 },
  { name: 'Rakousko', matchesPlayed: 3, points: 1, position: 6 },
  { name: 'Norsko', matchesPlayed: 3, points: 1, position: 7 },
  { name: 'Velká Británie', matchesPlayed: 3, points: 0, position: 8 }
];

const teamsGroupB = [
  { name: 'Švédsko', matchesPlayed: 3, points: 6, position: 1 },
  { name: 'Slovensko', matchesPlayed: 3, points: 4, position: 2 },
  { name: 'Lotyšsko', matchesPlayed: 3, points: 3, position: 3 },
  { name: 'USA', matchesPlayed: 3, points: 3, position: 4 },
  { name: 'Kazachstán', matchesPlayed: 3, points: 2, position: 5 },
  { name: 'Německo', matchesPlayed: 3, points: 1, position: 6 },
  { name: 'Francie', matchesPlayed: 3, points: 1, position: 7 },
  { name: 'Polsko', matchesPlayed: 3, points: 0, position: 8 }
];

const Table = () => {
  return (
    <div className="content-container">
      <div className="group">
        <h1 className='obl'>Tabulka - Skupina A</h1>
        <table className="table">
          <thead>
            <tr className='tmava'>
              <th>Tým</th>
              <th>Odehrané zápasy</th>
              <th>Body</th>
              <th>Umístění</th>
            </tr>
          </thead>
          <tbody>
            {teamsGroupA.map((team, index) => (
              <tr key={index}>
                <td>{team.name}</td>
                <td>{team.matchesPlayed}</td>
                <td>{team.points}</td>
                <td>{team.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="group">
        <h1 className='obl'>Tabulka - Skupina B</h1>
        <table className="table">
          <thead>
            <tr className='tmava'>
              <th>Tým</th>
              <th>Odehrané zápasy</th>
              <th>Body</th>
              <th>Umístění</th>
            </tr>
          </thead>
          <tbody>
            {teamsGroupB.map((team, index) => (
              <tr key={index}>
                <td>{team.name}</td>
                <td>{team.matchesPlayed}</td>
                <td>{team.points}</td>
                <td>{team.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
