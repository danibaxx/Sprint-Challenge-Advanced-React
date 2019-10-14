import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// afterEach(rtl.cleanup);

// test('Render the heading', () => {
//   const wrapper = rtl.render(<App />);
//   const element = wrapper.getByText(/womens world cup players /i);
//   expect(element).toBeVisible();
// })
