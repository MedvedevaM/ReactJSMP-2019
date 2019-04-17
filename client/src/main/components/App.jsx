import React from 'react';
import SearchPage from './SearchPage.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

const App = () => (
  <ErrorBoundary>
    <SearchPage />
  </ErrorBoundary>
);

export default App;
