import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Activities from "./components/Activities";
import Leaderboard from "./components/Leaderboard";
import Teams from "./components/Teams";
import Users from "./components/Users";
import Workouts from "./components/Workouts";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src="/path-to-logo/octofitapp-small.png" alt="OctoFit Logo" className="logo" />
            OctoFit Tracker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/activities">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/leaderboard">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/teams">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/users">Users</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/workouts">Workouts</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
