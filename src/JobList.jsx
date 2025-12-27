import React, { useState } from 'react';
import JobCard from './JobCard';

// Ye jobs ka static data hai
const JOBS_DATA = [
  { id: 1, title: 'Frontend Developer', company: 'Google', location: 'Mohali', type: 'Full-time', description: 'Looking for a React expert....' },
  { id: 2, title: 'Backend Engineer', company: 'Flipkart', location: 'Ludhiana', type: 'Full-time', description: 'Node js expert needed.' },
  { id: 3, title: 'UI/UX Designer', company: 'Amazon', location: 'Amritsar', type: 'Half-time', description: 'Looking for design expert.' },
  { id: 4, title: 'Full Stack Developer', company: 'Google', location: 'Jalandhar', type: 'Full-time', description: 'Mern stack expert needed.' },
  { id: 5, title: 'Product Manager', company: 'Flipkart', location: 'Phagwara', type: 'Full-time', description: 'Looking for lead product expert.' },
  { id: 6, title: 'DevOps Engineer', company: 'Amazon', location: 'Patiala', type: 'Half-time', description: 'AWS and Docker expert needed.' },
];

function JobList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  // Yaha jobs ko search aur type ke hisaab se filter kar rahe hain
  const filteredJobs = JOBS_DATA.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || job.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div>
      <h2>Find Your Dream Job</h2>
      <div className="search-bar">
        <input  
          type="text" 
          placeholder="Search by job title or company..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="All">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Half-time">Half-time</option>
        </select>
      </div>

     
      <div className="job-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <p>No jobs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}

export default JobList;
