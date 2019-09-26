import React from 'react';
import './App.scss';

import destinationData from 'data/destination-cancun.json';

import Test from 'components/Test';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Test text={destinationData.description} />
        <p>{destinationData.hotels.length} hotels</p>
      </header>
    </div>
  );
}

export default App;
