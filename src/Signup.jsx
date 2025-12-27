import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ onLogin }) {
  // Default values set kar diye hain
  const [name, setName] = useState('Aakash Mishra');
  const [email, setEmail] = useState('Aakashmishra@gmail.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password) {  // Simple validation check kar rahe hain
      setError('Please fill in all fields');
      return;
    }

    onLogin();   // Signup aur login successful maan ke chal rahe hain
    navigate('/');
  };

  return (
    <div className="auth-form">
      <h2 className="text-center">Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
          />
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Create a password"
          />
        </div>
        
        <button type="submit" className="btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
