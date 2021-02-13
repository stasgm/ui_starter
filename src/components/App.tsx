import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppStoreProvider } from '../store';

import './../assets/scss/App.scss';
import AppLayout from './Layout';
import Routes from '../routes';

const App = () => {
  return (
    <AppStoreProvider>
      <Router>
        <AppLayout>
          <Routes />
        </AppLayout>
      </Router>
    </AppStoreProvider>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
