import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios
      .get('https://api.github.com/users')
      .then(res => console.log(res.data));
  }
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <Users />
      </div>
    );
  }
}

export default App;
