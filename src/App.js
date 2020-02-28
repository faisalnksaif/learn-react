import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'
import NumberList from './components/NumberList/NumberList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <NumberList></NumberList>
      </div>
    );
  }

}


export default App;
