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
export default reducer;