import React from 'react';

const HotelCard = props => {
  const { name } = props.hotel;

  return <div className="card">{name}</div>;
};

export default HotelCard;
