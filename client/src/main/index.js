import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root.jsx';

import configureStore from './store';

const store = configureStore(window.PRELOADED_STATE);
store.runSaga();

const root = (
  <Root
    Router={BrowserRouter}
    store={store}
  />
);

const render = () => {
  hydrate(root, document.getElementById('app'));
};

render();
