import React from 'react';
import TeamInfo from './CollegeBasketballTeams.json';

interface TeamData {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>March Madness</h1>
      <h2 style={{ textAlign: 'center' }}>
        Here are all the teams that could make a run in March Madness this year!
      </h2>
      <br />
    </div>
  );
}

function TeamCard({ school, name, city, state }: TeamData) {
  const cardStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  };

  return (
    <div style={cardStyle}>
      <h2>School: {school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>Location: {`${city}, ${state}`}</h3>
      <br />
    </div>
  );
}

// TeamList component
function TeamList({ teams }: { teams: TeamData[] }) {
  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  return (
    <div style={listStyle}>
      {teams.map((team) => (
        <TeamCard key={team.tid} {...team} />
      ))}
    </div>
  );
}

function App() {
  const teams: TeamData[] = TeamInfo.teams;

  return (
    <div className="App">
      <Welcome />
      <TeamList teams={teams} />
    </div>
  );
}

export default App;
