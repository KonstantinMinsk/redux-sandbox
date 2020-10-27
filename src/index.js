import React from "react";
import ReactDOM from "react-dom";

import { 
  // bindActionCreators, 
  createStore } from "redux";

import reducer from "./reducer";
// import * as actions from './actions'
import App from "./components/app";
import { Provider } from 'react-redux'

const store = createStore(reducer);
// const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) => (...arg) => {
//     dispatch(creator(...arg));
// }
// const { inc, dec, rInc, rDec } = bindActionCreators(actions, dispatch);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root'));
