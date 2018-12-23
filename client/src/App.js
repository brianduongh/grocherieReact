import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => {
        const persons = res.data[0].nickName;
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
