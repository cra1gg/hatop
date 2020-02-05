import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form>
        <label>
          Username:
          <input type="text" name="username" />
          Password: 
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
      </header>
    </div>
  );
}

export default App;
