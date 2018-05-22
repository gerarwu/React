import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Runner from './Runner/Runner';

class App extends Component {
  render() {
    return (
      <Runner number= {Math.floor(Math.random()*5000)} name='Gerardo Muñoz' distance='0' />
    );
  }
}

export default App;
