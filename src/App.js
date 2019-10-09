import React from 'react';
import Header from './comps/header/Header';
import Center from './comps/center/Center';
import './App.css';

function App() {
  return (
    <div>
      <Center component={Header} />
    </div>
  );
}

export default App;
