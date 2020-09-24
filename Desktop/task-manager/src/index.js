import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppContainer';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import taskManager from "./reducer/reducer/taskManager";
import { Provider } from 'react-redux'
import {loadState, saveState} from './localStorage'

const persistedState = loadState();
const store = createStore(
  taskManager,
  persistedState
);

store.subscribe(()=> {
  saveState({dashBoard: store.getState().dashBoard});
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
