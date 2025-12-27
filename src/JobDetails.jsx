import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Jobs ka static data h(doesn't change)
const JOBS_DATA = [
  { id: 1, title: 'Frontend Developer', company: 'Google', location: 'Mohali', type: 'Full-time', description: 'React developer needed. Should know HTML, CSS and basic JavaScript.' },
  { id: 2, title: 'Backend Engineer', company: 'Flipkart', location: 'Ludhiana', type: 'Full-time', description: 'Node.js developer with basic database knowledge.' },
  { id: 3, title: 'UI/UX Designer', company: 'Amazon', location: 'Amritsar', type: 'Half-time', description: 'Designer required. Knowledge of Figma or Adobe XD is required' },
  { id: 4, title: 'Full Stack Developer', company: 'Google', location: 'Jalandhar', type: 'Full-time', description: 'MERN stack developer. Frontend + backend Knowledge.' },
  { id: 5, title: 'Product Manager', company: 'Flipkart', location: 'Phagwara', type: 'Full-time', description: 'Product manager role. Good communication skills required.' },
  { id: 6, title: 'DevOps Engineer', company: 'Amazon', location: 'Patiala', type: 'Half-time', description: 'Basic knowledge of AWS and Docker.' },
];


function JobDetails() {
  const { id } = useParams();
  const job = JOBS_DATA.find(j => j.id === parseInt(id));

  if (!job) {
    return <div>Job not found! <Link to="/">Back to Jobs</Link></div>;
  }

  return (
    <div className="job-details">
      <div className="job-header">
        <h2>{job.title}</h2>
        <div className="company company-name">{job.company}</div>
      </div>
      
      <div className="job-meta">
        <span><strong>Location:</strong> {job.location}</span>
        <span><strong>Type:</strong> {job.type}</span>
      </div>

      <div className="job-description">
        <h3>Job Description</h3>
        <p>{job.description}</p>
      </div>

      <div className="job-actions">
        <button className="btn-primary" onClick={() => alert('Application submitted!')}>Apply Now</button>
        <Link to="/" className="btn-secondary btn-back">Back to List</Link>
      </div>
    </div>
  );
}

export default JobDetails;
