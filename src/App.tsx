import React from 'react';
import './App.css';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>Users List</h1>
      </div>
         <Home />
      <div className="footer">
        @copyright
      </div>
    </div>
  );
}

export default App; 
  