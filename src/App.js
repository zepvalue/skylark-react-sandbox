import React, { useState } from 'react';
import './App.scss';

import destinationData from 'data/destination-cancun.json';
import SearchForm from 'components/SearchForm';

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const { hotels } = destinationData;
  return (
    <div className="App">
      <header className="App-header">
        <div id="App-Container">
          <div id="header_container">
            <div id="header_text">Booking is just the beginning</div>
            <div id="header_description">Skylark combines real time technology with human expertise.</div>
          </div>
          <SearchForm list={hotels} setResponseData={setResponseData} />
          <div>{responseData}</div>
        </div>
      </header>
    </div>
  );
};

export default App;
