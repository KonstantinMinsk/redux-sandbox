import { createStore } from "redux";

// reducer = (state, action) => newState;
const reducer = (state = 0, action) => {

  // if state - undefined, you need initialState 
  switch (action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;  
    // if action.type - undefined, you need return state unchanged 
  }
}

const store = createStore(reducer);

// get state or initialState
console.log('getState():', store.getState());

// receive notifications of changes
store.subscribe(() => console.log(store.getState()));

// handle new action
store.dispatch( {type: 'INC'} );
store.dispatch( {type: 'INC'} );
store.dispatch( {type: 'INC'} );
store.dispatch( {type: 'INC'} );
store.dispatch( {type: 'INC'} );

