import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import SearchForm from './components/SearchForm'

configure({ adapter: new Adapter() });

describe('React Unit Tests', () => {
  it('renders SearchForm without crashing', () => {
    const props = {list: []}
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});