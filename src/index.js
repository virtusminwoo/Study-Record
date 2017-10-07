import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import './index.css';


// Redux 관련 불러오기
import { createStore } from 'redux'
import pushActions from './reducers/index.js';
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(pushActions);


ReactDOM.render(
        <Provider store={store}>
          <Root />
        </Provider>,
  document.getElementById('root')
);