import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import rootStore from '@Redux/index';
import App from './App';

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
