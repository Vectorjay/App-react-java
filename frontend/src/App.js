import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Test backend connection
    axios.get('http://localhost:8080/api/hello')
      .then(response => setMessage(response.data))
      .catch(error => console.error('Backend connection failed:', error));

    // Get user data
    axios.get('http://localhost:8080/api/user')
      .then(response => setUser(response.data))
      .catch(error => console.error('Failed to fetch user:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Java + React Full Stack App</h1>
        <p>Backend Message: <strong>{message}</strong></p>
        
        {user && (
          <div className="user-info">
            <h2>User Information</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
        
        <div className="status">
          <p>✅ Frontend is running on port 3000</p>
          <p>✅ Backend should be running on port 8080</p>
        </div>
      </header>
    </div>
  );
}

export default App;
