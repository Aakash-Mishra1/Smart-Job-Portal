import React, { useState } from 'react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Aakash Mishra',
    email: 'Aakashmishra@gmail.com',
    bio: 'Passionate developer looking for new opportunities.',
    skills: 'React, JavaScript, CSS'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated!');
  };

  return (
    <div className="profile-card">
      <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>My Profile</h2>
      
      {isEditing ? (
        <div className="edit-mode">
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={userInfo.name} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={userInfo.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Bio:</label>
            <textarea 
              name="bio" 
              value={userInfo.bio} 
              onChange={handleChange} 
              rows="3"
            />
          </div>
          <div className="form-group">
            <label>Skills:</label>
            <input 
              type="text" 
              name="skills" 
              value={userInfo.skills} 
              onChange={handleChange} 
            />
          </div>
          <div className="profile-actions">
            <button className="btn-primary" onClick={handleSave}>Save Changes</button>
            <button className="btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="view-mode profile-info">
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Bio:</strong> {userInfo.bio}</p>
          <p><strong>Skills:</strong> {userInfo.skills}</p>
          
          <div className="profile-actions">
            <button className="btn-primary" onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
