import React, { Component } from 'react';
import HotelCard from './HotelCard.jsx';

class HotelList extends Component {
  render() {
    const { list } = this.props;
    const HotelListCards = list.map(el => <HotelCard hotel={el} key={el.code} />);
    return <>{HotelListCards}</>;
  }
}

export default HotelList;
