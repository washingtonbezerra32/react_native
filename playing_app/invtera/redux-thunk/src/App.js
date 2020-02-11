import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import logger from "redux-logger"

import reducer from "./reducers/index";
import UserAgent from "./UserAgent";
import Info from "./info"

const store = createStore(
  reducer, 
  compose(applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
)

class App extends Component {

  render() {
    console.log('########## App')
    return (
      
      <Provider store={store}>
        
        <div className='App'>
          <br />
          <UserAgent />
        </div>
      </Provider>
    );
  }
}

export default App