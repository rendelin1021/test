import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Recruit from './components/recruit'
import {GlobalStyle} from "./reset";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <Recruit />
    </div>
  );
}

export default App;
