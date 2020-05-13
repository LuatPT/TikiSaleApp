import React from 'react';
import './App.css';
import SearchContainer from './containers/SearchContainer';
import MainContainer from './containers/MainContainer';
//Ok
const App = () => {
  return (
    <div className="divApp">
      <SearchContainer />
      <MainContainer />
    </div>
  );
}

export default App;
