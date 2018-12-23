import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('/api')
      .then(res => {
        const persons = res.data[0].name;
        this.setState({ persons });
        console.log(persons);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {this.state.persons}
        </header>
      </div>
    );
  }
}

export default App;
