import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import JobList from './JobList';
import Home from './Home';
import JobDetails from './JobDetails';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import './App.css';


function App() {
  // Ye simple state hai jo check karta hai ki user logged in hai ya nahi
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <div className="app">
        {/* yha navigation bar hai */}
        <nav>
          <div className="container">
            <h1>Smart Job Portal</h1>
            <div className="nav-links">
              <Link to="/jobs">Find Jobs</Link>
              {isAuthenticated ? (
                <>
                  <Link to="/profile">Profile</Link>
                  <Link to="/" onClick={handleLogout}>Logout</Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Ye main content area hai jaha pages dikhenge */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
