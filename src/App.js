import React from 'react';
import './App.css';
import SearchContainer from './containers/SearchContainer';
import MainContainer from './containers/MainContainer';
import PagiContainer from './containers/PagiContainer';
//Ok
const App = () => {
  return (
    <div className="divApp">
      <SearchContainer />
      <PagiContainer />
      <MainContainer />
    </div>
  );
}

export default App;
