import React from 'react';
import './index.scss';

const Test = ({ text }) => <h1 className="test-component">{text || 'Insert Text Here'}</h1>;

export default Test;
