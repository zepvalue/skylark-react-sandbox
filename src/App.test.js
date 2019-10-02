import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import SearchForm from './components/SearchForm'

configure({ adapter: new Adapter() });

describe('React Unit Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders SearchForm without crashing', () => {
    const props = {list: []}
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders a div tag', () => {
    const wrapper = shallow(<App/>)
  })
});

describe('<App/>', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<App />);
  });
});