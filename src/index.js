import { createStore } from "redux";

// reducer = (state, action) => newState;
const reducer = (state = 0, action) => {

  // if state - undefined, you need initialState 
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'R-INC':
      return state + action.payload;
    case 'DEC':
      return state - 1;
    case 'R-DEC':
      return state - action.payload;
    default:
      return state;  
    // if action.type - undefined, you need return state unchanged 
  }
}

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rInc = (payload) => ({ type: 'R-INC', payload });
const rDec = (payload) => ({ type: 'R-DEC', payload });



const store = createStore(reducer);

document.querySelector('#inc').addEventListener('click', () => store.dispatch(inc()));
document.querySelector('#dec').addEventListener('click', () => store.dispatch(dec()));

const payload = Math.floor(Math.random()*10+1);
document.querySelector('#r-inc')
  .addEventListener('click', () => {
    store.dispatch(rInc(payload));
  });

document.querySelector('#r-dec')
  .addEventListener('click', () => {
    store.dispatch(rDec(payload));
  });

const update = () => {
  document.querySelector('.counter').innerHTML = store.getState();
};

store.subscribe(update);

