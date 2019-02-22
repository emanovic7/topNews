import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
    document.getElementById('root')
  );


serviceWorker.register();
