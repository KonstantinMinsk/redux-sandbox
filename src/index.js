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

const store = createStore(reducer);

document.querySelector('#inc').addEventListener('click', () => store.dispatch({ type: 'INC' }));
document.querySelector('#dec').addEventListener('click', () => store.dispatch({ type: 'DEC' }));
document.querySelector('#r-inc')
  .addEventListener('click', () => store.dispatch({ 
    type: 'R-INC',
    payload: Math.floor(Math.random()*10+1)
   }));
document.querySelector('#r-dec')
  .addEventListener('click', () => store.dispatch({ 
    type: 'R-DEC',
    payload: Math.floor(Math.random()*10+1) 
  }));

const update = () => {
  document.querySelector('.counter').innerHTML = store.getState();
};
store.subscribe(update);

