import React, { useState } from 'react';
import './App.css';
import AdminContent from './Authorization-task/AdminContent';
import UserContent from './Authorization-task/UserContent';
import FacultyContent from './Authorization-task/FacultyContent';

const App = () => {
  const [loggedInRole, setLoggedInRole] = useState(null); 
  const [selectedRole, setSelectedRole] = useState(null); 
  const [error, setError] = useState('');

  const handleLogin = (role) => {
    setLoggedInRole(role);
    setSelectedRole(null);
    setError('');
  };

  const handleRoleClick = (role) => {
    if (role === loggedInRole) {
      setSelectedRole(role);
      setError('');
    } else {
      setError(`Access denied! You are logged in as ${loggedInRole}.`);
    }
  };

  if (!loggedInRole) {
    return (
      <div>
        <h2>Select Role to Login</h2>
        <button onClick={() => handleLogin('admin')}>Login as Admin</button>
        <button onClick={() => handleLogin('user')}>Login as User</button>
        <button onClick={() => handleLogin('faculty')}>Login as Faculty</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {loggedInRole.charAt(0).toUpperCase() + loggedInRole.slice(1)}!</h1>
      <h2>Select a Role to Access Details</h2>
      <button onClick={() => handleRoleClick('admin')}>Admin</button>
      <button onClick={() => handleRoleClick('user')}>User</button>
      <button onClick={() => handleRoleClick('faculty')}>Faculty</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {selectedRole === 'admin' && <AdminContent />}
      {selectedRole === 'user' && <UserContent />}
      {selectedRole === 'faculty' && <FacultyContent />}
    </div>
  );
};

export default App;
