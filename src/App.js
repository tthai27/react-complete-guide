import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tony', age: 31 },
      { name: 'Stella', age: 30 },
      { name: 'Bryan', age: 2 },
      { name: 'Madison', age: 4 }
    ]
  }
  
  switchNameHandler = () => {
    console.log("clicked");
    this.setState({
      persons: [
        { name: 'Tony', age: 32 },
        { name: 'Stella', age: 30 },
        { name: 'Bryan', age: 2 },
        { name: 'Madison', age: 4 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Hi Im</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name}  age={this.state.persons[0].age}/> onC
      </div>
    );
  }
}

export default App;
