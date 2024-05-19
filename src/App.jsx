import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Results from './Results';
import Table from './Table';
import Favorites from './Favorites';
import Statistics from './Statistics';
import data from './data.json';
import './styles.css'; 

function MatchList({ data, onSave }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Filtrování dat podle vyhledávacího výrazu
  useEffect(() => {
    setFilteredData(
      data.filter(match =>
        match.team1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.team2.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  return (
    <div>
      <input
        type="text"
        placeholder="Hledat..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {filteredData.map((match, index) => (
        <div key={index} className="card">
          <h2>{match.team1} vs {match.team2}</h2>
          <p>Skóre: {match.score}</p>
          <button onClick={() => onSave(match)} className="save-btn">Uložit</button>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const saveToFavorites = (match) => {
    const updatedFavorites = [...favorites, match];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (index) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
        <nav className={`navbar ${darkMode ? 'dark-mode-navbar' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Domů</Link>
            </li>
            <li className="navbar-item">
              <Link to="/results" className="navbar-link">Výsledky</Link>
            </li>
            <li className="navbar-item">
              <Link to="/table" className="navbar-link">Tabulka</Link>
            </li>
            <li className="navbar-item">
              <Link to="/favorites" className="navbar-link">Oblíbené</Link>
            </li>
            <li className="navbar-item">
              <Link to="/statistics" className="navbar-link">Statistiky</Link>
            </li>
            <li className="navbar-item">
              <button onClick={toggleDarkMode} className="navbar-link mode-toggle-btn">
                Přepnout na {darkMode ? 'světlý' : 'tmavý'} režim
              </button>
            </li>
          </ul>
        </nav>
        <h1 className='name'>Mistrovství světa v ledním hokeji 2024</h1>
        <div className="logo">
          <img src="https://mzv.gov.cz/public/bb/7f/9e/5393291_3196123_BOB.png" alt="logo" />
        </div>
        <Routes>
          <Route path="/" element={<MatchList data={data} onSave={saveToFavorites} />} />
          <Route path="/results" element={<Results />} />
          <Route path="/table" element={<Table />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} onRemove={removeFromFavorites} />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
