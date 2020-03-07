import React, { Component } from 'react';
import HomeList from '../HomeList/HomeList.js';
import Details from '../Details/Details.js';
import Edit from '../Edit/Edit.js';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <HomeList />
        <Details />
        <Edit />
      </div>
    );
  }
}

export default App;
