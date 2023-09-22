import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Calendar } from 'antd';
function App() {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
      <Calendar onPanelChange={onPanelChange} />
  );
}

export default App;
