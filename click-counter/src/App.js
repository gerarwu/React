import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Runner from './Runner/Runner';

class App extends Component {

  state = {
    number : this.generateNumber(),
    name : 'Gerardo Muñoz',
    distance : 0
  }

  addKm = () => {    
    this.state.distance++;
    this.setState({distance:this.state.distance});
  }

  refreshNumber = () => {
    this.setState({number : this.generateNumber()})
  }

  generateNumber(){
    return Math.floor(Math.random()*50000);
  }

  render() {
    return (
      <Runner changeNumber={this.refreshNumber} addkm={this.addKm} number={this.state.number} name={this.state.name} distance={this.state.distance} />
    );
  }
}

export default App;
