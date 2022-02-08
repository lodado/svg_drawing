import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import CanvasPage from '@Component/Drawing';
import rootStore from '@Redux/index';
import GlobalStyle from '@Global/globalStyle';

/*
  확장성을 고려 한 Route 처리
*/
export function AppRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CanvasPage />} />
      </Routes>
    </Router>
  );
}

export default function App(): JSX.Element {
  return (
    <Provider store={rootStore}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  );
}
