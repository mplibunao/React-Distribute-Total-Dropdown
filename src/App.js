import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DistributeTotalDropDown from "./DistributeTotalDropdown/";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 10,
      breakdown: {
        child: 0,
        adult: 0,
        infant: 0
      },
      available: {
        child: 10,
        adult: 10,
        infant: 10
      },
      names: ["child", "adult", "infant"]
    };
  }
  
  handleOnChangeDropdown(event, name) {
    console.log('name: ', name);
    console.log('event: ', event.target.value);
    //console.log('name: ', name);
    
  }

  /**
   * Name
   * Total
   * Breakdown
   * Available
   */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <DistributeTotalDropDown
            total={this.state.total}
            breakdown={this.state.breakdown}
            available={this.state.available}
            names={this.state.names}
            onChange={this.handleOnChangeDropdown}
          />
        </div>
      </div>
    );
  }
}

export default App;
