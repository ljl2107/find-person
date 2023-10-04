import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Provider} from 'react-redux'
import {store} from "./redux/store";
import IndexRouter from "./router/IndexRouter";
function App() {

  return (
      // 123
      <Provider store={store}>
        <IndexRouter></IndexRouter>
      </Provider>
  );
}

export default App;
