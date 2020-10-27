### Getting Started with Create React App
1. npx create-react-app redux-sandbox
2. npm install redux
3. Create fn reducer using vanilla JS 

### const store = createStore(reducer);

### Reducer only pure function
1. Возвращаеоме значение зависит только от аргументов (a ,b) => a > b ? a : b;
2. У ф-ции нет побочных эффектов (Ф-я не вызывает сервер, не имеет таймойтов, не работает с DOM). The function does not depend on external resources
### Create UI elements (buttons & counter)
1. store.dispatch() used to update state
2. store.subscribe() used to update UI elem (counter) 

### Any action can contain additional information
```
store.dispatch({ 
    type: 'R-DEC',
    payload: {
        name: 'Kostya',
        role: 'admin'
    } 
  })
```

### Create functions ActionCreator
```
const userLoggedIn = (name, role) => {
    return { type: 'USER_LOGGED_IN', name, role };
}
store.dispatch(userLoggedIn(name, role));
```

### Take out funcs reducer & ActionCreator in separate file reducer.js & actions.js
1. Create own fn bindActionCreator
```
const bindActionCreator = (creator, dispatch) => (...arg) => {
    dispatch(creator(...arg));
}
```
2. bindActionCreators() связывает funcs reducer & ActionCreator 
```
const { add, remove } = bindActionCreators(actions, dispatch)
```
bindActionCreators() - *создает действие action и отправляет его в fn reducer с помощью fn dispatch 
