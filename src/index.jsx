import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import '../assets/stylesheets/application.scss';
//import reducer
import carsReducer from "./reducers/cars_reducer";

//import containers
import CarsIndex from "./containers/cars_index";

//garage name
const garageName = `garage${Math.floor(10 + (Math.random() * 90))}`;
const garageNameReducer = (state = null) => state;

const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: garageNameReducer,
  cars: carsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
