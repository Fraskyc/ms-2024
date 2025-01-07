// Import required libraries
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Main App Component
function App() {
  const [apis, setApis] = useState([]);
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("apiHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Fetch data from APIs.guru
  useEffect(() => {
    fetch("https://api.apis.guru/v2/list")
      .then((response) => response.json())
      .then((data) => setApis(Object.values(data)))
      .catch((error) => console.error("Error fetching API data:", error));
  }, []);

  // Add API to history
  const addToHistory = (api) => {
    const newHistory = [...history, { ...api, rating: null }];
    setHistory(newHistory);
    localStorage.setItem("apiHistory", JSON.stringify(newHistory));
  };

  // Update rating in history
  const updateRating = (index, rating) => {
    const updatedHistory = history.map((item, i) =>
      i === index ? { ...item, rating } : item
    );
    setHistory(updatedHistory);
    localStorage.setItem("apiHistory", JSON.stringify(updatedHistory));
  };

  // Remove item from history
  const removeFromHistory = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
    localStorage.setItem("apiHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">APIs Explorer</h1>

      {/* Display API list */}
      <h2>Available APIs</h2>
      <ul className="list-group mb-4">
        {apis.slice(0, 10).map((api, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{api.info.title}</span>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => addToHistory(api.info)}
            >
              Add to History
            </button>
          </li>
        ))}
      </ul>

      {/* Display history */}
      <h2>History</h2>
      {history.length > 0 ? (
        <ul className="list-group">
          {history.map((item, index) => (
            <li key={index} className="list-group-item d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <span>{item.title}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromHistory(index)}
                >
                  Delete
                </button>
              </div>
              <div className="mt-2">
                <label htmlFor={`rating-${index}`} className="form-label">
                  Rating:
                </label>
                <input
                  type="number"
                  id={`rating-${index}`}
                  className="form-control"
                  min="1"
                  max="5"
                  value={item.rating || ""}
                  onChange={(e) => updateRating(index, e.target.value)}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No history yet.</p>
      )}
    </div>
  );
}

export default App;
