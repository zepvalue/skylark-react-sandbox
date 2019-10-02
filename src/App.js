import React, { useState } from 'react';
import './App.scss';

import destinationData from 'data/destination-cancun.json';

import Test from 'components/Test';
import SearchForm from 'components/SearchForm';

const App = () => {
  const [responseData, setResponseData] = useState('');
  const { hotels } = destinationData;
  return (
    <div className="App">
      <header className="App-header">
        <Test text={destinationData.description} />
        <div className="header_container">
          <h1>Booking is just the beginning</h1>
          <h3 className="header_description">Skylark combines real time technology with human expertise.</h3>
        </div>
        <SearchForm list={hotels} setResponseData={setResponseData} />
        <div>{responseData}</div>
      </header>
    </div>
  );
};

export default App;