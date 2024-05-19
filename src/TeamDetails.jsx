import React from 'react';

const TeamDetails = ({ match, teams, matches }) => {
  const teamName = match.params.teamName;
  const team = teams.find(t => t.name === teamName);
  const teamMatches = matches.filter(
    m => m.team1 === teamName || m.team2 === teamName
  );

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="content-container">
      <h1>{team.name}</h1>
      <h2>Umístění: {team.position}</h2>
      <h3>Odehrané zápasy: {team.matchesPlayed}</h3>
      <h3>Body: {team.points}</h3>

      <h2>Výsledky zápasů</h2>
      <div className="match-list">
        {teamMatches.map((match, index) => (
          <div className="match" key={index}>
            <h2>{match.team1} vs {match.team2}</h2>
            <p>{match.date}</p>
            <p>Skóre: {match.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDetails;
