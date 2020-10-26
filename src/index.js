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

let counter = reducer(undefined, { });
console.log(counter);
counter = reducer(counter, { type: 'INC'});
console.log(counter);
counter = reducer(counter, { type: 'INC'});
console.log(counter);