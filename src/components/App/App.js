import React, { Component } from 'react';
import HomeList from '../HomeList/HomeList.js';
import Details from '../Details/Details.js';
import Edit from '../Edit/Edit.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  // SET routes and routes to each component
  render() {
    return (
      <Router>
        <div className="App">
              <header className="App-header">
              <h1 className="App-title">Welcome to the Show</h1>
              {/* <nav>
                <ul>
                  <li><Link to="/">Movie List</Link></li>
                  <li><Link to="/details">Details</Link></li>
                  <li><Link to="/edit">Edit</Link></li>
                </ul>
              </nav> */}
                  </header>

            <div className="content-container">
              <Route exact path="/" component={HomeList} />
              <Route path="/details" component={Details} />
              <Route path="/edit" component={Edit} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
