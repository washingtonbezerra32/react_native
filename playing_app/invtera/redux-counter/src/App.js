import React from 'react';
import Counter from "./Counter";
import DisplayCounter from "./DisplayCounter";
import Ola from "./ola";

import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import counterReducer from "./reducer";


//let store = createStore(counterReducer,
 // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger))

//const store = createStore(counterReducer)

const store = createStore(counterReducer, compose(applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

function App() {
  
  return (
    <Provider store={store}>
      <div className='App' >
        <Counter />
        <DisplayCounter />
        <Ola nome={'Washington Filho'} />


      </div>

    </Provider>

  );
}

export default App;
