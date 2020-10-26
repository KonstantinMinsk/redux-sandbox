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
