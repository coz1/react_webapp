import React from 'react';
import Navbar from './components/navbar/Navbar';
import Router from './components/router/Router';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Navbar name="Congress Organizer WebApplication" />
      <Sidebar />
      <Router />
    </div>
  );
}

export default App;
