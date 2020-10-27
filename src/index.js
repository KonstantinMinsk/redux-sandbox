import { createStore } from "redux";
import reducer from "./reducer";
import { inc, dec, rInc, rDec } from './actions'

const store = createStore(reducer);
const { dispatch } = store;

const payload = Math.floor(Math.random()*10+1);

const bindActionCreator = (creator, dispatch) => (...arg) => {
    dispatch(creator(...arg));
}

// const incDespatch = () => dispatch(inc());
const incDespatch = bindActionCreator(inc, dispatch);
const decDespatch = () => store.dispatch(dec());
// const rIncDespatch = (payload) => dispatch(rInc(payload));
const rIncDespatch = bindActionCreator(rInc, dispatch)
const rDecDespatch = (payload) => store.dispatch(rDec(payload));


document.querySelector('#inc').addEventListener('click', incDespatch);
document.querySelector('#dec').addEventListener('click', decDespatch);

document.querySelector('#r-inc').addEventListener('click', rIncDespatch(payload));

document.querySelector('#r-dec').addEventListener('click', () => {
  const payload = Math.floor(Math.random()*100+1);
  rDecDespatch(payload)
});

const update = () => {
  document.querySelector('.counter').innerHTML = store.getState();
};

store.subscribe(update);

