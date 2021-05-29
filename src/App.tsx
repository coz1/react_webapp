import React from 'react';
import Navbar from './components/navbar/Navbar';
import Router from './components/router/Router';

function App() {
  return (
    <div>
      <Navbar name="Congress Organizer WebApplication" />
      <Router />
    </div>
  );
}

export default App;
