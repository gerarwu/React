import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Runner from '../components/Runner/Runner';

class App extends Component {

  state = {
    runners : [ ]
  }

  addRunner = () => {
    let actualRunners = [...this.state.runners];
    actualRunners.push({
      number : this.generateNumber(),
      name : '',
      distance : 0      
    });
    this.setState({runners : actualRunners});    
  }

  deleteRunner = (indexRunner)=>{    
    if(window.confirm('Are you sure?')){
      let actualRunners = [...this.state.runners];    
      actualRunners.splice(indexRunner, 1);
      this.setState({runners : actualRunners});     
    } 
  }

  changeName = (event, indexRunner)=>{
    let actualRunners = [...this.state.runners];    
    actualRunners[indexRunner].name = event.target.value;
    this.setState({runners : actualRunners});     
  }

  addKm = (indexRunner) => {      
    let actualRunners = [...this.state.runners];    
    actualRunners[indexRunner].distance++;
    this.setState({runners : actualRunners});     
  }

  refreshNumber = (index) => {      
    let actualRunners = [...this.state.runners];    
    actualRunners[index].number = this.generateNumber();
    this.setState({runners : actualRunners}); 
  }

  generateNumber(){
    return Math.floor(Math.random()*50000);
  }

  render() {

    const styleButton = {
      margin : '20px 15px',
      display: 'block'
    }

    const runners = ( 
      this.state.runners.map((runner, index)=>{
        return  <Runner 
        key={index} 
        changeNumber={() => this.refreshNumber(index) } 
        addkm={()=>{this.addKm(index)}} 
        updateName={(event)=>this.changeName(event, index)}
        delete = { ()=>this.deleteRunner(index) }
        number={runner.number} 
        name={runner.name} 
        distance={runner.distance} />
      })
    );

    return (
      <div>
        <button onClick={this.addRunner} style={styleButton}>Add runner</button>
        {runners}        
      </div>
    );
  }
}

export default App;
