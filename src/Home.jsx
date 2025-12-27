import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Smart Job Portal</h1>
      <p>
        A simple platform to explore jobs and find the right opportunity.<br />
        And show your skills and get hired!<br />
        Join this website and take the first step towards your dream career.
      </p>
      <button onClick={() => navigate('/jobs')} className="btn-primary">
        Find Jobs
      </button>
    </div>
  );
}

export default Home;
