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

    // To overwrite the ()=> binding in the child component and access this component's state
    this.handleOnChangeDropdown = this.handleOnChangeDropdown.bind(this);
  }
  
  handleOnChangeDropdown(event, name) {
    // Get current state
    const { available, breakdown, total } = this.state;
    console.log('name: ', name);
    console.log('event: ', event.target.value);
    this.setState({
      breakdown: {
        ...breakdown,
        [name]: event.target.value
      }
    });
    
    const totalBreakdown = Object.keys(this.state.breakdown).reduce((total, key) => {
      return total += this.state.breakdown[key];
    }, 0);

    console.log('totalBreakdown: ', totalBreakdown);

    // Formula for available
    // total - totalBreakdown + breakdown[name]
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
