import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from '../src/store/reducers/index';
import data from '../src/data/data.json';

let initialStore = {
  flight: data.flight,
  airport: data.airport,
  arrivalTime: data.arivalTime,
  status: data.status
};

const store = createStore(reducer, initialStore);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);