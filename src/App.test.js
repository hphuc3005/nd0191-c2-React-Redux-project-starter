import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initPollsData } from './store/pollsDataSlice';

test('Render App', () => {
  const initialState = { ...initPollsData };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const view = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(view).toMatchSnapshot()
  // eslint-disable-next-line testing-library/no-debugging-utils
  // screen.debug();
  const loginForm = screen.getByText(/Login/i);
  const navHome = screen.getByText(/Home/i);
  const navLeaderboard = screen.getByText(/Leaderboard/i);
  const navCreateNewPoll = screen.getByText(/Create New Poll/i);
  expect(loginForm).toBeInTheDocument();
  expect(navHome).toBeInTheDocument();
  expect(navLeaderboard).toBeInTheDocument();
  expect(navCreateNewPoll).toBeInTheDocument();
});
