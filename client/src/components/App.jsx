import React, { Component } from 'react';
import { FunctionalComponent } from './FunctionalComponent.jsx';
import { Element } from './ReactCreateElement.jsx';
import ReactComponent from './ReactComponent.jsx';
import ReactPureComponent from './ReactPureComponent.jsx';

class App extends Component {
    render() {
        return (
            <>
                <h1>My React App</h1>
                <FunctionalComponent />
                <Element />
                <ReactComponent />
                <ReactPureComponent />
            </>
        );
    }
}

export default App;