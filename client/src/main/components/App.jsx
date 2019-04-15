import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './../store/reducers/reducers';
import SearchPage from './SearchPage.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

const store = createStore(appReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <SearchPage />
    </ErrorBoundary>
  </Provider>
);

export default App;
