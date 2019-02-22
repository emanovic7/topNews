import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import RootReducer from './reducers/RootReducer';

const store = createStore(RootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
    document.getElementById('root')
  );


serviceWorker.register();
