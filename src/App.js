import React from 'react';
import Header from './comps/header/Header';
import ImageItem from './comps/image-item/ImageItem';
import imageUrl from './assets/shutterstock_407632243.jpg';
import imageUrl2 from './assets/shutterstock_696636346.jpg';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <ImageItem imageUrl={imageUrl} />
    </div>
  );
}

export default App;
