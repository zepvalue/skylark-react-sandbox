import React, { useState } from 'react';
import { mount, configure, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import renderer, { create } from 'react-test-renderer';
import mockAxios from 'axios';
import { act } from 'react-dom/test-utils';
import App from './App';
import DateRangeSelector from './components/DateRangeSelector.jsx';

import SearchForm from './components/SearchForm';

configure({ adapter: new Adapter() });

describe('React Unit Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Button Snapshot', () => {
    const component = renderer.create(<button />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('deep rendering without crashing', () => {
    const props = {
      list: [{ name: 'room1' }, { name: 'room2' }, { name: 'room3' }],
      setResponseData() {
        return 'data';
      },
    };
    const wrapper = shallow(<SearchForm {...props} />);
    expect(wrapper.find(DateRangeSelector).length).toEqual(1);
    expect(wrapper.find(<select />).length).toEqual(0);
  });

  test("default empty rooms if no data to map through", () => {
    const props = {
      list: [{ name: 'room1' }, { name: 'room2' }, { name: 'room3' }],
      setResponseData() {
        return 'data';
      },
    };
    const wrapper = shallow(<SearchForm {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  })
});
