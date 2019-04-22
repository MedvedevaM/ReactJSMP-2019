import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './store/reducers/selectors';
import App from './components/App.jsx';
import NotFound from './components/NotFound.jsx';
import './css/index.css';
import './css/font-awesome/css/font-awesome.min.css';

const store = createStore(appReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/search/:search?" component={App} />
        <Route exact path="/film/:id?" component={App} />
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
