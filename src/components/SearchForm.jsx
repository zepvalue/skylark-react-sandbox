import React, { useState } from 'react';
import axios from 'axios';
import DateRangeSelector from './DateRangeSelector.jsx';
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';

const SearchForm = ({ list, setResponseData }) => {
  const [hotelCode, setHotel] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [rooms, setRooms] = useState(1);

  const options = list.map((el, i) => (
    <option key={`key${i}`} value={el.code}>
      {el.name}
    </option>
  ));

  const optionsRooms = [1, 2, 3, 4].map((el, i) => {
    if (el === 1)
      return (
        <option key={`Room-${i}`} value={el}>
          {`${el} Room`}
        </option>
      );
    if (el > 1)
      return (
        <option key={`Rooms-${i}`} value={el}>
          {`${el} Rooms`}
        </option>
      );
  });

  const optionsPassengers = [1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
    if (el === 1)
      return (
        <option key={`Person-${i}`} value={el}>
          {`${el} Person`}
        </option>
      );
    if (el > 1)
      return (
        <option key={`People-${i}`} value={el}>
          {`${el} People`}
        </option>
      );
  });

  function fetchAvailability() {
    const { formatStartDate, formatEndDate } = date;
    const FULL_URL = `http://gateway.skylark.com/ex/merged_hotel_stays/${hotelCode}?check_in=${formatStartDate}&check_out=${formatEndDate}&roomCount=${rooms}&passengerCount=${passengers}`;

    console.log(FULL_URL);
    const response = axios.get(FULL_URL);
    response.then(res => {
      if (res.data.rooms.length === 0) setResponseData('Sorry no availability');
      else setResponseData(`$ ${res.data.rooms[0].rates[0].pricing.totalPrice}`);
    });
  }

  return (
    <div id="form_container">
      <DateRangeSelector setDate={setDate} />
      <select value={hotelCode} onChange={e => setHotel(e.target.value)}>
        {options}
      </select>
      <select id="passengers" value={passengers} onChange={e => setPassengers(e.target.value)}>
        {optionsPassengers}
      </select>
      <select id="rooms" value={rooms} onChange={e => setRooms(e.target.value)}>
        {optionsRooms}
      </select>

      <button id="search-button" type="button" onClick={() => fetchAvailability()}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
