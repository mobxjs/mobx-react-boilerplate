import React from 'react';
import { render } from 'react-dom';
import AppState from './AppState';
import App from './App';

const appState = new AppState();

render(
  <App appState={appState} />,
  document.getElementById('root')
);
