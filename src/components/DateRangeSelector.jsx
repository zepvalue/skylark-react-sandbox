import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

const DateRangeSelector = ({ setDate }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setfocusedInput] = useState();

  function handleDataChange({ startDate, endDate }) {
    const formatStartDate = moment(startDate).format('YYYY-MM-DD');
    const formatEndDate = moment(endDate).format('YYYY-MM-DD');
    setDate({ formatStartDate, formatEndDate });
    setStartDate(startDate);
    setEndDate(endDate);
  }

  function handleFocusChange(focusedInput) {
    setfocusedInput(focusedInput);
  }

  function isOutsideRange() {
    return false;
  }
  return (
    <DateRangePicker
      endDate={endDate}
      endDateId="endDate"
      focusedInput={focusedInput}
      isOutsideRange={() => isOutsideRange()}
      onDatesChange={e => handleDataChange(e)}
      onFocusChange={e => handleFocusChange(e)}
      startDate={startDate}
      startDateId="startDate"
    />
  );
};

export default DateRangeSelector;
