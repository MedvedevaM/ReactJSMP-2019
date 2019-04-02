import React, { Component } from 'react';
import { SearchPage } from './SearchPage.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <SearchPage />
            </ErrorBoundary>
        );
    }
}

export default App;