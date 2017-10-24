import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import './index.css';


import { createStore } from 'redux'
import pushActions from './reducers/index.js';
import { Provider } from 'react-redux';

const store = createStore(pushActions);


ReactDOM.render(
        <Provider store={store}>
          <Root />
        </Provider>,
  document.getElementById('root')
);