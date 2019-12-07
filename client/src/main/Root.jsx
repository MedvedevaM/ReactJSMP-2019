import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import NotFound from './components/NotFound.jsx';
import './css/index.css';

const Root = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/search/:search?" component={App} />
        <Route exact path="/film/:id?" component={App} />
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = { Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({ url: PropTypes.string }),
  store: PropTypes.shape({ dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired }).isRequired };

export default hot(module)(Root);
