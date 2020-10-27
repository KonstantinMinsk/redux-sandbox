import { bindActionCreators, createStore } from "redux";
import reducer from "./reducer";
import * as actions from './actions'

const store = createStore(reducer);
const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) => (...arg) => {
//     dispatch(creator(...arg));
// }
const { inc, dec, rInc, rDec } = bindActionCreators(actions, dispatch)

document.querySelector('#inc').addEventListener('click', inc);
document.querySelector('#dec').addEventListener('click', dec);

document.querySelector('#r-inc').addEventListener('click', () => {
  const payload = Math.floor(Math.random()*10+1);
  rInc(payload);
});

document.querySelector('#r-dec').addEventListener('click', () => {
  const payload = Math.floor(Math.random()*10+1);
  rDec(payload);
});

const update = () => {
  document.querySelector('.counter').innerHTML = store.getState();
};

store.subscribe(update);

