// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

test('Renders the app', () => {
    const wrapper = rtl.render(<App />)
    wrapper.debug()
});

test('Render the heading', () => {
    const wrapper = rtl.render(<App />);
    const element = wrapper.getByText(/women's world cup players/i);
    expect(element).toBeVisible();
});

