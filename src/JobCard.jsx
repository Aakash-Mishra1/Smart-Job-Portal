import React from 'react';
import { Link } from 'react-router-dom';

// Ye component ek single job ki details dikhane ke liye hai
function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <div className="company">{job.company}</div>
      <div className="location">{job.location} • {job.type}</div>
      <p>{job.description.substring(0, 60)}...</p>
      <Link to={`/job/${job.id}`} className="btn-primary job-card-btn">
        View Details
      </Link>
    </div>
  );
}

export default JobCard;
