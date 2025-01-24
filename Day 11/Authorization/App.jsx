import React from 'react';
// import LazyWrapper from './LazyWrapper.jsx';
import './App.css';
import Author from './Author';
import User from './User';

const Authorized = Author(User);

function App() {
  const user = { name: 'ak', role: 'admin' }; 
  return (
    <>
      <h1>user</h1>
      <Authorized user={user} />
    </>
  );
}

export default App;
