import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import './index.css';


// Redux 관련 불러오기
import { createStore } from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(reducers);


ReactDOM.render(
        <Provider store={store}>
          <Root />
        </Provider>,
  document.getElementById('root')
);